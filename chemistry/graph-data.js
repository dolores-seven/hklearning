const DSE_CHEM_GRAPH = {
 "meta": {
  "version": "0.1.0-P1",
  "generated": "2026-08-20",
  "updated": "2026-08-20",
  "domains": [
   {
    "id": "CH-STRUCT",
    "nameZh": "物質與結構",
    "nameEn": "Matter & Structure",
    "group": "core"
   },
   {
    "id": "CH-INORG",
    "nameZh": "無機轉化",
    "nameEn": "Inorganic Transformations",
    "group": "core"
   },
   {
    "id": "CH-REACT",
    "nameZh": "反應與能量",
    "nameEn": "Reactions & Energy",
    "group": "core"
   },
   {
    "id": "CH-CARBON",
    "nameZh": "碳化學",
    "nameEn": "Carbon Chemistry",
    "group": "core"
   },
   {
    "id": "CH-PATTERN",
    "nameZh": "化學規律",
    "nameEn": "Chemical Patterns",
    "group": "core"
   },
   {
    "id": "CH-IND",
    "nameZh": "工業化學",
    "nameEn": "Industrial Chemistry",
    "group": "elective"
   },
   {
    "id": "CH-MAT",
    "nameZh": "材料化學",
    "nameEn": "Materials Chemistry",
    "group": "elective"
   },
   {
    "id": "CH-ANA",
    "nameZh": "分析化學",
    "nameEn": "Analytical Chemistry",
    "group": "elective"
   },
   {
    "id": "CH-LAB",
    "nameZh": "實驗技能",
    "nameEn": "Experimental Skills",
    "group": "sba"
   }
  ],
  "knowledgeTypes": {
   "concept": {
    "id": "concept",
    "zh": "概念",
    "en": "Concept",
    "color": "#3b82f6",
    "nameZh": "概念",
    "nameEn": "Concept"
   },
   "equation": {
    "id": "equation",
    "zh": "方程式",
    "en": "Equation",
    "color": "#22c55e",
    "nameZh": "方程式",
    "nameEn": "Equation"
   },
   "reaction": {
    "id": "reaction",
    "zh": "反應",
    "en": "Reaction",
    "color": "#f59e0b",
    "nameZh": "反應",
    "nameEn": "Reaction"
   },
   "law": {
    "id": "law",
    "zh": "定律/原理",
    "en": "Law/Principle",
    "color": "#a855f7",
    "nameZh": "定律/原理",
    "nameEn": "Law/Principle"
   },
   "lab": {
    "id": "lab",
    "zh": "實驗",
    "en": "Lab",
    "color": "#06b6d4",
    "nameZh": "實驗",
    "nameEn": "Lab"
   }
  },
  "edgeTypes": {
   "prereq": {
    "dash": "6 3",
    "zh": "前置",
    "en": "Prerequisite",
    "color": "#8b5cf6",
    "nameZh": "前置",
    "nameEn": "Prerequisite"
   },
   "derives": {
    "dash": "4 2",
    "zh": "推導",
    "en": "Derives",
    "color": "#0ea5e9",
    "nameZh": "推導",
    "nameEn": "Derives"
   },
   "related": {
    "dash": "2 4",
    "zh": "相關",
    "en": "Related",
    "color": "#94a3b8",
    "nameZh": "相關",
    "nameEn": "Related"
   },
   "cotested": {
    "dash": "none",
    "zh": "組合出題",
    "en": "Co-tested",
    "color": "#f59e0b",
    "nameZh": "組合出題",
    "nameEn": "Co-tested"
   },
   "child": {
    "dash": "2 3",
    "zh": "下鑽",
    "en": "Drill-down",
    "color": "#64748b",
    "nameZh": "下鑽",
    "nameEn": "Drill-down"
   }
  },
  "grades": [
   "S4",
   "S5",
   "S6"
  ]
 },
 "domains": [
  {
   "id": "CH-STRUCT",
   "color": "#3b82f6",
   "code": {
    "zh": "物質與結構",
    "en": "Matter & Structure"
   },
   "group": "core",
   "marksRange": null
  },
  {
   "id": "CH-INORG",
   "color": "#22c55e",
   "code": {
    "zh": "無機轉化",
    "en": "Inorganic Transformations"
   },
   "group": "core",
   "marksRange": null
  },
  {
   "id": "CH-REACT",
   "color": "#f59e0b",
   "code": {
    "zh": "反應與能量",
    "en": "Reactions & Energy"
   },
   "group": "core",
   "marksRange": null
  },
  {
   "id": "CH-CARBON",
   "color": "#ef4444",
   "code": {
    "zh": "碳化學",
    "en": "Carbon Chemistry"
   },
   "group": "core",
   "marksRange": null
  },
  {
   "id": "CH-PATTERN",
   "color": "#a855f7",
   "code": {
    "zh": "化學規律",
    "en": "Chemical Patterns"
   },
   "group": "core",
   "marksRange": null
  },
  {
   "id": "CH-IND",
   "color": "#06b6d4",
   "code": {
    "zh": "工業化學",
    "en": "Industrial Chemistry"
   },
   "group": "elective",
   "marksRange": null
  },
  {
   "id": "CH-MAT",
   "color": "#eab308",
   "code": {
    "zh": "材料化學",
    "en": "Materials Chemistry"
   },
   "group": "elective",
   "marksRange": null
  },
  {
   "id": "CH-ANA",
   "color": "#ec4899",
   "code": {
    "zh": "分析化學",
    "en": "Analytical Chemistry"
   },
   "group": "elective",
   "marksRange": null
  },
  {
   "id": "CH-LAB",
   "color": "#64748b",
   "code": {
    "zh": "實驗技能",
    "en": "Experimental Skills"
   },
   "group": "sba",
   "marksRange": null
  }
 ],
 "nodes": [
  {
   "id": "ch-earth",
   "level": "topic",
   "domain": "CH-STRUCT",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "地球",
    "en": "Planet Earth"
   },
   "weight": "low",
   "diff": 1,
   "leaves": [
    {
     "id": "ch-earth-01",
     "name": {
      "zh": "空氣成分",
      "en": "Composition of Air"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "氮 ~78%、氧 ~21%、二氧化碳及惰性氣體各約 1%；要記體積比例。",
      "en": "N₂ ~78%, O₂ ~21%, CO₂ and noble gases ~1% by volume."
     }
    },
    {
     "id": "ch-earth-02",
     "name": {
      "zh": "氧氣的性質",
      "en": "Properties of Oxygen"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "氧支持燃燒、無色無味；用帶火星木條檢驗（復燃）。",
      "en": "Oxygen supports combustion; test with a glowing splint (relights)."
     }
    },
    {
     "id": "ch-earth-03",
     "name": {
      "zh": "二氧化碳與溫室效應",
      "en": "CO₂ and Greenhouse Effect"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "CO₂ 是溫室氣體，吸收紅外輻射；用石灰水檢驗（變乳白）。",
      "en": "CO₂ is a greenhouse gas; test with limewater (turns milky)."
     }
    },
    {
     "id": "ch-earth-04",
     "name": {
      "zh": "惰性氣體",
      "en": "Noble Gases"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "氦/氖/氬等，性質穩定；用於霓虹燈、保護氣體、氣球。",
      "en": "He/Ne/Ar inert; used in neon signs, protective atmospheres, balloons."
     }
    },
    {
     "id": "ch-earth-05",
     "name": {
      "zh": "海洋資源",
      "en": "Resources from the Ocean"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "海水含 NaCl 等鹽類；從海水提取鹽、淡水（蒸餾/淡化）。",
      "en": "Seawater contains NaCl; obtain salt and fresh water (distillation/desalination)."
     }
    },
    {
     "id": "ch-earth-06",
     "name": {
      "zh": "石灰岩循環",
      "en": "Limestone Cycle"
     },
     "knowledgeType": "reaction",
     "formula": "CaCO₃ → CaO + CO₂",
     "pitfall": {
      "zh": "石灰石加熱分解→生石灰 CaO；加水→熟石灰 Ca(OH)₂；再與 CO₂ 反應→碳酸鈣。",
      "en": "Heat CaCO₃→CaO+CO₂; add water→Ca(OH)₂; react with CO₂→CaCO₃ again."
     }
    },
    {
     "id": "ch-earth-07",
     "name": {
      "zh": "岩石與礦物",
      "en": "Rocks and Minerals"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "岩石分三大類（火成/沉積/變質）；礦物是含特定元素的天然物質。",
      "en": "Three rock types (igneous/sedimentary/metamorphic); minerals are natural substances."
     }
    },
    {
     "id": "ch-earth-08",
     "name": {
      "zh": "淨水方法",
      "en": "Water Purification"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "沉澱→過濾→蒸餾；蒸餾可去除溶解雜質，過濾只能去除不溶雜質。",
      "en": "Sediment→filter→distill; distillation removes dissolved impurities, filtration only insoluble."
     }
    }
   ]
  },
  {
   "id": "ch-mw1",
   "level": "topic",
   "domain": "CH-STRUCT",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "微觀世界 I",
    "en": "Microscopic World I"
   },
   "weight": "mid",
   "diff": 1,
   "leaves": [
    {
     "id": "ch-mw1-01",
     "name": {
      "zh": "原子結構",
      "en": "Atomic Structure"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "質子(+)、中子(0)、電子(-)；質子數=電子數=原子序數。",
      "en": "Protons(+), neutrons(0), electrons(-); proton number = electron number = atomic number."
     }
    },
    {
     "id": "ch-mw1-02",
     "name": {
      "zh": "質量數",
      "en": "Mass Number"
     },
     "knowledgeType": "concept",
     "formula": "A = Z + N",
     "pitfall": {
      "zh": "質量數=質子數+中子數；同位素質量數不同但質子數相同。",
      "en": "Mass number = protons + neutrons; isotopes share proton number."
     }
    },
    {
     "id": "ch-mw1-03",
     "name": {
      "zh": "電子排布",
      "en": "Electron Arrangement"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "按 2,8,8 層排布；最外層電子決定化學性質（穩定八隅體）。",
      "en": "Shells fill 2,8,8; outermost electrons determine reactivity (stable octet)."
     }
    },
    {
     "id": "ch-mw1-04",
     "name": {
      "zh": "離子形成",
      "en": "Ion Formation"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "金屬失電子成陽離子，非金屬得電子成陰離子；離子符號含電荷。",
      "en": "Metals lose electrons (cations), non-metals gain (anions); ion symbols carry charge."
     }
    },
    {
     "id": "ch-mw1-05",
     "name": {
      "zh": "同位素",
      "en": "Isotopes"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "同元素不同中子數；化學性質相同，質量不同（如 C-12/C-14）。",
      "en": "Same element, different neutrons; same chemistry, different mass."
     }
    },
    {
     "id": "ch-mw1-06",
     "name": {
      "zh": "相對原子質量",
      "en": "Relative Atomic Mass"
     },
     "knowledgeType": "concept",
     "formula": "Ar",
     "pitfall": {
      "zh": "Ar 是相對於 C-12 的比值，無單位；計算式常含同位素加權。",
      "en": "Ar is relative to C-12, no unit; often weighted by isotope abundance."
     }
    },
    {
     "id": "ch-mw1-07",
     "name": {
      "zh": "摩爾概念",
      "en": "The Mole"
     },
     "knowledgeType": "concept",
     "formula": "n = N / Nₐ",
     "pitfall": {
      "zh": "1 mol = 6.02×10²³ 粒子（阿伏伽德羅常數 Nₐ）；n = m/M。",
      "en": "1 mol = 6.02×10²³ particles (Avogadro); n = m/M."
     }
    },
    {
     "id": "ch-mw1-08",
     "name": {
      "zh": "摩爾質量",
      "en": "Molar Mass"
     },
     "knowledgeType": "concept",
     "formula": "M = m / n",
     "pitfall": {
      "zh": "摩爾質量數值 = 相對分子/原子質量，單位 g/mol；n=m/M 是核心計算。",
      "en": "Molar mass in g/mol equals Ar/Mr; n=m/M is the key calculation."
     }
    },
    {
     "id": "ch-mw1-09",
     "name": {
      "zh": "化學式書寫",
      "en": "Writing Formulae"
     },
     "knowledgeType": "equation",
     "pitfall": {
      "zh": "化合物電荷守恆：如 Ca²⁺ 與 Cl⁻ → CaCl₂；十字交叉法配電荷。",
      "en": "Charge balance: Ca²⁺ + Cl⁻ → CaCl₂; use cross-over method."
     }
    },
    {
     "id": "ch-mw1-10",
     "name": {
      "zh": "配平方程",
      "en": "Balancing Equations"
     },
     "knowledgeType": "equation",
     "pitfall": {
      "zh": "配平後左右原子數相等；狀態符號 (s)(l)(g)(aq) 不可省略。",
      "en": "Equal atoms both sides; include state symbols (s)(l)(g)(aq)."
     }
    }
   ]
  },
  {
   "id": "ch-metals",
   "level": "topic",
   "domain": "CH-INORG",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "金屬",
    "en": "Metals"
   },
   "weight": "mid",
   "diff": 2,
   "leaves": [
    {
     "id": "ch-metals-01",
     "name": {
      "zh": "金屬物理性質",
      "en": "Physical Properties of Metals"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "金屬：有光澤、導電導熱、延展性、通常為固體（汞除外）。",
      "en": "Metals: lustrous, conduct heat/electricity, malleable, solid (except Hg)."
     }
    },
    {
     "id": "ch-metals-02",
     "name": {
      "zh": "金屬活動性順序",
      "en": "Metal Reactivity Series"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "K>Na>Ca>Mg>Al>Zn>Fe>Pb>Cu>Ag>Au；越左越活潑。",
      "en": "K>Na>Ca>Mg>Al>Zn>Fe>Pb>Cu>Ag>Au; more active to the left."
     }
    },
    {
     "id": "ch-metals-03",
     "name": {
      "zh": "金屬與酸反應",
      "en": "Metals with Acids"
     },
     "knowledgeType": "equation",
     "formula": "Zn + 2HCl → ZnCl₂ + H₂",
     "pitfall": {
      "zh": "活潑金屬（Zn 等）與稀酸放氫氣；Cu/Ag 不與稀酸反應。",
      "en": "Active metals (Zn) release H₂ with dilute acid; Cu/Ag do not react."
     }
    },
    {
     "id": "ch-metals-04",
     "name": {
      "zh": "金屬與鹽溶液",
      "en": "Metals with Salt Solutions"
     },
     "knowledgeType": "equation",
     "formula": "Fe + CuSO₄ → FeSO₄ + Cu",
     "pitfall": {
      "zh": "較活潑金屬置換較不活潑的（金屬活動序）；觀察顏色/沉澱變化。",
      "en": "More active metal displaces less active one; note colour/precipitate changes."
     }
    },
    {
     "id": "ch-metals-05",
     "name": {
      "zh": "金屬與氧氣",
      "en": "Metals with Oxygen"
     },
     "knowledgeType": "equation",
     "formula": "2Mg + O₂ → 2MgO",
     "pitfall": {
      "zh": "金屬燃燒成金屬氧化物；鎂耀眼白光，鐵需高溫，銅緩慢變黑。",
      "en": "Metals burn to oxides; Mg bright white, Fe needs heat, Cu slowly blackens."
     }
    },
    {
     "id": "ch-metals-06",
     "name": {
      "zh": "金屬冶煉",
      "en": "Extraction of Metals"
     },
     "knowledgeType": "equation",
     "formula": "Fe₂O₃ + 3CO → 2Fe + 3CO₂",
     "pitfall": {
      "zh": "用碳/一氧化碳還原氧化物（Zn→Cu）；活潑金屬（Al）用電解。",
      "en": "Reduce oxides with carbon/CO (Zn→Cu); reactive metals (Al) via electrolysis."
     }
    },
    {
     "id": "ch-metals-07",
     "name": {
      "zh": "金屬腐蝕與防護",
      "en": "Corrosion and Protection"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "鐵生鏽需氧+水；防鏽：油漆/鍍鋅/犧牲陽極（鋅比鐵活潑）。",
      "en": "Rust needs O₂+water; protect: paint/galvanise/sacrificial anode (Zn)."
     }
    },
    {
     "id": "ch-metals-08",
     "name": {
      "zh": "合金",
      "en": "Alloys"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "合金=金屬+其他元素混合物，通常更硬/更耐腐蝕（鋼、黃銅）。",
      "en": "Alloy = metal + other elements, usually harder/more resistant (steel, brass)."
     }
    },
    {
     "id": "ch-metals-09",
     "name": {
      "zh": "金屬回收",
      "en": "Recycling Metals"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "回收鋁比電解製鋁省能 95%；保護資源、減少污染。",
      "en": "Recycling Al saves ~95% energy vs electrolysis; conserves resources."
     }
    },
    {
     "id": "ch-metals-10",
     "name": {
      "zh": "金屬與冶煉方法",
      "en": "Metal Activity & Extraction Method"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "活動序頂端用電解、中間用碳還原、底部天然存在（Au）。",
      "en": "Top of series: electrolysis; middle: carbon reduction; bottom: native (Au)."
     }
    }
   ]
  },
  {
   "id": "ch-acidbase",
   "level": "topic",
   "domain": "CH-INORG",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "酸和鹽基",
    "en": "Acids and Bases"
   },
   "weight": "high",
   "diff": 2,
   "leaves": [
    {
     "id": "ch-acidbase-01",
     "name": {
      "zh": "強酸強鹼",
      "en": "Strong Acids and Bases"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "強酸/強鹼完全電離；HCl、H₂SO₄、HNO₃、NaOH、KOH 要背熟。",
      "en": "Strong acids/bases fully dissociate; memorize HCl, H₂SO₄, HNO₃, NaOH, KOH."
     }
    },
    {
     "id": "ch-acidbase-02",
     "name": {
      "zh": "中和反應",
      "en": "Neutralisation"
     },
     "knowledgeType": "equation",
     "formula": "HCl + NaOH → NaCl + H₂O",
     "pitfall": {
      "zh": "酸+鹼→鹽+水；離子方程式是 H⁺ + OH⁻ → H₂O。",
      "en": "Acid + base → salt + water; ionic: H⁺ + OH⁻ → H₂O."
     }
    },
    {
     "id": "ch-acidbase-03",
     "name": {
      "zh": "pH 定義",
      "en": "Definition of pH"
     },
     "knowledgeType": "concept",
     "formula": "pH = -log[H⁺]",
     "pitfall": {
      "zh": "pH 每差 1，[H⁺] 相差 10 倍；pH < 7 酸性，= 7 中性，> 7 鹼性。",
      "en": "Each pH unit = 10× in [H⁺]; <7 acid, =7 neutral, >7 alkaline."
     }
    },
    {
     "id": "ch-acidbase-04",
     "name": {
      "zh": "弱酸弱鹼",
      "en": "Weak Acids and Bases"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "弱酸（CH₃COOH、H₂CO₃）只部分電離；弱鹼（NH₃）同理。",
      "en": "Weak acids (CH₃COOH, H₂CO₃) partially dissociate; weak bases (NH₃) too."
     }
    },
    {
     "id": "ch-acidbase-05",
     "name": {
      "zh": "酸的化學性質",
      "en": "Chemical Properties of Acids"
     },
     "knowledgeType": "equation",
     "formula": "2HCl + MgO → MgCl₂ + H₂O",
     "pitfall": {
      "zh": "酸+金屬→鹽+氫；酸+鹼→鹽+水；酸+碳酸鹽→鹽+水+CO₂。",
      "en": "Acid+metal→salt+H₂; +base→salt+water; +carbonate→salt+water+CO₂."
     }
    },
    {
     "id": "ch-acidbase-06",
     "name": {
      "zh": "鹼的化學性質",
      "en": "Chemical Properties of Bases"
     },
     "knowledgeType": "equation",
     "formula": "CO₂ + 2NaOH → Na₂CO₃ + H₂O",
     "pitfall": {
      "zh": "鹼+酸→鹽+水；鹼吸收酸性氣體（CO₂/SO₂）；氨水是弱鹼。",
      "en": "Base+acid→salt+water; bases absorb acidic gases (CO₂/SO₂); ammonia is weak base."
     }
    },
    {
     "id": "ch-acidbase-07",
     "name": {
      "zh": "酸鹼指示劑",
      "en": "Acid-Base Indicators"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "石蕊：酸紅鹼藍；酚酞：酸無色鹼粉紅；要記指示劑顏色變化。",
      "en": "Litmus: red acid/blue alkali; phenolphthalein: colourless/ pink; memorise colours."
     }
    },
    {
     "id": "ch-acidbase-08",
     "name": {
      "zh": "鹽的生成",
      "en": "Formation of Salts"
     },
     "knowledgeType": "equation",
     "formula": "NaOH + HCl → NaCl + H₂O",
     "pitfall": {
      "zh": "中和生成鹽；鹽=金屬陽離子+酸根陰離子；可溶性規則要背。",
      "en": "Neutralisation forms salts; salt = cation + acid anion; learn solubility rules."
     }
    },
    {
     "id": "ch-acidbase-09",
     "name": {
      "zh": "摩爾濃度",
      "en": "Molar Concentration"
     },
     "knowledgeType": "concept",
     "formula": "c = n / V",
     "pitfall": {
      "zh": "c 單位 mol/L；稀釋計算 c₁V₁=c₂V₂；滴定計算核心。",
      "en": "c in mol/L; dilution c₁V₁=c₂V₂; core of titration calculations."
     }
    },
    {
     "id": "ch-acidbase-10",
     "name": {
      "zh": "滴定操作",
      "en": "Titration Technique"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "用滴定管加標準液到錐形瓶，近終點逐滴；記錄初讀/終讀。",
      "en": "Add standard solution from burette, dropwise near endpoint; record initial/final readings."
     }
    },
    {
     "id": "ch-acidbase-11",
     "name": {
      "zh": "酸雨",
      "en": "Acid Rain"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "SO₂/NOₓ 溶於雨水成酸；來源：燃燒化石燃料；影響建築/生態。",
      "en": "SO₂/NOₓ dissolve in rain; from burning fossil fuels; harms buildings/ecosystems."
     }
    },
    {
     "id": "ch-acidbase-12",
     "name": {
      "zh": "鹽類溶解性規則",
      "en": "Solubility of Salts"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "所有鈉鉀銨鹽可溶；硝酸鹽全溶；硫酸鹽多數溶（除 Ba/Pb）；氯化物多溶（除 Ag/Pb）。",
      "en": "All Na/K/NH₄ salts soluble; all nitrates; most sulphates (not Ba/Pb); most chlorides (not Ag/Pb)."
     }
    }
   ]
  },
  {
   "id": "ch-fossil",
   "level": "topic",
   "domain": "CH-CARBON",
   "grades": [
    "S4",
    "S5"
   ],
   "name": {
    "zh": "化石燃料和碳化合物",
    "en": "Fossil Fuels and Carbon Compounds"
   },
   "weight": "mid",
   "diff": 1,
   "leaves": [
    {
     "id": "ch-fossil-01",
     "name": {
      "zh": "石油分餾",
      "en": "Fractional Distillation of Petroleum"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "按沸點分離；塔頂低沸點（石油氣/汽油），塔底高沸點（瀝青）。",
      "en": "Separate by boiling point; top = low bp (LPG/petrol), bottom = high bp (bitumen)."
     }
    },
    {
     "id": "ch-fossil-02",
     "name": {
      "zh": "汽油與辛烷值",
      "en": "Petrol and Octane Number"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "辛烷值越高抗爆性越好；支鏈烷烴辛烷值較高。",
      "en": "Higher octane = better anti-knock; branched alkanes have higher octane."
     }
    },
    {
     "id": "ch-fossil-03",
     "name": {
      "zh": "煤的乾餾",
      "en": "Destructive Distillation of Coal"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "隔絕空氣加熱煤→焦炭+煤焦油+煤氣；焦炭用於冶鐵。",
      "en": "Heat coal without air→coke+coal tar+coal gas; coke used in iron-making."
     }
    },
    {
     "id": "ch-fossil-04",
     "name": {
      "zh": "天然氣與甲烷",
      "en": "Natural Gas and Methane"
     },
     "knowledgeType": "equation",
     "formula": "CH₄ + 2O₂ → CO₂ + 2H₂O",
     "pitfall": {
      "zh": "天然氣主要成分甲烷；完全燃燒產 CO₂+H₂O，是清潔化石燃料。",
      "en": "NG is mostly methane; complete combustion gives CO₂+H₂O."
     }
    },
    {
     "id": "ch-fossil-05",
     "name": {
      "zh": "燃燒反應",
      "en": "Combustion Reactions"
     },
     "knowledgeType": "equation",
     "formula": "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O",
     "pitfall": {
      "zh": "碳氫化合物完全燃燒產 CO₂+H₂O；缺氧時生成 CO（劇毒）。",
      "en": "Hydrocarbons burn to CO₂+H₂O; incomplete gives toxic CO."
     }
    },
    {
     "id": "ch-fossil-06",
     "name": {
      "zh": "裂解與裂化",
      "en": "Cracking"
     },
     "knowledgeType": "reaction",
     "formula": "C₁₀H₂₂ → C₅H₁₀ + C₅H₁₂",
     "pitfall": {
      "zh": "長鏈烷烴高溫裂解成短鏈+烯烴；用於增產汽油和烯烴。",
      "en": "Crack long alkanes into shorter ones + alkenes; boosts petrol yield."
     }
    },
    {
     "id": "ch-fossil-07",
     "name": {
      "zh": "碳氫化合物通式",
      "en": "Hydrocarbon General Formulae"
     },
     "knowledgeType": "concept",
     "formula": "烷CₙH₂ₙ₊₂ / 烯CₙH₂ₙ",
     "pitfall": {
      "zh": "烷烴 CₙH₂ₙ₊₂、烯烴 CₙH₂ₙ、炔烴 CₙH₂ₙ₋₂；根據通式判種類。",
      "en": "Alkanes CₙH₂ₙ₊₂, alkenes CₙH₂ₙ, alkynes CₙH₂ₙ₋₂."
     }
    },
    {
     "id": "ch-fossil-08",
     "name": {
      "zh": "溫室效應與化石燃料",
      "en": "Fossil Fuels and Global Warming"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "燃燒化石燃料增 CO₂ → 溫室效應加劇；減排：再生能源/提高效率。",
      "en": "Burning fuels raises CO₂→global warming; reduce via renewables/efficiency."
     }
    },
    {
     "id": "ch-fossil-09",
     "name": {
      "zh": "生物燃料",
      "en": "Biofuels"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "生物乙醇/生物柴油可再生；燃燒產 CO₂ 但種植時吸收，碳中性討論。",
      "en": "Bioethanol/biodiesel renewable; CO₂ neutral argument (absorbed during growth)."
     }
    }
   ]
  },
  {
   "id": "ch-mw2",
   "level": "topic",
   "domain": "CH-STRUCT",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "微觀世界 II",
    "en": "Microscopic World II"
   },
   "weight": "high",
   "diff": 3,
   "leaves": [
    {
     "id": "ch-mw2-01",
     "name": {
      "zh": "離子鍵",
      "en": "Ionic Bonding"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "金屬+非金屬：電子轉移形成正負離子，靠靜電引力結合。",
      "en": "Metal+non-metal: electron transfer, ions held by electrostatic attraction."
     }
    },
    {
     "id": "ch-mw2-02",
     "name": {
      "zh": "共價鍵",
      "en": "Covalent Bonding"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "非金屬間共享電子對；單/雙/三鍵共享 1/2/3 對電子。",
      "en": "Non-metals share electron pairs; single/double/triple bonds share 1/2/3 pairs."
     }
    },
    {
     "id": "ch-mw2-03",
     "name": {
      "zh": "金屬鍵",
      "en": "Metallic Bonding"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "金屬原子浸在離域電子海；自由電子解釋導電導熱和延展性。",
      "en": "Metal cations in a sea of delocalised electrons; explains conductivity and malleability."
     }
    },
    {
     "id": "ch-mw2-04",
     "name": {
      "zh": "離子化合物性質",
      "en": "Properties of Ionic Compounds"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "高熔沸點、固態不導電、熔融/溶液導電；溶於水多數。",
      "en": "High mp/bp, solid non-conductive, conduct when molten/dissolved."
     }
    },
    {
     "id": "ch-mw2-05",
     "name": {
      "zh": "簡單分子性質",
      "en": "Properties of Simple Molecules"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "低熔沸點（分子間力弱）、不導電；如 CO₂、H₂O。",
      "en": "Low mp/bp (weak intermolecular forces), non-conductive; e.g. CO₂, H₂O."
     }
    },
    {
     "id": "ch-mw2-06",
     "name": {
      "zh": "巨大共價結構",
      "en": "Giant Covalent Structures"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "鑽石/石墨/SiO₂：原子網狀，高熔沸點、堅硬（石墨例外可導電）。",
      "en": "Diamond/graphite/SiO₂: network atoms, high mp/bp, hard (graphite conducts)."
     }
    },
    {
     "id": "ch-mw2-07",
     "name": {
      "zh": "石墨的結構",
      "en": "Structure of Graphite"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "層狀結構，層間弱力易滑動（鉛筆）；層內離域電子可導電。",
      "en": "Layered; weak interlayer forces slide (pencil); delocalised electrons conduct."
     }
    },
    {
     "id": "ch-mw2-08",
     "name": {
      "zh": "極性分子",
      "en": "Polar Molecules"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "電負性差導致極性鍵；對稱分子可無極性（如 CO₂ 直線）。",
      "en": "Electronegativity difference creates polar bonds; symmetry may cancel polarity (CO₂ linear)."
     }
    },
    {
     "id": "ch-mw2-09",
     "name": {
      "zh": "氫鍵",
      "en": "Hydrogen Bonding"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "H 與 N/O/F 之間的強分子間力；解釋水的高沸點。",
      "en": "Strong intermolecular force between H and N/O/F; explains water high bp."
     }
    },
    {
     "id": "ch-mw2-10",
     "name": {
      "zh": "分子間力",
      "en": "Intermolecular Forces"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "範德華力隨分子大小增加；影響熔沸點，非化學鍵。",
      "en": "Van der Waals forces increase with molecular size; affect bp/mp, not chemical bonds."
     }
    },
    {
     "id": "ch-mw2-11",
     "name": {
      "zh": "晶體結構比較",
      "en": "Comparing Crystal Structures"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "離子/共價網狀/金屬/分子四類；比熔沸點先看鍵型。",
      "en": "Four types: ionic/covalent network/metallic/molecular; identify bonding first."
     }
    },
    {
     "id": "ch-mw2-12",
     "name": {
      "zh": "鍵合與導電性",
      "en": "Bonding and Conductivity"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "導電需自由電子或遊離離子；金屬/石墨導電，離子化合物熔融才導電。",
      "en": "Conduction needs free electrons or mobile ions; metals/graphite conduct, ionic only molten."
     }
    }
   ]
  },
  {
   "id": "ch-redox",
   "level": "topic",
   "domain": "CH-REACT",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "氧化還原、化學電池和電解",
    "en": "Redox, Chemical Cells and Electrolysis"
   },
   "weight": "high",
   "diff": 3,
   "leaves": [
    {
     "id": "ch-redox-01",
     "name": {
      "zh": "氧化還原定義",
      "en": "Redox Definition"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "氧化=失電子/失氫/得氧；還原=得電子；氧化還原同時發生。",
      "en": "Oxidation = lose e⁻/H, gain O; reduction = gain e⁻; both always together."
     }
    },
    {
     "id": "ch-redox-02",
     "name": {
      "zh": "氧化劑與還原劑",
      "en": "Oxidising and Reducing Agents"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "氧化劑被還原（自身得電子）；還原劑被氧化（自身失電子）。",
      "en": "Oxidising agent is reduced (gains e⁻); reducing agent is oxidised (loses e⁻)."
     }
    },
    {
     "id": "ch-redox-03",
     "name": {
      "zh": "半反應方程",
      "en": "Half Equations"
     },
     "knowledgeType": "equation",
     "formula": "Zn → Zn²⁺ + 2e⁻",
     "pitfall": {
      "zh": "分別寫氧化半反應和還原半反應，再合併；電子數必須相等。",
      "en": "Write oxidation and reduction half equations, then combine; balance electrons."
     }
    },
    {
     "id": "ch-redox-04",
     "name": {
      "zh": "氧化數",
      "en": "Oxidation Number"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "氧化數變化判斷氧化還原；單質 0、離子=電荷、H+1、O-2。",
      "en": "Oxidation number change identifies redox; element 0, ion=charge, H+1, O-2."
     }
    },
    {
     "id": "ch-redox-05",
     "name": {
      "zh": "標準電極電位",
      "en": "Standard Electrode Potentials"
     },
     "knowledgeType": "concept",
     "formula": "E°",
     "providedInfo": "electrode-potentials",
     "pitfall": {
      "zh": "E° 表（考試提供）判斷氧化還原能力；E° 高者作氧化劑強。",
      "en": "E° table (provided) ranks redox strength; higher E° = stronger oxidising agent."
     }
    },
    {
     "id": "ch-redox-06",
     "name": {
      "zh": "電化學電池",
      "en": "Chemical Cells"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "自發氧化還原產生電流；陽極氧化、陰極還原；鹽橋維持電中性。",
      "en": "Spontaneous redox generates current; anode oxidises, cathode reduces."
     }
    },
    {
     "id": "ch-redox-07",
     "name": {
      "zh": "電解原理",
      "en": "Principles of Electrolysis"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "外部電源驅動非自發反應；陽極氧化、陰極還原；電解質導電。",
      "en": "External power drives non-spontaneous reactions; anode oxidises, cathode reduces."
     }
    },
    {
     "id": "ch-redox-08",
     "name": {
      "zh": "電解熔融氯化鈉",
      "en": "Electrolysis of Molten NaCl"
     },
     "knowledgeType": "equation",
     "formula": "2NaCl → 2Na + Cl₂",
     "pitfall": {
      "zh": "陰極 Na⁺+e⁻→Na；陽極 2Cl⁻→Cl₂+2e⁻；熔融態才能遊離離子。",
      "en": "Cathode Na⁺+e⁻→Na; anode 2Cl⁻→Cl₂+2e⁻; molten state gives mobile ions."
     }
    },
    {
     "id": "ch-redox-09",
     "name": {
      "zh": "電解氯化鈉溶液",
      "en": "Electrolysis of NaCl(aq)"
     },
     "knowledgeType": "equation",
     "formula": "2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂",
     "pitfall": {
      "zh": "水中 H₂O 優先還原產 H₂，OH⁻ 優先氧化產 O₂；產氫氧化鈉。",
      "en": "H₂O reduces first (H₂), OH⁻ oxidises first (O₂); produces NaOH."
     }
    },
    {
     "id": "ch-redox-10",
     "name": {
      "zh": "電鍍",
      "en": "Electroplating"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "用活性金屬作陽極補充金屬離子；陰極鍍件；鍍層防鏽美觀。",
      "en": "Active metal anode replenishes ions; cathode is the object; coating protects."
     }
    },
    {
     "id": "ch-redox-11",
     "name": {
      "zh": "電解精煉銅",
      "en": "Electrolytic Refining of Copper"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "粗銅陽極溶解，純銅陰極沉積；雜質掉落為陽極泥。",
      "en": "Impure Cu anode dissolves, pure Cu deposits at cathode; impurities form anode sludge."
     }
    },
    {
     "id": "ch-redox-12",
     "name": {
      "zh": "電解的工業應用",
      "en": "Industrial Applications of Electrolysis"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "製鋁/氯氣/氫氧化鈉/電鍍/精煉；電解製鋁需熔融氧化鋁。",
      "en": "Produces Al/Cl₂/NaOH, plating, refining; aluminium via molten Al₂O₃."
     }
    }
   ]
  },
  {
   "id": "ch-energy",
   "level": "topic",
   "domain": "CH-REACT",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "化學反應和能量",
    "en": "Chemical Reactions and Energy"
   },
   "weight": "mid",
   "diff": 2,
   "leaves": [
    {
     "id": "ch-energy-01",
     "name": {
      "zh": "放熱與吸熱反應",
      "en": "Exothermic and Endothermic"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "放熱：反應物能量>生成物，溫度升（燃燒/中和）；吸熱相反。",
      "en": "Exothermic: reactants higher energy, temp rises (combustion/neutralisation); endothermic opposite."
     }
    },
    {
     "id": "ch-energy-02",
     "name": {
      "zh": "活化能",
      "en": "Activation Energy"
     },
     "knowledgeType": "concept",
     "formula": "Eₐ",
     "pitfall": {
      "zh": "反應所需最小能量；活化能越低反應越易進行；催化劑降低 Eₐ。",
      "en": "Minimum energy for reaction; lower Eₐ easier; catalyst lowers Eₐ."
     }
    },
    {
     "id": "ch-energy-03",
     "name": {
      "zh": "反應能圖",
      "en": "Energy Profile Diagrams"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "能圖橫軸反應進程縱軸能量；ΔH = 產物-反應物；標註 Eₐ。",
      "en": "Energy vs reaction progress; ΔH = products - reactants; label Eₐ."
     }
    },
    {
     "id": "ch-energy-04",
     "name": {
      "zh": "燃燒熱",
      "en": "Heat of Combustion"
     },
     "knowledgeType": "concept",
     "formula": "ΔHc",
     "pitfall": {
      "zh": "1 mol 物質完全燃燒放出的熱；測定用量熱器。",
      "en": "Heat released when 1 mol burns completely; measured with calorimeter."
     }
    },
    {
     "id": "ch-energy-05",
     "name": {
      "zh": "中和熱",
      "en": "Heat of Neutralisation"
     },
     "knowledgeType": "concept",
     "formula": "ΔHn",
     "pitfall": {
      "zh": "酸鹼中和生成 1 mol 水的熱；強酸強鹼約 -57 kJ/mol。",
      "en": "Heat to form 1 mol water; strong acid-base ≈ -57 kJ/mol."
     }
    },
    {
     "id": "ch-energy-06",
     "name": {
      "zh": "鍵能",
      "en": "Bond Energy"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "斷鍵吸熱、成鍵放熱；ΔH ≈ 斷鍵總和 - 成鍵總和。",
      "en": "Breaking bonds absorbs, forming releases; ΔH ≈ bonds broken - bonds formed."
     }
    },
    {
     "id": "ch-energy-07",
     "name": {
      "zh": "Hess 定律",
      "en": "Hess's Law"
     },
     "knowledgeType": "law",
     "pitfall": {
      "zh": "反應熱只與始末態有關，與途徑無關；可疊加方程式求 ΔH。",
      "en": "ΔH depends only on initial/final states; add equations to find ΔH."
     }
    },
    {
     "id": "ch-energy-08",
     "name": {
      "zh": "標準生成焓",
      "en": "Standard Enthalpy of Formation"
     },
     "knowledgeType": "concept",
     "formula": "ΔHf°",
     "pitfall": {
      "zh": "1 mol 化合物由元素生成的反應熱；元素自身 ΔHf°=0。",
      "en": "Heat to form 1 mol compound from elements; elements ΔHf°=0."
     }
    },
    {
     "id": "ch-energy-09",
     "name": {
      "zh": "量熱實驗",
      "en": "Calorimetry"
     },
     "knowledgeType": "lab",
     "formula": "ΔH = -mcΔT",
     "pitfall": {
      "zh": "量熱器測溫升；ΔH = mcΔT 取負；質量用溶液總質量、c≈4.2 J/g°C。",
      "en": "Calorimeter measures temp rise; ΔH=-mcΔT; use total solution mass, c≈4.2 J/g°C."
     }
    }
   ]
  },
  {
   "id": "ch-rate",
   "level": "topic",
   "domain": "CH-REACT",
   "grades": [
    "S5",
    "S6"
   ],
   "name": {
    "zh": "反應速率",
    "en": "Rate of Reaction"
   },
   "weight": "high",
   "diff": 2,
   "leaves": [
    {
     "id": "ch-rate-01",
     "name": {
      "zh": "速率定義與量度",
      "en": "Rate Definition and Measurement"
     },
     "knowledgeType": "concept",
     "formula": "速率 = Δ濃度/Δt",
     "pitfall": {
      "zh": "量度：氣體體積/質量損失/顏色變化/濁度；取斜率得速率。",
      "en": "Measure: gas volume/mass loss/colour/turbidity; rate = gradient."
     }
    },
    {
     "id": "ch-rate-02",
     "name": {
      "zh": "濃度對速率的影響",
      "en": "Effect of Concentration"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "濃度增→碰撞頻率增→速率增；速率-濃度圖呈線性。",
      "en": "Higher concentration→more collisions→faster; rate-concentration roughly linear."
     }
    },
    {
     "id": "ch-rate-03",
     "name": {
      "zh": "表面積對速率的影響",
      "en": "Effect of Surface Area"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "顆粒越細表面積越大→碰撞機會越多→速率越快。",
      "en": "Smaller particles = larger surface area = more collisions = faster."
     }
    },
    {
     "id": "ch-rate-04",
     "name": {
      "zh": "溫度對速率的影響",
      "en": "Effect of Temperature"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "溫度升→粒子動能增→有效碰撞比例增；溫度每升 10°C 速率約翻倍。",
      "en": "Higher temp→more kinetic energy→more effective collisions; ~2× per 10°C."
     }
    },
    {
     "id": "ch-rate-05",
     "name": {
      "zh": "催化劑",
      "en": "Catalysts"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "降低活化能、加快反應但不被消耗；不改變平衡位置。",
      "en": "Lowers Eₐ, speeds reaction, not consumed; does not change equilibrium."
     }
    },
    {
     "id": "ch-rate-06",
     "name": {
      "zh": "碰撞理論",
      "en": "Collision Theory"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "粒子需碰撞且能量≥Eₐ 且有正確取向才算有效碰撞。",
      "en": "Particles must collide with energy ≥ Eₐ and correct orientation to react."
     }
    },
    {
     "id": "ch-rate-07",
     "name": {
      "zh": "速率實驗設計",
      "en": "Rate Experiment Design"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "控制變量：一次只改一個因素；用「消失的標記」等方法測時間。",
      "en": "Control one variable at a time; use disappearing cross etc. to time."
     }
    },
    {
     "id": "ch-rate-08",
     "name": {
      "zh": "速率-時間圖",
      "en": "Rate-Time Graphs"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "隨反應進行濃度降→速率減；斜率代表瞬時速率。",
      "en": "Rate decreases as reactants deplete; gradient = instantaneous rate."
     }
    },
    {
     "id": "ch-rate-09",
     "name": {
      "zh": "光催化與工業",
      "en": "Catalysts in Industry"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "催化劑降低工業反應溫度和成本；如鐵催化 Haber 法。",
      "en": "Catalysts lower industrial temperature/cost; iron in Haber process."
     }
    }
   ]
  },
  {
   "id": "ch-equil",
   "level": "topic",
   "domain": "CH-REACT",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "化學平衡",
    "en": "Chemical Equilibrium"
   },
   "weight": "high",
   "diff": 3,
   "leaves": [
    {
     "id": "ch-equil-01",
     "name": {
      "zh": "可逆反應",
      "en": "Reversible Reactions"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "正逆反應同時進行；用 ⇌ 表示；如 N₂+3H₂⇌2NH₃。",
      "en": "Forward and reverse proceed together; use ⇌; e.g. N₂+3H₂⇌2NH₃."
     }
    },
    {
     "id": "ch-equil-02",
     "name": {
      "zh": "平衡狀態特徵",
      "en": "Characteristics of Equilibrium"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "正逆速率相等、濃度不變、是動態平衡（宏觀不變微觀仍在反應）。",
      "en": "Forward rate = reverse rate, concentrations constant; dynamic equilibrium."
     }
    },
    {
     "id": "ch-equil-03",
     "name": {
      "zh": "平衡常數 Kc",
      "en": "Equilibrium Constant Kc"
     },
     "knowledgeType": "concept",
     "formula": "Kc = [產物]/[反應物]",
     "pitfall": {
      "zh": "Kc 只與溫度有關；濃度高次冪；純固體/液體不寫入。",
      "en": "Kc depends only on temperature; powers from coefficients; pure solids/liquids omitted."
     }
    },
    {
     "id": "ch-equil-04",
     "name": {
      "zh": "反應商 Q",
      "en": "Reaction Quotient Q"
     },
     "knowledgeType": "concept",
     "formula": "Q = [產物]/[反應物]",
     "pitfall": {
      "zh": "任意時刻的濃度比（同 Kc 形式）；Q 與 Kc 比較判斷移動方向。",
      "en": "Concentration ratio at any time (same form as Kc); compare Q with Kc for shift."
     }
    },
    {
     "id": "ch-equil-05",
     "name": {
      "zh": "Q vs Kc 判斷移動",
      "en": "Shift Prediction: Q vs Kc"
     },
     "knowledgeType": "law",
     "pitfall": {
      "zh": "Q < Kc 正向移動；Q > Kc 逆向移動；Q = Kc 平衡。⚠ 2022 新綱用 Q，不用勒沙特列。",
      "en": "Q<Kc forward; Q>Kc reverse; Q=Kc at equilibrium. New syllabus uses Q not Le Chatelier."
     }
    },
    {
     "id": "ch-equil-06",
     "name": {
      "zh": "濃度對平衡的影響",
      "en": "Effect of Concentration"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "增反應物→Q 降→正向移動；移除產物→正向移動。",
      "en": "Add reactant→Q decreases→forward; remove product→forward."
     }
    },
    {
     "id": "ch-equil-07",
     "name": {
      "zh": "溫度對平衡的影響",
      "en": "Effect of Temperature"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "升溫有利吸熱方向；Kc 隨溫度改變（放/吸熱 Kc 變大變小不同）。",
      "en": "Heating favours endothermic; Kc changes with temperature."
     }
    },
    {
     "id": "ch-equil-08",
     "name": {
      "zh": "壓力對平衡的影響",
      "en": "Effect of Pressure"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "隻影響氣體；增壓→向氣體分子數少的方向移動。",
      "en": "Affects gases only; higher pressure shifts toward fewer gas molecules."
     }
    },
    {
     "id": "ch-equil-09",
     "name": {
      "zh": "催化劑與平衡",
      "en": "Catalyst and Equilibrium"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "催化劑同時加快正逆反應，平衡位置不變，只更快到達平衡。",
      "en": "Catalyst speeds both directions, equilibrium position unchanged, reaches faster."
     }
    },
    {
     "id": "ch-equil-10",
     "name": {
      "zh": "平衡體系實例",
      "en": "Equilibrium Systems"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "Haber 法、Contact 法、碳酸氫鹽溶解等；用 Q/Kc 分析工業條件。",
      "en": "Haber, Contact, bicarbonate systems; use Q/Kc to analyse industrial conditions."
     }
    }
   ]
  },
  {
   "id": "ch-carbon",
   "level": "topic",
   "domain": "CH-CARBON",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "碳化合物的化學",
    "en": "Chemistry of Carbon Compounds"
   },
   "weight": "high",
   "diff": 3,
   "leaves": [
    {
     "id": "ch-carbon-01",
     "name": {
      "zh": "烷烴通式",
      "en": "Alkane General Formula"
     },
     "knowledgeType": "concept",
     "formula": "CₙH₂ₙ₊₂",
     "pitfall": {
      "zh": "烷烴只含單鍵（飽和）；甲烷 CH₄、乙烷 C₂H₆。",
      "en": "Alkanes are saturated (single bonds); methane CH₄, ethane C₂H₆."
     }
    },
    {
     "id": "ch-carbon-02",
     "name": {
      "zh": "烯烴加成反應",
      "en": "Alkene Addition"
     },
     "knowledgeType": "reaction",
     "formula": "C₂H₄ + H₂O → C₂H₅OH",
     "pitfall": {
      "zh": "烯烴含 C=C 雙鍵，可加 H₂/H₂O/HX；加水分步寫反應條件。",
      "en": "Alkenes have C=C, add H₂/H₂O/HX; write conditions for hydration."
     }
    },
    {
     "id": "ch-carbon-03",
     "name": {
      "zh": "酯化反應",
      "en": "Esterification"
     },
     "knowledgeType": "reaction",
     "formula": "RCOOH + R'OH ⇌ RCOOR' + H₂O",
     "pitfall": {
      "zh": "酸+醇→酯+水，需濃硫酸催化+加熱；可逆反應，酯有果香。",
      "en": "Acid + alcohol → ester + water, conc. H₂SO₄ catalyst + heat; reversible, fruity smell."
     }
    },
    {
     "id": "ch-carbon-04",
     "name": {
      "zh": "同系列",
      "en": "Homologous Series"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "同系列：通式相同、結構相似、性質遞變（烷/烯/醇/酸）。",
      "en": "Homologous series: same general formula, similar structure, gradation of properties."
     }
    },
    {
     "id": "ch-carbon-05",
     "name": {
      "zh": "同分異構",
      "en": "Isomerism"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "同分子式不同結構；如 C₄H₁₀ 有正丁烷/異丁烷；異構體性質不同。",
      "en": "Same formula different structure; C₄H₁₀ has n-butane/isobutane; different properties."
     }
    },
    {
     "id": "ch-carbon-06",
     "name": {
      "zh": "官能團",
      "en": "Functional Groups"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "決定性質的原子團：-OH(醇)、-COOH(酸)、C=C(烯)、-COO-(酯)。",
      "en": "Groups that define properties: -OH, -COOH, C=C, -COO-."
     }
    },
    {
     "id": "ch-carbon-07",
     "name": {
      "zh": "醇的性質",
      "en": "Properties of Alcohols"
     },
     "knowledgeType": "reaction",
     "formula": "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O",
     "pitfall": {
      "zh": "醇燃燒產 CO₂+H₂O；與鈉反應放氫氣；氧化成醛/酸。",
      "en": "Alcohols burn to CO₂+H₂O; react with Na (H₂); oxidise to aldehyde/acid."
     }
    },
    {
     "id": "ch-carbon-08",
     "name": {
      "zh": "醛與酮",
      "en": "Aldehydes and Ketones"
     },
     "knowledgeType": "reaction",
     "formula": "C₂H₅OH + [O] → CH₃CHO + H₂O",
     "pitfall": {
      "zh": "醛可被氧化成酸（費林/託倫斯試劑區分）；酮難氧化。",
      "en": "Aldehydes oxidise to acids (Fehling/Tollens distinguish); ketones resist oxidation."
     }
    },
    {
     "id": "ch-carbon-09",
     "name": {
      "zh": "羧酸的性質",
      "en": "Properties of Carboxylic Acids"
     },
     "knowledgeType": "reaction",
     "formula": "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂",
     "pitfall": {
      "zh": "羧酸弱酸性：與 NaHCO₃ 放 CO₂、與鹼中和、與醇酯化。",
      "en": "Carboxylic acids: with NaHCO₃ give CO₂, neutralise bases, esterify with alcohols."
     }
    },
    {
     "id": "ch-carbon-10",
     "name": {
      "zh": "加成聚合",
      "en": "Addition Polymerisation"
     },
     "knowledgeType": "reaction",
     "formula": "nCH₂=CH₂ → -(CH₂CH₂)ₙ-",
     "pitfall": {
      "zh": "含 C=C 單體加聚：聚乙烯/聚氯乙烯；無小分子放出。",
      "en": "Alkene monomers add-polymerise: PE/PVC; no small molecule released."
     }
    },
    {
     "id": "ch-carbon-11",
     "name": {
      "zh": "縮合聚合",
      "en": "Condensation Polymerisation"
     },
     "knowledgeType": "reaction",
     "formula": "二酸 + 二醇 → 聚酯 + H₂O",
     "pitfall": {
      "zh": "單體含兩個官能團，釋出水：聚酯/尼龍；需兩類單體。",
      "en": "Monomers with two groups lose water: polyester/nylon; needs two monomers."
     }
    },
    {
     "id": "ch-carbon-12",
     "name": {
      "zh": "有機命名",
      "en": "Organic Nomenclature"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "前綴碳數（meth/eth/prop/but）+ 後綴官能團（ane/ene/ol/oic acid）。",
      "en": "Prefix chain length (meth/eth/prop/but) + suffix functional group (ane/ene/ol/oic acid)."
     }
    }
   ]
  },
  {
   "id": "ch-pattern",
   "level": "topic",
   "domain": "CH-PATTERN",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "化學世界的規律",
    "en": "Patterns in the Chemical World"
   },
   "weight": "mid",
   "diff": 2,
   "leaves": [
    {
     "id": "ch-pattern-01",
     "name": {
      "zh": "週期表結構",
      "en": "Structure of the Periodic Table"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "橫行週期（7 個）、縱列族；元素按原子序排列；考試提供週期表。",
      "en": "7 periods, groups; ordered by atomic number; periodic table provided in exam."
     }
    },
    {
     "id": "ch-pattern-02",
     "name": {
      "zh": "週期趨勢：金屬性",
      "en": "Periodic Trend: Metallic Character"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "同週期右移金屬性減弱；同族下移金屬性增強（Na→K 更活潑）。",
      "en": "Across period metallic weakens; down group strengthens (K more reactive than Na)."
     }
    },
    {
     "id": "ch-pattern-03",
     "name": {
      "zh": "週期趨勢：原子半徑",
      "en": "Periodic Trend: Atomic Radius"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "同週期右移半徑減小（核電荷增）；同族下移半徑增大。",
      "en": "Across period radius shrinks (nuclear charge); down group radius grows."
     }
    },
    {
     "id": "ch-pattern-04",
     "name": {
      "zh": "鹼金屬族",
      "en": "Group 1: Alkali Metals"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "Li/Na/K 極活潑金屬；下移熔點降、反應更劇烈；儲存於油中。",
      "en": "Li/Na/K very reactive; down group lower mp, more vigorous; stored in oil."
     }
    },
    {
     "id": "ch-pattern-05",
     "name": {
      "zh": "鹵素族",
      "en": "Group 7: Halogens"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "F/Cl/Br/I 非金屬；下移熔沸點升、活潑性降；顏色加深。",
      "en": "F/Cl/Br/I non-metals; down group higher bp/mp, less reactive, darker colour."
     }
    },
    {
     "id": "ch-pattern-06",
     "name": {
      "zh": "惰性氣體族",
      "en": "Group 0: Noble Gases"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "最外層滿（He 2、其餘 8）；性質極穩定，幾乎不反應。",
      "en": "Full outer shell (He 2, others 8); extremely unreactive."
     }
    },
    {
     "id": "ch-pattern-07",
     "name": {
      "zh": "過渡金屬",
      "en": "Transition Metals"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "中間區塊；多變價態、有顏色化合物、可作催化劑（Fe/Ni）。",
      "en": "Middle block; variable oxidation states, coloured compounds, catalysts (Fe/Ni)."
     }
    },
    {
     "id": "ch-pattern-08",
     "name": {
      "zh": "元素推斷",
      "en": "Deducing Element Properties"
     },
     "knowledgeType": "concept",
     "providedInfo": "periodic-table",
     "pitfall": {
      "zh": "由位置推性質：同族相似；由性質定位置：金屬性/價態。",
      "en": "Position predicts properties (group similarity); properties locate position."
     }
    }
   ]
  },
  {
   "id": "ch-ind",
   "level": "topic",
   "domain": "CH-IND",
   "grades": [
    "S5",
    "S6"
   ],
   "name": {
    "zh": "工業化學",
    "en": "Industrial Chemistry"
   },
   "weight": "high",
   "diff": 3,
   "leaves": [
    {
     "id": "ch-ind-01",
     "name": {
      "zh": "Haber 法制氨",
      "en": "Haber Process"
     },
     "knowledgeType": "reaction",
     "formula": "N₂ + 3H₂ ⇌ 2NH₃（放熱）",
     "pitfall": {
      "zh": "條件：高壓 200atm、450°C、鐵催化劑；移走 NH₃ 提高轉化率。",
      "en": "Conditions: 200 atm, 450°C, iron catalyst; remove NH₃ to boost conversion."
     }
    },
    {
     "id": "ch-ind-02",
     "name": {
      "zh": "Contact 法制硫酸",
      "en": "Contact Process"
     },
     "knowledgeType": "reaction",
     "formula": "2SO₂ + O₂ ⇌ 2SO₃（放熱）",
     "pitfall": {
      "zh": "V₂O₅ 催化、450°C；SO₃ 用濃硫酸吸收成發煙硫酸。",
      "en": "V₂O₅ catalyst, 450°C; SO₃ absorbed in conc. H₂SO₄ as oleum."
     }
    },
    {
     "id": "ch-ind-03",
     "name": {
      "zh": "工業條件權衡",
      "en": "Industrial Condition Trade-offs"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "高溫利速率不利產率（放熱）；高壓利產率但成本高——需權衡。",
      "en": "High temp favours rate not yield (exothermic); high pressure helps yield but costly—trade off."
     }
    },
    {
     "id": "ch-ind-04",
     "name": {
      "zh": "電解製氯氣",
      "en": "Chlor-Alkali Industry"
     },
     "knowledgeType": "equation",
     "formula": "2NaCl + 2H₂O → 2NaOH + H₂ + Cl₂",
     "pitfall": {
      "zh": "電解食鹽水產 Cl₂/H₂/NaOH；隔膜電解槽分離產物。",
      "en": "Electrolyse brine for Cl₂/H₂/NaOH; membrane cell separates products."
     }
    },
    {
     "id": "ch-ind-05",
     "name": {
      "zh": "電解製鋁",
      "en": "Extraction of Aluminium"
     },
     "knowledgeType": "equation",
     "formula": "2Al₂O₃ → 4Al + 3O₂",
     "pitfall": {
      "zh": "熔融 Al₂O₃ 電解；冰晶石降熔點；陽極碳被消耗。",
      "en": "Electrolyse molten Al₂O₃; cryolite lowers mp; carbon anodes consumed."
     }
    },
    {
     "id": "ch-ind-06",
     "name": {
      "zh": "能量回收與熱交換",
      "en": "Energy Recovery & Heat Exchange"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "放熱反應熱交換預熱反應物；節省燃料、提高經濟效益。",
      "en": "Exothermic heat preheats reactants via exchangers; saves fuel, improves economy."
     }
    },
    {
     "id": "ch-ind-07",
     "name": {
      "zh": "工業催化劑",
      "en": "Industrial Catalysts"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "鐵(Haber)/五氧化二釩(Contact)/鉑銠(氨氧化)；降低 Eₐ 省能。",
      "en": "Fe (Haber)/V₂O₅ (Contact)/Pt-Rh (ammonia oxidation); lower Eₐ save energy."
     }
    },
    {
     "id": "ch-ind-08",
     "name": {
      "zh": "反應物循環利用",
      "en": "Recycling Reactants"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "未轉化的 N₂/H₂ 循環回反應器；提高總轉化率、減少浪費。",
      "en": "Unreacted N₂/H₂ recycled; raises overall conversion, cuts waste."
     }
    },
    {
     "id": "ch-ind-09",
     "name": {
      "zh": "工業經濟效益",
      "en": "Economic Factors in Industry"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "綜合考慮：原料成本、能源、設備、催化劑壽命、產率與速率。",
      "en": "Balance: feedstock cost, energy, equipment, catalyst life, yield vs rate."
     }
    },
    {
     "id": "ch-ind-10",
     "name": {
      "zh": "綠色化學",
      "en": "Green Chemistry"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "原子經濟性高、少副產物、可再生原料；如替代污染大的傳統工藝。",
      "en": "High atom economy, fewer by-products, renewable feedstock; greener processes."
     }
    }
   ]
  },
  {
   "id": "ch-mat",
   "level": "topic",
   "domain": "CH-MAT",
   "grades": [
    "S5",
    "S6"
   ],
   "name": {
    "zh": "材料化學",
    "en": "Materials Chemistry"
   },
   "weight": "mid",
   "diff": 2,
   "leaves": [
    {
     "id": "ch-mat-01",
     "name": {
      "zh": "塑料分類",
      "en": "Classification of Plastics"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "熱塑性（可重新加熱塑形：PE/PVC）vs 熱固性（不可逆：電木）。",
      "en": "Thermoplastic (remouldable: PE/PVC) vs thermosetting (irreversible: Bakelite)."
     }
    },
    {
     "id": "ch-mat-02",
     "name": {
      "zh": "加成聚合物",
      "en": "Addition Polymers"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "單體含 C=C；聚乙烯/聚丙烯/聚氯乙烯；性質取決單體與結構。",
      "en": "Monomers have C=C; PE/PP/PVC; properties depend on monomer and structure."
     }
    },
    {
     "id": "ch-mat-03",
     "name": {
      "zh": "縮合聚合物",
      "en": "Condensation Polymers"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "聚酯（酯鍵）/聚醯胺（醯胺鍵）；釋出水；常為纖維。",
      "en": "Polyester (ester links)/polyamide (amide links); release water; often fibres."
     }
    },
    {
     "id": "ch-mat-04",
     "name": {
      "zh": "聚合物結構與性質",
      "en": "Polymer Structure-Property"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "支鏈/交聯影響強度柔軟度；結晶度影響透明性強度。",
      "en": "Branches/crosslinks affect strength/flexibility; crystallinity affects transparency."
     }
    },
    {
     "id": "ch-mat-05",
     "name": {
      "zh": "塑料回收",
      "en": "Plastic Recycling"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "回收標誌（1-7）分類；物理回收 vs 化學回收（解聚）；環境問題。",
      "en": "Recycling codes (1-7); mechanical vs chemical recycling (depolymerisation)."
     }
    },
    {
     "id": "ch-mat-06",
     "name": {
      "zh": "複合材料",
      "en": "Composite Materials"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "兩種以上材料組合：玻璃纖維+樹脂=玻璃鋼；強度重量比優。",
      "en": "Two+ materials combined: fibreglass (glass fibre+resin); high strength-to-weight."
     }
    },
    {
     "id": "ch-mat-07",
     "name": {
      "zh": "納米材料",
      "en": "Nanomaterials"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "1-100 nm 尺度；比表面積大→催化/反應活性強；納米碳管等。",
      "en": "1-100 nm scale; huge surface area→catalytic activity; e.g. carbon nanotubes."
     }
    },
    {
     "id": "ch-mat-08",
     "name": {
      "zh": "材料選擇",
      "en": "Choosing Materials"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "根據：強度/密度/耐腐蝕/成本/可回收；如汽車部件選複合材料減重。",
      "en": "Consider: strength/density/corrosion/cost/recyclability; e.g. composites in cars."
     }
    }
   ]
  },
  {
   "id": "ch-ana",
   "level": "topic",
   "domain": "CH-ANA",
   "grades": [
    "S5",
    "S6"
   ],
   "name": {
    "zh": "分析化學",
    "en": "Analytical Chemistry"
   },
   "weight": "high",
   "diff": 3,
   "leaves": [
    {
     "id": "ch-ana-01",
     "name": {
      "zh": "過濾與蒸發",
      "en": "Filtration and Evaporation"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "過濾分離不溶固體；蒸發結晶回收可溶鹽；過濾需濾紙漏斗。",
      "en": "Filter separates insoluble solid; evaporate to crystallise salts."
     }
    },
    {
     "id": "ch-ana-02",
     "name": {
      "zh": "蒸餾",
      "en": "Distillation"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "分離溶液中的溶劑（沸點差異）；溫度計測蒸氣溫度。",
      "en": "Separate solvent from solution by boiling point; thermometer measures vapour."
     }
    },
    {
     "id": "ch-ana-03",
     "name": {
      "zh": "分液",
      "en": "Separating Funnel"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "分離不互溶液體（油/水）；下層從下口放出。",
      "en": "Separates immiscible liquids (oil/water); drain lower layer from tap."
     }
    },
    {
     "id": "ch-ana-04",
     "name": {
      "zh": "色層分析",
      "en": "Chromatography"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "依溶質在固定相/流動相分配分離；Rf 值鑑定成分。",
      "en": "Separates by partition between stationary/mobile phases; Rf identifies components."
     }
    },
    {
     "id": "ch-ana-05",
     "name": {
      "zh": "滴定分析",
      "en": "Titrimetric Analysis"
     },
     "knowledgeType": "lab",
     "formula": "c₁V₁ = c₂V₂（摩爾比修正）",
     "pitfall": {
      "zh": "定量分析：標準液+指示劑；返滴定/空白滴定是常見變化。",
      "en": "Quantitative: standard solution + indicator; back/blank titrations common variants."
     }
    },
    {
     "id": "ch-ana-06",
     "name": {
      "zh": "焰色試驗",
      "en": "Flame Tests"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "鈉黃、鉀紫（隔鈷玻璃）、鈣磚紅、銅藍綠；檢驗金屬陽離子。",
      "en": "Na yellow, K lilac (cobalt glass), Ca brick-red, Cu blue-green."
     }
    },
    {
     "id": "ch-ana-07",
     "name": {
      "zh": "沉澱測試",
      "en": "Precipitation Tests"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "加試劑生成特徵沉澱：Cl⁻+Ag⁺→白色 AgCl；SO₄²⁻+Ba²⁺→白色 BaSO₄。",
      "en": "Add reagent for characteristic precipitate: Cl⁻+Ag⁺→white AgCl; SO₄²⁻+Ba²⁺→white BaSO₄."
     }
    },
    {
     "id": "ch-ana-08",
     "name": {
      "zh": "氣體測試",
      "en": "Gas Tests"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "H₂：爆鳴聲；CO₂：石灰水變乳白；O₂：帶火星復燃；NH₃：濕石蕊變藍。",
      "en": "H₂ pops; CO₂ milky limewater; O₂ relights splint; NH₃ turns litmus blue."
     }
    },
    {
     "id": "ch-ana-09",
     "name": {
      "zh": "紅外光譜",
      "en": "Infrared Spectroscopy"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "官能團指紋區：-OH 寬峯、C=O 1700 附近；鑑定官能團。",
      "en": "Functional group fingerprint: -OH broad, C=O near 1700; identifies groups."
     }
    },
    {
     "id": "ch-ana-10",
     "name": {
      "zh": "質譜法",
      "en": "Mass Spectrometry"
     },
     "knowledgeType": "concept",
     "pitfall": {
      "zh": "測相對分子質量（分子離子峯）與碎片；同位素豐度也可測。",
      "en": "Measures Mr (molecular ion peak) and fragments; also isotope abundance."
     }
    }
   ]
  },
  {
   "id": "ch-lab",
   "level": "topic",
   "domain": "CH-LAB",
   "grades": [
    "S4",
    "S5",
    "S6"
   ],
   "name": {
    "zh": "實驗技能",
    "en": "Experimental Skills"
   },
   "weight": "high",
   "diff": 2,
   "leaves": [
    {
     "id": "ch-lab-01",
     "name": {
      "zh": "實驗安全",
      "en": "Laboratory Safety"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "護目鏡/通風櫥；濃酸稀釋「酸入水」；易燃品遠離火焰。",
      "en": "Goggles/fume cupboard; add acid to water; flammables away from flames."
     }
    },
    {
     "id": "ch-lab-02",
     "name": {
      "zh": "儀器使用",
      "en": "Using Apparatus"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "滴定管讀數到 0.01 mL；移液管到刻度線；量筒不需精確。",
      "en": "Burette to 0.01 mL; pipette to mark; measuring cylinder for rough volumes."
     }
    },
    {
     "id": "ch-lab-03",
     "name": {
      "zh": "精確測量",
      "en": "Precise Measurement"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "電子天平測質量；量熱器測溫升；準確度：分析天平>電子秤。",
      "en": "Balance for mass; calorimeter for ΔT; precision: analytical balance > top pan."
     }
    },
    {
     "id": "ch-lab-04",
     "name": {
      "zh": "變量控制",
      "en": "Controlling Variables"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "只改自變量，控制其餘（溫度/濃度/表面積）；對照實驗。",
      "en": "Change only independent variable; control others (temp/concentration/surface area)."
     }
    },
    {
     "id": "ch-lab-05",
     "name": {
      "zh": "數據分析",
      "en": "Data Analysis"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "作圖求斜率/外推；離羣點識別；平均值與誤差。",
      "en": "Graph for gradient/extrapolation; identify outliers; mean and error."
     }
    },
    {
     "id": "ch-lab-06",
     "name": {
      "zh": "誤差處理",
      "en": "Handling Errors"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "系統誤差（儀器校準）vs 隨機誤差（讀數）；減少誤差方法。",
      "en": "Systematic (calibration) vs random (reading) errors; methods to reduce."
     }
    },
    {
     "id": "ch-lab-07",
     "name": {
      "zh": "實驗報告",
      "en": "Writing Reports"
     },
     "knowledgeType": "lab",
     "pitfall": {
      "zh": "目的/原理/步驟/結果/結論/誤差；SBA 評核重點。",
      "en": "Aim/principle/method/results/conclusion/errors; key for SBA assessment."
     }
    }
   ]
  }
 ],
 "edges": [
  {
   "from": "ch-mw1",
   "to": "ch-mw2",
   "type": "prereq"
  },
  {
   "from": "ch-mw1",
   "to": "ch-acidbase",
   "type": "prereq"
  },
  {
   "from": "ch-mw1",
   "to": "ch-metals",
   "type": "prereq"
  },
  {
   "from": "ch-mw2",
   "to": "ch-redox",
   "type": "prereq"
  },
  {
   "from": "ch-acidbase",
   "to": "ch-redox",
   "type": "prereq"
  },
  {
   "from": "ch-metals",
   "to": "ch-redox",
   "type": "prereq"
  },
  {
   "from": "ch-fossil",
   "to": "ch-carbon",
   "type": "prereq"
  },
  {
   "from": "ch-energy",
   "to": "ch-equil",
   "type": "prereq"
  },
  {
   "from": "ch-rate",
   "to": "ch-equil",
   "type": "prereq"
  },
  {
   "from": "ch-redox",
   "to": "ch-ind",
   "type": "prereq"
  },
  {
   "from": "ch-equil",
   "to": "ch-ind",
   "type": "prereq"
  },
  {
   "from": "ch-rate",
   "to": "ch-ind",
   "type": "prereq"
  },
  {
   "from": "ch-acidbase",
   "to": "ch-ana",
   "type": "prereq"
  },
  {
   "from": "ch-redox",
   "to": "ch-ana",
   "type": "prereq"
  },
  {
   "from": "ch-equil",
   "to": "ch-ana",
   "type": "prereq"
  },
  {
   "from": "ch-mw2",
   "to": "ch-carbon",
   "type": "related"
  },
  {
   "from": "ch-pattern",
   "to": "ch-mw2",
   "type": "related"
  },
  {
   "from": "ch-fossil",
   "to": "ch-energy",
   "type": "related"
  },
  {
   "from": "ch-acidbase",
   "to": "ch-redox",
   "type": "cotested"
  },
  {
   "from": "ch-acidbase",
   "to": "ch-ana",
   "type": "cotested"
  },
  {
   "from": "ch-redox",
   "to": "ch-ind",
   "type": "cotested"
  },
  {
   "from": "ch-equil",
   "to": "ch-ind",
   "type": "cotested"
  },
  {
   "from": "ch-carbon",
   "to": "ch-fossil",
   "type": "cotested"
  },
  {
   "from": "ch-rate",
   "to": "ch-equil",
   "type": "cotested"
  },
  {
   "from": "ch-equil",
   "to": "ch-ana",
   "type": "cotested"
  },
  {
   "from": "ch-metals",
   "to": "ch-redox",
   "type": "cotested"
  },
  {
   "from": "ch-mw2",
   "to": "ch-carbon",
   "type": "cotested"
  },
  {
   "from": "ch-energy",
   "to": "ch-rate",
   "type": "cotested"
  },
  {
   "from": "ch-rate",
   "to": "ch-ind",
   "type": "cotested"
  },
  {
   "from": "ch-energy",
   "to": "ch-equil",
   "type": "cotested"
  },
  {
   "from": "ch-redox",
   "to": "ch-ana",
   "type": "cotested"
  },
  {
   "from": "ch-mat",
   "to": "ch-carbon",
   "type": "cotested"
  },
  {
   "from": "ch-earth",
   "to": "ch-fossil",
   "type": "cotested"
  },
  {
   "from": "ch-mw1",
   "to": "ch-mw2",
   "type": "cotested"
  },
  {
   "from": "ch-ana",
   "to": "ch-lab",
   "type": "cotested"
  },
  {
   "from": "ch-metals",
   "to": "ch-mat",
   "type": "cotested"
  },
  {
   "from": "ch-ind",
   "to": "ch-energy",
   "type": "cotested"
  },
  {
   "from": "ch-mw2",
   "to": "ch-ana",
   "type": "cotested"
  },
  {
   "from": "ch-metals",
   "to": "ch-acidbase",
   "type": "cotested"
  },
  {
   "from": "ch-ind",
   "to": "ch-ana",
   "type": "cotested"
  }
 ],
 "motherProblems": [
  {
   "id": "ch-mp-acidbase-01",
   "titleZh": "酸鹼滴定計算題",
   "titleEn": "Acid-Base Titration Calculation",
   "coreTopics": [
    "ch-acidbase"
   ],
   "relatedTopics": [
    "ch-ana"
   ],
   "questionType": "titration",
   "stem": "用 0.100 mol/L 的 NaOH 滴定 25.0 mL 鹽酸，到終點用去 20.0 mL NaOH，求鹽酸濃度。",
   "stemEn": "25.0 mL of HCl is titrated with 0.100 mol/L NaOH; 20.0 mL NaOH reaches the endpoint. Find the HCl concentration.",
   "solutionSkeleton": [
    "寫出中和離子方程式 H⁺ + OH⁻ → H₂O",
    "n(NaOH) = cV = 0.100 × 20.0/1000",
    "由 1:1 摩爾比得 n(HCl)",
    "c(HCl) = n/V = 0.0800 mol/L"
   ],
   "variation": [
    "返滴定（先加過量鹼再回滴）",
    "含雜質樣品的純度計算",
    "指示劑選擇與終點顏色判斷"
   ],
   "appearances": [
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "25.0 mL 的 0.100 mol/L HCl 用 0.100 mol/L NaOH 滴定，求到達終點需 NaOH 體積。",
     "stemEn": "25.0 mL of 0.100 mol/L HCl is titrated with 0.100 mol/L NaOH. Find the NaOH volume at endpoint.",
     "answerZh": "n(HCl)=0.100×25/1000=0.0025 mol；需 NaOH 同摩爾=0.0025 mol；V=0.0025/0.100=25.0 mL。",
     "answerEn": "n(HCl)=0.0025 mol; NaOH needs same moles; V=0.0025/0.100=25.0 mL.",
     "years": [
      "2016"
     ],
     "marks": [
      {
       "content": "寫 n(HCl)=cV=0.100×25/1000=0.0025 mol",
       "pts": 1,
       "contentEn": "n(HCl) = cV = 0.100×25/1000 = 0.0025 mol"
      },
      {
       "content": "由 1:1 摩爾比得 n(NaOH)=n(HCl)",
       "pts": 1,
       "contentEn": "n(NaOH) = n(HCl) from the 1:1 ratio"
      },
      {
       "content": "V(NaOH)=n/c=0.0025/0.100=25.0 mL",
       "pts": 1,
       "contentEn": "V(NaOH) = n/c = 0.0025/0.100 = 25.0 mL"
      }
     ],
     "lossZh": "忘記把 mL 換成 L（25 mL → 0.025 L）導致數量級錯誤。",
     "lossEn": "Forgetting to convert mL to L (25→0.025 L), wrong magnitude."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "2.50 g 含雜質的碳酸鈉樣品溶於水配成 250 mL 溶液。取 25.0 mL 用 0.100 mol/L HCl 滴定，耗去 20.0 mL。求樣品中 Na₂CO₃ 的純度。",
     "stemEn": "2.50 g impure Na₂CO₃ made up to 250 mL. 25.0 mL aliquot uses 20.0 mL of 0.100 mol/L HCl. Find purity.",
     "answerZh": "n(HCl)=0.002 mol；Na₂CO₃+2HCl→2NaCl+H₂O+CO₂，n(Na₂CO₃)=0.001 mol（每份）；總量 0.01 mol；質量=1.06 g；純度=1.06/2.50=42.4%。",
     "answerEn": "n(HCl)=0.002 mol; Na₂CO₃:2HCl=1:2 so n(Na₂CO₃)=0.001 mol per aliquot; total 0.01 mol; mass 1.06 g; purity 42.4%.",
     "years": [
      "2021"
     ],
     "marks": [
      {
       "content": "n(HCl)=0.100×20/1000=0.002 mol",
       "pts": 1,
       "contentEn": "n(HCl) = 0.100×20/1000 = 0.002 mol"
      },
      {
       "content": "Na₂CO₃+2HCl→… 摩爾比 1:2，n(Na₂CO₃)=0.001 mol/份",
       "pts": 1,
       "contentEn": "Na₂CO₃+2HCl→… ratio 1:2, n(Na₂CO₃)=0.001 mol/aliquot"
      },
      {
       "content": "乘以稀釋倍數 250/25=10 → 總量 0.01 mol → 1.06 g",
       "pts": 1,
       "contentEn": "× dilution factor 250/25=10 → total 0.01 mol → 1.06 g"
      },
      {
       "content": "純度=1.06/2.50×100%=42.4%",
       "pts": 1,
       "contentEn": "Purity = 1.06/2.50×100% = 42.4%"
      }
     ],
     "lossZh": "忽略稀釋倍數（25 mL 取樣 ×10 才是總量），直接把每份當總量。",
     "lossEn": "Ignoring dilution factor (×10 for 250 mL total)."
    },
    {
     "difficulty": "challenge",
     "stemZh": "用返滴定法測定石灰石中 CaCO₃：0.500 g 樣品加 50.0 mL 0.200 mol/L HCl（過量），剩餘酸用 0.100 mol/L NaOH 滴定耗 30.0 mL。求 CaCO₃ 質量分數。",
     "stemEn": "Back-titration: 0.500 g limestone + 50.0 mL 0.200 mol/L HCl (excess); residual acid uses 30.0 mL 0.100 mol/L NaOH. Find % CaCO₃.",
     "answerZh": "總 HCl=0.01 mol；剩餘 n(NaOH)=0.003 mol=剩餘 HCl；反應 HCl=0.007 mol；CaCO₃:2HCl=1:2，n(CaCO₃)=0.0035 mol=0.35 g；質量分數=70%。",
     "answerEn": "Total HCl 0.01 mol; residual 0.003 mol; reacted 0.007 mol; CaCO₃ 0.0035 mol = 0.35 g; 70%.",
     "years": [
      "2023"
     ],
     "marks": [
      {
       "content": "總 HCl=0.200×50/1000=0.01 mol",
       "pts": 1,
       "contentEn": "Total HCl = 0.200×50/1000 = 0.01 mol"
      },
      {
       "content": "剩餘 HCl=n(NaOH)=0.100×30/1000=0.003 mol",
       "pts": 1,
       "contentEn": "Residual HCl = n(NaOH) = 0.100×30/1000 = 0.003 mol"
      },
      {
       "content": "與 CaCO₃ 反應的 HCl=0.007 mol",
       "pts": 1,
       "contentEn": "HCl reacted with CaCO₃ = 0.007 mol"
      },
      {
       "content": "CaCO₃:2HCl=1:2 → 0.0035 mol=0.35 g → 70%",
       "pts": 1,
       "contentEn": "CaCO₃:2HCl = 1:2 → 0.0035 mol = 0.35 g → 70%"
      }
     ],
     "lossZh": "返滴定方向搞反：NaOH 滴定的是「剩餘」HCl，不是樣品。",
     "lossEn": "Back-titration confusion: NaOH neutralises residual HCl, not the sample."
    }
   ],
   "solutionSkeletonEn": [
    "Write the neutralisation ionic equation H⁺ + OH⁻ → H₂O",
    "n(NaOH) = cV = 0.100 × 20.0/1000",
    "n(HCl) from the 1:1 mole ratio",
    "c(HCl) = n/V = 0.0800 mol/L"
   ],
   "variationEn": [
    "Back titration (excess base then titrate back)",
    "Purity calculation of an impure sample",
    "Indicator choice and endpoint colour"
   ]
  },
  {
   "id": "ch-mp-redox-01",
   "titleZh": "電解質綜合題",
   "titleEn": "Electrolysis Comprehensive",
   "coreTopics": [
    "ch-redox"
   ],
   "relatedTopics": [
    "ch-mw2",
    "ch-ind"
   ],
   "questionType": "preparation",
   "stem": "電解熔融氯化鈉，寫出陰陽極反應並説明產物如何收集。",
   "stemEn": "Electrolyse molten NaCl; write anode/cathode reactions and explain product collection.",
   "solutionSkeleton": [
    "陰極（還原）：Na⁺ + e⁻ → Na",
    "陽極（氧化）：2Cl⁻ → Cl₂ + 2e⁻",
    "説明離子移動方向與產物收集方法",
    "（延伸）電解 NaCl 溶液時的差異"
   ],
   "variation": [
    "電解 CuSO₄ 溶液（活性電極）",
    "電鍍原理",
    "電解質與工業提取金屬的結合"
   ],
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "電解熔融氯化鈉，寫出陰陽極反應及產物。",
     "stemEn": "Electrolyse molten NaCl; write electrode reactions and products.",
     "answerZh": "陰極：Na⁺+e⁻→Na；陽極：2Cl⁻→Cl₂+2e⁻；產物 Na 和 Cl₂。",
     "answerEn": "Cathode Na⁺+e⁻→Na; anode 2Cl⁻→Cl₂+2e⁻; products Na and Cl₂.",
     "years": [
      "2019"
     ],
     "marks": [
      {
       "content": "陰極（還原）：Na⁺+e⁻→Na",
       "pts": 1,
       "contentEn": "Cathode (reduction): Na⁺+e⁻→Na"
      },
      {
       "content": "陽極（氧化）：2Cl⁻→Cl₂+2e⁻",
       "pts": 1,
       "contentEn": "Anode (oxidation): 2Cl⁻→Cl₂+2e⁻"
      },
      {
       "content": "產物 Na 與 Cl₂",
       "pts": 1,
       "contentEn": "Products Na and Cl₂"
      }
     ],
     "lossZh": "電極與反應類型搞反：陽極是氧化（失電子），陰極是還原（得電子）。",
     "lossEn": "Swapping electrodes: anode oxidises (loses e⁻), cathode reduces."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "電解硫酸銅溶液（銅電極），説明兩極現象與電解液變化。",
     "stemEn": "Electrolyse CuSO₄(aq) with copper electrodes; describe observations.",
     "answerZh": "陽極銅溶解：Cu→Cu²⁺+2e⁻（電鍍）；陰極銅沉積：Cu²⁺+2e⁻→Cu；溶液濃度不變。",
     "answerEn": "Anode Cu dissolves (Cu→Cu²⁺+2e⁻); cathode Cu deposits; concentration unchanged.",
     "years": [
      "2020"
     ],
     "marks": [
      {
       "content": "陽極銅溶解 Cu→Cu²⁺+2e⁻（活性電極）",
       "pts": 1,
       "contentEn": "Anode Cu dissolves Cu→Cu²⁺+2e⁻ (active electrode)"
      },
      {
       "content": "陰極銅沉積 Cu²⁺+2e⁻→Cu",
       "pts": 1,
       "contentEn": "Cathode Cu deposits Cu²⁺+2e⁻→Cu"
      },
      {
       "content": "電解液 CuSO₄ 濃度不變",
       "pts": 1,
       "contentEn": "CuSO₄ concentration unchanged"
      }
     ],
     "lossZh": "誤以為濃度下降：活性銅電極會補充 Cu²⁺，濃度保持不變。",
     "lossEn": "Wrongly assuming concentration drops; active Cu anode replenishes Cu²⁺."
    },
    {
     "difficulty": "challenge",
     "stemZh": "比較電解熔融 NaCl 與電解 NaCl 溶液的產物差異並解釋。",
     "stemEn": "Compare products of electrolysing molten NaCl vs NaCl(aq).",
     "answerZh": "熔融只產 Na+Cl₂；溶液中有水，H₂O 優先於 Na⁺ 還原產 H₂，OH⁻ 優先於 Cl⁻ 氧化產 O₂，另有 NaOH 生成。",
     "answerEn": "Molten gives Na+Cl₂; in aqueous, H₂O reduces first (H₂), OH⁻ oxidises first (O₂), also NaOH.",
     "years": [
      "2018"
     ],
     "marks": [
      {
       "content": "熔融：產 Na+Cl₂",
       "pts": 1,
       "contentEn": "Molten: Na + Cl₂"
      },
      {
       "content": "溶液：H₂O 優先於 Na⁺ 還原產 H₂",
       "pts": 1,
       "contentEn": "Aqueous: H₂O reduces before Na⁺ → H₂"
      },
      {
       "content": "OH⁻ 優先於 Cl⁻ 氧化產 O₂，另生成 NaOH",
       "pts": 1,
       "contentEn": "OH⁻ oxidises before Cl⁻ → O₂, also NaOH"
      }
     ],
     "lossZh": "忽視水參與反應：電解溶液時產 H₂/O₂ 而非 Na/Cl₂。",
     "lossEn": "Ignoring water: aqueous electrolysis gives H₂/O₂, not Na/Cl₂."
    }
   ],
   "solutionSkeletonEn": [
    "Cathode (reduction): Na⁺ + e⁻ → Na",
    "Anode (oxidation): 2Cl⁻ → Cl₂ + 2e⁻",
    "Describe ion migration and product collection",
    "(Extension) Difference in electrolysing NaCl(aq)"
   ],
   "variationEn": [
    "Electrolysing CuSO₄(aq) (active electrode)",
    "Electroplating principle",
    "Electrolysis combined with industrial metal extraction"
   ]
  },
  {
   "id": "ch-mp-equil-01",
   "titleZh": "平衡移動題（Q vs Kc）",
   "titleEn": "Equilibrium Shift (Q vs Kc)",
   "coreTopics": [
    "ch-equil"
   ],
   "relatedTopics": [
    "ch-rate",
    "ch-ind"
   ],
   "questionType": "rate-equilibrium",
   "stem": "對於 N₂ + 3H₂ ⇌ 2NH₃ 的平衡體系，若增加 N₂ 濃度，用 Q 與 Kc 比較解釋平衡如何移動。",
   "stemEn": "For N₂ + 3H₂ ⇌ 2NH₃ at equilibrium, explain the shift when [N₂] increases, using Q vs Kc.",
   "solutionSkeleton": [
    "寫出平衡常數表達式 Kc = [NH₃]²/([N₂][H₂]³)",
    "增 [N₂] 使分母變大 → Q 瞬時減小",
    "Q < Kc → 正反應方向移動",
    "新平衡建立，Kc 不變"
   ],
   "variation": [
    "溫度變化對 Kc 的影響（放熱/吸熱）",
    "加壓/體積變化對平衡的影響",
    "催化劑為何不影響平衡位置"
   ],
   "appearances": [
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "N₂+3H₂⇌2NH₃ 平衡體系增大 [N₂]，用 Q 與 Kc 判斷移動方向。",
     "stemEn": "For N₂+3H₂⇌2NH₃, increase [N₂]; use Q vs Kc to predict shift.",
     "answerZh": "Kc=[NH₃]²/([N₂][H₂]³)；增 [N₂] 分母大→Q 瞬時小於 Kc→正向移動。",
     "answerEn": "Q = [NH₃]²/([N₂][H₂]³); adding N₂ increases denominator → Q<Kc → forward shift.",
     "years": [
      "2023"
     ],
     "marks": [
      {
       "content": "寫出 Kc=[NH₃]²/([N₂][H₂]³)",
       "pts": 1,
       "contentEn": "Write Kc = [NH₃]²/([N₂][H₂]³)"
      },
      {
       "content": "增 [N₂] → 分母增大 → Q 瞬時減小",
       "pts": 1,
       "contentEn": "Adding [N₂] → denominator larger → Q drops"
      },
      {
       "content": "Q<Kc → 正向移動",
       "pts": 1,
       "contentEn": "Q < Kc → forward shift"
      }
     ],
     "lossZh": "沿用已淘汰的勒沙特列原理：2022 新綱要求用 Q vs Kc 解釋。",
     "lossEn": "Using outdated Le Chatelier; new syllabus requires Q vs Kc."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "某平衡 A⇌B 的 Kc=4.0，此刻 [A]=2.0、[B]=3.0 mol/L，判斷移動方向。",
     "stemEn": "A⇌B has Kc=4.0; current [A]=2.0, [B]=3.0. Predict shift.",
     "answerZh": "Q=[B]/[A]=3.0/2.0=1.5 < Kc=4.0 → 正向移動（生成更多 B）。",
     "answerEn": "Q = 1.5 < 4.0 → forward shift (more B).",
     "years": [],
     "marks": [
      {
       "content": "Q=[B]/[A]=3.0/2.0=1.5",
       "pts": 1,
       "contentEn": "Q = [B]/[A] = 3.0/2.0 = 1.5"
      },
      {
       "content": "比較 Q=1.5 < Kc=4.0",
       "pts": 1,
       "contentEn": "Compare Q = 1.5 < Kc = 4.0"
      },
      {
       "content": "Q<Kc → 正向移動（生成更多 B）",
       "pts": 1,
       "contentEn": "Q < Kc → forward (more B)"
      }
     ],
     "lossZh": "Q 計算方向寫反：Q 是「產物/反應物」，不是「反應物/產物」。",
     "lossEn": "Q = products/reactants, not the reverse."
    },
    {
     "difficulty": "challenge",
     "stemZh": "放熱反應 2SO₂+O₂⇌2SO₃，升高溫度用 Q/Kc 和 Kc 變化雙重視角分析。",
     "stemEn": "Exothermic 2SO₂+O₂⇌2SO₃; analyse heating via Q/Kc and Kc change.",
     "answerZh": "升溫 Kc 變小（放熱反應 Kc 隨溫度升而降）；此刻 Q（用原濃度算）暫時大於新 Kc→逆向移動；新平衡 SO₃ 減少。",
     "answerEn": "Heating lowers Kc; current Q > new Kc → reverse; less SO₃ at new equilibrium.",
     "years": [
      "2022"
     ],
     "marks": [
      {
       "content": "放熱反應升溫 → Kc 減小",
       "pts": 1,
       "contentEn": "Exothermic: heating → Kc decreases"
      },
      {
       "content": "此刻 Q（原濃度算）> 新 Kc → 逆向移動",
       "pts": 1,
       "contentEn": "Current Q (original concentrations) > new Kc → reverse"
      },
      {
       "content": "結論：SO₃ 平衡濃度減少",
       "pts": 1,
       "contentEn": "Conclusion: equilibrium [SO₃] decreases"
      }
     ],
     "lossZh": "只説「升溫逆向」而無 Kc 變化邏輯：放熱反應 Kc 隨升溫而降。",
     "lossEn": "Saying \"heat shifts reverse\" without Kc logic: exothermic Kc decreases on heating."
    }
   ],
   "solutionSkeletonEn": [
    "Write Kc = [NH₃]²/([N₂][H₂]³)",
    "Adding [N₂] increases the denominator → Q drops",
    "Q < Kc → shifts forward",
    "New equilibrium forms, Kc unchanged"
   ],
   "variationEn": [
    "Effect of temperature on Kc (exothermic/endothermic)",
    "Effect of pressure/volume changes",
    "Why a catalyst does not shift equilibrium"
   ]
  },
  {
   "id": "ch-mp-carbon-01",
   "titleZh": "有機推斷題",
   "titleEn": "Organic Inference",
   "coreTopics": [
    "ch-carbon"
   ],
   "relatedTopics": [
    "ch-fossil"
   ],
   "questionType": "organic",
   "stem": "化合物 X（分子式 C₄H₈O₂）可與 NaHCO₃ 反應放出 CO₂。寫出 X 的可能結構並命名。",
   "stemEn": "Compound X (C₄H₈O₂) releases CO₂ with NaHCO₃. Give possible structures of X and name them.",
   "solutionSkeleton": [
    "由與 NaHCO₃ 反應 → X 是羧酸（含 -COOH）",
    "不飽和度 = 1 → 羧酸中的 C=O",
    "寫出 C₄H₈O₂ 羧酸的同分異構（丁酸/異丁酸）",
    "命名並畫結構式"
   ],
   "variation": [
    "酯的同分異構體數目",
    "官能團轉化鏈（醇→醛→酸→酯）",
    "由質譜/紅外光譜推結構"
   ],
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "化合物 C₃H₆O₂ 能與 NaHCO₃ 反應放 CO₂，寫出其結構並命名。",
     "stemEn": "C₃H₆O₂ releases CO₂ with NaHCO₃. Give structure and name.",
     "answerZh": "與 NaHCO₃ 反應→羧酸；C₃H₆O₂ 羧酸即丙酸 CH₃CH₂COOH（propanoic acid）。",
     "answerEn": "Reacts with NaHCO₃ → carboxylic acid; C₃H₆O₂ = propanoic acid CH₃CH₂COOH.",
     "years": [],
     "marks": [
      {
       "content": "由與 NaHCO₃ 反應 → 含 -COOH（羧酸）",
       "pts": 1,
       "contentEn": "Reacts with NaHCO₃ → contains -COOH"
      },
      {
       "content": "C₃H₆O₂ 羧酸 = 丙酸",
       "pts": 1,
       "contentEn": "C₃H₆O₂ acid = propanoic acid"
      },
      {
       "content": "畫出結構 CH₃CH₂COOH 並命名 propanoic acid",
       "pts": 1,
       "contentEn": "Draw CH₃CH₂COOH and name propanoic acid"
      }
     ],
     "lossZh": "把 C₃H₆O₂ 當酯（酯不與 NaHCO₃ 放 CO₂）。",
     "lossEn": "Taking C₃H₆O₂ as ester (esters don't give CO₂ with NaHCO₃)."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "兩種液體均為 C₄H₈O₂，一種是酸另一種是酯。設計實驗區分並畫出結構。",
     "stemEn": "Two liquids C₄H₈O₂, one acid one ester. Distinguish and draw structures.",
     "answerZh": "加 NaHCO₃：酸放 CO₂（丁酸/異丁酸）；酯不反應（乙酸乙酯等）。酸：CH₃CH₂CH₂COOH 或 (CH₃)₂CHCOOH。",
     "answerEn": "NaHCO₃: acid gives CO₂ (butanoic/isobutanoic); ester does not. Draw both.",
     "years": [
      "2020"
     ],
     "marks": [
      {
       "content": "NaHCO₃ 區分：酸放 CO₂ / 酯無反應",
       "pts": 1,
       "contentEn": "NaHCO₃ distinguishes: acid gives CO₂ / ester no reaction"
      },
      {
       "content": "畫出丁酸 CH₃CH₂CH₂COOH 或異丁酸 (CH₃)₂CHCOOH",
       "pts": 1,
       "contentEn": "Draw butanoic CH₃CH₂CH₂COOH or isobutanoic (CH₃)₂CHCOOH"
      },
      {
       "content": "畫出酯（乙酸乙酯 CH₃COOC₂H₅）",
       "pts": 1,
       "contentEn": "Draw the ester (ethyl ethanoate CH₃COOC₂H₅)"
      }
     ],
     "lossZh": "漏畫異構體：C₄H₈O₂ 的羧酸有正丁酸和異丁酸兩種。",
     "lossEn": "Missing isomers: butanoic and isobutanoic acids."
    },
    {
     "difficulty": "challenge",
     "stemZh": "有機物 X（C₄H₈O）可被氧化成 Y（C₄H₈O₂），X 與 Na 反應放 H₂。推斷 X、Y。",
     "stemEn": "X (C₄H₈O) oxidises to Y (C₄H₈O₂); X releases H₂ with Na. Identify X, Y.",
     "answerZh": "X 與 Na 放 H₂→醇；可氧化成酸→伯醇；C₄H₈O 醇=丁醇（CH₃CH₂CH₂CH₂OH 或支鏈）；Y 為相應丁酸。",
     "answerEn": "X is a primary alcohol (butanol isomer), Y the corresponding butanoic acid.",
     "years": [],
     "marks": [
      {
       "content": "X 與 Na 放 H₂ → 醇；可氧化成酸 → 伯醇",
       "pts": 1,
       "contentEn": "X + Na gives H₂ → alcohol; oxidisable to acid → primary alcohol"
      },
      {
       "content": "C₄H₈O 醇 = 丁醇（正丁醇或支鏈）",
       "pts": 1,
       "contentEn": "C₄H₈O alcohol = butanol (n-butanol or branched)"
      },
      {
       "content": "Y = 相應丁酸",
       "pts": 1,
       "contentEn": "Y = the corresponding butanoic acid"
      }
     ],
     "lossZh": "忽略「可氧化成酸→伯醇」的關鍵限制（仲醇氧化只到酮）。",
     "lossEn": "Missing key clue: oxidisable to acid → primary alcohol."
    }
   ],
   "solutionSkeletonEn": [
    "Reacts with NaHCO₃ → X is a carboxylic acid (-COOH)",
    "Degree of unsaturation = 1 → the C=O in the acid",
    "Write isomers of the C₄H₈O₂ acid (butanoic/isobutanoic)",
    "Name and draw the structures"
   ],
   "variationEn": [
    "Number of ester isomers",
    "Functional group transformation chain (alcohol→aldehyde→acid→ester)",
    "Deducing structure from mass/IR spectra"
   ]
  },
  {
   "id": "ch-mp-ind-01",
   "titleZh": "工業條件選擇題",
   "titleEn": "Industrial Condition Selection",
   "coreTopics": [
    "ch-ind"
   ],
   "relatedTopics": [
    "ch-equil",
    "ch-rate",
    "ch-energy"
   ],
   "questionType": "preparation",
   "stem": "Haber 法制氨 N₂ + 3H₂ ⇌ 2NH₃（放熱）。解釋為何選用高壓、適中溫度（450°C）和鐵催化劑。",
   "stemEn": "In the Haber process (exothermic), explain the choice of high pressure, moderate temperature (450°C), and iron catalyst.",
   "solutionSkeleton": [
    "高壓：增產率（分子數減少，Q/Kc 角度）",
    "適中溫度：低溫利產率但速率慢，450°C 折衷",
    "催化劑：加快達平衡但不移動平衡",
    "持續移走 NH₃ 提高轉化率"
   ],
   "variation": [
    "Contact 法製硫酸的條件",
    "工業條件中的經濟權衡（成本/速率/轉化率）",
    "能量循環與熱交換"
   ],
   "appearances": [
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "Haber 法製氨的條件是什麼？",
     "stemEn": "Conditions of Haber process?",
     "answerZh": "高壓 ~200 atm、450°C、鐵催化劑；N₂+H₂ 原料。",
     "answerEn": "~200 atm, 450°C, iron catalyst.",
     "years": [
      "2018"
     ],
     "marks": [
      {
       "content": "高壓 ~200 atm",
       "pts": 1
      },
      {
       "content": "450°C + 鐵催化劑",
       "pts": 1
      },
      {
       "content": "N₂/H₂ 原料",
       "pts": 1
      }
     ],
     "lossZh": "漏溫度或催化劑。",
     "lossEn": "Missing temperature or catalyst."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "為何 Haber 法不用更高溫度？",
     "stemEn": "Why not use higher temperature in Haber?",
     "answerZh": "反應放熱，升溫平衡逆向（產率降）；450°C 是速率與產率的折衷（兼顧催化劑活性）。",
     "answerEn": "Exothermic; higher T lowers yield; 450°C balances rate and yield.",
     "years": [
      "2021"
     ],
     "marks": [
      {
       "content": "反應放熱 → 升溫逆向（產率降）",
       "pts": 1
      },
      {
       "content": "450°C 是速率與產率的折衷",
       "pts": 1
      },
      {
       "content": "兼顧催化劑活性",
       "pts": 1
      }
     ],
     "lossZh": "只答「高溫速率快」不講平衡代價。",
     "lossEn": "Only saying higher T speeds reaction."
    },
    {
     "difficulty": "challenge",
     "stemZh": "工業上為何把未反應的 N₂ 和 H₂ 循環再用？對總轉化率有何影響？",
     "stemEn": "Why recycle unreacted N₂/H₂? Effect on conversion?",
     "answerZh": "一次性通過轉化率僅約 15%；循環使反應物多次通過催化劑，總轉化率接近 100%，節省原料。",
     "answerEn": "Single pass ~15%; recycling lets reactants pass repeatedly, overall conversion nears 100%.",
     "years": [],
     "marks": [
      {
       "content": "單次轉化率僅 ~15%",
       "pts": 1
      },
      {
       "content": "循環使反應物多次通過催化劑",
       "pts": 1
      },
      {
       "content": "總轉化率接近 100% + 省原料",
       "pts": 1
      }
     ],
     "lossZh": "不理解循環的經濟意義。",
     "lossEn": "Not grasping economic benefit of recycling."
    }
   ]
  },
  {
   "id": "ch-mp-earth-01",
   "titleZh": "大氣成分題",
   "titleEn": "Atmospheric Composition",
   "coreTopics": [
    "ch-earth"
   ],
   "relatedTopics": [
    "ch-fossil"
   ],
   "questionType": "concept",
   "stem": "説明空氣中主要成分（氮、氧、二氧化碳）的比例及二氧化碳濃度上升對環境的影響。",
   "stemEn": "Describe the proportions of main air components (N₂, O₂, CO₂) and the environmental effect of rising CO₂.",
   "solutionSkeleton": [
    "列出空氣成分及體積比例（N₂ ~78%、O₂ ~21%）",
    "説明 CO₂ 是溫室氣體",
    "討論化石燃料燃燒與 CO₂ 上升的關聯"
   ],
   "variation": [
    "惰性氣體（氬）的用途",
    "臭氧層與紫外線",
    "酸雨的成因"
   ],
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "MC"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "空氣中含量最多的氣體是什麼？約佔多少體積？",
     "stemEn": "Most abundant gas in air? Approx volume %?",
     "answerZh": "氮氣 N₂，約 78%。",
     "answerEn": "Nitrogen N₂, ~78%.",
     "years": [],
     "marks": [
      {
       "content": "答氮氣 N₂",
       "pts": 1
      },
      {
       "content": "答約 78%（體積）",
       "pts": 1
      }
     ],
     "lossZh": "答氧氣或比例記錯（氧約 21%）。",
     "lossEn": "Saying O₂ or wrong proportion."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "如何檢驗空氣中的二氧化碳？寫出反應方程式。",
     "stemEn": "Test for CO₂ in air; write equation.",
     "answerZh": "通入石灰水變乳白：CO₂+Ca(OH)₂→CaCO₃↓+H₂O。",
     "answerEn": "Bubble into limewater → milky: CO₂+Ca(OH)₂→CaCO₃↓+H₂O.",
     "years": [
      "2018"
     ],
     "marks": [
      {
       "content": "通入石灰水變乳白",
       "pts": 1
      },
      {
       "content": "方程式 CO₂+Ca(OH)₂→CaCO₃↓+H₂O",
       "pts": 1
      }
     ],
     "lossZh": "只説「石灰水」不寫現象或漏方程式。",
     "lossEn": "Not stating the milky observation or equation."
    },
    {
     "difficulty": "challenge",
     "stemZh": "化石燃料燃燒如何導致溫室效應增強？提出兩項減排措施。",
     "stemEn": "How does burning fuels enhance greenhouse effect? Two mitigation measures.",
     "answerZh": "燃燒產 CO₂ 吸收紅外輻射使地表升溫；措施：發展再生能源（太陽/風）、提高能源效率、植樹。",
     "answerEn": "CO₂ absorbs IR; mitigation: renewables, efficiency, reforestation.",
     "years": [],
     "marks": [
      {
       "content": "燃燒產 CO₂ 是溫室氣體",
       "pts": 1
      },
      {
       "content": "舉一項：再生能源/提效/植樹",
       "pts": 1
      },
      {
       "content": "（加分）説明減排機制",
       "pts": 1
      }
     ],
     "lossZh": "只答「節能」而不具體到措施。",
     "lossEn": "Answering \"save energy\" without specific measures."
    }
   ]
  },
  {
   "id": "ch-mp-mw1-01",
   "titleZh": "原子結構與電子排布",
   "titleEn": "Atomic Structure & Electron Arrangement",
   "coreTopics": [
    "ch-mw1"
   ],
   "relatedTopics": [
    "ch-mw2",
    "ch-pattern"
   ],
   "questionType": "concept",
   "stem": "寫出鈉（Na，原子序 11）的電子排布，並解釋它傾向形成哪種離子。",
   "stemEn": "Write the electron arrangement of sodium (Z=11) and explain which ion it tends to form.",
   "solutionSkeleton": [
    "按 2,8,1 排布電子",
    "最外層 1 個電子 → 傾向失去",
    "形成 Na⁺（2,8 穩定八隅體）",
    "説明離子符號與電子得失"
   ],
   "variation": [
    "氯（Cl）的電子排布與 Cl⁻ 形成",
    "穩定八隅體規則與惰性氣體",
    "離子式與化合物式"
   ],
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P1",
     "question": "MC"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "寫出氯（Cl，Z=17）的電子排布。",
     "stemEn": "Write electron arrangement of Cl (Z=17).",
     "answerZh": "2, 8, 7（三層，最外層 7 個電子）。",
     "answerEn": "2, 8, 7 (three shells, 7 outer electrons).",
     "years": [],
     "marks": [
      {
       "content": "三層 2, 8, 7",
       "pts": 1
      },
      {
       "content": "最外層 7 個",
       "pts": 1
      }
     ],
     "lossZh": "排布順序錯（如 2,7,8 或漏層）。",
     "lossEn": "Wrong shell order or missing shell."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "鈣（Z=20）的電子排布及其最外層電子數，傾向形成什麼離子？",
     "stemEn": "Electron arrangement of Ca (Z=20); ion formed?",
     "answerZh": "2, 8, 8, 2；最外層 2 個→傾向失去→Ca²⁺。",
     "answerEn": "2, 8, 8, 2; loses 2 → Ca²⁺.",
     "years": [
      "2017"
     ],
     "marks": [
      {
       "content": "排布 2,8,8,2",
       "pts": 1
      },
      {
       "content": "最外層 2 個 → 失 2 電子",
       "pts": 1
      },
      {
       "content": "形成 Ca²⁺",
       "pts": 1
      }
     ],
     "lossZh": "得失電子方向錯（非金屬得電子）。",
     "lossEn": "Wrong electron gain/loss direction."
    },
    {
     "difficulty": "challenge",
     "stemZh": "某離子 X²⁻ 有 18 個電子，求 X 的原子序數並寫出排布。",
     "stemEn": "Ion X²⁻ has 18 electrons. Find Z of X.",
     "answerZh": "X²⁻ 有 18 電子→X 原子有 16 電子→Z=16（硫 S）；排布 2,8,6。",
     "answerEn": "X has 16 electrons → Z=16 (S); arrangement 2,8,6.",
     "years": [],
     "marks": [
      {
       "content": "X²⁻ 有 18 電子 → X 有 16 電子",
       "pts": 1
      },
      {
       "content": "Z = 16（硫 S）",
       "pts": 1
      },
      {
       "content": "排布 2,8,6",
       "pts": 1
      }
     ],
     "lossZh": "把陰離子電子數直接當原子電子數。",
     "lossEn": "Taking anion electrons as atomic electrons."
    }
   ]
  },
  {
   "id": "ch-mp-metals-01",
   "titleZh": "金屬活動性題",
   "titleEn": "Metal Reactivity Series",
   "coreTopics": [
    "ch-metals"
   ],
   "relatedTopics": [
    "ch-redox"
   ],
   "questionType": "concept",
   "stem": "將鋅片放入硫酸銅溶液中，寫出反應方程式並預測觀察到的現象。",
   "stemEn": "Add zinc to copper(II) sulphate; write the equation and predict observations.",
   "solutionSkeleton": [
    "鋅比銅活潑（活動序：Zn > Cu）",
    "鋅置換銅：Zn + CuSO₄ → ZnSO₄ + Cu",
    "現象：鋅片表面出現紅色沉澱，溶液藍色變淺",
    "離子方程式：Zn + Cu²⁺ → Zn²⁺ + Cu"
   ],
   "variation": [
    "金屬與酸的反應速率比較",
    "金屬活動序與冶煉方法",
    "犧牲陽極保護"
   ],
   "appearances": [
    {
     "year": 2016,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "鋅放入硫酸銅溶液，寫方程式並描述現象。",
     "stemEn": "Zinc in CuSO₄: equation and observations.",
     "answerZh": "Zn+CuSO₄→ZnSO₄+Cu；鋅片變紅（銅析出），溶液藍色變淺。",
     "answerEn": "Zn+CuSO₄→ZnSO₄+Cu; zinc turns red, solution fades.",
     "years": [
      "2016"
     ],
     "marks": [
      {
       "content": "方程式 Zn+CuSO₄→ZnSO₄+Cu",
       "pts": 1
      },
      {
       "content": "鋅片表面出現紅色沉澱",
       "pts": 1
      },
      {
       "content": "溶液藍色變淺",
       "pts": 1
      }
     ],
     "lossZh": "漏「藍色變淺」或誤寫成鋅變黑。",
     "lossEn": "Missing colour fade or wrong observation."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "比較鎂、鋅、銅與稀鹽酸的反應速率並用活動序解釋。",
     "stemEn": "Compare Mg, Zn, Cu with dilute HCl.",
     "answerZh": "Mg 最快（劇烈放氫），Zn 較慢，Cu 不反應（活動序 Mg>Zn>H>Cu）。",
     "answerEn": "Mg fastest, Zn slower, Cu no reaction (reactivity Mg>Zn>H>Cu).",
     "years": [
      "2019"
     ],
     "marks": [
      {
       "content": "速率順序 Mg>Zn>Cu",
       "pts": 1
      },
      {
       "content": "Mg/Zn 放氫、Cu 不反應",
       "pts": 1
      },
      {
       "content": "用活動序 Mg>Zn>H>Cu 解釋",
       "pts": 1
      }
     ],
     "lossZh": "把 Cu 説成「與酸反應」（Cu 不與稀酸）。",
     "lossEn": "Saying Cu reacts with dilute acid."
    },
    {
     "difficulty": "challenge",
     "stemZh": "如何從氧化鐵中提取鐵？寫出方程式並説明冶煉方法的選擇依據。",
     "stemEn": "Extract iron from Fe₂O₃; equation and method choice.",
     "answerZh": "Fe₂O₃+3CO→2Fe+3CO₂（高爐，碳還原）；鐵在活動序中位於碳之下，可用碳還原；比鐵活潑的金屬需電解。",
     "answerEn": "Reduce with CO in blast furnace; Fe below C in series so carbon works; more reactive need electrolysis.",
     "years": [
      "2021"
     ],
     "marks": [
      {
       "content": "方程式 Fe₂O₃+3CO→2Fe+3CO₂（或 C 還原）",
       "pts": 1
      },
      {
       "content": "鐵在活動序中位於碳之下 → 可用碳還原",
       "pts": 1
      },
      {
       "content": "比鐵活潑的金屬需電解",
       "pts": 1
      }
     ],
     "lossZh": "直接用電解法提鐵（鐵用碳還原更經濟）。",
     "lossEn": "Using electrolysis for Fe (carbon reduction is economic)."
    }
   ]
  },
  {
   "id": "ch-mp-fossil-01",
   "titleZh": "石油分餾題",
   "titleEn": "Fractional Distillation of Petroleum",
   "coreTopics": [
    "ch-fossil"
   ],
   "relatedTopics": [
    "ch-carbon"
   ],
   "questionType": "concept",
   "stem": "説明石油分餾的原理，並列出三個主要餾分及其用途。",
   "stemEn": "Explain the principle of fractional distillation of petroleum; list three fractions and uses.",
   "solutionSkeleton": [
    "原理：不同沸點，塔中溫度梯度分離",
    "低沸點先蒸出（石油氣/汽油），高沸點後蒸出（柴油/瀝青）",
    "列舉餾分用途（汽油→燃料等）"
   ],
   "variation": [
    "裂解與裂化製烯烴",
    "燃燒產物與環境影響",
    "同分異構與辛烷值"
   ],
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "石油分餾的原理是什麼？",
     "stemEn": "Principle of fractional distillation of petroleum?",
     "answerZh": "利用各餾分沸點不同，在分餾塔中按溫度梯度分離。",
     "answerEn": "Components have different boiling points, separated in a temperature-gradient tower.",
     "years": [],
     "marks": [
      {
       "content": "各成分沸點不同",
       "pts": 1
      },
      {
       "content": "分餾塔溫度梯度分離",
       "pts": 1
      }
     ],
     "lossZh": "説成「密度分離」或「化學性質不同」。",
     "lossEn": "Saying separated by density or chemical property."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "列出石油的三個餾分及用途。",
     "stemEn": "List three petroleum fractions and uses.",
     "answerZh": "石油氣（燃料）、汽油（汽車燃料）、柴油/煤油（柴油機/航空）、瀝青（鋪路）。",
     "answerEn": "LPG (fuel), petrol (cars), diesel/kerosene, bitumen (roads).",
     "years": [
      "2018"
     ],
     "marks": [
      {
       "content": "列 2-3 個餾分（石油氣/汽油/煤油/柴油/瀝青）",
       "pts": 1
      },
      {
       "content": "各給一個正確用途",
       "pts": 1
      }
     ],
     "lossZh": "餾分與用途配錯（如瀝青作燃料）。",
     "lossEn": "Mismatching fraction and use."
    },
    {
     "difficulty": "challenge",
     "stemZh": "裂化與裂解有何區別？對汽油產量有何影響？",
     "stemEn": "Cracking vs pyrolysis; effect on petrol yield?",
     "answerZh": "裂化把長鏈變短鏈增產汽油；裂解在更高溫產烯烴（化工原料）；均提高輕質產品產量。",
     "answerEn": "Cracking shortens chains for petrol; pyrolysis produces alkenes at higher temp; both raise yields.",
     "years": [
      "2022"
     ],
     "marks": [
      {
       "content": "裂化：長鏈→短鏈增產汽油",
       "pts": 1
      },
      {
       "content": "裂解：高溫產烯烴",
       "pts": 1
      },
      {
       "content": "兩者提高輕質產品產量",
       "pts": 1
      }
     ],
     "lossZh": "把裂化與裂解混為一談。",
     "lossEn": "Conflating cracking and pyrolysis."
    }
   ]
  },
  {
   "id": "ch-mp-mw2-01",
   "titleZh": "化學鍵與性質題",
   "titleEn": "Bonding & Properties",
   "coreTopics": [
    "ch-mw2"
   ],
   "relatedTopics": [
    "ch-mw1",
    "ch-metals"
   ],
   "questionType": "concept",
   "stem": "比較氯化鈉（離子化合物）與石墨的結構特點，並解釋它們導電性的差異。",
   "stemEn": "Compare NaCl (ionic) and graphite structures; explain their different electrical conductivities.",
   "solutionSkeleton": [
    "NaCl：巨大離子結構，熔融/溶液態導電，固態不導電",
    "石墨：層狀結構，層內共價鍵+自由電子",
    "石墨可導電（自由電子），NaCl 需遊離離子",
    "比較熔點/硬度等性質"
   ],
   "variation": [
    "鑽石 vs 石墨性質對比",
    "金屬鍵與延展性",
    "聚合物結構與性質"
   ],
   "appearances": [
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "比較 NaCl 與石墨在固態時導電性的差異並解釋。",
     "stemEn": "Compare solid conductivity of NaCl and graphite; explain.",
     "answerZh": "NaCl 固態不導電（離子被固定）；石墨導電（層內離域電子可移動）。",
     "answerEn": "Solid NaCl non-conductive (ions fixed); graphite conducts (delocalised electrons).",
     "years": [
      "2019"
     ],
     "marks": [
      {
       "content": "NaCl 固態不導電（離子被晶格固定）",
       "pts": 1,
       "contentEn": "Solid NaCl does not conduct (ions fixed in lattice)"
      },
      {
       "content": "石墨導電（層內離域電子）",
       "pts": 1,
       "contentEn": "Graphite conducts (delocalised electrons in layers)"
      },
      {
       "content": "本質：自由電子 vs 固定離子",
       "pts": 1,
       "contentEn": "Essence: free electrons vs fixed ions"
      }
     ],
     "lossZh": "以為 NaCl 固態導電（它熔融/溶液態才導電）。",
     "lossEn": "Thinking solid NaCl conducts (only molten/dissolved)."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "解釋為何離子化合物熔點高而簡單分子熔點低。",
     "stemEn": "Explain why ionic compounds have high mp but simple molecules low.",
     "answerZh": "離子化合物靠強離子鍵（靜電引力）連接巨大結構，需大量能量破壞；簡單分子間只有弱分子間力。",
     "answerEn": "Ionic: strong electrostatic forces in giant lattice; molecules: weak intermolecular forces.",
     "years": [],
     "marks": [
      {
       "content": "離子化合物：強離子鍵，巨大晶格",
       "pts": 1,
       "contentEn": "Ionic compounds: strong ionic bonds, giant lattice"
      },
      {
       "content": "簡單分子：弱分子間力",
       "pts": 1,
       "contentEn": "Simple molecules: weak intermolecular forces"
      },
      {
       "content": "破壞所需能量不同 → 熔點不同",
       "pts": 1,
       "contentEn": "Different energy to break → different melting points"
      }
     ],
     "lossZh": "把分子間力當成共價鍵來解釋熔點。",
     "lossEn": "Using covalent bond strength to explain molecular melting."
    },
    {
     "difficulty": "challenge",
     "stemZh": "有三種物質：鑽石、氯化鈉、冰。比較它們的熔點高低並用鍵型解釋。",
     "stemEn": "Compare mp of diamond, NaCl, ice using bonding.",
     "answerZh": "鑽石最高（共價網狀，強共價鍵）> NaCl（離子鍵）> 冰（分子間氫鍵/範德華力最弱）。",
     "answerEn": "Diamond (network covalent) > NaCl (ionic) > ice (weak H-bonds).",
     "years": [
      "2021"
     ],
     "marks": [
      {
       "content": "鑽石：共價網狀（最強）",
       "pts": 1,
       "contentEn": "Diamond: covalent network (strongest)"
      },
      {
       "content": "NaCl：離子鍵（次之）",
       "pts": 1,
       "contentEn": "NaCl: ionic bonds (second)"
      },
      {
       "content": "冰：氫鍵/範德華力（最弱）",
       "pts": 1,
       "contentEn": "Ice: hydrogen bonds/van der Waals (weakest)"
      }
     ],
     "lossZh": "把冰的氫鍵説成「共價鍵」（氫鍵是分子間力）。",
     "lossEn": "Calling ice's H-bonds \"covalent bonds\" (they're intermolecular)."
    }
   ],
   "solutionSkeletonEn": [
    "NaCl: giant ionic lattice, conducts molten/dissolved, not solid",
    "Graphite: layered structure, covalent bonds + free electrons in layers",
    "Graphite conducts (free electrons); NaCl needs mobile ions",
    "Compare melting point / hardness etc."
   ],
   "variationEn": [
    "Diamond vs graphite comparison",
    "Metallic bonding and malleability",
    "Polymer structure and properties"
   ]
  },
  {
   "id": "ch-mp-energy-01",
   "titleZh": "Hess 定律計算",
   "titleEn": "Hess's Law Calculation",
   "coreTopics": [
    "ch-energy"
   ],
   "relatedTopics": [
    "ch-equil"
   ],
   "questionType": "energy",
   "stem": "已知 C(s) + O₂(g) → CO₂(g) 的 ΔH = -394 kJ/mol，CO(g) + ½O₂(g) → CO₂(g) 的 ΔH = -283 kJ/mol。求 C(s) + ½O₂(g) → CO(g) 的 ΔH。",
   "stemEn": "Given ΔH for C(s)+O₂→CO₂ = -394 kJ/mol and CO+½O₂→CO₂ = -283 kJ/mol, find ΔH for C(s)+½O₂→CO(g).",
   "solutionSkeleton": [
    "目標方程式 = 第一式 - 第二式",
    "ΔH = -394 - (-283) = -111 kJ/mol",
    "驗證：中間物 CO₂ 相消",
    "註明狀態符號"
   ],
   "variation": [
    "鍵能計算 ΔH",
    "燃燒熱/生成熱的換算",
    "反應能量圖"
   ],
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "已知 C(s)+O₂→CO₂ ΔH=-394，求 C 燃燒 12 g 放出的熱。",
     "stemEn": "Given C(s)+O₂→CO₂ ΔH=-394, heat from burning 12 g C?",
     "answerZh": "n(C)=12/12=1 mol；放熱=394 kJ。",
     "answerEn": "n(C)=1 mol; heat = 394 kJ.",
     "years": [],
     "marks": [
      {
       "content": "n(C) = 12/12 = 1 mol",
       "pts": 1
      },
      {
       "content": "放熱 = 1×394 = 394 kJ",
       "pts": 1
      }
     ],
     "lossZh": "質量算錯或漏乘以摩爾數。",
     "lossEn": "Wrong moles or missing multiplication."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "用鍵能計算：H₂+Cl₂→2HCl，鍵能 H-H=436、Cl-Cl=243、H-Cl=431 kJ/mol，求 ΔH。",
     "stemEn": "Using bond energies, find ΔH for H₂+Cl₂→2HCl.",
     "answerZh": "ΔH=斷鍵-成鍵=(436+243)-2×431=-183 kJ/mol（放熱）。",
     "answerEn": "ΔH = (436+243) - 2×431 = -183 kJ/mol (exothermic).",
     "years": [
      "2020"
     ],
     "marks": [
      {
       "content": "ΔH = 斷鍵 - 成鍵",
       "pts": 1
      },
      {
       "content": "代入 (436+243) - 2×431",
       "pts": 1
      },
      {
       "content": "ΔH = -183 kJ/mol（放熱）",
       "pts": 1
      }
     ],
     "lossZh": "公式寫成成鍵-斷鍵（符號反）。",
     "lossEn": "Formula reversed (wrong sign)."
    },
    {
     "difficulty": "challenge",
     "stemZh": "Hess 定律：C→CO→CO₂，已知兩步 ΔH 求 C→CO 的 ΔH。",
     "stemEn": "Hess: find ΔH for C→CO given C→CO₂ and CO→CO₂.",
     "answerZh": "ΔH(C→CO)=ΔH(C→CO₂)-ΔH(CO→CO₂)=-394-(-283)=-111 kJ/mol。",
     "answerEn": "ΔH = -394 - (-283) = -111 kJ/mol.",
     "years": [],
     "marks": [
      {
       "content": "ΔH(C→CO) = ΔH(C→CO₂) - ΔH(CO→CO₂)",
       "pts": 1
      },
      {
       "content": "代入 -394 - (-283)",
       "pts": 1
      },
      {
       "content": "= -111 kJ/mol",
       "pts": 1
      }
     ],
     "lossZh": "減法方向錯（應用 CO 的 ΔH 減去）。",
     "lossEn": "Wrong subtraction direction."
    }
   ]
  },
  {
   "id": "ch-mp-rate-01",
   "titleZh": "反應速率影響因素",
   "titleEn": "Factors Affecting Reaction Rate",
   "coreTopics": [
    "ch-rate"
   ],
   "relatedTopics": [
    "ch-equil",
    "ch-lab"
   ],
   "questionType": "data-analysis",
   "stem": "設計實驗比較不同濃度鹽酸與大理石的反應速率，指出應控制的變量和量度方法。",
   "stemEn": "Design an experiment comparing reaction rates of different HCl concentrations with marble; identify controlled variables and measurement.",
   "solutionSkeleton": [
    "列出因變量（速率）與自變量（濃度）",
    "控制變量：溫度、大理石表面積、質量",
    "量度方法：收集氣體體積/質量隨時間",
    "安全措施與誤差討論"
   ],
   "variation": [
    "表面積（顆粒大小）的影響",
    "溫度對速率的影響",
    "催化劑的作用"
   ],
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "兩份等量大理石，一份顆粒一份粉末，哪個與鹽酸反應更快？",
     "stemEn": "Equal marble, one lump one powder; which reacts faster with HCl?",
     "answerZh": "粉末快：表面積大→碰撞機會多→速率快。",
     "answerEn": "Powder: larger surface area → more collisions → faster.",
     "years": [
      "2018"
     ],
     "marks": [
      {
       "content": "粉末更快",
       "pts": 1,
       "contentEn": "Powder is faster"
      },
      {
       "content": "表面積大 → 碰撞機會多",
       "pts": 1,
       "contentEn": "Larger surface area → more collisions"
      },
      {
       "content": "結論：速率加快",
       "pts": 1,
       "contentEn": "Conclusion: rate increases"
      }
     ],
     "lossZh": "只答「粉末快」不給原因（要提碰撞理論）。",
     "lossEn": "Answering \"powder faster\" without collision theory reason."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "設計實驗證明溫度對反應速率的影響，列出步驟和量度方法。",
     "stemEn": "Design experiment showing temperature effect on rate.",
     "answerZh": "兩組同濃度硫代硫酸鈉+酸，不同溫度；量度溶液變濁所需時間；控制其他變量。",
     "answerEn": "Two thiosulphate+acid at different temperatures; time to turbidity; control others.",
     "years": [
      "2022"
     ],
     "marks": [
      {
       "content": "兩組硫代硫酸鈉+酸，不同溫度",
       "pts": 1,
       "contentEn": "Two thiosulphate+acid sets at different temperatures"
      },
      {
       "content": "量度變濁時間",
       "pts": 1,
       "contentEn": "Measure time to turbidity"
      },
      {
       "content": "控制其他變量（濃度/體積）",
       "pts": 1,
       "contentEn": "Control other variables (concentration/volume)"
      }
     ],
     "lossZh": "未控制變量（兩組濃度不同則無可比性）。",
     "lossEn": "Not controlling variables (different concentrations invalidate)."
    },
    {
     "difficulty": "challenge",
     "stemZh": "某反應加入催化劑後速率大增但平衡位置不變。解釋催化劑的作用機制。",
     "stemEn": "Catalyst speeds a reaction but doesn't shift equilibrium. Explain.",
     "answerZh": "催化劑提供替代反應途徑降低活化能；正逆反應同速加快；Kc 不變故平衡位置不變。",
     "answerEn": "Catalyst lowers Eₐ via alternative pathway; speeds both directions; Kc unchanged → no shift.",
     "years": [],
     "marks": [
      {
       "content": "催化劑降低活化能（替代途徑）",
       "pts": 1,
       "contentEn": "Catalyst lowers activation energy (alternative pathway)"
      },
      {
       "content": "正逆反應同速加快",
       "pts": 1,
       "contentEn": "Speeds up forward and reverse equally"
      },
      {
       "content": "Kc 不變 → 平衡位置不變",
       "pts": 1,
       "contentEn": "Kc unchanged → equilibrium position unchanged"
      }
     ],
     "lossZh": "以為催化劑能移動平衡（它只加快到達平衡）。",
     "lossEn": "Thinking catalyst shifts equilibrium (it only speeds reaching it)."
    }
   ],
   "solutionSkeletonEn": [
    "Identify dependent (rate) and independent (concentration) variables",
    "Control variables: temperature, marble surface area, mass",
    "Measurement: collect gas volume/mass over time",
    "Safety measures and error discussion"
   ],
   "variationEn": [
    "Effect of surface area (particle size)",
    "Effect of temperature on rate",
    "Role of catalysts"
   ]
  },
  {
   "id": "ch-mp-pattern-01",
   "titleZh": "元素週期律題",
   "titleEn": "Periodic Trends",
   "coreTopics": [
    "ch-pattern"
   ],
   "relatedTopics": [
    "ch-mw1",
    "ch-metals"
   ],
   "questionType": "concept",
   "stem": "解釋同一週期內從鈉到氯，金屬性如何變化，並用原子結構説明原因。",
   "stemEn": "Explain how metallic character changes across Period 3 (Na→Cl) using atomic structure.",
   "solutionSkeleton": [
    "金屬性遞減（Na 金屬 → Cl 非金屬）",
    "原因：核電荷增大，最外層電子吸引增強",
    "原子半徑減小，失電子傾向減弱",
    "對應氧化物酸鹼性變化"
   ],
   "variation": [
    "同一族（鹼金屬）性質遞變",
    "離子半徑比較",
    "週期表位置與性質推斷"
   ],
   "appearances": [
    {
     "year": 2015,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "同一週期從左到右金屬性如何變化？",
     "stemEn": "Across a period, how does metallic character change?",
     "answerZh": "金屬性減弱（Na 金屬→Cl 非金屬）。",
     "answerEn": "Metallic character decreases (Na metal → Cl non-metal).",
     "years": [],
     "marks": [
      {
       "content": "金屬性減弱",
       "pts": 1
      },
      {
       "content": "Na 金屬 → Cl 非金屬",
       "pts": 1
      }
     ],
     "lossZh": "答「增強」（同週期右移金屬性減弱）。",
     "lossEn": "Saying metallic character increases."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "比較 Na 和 K 與水反應的劇烈程度並解釋。",
     "stemEn": "Compare Na vs K with water.",
     "answerZh": "K 更劇烈（同一族下移金屬性增強，最外層電子更易失去）。",
     "answerEn": "K more vigorous (down group, easier to lose outer electron).",
     "years": [],
     "marks": [
      {
       "content": "K 更劇烈",
       "pts": 1
      },
      {
       "content": "同族下移金屬性增強",
       "pts": 1
      },
      {
       "content": "最外層電子更易失去",
       "pts": 1
      }
     ],
     "lossZh": "只答「K 劇烈」不給原子結構原因。",
     "lossEn": "No atomic-structure reason."
    },
    {
     "difficulty": "challenge",
     "stemZh": "某元素位於第三週期第 VIA 族，推斷其電子排布、離子形式及酸鹼性。",
     "stemEn": "Element in Period 3 Group VI: arrangement, ion, acid/base character.",
     "answerZh": "排布 2,8,6（硫）；易得 2 電子成 S²⁻；其氧化物 SO₃ 溶於水成酸性（亞硫酸/硫酸）。",
     "answerEn": "Arrangement 2,8,6 (S); forms S²⁻; SO₃ acidic oxide.",
     "years": [],
     "marks": [
      {
       "content": "排布 2,8,6（硫）",
       "pts": 1
      },
      {
       "content": "易得 2 電子成 S²⁻",
       "pts": 1
      },
      {
       "content": "氧化物 SO₃ 酸性",
       "pts": 1
      }
     ],
     "lossZh": "把非金屬説成易失電子。",
     "lossEn": "Calling non-metal electron-losing."
    }
   ]
  },
  {
   "id": "ch-mp-mat-01",
   "titleZh": "聚合物結構題",
   "titleEn": "Polymer Structure & Properties",
   "coreTopics": [
    "ch-mat"
   ],
   "relatedTopics": [
    "ch-carbon",
    "ch-mw2"
   ],
   "questionType": "concept",
   "stem": "比較加成聚合與縮合聚合的區別，並以聚乙烯與尼龍為例説明。",
   "stemEn": "Compare addition vs condensation polymerisation using polyethylene and nylon as examples.",
   "solutionSkeleton": [
    "加成聚合：單體含 C=C，無小分子釋出",
    "縮合聚合：單體含 -OH/-COOH 等，釋出 H₂O",
    "聚乙烯：由乙烯加聚",
    "尼龍：己二酸+己二胺縮聚"
   ],
   "variation": [
    "聚合物的性質與用途（塑料回收標誌）",
    "降解與環境問題",
    "交聯與熱固性/熱塑性"
   ],
   "appearances": [
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "熱塑性與熱固性塑料的區別？各舉一例。",
     "stemEn": "Thermoplastic vs thermosetting; one example each.",
     "answerZh": "熱塑性可重新加熱塑形（PE 聚乙烯）；熱固性一旦成型不可逆（電木/酚醛樹脂）。",
     "answerEn": "Thermoplastic remouldable (PE); thermosetting irreversible (Bakelite).",
     "years": [
      "2020"
     ],
     "marks": [
      {
       "content": "熱塑性可重熔（PE）",
       "pts": 1
      },
      {
       "content": "熱固性不可逆（電木）",
       "pts": 1
      },
      {
       "content": "各舉一例",
       "pts": 1
      }
     ],
     "lossZh": "兩者定義/例子配反。",
     "lossEn": "Swapping definitions/examples."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "解釋為何聚乙烯可以回收而電木不宜回收。",
     "stemEn": "Why recycle PE but not Bakelite?",
     "answerZh": "PE 熱塑性加熱可重熔重新塑形；電木熱固性加熱已交聯固化，重熔會分解不變形。",
     "answerEn": "PE melts and remoulds; Bakelite is cross-linked, decomposition on heating.",
     "years": [],
     "marks": [
      {
       "content": "PE 加熱可重熔再塑形",
       "pts": 1
      },
      {
       "content": "電木交聯固化，重熔會分解",
       "pts": 1
      }
     ],
     "lossZh": "只説「電木難回收」不講交聯原因。",
     "lossEn": "No cross-linking reason."
    },
    {
     "difficulty": "challenge",
     "stemZh": "比較加成聚合與縮合聚合，用聚乙烯與尼龍為例説明單體與產物。",
     "stemEn": "Compare addition vs condensation; PE vs nylon.",
     "answerZh": "加成：單體含 C=C（乙烯），無小分子；縮合：單體含兩個官能團（己二酸+己二胺），釋出水成尼龍。",
     "answerEn": "Addition: alkene monomer, no by-product; condensation: two functional monomers release H₂O (nylon).",
     "years": [
      "2022"
     ],
     "marks": [
      {
       "content": "加成：單體含 C=C，無小分子（PE）",
       "pts": 1
      },
      {
       "content": "縮合：兩個官能團單體，釋 H₂O（尼龍）",
       "pts": 1
      },
      {
       "content": "比較產物/條件差異",
       "pts": 1
      }
     ],
     "lossZh": "把尼龍説成加成聚合（它是縮合）。",
     "lossEn": "Calling nylon addition polymerisation."
    }
   ]
  },
  {
   "id": "ch-mp-ana-01",
   "titleZh": "分離提純題",
   "titleEn": "Separation & Purification",
   "coreTopics": [
    "ch-ana"
   ],
   "relatedTopics": [
    "ch-lab"
   ],
   "questionType": "experiment",
   "stem": "混合物含 NaCl、沙和水。設計完整流程分離並提純 NaCl，寫出每步原理。",
   "stemEn": "A mixture contains NaCl, sand and water. Design a full separation scheme and explain each step.",
   "solutionSkeleton": [
    "過濾分離不溶的沙",
    "蒸發結晶回收 NaCl",
    "（可選）重結晶提純",
    "每一步註明原理（溶解性/沸點差異）"
   ],
   "variation": [
    "分液漏斗分離不互溶液體",
    "蒸餾分離溶液",
    "層析法分離色素"
   ],
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "如何從 NaCl 和沙的混合物中回收 NaCl？",
     "stemEn": "How to recover NaCl from a NaCl-sand mixture?",
     "answerZh": "加水溶解 NaCl→過濾除沙→蒸發結晶得 NaCl。",
     "answerEn": "Dissolve in water, filter out sand, evaporate to crystallise NaCl.",
     "years": [
      "2019"
     ],
     "marks": [
      {
       "content": "加水溶解 NaCl（沙不溶）",
       "pts": 1
      },
      {
       "content": "過濾除沙",
       "pts": 1
      },
      {
       "content": "蒸發結晶得 NaCl",
       "pts": 1
      }
     ],
     "lossZh": "順序反了（先蒸發再過濾會把沙一起蒸乾）。",
     "lossEn": "Wrong order (evaporating before filtering dries sand too)."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "海水淡化可用蒸餾，説明原理與裝置要點。",
     "stemEn": "Desalinate seawater by distillation; principle and setup.",
     "answerZh": "加熱海水使水蒸發→冷凝管冷凝→收集純水；溫度計測蒸氣溫度；海鹽留在燒瓶。",
     "answerEn": "Heat seawater, condense vapour in condenser, collect pure water; salt remains.",
     "years": [],
     "marks": [
      {
       "content": "加熱海水使水蒸發",
       "pts": 1
      },
      {
       "content": "冷凝管冷凝蒸氣",
       "pts": 1
      },
      {
       "content": "收集純水，鹽留在燒瓶",
       "pts": 1
      }
     ],
     "lossZh": "溫度計位置/作用説錯（測蒸氣溫度）。",
     "lossEn": "Wrong thermometer position/role (measures vapour)."
    },
    {
     "difficulty": "challenge",
     "stemZh": "混合液含乙醇（沸點 78°C）和水，用分餾分離。説明裝置與注意事項。",
     "stemEn": "Separate ethanol (bp 78°C) and water by fractional distillation.",
     "answerZh": "分餾柱（填充物）讓蒸氣多次冷凝蒸發；控制溫度在 78°C 收集乙醇；防暴沸加沸石。",
     "answerEn": "Fractionating column refines separation; collect at 78°C; add boiling chips.",
     "years": [
      "2020"
     ],
     "marks": [
      {
       "content": "分餾柱（填充物）多次冷凝蒸發",
       "pts": 1
      },
      {
       "content": "控制溫度 78°C 收集乙醇",
       "pts": 1
      },
      {
       "content": "加沸石防暴沸",
       "pts": 1
      }
     ],
     "lossZh": "用普通蒸餾代替分餾：乙醇/水沸點接近需分餾柱。",
     "lossEn": "Using simple distillation: ethanol/water need a fractionating column."
    }
   ]
  },
  {
   "id": "ch-mp-lab-01",
   "titleZh": "實驗設計題",
   "titleEn": "Experiment Design",
   "coreTopics": [
    "ch-lab"
   ],
   "relatedTopics": [
    "ch-rate",
    "ch-acidbase"
   ],
   "questionType": "experiment",
   "stem": "設計實驗測定中和反應的焓變，列出所需儀器、步驟、數據處理和誤差來源。",
   "stemEn": "Design an experiment to measure the enthalpy change of neutralisation; list apparatus, steps, data handling and errors.",
   "solutionSkeleton": [
    "儀器：量熱器/保溫杯、溫度計、量筒",
    "步驟：混合已知濃度的酸鹼，記錄溫升",
    "ΔH = mcΔT，注意質量與比熱容",
    "誤差：熱散失、比熱容近似、溫度計讀數"
   ],
   "variation": [
    "測定燃燒熱",
    "SBA 常見考法（變量控制）",
    "數據作圖與外推"
   ],
   "appearances": [
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "測量中和熱需用到哪些主要儀器？",
     "stemEn": "Apparatus for measuring heat of neutralisation?",
     "answerZh": "保溫杯/量熱器、溫度計（0.1°C 精度）、量筒、攪拌棒。",
     "answerEn": "Insulated cup/calorimeter, thermometer (0.1°C), measuring cylinder, stirrer.",
     "years": [
      "2019"
     ],
     "marks": [
      {
       "content": "保溫杯/量熱器",
       "pts": 1
      },
      {
       "content": "溫度計（0.1°C）+ 量筒",
       "pts": 1
      },
      {
       "content": "攪拌棒",
       "pts": 1
      }
     ],
     "lossZh": "漏溫度計精度要求。",
     "lossEn": "Missing thermometer precision."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "計算：50.0 mL 0.200 mol/L HCl 與 50.0 mL 0.200 mol/L NaOH 混合升溫 1.36°C，求 ΔH。",
     "stemEn": "Calculate ΔH: 50 mL 0.200 mol/L each, ΔT=1.36°C.",
     "answerZh": "n(H₂O)=0.01 mol；q=mcΔT=100×4.2×1.36=571 J；ΔH=-571/0.01=-57.1 kJ/mol。",
     "answerEn": "q=100×4.2×1.36=571 J; ΔH=-571/0.01=-57.1 kJ/mol.",
     "years": [],
     "marks": [
      {
       "content": "n(H₂O) = 0.01 mol",
       "pts": 1
      },
      {
       "content": "q = mcΔT = 100×4.2×1.36 = 571 J",
       "pts": 1
      },
      {
       "content": "ΔH = -571/0.01 = -57.1 kJ/mol",
       "pts": 1
      }
     ],
     "lossZh": "質量用錯（應是混合液總質量 100 g）。",
     "lossEn": "Wrong mass (total solution 100 g)."
    },
    {
     "difficulty": "challenge",
     "stemZh": "實驗測得的中和熱比理論值小，列出可能的誤差來源及改進方法。",
     "stemEn": "Measured ΔH smaller than theoretical; error sources and improvements.",
     "answerZh": "熱散失到環境（隔熱改進）；溶液比熱容用水的近似（實際更小）；溫度計讀數滯後（攪拌+快讀）；改進：加蓋、快速讀數、使用更精確比熱容。",
     "answerEn": "Heat loss (insulate); c approximated as water; thermometer lag (stir, read fast).",
     "years": [
      "2023"
     ],
     "marks": [
      {
       "content": "熱散失到環境",
       "pts": 1
      },
      {
       "content": "比熱容用水的近似",
       "pts": 1
      },
      {
       "content": "改進：加蓋/快速讀數/精確 c",
       "pts": 1
      }
     ],
     "lossZh": "只列誤差不改進方法。",
     "lossEn": "Listing errors without improvements."
    }
   ]
  },
  {
   "id": "ch-mp-acidbase-02",
   "titleZh": "物質鑑別題",
   "titleEn": "Distinguishing Substances",
   "coreTopics": [
    "ch-acidbase"
   ],
   "relatedTopics": [
    "ch-lab",
    "ch-ana"
   ],
   "questionType": "distinguish",
   "stem": "有三瓶無色溶液：NaCl、Na₂CO₃、Na₂SO₄。設計實驗用最少試劑區分它們。",
   "stemEn": "Three colourless solutions: NaCl, Na₂CO₃, Na₂SO₄. Design a scheme to distinguish them using minimal reagents.",
   "solutionSkeleton": [
    "先用稀鹽酸：Na₂CO₃ 放 CO₂（石灰水變乳白）",
    "再加 BaCl₂：Na₂SO₄ 生成白色 BaSO₄ 沉澱",
    "NaCl 兩步都無明顯現象",
    "寫出各步方程式與觀察"
   ],
   "variation": [
    "區分稀硫酸與稀鹽酸（加 BaCl₂）",
    "區分碳酸鹽與碳酸氫鹽",
    "區分三種金屬鹽（焰色+沉澱）"
   ],
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "用一種試劑區分 NaCl 和 Na₂CO₃ 兩種無色溶液。",
     "stemEn": "Use one reagent to distinguish NaCl and Na₂CO₃ solutions.",
     "answerZh": "加稀鹽酸：Na₂CO₃ 放出 CO₂（石灰水變乳白），NaCl 無現象。",
     "answerEn": "Add dilute HCl: Na₂CO₃ gives CO₂ (milky limewater), NaCl no change.",
     "years": [
      "2017"
     ],
     "marks": [
      {
       "content": "選對試劑：稀 HCl",
       "pts": 1
      },
      {
       "content": "Na₂CO₃ 放 CO₂（使石灰水變乳白）",
       "pts": 1
      },
      {
       "content": "NaCl 無明顯現象 → 判定",
       "pts": 1
      }
     ],
     "lossZh": "只説「有氣泡」而未檢驗 CO₂（需指明石灰水變乳白）。",
     "lossEn": "Saying \"bubbles\" without testing CO₂ (limewater milky)."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "三瓶溶液：Na₂SO₄、NaCl、Na₂CO₃，用兩種試劑區分並寫出方程式。",
     "stemEn": "Three solutions Na₂SO₄, NaCl, Na₂CO₃; distinguish with two reagents and write equations.",
     "answerZh": "先用稀 HCl 區分 Na₂CO₃（放 CO₂）；再用 BaCl₂：Na₂SO₄ 生成白色 BaSO₄ 沉澱，NaCl 無現象。Ba²⁺+SO₄²⁻→BaSO₄↓。",
     "answerEn": "First HCl identifies Na₂CO₃ (CO₂); then BaCl₂: Na₂SO₄ gives white BaSO₄ precipitate, NaCl none.",
     "years": [
      "2019"
     ],
     "marks": [
      {
       "content": "第一步稀 HCl 區分 Na₂CO₃（放 CO₂）",
       "pts": 1
      },
      {
       "content": "第二步 BaCl₂：Na₂SO₄ 生成白色 BaSO₄ 沉澱",
       "pts": 1
      },
      {
       "content": "NaCl 兩步皆無現象 + 寫出方程式",
       "pts": 1
      }
     ],
     "lossZh": "用 BaCl₂ 一步區分三者：BaCl₂ 與 Na₂CO₃ 也會沉澱，無法區分。",
     "lossEn": "Using BaCl₂ alone: it precipitates with Na₂CO₃ too, cannot distinguish."
    },
    {
     "difficulty": "challenge",
     "stemZh": "區分稀硫酸、稀鹽酸、稀硝酸三種無色酸，設計最少試劑方案。",
     "stemEn": "Distinguish dilute H₂SO₄, HCl, HNO₃ with minimal reagents.",
     "answerZh": "加 BaCl₂：H₂SO₄ 有白色 BaSO₄ 沉澱；剩下 HCl/HNO₃ 加 AgNO₃：HCl 有白色 AgCl 沉澱，HNO₃ 無現象。",
     "answerEn": "BaCl₂ gives white BaSO₄ with H₂SO₄; AgNO₃ gives white AgCl with HCl, none with HNO₃.",
     "years": [],
     "marks": [
      {
       "content": "BaCl₂ 檢出 H₂SO₄（白色 BaSO₄ 沉澱）",
       "pts": 1
      },
      {
       "content": "AgNO₃ 檢出 HCl（白色 AgCl 沉澱）",
       "pts": 1
      },
      {
       "content": "HNO₃ 無現象 → 推斷",
       "pts": 1
      }
     ],
     "lossZh": "用 AgNO₃ 檢 H₂SO₄：Ag₂SO₄ 微溶易混淆，應先檢 SO₄²⁻。",
     "lossEn": "Testing H₂SO₄ with AgNO₃: Ag₂SO₄ slightly soluble, confusing; test SO₄²⁻ first."
    }
   ]
  },
  {
   "id": "ch-mp-redox-02",
   "titleZh": "化學電池題",
   "titleEn": "Chemical Cell",
   "coreTopics": [
    "ch-redox"
   ],
   "relatedTopics": [
    "ch-mw2",
    "ch-metals"
   ],
   "questionType": "data-analysis",
   "stem": "鋅銅原電池：寫出兩極半反應，指出電子流方向，並計算電壓（給定 E°）。",
   "stemEn": "Zn-Cu cell: write half reactions, electron flow direction, and calculate voltage (E° given).",
   "solutionSkeleton": [
    "負極 Zn：Zn → Zn²⁺ + 2e⁻（氧化）",
    "正極 Cu：Cu²⁺ + 2e⁻ → Cu（還原）",
    "電子經外電路從 Zn 流向 Cu",
    "電壓 = E°(Cu) - E°(Zn)，用電極電位表"
   ],
   "variation": [
    "鹽橋的作用與電中性維持",
    "不同金屬組合的電壓比較",
    "蓄電池/燃料電池原理"
   ],
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "鋅銅原電池中，哪個電極是負極？電子流向？寫出正極反應。",
     "stemEn": "In a Zn-Cu cell, which is the anode? Electron flow? Cathode reaction?",
     "answerZh": "Zn 是負極（氧化：Zn→Zn²⁺+2e⁻）；電子經外電路從 Zn 流向 Cu；正極 Cu²⁺+2e⁻→Cu。",
     "answerEn": "Zn is anode (oxidation); electrons flow Zn→Cu externally; cathode Cu²⁺+2e⁻→Cu.",
     "years": [
      "2016"
     ],
     "marks": [
      {
       "content": "Zn 是負極（氧化：Zn→Zn²⁺+2e⁻）",
       "pts": 1
      },
      {
       "content": "電子經外電路從 Zn 流向 Cu",
       "pts": 1
      },
      {
       "content": "正極 Cu²⁺+2e⁻→Cu",
       "pts": 1
      }
     ],
     "lossZh": "把負極當還原：負極發生氧化（失電子），是電子流出端。",
     "lossEn": "Calling anode reduction: anode oxidises and emits electrons."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "給定 E°(Cu²⁺/Cu)=+0.34V、E°(Zn²⁺/Zn)=-0.76V，求電池電壓並判斷自發性。",
     "stemEn": "Given E° values, find cell voltage and spontaneity.",
     "answerZh": "電壓 = E°(正)-E°(負) = 0.34-(-0.76) = 1.10 V > 0，自發。",
     "answerEn": "Ecell = 0.34 - (-0.76) = 1.10 V > 0, spontaneous.",
     "years": [],
     "marks": [
      {
       "content": "E = E°(正極)-E°(負極)",
       "pts": 1
      },
      {
       "content": "代入 0.34-(-0.76)",
       "pts": 1
      },
      {
       "content": "E=1.10 V>0 → 自發",
       "pts": 1
      }
     ],
     "lossZh": "正負極 E° 次序搞反：用 E° 高的作正極，電壓 = 正 − 負。",
     "lossEn": "Reversing E° order; use higher E° as cathode, Ecell = E_cathode − E_anode."
    },
    {
     "difficulty": "challenge",
     "stemZh": "設計一個以鎂和銅為電極的電池，寫出半反應、離子方程式並預測現象。",
     "stemEn": "Design a Mg-Cu cell; write half reactions and predict observations.",
     "answerZh": "負極 Mg→Mg²⁺+2e⁻；正極 Cu²⁺+2e⁻→Cu；Mg+CuSO₄→MgSO₄+Cu；鎂片逐漸溶解，銅片有紅色沉澱，溶液藍色變淺。",
     "answerEn": "Anode Mg dissolves; cathode Cu deposits; solution fades from blue; Mg+CuSO₄→MgSO₄+Cu.",
     "years": [
      "2021"
     ],
     "marks": [
      {
       "content": "負極 Mg→Mg²⁺+2e⁻（氧化）",
       "pts": 1
      },
      {
       "content": "正極 Cu²⁺+2e⁻→Cu（還原）",
       "pts": 1
      },
      {
       "content": "離子方程式 + 預測現象（鎂溶解/銅析出/溶液變淺）",
       "pts": 1
      }
     ],
     "lossZh": "現象描述不完整：漏「溶液藍色變淺」或「銅片紅色沉澱」。",
     "lossEn": "Incomplete observations: missing colour fade or red Cu deposit."
    }
   ]
  },
  {
   "id": "ch-mp-equil-02",
   "titleZh": "Kc 計算題",
   "titleEn": "Kc Calculation",
   "coreTopics": [
    "ch-equil"
   ],
   "relatedTopics": [
    "ch-mw1"
   ],
   "questionType": "rate-equilibrium",
   "stem": "2.0 mol H₂ 與 1.0 mol I₂ 在 2 L 容器達平衡，生成 1.5 mol HI。求平衡常數 Kc。",
   "stemEn": "2.0 mol H₂ and 1.0 mol I₂ reach equilibrium in 2 L, forming 1.5 mol HI. Find Kc.",
   "solutionSkeleton": [
    "寫平衡方程 H₂ + I₂ ⇌ 2HI 與 Kc 表達式",
    "列 ICE 表求平衡濃度",
    "Kc = [HI]²/([H₂][I₂]) 代入",
    "注意單位與有效數字"
   ],
   "variation": [
    "溫度變化後新 Kc 求平衡濃度",
    "由 Kc 判斷反應方向",
    "加壓/惰性氣體對平衡影響"
   ],
   "appearances": [
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "H₂+I₂⇌2HI 達平衡時 [H₂]=0.5、[I₂]=0.5、[HI]=1.0 mol/L，求 Kc。",
     "stemEn": "At equilibrium [H₂]=0.5, [I₂]=0.5, [HI]=1.0. Find Kc.",
     "answerZh": "Kc=[HI]²/([H₂][I₂])=1.0²/(0.5×0.5)=4.0。",
     "answerEn": "Kc = 1.0²/(0.5×0.5) = 4.0.",
     "years": [],
     "marks": [
      {
       "content": "寫出 Kc=[HI]²/([H₂][I₂])",
       "pts": 1
      },
      {
       "content": "代入 [HI]=1.0, [H₂]=0.5, [I₂]=0.5",
       "pts": 1
      },
      {
       "content": "Kc=1.0²/(0.5×0.5)=4.0",
       "pts": 1
      }
     ],
     "lossZh": "次冪錯誤：係數要變成指數（2HI → [HI]²）。",
     "lossEn": "Power error: coefficient becomes exponent (2HI → [HI]²)."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "2.0 mol H₂ 與 1.0 mol I₂ 在 2 L 容器中達平衡生成 1.5 mol HI，求 Kc。",
     "stemEn": "2.0 mol H₂ and 1.0 mol I₂ in 2 L form 1.5 mol HI. Find Kc.",
     "answerZh": "平衡：[H₂]=(2-0.75)/2=0.625、[I₂]=(1-0.75)/2=0.125、[HI]=1.5/2=0.75；Kc=0.75²/(0.625×0.125)=7.2。",
     "answerEn": "At equilibrium [H₂]=0.625, [I₂]=0.125, [HI]=0.75; Kc=7.2.",
     "years": [
      "2021"
     ],
     "marks": [
      {
       "content": "由生成 1.5 mol HI 推消耗 0.75 mol H₂/I₂",
       "pts": 1
      },
      {
       "content": "求平衡濃度（除以 2 L）",
       "pts": 1
      },
      {
       "content": "代入 Kc 得 7.2",
       "pts": 1
      }
     ],
     "lossZh": "化學計量錯誤：1 mol HI 對應消耗 0.5 mol H₂（係數比 1:2）。",
     "lossEn": "Stoichiometry: 2HI uses 1H₂, so 1.5 HI uses 0.75 H₂."
    },
    {
     "difficulty": "challenge",
     "stemZh": "Kc=64（某溫）時 0.2 mol PCl₅ 在 1 L 容器分解 PCl₅⇌PCl₃+Cl₂，求平衡時各濃度。",
     "stemEn": "PCl₅⇌PCl₃+Cl₂ with Kc=64; start 0.2 mol in 1 L. Find equilibrium concentrations.",
     "answerZh": "設分解 x：Kc=x²/(0.2-x)=64；解得 x≈0.197；[PCl₃]=[Cl₂]≈0.197 mol/L，[PCl₅]≈0.003 mol/L。",
     "answerEn": "Let x decompose: x²/(0.2-x)=64 → x≈0.197; [PCl₃]=[Cl₂]≈0.197, [PCl₅]≈0.003.",
     "years": [],
     "marks": [
      {
       "content": "設分解 x mol/L，Kc=x²/(0.2-x)=64",
       "pts": 1
      },
      {
       "content": "解二次方程得 x≈0.197",
       "pts": 1
      },
      {
       "content": "平衡濃度 [PCl₃]=[Cl₂]≈0.197, [PCl₅]≈0.003",
       "pts": 1
      }
     ],
     "lossZh": "Kc 很大時 x 接近 0.2，直接忽略「0.2-x」會得錯解；需解完整方程。",
     "lossEn": "When Kc is large, x≈0.2; neglecting (0.2−x) gives wrong answer."
    }
   ]
  },
  {
   "id": "ch-mp-carbon-02",
   "titleZh": "官能團轉化鏈",
   "titleEn": "Functional Group Transformations",
   "coreTopics": [
    "ch-carbon"
   ],
   "relatedTopics": [
    "ch-fossil"
   ],
   "questionType": "organic",
   "stem": "以乙烯為原料，寫出合成乙醇、乙醛、乙酸的完整反應鏈。",
   "stemEn": "Starting from ethene, write the reaction chain to ethanol, ethanal, and ethanoic acid.",
   "solutionSkeleton": [
    "乙烯 + 水（催化）→ 乙醇",
    "乙醇氧化 → 乙醛（加 [O]）",
    "乙醛繼續氧化 → 乙酸",
    "寫出每步條件與方程式"
   ],
   "variation": [
    "由乙醇制乙烯（脫水）",
    "酯化合成香料",
    "加聚與縮聚對比"
   ],
   "appearances": [
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "寫出乙烯水化製乙醇的方程式和條件。",
     "stemEn": "Write hydration of ethene to ethanol; conditions.",
     "answerZh": "C₂H₄+H₂O→C₂H₅OH；條件：磷酸催化、加熱加壓（工業）或濃硫酸水合。",
     "answerEn": "C₂H₄+H₂O→C₂H₅OH; phosphoric acid catalyst, heat/pressure.",
     "years": [
      "2019"
     ],
     "marks": [
      {
       "content": "方程式 C₂H₄+H₂O→C₂H₅OH",
       "pts": 1
      },
      {
       "content": "條件：磷酸催化/加熱加壓（或濃硫酸水合）",
       "pts": 1
      },
      {
       "content": "反應類型：加成（水化）",
       "pts": 1
      }
     ],
     "lossZh": "漏寫條件或把水化誤寫成取代。",
     "lossEn": "Missing conditions or calling hydration substitution."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "由乙醇合成乙酸乙酯，寫出每步方程式與條件。",
     "stemEn": "Synthesise ethyl ethanoate from ethanol; write each step.",
     "answerZh": "乙醇氧化→乙酸：C₂H₅OH+[O]→CH₃COOH+H₂O（KMnO₄/K₂Cr₂O₇ 酸性）；酯化：CH₃COOH+C₂H₅OH⇌CH₃COOC₂H₅+H₂O（濃 H₂SO₄、加熱）。",
     "answerEn": "Oxidise ethanol to acid (KMnO₄); esterify with conc. H₂SO₄ + heat.",
     "years": [
      "2022"
     ],
     "marks": [
      {
       "content": "氧化：C₂H₅OH+[O]→CH₃COOH+H₂O（酸性 KMnO₄）",
       "pts": 1
      },
      {
       "content": "酯化：CH₃COOH+C₂H₅OH⇌CH₃COOC₂H₅+H₂O",
       "pts": 1
      },
      {
       "content": "酯化條件：濃 H₂SO₄ + 加熱",
       "pts": 1
      }
     ],
     "lossZh": "酯化方程式漏「可逆符號」或漏濃硫酸條件。",
     "lossEn": "Esterification missing ⇌ or conc. H₂SO₄."
    },
    {
     "difficulty": "challenge",
     "stemZh": "設計由乙烯製備聚乙烯和乙酸的合成路線，比較兩條路線的反應類型。",
     "stemEn": "Design routes from ethene to polyethylene and to ethanoic acid; compare reaction types.",
     "answerZh": "聚乙烯：nC₂H₄→加聚（催化劑、加壓）；乙酸：C₂H₄+H₂O→C₂H₅OH→氧化→CH₃COOH。加聚 vs 水化+氧化。",
     "answerEn": "PE via addition polymerisation; ethanoic acid via hydration then oxidation.",
     "years": [],
     "marks": [
      {
       "content": "聚乙烯：nC₂H₄→加聚（催化劑）",
       "pts": 1
      },
      {
       "content": "乙酸：C₂H₄→C₂H₅OH→氧化→CH₃COOH",
       "pts": 1
      },
      {
       "content": "反應類型對比：加聚 vs 水化+氧化",
       "pts": 1
      }
     ],
     "lossZh": "兩條路線的反應類型混淆。",
     "lossEn": "Confusing reaction types of the two routes."
    }
   ]
  },
  {
   "id": "ch-mp-mw2-02",
   "titleZh": "結構-性質推斷題",
   "titleEn": "Structure-Property Inference",
   "coreTopics": [
    "ch-mw2"
   ],
   "relatedTopics": [
    "ch-mw1",
    "ch-pattern"
   ],
   "questionType": "concept",
   "stem": "化合物 A 熔點很高、固態不導電、熔融導電。推斷 A 的鍵型並解釋性質。",
   "stemEn": "Compound A has high mp, doesn't conduct as solid, conducts when molten. Deduce bonding type and explain.",
   "solutionSkeleton": [
    "熔點高→離子或共價網狀",
    "固態不導電、熔融導電→離子化合物",
    "離子鍵：陰陽離子，熔融遊離導電",
    "對比共價網狀（熔融也不導電）"
   ],
   "variation": [
    "石墨導電 vs 鑽石不導電",
    "比較 NaCl 與 Al₂O₃ 熔點",
    "高分子與小分子熔點比較"
   ],
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "化合物 A 熔點高、固態不導電、熔融導電。推斷鍵型。",
     "stemEn": "A has high mp, non-conducting solid, conducts molten. Deduce bonding.",
     "answerZh": "離子化合物（熔融時離子游離導電；固態離子固定不導電）。",
     "answerEn": "Ionic compound (mobile ions when molten, fixed when solid).",
     "years": [],
     "marks": [
      {
       "content": "高熔點 → 離子或共價網狀",
       "pts": 1
      },
      {
       "content": "熔融才導電 → 離子化合物（遊離離子）",
       "pts": 1
      },
      {
       "content": "排除共價網狀（熔融也不導電）",
       "pts": 1
      }
     ],
     "lossZh": "只憑「高熔點」就下結論，忽略導電性證據。",
     "lossEn": "Concluding from high mp alone, ignoring conductivity."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "兩種物質 B 熔點高、固態不導電、熔融也不導電。推斷並與 A 比較。",
     "stemEn": "B has high mp, never conducts. Deduce and compare with A.",
     "answerZh": "B 是共價網狀結構（如鑽石/SiO₂）；沒有自由電子或遊離離子，熔融也不導電。",
     "answerEn": "B is giant covalent (diamond/SiO₂); no charge carriers even molten.",
     "years": [
      "2020"
     ],
     "marks": [
      {
       "content": "B 高熔點且不導電 → 共價網狀",
       "pts": 1
      },
      {
       "content": "鑽石/SiO₂ 無自由電荷載體",
       "pts": 1
      },
      {
       "content": "對比 A（離子）與 B（共價網狀）",
       "pts": 1
      }
     ],
     "lossZh": "共價網狀熔融態以為可導電（其實沒有遊離離子）。",
     "lossEn": "Thinking molten covalent network conducts (no free ions)."
    },
    {
     "difficulty": "challenge",
     "stemZh": "金屬 C 導電性隨溫度升高而下降，解釋原因。",
     "stemEn": "Metal C conducts less as temperature rises. Explain.",
     "answerZh": "溫度升→金屬離子振動加劇→阻礙離域電子流動→電阻升、導電降。",
     "answerEn": "Heating increases ion vibration, scattering delocalised electrons → higher resistance.",
     "years": [],
     "marks": [
      {
       "content": "溫度升 → 金屬離子振動加劇",
       "pts": 1
      },
      {
       "content": "阻礙離域電子流動",
       "pts": 1
      },
      {
       "content": "電阻升 → 導電降",
       "pts": 1
      }
     ],
     "lossZh": "與半導體混淆：金屬升溫導電下降，半導體相反。",
     "lossEn": "Confusing with semiconductors: metals conduct worse when hot."
    }
   ]
  },
  {
   "id": "ch-mp-rate-02",
   "titleZh": "碰撞理論分析",
   "titleEn": "Collision Theory Analysis",
   "coreTopics": [
    "ch-rate"
   ],
   "relatedTopics": [
    "ch-energy",
    "ch-equil"
   ],
   "questionType": "data-analysis",
   "stem": "解釋為何升高溫度能顯著加快反應速率（用碰撞理論和活化能角度）。",
   "stemEn": "Explain why raising temperature greatly increases rate (collision theory and activation energy).",
   "solutionSkeleton": [
    "溫度升→分子平均動能升",
    "有效碰撞比例增大（能量≥Eₐ 的分子更多）",
    "速率隨有效碰撞頻率增大",
    "（對比）濃度只增碰撞頻率不增有效比例"
   ],
   "variation": [
    "催化劑如何加快速率",
    "酶催化的特性",
    "工業上為何用高溫高壓"
   ],
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "用碰撞理論解釋為何濃度增大速率加快。",
     "stemEn": "Use collision theory: why higher concentration speeds reaction.",
     "answerZh": "濃度增→單位體積粒子數增→碰撞頻率增→有效碰撞增多→速率加快。",
     "answerEn": "More particles per volume → higher collision frequency → more effective collisions.",
     "years": [],
     "marks": [
      {
       "content": "濃度增 → 單位體積粒子數增",
       "pts": 1
      },
      {
       "content": "碰撞頻率增",
       "pts": 1
      },
      {
       "content": "有效碰撞增多 → 速率加快",
       "pts": 1
      }
     ],
     "lossZh": "只説「碰撞更多」未區分有效/無效碰撞。",
     "lossEn": "Saying \"more collisions\" without distinguishing effective ones."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "為何升溫對速率的影響遠大於濃度對速率的影響？",
     "stemEn": "Why does temperature affect rate more than concentration?",
     "answerZh": "升溫不僅增碰撞頻率，更大幅增加能量≥Eₐ 的有效碰撞比例（指數關係）；濃度只增碰撞頻率（線性）。",
     "answerEn": "Heating boosts effective fraction exponentially (more particles exceed Eₐ), not just frequency.",
     "years": [
      "2021"
     ],
     "marks": [
      {
       "content": "升溫 → 分子動能增",
       "pts": 1
      },
      {
       "content": "能量≥Eₐ 的比例指數上升",
       "pts": 1
      },
      {
       "content": "濃度只線性增碰撞頻率",
       "pts": 1
      }
     ],
     "lossZh": "把升溫與濃度都當成「線性增碰撞」。",
     "lossEn": "Treating temperature and concentration as same linear effect."
    },
    {
     "difficulty": "challenge",
     "stemZh": "酶催化為何有最適溫度？用碰撞理論和酶結構解釋。",
     "stemEn": "Why do enzymes have optimal temperature?",
     "answerZh": "低溫：碰撞少速率慢；升溫：速率升但高溫使酶變性（三級結構破壞）失活；故存在最適溫度。",
     "answerEn": "Cold: slow; heating raises rate until enzyme denatures (structure destroyed); hence optimum.",
     "years": [],
     "marks": [
      {
       "content": "低溫碰撞少 → 慢",
       "pts": 1
      },
      {
       "content": "升溫速率升",
       "pts": 1
      },
      {
       "content": "過熱酶變性（結構破壞）→ 失活",
       "pts": 1
      }
     ],
     "lossZh": "漏「高溫變性失活」這一半（只答升溫加快）。",
     "lossEn": "Missing denaturation half of the answer."
    }
   ]
  },
  {
   "id": "ch-mp-ana-02",
   "titleZh": "色譜分析題",
   "titleEn": "Chromatography Analysis",
   "coreTopics": [
    "ch-ana"
   ],
   "relatedTopics": [
    "ch-lab",
    "ch-carbon"
   ],
   "questionType": "data-analysis",
   "stem": "用紙色譜分離墨水中的色素，説明實驗步驟並用 Rf 值鑑定各成分。",
   "stemEn": "Separate ink pigments by paper chromatography; describe steps and use Rf values to identify components.",
   "solutionSkeleton": [
    "畫鉛筆基線、點樣品",
    "展開劑上升分離色素",
    "計算各色點 Rf = 距離樣品/距離溶劑前緣",
    "對照已知樣品 Rf 鑑定"
   ],
   "variation": [
    "不同展開劑的影響",
    "薄層色譜 vs 紙色譜",
    "色譜在藥物/食品檢測的應用"
   ],
   "appearances": [
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "LQ"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "紙色譜實驗：畫基線為何用鉛筆而不用鋼筆？",
     "stemEn": "In paper chromatography, why draw baseline with pencil not pen?",
     "answerZh": "鉛筆線是石墨不溶於展開劑；鋼筆墨水會溶入展開劑污染色譜。",
     "answerEn": "Pencil graphite is insoluble in the solvent; ink would run and contaminate.",
     "years": [],
     "marks": [
      {
       "content": "鉛筆線 = 石墨不溶於展開劑",
       "pts": 1
      },
      {
       "content": "鋼筆墨水會溶入污染色譜",
       "pts": 1
      }
     ],
     "lossZh": "回答「鉛筆好寫」這類非化學原因。",
     "lossEn": "Giving non-chemical reason (e.g. \"easier to write\")."
    },
    {
     "difficulty": "intermediate",
     "stemZh": "某色點移動 4.2 cm，溶劑前緣移動 7.0 cm，求 Rf 值。",
     "stemEn": "Spot moves 4.2 cm, solvent front 7.0 cm. Find Rf.",
     "answerZh": "Rf = 4.2/7.0 = 0.60。",
     "answerEn": "Rf = 4.2/7.0 = 0.60.",
     "years": [],
     "marks": [
      {
       "content": "Rf = 距離樣品/距離溶劑前緣",
       "pts": 1
      },
      {
       "content": "Rf = 4.2/7.0",
       "pts": 1
      },
      {
       "content": "Rf = 0.60",
       "pts": 1
      }
     ],
     "lossZh": "分子分母寫反（是樣品距離 ÷ 溶劑前緣距離）。",
     "lossEn": "Reversing numerator/denominator."
    },
    {
     "difficulty": "challenge",
     "stemZh": "為何混合物中各成分在色譜上移動距離不同？",
     "stemEn": "Why do components travel different distances?",
     "answerZh": "成分在固定相（紙）和流動相（展開劑）間分配不同；對流動相親和力大者移動遠，對固定相吸附強者移動近。",
     "answerEn": "Different partition between stationary/mobile phases; stronger mobile affinity travels further.",
     "years": [
      "2023"
     ],
     "marks": [
      {
       "content": "分配係數不同（固定相/流動相）",
       "pts": 1
      },
      {
       "content": "對流動相親和力大者移動遠",
       "pts": 1
      },
      {
       "content": "對固定相吸附強者移動近",
       "pts": 1
      }
     ],
     "lossZh": "只説「成分不同」不講分配機制。",
     "lossEn": "Saying \"different components\" without partition mechanism."
    }
   ]
  }
 ]
};

if (typeof module !== "undefined" && module.exports) module.exports = DSE_CHEM_GRAPH;
