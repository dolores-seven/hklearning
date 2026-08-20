const DSE_PHYSICS_GRAPH = {
 "meta": {
  "version": "0.2.0-P3",
  "generated": "2026-08-20",
  "domains": [
   {
    "id": "PH-HT",
    "nameZh": "熱和氣體",
    "nameEn": "Heat and Gases",
    "group": "必修"
   },
   {
    "id": "PH-FM",
    "nameZh": "力和運動",
    "nameEn": "Force and Motion",
    "group": "必修"
   },
   {
    "id": "PH-WV",
    "nameZh": "波動",
    "nameEn": "Waves",
    "group": "必修"
   },
   {
    "id": "PH-EM",
    "nameZh": "電和磁",
    "nameEn": "Electricity and Magnetism",
    "group": "必修"
   },
   {
    "id": "PH-RP",
    "nameZh": "放射現象與核能",
    "nameEn": "Radioactivity and Nuclear Energy",
    "group": "必修"
   },
   {
    "id": "PH-AS",
    "nameZh": "天文學",
    "nameEn": "Astronomy",
    "group": "選修"
   },
   {
    "id": "PH-AW",
    "nameZh": "原子世界",
    "nameEn": "Atomic World",
    "group": "選修"
   },
   {
    "id": "PH-EE",
    "nameZh": "能量與能源的利用",
    "nameEn": "Energy and Use of Energy",
    "group": "選修"
   },
   {
    "id": "PH-MP",
    "nameZh": "醫學物理",
    "nameEn": "Medical Physics",
    "group": "選修"
   },
   {
    "id": "PH-LAB",
    "nameZh": "實驗技能",
    "nameEn": "Experimental Skills",
    "group": "SBA"
   }
  ],
  "knowledgeTypes": {
   "definition": {
    "id": "definition",
    "nameZh": "定義",
    "nameEn": "Definition",
    "color": "#4CAF50",
    "zh": "定義",
    "en": "Definition"
   },
   "law": {
    "id": "law",
    "nameZh": "定律",
    "nameEn": "Law",
    "color": "#2196F3",
    "zh": "定律",
    "en": "Law"
   },
   "formula": {
    "id": "formula",
    "nameZh": "公式",
    "nameEn": "Formula",
    "color": "#FF9800",
    "zh": "公式",
    "en": "Formula"
   },
   "principle": {
    "id": "principle",
    "nameZh": "原理",
    "nameEn": "Principle",
    "color": "#9C27B0",
    "zh": "原理",
    "en": "Principle"
   },
   "concept": {
    "id": "concept",
    "nameZh": "概念",
    "nameEn": "Concept",
    "color": "#795548",
    "zh": "概念",
    "en": "Concept"
   }
  },
  "edgeTypes": {
   "prereq": {
    "dash": "6 3",
    "nameZh": "前置",
    "nameEn": "Prerequisite",
    "color": "#8b5cf6",
    "zh": "前置",
    "en": "Prerequisite"
   },
   "derives": {
    "dash": "4 2",
    "nameZh": "推导",
    "nameEn": "Derives",
    "color": "#0ea5e9",
    "zh": "推导",
    "en": "Derives"
   },
   "related": {
    "dash": "2 4",
    "nameZh": "相关",
    "nameEn": "Related",
    "color": "#94a3b8",
    "zh": "相关",
    "en": "Related"
   },
   "cotested": {
    "dash": "none",
    "nameZh": "组合出题",
    "nameEn": "Co-tested",
    "color": "#f59e0b",
    "zh": "组合出题",
    "en": "Co-tested"
   },
   "child": {
    "dash": "2 3",
    "nameZh": "下钻",
    "nameEn": "Drill-down",
    "color": "#64748b",
    "zh": "下钻",
    "en": "Drill-down"
   }
  },
  "updated": "2026-08-20"
 },
 "nodes": [
  {
   "id": "ph-ht-temp",
   "level": "topic",
   "domain": "PH-HT",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "溫標與熱膨脹",
    "en": "Temperature Scales and Thermal Expansion"
   },
   "leaves": [
    {
     "id": "ph-ht-temp-01",
     "name": {
      "zh": "溫標",
      "en": "Temperature Scales"
     },
     "knowledgeType": "concept",
     "formula": "T(K) = T(°C) + 273",
     "dataSheet": false,
     "pitfall": {
      "zh": "絕對零度-273°C；熱力學溫標不能用負值",
      "en": "Absolute zero = -273°C; the thermodynamic scale cannot take negative values"
     }
    },
    {
     "id": "ph-ht-temp-02",
     "name": {
      "zh": "固體熱膨脹",
      "en": "Thermal Expansion of Solids"
     },
     "knowledgeType": "formula",
     "formula": "線膨脹：ΔL = αL₀ΔT",
     "dataSheet": false,
     "pitfall": {
      "zh": "α是線膨脹係數；雙金屬片利用不同膨脹係數彎曲",
      "en": "α is the linear expansivity; a bimetallic strip bends because of different expansivities"
     }
    },
    {
     "id": "ph-ht-temp-03",
     "name": {
      "zh": "液體熱膨脹",
      "en": "Thermal Expansion of Liquids"
     },
     "knowledgeType": "concept",
     "formula": "體膨脹：ΔV = βV₀ΔT",
     "dataSheet": false,
     "pitfall": {
      "zh": "液體膨脹係數大於固體；水在4°C以下反常膨脹",
      "en": "Liquids have larger expansivity than solids; water expands anomalously below 4°C"
     }
    },
    {
     "id": "ph-ht-temp-04",
     "name": {
      "zh": "氣體熱膨脹",
      "en": "Thermal Expansion of Gases"
     },
     "knowledgeType": "concept",
     "formula": "氣體膨脹係數最大",
     "dataSheet": false,
     "pitfall": {
      "zh": "壓強不變時體積膨脹；理想氣體膨脹遵守理想氣體方程",
      "en": "Volume expands at constant pressure; ideal gas expansion obeys the ideal gas equation"
     }
    },
    {
     "id": "ph-ht-temp-05",
     "name": {
      "zh": "膨脹的應用",
      "en": "Applications of Expansion"
     },
     "knowledgeType": "concept",
     "formula": "溫度計、恆溫器、金屬膨脹接頭",
     "dataSheet": false,
     "pitfall": {
      "zh": "膨脹間隙要預留；鐵軌留縫隙防止夏天脫軌",
      "en": "Expansion gaps must be left; rail tracks have gaps to prevent buckling in summer"
     }
    }
   ],
   "weight": "mid",
   "diff": 1
  },
  {
   "id": "ph-ht-shc",
   "level": "topic",
   "domain": "PH-HT",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "熱容量與比熱容",
    "en": "Heat Capacity and Specific Heat Capacity"
   },
   "leaves": [
    {
     "id": "ph-ht-shc-01",
     "name": {
      "zh": "熱容量",
      "en": "Heat Capacity"
     },
     "knowledgeType": "definition",
     "formula": "C = Q/ΔT",
     "dataSheet": false,
     "pitfall": {
      "zh": "與物質質量有關；單位J/K或J/°C",
      "en": "Depends on the mass of the substance; unit J/K or J/°C"
     }
    },
    {
     "id": "ph-ht-shc-02",
     "name": {
      "zh": "比熱容",
      "en": "Specific Heat Capacity"
     },
     "knowledgeType": "definition",
     "formula": "c = Q/(mΔT)",
     "dataSheet": true,
     "pitfall": {
      "zh": "與物質種類有關，與質量無關；水比熱容很大(4200J/kg°C)",
      "en": "Depends on the substance, not the mass; water has a very large SHC (4200 J/kg°C)"
     }
    },
    {
     "id": "ph-ht-shc-03",
     "name": {
      "zh": "熱量計算",
      "en": "Heat Calculation"
     },
     "knowledgeType": "formula",
     "formula": "Q = mcΔT",
     "dataSheet": false,
     "pitfall": {
      "zh": "升溫Q為正，降溫Q為負；混合時Q吸=Q放",
      "en": "Q is positive for heating up and negative for cooling down; in mixing, heat gained = heat lost"
     }
    },
    {
     "id": "ph-ht-shc-04",
     "name": {
      "zh": "混合溫度",
      "en": "Mixed Temperature"
     },
     "knowledgeType": "formula",
     "formula": "m₁c₁(t-t₁) + m₂c₂(t-t₂) = 0",
     "dataSheet": false,
     "pitfall": {
      "zh": "假設不與外界交換熱量；高溫物體放熱等於低溫物體吸熱",
      "en": "Assume no heat exchange with the surroundings; heat lost by hot body = heat gained by cold body"
     }
    },
    {
     "id": "ph-ht-shc-05",
     "name": {
      "zh": "量熱器",
      "en": "Calorimeter"
     },
     "knowledgeType": "concept",
     "formula": "測量熱量的裝置",
     "dataSheet": false,
     "pitfall": {
      "zh": "要考慮量熱器本身吸熱；雙層容器減少熱散失",
      "en": "Account for heat absorbed by the calorimeter itself; double-wall reduces heat loss"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-ht-latent",
   "level": "topic",
   "domain": "PH-HT",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "潛熱與氣體方程",
    "en": "Latent Heat and Gas Equation"
   },
   "leaves": [
    {
     "id": "ph-ht-latent-01",
     "name": {
      "zh": "潛熱",
      "en": "Latent Heat"
     },
     "knowledgeType": "definition",
     "formula": "Q = mL",
     "dataSheet": true,
     "pitfall": {
      "zh": "相變時溫度不變；熔化潛熱和汽化潛熱不同",
      "en": "Temperature stays constant during a phase change; latent heat of fusion ≠ latent heat of vaporisation"
     }
    },
    {
     "id": "ph-ht-latent-02",
     "name": {
      "zh": "熔化與凝固",
      "en": "Melting and Freezing"
     },
     "knowledgeType": "concept",
     "formula": "固態↔液態，溫度不變",
     "dataSheet": false,
     "pitfall": {
      "zh": "熔點與凝固點相同；熔化吸熱，凝固放熱",
      "en": "Melting point equals freezing point; melting absorbs heat, freezing releases heat"
     }
    },
    {
     "id": "ph-ht-latent-03",
     "name": {
      "zh": "汽化與液化",
      "en": "Vaporization and Liquefaction"
     },
     "knowledgeType": "concept",
     "formula": "液態↔氣態，溫度不變",
     "dataSheet": false,
     "pitfall": {
      "zh": "沸點與壓強有關；汽化吸熱，液化放熱",
      "en": "Boiling point depends on pressure; vaporisation absorbs heat, condensation releases heat"
     }
    },
    {
     "id": "ph-ht-latent-04",
     "name": {
      "zh": "波義耳定律",
      "en": "Boyle's Law"
     },
     "knowledgeType": "law",
     "formula": "P₁V₁ = P₂V₂（溫度不變）",
     "dataSheet": true,
     "pitfall": {
      "zh": "壓強與體積成反比；等溫過程",
      "en": "Pressure is inversely proportional to volume; isothermal process"
     }
    },
    {
     "id": "ph-ht-latent-05",
     "name": {
      "zh": "查理定律",
      "en": "Charles's Law"
     },
     "knowledgeType": "law",
     "formula": "V₁/T₁ = V₂/T₂（壓強不變）",
     "dataSheet": true,
     "pitfall": {
      "zh": "體積與熱力學溫標成正比；等壓過程",
      "en": "Volume is proportional to thermodynamic temperature; isobaric process"
     }
    },
    {
     "id": "ph-ht-latent-06",
     "name": {
      "zh": "理想氣體方程",
      "en": "Ideal Gas Equation"
     },
     "knowledgeType": "law",
     "formula": "PV = nRT",
     "dataSheet": true,
     "pitfall": {
      "zh": "R=8.31J/(mol·K)；n是摩爾數；T必須用開爾文",
      "en": "R = 8.31 J/(mol·K); n is the number of moles; T must be in kelvin"
     }
    }
   ],
   "weight": "high",
   "diff": 3
  },
  {
   "id": "ph-ht-kinetic",
   "level": "topic",
   "domain": "PH-HT",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "內能與動力論",
    "en": "Internal Energy and Kinetic Theory"
   },
   "leaves": [
    {
     "id": "ph-ht-kinetic-01",
     "name": {
      "zh": "內能",
      "en": "Internal Energy"
     },
     "knowledgeType": "definition",
     "formula": "物體內所有分子動能與勢能之和",
     "dataSheet": false,
     "pitfall": {
      "zh": "與溫度有關（理想氣體只與溫度有關）；熱功當量J=4.2J/cal",
      "en": "Related to temperature (for an ideal gas, internal energy depends only on T); mechanical equivalent of heat 4.2 J/cal"
     }
    },
    {
     "id": "ph-ht-kinetic-02",
     "name": {
      "zh": "熱力學第一定律",
      "en": "First Law of Thermodynamics"
     },
     "knowledgeType": "law",
     "formula": "ΔU = Q + W",
     "dataSheet": false,
     "pitfall": {
      "zh": "系統吸熱Q為正，外界對系統做功W為正；能量守恆體現",
      "en": "Q > 0 when the system absorbs heat; W > 0 when work is done ON the system; an expression of energy conservation"
     }
    },
    {
     "id": "ph-ht-kinetic-03",
     "name": {
      "zh": "分子動力論",
      "en": "Kinetic Theory"
     },
     "knowledgeType": "concept",
     "formula": "物質由分子組成；分子永不停息運動",
     "dataSheet": false,
     "pitfall": {
      "zh": "解釋氣體壓強（分子撞擊器壁）；溫度是分子平均動能的量度",
      "en": "Explains gas pressure (molecules striking the walls); temperature measures the average kinetic energy of molecules"
     }
    },
    {
     "id": "ph-ht-kinetic-04",
     "name": {
      "zh": "理想氣體模型",
      "en": "Ideal Gas Model"
     },
     "knowledgeType": "concept",
     "formula": "分子無大小無作用力（除碰撞外）",
     "dataSheet": false,
     "pitfall": {
      "zh": "高溫低壓下實際氣體接近理想氣體；標準狀況(STP)下1摩爾氣體體積22.4L",
      "en": "Real gases approximate ideal gases at high temperature & low pressure; 1 mole of gas occupies 22.4 L at STP"
     }
    },
    {
     "id": "ph-ht-kinetic-05",
     "name": {
      "zh": "布朗運動",
      "en": "Brownian Motion"
     },
     "knowledgeType": "concept",
     "formula": "微小粒子在流體中無規則運動",
     "dataSheet": false,
     "pitfall": {
      "zh": "證實分子運動；粒子越大布朗運動越不明顯",
      "en": "Confirms molecular motion; larger particles show less obvious Brownian motion"
     }
    }
   ],
   "weight": "mid",
   "diff": 2
  },
  {
   "id": "ph-fm-motion",
   "level": "topic",
   "domain": "PH-FM",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "運動學",
    "en": "Kinematics"
   },
   "leaves": [
    {
     "id": "ph-fm-motion-01",
     "name": {
      "zh": "平均速度",
      "en": "Average Speed"
     },
     "knowledgeType": "definition",
     "formula": "v = s/t",
     "dataSheet": true,
     "pitfall": {
      "zh": "平均速率=總距離/總時間，方向改變仍計算；平均速度=位移/時間，是向量",
      "en": "Average speed = total distance / total time (ignores direction); average velocity = displacement / time, a vector"
     }
    },
    {
     "id": "ph-fm-motion-02",
     "name": {
      "zh": "加速度",
      "en": "Acceleration"
     },
     "knowledgeType": "definition",
     "formula": "a = Δv/Δt",
     "dataSheet": true,
     "pitfall": {
      "zh": "加速度方向與速度方向無關；減速時加速度方向與速度相反",
      "en": "Direction of acceleration is independent of the direction of velocity; during deceleration, a is opposite to v"
     }
    },
    {
     "id": "ph-fm-motion-03",
     "name": {
      "zh": "運動學公式",
      "en": "Equations of Motion"
     },
     "knowledgeType": "formula",
     "formula": "v = u + at, s = ut + ½at², v² = u² + 2as",
     "dataSheet": true,
     "pitfall": {
      "zh": "僅適用於匀加速運動；用對稱性求上拋時間（t上=t下）",
      "en": "Only valid for uniformly accelerated motion; use symmetry to find time of flight (t_up = t_down)"
     }
    },
    {
     "id": "ph-fm-motion-04",
     "name": {
      "zh": "位移-時間圖",
      "en": "Displacement-Time Graph"
     },
     "knowledgeType": "concept",
     "formula": "斜率=速度",
     "dataSheet": false,
     "pitfall": {
      "zh": "曲線切線斜率表示瞬時速度；水平線表示靜止",
      "en": "Slope of the tangent on a displacement-time graph gives instantaneous velocity; a horizontal line means at rest"
     }
    },
    {
     "id": "ph-fm-motion-05",
     "name": {
      "zh": "速度-時間圖",
      "en": "Velocity-Time Graph"
     },
     "knowledgeType": "concept",
     "formula": "斜率=加速度，面積=位移",
     "dataSheet": false,
     "pitfall": {
      "zh": "圖下方形面積表示位移（不是距離）；速度為負時面積也算",
      "en": "Area under a velocity-time graph gives displacement (not distance); area counts even when v is negative"
     }
    },
    {
     "id": "ph-fm-motion-06",
     "name": {
      "zh": "自由落體",
      "en": "Free Fall"
     },
     "knowledgeType": "concept",
     "formula": "a = g = 10 m/s²（向下為正）",
     "dataSheet": false,
     "pitfall": {
      "zh": "拋到最高點時速度=0但加速度仍為g；上升時間=下降時間",
      "en": "At the highest point v = 0 but acceleration is still g; time of ascent = time of descent"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-fm-newton",
   "level": "topic",
   "domain": "PH-FM",
   "grades": [
    "S4"
   ],
   "name": {
    "zh": "力與牛頓運動定律",
    "en": "Forces and Newton's Laws of Motion"
   },
   "leaves": [
    {
     "id": "ph-fm-newton-01",
     "name": {
      "zh": "牛頓第一定律",
      "en": "Newton's First Law"
     },
     "knowledgeType": "law",
     "formula": "若淨力=0，物體保持靜止或匀速運動",
     "dataSheet": false,
     "pitfall": {
      "zh": "物體不受力或合力為零時，不一定靜止（可能匀速）",
      "en": "With no force (or zero resultant), an object is not necessarily at rest — it may move at constant velocity"
     }
    },
    {
     "id": "ph-fm-newton-02",
     "name": {
      "zh": "牛頓第二定律",
      "en": "Newton's Second Law"
     },
     "knowledgeType": "law",
     "formula": "F = ma",
     "dataSheet": true,
     "pitfall": {
      "zh": "F是淨力（合力），不是單個力；F與a同方向",
      "en": "F is the net (resultant) force, not a single force; F and a are in the same direction"
     }
    },
    {
     "id": "ph-fm-newton-03",
     "name": {
      "zh": "牛頓第三定律",
      "en": "Newton's Third Law"
     },
     "knowledgeType": "law",
     "formula": "作用力與反作用力大小相等、方向相反、作用在不同物體上",
     "dataSheet": false,
     "pitfall": {
      "zh": "作用力與反作用力同時產生同時消失；作用在不同物體上，不能抵消",
      "en": "Action and reaction occur simultaneously and are equal and opposite, but act on DIFFERENT bodies, so they do not cancel"
     }
    },
    {
     "id": "ph-fm-newton-04",
     "name": {
      "zh": "重量與質量",
      "en": "Weight and Mass"
     },
     "knowledgeType": "concept",
     "formula": "W = mg",
     "dataSheet": true,
     "pitfall": {
      "zh": "重量是力（N），質量是物質量（kg）；g=10 N/kg在DSE中適用",
      "en": "Weight is a force (N); mass is an amount of matter (kg); g = 10 N/kg is used in DSE"
     }
    },
    {
     "id": "ph-fm-newton-05",
     "name": {
      "zh": "摩擦力",
      "en": "Friction"
     },
     "knowledgeType": "concept",
     "formula": "f ≤ μN（靜摩擦），f = μN（動摩擦）",
     "dataSheet": false,
     "pitfall": {
      "zh": "靜摩擦力可變（0到最大值）；動摩擦力通常小於最大靜摩擦力；摩擦力方向與相對運動方向相反",
      "en": "Static friction varies from 0 up to a maximum; kinetic friction is usually smaller than max static friction; friction opposes relative motion"
     }
    },
    {
     "id": "ph-fm-newton-06",
     "name": {
      "zh": "自由體圖",
      "en": "Free Body Diagram"
     },
     "knowledgeType": "concept",
     "formula": "畫出物體上所有外力",
     "dataSheet": false,
     "pitfall": {
      "zh": "只畫外力不畫內力；力從物體中心畫出；標注力的類型和大小",
      "en": "Draw only external forces, not internal ones; draw forces from the centre of the object; label type and magnitude"
     }
    },
    {
     "id": "ph-fm-newton-07",
     "name": {
      "zh": "張力",
      "en": "Tension"
     },
     "knowledgeType": "concept",
     "formula": "繩索張力沿繩方向，大小相等（理想繩）",
     "dataSheet": false,
     "pitfall": {
      "zh": "繩質量不計時繩內張力各處相等；滑輪無摩擦時兩側張力相等",
      "en": "Tension is the same everywhere in a massless string; tension is equal on both sides of a frictionless pulley"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-fm-momentum",
   "level": "topic",
   "domain": "PH-FM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "動量",
    "en": "Momentum"
   },
   "leaves": [
    {
     "id": "ph-fm-momentum-01",
     "name": {
      "zh": "動量定義",
      "en": "Momentum Definition"
     },
     "knowledgeType": "definition",
     "formula": "p = mv",
     "dataSheet": true,
     "pitfall": {
      "zh": "動量是向量，方向與速度相同；動量與參考系有關",
      "en": "Momentum is a vector, in the same direction as velocity; it depends on the reference frame"
     }
    },
    {
     "id": "ph-fm-momentum-02",
     "name": {
      "zh": "衡量",
      "en": "Impulse"
     },
     "knowledgeType": "definition",
     "formula": "衡量 = Ft = Δp",
     "dataSheet": false,
     "pitfall": {
      "zh": "衡量是力在時間上的累積；衡量改變動量",
      "en": "Impulse is the accumulation of force over time; impulse changes momentum"
     }
    },
    {
     "id": "ph-fm-momentum-03",
     "name": {
      "zh": "動量定理",
      "en": "Impulse-Momentum Theorem"
     },
     "knowledgeType": "law",
     "formula": "Ft = mv - mu",
     "dataSheet": false,
     "pitfall": {
      "zh": "F是平均淨力；衝量方向與動量變化方向相同",
      "en": "F is the average net force; the direction of impulse equals the direction of the change in momentum"
     }
    },
    {
     "id": "ph-fm-momentum-04",
     "name": {
      "zh": "動量守恆條件",
      "en": "Condition for Momentum Conservation"
     },
     "knowledgeType": "principle",
     "formula": "當淨外力=0時，系統總動量守恆",
     "dataSheet": false,
     "pitfall": {
      "zh": "只有在合外力為零時動量才守恆；內力不改變總動量",
      "en": "Momentum is conserved only when the net external force is zero; internal forces do not change total momentum"
     }
    },
    {
     "id": "ph-fm-momentum-05",
     "name": {
      "zh": "彈性與非彈性碰撞",
      "en": "Elastic and Inelastic Collisions"
     },
     "knowledgeType": "concept",
     "formula": "彈性：動量+動能守恆；非彈性：動量守恆但動能不守恆",
     "dataSheet": false,
     "pitfall": {
      "zh": "完全非彈性碰撞：物體粘在一起，動能損失最大；爆炸問題：動量守恆但動能增加",
      "en": "Perfectly inelastic collision: objects stick together, maximum KE loss; explosion: momentum conserved but KE increases"
     }
    }
   ],
   "weight": "high",
   "diff": 3
  },
  {
   "id": "ph-fm-conserve",
   "level": "topic",
   "domain": "PH-FM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "動量守恆",
    "en": "Conservation of Momentum"
   },
   "leaves": [
    {
     "id": "ph-fm-conserve-01",
     "name": {
      "zh": "動量守恆定律",
      "en": "Law of Conservation of Momentum"
     },
     "knowledgeType": "law",
     "formula": "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
     "dataSheet": false,
     "pitfall": {
      "zh": "系統合外力為零時適用；向量方程，要注意方向",
      "en": "Applies when the net external force on the system is zero; a vector equation — mind the directions"
     }
    },
    {
     "id": "ph-fm-conserve-02",
     "name": {
      "zh": "爆炸問題",
      "en": "Explosion Problems"
     },
     "knowledgeType": "concept",
     "formula": "初動量=0，故 m₁v₁ + m₂v₂ = 0",
     "dataSheet": false,
     "pitfall": {
      "zh": "兩物體動量大小相等方向相反；速度與質量成反比",
      "en": "Two bodies have equal momentum magnitudes in opposite directions; speeds are inversely proportional to masses"
     }
    },
    {
     "id": "ph-fm-conserve-03",
     "name": {
      "zh": "碰撞計算",
      "en": "Collision Calculations"
     },
     "knowledgeType": "formula",
     "formula": "一維碰撞用動量守恆；斜碰用分量守恆",
     "dataSheet": false,
     "pitfall": {
      "zh": "斜碰要分解成x和y方向；先畫矢量圖再列方程",
      "en": "For oblique collisions, resolve into x and y directions; draw a vector diagram before writing equations"
     }
    },
    {
     "id": "ph-fm-conserve-04",
     "name": {
      "zh": "反衝問題",
      "en": "Recoil Problems"
     },
     "knowledgeType": "concept",
     "formula": "槍/炮反衝：m槍v槍 = m子v子",
     "dataSheet": false,
     "pitfall": {
      "zh": "初動量為零；系統包括槍+子彈；反衝速度與子彈速度方向相反",
      "en": "Initial momentum is zero; the system includes the gun + bullet; the recoil velocity is opposite to the bullet velocity"
     }
    },
    {
     "id": "ph-fm-conserve-05",
     "name": {
      "zh": "火箭推進",
      "en": "Rocket Propulsion"
     },
     "knowledgeType": "concept",
     "formula": "基於動量守恆，噴出氣體產生推力",
     "dataSheet": false,
     "pitfall": {
      "zh": "不需要外界介質；推力來自噴出氣體的動量變化",
      "en": "No external medium is needed; thrust comes from the momentum change of the ejected gas"
     }
    }
   ],
   "weight": "high",
   "diff": 3
  },
  {
   "id": "ph-fm-work",
   "level": "topic",
   "domain": "PH-FM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "功與功率",
    "en": "Work and Power"
   },
   "leaves": [
    {
     "id": "ph-fm-work-01",
     "name": {
      "zh": "功的定義",
      "en": "Work Done"
     },
     "knowledgeType": "definition",
     "formula": "W = Fs cosθ",
     "dataSheet": true,
     "pitfall": {
      "zh": "力與位移垂直時不做功；重力做功與路徑無關",
      "en": "No work is done when force is perpendicular to displacement; work done by gravity is independent of path"
     }
    },
    {
     "id": "ph-fm-work-02",
     "name": {
      "zh": "功率",
      "en": "Power"
     },
     "knowledgeType": "definition",
     "formula": "P = W/t = Fv",
     "dataSheet": true,
     "pitfall": {
      "zh": "P=Fv中F與v同方向；平均功率用總功/總時間",
      "en": "In P = Fv, F and v must be in the same direction; average power = total work / total time"
     }
    },
    {
     "id": "ph-fm-work-03",
     "name": {
      "zh": "重力做功",
      "en": "Work Done by Gravity"
     },
     "knowledgeType": "formula",
     "formula": "W = mgh",
     "dataSheet": false,
     "pitfall": {
      "zh": "物體上升重力做負功；下落重力做正功；與路徑無關只看高度差",
      "en": "Gravity does negative work when an object rises and positive work when it falls; it depends only on the height difference, not the path"
     }
    },
    {
     "id": "ph-fm-work-04",
     "name": {
      "zh": "摩擦力做功",
      "en": "Work Done by Friction"
     },
     "knowledgeType": "formula",
     "formula": "W = fs",
     "dataSheet": false,
     "pitfall": {
      "zh": "摩擦力方向與位移相反時做負功；轉動摩擦力做功W = frθ",
      "en": "Friction does negative work when it opposes displacement; for a torque, W = τθ"
     }
    },
    {
     "id": "ph-fm-work-05",
     "name": {
      "zh": "彈力做功",
      "en": "Work Done by Spring Force"
     },
     "knowledgeType": "formula",
     "formula": "W = ½kx²",
     "dataSheet": false,
     "pitfall": {
      "zh": "彈力做功等於彈性勢能變化；伸長和壓縮都做正功（對彈簧）",
      "en": "Work done by a spring force equals the change in elastic potential energy; both stretching and compressing store energy"
     }
    },
    {
     "id": "ph-fm-work-06",
     "name": {
      "zh": "效率",
      "en": "Efficiency"
     },
     "knowledgeType": "concept",
     "formula": "效率 = 有用輸出/總輸入 × 100%",
     "dataSheet": false,
     "pitfall": {
      "zh": "效率永遠小於100%；能量轉換必有損失",
      "en": "Efficiency is always less than 100%; every energy conversion involves loss"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-fm-energy",
   "level": "topic",
   "domain": "PH-FM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "勢能與動能",
    "en": "Potential and Kinetic Energy"
   },
   "leaves": [
    {
     "id": "ph-fm-energy-01",
     "name": {
      "zh": "動能",
      "en": "Kinetic Energy"
     },
     "knowledgeType": "definition",
     "formula": "KE = ½mv²",
     "dataSheet": true,
     "pitfall": {
      "zh": "動能是標量；與速度平方成正比；静止時KE=0",
      "en": "Kinetic energy is a scalar; proportional to the square of speed; KE = 0 when at rest"
     }
    },
    {
     "id": "ph-fm-energy-02",
     "name": {
      "zh": "重力勢能",
      "en": "Gravitational Potential Energy"
     },
     "knowledgeType": "definition",
     "formula": "GPE = mgh",
     "dataSheet": true,
     "pitfall": {
      "zh": "相對於參考高度；h是相對高度差；可以為負值",
      "en": "Relative to a reference height; h is the relative height difference; can be negative"
     }
    },
    {
     "id": "ph-fm-energy-03",
     "name": {
      "zh": "彈性勢能",
      "en": "Elastic Potential Energy"
     },
     "knowledgeType": "definition",
     "formula": "EPE = ½kx²",
     "dataSheet": true,
     "pitfall": {
      "zh": "x是彈簧形變量（伸長或壓縮）；平衡位置EPE=0",
      "en": "x is the deformation (extension or compression); EPE = 0 at the equilibrium position"
     }
    },
    {
     "id": "ph-fm-energy-04",
     "name": {
      "zh": "機械能",
      "en": "Mechanical Energy"
     },
     "knowledgeType": "concept",
     "formula": "機械能 = KE + PE",
     "dataSheet": false,
     "pitfall": {
      "zh": "機械能包括動能和所有勢能；守恆條件：只有保守力做功",
      "en": "Mechanical energy includes kinetic and all potential energies; conserved only when work is done solely by conservative forces"
     }
    },
    {
     "id": "ph-fm-energy-05",
     "name": {
      "zh": "功能原理",
      "en": "Work-Energy Theorem"
     },
     "knowledgeType": "law",
     "formula": "W = ΔKE",
     "dataSheet": false,
     "pitfall": {
      "zh": "合外力做功等於動能變化；適用於任何力（保守+非保守）",
      "en": "Work done by the resultant force equals the change in kinetic energy; valid for any force (conservative + non-conservative)"
     }
    },
    {
     "id": "ph-fm-energy-06",
     "name": {
      "zh": "能量轉換",
      "en": "Energy Transformation"
     },
     "knowledgeType": "principle",
     "formula": "能量不能創造或消滅，只能轉換",
     "dataSheet": false,
     "pitfall": {
      "zh": "能量轉換過程中有損失（熱能/聲能）；永動機不可能實現",
      "en": "Energy is lost (heat/sound) during conversions; perpetual motion machines are impossible"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-fm-energy-conserve",
   "level": "topic",
   "domain": "PH-FM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "能量守恆",
    "en": "Conservation of Energy"
   },
   "leaves": [
    {
     "id": "ph-fm-energy-conserve-01",
     "name": {
      "zh": "能量守恆定律",
      "en": "Law of Conservation of Energy"
     },
     "knowledgeType": "law",
     "formula": "初總能量 = 末總能量",
     "dataSheet": false,
     "pitfall": {
      "zh": "系統總能量包括所有形式（動能+勢能+內能+聲能）",
      "en": "Total energy of a system includes all forms (KE + PE + internal + sound)"
     }
    },
    {
     "id": "ph-fm-energy-conserve-02",
     "name": {
      "zh": "機械能守恆",
      "en": "Conservation of Mechanical Energy"
     },
     "knowledgeType": "law",
     "formula": "½mv₁² + mgh₁ = ½mv₂² + mgh₂",
     "dataSheet": false,
     "pitfall": {
      "zh": "只有重力做功時適用；有摩擦力時機械能不守恆",
      "en": "Applies only when the only work done is by gravity; mechanical energy is not conserved when friction acts"
     }
    },
    {
     "id": "ph-fm-energy-conserve-03",
     "name": {
      "zh": "單擺能量守恆",
      "en": "Energy Conservation in Pendulum"
     },
     "knowledgeType": "concept",
     "formula": "最高點：PE最大，KE=0；最低點：KE最大，PE最小",
     "dataSheet": false,
     "pitfall": {
      "zh": "空氣阻力忽略時機械能守恆；振幅不會衰減",
      "en": "Mechanical energy is conserved when air resistance is ignored; the amplitude does not decay"
     }
    },
    {
     "id": "ph-fm-energy-conserve-04",
     "name": {
      "zh": "滑塊下斜面",
      "en": "Block Sliding Down Incline"
     },
     "knowledgeType": "concept",
     "formula": "mgh = ½mv² + 熱能（摩擦生熱）",
     "dataSheet": false,
     "pitfall": {
      "zh": "有摩擦時機械能不守恆；損失的機械能轉化為內能",
      "en": "With friction, mechanical energy is not conserved; the lost mechanical energy becomes internal energy"
     }
    },
    {
     "id": "ph-fm-energy-conserve-05",
     "name": {
      "zh": "彈簧系統能量",
      "en": "Energy in Spring-Mass System"
     },
     "knowledgeType": "concept",
     "formula": "EPE ↔ KE 不停轉換",
     "dataSheet": false,
     "pitfall": {
      "zh": "簡諧運動中總機械能守恆；動能和勢能互換但總和不變",
      "en": "In SHM the total mechanical energy is conserved; KE and PE interchange but the sum is constant"
     }
    },
    {
     "id": "ph-fm-energy-conserve-06",
     "name": {
      "zh": "能量損失",
      "en": "Energy Loss"
     },
     "knowledgeType": "concept",
     "formula": "損失 = 初機械能 - 末機械能",
     "dataSheet": false,
     "pitfall": {
      "zh": "非彈性碰撞中有動能損失；摩擦生熱導致能量損失",
      "en": "Inelastic collisions lose kinetic energy; friction generates heat, causing energy loss"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-wv-prop",
   "level": "topic",
   "domain": "PH-WV",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "波動性質",
    "en": "Properties of Waves"
   },
   "leaves": [
    {
     "id": "ph-wv-prop-01",
     "name": {
      "zh": "波的分類",
      "en": "Types of Waves"
     },
     "knowledgeType": "concept",
     "formula": "横波：振動⊥傳播方向；縱波：振動∥傳播方向",
     "dataSheet": false,
     "pitfall": {
      "zh": "水波是横波與縱波的混合；聲波是縱波；光是横波",
      "en": "Water waves are a mixture of transverse and longitudinal waves; sound is longitudinal; light is transverse"
     }
    },
    {
     "id": "ph-wv-prop-02",
     "name": {
      "zh": "波長與頻率",
      "en": "Wavelength and Frequency"
     },
     "knowledgeType": "definition",
     "formula": "波速 v = fλ",
     "dataSheet": true,
     "pitfall": {
      "zh": "頻率f由波源決定；波速v由介質決定；波長λ隨介質變化",
      "en": "Frequency f is set by the source; speed v is set by the medium; wavelength λ changes with the medium"
     }
    },
    {
     "id": "ph-wv-prop-03",
     "name": {
      "zh": "振幅與能量",
      "en": "Amplitude and Energy"
     },
     "knowledgeType": "concept",
     "formula": "能量∝振幅²×頻率²",
     "dataSheet": false,
     "pitfall": {
      "zh": "振幅越大能量越大；強度與振幅平方成正比",
      "en": "The larger the amplitude, the greater the energy; intensity is proportional to the square of amplitude"
     }
    },
    {
     "id": "ph-wv-prop-04",
     "name": {
      "zh": "波的反射",
      "en": "Reflection of Waves"
     },
     "knowledgeType": "law",
     "formula": "入射角=反射角",
     "dataSheet": false,
     "pitfall": {
      "zh": "反射波相位可能改變（固定端反射）或不變（自由端）",
      "en": "Reflected wave may change phase (fixed end) or not (free end)"
     }
    },
    {
     "id": "ph-wv-prop-05",
     "name": {
      "zh": "波的折射",
      "en": "Refraction of Waves"
     },
     "knowledgeType": "law",
     "formula": "入射波速/折射波速 = sin入射角/sin折射角",
     "dataSheet": false,
     "pitfall": {
      "zh": "從疏到密波速減小，折射角變小；深淺區折射導致波向改變",
      "en": "From a less dense to a denser medium the speed decreases and the refracted angle becomes smaller; refraction changes the wave direction"
     }
    },
    {
     "id": "ph-wv-prop-06",
     "name": {
      "zh": "波的衍射",
      "en": "Diffraction of Waves"
     },
     "knowledgeType": "concept",
     "formula": "波繞過障礙物傳播",
     "dataSheet": false,
     "pitfall": {
      "zh": "波長越大衍射越明顯；狄縫寬度接近波長時衍射最明顯",
      "en": "Diffraction is more obvious for longer wavelengths; most obvious when the slit width is close to the wavelength"
     }
    },
    {
     "id": "ph-wv-prop-07",
     "name": {
      "zh": "波的干涉",
      "en": "Interference of Waves"
     },
     "knowledgeType": "concept",
     "formula": "相長干涉：波程差=nλ；相消干涉：波程差=(n+½)λ",
     "dataSheet": false,
     "pitfall": {
      "zh": "兩波源要相干（同頻率同相位）；干涉圖樣是穩定的",
      "en": "The two sources must be coherent (same frequency and phase); the interference pattern is steady"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-wv-trans",
   "level": "topic",
   "domain": "PH-WV",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "波的傳播",
    "en": "Wave Propagation"
   },
   "leaves": [
    {
     "id": "ph-wv-trans-01",
     "name": {
      "zh": "波速",
      "en": "Wave Speed"
     },
     "knowledgeType": "definition",
     "formula": "v = fλ = Δs/Δt",
     "dataSheet": false,
     "pitfall": {
      "zh": "波速由介質性質決定；真空中光速c=3×10⁸m/s",
      "en": "Wave speed is determined by the properties of the medium; speed of light in vacuum c = 3×10⁸ m/s"
     }
    },
    {
     "id": "ph-wv-trans-02",
     "name": {
      "zh": "週期與頻率",
      "en": "Period and Frequency"
     },
     "knowledgeType": "definition",
     "formula": "f = 1/T",
     "dataSheet": false,
     "pitfall": {
      "zh": "週期T是完成一次振動的時間；頻率f是每秒振動次數",
      "en": "Period T is the time for one complete vibration; frequency f is the number of vibrations per second"
     }
    },
    {
     "id": "ph-wv-trans-03",
     "name": {
      "zh": "相位",
      "en": "Phase"
     },
     "knowledgeType": "concept",
     "formula": "描述波在周期中的位置",
     "dataSheet": false,
     "pitfall": {
      "zh": "相位差決定干涉性質；同相（相位差0或2π）相長；反相（相位差π）相消",
      "en": "Phase difference determines the type of interference; in phase (0 or 2π) → constructive; anti-phase (π) → destructive"
     }
    },
    {
     "id": "ph-wv-trans-04",
     "name": {
      "zh": "駐波",
      "en": "Standing Waves"
     },
     "knowledgeType": "concept",
     "formula": "波腹和波節相間排列",
     "dataSheet": false,
     "pitfall": {
      "zh": "入射波與反射波疊加形成；波腹振幅最大，波節靜止",
      "en": "Formed by the superposition of incident and reflected waves; antinodes have maximum amplitude, nodes are stationary"
     }
    },
    {
     "id": "ph-wv-trans-05",
     "name": {
      "zh": "波速公式",
      "en": "Wave Speed Formula"
     },
     "knowledgeType": "formula",
     "formula": "繩波：v=√(T/μ)；聲波：v=√(E/ρ)",
     "dataSheet": false,
     "pitfall": {
      "zh": "繩波張力T越大波速越大；聲波在固體中傳播最快",
      "en": "Larger tension T gives a larger wave speed on a string; sound travels fastest in solids"
     }
    }
   ],
   "weight": "mid",
   "diff": 2
  },
  {
   "id": "ph-wv-water",
   "level": "topic",
   "domain": "PH-WV",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "水波",
    "en": "Water Waves"
   },
   "leaves": [
    {
     "id": "ph-wv-water-01",
     "name": {
      "zh": "水波性質",
      "en": "Properties of Water Waves"
     },
     "knowledgeType": "concept",
     "formula": "水波是横波與縱波的混合",
     "dataSheet": false,
     "pitfall": {
      "zh": "水粒子運動軌跡是圓形；淺水波速度與深度有關",
      "en": "Water particles move in circular paths; the speed of shallow water waves depends on depth"
     }
    },
    {
     "id": "ph-wv-water-02",
     "name": {
      "zh": "波峰與波谷",
      "en": "Crest and Trough"
     },
     "knowledgeType": "definition",
     "formula": "波峰：最高點；波谷：最低點",
     "dataSheet": false,
     "pitfall": {
      "zh": "波峰和波谷是横波的概念；縱波是密部和疏部",
      "en": "Crests and troughs are transverse-wave concepts; longitudinal waves have compressions and rarefactions"
     }
    },
    {
     "id": "ph-wv-water-03",
     "name": {
      "zh": "水波實驗",
      "en": "Water Wave Experiments"
     },
     "knowledgeType": "concept",
     "formula": "利用水波槽觀察反射、折射、衍射、干涉",
     "dataSheet": false,
     "pitfall": {
      "zh": "閃頻燈頻率要調整到定格效果；波源頻率要穩定",
      "en": "Adjust the strobe frequency to freeze the wave; the source frequency must be steady"
     }
    },
    {
     "id": "ph-wv-water-04",
     "name": {
      "zh": "水波折射現象",
      "en": "Water Wave Refraction"
     },
     "knowledgeType": "concept",
     "formula": "淺水區速度變慢，波長變短，方向改變",
     "dataSheet": false,
     "pitfall": {
      "zh": "折射時頻率不變；入射角與折射角關係符合斯涅爾定律",
      "en": "Frequency is unchanged during refraction; the angles obey Snell's law"
     }
    }
   ],
   "weight": "mid",
   "diff": 2
  },
  {
   "id": "ph-wv-sound",
   "level": "topic",
   "domain": "PH-WV",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "聲波",
    "en": "Sound Waves"
   },
   "leaves": [
    {
     "id": "ph-wv-sound-01",
     "name": {
      "zh": "聲波性質",
      "en": "Properties of Sound"
     },
     "knowledgeType": "concept",
     "formula": "聲波是縱波（壓縮與稀疏）",
     "dataSheet": false,
     "pitfall": {
      "zh": "需要介質傳播；真空不能傳聲；聲速在氣體中最小，固體中最大",
      "en": "Requires a medium to travel; sound cannot travel in vacuum; speed is smallest in gases and largest in solids"
     }
    },
    {
     "id": "ph-wv-sound-02",
     "name": {
      "zh": "聲速",
      "en": "Speed of Sound"
     },
     "knowledgeType": "definition",
     "formula": "20°C空氣中：v ≈ 340 m/s",
     "dataSheet": false,
     "pitfall": {
      "zh": "溫度越高聲速越大；聲速在0°C約330m/s",
      "en": "Sound speed increases with temperature; about 330 m/s at 0°C"
     }
    },
    {
     "id": "ph-wv-sound-03",
     "name": {
      "zh": "音調與響度",
      "en": "Pitch and Loudness"
     },
     "knowledgeType": "concept",
     "formula": "音調由頻率決定；響度由振幅決定",
     "dataSheet": false,
     "pitfall": {
      "zh": "音調高不一定響度大；人耳聽覺範圍20Hz-20kHz",
      "en": "A higher pitch does not necessarily mean a louder sound; the audible range is 20 Hz – 20 kHz"
     }
    },
    {
     "id": "ph-wv-sound-04",
     "name": {
      "zh": "音色",
      "en": "Timbre"
     },
     "knowledgeType": "concept",
     "formula": "由波形複雜程度決定",
     "dataSheet": false,
     "pitfall": {
      "zh": "不同樂器即使音調響度相同，音色也不同；與泛音有關",
      "en": "Different instruments have different timbre even at the same pitch and loudness; related to overtones"
     }
    },
    {
     "id": "ph-wv-sound-05",
     "name": {
      "zh": "超聲波與次聲波",
      "en": "Ultrasound and Infrasound"
     },
     "knowledgeType": "concept",
     "formula": "超聲波>20kHz；次聲波<20Hz",
     "dataSheet": false,
     "pitfall": {
      "zh": "超聲波用於醫學成像；次聲波人聽不到但可引起不適",
      "en": "Ultrasound is used for medical imaging; infrasound is inaudible but can cause discomfort"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-wv-light",
   "level": "topic",
   "domain": "PH-WV",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "光的性質",
    "en": "Properties of Light"
   },
   "leaves": [
    {
     "id": "ph-wv-light-01",
     "name": {
      "zh": "光的本性",
      "en": "Nature of Light"
     },
     "knowledgeType": "concept",
     "formula": "光具有波粒二象性",
     "dataSheet": false,
     "pitfall": {
      "zh": "干涉衍射現象說明光是波；光電效應說明光是粒子",
      "en": "Interference and diffraction show that light is a wave; the photoelectric effect shows it behaves as particles"
     }
    },
    {
     "id": "ph-wv-light-02",
     "name": {
      "zh": "光的反射定律",
      "en": "Law of Reflection"
     },
     "knowledgeType": "law",
     "formula": "入射角=反射角，入射線反射線法線共面",
     "dataSheet": false,
     "pitfall": {
      "zh": "光路可逆；平面鏡成像虛像等大正立",
      "en": "Light paths are reversible; a plane mirror forms an equal-size, upright virtual image"
     }
    },
    {
     "id": "ph-wv-light-03",
     "name": {
      "zh": "光的折射定律",
      "en": "Law of Refraction"
     },
     "knowledgeType": "law",
     "formula": "n₁sin i = n₂sin r（斯涅爾定律）",
     "dataSheet": false,
     "pitfall": {
      "zh": "光從光疏到光密折射角變小；折射率n=c/v",
      "en": "From a less dense to a denser medium the refracted angle is smaller; refractive index n = c/v"
     }
    },
    {
     "id": "ph-wv-light-04",
     "name": {
      "zh": "全反射",
      "en": "Total Internal Reflection"
     },
     "knowledgeType": "concept",
     "formula": "條件：從光密到光疏，入射角>臨界角C",
     "dataSheet": false,
     "pitfall": {
      "zh": "臨界角C=sin⁻¹(1/n)；光導纖維應用全反射傳光",
      "en": "Critical angle C = sin⁻¹(1/n); optical fibres use total internal reflection to transmit light"
     }
    },
    {
     "id": "ph-wv-light-05",
     "name": {
      "zh": "色散",
      "en": "Dispersion"
     },
     "knowledgeType": "concept",
     "formula": "不同頻率光折射率不同，折射角不同",
     "dataSheet": false,
     "pitfall": {
      "zh": "稜鏡色散：紅光折射率最小，紫光最大；虹的成因",
      "en": "Prism dispersion: red has the smallest refractive index, violet the largest; this explains rainbows"
     }
    },
    {
     "id": "ph-wv-light-06",
     "name": {
      "zh": "薄膜干涉",
      "en": "Thin Film Interference"
     },
     "knowledgeType": "concept",
     "formula": "薄膜上下表面反射光疊加",
     "dataSheet": false,
     "pitfall": {
      "zh": "肥皂膜顏色、牛頓圈現象；增透膜利用干涉相消原理",
      "en": "Soap-film colours and Newton's rings; anti-reflection coatings use destructive interference"
     }
    },
    {
     "id": "ph-wv-light-07",
     "name": {
      "zh": "衍射光柵",
      "en": "Diffraction Grating"
     },
     "knowledgeType": "formula",
     "formula": "dsinθ = nλ",
     "dataSheet": false,
     "pitfall": {
      "zh": "d是光柵常數；n是譜線級數；中央亮紋最亮",
      "en": "d is the grating spacing; n is the order of the spectrum; the central bright fringe is brightest"
     }
    }
   ],
   "weight": "high",
   "diff": 3
  },
  {
   "id": "ph-em-charge",
   "level": "topic",
   "domain": "PH-EM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "電荷與導電",
    "en": "Electric Charge and Conduction"
   },
   "leaves": [
    {
     "id": "ph-em-charge-01",
     "name": {
      "zh": "電荷",
      "en": "Electric Charge"
     },
     "knowledgeType": "concept",
     "formula": "Q = Ne",
     "dataSheet": true,
     "pitfall": {
      "zh": "電荷量子化（最小單位e=1.6×10⁻¹⁹C）；電荷守恆",
      "en": "Charge is quantised (smallest unit e = 1.6×10⁻¹⁹ C); charge is conserved"
     }
    },
    {
     "id": "ph-em-charge-02",
     "name": {
      "zh": "庫侖定律",
      "en": "Coulomb's Law"
     },
     "knowledgeType": "law",
     "formula": "F = kQ₁Q₂/r²",
     "dataSheet": true,
     "pitfall": {
      "zh": "真空中適用；力沿連線方向；同性相斥異性相吸",
      "en": "Applies in vacuum; force acts along the line joining the charges; like charges repel, unlike charges attract"
     }
    },
    {
     "id": "ph-em-charge-03",
     "name": {
      "zh": "電場",
      "en": "Electric Field"
     },
     "knowledgeType": "definition",
     "formula": "E = F/Q",
     "dataSheet": false,
     "pitfall": {
      "zh": "E是向量，方向與正電荷受力方向相同；電場線從正到負",
      "en": "E is a vector, in the direction of the force on a positive charge; field lines run from positive to negative"
     }
    },
    {
     "id": "ph-em-charge-04",
     "name": {
      "zh": "電流",
      "en": "Electric Current"
     },
     "knowledgeType": "definition",
     "formula": "I = Q/t",
     "dataSheet": true,
     "pitfall": {
      "zh": "I是標量；方向規定為正電荷流動方向",
      "en": "I is a scalar; its conventional direction is the flow of positive charge"
     }
    },
    {
     "id": "ph-em-charge-05",
     "name": {
      "zh": "導電與絕緣",
      "en": "Conduction and Insulation"
     },
     "knowledgeType": "concept",
     "formula": "導體有自由電子；絕緣體電子被束縛",
     "dataSheet": false,
     "pitfall": {
      "zh": "半導體電導率可調控；超導體在低溫下電阻為零",
      "en": "The conductivity of semiconductors can be controlled; superconductors have zero resistance at low temperature"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-em-circuit",
   "level": "topic",
   "domain": "PH-EM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "電路",
    "en": "Electric Circuits"
   },
   "leaves": [
    {
     "id": "ph-em-circuit-01",
     "name": {
      "zh": "電壓",
      "en": "Voltage"
     },
     "knowledgeType": "definition",
     "formula": "V = W/Q",
     "dataSheet": true,
     "pitfall": {
      "zh": "電壓是單位電荷所做的功；也叫電勢差",
      "en": "Voltage is the work done per unit charge; also called potential difference"
     }
    },
    {
     "id": "ph-em-circuit-02",
     "name": {
      "zh": "歐姆定律",
      "en": "Ohm's Law"
     },
     "knowledgeType": "law",
     "formula": "V = IR",
     "dataSheet": true,
     "pitfall": {
      "zh": "只適用於純電阻電路；非歐姆導體（如二極管）不適用",
      "en": "Applies only to purely resistive circuits; does NOT apply to non-ohmic conductors (e.g. a diode)"
     }
    },
    {
     "id": "ph-em-circuit-03",
     "name": {
      "zh": "串聯電路",
      "en": "Series Circuits"
     },
     "knowledgeType": "concept",
     "formula": "I相同，V總=V₁+V₂，R總=R₁+R₂",
     "dataSheet": false,
     "pitfall": {
      "zh": "一個元件斷路全电路斷；電壓分配與電阻成正比",
      "en": "One broken component breaks the whole circuit; voltage is shared in proportion to resistance"
     }
    },
    {
     "id": "ph-em-circuit-04",
     "name": {
      "zh": "並聯電路",
      "en": "Parallel Circuits"
     },
     "knowledgeType": "concept",
     "formula": "V相同，I總=I₁+I₂，1/R總=1/R₁+1/R₂",
     "dataSheet": false,
     "pitfall": {
      "zh": "一個支路斷路其他仍通；電流分配與電阻成反比",
      "en": "One broken branch does not affect the others; current is shared in inverse proportion to resistance"
     }
    },
    {
     "id": "ph-em-circuit-05",
     "name": {
      "zh": "分壓器",
      "en": "Potential Divider"
     },
     "knowledgeType": "concept",
     "formula": "V₁ = V × R₁/(R₁+R₂)",
     "dataSheet": false,
     "pitfall": {
      "zh": "用於獲得可變電壓；負載效應會改變分壓比",
      "en": "Used to obtain a variable voltage; the loading effect changes the division ratio"
     }
    },
    {
     "id": "ph-em-circuit-06",
     "name": {
      "zh": "電路符號",
      "en": "Circuit Symbols"
     },
     "knowledgeType": "concept",
     "formula": "識別電源、電阻、開關、電錶等符號",
     "dataSheet": false,
     "pitfall": {
      "zh": "畫圖時規範使用符號；接線圖和電路圖要能互相轉換",
      "en": "Use standard symbols when drawing; be able to convert between wiring diagrams and circuit diagrams"
     }
    }
   ],
   "weight": "high",
   "diff": 3
  },
  {
   "id": "ph-em-resistance",
   "level": "topic",
   "domain": "PH-EM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "電阻",
    "en": "Resistance"
   },
   "leaves": [
    {
     "id": "ph-em-resistance-01",
     "name": {
      "zh": "電阻定義",
      "en": "Resistance Definition"
     },
     "knowledgeType": "definition",
     "formula": "R = V/I",
     "dataSheet": true,
     "pitfall": {
      "zh": "R是電阻本身屬性，不隨V和I變；定義式與歐姆定律不同",
      "en": "R is an intrinsic property of the resistor, independent of V and I; the defining equation differs from Ohm's law"
     }
    },
    {
     "id": "ph-em-resistance-02",
     "name": {
      "zh": "電阻定律",
      "en": "Resistivity Law"
     },
     "knowledgeType": "law",
     "formula": "R = ρL/A",
     "dataSheet": false,
     "pitfall": {
      "zh": "ρ是電阻率，與材料有關；L是長度，A是橫截面積",
      "en": "ρ is the resistivity, a property of the material; L is the length, A is the cross-sectional area"
     }
    },
    {
     "id": "ph-em-resistance-03",
     "name": {
      "zh": "電阻與溫度",
      "en": "Resistance and Temperature"
     },
     "knowledgeType": "concept",
     "formula": "金屬：溫度↑→R↑；半導體：溫度↑→R↓",
     "dataSheet": false,
     "pitfall": {
      "zh": "燈泡電阻冷態小於熱態；開啟瞬間電流大",
      "en": "A bulb has smaller resistance when cold than when hot; the initial current is large when switched on"
     }
    },
    {
     "id": "ph-em-resistance-04",
     "name": {
      "zh": "變阻器",
      "en": "Rheostat"
     },
     "knowledgeType": "concept",
     "formula": "滑線變阻器改變電路電阻",
     "dataSheet": false,
     "pitfall": {
      "zh": "限流式（串聯）和分壓式（並聯）；接線要一上一下",
      "en": "Two modes: limiting (in series) and potential-divider (in parallel); wire connections must go one above one below"
     }
    },
    {
     "id": "ph-em-resistance-05",
     "name": {
      "zh": "電阻測量",
      "en": "Resistance Measurement"
     },
     "knowledgeType": "concept",
     "formula": "伏安法：R=V/I",
     "dataSheet": false,
     "pitfall": {
      "zh": "內阻影響測量精度；惠斯通電橋更精確",
      "en": "Internal resistance affects measurement accuracy; a Wheatstone bridge is more precise"
     }
    },
    {
     "id": "ph-em-resistance-06",
     "name": {
      "zh": "超導",
      "en": "Superconductivity"
     },
     "knowledgeType": "concept",
     "formula": "低溫下電阻為零",
     "dataSheet": false,
     "pitfall": {
      "zh": "臨界溫度以上失去超導性；超導體排斥磁場（邁斯納效應）",
      "en": "Superconductivity is lost above the critical temperature; superconductors expel magnetic fields (Meissner effect)"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-em-power",
   "level": "topic",
   "domain": "PH-EM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "電功率與電能",
    "en": "Electric Power and Energy"
   },
   "leaves": [
    {
     "id": "ph-em-power-01",
     "name": {
      "zh": "電功率",
      "en": "Electric Power"
     },
     "knowledgeType": "definition",
     "formula": "P = VI = I²R = V²/R",
     "dataSheet": true,
     "pitfall": {
      "zh": "P=I²R和P=V²/R只適用於純電阻；非純電阻只能用P=VI",
      "en": "P = I²R and P = V²/R apply only to pure resistors; for non-pure-resistive circuits use only P = VI"
     }
    },
    {
     "id": "ph-em-power-02",
     "name": {
      "zh": "電能",
      "en": "Electrical Energy"
     },
     "knowledgeType": "definition",
     "formula": "E = VIt = Pt",
     "dataSheet": true,
     "pitfall": {
      "zh": "電能用千瓦時(kWh)計量；1kWh=3.6×10⁶J",
      "en": "Electrical energy is measured in kilowatt-hours (kWh); 1 kWh = 3.6×10⁶ J"
     }
    },
    {
     "id": "ph-em-power-03",
     "name": {
      "zh": "焦耳定律",
      "en": "Joule's Law"
     },
     "knowledgeType": "law",
     "formula": "Q = I²Rt",
     "dataSheet": true,
     "pitfall": {
      "zh": "電流熱效應；適用於所有導體；與電功率P=I²R一致",
      "en": "The heating effect of a current; applies to all conductors; consistent with P = I²R"
     }
    },
    {
     "id": "ph-em-power-04",
     "name": {
      "zh": "額定功率",
      "en": "Rated Power"
     },
     "knowledgeType": "concept",
     "formula": "用电器正常工作時的功率",
     "dataSheet": false,
     "pitfall": {
      "zh": "電壓低於額定值時功率不足；高於額定值可能損壞",
      "en": "Below the rated voltage the power is insufficient; above it the device may be damaged"
     }
    },
    {
     "id": "ph-em-power-05",
     "name": {
      "zh": "電費計算",
      "en": "Electricity Bill"
     },
     "knowledgeType": "formula",
     "formula": "電費 = (功率×時間×電價)",
     "dataSheet": false,
     "pitfall": {
      "zh": "注意單位換算（W→kW）；峰谷電價不同",
      "en": "Mind unit conversion (W → kW); peak and off-peak tariffs differ"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-em-force",
   "level": "topic",
   "domain": "PH-EM",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "電磁力",
    "en": "Electromagnetic Force"
   },
   "leaves": [
    {
     "id": "ph-em-force-01",
     "name": {
      "zh": "電流磁效應",
      "en": "Magnetic Effect of Current"
     },
     "knowledgeType": "concept",
     "formula": "電流周圍產生磁場",
     "dataSheet": false,
     "pitfall": {
      "zh": "直線電流磁場用右手螺旋定則；圓形電流磁場用安培定則",
      "en": "Use the right-hand grip rule for a straight current; use the right-hand rule for a circular current"
     }
    },
    {
     "id": "ph-em-force-02",
     "name": {
      "zh": "電流受力",
      "en": "Force on Current-Carrying Conductor"
     },
     "knowledgeType": "formula",
     "formula": "F = BIL sinθ",
     "dataSheet": true,
     "pitfall": {
      "zh": "B、I、F三者互相垂直；用左手定則判斷方向",
      "en": "B, I and F are mutually perpendicular; use Fleming's left-hand rule for the direction"
     }
    },
    {
     "id": "ph-em-force-03",
     "name": {
      "zh": "電動機原理",
      "en": "Electric Motor Principle"
     },
     "knowledgeType": "principle",
     "formula": "通電線圈在磁場中受力轉動",
     "dataSheet": false,
     "pitfall": {
      "zh": "換向器改變電流方向；電能轉化為機械能",
      "en": "The commutator reverses the current direction; electrical energy is converted into mechanical energy"
     }
    },
    {
     "id": "ph-em-force-04",
     "name": {
      "zh": "磁感應強度",
      "en": "Magnetic Flux Density"
     },
     "knowledgeType": "definition",
     "formula": "B = F/IL",
     "dataSheet": false,
     "pitfall": {
      "zh": "B是向量；單位特斯拉(T)；1T=1N/(A·m)",
      "en": "B is a vector; unit tesla (T); 1 T = 1 N/(A·m)"
     }
    },
    {
     "id": "ph-em-force-05",
     "name": {
      "zh": "帶電粒子在磁場中運動",
      "en": "Charged Particle in Magnetic Field"
     },
     "knowledgeType": "formula",
     "formula": "F = qvB（v⊥B時）",
     "dataSheet": false,
     "pitfall": {
      "zh": "洛倫茲力不做功；粒子做勻速圓周運動；半徑r=mv/qB",
      "en": "The Lorentz force does no work; the particle moves in uniform circular motion; radius r = mv/qB"
     }
    }
   ],
   "weight": "high",
   "diff": 3
  },
  {
   "id": "ph-em-induction",
   "level": "topic",
   "domain": "PH-EM",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "電磁感應",
    "en": "Electromagnetic Induction"
   },
   "leaves": [
    {
     "id": "ph-em-induction-01",
     "name": {
      "zh": "法拉第定律",
      "en": "Faraday's Law"
     },
     "knowledgeType": "law",
     "formula": "感應電動勢 ε = -N(ΔΦ/Δt)",
     "dataSheet": false,
     "pitfall": {
      "zh": "磁通量變化產生感應電動勢；負號表示楞次定律",
      "en": "A change in magnetic flux induces an e.m.f.; the negative sign reflects Lenz's law"
     }
    },
    {
     "id": "ph-em-induction-02",
     "name": {
      "zh": "楞次定律",
      "en": "Lenz's Law"
     },
     "knowledgeType": "law",
     "formula": "感應電流方向阻碍磁通量變化",
     "dataSheet": false,
     "pitfall": {
      "zh": "用右手定則判斷感應電流方向；能量守恆體現",
      "en": "Use the right-hand rule to find the direction of the induced current; reflects energy conservation"
     }
    },
    {
     "id": "ph-em-induction-03",
     "name": {
      "zh": "發電機原理",
      "en": "Generator Principle"
     },
     "knowledgeType": "principle",
     "formula": "線圈在磁場中轉動產生交流電",
     "dataSheet": false,
     "pitfall": {
      "zh": "機械能轉化為電能；滑環產生交流電，換向器產生直流電",
      "en": "Mechanical energy is converted into electrical energy; slip rings produce AC, a commutator produces DC"
     }
    },
    {
     "id": "ph-em-induction-04",
     "name": {
      "zh": "變壓器",
      "en": "Transformer"
     },
     "knowledgeType": "concept",
     "formula": "V₁/V₂ = N₁/N₂, I₁/I₂ = N₂/N₁",
     "dataSheet": false,
     "pitfall": {
      "zh": "只適用於交流電；理想變壓器效率100%；升壓電流降，降壓電流升",
      "en": "Works with AC only; an ideal transformer has 100% efficiency; step-up lowers current, step-down raises it"
     }
    },
    {
     "id": "ph-em-induction-05",
     "name": {
      "zh": "渦電流",
      "en": "Eddy Current"
     },
     "knowledgeType": "concept",
     "formula": "在導體內部產生的環形感應電流",
     "dataSheet": false,
     "pitfall": {
      "zh": "渦電流產生熱量；變壓器用分層鐵芯減小渦流損失",
      "en": "Eddy currents generate heat; transformers use laminated cores to reduce eddy-current loss"
     }
    },
    {
     "id": "ph-em-induction-06",
     "name": {
      "zh": "自感應",
      "en": "Self-Induction"
     },
     "knowledgeType": "concept",
     "formula": "線圈自身電流變化產生感應電動勢",
     "dataSheet": false,
     "pitfall": {
      "zh": "自感係數L與線圈匝數有關；電感儲存磁能",
      "en": "Self-inductance L depends on the number of turns; an inductor stores magnetic energy"
     }
    }
   ],
   "weight": "high",
   "diff": 3
  },
  {
   "id": "ph-rp-decay",
   "level": "topic",
   "domain": "PH-RP",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "放射衰變",
    "en": "Radioactive Decay"
   },
   "leaves": [
    {
     "id": "ph-rp-decay-01",
     "name": {
      "zh": "放射性",
      "en": "Radioactivity"
     },
     "knowledgeType": "concept",
     "formula": "原子核自發放出射線",
     "dataSheet": false,
     "pitfall": {
      "zh": "不受物理化學條件影響；是核現象不是化學現象",
      "en": "Not affected by physical or chemical conditions; it is a nuclear, not a chemical, phenomenon"
     }
    },
    {
     "id": "ph-rp-decay-02",
     "name": {
      "zh": "三種放射線",
      "en": "Three Types of Radiation"
     },
     "knowledgeType": "concept",
     "formula": "α：氦核；β：高能電子；γ：電磁波",
     "dataSheet": false,
     "pitfall": {
      "zh": "α穿透力最弱，電離能力最強；γ穿透力最強，電離能力最弱",
      "en": "α has the weakest penetration but the strongest ionising power; γ has the strongest penetration and weakest ionising power"
     }
    },
    {
     "id": "ph-rp-decay-03",
     "name": {
      "zh": "α衰變",
      "en": "Alpha Decay"
     },
     "knowledgeType": "formula",
     "formula": "ᴬX → ᴬ⁻⁴Y + ⁴₂He",
     "dataSheet": false,
     "pitfall": {
      "zh": "質量數減4，質子數減2；氦核就是α粒子",
      "en": "Mass number decreases by 4, proton number by 2; a helium nucleus is an α particle"
     }
    },
    {
     "id": "ph-rp-decay-04",
     "name": {
      "zh": "β衰變",
      "en": "Beta Decay"
     },
     "knowledgeType": "formula",
     "formula": "ᴬX → ᴬY + ⁰₋₁e",
     "dataSheet": false,
     "pitfall": {
      "zh": "質量數不變，質子數加1；中子轉變為質子和電子",
      "en": "Mass number is unchanged, proton number increases by 1; a neutron becomes a proton and an electron"
     }
    },
    {
     "id": "ph-rp-decay-05",
     "name": {
      "zh": "γ衰變",
      "en": "Gamma Decay"
     },
     "knowledgeType": "concept",
     "formula": "原子核放出γ光子，能量降低",
     "dataSheet": false,
     "pitfall": {
      "zh": "質量數和質子數都不變；只是能量狀態改變",
      "en": "Both mass number and proton number are unchanged; only the energy state changes"
     }
    },
    {
     "id": "ph-rp-decay-06",
     "name": {
      "zh": "半衰期",
      "en": "Half-Life"
     },
     "knowledgeType": "definition",
     "formula": "N = N₀(1/2)^(t/T)",
     "dataSheet": false,
     "pitfall": {
      "zh": "半衰期是放射性元素特性；不受外界條件影響；用於年代測定",
      "en": "Half-life is a property of the radioactive element; unaffected by external conditions; used for dating"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  },
  {
   "id": "ph-rp-isotope",
   "level": "topic",
   "domain": "PH-RP",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "同位素",
    "en": "Isotopes"
   },
   "leaves": [
    {
     "id": "ph-rp-isotope-01",
     "name": {
      "zh": "同位素定義",
      "en": "Isotope Definition"
     },
     "knowledgeType": "definition",
     "formula": "質子數相同中子數不同的原子",
     "dataSheet": false,
     "pitfall": {
      "zh": "化學性質相同；物理性質不同",
      "en": "Same chemical properties; different physical properties"
     }
    },
    {
     "id": "ph-rp-isotope-02",
     "name": {
      "zh": "穩定同位素",
      "en": "Stable Isotopes"
     },
     "knowledgeType": "concept",
     "formula": "不發生放射性衰變的同位素",
     "dataSheet": false,
     "pitfall": {
      "zh": "大多數元素都有穩定同位素；碳-12是碳的穩定同位素",
      "en": "Most elements have stable isotopes; carbon-12 is a stable isotope of carbon"
     }
    },
    {
     "id": "ph-rp-isotope-03",
     "name": {
      "zh": "放射性同位素",
      "en": "Radioactive Isotopes"
     },
     "knowledgeType": "concept",
     "formula": "自發衰變的同位素",
     "dataSheet": false,
     "pitfall": {
      "zh": "碳-14用於碳測年；鈷-60用於放射治療",
      "en": "Carbon-14 is used for carbon dating; cobalt-60 is used for radiotherapy"
     }
    },
    {
     "id": "ph-rp-isotope-04",
     "name": {
      "zh": "示蹤劑",
      "en": "Tracers"
     },
     "knowledgeType": "concept",
     "formula": "放射性同位素追蹤物質去向",
     "dataSheet": false,
     "pitfall": {
      "zh": "醫學診斷（掃描）；農業（追蹤肥料吸收）；工業（檢漏）",
      "en": "Medical diagnosis (scanning); agriculture (tracing fertiliser uptake); industry (leak detection)"
     }
    },
    {
     "id": "ph-rp-isotope-05",
     "name": {
      "zh": "碳測年",
      "en": "Carbon Dating"
     },
     "knowledgeType": "formula",
     "formula": "t = T·log₂(N₀/N)",
     "dataSheet": false,
     "pitfall": {
      "zh": "基於碳-14半衰期5730年；只適用於有機物；誤差隨年代增大",
      "en": "Based on the 5730-year half-life of carbon-14; applies only to organic matter; error grows with age"
     }
    }
   ],
   "weight": "mid",
   "diff": 1
  },
  {
   "id": "ph-rp-application",
   "level": "topic",
   "domain": "PH-RP",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "放射性在生活中的應用",
    "en": "Applications of Radioactivity"
   },
   "leaves": [
    {
     "id": "ph-rp-application-01",
     "name": {
      "zh": "放射治療",
      "en": "Radiotherapy"
     },
     "knowledgeType": "concept",
     "formula": "γ射線或高能粒子殺死癌細胞",
     "dataSheet": false,
     "pitfall": {
      "zh": "鈷-60常用源；精確照射避免傷害健康組織；副作用如脱发噁心",
      "en": "Cobalt-60 is a common source; precise targeting avoids damaging healthy tissue; side effects such as hair loss and nausea"
     }
    },
    {
     "id": "ph-rp-application-02",
     "name": {
      "zh": "工業探傷",
      "en": "Industrial Radiography"
     },
     "knowledgeType": "concept",
     "formula": "γ射線檢測金屬內部缺陷",
     "dataSheet": false,
     "pitfall": {
      "zh": "穿透金屬檢測焊接裂縫；無損檢測方法",
      "en": "Detects weld cracks by penetrating metal; a non-destructive testing method"
     }
    },
    {
     "id": "ph-rp-application-03",
     "name": {
      "zh": "煙霧探測器",
      "en": "Smoke Detector"
     },
     "knowledgeType": "concept",
     "formula": "α射線電離空氣檢測煙霧",
     "dataSheet": false,
     "pitfall": {
      "zh": "α射線被煙霧粒子吸收改變電流；警報響起",
      "en": "α rays are absorbed by smoke particles, changing the current; the alarm sounds"
     }
    },
    {
     "id": "ph-rp-application-04",
     "name": {
      "zh": "核能發電",
      "en": "Nuclear Power Generation"
     },
     "knowledgeType": "concept",
     "formula": "核裂變產生熱能驅動渦輪",
     "dataSheet": false,
     "pitfall": {
      "zh": "核燃料如鈾-235；可控裂變鏈式反應；優點清潔高效，缺點放射性廢料處理",
      "en": "Nuclear fuel such as uranium-235; controlled fission chain reaction; clean & efficient, but radioactive waste disposal is a drawback"
     }
    },
    {
     "id": "ph-rp-application-05",
     "name": {
      "zh": "輻射防護",
      "en": "Radiation Protection"
     },
     "knowledgeType": "concept",
     "formula": "時間、距離、屏蔽三原則",
     "dataSheet": false,
     "pitfall": {
      "zh": "減少暴露時間；增加距離；使用鉛或混凝土屏蔽；劑量限制",
      "en": "Reduce exposure time; increase distance; use lead or concrete shielding; dose limits"
     }
    }
   ],
   "weight": "low",
   "diff": 1
  },
  {
   "id": "ph-as-astro",
   "level": "topic",
   "domain": "PH-AS",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "天文學",
    "en": "Astronomy"
   },
   "leaves": [
    {
     "id": "ph-as-astro-01",
     "name": {
      "zh": "天體運動",
      "en": "Celestial Motion"
     },
     "knowledgeType": "concept",
     "formula": "地球自轉→日月星辰東升西落；公轉→四季變化",
     "dataSheet": false,
     "pitfall": {
      "zh": "北極星位置不變；恆星日比太陽日短4分鐘",
      "en": "Polaris appears fixed; the sidereal day is 4 minutes shorter than the solar day"
     }
    },
    {
     "id": "ph-as-astro-02",
     "name": {
      "zh": "月相",
      "en": "Moon Phases"
     },
     "knowledgeType": "concept",
     "formula": "新月→上弦→滿月→下弦→新月",
     "dataSheet": false,
     "pitfall": {
      "zh": "月相由太陽地球月球相對位置決定；月相周期約29.5天",
      "en": "Lunar phases are set by the relative positions of the Sun, Earth and Moon; the lunar month is about 29.5 days"
     }
    },
    {
     "id": "ph-as-astro-03",
     "name": {
      "zh": "日食月食",
      "en": "Solar and Lunar Eclipses"
     },
     "knowledgeType": "concept",
     "formula": "日食：月球在地球和太陽之間；月食：地球在月球和太陽之間",
     "dataSheet": false,
     "pitfall": {
      "zh": "日食只有在新月時發生；月食只有在滿月時發生；不每次都發生因為軌道傾角",
      "en": "A solar eclipse occurs only at new moon; a lunar eclipse only at full moon; not every month because of the orbital tilt"
     }
    },
    {
     "id": "ph-as-astro-04",
     "name": {
      "zh": "行星運動",
      "en": "Planetary Motion"
     },
     "knowledgeType": "concept",
     "formula": "行星繞太陽橢圓軌道；開普勒三定律",
     "dataSheet": false,
     "pitfall": {
      "zh": "行星越靠近太陽速度越快；橢圓軌道太陽在一個焦點上",
      "en": "Planets move faster when closer to the Sun; orbits are elliptical with the Sun at one focus"
     }
    },
    {
     "id": "ph-as-astro-05",
     "name": {
      "zh": "恆星演化",
      "en": "Stellar Evolution"
     },
     "knowledgeType": "concept",
     "formula": "星雲→原恆星→主序星→紅巨星→白矮星/中子星/黑洞",
     "dataSheet": false,
     "pitfall": {
      "zh": "演化路徑由質量決定；太陽最終成為白矮星",
      "en": "The evolution path is set by mass; the Sun will eventually become a white dwarf"
     }
    },
    {
     "id": "ph-as-astro-06",
     "name": {
      "zh": "大爆炸理論",
      "en": "Big Bang Theory"
     },
     "knowledgeType": "concept",
     "formula": "宇宙起源於約138億年前的一次大爆炸",
     "dataSheet": false,
     "pitfall": {
      "zh": "證據包括宇宙膨脹、宇宙微波背景輻射；哈勃定律支持膨脹說",
      "en": "Evidence includes cosmic expansion and the cosmic microwave background; Hubble's law supports expansion"
     }
    }
   ],
   "weight": "mid",
   "diff": 2
  },
  {
   "id": "ph-aw-atomic",
   "level": "topic",
   "domain": "PH-AW",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "原子世界",
    "en": "Atomic World"
   },
   "leaves": [
    {
     "id": "ph-aw-atomic-01",
     "name": {
      "zh": "原子模型",
      "en": "Atomic Models"
     },
     "knowledgeType": "concept",
     "formula": "湯姆遜模型→盧瑟福模型→波爾模型→量子力學模型",
     "dataSheet": false,
     "pitfall": {
      "zh": "盧瑟福實驗發現原子核；波爾解釋氫光譜",
      "en": "Rutherford's experiment revealed the nucleus; Bohr explained the hydrogen spectrum"
     }
    },
    {
     "id": "ph-aw-atomic-02",
     "name": {
      "zh": "電子排列",
      "en": "Electron Arrangement"
     },
     "knowledgeType": "concept",
     "formula": "電子分層排列；每層最多2n²個電子",
     "dataSheet": false,
     "pitfall": {
      "zh": "最外層電子決定化學性質；穩定結構8個電子（氫2個）",
      "en": "The outermost electrons determine chemical properties; the stable arrangement is 8 electrons (2 for hydrogen)"
     }
    },
    {
     "id": "ph-aw-atomic-03",
     "name": {
      "zh": "波粒二象性",
      "en": "Wave-Particle Duality"
     },
     "knowledgeType": "concept",
     "formula": "物質既具有粒子性又具有波動性",
     "dataSheet": false,
     "pitfall": {
      "zh": "德布羅意波長λ=h/p；電子衍射實驗證實波動性",
      "en": "de Broglie wavelength λ = h/p; electron diffraction confirms wave behaviour"
     }
    },
    {
     "id": "ph-aw-atomic-04",
     "name": {
      "zh": "不確定原理",
      "en": "Uncertainty Principle"
     },
     "knowledgeType": "law",
     "formula": "Δx·Δp ≥ h/4π",
     "dataSheet": false,
     "pitfall": {
      "zh": "海森堡提出；無法同時精確測量位置和動量；測量精度受限於普朗克常數",
      "en": "Proposed by Heisenberg; position and momentum cannot both be measured precisely; precision is limited by Planck's constant"
     }
    },
    {
     "id": "ph-aw-atomic-05",
     "name": {
      "zh": "光電效應",
      "en": "Photoelectric Effect"
     },
     "knowledgeType": "concept",
     "formula": "金屬表面受光照射發射電子",
     "dataSheet": false,
     "pitfall": {
      "zh": "愛因斯坦解釋：光由光子組成，E=hf；存在截止頻率",
      "en": "Einstein's explanation: light consists of photons, E = hf; there is a cutoff frequency"
     }
    },
    {
     "id": "ph-aw-atomic-06",
     "name": {
      "zh": "激光",
      "en": "Lasers"
     },
     "knowledgeType": "concept",
     "formula": "受激輻射產生相干光",
     "dataSheet": false,
     "pitfall": {
      "zh": "單色性、方向性、相干性；應用於通信、醫療、工業",
      "en": "Monochromatic, directional and coherent; used in communication, medicine and industry"
     }
    }
   ],
   "weight": "mid",
   "diff": 3
  },
  {
   "id": "ph-ee-energy",
   "level": "topic",
   "domain": "PH-EE",
   "grades": [
    "S5"
   ],
   "name": {
    "zh": "能量與能源的利用",
    "en": "Energy and Use of Energy"
   },
   "leaves": [
    {
     "id": "ph-ee-energy-01",
     "name": {
      "zh": "能源分類",
      "en": "Energy Sources"
     },
     "knowledgeType": "concept",
     "formula": "可再生能源：太陽能、風能、水能；不可再生：煤、石油、天然氣",
     "dataSheet": false,
     "pitfall": {
      "zh": "可再生能源有儘量但功率密度低；化石燃料釋放CO₂",
      "en": "Renewable energy is clean but has low power density; fossil fuels release CO₂"
     }
    },
    {
     "id": "ph-ee-energy-02",
     "name": {
      "zh": "發電原理",
      "en": "Power Generation"
     },
     "knowledgeType": "concept",
     "formula": "化學能→熱能→機械能→電能",
     "dataSheet": false,
     "pitfall": {
      "zh": "火力發電效率低（約35%）；燃氣輪機效率高於蒸汽輪機",
      "en": "Thermal power stations have low efficiency (about 35%); gas turbines are more efficient than steam turbines"
     }
    },
    {
     "id": "ph-ee-energy-03",
     "name": {
      "zh": "太陽能",
      "en": "Solar Energy"
     },
     "knowledgeType": "concept",
     "formula": "太陽能電池：光能直接轉化為電能",
     "dataSheet": false,
     "pitfall": {
      "zh": "受天氣和時間限制；能量密度低；需要儲能系統配套",
      "en": "Limited by weather and time of day; low energy density; needs energy storage systems"
     }
    },
    {
     "id": "ph-ee-energy-04",
     "name": {
      "zh": "風能",
      "en": "Wind Energy"
     },
     "knowledgeType": "concept",
     "formula": "風力驅動渦輪發電",
     "dataSheet": false,
     "pitfall": {
      "zh": "受地理位置限制；噪音和視覺污染；風速不穩定導致輸出波動",
      "en": "Limited by location; noise and visual pollution; unstable wind speed causes output fluctuation"
     }
    },
    {
     "id": "ph-ee-energy-05",
     "name": {
      "zh": "核能",
      "en": "Nuclear Energy"
     },
     "knowledgeType": "concept",
     "formula": "核裂變釋放巨大能量",
     "dataSheet": false,
     "pitfall": {
      "zh": "優點：能量密度高、無溫室氣體；缺點：放射性廢料、安全隱患、成本高",
      "en": "Advantages: high energy density, no greenhouse gases; disadvantages: radioactive waste, safety risks, high cost"
     }
    },
    {
     "id": "ph-ee-energy-06",
     "name": {
      "zh": "能源效率",
      "en": "Energy Efficiency"
     },
     "knowledgeType": "concept",
     "formula": "提高能源利用效率，減少浪費",
     "dataSheet": false,
     "pitfall": {
      "zh": "節能與開發新能源同樣重要；建築節能、工業節能、交通節能",
      "en": "Energy saving is as important as developing new sources; applies to buildings, industry and transport"
     }
    }
   ],
   "weight": "low",
   "diff": 1
  },
  {
   "id": "ph-mp-medical",
   "level": "topic",
   "domain": "PH-MP",
   "grades": [
    "S6"
   ],
   "name": {
    "zh": "醫學物理",
    "en": "Medical Physics"
   },
   "leaves": [
    {
     "id": "ph-mp-medical-01",
     "name": {
      "zh": "X射線成像",
      "en": "X-ray Imaging"
     },
     "knowledgeType": "concept",
     "formula": "X射線穿透人體，骨骼吸收更多",
     "dataSheet": false,
     "pitfall": {
      "zh": "適用於骨折檢測；過量輻射有害；鉛屏蔽防護",
      "en": "Used for fracture detection; excessive radiation is harmful; lead shielding for protection"
     }
    },
    {
     "id": "ph-mp-medical-02",
     "name": {
      "zh": "CT掃描",
      "en": "CT Scan"
     },
     "knowledgeType": "concept",
     "formula": "X射線斷層成像",
     "dataSheet": false,
     "pitfall": {
      "zh": "三維成像；輻射劑量高於普通X光；軟組織對比度增強",
      "en": "3D imaging; radiation dose higher than ordinary X-rays; better soft-tissue contrast"
     }
    },
    {
     "id": "ph-mp-medical-03",
     "name": {
      "zh": "超聲波",
      "en": "Ultrasound"
     },
     "knowledgeType": "concept",
     "formula": "高頻聲波成像",
     "dataSheet": false,
     "pitfall": {
      "zh": "無輻射傷害；實時成像；適用於胎兒檢查；分辨力受限於頻率",
      "en": "No radiation harm; real-time imaging; used for fetal checks; resolution limited by frequency"
     }
    },
    {
     "id": "ph-mp-medical-04",
     "name": {
      "zh": "MRI",
      "en": "Magnetic Resonance Imaging"
     },
     "knowledgeType": "concept",
     "formula": "核磁共振成像",
     "dataSheet": false,
     "pitfall": {
      "zh": "無輻射；軟組織對比度優於CT；金屬植入物禁忌；成本高",
      "en": "No radiation; soft-tissue contrast better than CT; metal implants are a contraindication; high cost"
     }
    },
    {
     "id": "ph-mp-medical-05",
     "name": {
      "zh": "放射治療",
      "en": "Radiation Therapy"
     },
     "knowledgeType": "concept",
     "formula": "高能射線殺死癌細胞",
     "dataSheet": false,
     "pitfall": {
      "zh": "精確定位腫瘤；保護周圍健康組織；副作用如皮膚紅、疲勞",
      "en": "Precise targeting of tumours; protects surrounding healthy tissue; side effects such as skin redness and fatigue"
     }
    },
    {
     "id": "ph-mp-medical-06",
     "name": {
      "zh": "核醫學",
      "en": "Nuclear Medicine"
     },
     "knowledgeType": "concept",
     "formula": "放射性同位素診斷和治療",
     "dataSheet": false,
     "pitfall": {
      "zh": "示蹤劑聚集在特定組織；PET掃描檢測代謝；碘-131治療甲狀腺癌",
      "en": "Tracers accumulate in specific tissues; PET scans detect metabolism; iodine-131 treats thyroid cancer"
     }
    }
   ],
   "weight": "low",
   "diff": 2
  },
  {
   "id": "ph-lab-skills",
   "level": "topic",
   "domain": "PH-LAB",
   "grades": [
    "S4",
    "S5",
    "S6"
   ],
   "name": {
    "zh": "實驗技能",
    "en": "Experimental Skills"
   },
   "leaves": [
    {
     "id": "ph-lab-skills-01",
     "name": {
      "zh": "測量與讀數",
      "en": "Measurement and Reading"
     },
     "knowledgeType": "concept",
     "formula": "讀數要估計到最小分度值的1/10",
     "dataSheet": false,
     "pitfall": {
      "zh": "視線要垂直刻度；避免視差；零點校準",
      "en": "Eyes must be perpendicular to the scale; avoid parallax error; calibrate the zero point"
     }
    },
    {
     "id": "ph-lab-skills-02",
     "name": {
      "zh": "誤差分析",
      "en": "Error Analysis"
     },
     "knowledgeType": "concept",
     "formula": "系統誤差可校正；隨機誤差多次測量求平均",
     "dataSheet": false,
     "pitfall": {
      "zh": "系統誤差影響準確度；隨機誤差影響精密度；有效數字表示不確定度",
      "en": "Systematic errors affect accuracy; random errors affect precision; significant figures express uncertainty"
     }
    },
    {
     "id": "ph-lab-skills-03",
     "name": {
      "zh": "數據記錄",
      "en": "Data Recording"
     },
     "knowledgeType": "concept",
     "formula": "表格記錄原始數據；標注單位",
     "dataSheet": false,
     "pitfall": {
      "zh": "不要修改原始數據；記錄所有觀測；注明實驗條件",
      "en": "Do not modify raw data; record all observations; note the experimental conditions"
     }
    },
    {
     "id": "ph-lab-skills-04",
     "name": {
      "zh": "圖像分析",
      "en": "Graph Analysis"
     },
     "knowledgeType": "concept",
     "formula": "繪圖展示變量關係；最佳擬合線",
     "dataSheet": false,
     "pitfall": {
      "zh": "坐標軸要標註變量和單位；刻度均勻；使用最大紙面積",
      "en": "Label axes with variables and units; use uniform scales; use the maximum paper area"
     }
    },
    {
     "id": "ph-lab-skills-05",
     "name": {
      "zh": "實驗設計",
      "en": "Experimental Design"
     },
     "knowledgeType": "concept",
     "formula": "控制變量法；改變一個變量觀察另一個",
     "dataSheet": false,
     "pitfall": {
      "zh": "控制不變量；改變自變量測量因變量；多次實驗驗證",
      "en": "Keep controlled variables constant; change the independent variable and measure the dependent one; repeat to verify"
     }
    },
    {
     "id": "ph-lab-skills-06",
     "name": {
      "zh": "實驗評估",
      "en": "Experimental Evaluation"
     },
     "knowledgeType": "concept",
     "formula": "分析結果可靠性；討論誤差來源",
     "dataSheet": false,
     "pitfall": {
      "zh": "評估方法的優點和缺點；提出改進建議；考慮安全因素",
      "en": "Evaluate strengths and weaknesses of the method; suggest improvements; consider safety factors"
     }
    },
    {
     "id": "ph-lab-skills-07",
     "name": {
      "zh": "安全規範",
      "en": "Safety Procedures"
     },
     "knowledgeType": "concept",
     "formula": "佩戴防護裝備；正確使用設備",
     "dataSheet": false,
     "pitfall": {
      "zh": "電器使用前檢查；化學品處理規範；急停裝置位置熟悉",
      "en": "Check electrical appliances before use; handle chemicals properly; know the location of emergency stop devices"
     }
    }
   ],
   "weight": "high",
   "diff": 2
  }
 ],
 "edges": [
  {
   "from": "ph-ht-temp",
   "to": "ph-ht-shc",
   "type": "prereq"
  },
  {
   "from": "ph-ht-shc",
   "to": "ph-ht-latent",
   "type": "prereq"
  },
  {
   "from": "ph-ht-latent",
   "to": "ph-ht-kinetic",
   "type": "prereq"
  },
  {
   "from": "ph-fm-motion",
   "to": "ph-fm-newton",
   "type": "prereq"
  },
  {
   "from": "ph-fm-newton",
   "to": "ph-fm-momentum",
   "type": "prereq"
  },
  {
   "from": "ph-fm-momentum",
   "to": "ph-fm-conserve",
   "type": "prereq"
  },
  {
   "from": "ph-fm-newton",
   "to": "ph-fm-work",
   "type": "prereq"
  },
  {
   "from": "ph-fm-work",
   "to": "ph-fm-energy",
   "type": "prereq"
  },
  {
   "from": "ph-fm-energy",
   "to": "ph-fm-energy-conserve",
   "type": "prereq"
  },
  {
   "from": "ph-wv-prop",
   "to": "ph-wv-trans",
   "type": "prereq"
  },
  {
   "from": "ph-wv-trans",
   "to": "ph-wv-water",
   "type": "prereq"
  },
  {
   "from": "ph-wv-water",
   "to": "ph-wv-sound",
   "type": "prereq"
  },
  {
   "from": "ph-wv-sound",
   "to": "ph-wv-light",
   "type": "prereq"
  },
  {
   "from": "ph-em-charge",
   "to": "ph-em-circuit",
   "type": "prereq"
  },
  {
   "from": "ph-em-circuit",
   "to": "ph-em-resistance",
   "type": "prereq"
  },
  {
   "from": "ph-em-resistance",
   "to": "ph-em-power",
   "type": "prereq"
  },
  {
   "from": "ph-em-power",
   "to": "ph-em-force",
   "type": "prereq"
  },
  {
   "from": "ph-em-force",
   "to": "ph-em-induction",
   "type": "prereq"
  },
  {
   "from": "ph-rp-decay",
   "to": "ph-rp-isotope",
   "type": "prereq"
  },
  {
   "from": "ph-rp-isotope",
   "to": "ph-rp-application",
   "type": "prereq"
  },
  {
   "from": "ph-fm-motion",
   "to": "ph-fm-newton",
   "type": "cotested"
  },
  {
   "from": "ph-fm-newton",
   "to": "ph-fm-energy-conserve",
   "type": "cotested"
  },
  {
   "from": "ph-fm-conserve",
   "to": "ph-fm-energy",
   "type": "cotested"
  },
  {
   "from": "ph-fm-motion",
   "to": "ph-fm-work",
   "type": "cotested"
  },
  {
   "from": "ph-fm-energy",
   "to": "ph-ht-shc",
   "type": "cotested"
  },
  {
   "from": "ph-wv-prop",
   "to": "ph-wv-light",
   "type": "cotested"
  },
  {
   "from": "ph-wv-trans",
   "to": "ph-wv-water",
   "type": "cotested"
  },
  {
   "from": "ph-wv-light",
   "to": "ph-aw-atomic",
   "type": "cotested"
  },
  {
   "from": "ph-em-circuit",
   "to": "ph-em-power",
   "type": "cotested"
  },
  {
   "from": "ph-em-resistance",
   "to": "ph-em-power",
   "type": "cotested"
  },
  {
   "from": "ph-em-force",
   "to": "ph-em-induction",
   "type": "cotested"
  },
  {
   "from": "ph-em-induction",
   "to": "ph-em-power",
   "type": "cotested"
  },
  {
   "from": "ph-em-circuit",
   "to": "ph-em-induction",
   "type": "cotested"
  },
  {
   "from": "ph-ht-shc",
   "to": "ph-fm-energy-conserve",
   "type": "cotested"
  },
  {
   "from": "ph-ht-latent",
   "to": "ph-fm-work",
   "type": "cotested"
  },
  {
   "from": "ph-ee-energy",
   "to": "ph-fm-work",
   "type": "cotested"
  },
  {
   "from": "ph-as-astro",
   "to": "ph-fm-newton",
   "type": "cotested"
  },
  {
   "from": "ph-as-astro",
   "to": "ph-fm-motion",
   "type": "cotested"
  },
  {
   "from": "ph-rp-decay",
   "to": "ph-fm-energy",
   "type": "cotested"
  },
  {
   "from": "ph-rp-application",
   "to": "ph-em-power",
   "type": "cotested"
  },
  {
   "from": "ph-aw-atomic",
   "to": "ph-wv-light",
   "type": "cotested"
  },
  {
   "from": "ph-mp-medical",
   "to": "ph-wv-light",
   "type": "cotested"
  },
  {
   "from": "ph-mp-medical",
   "to": "ph-rp-decay",
   "type": "cotested"
  }
 ],
 "motherProblems": [
  {
   "id": "ph-mp-01",
   "titleZh": "牛頓運動定律綜合題",
   "titleEn": "Newton's Laws Comprehensive Problem",
   "coreTopics": [
    "ph-fm-newton"
   ],
   "relatedTopics": [
    "ph-fm-motion",
    "ph-fm-momentum"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "Q10"
    },
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "Q12"
    }
   ],
   "stem": "質量為 2 kg 的物體在水平面上受 10 N 水平拉力，摩擦力為 4 N。求物體的加速度；若物體由靜止開始運動，求 3 s 後的速度。",
   "stemEn": "A 2 kg object on a horizontal surface is pulled by a 10 N horizontal force, with 4 N friction. Find the acceleration. If it starts from rest, find its velocity after 3 s.",
   "solutionSkeleton": [
    "畫自由體圖(FBD)分離受力",
    "應用 F=ma 求加速度",
    "用運動學公式求速度/位移",
    "動量定理驗證結果"
   ],
   "variation": [
    "斜面上的滑塊(考慮摩擦力)",
    "連接體(繩索張力)",
    "彈簧-質量系統(簡諧運動聯繫)",
    "多物體系統(整體+隔離法)"
   ]
  },
  {
   "id": "ph-mp-02",
   "titleZh": "能量守恆與功能轉換",
   "titleEn": "Energy Conservation and Work-Energy Transfer",
   "coreTopics": [
    "ph-fm-energy-conserve"
   ],
   "relatedTopics": [
    "ph-fm-work",
    "ph-fm-energy",
    "ph-ht-shc"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "Q13"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q14"
    }
   ],
   "stem": "質量為 0.5 kg 的滑塊從高度 2 m 的斜面上由靜止滑下，滑到底部時速度為 4 m/s。求過程中克服摩擦力所做的功。",
   "stemEn": "A 0.5 kg block slides from rest down a slope of height 2 m. At the bottom its speed is 4 m/s. Find the work done against friction.",
   "solutionSkeleton": [
    "初態: 列出所有形式的能量(KE/PE/內能)",
    "過程: 計算外力做功(W=Fs/Fd)",
    "末態: 能量重新分配",
    "應用能量守恆: 初能量 + W = 末能量"
   ],
   "variation": [
    "單擺(勢能↔動能，忽略空氣阻力)",
    "滑塊下斜面(摩擦力生熱→內能)",
    "彈簧系統(彈性勢能↔動能)",
    "完全非彈性碰撞(動能損失→內能/聲能)"
   ]
  },
  {
   "id": "ph-mp-03",
   "titleZh": "運動學圖像分析",
   "titleEn": "Kinematics Graph Analysis",
   "coreTopics": [
    "ph-fm-motion"
   ],
   "relatedTopics": [
    "ph-fm-newton"
   ],
   "questionType": "圖像題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "Q9"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P2",
     "question": "Q15"
    }
   ],
   "stem": "下圖顯示一物體在 0–10 s 內的 v-t 圖像。求 0–4 s 內的加速度、總位移，並描述 4–8 s 的運動。",
   "stemEn": "The figure shows the v-t graph of an object from 0 to 10 s. Find the acceleration during 0–4 s and the total displacement, and describe the motion from 4–8 s.",
   "solutionSkeleton": [
    "識別圖類(s-t、v-t、a-t)",
    "讓斜率(速度/加速度)",
    "算面積(位移/速度變化)",
    "轉換運動學公式驗證"
   ],
   "variation": [
    "s-t圖求速度(切線斜率)",
    "v-t圖求加速度(斜率)和位移(面積)",
    "多階段運動(分段計算)",
    "反向運動(往返問題)"
   ]
  },
  {
   "id": "ph-mp-04",
   "titleZh": "動量守恆與碰撞",
   "titleEn": "Momentum Conservation and Collisions",
   "coreTopics": [
    "ph-fm-conserve"
   ],
   "relatedTopics": [
    "ph-fm-momentum",
    "ph-fm-energy"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P1",
     "question": "Q11"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q13"
    }
   ],
   "stem": "質量為 3 kg、速度為 2 m/s 的物體 A 與靜止的 1 kg 物體 B 發生完全非彈性碰撞。求碰撞後兩物的共同速度，以及碰撞中損失的動能。",
   "stemEn": "A 3 kg object A moving at 2 m/s collides perfectly inelastically with a stationary 1 kg object B. Find the common velocity after collision and the kinetic energy lost.",
   "solutionSkeleton": [
    "確認合外力為零(動量守恆條件)",
    "寫出初動量 = 末動量",
    "分解成x/y方向(斜碰)",
    "判定碰撞類型(彈性/非彈性)"
   ],
   "variation": [
    "一維彈性碰撞(動量+動能守恆)",
    "完全非彈性碰撞(粘在一起)",
    "斜碰(二維動量守恆)",
    "爆炸問題(初動量=0)",
    "反衝問題(槍炮反衝)"
   ]
  },
  {
   "id": "ph-mp-05",
   "titleZh": "波的性質與光學現象",
   "titleEn": "Wave Properties and Optical Phenomena",
   "coreTopics": [
    "ph-wv-light"
   ],
   "relatedTopics": [
    "ph-wv-prop",
    "ph-wv-trans"
   ],
   "questionType": "圖像題+解釋題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "Q8"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P1",
     "question": "Q9"
    }
   ],
   "stem": "一束光從空氣射入玻璃，入射角為 45°，折射角為 28°。求玻璃的折射率；並解釋發生全反射的條件。",
   "stemEn": "Light enters glass from air at an incident angle of 45°, refracted at 28°. Find the refractive index of the glass, and explain the condition for total internal reflection.",
   "solutionSkeleton": [
    "辨認波的性質(反射/折射/干涉/衍射)",
    "畫光路圖(入射角=反射角)",
    "用 n=sin i/sin r 計算折射角",
    "解釋現象(如全反射、色散)"
   ],
   "variation": [
    "平面鏡成像(虛像、等距離)",
    "折射定律(空氣→玻璃、斯涅爾定律)",
    "全反射(光導纖維原理)",
    "薄膜干涉(牛頓圈、肥皂膜顏色)"
   ]
  },
  {
   "id": "ph-mp-06",
   "titleZh": "電路分析與電功率",
   "titleEn": "Circuit Analysis and Electric Power",
   "coreTopics": [
    "ph-em-circuit"
   ],
   "relatedTopics": [
    "ph-em-resistance",
    "ph-em-power"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P1",
     "question": "Q11"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q12"
    }
   ],
   "stem": "電路中兩個電阻 6 Ω 和 3 Ω 並聯後，再與 2 Ω 串聯，接上 12 V 電源。求總電流及 3 Ω 電阻消耗的功率。",
   "stemEn": "Two resistors 6 Ω and 3 Ω are in parallel, then in series with a 2 Ω resistor, connected to a 12 V supply. Find the total current and the power dissipated by the 3 Ω resistor.",
   "solutionSkeleton": [
    "簡化串並聯電路",
    "計算等效電阻(R=R1+R2 或 1/R=1/R1+1/R2)",
    "用 I=V/R 求總電流",
    "分流/分壓規則求各支路",
    "P=VI=I²R=V²/R 計算功率"
   ],
   "variation": [
    "純電阻電路(串並聯混聯)",
    "含電動機電路(非純電阻，P=VI不能用I²R)",
    "最大功率傳輸(內阻=外阻)",
    "電容充放電(Q=CV、時間常數RC)"
   ]
  },
  {
   "id": "ph-mp-07",
   "titleZh": "放射衰變與半衰期",
   "titleEn": "Radioactive Decay and Half-Life",
   "coreTopics": [
    "ph-rp-decay"
   ],
   "relatedTopics": [
    "ph-rp-isotope",
    "ph-rp-application"
   ],
   "questionType": "計算題+圖像題",
   "appearances": [
    {
     "year": 2016,
     "source": "estimated",
     "paper": "P1",
     "question": "Q7"
    },
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "Q8"
    }
   ],
   "stem": "某放射性樣本的半衰期為 8 天，初始活度為 640 Bq。求 24 天後的活度，並畫出活度-時間關係圖。",
   "stemEn": "A radioactive sample has a half-life of 8 days and initial activity 640 Bq. Find the activity after 24 days and sketch the activity-time graph.",
   "solutionSkeleton": [
    "用 N=N₀(1/2)^(t/T) 計算剩餘原子核",
    "畫衰變曲線(指數衰減)",
    "計算衰變率(ΔN/Δt = λN)",
    "應用於年代測定(碳14測年)"
   ],
   "variation": [
    "α衰變(質量數-4、質子數-2)",
    "β衰變(中子→質子+電子)",
    "γ衰變(能量釋放、質量數質子數不變)",
    "半衰期應用(碳14測年、放射性治療)"
   ]
  },
  {
   "id": "ph-mp-08",
   "titleZh": "電磁感應與楞次定律",
   "titleEn": "Electromagnetic Induction and Lenz's Law",
   "coreTopics": [
    "ph-em-induction"
   ],
   "relatedTopics": [
    "ph-em-force",
    "ph-em-power"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "Q14"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q15"
    }
   ],
   "stem": "一個磁鐵快速插入線圈時，靈敏電流計指針發生偏轉。解釋指針偏轉的原因；若磁鐵拔出的速度加倍，感應電動勢如何變化？",
   "stemEn": "A magnet pushed quickly into a coil deflects a sensitive galvanometer. Explain why. If the magnet is withdrawn at double speed, how does the induced e.m.f. change?",
   "solutionSkeleton": [
    "判定磁通量變化(ΔΦ/Δt)",
    "用楞次定律判斷感應電流方向",
    "計算感應電動勢(ε = -NΔΦ/Δt)",
    "分析能量轉換(機械能→電能)"
   ],
   "variation": [
    "線圈在磁場中運動(切割磁感線)",
    "磁鐵插入/拔出線圈(磁通量變化)",
    "變壓器原理(原副線圈電壓電流關係)",
    "發電機原理(機械能轉電能)"
   ]
  },
  {
   "id": "ph-mp-09",
   "titleZh": "波的干涉與衍射",
   "titleEn": "Wave Interference and Diffraction",
   "coreTopics": [
    "ph-wv-prop"
   ],
   "relatedTopics": [
    "ph-wv-trans",
    "ph-wv-light"
   ],
   "questionType": "圖像題+解釋題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "Q10"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q11"
    }
   ],
   "stem": "雙縫實驗中，兩個相干光源在屏幕上形成明暗相間的條紋。解釋明條紋的成因，並說明增大雙縫間距對條紋間距的影響。",
   "stemEn": "In a double-slit experiment, coherent sources form bright and dark fringes on a screen. Explain the cause of bright fringes and the effect of increasing the slit separation on the fringe spacing.",
   "solutionSkeleton": [
    "判定相干條件(同頻率同相位)",
    "計算波程差(ΔL = nλ 或 n+½λ)",
    "判定干涉類型(相長/相消)",
    "分析衍射條件(狄縫寬度≈波長)"
   ],
   "variation": [
    "楊氏雙縫干涉(亮暗條紋位置)",
    "薄膜干涉(牛頓圈、肥皂膜)",
    "單縫衍射(中央亮紋寬度)",
    "光柵衍射(譜線位置dsinθ=nλ)"
   ]
  },
  {
   "id": "ph-mp-10",
   "titleZh": "比熱容與熱量計算",
   "titleEn": "Specific Heat Capacity and Heat Calculation",
   "coreTopics": [
    "ph-ht-shc"
   ],
   "relatedTopics": [
    "ph-ht-latent",
    "ph-ht-temp"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "Q6"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P1",
     "question": "Q7"
    }
   ],
   "stem": "質量為 2 kg 的水從 20°C 加熱到 80°C，水的比熱容為 4200 J kg⁻¹ K⁻¹。求所需熱量；若用功率為 1 kW 的電熱器加熱，求所需時間。",
   "stemEn": "2 kg of water is heated from 20°C to 80°C. Given the specific heat capacity 4200 J kg⁻¹ K⁻¹, find the heat required. If a 1 kW heater is used, find the time needed.",
   "solutionSkeleton": [
    "識別升溫/降溫/相變",
    "用 Q=mcΔT 計算顯熱",
    "用 Q=mL 計算潛熱(相變時)",
    "混合溫度：Q吸=Q放"
   ],
   "variation": [
    "水與金屬混合(求最終溫度)",
    "冰變水再變水蒸氣(三態變化)",
    "燃料燃燒放熱(Q=mq值)",
    "量熱器熱損失考慮"
   ]
  },
  {
   "id": "ph-mp-11",
   "titleZh": "理想氣體方程應用",
   "titleEn": "Ideal Gas Equation Applications",
   "coreTopics": [
    "ph-ht-latent"
   ],
   "relatedTopics": [
    "ph-ht-kinetic",
    "ph-ht-temp"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P1",
     "question": "Q8"
    },
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P2",
     "question": "Q18"
    }
   ],
   "stem": "一個密封容器內氣體的初始壓強為 1.0×10⁵ Pa，溫度為 27°C。加熱至 127°C，體積保持不變。求新的壓強。",
   "stemEn": "Gas in a sealed container has an initial pressure of 1.0×10⁵ Pa at 27°C. It is heated to 127°C at constant volume. Find the new pressure.",
   "solutionSkeleton": [
    "識別過程類型(等溫/等壓/等容)",
    "選用對應定律(波義耳/查理/理想氣體)",
    "統一單位(T必須用開爾文)",
    "求未知狀態量"
   ],
   "variation": [
    "等溫壓縮(P₁V₁=P₂V₂)",
    "等壓膨脹(V₁/T₁=V₂/T₂)",
    "氣體密封問題(質量不變)",
    "氣體混合問題(理想氣體方程)"
   ]
  },
  {
   "id": "ph-mp-12",
   "titleZh": "斜面運動綜合",
   "titleEn": "Incline Motion Comprehensive",
   "coreTopics": [
    "ph-fm-newton"
   ],
   "relatedTopics": [
    "ph-fm-motion",
    "ph-fm-energy"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "Q11"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q12"
    }
   ],
   "stem": "質量為 1 kg 的物體在傾角 30° 的斜面上由靜止下滑，斜面長 4 m，動摩擦因數為 0.2。求物體滑到底部的速度。",
   "stemEn": "A 1 kg object slides from rest down a 30° incline of length 4 m. The coefficient of kinetic friction is 0.2. Find its speed at the bottom.",
   "solutionSkeleton": [
    "畫FBD分析重力分解(Gx=mgsinθ, Gy=mgcosθ)",
    "計算摩擦力(f=μN=μmgcosθ)",
    "應用F=ma求加速度",
    "用能量方法驗證(勢能→動能→熱)"
   ],
   "variation": [
    "光滑斜面(無摩擦)",
    "粗糙斜面(有摩擦)",
    "上滑與下滑(摩擦力方向)",
    "連接斜面(多階段)"
   ]
  },
  {
   "id": "ph-mp-13",
   "titleZh": "變壓器與電能傳輸",
   "titleEn": "Transformer and Power Transmission",
   "coreTopics": [
    "ph-em-induction"
   ],
   "relatedTopics": [
    "ph-em-power",
    "ph-em-resistance"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "Q15"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q16"
    }
   ],
   "stem": "升壓變壓器原、副線圈的匝數比為 1:20，原線圈電壓為 240 V。若副線圈輸出功率為 48 kW，求副線圈的電流；並解釋輸電為何採用高電壓。",
   "stemEn": "A step-up transformer has a turns ratio of 1:20 and a primary voltage of 240 V. If the secondary delivers 48 kW, find the secondary current and explain why high voltage is used for power transmission.",
   "solutionSkeleton": [
    "計算匝數比(V₁/V₂=N₁/N₂)",
    "計算電流比(I₁/I₂=N₂/N₁)",
    "計算輸電損失(P損=I²R)",
    "高壓輸電優勢分析"
   ],
   "variation": [
    "升壓變壓器(發電廠側)",
    "降壓變壓器(用戶側)",
    "輸電線損失計算",
    "理想變壓器vs實際變壓器"
   ]
  },
  {
   "id": "ph-mp-14",
   "titleZh": "簡諧運動與彈簧系統",
   "titleEn": "Simple Harmonic Motion and Spring Systems",
   "coreTopics": [
    "ph-fm-newton"
   ],
   "relatedTopics": [
    "ph-fm-energy",
    "ph-wv-trans"
   ],
   "questionType": "計算題+圖像題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "Q12"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P1",
     "question": "Q13"
    }
   ],
   "stem": "質量為 0.2 kg 的物體掛在彈性係數 80 N/m 的彈簧上作簡諧運動，振幅為 5 cm。求振動週期及最大速率。",
   "stemEn": "A 0.2 kg mass on a spring with spring constant 80 N/m oscillates with amplitude 5 cm. Find the period and the maximum speed.",
   "solutionSkeleton": [
    "識別恢復力(F=-kx)",
    "計算週期頻率(T=2π√(m/k))",
    "分析能量轉換(勢能↔動能)",
    "畫位移-時間圖"
   ],
   "variation": [
    "彈簧振子(水平/垂直)",
    "單擺(小角度近似)",
    "U型管液柱振動",
    "能量守恆驗證"
   ]
  },
  {
   "id": "ph-mp-15",
   "titleZh": "天體運動與萬有引力",
   "titleEn": "Celestial Motion and Gravitation",
   "coreTopics": [
    "ph-as-astro"
   ],
   "relatedTopics": [
    "ph-fm-newton",
    "ph-fm-motion"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "Q16"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q17"
    }
   ],
   "stem": "地球質量為 6.0×10²⁴ kg，一顆衛星在距地心 7.0×10⁶ m 的圓形軌道上運行。求衛星的軌道速度。（G = 6.67×10⁻¹¹ N m² kg⁻²）",
   "stemEn": "The Earth has mass 6.0×10²⁴ kg. A satellite moves in a circular orbit at 7.0×10⁶ m from the Earth's centre. Find its orbital speed. (G = 6.67×10⁻¹¹ N m² kg⁻²)",
   "solutionSkeleton": [
    "萬有引力提供向心力(F=GMm/r²=mv²/r)",
    "計算軌道速度(v=√(GM/r))",
    "分析潮汐現象(月球引力)",
    "解釋季節變化(地軸傾角)"
   ],
   "variation": [
    "衛星軌道計算",
    "行星運動開普勒定律",
    "日月食形成條件",
    "潮汐力分析"
   ]
  },
  {
   "id": "ph-mp-16",
   "titleZh": "功率與機械效率",
   "titleEn": "Power and Mechanical Efficiency",
   "coreTopics": [
    "ph-fm-work"
   ],
   "relatedTopics": [
    "ph-fm-energy",
    "ph-fm-energy-conserve"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "Q9"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q10"
    }
   ],
   "stem": "一部機器在 5 s 內將質量為 100 kg 的物體勻速提升 2 m。求輸出功率；若輸入功率為 800 W，求機器的效率。",
   "stemEn": "A machine lifts a 100 kg object steadily through 2 m in 5 s. Find the output power. If the input power is 800 W, find the efficiency of the machine.",
   "solutionSkeleton": [
    "計算輸出功率(P=W/t=Fv)",
    "計算效率(η=有用輸出/總輸入)",
    "分析能量損失(摩擦/熱/聲)",
    "優化機械設計"
   ],
   "variation": [
    "起重機效率(滑輪組)",
    "汽車行駛功率(牽引力與速度)",
    "水泵功率(揚水高度與流量)",
    "電機效率(電能→機械能)"
   ]
  },
  {
   "id": "ph-mp-17",
   "titleZh": "電阻測量與歐姆定律",
   "titleEn": "Resistance Measurement and Ohm's Law",
   "coreTopics": [
    "ph-em-resistance"
   ],
   "relatedTopics": [
    "ph-em-circuit",
    "ph-em-power"
   ],
   "questionType": "實驗題+計算題",
   "appearances": [
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "Q14"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P2",
     "question": "Q19"
    }
   ],
   "stem": "用伏安法測量一未知電阻，電壓表讀數為 6.0 V，電流表讀數為 0.50 A。求電阻值；若考慮電壓表的內阻，測得的電阻偏大還是偏小？解釋。",
   "stemEn": "An unknown resistor is measured by the voltmeter-ammeter method: V = 6.0 V, I = 0.50 A. Find the resistance. Taking the voltmeter's internal resistance into account, is the result larger or smaller? Explain.",
   "solutionSkeleton": [
    "伏安法測電阻(R=V/I)",
    "分析內阻影響(測量誤差)",
    "計算串並聯電阻",
    "設計電路保護"
   ],
   "variation": [
    "外接法測電阻(電流表內阻)",
    "內接法測電阻(電壓表內阻)",
    "惠斯通電橋精確測量",
    "電阻與溫度關係實驗"
   ]
  },
  {
   "id": "ph-mp-18",
   "titleZh": "波的反射與折射",
   "titleEn": "Wave Reflection and Refraction",
   "coreTopics": [
    "ph-wv-prop"
   ],
   "relatedTopics": [
    "ph-wv-trans",
    "ph-wv-water"
   ],
   "questionType": "圖像題+解釋題",
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P1",
     "question": "Q9"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P2",
     "question": "Q16"
    }
   ],
   "stem": "聲波從空氣傳入水中，頻率不變但速度發生變化。若入射角為 60°，折射角為 45°，求兩種介質中聲速之比；並畫出折射時波前的示意圖。",
   "stemEn": "Sound travels from air into water; the frequency is unchanged but the speed changes. Given an incident angle of 60° and a refracted angle of 45°, find the ratio of the speeds, and sketch the refracted wavefronts.",
   "solutionSkeleton": [
    "畫入射波與反射波",
    "應用反射定律(入射角=反射角)",
    "應用折射定律(n₁sin i=n₂sin r)",
    "解釋相位變化(固定端/自由端)"
   ],
   "variation": [
    "水波槽實驗(障礙物反射)",
    "深淺區折射(波速變化)",
    "光纖全反射原理",
    "聲波反射(回聲定位)"
   ]
  },
  {
   "id": "ph-mp-19",
   "titleZh": "駐波與共振",
   "titleEn": "Standing Waves and Resonance",
   "coreTopics": [
    "ph-wv-trans"
   ],
   "relatedTopics": [
    "ph-wv-prop",
    "ph-fm-newton"
   ],
   "questionType": "圖像題+解釋題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "Q11"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q12"
    }
   ],
   "stem": "一根兩端固定的弦長 1 m，以基頻振動時頻率為 200 Hz。求波速；並說明如何產生第二諧波。",
   "stemEn": "A string fixed at both ends has length 1 m. At the fundamental frequency it vibrates at 200 Hz. Find the wave speed and explain how the second harmonic is produced.",
   "solutionSkeleton": [
    "入射波與反射波疊加",
    "識別波腹(振幅最大)和波節(振幅=0)",
    "計算波長(波腹間距離=λ/2)",
    "分析共振條件(驅動頻率=固有頻率)"
   ],
   "variation": [
    "弦樂器駐波(固定端)",
    "空氣柱駐波(開管/閉管)",
    "共振實驗(單擺耦合)",
    "風琴管頻率計算"
   ]
  },
  {
   "id": "ph-mp-20",
   "titleZh": "光電效應與光子",
   "titleEn": "Photoelectric Effect and Photons",
   "coreTopics": [
    "ph-aw-atomic"
   ],
   "relatedTopics": [
    "ph-wv-light",
    "ph-em-charge"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "Q15"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q16"
    }
   ],
   "stem": "某金屬的逸出功為 3.0 eV。用波長 400 nm 的光照射該金屬表面，求光電子的最大動能。（h = 6.63×10⁻³⁴ J·s，1 eV = 1.6×10⁻¹⁹ J）",
   "stemEn": "A metal has a work function of 3.0 eV. Light of wavelength 400 nm is incident on its surface. Find the maximum kinetic energy of the emitted photoelectrons. (h = 6.63×10⁻³⁴ J·s, 1 eV = 1.6×10⁻¹⁹ J)",
   "solutionSkeleton": [
    "光的能量量子化(E=hf)",
    "光電效應條件(hf>功函數φ)",
    "計算最大動能(Ek=hf-φ)",
    "截止頻率(f₀=φ/h)"
   ],
   "variation": [
    "金屬表面發射電子",
    "遏止電壓測量",
    "光強與光電流關係",
    "光顏色與能量對應"
   ]
  },
  {
   "id": "ph-mp-21",
   "titleZh": "核反應與質能方程",
   "titleEn": "Nuclear Reactions and Mass-Energy Equation",
   "coreTopics": [
    "ph-rp-decay"
   ],
   "relatedTopics": [
    "ph-rp-application",
    "ph-fm-energy"
   ],
   "questionType": "計算題+解釋題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "Q14"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q15"
    }
   ],
   "stem": "某核反應的質量虧損為 0.02 u。求釋放的能量，分別以 J 和 MeV 表示。（1 u = 1.66×10⁻²⁷ kg，c = 3.0×10⁸ m/s）",
   "stemEn": "A nuclear reaction has a mass defect of 0.02 u. Find the energy released in J and in MeV. (1 u = 1.66×10⁻²⁷ kg, c = 3.0×10⁸ m/s)",
   "solutionSkeleton": [
    "質量虧損(Δm=反應前質量-反應後質量)",
    "計算釋放能量(E=Δm·c²)",
    "分析核反應類型(裂變/聚變)",
    "討論核電優缺點"
   ],
   "variation": [
    "核裂變(重核分裂)",
    "核聚變(輕核結合)",
    "質能方程應用",
    "核電站原理"
   ]
  },
  {
   "id": "ph-mp-22",
   "titleZh": "醫學成像原理",
   "titleEn": "Medical Imaging Principles",
   "coreTopics": [
    "ph-mp-medical"
   ],
   "relatedTopics": [
    "ph-wv-light",
    "ph-em-induction"
   ],
   "questionType": "解釋題",
   "appearances": [
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "Q17"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P2",
     "question": "Q20"
    }
   ],
   "stem": "解釋 X 光成像中骨骼在底片上顯示為明亮區域的原因；並比較 X 光成像與超聲波成像的優缺點。",
   "stemEn": "Explain why bones appear as bright regions on an X-ray film, and compare the advantages and disadvantages of X-ray imaging and ultrasound imaging.",
   "solutionSkeleton": [
    "X射線穿透成像(骨骼與軟組織對比)",
    "CT斷層掃描原理",
    "MRI核磁共振成像",
    "超聲波成像原理"
   ],
   "variation": [
    "X光片診斷骨折",
    "CT三維重建",
    "MRI軟組織成像",
    "B超胎兒檢查"
   ]
  },
  {
   "id": "ph-mp-23",
   "titleZh": "實驗數據處理",
   "titleEn": "Experimental Data Processing",
   "coreTopics": [
    "ph-lab-skills"
   ],
   "relatedTopics": [
    "ph-fm-motion",
    "ph-em-resistance"
   ],
   "questionType": "實驗題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P2",
     "question": "Q21"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P2",
     "question": "Q22"
    }
   ],
   "stem": "某實驗測得 5 組數據：2.1, 2.3, 2.2, 2.9, 2.1（單位 cm）。求平均值與不確定度，並判斷 2.9 是否為應刪除的離群值。",
   "stemEn": "Five measurements are recorded: 2.1, 2.3, 2.2, 2.9, 2.1 (in cm). Find the mean and the uncertainty, and decide whether 2.9 is an outlier that should be rejected.",
   "solutionSkeleton": [
    "記錄原始數據(表格)",
    "處理不確定度(誤差傳播)",
    "繪圖展示關係(直線化處理)",
    "計算斜率截距(求物理量)"
   ],
   "variation": [
    "v-t圖求加速度",
    "I-V圖求電阻",
    "周期測量求頻率",
    "直線化求斜率(如g=4π²L/T²)"
   ]
  },
  {
   "id": "ph-mp-24",
   "titleZh": "地球能源利用",
   "titleEn": "Earth Energy Utilization",
   "coreTopics": [
    "ph-ee-energy"
   ],
   "relatedTopics": [
    "ph-fm-energy-conserve",
    "ph-em-power"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P2",
     "question": "Q23"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P2",
     "question": "Q24"
    }
   ],
   "stem": "一座水力發電站的水位差為 50 m，水流流量為 200 kg/s。若發電效率為 80%，求發電站的輸出功率。",
   "stemEn": "A hydroelectric power station has a water head of 50 m and a flow rate of 200 kg/s. If the generation efficiency is 80%, find the output power.",
   "solutionSkeleton": [
    "分析能源結構(化石/可再生能源)",
    "計算發電效率(熱效率)",
    "評估環境影響(CO₂排放)",
    "提出節能措施"
   ],
   "variation": [
    "火力發電廠效率",
    "風力發電功率計算",
    "太陽能電池效率",
    "能源轉換鏈分析"
   ]
  },
  {
   "id": "ph-mp-25",
   "titleZh": "放射性應用",
   "titleEn": "Radioactivity Applications",
   "coreTopics": [
    "ph-rp-application"
   ],
   "relatedTopics": [
    "ph-rp-isotope",
    "ph-mp-medical"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P2",
     "question": "Q25"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P2",
     "question": "Q26"
    }
   ],
   "stem": "醫學上使用放射性同位素進行造影。解釋為何選擇半衰期短的同位素；若初始活度為 800 MBq、半衰期為 6 小時，求 18 小時後的活度。",
   "stemEn": "A radioactive isotope is used for medical imaging. Explain why a short half-life isotope is chosen. If the initial activity is 800 MBq and the half-life is 6 hours, find the activity after 18 hours.",
   "solutionSkeleton": [
    "工業探傷(X射線檢測)",
    "醫學治療(放射線殺死癌細胞)",
    "煙霧探測器(α射線電離)",
    "碳測年原理"
   ],
   "variation": [
    "工業X射線探傷",
    "鈷-60放射治療",
    "碳-14年代測定",
    "示蹤劑追蹤"
   ]
  },
  {
   "id": "ph-mp-26",
   "titleZh": "自由落體與拋體運動",
   "titleEn": "Free Fall and Projectile Motion",
   "coreTopics": [
    "ph-fm-motion"
   ],
   "relatedTopics": [
    "ph-fm-newton",
    "ph-fm-energy"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P1",
     "question": "Q10"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P1",
     "question": "Q11"
    }
   ],
   "stem": "小球從 20 m 高處由靜止釋放（g = 10 m/s²）。求落地所需時間及落地時的速度；若改為以 5 m/s 水平拋出，求水平射程。",
   "stemEn": "A ball is released from rest at a height of 20 m (g = 10 m/s²). Find the time to reach the ground and the impact speed. If it is instead thrown horizontally at 5 m/s, find the horizontal range.",
   "solutionSkeleton": [
    "分解水平/垂直運動",
    "垂直：匀加速(a=g)",
    "水平：匀速(vx=v₀cosθ)",
    "合成運動軌跡(拋物線)"
   ],
   "variation": [
    "平拋運動(水平初速)",
    "斜拋運動(仰角拋出)",
    "自由落體(初速為0)",
    "上拋運動(對稱性)"
   ]
  },
  {
   "id": "ph-mp-27",
   "titleZh": "圓周運動與向心力",
   "titleEn": "Circular Motion and Centripetal Force",
   "coreTopics": [
    "ph-fm-newton"
   ],
   "relatedTopics": [
    "ph-fm-motion",
    "ph-as-astro"
   ],
   "questionType": "計算題+解釋題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P1",
     "question": "Q13"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q14"
    }
   ],
   "stem": "質量為 0.5 kg 的物體在水平面上以半徑 0.4 m 作圓周運動，角速度為 5 rad/s。求所需的向心力；若繩子最大能承受 20 N，求最大角速度。",
   "stemEn": "A 0.5 kg object moves in a horizontal circle of radius 0.4 m at an angular speed of 5 rad/s. Find the required centripetal force. If the string can withstand at most 20 N, find the maximum angular speed.",
   "solutionSkeleton": [
    "向心力公式(F=mv²/r=mrω²)",
    "分析受力(張力/重力/摩擦力提供向心力)",
    "計算線速度與角速度(ω=v/r)",
    "應用於衛星/行星運動"
   ],
   "variation": [
    "水平圓周運動(圓錐擺)",
    "豎直圓周運動(過山車最高點)",
    "衛星軌道(萬有引力提供向心力)",
    "轉彎摩擦力分析"
   ]
  },
  {
   "id": "ph-mp-28",
   "titleZh": "聲波與聽覺",
   "titleEn": "Sound Waves and Hearing",
   "coreTopics": [
    "ph-wv-sound"
   ],
   "relatedTopics": [
    "ph-wv-prop",
    "ph-wv-trans"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P2",
     "question": "Q27"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P2",
     "question": "Q28"
    }
   ],
   "stem": "聲波在空氣中的速度為 340 m/s，頻率為 680 Hz。求波長；並解釋聲波為什麼不能在真空中傳播。",
   "stemEn": "Sound in air has a speed of 340 m/s and a frequency of 680 Hz. Find the wavelength, and explain why sound cannot travel through a vacuum.",
   "solutionSkeleton": [
    "聲波是縱波(疏密波)",
    "聲速與溫度關係",
    "音調響度音色區分",
    "超聲波與次聲波應用"
   ],
   "variation": [
    "回聲測距",
    "多普勒效應(來源)",
    "音頻與音調",
    "聲強與響度"
   ]
  },
  {
   "id": "ph-mp-29",
   "titleZh": "帶電粒子在電磁場中",
   "titleEn": "Charged Particles in Electromagnetic Fields",
   "coreTopics": [
    "ph-em-force"
   ],
   "relatedTopics": [
    "ph-fm-motion",
    "ph-em-induction"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "Q15"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q16"
    }
   ],
   "stem": "帶電粒子以速度 v 垂直進入磁場強度為 B 的均勻磁場。導出軌道半徑 r = mv/(qB)；若速度加倍，半徑如何變化？",
   "stemEn": "A charged particle enters a uniform magnetic field of strength B perpendicularly at speed v. Derive the orbital radius r = mv/(qB). If the speed doubles, how does the radius change?",
   "solutionSkeleton": [
    "電場中：F=qE，匀加速運動",
    "磁場中：F=qvB，勻速圓周運動",
    "電磁場中：螺旋運動",
    "應用於質譜儀/迴旋加速器"
   ],
   "variation": [
    "示波管原理(電場偏轉)",
    "質譜儀(磁場偏轉)",
    "迴旋加速器(加速條件)",
    "速度選擇器"
   ]
  },
  {
   "id": "ph-mp-30",
   "titleZh": "自感應與互感應",
   "titleEn": "Self-Induction and Mutual Induction",
   "coreTopics": [
    "ph-em-induction"
   ],
   "relatedTopics": [
    "ph-em-force",
    "ph-em-power"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P2",
     "question": "Q29"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P2",
     "question": "Q30"
    }
   ],
   "stem": "一個線圈的自感為 0.5 H，電流在 0.2 s 內從 2 A 均勻變化到 0。求感應電動勢；並解釋自感的物理意義。",
   "stemEn": "A coil has a self-inductance of 0.5 H. The current changes uniformly from 2 A to 0 in 0.2 s. Find the induced e.m.f., and explain the physical meaning of self-inductance.",
   "solutionSkeleton": [
    "自感電動勢(ε=L·ΔI/Δt)",
    "自感係數(影響因素)",
    "互感現象(變壓器原理)",
    "應用於濾波器/電感儲能"
   ],
   "variation": [
    "通電自感(電流漸增)",
    "斷電自感(電流漸減)",
    "變壓器互感",
    "RL電路暫態"
   ]
  },
  {
   "id": "ph-mp-31",
   "titleZh": "實驗設計與控制變量",
   "titleEn": "Experimental Design and Control Variables",
   "coreTopics": [
    "ph-lab-skills"
   ],
   "relatedTopics": [
    "ph-fm-motion",
    "ph-em-resistance"
   ],
   "questionType": "實驗題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P2",
     "question": "Q31"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P2",
     "question": "Q32"
    }
   ],
   "stem": "設計一個實驗探究「物體質量對沿斜面下滑加速度的影響」。指出自變量、因變量、控制變量及實驗步驟。",
   "stemEn": "Design an experiment to investigate how the mass of an object affects its acceleration down a slope. State the independent variable, dependent variable, controlled variables and the experimental procedure.",
   "solutionSkeleton": [
    "確定研究問題",
    "控制不變量",
    "改變自變量",
    "測量因變量"
   ],
   "variation": [
    "測量加速度(控制質量/力)",
    "測量電阻(溫度影響)",
    "單擺週期實驗",
    "焦利定律實驗"
   ]
  },
  {
   "id": "ph-mp-32",
   "titleZh": "原子模型與電子排列",
   "titleEn": "Atomic Models and Electron Arrangement",
   "coreTopics": [
    "ph-aw-atomic"
   ],
   "relatedTopics": [
    "ph-em-charge",
    "ph-wv-light"
   ],
   "questionType": "解釋題",
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P2",
     "question": "Q33"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P2",
     "question": "Q34"
    }
   ],
   "stem": "解釋玻爾模型中電子躍遷與光譜線的關係；當電子從較高能級躍遷到較低能級時，放出光子的能量如何計算？",
   "stemEn": "Explain the relation between electron transitions and spectral lines in the Bohr model. When an electron drops from a higher to a lower energy level, how is the energy of the emitted photon calculated?",
   "solutionSkeleton": [
    "盧瑟福實驗(原子核發現)",
    "波爾模型(電子分層)",
    "電子排列規則(2n²)",
    "價穩定結構(8個外層電子)"
   ],
   "variation": [
    "α粒子散射實驗",
    "氫光譜解釋",
    "離子形成",
    "化學鍵與電子"
   ]
  },
  {
   "id": "ph-mp-33",
   "titleZh": "溫標測量與熱膨脹應用",
   "titleEn": "Temperature Measurement and Thermal Expansion",
   "coreTopics": [
    "ph-ht-temp"
   ],
   "relatedTopics": [
    "ph-ht-shc"
   ],
   "questionType": "計算題+解釋題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P2",
     "question": "Q35"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P2",
     "question": "Q36"
    }
   ],
   "stem": "一根金屬棒在 20°C 時的長度為 1.000 m，線脹係數為 2×10⁻⁵ K⁻¹。求其在 80°C 時的長度；並解釋雙金屬片的應用原理。",
   "stemEn": "A metal rod is 1.000 m long at 20°C, with a linear expansivity of 2×10⁻⁵ K⁻¹. Find its length at 80°C, and explain the working principle of a bimetallic strip.",
   "solutionSkeleton": [
    "溫標換算(K=°C+273)",
    "線膨脹計算(ΔL=αL₀ΔT)",
    "體膨脹計算(ΔV=βV₀ΔT)",
    "應用於雙金屬片/膨脹接頭"
   ],
   "variation": [
    "溫度計校準",
    "鐵軌膨脹隙設計",
    "雙金屬片溫控開關",
    "液體膨脹體積變化"
   ]
  },
  {
   "id": "ph-mp-34",
   "titleZh": "動力論與氣體壓強",
   "titleEn": "Kinetic Theory and Gas Pressure",
   "coreTopics": [
    "ph-ht-kinetic"
   ],
   "relatedTopics": [
    "ph-ht-latent",
    "ph-ht-temp"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P2",
     "question": "Q37"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P2",
     "question": "Q38"
    }
   ],
   "stem": "用動力論解釋為什麼氣體溫度升高時壓強增大；若容器內氣體分子的平均動能加倍而體積不變，壓強如何變化？",
   "stemEn": "Use the kinetic theory to explain why the pressure of a gas increases when its temperature rises. If the average kinetic energy of the gas molecules doubles at constant volume, how does the pressure change?",
   "solutionSkeleton": [
    "分子運動解釋壓強(撞擊器壁)",
    "溫度與分子平均動能",
    "氣體方程推導(理想氣體)",
    "內能與熱力學第一定律"
   ],
   "variation": [
    "氣體壓強微觀解釋",
    "布朗運動實驗",
    "理想氣體狀態方程",
    "熱力學溫標定義"
   ]
  },
  {
   "id": "ph-mp-35",
   "titleZh": "動量與衝量計算",
   "titleEn": "Momentum and Impulse Calculations",
   "coreTopics": [
    "ph-fm-momentum"
   ],
   "relatedTopics": [
    "ph-fm-motion",
    "ph-fm-conserve"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "Q16"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q17"
    }
   ],
   "stem": "一個質量為 0.5 kg 的球以 10 m/s 撞向牆壁，並以 8 m/s 反向彈回。求球受到的衝量；若接觸時間為 0.05 s，求牆壁對球的平均作用力。",
   "stemEn": "A 0.5 kg ball hits a wall at 10 m/s and rebounds in the opposite direction at 8 m/s. Find the impulse on the ball. If the contact time is 0.05 s, find the average force exerted by the wall.",
   "solutionSkeleton": [
    "動量定義(p=mv)",
    "衡量定義(Ft=Δp)",
    "動量守恆應用",
    "與能量方法比較"
   ],
   "variation": [
    "拋體動量變化",
    "碰撞時間計算",
    "反衝現象分析",
    "衝量-動量圖像題"
   ]
  },
  {
   "id": "ph-mp-36",
   "titleZh": "勢能計算與保守力做功",
   "titleEn": "Potential Energy and Conservative Forces",
   "coreTopics": [
    "ph-fm-energy"
   ],
   "relatedTopics": [
    "ph-fm-work",
    "ph-fm-energy-conserve"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2021,
     "source": "estimated",
     "paper": "P1",
     "question": "Q18"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q19"
    }
   ],
   "stem": "一個質量為 3 kg 的物體從地面升高到 5 m 高的架子上。求重力勢能的變化；若沿不同路徑提升到同一高度，外力做功是否相同？解釋。",
   "stemEn": "A 3 kg object is raised from the ground to a shelf 5 m high. Find the change in gravitational potential energy. If it is lifted along different paths to the same height, is the work done the same? Explain.",
   "solutionSkeleton": [
    "重力勢能(mgh)",
    "彈性勢能(½kx²)",
    "保守力做功特點",
    "勢能與路徑無關性"
   ],
   "variation": [
    "滑塊下滑勢能變化",
    "彈簧壓縮勢能儲存",
    "重力勢能零點選擇",
    "保守力與非保守力區別"
   ]
  },
  {
   "id": "ph-mp-37",
   "titleZh": "水波實驗與波紋測量",
   "titleEn": "Water Wave Experiments and Ripple Measurement",
   "coreTopics": [
    "ph-wv-water"
   ],
   "relatedTopics": [
    "ph-wv-prop",
    "ph-wv-trans"
   ],
   "questionType": "實驗題+計算題",
   "appearances": [
    {
     "year": 2017,
     "source": "estimated",
     "paper": "P2",
     "question": "Q39"
    },
    {
     "year": 2022,
     "source": "estimated",
     "paper": "P2",
     "question": "Q40"
    }
   ],
   "stem": "用波紋槽產生水波，測得相鄰波峰的距離為 2 cm，頻率為 5 Hz。求波速；若水深變淺，波速如何變化？",
   "stemEn": "Water waves are produced in a ripple tank. Adjacent crests are 2 cm apart and the frequency is 5 Hz. Find the wave speed. If the water becomes shallower, how does the wave speed change?",
   "solutionSkeleton": [
    "水波槽實驗裝置",
    "頻閃燈定格技術",
    "波長測量(λ=d·sinθ)",
    "波速計算(v=fλ)"
   ],
   "variation": [
    "直線波與圓波",
    "反射波紋觀測",
    "干涉圖樣分析",
    "衍射狹縫寬度測量"
   ]
  },
  {
   "id": "ph-mp-38",
   "titleZh": "電荷分布與電場計算",
   "titleEn": "Charge Distribution and Electric Field",
   "coreTopics": [
    "ph-em-charge"
   ],
   "relatedTopics": [
    "ph-em-circuit",
    "ph-em-force"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2019,
     "source": "estimated",
     "paper": "P1",
     "question": "Q20"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P1",
     "question": "Q21"
    }
   ],
   "stem": "兩個點電荷 q₁ = 3×10⁻⁶ C 和 q₂ = −4×10⁻⁶ C 相距 0.3 m。求兩電荷之間作用力的大小和方向。（k = 9×10⁹ N m² C⁻²）",
   "stemEn": "Two point charges q₁ = 3×10⁻⁶ C and q₂ = −4×10⁻⁶ C are separated by 0.3 m. Find the magnitude and direction of the force between them. (k = 9×10⁹ N m² C⁻²)",
   "solutionSkeleton": [
    "庫侶定律應用(F=kQ₁Q₂/r²)",
    "電場強度計算(E=F/Q)",
    "電場線描繪",
    "導體與絕緣體對比"
   ],
   "variation": [
    "點電荷電場",
    "均勻電場中運動",
    "帶電粒子平衡",
    "導體球電荷分布"
   ]
  },
  {
   "id": "ph-mp-39",
   "titleZh": "電功率與電路效率",
   "titleEn": "Electric Power and Circuit Efficiency",
   "coreTopics": [
    "ph-em-power"
   ],
   "relatedTopics": [
    "ph-em-circuit",
    "ph-em-resistance"
   ],
   "questionType": "計算題",
   "appearances": [
    {
     "year": 2020,
     "source": "estimated",
     "paper": "P1",
     "question": "Q22"
    },
    {
     "year": 2023,
     "source": "estimated",
     "paper": "P1",
     "question": "Q23"
    }
   ],
   "stem": "一個電動機的輸入電壓為 240 V、電流為 5 A，輸出機械功率為 1000 W。求輸入功率和效率；剩餘的能量轉換成什麼形式？",
   "stemEn": "A motor takes an input voltage of 240 V and a current of 5 A, delivering 1000 W of mechanical power. Find the input power and the efficiency. Into what form is the remaining energy converted?",
   "solutionSkeleton": [
    "電功率計算(P=VI=I²R)",
    "電能計算(E=VIt)",
    "效率分析(η=有用/總)",
    "功率匹配問題"
   ],
   "variation": [
    "額定功率計算",
    "實際功率與額定功率",
    "輸電線路損失",
    "最大功率傳輸條件"
   ]
  },
  {
   "id": "ph-mp-40",
   "titleZh": "同位素應用與年代測定",
   "titleEn": "Isotope Applications and Age Dating",
   "coreTopics": [
    "ph-rp-isotope"
   ],
   "relatedTopics": [
    "ph-rp-decay",
    "ph-rp-application"
   ],
   "questionType": "解釋題+計算題",
   "appearances": [
    {
     "year": 2018,
     "source": "estimated",
     "paper": "P2",
     "question": "Q41"
    },
    {
     "year": 2024,
     "source": "estimated",
     "paper": "P2",
     "question": "Q42"
    }
   ],
   "stem": "碳-14 的半衰期為 5730 年。一個古木樣本中碳-14 的含量為新鮮木材的 25%。估計該古木的年齡。",
   "stemEn": "Carbon-14 has a half-life of 5730 years. An ancient wood sample contains 25% of the carbon-14 found in fresh wood. Estimate the age of the ancient wood.",
   "solutionSkeleton": [
    "同位素定義與分類",
    "放射性同位素應用",
    "碳測年原理(t=T·log₂(N₀/N))",
    "半衰期測量"
   ],
   "variation": [
    "碳-14測年原理",
    "碘-131治療應用",
    "鈷-60工業探傷",
    "氫同位素示蹤"
   ]
  }
 ],
 "domains": [
  {
   "id": "PH-HT",
   "nameZh": "熱和氣體",
   "nameEn": "Heat and Gases",
   "group": "core",
   "color": "#ef4444",
   "code": {
    "zh": "熱和氣體",
    "en": "Heat and Gases"
   }
  },
  {
   "id": "PH-FM",
   "nameZh": "力和運動",
   "nameEn": "Force and Motion",
   "group": "core",
   "color": "#3b82f6",
   "code": {
    "zh": "力和運動",
    "en": "Force and Motion"
   }
  },
  {
   "id": "PH-WV",
   "nameZh": "波動",
   "nameEn": "Waves",
   "group": "core",
   "color": "#10b981",
   "code": {
    "zh": "波動",
    "en": "Waves"
   }
  },
  {
   "id": "PH-EM",
   "nameZh": "電和磁",
   "nameEn": "Electricity and Magnetism",
   "group": "core",
   "color": "#f59e0b",
   "code": {
    "zh": "電和磁",
    "en": "Electricity and Magnetism"
   }
  },
  {
   "id": "PH-RP",
   "nameZh": "放射現象與核能",
   "nameEn": "Radioactivity and Nuclear Energy",
   "group": "core",
   "color": "#8b5cf6",
   "code": {
    "zh": "放射現象與核能",
    "en": "Radioactivity and Nuclear Energy"
   }
  },
  {
   "id": "PH-AS",
   "nameZh": "天文學",
   "nameEn": "Astronomy",
   "group": "elective",
   "color": "#ec4899",
   "code": {
    "zh": "天文學",
    "en": "Astronomy"
   }
  },
  {
   "id": "PH-AW",
   "nameZh": "原子世界",
   "nameEn": "Atomic World",
   "group": "elective",
   "color": "#06b6d4",
   "code": {
    "zh": "原子世界",
    "en": "Atomic World"
   }
  },
  {
   "id": "PH-EE",
   "nameZh": "能量與能源的利用",
   "nameEn": "Energy and Use of Energy",
   "group": "elective",
   "color": "#84cc16",
   "code": {
    "zh": "能量與能源的利用",
    "en": "Energy and Use of Energy"
   }
  },
  {
   "id": "PH-MP",
   "nameZh": "醫學物理",
   "nameEn": "Medical Physics",
   "group": "elective",
   "color": "#f97316",
   "code": {
    "zh": "醫學物理",
    "en": "Medical Physics"
   }
  },
  {
   "id": "PH-LAB",
   "nameZh": "實驗技能",
   "nameEn": "Experimental Skills",
   "group": "sba",
   "color": "#6b7280",
   "code": {
    "zh": "實驗技能",
    "en": "Experimental Skills"
   }
  }
 ]
};

if (typeof module !== "undefined" && module.exports) module.exports = DSE_PHYSICS_GRAPH;
