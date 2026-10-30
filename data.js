/* 866八件套 · 卡片数据（公式 + 挖空 + 例题共用）
   福州大学电子信息考研 866《信号与系统》
   freq: 考频 2-5（★越多越常考；依据福大 866 回忆版真题 + 郑君里体系全国重点）
   tier: 难度档 1低 2中 3高
   口径：以福大研究生院当年公布大纲为准；拿不准的在 hint/skip 中注明。
   约定：占位符 {{n}} 必须独立出现，不嵌进 \frac{}{} 的花括号；
         信号直立体 \mathrm{u}(t)、\varepsilon(t)、\delta(t)、\mathrm{Sa}(t)、\mathrm{sgn}(t)；
         变换对用 \leftrightarrow，卷积用 * */
window.MATH2_DATA = {
  title: "866八件套",
  subtitle: "福州大学电子信息 · 信号与系统",
  skip: "随机信号分析、状态变量深入、DFT/FFT 计算细节（大纲若列再补）",
  modules: [
    {
      id: "basic",
      no: "一",
      name: "信号与系统基础",
      blurb: "分类 · 周期 · 冲激阶跃 · 六性",
      exam: "填空选择",
      cards: [
        {
          id: "basic-class",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "信号分类 · 能量与功率",
          hint: "先判连续/离散，再算能量、功率谁有限。",
          reveal: [
            { tex: "E=\\int_{-\\infty}^{\\infty}|f(t)|^{2}\\,dt,\\quad P=\\lim_{T\\to\\infty}\\frac{1}{2T}\\int_{-T}^{T}|f(t)|^{2}\\,dt", display: true },
            { tex: "0<E<\\infty\\Rightarrow\\text{能量信号（}P=0\\text{）};\\quad 0<P<\\infty\\Rightarrow\\text{功率信号（}E=\\infty\\text{）}", display: true }
          ],
          holes: [
            "\\int_{-\\infty}^{\\infty}|f(t)|^{2}\\,dt",
            "\\lim_{T\\to\\infty}\\dfrac{1}{2T}\\int_{-T}^{T}|f(t)|^{2}\\,dt",
            "P=0",
            "E=\\infty"
          ],
          mask: [
            "E={{1}},\\quad P={{2}}",
            "\\text{能量信号}\\Rightarrow {{3}},\\quad \\text{功率信号}\\Rightarrow {{4}}"
          ],
          notes: [
            "有限时宽脉冲一般是能量信号；周期信号、直流一般是功率信号。",
            "离散：E=Σ|f[n]|²，P=lim (1/(2N+1)) Σ_{-N}^{N} |f[n]|²。"
          ]
        },
        {
          id: "basic-period",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "周期信号判定",
          hint: "连续看最小正周期；离散周期必须是整数。两信号之和要周期可比。",
          reveal: [
            { tex: "f(t+T)=f(t)\\ (T>0)\\Rightarrow\\text{周期},\\ T_{0}=\\min T", display: true },
            { tex: "e^{j\\omega t}\\text{ 的周期 }T=\\dfrac{2\\pi}{|\\omega|};\\quad e^{j\\Omega n}\\text{ 周期}\\iff \\dfrac{\\Omega}{2\\pi}\\text{ 为有理数}", display: true }
          ],
          holes: [
            "f(t+T)=f(t)",
            "\\dfrac{2\\pi}{|\\omega|}",
            "\\dfrac{\\Omega}{2\\pi}",
            "\\text{有理数}"
          ],
          mask: [
            "\\text{连续周期：}{{1}}\\ (T>0)",
            "e^{j\\omega t}\\text{ 周期 }{{2}}",
            "e^{j\\Omega n}\\text{ 周期}\\iff {{3}}\\text{ 为 }{{4}}"
          ],
          notes: [
            "两周期信号之和仍周期 ⇔ T1/T2 为有理数，公共周期取最小公倍数。",
            "离散周期 N 必须是正整数；不是每个正弦序列都周期。"
          ]
        },
        {
          id: "basic-delta-sift",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "冲激筛选与抽样性质",
          hint: "δ 只在 0 点有贡献；乘积先把函数钉在冲激所在时刻。",
          reveal: [
            { tex: "\\int_{-\\infty}^{\\infty}\\delta(t)\\,dt=1,\\quad f(t)\\delta(t-t_{0})=f(t_{0})\\delta(t-t_{0})", display: true },
            { tex: "\\int_{-\\infty}^{\\infty}f(t)\\delta(t-t_{0})\\,dt=f(t_{0})", display: true }
          ],
          holes: [
            "1",
            "f(t_{0})\\delta(t-t_{0})",
            "f(t_{0})"
          ],
          mask: [
            "\\int \\delta(t)\\,dt={{1}}",
            "f(t)\\delta(t-t_{0})={{2}}",
            "\\int f(t)\\delta(t-t_{0})\\,dt={{3}}"
          ],
          notes: [
            "δ(t) 是偶函数：δ(-t)=δ(t)。",
            "积分限必须盖住冲激所在点，否则为 0。"
          ]
        },
        {
          id: "basic-delta-scale",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "冲激尺度变换 δ(at)",
          hint: "压缩冲激面积变成 1/|a|。绝对值不能丢——这是填空送分也最容易丢分的地方。",
          reveal: [
            { tex: "\\delta(at)=\\dfrac{1}{|a|}\\delta(t)\\quad(a\\neq 0)", display: true },
            { tex: "\\delta(-t)=\\delta(t)", display: true }
          ],
          holes: [
            "\\dfrac{1}{|a|}\\delta(t)",
            "\\delta(t)"
          ],
          mask: [
            "\\delta(at)={{1}}",
            "\\delta(-t)={{2}}"
          ],
          warning: "δ(2t)=δ(t)/2，不是 2δ(t)。务必带绝对值。"
        },
        {
          id: "basic-step",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "阶跃与冲激的关系",
          hint: "阶跃是冲激的积分，冲激是阶跃的导数。郑君里用 ε(t)，部分资料写 u(t)，同一信号。",
          reveal: [
            { tex: "\\varepsilon(t)=\\int_{-\\infty}^{t}\\delta(\\tau)\\,d\\tau,\\quad \\delta(t)=\\dfrac{d\\varepsilon(t)}{dt}", display: true },
            { tex: "\\varepsilon(t)=\\begin{cases}1,&t>0\\\\0,&t<0\\end{cases},\\quad \\mathrm{sgn}(t)=2\\varepsilon(t)-1", display: true }
          ],
          holes: [
            "\\int_{-\\infty}^{t}\\delta(\\tau)\\,d\\tau",
            "\\dfrac{d\\varepsilon(t)}{dt}",
            "2\\varepsilon(t)-1"
          ],
          mask: [
            "\\varepsilon(t)={{1}}",
            "\\delta(t)={{2}}",
            "\\mathrm{sgn}(t)={{3}}"
          ],
          notes: [
            "ε(0) 常取 1/2 或 1，卷积、变换里一般不影响。",
            "离散：ε[n] 在 n≥0 为 1；δ[n]=ε[n]-ε[n-1]。"
          ]
        },
        {
          id: "basic-six",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "系统六性判别",
          hint: "线性看叠加；时不变看延迟能否提出；因果看是否用未来；稳定看有界输入是否有界输出。",
          reveal: [
            { tex: "\\text{线性：}T\\{af_{1}+bf_{2}\\}=aT\\{f_{1}\\}+bT\\{f_{2}\\}", display: true },
            { tex: "\\text{时不变：}T\\{f(t-t_{0})\\}=y(t-t_{0});\\quad \\text{因果：}y(t_{0})\\text{ 只依赖 }t\\le t_{0}\\text{ 的输入}", display: true },
            { tex: "\\text{BIBO 稳定：}|x|\\le M\\Rightarrow|y|\\le N;\\quad \\text{记忆：}y(t)\\text{ 依赖非 }t\\text{ 时刻的 }x", display: true }
          ],
          holes: [
            "aT\\{f_{1}\\}+bT\\{f_{2}\\}",
            "y(t-t_{0})",
            "t\\le t_{0}",
            "|y|\\le N"
          ],
          mask: [
            "\\text{线性：}T\\{af_{1}+bf_{2}\\}={{1}}",
            "\\text{时不变：}T\\{f(t-t_{0})\\}={{2}}",
            "\\text{因果：}y(t_{0})\\text{ 只依赖 }{{3}}",
            "\\text{稳定：}|x|\\le M\\Rightarrow {{4}}"
          ],
          notes: [
            "无记忆 ⇒ 一定因果；有记忆不一定非因果。",
            "可逆：存在逆系统能从 y 唯一恢复 x。"
          ],
          warning: "乘法器 y=t x(t) 线性但时变；y=x(t)cos ωt 同样时变。"
        },
        {
          id: "basic-lti-crit",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "LTI 因果与稳定判据",
          hint: "全部压到冲激响应 h 上：因果看支撑，稳定看绝对可积。",
          reveal: [
            { tex: "\\text{因果}\\iff h(t)=0\\ (t<0);\\quad \\text{离散 }h[n]=0\\ (n<0)", display: true },
            { tex: "\\text{BIBO 稳定}\\iff \\int_{-\\infty}^{\\infty}|h(t)|\\,dt<\\infty;\\quad \\sum_{n}|h[n]|<\\infty", display: true }
          ],
          holes: [
            "h(t)=0\\ (t<0)",
            "\\int_{-\\infty}^{\\infty}|h(t)|\\,dt<\\infty",
            "\\sum_{n}|h[n]|<\\infty"
          ],
          mask: [
            "\\text{因果}\\iff {{1}}",
            "\\text{连续稳定}\\iff {{2}}",
            "\\text{离散稳定}\\iff {{3}}"
          ],
          notes: [
            "因果且稳定：连续系统极点在左半开平面；离散系统极点在单位圆内。"
          ]
        },
        {
          id: "basic-even",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "奇偶分解与直流",
          hint: "偶部用平均，奇部用差；直流就是平均值。",
          reveal: [
            { tex: "f_{e}(t)=\\dfrac{f(t)+f(-t)}{2},\\quad f_{o}(t)=\\dfrac{f(t)-f(-t)}{2}", display: true },
            { tex: "\\delta(t)\\text{ 偶},\\ \\varepsilon(t)=\\tfrac12+\\tfrac12\\mathrm{sgn}(t)", display: true }
          ],
          holes: [
            "\\dfrac{f(t)+f(-t)}{2}",
            "\\dfrac{f(t)-f(-t)}{2}",
            "\\text{偶}"
          ],
          mask: [
            "f_{e}(t)={{1}},\\quad f_{o}(t)={{2}}",
            "\\delta(t)\\text{ 为 }{{3}}\\text{函数}"
          ],
          notes: [
            "偶函数的 FS 只含余弦；奇函数只含正弦。FT 亦有对应的实偶/虚奇。"
          ]
        },
        {
          id: "basic-ex",
          kind: "example",
          freq: 5,
          tier: 2,
          title: "判断 y(t)=t x(t) 的性质",
          problem: "\\text{系统 }y(t)=t\\,x(t)\\text{。判断线性、时不变、因果、BIBO 稳定。}",
          idea: "线性看叠加；时不变比较「先延后过系统」与「先过系统再延」；因果看是否用未来；稳定看 |t| 能否把有界输入放大到无穷。",
          steps: [
            { tex: "\\text{线性：}t(\\alpha x_{1}+\\beta x_{2})=\\alpha(t x_{1})+\\beta(t x_{2})\\Rightarrow\\text{线性}" },
            { tex: "\\text{时不变：}T\\{x(t-t_{0})\\}=t x(t-t_{0}),\\ y(t-t_{0})=(t-t_{0})x(t-t_{0})\\Rightarrow\\text{时变}" },
            { tex: "\\text{因果：}y(t_{0})\\text{ 只依赖 }x(t_{0})\\Rightarrow\\text{因果（无记忆）}" },
            { tex: "\\text{稳定：}|x|\\le M\\Rightarrow|y|=|t|M\\text{ 可任意大}\\Rightarrow\\text{不稳定}" }
          ],
          answer: "\\text{线性、时变、因果、不稳定}"
        }
      ]
    },
    {
      id: "lti",
      no: "二",
      name: "LTI 时域分析",
      blurb: "卷积 · 冲激响应 · 零输入零状态",
      exam: "计算大题",
      cards: [
        {
          id: "lti-conv-def",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "卷积积分定义",
          hint: "零状态响应就是输入与 h 的卷积。积分变量是 τ，t 当参数。",
          reveal: [
            { tex: "y(t)=x(t)*h(t)=\\int_{-\\infty}^{\\infty}x(\\tau)h(t-\\tau)\\,d\\tau", display: true },
            { tex: "y[n]=x[n]*h[n]=\\sum_{k=-\\infty}^{\\infty}x[k]h[n-k]", display: true }
          ],
          holes: [
            "\\int_{-\\infty}^{\\infty}x(\\tau)h(t-\\tau)\\,d\\tau",
            "\\sum_{k=-\\infty}^{\\infty}x[k]h[n-k]"
          ],
          mask: [
            "x(t)*h(t)={{1}}",
            "x[n]*h[n]={{2}}"
          ],
          notes: [
            "被积函数是「翻转再平移」后的重叠。",
            "若 x 持续 T1、h 持续 T2，则 y 持续 T1+T2。"
          ]
        },
        {
          id: "lti-conv-prop",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "卷积性质",
          hint: "交换、结合、分配；与 δ 卷积等于平移。",
          reveal: [
            { tex: "x*h=h*x,\\quad (x*h)*g=x*(h*g),\\quad x*(h_{1}+h_{2})=x*h_{1}+x*h_{2}", display: true },
            { tex: "x(t)*\\delta(t-t_{0})=x(t-t_{0}),\\quad x(t)*\\varepsilon(t)=\\int_{-\\infty}^{t}x(\\tau)\\,d\\tau", display: true }
          ],
          holes: [
            "h*x",
            "x(t-t_{0})",
            "\\int_{-\\infty}^{t}x(\\tau)\\,d\\tau"
          ],
          mask: [
            "x*h={{1}}",
            "x(t)*\\delta(t-t_{0})={{2}}",
            "x(t)*\\varepsilon(t)={{3}}"
          ],
          notes: [
            "微分：d/dt (x*h)=x'*h=x*h'。",
            "x(t)*δ'(t)=x'(t)。"
          ]
        },
        {
          id: "lti-conv-graph",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "图解卷积四步",
          hint: "866 计算题几乎年年有。翻转的是 h 还是 x 结果一样，关键是重叠区间。",
          reveal: [
            { tex: "\\text{翻转 }h(\\tau)\\to h(-\\tau)\\ \\to\\ \\text{平移 }h(t-\\tau)\\ \\to\\ \\text{相乘}\\ \\to\\ \\text{对 }\\tau\\text{ 积分}", display: true },
            { tex: "\\text{分段点 = 两波形端点相加；重叠长度随 }t\\text{ 线性变化} \\Rightarrow\\text{折线/抛物线}", display: true }
          ],
          holes: [
            "h(-\\tau)",
            "h(t-\\tau)",
            "\\text{积分}",
            "\\text{端点相加}"
          ],
          mask: [
            "\\text{翻转 }{{1}}\\to\\text{平移 }{{2}}\\to\\text{相乘}\\to {{3}}",
            "\\text{分段点来自两波形 }{{4}}"
          ],
          notes: [
            "因果系统 t<0 若 x 也因果，则积分限变成 0 到 t。",
            "两门函数卷积是三角波；门与指数卷积是「充电」曲线。"
          ]
        },
        {
          id: "lti-h-s",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "冲激响应与阶跃响应",
          hint: "阶跃响应是 h 的积分；h 是阶跃响应的导数。",
          reveal: [
            { tex: "s(t)=h(t)*\\varepsilon(t)=\\int_{-\\infty}^{t}h(\\tau)\\,d\\tau,\\quad h(t)=\\dfrac{ds(t)}{dt}", display: true },
            { tex: "y_{\\mathrm{zs}}(t)=x(t)*h(t)", display: true }
          ],
          holes: [
            "\\int_{-\\infty}^{t}h(\\tau)\\,d\\tau",
            "\\dfrac{ds(t)}{dt}",
            "x(t)*h(t)"
          ],
          mask: [
            "s(t)={{1}}",
            "h(t)={{2}}",
            "y_{\\mathrm{zs}}(t)={{3}}"
          ],
          notes: [
            "h(t) 完全刻画 LTI。求 h：令 x=δ，或由微分方程/系统函数反变换。"
          ]
        },
        {
          id: "lti-zi-zs",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "零输入 / 零状态 / 全响应",
          hint: "全响应一分为二：初始储能 vs 外加激励。",
          reveal: [
            { tex: "y=y_{\\mathrm{zi}}+y_{\\mathrm{zs}}", display: true },
            { tex: "y_{\\mathrm{zi}}:\\ x=0\\text{ 只由初始状态};\\quad y_{\\mathrm{zs}}:\\text{ 零初始下 }x*h", display: true },
            { tex: "\\text{自由响应 = 齐次解};\\quad \\text{强迫响应 = 特解}", display: true }
          ],
          holes: [
            "y_{\\mathrm{zi}}+y_{\\mathrm{zs}}",
            "x=0",
            "x*h",
            "\\text{齐次解}",
            "\\text{特解}"
          ],
          mask: [
            "y={{1}}",
            "y_{\\mathrm{zi}}:\\ {{2}}\\text{ 只留状态}",
            "y_{\\mathrm{zs}}={{3}}",
            "\\text{自由响应}={{4}},\\quad \\text{强迫响应}={{5}}"
          ],
          warning: "零输入 ≠ 自由响应。稳态建立后，自由响应里的暂态项会消失，但零输入可能含稳态（如虚轴极点）。"
        },
        {
          id: "lti-ode",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "微分方程经典解",
          hint: "齐次特征根写通解，特解按激励形式待定，最后用初始条件定系数。",
          reveal: [
            { tex: "\\sum_{k=0}^{n}a_{k}y^{(k)}(t)=\\sum_{m=0}^{M}b_{m}x^{(m)}(t)", display: true },
            { tex: "\\text{特征方程 }\\sum a_{k}r^{k}=0\\Rightarrow y_{h}=\\sum C_{i}e^{r_{i}t}", display: true }
          ],
          holes: [
            "\\sum a_{k}r^{k}=0",
            "C_{i}e^{r_{i}t}",
            "(C_{1}+C_{2}t)e^{rt}",
            "e^{\\alpha t}(A\\cos\\beta t+B\\sin\\beta t)"
          ],
          mask: [
            "\\text{特征方程 }{{1}}",
            "\\text{单实根：}y_{h}={{2}}",
            "\\text{重根：}y_{h}={{3}}",
            "\\alpha\\pm j\\beta:\\ y_{h}={{4}}"
          ],
          notes: [
            "因果 LTI 也可用 H(s)=B(s)/A(s)，再反变换得 h(t)。",
            "差分方程同样：特征根 r，通解 C r^n。"
          ]
        },
        {
          id: "lti-conv-sum",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "卷积和与离散 LTI",
          hint: "序列卷积用求和；有限长序列手算列竖式或画点。",
          reveal: [
            { tex: "y[n]=\\sum_{k}x[k]h[n-k],\\quad x[n]*\\delta[n-n_{0}]=x[n-n_{0}]", display: true },
            { tex: "\\varepsilon[n]*\\varepsilon[n]=(n+1)\\varepsilon[n]", display: true }
          ],
          holes: [
            "x[n-n_{0}]",
            "(n+1)\\varepsilon[n]",
            "n_{1}+n_{2}-1"
          ],
          mask: [
            "x[n]*\\delta[n-n_{0}]={{1}}",
            "\\varepsilon[n]*\\varepsilon[n]={{2}}",
            "\\text{长 }n_{1}\\text{ 与长 }n_{2}\\text{ 序列卷积长 }{{3}}"
          ],
          notes: [
            "866 差分方程可用迭代、经典解或 z 变换，时域卷积和是定义本身。"
          ]
        },
        {
          id: "lti-ex-gate",
          kind: "example",
          freq: 5,
          tier: 2,
          title: "两门函数卷积",
          problem: "g_{1}(t)=\\begin{cases}1,&|t|<1/2\\\\0,&|t|>1/2\\end{cases}\\quad\\text{求 }g_{1}(t)*g_{1}(t)",
          idea: "图解：翻转后平移，重叠长度就是卷积值。两段宽 1 的门，结果是底 2、高 1 的三角波。",
          steps: [
            { tex: "\\text{重叠区间 }|t|<1\\text{；}|t|\\ge 1\\text{ 时不重叠，卷积为 }0" },
            { tex: "|t|<1\\text{ 时重叠长度 }=1-|t|" },
            { tex: "y(t)=(1-|t|)\\quad(|t|<1);\\quad y(t)=0\\quad(|t|\\ge 1)" }
          ],
          answer: "y(t)=\\begin{cases}1-|t|,&|t|<1\\\\0,&|t|\\ge 1\\end{cases}"
        },
        {
          id: "lti-ex-exp",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "阶跃卷积得斜坡",
          problem: "\\text{求 }\\varepsilon(t)*\\varepsilon(t)",
          idea: "因果 × 因果，积分限 0 到 t（t>0）。",
          steps: [
            { tex: "\\varepsilon(t)*\\varepsilon(t)=\\int_{-\\infty}^{\\infty}\\varepsilon(\\tau)\\varepsilon(t-\\tau)\\,d\\tau" },
            { tex: "t>0:\\ \\int_{0}^{t}1\\,d\\tau=t;\\quad t<0:\\ 0" },
            { tex: "\\varepsilon(t)*\\varepsilon(t)=t\\,\\varepsilon(t)" }
          ],
          answer: "t\\,\\varepsilon(t)"
        }
      ]
    },
    {
      id: "fs",
      no: "三",
      name: "傅里叶级数",
      blurb: "指数/三角系数 · 对称性 · 帕塞瓦尔",
      exam: "填空计算",
      cards: [
        {
          id: "fs-exp",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "指数形式傅里叶级数",
          hint: "周期 T，基波 ω0=2π/T。系数是在一个周期上的平均。",
          reveal: [
            { tex: "f(t)=\\sum_{n=-\\infty}^{\\infty}F_{n}e^{jn\\omega_{0}t},\\quad \\omega_{0}=\\dfrac{2\\pi}{T}", display: true },
            { tex: "F_{n}=\\dfrac{1}{T}\\int_{T}f(t)e^{-jn\\omega_{0}t}\\,dt", display: true }
          ],
          holes: [
            "F_{n}e^{jn\\omega_{0}t}",
            "\\dfrac{2\\pi}{T}",
            "\\dfrac{1}{T}\\int_{T}f(t)e^{-jn\\omega_{0}t}\\,dt"
          ],
          mask: [
            "f(t)=\\sum {{1}},\\quad \\omega_{0}={{2}}",
            "F_{n}={{3}}"
          ],
          notes: [
            "F_{-n}=F_n^*（实信号）。|F_n| 幅度谱，arg F_n 相位谱，都是离散谱线。"
          ]
        },
        {
          id: "fs-tri",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "三角形式傅里叶级数",
          hint: "a0 是直流；an 余弦、bn 正弦。积分都在一个周期上。",
          reveal: [
            { tex: "f(t)=\\dfrac{a_{0}}{2}+\\sum_{n=1}^{\\infty}(a_{n}\\cos n\\omega_{0}t+b_{n}\\sin n\\omega_{0}t)", display: true },
            { tex: "a_{n}=\\dfrac{2}{T}\\int_{T}f(t)\\cos n\\omega_{0}t\\,dt,\\quad b_{n}=\\dfrac{2}{T}\\int_{T}f(t)\\sin n\\omega_{0}t\\,dt", display: true }
          ],
          holes: [
            "\\dfrac{a_{0}}{2}",
            "a_{n}\\cos n\\omega_{0}t+b_{n}\\sin n\\omega_{0}t",
            "\\dfrac{2}{T}\\int_{T}f\\cos n\\omega_{0}t\\,dt",
            "\\dfrac{2}{T}\\int_{T}f\\sin n\\omega_{0}t\\,dt"
          ],
          mask: [
            "f(t)={{1}}+\\sum({{2}})",
            "a_{n}={{3}}",
            "b_{n}={{4}}"
          ],
          notes: [
            "有的书把直流写成 a0，不除以 2。默写时跟所用教材一致，866 跟郑君里：直流是 a0/2。"
          ]
        },
        {
          id: "fs-convert",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "指数系数与三角系数互换",
          hint: "复数振幅拆成实部余弦、虚部正弦。",
          reveal: [
            { tex: "F_{0}=\\dfrac{a_{0}}{2},\\quad F_{n}=\\dfrac{a_{n}-jb_{n}}{2}\\ (n\\ge 1)", display: true },
            { tex: "a_{n}=2\\mathrm{Re}F_{n},\\quad b_{n}=-2\\mathrm{Im}F_{n}", display: true }
          ],
          holes: [
            "\\dfrac{a_{0}}{2}",
            "\\dfrac{a_{n}-jb_{n}}{2}",
            "2\\mathrm{Re}F_{n}",
            "-2\\mathrm{Im}F_{n}"
          ],
          mask: [
            "F_{0}={{1}},\\quad F_{n}={{2}}",
            "a_{n}={{3}},\\quad b_{n}={{4}}"
          ]
        },
        {
          id: "fs-sym",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "对称性简化系数",
          hint: "先看奇偶，再看半波。能砍掉一半积分就砍。",
          reveal: [
            { tex: "\\text{偶：}b_{n}=0\\text{（只余余弦）};\\quad \\text{奇：}a_{n}=0\\text{（只余正弦）}", display: true },
            { tex: "\\text{半波对称 }f(t+T/2)=-f(t)\\Rightarrow\\text{只含奇次谐波}", display: true }
          ],
          holes: [
            "b_{n}=0",
            "a_{n}=0",
            "\\text{奇次谐波}"
          ],
          mask: [
            "\\text{偶函数}\\Rightarrow {{1}}",
            "\\text{奇函数}\\Rightarrow {{2}}",
            "\\text{半波对称}\\Rightarrow\\text{只含 }{{3}}"
          ],
          notes: [
            "偶且半波：只含奇次余弦。奇且半波：只含奇次正弦。"
          ]
        },
        {
          id: "fs-spec",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "周期信号频谱",
          hint: "FS 的频谱是离散谱线，间隔 ω0。",
          reveal: [
            { tex: "\\text{谱线位于 }n\\omega_{0},\\ n=0,\\pm 1,\\pm 2,\\dots", display: true },
            { tex: "F_{n}\\leftrightarrow \\text{双边};\\quad \\text{单边振幅 }=2|F_{n}|\\ (n>0)", display: true }
          ],
          holes: [
            "n\\omega_{0}",
            "2|F_{n}|"
          ],
          mask: [
            "\\text{谱线位于 }{{1}}",
            "\\text{单边振幅（}n>0\\text{）}={{2}}"
          ],
          notes: [
            "脉宽越窄，频谱主瓣越宽（时宽带宽积）。周期矩形波的包络是 Sa。"
          ]
        },
        {
          id: "fs-parseval",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "帕塞瓦尔定理（周期）",
          hint: "平均功率等于各次谐波功率之和。",
          reveal: [
            { tex: "\\dfrac{1}{T}\\int_{T}|f(t)|^{2}\\,dt=\\sum_{n=-\\infty}^{\\infty}|F_{n}|^{2}", display: true },
            { tex: "=\\left(\\dfrac{a_{0}}{2}\\right)^{2}+\\dfrac12\\sum_{n=1}^{\\infty}(a_{n}^{2}+b_{n}^{2})", display: true }
          ],
          holes: [
            "\\sum_{n=-\\infty}^{\\infty}|F_{n}|^{2}",
            "\\left(\\dfrac{a_{0}}{2}\\right)^{2}",
            "\\dfrac12\\sum(a_{n}^{2}+b_{n}^{2})"
          ],
          mask: [
            "\\dfrac{1}{T}\\int_{T}|f|^{2}\\,dt={{1}}",
            "={{2}}+{{3}}"
          ]
        },
        {
          id: "fs-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "周期矩形脉冲的 F_n",
          problem: "\\text{周期 }T\\text{、脉宽 }\\tau\\text{、高度 }A\\text{ 的周期矩形脉冲，求 }F_{n}",
          idea: "一个周期上就是门函数，积分直接出 Sa。n=0 是直流 Aτ/T。",
          steps: [
            { tex: "F_{n}=\\dfrac{1}{T}\\int_{-\\tau/2}^{\\tau/2}A e^{-jn\\omega_{0}t}\\,dt,\\quad \\omega_{0}=\\dfrac{2\\pi}{T}" },
            { tex: "F_{n}=\\dfrac{A\\tau}{T}\\,\\mathrm{Sa}\\!\\left(\\dfrac{n\\omega_{0}\\tau}{2}\\right)=\\dfrac{A\\tau}{T}\\,\\mathrm{Sa}\\!\\left(\\dfrac{n\\pi\\tau}{T}\\right)" },
            { tex: "F_{0}=\\dfrac{A\\tau}{T}" }
          ],
          answer: "F_{n}=\\dfrac{A\\tau}{T}\\,\\mathrm{Sa}(n\\pi\\tau/T)"
        }
      ]
    },
    {
      id: "ft",
      no: "四",
      name: "傅里叶变换",
      blurb: "变换对 · 八大性质 · 抽样定理",
      exam: "超高频",
      cards: [
        {
          id: "ft-def",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "FT 定义与反变换",
          hint: "正变换核 e^{-jωt}；反变换多 1/2π。ω 是角频率。",
          reveal: [
            { tex: "F(j\\omega)=\\int_{-\\infty}^{\\infty}f(t)e^{-j\\omega t}\\,dt", display: true },
            { tex: "f(t)=\\dfrac{1}{2\\pi}\\int_{-\\infty}^{\\infty}F(j\\omega)e^{j\\omega t}\\,d\\omega", display: true }
          ],
          holes: [
            "\\int_{-\\infty}^{\\infty}f(t)e^{-j\\omega t}\\,dt",
            "\\dfrac{1}{2\\pi}\\int_{-\\infty}^{\\infty}F(j\\omega)e^{j\\omega t}\\,d\\omega"
          ],
          mask: [
            "F(j\\omega)={{1}}",
            "f(t)={{2}}"
          ],
          notes: [
            "存在条件：绝对可积（充分）。周期信号、直流用 δ 推广后也有 FT。",
            "F(jω) 连续谱；与 FS 离散谱不同。"
          ]
        },
        {
          id: "ft-pair-gate",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "FT 对 · 门函数",
          hint: "宽度 τ 的门，谱是 τ 倍 Sa。Sa(x)=sin x / x。",
          reveal: [
            { tex: "g_{\\tau}(t)=\\begin{cases}1,&|t|<\\tau/2\\\\0,&|t|>\\tau/2\\end{cases}", display: true },
            { tex: "g_{\\tau}(t)\\leftrightarrow \\tau\\,\\mathrm{Sa}\\!\\left(\\dfrac{\\omega\\tau}{2}\\right),\\quad \\mathrm{Sa}(x)=\\dfrac{\\sin x}{x}", display: true }
          ],
          holes: [
            "\\tau\\,\\mathrm{Sa}\\!\\left(\\dfrac{\\omega\\tau}{2}\\right)",
            "\\dfrac{\\sin x}{x}"
          ],
          mask: [
            "g_{\\tau}(t)\\leftrightarrow {{1}}",
            "\\mathrm{Sa}(x)={{2}}"
          ],
          notes: [
            "对偶：Sa(Ω t) ↔ (π/Ω) g_{2Ω}(ω)，即高度 π/Ω、宽度 2Ω 的频域门。",
            "门越窄，Sa 主瓣越宽。"
          ]
        },
        {
          id: "ft-pair-delta",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "FT 对 · 冲激与直流",
          hint: "时域冲激 ↔ 频域 1；时域 1 ↔ 频域冲激，带 2π。",
          reveal: [
            { tex: "\\delta(t)\\leftrightarrow 1,\\quad 1\\leftrightarrow 2\\pi\\delta(\\omega)", display: true },
            { tex: "\\delta(t-t_{0})\\leftrightarrow e^{-j\\omega t_{0}},\\quad e^{j\\omega_{0}t}\\leftrightarrow 2\\pi\\delta(\\omega-\\omega_{0})", display: true }
          ],
          holes: [
            "1",
            "2\\pi\\delta(\\omega)",
            "e^{-j\\omega t_{0}}",
            "2\\pi\\delta(\\omega-\\omega_{0})"
          ],
          mask: [
            "\\delta(t)\\leftrightarrow {{1}},\\quad 1\\leftrightarrow {{2}}",
            "\\delta(t-t_{0})\\leftrightarrow {{3}}",
            "e^{j\\omega_{0}t}\\leftrightarrow {{4}}"
          ],
          warning: "直流的谱是 2πδ(ω)，不是 δ(ω)。少写 2π 是常见错。"
        },
        {
          id: "ft-pair-exp",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "FT 对 · 单边指数与双边指数",
          hint: "单边 e^{-at}ε(t) 是极点；双边 e^{-a|t|} 是钟形谱。",
          reveal: [
            { tex: "e^{-at}\\varepsilon(t)\\leftrightarrow \\dfrac{1}{a+j\\omega}\\quad(a>0)", display: true },
            { tex: "e^{-a|t|}\\leftrightarrow \\dfrac{2a}{a^{2}+\\omega^{2}}\\quad(a>0)", display: true }
          ],
          holes: [
            "\\dfrac{1}{a+j\\omega}",
            "\\dfrac{2a}{a^{2}+\\omega^{2}}",
            "a>0"
          ],
          mask: [
            "e^{-at}\\varepsilon(t)\\leftrightarrow {{1}}",
            "e^{-a|t|}\\leftrightarrow {{2}}",
            "\\text{均要求 }{{3}}"
          ],
          notes: [
            "e^{at}ε(t)（a>0）不绝对可积，普通 FT 不存在，改走拉普拉斯。"
          ]
        },
        {
          id: "ft-pair-sgn",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "FT 对 · 符号函数与阶跃",
          hint: "阶跃 = 1/2 的直流 + 1/2 的符号函数。直流贡献 πδ(ω)。",
          reveal: [
            { tex: "\\mathrm{sgn}(t)\\leftrightarrow \\dfrac{2}{j\\omega}", display: true },
            { tex: "\\varepsilon(t)\\leftrightarrow \\pi\\delta(\\omega)+\\dfrac{1}{j\\omega}", display: true }
          ],
          holes: [
            "\\dfrac{2}{j\\omega}",
            "\\pi\\delta(\\omega)+\\dfrac{1}{j\\omega}"
          ],
          mask: [
            "\\mathrm{sgn}(t)\\leftrightarrow {{1}}",
            "\\varepsilon(t)\\leftrightarrow {{2}}"
          ],
          notes: [
            "1/(jω) 取柯西主值。ε(t)=(1+sgn(t))/2 可用来核对。"
          ]
        },
        {
          id: "ft-pair-trig",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "FT 对 · 正余弦",
          hint: "欧拉公式拆成两个冲激。正弦是虚奇，注意 -j 与左右冲激的符号。",
          reveal: [
            { tex: "\\cos\\omega_{0}t\\leftrightarrow \\pi\\big[\\delta(\\omega-\\omega_{0})+\\delta(\\omega+\\omega_{0})\\big]", display: true },
            { tex: "\\sin\\omega_{0}t\\leftrightarrow -j\\pi\\big[\\delta(\\omega-\\omega_{0})-\\delta(\\omega+\\omega_{0})\\big]", display: true }
          ],
          holes: [
            "\\pi\\big[\\delta(\\omega-\\omega_{0})+\\delta(\\omega+\\omega_{0})\\big]",
            "-j\\pi\\big[\\delta(\\omega-\\omega_{0})-\\delta(\\omega+\\omega_{0})\\big]"
          ],
          mask: [
            "\\cos\\omega_{0}t\\leftrightarrow {{1}}",
            "\\sin\\omega_{0}t\\leftrightarrow {{2}}"
          ]
        },
        {
          id: "ft-shift",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "性质 · 时移与频移",
          hint: "时移乘 e^{-jω t0}；频移在时域乘 e^{jω0 t}（调制）。",
          reveal: [
            { tex: "f(t-t_{0})\\leftrightarrow F(j\\omega)e^{-j\\omega t_{0}}", display: true },
            { tex: "f(t)e^{j\\omega_{0}t}\\leftrightarrow F\\big(j(\\omega-\\omega_{0})\\big)", display: true }
          ],
          holes: [
            "F(j\\omega)e^{-j\\omega t_{0}}",
            "F\\big(j(\\omega-\\omega_{0})\\big)"
          ],
          mask: [
            "f(t-t_{0})\\leftrightarrow {{1}}",
            "f(t)e^{j\\omega_{0}t}\\leftrightarrow {{2}}"
          ],
          notes: [
            "余弦调制：f(t)cos ω0 t ↔ [F(j(ω-ω0))+F(j(ω+ω0))]/2。"
          ]
        },
        {
          id: "ft-scale",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "性质 · 尺度与对偶",
          hint: "时域压缩则频域展宽，幅度除以 |a|。对偶把 2π 和翻转带上。",
          reveal: [
            { tex: "f(at)\\leftrightarrow \\dfrac{1}{|a|}F\\!\\left(j\\dfrac{\\omega}{a}\\right)", display: true },
            { tex: "f(t)\\leftrightarrow F(j\\omega)\\ \\Rightarrow\\ F(jt)\\leftrightarrow 2\\pi f(-\\omega)", display: true }
          ],
          holes: [
            "\\dfrac{1}{|a|}F\\!\\left(j\\dfrac{\\omega}{a}\\right)",
            "2\\pi f(-\\omega)"
          ],
          mask: [
            "f(at)\\leftrightarrow {{1}}",
            "F(jt)\\leftrightarrow {{2}}"
          ],
          warning: "尺度变换与 δ(at) 一样，分母是 |a| 不是 a。"
        },
        {
          id: "ft-diff",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "性质 · 微分与积分",
          hint: "时域微分乘 jω；积分除以 jω，还要补直流冲激。",
          reveal: [
            { tex: "\\dfrac{df}{dt}\\leftrightarrow j\\omega F(j\\omega),\\quad (-jt)f(t)\\leftrightarrow \\dfrac{dF(j\\omega)}{d\\omega}", display: true },
            { tex: "\\int_{-\\infty}^{t}f(\\tau)\\,d\\tau\\leftrightarrow \\dfrac{F(j\\omega)}{j\\omega}+\\pi F(0)\\delta(\\omega)", display: true }
          ],
          holes: [
            "j\\omega F(j\\omega)",
            "\\dfrac{dF(j\\omega)}{d\\omega}",
            "\\dfrac{F(j\\omega)}{j\\omega}+\\pi F(0)\\delta(\\omega)"
          ],
          mask: [
            "f'(t)\\leftrightarrow {{1}}",
            "(-jt)f(t)\\leftrightarrow {{2}}",
            "\\int_{-\\infty}^{t}f\\,d\\tau\\leftrightarrow {{3}}"
          ],
          notes: [
            "若 F(0)=0（无直流），积分性质可省掉 π F(0)δ(ω)。"
          ]
        },
        {
          id: "ft-conv",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "卷积定理",
          hint: "时域卷积 ↔ 频域相乘；时域相乘 ↔ 频域卷积还要除 2π。",
          reveal: [
            { tex: "f_{1}(t)*f_{2}(t)\\leftrightarrow F_{1}(j\\omega)F_{2}(j\\omega)", display: true },
            { tex: "f_{1}(t)f_{2}(t)\\leftrightarrow \\dfrac{1}{2\\pi}F_{1}(j\\omega)*F_{2}(j\\omega)", display: true }
          ],
          holes: [
            "F_{1}(j\\omega)F_{2}(j\\omega)",
            "\\dfrac{1}{2\\pi}F_{1}(j\\omega)*F_{2}(j\\omega)"
          ],
          mask: [
            "f_{1}*f_{2}\\leftrightarrow {{1}}",
            "f_{1}f_{2}\\leftrightarrow {{2}}"
          ],
          notes: [
            "LTI：Y(jω)=H(jω)X(jω)，H(jω) 就是 h(t) 的 FT。"
          ]
        },
        {
          id: "ft-periodic",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "周期信号的 FT",
          hint: "周期信号的 FT 是冲激串，强度 2π F_n，位置在 nω0。",
          reveal: [
            { tex: "f(t)=\\sum F_{n}e^{jn\\omega_{0}t}\\leftrightarrow 2\\pi\\sum F_{n}\\delta(\\omega-n\\omega_{0})", display: true },
            { tex: "\\sum_{n=-\\infty}^{\\infty}\\delta(t-nT)\\leftrightarrow \\dfrac{2\\pi}{T}\\sum_{k}\\delta\\!\\left(\\omega-k\\dfrac{2\\pi}{T}\\right)", display: true }
          ],
          holes: [
            "2\\pi\\sum F_{n}\\delta(\\omega-n\\omega_{0})",
            "\\dfrac{2\\pi}{T}\\sum_{k}\\delta(\\omega-k 2\\pi/T)"
          ],
          mask: [
            "\\sum F_{n}e^{jn\\omega_{0}t}\\leftrightarrow {{1}}",
            "\\sum\\delta(t-nT)\\leftrightarrow {{2}}"
          ],
          notes: [
            "冲激串的 FT 仍是冲激串：时域周期 T，频域周期 2π/T、强度 2π/T。"
          ]
        },
        {
          id: "ft-sample",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "抽样定理（奈奎斯特）",
          hint: "866 超高频。郑君里：奈奎斯特频率 = 2ωm，奈奎斯特间隔 = 1/(2fm)。",
          reveal: [
            { tex: "\\omega_{s}\\ge 2\\omega_{m},\\quad T_{s}\\le \\dfrac{1}{2f_{m}}=\\dfrac{\\pi}{\\omega_{m}}", display: true },
            { tex: "F_{s}(j\\omega)=\\dfrac{1}{T_{s}}\\sum_{n}F\\big(j(\\omega-n\\omega_{s})\\big)", display: true },
            { tex: "f(t)=\\sum_{n}f(nT_{s})\\,\\mathrm{Sa}\\!\\left(\\dfrac{\\pi}{T_{s}}(t-nT_{s})\\right)", display: true }
          ],
          holes: [
            "2\\omega_{m}",
            "\\dfrac{1}{2f_{m}}",
            "\\dfrac{1}{T_{s}}\\sum_{n}F\\big(j(\\omega-n\\omega_{s})\\big)",
            "\\mathrm{Sa}\\!\\left(\\dfrac{\\pi}{T_{s}}(t-nT_{s})\\right)"
          ],
          mask: [
            "\\omega_{s}\\ge {{1}}\\text{（奈奎斯特频率）}",
            "T_{s}\\le {{2}}\\text{（奈奎斯特间隔）}",
            "F_{s}(j\\omega)={{3}}",
            "f(t)=\\sum f(nT_{s})\\,{{4}}"
          ],
          warning: "ωs<2ωm 发生混叠，低频无法用理想低通恢复。抽样谱是原谱以 ωs 周期延拓。",
          notes: [
            "理想抽样 fs(t)=f(t) Σ δ(t-nTs)=Σ f(nTs) δ(t-nTs)。",
            "恢复滤波器：截止 ωs/2、增益 Ts 的理想低通。"
          ]
        },
        {
          id: "ft-energy",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "能量谱与帕塞瓦尔",
          hint: "能量在时域、频域守恒；密度是 |F(jω)|²。",
          reveal: [
            { tex: "E=\\int_{-\\infty}^{\\infty}|f(t)|^{2}\\,dt=\\dfrac{1}{2\\pi}\\int_{-\\infty}^{\\infty}|F(j\\omega)|^{2}\\,d\\omega", display: true },
            { tex: "\\text{能量频谱密度 }|F(j\\omega)|^{2};\\quad \\text{功率信号改走功率谱}", display: true }
          ],
          holes: [
            "\\dfrac{1}{2\\pi}\\int_{-\\infty}^{\\infty}|F(j\\omega)|^{2}\\,d\\omega",
            "|F(j\\omega)|^{2}"
          ],
          mask: [
            "\\int|f(t)|^{2}\\,dt={{1}}",
            "\\text{能量频谱密度 }={{2}}"
          ],
          notes: [
            "相关函数与能量谱是一对 FT（维纳–辛钦）。深入内容以当年大纲为准。"
          ]
        },
        {
          id: "ft-ex",
          kind: "example",
          freq: 5,
          tier: 2,
          title: "单边指数的 FT",
          problem: "\\text{求 }f(t)=e^{-2t}\\varepsilon(t)\\text{ 的 }F(j\\omega)",
          idea: "套标准对 e^{-at}ε(t) ↔ 1/(a+jω)，a=2>0。",
          steps: [
            { tex: "e^{-at}\\varepsilon(t)\\leftrightarrow \\dfrac{1}{a+j\\omega}\\quad(a>0)" },
            { tex: "a=2\\Rightarrow F(j\\omega)=\\dfrac{1}{2+j\\omega}" }
          ],
          answer: "\\dfrac{1}{2+j\\omega}"
        }
      ]
    },
    {
      id: "laplace",
      no: "五",
      name: "拉普拉斯变换",
      blurb: "ROC · 部分分式 · H(s) · 电路 s 域",
      exam: "计算大题",
      cards: [
        {
          id: "lp-def",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "单边 / 双边定义与 ROC",
          hint: "s=σ+jω。单边从 0⁻ 积到 ∞，适合有初始条件的系统。收敛域必须写。",
          reveal: [
            { tex: "F(s)=\\int_{0^{-}}^{\\infty}f(t)e^{-st}\\,dt\\quad\\text{（单边）}", display: true },
            { tex: "F(s)=\\int_{-\\infty}^{\\infty}f(t)e^{-st}\\,dt\\quad\\text{（双边）}", display: true },
            { tex: "s=\\sigma+j\\omega;\\quad \\text{ROC 是 }s\\text{ 平面上使积分收敛的区域}", display: true }
          ],
          holes: [
            "\\int_{0^{-}}^{\\infty}f(t)e^{-st}\\,dt",
            "\\int_{-\\infty}^{\\infty}f(t)e^{-st}\\,dt",
            "\\sigma+j\\omega"
          ],
          mask: [
            "\\text{单边 }F(s)={{1}}",
            "\\text{双边 }F(s)={{2}}",
            "s={{3}}"
          ],
          notes: [
            "同一代数式配不同 ROC 对应不同时间函数。双边细节以当年大纲为准。",
            "jω 轴落在 ROC 内时，F(s)|_{s=jω} 就是 FT。"
          ]
        },
        {
          id: "lp-pairs",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "典型单边变换对",
          hint: "阶跃 1/s；指数 1/(s+a)；正余弦分母 s²+ω²。",
          reveal: [
            { tex: "\\delta(t)\\leftrightarrow 1,\\quad \\varepsilon(t)\\leftrightarrow \\dfrac{1}{s}\\ (\\mathrm{Re}\\,s>0)", display: true },
            { tex: "e^{-at}\\varepsilon(t)\\leftrightarrow \\dfrac{1}{s+a},\\quad t^{n}\\varepsilon(t)\\leftrightarrow \\dfrac{n!}{s^{n+1}}", display: true },
            { tex: "\\cos\\omega_{0}t\\,\\varepsilon(t)\\leftrightarrow \\dfrac{s}{s^{2}+\\omega_{0}^{2}},\\quad \\sin\\omega_{0}t\\,\\varepsilon(t)\\leftrightarrow \\dfrac{\\omega_{0}}{s^{2}+\\omega_{0}^{2}}", display: true }
          ],
          holes: [
            "1",
            "\\dfrac{1}{s}",
            "\\dfrac{1}{s+a}",
            "\\dfrac{n!}{s^{n+1}}",
            "\\dfrac{s}{s^{2}+\\omega_{0}^{2}}",
            "\\dfrac{\\omega_{0}}{s^{2}+\\omega_{0}^{2}}"
          ],
          mask: [
            "\\delta(t)\\leftrightarrow {{1}},\\quad \\varepsilon(t)\\leftrightarrow {{2}}",
            "e^{-at}\\varepsilon(t)\\leftrightarrow {{3}},\\quad t^{n}\\varepsilon(t)\\leftrightarrow {{4}}",
            "\\cos\\omega_{0}t\\,\\varepsilon(t)\\leftrightarrow {{5}}",
            "\\sin\\omega_{0}t\\,\\varepsilon(t)\\leftrightarrow {{6}}"
          ],
          notes: [
            "e^{-at}cos ω0 t ε(t) ↔ (s+a)/((s+a)²+ω0²)。",
            "t ε(t) ↔ 1/s²。"
          ]
        },
        {
          id: "lp-diff",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "单边微分性质（含初值）",
          hint: "每微一次，减一次初始值。系统全响应用 0⁻。",
          reveal: [
            { tex: "f'(t)\\leftrightarrow sF(s)-f(0^{-})", display: true },
            { tex: "f''(t)\\leftrightarrow s^{2}F(s)-sf(0^{-})-f'(0^{-})", display: true },
            { tex: "\\int_{0^{-}}^{t}f(\\tau)\\,d\\tau\\leftrightarrow \\dfrac{F(s)}{s}", display: true }
          ],
          holes: [
            "sF(s)-f(0^{-})",
            "s^{2}F(s)-sf(0^{-})-f'(0^{-})",
            "\\dfrac{F(s)}{s}"
          ],
          mask: [
            "f'(t)\\leftrightarrow {{1}}",
            "f''(t)\\leftrightarrow {{2}}",
            "\\int_{0^{-}}^{t}f\\,d\\tau\\leftrightarrow {{3}}"
          ],
          warning: "求全响应必须用 0⁻。若题目给 0⁺，先用冲激平衡把 0⁺ 折回 0⁻，或直接当跳变后状态。"
        },
        {
          id: "lp-shift",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "时移与 s 域位移",
          hint: "延时乘 e^{-s t0}（还要乘阶跃）；e^{-at} 把 F(s) 的 s 换成 s+a。",
          reveal: [
            { tex: "f(t-t_{0})\\varepsilon(t-t_{0})\\leftrightarrow e^{-st_{0}}F(s)\\quad(t_{0}>0)", display: true },
            { tex: "e^{-at}f(t)\\leftrightarrow F(s+a)", display: true }
          ],
          holes: [
            "e^{-st_{0}}F(s)",
            "F(s+a)"
          ],
          mask: [
            "f(t-t_{0})\\varepsilon(t-t_{0})\\leftrightarrow {{1}}",
            "e^{-at}f(t)\\leftrightarrow {{2}}"
          ],
          notes: [
            "尺度：f(at)ε(t) ↔ (1/|a|) F(s/a)。",
            "卷积：f1*f2 ↔ F1(s)F2(s)（ROC 取交集）。"
          ]
        },
        {
          id: "lp-pf",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "部分分式反变换",
          hint: "先真分式，再拆极点。单极点留数就是系数。",
          reveal: [
            { tex: "F(s)=\\dfrac{N(s)}{D(s)}=\\sum_{i}\\dfrac{A_{i}}{s-p_{i}}\\quad(\\text{单极点})", display: true },
            { tex: "A_{i}=(s-p_{i})F(s)\\big|_{s=p_{i}}\\ \\Rightarrow\\ A_{i}e^{p_{i}t}\\varepsilon(t)", display: true }
          ],
          holes: [
            "\\dfrac{A_{i}}{s-p_{i}}",
            "(s-p_{i})F(s)\\big|_{s=p_{i}}",
            "A_{i}e^{p_{i}t}\\varepsilon(t)"
          ],
          mask: [
            "\\text{单极点：}F(s)=\\sum {{1}}",
            "A_{i}={{2}}",
            "\\text{对应 }{{3}}"
          ],
          notes: [
            "共轭极点建议合成二次项，还原成 e^{αt} cos / sin。",
            "重极点 (s-p)^k：系数含导数；时域乘 t^{k-1}/(k-1)!。"
          ]
        },
        {
          id: "lp-Hs",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "系统函数 H(s) 与稳定性",
          hint: "H(s) 是零状态的 Y/X，也是 h(t) 的拉氏变换。",
          reveal: [
            { tex: "H(s)=\\dfrac{Y_{\\mathrm{zs}}(s)}{X(s)}=\\mathcal{L}\\{h(t)\\}", display: true },
            { tex: "\\text{因果 BIBO 稳定}\\iff \\text{极点全在左半开平面 }\\mathrm{Re}(p)<0", display: true }
          ],
          holes: [
            "\\dfrac{Y_{\\mathrm{zs}}(s)}{X(s)}",
            "\\mathcal{L}\\{h(t)\\}",
            "\\mathrm{Re}(p)<0"
          ],
          mask: [
            "H(s)={{1}}={{2}}",
            "\\text{因果稳定}\\iff {{3}}"
          ],
          notes: [
            "虚轴单极点：临界/振荡（非 BIBO）；虚轴重极点或右半平面极点：不稳定。",
            "ROC 必须包含虚轴才谈得上频率响应 H(jω)。"
          ]
        },
        {
          id: "lp-zp",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "零极点与时域波形",
          hint: "极点定波形模式，零点定各模式幅度。",
          reveal: [
            { tex: "\\text{实极点 }-a:\\ e^{-at};\\quad \\text{共轭 }-\\sigma\\pm j\\omega_{d}:\\ e^{-\\sigma t}\\cos(\\omega_{d}t+\\varphi)", display: true },
            { tex: "\\text{重极点}\\times t^{k-1};\\quad \\text{距虚轴越近，衰减越慢}", display: true }
          ],
          holes: [
            "e^{-at}",
            "e^{-\\sigma t}\\cos(\\omega_{d}t+\\varphi)",
            "t^{k-1}"
          ],
          mask: [
            "\\text{实极点 }-a\\Rightarrow {{1}}",
            "-\\sigma\\pm j\\omega_{d}\\Rightarrow {{2}}",
            "k\\text{ 重极点再乘 }{{3}}"
          ],
          notes: [
            "零点靠近某极点会削弱该模式。高阶系统先看主导极点。"
          ]
        },
        {
          id: "lp-circuit",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "s 域元件模型",
          hint: "阻抗 R、sL、1/(sC)。初值用独立源搬进去，再列代数方程。",
          reveal: [
            { tex: "Z_{R}=R,\\quad Z_{L}=sL,\\quad Z_{C}=\\dfrac{1}{sC}", display: true },
            { tex: "L:\\ \\text{串联 }Li_{L}(0^{-});\\quad C:\\ \\text{串联 }v_{C}(0^{-})/s", display: true }
          ],
          holes: [
            "R",
            "sL",
            "\\dfrac{1}{sC}",
            "Li_{L}(0^{-})",
            "v_{C}(0^{-})/s"
          ],
          mask: [
            "Z_{R}={{1}},\\ Z_{L}={{2}},\\ Z_{C}={{3}}",
            "L\\text{ 初值源 }{{4}},\\ C\\text{ 初值源 }{{5}}"
          ],
          notes: [
            "电流源形式：L 并联 i_L(0⁻)/s；C 并联 C v_C(0⁻)。两种等价。",
            "全响应 = 零输入（只留初值源）+ 零状态（只留激励）。"
          ]
        },
        {
          id: "lp-init-final",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "初值定理与终值定理",
          hint: "初值看 s→∞，终值看 s→0。终值要求极点稳定。",
          reveal: [
            { tex: "f(0^{+})=\\lim_{s\\to\\infty}sF(s)", display: true },
            { tex: "f(\\infty)=\\lim_{s\\to 0}sF(s)", display: true }
          ],
          holes: [
            "\\lim_{s\\to\\infty}sF(s)",
            "\\lim_{s\\to 0}sF(s)"
          ],
          mask: [
            "f(0^{+})={{1}}",
            "f(\\infty)={{2}}"
          ],
          warning: "终值定理要求 sF(s) 的极点在左半开平面（可有一个 s=0 的单极点）。振荡、发散不能用。"
        },
        {
          id: "lp-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "部分分式求原函数",
          problem: "\\text{求 }\\mathcal{L}^{-1}\\left\\{\\dfrac{s+3}{(s+1)(s+2)}\\right\\}",
          idea: "拆成 A/(s+1)+B/(s+2)，覆盖法求系数，再逐项反变换。",
          steps: [
            { tex: "\\dfrac{s+3}{(s+1)(s+2)}=\\dfrac{A}{s+1}+\\dfrac{B}{s+2}" },
            { tex: "A=(s+3)/(s+2)\\big|_{s=-1}=2,\\quad B=(s+3)/(s+1)\\big|_{s=-2}=-1" },
            { tex: "f(t)=(2e^{-t}-e^{-2t})\\varepsilon(t)" }
          ],
          answer: "(2e^{-t}-e^{-2t})\\varepsilon(t)"
        }
      ]
    },
    {
      id: "zt",
      no: "六",
      name: "z 变换",
      blurb: "ROC · H(z) · 单位圆 · 差分方程",
      exam: "计算选择",
      cards: [
        {
          id: "zt-def",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "z 变换定义",
          hint: "幂级数 X(z)=Σ x[n] z^{-n}。单边从 n=0 起，便于带初始条件。",
          reveal: [
            { tex: "X(z)=\\sum_{n=-\\infty}^{\\infty}x[n]z^{-n}\\quad\\text{（双边）}", display: true },
            { tex: "X(z)=\\sum_{n=0}^{\\infty}x[n]z^{-n}\\quad\\text{（单边）}", display: true }
          ],
          holes: [
            "\\sum_{n=-\\infty}^{\\infty}x[n]z^{-n}",
            "\\sum_{n=0}^{\\infty}x[n]z^{-n}"
          ],
          mask: [
            "\\text{双边 }X(z)={{1}}",
            "\\text{单边 }X(z)={{2}}"
          ],
          notes: [
            "z=e^{sT} 把 s 左半平面映到单位圆内。抽样周期 T 以当年大纲为准。",
            "ROC 是 z 平面上的圆环。"
          ]
        },
        {
          id: "zt-causal",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "因果 / 反因果与 ROC",
          hint: "因果（右边）序列 ROC 在最外极点外侧；反因果在最内极点内侧。",
          reveal: [
            { tex: "\\text{因果 }x[n]=0\\ (n<0):\\ \\text{ROC }|z|>R\\text{（圆外，含 }\\infty\\text{）}", display: true },
            { tex: "\\text{反因果 }x[n]=0\\ (n>0):\\ \\text{ROC }|z|<R\\text{（圆内，含 }0\\text{）}", display: true }
          ],
          holes: [
            "|z|>R",
            "|z|<R",
            "\\infty",
            "0"
          ],
          mask: [
            "\\text{因果 ROC }{{1}}\\text{（含 }{{3}}\\text{）}",
            "\\text{反因果 ROC }{{2}}\\text{（含 }{{4}}\\text{）}"
          ],
          notes: [
            "同一分式配不同 ROC，时间序列完全不同。默写变换对必须带 ROC。"
          ],
          warning: "有限长序列 ROC 至少是 0<|z|<∞；n≥0 的有限长还含 ∞，n≤0 的还含 0。"
        },
        {
          id: "zt-pairs",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "典型 z 变换对",
          hint: "写成 z/(z-a) 便于部分分式。因果序列 ROC 在 |z|>|a|。",
          reveal: [
            { tex: "\\delta[n]\\leftrightarrow 1,\\quad \\varepsilon[n]\\leftrightarrow \\dfrac{z}{z-1}\\ (|z|>1)", display: true },
            { tex: "a^{n}\\varepsilon[n]\\leftrightarrow \\dfrac{z}{z-a}\\ (|z|>|a|),\\quad na^{n}\\varepsilon[n]\\leftrightarrow \\dfrac{az}{(z-a)^{2}}", display: true }
          ],
          holes: [
            "1",
            "\\dfrac{z}{z-1}",
            "\\dfrac{z}{z-a}",
            "|z|>|a|",
            "\\dfrac{az}{(z-a)^{2}}"
          ],
          mask: [
            "\\delta[n]\\leftrightarrow {{1}},\\quad \\varepsilon[n]\\leftrightarrow {{2}}\\ (|z|>1)",
            "a^{n}\\varepsilon[n]\\leftrightarrow {{3}}\\ ({{4}})",
            "na^{n}\\varepsilon[n]\\leftrightarrow {{5}}"
          ],
          notes: [
            "等价写法：ε[n] ↔ 1/(1-z^{-1})，|z|>1。",
            "−a^n ε[−n−1] ↔ z/(z−a)，|z|<|a|（反因果）。"
          ]
        },
        {
          id: "zt-shift",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "单边移位性质",
          hint: "右移（延时）出现初始值 x[−1]；左移减 x[0]。差分方程列写全靠它。",
          reveal: [
            { tex: "x[n-1]\\leftrightarrow z^{-1}X(z)+x[-1]", display: true },
            { tex: "x[n+1]\\leftrightarrow zX(z)-zx[0]", display: true }
          ],
          holes: [
            "z^{-1}X(z)+x[-1]",
            "zX(z)-zx[0]"
          ],
          mask: [
            "x[n-1]\\leftrightarrow {{1}}",
            "x[n+1]\\leftrightarrow {{2}}"
          ],
          notes: [
            "卷积：x*h ↔ X(z)H(z)。",
            "z 域微分：n x[n] ↔ −z dX/dz。"
          ]
        },
        {
          id: "zt-inv",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "反变换：部分分式与长除",
          hint: "先除以 z 再拆 X(z)/z，最后乘回 z。长除得到 z^{-1} 幂级数。",
          reveal: [
            { tex: "\\dfrac{X(z)}{z}=\\sum\\dfrac{A_{i}}{z-p_{i}}\\ \\Rightarrow\\ X(z)=\\sum A_{i}\\dfrac{z}{z-p_{i}}", display: true },
            { tex: "\\text{因果：}A_{i}p_{i}^{n}\\varepsilon[n];\\quad \\text{长除按 }z^{-1}\\text{ 降幂展开}", display: true }
          ],
          holes: [
            "\\dfrac{X(z)}{z}",
            "A_{i}p_{i}^{n}\\varepsilon[n]",
            "z^{-1}"
          ],
          mask: [
            "\\text{先拆 }{{1}}\\text{ 再乘回 }z",
            "\\text{因果反变换 }{{2}}",
            "\\text{长除按 }{{3}}\\text{ 幂展开}"
          ],
          notes: [
            "长除：因果（ROC 圆外）除成 z^{-1} 级数；反因果除成 z 的正幂。"
          ]
        },
        {
          id: "zt-stable",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "H(z) 与单位圆稳定性",
          hint: "因果系统：全部极点在单位圆内。BIBO：ROC 必须包含单位圆。",
          reveal: [
            { tex: "H(z)=\\dfrac{Y(z)}{X(z)}\\Big|_{\\mathrm{zs}}=\\mathcal{Z}\\{h[n]\\}", display: true },
            { tex: "\\text{因果稳定}\\iff \\text{极点}|p|<1\\text{（单位圆内）}", display: true }
          ],
          holes: [
            "\\mathcal{Z}\\{h[n]\\}",
            "|p|<1",
            "|z|=1"
          ],
          mask: [
            "H(z)={{1}}",
            "\\text{因果稳定}\\iff {{2}}",
            "\\text{BIBO：ROC 含 }{{3}}"
          ],
          notes: [
            "单位圆上的 H(z)|_{z=e^{jΩ}} 就是频率响应（前提：单位圆在 ROC 内）。",
            "s 左半平面 ↔ |z|<1，这就是 z=e^{sT} 的几何意义。"
          ]
        },
        {
          id: "zt-st",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "z 与 s 的映射",
          hint: "抽样把连续系统变成离散。以当年大纲为准，会写映射即可。",
          reveal: [
            { tex: "z=e^{sT},\\quad s=\\dfrac{1}{T}\\ln z", display: true },
            { tex: "\\mathrm{Re}(s)<0\\ \\leftrightarrow\\ |z|<1", display: true }
          ],
          holes: [
            "e^{sT}",
            "|z|<1"
          ],
          mask: [
            "z={{1}}",
            "\\text{s 左半平面}\\leftrightarrow {{2}}"
          ],
          notes: [
            "jω 轴 ↔ 单位圆；σ>0 的右半平面 ↔ 单位圆外。"
          ]
        },
        {
          id: "zt-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "差分方程求 h[n]",
          problem: "y[n]-\\tfrac12 y[n-1]=x[n],\\ \\text{因果。求 }h[n]",
          idea: "零状态：Y(z)−(1/2) z^{-1} Y(z)=X(z)，H(z)=Y/X，再反变换。",
          steps: [
            { tex: "H(z)=\\dfrac{1}{1-\\tfrac12 z^{-1}}=\\dfrac{z}{z-\\tfrac12},\\quad |z|>\\tfrac12" },
            { tex: "a^{n}\\varepsilon[n]\\leftrightarrow \\dfrac{z}{z-a}\\ \\Rightarrow\\ a=\\tfrac12" },
            { tex: "h[n]=\\left(\\dfrac12\\right)^{n}\\varepsilon[n]" }
          ],
          answer: "\\left(\\tfrac12\\right)^{n}\\varepsilon[n]"
        }
      ]
    },
    {
      id: "sys",
      no: "七",
      name: "系统综合分析",
      blurb: "频率响应 · 无失真 · 梅森 · 框图",
      exam: "综合大题",
      cards: [
        {
          id: "sys-Hjw",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "频率响应 H(jω)",
          hint: "稳定 LTI 对 e^{jωt} 的响应就是乘 H(jω)。它是 h(t) 的 FT。",
          reveal: [
            { tex: "H(j\\omega)=\\int_{-\\infty}^{\\infty}h(t)e^{-j\\omega t}\\,dt=H(s)\\big|_{s=j\\omega}", display: true },
            { tex: "y_{\\mathrm{ss}}(t)=|H(j\\omega)|\\cos\\big(\\omega t+\\arg H(j\\omega)\\big)\\quad\\big(x=\\cos\\omega t\\big)", display: true }
          ],
          holes: [
            "H(s)\\big|_{s=j\\omega}",
            "|H(j\\omega)|",
            "\\arg H(j\\omega)"
          ],
          mask: [
            "H(j\\omega)={{1}}",
            "x=\\cos\\omega t\\Rightarrow y_{\\mathrm{ss}}={{2}}\\cos(\\omega t+{{3}})"
          ],
          notes: [
            "必须 ROC 含虚轴（系统稳定）才能把 s=jω 代入。",
            "离散：H(e^{jΩ})=H(z)|_{z=e^{jΩ}}，以 2π 为周期。"
          ]
        },
        {
          id: "sys-bode",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "幅频与相频",
          hint: "H=|H|e^{jφ}。群时延是相位对 ω 的负导数。",
          reveal: [
            { tex: "H(j\\omega)=|H(j\\omega)|e^{j\\varphi(\\omega)}", display: true },
            { tex: "\\tau_{g}(\\omega)=-\\dfrac{d\\varphi(\\omega)}{d\\omega}", display: true }
          ],
          holes: [
            "|H(j\\omega)|e^{j\\varphi(\\omega)}",
            "-\\dfrac{d\\varphi(\\omega)}{d\\omega}"
          ],
          mask: [
            "H(j\\omega)={{1}}",
            "\\tau_{g}(\\omega)={{2}}"
          ],
          notes: [
            "实系数系统：|H| 偶、φ 奇。",
            "一阶：极点越靠近虚轴，幅频越尖。"
          ]
        },
        {
          id: "sys-filter",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "理想滤波器",
          hint: "通带内无失真（恒模 + 线性相位），阻带为零。",
          reveal: [
            { tex: "\\text{理想低通：}H(j\\omega)=Ke^{-j\\omega t_{d}}\\ (|\\omega|<\\omega_{c});\\ 0\\ (|\\omega|>\\omega_{c})", display: true },
            { tex: "h(t)=\\dfrac{K\\omega_{c}}{\\pi}\\mathrm{Sa}\\big(\\omega_{c}(t-t_{d})\\big)", display: true }
          ],
          holes: [
            "Ke^{-j\\omega t_{d}}",
            "\\omega_{c}",
            "\\dfrac{K\\omega_{c}}{\\pi}\\mathrm{Sa}\\big(\\omega_{c}(t-t_{d})\\big)"
          ],
          mask: [
            "\\text{通带 }H(j\\omega)={{1}}\\ (|\\omega|<{{2}})",
            "h(t)={{3}}"
          ],
          notes: [
            "理想滤波器非因果（Sa 双边无限），物理不可实现，只作分析基准。",
            "高通/带通/带阻：通带位置不同，通带内同样要线性相位。"
          ]
        },
        {
          id: "sys-dist",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "无失真传输条件",
          hint: "输出只许尺度变化加延时：y(t)=K x(t-t_d)。",
          reveal: [
            { tex: "y(t)=Kx(t-t_{d})\\ \\iff\\ H(j\\omega)=Ke^{-j\\omega t_{d}}", display: true },
            { tex: "|H(j\\omega)|=K\\text{（常数）},\\quad \\varphi(\\omega)=-\\omega t_{d}\\text{（过原点的直线）}", display: true }
          ],
          holes: [
            "Kx(t-t_{d})",
            "Ke^{-j\\omega t_{d}}",
            "K",
            "-\\omega t_{d}"
          ],
          mask: [
            "y(t)={{1}}\\iff H(j\\omega)={{2}}",
            "|H|={{3}},\\quad \\varphi(\\omega)={{4}}"
          ],
          warning: "只保证 |H| 恒定仍可能有相位失真；φ 必须是过原点的线性函数（在信号频带内）。"
        },
        {
          id: "sys-mason",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "梅森增益公式",
          hint: "总增益 = 各前向通路贡献之和 / Δ。Δ 按不接触环展开。",
          reveal: [
            { tex: "T=\\dfrac{\\sum_{k}P_{k}\\Delta_{k}}{\\Delta}", display: true },
            { tex: "\\Delta=1-\\sum L_{i}+\\sum L_{i}L_{j}-\\sum L_{i}L_{j}L_{k}+\\cdots", display: true }
          ],
          holes: [
            "\\dfrac{\\sum_{k}P_{k}\\Delta_{k}}{\\Delta}",
            "1-\\sum L_{i}+\\sum L_{i}L_{j}-\\cdots",
            "P_{k}"
          ],
          mask: [
            "T={{1}}",
            "\\Delta={{2}}",
            "{{3}}\\text{ 为第 }k\\text{ 条前向通路增益}"
          ],
          notes: [
            "Δ_k：把与第 k 条前向通路接触的环去掉后剩下的 Δ。",
            "L_i L_j 只计入互不接触的环对。接触就不要相乘。"
          ]
        },
        {
          id: "sys-block",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "系统框图连接",
          hint: "级联相乘、并联相加、负反馈除以 1+GH。",
          reveal: [
            { tex: "\\text{级联 }H_{1}H_{2};\\quad \\text{并联 }H_{1}+H_{2}", display: true },
            { tex: "\\text{负反馈 }\\dfrac{G}{1+GH};\\quad \\text{正反馈 }\\dfrac{G}{1-GH}", display: true }
          ],
          holes: [
            "H_{1}H_{2}",
            "H_{1}+H_{2}",
            "\\dfrac{G}{1+GH}",
            "\\dfrac{G}{1-GH}"
          ],
          mask: [
            "\\text{级联 }{{1}},\\quad \\text{并联 }{{2}}",
            "\\text{负反馈 }{{3}},\\quad \\text{正反馈 }{{4}}"
          ],
          notes: [
            "反馈回路里 G 是前向、H 是反馈。单位负反馈 H=1 时为 G/(1+G)。",
            "框图与信号流图等价，可先画流图再套梅森。"
          ]
        },
        {
          id: "sys-flow",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "信号流图术语",
          hint: "会认节点、支路、前向通路、环路、不接触，梅森才能下笔。",
          reveal: [
            { tex: "\\text{前向通路：从源点到汇点、每个节点最多经过一次}", display: true },
            { tex: "\\text{环路：起点终点相同；不接触 = 无公共节点}", display: true }
          ],
          holes: [
            "\\text{源点到汇点}",
            "\\text{无公共节点}"
          ],
          mask: [
            "\\text{前向通路：}{{1}}\\text{且节点不重复}",
            "\\text{不接触环：}{{2}}"
          ],
          notes: [
            "支路增益相乘得通路增益。自环是环路的一种。",
            "状态变量实现（直接 II 型等）以当年大纲为准，一般不作为 866 重点。"
          ]
        },
        {
          id: "sys-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "单位负反馈闭环",
          problem: "\\text{前向 }G(s)=\\dfrac{1}{s+1}\\text{，单位负反馈。求闭环 }H(s)\\text{ 并判断稳定性。}",
          idea: "单位负反馈 H=G/(1+G)。极点看分母。",
          steps: [
            { tex: "H(s)=\\dfrac{G}{1+G}=\\dfrac{1/(s+1)}{1+1/(s+1)}=\\dfrac{1}{s+2}" },
            { tex: "\\text{极点 }s=-2\\text{ 在左半开平面，因果系统 BIBO 稳定}" }
          ],
          answer: "H(s)=\\dfrac{1}{s+2}\\text{（稳定）}"
        }
      ]
    },
    {
      id: "master",
      no: "八",
      name: "公式全表",
      blurb: "全部 866 公式 · 按档位过一遍",
      exam: "考前必过",
      virtual: true,
      cards: []
    }
  ]
};
