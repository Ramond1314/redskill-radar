const FALLBACK_DATA = {
  dataDate: "2026-08-30",
  genTime: "2026-08-31 08:05:25",
  sourceUrl: "https://cowork.xiaohongshu.com/s/redskill-rank",
  useList: [
    {skill_id:1519,skill_name:"vedic-astrology",skill_description:"输入出生日期、时间和地点，自动完成 Vedic/Jyotish 星图计算与分析，支持单人、双人关系和时间校准。",use_users:17690,use_cnt:35611,new7_cnt:1691,note_id:"6a2a49bb0000000022022631"},
    {skill_id:15359,skill_name:"photo-abstract",skill_description:"保留上传照片原貌，搭配照片衍生的抽象记忆面板和诗意英文标题，制作竖版编辑感视觉。",use_users:6949,use_cnt:10674,new7_cnt:474,note_id:"6a563fb40000000011012ac1"},
    {skill_id:2752,skill_name:"写作蒸馏器.skill",skill_description:"从一批完整文章中提炼语言、结构、选题、素材、认知框架与视觉风格，生成可复用的写作规则。",use_users:6545,use_cnt:8738,new7_cnt:1255,note_id:"6a3ff22300000000110063d5"},
    {skill_id:387,skill_name:"月老skill",skill_description:"根据年龄、身高体重、学历、收入、家庭和婚史等信息，输出关系画像、加减分项、避雷清单和行动建议。",use_users:6041,use_cnt:9871,new7_cnt:1013,note_id:"6a0ff05c0000000035032113"},
    {skill_id:143,skill_name:"歸藏的 PPT Skill",skill_description:"生成横向翻页网页 PPT，提供电子杂志×电子墨水、瑞士国际主义两种视觉方向。",use_users:5403,use_cnt:7235,new7_cnt:0,note_id:"6a0ff7cd0000000038037642"},
    {skill_id:8459,skill_name:"诗意极简纸张海报",skill_description:"将主题、句子、物件、情绪或照片转化为大面积留白、旧纸质感和克制点色的 Zine 风海报。",use_users:4352,use_cnt:6282,new7_cnt:221,note_id:"6a510af50000000015025b1c"},
    {skill_id:292,skill_name:"面试准备助手",skill_description:"针对产品、增长、运营和商业策略岗位，生成个性化的面试准备文档与训练路径。",use_users:3833,use_cnt:5429,new7_cnt:0,note_id:"6a15195b000000000803ff72"},
    {skill_id:2118,skill_name:"行测复盘一体版",skill_description:"按题型讲解行测题目、定位错因，并沉淀错因卡、弱点档案和后续复习材料。",use_users:3226,use_cnt:6345,new7_cnt:0,note_id:"6a38f8400000000015025f64"},
    {skill_id:422,skill_name:"歸藏的社交媒体卡片 Skill",skill_description:"根据文章、脚本、截图、产品笔记、照片或视频生成小红书图文、轮播图、Live Photo 和公众号封面。",use_users:2624,use_cnt:3650,new7_cnt:0,note_id:"6a17bacd000000003701c983"},
    {skill_id:698,skill_name:"股神Serenity（李叔）",skill_description:"从历史推文中蒸馏出的 Serenity 数字分身，用于观点化的市场研究与复盘。",use_users:1987,use_cnt:2615,new7_cnt:0,note_id:"6a1f8356000000003502bd58"},
    {skill_id:10952,skill_name:"p5-animation",skill_description:"根据描述生成雨帘、花枝、飞燕等 P5.js 创意动画，并返回可运行的 sketch.js。",use_users:1962,use_cnt:2458,new7_cnt:0,note_id:"6a632c13000000000a03a59a"},
    {skill_id:8109,skill_name:"xhs-title-psych",skill_description:"根据笔记主题匹配爆款标题心理触发机制，生成 5 个候选标题并说明理由。",use_users:1890,use_cnt:2560,new7_cnt:0,note_id:"6a5207c6000000001102ebd5"},
    {skill_id:8055,skill_name:"电影风格复刻提示词导演",skill_description:"分析参考图或剧情的色调、光影、成像质感与镜头语言，输出可执行的电影感提示词。",use_users:1868,use_cnt:2606,new7_cnt:176,note_id:"6a50c541000000000f0055b2"},
    {skill_id:1093,skill_name:"瑞幸咖啡.Skill",skill_description:"根据口味偏好即兴推荐一杯瑞幸咖啡。",use_users:1865,use_cnt:2387,new7_cnt:0,note_id:"6a20f56300000000080307d7"},
    {skill_id:3813,skill_name:"heytea- poster",skill_description:"保留真实物件作为摄影锚点，加入儿童简笔画和歪扭手写字，制作竖版海报。",use_users:1828,use_cnt:2876,new7_cnt:249,note_id:"6a50c1df000000000f00467e"},
    {skill_id:259,skill_name:"动森训练岛Skill",skill_description:"从身体情况、训练目标、时间窗口和器械照片，生成可部署的动森风格运动打卡页。",use_users:1814,use_cnt:2836,new7_cnt:0,note_id:"6a13df560000000006023c24"},
    {skill_id:9946,skill_name:"3-chart-reading",skill_description:"通过三种传统文化模型进行阶段回顾、交叉分析和成长行动规划，仅供文化研究和娱乐参考。",use_users:1756,use_cnt:2581,new7_cnt:0,note_id:"6a5676d4000000001101e034"},
    {skill_id:146,skill_name:"shake-shake",skill_description:"根据用户的口味偏好即兴生成一款鸡尾酒配方。",use_users:1710,use_cnt:2131,new7_cnt:0,note_id:"6a0ffcc90000000035020dda"},
    {skill_id:2119,skill_name:"缠论-缠中说禅交易Skill",skill_description:"强制先定级别、认结构、写失效点，把技术分析变成可复核流程，不直接跳到买卖点。",use_users:1530,use_cnt:2174,new7_cnt:0,note_id:"6a38dd920000000015027fa3"},
    {skill_id:1586,skill_name:"小红书标题skill（新版）",skill_description:"更新版小红书标题 Skill，可在对话中持续迭代标题。",use_users:1509,use_cnt:2095,new7_cnt:0,note_id:"6a152ea9000000003503903a"},
    {skill_id:167,skill_name:"菜菜的人生系统Skill",skill_description:"记录对话与自我描述，识别长期思维惯性和正负向行为模式，辅助持续复盘。",use_users:1503,use_cnt:2089,new7_cnt:0,note_id:"6a109d66000000003700fbb9"},
    {skill_id:1315,skill_name:"30x-麦肯锡级市场研究",skill_description:"按研究假设、联网调研、市场分析和独立数据复核流程，产出带来源的市场研究报告和 Deck。",use_users:1252,use_cnt:1637,new7_cnt:0,note_id:"6a28e5b2000000001503c1da"},
    {skill_id:471,skill_name:"小红书爆款文案",skill_description:"输入选题、产品或经历，产出标题、3秒开头、结构化正文、标签组合和发布检查清单。",use_users:1199,use_cnt:1631,new7_cnt:0,note_id:"6a183883000000000803c8e8"},
    {skill_id:2837,skill_name:"Codex自定义提示词",skill_description:"通过明确假设、最小改动、简单实现和可验证目标，减少常见的 AI 编码错误。",use_users:1179,use_cnt:1715,new7_cnt:0,note_id:"6a429c8f000000001503dad8"},
    {skill_id:594,skill_name:"小红书视觉导演",skill_description:"根据传播目标选择视觉风格，输出 3:4 图文结构、逐页方案、图像提示词、发布文案和审查清单。",use_users:1064,use_cnt:1352,new7_cnt:0,note_id:"6a18fbc0000000003601ff68"},
    {skill_id:10109,skill_name:"zhangmofanhot",skill_description:"拆解爆款视频的钩子、结构、情绪和爆款基因，结合账号定位输出可拍的选题卡。",use_users:1001,use_cnt:1444,new7_cnt:0,note_id:"6a5b8ca600000000110056ef"},
    {skill_id:15397,skill_name:"ip-illustration",skill_description:"从确认的形象锚点出发，生成角色、文章小插画、3:4信息图、贴纸页和表情包等统一视觉资产。",use_users:993,use_cnt:1313,new7_cnt:853,note_id:"6a75a12a000000002500d37a"},
    {skill_id:164,skill_name:"可编辑前端幻灯片PPT",skill_description:"生成可在浏览器中编辑的单文件 HTML 演示文稿，支持拖拽、多选、排序、撤销、保存和导出。",use_users:864,use_cnt:1114,new7_cnt:0,note_id:"6a18242e0000000036032e4c"},
    {skill_id:10906,skill_name:"lieflat-charts",skill_description:"面向 AI Agent 的数据可视化 Skill，将数据快速生成精致、可交互的 HTML 图表。",use_users:848,use_cnt:1104,new7_cnt:152,note_id:"6a60d44a000000000f03cb6b"},
    {skill_id:40,skill_name:"Avery的创作者管理看板",skill_description:"本地创作者内容管理看板，覆盖今日推进、档期、制作管线、阶段目标和复盘。",use_users:803,use_cnt:1122,new7_cnt:0,note_id:"6a1f0f000000000000000000"}
  ],
  newList: []
};

const CATEGORY_RULES = [
  ["视觉设计", /photo|poster|海报|视觉|illustration|插画|doodle|collage|字体|电影|TVC|Live|门票/i],
  ["内容增长", /小红书|xhs|写作|文案|标题|选题|视频|公众号|媒体|sun-writing|爆款/i],
  ["产品开发", /Codex|PPT|幻灯片|chart|animation|前端|SVG|网页|homepage/i],
  ["研究决策", /市场研究|研究|Serenity|交易|缠论|法律|行业|paper|论文/i],
  ["学习求职", /面试|行测|应试|学习|背诵|岗位|简历|职业|JD/i],
  ["生活效率", /旅行|时间|人生|训练|清单|消费|咖啡|shake|月老|恋爱|astrology|六爻/i]
];

const readLocalSet = (key) => {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]").map(String)); } catch { return new Set(); }
};
const state = {
  data: null,
  board: "use",
  query: "",
  category: "all",
  sort: "rank",
  filters: { cover: false, favorite: false },
  selected: null,
  favorites: readLocalSet("redskill-favorites"),
  compare: new Set()
};
const $ = (id) => document.getElementById(id);
const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[char]));
const formatNum = (value) => {
  if (value === null || value === undefined || value === "") return "—";
  const n = Number(value || 0);
  return n >= 10000 ? `${(n / 10000).toFixed(n >= 100000 ? 0 : 1)}万` : n.toLocaleString("zh-CN");
};
const parseSocialCount = (value) => {
  const text = String(value || "").trim();
  if (!text || /^(赞|点赞|收藏|—|-)$/.test(text)) return 0;
  return text.includes("万") ? (parseFloat(text) || 0) * 10000 : (parseFloat(text.replace(/,/g, "")) || 0);
};
const persistFavorites = () => {
  try { localStorage.setItem("redskill-favorites", JSON.stringify([...state.favorites])); } catch { /* file:// and private mode may deny storage */ }
};
const isFavorite = (skill) => state.favorites.has(String(skill.skill_id));
const isCompared = (skill) => state.compare.has(String(skill.skill_id));
const getCategory = (skill) => {
  if (skill.category) return skill.category;
  const matched = CATEGORY_RULES.find(([, rule]) => rule.test(`${skill.skill_name} ${skill.skill_description || ""}`));
  return matched ? matched[0] : "其他探索";
};
const getVisualType = (skill) => {
  const value = `${skill.skill_name} ${skill.skill_description || ""}`;
  if (/平面|视觉设计|设计助理|封面设计|海报|Logo|banner|横幅|插画|包装|名片|UI 视觉|设计稿|设计灵感|照片|photo|摄影|电影|电影风格|文物绘图|p图|情绪导演|SD2\.0|镜头语言|TVC/i.test(value)) return "poster";
  if (/股票|交易|Serenity|资金/i.test(value)) return "finance";
  if (/写作|文案|标题|选题|文章|论文|笔记|公众号|Markdown|直播|小红书|xhs|关键词|keyword|账号|社媒|内容|视频|面试|行测|学习|背诵|岗位|职业|求职|简历|申论|老师|言语理解/i.test(value)) return "writing";
  if (/人生|旅行|训练|时间|月老|恋爱|astrology|六爻|咖啡|鸡尾酒|消费|购物|买东西/i.test(value)) return "life";
  if (/PPT|幻灯片|网页|market|研究|报告/i.test(value)) return "deck";
  if (/chart|数据|看板|统计/i.test(value)) return "chart";
  if (/p5|animation|SVG|前端/i.test(value)) return "chart";
  return "fun";
};
const glyphFor = (type) => ({poster:"✦", deck:"▱", chart:"╱", writing:"", finance:"↗", life:"◌", fun:"✳"}[type] || "✳");
const glyphMarkup = (type) => type === "writing"
  ? `<span class="preview-shapes" aria-hidden="true"><i class="shape-dot shape-dot-a"></i><i class="shape-dot shape-dot-b"></i><i class="shape-line shape-line-a"></i><i class="shape-line shape-line-b"></i><i class="shape-square"></i><i class="shape-poly"></i><i class="shape-arc"></i></span>`
  : (glyphFor(type) ? `<span class="preview-glyph">${glyphFor(type)}</span>` : "");
// 没有公开案例图时，为每个 Skill 生成一张确定性的独立 SVG 封面；按主题选择图形母题，并用 Skill ID 保持构图唯一。
const COVER_PALETTES = {
  poster: ["#f15a24", "#203a34", "#f6bf39", "#f5f0e8", "#2c4d58"],
  deck: ["#2c4d58", "#f15a24", "#d6b760", "#f4efe6", "#203a34"],
  chart: ["#3d6d70", "#f6bf39", "#f15a24", "#f5f0e8", "#203a34"],
  writing: ["#75614f", "#ee5a28", "#dfd4c4", "#f8f4ed", "#2e5256"],
  finance: ["#203a34", "#d7ad47", "#ee5a28", "#f5f0e8", "#3d6d70"],
  life: ["#59715f", "#e8dfd1", "#e5a34f", "#f15a24", "#2f5653"],
  fun: ["#4d3f69", "#f15a24", "#f6bf39", "#e5d8c9", "#5a846e"]
};
const coverMotifFor = (skill) => {
  const value = `${skill.skill_name} ${skill.skill_description || ""}`;
  if (/旅行|地图|路线|景点|餐厅|酒店|活动|travel|trip|map|route|itinerary|restaurant|hotel/i.test(value)) return "travel";
  if (/股票|资金|交易|A股|消费决策|买东西|比价|stock|finance|companyanalysis|business|market|投资/i.test(value)) return "finance";
  if (/面试|岗位|职业|求职|简历|offer|背诵|应试|行测|申论|言语理解|老师|career|job|resume|interview|speaking.?practice/i.test(value)) return "career";
  if (/论文|科研|Nature|学术|社科|文献|研究|绘图|复盘|知识体系|wiki|lore|法律|law|合同|诉讼|research|paper|academic|knowledge|analysis/i.test(value)) return "research";
  if (/PPT|幻灯片|html|网页|看板|前端|dashboard|workbench|panel|website|slide/i.test(value)) return "slides";
  if (/Word|Excel|文档|PDF|书|阅读|笔记|Markdown|资料|document|contract|诉讼|法律|note|redmine/i.test(value)) return "document";
  if (/清理垃圾|清理电脑|垃圾|clean|trash|garbage|cleanup/i.test(value)) return "clean";
  if (/设计|海报|视觉|插画|字体|p图|文物|摄影|Logo|banner|photo|image|poster|art|illustrat|redraw|brush|palette|makeup|architecture|kaleidoscope|quilt|3d/i.test(value)) return "design";
  if (/剪口播|导演|镜头|情绪|动画|视频|影片|video|film|camera|script|cut|fcp|cinema/i.test(value)) return "video";
  if (/人格|人生|追星|时间管理|训练|生活|成长|astrology|personality|habit|wellness|speaking|practice|plan/i.test(value)) return "life";
  if (/小红书|xhs|爆款|选题|文案|标题|关键词|公众号|直播|创作者|内容|creator|content|writing|copy|social|self.?media/i.test(value)) return "content";
  if (/Codex|代码|开发|Skill|AI|软件|系统|robot|mcp|webcraft|tool|automation|redmine|code|software/i.test(value)) return "tech";
  return "abstract";
};
const coverHash = (value) => {
  let hash = 2166136261;
  for (const char of String(value || "")) { hash ^= char.charCodeAt(0); hash = Math.imul(hash, 16777619); }
  return hash >>> 0;
};
const coverRand = (seed, offset, max) => (Math.imul(seed ^ (offset * 374761393), 668265263) >>> 0) % max;
const polygonPoints = (seed, offset, width = 800, height = 1040, count = 5) => {
  const points = [];
  for (let index = 0; index < count; index += 1) {
    const x = 42 + coverRand(seed, offset + index * 2, width - 84);
    const y = 44 + coverRand(seed, offset + index * 2 + 1, height - 88);
    points.push(`${x},${y}`);
  }
  return points.join(" ");
};
const generatedCoverFor = (skill, type) => {
  const seed = coverHash(`${skill.skill_id}:${skill.skill_name}`);
  const [background, accent, secondary, paper, dark] = COVER_PALETTES[type] || COVER_PALETTES.fun;
  const motif = coverMotifFor(skill);
  const x = 88 + coverRand(seed, 1, 310);
  const y = 190 + coverRand(seed, 2, 330);
  const width = 250 + coverRand(seed, 3, 150);
  const height = 210 + coverRand(seed, 4, 180);
  const tilt = coverRand(seed, 5, 18) - 9;
  const cornerShape = `<polygon points="${polygonPoints(seed, 10, 250, 280, 4)}" fill="${accent}" opacity=".92"/>`;
  let focal = "";
  if (motif === "travel") {
    const pinX = x + Math.round(width * .68), pinY = y + 70;
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><path d="M${x + 34} ${y + height - 46}C${x + 86} ${y + height - 194} ${x + width - 104} ${y + 184} ${x + width - 34} ${y + 56}" fill="none" stroke="${dark}" stroke-width="16" stroke-linecap="round" stroke-dasharray="18 22"/><path d="M${x + 40} ${y + 56}l44-28 18 54" fill="none" stroke="${secondary}" stroke-width="14"/><path d="M${pinX} ${pinY + 34}c0-44 64-44 64 0 0 48-32 84-32 84s-32-36-32-84z" fill="${paper}"/><circle cx="${pinX + 32}" cy="${pinY + 32}" r="12" fill="${accent}"/><circle cx="${x + 80}" cy="${y + height - 58}" r="17" fill="${accent}"/></g>`;
  } else if (motif === "content") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="12" fill="${paper}"/><path d="M${x + 32} ${y + 64}h${width - 64}M${x + 32} ${y + 104}h${Math.round(width * .68)}M${x + 32} ${y + 144}h${Math.round(width * .82)}" stroke="${dark}" stroke-width="13" stroke-linecap="square"/><path d="M${x + width - 78} ${y + height - 84}c-24-30-72 2-4 50 68-48 20-80-4-50z" fill="${accent}"/><path d="M${x + 34} ${y + height - 34}h${Math.round(width * .44)}" stroke="${secondary}" stroke-width="10"/></g>`;
  } else if (motif === "career") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x + 12}" y="${y + 72}" width="${width - 24}" height="${height - 72}" rx="18" fill="${paper}"/><circle cx="${x + 74}" cy="${y + 92}" r="34" fill="${accent}"/><path d="M${x + 28} ${y + 176}h${width - 56}M${x + 28} ${y + 214}h${Math.round(width * .62)}" stroke="${dark}" stroke-width="13" stroke-linecap="square"/><rect x="${x + width - 112}" y="${y + 34}" width="76" height="48" rx="8" fill="${secondary}"/><path d="M${x + width - 96} ${y + 58}l16 16 36-40" fill="none" stroke="${paper}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  } else if (motif === "research") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${paper}"/><path d="M${x + 32} ${y + height - 52}l${Math.round(width * .22)}-${Math.round(height * .3)} 40 22 64-${Math.round(height * .38)} 54 32" fill="none" stroke="${accent}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="M${x + 32} ${y + 54}h${Math.round(width * .46)}M${x + 32} ${y + 92}h${Math.round(width * .7)}" stroke="${dark}" stroke-width="11"/><circle cx="${x + width - 78}" cy="${y + 84}" r="38" fill="none" stroke="${secondary}" stroke-width="10"/><circle cx="${x + width - 78}" cy="${y + 84}" r="9" fill="${accent}"/><path d="M${x + width - 78} ${y + 45}v-28M${x + width - 78} ${y + 123}v28M${x + width - 117} ${y + 84}h-28M${x + width - 39} ${y + 84}h28" stroke="${secondary}" stroke-width="8"/></g>`;
  } else if (motif === "slides") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x + 30}" y="${y + 48}" width="${width - 44}" height="${height - 34}" rx="10" fill="${secondary}"/><rect x="${x}" y="${y}" width="${width - 44}" height="${height - 34}" rx="10" fill="${paper}"/><rect x="${x + 28}" y="${y + 30}" width="${Math.round(width * .38)}" height="${height - 94}" fill="${accent}" opacity=".88"/><path d="M${x + Math.round(width * .52)} ${y + 76}l${Math.round(width * .16)}-${Math.round(height * .2)} 30 20 52-${Math.round(height * .25)}" fill="none" stroke="${dark}" stroke-width="12" stroke-linecap="square"/><path d="M${x + Math.round(width * .52)} ${y + 82}h${Math.round(width * .28)}" stroke="${dark}" stroke-width="10"/></g>`;
  } else if (motif === "document") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><path d="M${x + 20} ${y + 18}h${width - 48}l28 30v${height - 34}H${x + 20}z" fill="${paper}"/><path d="M${x + width - 28} ${y + 18}v30h28" fill="${secondary}"/><path d="M${x + 52} ${y + 92}h${width - 102}M${x + 52} ${y + 132}h${width - 74}M${x + 52} ${y + 172}h${Math.round(width * .58)}" stroke="${dark}" stroke-width="12"/><path d="M${x + 52} ${y + height - 44}h${Math.round(width * .42)}" stroke="${accent}" stroke-width="10"/></g>`;
  } else if (motif === "clean") {
    focal = `<g transform="rotate(${tilt - 8} ${x + width / 2} ${y + height / 2})"><path d="M${x + width - 74} ${y + 24}L${x + 90} ${y + height - 52}" stroke="${paper}" stroke-width="20" stroke-linecap="round"/><path d="M${x + 46} ${y + height - 76}l${width - 92} 0" stroke="${accent}" stroke-width="24" stroke-linecap="round"/><path d="M${x + 74} ${y + height - 110}l${width - 132} 0M${x + 90} ${y + height - 140}l${width - 164} 0" stroke="${secondary}" stroke-width="13" stroke-linecap="round"/><path d="M${x + width - 36} ${y + 80}l18 18m-18 0 18-18" stroke="${accent}" stroke-width="10"/></g>`;
  } else if (motif === "design") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><circle cx="${x + width * .42}" cy="${y + height * .5}" r="${Math.min(width, height) * .34}" fill="${paper}"/><circle cx="${x + width * .3}" cy="${y + height * .38}" r="14" fill="${accent}"/><circle cx="${x + width * .58}" cy="${y + height * .32}" r="14" fill="${secondary}"/><path d="M${x + width * .58} ${y + height * .72}L${x + width - 26} ${y + 44}" stroke="${dark}" stroke-width="22" stroke-linecap="round"/><path d="M${x + width - 52} ${y + 70}l28-28" stroke="${accent}" stroke-width="18" stroke-linecap="round"/></g>`;
  } else if (motif === "video") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x}" y="${y + 24}" width="${width}" height="${height - 48}" rx="18" fill="${paper}"/><polygon points="${x + Math.round(width * .42)},${y + 82} ${x + Math.round(width * .42)},${y + 178} ${x + Math.round(width * .7)},${y + 130}" fill="${accent}"/><path d="M${x + 38} ${y + height - 70}h${width - 76}" stroke="${dark}" stroke-width="10"/><circle cx="${x + 72}" cy="${y + height - 70}" r="16" fill="${secondary}"/><path d="M${x + width - 88} ${y + height - 96}v52" stroke="${accent}" stroke-width="10"/></g>`;
  } else if (motif === "life") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><circle cx="${x + width * .7}" cy="${y + height * .36}" r="${Math.min(width, height) * .2}" fill="${accent}"/><path d="M${x + 52} ${y + height - 32}c24-98 102-154 202-126 40 12 72 36 96 72-88-12-162 12-216 70z" fill="${paper}"/><path d="M${x + 90} ${y + height - 36}c54-78 116-116 196-132" fill="none" stroke="${dark}" stroke-width="13" stroke-linecap="round"/><path d="M${x + 34} ${y + 54}h64M${x + 66} ${y + 22}v64" stroke="${secondary}" stroke-width="10"/></g>`;
  } else if (motif === "tech") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x}" y="${y + 26}" width="${width}" height="${height - 52}" rx="16" fill="${paper}"/><rect x="${x + 24}" y="${y + 50}" width="${width - 48}" height="36" rx="8" fill="${secondary}"/><circle cx="${x + 48}" cy="${y + 68}" r="7" fill="${accent}"/><circle cx="${x + 72}" cy="${y + 68}" r="7" fill="${accent}"/><path d="M${x + 46} ${y + 146}l34 28-34 28M${x + 104} ${y + 210}h${Math.round(width * .34)}" fill="none" stroke="${dark}" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  } else if (type === "writing") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${paper}"/><path d="M${x + 34} ${y + 70}h${width - 68}M${x + 34} ${y + 112}h${width - 108}M${x + 34} ${y + 154}h${width - 52}" stroke="${dark}" stroke-width="14" stroke-linecap="square" opacity=".82"/><path d="M${x + 34} ${y + height - 34}h${Math.max(74, width - 132)}" stroke="${accent}" stroke-width="10"/></g>`;
  } else if (type === "deck") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${paper}"/><rect x="${x + 24}" y="${y + 28}" width="${Math.round(width * .38)}" height="${height - 56}" fill="${secondary}"/><path d="M${x + 48} ${y + height - 54}l${Math.round(width * .18)}-${Math.round(height * .28)} 34 20 48-${Math.round(height * .38)} 51 53" fill="none" stroke="${dark}" stroke-width="12" stroke-linecap="square"/><path d="M${x + Math.round(width * .55)} ${y + 58}h${Math.round(width * .28)}M${x + Math.round(width * .55)} ${y + 96}h${Math.round(width * .2)}" stroke="${dark}" stroke-width="11"/></g>`;
  } else if (type === "chart") {
    const base = y + height + 42;
    const barWidth = Math.max(34, Math.round(width / 8));
    const bars = Array.from({ length: 3 }, (_, index) => {
      const barHeight = 72 + coverRand(seed, 60 + index, Math.max(74, height - 20));
      return `<rect x="${x + index * (barWidth + 28)}" y="${base - barHeight}" width="${barWidth}" height="${barHeight}" fill="${index === 1 ? accent : secondary}"/>`;
    }).join("");
    focal = `<path d="M${x - 12} ${base}h${width - 10}" stroke="${paper}" stroke-width="11"/>${bars}`;
  } else if (type === "finance") {
    const left = x + 26;
    const top = y + 74 + coverRand(seed, 72, Math.max(34, height - 98));
    const body = 60 + coverRand(seed, 92, 72);
    focal = `<path d="M${left + 20} ${top - 30}v${body + 76}" stroke="${paper}" stroke-width="8"/><rect x="${left}" y="${top}" width="40" height="${body}" fill="${secondary}"/><path d="M${x + 88} ${y + height + 12}l${Math.round(width * .22)}-${Math.round(height * .32)} 42 24 70-${Math.round(height * .38)}" fill="none" stroke="${accent}" stroke-width="14" stroke-linecap="square"/>`;
  } else if (type === "life") {
    focal = `<path d="M${x + 80} ${y + height + 42}c-16-80 18-148 89-183 74-36 136-10 157 57-63-17-116-2-154 45-34 43-59 70-92 81z" fill="${paper}"/><path d="M${x + 116} ${y + height + 38}c28-96 82-157 170-189" fill="none" stroke="${dark}" stroke-width="15" stroke-linecap="round"/>`;
  } else if (type === "poster") {
    focal = `<g transform="rotate(${tilt} ${x + width / 2} ${y + height / 2})"><polygon points="${x + 28},${y + height - 28} ${x + Math.round(width * .48)},${y + 30} ${x + width - 26},${y + 62} ${x + Math.round(width * .66)},${y + height - 22}" fill="${paper}"/><path d="M${x + 45} ${y + height - 52}l${Math.round(width * .68)}-${Math.round(height * .66)}" stroke="${dark}" stroke-width="22"/></g>`;
  } else {
    focal = `<polygon points="${polygonPoints(seed, 50, width, height, 5)}" fill="${paper}"/><path d="M${x + 18} ${y + height - 24}l${Math.round(width * .38)}-${Math.round(height * .48)} 46 29 58-${Math.round(height * .32)}" fill="none" stroke="${accent}" stroke-width="17" stroke-linecap="round" stroke-linejoin="bevel"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1040"><rect width="800" height="1040" fill="${background}"/>${cornerShape}${focal}<path d="M74 ${912 + coverRand(seed, 81, 36)}h${168 + coverRand(seed, 82, 190)}" stroke="${accent}" stroke-width="13" stroke-linecap="round"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
const fallbackCoverFor = (skill, type) => generatedCoverFor(skill, type);
// 公开案例统一使用原始小红书笔记封面；保留空表以兼容旧数据里的卡通化字段。
const CARTOON_COVER_OVERRIDES = new Map();
const cartoonCoverFor = (skill) => CARTOON_COVER_OVERRIDES.get(String(skill.skill_id));
const previewMarkup = (skill, rank, large = false) => {
  const type = getVisualType(skill);
  const cartoonCover = cartoonCoverFor(skill);
  const sourceCaseCover = skill.cover_url || skill.cover;
  const caseCover = cartoonCover || sourceCaseCover;
  const cover = caseCover || fallbackCoverFor(skill, type);
  const coverKind = cartoonCover ? "cartoonized-case" : sourceCaseCover ? "case" : "custom";
  const alt = cartoonCover ? `${skill.skill_name} 卡通人物封面` : sourceCaseCover ? `${skill.skill_name} 小红书笔记封面` : `${skill.skill_name} 风格定制封面`;
  return `<div class="effect-preview has-cover${caseCover ? "" : " fallback-cover"}" data-type="${type}" data-cover-kind="${coverKind}"${large ? " data-large=\"true\"" : ""}><img class="preview-image" src="${escapeHtml(cover)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.remove()" /></div>`;
};
const howToUse = (skill) => {
  const name = skill.skill_name;
  const value = `${name} ${skill.skill_description || ""}`;
  if (/小红书|xhs/i.test(value)) return `提供选题、受众和素材，明确要求使用「${name}」，再指定标题长度、语气、比例或发布格式。`;
  if (/PPT|幻灯片|市场研究|研究/i.test(value)) return `提供主题、原始材料、目标受众和交付格式，并说明需要 HTML、PPTX、PDF 还是报告。`;
  if (/photo|照片|海报|视觉|插画|poster|collage|电影|TVC/i.test(value)) return `上传参考图或描述主题，说明保留什么、改变什么，以及尺寸、风格和使用场景。`;
  if (/Codex|前端|animation|chart|SVG/i.test(value)) return `说明技术栈、输入数据或页面目标，要求先列假设，再给出可运行代码和验证方式。`;
  if (/面试|行测|学习|背诵|岗位|简历/i.test(value)) return `提供题目、JD、简历或学习材料，说明目标日期、基础水平和希望的训练方式。`;
  return `直接提供你的具体目标、背景信息和约束，开头写「请使用${name}」，再指定希望得到的输出格式。`;
};
const expectedEffect = (skill) => {
  const value = `${skill.skill_name} ${skill.skill_description || ""}`;
  if (/Codex自定义提示词/i.test(value)) return "减少凭空假设、过度改动和未验证代码，形成更可控、更易审查的编码过程。";
  if (/PPT|幻灯片|市场研究|研究/i.test(value)) return "得到结构清晰、可继续编辑或汇报使用的研究报告、网页演示稿或数据 Deck。";
  if (/小红书|xhs/i.test(value)) return "得到可直接进入发布流程的标题、正文、视觉方案、标签或复盘清单；传播效果仍需真实数据验证。";
  if (/照片|海报|视觉|插画|poster|collage|电影|TVC/i.test(value)) return "得到一套明确的视觉方向、效果预览和可继续生成或制作的提示词。";
  if (/Codex|前端|animation|chart|SVG/i.test(value)) return "得到可运行的前端代码、动画、图表或页面初稿，并可继续浏览器验收。";
  if (/股票|交易|Serenity/i.test(value)) return "得到带有过程和假设的复盘框架；不构成投资建议，也不保证结果。";
  return "得到结构化分析、行动建议或个性化方案，方便下一步执行和复盘。";
};
const deliveryMeta = (skill) => {
  const value = `${skill.skill_name} ${skill.skill_description || ""}`;
  if (/PPT|幻灯片|市场研究|研究/i.test(value)) return {
    inputs: "主题、原始材料、受众、页数或研究范围",
    output: "研究报告、Deck、HTML / PPTX / PDF",
    constraints: "来源可追溯，数据口径和版式需复核",
    unknown: "最终尺寸、模板偏好、是否需要可编辑对象"
  };
  if (/小红书|xhs/i.test(value)) return {
    inputs: "选题、账号定位、受众、图片或视频素材",
    output: "标题、正文、标签、视觉方案或复盘清单",
    constraints: "字数、比例、语气和平台规则",
    unknown: "账号阶段、发布目标和可用素材版权"
  };
  if (/照片|海报|视觉|插画|poster|collage|电影|TVC/i.test(value)) return {
    inputs: "参考图、主题、文案、尺寸和保留元素",
    output: "效果预览、视觉方案和可执行提示词",
    constraints: "风格锚点、画面比例、字体和素材版权",
    unknown: "最终输出尺寸、品牌规范和是否需要透明背景"
  };
  if (/Codex|前端|animation|chart|SVG/i.test(value)) return {
    inputs: "代码库、技术栈、页面目标、数据或组件",
    output: "可运行代码、页面初稿、动画或交互图表",
    constraints: "先列假设，复用现有组件，并通过浏览器验证",
    unknown: "目标路由、断点、依赖版本和验收标准"
  };
  return {
    inputs: "文本、文件、图片、链接或个人背景信息",
    output: "结构化分析、行动建议或可复制结果",
    constraints: "补齐目标、范围、时限和输出格式",
    unknown: "需要人工确认的事实、权限或专业边界"
  };
};
const promptFor = (skill) => {
  const value = `${skill.skill_name} ${skill.skill_description || ""}`;
  if (/PPT|幻灯片/i.test(value)) return `请使用「${skill.skill_name}」制作一份关于【主题】的演示稿。\n受众：【】；页数：【】；风格：【】；输出：【HTML / PPTX】。\n先列信息结构，再生成可编辑成品。`;
  if (/小红书|xhs/i.test(value)) return `请使用「${skill.skill_name}」。\n选题：【】\n账号/受众：【】\n素材：【】\n请输出标题、正文、标签，并给出发布前检查清单。`;
  if (/照片|海报|视觉|插画|poster|collage|电影/i.test(value)) return `请使用「${skill.skill_name}」处理这张参考图/这个主题：【】。\n保留元素：【】；改变元素：【】；尺寸：【】；风格：【】。\n先给视觉方案，再给最终提示词。`;
  if (/Codex|前端|animation|chart|SVG/i.test(value)) return `请使用「${skill.skill_name}」完成：【任务】。\n技术栈：【】；输入数据或素材：【】；约束：【】。\n先列假设和验收标准，再输出可运行结果。`;
  return `请使用「${skill.skill_name}」完成：【任务】。\n背景/材料：【】\n目标：【】\n限制条件：【】\n请按步骤输出，并标注需要我补充的信息。`;
};
const boardItems = () => {
  const source = state.data || FALLBACK_DATA;
  const base = state.board === "new" ? (source.newList || []) : state.board === "today" ? (source.todayList || []) : state.board === "skillhub" ? (source.skillHubList || []) : (source.useList || []);
  if (base.length) return base;
  return source.useList || [];
};
const metricFor = (skill) => {
  if (state.board === "new") return { main: skill.new7_cnt || 0, label: "7天新增", sub: skill.cum_cnt || skill.use_cnt || 0, subLabel: "累计调用" };
  if (state.board === "today") return { main: skill.use_users || 0, label: "今日用户", sub: skill.use_cnt || 0, subLabel: "今日调用" };
  if (state.board === "skillhub") return { main: skill.use_users, label: "使用人数", sub: skill.use_cnt, subLabel: "累计调用" };
  return { main: skill.use_users || 0, label: "使用人数", sub: skill.use_cnt || 0, subLabel: "累计调用" };
};
const getFiltered = () => {
  const query = state.query.trim().toLowerCase();
  const filtered = boardItems().filter((skill) => {
    const categoryOk = state.category === "all" || getCategory(skill) === state.category;
    const queryOk = !query || `${skill.skill_name} ${skill.skill_description || ""}`.toLowerCase().includes(query);
    const coverOk = !state.filters.cover || Boolean(skill.cover_url || skill.cover);
    const favoriteOk = !state.filters.favorite || isFavorite(skill);
    return categoryOk && queryOk && coverOk && favoriteOk;
  });
  return filtered.sort((a, b) => {
    const metric = (skill) => {
      if (state.sort === "users") return Number(skill.use_users || 0);
      if (state.sort === "new") return Number(skill.new7_cnt || 0);
      if (state.sort === "likes") return parseSocialCount(skill.cover_likes);
      if (state.sort === "collects") return parseSocialCount(skill.cover_collects);
      if (state.sort === "cover") return Number(Boolean(skill.cover_url || skill.cover));
      return -Number(skill.rank || 0);
    };
    return metric(b) - metric(a) || Number(a.rank || 0) - Number(b.rank || 0);
  });
};
const populateCategories = () => {
  const select = $("categorySelect");
  const source = state.data || FALLBACK_DATA;
  const categories = [...new Set([...(source.useList || []), ...(source.newList || []), ...(source.todayList || []), ...(source.skillHubList || [])].map(getCategory))].sort();
  select.innerHTML = `<option value="all">全部类别</option>${categories.map((category) => `<option value="${category}">${category}</option>`).join("")}`;
};
const renderTrendRail = () => {
  const source = state.data || FALLBACK_DATA;
  const rising = [...(source.newList || [])]
    .filter((skill) => Number(skill.new7_cnt || 0) > 0)
    .sort((a, b) => Number(b.new7_cnt || 0) - Number(a.new7_cnt || 0))
    .slice(0, 3);
  $("trendRail").innerHTML = rising.map((skill, index) => `<button class="trend-card" type="button" data-skill-id="${escapeHtml(skill.skill_id)}"><span class="trend-index">0${index + 1}</span><span class="trend-copy"><strong>${escapeHtml(skill.skill_name)}</strong><small>${getCategory(skill)} · 近7天 +${formatNum(skill.new7_cnt)}</small></span><span class="trend-arrow">↗</span></button>`).join("");
  $("trendRail").querySelectorAll(".trend-card").forEach((card) => card.addEventListener("click", () => openDrawer(Number(card.dataset.skillId))));
};
const renderStats = () => {
  const data = state.data || FALLBACK_DATA;
  const useList = data.useList || [];
  const newList = data.newList || [];
  $("totalSkills").textContent = formatNum((data.allSkills || []).length || useList.length);
  const top = useList[0];
  $("topUsers").textContent = top ? formatNum(top.use_users) : "—";
  $("topSkillName").textContent = top ? top.skill_name : "—";
  $("newSkills").textContent = newList.length ? formatNum(newList.reduce((total, skill) => total + Number(skill.new7_cnt || 0), 0)) : formatNum(useList.reduce((total, skill) => total + Number(skill.new7_cnt || 0), 0));
  $("dataDate").textContent = data.dataDate || "—";
  $("generatedAt").textContent = data.genTime || data.generatedAt || "—";
  const all = data.allSkills || [...useList, ...(data.newList || []), ...(data.todayList || []), ...(data.skillHubList || [])];
  const coverCount = all.filter((skill) => skill.cover_url || skill.cover).length;
  const customCount = Math.max(0, all.length - coverCount);
  $("coverageText").textContent = all.length ? `封面 ${all.length}（真实 ${coverCount} · 定制 ${customCount}）` : "封面图 —";
};
const renderInsight = (items) => {
  if (!items.length) { $("insightText").textContent = "当前筛选没有可用趋势"; return; }
  const top = items[0];
  const metric = metricFor(top);
  const category = getCategory(top);
  const text = state.board === "new" ? `近期上升信号：${top.skill_name} 近 7 天新增 ${formatNum(metric.main)} 次，集中在「${category}」方向。` : state.board === "skillhub" ? `SkillHub 公开条目已按类别整理；当前共 ${formatNum(items.length)} 个结果，点击卡片查看适用场景和调用示例。` : `当前视图榜首是 ${top.skill_name}，${metric.label} ${formatNum(metric.main)}；点击卡片可查看完整使用说明。`;
  $("insightText").textContent = text;
};
const renderCards = () => {
  const items = getFiltered();
  $("visibleCount").textContent = formatNum(items.length);
  renderInsight(items);
  $("sortSelect").value = state.sort;
  $("coverToggle").classList.toggle("is-active", state.filters.cover);
  $("favoriteFilter").classList.toggle("is-active", state.filters.favorite);
  $("coverToggle").setAttribute("aria-pressed", String(state.filters.cover));
  $("favoriteFilter").setAttribute("aria-pressed", String(state.filters.favorite));
  $("emptyState").hidden = items.length > 0;
  $("rankingGrid").innerHTML = items.map((skill, index) => {
    const metric = metricFor(skill);
    const rank = Number(skill.rank || index + 1);
    const hasCover = Boolean(skill.cover_url || skill.cover);
    const cartoonized = Boolean(cartoonCoverFor(skill));
    const coverLabel = cartoonized ? "卡通化案例" : skill.cover_match === "search-related" ? "相关笔记" : "案例";
    const caseStats = skill.source === "SkillHub" ? `SkillHub · ${skill.skillhub_tags?.slice(0, 2).join(" · ") || "公开条目"}` : hasCover && (skill.cover_likes || skill.cover_collects) ? `${coverLabel} ${skill.cover_likes || "—"} 赞 · ${skill.cover_collects || "—"} 藏` : hasCover ? (cartoonized ? "卡通化案例图" : skill.cover_match === "search-related" ? "相关笔记封面" : "已有案例图") : "风格定制封面";
    return `<article class="skill-card" tabindex="0" role="button" data-skill-id="${escapeHtml(skill.skill_id)}" aria-label="查看 ${escapeHtml(skill.skill_name)} 详情"><div>${previewMarkup(skill, rank)}</div><div class="skill-content"><div class="skill-topline"><span class="rank-number">#${String(rank).padStart(2, "0")}</span><span class="card-actions"><span class="category-tag">${escapeHtml(getCategory(skill))}</span><button class="card-icon-button favorite-button${isFavorite(skill) ? " is-active" : ""}" type="button" data-action="favorite" aria-label="${isFavorite(skill) ? "取消收藏" : "收藏"} ${escapeHtml(skill.skill_name)}">${isFavorite(skill) ? "★" : "☆"}</button></span></div><h3 class="skill-title">${escapeHtml(skill.skill_name)}</h3><p class="skill-desc">${escapeHtml(skill.skill_description || "暂无描述，打开详情查看可用方式。")}</p><div class="card-signals"><span>${caseStats}</span><button class="compare-toggle${isCompared(skill) ? " is-active" : ""}" type="button" data-action="compare" aria-pressed="${isCompared(skill)}">${isCompared(skill) ? "已加入对比" : "+ 加入对比"}</button></div><div class="skill-footer"><div class="skill-metrics"><span class="metric"><span>${metric.label}</span><strong>${state.board === "new" ? "+" : ""}${formatNum(metric.main)}</strong></span><span class="metric"><span>${metric.subLabel}</span><strong>${formatNum(metric.sub)}</strong></span></div><span class="open-detail">查看 ↗</span></div></div></article>`;
  }).join("");
  $("rankingGrid").querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("click", (event) => { if (!event.target.closest("button")) openDrawer(Number(card.dataset.skillId)); });
    card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openDrawer(Number(card.dataset.skillId)); } });
  });
  $("rankingGrid").querySelectorAll("[data-action='favorite']").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    const id = String(button.closest(".skill-card").dataset.skillId);
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    persistFavorites(); renderCards(); renderCompareBar();
  }));
  $("rankingGrid").querySelectorAll("[data-action='compare']").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation();
    const id = String(button.closest(".skill-card").dataset.skillId);
    if (state.compare.has(id)) state.compare.delete(id);
    else if (state.compare.size < 3) state.compare.add(id);
    else { renderActionFeedback("最多选择 3 个 Skill 对比"); return; }
    renderCards(); renderCompareBar();
  }));
};
const findSkill = (id) => {
  const preferred = state.board === "new" ? (state.data.newList || []) : state.board === "today" ? (state.data.todayList || []) : state.board === "skillhub" ? (state.data.skillHubList || []) : (state.data.useList || []);
  const all = [...preferred, ...(state.data.useList || []), ...(state.data.newList || []), ...(state.data.todayList || []), ...(state.data.skillHubList || [])];
  return all.find((skill) => Number(skill.skill_id) === Number(id));
};
const allSkills = () => {
  const data = state.data || FALLBACK_DATA;
  return [...(data.useList || []), ...(data.newList || []), ...(data.todayList || []), ...(data.skillHubList || [])].filter((skill, index, list) => list.findIndex((item) => item.skill_id === skill.skill_id) === index);
};
const renderActionFeedback = (message) => {
  const target = $("shareFeedback");
  if (!target) return;
  target.textContent = message;
  window.clearTimeout(renderActionFeedback.timer);
  renderActionFeedback.timer = window.setTimeout(() => { target.textContent = ""; }, 2400);
};
const renderCompareBar = () => {
  const selected = allSkills().filter((skill) => isCompared(skill));
  const bar = $("compareBar");
  bar.hidden = selected.length === 0;
  $("compareCount").textContent = `${selected.length} 个 Skill`;
  const panel = $("comparePanel");
  if (!selected.length) { panel.hidden = true; panel.innerHTML = ""; return; }
  panel.innerHTML = `<div class="compare-panel-heading"><div><span class="eyebrow">COMPARE / SHORTLIST</span><h3>把候选 Skill 放在一起看</h3></div><button class="icon-button" id="closeCompare" type="button" aria-label="关闭对比">×</button></div><div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>指标</th>${selected.map((skill) => `<th>${escapeHtml(skill.skill_name)}</th>`).join("")}</tr></thead><tbody>${[
    ["类别", (skill) => getCategory(skill)],
    ["使用人数", (skill) => formatNum(skill.use_users)],
    ["7天新增", (skill) => `+${formatNum(skill.new7_cnt)}`],
    ["封面点赞", (skill) => skill.cover_likes || "—"],
    ["封面收藏", (skill) => skill.cover_collects || "—"],
    ["可交付", (skill) => deliveryMeta(skill).output]
  ].map(([label, value]) => `<tr><th>${label}</th>${selected.map((skill) => `<td>${escapeHtml(value(skill))}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  $("closeCompare").addEventListener("click", () => { panel.hidden = true; });
};
const imageFromSource = (source) => new Promise((resolve, reject) => {
  if (!source) { reject(new Error("no image")); return; }
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = reject;
  image.src = source;
});
const downloadShareCard = async (skill) => {
  const canvas = document.createElement("canvas");
  canvas.width = 1080; canvas.height = 1440;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f5f2ec"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f15a24"; ctx.fillRect(0, 0, canvas.width, 56);
  ctx.fillStyle = "#161616"; ctx.font = "500 24px DM Mono, monospace"; ctx.fillText("REDSKILL RADAR / WEEKLY PICK", 64, 104);
  ctx.fillStyle = "#f15a24"; ctx.font = "800 58px Inter, Noto Sans SC, sans-serif"; ctx.fillText("值得先装的", 64, 192); ctx.fillStyle = "#161616"; ctx.fillText("Skill", 64, 262);
  const imageX = 64, imageY = 310, imageW = 952, imageH = 610;
  ctx.fillStyle = "#161616"; ctx.fillRect(imageX, imageY, imageW, imageH);
  try {
    const image = await imageFromSource(cartoonCoverFor(skill) || skill.cover_url || skill.cover || fallbackCoverFor(skill, getVisualType(skill)));
    const scale = Math.max(imageW / image.naturalWidth, imageH / image.naturalHeight);
    const width = image.naturalWidth * scale, height = image.naturalHeight * scale;
    ctx.drawImage(image, imageX + (imageW - width) / 2, imageY + (imageH - height) / 2, width, height);
  } catch {
    ctx.fillStyle = "#f15a24"; ctx.fillRect(imageX, imageY, imageW, imageH);
    ctx.fillStyle = "#fffdf9"; ctx.font = "800 92px Inter, Noto Sans SC, sans-serif"; ctx.fillText("S", imageX + 60, imageY + 180);
  }
  ctx.fillStyle = "#161616"; ctx.font = "800 48px Inter, Noto Sans SC, sans-serif";
  const title = String(skill.skill_name || "");
  ctx.fillText(title.slice(0, 22), 64, 1010);
  ctx.fillStyle = "#817a72"; ctx.font = "500 24px DM Mono, monospace";
  ctx.fillText(`${getCategory(skill)}  ·  使用人数 ${formatNum(skill.use_users)}  ·  7天新增 +${formatNum(skill.new7_cnt)}`, 64, 1060);
  ctx.fillStyle = "#55504b"; ctx.font = "400 27px Noto Sans SC, sans-serif";
  const description = String(skill.skill_description || "");
  ctx.fillText(description.slice(0, 30), 64, 1132); ctx.fillText(description.slice(30, 60), 64, 1178);
  ctx.fillStyle = "#f15a24"; ctx.font = "700 25px Noto Sans SC, sans-serif"; ctx.fillText("先安装 Skill，再在对话中点名调用", 64, 1280);
  ctx.fillStyle = "#817a72"; ctx.font = "500 20px DM Mono, monospace"; ctx.fillText("redskill radar  ·  保存这张图，下一次挑 Skill 更快", 64, 1350);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("canvas export failed");
  const link = document.createElement("a"); link.download = `${String(skill.skill_name || "skill").replace(/[^\w\u4e00-\u9fff-]+/g, "-")}-redskill.png`; link.href = URL.createObjectURL(blob); link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
};
const openDrawer = (id) => {
  const skill = findSkill(id); if (!skill) return;
  state.selected = skill;
  const rank = Number(skill.rank || (state.data.useList || []).findIndex((item) => item.skill_id === skill.skill_id) + 1 || 1);
  $("drawerVisual").innerHTML = previewMarkup(skill, rank, true);
  $("drawerRank").textContent = `#${String(rank).padStart(2, "0")}`;
  $("drawerCategory").textContent = getCategory(skill);
  $("drawerTitle").textContent = skill.skill_name;
  $("drawerDescription").textContent = skill.skill_description || "暂无详细描述。";
  $("drawerUsers").textContent = formatNum(skill.use_users);
  $("drawerUses").textContent = formatNum(skill.use_cnt);
  $("drawerNew").textContent = skill.new7_cnt ? `+${formatNum(skill.new7_cnt)}` : "—";
  $("drawerHow").textContent = howToUse(skill);
  $("drawerEffect").textContent = expectedEffect(skill);
  $("drawerInstall").textContent = `先在 Codex、WorkBuddy 或其他 Agent 工具的 Skill / 插件 / 扩展入口安装「${skill.skill_name}」。安装完成后，在新对话中点名调用它，再补充你的素材、目标和输出格式。`;
  const meta = deliveryMeta(skill);
  $("drawerInputs").textContent = meta.inputs;
  $("drawerOutput").textContent = meta.output;
  $("drawerConstraints").textContent = meta.constraints;
  $("drawerUnknown").textContent = meta.unknown;
  $("toggleFavorite").textContent = isFavorite(skill) ? "已收藏 Skill" : "收藏 Skill";
  $("toggleFavorite").classList.toggle("is-active", isFavorite(skill));
  $("toggleCompare").textContent = isCompared(skill) ? "移出对比" : "加入对比";
  $("toggleCompare").classList.toggle("is-active", isCompared(skill));
  document.querySelector("#drawerPrompt code").textContent = promptFor(skill);
  $("drawerSource").href = skill.source === "SkillHub" ? (skill.note_url || "https://scys.com/skillhub/") : skill.note_id ? `https://www.xiaohongshu.com/explore/${skill.note_id}` : (state.data.sourceUrl || "https://cowork.xiaohongshu.com/s/redskill-rank");
  const caseBlock = $("drawerCase");
  const caseLink = $("drawerCaseLink");
  if (skill.cover_url || skill.cover) {
    caseBlock.hidden = false;
    $("drawerCaseTitle").textContent = cartoonCoverFor(skill) ? "小红书案例 · 卡通化封面" : (skill.cover_match === "search-related" ? "相关笔记 · 小红书封面" : (skill.cover_title || "小红书视觉案例预览"));
    $("drawerCaseStats").textContent = `点赞 ${skill.cover_likes || "—"} · 收藏 ${skill.cover_collects || "—"}`;
    caseLink.href = skill.cover_source_url || (skill.note_id ? `https://www.xiaohongshu.com/explore/${skill.note_id}` : "https://cowork.xiaohongshu.com/s/redskill-rank");
  } else {
    caseBlock.hidden = true;
  }
  $("modalBackdrop").hidden = false; $("detailDrawer").classList.add("is-open"); $("detailDrawer").setAttribute("aria-hidden", "false"); document.body.classList.add("drawer-open"); $("closeDrawer").focus();
};
const closeDrawer = () => { $("detailDrawer").classList.remove("is-open"); $("detailDrawer").setAttribute("aria-hidden", "true"); $("modalBackdrop").hidden = true; document.body.classList.remove("drawer-open"); state.selected = null; };
const loadData = async (showLoading = false) => {
  if (showLoading) { $("syncLabel").textContent = "读取中"; $("syncLabel").previousElementSibling.classList.add("is-loading"); }
  try {
    const response = await fetch(`data.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    state.data = await response.json();
    try {
      const coverResponse = await fetch(`visual-covers.json?ts=${Date.now()}`, { cache: "no-store" });
      if (coverResponse.ok) {
        const covers = await coverResponse.json();
        const applyCovers = (list = []) => list.map((skill) => ({ ...skill, ...(covers[skill.skill_name] || {}) }));
        state.data.useList = applyCovers(state.data.useList);
        state.data.newList = applyCovers(state.data.newList);
        state.data.todayList = applyCovers(state.data.todayList);
        state.data.skillHubList = applyCovers(state.data.skillHubList);
        state.data.allSkills = applyCovers(state.data.allSkills);
      }
    } catch {
      // Ranking data remains usable if the optional visual cover snapshot is unavailable.
    }
  } catch (error) {
    state.data = FALLBACK_DATA;
    $("syncLabel").textContent = "使用内置快照";
  } finally {
    populateCategories(); renderTrendRail(); renderStats(); renderCards(); renderCompareBar();
    $("syncLabel").textContent = showLoading && state.data !== FALLBACK_DATA ? "已同步" : ($("syncLabel").textContent || "已同步");
    $("syncLabel").previousElementSibling.classList.remove("is-loading");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  state.data = FALLBACK_DATA;
  $("searchInput").addEventListener("input", (event) => { state.query = event.target.value; renderCards(); });
  $("categorySelect").addEventListener("change", (event) => { state.category = event.target.value; renderCards(); });
  $("sortSelect").addEventListener("change", (event) => { state.sort = event.target.value; renderCards(); });
  $("coverToggle").addEventListener("click", () => { state.filters.cover = !state.filters.cover; renderCards(); });
  $("favoriteFilter").addEventListener("click", () => { state.filters.favorite = !state.filters.favorite; renderCards(); });
  document.querySelectorAll("[data-board]").forEach((button) => button.addEventListener("click", () => {
    state.board = button.dataset.board;
    document.querySelectorAll("[data-board]").forEach((item) => { const active = item === button; item.classList.toggle("is-active", active); item.setAttribute("aria-selected", String(active)); });
    renderCards();
  }));
  $("clearCompare").addEventListener("click", () => { state.compare.clear(); renderCompareBar(); renderCards(); });
  $("compareNow").addEventListener("click", () => { renderCompareBar(); $("comparePanel").hidden = false; $("comparePanel").scrollIntoView({ behavior: "smooth", block: "center" }); });
  $("refreshButton").addEventListener("click", () => loadData(true));
  $("closeDrawer").addEventListener("click", closeDrawer); $("modalBackdrop").addEventListener("click", closeDrawer);
  $("toggleFavorite").addEventListener("click", () => {
    if (!state.selected) return;
    const id = String(state.selected.skill_id);
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    persistFavorites(); openDrawer(Number(id)); renderCards(); renderCompareBar();
  });
  $("toggleCompare").addEventListener("click", () => {
    if (!state.selected) return;
    const id = String(state.selected.skill_id);
    if (state.compare.has(id)) state.compare.delete(id);
    else if (state.compare.size < 3) state.compare.add(id);
    else { renderActionFeedback("最多选择 3 个 Skill 对比"); return; }
    openDrawer(Number(id)); renderCards(); renderCompareBar();
  });
  $("shareCardButton").addEventListener("click", async () => {
    if (!state.selected) return;
    const button = $("shareCardButton"); button.disabled = true; button.textContent = "生成中…";
    try { await downloadShareCard(state.selected); renderActionFeedback("已下载小红书分享卡片"); }
    catch { renderActionFeedback("生成失败，请稍后重试"); }
    finally { button.disabled = false; button.innerHTML = "生成小红书卡片 <span aria-hidden=\"true\">↗</span>"; }
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeDrawer(); if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("searchInput").focus(); } });
  $("copyPrompt").addEventListener("click", async () => { if (!state.selected) return; const text = promptFor(state.selected); try { await navigator.clipboard.writeText(text); $("copyFeedback").textContent = "已复制到剪贴板"; } catch { $("copyFeedback").textContent = "请手动选择复制"; } setTimeout(() => { $("copyFeedback").textContent = ""; }, 2200); });
  renderTrendRail(); renderStats(); renderCards(); renderCompareBar(); loadData();
});
