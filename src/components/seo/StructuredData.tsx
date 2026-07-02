"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import {
  absoluteUrl,
  aiSearchPlatforms,
  businessEmail,
  businessPhone,
  serviceCatalog,
  servedLocations,
  siteName,
  siteUrl,
  type SeoLocale,
} from "@/lib/seo";
import { socialProfileUrls } from "@/lib/socialLinks";

type FaqItem = {
  question: string;
  answer: string;
};

const pageLabels: Record<SeoLocale, Record<string, string>> = {
  fr: {
    "/": "Accueil",
    "/studio": "Studio",
    "/expertise": "Expertise",
    "/expertise/creation-sites-internet": "Création de Sites Internet",
    "/expertise/developpement-web-applications": "Développement Web & Applications",
    "/expertise/depannage-informatique": "Dépannage Informatique",
    "/expertise/maintenance-informatique": "Maintenance Informatique",
    "/expertise/cybersecurite": "Cybersécurité",
    "/expertise/reseaux-wifi": "Réseaux & Wi‑Fi",
    "/expertise/seo-visibilite-locale": "SEO & Visibilité Locale",
    "/expertise/solutions-cloud": "Solutions Cloud",
    "/expertise/experiences-3d": "Expériences 3D",
    "/work": "Projets",
    "/contact": "Contact",
    "/help": "Help",
    "/formation": "Formation",
    "/abonnement": "Abonnement",
    "/legal": "Mentions legales",
    "/privacy": "Confidentialité",
    "/cookies": "Cookies",
    "/blog": "Blog",
  },
  en: {
    "/": "Home",
    "/studio": "Studio",
    "/expertise": "Expertise",
    "/expertise/creation-sites-internet": "Website Creation",
    "/expertise/developpement-web-applications": "Web Development & Apps",
    "/expertise/depannage-informatique": "IT Troubleshooting",
    "/expertise/maintenance-informatique": "IT Maintenance",
    "/expertise/cybersecurite": "Cybersecurity",
    "/expertise/reseaux-wifi": "Networks & Wi‑Fi",
    "/expertise/seo-visibilite-locale": "SEO & Local Visibility",
    "/expertise/solutions-cloud": "Cloud Solutions",
    "/expertise/experiences-3d": "3D Experiences",
    "/work": "Work",
    "/contact": "Contact",
    "/help": "Help",
    "/formation": "Training",
    "/abonnement": "Subscription",
    "/legal": "Legal",
    "/privacy": "Privacy",
    "/cookies": "Cookies",
    "/blog": "Blog",
  },
  zh: {
    "/": "首页",
    "/studio": "Studio",
    "/expertise": "专业服务",
    "/expertise/creation-sites-internet": "网站建设",
    "/expertise/developpement-web-applications": "Web 开发与应用",
    "/expertise/depannage-informatique": "IT 故障处理",
    "/expertise/maintenance-informatique": "IT 维护",
    "/expertise/cybersecurite": "网络安全",
    "/expertise/reseaux-wifi": "网络与 Wi‑Fi",
    "/expertise/seo-visibilite-locale": "SEO 与本地可见度",
    "/expertise/solutions-cloud": "云解决方案",
    "/expertise/experiences-3d": "3D 沉浸式体验",
    "/work": "项目",
    "/contact": "联系",
    "/help": "帮助",
    "/formation": "培训",
    "/abonnement": "订阅",
    "/legal": "法律信息",
    "/privacy": "隐私",
    "/cookies": "Cookies",
    "/blog": "博客",
  },
};

const faqByPage: Record<SeoLocale, Partial<Record<string, FaqItem[]>>> = {
  fr: {
    "/": [
      {
        question: "Quels services propose Genesis Connect ?",
        answer:
          "Genesis Connect intervient en depannage informatique, maintenance, assistance a distance, installation reseau et Wi-Fi, cybersécurité, sauvegarde, cloud, creation de site internet, developpement web et SEO local.",
      },
      {
        question: "Travaillez-vous uniquement a Paris ?",
        answer:
          "Nous accompagnons les structures a distance et dans plusieurs zones cibles, notamment Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Haguenau, Obernai, Colmar, Mulhouse et Paris.",
      },
      {
        question: "Optimisez-vous aussi les recherches IA ?",
        answer:
          "Oui. Nous integrons schema.org, contenu structure, SEO local, GEO SEO et AI Search Optimization pour mieux ressortir dans Google, Bing, ChatGPT, Gemini et Perplexity.",
      },
      {
        question: "Dans quelles zones Genesis Connect intervient-il ?",
        answer:
          "Genesis Connect accompagne des projets a Paris, Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Lingolsheim, Bischheim, Ostwald, Haguenau, Obernai, Selestat, Colmar, Mulhouse, Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille, Nice, Montpellier, ainsi qu'a Geneve, Lausanne, Zurich, Bale, New York, Miami, Los Angeles, San Francisco, Dallas, Austin, Seattle et a distance.",
      },
    ],
    "/expertise": [
      {
        question: "Intervenez-vous en depannage informatique pour petites entreprises ?",
        answer:
          "Oui. Nous prenons en charge le depannage informatique, la maintenance preventive et corrective, l'assistance a distance et la remise en service des environnements de travail.",
      },
      {
        question: "Pouvez-vous gerer l'installation Wi-Fi et reseau ?",
        answer:
          "Oui. Nous intervenons sur l'installation reseau, le Wi-Fi, la connectivite, les postes de travail et l'organisation cloud pour les petites structures.",
      },
      {
        question: "Faites-vous du SEO local et du SEO pour l'IA ?",
        answer:
          "Oui. Nous travaillons les contenus, les donnees structurees, Google Business Profile, le SEO local et les signaux utiles aux moteurs de recherche bases sur l'IA.",
      },
      {
        question: "Pouvez-vous viser plusieurs villes sans dupliquer les pages ?",
        answer:
          "Oui. Nous structurons les contenus, les services, les FAQ et les donnees schema.org pour renforcer la pertinence locale sans surcharger visuellement les pages.",
      },
    ],
    "/expertise/creation-sites-internet": [
      {
        question: "Le SEO est-il inclus dans la création de site ?",
        answer:
          "Oui. Nous intégrons une base SEO technique, un contenu structuré, et des données structurées schema.org. Le SEO local peut être renforcé selon vos villes cibles.",
      },
      {
        question: "Pouvez-vous gérer la maintenance et l’hébergement ?",
        answer:
          "Oui. Nous assurons les mises à jour, la sécurité et le suivi pour garder un site stable, rapide et durable.",
      },
    ],
    "/expertise/developpement-web-applications": [
      {
        question: "Pouvez-vous créer une application web sur mesure ?",
        answer:
          "Oui. Nous cadrons le besoin métier, les rôles, les données, puis nous livrons par itérations.",
      },
    ],
    "/expertise/depannage-informatique": [
      {
        question: "Proposez-vous une assistance informatique à distance ?",
        answer:
          "Oui. L’assistance à distance permet de résoudre rapidement de nombreux incidents logiciels.",
      },
    ],
    "/expertise/maintenance-informatique": [
      {
        question: "La maintenance informatique est-elle utile pour une TPE ?",
        answer:
          "Oui. Elle réduit les pannes, améliore la sécurité et protège la continuité d’activité.",
      },
    ],
    "/expertise/cybersecurite": [
      {
        question: "Quelles priorités cybersécurité pour une petite structure ?",
        answer:
          "Accès (MFA), mises à jour, sauvegardes, hygiène numérique et sensibilisation.",
      },
    ],
    "/expertise/reseaux-wifi": [
      {
        question: "Pouvez-vous optimiser un Wi‑Fi existant ?",
        answer:
          "Oui. Nous auditons la couverture et la configuration, puis nous optimisons les points d’accès et les réglages.",
      },
    ],
    "/expertise/seo-visibilite-locale": [
      {
        question: "Améliorez-vous la visibilité Google Maps ?",
        answer:
          "Oui. Nous travaillons Google Business Profile, contenu local, cohérence des informations et signaux de confiance.",
      },
    ],
    "/expertise/solutions-cloud": [
      {
        question: "Microsoft 365 ou Google Workspace ?",
        answer:
          "Nous vous conseillons selon vos usages et contraintes, puis nous mettons en place une configuration propre.",
      },
    ],
    "/expertise/experiences-3d": [
      {
        question: "La 3D empêche-t-elle le SEO ?",
        answer:
          "Non. Le SEO repose sur la structure, le contenu et les données. La 3D sert l’identité sans bloquer l’indexation si elle est bien intégrée.",
      },
    ],
    "/help": [
      {
        question: "Qui peut candidater au programme Help ?",
        answer:
          "Les nouveaux entrepreneurs, petites entreprises, associations et structures avec des budgets limites qui ont un besoin numerique reel et un projet coherent.",
      },
      {
        question: "Quels projets cherchez-vous a soutenir ?",
        answer:
          "Nous privilegions les projets utiles, viables et a impact concret : presence web, remise a niveau informatique, organisation cloud, SEO local ou accompagnement numerique global.",
      },
      {
        question: "Quelles informations faut-il fournir ?",
        answer:
          "Nom, prenom, entreprise, secteur, histoire du projet, besoin principal, objectifs, budget disponible, delais souhaites et toute information complementaire utile.",
      },
    ],
    "/contact": [
      {
        question: "Comment contacter Genesis Connect ?",
        answer:
          "La page Contact propose un mailto pre-rempli pour accelerer la prise de contact. Il suffit de preciser le projet, les objectifs, les services recherches, le budget et le delai souhaite.",
      },
      {
        question: "Quels services peuvent etre demandes ?",
        answer:
          "Creation de site internet, developpement web, SEO et visibilite locale, cybersécurité, maintenance informatique, depannage informatique, solutions cloud, experience 3D immersive ou autre besoin numerique premium.",
      },
    ],
  },
  en: {
    "/": [
      {
        question: "Which services does Genesis Connect provide?",
        answer:
          "Genesis Connect provides IT support, maintenance, remote assistance, networking and Wi-Fi setup, cybersecurity, backup, cloud guidance, website creation, web development and local SEO.",
      },
      {
        question: "Do you optimize for AI search too?",
        answer:
          "Yes. We implement structured data, local SEO, GEO SEO and AI Search Optimization for Google, Bing, ChatGPT, Gemini and Perplexity.",
      },
      {
        question: "Which regions do you cover?",
        answer:
          "We support projects across France, Paris districts, Switzerland, the United States and remote teams through a premium service model combining IT, web, SEO, cybersecurity and cloud expertise.",
      },
    ],
    "/expertise": [
      {
        question: "Do you handle IT support for small businesses?",
        answer:
          "Yes. We support small organizations with troubleshooting, maintenance, remote support, device setup and digital organization.",
      },
      {
        question: "Can you target several local markets without overloading pages?",
        answer:
          "Yes. We combine service pages, FAQs, internal linking and structured data to build local relevance while preserving a clean premium design.",
      },
    ],
    "/help": [
      {
        question: "Who is eligible for Help?",
        answer:
          "Founders, small businesses, associations and low-budget structures with a genuine digital need and a coherent project.",
      },
    ],
    "/contact": [
      {
        question: "How do we start a project?",
        answer:
          "The contact page uses a prefilled mailto template so you can quickly share your project overview, goals, requested services, budget and timeline.",
      },
    ],
  },
  zh: {
    "/": [
      {
        question: "Genesis Connect 提供哪些服务？",
        answer:
          "我们提供 IT 支持、维护、远程协助、网络与 Wi-Fi 部署、网络安全、备份、云方案、网站建设、Web 开发与本地 SEO。",
      },
      {
        question: "服务覆盖哪些地区？",
        answer:
          "我们面向法国、巴黎重点区域、瑞士、美国以及远程团队提供高端数字服务。",
      },
    ],
    "/expertise": [
      {
        question: "是否提供小企业 IT 支持？",
        answer:
          "是的，我们面向小企业、创业者与协会提供 IT 运维、维护、网络配置与数字化支持。",
      },
      {
        question: "能否同时覆盖多个本地市场？",
        answer:
          "可以。我们通过结构化内容、FAQ、内链与 Schema 数据提升多区域相关性，同时保持页面简洁。",
      },
    ],
    "/help": [
      {
        question: "哪些人适合申请 Help？",
        answer:
          "创业者、小企业、协会以及预算有限但项目明确的组织都可以申请。",
      },
    ],
    "/contact": [
      {
        question: "如何联系 Genesis Connect？",
        answer:
          "联系页面提供预填充邮件模板，便于快速说明项目、目标、所需服务、预算和时间表。",
      },
    ],
  },
};

function buildServedAreas() {
  return servedLocations.map((location) => ({
    "@type": location.type,
    name: location.name,
    addressCountry: location.countryCode,
  }));
}

function buildBreadcrumbs(locale: SeoLocale, pathname: string) {
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const segments = cleanPath === "/" ? ["/"] : cleanPath.split("/").filter(Boolean);

  const items =
    cleanPath === "/"
      ? [{ name: pageLabels[locale]["/"], item: absoluteUrl(`/${locale}`) }]
      : [
          { name: pageLabels[locale]["/"], item: absoluteUrl(`/${locale}`) },
          ...segments.map((segment, index) => {
            const fullPath = `/${segments.slice(0, index + 1).join("/")}`;
            return {
              name:
                pageLabels[locale][fullPath] ??
                segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              item: absoluteUrl(`/${locale}${fullPath}`),
            };
          }),
        ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export default function StructuredData() {
  const locale = useLocale() as SeoLocale;
  const pathname = usePathname() || "/";

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: siteName,
    url: siteUrl,
    publisher: { "@id": `${siteUrl}#organization` },
    about: [...serviceCatalog.map((service) => service.name), ...aiSearchPlatforms],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    email: businessEmail,
    telephone: businessPhone,
    logo: absoluteUrl("/images/favicon/10.png"),
    sameAs: socialProfileUrls,
    knowsAbout: [
      ...serviceCatalog.map((service) => service.name),
      "developpement web",
      "SEO local",
      "AI Search Optimization",
      "cybersecurite",
      "solutions cloud",
      "experiences numeriques premium",
      ...aiSearchPlatforms,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: businessEmail,
        contactType: "customer support",
        availableLanguage: ["French", "English", "Chinese"],
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#local-business`,
    name: siteName,
    image: absoluteUrl("/images/favicon/10.png"),
    url: siteUrl,
    email: businessEmail,
    telephone: businessPhone,
    sameAs: socialProfileUrls,
    address: {
      "@type": "PostalAddress",
      streetAddress: "29 rue Tronchet",
      addressLocality: "Paris",
      postalCode: "75008",
      addressCountry: "FR",
    },
    areaServed: buildServedAreas(),
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}#professional-service`,
    name: `${siteName} Professional Service`,
    provider: { "@id": `${siteUrl}#organization` },
    serviceType: serviceCatalog.map((service) => service.name),
    areaServed: buildServedAreas(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Genesis Connect",
      itemListElement: serviceCatalog.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  const faqItems = faqByPage[locale][pathname];
  const faqSchema =
    faqItems && faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const pageServiceSchema =
    pathname === "/help" || pathname.startsWith("/expertise")
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: pageLabels[locale][pathname] ?? pageLabels[locale]["/expertise"],
          provider: { "@id": `${siteUrl}#organization` },
          areaServed: buildServedAreas(),
          serviceType: serviceCatalog.map((service) => service.name),
          description:
            pathname === "/help"
              ? "Soutien et accompagnement numerique pour entrepreneurs, associations et petites structures."
              : "Services informatiques, creation de site internet, developpement web, SEO local, cybersécurité, reseaux, cloud et experiences 3D premium.",
          audience: {
            "@type": "Audience",
            audienceType:
              locale === "fr"
                ? "Entreprises, entrepreneurs, associations et organisations"
                : locale === "en"
                  ? "Companies, founders, associations and organizations"
                  : "企业、创业者、协会与组织",
          },
        }
      : null;

  const schemas = [
    websiteSchema,
    organizationSchema,
    localBusinessSchema,
    professionalServiceSchema,
    buildBreadcrumbs(locale, pathname),
    faqSchema,
    pageServiceSchema,
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
