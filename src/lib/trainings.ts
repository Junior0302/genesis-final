export type SupportedLocale = "fr" | "en" | "zh";
type LocalizedText = Record<SupportedLocale, string>;

export type TrainingLevel = "beginner" | "intermediate" | "advanced";

export interface TrainingModule {
  title: LocalizedText;
  chapters: LocalizedText[];
}

export interface TrainingItem {
  slug: string;
  coverImage: string;
  level: TrainingLevel;
  price: number;
  duration: LocalizedText;
  title: LocalizedText;
  shortDescription: LocalizedText;
  longDescription: LocalizedText;
  audience: LocalizedText;
  objectives: LocalizedText[];
  skills: LocalizedText[];
  outcomes: LocalizedText[];
  modules: TrainingModule[];
}

export interface AdminOrder {
  id: string;
  customer: string;
  email: string;
  trainingSlug: string;
  amount: number;
  status: "paid" | "processing" | "delivered";
  invoiceLabel: string;
}

export interface AdminCustomer {
  name: string;
  email: string;
  lastOrder: string;
  totalSpent: number;
}

export const trainingProtectionNotice: LocalizedText = {
  fr: "© Genesis Connect – Tous droits réservés. Toute reproduction, partage, diffusion, revente ou exploitation commerciale des contenus est strictement interdite sans autorisation écrite préalable de Genesis Connect. Toute violation pourra entraîner la suspension immédiate des accès ainsi que des poursuites conformément au Code de la propriété intellectuelle.",
  en: "© Genesis Connect – All rights reserved. Any reproduction, sharing, distribution, resale or commercial use of the content is strictly prohibited without prior written authorization from Genesis Connect. Any violation may lead to immediate suspension of access and legal action under intellectual property law.",
  zh: "© Genesis Connect – 保留所有权利。未经 Genesis Connect 事先书面授权，严禁复制、分享、传播、转售或商业使用任何内容。任何违规行为都可能导致访问权限被立即暂停，并依据知识产权法采取法律行动。"
};

export const trainingSupport: LocalizedText = {
  fr: "Support : hello@genesisconnectstudio.com | +33776103157",
  en: "Support: hello@genesisconnectstudio.com | +33776103157",
  zh: "支持：hello@genesisconnectstudio.com | +33776103157"
};

export const trainings: TrainingItem[] = [
  {
    slug: "entreprendre-avec-clarte",
    coverImage: "/images/Image_rideau_effect_ink.png",
    level: "beginner",
    price: 149,
    duration: {
      fr: "6 heures",
      en: "6 hours",
      zh: "6 小时"
    },
    title: {
      fr: "Entreprendre avec Clarte",
      en: "Build with Clarity",
      zh: "清晰创业方法"
    },
    shortDescription: {
      fr: "Une formation premium pour structurer une offre, clarifier son positionnement et poser des bases solides.",
      en: "A premium training to structure your offer, sharpen positioning and build strong foundations.",
      zh: "一套高端课程，帮助你梳理产品、明确定位并建立稳固基础。"
    },
    longDescription: {
      fr: "Cette formation guide les entrepreneurs dans la construction d'une offre lisible, désirable et rentable. Elle pose les fondations d'une activité cohérente en travaillant la proposition de valeur, la perception premium et la prise de décision stratégique.",
      en: "This training helps entrepreneurs build an offer that is clear, desirable and profitable. It lays the foundations of a coherent business through value proposition, premium positioning and sharper strategic decisions.",
      zh: "本课程帮助创业者打造清晰、有吸引力且具盈利能力的产品方案，通过价值主张、品牌定位和战略决策建立一致性的商业基础。"
    },
    audience: {
      fr: "Fondateurs, freelances et porteurs de projet en phase de lancement ou de repositionnement.",
      en: "Founders, freelancers and project owners launching or repositioning their business.",
      zh: "适合创始人、自由职业者以及处于启动或重塑阶段的项目负责人。"
    },
    objectives: [
      {
        fr: "Clarifier votre offre et votre promesse.",
        en: "Clarify your offer and promise.",
        zh: "明确你的产品和承诺。"
      },
      {
        fr: "Définir un positionnement premium crédible.",
        en: "Define a credible premium positioning.",
        zh: "建立可信的高端定位。"
      },
      {
        fr: "Préparer un plan d'action simple et exécutable.",
        en: "Prepare a simple and executable action plan.",
        zh: "制定简单且可执行的行动计划。"
      }
    ],
    skills: [
      {
        fr: "Structuration d'offre",
        en: "Offer structuring",
        zh: "产品结构设计"
      },
      {
        fr: "Positionnement de marque",
        en: "Brand positioning",
        zh: "品牌定位"
      },
      {
        fr: "Décision entrepreneuriale",
        en: "Entrepreneurial decision-making",
        zh: "创业决策能力"
      }
    ],
    outcomes: [
      {
        fr: "Une offre claire, différenciante et présentable.",
        en: "A clear, differentiated and presentable offer.",
        zh: "形成清晰且有差异化的产品方案。"
      },
      {
        fr: "Un message plus convaincant pour vendre.",
        en: "A more convincing message to sell with.",
        zh: "获得更具说服力的销售表达。"
      },
      {
        fr: "Une feuille de route utilisable immédiatement.",
        en: "A roadmap you can use immediately.",
        zh: "获得可立即执行的路线图。"
      }
    ],
    modules: [
      {
        title: {
          fr: "Module 1 · Poser les fondations",
          en: "Module 1 · Build the foundation",
          zh: "模块 1 · 打好基础"
        },
        chapters: [
          {
            fr: "Identifier votre valeur réelle",
            en: "Identify your real value",
            zh: "识别你的核心价值"
          },
          {
            fr: "Comprendre votre cible prioritaire",
            en: "Understand your priority audience",
            zh: "理解你的优先目标客户"
          }
        ]
      },
      {
        title: {
          fr: "Module 2 · Créer une offre premium",
          en: "Module 2 · Design a premium offer",
          zh: "模块 2 · 打造高端方案"
        },
        chapters: [
          {
            fr: "Structurer l'offre principale",
            en: "Structure the core offer",
            zh: "构建核心产品"
          },
          {
            fr: "Fixer un prix cohérent",
            en: "Set a coherent price",
            zh: "设定合理价格"
          }
        ]
      },
      {
        title: {
          fr: "Module 3 · Activer le passage à l'action",
          en: "Module 3 · Turn strategy into action",
          zh: "模块 3 · 从策略到行动"
        },
        chapters: [
          {
            fr: "Priorités des 30 prochains jours",
            en: "Priorities for the next 30 days",
            zh: "未来 30 天优先事项"
          },
          {
            fr: "Routine de pilotage",
            en: "Execution routine",
            zh: "执行节奏与复盘"
          }
        ]
      }
    ]
  },
  {
    slug: "systeme-commercial-premium",
    coverImage: "/images/tnsprojetimg.png",
    level: "intermediate",
    price: 249,
    duration: {
      fr: "8 heures",
      en: "8 hours",
      zh: "8 小时"
    },
    title: {
      fr: "Systeme Commercial Premium",
      en: "Premium Sales System",
      zh: "高端销售系统"
    },
    shortDescription: {
      fr: "Mettre en place un parcours commercial structuré, rassurant et performant pour convertir sans pression.",
      en: "Build a structured, premium sales journey that converts without pressure.",
      zh: "建立结构化、高端且高转化的销售路径，以更从容地完成成交。"
    },
    longDescription: {
      fr: "Pensée pour les indépendants et petites structures souhaitant professionnaliser leur acquisition, cette formation vous aide à concevoir un système commercial premium : qualification, argumentaire, suivi, relance et closing.",
      en: "Designed for independents and lean teams looking to professionalize acquisition, this training helps you build a premium sales system: qualification, messaging, follow-up, reactivation and closing.",
      zh: "本课程面向希望提升获客与销售体系的个人和小团队，帮助你搭建完整的高端销售系统：筛选、沟通、跟进、激活与成交。"
    },
    audience: {
      fr: "Consultants, agences, coachs et entrepreneurs ayant déjà une offre active.",
      en: "Consultants, agencies, coaches and entrepreneurs with an existing offer.",
      zh: "适合已有产品或服务的顾问、机构、教练和创业者。"
    },
    objectives: [
      {
        fr: "Construire un pipeline commercial lisible.",
        en: "Build a clear sales pipeline.",
        zh: "建立清晰的销售管道。"
      },
      {
        fr: "Améliorer les taux de transformation.",
        en: "Improve conversion rates.",
        zh: "提升转化率。"
      },
      {
        fr: "Créer une relation de confiance à chaque étape.",
        en: "Create trust at every step.",
        zh: "在每一步建立信任感。"
      }
    ],
    skills: [
      {
        fr: "Qualification des leads",
        en: "Lead qualification",
        zh: "潜在客户筛选"
      },
      {
        fr: "Scripts de vente premium",
        en: "Premium sales scripting",
        zh: "高端销售话术"
      },
      {
        fr: "Relance et closing",
        en: "Follow-up and closing",
        zh: "跟进与成交"
      }
    ],
    outcomes: [
      {
        fr: "Une méthode de vente plus rassurante et plus fluide.",
        en: "A smoother and more reassuring selling method.",
        zh: "形成更顺畅、更具信任感的销售方式。"
      },
      {
        fr: "Des scripts réutilisables pour vos appels et e-mails.",
        en: "Reusable scripts for calls and emails.",
        zh: "获得可复用的通话与邮件脚本。"
      },
      {
        fr: "Un processus duplicable pour grandir sans improviser.",
        en: "A repeatable process to grow without improvisation.",
        zh: "获得可复制的增长流程，减少临场 improvisation。"
      }
    ],
    modules: [
      {
        title: {
          fr: "Module 1 · Diagnostiquer votre tunnel actuel",
          en: "Module 1 · Audit your current funnel",
          zh: "模块 1 · 诊断现有漏斗"
        },
        chapters: [
          {
            fr: "Cartographier le parcours client",
            en: "Map the client journey",
            zh: "绘制客户旅程"
          },
          {
            fr: "Identifier les points de friction",
            en: "Identify friction points",
            zh: "找出摩擦点"
          }
        ]
      },
      {
        title: {
          fr: "Module 2 · Structurer vos conversions",
          en: "Module 2 · Structure conversion moments",
          zh: "模块 2 · 设计转化节点"
        },
        chapters: [
          {
            fr: "Qualification et scoring",
            en: "Qualification and scoring",
            zh: "线索筛选与评分"
          },
          {
            fr: "Argumentaire de conviction",
            en: "Persuasive messaging",
            zh: "说服式表达"
          }
        ]
      },
      {
        title: {
          fr: "Module 3 · Suivi haut de gamme",
          en: "Module 3 · High-end follow-up",
          zh: "模块 3 · 高端跟进体系"
        },
        chapters: [
          {
            fr: "Relances non intrusives",
            en: "Non-intrusive follow-ups",
            zh: "不打扰式跟进"
          },
          {
            fr: "Closing et gestion des objections",
            en: "Closing and objections",
            zh: "成交与异议处理"
          }
        ]
      }
    ]
  },
  {
    slug: "croissance-digitale-premium",
    coverImage: "/images/Image_rideau_effect_ink.png",
    level: "advanced",
    price: 390,
    duration: {
      fr: "10 heures",
      en: "10 hours",
      zh: "10 小时"
    },
    title: {
      fr: "Croissance Digitale Premium",
      en: "Premium Digital Growth",
      zh: "高端数字增长"
    },
    shortDescription: {
      fr: "Déployer une stratégie digitale alignée sur une marque haut de gamme, entre visibilité, contenu et conversion.",
      en: "Deploy a digital strategy aligned with a premium brand across visibility, content and conversion.",
      zh: "搭建与高端品牌一致的数字增长体系，兼顾曝光、内容与转化。"
    },
    longDescription: {
      fr: "Cette formation avancée rassemble acquisition, image de marque et performance digitale dans une logique premium. Elle aide à définir les bons canaux, à produire un contenu utile et à optimiser les leviers les plus rentables sans diluer l'identité de marque.",
      en: "This advanced training combines acquisition, brand image and digital performance through a premium lens. It helps define the right channels, create useful content and optimize the most profitable levers without diluting brand identity.",
      zh: "这是一套进阶课程，将获客、品牌形象与数字绩效整合为统一体系，帮助你在不稀释品牌调性的前提下选择合适渠道、打造内容并优化最有效的增长杠杆。"
    },
    audience: {
      fr: "Entrepreneurs confirmés, directions marketing et structures cherchant à monter en gamme.",
      en: "Established entrepreneurs, marketing leads and teams aiming to move upmarket.",
      zh: "适合成熟创业者、市场负责人以及希望品牌升级的团队。"
    },
    objectives: [
      {
        fr: "Prioriser les canaux les plus rentables.",
        en: "Prioritize the most profitable channels.",
        zh: "优先布局高回报渠道。"
      },
      {
        fr: "Créer un système éditorial cohérent.",
        en: "Create a coherent editorial system.",
        zh: "建立一致的内容系统。"
      },
      {
        fr: "Piloter la performance avec des indicateurs utiles.",
        en: "Drive performance with useful metrics.",
        zh: "通过有效指标驱动增长。"
      }
    ],
    skills: [
      {
        fr: "Stratégie de contenu",
        en: "Content strategy",
        zh: "内容策略"
      },
      {
        fr: "Performance marketing",
        en: "Performance marketing",
        zh: "绩效营销"
      },
      {
        fr: "Pilotage de croissance",
        en: "Growth operations",
        zh: "增长运营"
      }
    ],
    outcomes: [
      {
        fr: "Une stratégie digitale premium pilotable dans le temps.",
        en: "A premium digital strategy you can sustain over time.",
        zh: "形成可持续执行的高端数字增长策略。"
      },
      {
        fr: "Des priorités claires pour investir efficacement.",
        en: "Clear priorities for smarter investment.",
        zh: "明确资源投入优先级。"
      },
      {
        fr: "Un cadre pour développer la marque sans la banaliser.",
        en: "A framework to scale the brand without cheapening it.",
        zh: "在保持品牌高度的同时实现增长。"
      }
    ],
    modules: [
      {
        title: {
          fr: "Module 1 · Choisir vos leviers",
          en: "Module 1 · Choose your growth levers",
          zh: "模块 1 · 选择增长杠杆"
        },
        chapters: [
          {
            fr: "Canaux organiques et payants",
            en: "Organic and paid channels",
            zh: "自然与付费渠道"
          },
          {
            fr: "Arbitrages de budget",
            en: "Budget allocation choices",
            zh: "预算分配策略"
          }
        ]
      },
      {
        title: {
          fr: "Module 2 · Système éditorial",
          en: "Module 2 · Editorial system",
          zh: "模块 2 · 内容系统"
        },
        chapters: [
          {
            fr: "Piliers de contenu",
            en: "Content pillars",
            zh: "内容支柱"
          },
          {
            fr: "Production et distribution",
            en: "Production and distribution",
            zh: "生产与分发"
          }
        ]
      },
      {
        title: {
          fr: "Module 3 · Mesure et optimisation",
          en: "Module 3 · Measurement and optimization",
          zh: "模块 3 · 测量与优化"
        },
        chapters: [
          {
            fr: "KPI premium",
            en: "Premium KPI framework",
            zh: "高端增长 KPI"
          },
          {
            fr: "Boucle d'amélioration continue",
            en: "Continuous improvement loop",
            zh: "持续优化循环"
          }
        ]
      }
    ]
  }
];

export const adminOrders: AdminOrder[] = [
  {
    id: "GC-2026-0012",
    customer: "Maya Robert",
    email: "maya.robert@example.com",
    trainingSlug: "systeme-commercial-premium",
    amount: 249,
    status: "processing",
    invoiceLabel: "Facture GC-2026-0012"
  },
  {
    id: "GC-2026-0011",
    customer: "Yanis Chen",
    email: "yanis.chen@example.com",
    trainingSlug: "croissance-digitale-premium",
    amount: 390,
    status: "paid",
    invoiceLabel: "Facture GC-2026-0011"
  },
  {
    id: "GC-2026-0010",
    customer: "Sofia Martin",
    email: "sofia.martin@example.com",
    trainingSlug: "entreprendre-avec-clarte",
    amount: 149,
    status: "delivered",
    invoiceLabel: "Facture GC-2026-0010"
  }
];

export const adminCustomers: AdminCustomer[] = [
  {
    name: "Maya Robert",
    email: "maya.robert@example.com",
    lastOrder: "GC-2026-0012",
    totalSpent: 249
  },
  {
    name: "Yanis Chen",
    email: "yanis.chen@example.com",
    lastOrder: "GC-2026-0011",
    totalSpent: 390
  },
  {
    name: "Sofia Martin",
    email: "sofia.martin@example.com",
    lastOrder: "GC-2026-0010",
    totalSpent: 149
  }
];

export function getTraining(slug: string) {
  return trainings.find((item) => item.slug === slug);
}

export function formatPrice(amount: number, locale: SupportedLocale) {
  const localeMap: Record<SupportedLocale, string> = {
    fr: "fr-FR",
    en: "en-US",
    zh: "zh-CN"
  };

  return new Intl.NumberFormat(localeMap[locale], {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function getLocalizedValue<T extends LocalizedText>(value: T, locale: SupportedLocale) {
  return value[locale] ?? value.fr;
}

export function getLevelLabel(level: TrainingLevel, locale: SupportedLocale) {
  const labels: Record<TrainingLevel, LocalizedText> = {
    beginner: {
      fr: "Debutant",
      en: "Beginner",
      zh: "初级"
    },
    intermediate: {
      fr: "Intermediaire",
      en: "Intermediate",
      zh: "中级"
    },
    advanced: {
      fr: "Avance",
      en: "Advanced",
      zh: "高级"
    }
  };

  return labels[level][locale];
}

export function getTrainingUi() {
  return {
    catalog: {
      eyebrow: {
        fr: "Espace Formation",
        en: "Training Space",
        zh: "培训专区"
      },
      title: {
        fr: "Formations premium pour entreprendre, structurer et accelerer.",
        en: "Premium trainings to build, structure and accelerate.",
        zh: "帮助你创业、升级与增长的高端培训。"
      },
      description: {
        fr: "Un catalogue Genesis Connect pense pour les entrepreneurs, dirigeants et profils ambitieux qui veulent apprendre avec exigence et clarte.",
        en: "A Genesis Connect catalog designed for entrepreneurs, founders and ambitious profiles who want to learn with clarity and high standards.",
        zh: "Genesis Connect 打造的课程目录，面向希望以更高标准学习与成长的创业者、管理者与进取型人才。"
      },
      discover: {
        fr: "Decouvrir la formation",
        en: "Discover the training",
        zh: "了解课程"
      }
    },
    detail: {
      goals: {
        fr: "Objectifs pedagogiques",
        en: "Learning objectives",
        zh: "教学目标"
      },
      audience: {
        fr: "Public concerne",
        en: "Who it is for",
        zh: "适合人群"
      },
      skills: {
        fr: "Competences acquises",
        en: "Skills acquired",
        zh: "可获得能力"
      },
      duration: {
        fr: "Duree estimee",
        en: "Estimated duration",
        zh: "预计时长"
      },
      program: {
        fr: "Programme detaille",
        en: "Detailed program",
        zh: "详细课程安排"
      },
      outcomes: {
        fr: "Resultats attendus",
        en: "Expected outcomes",
        zh: "预期成果"
      },
      faq: {
        fr: "Questions frequentes",
        en: "Frequently asked questions",
        zh: "常见问题"
      },
      cta: {
        fr: "Lire avant achat",
        en: "Read before purchase",
        zh: "购买前必读"
      }
    },
    faq: {
      receive: {
        q: {
          fr: "Quand vais-je recevoir ma formation ?",
          en: "When will I receive my training?",
          zh: "我什么时候会收到课程？"
        },
        a: {
          fr: "Sous 48 heures maximum apres validation du paiement. Vous recevez un e-mail de confirmation et un PDF de bienvenue avec les informations d'acces.",
          en: "Within 48 hours maximum after payment validation. You receive a confirmation email and a welcome PDF with access information.",
          zh: "支付确认后最迟 48 小时内发送。你将收到确认邮件以及包含访问信息的欢迎 PDF。"
        }
      },
      documents: {
        q: {
          fr: "Comment acceder a mes documents ?",
          en: "How do I access my documents?",
          zh: "我如何获取文档？"
        },
        a: {
          fr: "Les documents et acces sont transmis par e-mail, avec les liens de telechargement ou les informations de connexion necessaires.",
          en: "Documents and access instructions are sent by email with download links or login details.",
          zh: "文档与访问说明会通过邮件发送，包括下载链接或登录信息。"
        }
      },
      refund: {
        q: {
          fr: "Puis-je demander un remboursement ?",
          en: "Can I request a refund?",
          zh: "我可以申请退款吗？"
        },
        a: {
          fr: "Toute demande est etudiee au cas par cas. Les contenus numeriques deja envoyes ou telecharges peuvent limiter le droit au remboursement.",
          en: "Each request is reviewed case by case. Digital content already sent or downloaded may limit refund eligibility.",
          zh: "每个申请都会逐案审查。已发送或已下载的数字内容可能限制退款资格。"
        }
      },
      support: {
        q: {
          fr: "Qui contacter en cas de probleme ?",
          en: "Who should I contact if I have an issue?",
          zh: "如遇问题我该联系谁？"
        },
        a: {
          fr: "Notre support reste joignable a hello@genesisconnectstudio.com.",
          en: "Our support team remains available at hello@genesisconnectstudio.com.",
          zh: "请联系 hello@genesisconnectstudio.com。"
        }
      }
    },
    conditions: {
      eyebrow: {
        fr: "A lire attentivement avant achat",
        en: "Read carefully before purchase",
        zh: "购买前请仔细阅读"
      },
      title: {
        fr: "Conditions de livraison, d'usage et de propriete intellectuelle.",
        en: "Delivery, usage and intellectual property terms.",
        zh: "交付、使用与知识产权条款。"
      },
      delivery: {
        fr: "Livraison",
        en: "Delivery",
        zh: "交付"
      },
      usage: {
        fr: "Conditions d'utilisation",
        en: "Terms of use",
        zh: "使用条款"
      },
      ip: {
        fr: "Propriete intellectuelle",
        en: "Intellectual property",
        zh: "知识产权"
      },
      liability: {
        fr: "Responsabilite",
        en: "Liability",
        zh: "责任说明"
      },
      proceed: {
        fr: "Continuer vers le paiement",
        en: "Continue to payment",
        zh: "继续支付"
      },
      processing: {
        fr: "Redirection vers Stripe...",
        en: "Redirecting to Stripe...",
        zh: "正在跳转到 Stripe..."
      }
    },
    success: {
      eyebrow: {
        fr: "Confirmation de commande",
        en: "Order confirmation",
        zh: "订单确认"
      },
      title: {
        fr: "Votre demande a bien ete prise en compte.",
        en: "Your request has been successfully recorded.",
        zh: "你的请求已成功记录。"
      },
      description: {
        fr: "Votre paiement a ete confirme. Une verification automatique lance ensuite la creation de commande, l'envoi du recu et la preparation des acces.",
        en: "Your payment has been confirmed. Automatic processing then creates the order, issues the receipt and prepares access delivery.",
        zh: "你的付款已确认。系统将自动创建订单、发送收据并准备课程访问权限。"
      }
    },
    admin: {
      eyebrow: {
        fr: "Backoffice Formation",
        en: "Training back office",
        zh: "培训后台"
      },
      title: {
        fr: "Piloter le catalogue, les commandes et les paiements.",
        en: "Manage catalog, orders and payments.",
        zh: "管理课程目录、订单与付款。"
      }
    }
  } as const;
}
