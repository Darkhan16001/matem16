
"use strict";

// ==========================================
// §15 — САННЫҢ ЛОГАРИФМІ
// ==========================================

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Санның логарифмі. Негізгі логарифмдік тепе-теңдік. Логарифмнің қасиеттері",
  goal: "Логарифмнің анықтамасын меңгеру, негізгі логарифмдік тепе-теңдікті қолдану, көбейтінді, бөлінді, дәреже және түбір логарифмдерін есептеу, негізді ауыстыру формуласын пайдалану."
};

// ==========================================
// 5 ТҮСІНДІРМЕ
// ТЕОРИЯДА ӨЗІНДІК ЖҰМЫС ЖОҚ
// ==========================================

const theory = [
  {
    title: "Санның логарифмі дегеніміз не?",

    definition:
      "Берілген оң санды алу үшін белгілі бір оң негізді қандай дәрежеге шығару қажет екенін көрсететін дәреже көрсеткіші логарифм деп аталады. Логарифм дәрежелеуге кері амал болып саналады.",

    explain:
      "Мысалы, 32 санының екі негізіндегі логарифмін табайық. Екі санының бірінші дәрежесі 2, екінші дәрежесі 4, үшінші дәрежесі 8, төртінші дәрежесі 16, бесінші дәрежесі 32 болады. Демек, екі санын бесінші дәрежеге шығарғанда 32 алынады. Сондықтан 32 санының екі негізіндегі логарифмі беске тең. Логарифм негізі төменгі жағында, аргументі оң жағында жазылады.",

    rule:
      "Логарифмді есептегенде «негізді қандай дәрежеге шығарсақ, аргумент шығады?» деген сұраққа жауап береміз.",

    formula:
      M`\log_a b=c\iff a^c=b`,

    steps: [
      M`\log_2 32=x`,
      M`2^x=32`,
      M`32=2^5`,
      M`2^x=2^5`,
      M`x=5`
    ],

    warning:
      "Логарифмнің негізі оң және 1-ге тең емес болуы керек. Аргумент міндетті түрде оң болады."
  },

  {
    title: "Негізгі логарифмдік тепе-теңдік",

    definition:
      "Логарифм мен дәрежелеу бір-біріне кері амалдар. Сондықтан негізді сол негіз бойынша алынған логарифмге тең дәрежеге шығарсақ, нәтижесінде логарифмнің аргументі шығады.",

    explain:
      "Мысалы, бес санының қандай дәрежесі жиырма беске тең екенін анықтаймыз. Бестің квадраты жиырма бес болғандықтан, жиырма бестің бес негізіндегі логарифмі екіге тең. Енді бес санын осы логарифмге тең дәрежеге шығарсақ, қайтадан жиырма бес шығады. Бұл заңдылық негізгі логарифмдік тепе-теңдік деп аталады.",

    rule:
      "Дәреженің негізі мен логарифмнің негізі бірдей болса, логарифмнің аргументі нәтиже болады.",

    formula:
      M`a^{\log_a b}=b`,

    steps: [
      M`5^{\log_5 25}`,
      M`\log_5 25=2`,
      M`5^{\log_5 25}=5^2`,
      M`5^2=25`,
      M`\text{Жауабы: }25`
    ],

    warning:
      "Негіздер әртүрлі болса, негізгі логарифмдік тепе-теңдікті тікелей қолдануға болмайды."
  },

  {
    title: "Көбейтінді мен бөліндінің логарифмі",

    definition:
      "Оң сандардың көбейтіндісінің логарифмі олардың логарифмдерінің қосындысына тең. Екі оң санның бөліндісінің логарифмі олардың логарифмдерінің айырмасына тең.",

    explain:
      "Мысалы, сегіз бен төрттің екі негізіндегі логарифмдерін қосайық. Сегіздің логарифмі үш, төрттің логарифмі екі болады. Нәтижесі бес. Ал сегіз бен төрттің көбейтіндісі отыз екі, оның екі негізіндегі логарифмі де бес. Осылайша көбейтіндінің логарифмі қосындыға айналады. Бөліндіде логарифмдер азайтылады.",

    rule:
      "Бірдей негіздегі логарифмдерді қосқанда аргументтер көбейтіледі, ал азайтқанда бөлінеді.",

    formula:
      M`\begin{aligned}
      \log_a(bc)&=\log_a b+\log_a c\\
      \log_a\frac{b}{c}&=\log_a b-\log_a c
      \end{aligned}`,

    steps: [
      M`\log_2 8+\log_2 4`,
      M`=\log_2(8\cdot4)`,
      M`=\log_2 32`,
      M`=5`
    ],

    warning:
      "Аргументтердің қосындысының логарифмі олардың логарифмдерінің қосындысына жалпы жағдайда тең болмайды."
  },

  {
    title: "Дәреженің және түбірдің логарифмі",

    definition:
      "Оң санның дәрежесінің логарифмін есептегенде дәреже көрсеткішін логарифм алдына көбейткіш ретінде шығаруға болады. Түбірді бөлшек дәрежеге айналдыруға болады.",

    explain:
      "Мысалы, тоғыздың квадратын үш негізі бойынша логарифмдейік. Тоғыздың үш негізіндегі логарифмі екіге тең. Квадрат дәрежесінің көрсеткіші де екі. Сондықтан екі мен екіні көбейтіп, төрт аламыз. Түбірдің логарифмін есептегенде квадрат түбірге бір екінші, куб түбірге бір үшінші көрсеткіші сәйкес келеді.",

    rule:
      "Дәреже көрсеткіші логарифм алдына көбейткіш болып шығады. Түбір үшін бөлшек көрсеткіш қолданылады.",

    formula:
      M`\begin{aligned}
      \log_a(b^r)&=r\log_a b\\
      \log_a\sqrt[n]{b}&=\frac{1}{n}\log_a b
      \end{aligned}`,

    steps: [
      M`\log_3(9^2)`,
      M`=2\log_3 9`,
      M`=2\cdot2`,
      M`=4`
    ],

    warning:
      "Бұл формулаларды қолданғанда логарифм аргументінің анықталу шарттарын міндетті түрде ескеріңдер."
  },

  {
    title: "Ондық, натурал логарифм және негізді ауыстыру",

    definition:
      "Негізі он болатын логарифм ондық логарифм деп аталады және lg арқылы белгіленеді. Негізі e болатын логарифм натурал логарифм деп аталады және ln арқылы белгіленеді.",

    explain:
      "Ғылыми калькуляторларда көбінесе log және ln батырмалары болады. Егер екі негізіндегі логарифмді есептеу қажет болса, оны натурал логарифмдер қатынасы арқылы табуға болады. Мысалы, сегіздің екі негізіндегі логарифмі ln8 санын ln2 санына бөлгенге тең. Сегіз екінің кубы болғандықтан, нәтиже үш болады.",

    rule:
      "Негізді ауыстырғанда алымға аргументтің логарифмін, бөлімге бастапқы негіздің логарифмін жазамыз.",

    formula:
      M`\log_a b=\frac{\ln b}{\ln a}
      =\frac{\lg b}{\lg a}`,

    steps: [
      M`\log_2 8`,
      M`=\frac{\ln8}{\ln2}`,
      M`=\frac{3\ln2}{\ln2}`,
      M`=3`
    ],

    warning:
      "Негізді ауыстыру кезінде алым мен бөлімнің орындарын шатастырмаңдар."
  }
];

// ==========================================
// 10 КОНСПЕКТ
// ӘРҚАЙСЫСЫНДА 2 ӨЗІНДІК ЕСЕП
// ==========================================

const notes = [
  {
    title: "Логарифмнің анықтамасы",

    text:
      "Логарифм — берілген оң санды алу үшін белгілі негізді қандай дәрежеге шығару қажеттігін көрсететін сан. Логарифм дәрежелеудің кері амалы. Оны есептегенде негізді, аргументті және дәреже көрсеткішін анықтау керек.",

    formula:
      M`\log_a b=c\iff a^c=b`,

    example: [
      M`\log_2 16=x`,
      M`2^x=16`,
      M`2^4=16`,
      M`x=4`
    ],

    self: [
      {
        q: M`\log_3 27`,
        steps: [
          M`3^3=27`,
          M`\log_3 27=3`
        ],
        answer: M`3`
      },
      {
        q: M`\log_5 125`,
        steps: [
          M`5^3=125`,
          M`\log_5 125=3`
        ],
        answer: M`3`
      }
    ]
  },

  {
    title: "Логарифмнің анықталу шарттары",

    text:
      "Логарифмнің негізі нөлден үлкен және бірге тең емес болуы тиіс. Аргумент нөлден үлкен болуы керек. Егер логарифм аргументінде айнымалы болса, алдымен сол өрнектің оң болу шартын табамыз.",

    formula:
      M`a>0,\quad a\ne1,\quad b>0`,

    example: [
      M`y=\log_2(x-3)`,
      M`x-3>0`,
      M`x>3`
    ],

    self: [
      {
        q: M`y=\log_3(x+4)`,
        steps: [
          M`x+4>0`
        ],
        answer: M`x>-4`
      },
      {
        q: M`y=\log_5(2x-6)`,
        steps: [
          M`2x-6>0`,
          M`2x>6`
        ],
        answer: M`x>3`
      }
    ]
  },

  {
    title: "Бірдің және негіздің логарифмі",

    text:
      "Кез келген жарамды негіздегі бір санының логарифмі нөлге тең, себебі негіздің нөлінші дәрежесі бірге тең. Негіздің өз логарифмі бірге тең, себебі оның бірінші дәрежесі өзіне тең.",

    formula:
      M`\log_a1=0,\qquad\log_a a=1`,

    example: [
      M`\log_7 1+\log_7 7`,
      M`=0+1`,
      M`=1`
    ],

    self: [
      {
        q: M`\log_9 1+\log_9 9`,
        steps: [M`=0+1`],
        answer: M`1`
      },
      {
        q: M`3\log_2 2+\log_2 1`,
        steps: [M`=3\cdot1+0`],
        answer: M`3`
      }
    ]
  },

  {
    title: "Негізгі логарифмдік тепе-теңдік",

    text:
      "Дәреженің негізі мен логарифмнің негізі бірдей болған жағдайда олардың өзара кері амал екені байқалады. Мұндай өрнектің нәтижесі логарифмнің аргументіне тең.",

    formula:
      M`a^{\log_a b}=b`,

    example: [
      M`3^{\log_3 11}`,
      M`=11`
    ],

    self: [
      {
        q: M`2^{\log_2 17}`,
        steps: [
          M`a^{\log_a b}=b`
        ],
        answer: M`17`
      },
      {
        q: M`7^{\log_7 9}`,
        steps: [
          M`a^{\log_a b}=b`
        ],
        answer: M`9`
      }
    ]
  },

  {
    title: "Көбейтіндінің логарифмі",

    text:
      "Екі оң санның көбейтіндісінің логарифмі олардың жеке логарифмдерінің қосындысына тең. Бір негіздегі логарифмдердің қосындысын бір логарифмге біріктіру үшін аргументтерді көбейтеміз.",

    formula:
      M`\log_a(bc)=\log_a b+\log_a c`,

    example: [
      M`\log_2 4+\log_2 8`,
      M`=\log_2 32`,
      M`=5`
    ],

    self: [
      {
        q: M`\log_3 3+\log_3 9`,
        steps: [
          M`=\log_3 27`
        ],
        answer: M`3`
      },
      {
        q: M`\log_2 8+\log_2 16`,
        steps: [
          M`=\log_2 128`
        ],
        answer: M`7`
      }
    ]
  },

  {
    title: "Бөліндінің логарифмі",

    text:
      "Екі оң санның бөліндісінің логарифмі бірінші санның логарифмінен екінші санның логарифмін азайтқанға тең. Сондықтан бірдей негіздегі екі логарифмнің айырмасын бір логарифмге біріктіруге болады.",

    formula:
      M`\log_a\frac{b}{c}=\log_a b-\log_a c`,

    example: [
      M`\log_2 32-\log_2 4`,
      M`=\log_2 8`,
      M`=3`
    ],

    self: [
      {
        q: M`\log_3 81-\log_3 3`,
        steps: [
          M`=\log_3 27`
        ],
        answer: M`3`
      },
      {
        q: M`\log_2 64-\log_2 8`,
        steps: [
          M`=\log_2 8`
        ],
        answer: M`3`
      }
    ]
  },

  {
    title: "Дәреженің логарифмі",

    text:
      "Дәреже көрсеткішін логарифмнің алдына көбейткіш ретінде шығаруға болады. Бұл қасиет үлкен дәрежелердің логарифмін жеңіл есептеуге көмектеседі.",

    formula:
      M`\log_a(b^n)=n\log_a b,\qquad b>0`,

    example: [
      M`\log_2(4^3)`,
      M`=3\log_2 4`,
      M`=3\cdot2`,
      M`=6`
    ],

    self: [
      {
        q: M`\log_3(9^2)`,
        steps: [
          M`=2\log_3 9`,
          M`=2\cdot2`
        ],
        answer: M`4`
      },
      {
        q: M`\log_2(8^2)`,
        steps: [
          M`=2\log_2 8`,
          M`=2\cdot3`
        ],
        answer: M`6`
      }
    ]
  },

  {
    title: "Түбірдің логарифмі",

    text:
      "Оң санның квадрат түбірі оның бір екінші дәрежесіне, ал куб түбірі бір үшінші дәрежесіне тең. Осы қасиетті пайдаланып, түбірдің логарифмін бөлшек көбейткіш арқылы есептеуге болады.",

    formula:
      M`\log_a\sqrt[n]{b}=\frac1n\log_a b`,

    example: [
      M`\log_2\sqrt{16}`,
      M`=\frac12\log_2 16`,
      M`=\frac12\cdot4`,
      M`=2`
    ],

    self: [
      {
        q: M`\log_3\sqrt{81}`,
        steps: [
          M`=\frac12\log_3 81`,
          M`=\frac12\cdot4`
        ],
        answer: M`2`
      },
      {
        q: M`\log_2\sqrt[3]{64}`,
        steps: [
          M`=\frac13\log_2 64`,
          M`=\frac13\cdot6`
        ],
        answer: M`2`
      }
    ]
  },

  {
    title: "Ондық және натурал логарифм",

    text:
      "Негізі он болатын логарифм ондық логарифм деп аталады және lg арқылы жазылады. Негізі e болатын логарифм натурал логарифм деп аталады және ln таңбасымен белгіленеді. e саны жуық түрде 2,71828-ге тең.",

    formula:
      M`\lg x=\log_{10}x,\qquad\ln x=\log_e x`,

    example: [
      M`\lg1000`,
      M`=\log_{10}(10^3)`,
      M`=3`
    ],

    self: [
      {
        q: M`\lg100`,
        steps: [
          M`100=10^2`
        ],
        answer: M`2`
      },
      {
        q: M`\ln(e^4)`,
        steps: [
          M`\ln(e^4)=4\ln e`,
          M`\ln e=1`
        ],
        answer: M`4`
      }
    ]
  },

  {
    title: "Негізді ауыстыру формуласы",

    text:
      "Логарифмнің негізін ауыстыру формуласы кез келген жарамды негіздегі логарифмді басқа негіз арқылы есептеуге мүмкіндік береді. Ғылыми калькулятордағы log немесе ln батырмаларын пайдалануға болады.",

    formula:
      M`\log_a b=\frac{\ln b}{\ln a}`,

    example: [
      M`\log_2 32`,
      M`=\frac{\ln32}{\ln2}`,
      M`=\frac{5\ln2}{\ln2}`,
      M`=5`
    ],

    self: [
      {
        q: M`\frac{\lg1000}{\lg10}`,
        steps: [
          M`=\frac31`
        ],
        answer: M`3`
      },
      {
        q: M`\frac{\ln81}{\ln3}`,
        steps: [
          M`=\frac{4\ln3}{\ln3}`
        ],
        answer: M`4`
      }
    ]
  }
];

// ==========================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// ==========================================

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,

    tasks: [
      {
        q: M`\log_2 8`,
        value: 3,
        steps: [M`2^3=8`, M`\text{Жауабы: }3`]
      },
      {
        q: M`\log_3 81`,
        value: 4,
        steps: [M`3^4=81`, M`\text{Жауабы: }4`]
      },
      {
        q: M`\log_5 25`,
        value: 2,
        steps: [M`5^2=25`, M`\text{Жауабы: }2`]
      },
      {
        q: M`\log_7 1`,
        value: 0,
        steps: [M`7^0=1`, M`\text{Жауабы: }0`]
      },
      {
        q: M`\lg1000`,
        value: 3,
        steps: [M`1000=10^3`, M`\text{Жауабы: }3`]
      }
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,

    tasks: [
      {
        q: M`\log_2\frac1{16}`,
        value: -4,
        steps: [
          M`\frac1{16}=2^{-4}`,
          M`\log_2(2^{-4})=-4`
        ]
      },
      {
        q: M`\log_9 3`,
        value: 0.5,
        steps: [
          M`9^{\frac12}=3`,
          M`\text{Жауабы: }\frac12`
        ]
      },
      {
        q: M`\log_4 8`,
        value: 1.5,
        steps: [
          M`4^x=8`,
          M`2^{2x}=2^3`,
          M`2x=3`,
          M`x=\frac32`
        ]
      },
      {
        q: M`\log_3 9+\log_3 27`,
        value: 5,
        steps: [
          M`=2+3`,
          M`=5`
        ]
      },
      {
        q: M`\log_5 125-\log_5 5`,
        value: 2,
        steps: [
          M`=3-1`,
          M`=2`
        ]
      }
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,

    tasks: [
      {
        q: M`\log_2(8\cdot16)`,
        value: 7,
        steps: [
          M`=\log_2 8+\log_2 16`,
          M`=3+4`,
          M`=7`
        ]
      },
      {
        q: M`\log_3\frac{243}{9}`,
        value: 3,
        steps: [
          M`=\log_3 27`,
          M`=3`
        ]
      },
      {
        q: M`\log_2(4^3)`,
        value: 6,
        steps: [
          M`=3\log_2 4`,
          M`=3\cdot2`,
          M`=6`
        ]
      },
      {
        q: M`\log_5\sqrt{625}`,
        value: 2,
        steps: [
          M`\sqrt{625}=25`,
          M`\log_5 25=2`
        ]
      },
      {
        q: M`\frac{\ln64}{\ln2}`,
        value: 6,
        steps: [
          M`64=2^6`,
          M`=\frac{6\ln2}{\ln2}`,
          M`=6`
        ]
      }
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,

    tasks: [
      {
        q: M`2^{\log_2 13}+\log_3 27`,
        value: 16,
        steps: [
          M`2^{\log_2 13}=13`,
          M`\log_3 27=3`,
          M`13+3=16`
        ]
      },
      {
        q: M`\log_2 48-\log_2 3`,
        value: 4,
        steps: [
          M`=\log_2\frac{48}{3}`,
          M`=\log_2 16`,
          M`=4`
        ]
      },
      {
        q: M`\log_4 2+\log_4 8`,
        value: 2,
        steps: [
          M`=\log_4(2\cdot8)`,
          M`=\log_4 16`,
          M`=2`
        ]
      },
      {
        q: M`\log_3(9^3)-\log_3 27`,
        value: 3,
        steps: [
          M`=3\log_3 9-\log_3 27`,
          M`=3\cdot2-3`,
          M`=3`
        ]
      },
      {
        q: M`\frac{\lg125}{\lg5}+\log_2\frac18`,
        value: 0,
        steps: [
          M`=\log_5 125+\log_2 2^{-3}`,
          M`=3+(-3)`,
          M`=0`
        ]
      }
    ]
  }
];

// ==========================================
// 3 ТОП — 15 СҰРАҚ
// ==========================================

const quiz = [
  {
    q: "Логарифм нені көрсетеді?",
    options: [
      "Сандардың қосындысын",
      "Негізді қандай дәрежеге шығару керегін",
      "Сандардың бөліндісін",
      "Квадрат түбірді"
    ],
    correct: 1
  },
  {
    q: "log₂8 нешеге тең?",
    options: ["2", "4", "3", "8"],
    correct: 2
  },
  {
    q: "Логарифм негізінің дұрыс шарты қандай?",
    options: [
      "Оң және 1-ге тең емес",
      "Теріс",
      "Нөл",
      "Тек 1"
    ],
    correct: 0
  },
  {
    q: "logₐ1 нешеге тең?",
    options: ["1", "a", "−1", "0"],
    correct: 3
  },
  {
    q: "logₐa нешеге тең?",
    options: ["0", "1", "a", "−1"],
    correct: 1
  },
  {
    q: "log₃27 нешеге тең?",
    options: ["9", "2", "3", "6"],
    correct: 2
  },
  {
    q: "Көбейтіндінің логарифмі неге тең?",
    options: [
      "Логарифмдердің қосындысына",
      "Логарифмдердің айырмасына",
      "Логарифмдердің көбейтіндісіне",
      "Логарифмдердің бөліндісіне"
    ],
    correct: 0
  },
  {
    q: "Бөліндінің логарифмі қалай есептеледі?",
    options: [
      "Қосу арқылы",
      "Көбейту арқылы",
      "Дәрежелеу арқылы",
      "Логарифмдерді азайту арқылы"
    ],
    correct: 3
  },
  {
    q: "log₂(2⁵) нешеге тең?",
    options: ["2", "5", "10", "32"],
    correct: 1
  },
  {
    q: "Ондық логарифмнің негізі?",
    options: ["2", "e", "10", "3"],
    correct: 2
  },
  {
    q: "Натурал логарифмнің негізі?",
    options: ["e", "10", "0", "1"],
    correct: 0
  },
  {
    q: "log₂(1/8) нәтижесі?",
    options: ["3", "8", "−8", "−3"],
    correct: 3
  },
  {
    q: "Негізгі логарифмдік тепе-теңдік қайсы?",
    options: [
      "a + b = ab",
      "a^(logₐb) = b",
      "logₐb = a + b",
      "logₐb = ab"
    ],
    correct: 1
  },
  {
    q: "log₄16 нешеге тең?",
    options: ["4", "8", "2", "16"],
    correct: 2
  },
  {
    q: "log₂8 + log₂4 нәтижесі?",
    options: ["5", "6", "12", "3"],
    correct: 0
  }
];

// ==========================================
// ҮЙ ЖҰМЫСЫ
// ==========================================

const homework = [
  {
    title: "1. Логарифмдерді есептеу",

    text:
      "Логарифмдерді анықтамасы бойынша есептеңдер. Аргументтерді тиісті негіздің дәрежесі түрінде жазыңдар. Шешімнің барлық қадамдарын дәптерге түсіріңдер.",

    formulas: [
      M`\log_2 128`,
      M`\log_3\frac1{81}`,
      M`\log_4 32`
    ]
  },

  {
    title: "2. Логарифмнің қасиеттері",

    text:
      "Көбейтінді, бөлінді, дәреже және негізді ауыстыру формулаларын қолданып есептерді шығарыңдар. Әр қадамда қандай қасиет қолданылғанын түсіндіріңдер.",

    formulas: [
      M`\log_2 12+\log_2 8-\log_2 3`,
      M`\log_3(27^2)-\log_3 9`,
      M`\frac{\ln125}{\ln5}`
    ]
  },

  {
    title: "3. Теориялық тапсырма",

    text:
      "«Логарифм және дәрежелеу арасындағы байланыс» тақырыбында 8–10 сөйлем жазыңдар. Логарифмнің үш қасиетіне мысал келтіріңдер және келесі сабақта ауызша түсіндіріңдер.",

    formulas: [
      M`\log_a b=c\iff a^c=b`,
      M`a^{\log_a b}=b`
    ]
  }
];

// ==========================================
// 37 СЛАЙДТЫ ҚҰРУ
// ==========================================

const slides = [
  { type: "intro", title: "Кіріспе" }
];

theory.forEach((_, i) => {
  slides.push({
    type: "theory",
    index: i,
    title: `Түсіндірме ${i + 1}`
  });
});

notes.forEach((_, i) => {
  slides.push({
    type: "note",
    index: i,
    title: `Конспект ${i + 1}`
  });
});

levels.forEach((_, i) => {
  slides.push({
    type: "level",
    index: i,
    title: `${i + 1}-деңгей`
  });
});

quiz.forEach((_, i) => {
  slides.push({
    type: "game",
    index: i,
    title: `${i % 3 + 1}-топ • ${i + 1}-сұрақ`
  });
});

slides.push(
  { type: "homework", title: "Үй жұмысы" },
  { type: "finish", title: "Қорытынды" }
);

// ==========================================
// АЙНЫМАЛЫЛАР
// ==========================================

let page = 0;

let individualScore = 0;
let teamScores = [0, 0, 0];

const completed = new Set();
const gameAnswers = new Map();

const TOTAL_SECONDS = 4800;

let secondsLeft = TOTAL_SECONDS;
let timerID = null;
let deadline = 0;

// ==========================================
// HTML ҚАУІПСІЗДІГІ
// ==========================================

function safe(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

// ==========================================
// ҚАТЕСІ ТҮЗЕТІЛГЕН ФОРМУЛАЛАР
// ==========================================

// 1. Формуланы HTML ішіне тікелей салмаймыз.
// 2. Барлық таңбаларды арнайы кодтаймыз.
// 3. MathJax SVG түрінде көрсетеді.
// 4. \boxed пайдаланбаймыз.

function math(tex) {
  const encoded = encodeURIComponent(String(tex));

  return `
    <div class="math" data-tex="${encoded}"></div>
  `;
}

// Егер ескі формула кездейсоқ көшірілсе,
// \boxed командасын алып тастаймыз.
// Жаңа теория мен есептерде ол жоқ.

function removeBoxed(tex) {
  const source = String(tex);
  const marker = "\\boxed{";

  let output = "";
  let i = 0;

  while (i < source.length) {
    if (!source.startsWith(marker, i)) {
      output += source[i];
      i++;
      continue;
    }

    i += marker.length;

    let depth = 1;
    let inside = "";

    while (i < source.length && depth > 0) {
      const char = source[i++];

      if (char === "{") {
        depth++;
        inside += char;
      } else if (char === "}") {
        depth--;
        if (depth > 0) inside += char;
      } else {
        inside += char;
      }
    }

    output += inside;
  }

  return output;
}

// ==========================================
// MATHJAX — ФОРМУЛАНЫ ЖЕКЕ SVG ЕТІП САЛУ
// ==========================================

let formulaVersion = 0;
let formulaQueue = Promise.resolve();

function drawFormulas() {
  const version = ++formulaVersion;

  const elements = Array.from(
    $("content").querySelectorAll(".math[data-tex]")
  );

  // Кітапхана дайын болмаса,
  // экранда мәнді түсінуге болатын мәтін тұрады.
  for (const element of elements) {
    const encoded = element.getAttribute("data-tex");
    const tex = removeBoxed(
      decodeURIComponent(encoded)
    );

    element.textContent = tex;
    element.classList.add("fallback");
  }

  formulaQueue = formulaQueue
    .then(async () => {
      if (!window.MathJax) {
        return;
      }

      await MathJax.startup.promise;

      if (
        typeof MathJax.tex2svgPromise !== "function"
      ) {
        return;
      }

      for (const element of elements) {
        if (version !== formulaVersion) return;
        if (!element.isConnected) continue;

        const encoded =
          element.getAttribute("data-tex");

        if (!encoded) continue;

        const tex = removeBoxed(
          decodeURIComponent(encoded)
        );

        try {
          const svg = await MathJax.tex2svgPromise(
            tex,
            { display: true }
          );

          if (version !== formulaVersion) return;
          if (!element.isConnected) continue;

          element.replaceChildren(svg);

          element.classList.remove("fallback");
          element.removeAttribute("data-tex");

        } catch (error) {
          element.textContent = tex;
          element.classList.add("fallback");

          console.error(
            "Формуланы көрсету қатесі:",
            tex,
            error
          );
        }
      }
    })
    .catch(error => {
      console.error("MathJax қатесі:", error);
    });
}

// ==========================================
// ДИЗАЙН КАРТОЧКАЛАРЫ
// ==========================================

function card(color, title, body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(steps) {
  return steps.map((step, i) => `
    <div class="step">
      <strong>${i + 1}-қадам</strong>
      ${math(step)}
    </div>
  `).join("");
}

// ==========================================
// КОНСПЕКТТЕГІ ЕКІ ӨЗІНДІК ЕСЕП
// ==========================================

function selfHTML(tasks, noteIndex) {
  return tasks.map((task, i) => {
    const id = `self_${noteIndex}_${i}`;

    return `
      <section class="self-task">

        <h3>✏️ ${i + 1}-өзіндік есеп</h3>

        ${math(task.q)}

        <p>
          Есепті алдымен дәптерге шығарыңдар.
          Содан кейін шешу жолын тексеріңдер.
        </p>

        <button class="action"
          data-toggle="${id}">
          Шешу жолын көрсету
        </button>

        <div id="${id}"
          class="solution"
          hidden>

          ${stepsHTML(task.steps)}

          <h3>Дұрыс жауап</h3>
          ${math(task.answer)}

        </div>

      </section>
    `;
  }).join("");
}

// ==========================================
// КІРІСПЕ
// ==========================================

function introHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §15. ${safe(lesson.title)}
      </h1>

      ${card("blue", "Сабақтың мақсаты", `
        <p>${safe(lesson.goal)}</p>
      `)}

      ${card("gold", "Логарифм анықтамасы",
        math(M`\log_a b=c\iff a^c=b`)
      )}

      ${card("purple", "Негізгі тепе-теңдік",
        math(M`a^{\log_a b}=b`)
      )}

      ${card("green", "Сабақтың құрылымы", `
        <p>5 толық түсіндірме</p>
        <p>10 конспект және 20 өзіндік есеп</p>
        <p>4 деңгей бойынша 20 есеп</p>
        <p>3 топқа арналған 15 сұрақ</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("blue", "80 минуттық жоспар", `
        <p>Кіріспе — 5 минут</p>
        <p>Теория — 20 минут</p>
        <p>Конспект және өзіндік жұмыс — 15 минут</p>
        <p>Деңгейлік есептер — 20 минут</p>
        <p>Топтық ойын — 15 минут</p>
        <p>Үй жұмысы және қорытынды — 5 минут</p>
      `)}

    </div>
  `;
}

// ==========================================
// ТҮСІНДІРМЕЛЕР
// ==========================================

function theoryHTML(i) {
  const t = theory[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТҮСІНДІРМЕ ${i + 1} / 5
      </div>

      <h2>${safe(t.title)}</h2>

      ${card("blue", "Анықтама", `
        <p>${safe(t.definition)}</p>
      `)}

      ${card("purple", "Толық түсіндірме", `
        <p>${safe(t.explain)}</p>
      `)}

      ${card("green", "Ереже", `
        <p>${safe(t.rule)}</p>
      `)}

      ${card("gold", "Формула",
        math(t.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(t.steps)
      )}

      ${card("red", "Маңызды ескерту", `
        <p>${safe(t.warning)}</p>
      `)}

    </div>
  `;
}

// ==========================================
// КОНСПЕКТІЛЕР
// ==========================================

function noteHTML(i) {
  const n = notes[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${i + 1} / 10
      </div>

      <h2>${safe(n.title)}</h2>

      <div class="notebook">
        <h3>✍ Дәптерге жазып алыңдар</h3>
        <p>${safe(n.text)}</p>
      </div>

      ${card("gold", "Негізгі формула",
        math(n.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(n.example)
      )}

      <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>

      <h2>Екі есеп</h2>

      ${selfHTML(n.self, i)}

    </div>
  `;
}

// ==========================================
// 4 ДЕҢГЕЙ — АВТОМАТТЫ ТЕКСЕРУ
// ==========================================

function levelHTML(i) {
  const level = levels[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМАЛАР ${i + 1} / 4
      </div>

      <h2>📐 ${safe(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>
          Әр дұрыс жауап: +${level.points} ұпай
        </span>
      </div>

      <p>
        Барлық есепті дәптерге шығарыңдар.
        Тексеру өрісіне соңғы сандық жауапты
        енгізіңдер. Бөлшекті 1/2 деп жазуға болады.
      </p>

      <div class="level-grid">

        ${level.tasks.map((task, j) => {
          const key = `${i}_${j}`;
          const done = completed.has(key);

          return `
            <section class="level-task">

              <h3>${j + 1}-есеп</h3>

              ${math(task.q)}

              <div class="answer-row">
                <input
                  id="answer_${key}"
                  type="text"
                  inputmode="decimal"
                  placeholder="Жауап"
                  ${done ? "disabled" : ""}
                >

                <button
                  data-check="${key}"
                  ${done ? "disabled" : ""}>
                  ${done ? "✓ Дұрыс" : "Тексеру"}
                </button>
              </div>

              <p id="feedback_${key}"
                class="feedback ${done ? "correct" : ""}">
                ${done
                  ? `✓ +${level.points} ұпай`
                  : "Жауапты енгізіңдер."}
              </p>

              <button class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div class="solution"
                id="solution_${key}"
                hidden>

                ${stepsHTML(task.steps)}

                <h3>Дұрыс жауап</h3>
                ${math(String(task.value))}

              </div>

            </section>
          `;
        }).join("")}

      </div>

    </div>
  `;
}

// ==========================================
// ТОПТЫҚ ОЙЫН
// ==========================================

function gameHTML(i) {
  const q = quiz[i];
  const currentTeam = i % 3;
  const chosen = gameAnswers.get(i);

  return `
    <div class="slide">

      <div class="eyebrow">
        ТОПТЫҚ ОЙЫН ${i + 1} / 15
      </div>

      <h2>🏆 ${currentTeam + 1}-топ жауап береді</h2>

      <div class="scores">
        ${teamScores.map((score, j) => `
          <div class="team
            ${j === currentTeam ? "current" : ""}">
            ${j + 1}-топ
            <strong>${score}</strong>
          </div>
        `).join("")}
      </div>

      ${card("gold", `${i + 1}-сұрақ`, `

        <p>${safe(q.q)}</p>

        <div class="answers">
          ${q.options.map((option, j) => {
            let cls = "";

            if (chosen !== undefined) {
              if (j === q.correct) {
                cls = "correct";
              } else if (j === chosen) {
                cls = "wrong";
              }
            }

            return `
              <button
                class="${cls}"
                data-choice="${j}"
                ${chosen !== undefined ? "disabled" : ""}>

                ${"ABCD"[j]}. ${safe(option)}

              </button>
            `;
          }).join("")}
        </div>

        <p>
          ${chosen === undefined
            ? "Төрт жауаптың біреуін таңдаңдар."
            : chosen === q.correct
              ? "✓ Дұрыс! +10 ұпай."
              : "Дұрыс жауап: " +
                safe(q.options[q.correct])}
        </p>

      `)}

      ${card("blue", "Ойын ережесі", `
        <p>Кезек: 1-топ → 2-топ → 3-топ.</p>
        <p>Әр дұрыс жауап үшін 10 ұпай беріледі.</p>
        <p>
          Жауап берген соң «Келесі»
          батырмасын басыңдар.
        </p>
      `)}

    </div>
  `;
}

// ==========================================
// ҮЙ ЖҰМЫСЫ
// ==========================================

function homeworkHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>

      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item, i) => card(
        ["blue", "gold", "green"][i],
        item.title,

        `<p>${safe(item.text)}</p>` +
        item.formulas.map(math).join("")
      )).join("")}

    </div>
  `;
}

// ==========================================
// ҚОРЫТЫНДЫ
// ==========================================

function finishHTML() {
  const maximum = Math.max(...teamScores);

  const winners = teamScores
    .map((score, i) =>
      score === maximum ? `${i + 1}-топ` : null
    )
    .filter(Boolean);

  const finished = gameAnswers.size === quiz.length;

  return `
    <div class="slide">

      <div class="eyebrow">
        САБАҚ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="gradient">
        Сабақ аяқталды!
      </h1>

      <div class="scores">
        ${teamScores.map((score, i) => `
          <div class="team">
            ${i + 1}-топ
            <strong>${score}</strong>
          </div>
        `).join("")}
      </div>

      ${card("green", "Топтық ойын нәтижесі", `
        <p>Жауап берілген сұрақтар:
          ${gameAnswers.size} / 15
        </p>

        <p>
          ${finished
            ? winners.join(", ") +
              (winners.length === 1
                ? " — жеңімпаз!"
                : " — тең ұпай жинады!")
            : "Ойын әлі толық аяқталмаған."}
        </p>
      `)}

      ${card("blue", "Деңгейлік есептер", `
        <p>
          Дұрыс шығарылған есептер:
          ${completed.size} / 20
        </p>
        <p>Жеке ұпай: ${individualScore}</p>
      `)}

      ${card("gold", "Бүгін не үйрендік?", `
        <p>Логарифмнің анықтамасын меңгердік.</p>
        <p>Логарифмдік тепе-теңдікті қолдандық.</p>
        <p>Көбейтінді мен бөліндіні логарифмдедік.</p>
        <p>Дәреже мен түбір логарифмін есептедік.</p>
        <p>Негізді ауыстыруды үйрендік.</p>
      `)}

      <h2>Сау болыңыздар!</h2>

    </div>
  `;
}

// ==========================================
// ЖАЛПЫ ҰПАЙ
// ==========================================

function updateScore() {
  const gameScore = teamScores.reduce(
    (sum, value) => sum + value,
    0
  );

  $("totalScore").textContent =
    individualScore + gameScore;
}

// ==========================================
// СЛАЙДТЫ КӨРСЕТУ
// ==========================================

function render() {
  const slide = slides[page];

  // Алдыңғы беттің формулалары
  // жаңа бетке араласпайды.
  formulaVersion++;

  const views = {
    intro: () => introHTML(),
    theory: () => theoryHTML(slide.index),
    note: () => noteHTML(slide.index),
    level: () => levelHTML(slide.index),
    game: () => gameHTML(slide.index),
    homework: () => homeworkHTML(),
    finish: () => finishHTML()
  };

  const content = $("content");

  content.innerHTML = views[slide.type]();
  content.scrollTop = 0;

  $("pageCounter").textContent =
    `${page + 1} / ${slides.length}`;

  $("pageTitle").textContent = slide.title;

  $("pageProgress").style.width =
    `${(page + 1) / slides.length * 100}%`;

  $("prevPage").disabled = page === 0;
  $("nextPage").disabled = page === slides.length - 1;

  document.querySelectorAll("[data-section]").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.section === slide.type
    );
  });

  updateScore();
  drawFormulas();
}

// ==========================================
// АРТҚА / КЕЛЕСІ БАТЫРМАЛАРЫ
// ==========================================

$("nextPage").addEventListener("click", () => {
  if (page < slides.length - 1) {
    page++;
    render();
  }
});

$("prevPage").addEventListener("click", () => {
  if (page > 0) {
    page--;
    render();
  }
});

// ==========================================
// БӨЛІМДЕР АРАСЫНДА ӨТУ
// ==========================================

document.querySelectorAll("[data-section]").forEach(btn => {
  btn.addEventListener("click", () => {
    const index = slides.findIndex(
      slide => slide.type === btn.dataset.section
    );

    if (index !== -1) {
      page = index;
      render();
    }
  });
});

// ==========================================
// СЛАЙД ІШІНДЕГІ БАТЫРМАЛАР
// ==========================================

$("content").addEventListener("click", event => {
  const toggle = event.target.closest("[data-toggle]");

  if (toggle) {
    const element = $(toggle.dataset.toggle);

    if (element) {
      element.hidden = !element.hidden;
    }

    return;
  }

  const check = event.target.closest("[data-check]");

  if (check) {
    checkLevel(check.dataset.check);
    return;
  }

  const choice = event.target.closest("[data-choice]");

  if (choice) {
    chooseAnswer(Number(choice.dataset.choice));
  }
});

// ==========================================
// ЕСЕП ЖАУАБЫН ТЕКСЕРУ
// ==========================================

function checkLevel(key) {
  if (completed.has(key)) return;

  const [i, j] = key.split("_").map(Number);

  const level = levels[i];
  const task = level.tasks[j];

  const input = $("answer_" + key);
  const feedback = $("feedback_" + key);

  const raw = input.value.trim();

  if (!raw) {
    feedback.textContent = "Алдымен жауап енгізіңдер.";
    return;
  }

  let answer;

  try {
    answer = calculate(raw);
  } catch (error) {
    feedback.textContent =
      "Жауапты сан немесе бөлшек түрінде жазыңдар.";
    return;
  }

  const tolerance =
    1e-7 * Math.max(1, Math.abs(task.value));

  if (Math.abs(answer - task.value) <= tolerance) {
    completed.add(key);
    individualScore += level.points;

    input.disabled = true;

    const button = document.querySelector(
      `[data-check="${key}"]`
    );

    if (button) {
      button.disabled = true;
      button.textContent = "✓ Дұрыс";
    }

    feedback.textContent =
      `✓ Дұрыс! +${level.points} ұпай`;

    feedback.classList.add("correct");

    updateScore();
  } else {
    feedback.textContent =
      "Қате жауап. Есептеу жолын қайта тексеріңдер.";
  }
}

// ==========================================
// ТОПТЫҚ ОЙЫН
// ==========================================

function chooseAnswer(choice) {
  const slide = slides[page];

  if (slide.type !== "game") return;

  const questionIndex = slide.index;

  if (gameAnswers.has(questionIndex)) return;

  gameAnswers.set(questionIndex, choice);

  if (choice === quiz[questionIndex].correct) {
    teamScores[questionIndex % 3] += 10;
  }

  render();
}

$("resetGame").addEventListener("click", () => {
  gameAnswers.clear();
  teamScores = [0, 0, 0];
  render();
});

// ==========================================
// ТОЛЫҚ ЭКРАН
// ==========================================

$("fullscreenBtn").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    console.warn("Толық экран қатесі:", error);
  }
});

// ==========================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ==========================================

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0");
}

function updateTimer() {
  $("remaining").textContent =
    formatTime(secondsLeft);

  $("elapsed").textContent =
    formatTime(TOTAL_SECONDS - secondsLeft);

  $("timeProgress").style.width =
    `${(TOTAL_SECONDS - secondsLeft) /
       TOTAL_SECONDS * 100}%`;
}

function pauseTimer() {
  if (timerID !== null) {
    clearInterval(timerID);
    timerID = null;
  }
}

function startTimer() {
  if (timerID !== null || secondsLeft <= 0) {
    return;
  }

  deadline = Date.now() + secondsLeft * 1000;

  timerID = setInterval(() => {
    secondsLeft = Math.max(
      0,
      Math.ceil((deadline - Date.now()) / 1000)
    );

    updateTimer();

    if (secondsLeft === 0) {
      pauseTimer();
    }
  }, 250);
}

function resetTimer() {
  pauseTimer();
  secondsLeft = TOTAL_SECONDS;
  updateTimer();
}

$("timerStart").addEventListener("click", startTimer);
$("timerPause").addEventListener("click", pauseTimer);
$("timerReset").addEventListener("click", resetTimer);

// ==========================================
// АЛМАТЫ УАҚЫТЫ
// ==========================================

function updateClock() {
  $("clock").textContent =
    new Intl.DateTimeFormat("kk-KZ", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
}

updateClock();
setInterval(updateClock, 1000);

// ==========================================
// КАЛЬКУЛЯТОРЛАР
// ==========================================

const calcValues = {
  basic: "",
  science: ""
};

const calcKeys = {
  basic: [
    "C", "⌫", "(", ")",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ],

  science: [
    "C", "⌫", "(", ")",
    "sin", "cos", "tg", "ctg",
    "√", "∛", "x²", "xʸ",
    "log", "ln", "π", "e",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ]
};

const calcMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "sin": "sin(",
  "cos": "cos(",
  "tg": "tan(",
  "ctg": "ctg(",
  "√": "sqrt(",
  "∛": "cbrt(",
  "log": "log(",
  "ln": "ln(",
  "π": "pi",
  "x²": "^2",
  "xʸ": "^"
};

// ==========================================
// БАТЫРМАЛАРДЫ ЖАСАУ
// ==========================================

function createCalculator(type) {
  const grid = $("keys-" + type);

  grid.replaceChildren();

  calcKeys[type].forEach(key => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = key;

    if (key === "C") {
      button.classList.add("clear");
    }

    if (key === "=") {
      button.classList.add("equal");
    }

    if ([
      "sin", "cos", "tg",
      "ctg", "log", "ln"
    ].includes(key)) {
      button.classList.add("trig");
    }

    if ([
      "+", "−", "×", "÷",
      "√", "∛", "x²", "xʸ"
    ].includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click", () => {
      pressCalculator(type, key);
    });

    grid.appendChild(button);
  });
}

// ==========================================
// КАЛЬКУЛЯТОРҒА МӘН ЕНГІЗУ
// ==========================================

function pressCalculator(type, key) {
  let value = calcValues[type];

  if (key === "C") {
    value = "";

  } else if (key === "⌫") {
    value = value === "Қате"
      ? ""
      : value.slice(0, -1);

  } else if (key === "=") {
    try {
      const result = calculate(value);
      value = String(Number(result.toPrecision(12)));
    } catch (error) {
      value = "Қате";
    }

  } else {
    if (value === "Қате") {
      value = "";
    }

    value += calcMap[key] ?? key;
  }

  calcValues[type] = value;

  const display = $("display-" + type);

  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;
}

// ==========================================
// ҚАУІПСІЗ МАТЕМАТИКАЛЫҚ ПАРСЕР
// eval() ҚОЛДАНЫЛМАЙДЫ
// ==========================================

// Тригонометриялық функциялар: градус.
// log: ондық логарифм.
// ln: натурал логарифм.

function calculate(input) {
  const source = String(input)
    .replace(/\s+/g, "")
    .replace(/,/g, ".");

  let pos = 0;

  const rad = x => x * Math.PI / 180;

  const functions = {
    sin: x => Math.sin(rad(x)),
    cos: x => Math.cos(rad(x)),

    tan: x => {
      if (Math.abs(Math.cos(rad(x))) < 1e-12) {
        throw Error("Тангенс анықталмаған");
      }

      return Math.tan(rad(x));
    },

    ctg: x => {
      if (Math.abs(Math.sin(rad(x))) < 1e-12) {
        throw Error("Котангенс анықталмаған");
      }

      return Math.cos(rad(x)) / Math.sin(rad(x));
    },

    sqrt: x => Math.sqrt(x),
    cbrt: x => Math.cbrt(x),
    log: x => Math.log10(x),
    ln: x => Math.log(x)
  };

  function take(symbol) {
    if (source[pos] === symbol) {
      pos++;
      return true;
    }

    return false;
  }

  function atom() {
    if (take("(")) {
      const result = expression();

      if (!take(")")) {
        throw Error("Жақша жабылмаған");
      }

      return result;
    }

    const rest = source.slice(pos);

    const number = rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if (number) {
      pos += number[0].length;
      return Number(number[0]);
    }

    for (const name of Object.keys(functions)) {
      if (rest.startsWith(name + "(")) {
        pos += name.length + 1;

        const argument = expression();

        if (!take(")")) {
          throw Error("Жақша жабылмаған");
        }

        const result = functions[name](argument);

        if (!Number.isFinite(result)) {
          throw Error("Функция анықталмаған");
        }

        return result;
      }
    }

    if (rest.startsWith("pi")) {
      pos += 2;
      return Math.PI;
    }

    if (rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Қате математикалық өрнек");
  }

  function postfix() {
    let value = atom();

    while (take("%")) {
      value /= 100;
    }

    return value;
  }

  function power() {
    let value = postfix();

    if (take("^")) {
      value = Math.pow(value, unary());
    }

    return value;
  }

  function unary() {
    if (take("+")) return unary();
    if (take("-")) return -unary();

    return power();
  }

  function term() {
    let value = unary();

    while (true) {
      if (take("*")) {
        value *= unary();

      } else if (take("/")) {
        const divisor = unary();

        if (divisor === 0) {
          throw Error("Нөлге бөлуге болмайды");
        }

        value /= divisor;

      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value = term();

    while (true) {
      if (take("+")) {
        value += term();

      } else if (take("-")) {
        value -= term();

      } else {
        break;
      }
    }

    return value;
  }

  if (!source) {
    throw Error("Бос өрнек");
  }

  const result = expression();

  if (
    pos !== source.length ||
    !Number.isFinite(result)
  ) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result) < 1e-12 ? 0 : result;
}

// ==========================================
// КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// ==========================================

function toggleCalculator(type) {
  const element = $("calc-" + type);

  const opening =
    !element.classList.contains("visible");

  element.classList.toggle("visible", opening);

  if (opening) {
    const rect = element.getBoundingClientRect();

    const maxX = Math.max(
      0,
      window.innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      window.innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(0, Math.min(maxX, rect.left)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, rect.top)) + "px";
  }
}

$("basicOpen").addEventListener("click", () => {
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click", () => {
  toggleCalculator("science");
});

document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", () => {
    $("calc-" + btn.dataset.close)
      .classList.remove("visible");
  });
});

// ==========================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ==========================================

function makeDraggable(element) {
  const handle = element.querySelector(".calc-head");

  let drag = null;

  handle.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) return;

    if (
      event.pointerType === "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    const rect = element.getBoundingClientRect();

    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: rect.left,
      top: rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", event => {
    if (!drag || event.pointerId !== drag.id) {
      return;
    }

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    const maxX = Math.max(
      0,
      window.innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      window.innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(
        0,
        Math.min(maxX, drag.left + dx)
      ) + "px";

    element.style.top =
      Math.max(
        0,
        Math.min(maxY, drag.top + dy)
      ) + "px";
  });

  handle.addEventListener("pointerup", () => {
    drag = null;
  });

  handle.addEventListener("pointercancel", () => {
    drag = null;
  });
}

// ==========================================
// ҚҰРЫЛЫМДЫ АВТОМАТТЫ ТЕКСЕРУ
// ==========================================

function runChecks() {
  console.assert(
    theory.length === 5,
    "5 түсіндірме болуы керек"
  );

  console.assert(
    notes.length === 10,
    "10 конспект болуы керек"
  );

  console.assert(
    notes.every(note => note.self.length === 2),
    "Әр конспектте 2 өзіндік есеп болуы керек"
  );

  console.assert(
    levels.length === 4 &&
    levels.every(level => level.tasks.length === 5),
    "4 деңгейде 20 есеп болуы керек"
  );

  console.assert(
    quiz.length === 15,
    "15 ойын сұрағы болуы керек"
  );

  console.assert(
    slides.length === 37,
    "37 слайд болуы керек"
  );

  console.assert(calculate("2^5") === 32);
  console.assert(calculate("log(100)") === 2);
  console.assert(calculate("ln(e)") === 1);
  console.assert(calculate("1/2") === 0.5);

  // Формула мәтіні бұзылмауын тексеру
  const testFormula = M`\log_a b=c\iff a^c=b`;

  console.assert(
    decodeURIComponent(
      encodeURIComponent(testFormula)
    ) === testFormula,
    "Формула кодтауы қате"
  );

  // Деңгей есептерінің жауаптарын тексеру
  const expected = [
    [3, 4, 2, 0, 3],
    [-4, 0.5, 1.5, 5, 2],
    [7, 3, 6, 2, 6],
    [16, 4, 2, 3, 0]
  ];

  levels.forEach((level, i) => {
    level.tasks.forEach((task, j) => {
      console.assert(
        task.value === expected[i][j],
        `Деңгей ${i + 1}, есеп ${j + 1}: жауап қате`
      );
    });
  });

  console.log("§15: құрылымдық тексерулер аяқталды.");
}

// ==========================================
// САЙТТЫ ІСКЕ ҚОСУ
// ==========================================

runChecks();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
