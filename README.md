# DSE 知识图谱项目

三科（数学 / 物理 / 化学）DSE 全景知识图谱 + 共享生产线工具 + 术语语料。

## 快速导航

| 去哪 | 做什么 |
|------|--------|
| **打开数学图谱** | 双击 `math/dse-math-map.html` |
| **打开物理图谱** | 双击 `physics/dse-physics-map.html` |
| **打开化学图谱** | 双击 `chemistry/dse-chemistry-map.html` |
| **看术语清单** | `vocab/术语清单.md` |
| **数据契约校验** | `shared/contract-check.js` |
| **生产线手册** | `shared/DSE知识图谱生产线手册.md` |

## 目录结构

```
dse-infographics\
├── math\          数学图谱（html + 数据 + 规划文档）
├── physics\       物理图谱（html + 数据 + 规划文档 + 调研报告）
├── chemistry\     化学图谱（html + 数据 + 规划文档）
├── shared\        三科共用（契约校验脚本 + 生产线手册）
├── vocab\         术语语料（中英术语清单）
├── docs\          项目级文档（外部数据源调研、测试发布规划）
└── README.md      本导航
```

## 图谱功能

每科图谱都是零依赖单文件 HTML，双击即用（无需服务器）：
- **全景图**：范畴 → 课题 → 公式叶，分层下钻
- **关系边**：前置 / 推导 / 相关 / 组合出题
- **变式题小题库**：366 道可刷题（数学 165 / 物理 132 / 化学 69），每道带评分点 + 常见失分
- **掌握度自评**：中四达标 / 中五达标 / 冲5门槛 三档 + 自评追踪

## 数据规模（2026-08-20）

| 科目 | 课题 | 公式叶 | 关系边 | 母题 | 变式题 |
|------|------|--------|--------|------|--------|
| 数学 | 38 | 247 | 107 | 55 | 165 |
| 物理 | 34 | 199 | 68 | 44 | 132 |
| 化学 | 16 | 156 | 40 | 23 | 69 |

## 维护

- **改数据**：编辑对应科目 `graph-data.js`，然后跑 `node shared/contract-check.js math/graph-data.js` 校验
- **GitHub**：`https://github.com/dolores-seven/hklearning`（本目录是仓库根）
- **契约脚本**：`node shared/contract-check.js <某科 graph-data.js>`
