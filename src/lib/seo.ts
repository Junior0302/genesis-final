import { Metadata } from "next";

export type SeoLocale = "fr" | "en" | "zh";

export const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://www.genesisconnectstudio.com";
export const siteName = "Genesis Connect";
export const businessEmail = "hello@genesisconnectstudio.com";
export const businessPhone = "+33 0 00 00 00 00";

export const targetCities = [
  "Strasbourg",
  "Schiltigheim",
  "Illkirch-Graffenstaden",
  "Haguenau",
  "Obernai",
  "Colmar",
  "Mulhouse",
  "Paris",
] as const;

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
];

export const geoKeywordVariants = targetCities.flatMap((city) =>
  localServiceKeywords.map((keyword) => `${keyword} ${city}`)
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
    "Genesis Connect accompagne les entreprises, independants et associations avec des services de depannage informatique, maintenance, cybersécurité, sauvegarde, cloud, creation de site internet, developpement web, SEO local, GEO SEO et AI Search Optimization.",
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
    "Perplexity SEO",
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
      "Support informatique, maintenance, cybersécurité, cloud, creation de site internet, developpement web, SEO local et optimisation pour les moteurs de recherche IA.",
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
      "Genesis Connect aide les entreprises avec support informatique, web, SEO local, cloud et transformation numerique.",
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
