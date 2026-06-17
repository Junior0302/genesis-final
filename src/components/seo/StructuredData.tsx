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
    "/work": "Projets",
    "/contact": "Contact",
    "/help": "Help",
    "/formation": "Formation",
    "/abonnement": "Abonnement",
    "/legal": "Mentions legales",
    "/blog": "Blog",
    "/other": "Other",
  },
  en: {
    "/": "Home",
    "/studio": "Studio",
    "/expertise": "Expertise",
    "/work": "Work",
    "/contact": "Contact",
    "/help": "Help",
    "/formation": "Training",
    "/abonnement": "Subscription",
    "/legal": "Legal",
    "/blog": "Blog",
    "/other": "Other",
  },
  zh: {
    "/": "首页",
    "/studio": "Studio",
    "/expertise": "专业服务",
    "/work": "项目",
    "/contact": "联系",
    "/help": "帮助",
    "/formation": "培训",
    "/abonnement": "订阅",
    "/legal": "法律信息",
    "/blog": "博客",
    "/other": "其他",
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
    pathname === "/expertise" || pathname === "/help"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name:
            pathname === "/help"
              ? locale === "fr"
                ? "Accompagnement numerique accessible"
                : locale === "en"
                  ? "Accessible digital support"
                  : "普惠数字支持"
              : locale === "fr"
                ? "Services informatiques, web et SEO local"
                : locale === "en"
                  ? "IT, web and local SEO services"
                  : "IT、网站与本地 SEO 服务",
          provider: { "@id": `${siteUrl}#organization` },
          areaServed: targetCities,
          serviceType: serviceCatalog.map((service) => service.name),
          description:
            pathname === "/help"
              ? "Accompagnement des entrepreneurs, petites entreprises, associations et structures a faible budget."
              : "Depannage informatique, maintenance, installation reseau, cloud, creation de site internet et referencement SEO local.",
        }
      : null;

  const schemas = [
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
