/* 866八件套 · 数据校验
   1. 结构与字段：模块/卡片必填字段、freq 2-5、tier 1-3、id 唯一
   2. cloze 卡：mask 占位符 {{n}} 与 holes 一一对应（恰好覆盖 1..n）
   3. 占位符不得嵌进 \frac{}{} 等花括号（出现 {{{n}}} 即判失败）
   4. 用 vendor/katex.min.js 逐条渲染全部 tex，零错误才过 */
const fs = require("fs");
const path = require("path");

global.window = {};
eval(fs.readFileSync(path.join(__dirname, "data.js"), "utf8"));
const DATA = global.window.MATH2_DATA;

let katex = null;
try {
  katex = require(path.join(__dirname, "vendor", "katex.min.js"));
} catch (e) {
  console.error("无法加载 vendor/katex.min.js：", e.message);
  process.exit(1);
}

let errors = 0;
let checked = 0;
let texChecked = 0;
const err = (where, msg) => {
  errors += 1;
  console.error(`✗ [${where}] ${msg}`);
};

if (!DATA || !Array.isArray(DATA.modules)) {
  console.error("data.js 未定义 window.MATH2_DATA.modules");
  process.exit(1);
}

const seenCardIds = new Set();
const seenModuleIds = new Set();

function checkTex(where, src, display) {
  try {
    katex.renderToString(src, { displayMode: !!display, throwOnError: true });
    texChecked += 1;
  } catch (e) {
    err(where, `KaTeX 渲染失败: ${JSON.stringify(src)} → ${e.message}`);
  }
}

function checkNestedPlaceholder(where, line) {
  if (/\{\{\{\d+\}\}/.test(line) || /\{\{\d+\}\}\}/.test(line)) {
    err(where, `占位符嵌进了花括号（禁止 \\frac{{{1}}} 这类写法）: ${line}`);
  }
}

function checkCloze(mod, c) {
  const where = `${mod.id}/${c.id}`;
  if (!Array.isArray(c.reveal) || !c.reveal.length) err(where, "reveal 为空");
  c.reveal.forEach((b, i) => {
    if (typeof b.tex !== "string" || !b.tex) err(where, `reveal[${i}].tex 缺失`);
  });
  if (!Array.isArray(c.holes)) err(where, "holes 不是数组");
  if (Array.isArray(c.mask) && c.mask.length) {
    const used = new Set();
    for (const line of c.mask) {
      checkNestedPlaceholder(where, line);
      const re = /\{\{(\d+)\}\}/g;
      let m;
      while ((m = re.exec(line))) used.add(Number(m[1]));
    }
    const n = c.holes.length;
    for (let i = 1; i <= n; i++) {
      if (!used.has(i)) err(where, `holes[${i}] 在 mask 中没有对应占位符 {{${i}}}`);
    }
    for (const i of used) {
      if (i < 1 || i > n) err(where, `mask 占位符 {{${i}}} 超出 holes 范围（共 ${n} 空）`);
    }
  }
  if (c.plain) return;
  c.reveal.forEach((b) => checkTex(where, b.tex, b.display !== false));
  (c.holes || []).forEach((h) => checkTex(where + "/holes", h, false));
  (c.mask || []).forEach((line) => {
    for (const part of String(line).split(/(\{\{\d+\}\})/g)) {
      if (part && !/^\{\{\d+\}\}$/.test(part)) checkTex(where + "/mask", part, false);
    }
  });
}

function checkExample(mod, c) {
  const where = `${mod.id}/${c.id}`;
  if (typeof c.problem !== "string" || !c.problem) err(where, "problem 缺失");
  if (typeof c.idea !== "string" || !c.idea) err(where, "idea 缺失");
  if (!Array.isArray(c.steps) || !c.steps.length) err(where, "steps 为空");
  (c.steps || []).forEach((s, i) => {
    if (typeof s.tex !== "string" || !s.tex) err(where, `steps[${i}].tex 缺失`);
  });
  if (typeof c.answer !== "string" || !c.answer) err(where, "answer 缺失");
  if (c.plain) return;
  checkTex(where + "/problem", c.problem, true);
  (c.steps || []).forEach((s) => checkTex(where + "/steps", s.tex, true));
  checkTex(where + "/answer", c.answer, false);
}

let totalCards = 0;
for (const m of DATA.modules) {
  checked += 1;
  if (!m.id || seenModuleIds.has(m.id)) err(m.id || "?", "模块 id 缺失或重复");
  seenModuleIds.add(m.id);
  for (const f of ["no", "name", "blurb", "exam"]) {
    if (typeof m[f] !== "string" || !m[f]) err(m.id, `模块字段 ${f} 缺失`);
  }
  if (!Array.isArray(m.cards)) err(m.id, "cards 不是数组");
  if (!m.virtual && !m.cards.length) err(m.id, "非聚合模块没有卡片");
  for (const c of m.cards) {
    totalCards += 1;
    const where = `${m.id}/${c.id || "?"}`;
    if (!c.id || seenCardIds.has(c.id)) err(where, "卡片 id 缺失或重复");
    seenCardIds.add(c.id);
    if (!["cloze", "example"].includes(c.kind)) err(where, `kind 非法: ${c.kind}`);
    if (!(c.freq >= 2 && c.freq <= 5)) err(where, `freq 须为 2-5: ${c.freq}`);
    if (![1, 2, 3].includes(c.tier)) err(where, `tier 须为 1-3: ${c.tier}`);
    if (typeof c.title !== "string" || !c.title) err(where, "title 缺失");
    if (c.kind === "cloze") checkCloze(m, c);
    else if (c.kind === "example") checkExample(m, c);
  }
}

console.log(`模块 ${checked} 个，卡片 ${totalCards} 张，KaTeX 渲染 ${texChecked} 条`);
if (errors) {
  console.error(`校验失败：${errors} 个问题`);
  process.exit(1);
}
console.log("✓ 全部通过");
