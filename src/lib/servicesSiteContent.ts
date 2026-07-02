export type ServicesLocale = "fr" | "en" | "zh";

export type ServicesFaqItem = {
  question: string;
  answer: string;
};

export type ServicesStepItem = {
  title: string;
  text: string;
};

export type ServicesServiceItem = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  deliverables: string[];
  audience: string[];
  process: ServicesStepItem[];
  faq: ServicesFaqItem[];
};

type ServicesSiteContent = {
  nav: {
    home: string;
    domaines: string;
    about: string;
    faq: string;
    contact: string;
    mainSite: string;
  };
  home: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    needsTitle: string;
    needs: Array<{ title: string; text: string }>;
    servicesTitle: string;
    servicesLead: string;
    methodTitle: string;
    method: ServicesStepItem[];
    faqTitle: string;
    faq: ServicesFaqItem[];
    finalTitle: string;
    finalText: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    valuesTitle: string;
    values: Array<{ title: string; text: string }>;
    approachTitle: string;
    approach: string[];
  };
  faqPage: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; text: string }>;
    emailCta: string;
    backToMain: string;
    mailSubject: string;
    mailBody: string;
  };
  domains: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
  };
  common: {
    discover: string;
    deliverables: string;
    audience: string;
    process: string;
    faq: string;
    contactCta: string;
  };
  services: ServicesServiceItem[];
};

export const serviceSlugs = [
  "creation-sites-internet",
  "developpement-web-applications",
  "depannage-informatique",
  "maintenance-informatique",
  "cybersecurite",
  "reseaux-wifi",
  "seo-visibilite-locale",
  "solutions-cloud",
  "experiences-3d",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export function getServicesLocale(locale: string): ServicesLocale {
  return (["fr", "en", "zh"].includes(locale) ? locale : "fr") as ServicesLocale;
}

const content: Record<ServicesLocale, ServicesSiteContent> = {
  fr: {
    nav: {
      home: "Accueil",
      domaines: "Domaines",
      about: "A propos",
      faq: "FAQ",
      contact: "Contact",
      mainSite: "Retour site principal",
    },
    home: {
      eyebrow: "Genesis Services",
      title: "L'expertise numerique claire, structuree et actionnable.",
      subtitle: "Un site dedie aux services.",
      description:
        "Genesis Services concentre l'ensemble de l'offre expertise : site internet, developpement, support IT, SEO local, cloud, cybersecurite, reseaux et experiences digitales avancees.",
      primaryCta: "Demander un diagnostic",
      secondaryCta: "Voir les domaines",
      needsTitle: "Besoins couverts",
      needs: [
        {
          title: "Visibilite et image",
          text: "Creation de sites internet, refonte, SEO local et mise en valeur de l'offre.",
        },
        {
          title: "Outils et plateforme",
          text: "Developpement web, outils metier, automatisation et experiences sur mesure.",
        },
        {
          title: "IT et organisation",
          text: "Depannage, maintenance, cloud, reseaux et structuration technique du quotidien.",
        },
        {
          title: "Protection et fiabilite",
          text: "Cybersecurite, sauvegarde, hygiene numerique et reduction des risques.",
        },
      ],
      servicesTitle: "Domaines d'intervention",
      servicesLead:
        "Chaque domaine dispose d'une page dediee, d'un langage plus direct et d'un parcours de contact plus simple.",
      methodTitle: "Notre methode",
      method: [
        {
          title: "Diagnostic",
          text: "Nous cadrons le besoin, le contexte, les contraintes et le niveau de priorite.",
        },
        {
          title: "Priorisation",
          text: "Nous definissons un plan realiste, lisible et adapte aux ressources disponibles.",
        },
        {
          title: "Execution",
          text: "Nous concevons, configurons, corrigeons ou deployons avec un niveau d'exigence professionnel.",
        },
        {
          title: "Suivi",
          text: "Nous assurons la lisibilite des prochaines etapes, la stabilite et la continute du projet.",
        },
      ],
      faqTitle: "Questions frequentes",
      faq: [
        {
          question: "Ce site est-il different du site principal Genesis Connect ?",
          answer:
            "Oui. Ici, tout est organise pour la partie expertise et services, avec un discours plus clair, plus direct et plus operationnel.",
        },
        {
          question: "Peut-on melanger site internet, cloud et maintenance dans une meme demande ?",
          answer:
            "Oui. Le but de ce site est justement de rassembler les besoins techniques, web et organisationnels dans une seule logique.",
        },
        {
          question: "Est-ce adapte aux petites entreprises et entrepreneurs ?",
          answer:
            "Oui. L'offre est pensee pour etre lisible et applicable autant pour des TPE, independants, associations que pour des structures plus etabliies.",
        },
      ],
      finalTitle: "Un interlocuteur clair pour des besoins reels.",
      finalText:
        "Le nouveau site expertise sert a cadrer les demandes, clarifier les offres et transformer les besoins en plan d'action concret.",
    },
    about: {
      eyebrow: "A propos",
      title: "Une base plus lisible pour la partie expertise.",
      description:
        "Le but de Genesis Services est de separer l'univers studio et projets du discours service, support et accompagnement. On gagne en clarte, en conversion et en lisibilite.",
      valuesTitle: "Ce qui guide ce site",
      values: [
        {
          title: "Clarte",
          text: "Chaque page doit permettre de comprendre rapidement si le service repond au besoin.",
        },
        {
          title: "Utilite",
          text: "Le contenu doit aider a decider, pas seulement impressionner.",
        },
        {
          title: "Execution",
          text: "Le positionnement reste premium, mais la priorite devient l'action et le resultat.",
        },
      ],
      approachTitle: "Approche",
      approach: [
        "Un langage plus direct que le site principal.",
        "Des pages structurees par probleme, livrables, audience et methode.",
        "Une conversion plus simple avec contact, email structure et demande de diagnostic.",
      ],
    },
    faqPage: {
      eyebrow: "FAQ",
      title: "Les reponses essentielles avant de prendre contact.",
      description:
        "Cette FAQ rassemble les questions les plus utiles pour comprendre le positionnement, les services et la maniere de travailler.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre besoin technique, web ou organisationnel.",
      description:
        "Le site expertise doit convertir plus vite. Cette page est pensee pour recueillir une demande claire, qualifier le besoin et accelerer la reponse.",
      cards: [
        {
          title: "Pour qui",
          text: "Entrepreneurs, TPE, PME, associations et structures qui ont besoin d'un cadrage concret.",
        },
        {
          title: "Pour quoi",
          text: "Site internet, support IT, cloud, securite, SEO local, automatisation ou besoin transverse.",
        },
        {
          title: "Comment",
          text: "Par email structure, priorisation du besoin et proposition d'un plan de travail lisible.",
        },
      ],
      emailCta: "Envoyer une demande",
      backToMain: "Retour au site principal",
      mailSubject: "Demande - Genesis Services",
      mailBody:
        "Nom :\nEntreprise :\nSecteur :\nBesoin principal :\nContexte :\nObjectifs :\nBudget :\nDelais :\nInformations complementaires :",
    },
    domains: {
      eyebrow: "Domaines",
      title: "Une page par domaine pour clarifier l'offre.",
      description:
        "Le nouveau site expertise se structure autour de pages detaillees, simples a parcourir et orientees vers l'action.",
      cta: "Voir le domaine",
    },
    common: {
      discover: "Decouvrir",
      deliverables: "Livrables",
      audience: "Pour qui",
      process: "Processus",
      faq: "FAQ",
      contactCta: "Demander un diagnostic",
    },
    services: [
      {
        slug: "creation-sites-internet",
        title: "Creation de sites internet",
        summary: "Sites vitrines, sites professionnels, refonte, maintenance et base SEO solide.",
        problem:
          "Quand une presence en ligne ne reflete pas le niveau reel de l'activite, il faut une base plus claire, plus credible et plus performante.",
        deliverables: ["Site vitrine ou corporate", "Refonte UX/UI", "Base SEO technique", "Maintenance et hebergement"],
        audience: ["TPE / PME", "Independants", "Associations", "Marques locales"],
        process: [
          { title: "Cadrage", text: "Positionnement, objectifs, arborescence et conversion." },
          { title: "Design", text: "Interface plus lisible, premium et structuree." },
          { title: "Mise en ligne", text: "Integration, performance, SEO technique et suivi." },
        ],
        faq: [
          { question: "Le SEO est-il prevu ?", answer: "Oui, une base SEO propre est integree des la conception." },
        ],
      },
      {
        slug: "developpement-web-applications",
        title: "Developpement web et applications",
        summary: "Outils metier, automatisation, interfaces internes et plateformes sur mesure.",
        problem:
          "Quand les outils existants ralentissent l'activite, un produit sur mesure peut simplifier les operations et la circulation de l'information.",
        deliverables: ["Application web", "Automatisation", "Back-office", "Integration process internes"],
        audience: ["Entreprises", "Structures en croissance", "Equipes operationnelles"],
        process: [
          { title: "Analyse", text: "Comprendre les flux, utilisateurs et points de friction." },
          { title: "Prototype", text: "Poser une base claire avant execution complete." },
          { title: "Livraison", text: "Construire par priorites et iterations utiles." },
        ],
        faq: [
          { question: "Peut-on partir d'un besoin flou ?", answer: "Oui, le cadrage sert precisement a clarifier le besoin reel." },
        ],
      },
      {
        slug: "depannage-informatique",
        title: "Depannage informatique",
        summary: "Resolution d'incidents, assistance, nettoyage, remise en service et support rapide.",
        problem:
          "Quand le poste, le logiciel ou l'environnement bloque l'activite, il faut une intervention pragmatique et rassurante.",
        deliverables: ["Diagnostic incident", "Remise en service", "Nettoyage logiciel", "Support utilisateur"],
        audience: ["Petites entreprises", "Independants", "Associations"],
        process: [
          { title: "Diagnostic", text: "Identifier l'origine du blocage et la criticite." },
          { title: "Correction", text: "Resoudre rapidement avec la solution la plus stable." },
          { title: "Prevention", text: "Mettre en place quelques protections simples pour eviter la recurrence." },
        ],
        faq: [
          { question: "Travaillez-vous a distance ?", answer: "Oui, quand le contexte le permet, l'assistance a distance est privilegiee." },
        ],
      },
      {
        slug: "maintenance-informatique",
        title: "Maintenance informatique",
        summary: "Maintenance preventive, corrective, mises a jour et stabilite au quotidien.",
        problem:
          "Quand tout fonctionne seulement jusqu'au prochain incident, il faut une base de maintenance plus reguliere et plus anticipee.",
        deliverables: ["Suivi de postes", "Mises a jour", "Controle de stabilite", "Base de securite"],
        audience: ["TPE", "Petites equipes", "Structures locales"],
        process: [
          { title: "Etat des lieux", text: "Lister les points fragiles et les habitudes de travail." },
          { title: "Routine", text: "Definir une maintenance legere mais reguliere." },
          { title: "Suivi", text: "Ajuster selon les priorites et incidents observes." },
        ],
        faq: [
          { question: "Est-ce utile pour une petite structure ?", answer: "Oui, c'est souvent la petite structure qui gagne le plus a eviter les interruptions." },
        ],
      },
      {
        slug: "cybersecurite",
        title: "Cybersecurite",
        summary: "Protection des acces, hygiene numerique, sauvegarde et reduction des risques.",
        problem:
          "Quand les acces, les mots de passe, les postes ou les habitudes sont fragiles, le risque augmente tres vite.",
        deliverables: ["Audit simple", "MFA et acces", "Sauvegarde", "Sensibilisation"],
        audience: ["TPE / PME", "Entrepreneurs", "Equipes admin"],
        process: [
          { title: "Priorites", text: "Commencer par les failles les plus critiques." },
          { title: "Protection", text: "Mettre en place des garde-fous simples et efficaces." },
          { title: "Adoption", text: "Faire en sorte que les bonnes pratiques soient applicables." },
        ],
        faq: [
          { question: "Faut-il un gros budget pour commencer ?", answer: "Non, beaucoup d'ameliorations prioritaires sont surtout une question de methode." },
        ],
      },
      {
        slug: "reseaux-wifi",
        title: "Reseaux et Wi-Fi",
        summary: "Configuration reseau, Wi-Fi, couverture, securisation et stabilite.",
        problem:
          "Quand la connectivite ralentit l'activite ou cree des zones instables, il faut une base reseau plus propre et plus fiable.",
        deliverables: ["Audit reseau", "Configuration Wi-Fi", "Optimisation couverture", "Securisation minimale"],
        audience: ["Bureaux", "Commerces", "Petites structures", "Espaces d'accueil"],
        process: [
          { title: "Audit", text: "Observer la couverture, la configuration et les usages." },
          { title: "Reglages", text: "Corriger l'architecture et les points faibles." },
          { title: "Stabilisation", text: "Verifier la tenue dans les usages reels." },
        ],
        faq: [
          { question: "Pouvez-vous intervenir sur une installation existante ?", answer: "Oui, l'optimisation de l'existant fait partie des cas les plus courants." },
        ],
      },
      {
        slug: "seo-visibilite-locale",
        title: "SEO et visibilite locale",
        summary: "SEO local, GBP, contenu structure, signal local et meilleure visibilite.",
        problem:
          "Quand une activite est peu visible localement malgre la qualite de l'offre, il faut une base SEO plus claire et plus reguliere.",
        deliverables: ["Base technique SEO", "Google Business Profile", "Pages claires", "FAQ et structure locale"],
        audience: ["Commerces", "Prestataires", "Entrepreneurs locaux", "Structures de proximite"],
        process: [
          { title: "Etat initial", text: "Mesurer la visibilite actuelle et les ecarts." },
          { title: "Fondations", text: "Corriger structure, contenu et signaux prioritaires." },
          { title: "Renforcement", text: "Ameliorer la coherence locale et la lisibilite du site." },
        ],
        faq: [
          { question: "Google Maps fait-il partie du travail ?", answer: "Oui, la coherence locale inclut aussi la fiche et les signaux de confiance." },
        ],
      },
      {
        slug: "solutions-cloud",
        title: "Solutions cloud",
        summary: "Microsoft 365, Google Workspace, sauvegarde, collaboration et structuration.",
        problem:
          "Quand les fichiers, emails et droits d'acces sont mal organises, le cloud doit devenir un outil de clarte, pas une source de confusion.",
        deliverables: ["Organisation cloud", "Messagerie", "Partage documentaire", "Sauvegarde et droits"],
        audience: ["Petites equipes", "Structures en croissance", "Entrepreneurs organises"],
        process: [
          { title: "Choix", text: "Selectionner la bonne base entre usages, outils et contraintes." },
          { title: "Mise en place", text: "Configurer correctement comptes, fichiers et acces." },
          { title: "Transmission", text: "Rendre l'usage simple pour l'equipe." },
        ],
        faq: [
          { question: "Microsoft 365 ou Google Workspace ?", answer: "La reponse depend surtout des usages et du mode de travail de l'equipe." },
        ],
      },
      {
        slug: "experiences-3d",
        title: "Experiences 3D",
        summary: "Univers interactifs, narration immersive et experiences digitales avancees.",
        problem:
          "Quand un projet doit se differencier fortement, la 3D et l'immersion peuvent donner une presence plus memorable et plus distinctive.",
        deliverables: ["Direction d'experience", "Scene immersive", "Integration web", "Optimisation performance"],
        audience: ["Marques", "Studios", "Lancements premium", "Projets a forte desirabilite"],
        process: [
          { title: "Concept", text: "Definir l'effet recherche et la place de l'immersion." },
          { title: "Prototype", text: "Valider l'intention visuelle et technique." },
          { title: "Integration", text: "Assurer une execution premium sans sacrifier la fluidite." },
        ],
        faq: [
          { question: "Peut-on garder un site rapide avec de la 3D ?", answer: "Oui, si la 3D est pensee comme un levier d'identite et non comme une surcharge." },
        ],
      },
    ],
  },
  en: {
    nav: {
      home: "Home",
      domaines: "Services",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      mainSite: "Main site",
    },
    home: {
      eyebrow: "Genesis Services",
      title: "Clear, structured and actionable digital expertise.",
      subtitle: "A dedicated services website.",
      description:
        "Genesis Services focuses the expertise offer into one place: websites, development, IT support, local SEO, cloud, cybersecurity, networking and advanced digital experiences.",
      primaryCta: "Request an audit",
      secondaryCta: "View services",
      needsTitle: "Needs we cover",
      needs: [
        { title: "Visibility", text: "Websites, redesigns, local SEO and clearer offer presentation." },
        { title: "Tools", text: "Web apps, automation and tailored platforms." },
        { title: "IT", text: "Troubleshooting, maintenance, cloud and daily technical structure." },
        { title: "Protection", text: "Cybersecurity, backups and risk reduction." },
      ],
      servicesTitle: "Service areas",
      servicesLead: "Each domain has its own page, clearer language and a simpler conversion path.",
      methodTitle: "How we work",
      method: [
        { title: "Audit", text: "We frame the need, constraints and priority level." },
        { title: "Prioritization", text: "We define a realistic, readable plan." },
        { title: "Execution", text: "We build, configure or fix with professional standards." },
        { title: "Follow-up", text: "We keep next steps clear and useful." },
      ],
      faqTitle: "FAQ",
      faq: [
        { question: "Is this different from the main Genesis Connect site?", answer: "Yes. This version is organized around services and expertise only." },
        { question: "Can one request include web, cloud and IT?", answer: "Yes. The idea is to centralize related needs in one clear workflow." },
        { question: "Is it suitable for small businesses?", answer: "Yes. The structure is designed for founders, small teams and local organizations." },
      ],
      finalTitle: "One clearer place for real service needs.",
      finalText: "This dedicated structure helps position the offer, qualify requests and guide conversions more efficiently.",
    },
    about: {
      eyebrow: "About",
      title: "A clearer base for the expertise side of Genesis.",
      description:
        "Genesis Services separates the studio universe from the service, support and expertise offer. It improves clarity, conversion and overall readability.",
      valuesTitle: "What drives this site",
      values: [
        { title: "Clarity", text: "Each page should help visitors understand whether the service fits." },
        { title: "Usefulness", text: "The content should support decisions, not only aesthetics." },
        { title: "Execution", text: "The tone stays premium, but the priority becomes action and outcomes." },
      ],
      approachTitle: "Approach",
      approach: [
        "More direct wording than the main site.",
        "Pages structured by problem, deliverables, audience and method.",
        "Simpler conversion through contact, structured email and audit requests.",
      ],
    },
    faqPage: {
      eyebrow: "FAQ",
      title: "Key answers before getting in touch.",
      description: "A focused FAQ to explain positioning, services and the working method.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us discuss your technical, web or organizational needs.",
      description: "This contact structure is designed to qualify requests faster and answer more clearly.",
      cards: [
        { title: "Who", text: "Founders, small businesses, associations and structured local organizations." },
        { title: "What", text: "Websites, IT, cloud, security, SEO, automation or mixed needs." },
        { title: "How", text: "Structured email, prioritization and a readable action plan." },
      ],
      emailCta: "Send a request",
      backToMain: "Back to main site",
      mailSubject: "Request - Genesis Services",
      mailBody:
        "Name :\nCompany :\nIndustry :\nMain need :\nContext :\nGoals :\nBudget :\nTimeline :\nAdditional information :",
    },
    domains: {
      eyebrow: "Services",
      title: "One page per service area.",
      description: "The expertise website is structured around simple, detailed and action-oriented service pages.",
      cta: "View service",
    },
    common: {
      discover: "Discover",
      deliverables: "Deliverables",
      audience: "Audience",
      process: "Process",
      faq: "FAQ",
      contactCta: "Request an audit",
    },
    services: [],
  },
  zh: {
    nav: {
      home: "首页",
      domaines: "服务",
      about: "关于",
      faq: "FAQ",
      contact: "联系",
      mainSite: "主站",
    },
    home: {
      eyebrow: "Genesis Services",
      title: "更清晰、更结构化、更可执行的专业服务站。",
      subtitle: "一个专门承载 expertise 的新站点。",
      description:
        "Genesis Services 把网站建设、开发、IT 支持、本地 SEO、云协作、网络安全、网络配置与高级数字体验集中到一个更清楚的空间里。",
      primaryCta: "申请诊断",
      secondaryCta: "查看服务",
      needsTitle: "覆盖的需求",
      needs: [
        { title: "可见度", text: "网站、改版、本地 SEO 与更清晰的品牌呈现。" },
        { title: "工具", text: "Web 应用、自动化与定制平台。" },
        { title: "IT", text: "故障处理、维护、云协作与日常技术组织。" },
        { title: "保护", text: "网络安全、备份与风险降低。" },
      ],
      servicesTitle: "服务领域",
      servicesLead: "每个领域都有自己的说明页面、更直接的表达和更简单的转化路径。",
      methodTitle: "工作方式",
      method: [
        { title: "诊断", text: "明确需求、限制与优先级。" },
        { title: "排序", text: "建立可执行、可理解的计划。" },
        { title: "执行", text: "以专业标准进行建设、配置或修复。" },
        { title: "跟进", text: "保持后续步骤清晰可控。" },
      ],
      faqTitle: "常见问题",
      faq: [
        { question: "这个站和主站有什么不同？", answer: "这个站专门承载服务与 expertise，不再混合 studio 表达。" },
        { question: "一个需求可以同时涉及网站、云与 IT 吗？", answer: "可以，这正是新站要解决的整理与统一问题。" },
        { question: "适合小企业吗？", answer: "适合，特别适合创业者、小团队与本地组织。" },
      ],
      finalTitle: "把真实需求放进一个更清楚的框架里。",
      finalText: "这个新站的目标是让服务更容易理解、联系更快、转化更顺畅。",
    },
    about: {
      eyebrow: "关于",
      title: "为 expertise 单独建立更清晰的基础。",
      description:
        "Genesis Services 将 studio 叙事与服务型表达分开，让定位、内容和转化更加清楚。",
      valuesTitle: "这个站点的核心",
      values: [
        { title: "清晰", text: "每个页面都要帮助访客快速判断是否匹配需求。" },
        { title: "实用", text: "内容优先帮助决策，而不是只做展示。" },
        { title: "执行", text: "保持高级感，同时更重视结果与可落地性。" },
      ],
      approachTitle: "方法",
      approach: [
        "语言比主站更直接。",
        "页面按问题、交付内容、适用对象与流程组织。",
        "通过联系页、结构化邮件与诊断请求提升转化。",
      ],
    },
    faqPage: {
      eyebrow: "FAQ",
      title: "联系之前最重要的答案。",
      description: "聚焦说明定位、服务与合作方式。",
    },
    contact: {
      eyebrow: "联系",
      title: "讨论你的技术、网站或组织需求。",
      description: "这个联系结构旨在更快地收集需求并给出更清晰的回应。",
      cards: [
        { title: "适合谁", text: "创业者、小企业、协会与本地组织。" },
        { title: "适合什么", text: "网站、IT、云、安全、SEO、自动化或混合需求。" },
        { title: "如何进行", text: "结构化邮件、优先级判断与清晰行动计划。" },
      ],
      emailCta: "发送需求",
      backToMain: "返回主站",
      mailSubject: "需求 - Genesis Services",
      mailBody:
        "姓名：\n公司：\n行业：\n核心需求：\n背景：\n目标：\n预算：\n时间：\n补充信息：",
    },
    domains: {
      eyebrow: "服务",
      title: "每个服务领域都有独立页面。",
      description: "新的 expertise 站点围绕详细、清晰、可行动的服务页面展开。",
      cta: "查看服务",
    },
    common: {
      discover: "了解更多",
      deliverables: "交付内容",
      audience: "适合对象",
      process: "流程",
      faq: "FAQ",
      contactCta: "申请诊断",
    },
    services: [],
  },
};

content.en.services = content.fr.services.map((service) => ({
  ...service,
  summary: service.summary,
}));

content.zh.services = content.fr.services.map((service) => ({
  ...service,
  summary: service.summary,
}));

export function getServicesSiteContent(locale: string) {
  return content[getServicesLocale(locale)];
}

export function getServicesSiteService(locale: string, slug: string) {
  const site = getServicesSiteContent(locale);
  return site.services.find((service) => service.slug === slug);
}
