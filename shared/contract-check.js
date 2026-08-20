/* DSE 知识图谱 · 数据结构契约校验脚本
 * 用法: node contract-check.js <graph-data.js 路径>
 * 作用: 在「复制渲染器 + 替换数据」之前，先校验新科目数据是否满足渲染器的隐式契约（见生产线手册 2.6 节）。
 * 全部通过才允许进入渲染器开发。物理实战证明：契约不匹配会导致渲染器各种诡异崩溃，事前拦在数据层最省时间。
 */
const path = process.argv[2] || './graph-data.js';
const g = require(require('path').resolve(path));

const problems = [];
const ok = msg => console.log('  ✓ ' + msg);
const bad = msg => { problems.push(msg); console.log('  ✗ ' + msg); };

console.log('=== 契约校验: ' + path + ' ===');

/* 1. 顶层结构 */
console.log('\n[1] 顶层结构');
if (!g.meta) bad('缺 meta'); else ok('meta 存在');
if (!Array.isArray(g.nodes)) bad('nodes 不是数组'); else ok('nodes 数组');
if (!Array.isArray(g.edges)) bad('edges 不是数组'); else ok('edges 数组');
if (!Array.isArray(g.motherProblems)) bad('motherProblems 不是数组'); else ok('motherProblems 数组');
if (!Array.isArray(g.domains)) bad('domains 缺失或不在顶层'); else ok('domains 在顶层');

/* 2. domains */
console.log('\n[2] domains');
if (Array.isArray(g.domains)) {
  g.domains.forEach(d => {
    if (!d.id) bad('domain 缺 id');
    if (!d.color) bad('domain ' + (d.id||'?') + ' 缺 color');
    if (!d.code || typeof d.code !== 'object') bad('domain ' + (d.id||'?') + ' 缺 code{zh,en}');
    if (d.group === undefined) {
      console.log('  ⚠ domain ' + d.id + ' 无 group（兼容数学 isCore 模式；新科目请用英文枚举 core/elective/sba）');
    } else if (/[一-鿿]/.test(d.group)) {
      bad('domain ' + d.id + ' group 用中文字面量(' + d.group + ') → 渲染器硬编码易失效，改英文枚举');
    }
  });
}

/* 3. meta.knowledgeTypes 必须是对象 */
console.log('\n[3] meta.knowledgeTypes');
if (!g.meta || !g.meta.knowledgeTypes) {
  bad('缺 meta.knowledgeTypes');
} else if (Array.isArray(g.meta.knowledgeTypes)) {
  bad('knowledgeTypes 是数组 → 渲染器当对象用会读不到，必须改为 {id:{zh,en,color}}');
} else {
  Object.entries(g.meta.knowledgeTypes).forEach(([k, v]) => {
    if (!v || typeof v !== 'object') bad('knowledgeType ' + k + ' 不是对象');
    else {
      if (!v.zh) bad('knowledgeType ' + k + ' 缺 zh');
      if (!v.en) bad('knowledgeType ' + k + ' 缺 en');
      if (!v.color) bad('knowledgeType ' + k + ' 缺 color');
    }
  });
  ok('knowledgeTypes 是对象');
}

/* 4. meta.edgeTypes 必须对象 + color + dash */
console.log('\n[4] meta.edgeTypes');
if (!g.meta || !g.meta.edgeTypes) {
  bad('缺 meta.edgeTypes');
} else if (Array.isArray(g.meta.edgeTypes)) {
  bad('edgeTypes 是数组 → 渲染器 def.dash 会崩，必须改为对象');
} else {
  Object.entries(g.meta.edgeTypes).forEach(([k, v]) => {
    if (!v) bad('edgeType ' + k + ' 缺定义');
    else {
      if (!v.color) bad('edgeType ' + k + ' 缺 color → render 会 TypeError');
      if (!v.dash) bad('edgeType ' + k + ' 缺 dash');
      if (!v.zh) bad('edgeType ' + k + ' 缺 zh');
    }
  });
  ok('edgeTypes 是对象');
}

/* 5. nodes 字段 */
console.log('\n[5] nodes');
const usedDomains = new Set((g.domains||[]).map(d => d.id));
g.nodes.forEach(n => {
  if (!n.id) bad('节点缺 id');
  if (!n.name || typeof n.name !== 'object' || !n.name.zh || !n.name.en) bad('节点 ' + n.id + ' 缺 name{zh,en}');
  if (!n.weight || !['high','mid','low'].includes(n.weight)) bad('节点 ' + n.id + ' 缺 weight(high/mid/low)，当前: ' + n.weight);
  if (![1,2,3].includes(n.diff)) bad('节点 ' + n.id + ' 缺 diff(1-3)，当前: ' + n.diff);
  if (!n.grades || !n.grades.length) bad('节点 ' + n.id + ' 缺 grades[S4/S5/S6]');
  if (!n.domain || !usedDomains.has(n.domain)) bad('节点 ' + n.id + ' domain 不在 domains 里: ' + n.domain);
});

/* 6. leaves 字段 */
console.log('\n[6] leaves');
const ktIds = new Set(g.meta && g.meta.knowledgeTypes ? Object.keys(g.meta.knowledgeTypes) : []);
let leafCount = 0;
g.nodes.forEach(n => {
  if (!Array.isArray(n.leaves)) return;
  n.leaves.forEach(l => {
    leafCount++;
    if (!l.id) bad('叶子缺 id（属 ' + n.id + '）');
    if (!l.name || typeof l.name !== 'object' || !l.name.zh || !l.name.en) bad('叶子 ' + (l.id||'?') + ' 缺 name{zh,en}');
    if (!l.knowledgeType || !ktIds.has(l.knowledgeType)) bad('叶子 ' + (l.id||'?') + ' knowledgeType 未定义: ' + l.knowledgeType);
    if (l.pitfall === undefined || l.pitfall === null || l.pitfall === '') bad('叶子 ' + (l.id||'?') + ' 缺 pitfall');
    else if (typeof l.pitfall === 'string') bad('叶子 ' + l.id + ' pitfall 是字符串 → 需 {zh,en} 双语对象');
    else if (!l.pitfall.en) bad('叶子 ' + l.id + ' pitfall 缺英文 en');
  });
});

/* 7. edges 无悬空 + 无重复 */
console.log('\n[7] edges');
const nodeIds = new Set(g.nodes.map(n => n.id));
g.edges.forEach((e, i) => {
  if (!nodeIds.has(e.from)) bad('边#' + i + ' from 悬空: ' + e.from);
  if (!nodeIds.has(e.to)) bad('边#' + i + ' to 悬空: ' + e.to);
  if (e.from === e.to) bad('边#' + i + ' 自环: ' + e.from);
  if (!g.meta.edgeTypes[e.type]) bad('边#' + i + ' type 未定义: ' + e.type);
});
const edgeKey = new Set();
g.edges.forEach(e => {
  const k = e.from + '|' + e.to + '|' + e.type;
  if (edgeKey.has(k)) bad('重复边: ' + k);
  edgeKey.add(k);
});

/* 8. motherProblems */
console.log('\n[8] motherProblems');
const mpIds = new Set();
g.motherProblems.forEach((m, i) => {
  if (!m.id) bad('母题#' + i + ' 缺 id');
  if (mpIds.has(m.id)) bad('母题 id 重复: ' + m.id);
  mpIds.add(m.id);
  if (!m.titleZh || !m.titleEn) bad('母题 ' + (m.id||'?') + ' 缺 titleZh/titleEn');
  if (!m.stem) bad('母题 ' + m.id + ' 缺 stem（题干中文，六要素核心）');
  if (!m.stemEn) bad('母题 ' + m.id + ' 缺 stemEn（题干英文）');
  if (!Array.isArray(m.coreTopics) || !m.coreTopics.length) bad('母题 ' + m.id + ' 缺 coreTopics');
  if (!Array.isArray(m.solutionSkeleton)) bad('母题 ' + m.id + ' solutionSkeleton 必须是数组（不是字符串 skeleton）');
  if (!Array.isArray(m.variation)) bad('母题 ' + m.id + ' variation 必须是数组（不是 variations）');
  if (m.skeleton) bad('母题 ' + m.id + ' 用了旧字段 skeleton，应改为 solutionSkeleton');
  if (m.variations) bad('母题 ' + m.id + ' 用了旧字段 variations，应改为 variation');
  [...(m.coreTopics||[]), ...(m.relatedTopics||[])].forEach(t => {
    if (!nodeIds.has(t)) bad('母题 ' + m.id + ' 引用悬空课题: ' + t);
  });
});

/* 9. 覆盖度 */
console.log('\n[9] 覆盖度');
const mpCoreSet = new Set(g.motherProblems.flatMap(m => m.coreTopics || []));
const noMp = g.nodes.filter(n => !mpCoreSet.has(n.id));
if (noMp.length) bad('无母题作主角的课题: ' + noMp.map(n => n.id).join(', '));

console.log('\n=== 汇总 ===');
console.log('课题 ' + g.nodes.length + ' · 叶子 ' + leafCount + ' · 边 ' + g.edges.length + ' · 母题 ' + g.motherProblems.length);
if (problems.length) {
  console.log('\n✗✗✗ 契约校验失败 ' + problems.length + ' 项，禁止进入渲染器开发，先修数据！');
  process.exit(1);
} else {
  console.log('\n✓✓✓ 契约校验全部通过，可以进入渲染器开发。');
}
