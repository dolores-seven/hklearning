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
          "pitfall": "絕對零度-273°C；熱力學溫標不能用負值"
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
          "pitfall": "α是線膨脹係數；雙金屬片利用不同膨脹係數彎曲"
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
          "pitfall": "液體膨脹係數大於固體；水在4°C以下反常膨脹"
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
          "pitfall": "壓強不變時體積膨脹；理想氣體膨脹遵守理想氣體方程"
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
          "pitfall": "膨脹間隙要預留；鐵軌留縫隙防止夏天脫軌"
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
          "pitfall": "與物質質量有關；單位J/K或J/°C"
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
          "pitfall": "與物質種類有關，與質量無關；水比熱容很大(4200J/kg°C)"
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
          "pitfall": "升溫Q為正，降溫Q為負；混合時Q吸=Q放"
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
          "pitfall": "假設不與外界交換熱量；高溫物體放熱等於低溫物體吸熱"
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
          "pitfall": "要考慮量熱器本身吸熱；雙層容器減少熱散失"
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
          "pitfall": "相變時溫度不變；熔化潛熱和汽化潛熱不同"
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
          "pitfall": "熔點與凝固點相同；熔化吸熱，凝固放熱"
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
          "pitfall": "沸點與壓強有關；汽化吸熱，液化放熱"
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
          "pitfall": "壓強與體積成反比；等溫過程"
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
          "pitfall": "體積與熱力學溫標成正比；等壓過程"
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
          "pitfall": "R=8.31J/(mol·K)；n是摩爾數；T必須用開爾文"
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
          "pitfall": "與溫度有關（理想氣體只與溫度有關）；熱功當量J=4.2J/cal"
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
          "pitfall": "系統吸熱Q為正，外界對系統做功W為正；能量守恆體現"
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
          "pitfall": "解釋氣體壓強（分子撞擊器壁）；溫度是分子平均動能的量度"
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
          "pitfall": "高溫低壓下實際氣體接近理想氣體；標準狀況(STP)下1摩爾氣體體積22.4L"
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
          "pitfall": "證實分子運動；粒子越大布朗運動越不明顯"
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
          "pitfall": "平均速率=總距離/總時間，方向改變仍計算；平均速度=位移/時間，是向量"
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
          "pitfall": "加速度方向與速度方向無關；減速時加速度方向與速度相反"
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
          "pitfall": "僅適用於匀加速運動；用對稱性求上拋時間（t上=t下）"
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
          "pitfall": "曲線切線斜率表示瞬時速度；水平線表示靜止"
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
          "pitfall": "圖下方形面積表示位移（不是距離）；速度為負時面積也算"
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
          "pitfall": "拋到最高點時速度=0但加速度仍為g；上升時間=下降時間"
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
          "pitfall": "物體不受力或合力為零時，不一定靜止（可能匀速）"
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
          "pitfall": "F是淨力（合力），不是單個力；F與a同方向"
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
          "pitfall": "作用力與反作用力同時產生同時消失；作用在不同物體上，不能抵消"
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
          "pitfall": "重量是力（N），質量是物質量（kg）；g=10 N/kg在DSE中適用"
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
          "pitfall": "靜摩擦力可變（0到最大值）；動摩擦力通常小於最大靜摩擦力；摩擦力方向與相對運動方向相反"
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
          "pitfall": "只畫外力不畫內力；力從物體中心畫出；標注力的類型和大小"
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
          "pitfall": "繩質量不計時繩內張力各處相等；滑輪無摩擦時兩側張力相等"
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
          "pitfall": "動量是向量，方向與速度相同；動量與參考系有關"
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
          "pitfall": "衡量是力在時間上的累積；衡量改變動量"
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
          "pitfall": "F是平均淨力；衝量方向與動量變化方向相同"
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
          "pitfall": "只有在合外力為零時動量才守恆；內力不改變總動量"
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
          "pitfall": "完全非彈性碰撞：物體粘在一起，動能損失最大；爆炸問題：動量守恆但動能增加"
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
          "pitfall": "系統合外力為零時適用；向量方程，要注意方向"
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
          "pitfall": "兩物體動量大小相等方向相反；速度與質量成反比"
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
          "pitfall": "斜碰要分解成x和y方向；先畫矢量圖再列方程"
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
          "pitfall": "初動量為零；系統包括槍+子彈；反衝速度與子彈速度方向相反"
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
          "pitfall": "不需要外界介質；推力來自噴出氣體的動量變化"
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
          "pitfall": "力與位移垂直時不做功；重力做功與路徑無關"
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
          "pitfall": "P=Fv中F與v同方向；平均功率用總功/總時間"
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
          "pitfall": "物體上升重力做負功；下落重力做正功；與路徑無關只看高度差"
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
          "pitfall": "摩擦力方向與位移相反時做負功；轉動摩擦力做功W = frθ"
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
          "pitfall": "彈力做功等於彈性勢能變化；伸長和壓縮都做正功（對彈簧）"
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
          "pitfall": "效率永遠小於100%；能量轉換必有損失"
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
          "pitfall": "動能是標量；與速度平方成正比；静止時KE=0"
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
          "pitfall": "相對於參考高度；h是相對高度差；可以為負值"
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
          "pitfall": "x是彈簧形變量（伸長或壓縮）；平衡位置EPE=0"
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
          "pitfall": "機械能包括動能和所有勢能；守恆條件：只有保守力做功"
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
          "pitfall": "合外力做功等於動能變化；適用於任何力（保守+非保守）"
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
          "pitfall": "能量轉換過程中有損失（熱能/聲能）；永動機不可能實現"
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
          "pitfall": "系統總能量包括所有形式（動能+勢能+內能+聲能）"
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
          "pitfall": "只有重力做功時適用；有摩擦力時機械能不守恆"
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
          "pitfall": "空氣阻力忽略時機械能守恆；振幅不會衰減"
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
          "pitfall": "有摩擦時機械能不守恆；損失的機械能轉化為內能"
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
          "pitfall": "簡諧運動中總機械能守恆；動能和勢能互換但總和不變"
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
          "pitfall": "非彈性碰撞中有動能損失；摩擦生熱導致能量損失"
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
          "pitfall": "水波是横波與縱波的混合；聲波是縱波；光是横波"
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
          "pitfall": "頻率f由波源決定；波速v由介質決定；波長λ隨介質變化"
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
          "pitfall": "振幅越大能量越大；強度與振幅平方成正比"
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
          "pitfall": "反射波相位可能改變（固定端反射）或不變（自由端）"
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
          "pitfall": "從疏到密波速減小，折射角變小；深淺區折射導致波向改變"
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
          "pitfall": "波長越大衍射越明顯；狄縫寬度接近波長時衍射最明顯"
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
          "pitfall": "兩波源要相干（同頻率同相位）；干涉圖樣是穩定的"
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
          "pitfall": "波速由介質性質決定；真空中光速c=3×10⁸m/s"
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
          "pitfall": "週期T是完成一次振動的時間；頻率f是每秒振動次數"
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
          "pitfall": "相位差決定干涉性質；同相（相位差0或2π）相長；反相（相位差π）相消"
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
          "pitfall": "入射波與反射波疊加形成；波腹振幅最大，波節靜止"
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
          "pitfall": "繩波張力T越大波速越大；聲波在固體中傳播最快"
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
          "pitfall": "水粒子運動軌跡是圓形；淺水波速度與深度有關"
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
          "pitfall": "波峰和波谷是横波的概念；縱波是密部和疏部"
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
          "pitfall": "閃頻燈頻率要調整到定格效果；波源頻率要穩定"
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
          "pitfall": "折射時頻率不變；入射角與折射角關係符合斯涅爾定律"
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
          "pitfall": "需要介質傳播；真空不能傳聲；聲速在氣體中最小，固體中最大"
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
          "pitfall": "溫度越高聲速越大；聲速在0°C約330m/s"
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
          "pitfall": "音調高不一定響度大；人耳聽覺範圍20Hz-20kHz"
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
          "pitfall": "不同樂器即使音調響度相同，音色也不同；與泛音有關"
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
          "pitfall": "超聲波用於醫學成像；次聲波人聽不到但可引起不適"
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
          "pitfall": "干涉衍射現象說明光是波；光電效應說明光是粒子"
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
          "pitfall": "光路可逆；平面鏡成像虛像等大正立"
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
          "pitfall": "光從光疏到光密折射角變小；折射率n=c/v"
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
          "pitfall": "臨界角C=sin⁻¹(1/n)；光導纖維應用全反射傳光"
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
          "pitfall": "稜鏡色散：紅光折射率最小，紫光最大；虹的成因"
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
          "pitfall": "肥皂膜顏色、牛頓圈現象；增透膜利用干涉相消原理"
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
          "pitfall": "d是光柵常數；n是譜線級數；中央亮紋最亮"
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
          "pitfall": "電荷量子化（最小單位e=1.6×10⁻¹⁹C）；電荷守恆"
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
          "pitfall": "真空中適用；力沿連線方向；同性相斥異性相吸"
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
          "pitfall": "E是向量，方向與正電荷受力方向相同；電場線從正到負"
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
          "pitfall": "I是標量；方向規定為正電荷流動方向"
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
          "pitfall": "半導體電導率可調控；超導體在低溫下電阻為零"
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
          "pitfall": "電壓是單位電荷所做的功；也叫電勢差"
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
          "pitfall": "只適用於純電阻電路；非歐姆導體（如二極管）不適用"
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
          "pitfall": "一個元件斷路全电路斷；電壓分配與電阻成正比"
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
          "pitfall": "一個支路斷路其他仍通；電流分配與電阻成反比"
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
          "pitfall": "用於獲得可變電壓；負載效應會改變分壓比"
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
          "pitfall": "畫圖時規範使用符號；接線圖和電路圖要能互相轉換"
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
          "pitfall": "R是電阻本身屬性，不隨V和I變；定義式與歐姆定律不同"
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
          "pitfall": "ρ是電阻率，與材料有關；L是長度，A是橫截面積"
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
          "pitfall": "燈泡電阻冷態小於熱態；開啟瞬間電流大"
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
          "pitfall": "限流式（串聯）和分壓式（並聯）；接線要一上一下"
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
          "pitfall": "內阻影響測量精度；惠斯通電橋更精確"
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
          "pitfall": "臨界溫度以上失去超導性；超導體排斥磁場（邁斯納效應）"
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
          "pitfall": "P=I²R和P=V²/R只適用於純電阻；非純電阻只能用P=VI"
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
          "pitfall": "電能用千瓦時(kWh)計量；1kWh=3.6×10⁶J"
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
          "pitfall": "電流熱效應；適用於所有導體；與電功率P=I²R一致"
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
          "pitfall": "電壓低於額定值時功率不足；高於額定值可能損壞"
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
          "pitfall": "注意單位換算（W→kW）；峰谷電價不同"
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
          "pitfall": "直線電流磁場用右手螺旋定則；圓形電流磁場用安培定則"
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
          "pitfall": "B、I、F三者互相垂直；用左手定則判斷方向"
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
          "pitfall": "換向器改變電流方向；電能轉化為機械能"
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
          "pitfall": "B是向量；單位特斯拉(T)；1T=1N/(A·m)"
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
          "pitfall": "洛倫茲力不做功；粒子做勻速圓周運動；半徑r=mv/qB"
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
          "pitfall": "磁通量變化產生感應電動勢；負號表示楞次定律"
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
          "pitfall": "用右手定則判斷感應電流方向；能量守恆體現"
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
          "pitfall": "機械能轉化為電能；滑環產生交流電，換向器產生直流電"
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
          "pitfall": "只適用於交流電；理想變壓器效率100%；升壓電流降，降壓電流升"
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
          "pitfall": "渦電流產生熱量；變壓器用分層鐵芯減小渦流損失"
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
          "pitfall": "自感係數L與線圈匝數有關；電感儲存磁能"
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
          "pitfall": "不受物理化學條件影響；是核現象不是化學現象"
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
          "pitfall": "α穿透力最弱，電離能力最強；γ穿透力最強，電離能力最弱"
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
          "pitfall": "質量數減4，質子數減2；氦核就是α粒子"
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
          "pitfall": "質量數不變，質子數加1；中子轉變為質子和電子"
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
          "pitfall": "質量數和質子數都不變；只是能量狀態改變"
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
          "pitfall": "半衰期是放射性元素特性；不受外界條件影響；用於年代測定"
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
          "pitfall": "化學性質相同；物理性質不同"
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
          "pitfall": "大多數元素都有穩定同位素；碳-12是碳的穩定同位素"
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
          "pitfall": "碳-14用於碳測年；鈷-60用於放射治療"
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
          "pitfall": "醫學診斷（掃描）；農業（追蹤肥料吸收）；工業（檢漏）"
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
          "pitfall": "基於碳-14半衰期5730年；只適用於有機物；誤差隨年代增大"
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
          "pitfall": "鈷-60常用源；精確照射避免傷害健康組織；副作用如脱发噁心"
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
          "pitfall": "穿透金屬檢測焊接裂縫；無損檢測方法"
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
          "pitfall": "α射線被煙霧粒子吸收改變電流；警報響起"
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
          "pitfall": "核燃料如鈾-235；可控裂變鏈式反應；優點清潔高效，缺點放射性廢料處理"
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
          "pitfall": "減少暴露時間；增加距離；使用鉛或混凝土屏蔽；劑量限制"
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
          "pitfall": "北極星位置不變；恆星日比太陽日短4分鐘"
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
          "pitfall": "月相由太陽地球月球相對位置決定；月相周期約29.5天"
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
          "pitfall": "日食只有在新月時發生；月食只有在滿月時發生；不每次都發生因為軌道傾角"
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
          "pitfall": "行星越靠近太陽速度越快；橢圓軌道太陽在一個焦點上"
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
          "pitfall": "演化路徑由質量決定；太陽最終成為白矮星"
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
          "pitfall": "證據包括宇宙膨脹、宇宙微波背景輻射；哈勃定律支持膨脹說"
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
          "pitfall": "盧瑟福實驗發現原子核；波爾解釋氫光譜"
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
          "pitfall": "最外層電子決定化學性質；穩定結構8個電子（氫2個）"
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
          "pitfall": "德布羅意波長λ=h/p；電子衍射實驗證實波動性"
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
          "pitfall": "海森堡提出；無法同時精確測量位置和動量；測量精度受限於普朗克常數"
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
          "pitfall": "愛因斯坦解釋：光由光子組成，E=hf；存在截止頻率"
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
          "pitfall": "單色性、方向性、相干性；應用於通信、醫療、工業"
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
          "pitfall": "可再生能源有儘量但功率密度低；化石燃料釋放CO₂"
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
          "pitfall": "火力發電效率低（約35%）；燃氣輪機效率高於蒸汽輪機"
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
          "pitfall": "受天氣和時間限制；能量密度低；需要儲能系統配套"
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
          "pitfall": "受地理位置限制；噪音和視覺污染；風速不穩定導致輸出波動"
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
          "pitfall": "優點：能量密度高、無溫室氣體；缺點：放射性廢料、安全隱患、成本高"
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
          "pitfall": "節能與開發新能源同樣重要；建築節能、工業節能、交通節能"
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
          "pitfall": "適用於骨折檢測；過量輻射有害；鉛屏蔽防護"
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
          "pitfall": "三維成像；輻射劑量高於普通X光；軟組織對比度增強"
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
          "pitfall": "無輻射傷害；實時成像；適用於胎兒檢查；分辨力受限於頻率"
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
          "pitfall": "無輻射；軟組織對比度優於CT；金屬植入物禁忌；成本高"
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
          "pitfall": "精確定位腫瘤；保護周圍健康組織；副作用如皮膚紅、疲勞"
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
          "pitfall": "示蹤劑聚集在特定組織；PET掃描檢測代謝；碘-131治療甲狀腺癌"
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
          "pitfall": "視線要垂直刻度；避免視差；零點校準"
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
          "pitfall": "系統誤差影響準確度；隨機誤差影響精密度；有效數字表示不確定度"
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
          "pitfall": "不要修改原始數據；記錄所有觀測；注明實驗條件"
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
          "pitfall": "坐標軸要標註變量和單位；刻度均勻；使用最大紙面積"
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
          "pitfall": "控制不變量；改變自變量測量因變量；多次實驗驗證"
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
          "pitfall": "評估方法的優點和缺點；提出改進建議；考慮安全因素"
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
          "pitfall": "電器使用前檢查；化學品處理規範；急停裝置位置熟悉"
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
      "skeleton": "1. 畫自由體圖(FBD)分離受力\n2. 應用 F=ma 求加速度\n3. 用運動學公式求速度/位移\n4. 動量定理驗證結果",
      "variations": [
        "斜面上的滑塊(考慮摩擦力)",
        "連接體(繩索張力)",
        "彈簧-質量系統(簡諧運動聯繫)",
        "多物體系統(整體+隔離法)"
      ],
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
      "skeleton": "1. 初態: 列出所有形式的能量(KE/PE/內能)\n2. 過程: 計算外力做功(W=Fs/Fd)\n3. 末態: 能量重新分配\n4. 應用能量守恆: 初能量 + W = 末能量",
      "variations": [
        "單擺(勢能↔動能，忽略空氣阻力)",
        "滑塊下斜面(摩擦力生熱→內能)",
        "彈簧系統(彈性勢能↔動能)",
        "完全非彈性碰撞(動能損失→內能/聲能)"
      ],
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
      "skeleton": "1. 識別圖類(s-t、v-t、a-t)\n2. 讓斜率(速度/加速度)\n3. 算面積(位移/速度變化)\n4. 轉換運動學公式驗證",
      "variations": [
        "s-t圖求速度(切線斜率)",
        "v-t圖求加速度(斜率)和位移(面積)",
        "多階段運動(分段計算)",
        "反向運動(往返問題)"
      ],
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
      "skeleton": "1. 確認合外力為零(動量守恆條件)\n2. 寫出初動量 = 末動量\n3. 分解成x/y方向(斜碰)\n4. 判定碰撞類型(彈性/非彈性)",
      "variations": [
        "一維彈性碰撞(動量+動能守恆)",
        "完全非彈性碰撞(粘在一起)",
        "斜碰(二維動量守恆)",
        "爆炸問題(初動量=0)",
        "反衝問題(槍炮反衝)"
      ],
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
      "skeleton": "1. 辨認波的性質(反射/折射/干涉/衍射)\n2. 畫光路圖(入射角=反射角)\n3. 用 n=sin i/sin r 計算折射角\n4. 解釋現象(如全反射、色散)",
      "variations": [
        "平面鏡成像(虛像、等距離)",
        "折射定律(空氣→玻璃、斯涅爾定律)",
        "全反射(光導纖維原理)",
        "薄膜干涉(牛頓圈、肥皂膜顏色)"
      ],
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
      "skeleton": "1. 簡化串並聯電路\n2. 計算等效電阻(R=R1+R2 或 1/R=1/R1+1/R2)\n3. 用 I=V/R 求總電流\n4. 分流/分壓規則求各支路\n5. P=VI=I²R=V²/R 計算功率",
      "variations": [
        "純電阻電路(串並聯混聯)",
        "含電動機電路(非純電阻，P=VI不能用I²R)",
        "最大功率傳輸(內阻=外阻)",
        "電容充放電(Q=CV、時間常數RC)"
      ],
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
      "skeleton": "1. 用 N=N₀(1/2)^(t/T) 計算剩餘原子核\n2. 畫衰變曲線(指數衰減)\n3. 計算衰變率(ΔN/Δt = λN)\n4. 應用於年代測定(碳14測年)",
      "variations": [
        "α衰變(質量數-4、質子數-2)",
        "β衰變(中子→質子+電子)",
        "γ衰變(能量釋放、質量數質子數不變)",
        "半衰期應用(碳14測年、放射性治療)"
      ],
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
      "skeleton": "1. 判定磁通量變化(ΔΦ/Δt)\n2. 用楞次定律判斷感應電流方向\n3. 計算感應電動勢(ε = -NΔΦ/Δt)\n4. 分析能量轉換(機械能→電能)",
      "variations": [
        "線圈在磁場中運動(切割磁感線)",
        "磁鐵插入/拔出線圈(磁通量變化)",
        "變壓器原理(原副線圈電壓電流關係)",
        "發電機原理(機械能轉電能)"
      ],
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
      "skeleton": "1. 判定相干條件(同頻率同相位)\n2. 計算波程差(ΔL = nλ 或 n+½λ)\n3. 判定干涉類型(相長/相消)\n4. 分析衍射條件(狄縫寬度≈波長)",
      "variations": [
        "楊氏雙縫干涉(亮暗條紋位置)",
        "薄膜干涉(牛頓圈、肥皂膜)",
        "單縫衍射(中央亮紋寬度)",
        "光柵衍射(譜線位置dsinθ=nλ)"
      ],
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
      "skeleton": "1. 識別升溫/降溫/相變\n2. 用 Q=mcΔT 計算顯熱\n3. 用 Q=mL 計算潛熱(相變時)\n4. 混合溫度：Q吸=Q放",
      "variations": [
        "水與金屬混合(求最終溫度)",
        "冰變水再變水蒸氣(三態變化)",
        "燃料燃燒放熱(Q=mq值)",
        "量熱器熱損失考慮"
      ],
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
      "skeleton": "1. 識別過程類型(等溫/等壓/等容)\n2. 選用對應定律(波義耳/查理/理想氣體)\n3. 統一單位(T必須用開爾文)\n4. 求未知狀態量",
      "variations": [
        "等溫壓縮(P₁V₁=P₂V₂)",
        "等壓膨脹(V₁/T₁=V₂/T₂)",
        "氣體密封問題(質量不變)",
        "氣體混合問題(理想氣體方程)"
      ],
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
      "skeleton": "1. 畫FBD分析重力分解(Gx=mgsinθ, Gy=mgcosθ)\n2. 計算摩擦力(f=μN=μmgcosθ)\n3. 應用F=ma求加速度\n4. 用能量方法驗證(勢能→動能→熱)",
      "variations": [
        "光滑斜面(無摩擦)",
        "粗糙斜面(有摩擦)",
        "上滑與下滑(摩擦力方向)",
        "連接斜面(多階段)"
      ],
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
      "skeleton": "1. 計算匝數比(V₁/V₂=N₁/N₂)\n2. 計算電流比(I₁/I₂=N₂/N₁)\n3. 計算輸電損失(P損=I²R)\n4. 高壓輸電優勢分析",
      "variations": [
        "升壓變壓器(發電廠側)",
        "降壓變壓器(用戶側)",
        "輸電線損失計算",
        "理想變壓器vs實際變壓器"
      ],
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
      "skeleton": "1. 識別恢復力(F=-kx)\n2. 計算週期頻率(T=2π√(m/k))\n3. 分析能量轉換(勢能↔動能)\n4. 畫位移-時間圖",
      "variations": [
        "彈簧振子(水平/垂直)",
        "單擺(小角度近似)",
        "U型管液柱振動",
        "能量守恆驗證"
      ],
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
      "skeleton": "1. 萬有引力提供向心力(F=GMm/r²=mv²/r)\n2. 計算軌道速度(v=√(GM/r))\n3. 分析潮汐現象(月球引力)\n4. 解釋季節變化(地軸傾角)",
      "variations": [
        "衛星軌道計算",
        "行星運動開普勒定律",
        "日月食形成條件",
        "潮汐力分析"
      ],
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
      "skeleton": "1. 計算輸出功率(P=W/t=Fv)\n2. 計算效率(η=有用輸出/總輸入)\n3. 分析能量損失(摩擦/熱/聲)\n4. 優化機械設計",
      "variations": [
        "起重機效率(滑輪組)",
        "汽車行駛功率(牽引力與速度)",
        "水泵功率(揚水高度與流量)",
        "電機效率(電能→機械能)"
      ],
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
      "skeleton": "1. 伏安法測電阻(R=V/I)\n2. 分析內阻影響(測量誤差)\n3. 計算串並聯電阻\n4. 設計電路保護",
      "variations": [
        "外接法測電阻(電流表內阻)",
        "內接法測電阻(電壓表內阻)",
        "惠斯通電橋精確測量",
        "電阻與溫度關係實驗"
      ],
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
      "skeleton": "1. 畫入射波與反射波\n2. 應用反射定律(入射角=反射角)\n3. 應用折射定律(n₁sin i=n₂sin r)\n4. 解釋相位變化(固定端/自由端)",
      "variations": [
        "水波槽實驗(障礙物反射)",
        "深淺區折射(波速變化)",
        "光纖全反射原理",
        "聲波反射(回聲定位)"
      ],
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
      "skeleton": "1. 入射波與反射波疊加\n2. 識別波腹(振幅最大)和波節(振幅=0)\n3. 計算波長(波腹間距離=λ/2)\n4. 分析共振條件(驅動頻率=固有頻率)",
      "variations": [
        "弦樂器駐波(固定端)",
        "空氣柱駐波(開管/閉管)",
        "共振實驗(單擺耦合)",
        "風琴管頻率計算"
      ],
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
      "skeleton": "1. 光的能量量子化(E=hf)\n2. 光電效應條件(hf>功函數φ)\n3. 計算最大動能(Ek=hf-φ)\n4. 截止頻率(f₀=φ/h)",
      "variations": [
        "金屬表面發射電子",
        "遏止電壓測量",
        "光強與光電流關係",
        "光顏色與能量對應"
      ],
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
      "skeleton": "1. 質量虧損(Δm=反應前質量-反應後質量)\n2. 計算釋放能量(E=Δm·c²)\n3. 分析核反應類型(裂變/聚變)\n4. 討論核電優缺點",
      "variations": [
        "核裂變(重核分裂)",
        "核聚變(輕核結合)",
        "質能方程應用",
        "核電站原理"
      ],
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
      "skeleton": "1. X射線穿透成像(骨骼與軟組織對比)\n2. CT斷層掃描原理\n3. MRI核磁共振成像\n4. 超聲波成像原理",
      "variations": [
        "X光片診斷骨折",
        "CT三維重建",
        "MRI軟組織成像",
        "B超胎兒檢查"
      ],
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
      "skeleton": "1. 記錄原始數據(表格)\n2. 處理不確定度(誤差傳播)\n3. 繪圖展示關係(直線化處理)\n4. 計算斜率截距(求物理量)",
      "variations": [
        "v-t圖求加速度",
        "I-V圖求電阻",
        "周期測量求頻率",
        "直線化求斜率(如g=4π²L/T²)"
      ],
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
      "skeleton": "1. 分析能源結構(化石/可再生能源)\n2. 計算發電效率(熱效率)\n3. 評估環境影響(CO₂排放)\n4. 提出節能措施",
      "variations": [
        "火力發電廠效率",
        "風力發電功率計算",
        "太陽能電池效率",
        "能源轉換鏈分析"
      ],
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
      "skeleton": "1. 工業探傷(X射線檢測)\n2. 醫學治療(放射線殺死癌細胞)\n3. 煙霧探測器(α射線電離)\n4. 碳測年原理",
      "variations": [
        "工業X射線探傷",
        "鈷-60放射治療",
        "碳-14年代測定",
        "示蹤劑追蹤"
      ],
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
      "skeleton": "1. 分解水平/垂直運動\n2. 垂直：匀加速(a=g)\n3. 水平：匀速(vx=v₀cosθ)\n4. 合成運動軌跡(拋物線)",
      "variations": [
        "平拋運動(水平初速)",
        "斜拋運動(仰角拋出)",
        "自由落體(初速為0)",
        "上拋運動(對稱性)"
      ],
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
      "skeleton": "1. 向心力公式(F=mv²/r=mrω²)\n2. 分析受力(張力/重力/摩擦力提供向心力)\n3. 計算線速度與角速度(ω=v/r)\n4. 應用於衛星/行星運動",
      "variations": [
        "水平圓周運動(圓錐擺)",
        "豎直圓周運動(過山車最高點)",
        "衛星軌道(萬有引力提供向心力)",
        "轉彎摩擦力分析"
      ],
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
      "skeleton": "1. 聲波是縱波(疏密波)\n2. 聲速與溫度關係\n3. 音調響度音色區分\n4. 超聲波與次聲波應用",
      "variations": [
        "回聲測距",
        "多普勒效應(來源)",
        "音頻與音調",
        "聲強與響度"
      ],
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
      "skeleton": "1. 電場中：F=qE，匀加速運動\n2. 磁場中：F=qvB，勻速圓周運動\n3. 電磁場中：螺旋運動\n4. 應用於質譜儀/迴旋加速器",
      "variations": [
        "示波管原理(電場偏轉)",
        "質譜儀(磁場偏轉)",
        "迴旋加速器(加速條件)",
        "速度選擇器"
      ],
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
      "skeleton": "1. 自感電動勢(ε=L·ΔI/Δt)\n2. 自感係數(影響因素)\n3. 互感現象(變壓器原理)\n4. 應用於濾波器/電感儲能",
      "variations": [
        "通電自感(電流漸增)",
        "斷電自感(電流漸減)",
        "變壓器互感",
        "RL電路暫態"
      ],
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
      "skeleton": "1. 確定研究問題\n2. 控制不變量\n3. 改變自變量\n4. 測量因變量",
      "variations": [
        "測量加速度(控制質量/力)",
        "測量電阻(溫度影響)",
        "單擺週期實驗",
        "焦利定律實驗"
      ],
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
      "skeleton": "1. 盧瑟福實驗(原子核發現)\n2. 波爾模型(電子分層)\n3. 電子排列規則(2n²)\n4. 價穩定結構(8個外層電子)",
      "variations": [
        "α粒子散射實驗",
        "氫光譜解釋",
        "離子形成",
        "化學鍵與電子"
      ],
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
      "skeleton": "1. 溫標換算(K=°C+273)\n2. 線膨脹計算(ΔL=αL₀ΔT)\n3. 體膨脹計算(ΔV=βV₀ΔT)\n4. 應用於雙金屬片/膨脹接頭",
      "variations": [
        "溫度計校準",
        "鐵軌膨脹隙設計",
        "雙金屬片溫控開關",
        "液體膨脹體積變化"
      ],
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
      "skeleton": "1. 分子運動解釋壓強(撞擊器壁)\n2. 溫度與分子平均動能\n3. 氣體方程推導(理想氣體)\n4. 內能與熱力學第一定律",
      "variations": [
        "氣體壓強微觀解釋",
        "布朗運動實驗",
        "理想氣體狀態方程",
        "熱力學溫標定義"
      ],
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
      "skeleton": "1. 動量定義(p=mv)\n2. 衡量定義(Ft=Δp)\n3. 動量守恆應用\n4. 與能量方法比較",
      "variations": [
        "拋體動量變化",
        "碰撞時間計算",
        "反衝現象分析",
        "衝量-動量圖像題"
      ],
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
      "skeleton": "1. 重力勢能(mgh)\n2. 彈性勢能(½kx²)\n3. 保守力做功特點\n4. 勢能與路徑無關性",
      "variations": [
        "滑塊下滑勢能變化",
        "彈簧壓縮勢能儲存",
        "重力勢能零點選擇",
        "保守力與非保守力區別"
      ],
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
      "skeleton": "1. 水波槽實驗裝置\n2. 頻閃燈定格技術\n3. 波長測量(λ=d·sinθ)\n4. 波速計算(v=fλ)",
      "variations": [
        "直線波與圓波",
        "反射波紋觀測",
        "干涉圖樣分析",
        "衍射狹縫寬度測量"
      ],
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
      "skeleton": "1. 庫侶定律應用(F=kQ₁Q₂/r²)\n2. 電場強度計算(E=F/Q)\n3. 電場線描繪\n4. 導體與絕緣體對比",
      "variations": [
        "點電荷電場",
        "均勻電場中運動",
        "帶電粒子平衡",
        "導體球電荷分布"
      ],
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
      "skeleton": "1. 電功率計算(P=VI=I²R)\n2. 電能計算(E=VIt)\n3. 效率分析(η=有用/總)\n4. 功率匹配問題",
      "variations": [
        "額定功率計算",
        "實際功率與額定功率",
        "輸電線路損失",
        "最大功率傳輸條件"
      ],
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
      "skeleton": "1. 同位素定義與分類\n2. 放射性同位素應用\n3. 碳測年原理(t=T·log₂(N₀/N))\n4. 半衰期測量",
      "variations": [
        "碳-14測年原理",
        "碘-131治療應用",
        "鈷-60工業探傷",
        "氫同位素示蹤"
      ],
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
      "skeleton": "1. 初態: 列出所有形式的能量(KE/PE/內能)\n2. 過程: 計算外力做功(W=Fs/Fd)\n3. 末態: 能量重新分配\n4. 應用能量守恆: 初能量 + W = 末能量",
      "variations": [
        "單擺(勢能↔動能，忽略空氣阻力)",
        "滑塊下斜面(摩擦力生熱→內能)",
        "彈簧系統(彈性勢能↔動能)",
        "完全非彈性碰撞(動能損失→內能/聲能)"
      ],
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
      ]
    },
    {
      "id": "ph-mp-03",
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
      "skeleton": "1. 辨認波的性質(反射/折射/干涉/衍射)\n2. 畫光路圖(入射角=反射角)\n3. 用 n=sin i/sin r 計算折射角\n4. 解釋現象(如全反射、色散)",
      "variations": [
        "平面鏡成像(虛像、等距離)",
        "折射定律(空氣→玻璃、斯涅爾定律)",
        "全反射(光導纖維原理)",
        "薄膜干涉(牛頓圈、肥皂膜顏色)"
      ],
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
      ]
    },
    {
      "id": "ph-mp-04",
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
      "skeleton": "1. 簡化串並聯電路\n2. 計算等效電阻(R=R1+R2 或 1/R=1/R1+1/R2)\n3. 用 I=V/R 求總電流\n4. 分流/分壓規則求各支路\n5. P=VI=I²R=V²/R 計算功率",
      "variations": [
        "純電阻電路(串並聯混聯)",
        "含電動機電路(非純電阻，P=VI不能用I²R)",
        "最大功率傳輸(內阻=外阻)",
        "電容充放電(Q=CV、時間常數RC)"
      ],
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
      ]
    },
    {
      "id": "ph-mp-05",
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
      "skeleton": "1. 用 N=N₀(1/2)^(t/T) 計算剩餘原子核\n2. 畫衰變曲線(指數衰減)\n3. 計算衰變率(ΔN/Δt = λN)\n4. 應用於年代測定(碳14測年)",
      "variations": [
        "α衰變(質量數-4、質子數-2)",
        "β衰變(中子→質子+電子)",
        "γ衰變(能量釋放、質量數質子數不變)",
        "半衰期應用(碳14測年、放射性治療)"
      ],
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
      ]
    }
  ],
  "domains": [
    {
      "id": "PH-HT",
      "nameZh": "熱和氣體",
      "nameEn": "Heat and Gases",
      "group": "必修",
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
      "group": "必修",
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
      "group": "必修",
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
      "group": "必修",
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
      "group": "必修",
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
      "group": "選修",
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
      "group": "選修",
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
      "group": "選修",
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
      "group": "選修",
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
      "group": "SBA",
      "color": "#6b7280",
      "code": {
        "zh": "實驗技能",
        "en": "Experimental Skills"
      }
    }
  ]
};

if (typeof module !== "undefined" && module.exports) module.exports = DSE_PHYSICS_GRAPH;
