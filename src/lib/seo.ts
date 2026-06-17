import { Metadata } from "next";

export type SeoLocale = "fr" | "en" | "zh";

export const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://www.genesisconnectstudio.com";
export const siteName = "Genesis Connect";
export const businessEmail = "hello@genesisconnectstudio.com";
export const businessPhone = "+33 0 00 00 00 00";

export type ServedLocation = {
  name: string;
  type: "City" | "AdministrativeArea";
  countryCode: "FR" | "CH" | "US";
};

export const aiSearchPlatforms = [
  "ChatGPT",
  "Gemini",
  "Claude",
  "Perplexity",
  "Bing AI",
] as const;

export const franceCities: ServedLocation[] = [
  { name: "Paris", type: "City", countryCode: "FR" },
  { name: "Strasbourg", type: "City", countryCode: "FR" },
  { name: "Schiltigheim", type: "City", countryCode: "FR" },
  { name: "Illkirch-Graffenstaden", type: "City", countryCode: "FR" },
  { name: "Lingolsheim", type: "City", countryCode: "FR" },
  { name: "Bischheim", type: "City", countryCode: "FR" },
  { name: "Ostwald", type: "City", countryCode: "FR" },
  { name: "Haguenau", type: "City", countryCode: "FR" },
  { name: "Obernai", type: "City", countryCode: "FR" },
  { name: "Selestat", type: "City", countryCode: "FR" },
  { name: "Colmar", type: "City", countryCode: "FR" },
  { name: "Mulhouse", type: "City", countryCode: "FR" },
  { name: "Lyon", type: "City", countryCode: "FR" },
  { name: "Marseille", type: "City", countryCode: "FR" },
  { name: "Toulouse", type: "City", countryCode: "FR" },
  { name: "Bordeaux", type: "City", countryCode: "FR" },
  { name: "Nantes", type: "City", countryCode: "FR" },
  { name: "Lille", type: "City", countryCode: "FR" },
  { name: "Nice", type: "City", countryCode: "FR" },
  { name: "Montpellier", type: "City", countryCode: "FR" },
];

export const parisDistricts: ServedLocation[] = [
  { name: "Champs-Elysees", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Madeleine", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Opera", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Saint-Lazare", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Le Marais", type: "AdministrativeArea", countryCode: "FR" },
  { name: "La Defense", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Bastille", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Montparnasse", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Saint-Germain-des-Pres", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Trocadero", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Passy", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Auteuil", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Batignolles", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Republique", type: "AdministrativeArea", countryCode: "FR" },
  { name: "Nation", type: "AdministrativeArea", countryCode: "FR" },
];

export const swissCities: ServedLocation[] = [
  { name: "Geneve", type: "City", countryCode: "CH" },
  { name: "Lausanne", type: "City", countryCode: "CH" },
  { name: "Zurich", type: "City", countryCode: "CH" },
  { name: "Bale", type: "City", countryCode: "CH" },
  { name: "Montreux", type: "City", countryCode: "CH" },
  { name: "Fribourg", type: "City", countryCode: "CH" },
  { name: "Neuchatel", type: "City", countryCode: "CH" },
  { name: "Sion", type: "City", countryCode: "CH" },
  { name: "Lugano", type: "City", countryCode: "CH" },
];

export const usCities: ServedLocation[] = [
  { name: "New York", type: "City", countryCode: "US" },
  { name: "Miami", type: "City", countryCode: "US" },
  { name: "Los Angeles", type: "City", countryCode: "US" },
  { name: "San Francisco", type: "City", countryCode: "US" },
  { name: "Las Vegas", type: "City", countryCode: "US" },
  { name: "Chicago", type: "City", countryCode: "US" },
  { name: "Dallas", type: "City", countryCode: "US" },
  { name: "Austin", type: "City", countryCode: "US" },
  { name: "Seattle", type: "City", countryCode: "US" },
  { name: "Boston", type: "City", countryCode: "US" },
  { name: "Washington D.C.", type: "City", countryCode: "US" },
];

// Shared SEO coverage map reused by metadata, schema and AI-oriented FAQs.
export const servedLocations: ServedLocation[] = [
  ...franceCities,
  ...parisDistricts,
  ...swissCities,
  ...usCities,
];

export const targetCities = servedLocations.map((location) => location.name);

export const localServiceKeywords = [
  "Dépannage informatique",
  "Maintenance informatique",
  "Assistance informatique",
  "Support informatique",
  "Technicien informatique",
  "Prestataire informatique",
  "Réparation ordinateur",
  "Réparation PC",
  "Installation informatique",
  "Installation réseau",
  "Installation Wi-Fi",
  "Cybersécurité",
  "Sauvegarde de données",
  "Création de site internet",
  "Développement web",
  "Référencement SEO",
  "SEO local",
  "Google Business Profile",
  "Transformation numérique",
  "Solutions cloud",
  "Microsoft 365",
  "Google Workspace",
  "LLM SEO",
  "AI Search Optimization",
  "GEO SEO",
  "Developpement web",
  "Cybersécurité premium",
  "Solutions cloud",
  "Experiences numeriques premium",
];

export const geoSearchThemes = [
  "informatique",
  "developpement web",
  "SEO local",
  "cybersecurite",
  "solutions cloud",
  "experience numerique premium",
];

export const geoKeywordVariants = Array.from(
  new Set(
    servedLocations.flatMap((location) =>
      geoSearchThemes.map((theme) => `${theme} ${location.name}`)
    )
  )
);

export const serviceCatalog = [
  {
    slug: "depannage-informatique",
    name: "Depannage informatique",
    description:
      "Diagnostic rapide, resolution d'incidents, reparation poste utilisateur et remise en service de PC professionnels.",
  },
  {
    slug: "maintenance-informatique",
    name: "Maintenance informatique",
    description:
      "Maintenance preventive et corrective pour postes, serveurs legers, reseaux et environnements collaboratifs.",
  },
  {
    slug: "assistance-a-distance",
    name: "Assistance a distance",
    description:
      "Prise en main a distance, support utilisateur, resolution rapide des incidents logiciels et bureautiques.",
  },
  {
    slug: "installation-materiel",
    name: "Installation de materiel",
    description:
      "Installation, configuration et migration de postes, imprimantes, peripheriques et equipements numeriques.",
  },
  {
    slug: "installation-reseaux",
    name: "Installation de reseaux",
    description:
      "Configuration LAN, Wi-Fi, routeurs, segmentation simple, securisation et optimisation de la connectivite.",
  },
  {
    slug: "cybersecurite",
    name: "Cybersecurite",
    description:
      "Protection des acces, hygiene numerique, sauvegardes, durcissement poste de travail et reduction des risques.",
  },
  {
    slug: "sauvegarde-donnees",
    name: "Sauvegarde des donnees",
    description:
      "Strategies de sauvegarde locale et cloud, reprise d'activite simple et protection des donnees critiques.",
  },
  {
    slug: "solutions-cloud",
    name: "Solutions cloud",
    description:
      "Structuration Microsoft 365, Google Workspace, partage documentaire, collaboration et organisation cloud.",
  },
  {
    slug: "creation-sites-internet",
    name: "Creation de sites internet",
    description:
      "Sites vitrines, plateformes web et experiences immersives alliant performance, SEO et image de marque.",
  },
  {
    slug: "referencement-seo",
    name: "Referencement SEO",
    description:
      "SEO technique, SEO local, contenu, donnees structurees, optimisation GEO et AI search readiness.",
  },
  {
    slug: "accompagnement-numerique",
    name: "Accompagnement numerique",
    description:
      "Conseil, transformation numerique et accompagnement des petites structures, associations et entrepreneurs.",
  },
];

export function absoluteUrl(path = "") {
  return new URL(path || "/", siteUrl).toString();
}

export function localeUrl(locale: SeoLocale, path = "") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return absoluteUrl(`/${locale}${normalizedPath === "/" ? "" : normalizedPath}`);
}

export const pageSeo: Record<
  string,
  Record<
    SeoLocale,
    {
      title: string;
      description: string;
    }
  >
> = {
  "/": {
    fr: {
      title:
        "Genesis Connect | Depannage informatique, maintenance, creation de site internet et SEO local",
      description:
        "Genesis Connect accompagne les entreprises, independants et associations en depannage informatique, maintenance, assistance, cybersécurité, creation de site internet, SEO local, Google Business Profile et transformation numerique.",
    },
    en: {
      title:
        "Genesis Connect | IT support, maintenance, web development and local SEO",
      description:
        "Genesis Connect helps companies, founders and associations with IT support, maintenance, cybersecurity, website creation, local SEO, Google Business Profile and digital transformation.",
    },
    zh: {
      title:
        "Genesis Connect | IT 支持、维护、网站开发与本地 SEO",
      description:
        "Genesis Connect 为企业、创业者与协会提供 IT 支持、维护、网络安全、网站建设、本地 SEO、Google Business Profile 与数字化转型服务。",
    },
  },
  "/expertise": {
    fr: {
      title:
        "Expertise informatique, web et SEO local | Genesis Connect",
      description:
        "Depannage informatique, maintenance informatique, assistance a distance, installation Wi-Fi, cybersécurité, sauvegarde, solutions cloud, creation de sites internet, developpement web et referencement SEO local a Strasbourg, Colmar, Mulhouse, Paris et a distance.",
    },
    en: {
      title: "IT, web and local SEO expertise | Genesis Connect",
      description:
        "IT support, maintenance, remote assistance, Wi-Fi setup, cybersecurity, backup, cloud solutions, website creation, web development and local SEO for Strasbourg, Colmar, Mulhouse, Paris and remote teams.",
    },
    zh: {
      title: "IT、网站与本地 SEO 专业服务 | Genesis Connect",
      description:
        "涵盖 IT 支持、维护、远程协助、Wi-Fi 部署、网络安全、备份、云解决方案、网站建设、Web 开发与本地 SEO。",
    },
  },
  "/expertise/creation-sites-internet": {
    fr: {
      title: "Création de site internet, vitrine, e-commerce | Genesis Connect",
      description:
        "Création de sites internet premium : site vitrine, site professionnel, e-commerce, refonte, maintenance, hébergement et optimisation SEO à Strasbourg, Colmar, Mulhouse, Paris et à distance.",
    },
    en: {
      title: "Website creation, showcase, e-commerce | Genesis Connect",
      description:
        "Premium website creation: showcase sites, business sites, e-commerce, redesign, maintenance, hosting and SEO optimization for Strasbourg, Colmar, Mulhouse, Paris and remote teams.",
    },
    zh: {
      title: "网站建设、企业官网与电商 | Genesis Connect",
      description:
        "高端网站建设：企业官网、电商、改版、维护、托管与 SEO 优化，支持本地与远程协作。",
    },
  },
  "/expertise/developpement-web-applications": {
    fr: {
      title: "Développement web & applications sur mesure | Genesis Connect",
      description:
        "Développement web, application web, plateforme métier, automatisation et solutions sur mesure pour entreprises, indépendants et associations.",
    },
    en: {
      title: "Custom web development & apps | Genesis Connect",
      description:
        "Custom web development, web apps, business platforms, automation and tailored solutions for companies, founders and associations.",
    },
    zh: {
      title: "Web 开发与定制应用 | Genesis Connect",
      description:
        "定制 Web 开发、业务平台与自动化方案，面向企业、创业者与组织。",
    },
  },
  "/expertise/depannage-informatique": {
    fr: {
      title: "Dépannage informatique, réparation PC | Genesis Connect",
      description:
        "Dépannage informatique : réparation PC, suppression de virus, assistance à distance, installation matériel, sauvegarde et intervention sur site.",
    },
    en: {
      title: "IT troubleshooting, PC repair | Genesis Connect",
      description:
        "IT troubleshooting: PC repair, malware cleanup, remote support, hardware setup, backup and on-site intervention.",
    },
    zh: {
      title: "IT 故障处理与 PC 维修 | Genesis Connect",
      description:
        "PC 维修、病毒清理、远程支持、设备安装与备份支持。",
    },
  },
  "/expertise/maintenance-informatique": {
    fr: {
      title: "Maintenance informatique & infogérance | Genesis Connect",
      description:
        "Maintenance informatique préventive et corrective, mises à jour, supervision légère et sécurité pour petites entreprises et associations.",
    },
    en: {
      title: "IT maintenance | Genesis Connect",
      description:
        "Preventive and corrective maintenance, updates, light monitoring and security for small organizations.",
    },
    zh: {
      title: "IT 维护与运维支持 | Genesis Connect",
      description:
        "预防/纠正性维护、更新与基础安全加固，面向小团队。",
    },
  },
  "/expertise/cybersecurite": {
    fr: {
      title: "Cybersécurité, protection des données | Genesis Connect",
      description:
        "Cybersécurité pour petites structures : audit, protection des postes, gestion des accès, sauvegardes et sensibilisation utilisateurs.",
    },
    en: {
      title: "Cybersecurity, data protection | Genesis Connect",
      description:
        "Pragmatic cybersecurity: audit, endpoint protection, access management, backups and awareness for small organizations.",
    },
    zh: {
      title: "网络安全与数据保护 | Genesis Connect",
      description:
        "务实网络安全：审计、终端防护、访问管理、备份与培训。",
    },
  },
  "/expertise/reseaux-wifi": {
    fr: {
      title: "Réseaux & Wi‑Fi, installation réseau | Genesis Connect",
      description:
        "Installation réseau et Wi‑Fi : configuration, sécurisation, optimisation de couverture et performances stables pour professionnels.",
    },
    en: {
      title: "Networks & Wi‑Fi setup | Genesis Connect",
      description:
        "Network and Wi‑Fi setup: configuration, hardening, coverage optimization and stable daily performance.",
    },
    zh: {
      title: "网络与 Wi‑Fi 部署 | Genesis Connect",
      description:
        "网络与 Wi‑Fi 部署：配置、安全加固与覆盖优化。",
    },
  },
  "/expertise/seo-visibilite-locale": {
    fr: {
      title: "SEO & visibilité locale, Google Maps | Genesis Connect",
      description:
        "SEO, SEO local, Google Business Profile, Google Maps, données structurées et optimisation IA (LLM SEO, GEO SEO) pour entreprises et entrepreneurs.",
    },
    en: {
      title: "SEO & local visibility, Google Maps | Genesis Connect",
      description:
        "SEO, local SEO, Google Business Profile, Google Maps, structured data and AI search optimization for modern search engines.",
    },
    zh: {
      title: "SEO 与本地可见度（Google Maps） | Genesis Connect",
      description:
        "SEO、本地 SEO、Google 商家与地图可见度、结构化数据与 AI 搜索优化。",
    },
  },
  "/expertise/solutions-cloud": {
    fr: {
      title: "Solutions cloud, Microsoft 365, Google Workspace | Genesis Connect",
      description:
        "Solutions cloud : Microsoft 365, Google Workspace, sauvegarde cloud, collaboration et messagerie professionnelle.",
    },
    en: {
      title: "Cloud solutions, Microsoft 365, Google Workspace | Genesis Connect",
      description:
        "Cloud solutions: Microsoft 365, Google Workspace, cloud backup, collaboration and professional email.",
    },
    zh: {
      title: "云解决方案（Microsoft 365 / Google Workspace） | Genesis Connect",
      description:
        "云协作、备份与企业邮箱配置：Microsoft 365、Google Workspace。",
    },
  },
  "/expertise/experiences-3d": {
    fr: {
      title: "Expériences 3D immersives premium | Genesis Connect",
      description:
        "Expériences 3D immersives : univers interactifs, narration premium, optimisation performance mobile et desktop, gestion des couches et profondeurs.",
    },
    en: {
      title: "Premium immersive 3D experiences | Genesis Connect",
      description:
        "Immersive 3D experiences: interactive worlds, premium storytelling, performance optimization and layer/depth control.",
    },
    zh: {
      title: "高端沉浸式 3D 体验 | Genesis Connect",
      description:
        "互动世界与沉浸叙事：性能优化与层级/深度控制。",
    },
  },
  "/help": {
    fr: {
      title:
        "Help | Accompagnement numerique pour entrepreneurs, petites entreprises et associations",
      description:
        "Genesis Connect aide les nouveaux entrepreneurs, petites entreprises et associations avec un accompagnement accessible, humain et structure sur les besoins informatiques, web, SEO et transformation numerique.",
    },
    en: {
      title:
        "Help | Digital support for founders, small businesses and associations",
      description:
        "Genesis Connect supports founders, small businesses and associations with accessible guidance for IT, web, local SEO and digital transformation.",
    },
    zh: {
      title: "Help | 面向创业者、小企业与协会的数字支持",
      description:
        "Genesis Connect 为创业者、小企业与协会提供可负担、清晰、有人情味的 IT、网站、SEO 与数字化支持。",
    },
  },
  "/contact": {
    fr: {
      title: "Contact | Genesis Connect",
      description:
        "Parlez-nous de votre besoin en depannage informatique, maintenance, installation reseau, cybersécurité, cloud, site internet, SEO local ou accompagnement numerique.",
    },
    en: {
      title: "Contact | Genesis Connect",
      description:
        "Tell us about your IT support, network, cybersecurity, cloud, website, local SEO or digital support needs.",
    },
    zh: {
      title: "联系 | Genesis Connect",
      description:
        "欢迎联系我们，讨论 IT 支持、网络、安全、云、网站、本地 SEO 或数字化需求。",
    },
  },
};

const verification = process.env.GOOGLE_SITE_VERIFICATION
  ? { google: process.env.GOOGLE_SITE_VERIFICATION }
  : undefined;

export const defaultSEO: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default:
      "Genesis Connect | Depannage informatique, maintenance, site internet et SEO local",
    template: "%s | Genesis Connect",
  },
  description:
    "Genesis Connect accompagne les entreprises, independants et associations avec des services de depannage informatique, maintenance, cybersécurité, sauvegarde, cloud, creation de site internet, developpement web, SEO local, GEO SEO et AI Search Optimization en France, en Suisse, aux Etats-Unis et a distance.",
  keywords: [
    siteName,
    ...localServiceKeywords,
    ...geoKeywordVariants,
    "services informatiques Strasbourg",
    "maintenance informatique Grand Est",
    "creation site internet Strasbourg",
    "referencement local Strasbourg",
    "ChatGPT SEO",
    "Gemini SEO",
    "Claude SEO",
    "Perplexity SEO",
    "Bing AI SEO",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-FR": `${siteUrl}/fr`,
      "en-US": `${siteUrl}/en`,
      "zh-CN": `${siteUrl}/zh`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon/9.png", type: "image/png", sizes: "192x192" },
      { url: "/images/favicon/10.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/images/favicon/10.png", sizes: "512x512", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName,
    title:
      "Genesis Connect | Depannage informatique, maintenance, site internet et SEO local",
    description:
      "Support informatique, maintenance, cybersécurité, cloud, creation de site internet, developpement web, SEO local et optimisation pour les moteurs de recherche IA en France, Suisse et Etats-Unis.",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${siteName} - services informatiques et digitaux`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Genesis Connect | Depannage informatique, maintenance, site internet et SEO local",
    description:
      "Genesis Connect aide les entreprises avec support informatique, web, SEO local, cloud, cybersécurité et AI search optimization.",
    images: [absoluteUrl("/twitter-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(verification ? { verification } : {}),
};
