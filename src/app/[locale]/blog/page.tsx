import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

type SupportedLocale = "fr" | "en" | "zh";

const content = {
  fr: {
    title: "Blog informatique, cybersécurité, SEO et IA | Genesis Connect",
    description:
      "Articles autour de l'informatique, la cybersécurité, le SEO local, l'IA, la création de sites internet et la transformation numérique pour entrepreneurs et entreprises.",
    eyebrow: "Blog",
    heading: "Un espace editorial pour le fond, pas juste pour la forme.",
    intro:
      "Le blog Genesis Connect reunira des contenus utiles et concrets sur l'informatique, la cybersécurité, le SEO local, l'IA, la visibilité Google Maps, la création de sites internet et la transformation numérique.",
    categoriesLabel: "Catégories",
    categories: [
      "Informatique",
      "Cybersécurité",
      "SEO",
      "IA",
      "Sites Internet",
      "Entrepreneuriat",
      "Transformation Numérique",
    ],
    recommendedLabel: "Articles recommandés",
    recommended: [
      "Pourquoi une PME a besoin d'un site internet ?",
      "Comment améliorer sa visibilité sur Google ?",
      "Pourquoi faire des sauvegardes ?",
      "Comment choisir un prestataire informatique ?",
      "Les cyberattaques les plus fréquentes",
      "Comment protéger son entreprise ?",
    ],
    cards: [
      "SEO local, Google Business Profile et visibilité Google Maps",
      "Bonnes pratiques de cybersécurité pour petites structures",
      "Création de site internet : performance, UX et conversion",
    ],
  },
  en: {
    title: "IT, cybersecurity, SEO and AI blog | Genesis Connect",
    description:
      "Practical articles about IT, cybersecurity, local SEO, AI, website creation and digital transformation for founders and businesses.",
    eyebrow: "Blog",
    heading: "An editorial space built for depth, not noise.",
    intro:
      "The Genesis Connect blog brings together practical content about IT, cybersecurity, local SEO, AI search, Google Maps visibility, website creation and digital transformation.",
    categoriesLabel: "Categories",
    categories: ["IT", "Cybersecurity", "SEO", "AI", "Websites", "Entrepreneurship", "Digital Transformation"],
    recommendedLabel: "Recommended articles",
    recommended: [
      "Why does a small business need a website?",
      "How to improve visibility on Google?",
      "Why backups matter",
      "How to choose an IT provider",
      "Most common cyberattacks",
      "How to protect your company",
    ],
    cards: [
      "Local SEO, Google Business Profile and Google Maps visibility",
      "Cybersecurity basics for small organizations",
      "Website creation: performance, UX and conversion",
    ],
  },
  zh: {
    title: "IT、网络安全、SEO 与 AI 博客 | Genesis Connect",
    description:
      "面向创业者与企业的实用内容：IT、网络安全、本地 SEO、AI、网站建设与数字化转型。",
    eyebrow: "博客",
    heading: "这是一个注重深度而非噪音的内容空间。",
    intro:
      "Genesis Connect 博客聚焦 IT、网络安全、本地 SEO、AI 搜索、Google Maps 可见度、网站建设与数字化转型等实用主题。",
    categoriesLabel: "分类",
    categories: ["IT", "网络安全", "SEO", "AI", "网站建设", "创业", "数字化转型"],
    recommendedLabel: "推荐文章",
    recommended: ["为什么中小企业需要网站？", "如何提升 Google 可见度？", "为什么需要备份？", "如何选择 IT 服务商？", "常见网络攻击有哪些？", "如何保护企业？"],
    cards: [
      "本地 SEO、Google 商家与地图可见度",
      "小团队网络安全基础",
      "网站建设：性能、体验与转化",
    ],
  },
} as const;

function getContent(locale: string) {
  return content[(locale as SupportedLocale) ?? "fr"] ?? content.fr;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = getContent(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: page.title,
    description: page.description,
    keywords: [
      "blog digital",
      "seo premium",
      "branding",
      "conversion",
      "web design premium",
      "Genesis Connect",
    ],
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = getContent(locale);

  return (
    <section className="min-h-screen bg-[#2A1C15] px-6 pb-24 pt-32 text-[#FAF9F6] md:px-12 md:pt-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#FAF9F6]/42">
            {page.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            {page.heading}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#FAF9F6]/72 md:text-lg">
            {page.intro}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {page.cards.map((card) => (
            <article
              key={card}
              className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#241710]/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-[#D4AF37]">
                Genesis Journal
              </p>
              <h2 className="mt-6 font-serif text-2xl leading-tight text-[#FAF9F6]">
                {card}
              </h2>
            </article>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#241710]/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#D4AF37]">{page.categoriesLabel}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-[#FAF9F6]/12 bg-[#2A1C15]/40 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/70"
                >
                  {category}
                </span>
              ))}
            </div>
          </section>
          <section className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#241710]/80 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.16)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#D4AF37]">{page.recommendedLabel}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
              {page.recommended.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
