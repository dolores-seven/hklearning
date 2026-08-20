# DSE 数学全景知识图谱 · knowledge-map

DSE 数学（必修 Compulsory + 延伸 M2）的可交互知识图谱。
把「知识点怎么组合成题」画成一张能下钻、能聚焦、会抱团的全景地图。

顶层设计见 [`规划文档.md`](规划文档.md)。

---

## 快速开始

**直接双击 `dse-math-map.html` 即可**（Chrome / Edge 打开，无需服务器）。
同目录的 `graph-data.js` 会自动加载。

> 只有无头测试或局域网分享时才需要起服务器：
> ```bash
> cd knowledge-map
> python -m http.server 8641
> # 浏览器打开 http://localhost:8641/dse-math-map.html
> ```

## 文件结构

| 文件 | 作用 |
|------|------|
| `dse-math-map.html` | 渲染器（零依赖单文件：力导向 + 下钻 + 焦点辐射 + 双语 + 过滤） |
| `graph-data.js` | 数据层（节点 + 边 + 母题），扩充内容改这里 |
| `规划文档.md` | 顶层设计（愿景 / 母题体系 / 数据模型 / 分期计划） |
| `README.md` | 本文档 |
| `test-cdp.mjs` | 无头浏览器实测（截图 + 交互 + 报错收集） |
| `verify-ui.mjs` | UI 断言回归（知识类型分色 / 母题 / 焦点辐射 / 边开关） |
| `shots/` | 测试截图 |

## 数据模型速览

**三层节点**（`nodes`）：
- `domain` 范畴：NA 数与代数 / MS 度量图形 / DP 数据处理 / M2 延伸
- `topic` 课题：38 个（必修 26 + M2 12）
- `leaf` 公式叶子：128 个，每个必填 `knowledgeType`（formula 51 / theorem 46 / corollary 31）

**知识类型**（`meta.knowledgeTypes`，决定叶子颜色）：
- `formula` 公式（蓝，要背+会套）
- `theorem` 公理·定理（紫，要理解+会证）
- `corollary` 推论/衍生公式（琥珀，要认得出——常是题的隐藏桥梁）

**四类边**（`edges`，线型区分）：
- `prereq` 前置（实线）/ `derives` 推导（虚线）/ `related` 相关（点线）/ `cotested` 组合出题（加粗）

**母题**（`motherProblems`，六要素）：
`coreTopics` 主角 / `relatedTopics` 配角 / `stem` 题干 / `solutionSkeleton` 解法骨架 / `variation` 变式方向 / `appearances` 出现记录。

> 质量门槛：标注不出「变式方向」的，不进母题库。

## 视觉编码（已定，勿改）

| 通道 | 编码 |
|------|------|
| 颜色 | 课题层=范畴色；叶子层=知识类型色 |
| 形状 | 范畴(大圆) / 课题(中圆) / 叶子(小圆) |
| 大小 | 考试权重 |
| 边线型 | 关系类型 |
| 位置抱团 | 范畴分区 + 组合出题引力 |

## 如何扩充（P2 → P4）

1. **P2 深化必修**：38 课题已全部有叶子（128 个），下一步把高频课题的叶子做更细（128 → 200–300），母题库 39 → 50–80。每个 leaf 必填 `knowledgeType`。
2. **P3 M2 延伸**：完善 M2 子图，与必修三角/多项式/函数链衔接。
3. **P4 打磨**：`edges` 加真题年份题号映射；Obsidian 集成、印刷版全景图。

## 维护规则

- **公式准确性是生命线**：改公式必须逐范畴校对，来源标注 C&A Guide / 真题；可疑处标记待核。
- **代码里禁全角标点**（曾导致 JS `Invalid or unexpected token`）：`（）`、`：`、`，`、`；` 只能出现在字符串内容里，不能出现在代码语法位置。
- **改完数据跑一次回归**：`node verify-ui.mjs`（需先起本地服务器）。
- 范围铁律：只做必修 + M2，完全依据官方 C&A Guide + 历年真题，不超纲、不臆造。
