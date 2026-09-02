# REDSkill Radar

小红书 REDSkill 排名看板：展示累计使用人数榜、7 天新增榜和当日新增榜，支持搜索、类别筛选、趋势卡片、封面 / 收藏筛选、排序、Skill 对比、详情抽屉、使用说明、预期效果、可复制调用示例和小红书分享卡片导出。已有公开案例的 Skill 使用小红书封面，缺少案例封面的 Skill 则根据自身风格生成独立定制封面。

## 本地查看

```bash
npm run serve
```

然后打开 `http://127.0.0.1:4173/`。

## 发布到 GitHub Pages

仓库已配置 GitHub Pages 工作流。推送到 `main` 分支后会自动部署，公开地址为：

`https://ramond1314.github.io/redskill-radar/`

首次发布时，请在 GitHub 仓库的 **Settings → Pages** 中确认 **Source** 使用 **GitHub Actions**。

## 手动刷新数据

```bash
npm run update-data
```

脚本从小红书公开榜单数据生成 `data.json`。GitHub Actions 已配置为每周一自动运行，也可以在 Actions 页面手动触发。

## 数据说明

- `useList`：按累计使用人数排名的 TOP100
- `newList`：近 7 天新增排名
- `todayList`：数据日当天新发布 Skill 的使用人数排名
- `visual-covers.json`：小红书案例封面快照、互动数据和来源链接；更新图片时替换对应条目即可
- `cover-manifest.json`：本次公开检索的审计清单，包含命中的笔记、封面地址、点赞 / 收藏和未命中状态
- 当前快照已接入 106 个小红书案例或相关笔记封面；其余没有案例封面的卡片均使用按 Skill 名称、描述和类型生成的独立定制 SVG 封面
- 标注卡片优先使用小红书笔记原始封面；暂未找到同一 Skill 笔记时，使用内容方向相近的相关笔记封面，并在卡片中标注“相关笔记”
- 卡片详情里的“怎么使用”先说明安装：在 Codex、WorkBuddy 或其他 Agent 工具的 Skill / 插件 / 扩展入口安装后，再在对话中点名调用
- 定制封面根据旅行地图、内容创作、求职面试、科研论文、幻灯片、文档、清理工具、设计、视频、生活、代码等主题使用不同主视觉，不复用同一张图，也不再显示通用圆圈、✳ 或 `WRITING / PREVIEW` 占位
- 每周自动任务更新榜单数字；案例快照按需手动替换即可
