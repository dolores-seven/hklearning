# DSE Physics Knowledge Map · DSE 物理全景知识图谱

## 快速开始

**直接双击打开**：`dse-physics-map.html`

用 Chrome 或 Edge 打开即可，不需要任何命令或服务器。

---

## 数据现状

| 维度 | 数量 | 说明 |
|------|------|------|
| **课题节点** | 30 | 必修 25（熱和氣體4、力和運動7、波動5、電和磁6、放射3）+ 選修 4 + SBA 1 |
| **公式叶子** | 170 | 全部 5 种知识类型 + **中英双语 pitfall** |
| **关系边** | 43 | 前置 20 + 组合出题 23 |
| **母题** | 40 | **全覆盖 30/30 课题**，每道含中英题干 + 解法骨架 + 变式方向 |
| **必背公式** | 27 | 标注 `dataSheet: true`（考试公式表有得抄的，金色外圈高亮） |

---

## 使用指南

### 基础操作
- **点击**节点 → 右侧弹出详情面板（母题题干、解法骨架、变式方向、公式叶、pitfall）
- **双击**节点 → 下钻展开公式叶子（蓝=定義、紫=定律、橙=公式、绿=原理、褐=概念）
- **拖拽**画布 → 平移全景图
- **滚轮** → 缩放视图

### 新手模式（推荐第一次打开用）
- 勾选图例里的**新手模式**：
  - 只看 **必修 + S4/S5 的基础课题**（30 → 21 个，隐藏选修/SBA/S6 复习性课题）
  - 只显示**前置学习链**（43 → 17 条 prereq 边），"学 A 才能学 B"一目了然
  - 下钻后**必背公式（dataSheet=true）带金色外圈**，一眼看到"这 5 个公式要背"
- 关闭后恢复完整全景

### 过滤器
- **年级过滤**：勾选 S4/S5/S6，只显示该年级的课题
- **模块切换**：全部 / 必修 / 選修 / SBA
- **频率高亮**：节点边框颜色 → 考试频率

### 边类型开关
- **前置（prereq）**：实线，表示学习顺序
- **组合出题（cotested）**：粗线，表示常一起考的跨课题组合
- 点击图例中的边可开关

### 图例
- **五大必修课题**：熱和氣體 / 力和運動 / 波動 / 電和磁 / 放射現象與核能
- **知识类型**：定義（綠）/ 定律（紫）/ 公式（橙）/ 原理（青）/ 概念（褐）

---

## 数据结构

```javascript
const DSE_PHYSICS_GRAPH = {
  meta: {
    version: "0.2.0-P3",
    domains: [...],        // 10 个分组（5必修+4选修+SBA）
    knowledgeTypes: {...}, // 5 种知识类型（含 zh/en/color）
    edgeTypes: {...}       // 边类型定义
  },
  nodes: [...],            // 30 个课题节点
  edges: [...],            // 43 条关系边
  motherProblems: [...]    // 40 个母题（含 stem/stemEn/solutionSkeleton/variation）
};
```

### 母题六要素（对齐数学图谱标准）
```javascript
{
  id: "ph-mp-01",
  titleZh: "牛頓運動定律綜合題",
  titleEn: "Newton's Laws Comprehensive Problem",
  coreTopics: ["ph-fm-newton"],          // 主角知识点
  relatedTopics: ["ph-fm-motion"],       // 配角知识点
  stem: "質量為 2 kg 的物體在水平面上受 10 N 水平拉力…",  // 中英题干
  stemEn: "A 2 kg object on a horizontal surface is pulled…",
  questionType: "計算題",                 // 計算題/解釋題/圖像題/實驗題
  solutionSkeleton: [...],               // 解法骨架（数组）
  variation: [...],                      // 变式方向（数组）
  appearances: [{year, paper, q, source}] // 出现记录
}
```

### 叶子字段
```javascript
{
  id: "ph-fm-motion-03",
  knowledgeType: "formula",
  name: { zh: "運動學公式", en: "Kinematic equations" },
  formula: "v = u + at",
  dataSheet: true,                        // 是否在考试公式表
  pitfall: { zh: "僅適用於匀加速運動…", en: "Only valid for uniformly accelerated motion…" }  // 双语
}
```

---

## 与数学图谱的差异

| 特性 | 数学图谱 | 物理图谱 |
|------|----------|----------|
| **课题分组** | 3 大范畴（NA/MS/DP） | 5 大课题（HT/FM/WV/EM/RP） |
| **知识类型** | 公式/定理/推论 | 定義/定律/公式/原理/概念 |
| **叶子标注** | knowledgeType | knowledgeType + dataSheet（是否在考试公式表） |
| **母题标注** | 无题型标签 | questionType（計算題/解釋題/圖像題/實驗題） |
| **选修覆盖** | 仅 M2 | 全部 4 个选修 + SBA |
| **新手模式** | 无 | 有（必修基础 + 学习链 + 必背公式） |

---

## 下一步（可选方向）

- **补 examFrequency**：给课题加历年出现频率标注（需补习社 by-topic 数据源）
- **母题加真题题号**：给 appearances 补具体题号（如 2019 P1 Q10）
- **化学图谱**：按生产线手册启动第三个科目

---

## 文件说明

- `dse-physics-map.html` — 渲染器（含新手模式）
- `graph-data.js` — 数据（170 叶子 + 40 母题，全部中英双语）
- `README.md` — 本文档
