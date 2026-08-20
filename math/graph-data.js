const DSE_MATH_GRAPH = {
 "meta": {
  "version": "0.2.0-P1",
  "updated": "2026-08-18",
  "scope": [
   "Compulsory",
   "M2"
  ],
  "levels": {
   "domain": "範疇 Domain",
   "topic": "課題 Topic",
   "leaf": "公式/知識點 Formula leaf"
  },
  "edgeTypes": {
   "prereq": {
    "zh": "前置",
    "en": "Prerequisite",
    "color": "#8b5cf6",
    "dash": "none"
   },
   "derives": {
    "zh": "推導",
    "en": "Derives",
    "color": "#0ea5e9",
    "dash": "6 4"
   },
   "related": {
    "zh": "相關",
    "en": "Related",
    "color": "#94a3b8",
    "dash": "2 4"
   },
   "cotested": {
    "zh": "組合出題",
    "en": "Co-tested",
    "color": "#f59e0b",
    "dash": "none"
   }
  },
  "knowledgeTypes": {
   "formula": {
    "zh": "公式",
    "en": "Formula",
    "color": "#60a5fa"
   },
   "theorem": {
    "zh": "公理·定理",
    "en": "Theorem",
    "color": "#a78bfa"
   },
   "corollary": {
    "zh": "推論/衍生公式",
    "en": "Corollary",
    "color": "#fbbf24"
   }
  }
 },
 "domains": [
  {
   "id": "NA",
   "code": {
    "zh": "數與代數",
    "en": "Number & Algebra"
   },
   "color": "#6366f1",
   "group": "core"
  },
  {
   "id": "MS",
   "code": {
    "zh": "度量、圖形與空間",
    "en": "Measures, Shape & Space"
   },
   "color": "#10b981",
   "group": "core"
  },
  {
   "id": "DP",
   "code": {
    "zh": "數據處理",
    "en": "Data Handling"
   },
   "color": "#f43f5e",
   "group": "core"
  },
  {
   "id": "M2",
   "code": {
    "zh": "延伸 M2 · 代數與微積分",
    "en": "Ext. M2 · Algebra & Calculus"
   },
   "color": "#d97706",
   "group": "extended"
  }
 ],
 "nodes": [
  {
   "id": "na-01",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 1,
   "examFrequency": 2,
   "examSection": "A1",
   "name": {
    "zh": "有理數與無理數",
    "en": "Rational & Irrational Numbers"
   },
   "leaves": [
    {
     "id": "na-01-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "有理數/無理數的判別",
      "en": "Rational vs irrational"
     },
     "formula": "\\text{有理數} = \\frac{a}{b}\\ (a,b\\in\\mathbb{Z},\\ b\\neq 0)",
     "pitfall": {
      "zh": "分數、有限小數、循環小數都是有理數；π、√2 是無理數",
      "en": "Fractions, terminating & recurring decimals are rational; π, √2 are irrational"
     }
    },
    {
     "id": "na-01-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "分母有理化",
      "en": "Rationalising the denominator"
     },
     "formula": "\\frac{1}{\\sqrt{a}+\\sqrt{b}} = \\frac{\\sqrt{a}-\\sqrt{b}}{a-b}",
     "pitfall": {
      "zh": "分母有理化是後續根式運算的基礎。DSE雖不直接考但常需要此技能",
      "en": "Rationalising the denominator is the foundation for later radical arithmetic. Though not directly tested in DSE, this skill is frequently required."
     }
    },
    {
     "id": "na-01-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "無理數估算",
      "en": "Estimating irrationals"
     },
     "formula": "\\sqrt{2} \\approx 1.414;\\ \\pi \\approx 3.1416",
     "pitfall": {
      "zh": "記住常用無理數近似值；用於檢驗答案合理性",
      "en": "Memorize common approximations; use to check answer reasonableness"
     }
    },
    {
     "id": "na-01-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "無理數的性質",
      "en": "Properties of irrationals"
     },
     "formula": "\\text{有理數} + \\text{無理數} = \\text{無理數；非零有理數} \\times \\text{無理數} = \\text{無理數}",
     "pitfall": {
      "zh": "兩無理數的和/積不一定是無理數（如√2和−√2）",
      "en": "Sum/product of two irrationals not necessarily irrational (e.g., √2 and −√2)"
     }
    }
   ]
  },
  {
   "id": "na-02",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4"
   ],
   "weight": "mid",
   "diff": 1,
   "examFrequency": 13,
   "examSection": "A1",
   "name": {
    "zh": "百分法",
    "en": "Percentages"
   },
   "leaves": [
    {
     "id": "na-02-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "百分變化",
      "en": "Percentage change"
     },
     "formula": "新值 = 原值 \\times (1 \\pm r\\%)",
     "pitfall": {
      "zh": "連續變化要連乘，不能把百分率直接相加",
      "en": "Compound changes multiply; never add rates"
     }
    },
    {
     "id": "na-02-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "盈利虧蝕與折扣",
      "en": "Profit/loss & discount"
     },
     "formula": "盈利百分率 = \\frac{\\text{售價}-\\text{成本}}{\\text{成本}} \\times 100\\%",
     "pitfall": {
      "zh": "盈利和虧蝕的基準量不同：盈利是相對成本，折扣是相對標價。DSE常考混淆這兩者",
      "en": "Profit and loss use different reference amounts: profit is relative to cost, discount is relative to marked price. DSE often tests confusing the two."
     }
    },
    {
     "id": "na-02-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "複利與增長/折舊",
      "en": "Compound interest & growth/decay"
     },
     "formula": "A = P(1 + \\frac{r\\%}{n})^{nt}",
     "pitfall": {
      "zh": "折舊用 (1-r%)，半衰類題注意指數含義",
      "en": "Decay uses (1-r%); mind the exponent meaning"
     }
    },
    {
     "id": "na-02-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "單利",
      "en": "Simple interest"
     },
     "formula": "I = P \\times r\\% \\times t",
     "pitfall": {
      "zh": "單利不產生利滾利，常用於短期存款",
      "en": "Simple interest doesn't compound; used for short-term"
     }
    },
    {
     "id": "na-02-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "增長率與折舊率的識別",
      "en": "Growth vs depreciation rate recognition"
     },
     "formula": "\\text{增長：} A = P(1+r\\%)^t; \\text{折舊：} A = P(1-r\\%)^t",
     "pitfall": {
      "zh": "折舊用減號，半衰期折舊率50%而非100%",
      "en": "Depreciation uses minus; half-life rate is 50% not 100%"
     }
    },
    {
     "id": "na-02-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "百分法應用題建模",
      "en": "Percent word problems"
     },
     "formula": "\\text{識別：原值、新值、變化百分率三者知其二求第三}",
     "pitfall": {
      "zh": "區分變化率與最終值；連續變化要分步或連乘",
      "en": "Distinguish rate from final value; compound changes multiply"
     }
    }
   ]
  },
  {
   "id": "na-03",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4",
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "指數與對數函數",
    "en": "Exponential & Logarithmic Functions"
   },
   "leaves": [
    {
     "id": "na-03-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "對數定義",
      "en": "Definition of logarithm"
     },
     "formula": "x = \\log_a b \\iff a^x = b",
     "pitfall": {
      "zh": "指數運算法則：同底數相乘指數相加。DSE常考和等比數列結合",
      "en": "Law of indices: multiplying same bases adds the exponents. DSE often combines this with geometric sequences."
     }
    },
    {
     "id": "na-03-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "對數運算法則",
      "en": "Laws of logarithms"
     },
     "formula": "\\log_a(MN)=\\log_a M+\\log_a N;\\ \\log_a\\frac{M}{N}=\\log_a M-\\log_a N;\\ \\log_a M^n = n\\log_a M",
     "pitfall": {
      "zh": "對數是指數的反運算。DSE常考換底公式和log運算法則",
      "en": "Logarithms are the inverse of exponentials. DSE often tests the change-of-base formula and log laws."
     }
    },
    {
     "id": "na-03-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "換底公式",
      "en": "Change of base"
     },
     "formula": "\\log_a b = \\frac{\\log_c b}{\\log_c a}",
     "pitfall": {
      "zh": "換底時分子分母別顛倒；log_a a = 1，log_a 1 = 0",
      "en": "Don't flip numerator/denominator; log_a a = 1, log_a 1 = 0"
     }
    },
    {
     "id": "na-03-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "指/對數方程",
      "en": "Exponential & log equations"
     },
     "pitfall": {
      "zh": "解對數方程必須驗根（真數 > 0，底數 > 0 且 ≠1）",
      "en": "Check roots: argument > 0, base > 0 and ≠ 1"
     }
    },
    {
     "id": "na-03-l5",
     "knowledgeType": "theorem",
     "name": {
      "zh": "指數函數性質",
      "en": "Properties of exponential functions"
     },
     "formula": "a>1 \\text{時遞增}; 0<a<1 \\text{時遞減}; \\text{過點}(0,1)",
     "pitfall": {
      "zh": "底數a>0且a≠1；圖像恆在x軸上方",
      "en": "Base a>0 and a≠1; always above x-axis"
     }
    },
    {
     "id": "na-03-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "對數函數性質",
      "en": "Properties of logarithmic functions"
     },
     "formula": "\\text{過點}(1,0); a>1 \\text{遞增}, 0<a<1 \\text{遞減}",
     "pitfall": {
      "zh": "定義域x>0；與指數函數關於y=x對稱",
      "en": "Domain x>0; symmetric to exp. func. about y=x"
     }
    }
   ]
  },
  {
   "id": "na-04",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "A1",
   "name": {
    "zh": "冪與指數法則",
    "en": "Indices & Laws of Indices"
   },
   "leaves": [
    {
     "id": "na-04-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "指數基本法則",
      "en": "Laws of indices"
     },
     "formula": "a^m\\cdot a^n = a^{m+n};\\quad \\frac{a^m}{a^n}=a^{m-n};\\quad (a^m)^n = a^{mn}",
     "pitfall": {
      "zh": "負指數a^(-n)=1/a^n，分數指數a^(m/n)=n次根號(a^m)。DSE常考化簡",
      "en": "Negative index a^(-n)=1/a^n; fractional index a^(m/n)=n-th root of a^m. DSE often tests simplification."
     }
    },
    {
     "id": "na-04-l2",
     "knowledgeType": "corollary",
     "name": {
      "zh": "零/負/分數指數",
      "en": "Zero, negative & fractional indices"
     },
     "formula": "a^0=1;\\ a^{-n}=\\frac{1}{a^n};\\ a^{\\frac{m}{n}}=\\sqrt[n]{a^m}",
     "pitfall": {
      "zh": "科學記數法a乘10^n。DSE卷一近似值題常要求用科學記數法表示答案",
      "en": "Scientific notation a×10^n. Paper 1 approximation questions often require answers in scientific notation."
     }
    },
    {
     "id": "na-04-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "科學記數法",
      "en": "Scientific notation"
     },
     "formula": "a \\times 10^n\\ (1 \\leq a < 10)",
     "pitfall": {
      "zh": "a 的範圍是 1 ≤ a < 10；數量級由 n 決定",
      "en": "1 ≤ a < 10; magnitude set by n"
     }
    },
    {
     "id": "na-04-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "指數方程",
      "en": "Exponential equations"
     },
     "formula": "化簡為同底數：a^{f(x)} = a^{g(x)} ⇒ f(x)=g(x)",
     "pitfall": {
      "zh": "兩邊指數要能化簡；注意底數為 0/1 時的特殊情況",
      "en": "Simplify to same base; mind special cases when base is 0/1"
     }
    },
    {
     "id": "na-04-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "指數不等式",
      "en": "Exponential inequalities"
     },
     "formula": "a>1 時遞增；0<a<1 時遞減",
     "pitfall": {
      "zh": "底數小於 1 時不等式方向要翻轉",
      "en": "Flip inequality when base < 1"
     }
    },
    {
     "id": "na-04-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "指數函數圖像",
      "en": "Exponential function graph"
     },
     "formula": "y=a^x\\ (a>0,a\\neq1) 恆過 (0,1)",
     "pitfall": {
      "zh": "a>1 遞增；0<a<1 遞減；y 軸為水平漸近線",
      "en": "Increasing when a>1; decreasing when 0<a<1; y-axis is horizontal asymptote"
     }
    },
    {
     "id": "na-04-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "指數增長與衰減模型",
      "en": "Exponential growth & decay models"
     },
     "formula": "\\text{增長：加倍時間；衰減：半衰期}",
     "pitfall": {
      "zh": "實際應用：人口增長、放射性衰變、藥物代謝",
      "en": "Applications: population, radioactivity, drug metabolism"
     }
    },
    {
     "id": "na-04-l8",
     "knowledgeType": "theorem",
     "name": {
      "zh": "指數運算的綜合應用",
      "en": "Complex指數 manipulation"
     },
     "formula": "\\text{結合因式分解、換元法簡化複雜指數表達式}",
     "pitfall": {
      "zh": "指數問題常需代數技巧；注意底數符號限制",
      "en": "Exponential problems need algebraic skills; mind base sign restrictions"
     }
    }
   ]
  },
  {
   "id": "na-05",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4",
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 12,
   "examSection": "B",
   "name": {
    "zh": "多項式",
    "en": "Polynomials"
   },
   "leaves": [
    {
     "id": "na-05-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "多項式四則與分離係數法",
      "en": "Ops & detached coefficients"
     },
     "pitfall": {
      "zh": "餘式定理：f(x)除以(x-a)餘數是f(a)。DSE常考和因式定理組合",
      "en": "Remainder theorem: the remainder when f(x) is divided by (x-a) is f(a). DSE often combines it with the factor theorem."
     }
    },
    {
     "id": "na-05-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "餘式定理",
      "en": "Remainder Theorem"
     },
     "formula": "\\text{餘式} = f(\\text{除式的根})",
     "pitfall": {
      "zh": "除以 (x-a) 餘 f(a)；除以 (ax+b) 記得 f(-b/a)",
      "en": "Dividing by (x-a) leaves f(a); for (ax+b) use f(-b/a)"
     }
    },
    {
     "id": "na-05-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "因式定理",
      "en": "Factor Theorem"
     },
     "formula": "f(a)=0 \\iff (x-a) \\text{ 整除 } f(x)",
     "pitfall": {
      "zh": "因式定理：若f(a)=0則(x-a)是f(x)的因式。DSE常考先猜有理根再因式分解",
      "en": "Factor theorem: if f(a)=0 then (x-a) is a factor of f(x). DSE often tests guessing rational roots before factorising."
     }
    },
    {
     "id": "na-05-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "多項式除法（長除法）",
      "en": "Polynomial division (long division)"
     },
     "pitfall": {
      "zh": "按降冪排列；缺項補零；餘式次數低於除式",
      "en": "Arrange in descending powers; fill missing terms; remainder degree < divisor"
     }
    },
    {
     "id": "na-05-l5",
     "knowledgeType": "theorem",
     "name": {
      "zh": "最高公因式",
      "en": "Highest common factor (HCF)"
     },
     "formula": "用輾轉相除法或因式分解找 HCF",
     "pitfall": {
      "zh": "HCF 可用於約分；多個多項式的 HCF 找公共因式",
      "en": "HCF used for simplification; find common factors of multiple polynomials"
     }
    },
    {
     "id": "na-05-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "多項式恆等",
      "en": "Polynomial identity"
     },
     "formula": "兩多項式恆等 ⇔ 對應係數相等",
     "pitfall": {
      "zh": "待定係數法設未知係數，代入特殊值求解",
      "en": "Set undetermined coefficients; substitute special values to solve"
     }
    },
    {
     "id": "na-05-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "多項式的根與係數關係",
      "en": "Roots and coefficients relation"
     },
     "formula": "\\text{二次方程根與係數：} x_1+x_2=-b/a,\\ x_1x_2=c/a",
     "pitfall": {
      "zh": "韋達定理常用於對稱式；可構造新方程",
      "en": "Vieta's formulas for symmetric expressions; construct new equations"
     }
    },
    {
     "id": "na-05-l8",
     "knowledgeType": "theorem",
     "name": {
      "zh": "多項式圖像性質",
      "en": "Properties of polynomial graphs"
     },
     "formula": "\\text{次數} = \\text{與 x 軸交點的最大個數；首項係數決定端點走向}",
     "pitfall": {
      "zh": "奇次多項式兩端異向；偶次多項式兩端同向",
      "en": "Odd-degree polynomials have opposite ends; even-degree have same ends"
     }
    }
   ]
  },
  {
   "id": "na-06",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "一元二次方程",
    "en": "Quadratic Equations"
   },
   "leaves": [
    {
     "id": "na-06-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "因式分解法",
      "en": "Factor method"
     },
     "pitfall": {
      "zh": "因式分解的方法選擇：先提公因式，再看能用公式法還是分組法。DSE常考綜合運用",
      "en": "Choose the factorisation method: take out the common factor first, then decide between the formula method and grouping. DSE tests combined application."
     }
    },
    {
     "id": "na-06-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "求根公式",
      "en": "Quadratic formula"
     },
     "formula": "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}",
     "pitfall": {
      "zh": "十字相乘法是解二次方程的核心工具。DSE常考大系數的十字相乘",
      "en": "Cross-multiplication is the core tool for solving quadratic equations. DSE often tests the cross method with large coefficients."
     }
    },
    {
     "id": "na-06-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "判別式",
      "en": "Discriminant"
     },
     "formula": "\\Delta = b^2 - 4ac",
     "pitfall": {
      "zh": "「有實根」含 Δ=0；「兩相異實根」才是 Δ>0",
      "en": "'Real roots' includes Δ=0; 'two distinct' needs Δ>0"
     }
    },
    {
     "id": "na-06-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "根與係數的關係（韋達定理）",
      "en": "Sum & product of roots"
     },
     "formula": "\\alpha+\\beta = -\\frac{b}{a},\\quad \\alpha\\beta = \\frac{c}{a}",
     "pitfall": {
      "zh": "新方程構造題：以 α+k, β+k 為根的新方程常漏乘係數還原",
      "en": "When building new equations, don't forget leading coefficient"
     }
    },
    {
     "id": "na-06-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "判別式與圖像交點",
      "en": "Discriminant & intersections"
     },
     "formula": "\\Delta>0\\ \\text{兩交點};\\ \\Delta=0\\ \\text{相切};\\ \\Delta<0\\ \\text{無交點}",
     "pitfall": {
      "zh": "「直線與二次曲線交點個數」題：先代入聯立，再判 Δ",
      "en": "For line–curve intersections, substitute first, then test Δ"
     }
    },
    {
     "id": "na-06-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "二次方程應用題（建模）",
      "en": "Modelling with quadratics"
     },
     "pitfall": {
      "zh": "設未知數建模後，檢驗根是否符合題意（負根/超範圍要捨去）",
      "en": "Check roots against the context; reject negative / out-of-range roots"
     }
    }
   ]
  },
  {
   "id": "na-07",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4",
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "函數與函數圖像",
    "en": "Functions & Graphs"
   },
   "leaves": [
    {
     "id": "na-07-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "函數記法與定義域",
      "en": "Notation & domain"
     },
     "pitfall": {
      "zh": "函數三要素：定義域、對應法則、值域。DSE常考求定義域（分母不為零、根號內非負、對數真數大於零）",
      "en": "Three elements of a function: domain, mapping rule and range. DSE often tests finding the domain (non-zero denominator, non-negative radicand, positive log argument)."
     }
    },
    {
     "id": "na-07-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "二次函數圖像",
      "en": "Quadratic function graph"
     },
     "formula": "y = a(x-h)^2 + k \\ \\text{（頂點 }(h,k)\\text{）}",
     "pitfall": {
      "zh": "判斷函數類型看運算：多項式、有理函數、根式函數。DSE常考據此選擇畫圖策略",
      "en": "Identify the function type by its operations: polynomial, rational or radical. DSE tests choosing the graphing strategy accordingly."
     }
    },
    {
     "id": "na-07-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "配方法",
      "en": "Completing the square"
     },
     "pitfall": {
      "zh": "定義域限制會影響值域和圖像形狀。DSE常在求函數極值時設定義域陷阱",
      "en": "Domain restrictions affect the range and the shape of the graph. DSE sets domain traps when finding extrema."
     }
    },
    {
     "id": "na-07-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "聯立方程（直線與二次）",
      "en": "Simultaneous (linear-quadratic)"
     },
     "pitfall": {
      "zh": "交點個數 = 代入後判別式：Δ>0 兩點、Δ=0 相切、Δ<0 不相交",
      "en": "Intersections = discriminant after substitution"
     }
    },
    {
     "id": "na-07-l5",
     "knowledgeType": "theorem",
     "name": {
      "zh": "函數的定義與對應",
      "en": "Function definition & mapping"
     },
     "pitfall": {
      "zh": "每個 x 有且只有一個 y；考試常用垂直線判別函數",
      "en": "Each x has exactly one y; use vertical line test"
     }
    },
    {
     "id": "na-07-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "定義域的常見限制",
      "en": "Common domain restrictions"
     },
     "pitfall": {
      "zh": "分母 ≠ 0；根號下 ≥ 0；對數真數 > 0；底數 > 0 且 ≠ 1",
      "en": "Denominator ≠ 0; sqrt ≥ 0; log argument > 0; base > 0, ≠ 1"
     }
    },
    {
     "id": "na-07-l7",
     "knowledgeType": "formula",
     "name": {
      "zh": "函數值與圖像",
      "en": "Function values & graphs"
     },
     "formula": "f(a) = \\text{圖像在 }x=a\\text{ 時的 y 值}",
     "pitfall": {
      "zh": "f(a) 讀圖像：在 x=a 處作垂線找交點",
      "en": "Read f(a) from graph: vertical line at x=a"
     }
    }
   ]
  },
  {
   "id": "na-08",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4"
   ],
   "weight": "mid",
   "diff": 1,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "函數圖像變換",
    "en": "Transformations of Graphs"
   },
   "leaves": [
    {
     "id": "na-08-l1",
     "knowledgeType": "corollary",
     "name": {
      "zh": "平移",
      "en": "Translation"
     },
     "formula": "y=f(x-h)+k：\\text{向右 }h\\text{、向上 }k",
     "pitfall": {
      "zh": "平移方向與符號相反：y=f(x+2)是向左移2；先移後變更安全",
      "en": "Translation opposite to sign: y=f(x+2) shifts LEFT 2; translate first then transform"
     }
    },
    {
     "id": "na-08-l2",
     "knowledgeType": "corollary",
     "name": {
      "zh": "反射",
      "en": "Reflection"
     },
     "formula": "y=-f(x)\\ \\text{關於 }x\\text{軸};\\quad y=f(-x)\\ \\text{關於 }y\\text{軸}",
     "pitfall": {
      "zh": "y=-f(x)上下翻轉（x軸為鏡）；y=f(-x)左右翻轉（y軸為鏡）",
      "en": "y=-f(x) reflects over x-axis (up-down); y=f(-x) reflects over y-axis (left-right)"
     }
    },
    {
     "id": "na-08-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "縮放（放大/縮小）",
      "en": "Stretch / shrink"
     },
     "formula": "y=kf(x)\\ \\text{縱向 }k\\text{ 倍};\\quad y=f(kx)\\ \\text{橫向 }\\frac{1}{k}\\text{ 倍}",
     "pitfall": {
      "zh": "縱向縮放是直觀倍數；橫向縮放是倒數倍數；k<1是縮小不是放大",
      "en": "Vertical scaling is intuitive multiple; horizontal is reciprocal; k<1 shrinks not enlarges"
     }
    },
    {
     "id": "na-08-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "複合變換",
      "en": "Combined transformations"
     },
     "formula": "y=a\\cdot f(b(x-h))+k\\ \\text{（多步變換順序）}",
     "pitfall": {
      "zh": "先橫向（b/h），再縱向（a/k），注意平移方向與符號",
      "en": "Horizontal first (b/h), then vertical (a/k); mind sign for translation"
     }
    },
    {
     "id": "na-08-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "絕對值函數變換",
      "en": "Absolute value transformations"
     },
     "formula": "y=|f(x)|\\ \\text{反射負部分到上方};\\quad y=f(|x|)\\ \\text{對稱於 }y\\text{軸}",
     "pitfall": {
      "zh": "|f(x)| 改變圖像上下位置；f(|x|) 改變左右對稱",
      "en": "|f(x)| flips negative parts up; f(|x|) mirrors left-right"
     }
    },
    {
     "id": "na-08-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "變換後的性質",
      "en": "Properties after transformation"
     },
     "pitfall": {
      "zh": "平移不改變形狀/大小；縮放改變比例；反射改變方向",
      "en": "Translation preserves shape/size; scaling changes proportions; reflection changes orientation"
     }
    }
   ]
  },
  {
   "id": "na-09",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S4",
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 11,
   "examSection": "A2",
   "name": {
    "zh": "變分",
    "en": "Variations"
   },
   "leaves": [
    {
     "id": "na-09-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "正變與反變",
      "en": "Direct & inverse variation"
     },
     "formula": "y \\propto x \\Rightarrow y=kx;\\quad y \\propto \\frac{1}{x} \\Rightarrow y=\\frac{k}{x}",
     "pitfall": {
      "zh": "變分y=kx^n中n決定曲線形狀。DSE常考判斷變分類型和求常數k",
      "en": "In variation y=kx^n, n determines the shape of the curve. DSE tests identifying the variation type and finding the constant k."
     }
    },
    {
     "id": "na-09-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "聯變與部分變",
      "en": "Joint & partial variation"
     },
     "pitfall": {
      "zh": "部分變 y = k1x + k2/x 需兩組條件解聯立",
      "en": "Partial variation needs two simultaneous conditions"
     }
    },
    {
     "id": "na-09-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "聯立方程",
      "en": "Simultaneous equations"
     },
     "formula": "聯立變分方程求解參數",
     "pitfall": {
      "zh": "注意變分關係必須同時滿足",
      "en": "All variation relations must hold"
     }
    },
    {
     "id": "na-09-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "最優解",
      "en": "Optimal solution"
     },
     "formula": "在約束條件下求函數極值",
     "pitfall": {
      "zh": "變分問題的邊界條件",
      "en": "Boundary conditions in variation"
     }
    },
    {
     "id": "na-09-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "應用題建模",
      "en": "Word problem modeling"
     },
     "formula": "從文字描述建立變分模型",
     "pitfall": {
      "zh": "識別「正比於」與「反比於」的關鍵詞",
      "en": "Identify \"directly proportional\" vs \"inversely proportional\""
     }
    },
    {
     "id": "na-09-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "變分的圖形意義",
      "en": "Graphical meaning of variation"
     },
     "formula": "正變：過原點直線；反變：雙曲線；聯變：疊加圖象",
     "pitfall": {
      "zh": "k 值控制陡峭程度/開口大小；第一象限為主",
      "en": "k controls steepness; first quadrant primary"
     }
    },
    {
     "id": "na-09-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "變分與等式/不等式",
      "en": "Variation & equations/inequalities"
     },
     "formula": "\\text{變分關係可以轉化為等式或不等式問題}",
     "pitfall": {
      "zh": "變分參數k通常為正；注意定義域限制",
      "en": "Variation parameter k usually positive; mind domain restrictions"
     }
    }
   ]
  },
  {
   "id": "na-10",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "B",
   "name": {
    "zh": "等差與等比數列",
    "en": "Arithmetic & Geometric Sequences"
   },
   "leaves": [
    {
     "id": "na-10-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "等差數列通項與求和",
      "en": "AP: general term & sum"
     },
     "formula": "a_n = a + (n-1)d;\\quad S_n = \\frac{n}{2}(2a+(n-1)d) = \\frac{n}{2}(a+l)",
     "pitfall": {
      "zh": "等差數列通項an=a1+(n-1)d，前n項和Sn=n/2(a1+an)。DSE必考",
      "en": "Arithmetic sequence general term a_n=a1+(n-1)d; sum S_n=n/2(a1+a_n). DSE always tests this."
     }
    },
    {
     "id": "na-10-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "等比數列通項與求和",
      "en": "GP: general term & sum"
     },
     "formula": "a_n = ar^{n-1};\\quad S_n = \\frac{a(r^n-1)}{r-1}\\ (r \\neq 1)",
     "pitfall": {
      "zh": "|r|<1 無窮和 S=a/(1-r)；數列題先判斷 AP/GP 再套公式",
      "en": "Infinite sum needs |r|<1; identify AP/GP first"
     }
    },
    {
     "id": "na-10-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "等差/等比中項",
      "en": "Arithmetic & geometric means"
     },
     "formula": "\\text{等差中項 }A=\\frac{a+b}{2};\\quad \\text{等比中項 }G=\\sqrt{ab}",
     "pitfall": {
      "zh": "等差中項2b=a+c和等比中項b^2=ac。DSE常考在數列中插入項的問題",
      "en": "Arithmetic mean 2b=a+c and geometric mean b^2=ac. DSE tests inserting terms between sequence terms."
     }
    },
    {
     "id": "na-10-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "由 Sₙ 反推通項",
      "en": "General term from Sₙ"
     },
     "formula": "a_n = S_n - S_{n-1}\\ (n \\geq 2)",
     "pitfall": {
      "zh": "n=1 時要單獨驗 a₁ = S₁；兩段式通項要分開寫",
      "en": "Check a₁ = S₁ separately; piecewise general term"
     }
    },
    {
     "id": "na-10-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "對數與等比數列組合題",
      "en": "Log & GP combined"
     },
     "pitfall": {
      "zh": "對數方程常與等比數列一起考（如 log₂aₙ + log₂aₙ₊₁ = 5）",
      "en": "Log equations often tested with GP (e.g., log₂aₙ + log₂aₙ₊₁ = 5)"
     }
    },
    {
     "id": "na-10-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "無窮等比級數",
      "en": "Infinite geometric series"
     },
     "formula": "S_{\\infty} = \\frac{a}{1-r}\\ (|r|<1)",
     "pitfall": {
      "zh": "收斂條件是 |r|<1；應用題要判斷是否符合收斂條件",
      "en": "Convergence requires |r|<1; check condition in word problems"
     }
    },
    {
     "id": "na-10-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "遞推公式求通項",
      "en": "General term from recurrence"
     },
     "formula": "由 aₙ₊₁ = raₙ + d 求通項：構造等差/等比數列",
     "pitfall": {
      "zh": "線性遞推可化為 AP/GP；需用待定係數法或配常數",
      "en": "Linear recurrence reduces to AP/GP; use undetermined coefficients or complete constant"
     }
    }
   ]
  },
  {
   "id": "na-11",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S5"
   ],
   "weight": "mid",
   "diff": 2,
   "examFrequency": 11,
   "examSection": "A2",
   "name": {
    "zh": "不等式與線性規劃",
    "en": "Inequalities & Linear Programming"
   },
   "leaves": [
    {
     "id": "na-11-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "一元一次與二次不等式",
      "en": "Linear & quadratic inequalities"
     },
     "pitfall": {
      "zh": "二次不等式先看開口與根；除以負數要翻轉符號",
      "en": "Check parabola opening & roots; flip sign when dividing by negative"
     }
    },
    {
     "id": "na-11-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "線性規劃",
      "en": "Linear programming"
     },
     "pitfall": {
      "zh": "畫可行域時注意不等號方向（實線/虛線）。DSE常考約束條件隱藏在文字描述中",
      "en": "When drawing the feasible region, watch the inequality direction (solid/dashed lines). DSE hides constraints in the wording."
     }
    },
    {
     "id": "na-11-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "二次不等式解集",
      "en": "Quadratic inequality solution"
     },
     "formula": "ax^2+bx+c>0 的解集取決於 a 的符號與判別式",
     "pitfall": {
      "zh": "開口向上/向下影響解集方向",
      "en": "Sign of a affects solution direction"
     }
    },
    {
     "id": "na-11-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "絕對值不等式",
      "en": "Absolute value inequality"
     },
     "formula": "|ax+b|>c 分情況討論 ax+b>c 或 ax+b<-c",
     "pitfall": {
      "zh": "c<0 時的情況不要漏掉",
      "en": "Do not miss c<0 case"
     }
    },
    {
     "id": "na-11-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "不等式組與可行域",
      "en": "Inequality system and feasible region"
     },
     "formula": "多個不等式的交集形成可行域",
     "pitfall": {
      "zh": "可行域可能是空集",
      "en": "Feasible region can be empty"
     }
    },
    {
     "id": "na-11-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "分式不等式",
      "en": "Rational inequality"
     },
     "formula": "\\frac{P(x)}{Q(x)}>0 \\Leftrightarrow P(x)Q(x)>0\\ (Q(x)\\neq 0)",
     "pitfall": {
      "zh": "先移項通分，再轉化為整式不等式；分母不能為零",
      "en": "Combine into single fraction, then convert; denominator ≠ 0"
     }
    },
    {
     "id": "na-11-l7",
     "knowledgeType": "theorem",
     "name": {
      "zh": "線性規劃最優解",
      "en": "Optimal solution in linear programming"
     },
     "pitfall": {
      "zh": "最優解在可行域頂點處取得；需檢驗所有頂點",
      "en": "Optimal solution at vertex; test all vertices"
     }
    }
   ]
  },
  {
   "id": "na-12",
   "level": "topic",
   "domain": "NA",
   "grades": [
    "S5",
    "S6"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 10,
   "examSection": "B",
   "name": {
    "zh": "二項展開式",
    "en": "Binomial Expansion"
   },
   "leaves": [
    {
     "id": "na-12-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "二項式定理與帕斯卡三角",
      "en": "Binomial theorem & Pascal's triangle"
     },
     "formula": "(a+b)^n = \\sum_{k=0}^{n} C^n_k a^{n-k}b^k",
     "pitfall": {
      "zh": "通項公式T(r+1)=C(n,r)*a^(n-r)*b^r。DSE常考求特定項的係數",
      "en": "General term T(r+1)=C(n,r)a^(n-r)b^r. DSE often tests finding the coefficient of a specific term."
     }
    },
    {
     "id": "na-12-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "通項公式",
      "en": "General term"
     },
     "formula": "T_{r+1} = C^n_r a^{n-r}b^r",
     "pitfall": {
      "zh": "求特定 x 冪次項：令指數相等解 r，係數含 C(n,r)",
      "en": "Equate exponents to find r; coefficient includes C(n,r)"
     }
    },
    {
     "id": "na-12-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "通項係數",
      "en": "Binomial coefficient from general term"
     },
     "formula": "第 r+1 項係數為 \\binom{n}{r}a^{n-r}b^r",
     "pitfall": {
      "zh": "注意 r 從 0 開始計數",
      "en": "r starts from 0"
     }
    },
    {
     "id": "na-12-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "中間項與最大項",
      "en": "Middle and maximum terms"
     },
     "formula": "n 為偶數時有唯一的中間項，係數最大",
     "pitfall": {
      "zh": "奇數 n 時有兩個中間項",
      "en": "Two middle terms when n is odd"
     }
    },
    {
     "id": "na-12-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "係數性質",
      "en": "Properties of binomial coefficients"
     },
     "formula": "係數和 = 2^n，對稱性 \\binom{n}{r}=\\binom{n}{n-r}",
     "pitfall": {
      "zh": "這些性質常用於選擇題",
      "en": "Used in multiple choice questions"
     }
    },
    {
     "id": "na-12-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "二項式定理的應用",
      "en": "Applications of binomial theorem"
     },
     "formula": "近似計算、整除性證明、組合恆等式證明",
     "pitfall": {
      "zh": "近似時忽略高次小項；證明整除常構造二項式",
      "en": "Ignore higher-order terms for approximation; construct binomial for divisibility"
     }
    },
    {
     "id": "na-12-l7",
     "knowledgeType": "theorem",
     "name": {
      "zh": "組合恆等式（二項式係數）",
      "en": "Combinatorial identities"
     },
     "formula": "\\sum_{r=0}^n \\binom{n}{r} = 2^n;\\quad \\sum_{r=0}^n (-1)^r\\binom{n}{r} = 0",
     "pitfall": {
      "zh": "利用二項式定理特殊值代入證明；常見代入a=1,b=-1",
      "en": "Prove by substituting special values into binomial theorem"
     }
    }
   ]
  },
  {
   "id": "ms-01",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S4"
   ],
   "weight": "mid",
   "diff": 1,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "續三角學與三維空間",
    "en": "More Trigonometry (3D)"
   },
   "leaves": [
    {
     "id": "ms-01-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "仰角與俯角",
      "en": "Angle of elevation & depression"
     },
     "formula": "\\text{仰角：向上看；俯角：向下看（均自水平線量度）}",
     "pitfall": {
      "zh": "三維空間中兩點距離是勾股定理的推廣。DSE常考求對角線長度",
      "en": "Distance between two points in 3D generalises Pythagoras' theorem. DSE often tests diagonal lengths."
     }
    },
    {
     "id": "ms-01-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "方位角（羅盤方位）",
      "en": "Bearing / compass direction"
     },
     "formula": "N45^\\circ E \\ \\text{（自北順時針轉 45°）}",
     "pitfall": {
      "zh": "三角形內角和180度在立體幾何中仍然適用。DSE常在截面圖中考查",
      "en": "The 180° angle sum of a triangle still applies in solid geometry. DSE tests this in cross-section diagrams."
     }
    },
    {
     "id": "ms-01-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "三維問題分解為平面三角",
      "en": "3D problems → 2D triangles"
     },
     "pitfall": {
      "zh": "先找含所求量、且已知邊角的平面三角形；豎直線/水平線是關鍵",
      "en": "Pick the 2D triangle containing the unknown; vertical/horizontal lines are key"
     }
    },
    {
     "id": "ms-01-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "直線與平面的交角",
      "en": "Angle between line and plane"
     },
     "formula": "\\text{線與面交角} = \\arcsin(\\frac{\\text{垂直距離}}{\\text{斜線長度}})",
     "pitfall": {
      "zh": "是線與其在平面上投影的夾角，不是線與垂線的夾角",
      "en": "Angle between line and its projection, not with normal"
     }
    },
    {
     "id": "ms-01-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "平面間的交角（二面角）",
      "en": "Angle between two planes (dihedral angle)"
     },
     "formula": "\\text{二面角} = \\arccos(\\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1||\\vec{n}_2|})",
     "pitfall": {
      "zh": "是兩平面法線的夾角，或交線上兩垂線的夾角",
      "en": "Angle between normals, or between perpendiculars to intersection"
     }
    },
    {
     "id": "ms-01-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "三維空間中的距離公式",
      "en": "Distance formula in 3D"
     },
     "formula": "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}",
     "pitfall": {
      "zh": "二維距離公式的推廣；勾股定理的三維形式",
      "en": "Extension of 2D distance; 3D Pythagorean theorem"
     }
    }
   ]
  },
  {
   "id": "ms-02",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 0,
   "examSection": "P2",
   "name": {
    "zh": "三角學與極座標/基礎三角",
    "en": "Trigonometry: Basics & Solving"
   },
   "leaves": [
    {
     "id": "ms-02-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "特殊角與三角恆等式",
      "en": "Special angles & identities"
     },
     "formula": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta};\\ \\sin^2\\theta + \\cos^2\\theta = 1",
     "pitfall": {
      "zh": "特殊角(30/45/60度)的三角函數值必須熟記。CAST規則本身卷一不考",
      "en": "Exact trig values for special angles (30°/45°/60°) must be memorised. The CAST rule itself is not tested in Paper 1."
     }
    },
    {
     "id": "ms-02-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "正弦定理",
      "en": "Sine Rule"
     },
     "formula": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R",
     "pitfall": {
      "zh": "正弦定理a/sinA=b/sinB。DSE常考已知兩角一邊或兩邊及非夾角(ambiguous case)",
      "en": "Sine rule a/sinA=b/sinB. DSE tests given two angles and a side, or two sides and a non-included angle (ambiguous case)."
     }
    },
    {
     "id": "ms-02-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "餘弦定理",
      "en": "Cosine Rule"
     },
     "formula": "c^2 = a^2 + b^2 - 2ab\\cos C",
     "pitfall": {
      "zh": "求角用 cos C = (a²+b²-c²)/2ab；鈍角時 cos 為負不是錯誤",
      "en": "Obtuse angles give negative cosine — that's correct"
     }
    },
    {
     "id": "ms-02-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "三角形面積公式",
      "en": "Area of triangle"
     },
     "formula": "\\text{面積} = \\frac{1}{2}ab\\sin C",
     "pitfall": {
      "zh": "面積公式S=1/2*ab*sinC。DSE常和正餘弦定理組合使用",
      "en": "Area formula S=1/2·ab·sinC. DSE often combines it with the sine and cosine rules."
     }
    },
    {
     "id": "ms-02-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "解三角形的策略選擇",
      "en": "Choosing sine vs cosine rule"
     },
     "pitfall": {
      "zh": "兩角一邊用正弦；兩邊夾一角用餘弦；SSA（兩邊一對角）可能有兩解",
      "en": "Sine rule for AAS; cosine for SAS; SSA may give two solutions"
     }
    },
    {
     "id": "ms-02-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "正餘弦定理應用題",
      "en": "Applied sine/cosine problems"
     },
     "pitfall": {
      "zh": "測量/航行題先畫圖標註已知量，再判斷用哪個定理",
      "en": "Sketch and label given data first, then pick the rule"
     }
    }
   ]
  },
  {
   "id": "ms-03",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S4",
    "S5"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "B",
   "name": {
    "zh": "圓的基本性質",
    "en": "Basic Properties of Circles"
   },
   "leaves": [
    {
     "id": "ms-03-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "圓心角與圓周角",
      "en": "Central & inscribed angles"
     },
     "formula": "\\text{圓心角} = 2 \\times \\text{圓周角（同弧）}",
     "pitfall": {
      "zh": "圓的切線垂直於過切點的半徑，這是DSE卷一Section B圓題的起手式",
      "en": "A tangent to a circle is perpendicular to the radius at the point of contact — the opening move of Paper 1 Section B circle questions."
     }
    },
    {
     "id": "ms-03-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "圓內接四邊形",
      "en": "Cyclic quadrilateral"
     },
     "formula": "\\angle A + \\angle C = 180^\\circ",
     "pitfall": {
      "zh": "弦心距、弦長、半徑構成直角三角形——DSE圓題幾乎必用這個關係",
      "en": "Perpendicular distance to a chord, chord length and radius form a right triangle — used in nearly every DSE circle question."
     }
    },
    {
     "id": "ms-03-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "切線與半徑",
      "en": "Tangent & radius"
     },
     "formula": "\\text{切線} \\perp \\text{半徑}",
     "pitfall": {
      "zh": "切線判定/性質定理雙方向都要會用；alternate segment 常被遺忘",
      "en": "Both directions of tangent theorems; alternate segment is often forgotten"
     }
    },
    {
     "id": "ms-03-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "交切線定理（Tangent properties）",
      "en": "Intersecting tangents"
     },
     "formula": "TA = TB",
     "pitfall": {
      "zh": "圓內接四邊形對角互補。DSE偶爾考，常和圓周角定理組合",
      "en": "Opposite angles of a cyclic quadrilateral are supplementary. Occasionally tested, often with the angle-in-same-segment theorem."
     }
    },
    {
     "id": "ms-03-l5",
     "knowledgeType": "theorem",
     "name": {
      "zh": "弦切角定理（Alternate segment）",
      "en": "Alternate segment theorem"
     },
     "formula": "\\text{弦切角} = \\text{同弧上的圓周角}",
     "pitfall": {
      "zh": "alternate segment 是 DSE 圓題高頻失分點，務必辨認弦、切線與弧",
      "en": "Alternate segment is a top loss point; identify chord, tangent and arc"
     }
    },
    {
     "id": "ms-03-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "相交弦定理",
      "en": "Intersecting chords theorem"
     },
     "formula": "PA\\cdot PB = PC\\cdot PD",
     "pitfall": {
      "zh": "相交弦定理：兩弦相交，各弦被交點分成的兩段乘積相等。DSE常和切線長定理組合",
      "en": "Intersecting chords theorem: the products of the two segments of each chord are equal. Often combined with the tangent-secant theorem."
     }
    },
    {
     "id": "ms-03-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "圓的綜合幾何證明",
      "en": "Circle geometry proofs"
     },
     "formula": "\\text{常用路徑：切線→垂直→等腰三角形→等角}",
     "pitfall": {
      "zh": "圓題證明常需多步推理；標出所有已知角度找突破口",
      "en": "Circle proofs need multi-step reasoning; mark all known angles to find突破口"
     }
    },
    {
     "id": "ms-03-l8",
     "knowledgeType": "corollary",
     "name": {
      "zh": "圓與二次方程組合",
      "en": "Circle + quadratic equations"
     },
     "formula": "\\text{圓內弦長問題 → 建立座標系 → 聯立方程}",
     "pitfall": {
      "zh": "DSE 常考圓+弦長+判別式；幾何條件轉化為代數方程",
      "en": "DSE often tests circle+chord+discriminant; convert geometric conditions to algebra"
     }
    }
   ]
  },
  {
   "id": "ms-04",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "A1",
   "name": {
    "zh": "直角三角形三角學（初級）",
    "en": "Right-Angled Trigonometry"
   },
   "leaves": [
    {
     "id": "ms-04-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "三角比定義（SOH-CAH-TOA）",
      "en": "Definitions of sin/cos/tan"
     },
     "formula": "\\sin\\theta=\\frac{\\text{對}}{\\text{斜}};\\ \\cos\\theta=\\frac{\\text{鄰}}{\\text{斜}};\\ \\tan\\theta=\\frac{\\text{對}}{\\text{鄰}}",
     "pitfall": {
      "zh": "SOH-CAH-TOA是基礎但易混。DSE常考在非直角三角形中構造直角三角形",
      "en": "SOH-CAH-TOA is basic but easily mixed up. DSE tests constructing right triangles inside non-right triangles."
     }
    },
    {
     "id": "ms-04-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "特殊角 30°/45°/60° 三角比",
      "en": "Special angles"
     },
     "formula": "\\sin30°=\\frac{1}{2};\\ \\sin45°=\\frac{\\sqrt{2}}{2};\\ \\sin60°=\\frac{\\sqrt{3}}{2}",
     "pitfall": {
      "zh": "仰角和俯角的基準線是水平線。DSE應用題常考識別正確角度",
      "en": "Angles of elevation and depression are measured from the horizontal. DSE application questions test identifying the correct angle."
     }
    },
    {
     "id": "ms-04-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "解直角三角形",
      "en": "Solving right triangles"
     },
     "pitfall": {
      "zh": "先標出已知邊/角，再選正確的三角比；求角用反三角",
      "en": "Label given sides/angles first; use inverse trig to find angles"
     }
    },
    {
     "id": "ms-04-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "仰角與俯角",
      "en": "Angle of elevation & depression"
     },
     "pitfall": {
      "zh": "仰角從水平線向上；俯角向下；兩者相等（內錯角）",
      "en": "Elevation from horizontal up; depression down; they're equal (alternate angles)"
     }
    },
    {
     "id": "ms-04-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "方位角",
      "en": "Bearing"
     },
     "formula": "方位角從正北順時針測量",
     "pitfall": {
      "zh": "方位角 N30°E 表示從北向東轉 30°；畫圖時先標北",
      "en": "Bearing N30°E means 30° east of north; mark north first"
     }
    },
    {
     "id": "ms-04-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "勾股定理",
      "en": "Pythagoras theorem"
     },
     "formula": "a^2 + b^2 = c^2",
     "pitfall": {
      "zh": "只適用於直角三角形；斜邊是最長邊",
      "en": "Only for right triangles; hypotenuse is longest side"
     }
    }
   ]
  },
  {
   "id": "ms-05",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "直線方程",
    "en": "Straight Lines"
   },
   "leaves": [
    {
     "id": "ms-05-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "斜率與截距",
      "en": "Slope & intercepts"
     },
     "formula": "m = \\frac{y_2-y_1}{x_2-x_1}",
     "pitfall": {
      "zh": "兩點x座標相同時斜率不存在（垂直線）；y截距是x=0時的y值",
      "en": "Slope undefined when x₁=x₂ (vertical line); y-intercept is y when x=0"
     }
    },
    {
     "id": "ms-05-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "直線方程各形式",
      "en": "Forms of line equations"
     },
     "formula": "y = mx + c;\\ ax+by+c = 0;\\ \\frac{x}{a}+\\frac{y}{b} = 1",
     "pitfall": {
      "zh": "斜截式最常用；一般式ax+by+c=0可表示所有直線（包括垂直線）",
      "en": "Slope-intercept most common; general form can represent ALL lines including vertical"
     }
    },
    {
     "id": "ms-05-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "平行與垂直",
      "en": "Parallel & perpendicular"
     },
     "formula": "m_1 m_2 = -1 \\Rightarrow \\text{垂直}",
     "pitfall": {
      "zh": "平行：斜率相等；垂直：斜率積為-1；斜率不存在時是垂直線（x=常數）",
      "en": "Parallel: equal slopes; Perpendicular: product = -1; undefined slope = vertical line (x=constant)"
     }
    },
    {
     "id": "ms-05-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "點到直線距離",
      "en": "Distance from point to line"
     },
     "formula": "d = \\frac{|Ax_0+By_0+C|}{\\sqrt{A^2+B^2}}",
     "pitfall": {
      "zh": "距離是非負的；分子要絕對值",
      "en": "Distance is non-negative; use absolute value in numerator"
     }
    },
    {
     "id": "ms-05-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "直線參數方程",
      "en": "Parametric equation of line"
     },
     "formula": "\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\end{cases}",
     "pitfall": {
      "zh": "參數 t 取全體實數；消參得標準方程",
      "en": "Parameter t ∈ ℝ; eliminate to get standard form"
     }
    },
    {
     "id": "ms-05-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "直線系方程",
      "en": "Family of lines"
     },
     "formula": "過兩直線交點：L₁ + λL₂ = 0",
     "pitfall": {
      "zh": "λ 為參數；不包括 L₂ 本身",
      "en": "λ is parameter; L₂ itself is excluded"
     }
    }
   ]
  },
  {
   "id": "ms-06",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 11,
   "examSection": "B",
   "name": {
    "zh": "軌跡",
    "en": "Locus"
   },
   "leaves": [
    {
     "id": "ms-06-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "基本軌跡：圓/垂直平分線/平行線",
      "en": "Basic loci"
     },
     "formula": "\\text{到定點等距→圓；到兩定點等距→垂直平分線；到直線等距→平行線}",
     "pitfall": {
      "zh": "軌跡是滿足某條件的所有點的集合。DSE常考轉化為方程",
      "en": "A locus is the set of all points satisfying a condition. DSE often tests converting it to an equation."
     }
    },
    {
     "id": "ms-06-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "角平分線軌跡",
      "en": "Angle bisector locus"
     },
     "formula": "\\text{到兩相交直線等距的點集 = 兩條角平分線}",
     "pitfall": {
      "zh": "常見軌跡：中垂線(到兩點等距)、角平分線(到兩邊等距)。DSE常考識別",
      "en": "Common loci: perpendicular bisector (equidistant from two points), angle bisector (equidistant from two lines). DSE tests recognition."
     }
    },
    {
     "id": "ms-06-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "軌跡方程求法",
      "en": "Equation of locus"
     },
     "pitfall": {
      "zh": "設動點 (x,y)，把「等距」條件轉成距離相等方程再化簡",
      "en": "Let the moving point be (x,y); equate distances then simplify"
     }
    },
    {
     "id": "ms-06-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "圓錐曲線定義",
      "en": "Conic section definitions"
     },
     "formula": "\\text{橢圓：到兩定點距離和為常數；雙曲線：距離差為常數}",
     "pitfall": {
      "zh": "常數要大於（橢圓）或小於（雙曲線）兩焦點距離",
      "en": "Constant must be > (ellipse) or < (hyperbola) focal distance"
     }
    },
    {
     "id": "ms-06-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "軌跡描述",
      "en": "Describing the locus"
     },
     "pitfall": {
      "zh": "先化簡方程再判斷形狀；注意定義域限制",
      "en": "Simplify equation first; mind domain restrictions"
     }
    },
    {
     "id": "ms-06-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "軌跡的限制條件與定義域",
      "en": "Domain restrictions on locus"
     },
     "formula": "\\text{距離/分母有定義域限制；軌跡可能只是部分曲線}",
     "pitfall": {
      "zh": "軌跡方程化簡後要檢查是否引入增根或丟失限制",
      "en": "Check if simplification introduced extraneous solutions or lost restrictions"
     }
    },
    {
     "id": "ms-06-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "常見軌跡題型識別",
      "en": "Common locus problem types"
     },
     "formula": "\\text{AP = k·BP；AP = BP + c；AP·BP = c}",
     "pitfall": {
      "zh": "識別軌跡條件：等距、定值距離、距離和/差/積",
      "en": "Identify locus conditions: equal distance, fixed distance, sum/difference/product"
     }
    }
   ]
  },
  {
   "id": "ms-07",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S4"
   ],
   "weight": "mid",
   "diff": 1,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "座標幾何：距離與面積",
    "en": "Coordinate Geometry: Distance & Area"
   },
   "leaves": [
    {
     "id": "ms-07-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "兩點距離公式",
      "en": "Distance between two points"
     },
     "formula": "d = \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}",
     "pitfall": {
      "zh": "兩點距離公式是勾股定理的座標形式。DSE常和直線方程組合考查",
      "en": "The distance formula is Pythagoras' theorem in coordinate form. DSE often combines it with equations of straight lines."
     }
    },
    {
     "id": "ms-07-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "中點公式",
      "en": "Midpoint formula"
     },
     "formula": "M = \\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)",
     "pitfall": {
      "zh": "三角形面積座標公式S=1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|。DSE常考判斷三點共線",
      "en": "Area formula in coordinates S=1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|. DSE tests determining whether three points are collinear."
     }
    },
    {
     "id": "ms-07-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "斜率與多邊形面積",
      "en": "Slope & polygon area"
     },
     "formula": "m = \\frac{y_2-y_1}{x_2-x_1}",
     "pitfall": {
      "zh": "面積題常拆成三角形；垂直時斜率之積 = −1",
      "en": "Split area into triangles; perpendicular gives m₁m₂ = −1"
     }
    },
    {
     "id": "ms-07-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "平行與垂直條件",
      "en": "Parallel & perpendicular conditions"
     },
     "formula": "m_1 = m_2 \\Rightarrow \\text{平行};\\quad m_1m_2 = -1 \\Rightarrow \\text{垂直}",
     "pitfall": {
      "zh": "垂直條件只在兩斜率都存在時成立；垂直於x軸的直線斜率不存在",
      "en": "Perpendicular condition only when both slopes exist; vertical lines have undefined slope"
     }
    },
    {
     "id": "ms-07-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "三角形面積公式",
      "en": "Area of triangle"
     },
     "formula": "\\text{面積} = \\frac{1}{2}|(x_2-x_1)(y_3-y_1)-(x_3-x_1)(y_2-y_1)|",
     "pitfall": {
      "zh": "公式來源於叉積；注意絕對值",
      "en": "Derived from cross product; use absolute value"
     }
    },
    {
     "id": "ms-07-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "直線方程的兩點式",
      "en": "Two-point form"
     },
     "formula": "\\frac{y-y_1}{y_2-y_1} = \\frac{x-x_1}{x_2-x_1}",
     "pitfall": {
      "zh": "分母不能為零；垂直線用 x = k 形式",
      "en": "Denominator cannot be zero; use x = k for vertical lines"
     }
    }
   ]
  },
  {
   "id": "ms-08",
   "level": "topic",
   "domain": "MS",
   "grades": [
    "S4"
   ],
   "weight": "mid",
   "diff": 1,
   "examFrequency": 13,
   "examSection": "A1",
   "name": {
    "zh": "求積法（面積與體積）",
    "en": "Mensuration"
   },
   "leaves": [
    {
     "id": "ms-08-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "扇形面積與弧長",
      "en": "Arc & sector"
     },
     "formula": "\\text{弧長} = r\\theta;\\quad \\text{扇形面積} = \\frac{1}{2}r^2\\theta\\ (\\theta \\text{ in rad})",
     "pitfall": {
      "zh": "扇形面積=1/2*r^2*theta(弧度)。DSE常考扇形加三角形組合面積",
      "en": "Sector area = 1/2·r^2·θ (θ in radians). DSE often tests the combined area of a sector plus a triangle."
     }
    },
    {
     "id": "ms-08-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "立體體積與表面積",
      "en": "Solids: volume & surface"
     },
     "pitfall": {
      "zh": "球體表面積4pi*r^2和體積4/3*pi*r^3。DSE卷一Section B偶爾考組合體",
      "en": "Sphere surface area 4πr^2 and volume (4/3)πr^3. Paper 1 Section B occasionally tests composite solids."
     }
    },
    {
     "id": "ms-08-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "球體體積與表面積",
      "en": "Sphere: volume & surface"
     },
     "formula": "V = \\frac{4}{3}\\pi r^3;\\quad A = 4\\pi r^2",
     "pitfall": {
      "zh": "球體公式常考與圓柱/圓錐的組合",
      "en": "Sphere often combined with cylinder/cone"
     }
    },
    {
     "id": "ms-08-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "弧長與半徑關係",
      "en": "Arc length & radius"
     },
     "formula": "l = r\\theta\\quad (\\theta \\text{ in rad})",
     "pitfall": {
      "zh": "角度必須用弧度制；度數要轉換",
      "en": "Angle must be in radians; convert from degrees"
     }
    },
    {
     "id": "ms-08-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "扇形面積與半徑",
      "en": "Sector area & radius"
     },
     "formula": "A = \\frac{1}{2}r^2\\theta\\quad (\\theta \\text{ in rad})",
     "pitfall": {
      "zh": "扇形面積公式與弧長公式聯立常解題",
      "en": "Combine arc length and sector area formulas to solve"
     }
    },
    {
     "id": "ms-08-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "求積法綜合應用",
      "en": "Mensuration applications"
     },
     "pitfall": {
      "zh": "組合圖形要拆解；相似形面積比等於邊長比平方",
      "en": "Decompose composite shapes; area ratio = square of length ratio for similar figures"
     }
    }
   ]
  },
  {
   "id": "dp-02",
   "level": "topic",
   "domain": "DP",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "B",
   "name": {
    "zh": "排列與組合",
    "en": "Permutations & Combinations"
   },
   "leaves": [
    {
     "id": "dp-02-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "加法原理與乘法原理",
      "en": "Addition & multiplication principles"
     },
     "pitfall": {
      "zh": "加法原理：分類，類與類之間互斥；乘法原理：分步，每步相互獨立",
      "en": "Addition:分類, classes are mutually exclusive; Multiplication:分步, steps are independent"
     }
    },
    {
     "id": "dp-02-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "排列 P(n,r)",
      "en": "Permutation"
     },
     "formula": "P^n_r = \\frac{n!}{(n-r)!}",
     "pitfall": {
      "zh": "排列考慮順序；先選特殊位置（排頭/排尾/相鄰），再排其餘",
      "en": "Permutation considers order; place special positions first, then arrange rest"
     }
    },
    {
     "id": "dp-02-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "組合 C(n,r)",
      "en": "Combination"
     },
     "formula": "C^n_r = \\frac{n!}{r!(n-r)!}",
     "pitfall": {
      "zh": "至少/至多類問題用 C 表達後展開；C(n,r)=C(n,n-r) 常用於化簡",
      "en": "'At least/at most' via combinations; use symmetry C(n,r)=C(n,n-r)"
     }
    },
    {
     "id": "dp-02-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "排隊與隔板常見模型",
      "en": "Common arrangement models"
     },
     "pitfall": {
      "zh": "排隊：先排受限的（相鄰/不相鄰），再插空；隔板：n個球放k個盒子用C(n-1,k-1)",
      "en": "Queuing: arrange constrained first, then fill gaps; Separation: C(n-1,k-1) for n balls into k boxes"
     }
    },
    {
     "id": "dp-02-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "重複排列",
      "en": "Arrangements with repetition"
     },
     "formula": "n^r\\ \\text{（r 次獨立選擇，每次 n 種）}",
     "pitfall": {
      "zh": "每個位置有n種選擇；與不重複排列P的區別是元素可以重複使用",
      "en": "Each position has n choices; differs from permutation P as elements can repeat"
     }
    },
    {
     "id": "dp-02-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "環形排列與特殊限制",
      "en": "Circular arrangements & constraints"
     },
     "formula": "\\text{環形排列 }(n-1)!",
     "pitfall": {
      "zh": "環形排列固定一元素避免重複；相鄰/不相鄰用捆綁/插空",
      "en": "Fix one element in circular arrangements; use block/gap for adjacency"
     }
    }
   ]
  },
  {
   "id": "dp-03",
   "level": "topic",
   "domain": "DP",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "A2",
   "name": {
    "zh": "概率",
    "en": "Probability"
   },
   "leaves": [
    {
     "id": "dp-03-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "基本概率 P(E)= favourable/total",
      "en": "Basic probability"
     },
     "formula": "P(E) = \\frac{n(E)}{n(S)}",
     "pitfall": {
      "zh": "等可能假設：每個基本結果概率相等；分母必須數全所有可能情況",
      "en": "Equiprobable assumption: each outcome equally likely; count ALL possible outcomes"
     }
    },
    {
     "id": "dp-03-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "加法與互斥事件",
      "en": "Addition & mutually exclusive"
     },
     "formula": "P(A \\cup B) = P(A)+P(B)-P(A\\cap B)",
     "pitfall": {
      "zh": "互斥事件：P(A∩B)=0，此時P(A∪B)=P(A)+P)；常誤將獨立當互斥",
      "en": "Mutually exclusive: P(A∩B)=0; common mistake: confuse independent with mutually exclusive"
     }
    },
    {
     "id": "dp-03-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "獨立事件乘法",
      "en": "Independent events"
     },
     "formula": "P(A \\cap B) = P(A)\\,P(B)",
     "pitfall": {
      "zh": "獨立指互不影響；P(A|B)=P(A)，P(B|A)=P(B)；獨立不等於互斥",
      "en": "Independent means no influence; P(A|B)=P(A); independent ≠ mutually exclusive"
     }
    },
    {
     "id": "dp-03-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "條件概率",
      "en": "Conditional probability"
     },
     "formula": "P(B|A) = \\frac{P(A \\cap B)}{P(A)}",
     "pitfall": {
      "zh": "without replacement 抽球題本質是條件概率鏈",
      "en": "Drawing without replacement is a conditional chain"
     }
    },
    {
     "id": "dp-03-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "樹狀圖與多步試驗",
      "en": "Tree diagrams & multi-stage trials"
     },
     "pitfall": {
      "zh": "多步試驗用樹狀圖，沿路徑概率相乘、分支相加",
      "en": "Use tree diagrams for multi-stage trials; multiply along paths, add branches"
     }
    },
    {
     "id": "dp-03-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "互斥 vs 獨立",
      "en": "Mutually exclusive vs independent"
     },
     "formula": "\\text{互斥 }P(A\\cap B)=0;\\quad \\text{獨立 }P(A\\cap B)=P(A)P(B)",
     "pitfall": {
      "zh": "互斥 = 事件無交集；獨立 = 概率可乘。兩者不是一回事，別混淆",
      "en": "Exclusive = no overlap; independent = probabilities multiply. Don't confuse them"
     }
    }
   ]
  },
  {
   "id": "dp-04",
   "level": "topic",
   "domain": "DP",
   "grades": [
    "S5"
   ],
   "weight": "mid",
   "diff": 1,
   "examFrequency": 13,
   "examSection": "A1",
   "name": {
    "zh": "離散與連續數據圖表",
    "en": "Charts for Discrete & Continuous Data"
   },
   "leaves": [
    {
     "id": "dp-04-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "頻率分佈表與直方圖",
      "en": "Frequency table & histogram"
     },
     "pitfall": {
      "zh": "連續數據用組限/組界，注意組寬一致；直方圖面積代表頻數",
      "en": "Use class boundaries for continuous data; area ∝ frequency"
     }
    },
    {
     "id": "dp-04-l2",
     "knowledgeType": "corollary",
     "name": {
      "zh": "累積頻數多邊形與箱形圖",
      "en": "Cumulative frequency polygon & box plot"
     },
     "pitfall": {
      "zh": "累積頻數讀中位數/四分位數；箱形圖讀離羣值",
      "en": "Read median/quartiles from cumulative frequency; box plot shows outliers"
     }
    },
    {
     "id": "dp-04-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "棒形圖與直方圖區別",
      "en": "Bar chart vs histogram"
     },
     "pitfall": {
      "zh": "棒形圖（離散）有間隙；直方圖（連續）無間隙；橫軸意義不同",
      "en": "Bar charts (discrete) have gaps; histograms (continuous) don't; x-axis meaning differs"
     }
    },
    {
     "id": "dp-04-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "組限、組界、組寬",
      "en": "Class limits, boundaries, width"
     },
     "formula": "\\text{組寬} = \\text{上組界} - \\text{下組界}",
     "pitfall": {
      "zh": "組限是原始數據邊界；組界是連續化後的邊界；組寬要一致",
      "en": "Class limits = raw data boundaries; class boundaries = for continuity; width must be uniform"
     }
    },
    {
     "id": "dp-04-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "頻數多邊形",
      "en": "Frequency polygon"
     },
     "pitfall": {
      "zh": "取每組的組中值連線；首尾要落在橫軸上",
      "en": "Plot at midpoints; start and end on x-axis"
     }
    },
    {
     "id": "dp-04-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "選擇合適的圖表",
      "en": "Choosing appropriate charts"
     },
     "formula": "\\text{離散→棒形圖；連續→直方圖；累積→多邊形；分佈→箱形圖}",
     "pitfall": {
      "zh": "圖表要服務於數據特徵和問題目標；避免誤導性可視化",
      "en": "Chart should serve data characteristics and objective; avoid misleading visualization"
     }
    },
    {
     "id": "dp-04-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "圖表解讀技巧",
      "en": "Chart interpretation skills"
     },
     "formula": "\\text{從圖表提取：集中趨勢、離散程度、分佈形狀、異常值}",
     "pitfall": {
      "zh": "直方圖看分佈形狀；箱形圖看離羣值；累積多邊形讀百分位",
      "en": "Histogram for shape; box plot for outliers; cumulative for percentiles"
     }
    }
   ]
  },
  {
   "id": "dp-05",
   "level": "topic",
   "domain": "DP",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 1,
   "examFrequency": 13,
   "examSection": "A1",
   "name": {
    "zh": "集中趨勢量度",
    "en": "Measures of Central Tendency"
   },
   "leaves": [
    {
     "id": "dp-05-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "平均數/中位數/眾數",
      "en": "Mean/median/mode"
     },
     "pitfall": {
      "zh": "平均數受極端值影響大，中位數不受。DSE常考選擇用哪個量度更合適",
      "en": "The mean is affected by extreme values; the median is not. DSE tests choosing the more appropriate measure."
     }
    },
    {
     "id": "dp-05-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "分組數據平均數",
      "en": "Mean of grouped data"
     },
     "formula": "\\bar{x} = \\frac{\\sum f x}{\\sum f}",
     "pitfall": {
      "zh": "分組數據的中位數估計用累積頻率。DSE常考內插法求中位數",
      "en": "The median of grouped data is estimated using cumulative frequency. DSE tests interpolation for the median."
     }
    },
    {
     "id": "dp-05-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "分組數據中位數",
      "en": "Median of grouped data"
     },
     "formula": "\\text{中位數組} = \\text{累積頻數} \\geq \\frac{N}{2}\\text{ 的組}",
     "pitfall": {
      "zh": "先用累積頻數定位中位數組；再用插值公式精確值",
      "en": "Locate median group via cumulative frequency; then interpolate"
     }
    },
    {
     "id": "dp-05-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "加權平均數",
      "en": "Weighted mean"
     },
     "formula": "\\bar{x}_w = \\frac{\\sum w x}{\\sum w}",
     "pitfall": {
      "zh": "權重代表重要性不同；與簡單平均不等",
      "en": "Weights represent different importance; not equal to simple mean"
     }
    },
    {
     "id": "dp-05-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "平均數/中位數/眾數選擇",
      "en": "Choosing the appropriate measure"
     },
     "pitfall": {
      "zh": "平均數受極端值影響；中位數穩健；眾數適合分類數據",
      "en": "Mean affected by extremes; median robust; mode for categorical data"
     }
    },
    {
     "id": "dp-05-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "集中趨勢的比較與應用",
      "en": "Comparing central tendency"
     },
     "formula": "\\text{平均數=中位數：對稱分佈；平均數>中位數：右偏}",
     "pitfall": {
      "zh": "偏度判斷：平均數被長尾方向拉離中位數",
      "en": "Skewness: mean pulled away from median by long tail"
     }
    },
    {
     "id": "dp-05-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "分組數據插值法",
      "en": "Interpolation for grouped data"
     },
     "formula": "\\text{值} = L + \\frac{\\text{所需累積頻數} - \\text{組前累積}}{\\text{組頻數}} \\times c",
     "pitfall": {
      "zh": "假設組內數據均勻分佈；插值是估計值不是精確值",
      "en": "Assumes uniform distribution within group; interpolation is estimate not exact"
     }
    }
   ]
  },
  {
   "id": "dp-06",
   "level": "topic",
   "domain": "DP",
   "grades": [
    "S5"
   ],
   "weight": "mid",
   "diff": 1,
   "examFrequency": 11,
   "examSection": "B",
   "name": {
    "zh": "離差量度",
    "en": "Measures of Dispersion"
   },
   "leaves": [
    {
     "id": "dp-06-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "全距、四分位距",
      "en": "Range & IQR"
     },
     "pitfall": {
      "zh": "方差衡量數據偏離均值的程度。DSE常考分組數據的方差公式",
      "en": "Variance measures how far data spread from the mean. DSE tests the variance formula for grouped data."
     }
    },
    {
     "id": "dp-06-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "標準差",
      "en": "Standard deviation"
     },
     "formula": "\\sigma = \\sqrt{\\frac{\\sum(x-\\bar{x})^2}{n}}",
     "pitfall": {
      "zh": "IQR=Q3-Q1不受極端值影響。DSE常考箱形圖相關計算",
      "en": "IQR = Q3−Q1 is unaffected by extreme values. DSE tests box-and-whisker computations."
     }
    },
    {
     "id": "dp-06-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "分組數據標準差",
      "en": "Standard deviation for grouped data"
     },
     "formula": "\\sigma = \\sqrt{\\frac{\\sum f(x-\\bar{x})^2}{\\sum f}}",
     "pitfall": {
      "zh": "標準差是方差的正平方根。注意單位與原數據一致，DSE常考比較兩組數據的離散程度",
      "en": "Standard deviation is the positive square root of variance; its unit matches the data. DSE tests comparing the dispersion of two data sets."
     }
    },
    {
     "id": "dp-06-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "方差與標準差",
      "en": "Variance vs standard deviation"
     },
     "formula": "\\sigma^2 = \\text{方差}",
     "pitfall": {
      "zh": "方差是標準差的平方；單位是平方單位",
      "en": "Variance is square of SD; units are squared"
     }
    },
    {
     "id": "dp-06-l5",
     "knowledgeType": "theorem",
     "name": {
      "zh": "IQR vs 全距",
      "en": "IQR vs range"
     },
     "pitfall": {
      "zh": "全距受極端值影響；IQR 更穩健；離羣值用 IQR 識別",
      "en": "Range affected by extremes; IQR more robust; use IQR to identify outliers"
     }
    },
    {
     "id": "dp-06-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "離差量度的選擇",
      "en": "Choosing dispersion measures"
     },
     "formula": "\\text{對稱分佈用標準差；偏態分佈用 IQR}",
     "pitfall": {
      "zh": "標準差受極端值影響；IQR 只關注中間50%數據",
      "en": "SD affected by extremes; IQR only focuses on middle 50%"
     }
    },
    {
     "id": "dp-06-l7",
     "knowledgeType": "theorem",
     "name": {
      "zh": "變異係數",
      "en": "Coefficient of variation"
     },
     "formula": "CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\%",
     "pitfall": {
      "zh": "用於比較不同數據集的相對離散；單位消除後可比較",
      "en": "Compare relative dispersion across datasets; unit-free"
     }
    }
   ]
  },
  {
   "id": "dp-07",
   "level": "topic",
   "domain": "DP",
   "grades": [
    "S5"
   ],
   "weight": "mid",
   "diff": 2,
   "examFrequency": 9,
   "examSection": "B",
   "name": {
    "zh": "統計應用：標準分",
    "en": "Standard Scores & Applications"
   },
   "leaves": [
    {
     "id": "dp-07-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "標準分",
      "en": "Standard score (z-score)"
     },
     "formula": "z = \\frac{x-\\bar{x}}{\\sigma}",
     "pitfall": {
      "zh": "z=(x-mu)/sigma，標準分表示x偏離均值多少個標準差。DSE常考比較不同分佈的成績",
      "en": "z=(x−μ)/σ; the standard score tells how many standard deviations x is from the mean. DSE tests comparing scores across distributions."
     }
    },
    {
     "id": "dp-07-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "正態分佈特性（68-95-99.7）",
      "en": "Normal distribution properties"
     },
     "formula": "\\text{約 68\\% 在 }\\mu\\pm\\sigma;\\ \\text{約 95\\% 在 }\\mu\\pm 2\\sigma",
     "pitfall": {
      "zh": "標準分可以跨科目比較。DSE常考解釋標準分的實際意義",
      "en": "Standard scores allow comparison across subjects. DSE tests explaining the practical meaning of a standard score."
     }
    },
    {
     "id": "dp-07-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "用標準分比較不同數據集",
      "en": "Comparing scores across datasets"
     },
     "pitfall": {
      "zh": "z 分大 = 相對錶現好；不同數據集必須先標準化再比較",
      "en": "Higher z = better relative standing; standardise before comparing"
     }
    },
    {
     "id": "dp-07-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "標準分轉換為百分位",
      "en": "z-score to percentile"
     },
     "formula": "\\text{z}=0 \\Rightarrow 50\\text{百分位}; \\text{z}=1 \\approx 84\\text{百分位}",
     "pitfall": {
      "zh": "z=0是中位數，z負數不表示'錯'只表示低於平均",
      "en": "z=0 is median; negative z doesn't mean 'wrong' but below average"
     }
    },
    {
     "id": "dp-07-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "異常值檢測（3σ原則）",
      "en": "Outlier detection (3-sigma rule)"
     },
     "formula": "|z| > 3 \\Rightarrow \\text{異常值}",
     "pitfall": {
      "zh": "3σ是經驗閾值；異常值要分析原因而非直接刪除",
      "en": "3σ is empirical; analyze outliers before removal"
     }
    },
    {
     "id": "dp-07-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "標準分在教育與心理測量中的應用",
      "en": "z-score in educational testing"
     },
     "formula": "\\text{標準化測試：} z = \\frac{\\text{原始分}-\\text{平均}}{\\text{標準差}}",
     "pitfall": {
      "zh": "標準分允許不同年份/科目的比較；但正態分佈假設可能不成立",
      "en": "Z-scores enable comparison across years/subjects; normality assumption may fail"
     }
    }
   ]
  },
  {
   "id": "m2-01",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·數學歸納法",
    "en": "M2 · Mathematical Induction"
   },
   "leaves": [
    {
     "id": "m2-01-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "歸納法原理",
      "en": "Principle of induction"
     },
     "formula": "P(1)\\ \\text{真} \\land (P(k)\\Rightarrow P(k+1)) \\Rightarrow P(n)\\ \\text{對所有 }n\\ \\text{真}",
     "pitfall": {
      "zh": "數學歸納法兩步：基礎步驟(n=1)和歸納步驟。DSE常考證明整除或不等式",
      "en": "Mathematical induction has two steps: the base case (n=1) and the inductive step. DSE often tests divisibility or inequality proofs."
     }
    },
    {
     "id": "m2-01-l2",
     "knowledgeType": "corollary",
     "name": {
      "zh": "歸納法證明數列求和",
      "en": "Induction on series sums"
     },
     "pitfall": {
      "zh": "三步缺一不可：基礎步(n=1)、假設 P(k)、證明 P(k+1)；務必寫明歸納假設",
      "en": "All 3 steps required: base case, assume P(k), prove P(k+1); state the hypothesis explicitly"
     }
    },
    {
     "id": "m2-01-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "整除性證明",
      "en": "Divisibility proofs"
     },
     "formula": "證明 n²+n 能被 2 整除：設 P(k) 真，證明 P(k+1) 整除性",
     "pitfall": {
      "zh": "利用 P(k) 的整除結論展開 P(k+1)；常需加項減項湊歸納假設",
      "en": "Use divisibility of P(k); may need add/subtract terms to match hypothesis"
     }
    },
    {
     "id": "m2-01-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "不等式證明",
      "en": "Inequality proofs"
     },
     "formula": "證明 ∑i² > n³/3：兩邊同時加(k+1)²保持不等式方向",
     "pitfall": {
      "zh": "不等式方向要始終保持；可能需要放縮法",
      "en": "Keep inequality direction; may need bounding techniques"
     }
    },
    {
     "id": "m2-01-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "遞推關係證明",
      "en": "Recurrence relation proofs"
     },
     "pitfall": {
      "zh": "由 aₙ 推 aₙ₊₁ 常用代數恆等變換；注意遞推的邊界條件",
      "en": "Algebraic identities from aₙ to aₙ₊₁; mind boundary conditions"
     }
    },
    {
     "id": "m2-01-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "數學歸納法證明恆等式",
      "en": "Induction on identities"
     },
     "formula": "證明通項公式：代入 P(k)，湊成 P(k+1) 形式",
     "pitfall": {
      "zh": "常需分離項、配湊；注意 n=k 到 n=k+1 的增量",
      "en": "Often need to split terms and match; mind the increment"
     }
    },
    {
     "id": "m2-01-l7",
     "knowledgeType": "theorem",
     "name": {
      "zh": "強歸納法（第二數學歸納法）",
      "en": "Strong induction"
     },
     "formula": "P(1)\\text{真} \\land (P(1)\\land P(2)\\cdots\\land P(k) \\Rightarrow P(k+1)) \\Rightarrow P(n)\\text{真}",
     "pitfall": {
      "zh": "需要所有前例都真時才假設；用於遞推依賴多步的數列",
      "en": "Requires all prior cases true; for multi-step recurrence"
     }
    }
   ]
  },
  {
   "id": "m2-02",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·三角函數（任意角）",
    "en": "M2 · Trigonometric Functions (any angle)"
   },
   "leaves": [
    {
     "id": "m2-02-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "弧度制與ASTC規則",
      "en": "Radian & ASTC rule"
     },
     "formula": "\\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}",
     "pitfall": {
      "zh": "單位圓上點的座標就是(cos, sin)。這是M2三角函數的基石",
      "en": "On the unit circle, the coordinates of a point are (cos θ, sin θ). This is the cornerstone of M2 trigonometry."
     }
    },
    {
     "id": "m2-02-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "單位圓與三角函數定義",
      "en": "Unit circle definitions"
     },
     "formula": "\\sin\\theta = y;\\ \\cos\\theta = x;\\ \\tan\\theta = \\frac{y}{x}",
     "pitfall": {
      "zh": "sin和cos的圖像是平移關係——向左平移90度。DSE常考利用這個關係推導性質",
      "en": "The graphs of sin and cos are related by a translation — shift cos left by 90°. DSE uses this to derive properties."
     }
    },
    {
     "id": "m2-02-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "特殊角弧度值",
      "en": "Special angles in radians"
     },
     "formula": "0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}",
     "pitfall": {
      "zh": "週期和振幅決定圖像形狀。DSE常考從方程y=asin(bx+c)+d中讀出週期和振幅",
      "en": "Period and amplitude determine the shape of the graph. DSE tests reading the period and amplitude from y=a sin(bx+c)+d."
     }
    },
    {
     "id": "m2-02-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "三角函數圖像與性質",
      "en": "Trig graphs & properties"
     },
     "pitfall": {
      "zh": "週期、振幅、定義域要結合圖像記憶",
      "en": "Memorize period, amplitude, domain with graphs"
     }
    },
    {
     "id": "m2-02-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "簡化三角函數式",
      "en": "Simplifying trig expressions"
     },
     "formula": "\\sin^2\\theta = \\frac{\\tan^2\\theta}{1+\\tan^2\\theta};\\ \\cos^2\\theta = \\frac{1}{1+\\tan^2\\theta}",
     "pitfall": {
      "zh": "利用基本恆等式降次；注意符號（象限）",
      "en": "Use basic identities to reduce power; mind signs (quadrants)"
     }
    },
    {
     "id": "m2-02-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "三角方程的一般解",
      "en": "General solutions of trig equations"
     },
     "formula": "\\sin\\theta = a \\Rightarrow \\theta = \\alpha + 2k\\pi\\text{ 或 }(\\pi-\\alpha)+2k\\pi",
     "pitfall": {
      "zh": "不要漏掉 2kπ 或 π 的倍數；解集常有多組",
      "en": "Don't miss 2kπ or π multiples; solution sets often have multiple families"
     }
    },
    {
     "id": "m2-02-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "三角函數最值",
      "en": "Maximum/minimum of trig functions"
     },
     "formula": "|\\sin\\theta| \\leq 1;\\ |\\cos\\theta| \\leq 1",
     "pitfall": {
      "zh": "利用有界性求複合函數最值；注意定義域限制",
      "en": "Use boundedness for composite functions; mind domain restrictions"
     }
    }
   ]
  },
  {
   "id": "m2-03",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S4",
    "S5"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·三角恆等式與方程",
    "en": "M2 · Trig Identities & Equations"
   },
   "leaves": [
    {
     "id": "m2-03-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "複合角公式",
      "en": "Compound angle formulas"
     },
     "formula": "\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B",
     "pitfall": {
      "zh": "DSE最常考sin(A+B)和cos(A+B)。最致命錯誤是把sin(A+B)寫成sinA+sinB",
      "en": "DSE most often tests sin(A+B) and cos(A+B). The fatal error is writing sin(A+B) as sinA+sinB."
     }
    },
    {
     "id": "m2-03-l2",
     "knowledgeType": "corollary",
     "name": {
      "zh": "二倍角公式",
      "en": "Double angle formulas"
     },
     "formula": "\\sin 2A = 2\\sin A\\cos A;\\ \\cos 2A = 1-2\\sin^2 A",
     "pitfall": {
      "zh": "二倍角是複合角的特例A=B。DSE常考從cos2A推出sin^2A和cos^2A——降冪核心工具",
      "en": "Double-angle is the special case of a compound angle with A=B. DSE derives sin^2A and cos^2A from cos2A — the key tool for lowering powers."
     }
    },
    {
     "id": "m2-03-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "和差化積/積化和差",
      "en": "Sum-to-product"
     },
     "pitfall": {
      "zh": "DSE卷三偶爾考。重點掌握積化和差用於積分——和微積分的銜接點",
      "en": "Occasionally tested in Paper 3. Master product-to-sum for integration — the bridge to calculus."
     }
    },
    {
     "id": "m2-03-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "證明三角恆等式",
      "en": "Proving trig identities"
     },
     "pitfall": {
      "zh": "從複雜邊開始化簡；常用基本恆等式降次",
      "en": "Start from complex side; use basic identities to reduce powers"
     }
    },
    {
     "id": "m2-03-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "解三角方程",
      "en": "Solving trig equations"
     },
     "formula": "Rsin(x+α) 形式：展開後比較係數",
     "pitfall": {
      "zh": "解集要寫一般解（+2kπ）；注意定義域限制",
      "en": "General solution (+2kπ); mind domain restrictions"
     }
    },
    {
     "id": "m2-03-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "輔助角公式（R-formula）",
      "en": "Auxiliary angle formula"
     },
     "formula": "a\\sin\\theta + b\\cos\\theta = R\\sin(\\theta+\\alpha)",
     "pitfall": {
      "zh": "R = √(a²+b²)，α = tan⁻¹(b/a)；用於求最值",
      "en": "R = √(a²+b²), α = tan⁻¹(b/a); used for max/min"
     }
    }
   ]
  },
  {
   "id": "m2-04",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S4"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·向量",
    "en": "M2 · Vectors"
   },
   "leaves": [
    {
     "id": "m2-04-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "向量加減與數乘",
      "en": "Vector addition & scalar multiplication"
     },
     "formula": "\\vec{AB}=\\vec{OB}-\\vec{OA}",
     "pitfall": {
      "zh": "向量有大小和方向。DSE常考用位置向量表示點",
      "en": "A vector has magnitude and direction. DSE tests using position vectors to represent points."
     }
    },
    {
     "id": "m2-04-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "位置向量與分點公式",
      "en": "Position vector & section formula"
     },
     "formula": "\\vec{OP} = \\frac{m\\vec{b}+n\\vec{a}}{m+n}\\ \\text{（內分）}",
     "pitfall": {
      "zh": "點積a·b=|a||b|cos(theta)。DSE常考求兩向量夾角或判斷垂直",
      "en": "Dot product a·b=|a||b|cos θ. DSE tests finding the angle between two vectors or checking perpendicularity."
     }
    },
    {
     "id": "m2-04-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "點積與夾角",
      "en": "Dot product & angle"
     },
     "formula": "\\vec{a}\\cdot\\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta",
     "pitfall": {
      "zh": "點積 = 0 表示垂直；點積是標量不是向量",
      "en": "Dot product = 0 means perpendicular; it's a scalar, not a vector"
     }
    },
    {
     "id": "m2-04-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "向量共線/幾何證明",
      "en": "Collinearity & geometric proofs"
     },
     "pitfall": {
      "zh": "證明三點共線：兩向量成倍數關係",
      "en": "Three points collinear when two vectors are scalar multiples"
     }
    },
    {
     "id": "m2-04-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "向量長度與單位向量",
      "en": "Vector length & unit vector"
     },
     "formula": "|\\vec{a}| = \\sqrt{\\vec{a}\\cdot\\vec{a}};\\ \\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}",
     "pitfall": {
      "zh": "單位向量長度為1；零向量沒有方向",
      "en": "Unit vector has length 1; zero vector has no direction"
     }
    },
    {
     "id": "m2-04-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "平行向量判定",
      "en": "Parallel vectors"
     },
     "formula": "\\vec{a} \\parallel \\vec{b} \\iff \\vec{a} = k\\vec{b}\\ (k \\in \\mathbb{R})",
     "pitfall": {
      "zh": "平行向量成比例；零向量與任何向量平行",
      "en": "Parallel vectors are proportional; zero vector is parallel to any vector"
     }
    },
    {
     "id": "m2-04-l7",
     "knowledgeType": "theorem",
     "name": {
      "zh": "向量在幾何中的應用",
      "en": "Vectors in geometry"
     },
     "pitfall": {
      "zh": "用向量證垂直：點積為0；證平行：成倍數",
      "en": "Prove perpendicular: dot=0; prove parallel: scalar multiple"
     }
    }
   ]
  },
  {
   "id": "m2-05",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·矩陣與行列式",
    "en": "M2 · Matrices & Determinants"
   },
   "leaves": [
    {
     "id": "m2-05-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "矩陣運算",
      "en": "Matrix operations"
     },
     "pitfall": {
      "zh": "矩陣乘法不滿足交換律AB不等於BA但滿足結合律。DSE常考這個區別",
      "en": "Matrix multiplication is not commutative (AB≠BA) but is associative. DSE tests this distinction."
     }
    },
    {
     "id": "m2-05-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "行列式與逆矩陣",
      "en": "Determinant & inverse"
     },
     "formula": "A^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
     "pitfall": {
      "zh": "行列式為0等價於矩陣無逆矩陣，等價於方程組無唯一解或無解。DSE最愛考這個等價邏輯鏈",
      "en": "Zero determinant ⟺ no inverse ⟺ the system has no unique solution or no solution. DSE loves this equivalence chain."
     }
    },
    {
     "id": "m2-05-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "克拉默法則（線性方程組）",
      "en": "Cramer's rule"
     },
     "pitfall": {
      "zh": "行列式為0時要單獨討論無解或無窮多解。不要只算行列式非零的情況就停",
      "en": "When the determinant is zero, discuss separately whether the system has no solution or infinitely many solutions. Do not stop after the non-zero case."
     }
    },
    {
     "id": "m2-05-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "矩陣乘法",
      "en": "Matrix multiplication"
     },
     "pitfall": {
      "zh": "AB ≠ BA（不交換）；左乘右乘意義不同",
      "en": "AB ≠ BA (non-commutative); left vs right multiplication differ"
     }
    },
    {
     "id": "m2-05-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "2×2行列式計算",
      "en": "2×2 determinant"
     },
     "formula": "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc",
     "pitfall": {
      "zh": "對角線乘積相減；順序不能錯",
      "en": "Diagonal products subtraction; order matters"
     }
    },
    {
     "id": "m2-05-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "奇異矩陣",
      "en": "Singular matrix"
     },
     "formula": "\\det(A) = 0 \\Rightarrow \\text{無逆矩陣}",
     "pitfall": {
      "zh": "行列式為零的矩陣不可逆；線性方程組無唯一解",
      "en": "Zero determinant = no inverse; no unique solution for linear systems"
     }
    }
   ]
  },
  {
   "id": "m2-06",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·數列的極限",
    "en": "M2 · Limits of Sequences"
   },
   "leaves": [
    {
     "id": "m2-06-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "極限概念與記號",
      "en": "Limit concept & notation"
     },
     "formula": "\\lim_{n\\to\\infty} a_n = L",
     "pitfall": {
      "zh": "極限存在要求左右極限相等。DSE偶爾考分段函數在分段點的極限——必須分別算左右極限",
      "en": "A limit exists only if the left and right limits are equal. For piecewise functions, compute both sides at the joining point."
     }
    },
    {
     "id": "m2-06-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "常見數列極限",
      "en": "Common sequence limits"
     },
     "formula": "\\lim_{n\\to\\infty}\\frac{1}{n}=0;\\quad \\lim_{n\\to\\infty} r^n = 0\\ (|r|<1)",
     "pitfall": {
      "zh": "1/n^p當p大於0時趨近0，n^p趨近無窮。DSE常考識別極限公式適用於哪種形式",
      "en": "1/n^p → 0 when p>0; n^p → ∞. DSE tests recognising which limit form applies."
     }
    },
    {
     "id": "m2-06-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "極限運算法則",
      "en": "Limit laws"
     },
     "formula": "\\lim(a_n+b_n)=\\lim a_n+\\lim b_n;\\ \\lim(a_n b_n)=\\lim a_n\\cdot\\lim b_n",
     "pitfall": {
      "zh": "極限運算只能在極限存在時拆分。對無窮減無窮不能直接拆，要先化簡再求",
      "en": "Limit laws apply only when the limits exist. For ∞−∞, do not split directly — simplify first."
     }
    },
    {
     "id": "m2-06-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "無窮大/無窮小",
      "en": "Infinity & infinitesimal"
     },
     "pitfall": {
      "zh": "無窮大不是數，是趨勢；1/∞ = 0 在極限運算中成立",
      "en": "Infinity is not a number, it's a trend; 1/∞ = 0 in limit operations"
     }
    },
    {
     "id": "m2-06-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "有理函數極限",
      "en": "Limits of rational functions"
     },
     "formula": "\\lim_{n\\to\\infty}\\frac{P(n)}{Q(n)} = \\lim_{n\\to\\infty}\\frac{\\text{最高次項係數比}}",
     "pitfall": {
      "zh": "分子分母同除最高次冪；常數項極限為常數",
      "en": "Divide numerator and denominator by highest power; constant term limits to itself"
     }
    },
    {
     "id": "m2-06-l6",
     "knowledgeType": "theorem",
     "name": {
      "zh": "單調有界定理",
      "en": "Monotone convergence theorem"
     },
     "formula": "單調遞增且有上界 ⇒ 收斂",
     "pitfall": {
      "zh": "用於證明數列極限存在；需先證明單調性和有界性",
      "en": "Proves limit exists; need monotonicity and boundedness first"
     }
    }
   ]
  },
  {
   "id": "m2-07",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·函數極限與連續",
    "en": "M2 · Limits of Functions & Continuity"
   },
   "leaves": [
    {
     "id": "m2-07-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "函數極限與左右極限",
      "en": "Function limit & one-sided limits"
     },
     "formula": "\\lim_{x\\to a} f(x)=L \\iff \\lim_{x\\to a^-}=\\lim_{x\\to a^+}=L",
     "pitfall": {
      "zh": "函數在某點連續意味着極限值等於函數值。DSE常考判斷間斷點",
      "en": "Continuity at a point means the limit equals the function value. DSE tests identifying discontinuities."
     }
    },
    {
     "id": "m2-07-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "極限運算法則",
      "en": "Limit laws"
     },
     "formula": "\\lim[f(x)+g(x)]=\\lim f(x)+\\lim g(x)",
     "pitfall": {
      "zh": "DSE常考的三種間斷點類型：可去、跳躍、無窮",
      "en": "The three discontinuity types DSE tests: removable, jump and infinite."
     }
    },
    {
     "id": "m2-07-l3",
     "knowledgeType": "theorem",
     "name": {
      "zh": "連續性",
      "en": "Continuity"
     },
     "formula": "f\\ \\text{在 }a\\ \\text{連續} \\iff \\lim_{x\\to a}f(x)=f(a)",
     "pitfall": {
      "zh": "連續三條件：f(a) 有定義、極限存在、兩者相等；分段函數重點考",
      "en": "Continuity needs: f(a) defined, limit exists, and they're equal; watch piecewise functions"
     }
    },
    {
     "id": "m2-07-l4",
     "knowledgeType": "corollary",
     "name": {
      "zh": "極限類型（0/0, ∞/∞）",
      "en": "Indeterminate forms"
     },
     "pitfall": {
      "zh": "0/0 和 ∞/∞ 是不定式，不能直接得出結論",
      "en": "0/0 and ∞/∞ are indeterminate; cannot conclude directly"
     }
    },
    {
     "id": "m2-07-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "有理函數極限",
      "en": "Limits of rational functions"
     },
     "formula": "\\lim_{x\\to\\infty}\\frac{P(x)}{Q(x)} = \\lim_{x\\to\\infty}\\frac{\\text{最高次項係數比}}",
     "pitfall": {
      "zh": "分子分母同除最高次冪；度數相同看係數比",
      "en": "Divide by highest power; same degree → coefficient ratio"
     }
    },
    {
     "id": "m2-07-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "間斷點類型",
      "en": "Types of discontinuity"
     },
     "pitfall": {
      "zh": "可去間斷（極限存在但不等於函數值）；跳躍間斷（左右極限不等）；無窮間斷（極限為∞）",
      "en": "Removable (limit≠value); jump (one-sided limits differ); infinite (limit=∞)"
     }
    }
   ]
  },
  {
   "id": "m2-08",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S5"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·微分法",
    "en": "M2 · Differentiation"
   },
   "leaves": [
    {
     "id": "m2-08-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "從第一原理求導",
      "en": "First principles"
     },
     "formula": "f'(x) = \\lim_{h \\to 0}\\frac{f(x+h)-f(x)}{h}",
     "pitfall": {
      "zh": "DSE卷三第一題常考第一原理。常見錯誤：展開f(x+h)-f(x)時符號出錯；忘記最終要令h趨近0而非直接代入h=0",
      "en": "Paper 3 Q1 often tests differentiation from first principles. Common errors: sign mistakes expanding f(x+h)−f(x); forgetting to let h→0 rather than substituting h=0."
     }
    },
    {
     "id": "m2-08-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "求導法則與鏈式法則",
      "en": "Rules & chain rule"
     },
     "formula": "\\frac{dy}{dx} = \\frac{dy}{du}\\cdot\\frac{du}{dx}",
     "pitfall": {
      "zh": "鏈式法則的關鍵是認出外層函數。例如y=sin(2x)，外層是sin內層是2x，所以dy/dx=cos(2x)乘2。DSE常考多層嵌套如e^(x^2)",
      "en": "The key to the chain rule is identifying the outer function. E.g. y=sin(2x): outer sin, inner 2x, so dy/dx=cos(2x)·2. DSE tests nesting like e^(x^2)."
     }
    },
    {
     "id": "m2-08-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "三角/指對函數導數",
      "en": "Derivatives of trig/exp/log"
     },
     "formula": "(\\sin x)' = \\cos x;\\ (e^x)' = e^x;\\ (\\ln x)' = \\frac{1}{x}",
     "pitfall": {
      "zh": "必須熟記導數表：d/dx(cos x)=-sin x注意負號，d/dx(e^x)=e^x，d/dx(ln x)=1/x。DSE常在複合函數中隱含考查",
      "en": "Memorise the derivative table: d/dx(cos x)=−sin x (watch the sign), d/dx(e^x)=e^x, d/dx(ln x)=1/x. DSE tests these inside composite functions."
     }
    },
    {
     "id": "m2-08-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "積法則與商法則",
      "en": "Product & quotient rules"
     },
     "formula": "(uv)' = u'v+uv';\\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v-uv'}{v^2}",
     "pitfall": {
      "zh": "商法則分子是前導後減後導前，順序反了差一個負號。DSE常考隱含商法則的題如y=x/(x+1)",
      "en": "The quotient rule numerator is (v·u′ − u·v′); reversing the order flips the sign. DSE tests the hidden quotient rule like y=x/(x+1)."
     }
    },
    {
     "id": "m2-08-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "二階導數",
      "en": "Second derivative"
     },
     "formula": "f''(x) = \\frac{d}{dx}f'(x)",
     "pitfall": {
      "zh": "二階導判凹凸/極值性質；一階導判增減",
      "en": "Second derivative for concavity/extrema nature; first for monotonicity"
     }
    },
    {
     "id": "m2-08-l6",
     "knowledgeType": "formula",
     "name": {
      "zh": "隱函數求導",
      "en": "Implicit differentiation"
     },
     "formula": "\\frac{dy}{dx} = -\\frac{F_x}{F_y}",
     "pitfall": {
      "zh": "方程兩邊對x求導時y視為x的函數；勿忘鏈式法則",
      "en": "Differentiate both sides w.r.t. x; treat y as function of x"
     }
    },
    {
     "id": "m2-08-l7",
     "knowledgeType": "formula",
     "name": {
      "zh": "參數方程求導",
      "en": "Parametric differentiation"
     },
     "formula": "\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}",
     "pitfall": {
      "zh": "二階導：d²y/dx² = (d/dt)(dy/dx)/(dx/dt)",
      "en": "Second derivative: differentiate (dy/dx) w.r.t. t then divide"
     }
    }
   ]
  },
  {
   "id": "m2-09",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S5",
    "S6"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·微分的應用",
    "en": "M2 · Applications of Differentiation"
   },
   "leaves": [
    {
     "id": "m2-09-l1",
     "knowledgeType": "corollary",
     "name": {
      "zh": "切線與法線",
      "en": "Tangent & normal"
     },
     "formula": "\\text{切線斜率} = f'(x_0)",
     "pitfall": {
      "zh": "切線斜率等於該點的導數值。DSE常考求切線方程",
      "en": "The tangent slope equals the derivative at that point. DSE tests finding tangent equations."
     }
    },
    {
     "id": "m2-09-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "單調性、極大極小",
      "en": "Monotonicity, max/min"
     },
     "pitfall": {
      "zh": "先解 f'(x)=0 再檢查左右符號變化或二階導數",
      "en": "Solve f'(x)=0, then check sign change or second derivative"
     }
    },
    {
     "id": "m2-09-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "應用最優化題",
      "en": "Applied optimisation"
     },
     "pitfall": {
      "zh": "先寫函數關係式，再用導數求最值；注意定義域限制",
      "en": "Write function first, then derivative for extreme; mind the domain"
     }
    },
    {
     "id": "m2-09-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "凹凸性與拐點",
      "en": "Concavity & inflection point"
     },
     "formula": "f''(x) > 0 \\text{凹向上}; f''(x) < 0 \\text{凹向下}; \\text{拐點} f''(x)=0",
     "pitfall": {
      "zh": "拐點是二階導數變號的點，不是所有f''(x)=0都是拐點",
      "en": "Inflection where f'' changes sign; not all f''=0 are inflection"
     }
    },
    {
     "id": "m2-09-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "曲線草圖（漸近線與關鍵點）",
      "en": "Curve sketching (asymptotes & key points)"
     },
     "formula": "\\text{求}：截距、\\text{漸近線、極值、拐點",
     "pitfall": {
      "zh": "先算極限定漸近線；關鍵點連成草圖，不必精算每點",
      "en": "Find limits for asymptotes; connect key points into sketch"
     }
    },
    {
     "id": "m2-09-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "相關變率問題",
      "en": "Related rates of change"
     },
     "formula": "\\frac{dy}{dt} = \\frac{dy}{dx} \\cdot \\frac{dx}{dt}",
     "pitfall": {
      "zh": "找出不變關係式，兩邊對t求導；注意正負號和單位",
      "en": "Find invariant relation, differentiate w.r.t. t; mind signs & units"
     }
    }
   ]
  },
  {
   "id": "m2-10",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S6"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·不定積分",
    "en": "M2 · Indefinite Integration"
   },
   "leaves": [
    {
     "id": "m2-10-l1",
     "knowledgeType": "formula",
     "name": {
      "zh": "冪函數積分與積分公式",
      "en": "Power rule & formulas"
     },
     "formula": "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C\\ (n \\neq -1)",
     "pitfall": {
      "zh": "n=-1時需單獨處理：∫1/x dx = ln|x|+C；別忘積分常數C",
      "en": "n=-1 is special case: ∫1/x dx = ln|x|+C; don't forget +C"
     }
    },
    {
     "id": "m2-10-l2",
     "knowledgeType": "theorem",
     "name": {
      "zh": "換元積分法",
      "en": "Substitution"
     },
     "pitfall": {
      "zh": "優先湊微分法：尋找g'(x)與g(x)的關係；換元後記得把dx換回",
      "en": "Try '湊微分' first: find g'(x) relation with g(x); remember to substitute back dx"
     }
    },
    {
     "id": "m2-10-l3",
     "knowledgeType": "formula",
     "name": {
      "zh": "三角積分",
      "en": "Trig integration"
     },
     "formula": "\\int \\sin x\\,dx = -\\cos x + C",
     "pitfall": {
      "zh": "常見三角積分：sin→-cos，cos→sin，tan²→sec²-1；利用恆等式降冪",
      "en": "Common trig integrals: sin→-cos, cos→sin, tan²→sec²-1; use identities to reduce power"
     }
    },
    {
     "id": "m2-10-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "分部積分",
      "en": "Integration by parts"
     },
     "formula": "\\int u\\,dv = uv - \\int v\\,du",
     "pitfall": {
      "zh": "選u原則：LIATE（對數、反三角、代數、三角、指數）；多次分部可能循環",
      "en": "Choose u by LIATE (Log, Inv trig, Alg, Trig, Exp); may need multiple rounds"
     }
    },
    {
     "id": "m2-10-l5",
     "knowledgeType": "formula",
     "name": {
      "zh": "指數/對數函數積分",
      "en": "Integrating exp & log"
     },
     "formula": "\\int e^x\\,dx = e^x + C;\\quad \\int \\frac{1}{x}\\,dx = \\ln|x| + C",
     "pitfall": {
      "zh": "e^x積分仍是e^x；ln|x|的積分是x ln|x|-x+C（需分部積分）",
      "en": "∫e^x = e^x; ∫ln|x| needs integration by parts: x ln|x|-x+C"
     }
    },
    {
     "id": "m2-10-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "有理函數積分（部分分式）",
      "en": "Rational functions (partial fractions)"
     },
     "formula": "\\frac{P(x)}{Q(x)} \\rightarrow \\frac{A}{x-a} + \\frac{B}{x-b} + \\cdots",
     "pitfall": {
      "zh": "先因式分解分母；真分式才用部分分式，假分式要先除",
      "en": "Factor denominator first; proper fraction needed, divide if improper"
     }
    },
    {
     "id": "m2-10-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "積分技巧選擇策略",
      "en": "Integration strategy selection"
     },
     "formula": "\\text{優先：湊微分 → 換元 → 分部 → 部分分式}",
     "pitfall": {
      "zh": "湊微分最簡捷；trig換元在DSE不常用",
      "en": "Guess-and-check is fastest; trig substitution less common in DSE"
     }
    }
   ]
  },
  {
   "id": "m2-11",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S6"
   ],
   "weight": "high",
   "diff": 3,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·定積分與面積",
    "en": "M2 · Definite Integrals & Areas"
   },
   "leaves": [
    {
     "id": "m2-11-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "定積分計算（FTC）",
      "en": "Evaluating definite integrals"
     },
     "formula": "\\int_a^b f(x)\\,dx = F(b) - F(a)",
     "pitfall": {
      "zh": "定積分的幾何意義是曲線下面積。DSE常考面積在x軸上方為正下方為負",
      "en": "The definite integral geometrically means the area under a curve. Area above the x-axis is positive, below is negative."
     }
    },
    {
     "id": "m2-11-l2",
     "knowledgeType": "corollary",
     "name": {
      "zh": "曲線圍成面積",
      "en": "Area between curves"
     },
     "formula": "A = \\int_a^b (\\text{上}) - (\\text{下})\\,dx",
     "pitfall": {
      "zh": "先求交點定積分限；曲線交叉時要分段積分",
      "en": "Find intersections first; split the integral at crossings"
     }
    },
    {
     "id": "m2-11-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "旋轉體體積",
      "en": "Volume of revolution"
     },
     "formula": "V = \\pi\\int_a^b y^2\\,dx\\ (\\text{繞 x 軸})",
     "pitfall": {
      "zh": "分清繞 x 軸還是 y 軸；半徑是函數值不是自變量",
      "en": "Distinguish rotation axis; radius is function value, not variable"
     }
    },
    {
     "id": "m2-11-l4",
     "knowledgeType": "theorem",
     "name": {
      "zh": "定積分性質",
      "en": "Properties of definite integrals"
     },
     "formula": "\\int_a^b cf(x)dx = c\\int_a^b f(x)dx;\\quad \\int_a^b = \\int_a^c + \\int_c^b",
     "pitfall": {
      "zh": "可加性注意積分區間連接；提常數不影響積分限",
      "en": "Additivity requires contiguous intervals; constants factor out"
     }
    },
    {
     "id": "m2-11-l5",
     "knowledgeType": "corollary",
     "name": {
      "zh": "面積計算技巧",
      "en": "Area computation tricks"
     },
     "formula": "利用對稱性簡化：偶函數在對稱區間面積加倍",
     "pitfall": {
      "zh": "面積在 x 軸下方要取絕對值；分段積分避免抵消",
      "en": "Take absolute value for areas below x-axis; integrate piecewise to avoid cancellation"
     }
    },
    {
     "id": "m2-11-l6",
     "knowledgeType": "formula",
     "name": {
      "zh": "弧長公式",
      "en": "Arc length formula"
     },
     "formula": "s = \\int_a^b \\sqrt{1 + (\\frac{dy}{dx})^2}\\,dx",
     "pitfall": {
      "zh": "被積函數帶平方根；常需換元法簡化",
      "en": "Integrand has sqrt; often requires substitution"
     }
    },
    {
     "id": "m2-11-l7",
     "knowledgeType": "corollary",
     "name": {
      "zh": "定積分應用題建模",
      "en": "Applied definite integral problems"
     },
     "formula": "\\text{識別}：\\text{變化率累積 → 求導的逆運算}",
     "pitfall": {
      "zh": "從問題背景提取變化率；定積分是累積量",
      "en": "Extract rate from context; definite integral accumulates"
     }
    }
   ]
  },
  {
   "id": "m2-12",
   "level": "topic",
   "domain": "M2",
   "grades": [
    "S4"
   ],
   "weight": "mid",
   "diff": 2,
   "examFrequency": 13,
   "examSection": "Paper3",
   "name": {
    "zh": "M2·二項式定理(通項)",
    "en": "M2 · Binomial Theorem (general term)"
   },
   "leaves": [
    {
     "id": "m2-12-l1",
     "knowledgeType": "theorem",
     "name": {
      "zh": "二項式定理展開",
      "en": "Binomial theorem"
     },
     "formula": "(a+b)^n = \\sum_{k=0}^{n} C^n_k a^{n-k} b^k",
     "pitfall": {
      "zh": "注意區分二項展開式(必修)和二項式定理(M2)。M2多了通項求和",
      "en": "Distinguish binomial expansion (compulsory part) from the binomial theorem (M2). M2 adds summing general terms."
     }
    },
    {
     "id": "m2-12-l2",
     "knowledgeType": "formula",
     "name": {
      "zh": "通項公式",
      "en": "General term"
     },
     "formula": "T_{k+1} = C^n_k a^{n-k} b^k",
     "pitfall": {
      "zh": "求特定 x 冪次的項：設指數方程解 k，勿忘 C 係數",
      "en": "Set exponent equation to find k; include the combination coefficient"
     }
    },
    {
     "id": "m2-12-l3",
     "knowledgeType": "corollary",
     "name": {
      "zh": "有理項項",
      "en": "Rational term index"
     },
     "formula": "找出 k 使 a^{n-k}b^k 的指數均為整數",
     "pitfall": {
      "zh": "有理項可能不止一個；需枚舉滿足條件的 k 值",
      "en": "Multiple k values may give rational terms; enumerate all"
     }
    },
    {
     "id": "m2-12-l4",
     "knowledgeType": "formula",
     "name": {
      "zh": "常數項",
      "en": "Constant term"
     },
     "formula": "令 x 的指數為零解 k；常數項 = C^n_k",
     "pitfall": {
      "zh": "常數項對應 x⁰；注意二項式中 a,b 的角色",
      "en": "Constant term is x⁰; mind roles of a and b"
     }
    },
    {
     "id": "m2-12-l5",
     "knowledgeType": "theorem",
     "name": {
      "zh": "二項式係數的性質",
      "en": "Properties of binomial coefficients"
     },
     "formula": "C^n_k = C^n_{n-k}; \\sum_{k=0}^n C^n_k = 2^n",
     "pitfall": {
      "zh": "對稱性來自組合意義；求和常用於求係數總和",
      "en": "Symmetry from combinatorial meaning; sum gives total coefficient"
     }
    },
    {
     "id": "m2-12-l6",
     "knowledgeType": "corollary",
     "name": {
      "zh": "最大系數項",
      "en": "Greatest coefficient term"
     },
     "formula": "n \\text{為偶數最大項為} C^n_{n/2}; n \\text{為奇數最大項為} C^n_{(n\\pm1)/2}",
     "pitfall": {
      "zh": "最大系數在中間；若有多個最大項需都寫出",
      "en": "Greatest at center; if multiple, list all"
     }
    }
   ]
  }
 ],
 "edges": [
  {
   "from": "na-04",
   "to": "na-03",
   "type": "prereq"
  },
  {
   "from": "na-04",
   "to": "na-10",
   "type": "prereq"
  },
  {
   "from": "na-05",
   "to": "na-06",
   "type": "prereq"
  },
  {
   "from": "na-06",
   "to": "na-07",
   "type": "prereq"
  },
  {
   "from": "na-06",
   "to": "na-11",
   "type": "prereq"
  },
  {
   "from": "na-03",
   "to": "na-10",
   "type": "prereq"
  },
  {
   "from": "na-05",
   "to": "na-12",
   "type": "prereq"
  },
  {
   "from": "ms-04",
   "to": "ms-02",
   "type": "prereq"
  },
  {
   "from": "ms-02",
   "to": "ms-01",
   "type": "prereq"
  },
  {
   "from": "ms-07",
   "to": "ms-05",
   "type": "prereq"
  },
  {
   "from": "ms-05",
   "to": "ms-06",
   "type": "prereq"
  },
  {
   "from": "dp-02",
   "to": "dp-03",
   "type": "prereq"
  },
  {
   "from": "dp-05",
   "to": "dp-06",
   "type": "prereq"
  },
  {
   "from": "dp-06",
   "to": "dp-07",
   "type": "prereq"
  },
  {
   "from": "na-06",
   "to": "na-07",
   "type": "derives"
  },
  {
   "from": "ms-02",
   "to": "ms-08",
   "type": "derives"
  },
  {
   "from": "dp-02",
   "to": "na-12",
   "type": "derives"
  },
  {
   "from": "m2-08",
   "to": "m2-11",
   "type": "derives"
  },
  {
   "from": "m2-03",
   "to": "m2-08",
   "type": "derives"
  },
  {
   "from": "na-02",
   "to": "na-10",
   "type": "related"
  },
  {
   "from": "na-03",
   "to": "na-10",
   "type": "related"
  },
  {
   "from": "na-09",
   "to": "na-03",
   "type": "related"
  },
  {
   "from": "na-09",
   "to": "dp-03",
   "type": "related"
  },
  {
   "from": "na-11",
   "to": "ms-06",
   "type": "related"
  },
  {
   "from": "ms-01",
   "to": "ms-08",
   "type": "related"
  },
  {
   "from": "ms-03",
   "to": "ms-04",
   "type": "related"
  },
  {
   "from": "dp-04",
   "to": "dp-05",
   "type": "related"
  },
  {
   "from": "dp-03",
   "to": "dp-07",
   "type": "related"
  },
  {
   "from": "m2-04",
   "to": "ms-01",
   "type": "related"
  },
  {
   "from": "m2-02",
   "to": "ms-02",
   "type": "related"
  },
  {
   "from": "m2-06",
   "to": "na-10",
   "type": "related"
  },
  {
   "from": "ms-03",
   "to": "na-07",
   "type": "cotested",
   "evidence": "卷一經典: 圓+直線/二次圖像交點, 圓內接四邊形+三角"
  },
  {
   "from": "ms-02",
   "to": "ms-03",
   "type": "cotested",
   "evidence": "圓性質大題內嵌正餘弦定理解三角形"
  },
  {
   "from": "ms-01",
   "to": "ms-02",
   "type": "cotested",
   "evidence": "3D 題必用正餘弦定理+直角三角"
  },
  {
   "from": "na-06",
   "to": "ms-05",
   "type": "cotested",
   "evidence": "直線與二次曲線聯立+判別式判交點"
  },
  {
   "from": "na-10",
   "to": "na-03",
   "type": "cotested",
   "evidence": "GP 複利與指數增長模型互考"
  },
  {
   "from": "na-09",
   "to": "na-02",
   "type": "cotested",
   "evidence": "變分+百分法文字題"
  },
  {
   "from": "dp-02",
   "to": "dp-03",
   "type": "cotested",
   "evidence": "排列組合算 n(E) 再算概率, 卷一固定題型"
  },
  {
   "from": "na-05",
   "to": "na-12",
   "type": "cotested",
   "evidence": "多項式除法+二項展開混合"
  },
  {
   "from": "m2-03",
   "to": "m2-02",
   "type": "cotested",
   "evidence": "M2 卷一: 任意角+恆等式化簡後解方程"
  },
  {
   "from": "m2-08",
   "to": "m2-03",
   "type": "cotested",
   "evidence": "M2: 三角函數求導應用題"
  },
  {
   "from": "m2-09",
   "to": "m2-08",
   "type": "cotested",
   "evidence": "M2 大題: 求導+切線+最值一條龍"
  },
  {
   "from": "m2-11",
   "to": "m2-08",
   "type": "cotested",
   "evidence": "M2: 定積分面積+先求交點(聯立)"
  },
  {
   "from": "m2-04",
   "to": "m2-05",
   "type": "cotested",
   "evidence": "M2: 向量與矩陣線性變換結合"
  },
  {
   "from": "m2-12",
   "to": "na-05",
   "type": "cotested",
   "evidence": "M2 二項通項+多項式係數比較"
  },
  {
   "from": "m2-01",
   "to": "na-10",
   "type": "cotested",
   "evidence": "數學歸納法證明數列求和公式"
  },
  {
   "from": "na-07",
   "to": "na-08",
   "type": "prereq"
  },
  {
   "from": "ms-04",
   "to": "ms-01",
   "type": "prereq"
  },
  {
   "from": "dp-04",
   "to": "dp-05",
   "type": "prereq"
  },
  {
   "from": "m2-02",
   "to": "m2-03",
   "type": "prereq"
  },
  {
   "from": "m2-06",
   "to": "m2-07",
   "type": "prereq"
  },
  {
   "from": "m2-07",
   "to": "m2-08",
   "type": "prereq"
  },
  {
   "from": "m2-08",
   "to": "m2-09",
   "type": "prereq"
  },
  {
   "from": "m2-08",
   "to": "m2-10",
   "type": "prereq"
  },
  {
   "from": "m2-10",
   "to": "m2-11",
   "type": "prereq"
  },
  {
   "from": "na-12",
   "to": "m2-12",
   "type": "derives",
   "evidence": "M2 二項定理為必修二項展開之深化"
  },
  {
   "from": "na-07",
   "to": "na-08",
   "type": "cotested",
   "evidence": "圖像變換常結合二次函數圖像出題"
  },
  {
   "from": "ms-08",
   "to": "ms-01",
   "type": "cotested",
   "evidence": "3D 體積題常需立體求積公式"
  },
  {
   "from": "m2-09",
   "to": "m2-11",
   "type": "cotested",
   "evidence": "M2 最優化與定積分面積常串聯出大題"
  },
  {
   "from": "ms-03",
   "to": "na-06",
   "type": "cotested",
   "evidence": "圓內弦長計算常需聯立方程，判別式判斷交點個數"
  },
  {
   "from": "ms-03",
   "to": "ms-05",
   "type": "cotested",
   "evidence": "圓的切線方程和圓與直線位置關係，Section B幾乎每年考"
  },
  {
   "from": "na-10",
   "to": "na-06",
   "type": "cotested",
   "evidence": "由Sn推an涉及二次方程，數列求和也常出現二次"
  },
  {
   "from": "ms-07",
   "to": "ms-05",
   "type": "cotested",
   "evidence": "求距離/面積/中點常與直線方程組合，Section B常見"
  },
  {
   "from": "ms-07",
   "to": "ms-08",
   "type": "cotested",
   "evidence": "座標法求三角形面積，常和直線/圓組合"
  },
  {
   "from": "ms-06",
   "to": "ms-05",
   "type": "cotested",
   "evidence": "軌跡題的最終答案常是一條直線或圓的方程"
  },
  {
   "from": "ms-06",
   "to": "ms-03",
   "type": "cotested",
   "evidence": "軌跡題的常見結果是圓的方程"
  },
  {
   "from": "na-05",
   "to": "na-06",
   "type": "cotested",
   "evidence": "多項式除法和因式定理常與二次方程因式分解組合"
  },
  {
   "from": "na-05",
   "to": "na-04",
   "type": "cotested",
   "evidence": "多項式化簡常需用到指數/冪的法則"
  },
  {
   "from": "na-09",
   "to": "na-03",
   "type": "cotested",
   "evidence": "變分問題常轉化為指數/對數方程求解"
  },
  {
   "from": "na-02",
   "to": "na-03",
   "type": "cotested",
   "evidence": "複利/折舊問題是百分法和指數函數的經典組合"
  },
  {
   "from": "ms-01",
   "to": "ms-04",
   "type": "cotested",
   "evidence": "三維距離常需構造直角三角形用三角比求解"
  },
  {
   "from": "dp-06",
   "to": "dp-04",
   "type": "cotested",
   "evidence": "計算方差/標準差需要頻率分佈表的數據"
  },
  {
   "from": "dp-06",
   "to": "dp-05",
   "type": "cotested",
   "evidence": "分析數據分佈時需同時考慮集中趨勢和離差"
  },
  {
   "from": "na-11",
   "to": "na-06",
   "type": "cotested",
   "evidence": "二次不等式需要因式分解或求根公式，與二次方程緊密相關"
  },
  {
   "from": "na-11",
   "to": "na-07",
   "type": "cotested",
   "evidence": "函數定義域常由不等式確定（分母不為零、根號內非負）"
  },
  {
   "from": "m2-08",
   "to": "m2-02",
   "type": "cotested",
   "evidence": "M2卷三常考三角函數的微分，需先用恆等式化簡"
  },
  {
   "from": "m2-08",
   "to": "na-03",
   "type": "cotested",
   "evidence": "e^x和lnx的微分是M2必考，常與方程求解組合"
  },
  {
   "from": "m2-10",
   "to": "m2-08",
   "type": "cotested",
   "evidence": "積分是微分的逆運算，DSE常在同一題中同時考查"
  },
  {
   "from": "m2-10",
   "to": "m2-03",
   "type": "cotested",
   "evidence": "積分三角函數需先用恆等式化簡，再分部積分"
  },
  {
   "from": "m2-10",
   "to": "na-03",
   "type": "cotested",
   "evidence": "e^x和lnx的積分是M2必考基礎"
  },
  {
   "from": "m2-04",
   "to": "ms-07",
   "type": "cotested",
   "evidence": "M2向量常與座標幾何結合考幾何證明"
  },
  {
   "from": "m2-04",
   "to": "ms-04",
   "type": "cotested",
   "evidence": "向量點積求夾角需用到三角學"
  },
  {
   "from": "m2-06",
   "to": "m2-07",
   "type": "cotested",
   "evidence": "極限是連續和微分的基礎，DSE常在一題中考查鏈條"
  },
  {
   "from": "m2-07",
   "to": "m2-08",
   "type": "cotested",
   "evidence": "連續是可微的必要條件，DSE常考判斷可微性"
  },
  {
   "from": "m2-12",
   "to": "m2-01",
   "type": "cotested",
   "evidence": "M2常考用歸納法證明二項式係數的等式"
  },
  {
   "from": "m2-05",
   "to": "na-08",
   "type": "cotested",
   "evidence": "矩陣表示的線性變換與圖像變換本質相同"
  },
  {
   "from": "na-12",
   "to": "dp-03",
   "type": "cotested",
   "evidence": "二項分佈概率模型：P(X=r)=C(n,r)p^r(1-p)^(n-r)，必修二項展開式與概率直接結合"
  },
  {
   "from": "na-12",
   "to": "dp-02",
   "type": "cotested",
   "evidence": "二項展開式的係數C(n,r)和排列組合直接相關"
  },
  {
   "from": "na-04",
   "to": "na-03",
   "type": "cotested",
   "evidence": "指數法則和對數法則是互逆運算的兩個面，DSE常在同一題中轉換使用"
  },
  {
   "from": "dp-07",
   "to": "dp-06",
   "type": "cotested",
   "evidence": "標準分z=(x-mu)/sigma的計算依賴標準差"
  },
  {
   "from": "dp-07",
   "to": "dp-05",
   "type": "cotested",
   "evidence": "標準分的計算依賴均值"
  },
  {
   "from": "dp-03",
   "to": "dp-05",
   "type": "cotested",
   "evidence": "期望值是概率的加權平均，與集中趨勢直接相關"
  },
  {
   "from": "na-08",
   "to": "na-03",
   "type": "cotested",
   "evidence": "對數函數y=logx和指數函數y=a^x的圖像變換是DSE常見考法"
  },
  {
   "from": "ms-03",
   "to": "ms-07",
   "type": "cotested",
   "evidence": "圓心到弦的中點、點到圓的切點——圓的座標幾何題同時涉及圓性質和座標公式"
  },
  {
   "from": "m2-06",
   "to": "m2-08",
   "type": "cotested",
   "evidence": "第一原理求導直接使用極限定義，DSE常連接考查"
  },
  {
   "from": "m2-02",
   "to": "na-08",
   "type": "cotested",
   "evidence": "M2三角函數的圖像變換（週期、振幅、平移）與必修圖像變換是同一框架的深化"
  },
  {
   "from": "m2-09",
   "to": "ms-08",
   "type": "cotested",
   "evidence": "M2微分求極值+必修求積法：微積分方法和公式法求面積/體積的對比"
  },
  {
   "from": "m2-04",
   "to": "m2-03",
   "type": "cotested",
   "evidence": "向量幾何證明常需三角恆等式輔助"
  },
  {
   "from": "m2-10",
   "to": "m2-04",
   "type": "cotested",
   "evidence": "M2偶爾考向量積分或用積分求面積（向量形式）"
  },
  {
   "from": "na-01",
   "to": "na-06",
   "type": "cotested",
   "evidence": "有理化分母在解二次方程（含根式係數）時常用"
  },
  {
   "from": "na-11",
   "to": "ms-06",
   "type": "cotested",
   "evidence": "線性規劃本身就是不等式組的幾何表示，與軌跡思想相通"
  },
  {
   "from": "ms-05",
   "to": "ms-08",
   "type": "cotested",
   "evidence": "直線方程圍成的區域面積——座標法求面積需直線方程"
  },
  {
   "from": "na-03",
   "to": "na-11",
   "type": "cotested",
   "evidence": "對數不等式需同時掌握對數性質和不等式方向規則"
  },
  {
   "from": "dp-04",
   "to": "dp-05",
   "type": "cotested",
   "evidence": "從頻率分佈表/直方圖讀數據來計算均值中位數，幾乎每道統計題都需兩者"
  },
  {
   "from": "na-06",
   "to": "na-07",
   "type": "cotested",
   "evidence": "quadratic eq solutions = x-intercepts of quadratic function"
  },
  {
   "from": "ms-07",
   "to": "ms-04",
   "type": "cotested",
   "evidence": "angle between lines uses trig ratios in coordinate geometry"
  },
  {
   "from": "dp-03",
   "to": "dp-04",
   "type": "cotested",
   "evidence": "probability questions often read data from frequency tables"
  }
 ],
 "motherProblems": [
  {
   "id": "mt-discriminant-intersect",
   "titleZh": "拋物線與 x 軸交點個數，求參數範圍",
   "titleEn": "Number of x-intercepts of a parabola",
   "coreTopics": [
    "na-06"
   ],
   "relatedTopics": [
    "na-07"
   ],
   "stem": "若 y = x² + kx + 4 的圖像與 x 軸沒有交點，求 k 的取值範圍。",
   "stemEn": "If the graph of y = x² + kx + 4 has no x-intercepts, find the range of k.",
   "solutionSkeleton": [
    "列出判別式 Δ = b² − 4ac",
    "代入條件 Δ < 0",
    "解一元二次不等式求 k 範圍"
   ],
   "variation": [
    "有實根 → Δ ≥ 0",
    "相切（一個交點）→ Δ = 0",
    "兩個相異交點 → Δ > 0",
    "換包裝：説成「與直線 y=c 相交」"
   ],
   "appearances": [
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 y = x² - 4x + 3 與 x 軸的交點。",
     "stemEn": "Find the x-intercepts of y = x² - 4x + 3.",
     "answerZh": "x²-4x+3=0 → (x-1)(x-3)=0 → x=1,3；交點 (1,0)、(3,0)。",
     "answerEn": "(x-1)(x-3)=0 → x=1,3.",
     "marks": [
      {
       "content": "因式分解或求根",
       "pts": 1,
       "contentEn": "Factorise or find roots"
      },
      {
       "content": "x=1 與 x=3",
       "pts": 1,
       "contentEn": "x = 1 and x = 3"
      },
      {
       "content": "寫成交點坐標",
       "pts": 1,
       "contentEn": "Write as intersection coordinates"
      }
     ],
     "lossZh": "只求 x 值不寫成坐標形式。",
     "lossEn": "Giving x values without coordinates.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "若 y = x² + 2x + k 與 x 軸有兩個不同交點，求 k 的範圍。",
     "stemEn": "For y = x² + 2x + k to cut the x-axis twice, find the range of k.",
     "answerZh": "Δ = 4 - 4k > 0 → k < 1。",
     "answerEn": "Δ = 4 - 4k > 0 → k < 1.",
     "marks": [
      {
       "content": "寫出判別式 Δ = b²-4ac",
       "pts": 1,
       "contentEn": "Write the discriminant Δ = b² − 4ac"
      },
      {
       "content": "兩交點 → Δ>0",
       "pts": 1,
       "contentEn": "Two intersections → Δ > 0"
      },
      {
       "content": "解出 k<1",
       "pts": 1,
       "contentEn": "Solve to get k < 1"
      }
     ],
     "lossZh": "漏「Δ>0」條件或符號方向寫反。",
     "lossEn": "Missing Δ>0 or wrong inequality direction.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "直線 y = mx 與圓 x² + y² = 4 相切，求 m。",
     "stemEn": "Line y=mx is tangent to x²+y²=4. Find m.",
     "answerZh": "代入：x²+m²x²=4 → (1+m²)x²-4=0；相切 → Δ=0 → 16(1+m²)²... 直接：圓心到直線距離=半徑：|0|/√(m²+1)=2 不可能；改為圓心 (0,0) 到直線 mx-y=0 距離=2 → 0/√(m²+1)=2 → 矛盾，直線過圓心永不與圓相切；正確：圓心到直線距離 = |c|/√(a²+b²) = 0 ≠ 2。故 m 不存在（直線過圓心必割圓）。",
     "answerEn": "The line passes through the centre, so it always cuts the circle; no tangent m exists.",
     "marks": [
      {
       "content": "判斷直線過圓心 (0,0)",
       "pts": 1,
       "contentEn": "Notice the line passes through the centre (0,0)"
      },
      {
       "content": "過圓心的直線必割圓（距離=0≠半徑）",
       "pts": 1,
       "contentEn": "A line through the centre always cuts the circle (distance = 0 ≠ radius)"
      },
      {
       "content": "結論：無解",
       "pts": 1,
       "contentEn": "Conclusion: no solution"
      }
     ],
     "lossZh": "硬套判別式而不先看幾何位置（過圓心直線不可能相切）。",
     "lossEn": "Forcing discriminant without seeing line passes through centre.",
     "years": []
    }
   ],
   "solutionSkeletonEn": [
    "Write the discriminant Δ = b² − 4ac",
    "Substitute the condition Δ < 0",
    "Solve the quadratic inequality for the range of k"
   ],
   "variationEn": [
    "Real roots → Δ ≥ 0",
    "Tangent (one intersection) → Δ = 0",
    "Two distinct intersections → Δ > 0",
    "Rephrased: \"intersects the line y = c\""
   ]
  },
  {
   "id": "mt-circle-chord",
   "titleZh": "圓內弦長 + 切線與割線",
   "titleEn": "Chord length with tangent & secant",
   "coreTopics": [
    "ms-03"
   ],
   "relatedTopics": [
    "na-06",
    "ms-02"
   ],
   "stem": "圓與直線相交於 P、Q 兩點，已知圓心到直線的距離，求弦長 PQ；進一步求切線方程。",
   "stemEn": "A circle meets a line at P and Q; given the perpendicular distance from centre, find chord length PQ, then the tangent equation.",
   "solutionSkeleton": [
    "勾股：半徑² = 半弦² + 弦心距²",
    "圓心到直線距離公式",
    "切線垂直於過切點的半徑"
   ],
   "variation": [
    "弦長 → 勾股 + 判別式判交點個數",
    "切點座標 → 聯立 + Δ=0",
    "圓內接四邊形 + 三角求角"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "圓半徑 5，一條弦到圓心距離 3，求弦長。",
     "stemEn": "Radius 5, chord 3 from centre; find chord length.",
     "answerZh": "半弦長 = √(5²-3²) = 4；弦長 = 8。",
     "answerEn": "Half-chord = √(25-9)=4; chord = 8.",
     "marks": [
      {
       "content": "畫半徑-弦心距-半弦直角三角形",
       "pts": 1
      },
      {
       "content": "半弦長 = √(r²-d²) = 4",
       "pts": 1
      },
      {
       "content": "弦長 = 8",
       "pts": 1
      }
     ],
     "lossZh": "直接用 5+3 或漏乘 2。",
     "lossEn": "Adding or not doubling half-chord.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "圓外一點 P 引切線 PA 長 6，割線交圓於 B、C，PB=4，求 BC。",
     "stemEn": "Tangent PA=6 from P; secant hits circle at B,C with PB=4. Find BC.",
     "answerZh": "切線定理 PA² = PB×PC → 36 = 4×PC → PC=9；BC = PC-PB = 5。",
     "answerEn": "PA²=PB·PC → PC=9; BC=5.",
     "marks": [
      {
       "content": "切線定理 PA²=PB·PC",
       "pts": 1
      },
      {
       "content": "PC=9",
       "pts": 1
      },
      {
       "content": "BC=PC-PB=5",
       "pts": 1
      }
     ],
     "lossZh": "把 PB 當整段割線長。",
     "lossEn": "Taking PB as whole secant.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "圓內接四邊形 ABCD 中 ∠A=70°，求 ∠C。",
     "stemEn": "Cyclic quadrilateral ABCD, ∠A=70°. Find ∠C.",
     "answerZh": "圓內接四邊形對角互補 → ∠C = 180°-70° = 110°。",
     "answerEn": "Opposite angles supplementary → ∠C=110°.",
     "marks": [
      {
       "content": "圓內接四邊形對角互補",
       "pts": 1
      },
      {
       "content": "∠C = 180°-∠A",
       "pts": 1
      },
      {
       "content": "=110°",
       "pts": 1
      }
     ],
     "lossZh": "記成對角相等。",
     "lossEn": "Thinking opposite angles equal.",
     "years": [
      "2018"
     ]
    }
   ]
  },
  {
   "id": "mt-ap-gp-general-term",
   "titleZh": "已知首項/公差，求第 n 項與前 n 項和",
   "titleEn": "Given a and d/r, find general term and sum",
   "coreTopics": [
    "na-10"
   ],
   "relatedTopics": [
    "na-03"
   ],
   "stem": "等差數列首項 3、公差 4，求第 20 項與前 20 項和；等比數列求無窮和。",
   "stemEn": "An AP has first term 3 and common difference 4; find the 20th term and sum of first 20 terms; for a GP, find the infinite sum.",
   "solutionSkeleton": [
    "先判斷 AP 還是 GP",
    "通項 aₙ = a + (n−1)d 或 arⁿ⁻¹",
    "求和 Sₙ 公式；|r|<1 用無窮和"
   ],
   "variation": [
    "給 Sₙ 反推通項（用 Sₙ − Sₙ₋₁）",
    "混合 AP+GP 分組求和",
    "數列 + 對數/指數混合（複利、增長）"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "等差數列 a₁=2, d=3，求 a₁₀ 和 S₁₀。",
     "stemEn": "AP with a₁=2, d=3; find a₁₀ and S₁₀.",
     "answerZh": "a₁₀ = 2 + 9×3 = 29；S₁₀ = 10/2×(2+29) = 155。",
     "answerEn": "a₁₀=29; S₁₀=155.",
     "marks": [
      {
       "content": "通項 aₙ=a₁+(n-1)d",
       "pts": 1,
       "contentEn": "General term aₙ = a₁ + (n−1)d"
      },
      {
       "content": "a₁₀=29",
       "pts": 1,
       "contentEn": "a₁₀ = 29"
      },
      {
       "content": "求和 Sₙ=n/2(a₁+aₙ)=155",
       "pts": 1,
       "contentEn": "Sum Sₙ = n/2(a₁+aₙ) = 155"
      }
     ],
     "lossZh": "項數用錯（第 10 項是 +9d 不是 +10d）。",
     "lossEn": "Wrong term count (+9d not +10d).",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "等比數列 a₃=8, a₆=64，求首項、公比和通項。",
     "stemEn": "GP with a₃=8, a₆=64; find a₁, r, general term.",
     "answerZh": "a₆/a₃ = r³ = 8 → r=2；a₃=a₁·2²=8 → a₁=2；aₙ=2ⁿ。",
     "answerEn": "r³=8 → r=2; a₁=2; aₙ=2ⁿ.",
     "marks": [
      {
       "content": "公比 r³ = a₆/a₃ = 8",
       "pts": 1,
       "contentEn": "Common ratio r³ = a₆/a₃ = 8"
      },
      {
       "content": "r=2",
       "pts": 1,
       "contentEn": "r = 2"
      },
      {
       "content": "a₁=2，通項 aₙ=2ⁿ",
       "pts": 1,
       "contentEn": "a₁ = 2, general term aₙ = 2ⁿ"
      }
     ],
     "lossZh": "把 a₆/a₃ 當 r²（間隔 3 項是 r³）。",
     "lossEn": "Taking a₆/a₃ as r² (3-step gap → r³).",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "等差數列 40, 37, 34, … 前 n 項和最大時 n 是多少？",
     "stemEn": "AP 40,37,34,…; for max Sₙ, find n.",
     "answerZh": "d=-3；aₙ=40-3(n-1)=43-3n；aₙ≥0 → n≤14.3 → n=14（a₁₄=1>0, a₁₅=-2<0）。",
     "answerEn": "d=-3; aₙ=43-3n≥0 → n≤14; S₁₄ max.",
     "marks": [
      {
       "content": "公差 d=-3，通項 aₙ=43-3n",
       "pts": 1,
       "contentEn": "Common difference d = −3, aₙ = 43−3n"
      },
      {
       "content": "找最後一個非負項 aₙ≥0",
       "pts": 1,
       "contentEn": "Find the last non-negative term aₙ ≥ 0"
      },
      {
       "content": "n=14",
       "pts": 1,
       "contentEn": "n = 14"
      }
     ],
     "lossZh": "把「和最大」誤當「項最大」；用 aₙ>0 判斷。",
     "lossEn": "Confusing max sum with max term.",
     "years": [
      "2022"
     ]
    }
   ],
   "solutionSkeletonEn": [
    "Decide whether it is an AP or a GP",
    "General term aₙ = a + (n−1)d or arⁿ⁻¹",
    "Sum formula Sₙ; use the infinite sum when |r| < 1"
   ],
   "variationEn": [
    "Deduce the general term from Sₙ (using Sₙ − Sₙ₋₁)",
    "Grouped sum of mixed AP + GP",
    "Sequence combined with logs/exponentials (compound interest, growth)"
   ]
  },
  {
   "id": "mt-m2-trig-diff",
   "titleZh": "三角函數求導（含複合角化簡）",
   "titleEn": "Differentiating trig functions after identity simplification",
   "coreTopics": [
    "m2-08"
   ],
   "relatedTopics": [
    "m2-03"
   ],
   "stem": "設 y = sin²x + sin 2x，求 dy/dx；並求 y 的極大極小值。",
   "stemEn": "Given y = sin²x + sin 2x, find dy/dx and hence its max/min.",
   "solutionSkeleton": [
    "先用二倍角/複合角恆等式化簡",
    "鏈式法則求導",
    "解 f'(x)=0，檢查符號變化判極值"
   ],
   "variation": [
    "cos 2A = 1 − 2sin²A 降次",
    "求切線方程、最值",
    "二階導數驗證極大/極小"
   ],
   "appearances": [
    {
     "year": 2016,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 d/dx[sin(2x)]。",
     "stemEn": "Differentiate sin(2x).",
     "answerZh": "鏈式：cos(2x)·2 = 2cos(2x)。",
     "answerEn": "2cos(2x).",
     "marks": [
      {
       "content": "鏈式法則",
       "pts": 1
      },
      {
       "content": "內層導數=2",
       "pts": 1
      },
      {
       "content": "2cos(2x)",
       "pts": 1
      }
     ],
     "lossZh": "漏乘內層導數 2。",
     "lossEn": "Missing inner derivative factor 2.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 d/dx[x²·sin x]。",
     "stemEn": "Differentiate x²·sin x.",
     "answerZh": "乘積法則：2x·sin x + x²·cos x。",
     "answerEn": "2x sin x + x² cos x.",
     "marks": [
      {
       "content": "乘積法則",
       "pts": 1
      },
      {
       "content": "x² 導=2x",
       "pts": 1
      },
      {
       "content": "結果 2x sin x + x² cos x",
       "pts": 1
      }
     ],
     "lossZh": "只導一項。",
     "lossEn": "Differentiating only one factor.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求 y=sin²x 的導數。",
     "stemEn": "Derivative of sin²x.",
     "answerZh": "y=(sin x)² → y'=2 sin x · cos x = sin 2x。",
     "answerEn": "y'=2 sin x cos x = sin 2x.",
     "marks": [
      {
       "content": "鏈式 (sin x)²",
       "pts": 1
      },
      {
       "content": "2 sin x · cos x",
       "pts": 1
      },
      {
       "content": "= sin 2x",
       "pts": 1
      }
     ],
     "lossZh": "寫成 cos²x 或漏內層 cos。",
     "lossEn": "Writing cos²x or missing inner cos.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-area-integration",
   "titleZh": "定積分求曲線圍成面積（先求交點）",
   "titleEn": "Area between curves via definite integral",
   "coreTopics": [
    "m2-11"
   ],
   "relatedTopics": [
    "m2-08",
    "na-06"
   ],
   "stem": "求曲線 y = x² 與直線 y = x + 2 圍成區域的面積。",
   "stemEn": "Find the area enclosed by y = x² and y = x + 2.",
   "solutionSkeleton": [
    "聯立求交點定積分限",
    "判斷上曲線/下曲線",
    "A = ∫(上 − 下)dx"
   ],
   "variation": [
    "曲線交叉 → 分段積分",
    "繞 x 軸旋轉體積",
    "與二次方程判別式結合求切點"
   ],
   "appearances": [
    {
     "year": 2015,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 y=x² 與 x 軸從 x=0 到 x=2 圍成的面積。",
     "stemEn": "Area under y=x² from 0 to 2.",
     "answerZh": "∫₀² x² dx = [x³/3]₀² = 8/3。",
     "answerEn": "8/3.",
     "marks": [
      {
       "content": "定積分表達",
       "pts": 1
      },
      {
       "content": "原函數 x³/3",
       "pts": 1
      },
      {
       "content": "代入上下限 = 8/3",
       "pts": 1
      }
     ],
     "lossZh": "原函數冪次加錯。",
     "lossEn": "Wrong antiderivative power.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 y=x² 與 y=x 圍成的面積。",
     "stemEn": "Area enclosed by y=x² and y=x.",
     "answerZh": "交點 x²=x → x=0,1；面積=∫₀¹(x-x²)dx = [x²/2-x³/3]₀¹ = 1/2-1/3 = 1/6。",
     "answerEn": "Intersect at 0,1; area = 1/6.",
     "marks": [
      {
       "content": "求交點 x=0,1",
       "pts": 1
      },
      {
       "content": "上減下 x-x²",
       "pts": 1
      },
      {
       "content": "積分 = 1/6",
       "pts": 1
      }
     ],
     "lossZh": "上下曲線搞反或交點求錯。",
     "lossEn": "Wrong upper/lower or intersection.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求 y²=x 與 y=x 圍成的面積。",
     "stemEn": "Area enclosed by y²=x and y=x.",
     "answerZh": "交點：y²=y → y=0,1（x=0,1）；以 y 積分：∫₀¹(y-y²)dy = 1/6。",
     "answerEn": "Intersect at y=0,1; area = 1/6 (integrate w.r.t. y).",
     "marks": [
      {
       "content": "選對積分變量（對 y）",
       "pts": 1
      },
      {
       "content": "被積函數 y-y²",
       "pts": 1
      },
      {
       "content": "1/6",
       "pts": 1
      }
     ],
     "lossZh": "對 x 積分時上下曲線難分。",
     "lossEn": "Wrong integration variable.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-log-equation",
   "titleZh": "對數方程（含驗根）",
   "titleEn": "Solving logarithmic equations",
   "coreTopics": [
    "na-03"
   ],
   "relatedTopics": [
    "na-04"
   ],
   "stem": "解方程 log₂(x+1) = 3，以及 log₂x + log₂(x−2) = 3。",
   "stemEn": "Solve log₂(x+1) = 3, then log₂x + log₂(x−2) = 3.",
   "solutionSkeleton": [
    "把對數式轉成指數式",
    "用運算法則合併對數",
    "解方程後驗根（真數 > 0）"
   ],
   "variation": [
    "換底後再解",
    "底數含未知數",
    "對數方程與指數方程混合"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "解 log₂(x-1) = 3。",
     "stemEn": "Solve log₂(x-1)=3.",
     "answerZh": "x-1 = 2³ = 8 → x = 9。",
     "answerEn": "x-1=8 → x=9.",
     "marks": [
      {
       "content": "指數化 x-1=2³",
       "pts": 1,
       "contentEn": "Exponentiate: x − 1 = 2³"
      },
      {
       "content": "x=9",
       "pts": 1,
       "contentEn": "x = 9"
      }
     ],
     "lossZh": "漏驗定義域（x-1>0）。",
     "lossEn": "Not checking domain (x-1>0).",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "解 log x + log(x-3) = 1。",
     "stemEn": "Solve log x + log(x-3) = 1.",
     "answerZh": "log[x(x-3)]=1 → x(x-3)=10 → x²-3x-10=0 → x=5 或 -2；x>3 → x=5。",
     "answerEn": "log[x(x-3)]=1 → x²-3x-10=0 → x=5 (reject -2).",
     "marks": [
      {
       "content": "合併 log：log[x(x-3)]=1",
       "pts": 1,
       "contentEn": "Combine logs: log[x(x−3)] = 1"
      },
      {
       "content": "x(x-3)=10 → 解二次",
       "pts": 1,
       "contentEn": "x(x−3) = 10 → solve the quadratic"
      },
      {
       "content": "驗根捨 -2，取 x=5",
       "pts": 1,
       "contentEn": "Reject x = −2, take x = 5"
      }
     ],
     "lossZh": "漏驗根（-2 使 log 無意義）。",
     "lossEn": "Not rejecting x=-2 (log undefined).",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "解 log₂x - logₓ2 = 1。",
     "stemEn": "Solve log₂x - logₓ2 = 1.",
     "answerZh": "logₓ2 = 1/log₂x；設 y=log₂x：y - 1/y = 1 → y²-y-1=0 → y=(1+√5)/2；x = 2^((1+√5)/2)。",
     "answerEn": "logₓ2 = 1/log₂x; y - 1/y = 1 → y=(1+√5)/2; x = 2^((1+√5)/2).",
     "marks": [
      {
       "content": "換底 logₓ2 = 1/log₂x",
       "pts": 1,
       "contentEn": "Change base: logₓ2 = 1/log₂x"
      },
      {
       "content": "設 y 解二次方程",
       "pts": 1,
       "contentEn": "Let y, solve the quadratic"
      },
      {
       "content": "還原 x=2^y",
       "pts": 1,
       "contentEn": "Recover x = 2^y"
      }
     ],
     "lossZh": "不會換底公式把兩個不同底統一。",
     "lossEn": "Not unifying bases via change of base.",
     "years": [
      "2023"
     ]
    }
   ],
   "solutionSkeletonEn": [
    "Convert the log form to exponential form",
    "Combine logs using the laws of logarithms",
    "Solve and verify the roots (argument > 0)"
   ],
   "variationEn": [
    "Change base then solve",
    "Unknown base",
    "Mixed log and exponential equations"
   ]
  },
  {
   "id": "mt-exponential-growth",
   "titleZh": "指數增長 / 衰減應用題",
   "titleEn": "Exponential growth / decay modelling",
   "coreTopics": [
    "na-03"
   ],
   "relatedTopics": [
    "na-02"
   ],
   "stem": "細菌每小時數量翻倍，初始 100 個，求 t 小時後的數量；並求達到 10000 個所需時間。",
   "stemEn": "Bacteria double hourly from an initial 100; find the count after t hours and the time to reach 10000.",
   "solutionSkeleton": [
    "建指數模型 N = N₀·kᵗ",
    "代入初始條件定 k",
    "求時間用對數解"
   ],
   "variation": [
    "半衰期（衰減，底數 < 1）",
    "複利 A = P(1+r)ᵗ",
    "給兩組數據反推模型"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "細菌每小時翻倍，初始 100，求 5 小時後數量。",
     "stemEn": "Bacteria double hourly from 100; after 5 h.",
     "answerZh": "N = 100×2⁵ = 3200。",
     "answerEn": "100×2⁵ = 3200.",
     "marks": [
      {
       "content": "指數模型 N=N₀·2ᵗ",
       "pts": 1
      },
      {
       "content": "代入 t=5",
       "pts": 1
      },
      {
       "content": "3200",
       "pts": 1
      }
     ],
     "lossZh": "用 100×5 當線性增長。",
     "lossEn": "Using linear growth.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "某物質衰減，初始 80，半衰期 3 年，求 9 年後剩餘。",
     "stemEn": "Decay from 80, half-life 3 y; after 9 y.",
     "answerZh": "9/3=3 個半衰期 → 80×(1/2)³ = 10。",
     "answerEn": "3 half-lives → 10.",
     "marks": [
      {
       "content": "半衰期個數 9/3=3",
       "pts": 1
      },
      {
       "content": "80×(½)³",
       "pts": 1
      },
      {
       "content": "10",
       "pts": 1
      }
     ],
     "lossZh": "指數寫錯（80×½×3）。",
     "lossEn": "Wrong exponent handling.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "人口年增長率 2%，求多少年翻倍（log2≈0.301）。",
     "stemEn": "Population grows 2%/yr; doubling time.",
     "answerZh": "2 = (1.02)ⁿ → n = log2/log1.02 ≈ 0.301/0.0086 ≈ 35 年。",
     "answerEn": "n = ln2/ln1.02 ≈ 35 yr.",
     "marks": [
      {
       "content": "列 (1.02)ⁿ=2",
       "pts": 1
      },
      {
       "content": "對數化 n=log2/log1.02",
       "pts": 1
      },
      {
       "content": "≈35 年",
       "pts": 1
      }
     ],
     "lossZh": "直接 100/2=50 年（線性）。",
     "lossEn": "Linear 50 yr.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-graph-transform",
   "titleZh": "函數圖像變換描述",
   "titleEn": "Describing graph transformations",
   "coreTopics": [
    "na-08"
   ],
   "relatedTopics": [
    "na-07"
   ],
   "stem": "已知 y = x² 的圖像，描述得到 y = (x−2)² + 3 的變換。",
   "stemEn": "Describe the transformations from y = x² to y = (x−2)² + 3.",
   "solutionSkeleton": [
    "識別平移（h、k）",
    "識別縮放/反射",
    "按先縮放後平移的順序描述"
   ],
   "variation": [
    "反射 + 平移組合",
    "伸縮 + 平移",
    "給出變換寫新方程"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "y=f(x) 變為 y=f(x-3)，圖像如何移動？",
     "stemEn": "y=f(x) → y=f(x-3); shift?",
     "answerZh": "向右平移 3 單位。",
     "answerEn": "Shift right 3 units.",
     "marks": [
      {
       "content": "x-3 → 右移",
       "pts": 1
      },
      {
       "content": "3 單位",
       "pts": 1
      }
     ],
     "lossZh": "以為左移（符號與直覺相反）。",
     "lossEn": "Thinking left (sign opposite intuition).",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "y=x² 先向右移 1 再向上移 2，求新方程。",
     "stemEn": "y=x² shifted right 1, up 2.",
     "answerZh": "y = (x-1)² + 2。",
     "answerEn": "y=(x-1)²+2.",
     "marks": [
      {
       "content": "水平移動 x-1",
       "pts": 1
      },
      {
       "content": "垂直移動 +2",
       "pts": 1
      },
      {
       "content": "y=(x-1)²+2",
       "pts": 1
      }
     ],
     "lossZh": "水平方向符號錯（y=(x+1)²）。",
     "lossEn": "Wrong horizontal sign.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "y=f(x) 變為 y=2f(x) 與 y=f(2x) 的區別？",
     "stemEn": "y=2f(x) vs y=f(2x).",
     "answerZh": "y=2f(x)：垂直拉伸 2 倍（縱坐標×2）；y=f(2x)：水平壓縮至 1/2（橫坐標÷2）。",
     "answerEn": "2f(x): vertical stretch ×2; f(2x): horizontal compression by ½.",
     "marks": [
      {
       "content": "垂直拉伸",
       "pts": 1
      },
      {
       "content": "水平壓縮",
       "pts": 1
      },
      {
       "content": "方向區分",
       "pts": 1
      }
     ],
     "lossZh": "把 f(2x) 當成水平拉伸 2 倍。",
     "lossEn": "Treating f(2x) as horizontal stretch.",
     "years": [
      "2021"
     ]
    }
   ]
  },
  {
   "id": "mt-angle-elevation",
   "titleZh": "仰角俯角測量題",
   "titleEn": "Angles of elevation & depression",
   "coreTopics": [
    "ms-01"
   ],
   "relatedTopics": [
    "ms-04"
   ],
   "stem": "從 A 點仰角 30° 看到樓頂，走近 20 m 後仰角變 45°，求樓高。",
   "stemEn": "From A the elevation to a rooftop is 30°; walking 20 m closer it becomes 45°; find the height.",
   "solutionSkeleton": [
    "畫兩個直角三角形",
    "用 tan 列兩個方程",
    "聯立求解樓高"
   ],
   "variation": [
    "俯角（向下看）",
    "方位角 + 仰角組合",
    "三維立體中的測量"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "從地面看樓頂仰角 30°，距樓底 50 m，求樓高。",
     "stemEn": "Elevation 30°, 50 m from building; height.",
     "answerZh": "h = 50 tan30° = 50×(√3/3) ≈ 28.9 m。",
     "answerEn": "h = 50 tan30° ≈ 28.9 m.",
     "marks": [
      {
       "content": "tan30°=h/50",
       "pts": 1
      },
      {
       "content": "h=50×√3/3",
       "pts": 1
      },
      {
       "content": "≈28.9",
       "pts": 1
      }
     ],
     "lossZh": "用 sin/cos 混用。",
     "lossEn": "Wrong trig ratio.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "從 30 m 高樓頂看地面物體俯角 45°，求水平距離。",
     "stemEn": "From 30 m top, depression 45°; distance.",
     "answerZh": "俯角 45°=仰角 45° → 距離 = 30/tan45° = 30 m。",
     "answerEn": "Distance = 30 m.",
     "marks": [
      {
       "content": "俯角轉仰角",
       "pts": 1
      },
      {
       "content": "tan45°=1",
       "pts": 1
      },
      {
       "content": "d=30",
       "pts": 1
      }
     ],
     "lossZh": "俯角當成與水平面的角但方向處理錯。",
     "lossEn": "Depression angle mishandled.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "從兩點 A、B（相距 40 m）測塔頂仰角 30°、45°，塔在 A、B 之間，求塔高。",
     "stemEn": "From A,B 40 m apart, elevations 30°,45°; height.",
     "answerZh": "設塔距 A 為 x：h=x tan30°=(40-x)tan45° → x/√3 = 40-x → x(1+1/√3)=40 → x≈23.4；h=x/√3≈13.5 m。",
     "answerEn": "x tan30°=(40-x)tan45° → h≈13.5 m.",
     "marks": [
      {
       "content": "設未知數 x",
       "pts": 1
      },
      {
       "content": "兩個方程 h=x tan30°=(40-x)tan45°",
       "pts": 1
      },
      {
       "content": "解出 h",
       "pts": 1
      }
     ],
     "lossZh": "列式時把 40 當全程而設錯。",
     "lossEn": "Wrong setup with 40.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-right-triangle",
   "titleZh": "解直角三角形",
   "titleEn": "Solving right-angled triangles",
   "coreTopics": [
    "ms-04"
   ],
   "relatedTopics": [],
   "stem": "直角邊為 3 和 4，求斜邊與兩個鋭角。",
   "stemEn": "Given legs 3 and 4, find the hypotenuse and both acute angles.",
   "solutionSkeleton": [
    "勾股定理求第三邊",
    "選三角比求角",
    "反三角取值"
   ],
   "variation": [
    "已知斜邊 + 一鋭角求邊",
    "仰角/俯角應用",
    "等腰三角形拆成兩個直角"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "直角三角形兩直角邊 3、4，求斜邊和一個鋭角。",
     "stemEn": "Right triangle legs 3,4; hypotenuse and angle.",
     "answerZh": "斜邊=5；tanθ=3/4 → θ≈36.9°（或 53.1°）。",
     "answerEn": "Hyp=5; θ≈36.9°.",
     "marks": [
      {
       "content": "勾股 3-4-5",
       "pts": 1
      },
      {
       "content": "三角比求角",
       "pts": 1
      },
      {
       "content": "θ≈36.9°",
       "pts": 1
      }
     ],
     "lossZh": "勾股數記錯。",
     "lossEn": "Wrong Pythagorean triple.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "斜坡長 10 m、仰角 25°，求升高高度。",
     "stemEn": "Ramp 10 m at 25°; height.",
     "answerZh": "h = 10 sin25° ≈ 4.23 m。",
     "answerEn": "h = 10 sin25° ≈ 4.23.",
     "marks": [
      {
       "content": "sin25°=h/10",
       "pts": 1
      },
      {
       "content": "h=10 sin25°",
       "pts": 1
      },
      {
       "content": "≈4.23",
       "pts": 1
      }
     ],
     "lossZh": "用 cos（那是水平距離）。",
     "lossEn": "Using cos (horizontal).",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "一架梯子長 8 m 靠牆，底部離牆 3 m，求梯頂高度與梯子與地面夾角。",
     "stemEn": "Ladder 8 m, base 3 m from wall; height and angle.",
     "answerZh": "h=√(64-9)=√55≈7.42 m；cosθ=3/8 → θ≈68°。",
     "answerEn": "h≈7.42 m; θ≈68°.",
     "marks": [
      {
       "content": "勾股求 h",
       "pts": 1
      },
      {
       "content": "cosθ=3/8",
       "pts": 1
      },
      {
       "content": "θ≈68°",
       "pts": 1
      }
     ],
     "lossZh": "角度用錯三角比。",
     "lossEn": "Wrong trig ratio.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-locus",
   "titleZh": "軌跡方程",
   "titleEn": "Equation of a locus",
   "coreTopics": [
    "ms-06"
   ],
   "relatedTopics": [
    "ms-05",
    "ms-07"
   ],
   "stem": "動點 P 到 A(1,2) 與 B(5,2) 的距離相等，求 P 的軌跡。",
   "stemEn": "Point P is equidistant from A(1,2) and B(5,2); find the locus of P.",
   "solutionSkeleton": [
    "設動點 P(x, y)",
    "列「距離相等」方程",
    "化簡得軌跡方程"
   ],
   "variation": [
    "到點 = 到直線（拋物線）",
    "到兩點距離之比為定值",
    "垂直平分線 / 角平分線軌跡"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求與點 (2,0) 距離恆為 3 的動點軌跡方程。",
     "stemEn": "Locus: distance to (2,0) always 3.",
     "answerZh": "(x-2)² + y² = 9（圓）。",
     "answerEn": "(x-2)²+y²=9.",
     "marks": [
      {
       "content": "距離公式",
       "pts": 1
      },
      {
       "content": "平方去根號",
       "pts": 1
      },
      {
       "content": "圓方程",
       "pts": 1
      }
     ],
     "lossZh": "漏平方或圓心錯。",
     "lossEn": "Wrong centre or missing square.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求與直線 x=2 和點 (0,0) 距離相等的動點軌跡。",
     "stemEn": "Locus equidistant from x=2 and (0,0).",
     "answerZh": "√(x²+y²) = |x-2| → x²+y²=(x-2)² → y²=-4x+4 → 拋物線 y²=4-4x。",
     "answerEn": "x²+y²=(x-2)² → y²=4-4x (parabola).",
     "marks": [
      {
       "content": "等距列式",
       "pts": 1
      },
      {
       "content": "兩邊平方",
       "pts": 1
      },
      {
       "content": "化簡為拋物線",
       "pts": 1
      }
     ],
     "lossZh": "平方後展開錯誤。",
     "lossEn": "Expansion error after squaring.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求到 A(1,0)、B(-1,0) 距離之和為 4 的動點軌跡。",
     "stemEn": "Locus: PA+PB=4 with A(1,0),B(-1,0).",
     "answerZh": "橢圓：2a=4 → a=2；c=1 → b²=a²-c²=3；x²/4 + y²/3 = 1。",
     "answerEn": "Ellipse: a=2, c=1, b²=3; x²/4+y²/3=1.",
     "marks": [
      {
       "content": "判為橢圓",
       "pts": 1
      },
      {
       "content": "a=2, c=1",
       "pts": 1
      },
      {
       "content": "b²=3 寫出方程",
       "pts": 1
      }
     ],
     "lossZh": "不知橢圓標準式或 a/c 混淆。",
     "lossEn": "Unknown ellipse standard form.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-coord-geom",
   "titleZh": "座標幾何：距離、中點、垂直平分線",
   "titleEn": "Distance, midpoint & perpendicular bisector",
   "coreTopics": [
    "ms-07"
   ],
   "relatedTopics": [
    "ms-05"
   ],
   "stem": "已知 A(1,3)、B(5,7)，求 AB 中點、長度與垂直平分線方程。",
   "stemEn": "Given A(1,3) and B(5,7), find the midpoint, length and the perpendicular bisector of AB.",
   "solutionSkeleton": [
    "中點公式",
    "距離公式",
    "斜率取負倒數 + 點斜式"
   ],
   "variation": [
    "三點共線判定",
    "平行四邊形第四頂點",
    "三角形面積（鞋帶/拆三角形）"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "A(1,2), B(5,6)，求 AB 距離和中點。",
     "stemEn": "A(1,2), B(5,6); distance and midpoint.",
     "answerZh": "距離 = √((5-1)²+(6-2)²) = √32 = 4√2；中點 (3,4)。",
     "answerEn": "d=4√2; midpoint (3,4).",
     "marks": [
      {
       "content": "距離公式",
       "pts": 1,
       "contentEn": "Distance formula"
      },
      {
       "content": "√32=4√2",
       "pts": 1,
       "contentEn": "√32 = 4√2"
      },
      {
       "content": "中點 (3,4)",
       "pts": 1,
       "contentEn": "Midpoint (3,4)"
      }
     ],
     "lossZh": "距離算成 √(4+16)=√20（應是 16+16）。",
     "lossEn": "Wrong arithmetic in distance.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 A(2,3)、B(6,5) 的垂直平分線方程。",
     "stemEn": "Perpendicular bisector of A(2,3), B(6,5).",
     "answerZh": "AB 中點 (4,4)；斜率 AB = 1/2 → 垂直平分線斜率 -2；y-4 = -2(x-4) → 2x+y=12。",
     "answerEn": "Mid (4,4); slope AB=1/2 → perp slope -2; y-4=-2(x-4).",
     "marks": [
      {
       "content": "中點 (4,4)",
       "pts": 1,
       "contentEn": "Midpoint (4,4)"
      },
      {
       "content": "AB 斜率 → 垂直斜率 -2",
       "pts": 1,
       "contentEn": "Slope of AB → perpendicular slope −2"
      },
      {
       "content": "點斜式 → 2x+y=12",
       "pts": 1,
       "contentEn": "Point-slope form → 2x + y = 12"
      }
     ],
     "lossZh": "垂直斜率取反數不取負倒數。",
     "lossEn": "Taking reciprocal not negative reciprocal.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "圓心 (2,1) 半徑 5，求與直線 3x-4y+8=0 的弦長。",
     "stemEn": "Circle centre (2,1), r=5; chord cut by 3x-4y+8=0.",
     "answerZh": "圓心到直線距離 d = |6-4+8|/5 = 10/5 = 2；半弦長 = √(25-4)=√21；弦長=2√21。",
     "answerEn": "d=2; half-chord=√21; chord=2√21.",
     "marks": [
      {
       "content": "點到直線距離公式",
       "pts": 1,
       "contentEn": "Point-to-line distance formula"
      },
      {
       "content": "d=2",
       "pts": 1,
       "contentEn": "d = 2"
      },
      {
       "content": "弦長=2√(r²-d²)=2√21",
       "pts": 1,
       "contentEn": "Chord = 2√(r²−d²) = 2√21"
      }
     ],
     "lossZh": "用 r-d 當弦長。",
     "lossEn": "Using r-d as chord.",
     "years": [
      "2023"
     ]
    }
   ],
   "solutionSkeletonEn": [
    "Midpoint formula",
    "Distance formula",
    "Negative reciprocal slope + point-slope form"
   ],
   "variationEn": [
    "Checking three collinear points",
    "Fourth vertex of a parallelogram",
    "Area of a triangle (shoelace / splitting)"
   ]
  },
  {
   "id": "mt-prob-comb",
   "titleZh": "排列組合 + 概率（至少/至多）",
   "titleEn": "Combinations with probability",
   "coreTopics": [
    "dp-03"
   ],
   "relatedTopics": [
    "dp-02"
   ],
   "stem": "從 10 人（6 男 4 女）隨機選 3 人，求至少 1 女生的概率。",
   "stemEn": "Choose 3 of 10 people (6M, 4F); find P(at least one female).",
   "solutionSkeleton": [
    "總數用 C(10,3)",
    "「至少」用對立事件或分類",
    "P = 有利 / 總數"
   ],
   "variation": [
    "至多 / 恰好 k 個",
    "with replacement（放回）",
    "接着算條件概率"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "袋有 3 紅 2 藍，抽 2 球，求兩紅概率。",
     "stemEn": "Bag 3R 2B, draw 2; P(both red).",
     "answerZh": "C(3,2)/C(5,2) = 3/10。",
     "answerEn": "3/10.",
     "marks": [
      {
       "content": "分子 C(3,2)",
       "pts": 1,
       "contentEn": "Numerator C(3,2)"
      },
      {
       "content": "分母 C(5,2)",
       "pts": 1,
       "contentEn": "Denominator C(5,2)"
      },
      {
       "content": "3/10",
       "pts": 1,
       "contentEn": "3/10"
      }
     ],
     "lossZh": "用有放回（無放回才用組合）。",
     "lossEn": "Using with-replacement formula.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "擲兩骰，求點數和為 7 的概率。",
     "stemEn": "Two dice; P(sum=7).",
     "answerZh": "有利：(1,6)(2,5)(3,4)(4,3)(5,2)(6,1) 共 6 種；P=6/36=1/6。",
     "answerEn": "6 favourable → 1/6.",
     "marks": [
      {
       "content": "總數 36",
       "pts": 1,
       "contentEn": "Total 36"
      },
      {
       "content": "和 7 有 6 種",
       "pts": 1,
       "contentEn": "Sum 7 has 6 outcomes"
      },
      {
       "content": "P=1/6",
       "pts": 1,
       "contentEn": "P = 1/6"
      }
     ],
     "lossZh": "漏列對稱組合（如 (1,6) 和 (6,1)）。",
     "lossEn": "Missing symmetric pairs.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "5 人站一排，甲乙相鄰的概率。",
     "stemEn": "5 in a row; P(A,B adjacent).",
     "answerZh": "相鄰視為一體：4!×2! = 48；總數 5!=120；P=48/120=2/5。",
     "answerEn": "(4!×2!)/5! = 2/5.",
     "marks": [
      {
       "content": "捆綁法 4!×2!",
       "pts": 1,
       "contentEn": "Bundling method 4!×2!"
      },
      {
       "content": "總數 5!",
       "pts": 1,
       "contentEn": "Total 5!"
      },
      {
       "content": "2/5",
       "pts": 1,
       "contentEn": "2/5"
      }
     ],
     "lossZh": "漏乘 2!（甲乙內部排列）。",
     "lossEn": "Missing ×2! for internal order.",
     "years": [
      "2022"
     ]
    }
   ],
   "solutionSkeletonEn": [
    "Total using C(10,3)",
    "'At least' via complementary event or cases",
    "P = favourable / total"
   ],
   "variationEn": [
    "At most / exactly k items",
    "With replacement",
    "Then conditional probability"
   ]
  },
  {
   "id": "mt-z-score",
   "titleZh": "標準分比較不同科目",
   "titleEn": "Comparing scores via z-score",
   "coreTopics": [
    "dp-07"
   ],
   "relatedTopics": [
    "dp-06"
   ],
   "stem": "數學 75（平均 70，σ=5），英文 82（平均 78，σ=8），哪科相對錶現更好？",
   "stemEn": "Math 75 (mean 70, σ=5) vs English 82 (mean 78, σ=8); which is relatively better?",
   "solutionSkeleton": [
    "分別算 z = (x−μ)/σ",
    "比較 z 值大小",
    "z 大者相對更優"
   ],
   "variation": [
    "正態分佈求百分比",
    "給 z 反推原始分",
    "判斷離羣值"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "某科平均 60、標準差 10，小明 75 分，求 z 值。",
     "stemEn": "Mean 60, SD 10, score 75; z-score.",
     "answerZh": "z = (75-60)/10 = 1.5。",
     "answerEn": "z = 1.5.",
     "marks": [
      {
       "content": "z=(x-μ)/σ",
       "pts": 1
      },
      {
       "content": "(75-60)/10",
       "pts": 1
      },
      {
       "content": "1.5",
       "pts": 1
      }
     ],
     "lossZh": "分子/分母反。",
     "lossEn": "Reversed formula.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "數學平均 70、SD 8；英文平均 65、SD 6。A 數學 82、英文 74，哪科表現較好？",
     "stemEn": "Math μ=70,σ=8; Eng μ=65,σ=6. A: math 82, eng 74; compare.",
     "answerZh": "z_math = (82-70)/8 = 1.5；z_eng = (74-65)/6 = 1.5；相同。",
     "answerEn": "Both z=1.5 → same.",
     "marks": [
      {
       "content": "兩科各算 z",
       "pts": 1
      },
      {
       "content": "z_math=1.5, z_eng=1.5",
       "pts": 1
      },
      {
       "content": "比較",
       "pts": 1
      }
     ],
     "lossZh": "直接比原始分。",
     "lossEn": "Comparing raw scores.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "平均 50、SD 12，求 z=2 對應的分數。",
     "stemEn": "μ=50, σ=12, z=2; raw score.",
     "answerZh": "x = μ + zσ = 50 + 2×12 = 74。",
     "answerEn": "x = 50+24 = 74.",
     "marks": [
      {
       "content": "反解 x=μ+zσ",
       "pts": 1
      },
      {
       "content": "50+24",
       "pts": 1
      },
      {
       "content": "74",
       "pts": 1
      }
     ],
     "lossZh": "用 x=μ-zσ（符號）。",
     "lossEn": "Wrong sign.",
     "years": [
      "2020"
     ]
    }
   ]
  },
  {
   "id": "mt-binomial-term",
   "titleZh": "二項展開求特定項（常數項）",
   "titleEn": "Finding a specific term in binomial expansion",
   "coreTopics": [
    "na-12"
   ],
   "relatedTopics": [
    "dp-02"
   ],
   "stem": "求 (2x − 1/x)⁶ 展開式中的常數項。",
   "stemEn": "Find the constant term in the expansion of (2x − 1/x)⁶.",
   "solutionSkeleton": [
    "寫通項 T_{r+1} = C(6,r)(2x)^(6−r)(−1/x)^r",
    "令 x 的指數 = 0 解 r",
    "代入求係數"
   ],
   "variation": [
    "求特定 x 冪次的係數",
    "二項式係數 vs 項的係數",
    "三項展開拆成兩項"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 (1+x)⁵ 展開式中 x³ 的係數。",
     "stemEn": "Coefficient of x³ in (1+x)⁵.",
     "answerZh": "C(5,3) = 10。",
     "answerEn": "C(5,3)=10.",
     "marks": [
      {
       "content": "通項 C(5,k)xᵏ",
       "pts": 1
      },
      {
       "content": "k=3",
       "pts": 1
      },
      {
       "content": "C(5,3)=10",
       "pts": 1
      }
     ],
     "lossZh": "C 值算錯。",
     "lossEn": "Wrong combination value.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 (2x² + 1/x)⁶ 展開中的常數項。",
     "stemEn": "Constant term in (2x² + 1/x)⁶.",
     "answerZh": "通項 C(6,k)(2x²)ᵏ(1/x)⁶⁻ᵏ = C(6,k)2ᵏx^(2k-(6-k)) = C(6,k)2ᵏx^(3k-6)；常數 → 3k-6=0 → k=2；項=C(6,2)·2²=15×4=60。",
     "answerEn": "k=2 → C(6,2)·2²=60.",
     "marks": [
      {
       "content": "寫通項",
       "pts": 1
      },
      {
       "content": "x 指數 3k-6=0 → k=2",
       "pts": 1
      },
      {
       "content": "C(6,2)·2²=60",
       "pts": 1
      }
     ],
     "lossZh": "指數計算錯誤（符號）。",
     "lossEn": "Wrong exponent sign.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求 (x - 1/x)⁸ 展開中 x⁴ 的係數。",
     "stemEn": "Coefficient of x⁴ in (x-1/x)⁸.",
     "answerZh": "通項 C(8,k)x^k(-1/x)^(8-k) = C(8,k)(-1)^(8-k)x^(2k-8)；2k-8=4 → k=6；係數=C(8,6)(-1)²=28。",
     "answerEn": "k=6 → C(8,6)·(-1)²=28.",
     "marks": [
      {
       "content": "通項含 (-1)^(8-k)",
       "pts": 1
      },
      {
       "content": "2k-8=4 → k=6",
       "pts": 1
      },
      {
       "content": "28",
       "pts": 1
      }
     ],
     "lossZh": "漏符號 (-1) 的冪。",
     "lossEn": "Missing sign factor.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-induction",
   "titleZh": "數學歸納法證明求和公式",
   "titleEn": "Induction proof of a sum formula",
   "coreTopics": [
    "m2-01"
   ],
   "relatedTopics": [
    "na-10"
   ],
   "stem": "用數學歸納法證明 1 + 2 + … + n = n(n+1)/2 對所有正整數 n 成立。",
   "stemEn": "Prove by induction that 1 + 2 + … + n = n(n+1)/2 for all positive integers n.",
   "solutionSkeleton": [
    "基礎步：驗 n=1",
    "假設 P(k) 成立",
    "證 P(k+1)，用歸納假設代換"
   ],
   "variation": [
    "證整除性",
    "證不等式",
    "證數列求和/通項公式"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "用歸納法證明 1+2+…+n = n(n+1)/2。",
     "stemEn": "Prove 1+2+…+n = n(n+1)/2.",
     "answerZh": "n=1：1=1✓；設 n=k 成立，n=k+1：左 = k(k+1)/2 + (k+1) = (k+1)(k+2)/2 = 右。",
     "answerEn": "Base n=1; inductive step works.",
     "marks": [
      {
       "content": "驗 n=1",
       "pts": 1
      },
      {
       "content": "假設 n=k",
       "pts": 1
      },
      {
       "content": "推 n=k+1",
       "pts": 1
      }
     ],
     "lossZh": "只寫假設不寫推導。",
     "lossEn": "Only assumption, no step.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "歸納證明 1+3+5+…+(2n-1) = n²。",
     "stemEn": "Prove sum of first n odd numbers = n².",
     "answerZh": "n=1：1=1✓；k→k+1：k²+(2k+1)=(k+1)²。",
     "answerEn": "Base; k²+2k+1=(k+1)².",
     "marks": [
      {
       "content": "驗證 n=1",
       "pts": 1
      },
      {
       "content": "k²+(2k+1)",
       "pts": 1
      },
      {
       "content": "=(k+1)²",
       "pts": 1
      }
     ],
     "lossZh": "通項寫錯（第 k+1 項是 2k+1）。",
     "lossEn": "Wrong (k+1)-th term.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "歸納證明 1²+2²+…+n² = n(n+1)(2n+1)/6。",
     "stemEn": "Prove sum of squares formula.",
     "answerZh": "n=1：1=1·2·3/6=1✓；k→k+1：k(k+1)(2k+1)/6+(k+1)²=(k+1)[k(2k+1)+6(k+1)]/6=(k+1)(k+2)(2k+3)/6。",
     "answerEn": "Base; algebra shows (k+1)(k+2)(2k+3)/6.",
     "marks": [
      {
       "content": "驗證 n=1",
       "pts": 1
      },
      {
       "content": "代 n=k 加 (k+1)²",
       "pts": 1
      },
      {
       "content": "化簡成 (k+1)(k+2)(2k+3)/6",
       "pts": 1
      }
     ],
     "lossZh": "代數化簡出錯。",
     "lossEn": "Algebra simplification error.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-anyangle",
   "titleZh": "任意角三角化簡（誘導公式 + 恆等式）",
   "titleEn": "Simplifying any-angle trig expressions",
   "coreTopics": [
    "m2-02"
   ],
   "relatedTopics": [
    "m2-03"
   ],
   "stem": "化簡 sin(180°−θ)·cos(90°−θ) + cosθ·sinθ。",
   "stemEn": "Simplify sin(180°−θ)·cos(90°−θ) + cosθ·sinθ.",
   "solutionSkeleton": [
    "誘導公式化簡",
    "ASTC 判符號",
    "套恆等式化簡"
   ],
   "variation": [
    "弧度製表達",
    "含 tan 的化簡",
    "化簡後解三角方程"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 sin(150°) 的值。",
     "stemEn": "sin 150°.",
     "answerZh": "sin(180°-30°)=sin30°=1/2。",
     "answerEn": "1/2.",
     "marks": [
      {
       "content": "化為 sin(180°-30°)",
       "pts": 1
      },
      {
       "content": "sin30°",
       "pts": 1
      },
      {
       "content": "1/2",
       "pts": 1
      }
     ],
     "lossZh": "符號錯（sin 在第二象限為正）。",
     "lossEn": "Wrong sign (sin positive in QII).",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "化簡 sin(π/2 - θ)。",
     "stemEn": "Simplify sin(π/2 - θ).",
     "answerZh": "sin(π/2-θ) = cos θ。",
     "answerEn": "cos θ.",
     "marks": [
      {
       "content": "餘角公式",
       "pts": 1
      },
      {
       "content": "=cosθ",
       "pts": 1
      }
     ],
     "lossZh": "寫成 -cosθ。",
     "lossEn": "Writing -cosθ.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "若 sinθ=3/5 且 θ 在第二象限，求 cosθ 與 tanθ。",
     "stemEn": "sinθ=3/5, θ in QII; cosθ, tanθ.",
     "answerZh": "cosθ = -√(1-9/25) = -4/5；tanθ = (3/5)/(-4/5) = -3/4。",
     "answerEn": "cosθ=-4/5; tanθ=-3/4.",
     "marks": [
      {
       "content": "cos²θ=1-sin²θ",
       "pts": 1
      },
      {
       "content": "第二象限 cos 為負",
       "pts": 1
      },
      {
       "content": "tan=-3/4",
       "pts": 1
      }
     ],
     "lossZh": "漏負號（第二象限 cos 負）。",
     "lossEn": "Missing negative in QII.",
     "years": [
      "2021"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-vector-proof",
   "titleZh": "向量幾何證明",
   "titleEn": "Geometric proof with vectors",
   "coreTopics": [
    "m2-04"
   ],
   "relatedTopics": [],
   "stem": "用向量證明：平行四邊形對角線互相平分。",
   "stemEn": "Prove with vectors that the diagonals of a parallelogram bisect each other.",
   "solutionSkeleton": [
    "設位置向量",
    "用分點公式表示兩對角線中點",
    "證明兩個中點相同"
   ],
   "variation": [
    "證明三點共線",
    "點積證垂直",
    "定比分點問題"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "向量 a=(3,-4)，求 |a| 和單位向量。",
     "stemEn": "a=(3,-4); |a| and unit vector.",
     "answerZh": "|a|=5；單位向量 = (3/5, -4/5)。",
     "answerEn": "|a|=5; unit = (3/5,-4/5).",
     "marks": [
      {
       "content": "模長公式",
       "pts": 1
      },
      {
       "content": "√(9+16)=5",
       "pts": 1
      },
      {
       "content": "單位向量",
       "pts": 1
      }
     ],
     "lossZh": "單位向量忘除以模。",
     "lossEn": "Not dividing by magnitude.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "a=(2,1), b=(-1,2)，求 a·b 並判斷是否垂直。",
     "stemEn": "a=(2,1), b=(-1,2); dot product, perpendicular?",
     "answerZh": "a·b = 2×(-1)+1×2 = 0 → 垂直。",
     "answerEn": "a·b=0 → perpendicular.",
     "marks": [
      {
       "content": "點積公式",
       "pts": 1
      },
      {
       "content": "=0",
       "pts": 1
      },
      {
       "content": "垂直",
       "pts": 1
      }
     ],
     "lossZh": "點積算錯或判斷反。",
     "lossEn": "Wrong dot or verdict.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "用向量證明：三角形中點連線平行且等於第三邊一半。",
     "stemEn": "Vector proof: mid-segment parallel & half.",
     "answerZh": "設 A、B、C，M 為 AB 中點、N 為 AC 中點：MN = (B-A)/2 + ... 得 MN = BC/2 → 平行且一半。",
     "answerEn": "MN = ½BC → parallel and half.",
     "marks": [
      {
       "content": "中點向量表示",
       "pts": 1
      },
      {
       "content": "MN = ½(B+C)-½(A+A)... 化簡",
       "pts": 1
      },
      {
       "content": "得 MN=½BC",
       "pts": 1
      }
     ],
     "lossZh": "中點坐標向量寫錯。",
     "lossEn": "Wrong midpoint vector.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-seq-limit",
   "titleZh": "數列極限（有理式同除最高次）",
   "titleEn": "Limit of a rational sequence",
   "coreTopics": [
    "m2-06"
   ],
   "relatedTopics": [
    "na-10"
   ],
   "stem": "求 lim(n→∞) (2n+1)/(3n−2)。",
   "stemEn": "Find lim(n→∞) (2n+1)/(3n−2).",
   "solutionSkeleton": [
    "分子分母同除最高次 n",
    "用 lim 1/n = 0",
    "得極限值"
   ],
   "variation": [
    "等比 rⁿ（|r|<1）",
    "含根號的極限",
    "夾逼定理"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 lim(n→∞) (3n+1)/(2n-1)。",
     "stemEn": "Limit as n→∞ of (3n+1)/(2n-1).",
     "answerZh": "同除 n：(3+1/n)/(2-1/n) → 3/2。",
     "answerEn": "3/2.",
     "marks": [
      {
       "content": "同除最高次 n",
       "pts": 1
      },
      {
       "content": "1/n→0",
       "pts": 1
      },
      {
       "content": "3/2",
       "pts": 1
      }
     ],
     "lossZh": "不處理直接代入∞。",
     "lossEn": "Substituting ∞ directly.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 lim(n→∞) (n²+2)/(3n²-5)。",
     "stemEn": "Limit of (n²+2)/(3n²-5).",
     "answerZh": "同除 n²：(1+2/n²)/(3-5/n²) → 1/3。",
     "answerEn": "1/3.",
     "marks": [
      {
       "content": "同除 n²",
       "pts": 1
      },
      {
       "content": "化簡",
       "pts": 1
      },
      {
       "content": "1/3",
       "pts": 1
      }
     ],
     "lossZh": "最高次看錯。",
     "lossEn": "Wrong highest power.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求 lim(n→∞) [√(n²+n) - n]。",
     "stemEn": "Limit of √(n²+n) - n.",
     "answerZh": "有理化：n/[√(n²+n)+n] = 1/[√(1+1/n)+1] → 1/2。",
     "answerEn": "Rationalise → 1/2.",
     "marks": [
      {
       "content": "分子有理化",
       "pts": 1
      },
      {
       "content": "同除 n",
       "pts": 1
      },
      {
       "content": "1/2",
       "pts": 1
      }
     ],
     "lossZh": "直接當 ∞-∞ 為 0。",
     "lossEn": "Treating ∞-∞ as 0.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-func-cont",
   "titleZh": "函數極限與連續性（分段函數）",
   "titleEn": "Limit & continuity of a piecewise function",
   "coreTopics": [
    "m2-07"
   ],
   "relatedTopics": [],
   "stem": "求 a 使 f(x) = (x²−4)/(x−2)（x≠2）、f(2)=a 在 x=2 處連續。",
   "stemEn": "Find a such that f(x) = (x²−4)/(x−2) for x≠2 and f(2)=a is continuous at x=2.",
   "solutionSkeleton": [
    "求 lim(x→2) f(x)",
    "因式分解消去零因子",
    "令 a = 極限值"
   ],
   "variation": [
    "左右極限不等（跳躍間斷）",
    "分段函數連續",
    "可去間斷點"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "f(x)=(x²-1)/(x-1)，求 lim(x→1) f(x)。",
     "stemEn": "lim_{x→1} (x²-1)/(x-1).",
     "answerZh": "因式分解：(x-1)(x+1)/(x-1) = x+1 → 2。",
     "answerEn": "2.",
     "marks": [
      {
       "content": "因式分解",
       "pts": 1
      },
      {
       "content": "約分",
       "pts": 1
      },
      {
       "content": "代 x=1 → 2",
       "pts": 1
      }
     ],
     "lossZh": "代 x=1 得 0/0 就説不存在。",
     "lossEn": "Saying DNE at 0/0.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "分段函數 f(x)=x+1 (x<2), =k (x=2), =3x-1 (x>2)，若在 x=2 連續，求 k。",
     "stemEn": "Piecewise continuous at 2; find k.",
     "answerZh": "左極限=3，右極限=5 → 極限不存在，無法連續（k 無解）。",
     "answerEn": "Left=3, right=5 → no limit → not continuous.",
     "marks": [
      {
       "content": "左極限 f(2⁻)",
       "pts": 1
      },
      {
       "content": "右極限 f(2⁺)",
       "pts": 1
      },
      {
       "content": "不相等 → 無解",
       "pts": 1
      }
     ],
     "lossZh": "直接令 k=某值不看左右極限。",
     "lossEn": "Not checking both one-sided limits.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "討論 f(x)=|x|/x 在 x=0 的連續性。",
     "stemEn": "Continuity of |x|/x at 0.",
     "answerZh": "x→0⁺：1；x→0⁻：-1；左右極限不等 → 不連續（跳躍間斷）。",
     "answerEn": "Left -1, right +1 → jump discontinuity.",
     "marks": [
      {
       "content": "右極限 1",
       "pts": 1
      },
      {
       "content": "左極限 -1",
       "pts": 1
      },
      {
       "content": "不連續",
       "pts": 1
      }
     ],
     "lossZh": "以為有定義就連續。",
     "lossEn": "Assuming continuity from definition.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-rational-number",
   "titleZh": "循環小數化分數 + 分母有理化",
   "titleEn": "Recurring decimal to fraction & rationalising",
   "coreTopics": [
    "na-01"
   ],
   "relatedTopics": [],
   "stem": "把 0.363636… 化成分數；並化簡 1/(√2+1)。",
   "stemEn": "Express 0.363636… as a fraction; then simplify 1/(√2+1).",
   "solutionSkeleton": [
    "純循環小數化分數 = 循環節/99…",
    "分母有理化 = 乘共軛",
    "化簡最簡分數"
   ],
   "variation": [
    "純循環 / 混循環小數",
    "比較有理數大小",
    "無理數判別"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 2,
     "q": "MC",
     "weight": "mid",
     "source": "estimated"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "將 0.6̇（循環小數）化為分數。",
     "stemEn": "Convert 0.666… to a fraction.",
     "answerZh": "設 x=0.666…，10x=6.666… → 9x=6 → x=2/3。",
     "answerEn": "x=2/3.",
     "marks": [
      {
       "content": "設 x 並乘 10",
       "pts": 1
      },
      {
       "content": "相減得 9x=6",
       "pts": 1
      },
      {
       "content": "x=2/3",
       "pts": 1
      }
     ],
     "lossZh": "乘錯倍數（一位循環乘 10）。",
     "lossEn": "Wrong multiplier.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "化簡 1/√2（分母有理化）。",
     "stemEn": "Rationalise 1/√2.",
     "answerZh": "1/√2 × √2/√2 = √2/2。",
     "answerEn": "√2/2.",
     "marks": [
      {
       "content": "分子分母同乘 √2",
       "pts": 1
      },
      {
       "content": "√2/2",
       "pts": 1
      }
     ],
     "lossZh": "只把分母變 √2 不處理分子。",
     "lossEn": "Not rationalising fully.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "將 0.123123…（3 位循環）化為分數。",
     "stemEn": "Convert 0.123123… to fraction.",
     "answerZh": "設 x=0.123123…，1000x=123.123… → 999x=123 → x=123/999=41/333。",
     "answerEn": "x=41/333.",
     "marks": [
      {
       "content": "乘 1000",
       "pts": 1
      },
      {
       "content": "999x=123",
       "pts": 1
      },
      {
       "content": "41/333",
       "pts": 1
      }
     ],
     "lossZh": "乘錯位數。",
     "lossEn": "Wrong digit shift.",
     "years": [
      "2021"
     ]
    }
   ]
  },
  {
   "id": "mt-percentage",
   "titleZh": "盈利、折扣與複利",
   "titleEn": "Profit, discount & compound interest",
   "coreTopics": [
    "na-02"
   ],
   "relatedTopics": [
    "na-03"
   ],
   "stem": "成本 200 元以 250 元售出，求盈利百分率；本金 1000、年利率 5% 複利 3 年，求本利和。",
   "stemEn": "Goods cost 200 and sell for 250; find the profit %. Then find the amount after 3 years at 5% p.a. compounded on a principal of 1000.",
   "solutionSkeleton": [
    "盈利% = (售價−成本)/成本",
    "複利 A = P(1+r)ⁿ",
    "代入求值"
   ],
   "variation": [
    "折扣與標價",
    "連續增減變化",
    "折舊（用 1−r）"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "售價 500，打八折，求折後價。",
     "stemEn": "500 with 20% off.",
     "answerZh": "500×0.8 = 400。",
     "answerEn": "400.",
     "marks": [
      {
       "content": "折扣率 0.8",
       "pts": 1
      },
      {
       "content": "400",
       "pts": 1
      }
     ],
     "lossZh": "八折算成 0.2。",
     "lossEn": "20% off confused with 0.2.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "成本 200，加價 30% 再打九折出售，求利潤率。",
     "stemEn": "Cost 200, +30%, then 10% off; profit %?",
     "answerZh": "售價 = 200×1.3×0.9 = 234；利潤率 = 34/200 = 17%。",
     "answerEn": "Selling 234; profit 17%.",
     "marks": [
      {
       "content": "先加價 200×1.3",
       "pts": 1
      },
      {
       "content": "再打折 ×0.9",
       "pts": 1
      },
      {
       "content": "利潤率 17%",
       "pts": 1
      }
     ],
     "lossZh": "加價後打折順序或利潤分母錯。",
     "lossEn": "Wrong order or denominator.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "複利：本金 10000，年利率 5%，每年複利，求 3 年後本利和。",
     "stemEn": "Compound interest 10000, 5%, 3 yr.",
     "answerZh": "A = 10000(1.05)³ = 11576.25。",
     "answerEn": "A = 10000×1.05³ ≈ 11576.25.",
     "marks": [
      {
       "content": "複利公式 A=P(1+r)ⁿ",
       "pts": 1
      },
      {
       "content": "(1.05)³",
       "pts": 1
      },
      {
       "content": "11576.25",
       "pts": 1
      }
     ],
     "lossZh": "用單利 10000×1.15。",
     "lossEn": "Simple interest instead.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-indices",
   "titleZh": "指數式化簡與指數方程",
   "titleEn": "Simplifying indices & index equations",
   "coreTopics": [
    "na-04"
   ],
   "relatedTopics": [
    "na-03"
   ],
   "stem": "化簡 (x³·x⁻²)² / x；解方程 2ˣ = 32。",
   "stemEn": "Simplify (x³·x⁻²)² / x; solve 2ˣ = 32.",
   "solutionSkeleton": [
    "指數法則逐條化簡",
    "化同底比較指數",
    "解指數方程"
   ],
   "variation": [
    "負指數 / 分數指數",
    "科學記數法",
    "指數方程（化同底）"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "化簡 2³×2⁴。",
     "stemEn": "Simplify 2³×2⁴.",
     "answerZh": "2⁷ = 128。",
     "answerEn": "2⁷=128.",
     "marks": [
      {
       "content": "同底相加指數",
       "pts": 1
      },
      {
       "content": "2⁷=128",
       "pts": 1
      }
     ],
     "lossZh": "相乘底數變 4。",
     "lossEn": "Multiplying bases.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "化簡 (a²b³)/(a⁵b)。",
     "stemEn": "Simplify a²b³/(a⁵b).",
     "answerZh": "a^(2-5)b^(3-1) = a⁻³b² = b²/a³。",
     "answerEn": "a⁻³b² = b²/a³.",
     "marks": [
      {
       "content": "指數相減",
       "pts": 1
      },
      {
       "content": "負指數",
       "pts": 1
      },
      {
       "content": "b²/a³",
       "pts": 1
      }
     ],
     "lossZh": "指數相減次序錯。",
     "lossEn": "Wrong exponent subtraction.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "解 4ˣ = 2^(x+1)。",
     "stemEn": "Solve 4ˣ = 2^(x+1).",
     "answerZh": "4ˣ=(2²)ˣ=2²ˣ → 2x=x+1 → x=1。",
     "answerEn": "2x=x+1 → x=1.",
     "marks": [
      {
       "content": "化成同底 2",
       "pts": 1
      },
      {
       "content": "2x=x+1",
       "pts": 1
      },
      {
       "content": "x=1",
       "pts": 1
      }
     ],
     "lossZh": "不會統一底數。",
     "lossEn": "Not unifying bases.",
     "years": [
      "2021"
     ]
    }
   ]
  },
  {
   "id": "mt-polynomial",
   "titleZh": "餘式定理與因式定理",
   "titleEn": "Remainder & factor theorem",
   "coreTopics": [
    "na-05"
   ],
   "relatedTopics": [
    "na-06"
   ],
   "stem": "f(x) = x³ − 2x² + ax − 3 除以 x−1 餘 −2，求 a；證明 x−1 是 x³−1 的因式。",
   "stemEn": "When f(x) = x³ − 2x² + ax − 3 is divided by x−1 the remainder is −2; find a. Then prove x−1 is a factor of x³−1.",
   "solutionSkeleton": [
    "餘式定理 f(1) = −2",
    "因式定理 f(1) = 0",
    "代入求 a、驗證因式"
   ],
   "variation": [
    "除以 (ax+b) 用 f(−b/a)",
    "求餘式",
    "因式分解（試根法）"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "f(x)=x³-2x+1，求 f(2)。",
     "stemEn": "f(x)=x³-2x+1; f(2).",
     "answerZh": "f(2)=8-4+1=5。",
     "answerEn": "5.",
     "marks": [
      {
       "content": "代入 x=2",
       "pts": 1
      },
      {
       "content": "5",
       "pts": 1
      }
     ],
     "lossZh": "代錯或計算錯。",
     "lossEn": "Wrong substitution.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "餘式定理：f(x)=x³+ax+1 除以 x-2 餘 9，求 a。",
     "stemEn": "f(x)=x³+ax+1 divided by x-2 leaves 9; find a.",
     "answerZh": "f(2)=8+2a+1=9 → 2a=0 → a=0。",
     "answerEn": "f(2)=9 → a=0.",
     "marks": [
      {
       "content": "餘式定理 f(2)=9",
       "pts": 1
      },
      {
       "content": "8+2a+1=9",
       "pts": 1
      },
      {
       "content": "a=0",
       "pts": 1
      }
     ],
     "lossZh": "用長除法或餘式定理混。",
     "lossEn": "Using long division unnecessarily.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "因式定理：x³+ax²-4x-12 有因式 x-3，求 a 並因式分解。",
     "stemEn": "x³+ax²-4x-12 has factor x-3; find a, factorise.",
     "answerZh": "f(3)=27+9a-12-12=0 → 9a=-3 → a=-1/3；分解：(x-3)(x²+2x+4)/3... 實際：代 a=-1/3 → 因式 (x-3)(3x²+2x+4)/3。",
     "answerEn": "f(3)=0 → a=-1/3.",
     "marks": [
      {
       "content": "因式定理 f(3)=0",
       "pts": 1
      },
      {
       "content": "解 a",
       "pts": 1
      },
      {
       "content": "分解",
       "pts": 1
      }
     ],
     "lossZh": "把因式定理寫成 f(3)=餘數。",
     "lossEn": "Using f(3) as remainder not factor.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-quadratic-function",
   "titleZh": "二次函數頂點與最值",
   "titleEn": "Vertex & optimum of a quadratic",
   "coreTopics": [
    "na-07"
   ],
   "relatedTopics": [
    "na-06"
   ],
   "stem": "求 y = 2x² − 4x + 1 的頂點座標與最小值。",
   "stemEn": "Find the vertex and the minimum value of y = 2x² − 4x + 1.",
   "solutionSkeleton": [
    "配方法化 y = a(x−h)²+k",
    "頂點 (h,k)",
    "由開口方向判最值"
   ],
   "variation": [
    "求頂點 / 對稱軸",
    "最值應用題（面積、利潤）",
    "與判別式結合判交點"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "將 y = x² - 6x + 5 配方並求頂點與最小值。",
     "stemEn": "Complete square of y=x²-6x+5; vertex and min.",
     "answerZh": "y = (x-3)² - 4；頂點 (3,-4)；最小值 -4。",
     "answerEn": "y=(x-3)²-4; vertex (3,-4); min -4.",
     "marks": [
      {
       "content": "配方成 (x-3)²-4",
       "pts": 1,
       "contentEn": "Complete square to (x−3)²−4"
      },
      {
       "content": "頂點 (3,-4)",
       "pts": 1,
       "contentEn": "Vertex (3,−4)"
      },
      {
       "content": "最小值 -4",
       "pts": 1,
       "contentEn": "Minimum −4"
      }
     ],
     "lossZh": "配方常數項算錯（+5 變成 -9+5=-4）。",
     "lossEn": "Wrong constant in completing square.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "二次函數圖像過 (1,0)、(3,0) 且頂點縱坐標為 -4，求解析式。",
     "stemEn": "Quadratic through (1,0),(3,0), vertex y=-4. Find equation.",
     "answerZh": "設 y=a(x-1)(x-3)；頂點 x=2，y=-a=-4 → a=4；y=4(x-1)(x-3)=4x²-16x+12。",
     "answerEn": "y=a(x-1)(x-3); vertex (2,-4) → a=4; y=4x²-16x+12.",
     "marks": [
      {
       "content": "設交點式 y=a(x-1)(x-3)",
       "pts": 1,
       "contentEn": "Set y = a(x−1)(x−3)"
      },
      {
       "content": "對稱軸 x=2，頂點 (2,-4)",
       "pts": 1,
       "contentEn": "Axis x = 2, vertex (2,−4)"
      },
      {
       "content": "a=4，展開",
       "pts": 1,
       "contentEn": "a = 4, expand"
      }
     ],
     "lossZh": "以為頂點橫坐標是 (1+3)/2 以外的值。",
     "lossEn": "Wrong vertex x-coordinate.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "若 x² + kx + 4 ≥ 0 對所有實數 x 成立，求 k 的範圍。",
     "stemEn": "x²+kx+4≥0 for all real x; find range of k.",
     "answerZh": "開口向上 → 需 Δ≤0：k²-16≤0 → -4≤k≤4。",
     "answerEn": "Δ=k²-16≤0 → -4≤k≤4.",
     "marks": [
      {
       "content": "開口向上且恆 ≥0 → Δ≤0",
       "pts": 1,
       "contentEn": "Opens up and always ≥ 0 → Δ ≤ 0"
      },
      {
       "content": "k²-16≤0",
       "pts": 1,
       "contentEn": "k² − 16 ≤ 0"
      },
      {
       "content": "-4≤k≤4",
       "pts": 1,
       "contentEn": "−4 ≤ k ≤ 4"
      }
     ],
     "lossZh": "把「恆≥0」誤當 Δ≥0（開口向上要 Δ≤0）。",
     "lossEn": "Using Δ≥0 for always-positive (needs Δ≤0).",
     "years": [
      "2020"
     ]
    }
   ],
   "solutionSkeletonEn": [
    "Complete the square: y = a(x−h)² + k",
    "Vertex (h, k)",
    "Determine the extremum from the opening direction"
   ],
   "variationEn": [
    "Find vertex / axis of symmetry",
    "Optimisation problems (area, profit)",
    "Combine with the discriminant for intersections"
   ]
  },
  {
   "id": "mt-variation",
   "titleZh": "變分（正變、反變、部分變）",
   "titleEn": "Direct, inverse & partial variation",
   "coreTopics": [
    "na-09"
   ],
   "relatedTopics": [],
   "stem": "y 與 x 成正比，x=3 時 y=6，求 y 與 x 的關係式；若 y 部分正變 x、部分反變 x，用兩組數據求常數。",
   "stemEn": "y varies directly as x and y=6 when x=3; find the relation. For partial variation (y = k₁x + k₂/x), find the constants from two pairs.",
   "solutionSkeleton": [
    "設 y = kx 求 k",
    "部分變設 y = k₁x + k₂/x",
    "兩組條件聯立求解"
   ],
   "variation": [
    "正變 / 反變",
    "聯變 y = kx/z",
    "部分變需兩組條件"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "y 隨 x 正變，x=2 時 y=6，求 x=5 時 y。",
     "stemEn": "y ∝ x; y=6 at x=2; y at x=5.",
     "answerZh": "k=6/2=3 → y=3×5=15。",
     "answerEn": "15.",
     "marks": [
      {
       "content": "y=kx",
       "pts": 1
      },
      {
       "content": "k=3",
       "pts": 1
      },
      {
       "content": "y=15",
       "pts": 1
      }
     ],
     "lossZh": "比例常數 k 求錯。",
     "lossEn": "Wrong k.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "y 隨 x 反變，x=3 時 y=4，求 x=6 時 y。",
     "stemEn": "y ∝ 1/x; y=4 at x=3; y at x=6.",
     "answerZh": "xy=12 → y=12/6=2。",
     "answerEn": "2.",
     "marks": [
      {
       "content": "xy=k",
       "pts": 1
      },
      {
       "content": "k=12",
       "pts": 1
      },
      {
       "content": "y=2",
       "pts": 1
      }
     ],
     "lossZh": "用正變算。",
     "lossEn": "Using direct variation.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "y 部分隨 x 正變、部分隨 x² 正變；x=1 時 y=4，x=2 時 y=12，求 x=3 時 y。",
     "stemEn": "y=ax+bx²; x=1→4, x=2→12; y at x=3.",
     "answerZh": "a+b=4, 2a+4b=12 → 解 a=2, b=2；y=2x+2x²；x=3 → 6+18=24。",
     "answerEn": "a=2,b=2; y=24.",
     "marks": [
      {
       "content": "設 y=ax+bx²",
       "pts": 1
      },
      {
       "content": "代入兩組解方程",
       "pts": 1
      },
      {
       "content": "a=2,b=2 → y=24",
       "pts": 1
      }
     ],
     "lossZh": "設成單一正變。",
     "lossEn": "Single variation assumption.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-inequality",
   "titleZh": "二次不等式與線性規劃",
   "titleEn": "Quadratic inequalities & linear programming",
   "coreTopics": [
    "na-11"
   ],
   "relatedTopics": [
    "na-06"
   ],
   "stem": "解不等式 x² − 5x + 6 ≤ 0；在約束條件下求 z = 2x + y 的最大值。",
   "stemEn": "Solve x² − 5x + 6 ≤ 0; then maximise z = 2x + y subject to given constraints.",
   "solutionSkeleton": [
    "因式分解找根",
    "畫數軸 / 圖像判區間",
    "線性規劃畫可行域、平移目標線"
   ],
   "variation": [
    "二次不等式（開口 + 根）",
    "線性規劃最值",
    "應用題建不等式組"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "解 x²-5x+6>0。",
     "stemEn": "Solve x²-5x+6>0.",
     "answerZh": "(x-2)(x-3)>0 → x<2 或 x>3。",
     "answerEn": "x<2 or x>3.",
     "marks": [
      {
       "content": "因式分解",
       "pts": 1
      },
      {
       "content": "根 2,3",
       "pts": 1
      },
      {
       "content": "取兩邊",
       "pts": 1
      }
     ],
     "lossZh": "取中間（>0 取兩邊）。",
     "lossEn": "Taking middle for >0.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "解 -x²+4x-3≥0。",
     "stemEn": "Solve -x²+4x-3≥0.",
     "answerZh": "乘 -1：x²-4x+3≤0 → (x-1)(x-3)≤0 → 1≤x≤3。",
     "answerEn": "1≤x≤3.",
     "marks": [
      {
       "content": "乘 -1 變號",
       "pts": 1
      },
      {
       "content": "因式分解",
       "pts": 1
      },
      {
       "content": "1≤x≤3",
       "pts": 1
      }
     ],
     "lossZh": "乘負數忘變號。",
     "lossEn": "Not flipping sign on ×(-1).",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "線性規劃：x≥0, y≥0, x+y≤6, 2x+y≤8，求 P=x+3y 的最大值。",
     "stemEn": "Linear programming; maximise x+3y.",
     "answerZh": "頂點 (0,0)→0, (4,0)→4, (0,6)→18, (2,4)→14；最大 18。",
     "answerEn": "Vertices: max at (0,6) → 18.",
     "marks": [
      {
       "content": "畫可行域",
       "pts": 1
      },
      {
       "content": "找頂點",
       "pts": 1
      },
      {
       "content": "代 P 求最大 18",
       "pts": 1
      }
     ],
     "lossZh": "漏頂點或不代回驗證。",
     "lossEn": "Missing vertex check.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-sine-cosine",
   "titleZh": "正弦 / 餘弦定理解三角形",
   "titleEn": "Sine & cosine rule",
   "coreTopics": [
    "ms-02"
   ],
   "relatedTopics": [
    "ms-04"
   ],
   "stem": "△ABC 中 a=7、b=8、∠C=60°，求 c 與三角形面積。",
   "stemEn": "In △ABC, a=7, b=8 and ∠C=60°; find c and the area.",
   "solutionSkeleton": [
    "餘弦定理求第三邊",
    "面積 = ½ ab sinC",
    "（求角用正弦定理）"
   ],
   "variation": [
    "正弦定理求角/邊",
    "已知兩邊夾一角",
    "鈍角時 cos 為負屬正常"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "△ABC 中 ∠A=30°, ∠B=45°, a=10（a 對 A），求 b。",
     "stemEn": "In △ABC, ∠A=30°, ∠B=45°, a=10. Find b.",
     "answerZh": "正弦定理：b/sin45° = 10/sin30° → b = 10×(√2/2)/(1/2) = 10√2。",
     "answerEn": "b/sin45°=10/sin30° → b=10√2.",
     "marks": [
      {
       "content": "寫出正弦定理",
       "pts": 1,
       "contentEn": "Write the sine rule"
      },
      {
       "content": "代入 a/sinA = b/sinB",
       "pts": 1,
       "contentEn": "Substitute a/sinA = b/sinB"
      },
      {
       "content": "b=10√2",
       "pts": 1,
       "contentEn": "b = 10√2"
      }
     ],
     "lossZh": "對應邊角配錯。",
     "lossEn": "Wrong side-angle correspondence.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "△ABC 中 a=7, b=8, ∠C=60°，求 c。",
     "stemEn": "In △ABC, a=7, b=8, ∠C=60°. Find c.",
     "answerZh": "餘弦定理：c² = 7²+8²-2×7×8×cos60° = 49+64-56 = 57 → c=√57。",
     "answerEn": "c²=49+64-56=57 → c=√57.",
     "marks": [
      {
       "content": "餘弦定理 c²=a²+b²-2ab cosC",
       "pts": 1,
       "contentEn": "Cosine rule c² = a² + b² − 2ab cosC"
      },
      {
       "content": "cos60°=½",
       "pts": 1,
       "contentEn": "cos 60° = ½"
      },
      {
       "content": "c=√57",
       "pts": 1,
       "contentEn": "c = √57"
      }
     ],
     "lossZh": "中間項符號或 cos60° 值錯。",
     "lossEn": "Wrong sign or cos60° value.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "△ABC 中 a=6, b=8, ∠C=30°，求面積。",
     "stemEn": "In △ABC, a=6, b=8, ∠C=30°. Find area.",
     "answerZh": "面積 = ½ab sinC = ½×6×8×½ = 12。",
     "answerEn": "Area = ½ab sinC = 12.",
     "marks": [
      {
       "content": "面積公式 S=½ab sinC",
       "pts": 1,
       "contentEn": "Area formula S = ½ab sinC"
      },
      {
       "content": "sin30°=½",
       "pts": 1,
       "contentEn": "sin 30° = ½"
      },
      {
       "content": "S=12",
       "pts": 1,
       "contentEn": "S = 12"
      }
     ],
     "lossZh": "用 ½×底×高但沒對應角。",
     "lossEn": "Wrong formula application.",
     "years": [
      "2022"
     ]
    }
   ],
   "solutionSkeletonEn": [
    "Use the cosine rule to find the third side",
    "Area = ½ ab sinC",
    "(Use the sine rule to find angles)"
   ],
   "variationEn": [
    "Sine rule to find angles/sides",
    "Two sides and the included angle given",
    "cos being negative for obtuse angles is normal"
   ]
  },
  {
   "id": "mt-straight-line",
   "titleZh": "直線方程與平行/垂直",
   "titleEn": "Line equations & parallel/perpendicular",
   "coreTopics": [
    "ms-05"
   ],
   "relatedTopics": [
    "ms-07"
   ],
   "stem": "求過點 (1,2) 且垂直於直線 y = 2x + 1 的直線方程。",
   "stemEn": "Find the line through (1,2) perpendicular to y = 2x + 1.",
   "solutionSkeleton": [
    "斜率 m₁m₂ = −1",
    "點斜式 y−y₁ = m(x−x₁)",
    "化簡為標準式"
   ],
   "variation": [
    "平行（斜率相等）",
    "垂直（斜率積 −1）",
    "求交點 / 截距"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求過 (1,2)、(3,6) 的直線斜率與方程。",
     "stemEn": "Line through (1,2),(3,6); slope and equation.",
     "answerZh": "斜率 = (6-2)/(3-1) = 2；y-2=2(x-1) → y=2x。",
     "answerEn": "y=2x.",
     "marks": [
      {
       "content": "斜率公式",
       "pts": 1
      },
      {
       "content": "點斜式",
       "pts": 1
      },
      {
       "content": "y=2x",
       "pts": 1
      }
     ],
     "lossZh": "斜率次序錯。",
     "lossEn": "Wrong slope order.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求過 (2,1) 且垂直於直線 y=3x-1 的直線方程。",
     "stemEn": "Through (2,1), ⊥ y=3x-1.",
     "answerZh": "垂直斜率 = -1/3；y-1=(-1/3)(x-2) → x+3y=5。",
     "answerEn": "x+3y=5.",
     "marks": [
      {
       "content": "垂直斜率負倒數",
       "pts": 1
      },
      {
       "content": "點斜式",
       "pts": 1
      },
      {
       "content": "x+3y=5",
       "pts": 1
      }
     ],
     "lossZh": "垂直用相反數不取倒數。",
     "lossEn": "Wrong perpendicular slope.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "直線 L₁: 2x-y+1=0，L₂: x+2y-4=0，求交點及 L₁ 與 L₂ 的夾角。",
     "stemEn": "Intersection and angle between L₁, L₂.",
     "answerZh": "解方程：2x-y=-1, x+2y=4 → x=2/5, y=9/5；斜率 m₁=2, m₂=-1/2，乘積 -1 → 垂直，夾角 90°。",
     "answerEn": "Intersect (2/5,9/5); perpendicular → 90°.",
     "marks": [
      {
       "content": "解聯立",
       "pts": 1
      },
      {
       "content": "求兩斜率",
       "pts": 1
      },
      {
       "content": "m₁m₂=-1 → 垂直",
       "pts": 1
      }
     ],
     "lossZh": "夾角公式套錯。",
     "lossEn": "Wrong angle formula.",
     "years": [
      "2020"
     ]
    }
   ]
  },
  {
   "id": "mt-mensuration",
   "titleZh": "扇形與立體求積",
   "titleEn": "Arc, sector & volumes",
   "coreTopics": [
    "ms-08"
   ],
   "relatedTopics": [
    "ms-02"
   ],
   "stem": "半徑 6、圓心角 60° 的扇形，求弧長與面積；再求底半徑 3、高 5 的圓柱體積。",
   "stemEn": "A sector has radius 6 and angle 60°; find its arc length and area. Then find the volume of a cylinder of base radius 3 and height 5.",
   "solutionSkeleton": [
    "弧長 = rθ（弧度）",
    "扇形面積 = ½ r²θ",
    "體積 = 底面積 × 高"
   ],
   "variation": [
    "弧長 / 扇形面積",
    "稜柱 / 圓柱 / 球",
    "相似體的面積、體積比"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "扇形半徑 6、圓心角 60°，求弧長與面積。",
     "stemEn": "Sector r=6, θ=60°; arc and area.",
     "answerZh": "弧長 = 60/360×2π×6 = 2π；面積 = 60/360×π×36 = 6π。",
     "answerEn": "Arc=2π; area=6π.",
     "marks": [
      {
       "content": "弧長比例",
       "pts": 1
      },
      {
       "content": "面積比例",
       "pts": 1
      },
      {
       "content": "2π、6π",
       "pts": 1
      }
     ],
     "lossZh": "用弧度誤當度數。",
     "lossEn": "Radians vs degrees.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "圓柱半徑 3、高 5，求體積與表面積。",
     "stemEn": "Cylinder r=3, h=5; volume and surface area.",
     "answerZh": "V=π×9×5=45π；S=2π×9+2π×3×5=18π+30π=48π。",
     "answerEn": "V=45π; S=48π.",
     "marks": [
      {
       "content": "體積公式",
       "pts": 1
      },
      {
       "content": "表面積=2底+側",
       "pts": 1
      },
      {
       "content": "45π、48π",
       "pts": 1
      }
     ],
     "lossZh": "表面積漏側面或底面。",
     "lossEn": "Missing lateral or bases.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "圓錐底半徑 4、斜高 6，求側面積與體積。",
     "stemEn": "Cone r=4, slant 6; lateral area and volume.",
     "answerZh": "側面積 = πrl = 24π；高 = √(36-16)=2√5；體積 = ⅓π×16×2√5 = 32√5π/3。",
     "answerEn": "Lateral 24π; V = 32√5π/3.",
     "marks": [
      {
       "content": "側面積 πrl",
       "pts": 1
      },
      {
       "content": "高 √(l²-r²)",
       "pts": 1
      },
      {
       "content": "⅓πr²h",
       "pts": 1
      }
     ],
     "lossZh": "用 πr² 當側面積。",
     "lossEn": "Using base area as lateral.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-permutation",
   "titleZh": "排列組合計數（捆綁 / 插空）",
   "titleEn": "Permutation & combination counting",
   "coreTopics": [
    "dp-02"
   ],
   "relatedTopics": [
    "dp-03"
   ],
   "stem": "5 人排成一排，甲乙兩人必須相鄰，求排法數。",
   "stemEn": "Five people line up; A and B must be adjacent. How many arrangements?",
   "solutionSkeleton": [
    "捆綁法：甲乙視為一整體",
    "整體內部再排列",
    "用 P/C 相乘"
   ],
   "variation": [
    "排列（順序有關）",
    "組合（順序無關）",
    "捆綁 / 插空 / 隔板"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "4 人排成一排，有多少種排法？",
     "stemEn": "4 people in a row; arrangements?",
     "answerZh": "4! = 24。",
     "answerEn": "24.",
     "marks": [
      {
       "content": "排列 4!",
       "pts": 1
      },
      {
       "content": "24",
       "pts": 1
      }
     ],
     "lossZh": "用組合 4。",
     "lossEn": "Using combination.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "5 人排隊，其中甲乙必須相鄰，有多少種？",
     "stemEn": "5 people, A,B adjacent.",
     "answerZh": "捆綁：4!×2! = 48。",
     "answerEn": "48.",
     "marks": [
      {
       "content": "捆綁甲乙",
       "pts": 1
      },
      {
       "content": "4!×2!",
       "pts": 1
      },
      {
       "content": "48",
       "pts": 1
      }
     ],
     "lossZh": "漏乘 2!。",
     "lossEn": "Missing ×2!.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "6 人排隊，甲乙不相鄰，有多少種？",
     "stemEn": "6 people, A,B not adjacent.",
     "answerZh": "總數 6! - 相鄰 5!×2! = 720-240 = 480。",
     "answerEn": "6! - 5!×2! = 480.",
     "marks": [
      {
       "content": "總數 6!",
       "pts": 1
      },
      {
       "content": "相鄰 5!×2!",
       "pts": 1
      },
      {
       "content": "相減 480",
       "pts": 1
      }
     ],
     "lossZh": "直接算不相鄰排列。",
     "lossEn": "Counting non-adjacent directly.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-charts",
   "titleZh": "統計圖表讀數（直方圖 / 箱形圖）",
   "titleEn": "Reading histograms & box plots",
   "coreTopics": [
    "dp-04"
   ],
   "relatedTopics": [
    "dp-05"
   ],
   "stem": "從直方圖估計中位數；從箱形圖讀出四分位距。",
   "stemEn": "Estimate the median from a histogram; read the IQR from a box plot.",
   "solutionSkeleton": [
    "累積頻數定位中位數",
    "箱形圖讀 Q₁/Q₃",
    "四分位距 = Q₃−Q₁"
   ],
   "variation": [
    "直方圖（面積 ∝ 頻數）",
    "累積頻數多邊形",
    "箱形圖與離羣值"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "直方圖中一組組距 5、頻率密度 3，求該組頻數。",
     "stemEn": "Histogram: width 5, freq density 3; frequency.",
     "answerZh": "頻數 = 密度×組距 = 15。",
     "answerEn": "Frequency = 15.",
     "marks": [
      {
       "content": "頻數=密度×組距",
       "pts": 1
      },
      {
       "content": "3×5=15",
       "pts": 1
      }
     ],
     "lossZh": "把密度當頻數。",
     "lossEn": "Treating density as frequency.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "箱形圖：最小值 10、下四分位 20、中位數 30、上四分位 40、最大 60，求四分位距。",
     "stemEn": "Box plot: min10, Q1=20, med30, Q3=40, max60; IQR.",
     "answerZh": "IQR = 40-20 = 20。",
     "answerEn": "IQR=20.",
     "marks": [
      {
       "content": "IQR=Q3-Q1",
       "pts": 1
      },
      {
       "content": "40-20=20",
       "pts": 1
      }
     ],
     "lossZh": "用中位數減最小值。",
     "lossEn": "Using median-min.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "累積頻數多邊形中，某點代表「≤某值」的累積頻數。若 50 個數據中 30 個 ≤20，該點縱坐標？",
     "stemEn": "Cumulative frequency: 30 of 50 ≤20; ordinate?",
     "answerZh": "縱坐標 = 累積頻數 = 30。",
     "answerEn": "30.",
     "marks": [
      {
       "content": "累積頻數定義",
       "pts": 1
      },
      {
       "content": "30",
       "pts": 1
      }
     ],
     "lossZh": "用相對頻率 30/50。",
     "lossEn": "Using relative frequency.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-central-tendency",
   "titleZh": "平均數、中位數、眾數",
   "titleEn": "Mean, median & mode",
   "coreTopics": [
    "dp-05"
   ],
   "relatedTopics": [
    "dp-04"
   ],
   "stem": "數據 3, 5, 5, 7, 9 求平均數、中位數與眾數。",
   "stemEn": "For 3, 5, 5, 7, 9 find the mean, median and mode.",
   "solutionSkeleton": [
    "平均數 = 總和 / 個數",
    "排序取中（偶數取中間兩數平均）",
    "眾數 = 出現最多"
   ],
   "variation": [
    "分組數據求平均",
    "加權平均",
    "三種量度的適用情境"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "數據 2,4,4,5,7，求平均數、中位數、眾數。",
     "stemEn": "2,4,4,5,7; mean, median, mode.",
     "answerZh": "平均 = 22/5 = 4.4；中位數 = 4；眾數 = 4。",
     "answerEn": "Mean 4.4, median 4, mode 4.",
     "marks": [
      {
       "content": "平均數",
       "pts": 1
      },
      {
       "content": "中位數排序取中",
       "pts": 1
      },
      {
       "content": "眾數",
       "pts": 1
      }
     ],
     "lossZh": "中位數不排序。",
     "lossEn": "Median without sorting.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "數據 3,5,7,9 加入一個數後平均數為 6，求加入的數。",
     "stemEn": "3,5,7,9 plus x; mean 6.",
     "answerZh": "(24+x)/5 = 6 → x = 6。",
     "answerEn": "x=6.",
     "marks": [
      {
       "content": "總和 24",
       "pts": 1
      },
      {
       "content": "新總和 30",
       "pts": 1
      },
      {
       "content": "x=6",
       "pts": 1
      }
     ],
     "lossZh": "總數算錯。",
     "lossEn": "Wrong count.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "加權平均：考試佔 60%、作業佔 40%，考試 80 分、作業 90 分，求加權平均。",
     "stemEn": "Weighted: exam 60%, homework 40%; 80 & 90.",
     "answerZh": "0.6×80 + 0.4×90 = 48+36 = 84。",
     "answerEn": "84.",
     "marks": [
      {
       "content": "權重相乘",
       "pts": 1
      },
      {
       "content": "48+36",
       "pts": 1
      },
      {
       "content": "84",
       "pts": 1
      }
     ],
     "lossZh": "直接 (80+90)/2。",
     "lossEn": "Simple average.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-dispersion",
   "titleZh": "標準差與四分位距",
   "titleEn": "Standard deviation & IQR",
   "coreTopics": [
    "dp-06"
   ],
   "relatedTopics": [
    "dp-05"
   ],
   "stem": "求數據 2, 4, 6, 8 的標準差與四分位距。",
   "stemEn": "Find the standard deviation and IQR of 2, 4, 6, 8.",
   "solutionSkeleton": [
    "方差 σ² = Σ(x−x̄)²/n",
    "標準差 = √方差",
    "四分位距 = Q₃−Q₁"
   ],
   "variation": [
    "全距 / 四分位距",
    "標準差（σ 或樣本 s）",
    "比較兩組數據離散程度"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 1,
     "q": "LQ",
     "weight": "mid",
     "source": "estimated"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "數據 2,4,6,8,10，求平均數與標準差。",
     "stemEn": "2,4,6,8,10; mean and SD.",
     "answerZh": "平均=6；σ = √[(16+4+0+4+16)/5] = √8 = 2√2。",
     "answerEn": "Mean 6; σ=2√2.",
     "marks": [
      {
       "content": "平均數",
       "pts": 1
      },
      {
       "content": "方差公式",
       "pts": 1
      },
      {
       "content": "σ=2√2",
       "pts": 1
      }
     ],
     "lossZh": "用 (x-μ)² 求和錯。",
     "lossEn": "Wrong squared deviations.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "數據 4,6,8,10 各加 2，平均數和標準差如何變？",
     "stemEn": "Add 2 to each; mean and SD change?",
     "answerZh": "平均數 +2；標準差不變。",
     "answerEn": "Mean +2; SD unchanged.",
     "marks": [
      {
       "content": "平均數同加",
       "pts": 1
      },
      {
       "content": "標準差不變",
       "pts": 1
      }
     ],
     "lossZh": "以為標準差也 +2。",
     "lossEn": "Thinking SD also +2.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "一組數據平均 20、SD 4，每個數乘 3 再加 1，求新平均與 SD。",
     "stemEn": "Each ×3 then +1; new mean and SD.",
     "answerZh": "新平均 = 3×20+1 = 61；新 SD = 3×4 = 12。",
     "answerEn": "Mean 61; SD 12.",
     "marks": [
      {
       "content": "平均受線性變換",
       "pts": 1
      },
      {
       "content": "SD 只受乘影響",
       "pts": 1
      },
      {
       "content": "61、12",
       "pts": 1
      }
     ],
     "lossZh": "SD 也被 +1 影響。",
     "lossEn": "SD affected by +1.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-trig-identity",
   "titleZh": "複合角與二倍角化簡證明",
   "titleEn": "Compound & double angle identities",
   "coreTopics": [
    "m2-03"
   ],
   "relatedTopics": [
    "m2-02"
   ],
   "stem": "證明 sin2A = 2sinA·cosA；並化簡 cos2A − cos²A。",
   "stemEn": "Prove sin2A = 2sinA·cosA; then simplify cos2A − cos²A.",
   "solutionSkeleton": [
    "複合角公式展開",
    "二倍角公式代入",
    "恆等變形化簡"
   ],
   "variation": [
    "證明恆等式",
    "化簡表達式",
    "化簡後解三角方程"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "化簡 sin²θ + cos²θ。",
     "stemEn": "Simplify sin²θ+cos²θ.",
     "answerZh": "= 1。",
     "answerEn": "1.",
     "marks": [
      {
       "content": "畢氏恆等式",
       "pts": 1
      },
      {
       "content": "1",
       "pts": 1
      }
     ],
     "lossZh": "寫成 0。",
     "lossEn": "Writing 0.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "化簡 sin2θ。",
     "stemEn": "Simplify sin 2θ.",
     "answerZh": "= 2 sinθ cosθ。",
     "answerEn": "2 sinθ cosθ.",
     "marks": [
      {
       "content": "二倍角公式",
       "pts": 1
      },
      {
       "content": "2 sinθ cosθ",
       "pts": 1
      }
     ],
     "lossZh": "寫成 sinθ cosθ。",
     "lossEn": "Missing 2.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "證明 (1 - cos2θ)/sin2θ = tanθ。",
     "stemEn": "Prove (1-cos2θ)/sin2θ = tanθ.",
     "answerZh": "1-cos2θ = 2sin²θ；sin2θ=2sinθcosθ → 比值 = sinθ/cosθ = tanθ。",
     "answerEn": "2sin²θ/2sinθcosθ = tanθ.",
     "marks": [
      {
       "content": "二倍角代入",
       "pts": 1
      },
      {
       "content": "約分",
       "pts": 1
      },
      {
       "content": "=tanθ",
       "pts": 1
      }
     ],
     "lossZh": "二倍角公式記錯。",
     "lossEn": "Wrong double-angle formula.",
     "years": [
      "2020"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-matrix",
   "titleZh": "逆矩陣與線性方程組",
   "titleEn": "Inverse matrix & linear systems",
   "coreTopics": [
    "m2-05"
   ],
   "relatedTopics": [
    "m2-04"
   ],
   "stem": "求 [[2,1],[1,1]] 的逆矩陣，並解對應的二元一次方程組。",
   "stemEn": "Find the inverse of [[2,1],[1,1]] and solve the corresponding linear system.",
   "solutionSkeleton": [
    "行列式 ad−bc",
    "逆矩陣公式 A⁻¹ = (1/det)·[[d,−b],[−c,a]]",
    "X = A⁻¹B"
   ],
   "variation": [
    "矩陣運算（乘法）",
    "逆矩陣存在條件 det≠0",
    "克拉默法則"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "矩陣 A=[1 2;3 4]，求 A 的行列式。",
     "stemEn": "det of [1 2;3 4].",
     "answerZh": "det = 1×4 - 2×3 = -2。",
     "answerEn": "-2.",
     "marks": [
      {
       "content": "行列式公式 ad-bc",
       "pts": 1
      },
      {
       "content": "4-6=-2",
       "pts": 1
      }
     ],
     "lossZh": "次序反（bc-ad）。",
     "lossEn": "Reversed order.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 A=[2 1;5 3] 的逆矩陣。",
     "stemEn": "Inverse of [2 1;5 3].",
     "answerZh": "det=6-5=1；A⁻¹ = [3 -1;-5 2]。",
     "answerEn": "A⁻¹=[3 -1;-5 2].",
     "marks": [
      {
       "content": "det=1",
       "pts": 1
      },
      {
       "content": "交換主對角/變號副對角",
       "pts": 1
      },
      {
       "content": "除以 det",
       "pts": 1
      }
     ],
     "lossZh": "逆矩陣公式用錯。",
     "lossEn": "Wrong inverse formula.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "用矩陣解方程組：2x+y=5, 5x+3y=12。",
     "stemEn": "Solve via matrices: 2x+y=5, 5x+3y=12.",
     "answerZh": "A=[2 1;5 3], det=1 → [x;y]=A⁻¹[5;12]=[3·5-1·12; -5·5+2·12]=[3;-1]。",
     "answerEn": "x=3, y=-1.",
     "marks": [
      {
       "content": "寫成矩陣方程",
       "pts": 1
      },
      {
       "content": "A⁻¹ 相乘",
       "pts": 1
      },
      {
       "content": "(3,-1)",
       "pts": 1
      }
     ],
     "lossZh": "逆矩陣乘反邊。",
     "lossEn": "Multiplying inverse on wrong side.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-diff-app",
   "titleZh": "切線、極值與最優化",
   "titleEn": "Tangent, extrema & optimisation",
   "coreTopics": [
    "m2-09"
   ],
   "relatedTopics": [
    "m2-08"
   ],
   "stem": "求 y = x³ − 3x 的極值，及在 x=1 處的切線方程。",
   "stemEn": "Find the extrema of y = x³ − 3x and the tangent at x = 1.",
   "solutionSkeleton": [
    "求導 f′(x)",
    "解 f′(x)=0 求駐點",
    "判符號 / 二階導定極大極小",
    "切線 y−f(a)=f′(a)(x−a)"
   ],
   "variation": [
    "切線 / 法線",
    "單調區間",
    "最優化應用題（面積、成本）"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 y=x² 在 x=3 處的切線斜率。",
     "stemEn": "Slope of tangent to y=x² at x=3.",
     "answerZh": "y'=2x → 斜率=6。",
     "answerEn": "Slope 6.",
     "marks": [
      {
       "content": "求導",
       "pts": 1
      },
      {
       "content": "代 x=3",
       "pts": 1
      },
      {
       "content": "6",
       "pts": 1
      }
     ],
     "lossZh": "忘代 x。",
     "lossEn": "Not substituting x.",
     "years": [
      "2016"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 y=x³-6x 的極值點。",
     "stemEn": "Extrema of y=x³-6x.",
     "answerZh": "y'=3x²-6=0 → x=±√2；x=-√2 極大、x=√2 極小。",
     "answerEn": "Max at -√2, min at √2.",
     "marks": [
      {
       "content": "導數=0",
       "pts": 1
      },
      {
       "content": "解 x=±√2",
       "pts": 1
      },
      {
       "content": "判極大極小",
       "pts": 1
      }
     ],
     "lossZh": "漏判極大/極小。",
     "lossEn": "Not classifying extrema.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "用長方體水箱（底為正方形、無蓋）體積 32，求最小表面積的尺寸。",
     "stemEn": "Open-top square-base box, V=32; min surface area.",
     "answerZh": "設底邊 x、高 h=32/x²；S=x²+4xh=x²+128/x；S'=2x-128/x²=0 → x³=64 → x=4, h=2。",
     "answerEn": "x=4, h=2.",
     "marks": [
      {
       "content": "表面積函數",
       "pts": 1
      },
      {
       "content": "求導=0",
       "pts": 1
      },
      {
       "content": "x=4,h=2",
       "pts": 1
      }
     ],
     "lossZh": "漏無蓋（S=x²+4xh 非 +2x²）。",
     "lossEn": "Including top (no lid).",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-integration",
   "titleZh": "換元積分與三角積分",
   "titleEn": "Substitution & trig integration",
   "coreTopics": [
    "m2-10"
   ],
   "relatedTopics": [
    "m2-08"
   ],
   "stem": "求 ∫(2x+1)³ dx 與 ∫sin²x dx。",
   "stemEn": "Find ∫(2x+1)³ dx and ∫sin²x dx.",
   "solutionSkeleton": [
    "換元 u = 2x+1",
    "冪函數積分",
    "sin²x = (1−cos2x)/2 降次"
   ],
   "variation": [
    "換元積分",
    "三角積分（降次 / 公式）",
    "不定積分加常數 C"
   ],
   "appearances": [
    {
     "year": 2013,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2015,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2017,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2019,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2021,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2023,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 ∫(3x²+2x)dx。",
     "stemEn": "Integrate 3x²+2x.",
     "answerZh": "x³ + x² + C。",
     "answerEn": "x³+x²+C.",
     "marks": [
      {
       "content": "逐項積分",
       "pts": 1
      },
      {
       "content": "+C",
       "pts": 1
      }
     ],
     "lossZh": "漏 +C。",
     "lossEn": "Missing +C.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 ∫x·sin(x²)dx。",
     "stemEn": "Integrate x·sin(x²).",
     "answerZh": "設 u=x²，du=2x dx → ½∫sin u du = -½cos(x²) + C。",
     "answerEn": "-½cos(x²)+C.",
     "marks": [
      {
       "content": "換元 u=x²",
       "pts": 1
      },
      {
       "content": "du=2x dx",
       "pts": 1
      },
      {
       "content": "-½cos(x²)+C",
       "pts": 1
      }
     ],
     "lossZh": "換元後係數錯。",
     "lossEn": "Wrong substitution factor.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求 ∫₀¹ x e^(x²) dx。",
     "stemEn": "Definite integral of x e^(x²) from 0 to 1.",
     "answerZh": "u=x² → ½∫₀¹ e^u du = ½(e-1)。",
     "answerEn": "½(e-1).",
     "marks": [
      {
       "content": "換元",
       "pts": 1
      },
      {
       "content": "換上下限",
       "pts": 1
      },
      {
       "content": "½(e-1)",
       "pts": 1
      }
     ],
     "lossZh": "忘換上下限。",
     "lossEn": "Not updating limits.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mt-m2-binomial",
   "titleZh": "二項定理通項求特定項",
   "titleEn": "Binomial general term",
   "coreTopics": [
    "m2-12"
   ],
   "relatedTopics": [
    "na-05"
   ],
   "stem": "求 (x + 1/x)⁸ 展開式中 x⁴ 項的係數。",
   "stemEn": "Find the coefficient of x⁴ in the expansion of (x + 1/x)⁸.",
   "solutionSkeleton": [
    "通項 T_{k+1} = C(8,k)·x^(8−k)·(1/x)^k",
    "令 x 指數 = 4 解 k",
    "代入求係數"
   ],
   "variation": [
    "求特定冪次項 / 常數項",
    "係數比較",
    "與多項式除法結合"
   ],
   "appearances": [
    {
     "year": 2012,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2014,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2016,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2018,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2020,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2022,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    },
    {
     "year": 2024,
     "paper": 3,
     "q": "LQ",
     "weight": "high",
     "source": "confirmed"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 (1+x)⁶ 展開中 x² 的係數。",
     "stemEn": "Coefficient of x² in (1+x)⁶.",
     "answerZh": "C(6,2) = 15。",
     "answerEn": "15.",
     "marks": [
      {
       "content": "通項 C(6,k)xᵏ",
       "pts": 1
      },
      {
       "content": "k=2",
       "pts": 1
      },
      {
       "content": "15",
       "pts": 1
      }
     ],
     "lossZh": "C(6,2) 算錯。",
     "lossEn": "Wrong C.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 (2x-1)⁵ 展開中 x³ 的係數。",
     "stemEn": "Coefficient of x³ in (2x-1)⁵.",
     "answerZh": "k=3：C(5,3)(2x)³(-1)² = 10×8 = 80。",
     "answerEn": "80.",
     "marks": [
      {
       "content": "通項含 (2x)ᵏ(-1)⁵⁻ᵏ",
       "pts": 1
      },
      {
       "content": "k=3",
       "pts": 1
      },
      {
       "content": "10×8=80",
       "pts": 1
      }
     ],
     "lossZh": "漏 (2)³=8。",
     "lossEn": "Missing 2³.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求 (1+x)⁸(1-x)⁶ 展開中 x 的係數。",
     "stemEn": "Coefficient of x in (1+x)⁸(1-x)⁶.",
     "answerZh": "x 項來自 C(8,1)x·1 + 1·C(6,1)(-x) = 8 - 6 = 2。",
     "answerEn": "8-6=2.",
     "marks": [
      {
       "content": "兩項相乘的 x 來源",
       "pts": 1
      },
      {
       "content": "8-6",
       "pts": 1
      },
      {
       "content": "2",
       "pts": 1
      }
     ],
     "lossZh": "漏一項。",
     "lossEn": "Missing one term.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-ms-03-02",
   "titleZh": "圓與直線位置關係",
   "titleEn": "Circle-line position (tangent/intersect/external)",
   "coreTopics": [
    "ms-03"
   ],
   "relatedTopics": [
    "ms-05"
   ],
   "stem": "給定圓方程和直線方程，求圓心到直線的距離d，判斷位置關係，若相切求k值或若相交求弦長",
   "stemEn": "Given circle and line equations, find distance d from center to line, determine position, find k if tangent or chord length if intersecting",
   "solutionSkeleton": [
    "1. 將圓方程化為標準式求圓心和半徑r",
    "2. 用點到直線距離公式求d",
    "3. 比較d與r：d<r相交 d=r相切 d>r相離",
    "4. 弦長=2*sqrt(r^2-d^2)"
   ],
   "variation": [
    "求參數k使直線與圓相切(判別式法或距離法)",
    "兩圓位置關係(圓心距與半徑和差比較)",
    "求切線方程(已知圓上一點或斜率)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "圓心 (2,3) 半徑 4，判斷點 (2,7) 與圓的位置。",
     "stemEn": "Circle centre (2,3), r=4; point (2,7) inside/on/outside?",
     "answerZh": "距離 = |7-3| = 4 = 半徑 → 在圓上。",
     "answerEn": "Distance 4 = r → on circle.",
     "marks": [
      {
       "content": "點到圓心距離",
       "pts": 1
      },
      {
       "content": "等於半徑 → 圓上",
       "pts": 1
      }
     ],
     "lossZh": "距離算錯。",
     "lossEn": "Wrong distance.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "判斷直線 3x+4y-15=0 與圓 x²+y²=9 的位置。",
     "stemEn": "Line 3x+4y-15=0 vs circle x²+y²=9.",
     "answerZh": "圓心到直線距離 = |0+0-15|/5 = 3 = 半徑 → 相切。",
     "answerEn": "Distance 3 = r → tangent.",
     "marks": [
      {
       "content": "點到直線距離",
       "pts": 1
      },
      {
       "content": "=3=r",
       "pts": 1
      },
      {
       "content": "相切",
       "pts": 1
      }
     ],
     "lossZh": "距離公式算錯或比較方向錯。",
     "lossEn": "Wrong distance or comparison.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "直線 y=x+k 與圓 x²+y²=8 相切，求 k。",
     "stemEn": "Line y=x+k tangent to x²+y²=8; find k.",
     "answerZh": "圓心 (0,0) 到直線 x-y+k=0 距離 = |k|/√2 = √8 → |k| = 4 → k=±4。",
     "answerEn": "k=±4.",
     "marks": [
      {
       "content": "距離=|k|/√2",
       "pts": 1
      },
      {
       "content": "=半徑 2√2",
       "pts": 1
      },
      {
       "content": "k=±4",
       "pts": 1
      }
     ],
     "lossZh": "漏 ± 或半徑算錯。",
     "lossEn": "Missing ± or wrong r.",
     "years": [
      "2020"
     ]
    }
   ]
  },
  {
   "id": "mp-ms-03-03",
   "titleZh": "圓內接四邊形與角度推理鏈",
   "titleEn": "Cyclic quadrilateral angle chain",
   "coreTopics": [
    "ms-03"
   ],
   "relatedTopics": [
    "ms-02"
   ],
   "stem": "圓上四點已知若干角度求另一角度，可能需證明四點共圓",
   "stemEn": "Four points on a circle with some known angles, find another angle, may need to prove concyclicity",
   "solutionSkeleton": [
    "1. 圓周角=同弧圓心角的一半",
    "2. 同弧圓周角相等",
    "3. 圓內接四邊形對角互補",
    "4. 半圓上的圓周角=90度",
    "5. 弦切角=對弧的圓周角"
   ],
   "variation": [
    "弦切角定理(alternate segment theorem)求角",
    "證四點共圓(對角互補或同弧圓周角相等)",
    "多步角度推理鏈"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "圓內接四邊形 ABCD 中 ∠A=80°，求 ∠C。",
     "stemEn": "Cyclic ABCD, ∠A=80°; ∠C.",
     "answerZh": "∠C = 180°-80° = 100°。",
     "answerEn": "100°.",
     "marks": [
      {
       "content": "對角互補",
       "pts": 1
      },
      {
       "content": "100°",
       "pts": 1
      }
     ],
     "lossZh": "記成相等。",
     "lossEn": "Thinking equal.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "圓內接四邊形中 ∠A:∠B:∠C = 2:3:4，求 ∠D。",
     "stemEn": "Cyclic ABCD, A:B:C=2:3:4; find ∠D.",
     "answerZh": "∠A+∠C=180 → 2k+4k=180 → k=30 → ∠A=60, ∠B=90, ∠C=120；∠D=180-∠B=90。",
     "answerEn": "∠D=90°.",
     "marks": [
      {
       "content": "∠A+∠C=180 求 k",
       "pts": 1
      },
      {
       "content": "∠B=90",
       "pts": 1
      },
      {
       "content": "∠D=90",
       "pts": 1
      }
     ],
     "lossZh": "比例設錯或漏對角互補。",
     "lossEn": "Wrong ratio setup.",
     "years": [
      "2022"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "圓內接四邊形 ABCD，對角線 AC 平分 ∠DAB，證明 AB·CD = AD·BC（托勒密特例）。",
     "stemEn": "Cyclic ABCD, AC bisects ∠DAB; prove AB·CD=AD·BC.",
     "answerZh": "由角平分 + 同弧 → ∠BCA=∠DCA... 用正弦定理在 △ABC 和 △ADC 中，共享 AC，得 AB/BC=AD/CD → AB·CD=AD·BC。",
     "answerEn": "Sine rule in the two triangles sharing AC.",
     "marks": [
      {
       "content": "角平分得等角",
       "pts": 1
      },
      {
       "content": "兩三角形用正弦定理",
       "pts": 1
      },
      {
       "content": "交叉相乘得證",
       "pts": 1
      }
     ],
     "lossZh": "證明缺關鍵角相等。",
     "lossEn": "Missing key angle equality.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-na-10-02",
   "titleZh": "由Sn反推an及an與Sn關係",
   "titleEn": "Derive an from Sn and an-Sn relationship",
   "coreTopics": [
    "na-10"
   ],
   "relatedTopics": [
    "na-06"
   ],
   "stem": "已知Sn表達式求通項an，驗證a1，證明關於an或Sn的等式",
   "stemEn": "Given Sn expression, find general term an, verify a1, prove identity about an or Sn",
   "solutionSkeleton": [
    "1. a1=S1",
    "2. n>=2時an=Sn-S(n-1)",
    "3. 驗證a1是否滿足通項公式",
    "4. 若an是二次式則原數列為等差數列"
   ],
   "variation": [
    "等差數列an為一次式 Sn為二次式(最常考)",
    "等比數列的Sn化簡",
    "證明恆等式(直接證明或歸納法)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "數列 Sₙ = n²+2n，求 aₙ。",
     "stemEn": "Given Sₙ=n²+2n; find aₙ.",
     "answerZh": "aₙ = Sₙ-Sₙ₋₁ = (n²+2n)-[(n-1)²+2(n-1)] = 2n+1（n≥2；a₁=S₁=3 也符）。",
     "answerEn": "aₙ=2n+1.",
     "marks": [
      {
       "content": "aₙ=Sₙ-Sₙ₋₁",
       "pts": 1
      },
      {
       "content": "化簡 2n+1",
       "pts": 1
      },
      {
       "content": "驗 a₁",
       "pts": 1
      }
     ],
     "lossZh": "忘 aₙ=Sₙ-Sₙ₋₁ 或漏驗首項。",
     "lossEn": "Forgetting Sₙ-Sₙ₋₁ or checking a₁.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "數列 a₁=2，aₙ = 2aₙ₋₁ + 1（n≥2），求 a₃。",
     "stemEn": "Recursive aₙ=2aₙ₋₁+1, a₁=2; a₃.",
     "answerZh": "a₂=5, a₃=11。",
     "answerEn": "a₃=11.",
     "marks": [
      {
       "content": "代 n=2",
       "pts": 1
      },
      {
       "content": "代 n=3",
       "pts": 1
      },
      {
       "content": "11",
       "pts": 1
      }
     ],
     "lossZh": "遞推代錯。",
     "lossEn": "Wrong recursion.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "等差數列 aₙ，S₁₀=100, S₂₀=400，求 a₁ 與公差。",
     "stemEn": "AP, S₁₀=100, S₂₀=400; a₁ and d.",
     "answerZh": "Sₙ=na₁+n(n-1)d/2：10a₁+45d=100, 20a₁+190d=400 → 解 a₁=1, d=2。",
     "answerEn": "a₁=1, d=2.",
     "marks": [
      {
       "content": "列兩方程",
       "pts": 1
      },
      {
       "content": "解聯立",
       "pts": 1
      },
      {
       "content": "a₁=1,d=2",
       "pts": 1
      }
     ],
     "lossZh": "求和公式代入錯。",
     "lossEn": "Wrong sum formula.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mp-na-10-03",
   "titleZh": "等比數列與對數方程組合",
   "titleEn": "GP combined with logarithmic equation",
   "coreTopics": [
    "na-10"
   ],
   "relatedTopics": [
    "na-03"
   ],
   "stem": "涉及增長率或複利的問題化為等比數列，需取對數求n",
   "stemEn": "Growth/compound interest problem reduced to GP, take log to find n",
   "solutionSkeleton": [
    "1. 識別等比模型(每年乘以公比r)",
    "2. 寫出an=a1*r^(n-1)或Sn",
    "3. 設方程等於某值",
    "4. 兩邊取log解n"
   ],
   "variation": [
    "房屋貸款月供問題",
    "細菌培養或放射性衰變",
    "年增長率求翻倍時間(log2/logr)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "等比數列 a₁=2, r=3，求 a₄ 與 S₄。",
     "stemEn": "GP a₁=2, r=3; a₄ and S₄.",
     "answerZh": "a₄=2×27=54；S₄=2(3⁴-1)/(3-1)=80。",
     "answerEn": "a₄=54, S₄=80.",
     "marks": [
      {
       "content": "通項",
       "pts": 1
      },
      {
       "content": "求和公式",
       "pts": 1
      },
      {
       "content": "54、80",
       "pts": 1
      }
     ],
     "lossZh": "求和公式 a(rⁿ-1)/(r-1) 代入錯。",
     "lossEn": "Wrong sum substitution.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "等比數列 a₃=12, a₆=96，求首項與公比。",
     "stemEn": "GP a₃=12, a₆=96; a₁ and r.",
     "answerZh": "r³ = 96/12 = 8 → r=2；a₁×4=12 → a₁=3。",
     "answerEn": "a₁=3, r=2.",
     "marks": [
      {
       "content": "r³=a₆/a₃",
       "pts": 1
      },
      {
       "content": "r=2",
       "pts": 1
      },
      {
       "content": "a₁=3",
       "pts": 1
      }
     ],
     "lossZh": "r 的指數錯。",
     "lossEn": "Wrong exponent.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "等比數列 a₁=1, r=1/2，求無窮級數之和。",
     "stemEn": "Infinite GP a₁=1, r=½; sum.",
     "answerZh": "S∞ = a₁/(1-r) = 1/(1-½) = 2。",
     "answerEn": "S∞=2.",
     "marks": [
      {
       "content": "|r|<1 用 S∞ 公式",
       "pts": 1
      },
      {
       "content": "1/(1-½)",
       "pts": 1
      },
      {
       "content": "2",
       "pts": 1
      }
     ],
     "lossZh": "忘了 |r|<1 條件或用錯公式。",
     "lossEn": "Wrong condition or formula.",
     "years": [
      "2020"
     ]
    }
   ]
  },
  {
   "id": "mp-dp-03-02",
   "titleZh": "條件概率與獨立事件判斷",
   "titleEn": "Conditional probability and independence",
   "coreTopics": [
    "dp-03"
   ],
   "relatedTopics": [
    "dp-02"
   ],
   "stem": "給出概率表或文氏圖，求條件概率P(A|B)，判斷A和B是否獨立",
   "stemEn": "Given probability table or Venn diagram, find P(A|B), determine if A and B are independent",
   "solutionSkeleton": [
    "1. P(A|B)=P(AnB)/P(B)",
    "2. 獨立: P(AnB)=P(A)P(B)",
    "3. 互斥: P(AnB)=0",
    "4. 全概率: P(A)=P(A|B)P(B)+P(A|B')P(B')"
   ],
   "variation": [
    "判斷獨立vs互斥(概念混淆常考)",
    "樹狀圖求條件概率",
    "已知P(A|B)反求P(AnB)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section A2/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "P(A)=0.6, P(B)=0.5，A、B 獨立，求 P(A∩B)。",
     "stemEn": "Independent A,B; P(A∩B).",
     "answerZh": "P(A∩B) = 0.6×0.5 = 0.3。",
     "answerEn": "0.3.",
     "marks": [
      {
       "content": "獨立乘法",
       "pts": 1
      },
      {
       "content": "0.3",
       "pts": 1
      }
     ],
     "lossZh": "當互斥相加。",
     "lossEn": "Adding as mutually exclusive.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "袋 3 紅 5 藍，先抽不放回，求第二次抽紅的概率。",
     "stemEn": "3R 5B, without replacement; P(2nd is R).",
     "answerZh": "= P(RR)+P(BR) = 3/8×2/7 + 5/8×3/7 = 6/56+15/56 = 21/56 = 3/8。",
     "answerEn": "3/8.",
     "marks": [
      {
       "content": "分兩路徑",
       "pts": 1
      },
      {
       "content": "各算條件概率",
       "pts": 1
      },
      {
       "content": "3/8",
       "pts": 1
      }
     ],
     "lossZh": "用有放回。",
     "lossEn": "With replacement.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "P(A)=0.5, P(B)=0.6, P(A∪B)=0.8，求 P(A|B)。",
     "stemEn": "Given P(A∪B)=0.8; find P(A|B).",
     "answerZh": "P(A∩B)=P(A)+P(B)-P(A∪B)=0.3；P(A|B)=0.3/0.6=0.5。",
     "answerEn": "0.5.",
     "marks": [
      {
       "content": "容斥求交",
       "pts": 1
      },
      {
       "content": "條件概率公式",
       "pts": 1
      },
      {
       "content": "0.5",
       "pts": 1
      }
     ],
     "lossZh": "漏用容斥公式。",
     "lossEn": "Not using inclusion-exclusion.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-dp-03-03",
   "titleZh": "概率與排列組合綜合應用題",
   "titleEn": "Probability with P&C application",
   "coreTopics": [
    "dp-03"
   ],
   "relatedTopics": [
    "dp-02"
   ],
   "stem": "從一組物品中不放回抽取，求特定排列的概率，至少或至多某條件的概率",
   "stemEn": "Draw without replacement, find probability of specific arrangement, at least/at most conditions",
   "solutionSkeleton": [
    "1. 確定有序(排列)還是無序(組合)",
    "2. 計算樣本空間總數",
    "3. 計算有利事件數",
    "4. 至少=1減去對立事件",
    "5. 注意放回vs不放回"
   ],
   "variation": [
    "不放回抽取(條件概率變化)",
    "至少問題用互補法",
    "分組分配問題"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "擲硬幣 3 次，求恰好 2 次正面的概率。",
     "stemEn": "3 coin tosses; P(exactly 2 heads).",
     "answerZh": "C(3,2)(1/2)³ = 3/8。",
     "answerEn": "3/8.",
     "marks": [
      {
       "content": "二項概率",
       "pts": 1
      },
      {
       "content": "C(3,2)=3",
       "pts": 1
      },
      {
       "content": "3/8",
       "pts": 1
      }
     ],
     "lossZh": "漏 C 或係數。",
     "lossEn": "Missing C or factor.",
     "years": [
      "2017"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "5 個紅球 3 個藍球抽 3 個，求至少 2 紅的概率。",
     "stemEn": "5R 3B, draw 3; P(at least 2 R).",
     "answerZh": "[C(5,2)C(3,1)+C(5,3)]/C(8,3) = (30+10)/56 = 40/56 = 5/7。",
     "answerEn": "5/7.",
     "marks": [
      {
       "content": "分類 2紅或3紅",
       "pts": 1
      },
      {
       "content": "分子 40",
       "pts": 1
      },
      {
       "content": "分母 56 → 5/7",
       "pts": 1
      }
     ],
     "lossZh": "漏其中一類。",
     "lossEn": "Missing one case.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "獨立試驗成功率 1/4，求第 5 次首次成功的概率。",
     "stemEn": "Independent success p=¼; P(first success on 5th).",
     "answerZh": "(3/4)⁴(1/4)。",
     "answerEn": "(¾)⁴(¼).",
     "marks": [
      {
       "content": "前 4 次失敗",
       "pts": 1
      },
      {
       "content": "第 5 次成功",
       "pts": 1
      },
      {
       "content": "(3/4)⁴(1/4)",
       "pts": 1
      }
     ],
     "lossZh": "漏前 4 次失敗因數。",
     "lossEn": "Missing failure factor.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mp-ms-07-02",
   "titleZh": "三角形面積與三點共線",
   "titleEn": "Triangle area and collinearity",
   "coreTopics": [
    "ms-07"
   ],
   "relatedTopics": [
    "ms-05"
   ],
   "stem": "給定三點座標求三角形面積，判斷三點是否共線，求第四點使構成平行四邊形",
   "stemEn": "Given three points, find triangle area, determine collinearity, find fourth point for parallelogram",
   "solutionSkeleton": [
    "1. 面積=1/2|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|",
    "2. 面積=0則共線",
    "3. 平行四邊形: 對角線中點相同"
   ],
   "variation": [
    "面積=0證共線",
    "平行四邊形或梯形面積",
    "直線分割三角形面積比"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section A2/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "A(1,2), B(3,6), C(4,7)，求 △ABC 面積。",
     "stemEn": "Area of △ABC with A(1,2),B(3,6),C(4,7).",
     "answerZh": "½|1(6-7)+3(7-2)+4(2-6)| = ½| -1+15-16 | = ½×2 = 1。",
     "answerEn": "Area 1.",
     "marks": [
      {
       "content": "行列式面積公式",
       "pts": 1
      },
      {
       "content": "代入",
       "pts": 1
      },
      {
       "content": "1",
       "pts": 1
      }
     ],
     "lossZh": "公式展開錯。",
     "lossEn": "Wrong expansion.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "判斷 A(1,1), B(2,3), C(3,5) 是否共線。",
     "stemEn": "Collinear? A(1,1),B(2,3),C(3,5).",
     "answerZh": "斜率 AB=2，BC=2 → 共線。",
     "answerEn": "Slopes equal → collinear.",
     "marks": [
      {
       "content": "算 AB 斜率",
       "pts": 1
      },
      {
       "content": "算 BC 斜率",
       "pts": 1
      },
      {
       "content": "相等 → 共線",
       "pts": 1
      }
     ],
     "lossZh": "只算一段。",
     "lossEn": "Only one slope.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "A(1,2), B(5,6)，求在 x 軸上使 △ABC 面積為 6 的 C 點。",
     "stemEn": "C on x-axis, area ABC=6.",
     "answerZh": "設 C(c,0)：½|1(6-0)+5(0-2)+c(2-6)|=½|6-10-4c|=|4c+4|/2=6 → |4c+4|=12 → c=2 或 -4。",
     "answerEn": "C=(2,0) or (-4,0).",
     "marks": [
      {
       "content": "設 C(c,0)",
       "pts": 1
      },
      {
       "content": "面積公式",
       "pts": 1
      },
      {
       "content": "解 |4c+4|=12",
       "pts": 1
      }
     ],
     "lossZh": "忘絕對值（兩解）。",
     "lossEn": "Missing absolute value (two answers).",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-ms-07-03",
   "titleZh": "座標幾何綜合: 直線與圓與面積",
   "titleEn": "Coordinate geometry: line + circle + area",
   "coreTopics": [
    "ms-07"
   ],
   "relatedTopics": [
    "ms-05",
    "ms-03"
   ],
   "stem": "Section B綜合題: 求直線方程，直線與圓的交點或切點，由交點構成的面積",
   "stemEn": "Section B: find line equation, intersection/tangency with circle, area formed by intersection points",
   "solutionSkeleton": [
    "1. 求直線方程(斜率+一點或兩點)",
    "2. 聯立直線與圓方程",
    "3. 判別式判斷交點數",
    "4. 弦長=2*sqrt(r^2-d^2)",
    "5. 座標面積公式"
   ],
   "variation": [
    "求切線方程(圓上一點的切線)",
    "求弦的中點座標",
    "扇形面積減三角形面積=弓形面積"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求圓 x²+y²=25 與直線 x=3 的交點。",
     "stemEn": "Circle x²+y²=25 and x=3.",
     "answerZh": "9+y²=25 → y=±4；交點 (3,4),(3,-4)。",
     "answerEn": "(3,±4).",
     "marks": [
      {
       "content": "代入",
       "pts": 1
      },
      {
       "content": "y=±4",
       "pts": 1
      }
     ],
     "lossZh": "漏負根。",
     "lossEn": "Missing negative root.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "直線 y=x+1 與圓 x²+y²=13 的交點間距離（弦長）。",
     "stemEn": "Chord of y=x+1 in x²+y²=13.",
     "answerZh": "代入：x²+(x+1)²=13 → 2x²+2x-12=0 → x²+x-6=0 → x=2,-3；點 (2,3),(-3,-2)；弦長=√(25+25)=5√2。",
     "answerEn": "Chord 5√2.",
     "marks": [
      {
       "content": "聯立求交點",
       "pts": 1
      },
      {
       "content": "距離公式",
       "pts": 1
      },
      {
       "content": "5√2",
       "pts": 1
      }
     ],
     "lossZh": "只求交點不求弦長。",
     "lossEn": "Only intersections, not chord.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "圓心 (1,2) 半徑 3 的圓與直線 4x-3y+12=0，求截弦長。",
     "stemEn": "Circle centre (1,2), r=3; chord by 4x-3y+12=0.",
     "answerZh": "圓心距 d=|4-6+12|/5=10/5=2；半弦長=√(9-4)=√5；弦長=2√5。",
     "answerEn": "2√5.",
     "marks": [
      {
       "content": "距離公式",
       "pts": 1
      },
      {
       "content": "d=2",
       "pts": 1
      },
      {
       "content": "弦長 2√5",
       "pts": 1
      }
     ],
     "lossZh": "忘半弦-半徑-弦心距關係。",
     "lossEn": "Missing right-triangle relation.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-na-06-02",
   "titleZh": "韋達定理與根的性質",
   "titleEn": "Vieta's formulas and root properties",
   "coreTopics": [
    "na-06"
   ],
   "relatedTopics": [
    "na-07"
   ],
   "stem": "已知二次方程的根滿足某條件(如reciprocal或和積關係)，求參數k的值",
   "stemEn": "Given roots satisfy a condition, find parameter k",
   "solutionSkeleton": [
    "1. 設根為alpha和beta",
    "2. alpha+beta=-b/a, alpha*beta=c/a",
    "3. 將條件轉化為關於alpha+beta和alpha*beta的方程",
    "4. 解關於k的方程",
    "5. 代入驗證"
   ],
   "variation": [
    "一根是另一根的N倍",
    "兩根同號或異號(判別式+韋達)",
    "新方程(以某函數值為根)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section A2/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "方程 x²-5x+6=0 兩根為 α、β，求 α+β 與 αβ。",
     "stemEn": "Roots α,β of x²-5x+6; sum and product.",
     "answerZh": "α+β=5；αβ=6。",
     "answerEn": "Sum 5, product 6.",
     "marks": [
      {
       "content": "韋達定理",
       "pts": 1,
       "contentEn": "Apply Vieta's formulas"
      },
      {
       "content": "5、6",
       "pts": 1,
       "contentEn": "Sum 5, product 6"
      }
     ],
     "lossZh": "符號錯（-b/a 是 5 不是 -5）。",
     "lossEn": "Wrong sign.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "方程 x²+3x-2=0 兩根 α、β，求 α²+β²。",
     "stemEn": "α,β of x²+3x-2; find α²+β².",
     "answerZh": "α+β=-3, αβ=-2 → α²+β²=(α+β)²-2αβ = 9+4 = 13。",
     "answerEn": "13.",
     "marks": [
      {
       "content": "α+β、αβ",
       "pts": 1,
       "contentEn": "α+β, αβ"
      },
      {
       "content": "(α+β)²-2αβ",
       "pts": 1,
       "contentEn": "(α+β)² − 2αβ"
      },
      {
       "content": "13",
       "pts": 1,
       "contentEn": "13"
      }
     ],
     "lossZh": "忘了 2αβ 的符號。",
     "lossEn": "Wrong 2αβ sign.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "方程 x²-2x-4=0 兩根 α、β，求以 α/β、β/α 為根的方程。",
     "stemEn": "New equation with roots α/β, β/α.",
     "answerZh": "α+β=2, αβ=-4；新和=(α²+β²)/αβ=[4+8]/(-4)=-3；新積=1；方程 x²+3x+1=0。",
     "answerEn": "x²+3x+1=0.",
     "marks": [
      {
       "content": "新根和",
       "pts": 1,
       "contentEn": "New sum of roots"
      },
      {
       "content": "新根積",
       "pts": 1,
       "contentEn": "New product of roots"
      },
      {
       "content": "x²+3x+1=0",
       "pts": 1,
       "contentEn": "x² + 3x + 1 = 0"
      }
     ],
     "lossZh": "新根和化簡錯。",
     "lossEn": "Wrong new sum.",
     "years": [
      "2022"
     ]
    }
   ],
   "solutionSkeletonEn": [
    "Let the roots be α and β",
    "α + β = −b/a, αβ = c/a",
    "Convert the condition into equations in α+β and αβ",
    "Solve the equation for the parameter",
    "Substitute back to verify"
   ],
   "variationEn": [
    "One root is N times the other",
    "Two roots have the same/opposite signs (discriminant + Vieta)",
    "New equation with function values as roots"
   ]
  },
  {
   "id": "mp-na-05-02",
   "titleZh": "因式定理與餘式定理綜合",
   "titleEn": "Factor and remainder theorem combined",
   "coreTopics": [
    "na-05"
   ],
   "relatedTopics": [
    "na-06"
   ],
   "stem": "求餘數，證明因式，因式分解後求解方程",
   "stemEn": "Find remainder, prove factor, factorize and solve equation",
   "solutionSkeleton": [
    "1. 餘式定理: 餘數=f(a)",
    "2. 因式定理: f(a)=0則(x-a)是因式",
    "3. 猜有理根(常數項因數除以最高次係數因數)",
    "4. 長除法或配對分解",
    "5. 求解各因式=0"
   ],
   "variation": [
    "求k使f(x)能被(x-a)整除",
    "已知餘數反求參數",
    "高次多項式分解(三次以上)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section A2/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "f(x)=x³-4x，求 f(x) 除以 x-1 的餘式。",
     "stemEn": "Remainder of x³-4x ÷ (x-1).",
     "answerZh": "f(1)=1-4=-3。",
     "answerEn": "-3.",
     "marks": [
      {
       "content": "餘式定理 f(1)",
       "pts": 1
      },
      {
       "content": "-3",
       "pts": 1
      }
     ],
     "lossZh": "用長除法。",
     "lossEn": "Using long division.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "f(x)=x³+ax²-3x+2，若 f(x) 有因式 x-1，求 a。",
     "stemEn": "x³+ax²-3x+2 has factor x-1; find a.",
     "answerZh": "f(1)=1+a-3+2=0 → a=0。",
     "answerEn": "a=0.",
     "marks": [
      {
       "content": "因式定理 f(1)=0",
       "pts": 1
      },
      {
       "content": "1+a-3+2=0",
       "pts": 1
      },
      {
       "content": "a=0",
       "pts": 1
      }
     ],
     "lossZh": "餘式定理用成 f(1)=1。",
     "lossEn": "Using f(1)=1.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "多項式 f(x) 除以 x-1 餘 3、除以 x-2 餘 5，求除以 (x-1)(x-2) 的餘式。",
     "stemEn": "f(1)=3, f(2)=5; remainder mod (x-1)(x-2).",
     "answerZh": "設餘式 ax+b：a+b=3, 2a+b=5 → a=2, b=1 → 餘式 2x+1。",
     "answerEn": "2x+1.",
     "marks": [
      {
       "content": "設餘式一次式",
       "pts": 1
      },
      {
       "content": "代 f(1)、f(2)",
       "pts": 1
      },
      {
       "content": "a=2,b=1",
       "pts": 1
      }
     ],
     "lossZh": "餘式設成常數。",
     "lossEn": "Remainder as constant.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-na-05-03",
   "titleZh": "多項式圖像與方程的根",
   "titleEn": "Polynomial graph and equation roots",
   "coreTopics": [
    "na-05"
   ],
   "relatedTopics": [
    "na-07"
   ],
   "stem": "求多項式圖像與x軸交點，f(x)>0的解集，圖像變換",
   "stemEn": "Find x-intercepts, solution set of f(x)>0, graph transformation",
   "solutionSkeleton": [
    "1. 因式分解求根",
    "2. 根就是x截距",
    "3. 畫草圖(首項係數決定開口方向)",
    "4. f(x)>0即圖像在x軸上方部分"
   ],
   "variation": [
    "三次函數圖像與x軸交點",
    "利用圖像解不等式",
    "多項式圖像平移或反射後求新方程"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P1",
     "question": "Section A2"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "方程 x³-x=0 的根。",
     "stemEn": "Roots of x³-x=0.",
     "answerZh": "x(x²-1)=x(x-1)(x+1)=0 → x=-1,0,1。",
     "answerEn": "x=-1,0,1.",
     "marks": [
      {
       "content": "因式分解",
       "pts": 1
      },
      {
       "content": "三根",
       "pts": 1
      }
     ],
     "lossZh": "漏根。",
     "lossEn": "Missing a root.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "f(x)=x³-3x+2 有多少個實根？",
     "stemEn": "Real roots of x³-3x+2.",
     "answerZh": "因式分解：(x-1)²(x+2)=0 → x=1（二重）、-2 → 2 個相異實根。",
     "answerEn": "x=1 (double), -2.",
     "marks": [
      {
       "content": "因式分解",
       "pts": 1
      },
      {
       "content": "判重根",
       "pts": 1
      },
      {
       "content": "2 個相異",
       "pts": 1
      }
     ],
     "lossZh": "把重根當 2 個相異根。",
     "lossEn": "Counting double root twice.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "利用圖像判斷 k 的範圍使 x³-3x = k 有三個不同實根。",
     "stemEn": "Range of k for x³-3x=k to have 3 real roots.",
     "answerZh": "f(x)=x³-3x 的極值：f'=3x²-3=0 → x=±1，f(1)=-2, f(-1)=2；水平線 y=k 與圖像交 3 點 → -2<k<2。",
     "answerEn": "-2<k<2.",
     "marks": [
      {
       "content": "求極值點",
       "pts": 1
      },
      {
       "content": "極值 -2、2",
       "pts": 1
      },
      {
       "content": "-2<k<2",
       "pts": 1
      }
     ],
     "lossZh": "只想到一個極值。",
     "lossEn": "Only one extremum.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mp-m2-08-02",
   "titleZh": "隱函數求導與切線法線",
   "titleEn": "Implicit differentiation and tangent/normal",
   "coreTopics": [
    "m2-08"
   ],
   "relatedTopics": [
    "m2-09"
   ],
   "stem": "曲線F(x,y)=0求dy/dx，某點切線方程和法線方程",
   "stemEn": "Curve F(x,y)=0, find dy/dx, tangent and normal equations",
   "solutionSkeleton": [
    "1. 對F(x,y)=0兩邊對x求導(注意y也是x的函數)",
    "2. 解出dy/dx",
    "3. 代入點求切線斜率",
    "4. 法線斜率=-1/切線斜率"
   ],
   "variation": [
    "求垂直切線或水平切線",
    "二階導數判斷凹凸性",
    "參數方程求導"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P3",
     "question": "Section A/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "隱函數 x²+y²=25，求 dy/dx。",
     "stemEn": "Implicit x²+y²=25; dy/dx.",
     "answerZh": "2x+2y·y'=0 → y' = -x/y。",
     "answerEn": "y'=-x/y.",
     "marks": [
      {
       "content": "兩邊對 x 求導",
       "pts": 1
      },
      {
       "content": "y² 用鏈式",
       "pts": 1
      },
      {
       "content": "-x/y",
       "pts": 1
      }
     ],
     "lossZh": "漏 y² 的 y'。",
     "lossEn": "Missing y' for y².",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "x³+y³=6xy，求 dy/dx（隱函數）。",
     "stemEn": "Implicit x³+y³=6xy; dy/dx.",
     "answerZh": "3x²+3y²y'=6y+6xy' → y'(3y²-6x)=6y-3x² → y'=(6y-3x²)/(3y²-6x)。",
     "answerEn": "y'=(6y-3x²)/(3y²-6x).",
     "marks": [
      {
       "content": "兩邊求導",
       "pts": 1
      },
      {
       "content": "6xy 用乘積法則",
       "pts": 1
      },
      {
       "content": "解 y'",
       "pts": 1
      }
     ],
     "lossZh": "6xy 的導數錯。",
     "lossEn": "Wrong derivative of 6xy.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "x²+2y²=9 在點 (1,2) 處的切線方程。",
     "stemEn": "Tangent to x²+2y²=9 at (1,2).",
     "answerZh": "2x+4y·y'=0 → y'=-x/(2y)；在 (1,2)：斜率=-1/4；切線 y-2=(-1/4)(x-1)。",
     "answerEn": "y-2 = -¼(x-1).",
     "marks": [
      {
       "content": "隱函數求導",
       "pts": 1
      },
      {
       "content": "代點求斜率",
       "pts": 1
      },
      {
       "content": "點斜式",
       "pts": 1
      }
     ],
     "lossZh": "代點時 x、y 搞混。",
     "lossEn": "Swapping x,y at point.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-m2-10-02",
   "titleZh": "分部積分法與三角函數積分",
   "titleEn": "Integration by parts and trigonometric integrals",
   "coreTopics": [
    "m2-10"
   ],
   "relatedTopics": [
    "m2-03"
   ],
   "stem": "分部積分x*sinx dx，三角降冪sin^2(x) dx",
   "stemEn": "Integration by parts x*sinx dx, trigonometric reduction sin^2(x) dx",
   "solutionSkeleton": [
    "1. 分部積分: int(u dv)=uv-int(v du)，選u用LIATE法則",
    "2. 降冪: sin^2(x)=(1-cos2x)/2",
    "3. cos^2(x)=(1+cos2x)/2",
    "4. 指數函數: int(e^(ax))=e^(ax)/a"
   ],
   "variation": [
    "int(x^n * e^x)需多次分部",
    "int(sinax cosbx)用積化和差",
    "有理函數分解為部分分式後積分"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P3",
     "question": "Section A/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "求 ∫x·eˣ dx。",
     "stemEn": "Integrate x eˣ.",
     "answerZh": "分部：x eˣ - ∫eˣ dx = x eˣ - eˣ + C = eˣ(x-1)+C。",
     "answerEn": "eˣ(x-1)+C.",
     "marks": [
      {
       "content": "選 u=x, dv=eˣdx",
       "pts": 1
      },
      {
       "content": "分部公式",
       "pts": 1
      },
      {
       "content": "eˣ(x-1)+C",
       "pts": 1
      }
     ],
     "lossZh": "分部次序選錯。",
     "lossEn": "Wrong u/dv choice.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 ∫x·sin x dx。",
     "stemEn": "Integrate x sin x.",
     "answerZh": "u=x, dv=sin x dx → -x cos x + ∫cos x dx = -x cos x + sin x + C。",
     "answerEn": "-x cos x + sin x + C.",
     "marks": [
      {
       "content": "分部",
       "pts": 1
      },
      {
       "content": "-x cos x",
       "pts": 1
      },
      {
       "content": "+ sin x + C",
       "pts": 1
      }
     ],
     "lossZh": "符號（∫sinx 的負號）。",
     "lossEn": "Sign error.",
     "years": [
      "2022"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求 ∫₀¹ x e⁻ˣ dx。",
     "stemEn": "Definite integral x e⁻ˣ from 0 to 1.",
     "answerZh": "∫x e⁻ˣdx = -x e⁻ˣ - e⁻ˣ = -(x+1)e⁻ˣ；0→1：[-2/e] - [-1] = 1 - 2/e。",
     "answerEn": "1 - 2/e.",
     "marks": [
      {
       "content": "分部（含負號）",
       "pts": 1
      },
      {
       "content": "代入上下限",
       "pts": 1
      },
      {
       "content": "1-2/e",
       "pts": 1
      }
     ],
     "lossZh": "積分或代入上下限錯。",
     "lossEn": "Wrong integral or limits.",
     "years": [
      "2021"
     ]
    }
   ]
  },
  {
   "id": "mp-m2-05-02",
   "titleZh": "矩陣表示幾何變換",
   "titleEn": "Matrix representation of geometric transformations",
   "coreTopics": [
    "m2-05"
   ],
   "relatedTopics": [
    "na-08"
   ],
   "stem": "給定變換矩陣M，求變換後坐標，行列式幾何意義，逆矩陣",
   "stemEn": "Given transformation matrix M, find image of point, determinant meaning, inverse matrix",
   "solutionSkeleton": [
    "1. 變換後坐標=M*[x,y]^T",
    "2. |det(M)|=面積放大倍數",
    "3. det>0保方向 det<0反方向",
    "4. M^(-1)表示逆變換"
   ],
   "variation": [
    "反射變換矩陣(關於x軸y軸y=x)",
    "旋轉矩陣(逆時針theta角)",
    "連續變換=矩陣乘積(注意順序)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P3",
     "question": "Section A/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "矩陣 [cosθ -sinθ; sinθ cosθ] 的幾何意義？",
     "stemEn": "Geometric meaning of rotation matrix.",
     "answerZh": "繞原點逆時針旋轉 θ。",
     "answerEn": "Rotation by θ anticlockwise.",
     "marks": [
      {
       "content": "旋轉矩陣",
       "pts": 1
      },
      {
       "content": "逆時針 θ",
       "pts": 1
      }
     ],
     "lossZh": "方向説反。",
     "lossEn": "Wrong direction.",
     "years": [
      "2018"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "點 (1,0) 經 [0 -1;1 0] 變換後的位置。",
     "stemEn": "Image of (1,0) under [0 -1;1 0].",
     "answerZh": "矩陣×向量 = [0·1-1·0; 1·1+0·0] = (0,1)。",
     "answerEn": "(0,1).",
     "marks": [
      {
       "content": "矩陣乘向量",
       "pts": 1
      },
      {
       "content": "(0,1)",
       "pts": 1
      }
     ],
     "lossZh": "乘錯方向（向量×矩陣）。",
     "lossEn": "Multiplying wrong order.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "求反射於直線 y=x 的變換矩陣。",
     "stemEn": "Reflection matrix across y=x.",
     "answerZh": "[0 1;1 0]。",
     "answerEn": "[0 1;1 0].",
     "marks": [
      {
       "content": "反射特性 (x,y)→(y,x)",
       "pts": 1
      },
      {
       "content": "矩陣 [0 1;1 0]",
       "pts": 1
      }
     ],
     "lossZh": "反射矩陣記錯。",
     "lossEn": "Wrong reflection matrix.",
     "years": [
      "2022"
     ]
    }
   ]
  },
  {
   "id": "mp-m2-04-02",
   "titleZh": "向量點積與幾何證明",
   "titleEn": "Dot product and geometric proof",
   "coreTopics": [
    "m2-04"
   ],
   "relatedTopics": [
    "ms-07"
   ],
   "stem": "用向量證明兩直線垂直或平行，求兩向量夾角",
   "stemEn": "Use vectors to prove perpendicular/parallel, find angle between vectors",
   "solutionSkeleton": [
    "1. 垂直: a*b=0",
    "2. 平行: a=kb(分量成比例)",
    "3. 共線: r=OA+t*AB",
    "4. 夾角cos(theta)=(a*b)/(|a||b|)"
   ],
   "variation": [
    "用向量證三角形性質(中線高角平分線)",
    "求點到直線的向量距離",
    "向量法證四點共圓"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P3",
     "question": "Section B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "a=(1,2), b=(3,4)，求 a·b 和 a·a。",
     "stemEn": "Dot products.",
     "answerZh": "a·b = 3+8 = 11；a·a = 1+4 = 5。",
     "answerEn": "11, 5.",
     "marks": [
      {
       "content": "點積公式",
       "pts": 1
      },
      {
       "content": "11、5",
       "pts": 1
      }
     ],
     "lossZh": "點積算錯。",
     "lossEn": "Wrong dot.",
     "years": [
      "2019"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "a=(2,1), b=(-1,2)，求 cosθ（夾角餘弦）。",
     "stemEn": "cos of angle between a,b.",
     "answerZh": "a·b = -2+2 = 0 → cosθ = 0 → θ=90°。",
     "answerEn": "cosθ=0.",
     "marks": [
      {
       "content": "a·b",
       "pts": 1
      },
      {
       "content": "|a||b|=5·√5",
       "pts": 1
      },
      {
       "content": "cosθ=0",
       "pts": 1
      }
     ],
     "lossZh": "分母漏模長。",
     "lossEn": "Missing magnitudes.",
     "years": [
      "2021"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "證明 a·b = |a||b|cosθ 中，若 a⊥b 則 a·b=0（向量證明）。",
     "stemEn": "Show a⊥b → a·b=0.",
     "answerZh": "由勾股：|a+b|²=|a|²+|b|² 當垂直 → |a|²+2a·b+|b|²=|a|²+|b|² → a·b=0。",
     "answerEn": "Pythagoras expansion gives a·b=0.",
     "marks": [
      {
       "content": "垂直 ⇔ 勾股",
       "pts": 1
      },
      {
       "content": "展開 |a+b|²",
       "pts": 1
      },
      {
       "content": "a·b=0",
       "pts": 1
      }
     ],
     "lossZh": "展開漏 2a·b 交叉項。",
     "lossEn": "Missing 2a·b cross term.",
     "years": [
      "2023"
     ]
    }
   ]
  },
  {
   "id": "mp-m2-03-02",
   "titleZh": "輔助角公式R-formula應用",
   "titleEn": "Auxiliary angle R-formula",
   "coreTopics": [
    "m2-03"
   ],
   "relatedTopics": [
    "m2-08"
   ],
   "stem": "將a*sinx+b*cosx化為R*sin(x+alpha)，求最大值和對應x",
   "stemEn": "Express a*sinx+b*cosx as R*sin(x+alpha), find maximum and corresponding x",
   "solutionSkeleton": [
    "1. R=sqrt(a^2+b^2)",
    "2. tan(alpha)=b/a",
    "3. 化為R*sin(x+alpha)",
    "4. 最大值=R(當sin=1時)"
   ],
   "variation": [
    "求最小值和對應x",
    "解方程a*sinx+b*cosx=c(用R-formula)",
    "求函數週期(若含2x則週期pi)"
   ],
   "appearances": [
    {
     "year": "estimated",
     "source": "estimated",
     "paper": "P3",
     "question": "Section A/B"
    }
   ],
   "variants": [
    {
     "difficulty": "basic",
     "stemZh": "將 sinθ + cosθ 寫成 R sin(θ+α)。",
     "stemEn": "Express sinθ+cosθ as R sin(θ+α).",
     "answerZh": "R=√2，α=45° → √2 sin(θ+45°)。",
     "answerEn": "√2 sin(θ+45°).",
     "marks": [
      {
       "content": "R=√(a²+b²)",
       "pts": 1
      },
      {
       "content": "tanα=b/a=1",
       "pts": 1
      },
      {
       "content": "√2 sin(θ+45°)",
       "pts": 1
      }
     ],
     "lossZh": "R 或 α 算錯。",
     "lossEn": "Wrong R or α.",
     "years": [
      "2020"
     ]
    },
    {
     "difficulty": "intermediate",
     "stemZh": "求 sinθ + cosθ 的最大值（θ 為任意角）。",
     "stemEn": "Max of sinθ+cosθ.",
     "answerZh": "= √2 sin(θ+45°) → 最大值 √2。",
     "answerEn": "√2.",
     "marks": [
      {
       "content": "輔助角",
       "pts": 1
      },
      {
       "content": "振幅 √2",
       "pts": 1
      },
      {
       "content": "最大 √2",
       "pts": 1
      }
     ],
     "lossZh": "以為最大值 2。",
     "lossEn": "Thinking max 2.",
     "years": [
      "2022"
     ]
    },
    {
     "difficulty": "challenge",
     "stemZh": "解 3sinθ + 4cosθ = 5（0≤θ<360°）。",
     "stemEn": "Solve 3sinθ+4cosθ=5.",
     "answerZh": "R=5，α=arctan(4/3)≈53.13°；5sin(θ+53.13°)=5 → sin(θ+α)=1 → θ+α=90° → θ≈36.87°。",
     "answerEn": "θ≈36.9°.",
     "marks": [
      {
       "content": "輔助角 R=5",
       "pts": 1
      },
      {
       "content": "sin(...)=1",
       "pts": 1
      },
      {
       "content": "θ≈36.9°",
       "pts": 1
      }
     ],
     "lossZh": "漏 α 的計算或範圍。",
     "lossEn": "Wrong α or range.",
     "years": [
      "2021"
     ]
    }
   ]
  }
 ]
};

if (typeof module !== "undefined" && module.exports) module.exports = DSE_MATH_GRAPH;
