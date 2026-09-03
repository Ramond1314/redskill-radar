#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";

const SOURCE = "https://cowork.xiaohongshu.com/s/redskill-rank/data.json";
const output = process.argv.includes("--output") ? process.argv[process.argv.indexOf("--output") + 1] : "data.json";

const response = await fetch(SOURCE, { headers: { "user-agent": "REDSkill-Radar/1.0" } });
if (!response.ok) throw new Error(`Failed to fetch REDSkill data: HTTP ${response.status}`);
const raw = await response.json();

let visualCovers = {};
try {
  visualCovers = JSON.parse(await readFile(new URL("../visual-covers.json", import.meta.url), "utf8"));
} catch {
  // The ranking updater can still run when the optional visual cover snapshot is absent.
}

let skillHubList = [];
try {
  skillHubList = JSON.parse(await readFile(new URL("../skillhub-data.json", import.meta.url), "utf8"));
} catch {
  // The REDSkill snapshot remains usable when the optional SkillHub snapshot is absent.
}

const normalize = (list = [], board) => list.map((skill, index) => ({
  ...skill,
  ...(visualCovers[skill.skill_name] || {}),
  rank: index + 1,
  board,
  note_url: skill.note_id ? `https://www.xiaohongshu.com/explore/${skill.note_id}` : undefined,
}));

const useList = normalize(raw.useList, "use").slice(0, 100);
const newList = normalize(raw.newList, "new").slice(0, 100);
const todayList = normalize(raw.todayList, "today").slice(0, 100);
const seen = new Set();
const allSkills = [...useList, ...newList, ...todayList, ...skillHubList].filter((skill) => {
  if (seen.has(skill.skill_id)) return false;
  seen.add(skill.skill_id);
  return true;
});

const payload = {
  dataDate: raw.dataDate,
  genTime: raw.genTime,
  generatedAt: new Date().toISOString(),
  sourceUrl: "https://cowork.xiaohongshu.com/s/redskill-rank",
  allSkillsCount: allSkills.length,
  useList,
  newList,
  todayList,
  skillHubList,
  allSkills,
};

const directory = output.includes("/") ? output.slice(0, output.lastIndexOf("/")) : ".";
if (directory && directory !== ".") await mkdir(directory, { recursive: true });
await writeFile(output, JSON.stringify(payload, null, 2) + "\n", "utf8");
console.log(`Saved ${allSkills.length} unique skills to ${output} (${raw.dataDate})`);
