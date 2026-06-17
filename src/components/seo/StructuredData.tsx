"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import {
  absoluteUrl,
  businessEmail,
  businessPhone,
  serviceCatalog,
  siteName,
  siteUrl,
  targetCities,
  type SeoLocale,
} from "@/lib/seo";

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
    ],
    "/expertise": [
      {
        question: "Do you handle IT support for small businesses?",
        answer:
          "Yes. We support small organizations with troubleshooting, maintenance, remote support, device setup and digital organization.",
      },
    ],
    "/help": [
      {
        question: "Who is eligible for Help?",
        answer:
          "Founders, small businesses, associations and low-budget structures with a genuine digital need and a coherent project.",
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
    ],
    "/expertise": [
      {
        question: "是否提供小企业 IT 支持？",
        answer:
          "是的，我们面向小企业、创业者与协会提供 IT 运维、维护、网络配置与数字化支持。",
      },
    ],
    "/help": [
      {
        question: "哪些人适合申请 Help？",
        answer:
          "创业者、小企业、协会以及预算有限但项目明确的组织都可以申请。",
      },
    ],
  },
};

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
    address: {
      "@type": "PostalAddress",
      streetAddress: "29 rue Tronchet",
      addressLocality: "Paris",
      postalCode: "75008",
      addressCountry: "FR",
    },
    areaServed: targetCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}#professional-service`,
    name: `${siteName} Professional Service`,
    provider: { "@id": `${siteUrl}#organization` },
    serviceType: serviceCatalog.map((service) => service.name),
    areaServed: targetCities,
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
          areaServed: targetCities,
          serviceType: serviceCatalog.map((service) => service.name),
          description:
            pathname === "/help"
              ? "Soutien et accompagnement numerique pour entrepreneurs, associations et petites structures."
              : "Services informatiques, creation de site internet, developpement web, SEO local, cybersécurité, reseaux, cloud et experiences 3D premium.",
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
