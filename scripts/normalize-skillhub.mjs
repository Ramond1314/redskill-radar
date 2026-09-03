import { readFile, writeFile } from "node:fs/promises";

const source = JSON.parse(await readFile(new URL("../skillhub-scraped.json", import.meta.url), "utf8"));
const output = source.map((item, index) => {
  const slug = String(item.id || `skill-${index + 1}`);
  let hash = 0;
  for (const char of slug) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  const skillId = 900000000 + (hash % 9000000);
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const text = `${item.name || ""} ${item.description || ""}`;
  return {
    skill_id: skillId,
    skillhub_id: slug,
    skill_name: item.name || slug,
    skill_description: item.description || "SkillHub 公开条目，打开详情查看适用场景。",
    use_users: null,
    use_cnt: null,
    new7_cnt: null,
    note_id: null,
    note_url: `https://scys.com/skillhub/skills/${encodeURIComponent(slug)}`,
    skillhub_tags: tags,
    category: categoryFor(tags, text),
    author: item.author || "",
    published_at: String(item.publishedAt || "").replace(/^发布于\s*/, ""),
    source: "SkillHub",
    board: "skillhub",
    rank: index + 1
  };
});

await writeFile(new URL("../skillhub-data.json", import.meta.url), `${JSON.stringify(output, null, 2)}\n`, "utf8");
console.log(`Saved ${output.length} SkillHub skills`);

function categoryFor(tags, text) {
  const has = (values) => values.some((value) => tags.includes(value));
  if (has(["视觉与素材"]) || /视觉|海报|插画|摄影|图片|设计|视频|剪辑|封面/.test(text)) return "视觉设计";
  if (has(["研究与选题", "判断与决策", "数据分析与复盘", "商品与选品"]) || /研究|选题|决策|复盘|分析|选品|竞品|调研/.test(text)) return "研究决策";
  if (has(["自动化与集成", "AI 自动化与工作流", "出海增长与产品", "产品与站点构建"]) || /自动化|工作流|Agent|产品|站点|网页|代码|开发/.test(text)) return "产品开发";
  if (has(["内容创作与个人 IP", "小红书经营与虚拟产品", "私域运营与成交", "短视频创作与带货", "内容制作", "发布与分发", "客户与成交", "电商经营与获客"]) || /小红书|公众号|写作|文案|标题|内容|视频|成交|销售|私域|电商|发布|分发/.test(text)) return "内容增长";
  if (/面试|岗位|职业|求职|简历|学习|课程|考试|应试|背诵/.test(text)) return "学习求职";
  if (/生活|旅行|时间|健康|训练|家庭|消费|购物/.test(text)) return "生活效率";
  return "其他探索";
}
