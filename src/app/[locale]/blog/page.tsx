import type { Metadata } from "next";

type SupportedLocale = "fr" | "en" | "zh";

const content = {
  fr: {
    title: "Blog premium et strategie digitale",
    description:
      "Articles autour du branding, du web premium, du SEO, de la conversion et des activations digitales pour marques et entrepreneurs.",
    eyebrow: "Blog",
    heading: "Un espace editorial pour le fond, pas juste pour la forme.",
    intro:
      "Le blog Genesis Connect reunira des contenus sur le positionnement, la performance web, le SEO, les parcours d'achat, le design premium et la clarte business.",
    cards: [
      "SEO premium et architecture de marque",
      "Sites de vente, abonnements et tunnels de conversion",
      "Direction artistique digitale et credibilite business",
    ],
  },
  en: {
    title: "Premium blog and digital strategy",
    description:
      "Editorial content around branding, premium web, SEO, conversion and digital growth for brands and entrepreneurs.",
    eyebrow: "Blog",
    heading: "An editorial space built for depth, not noise.",
    intro:
      "The Genesis Connect blog will bring together content on positioning, web performance, SEO, purchase journeys, premium design and business clarity.",
    cards: [
      "Premium SEO and brand architecture",
      "Sales websites, subscriptions and conversion flows",
      "Digital art direction and business credibility",
    ],
  },
  zh: {
    title: "高端博客与数字战略",
    description:
      "围绕品牌建设、高端网站、SEO、转化与数字增长的内容空间，服务品牌与创业者。",
    eyebrow: "博客",
    heading: "这是一个注重深度而非噪音的内容空间。",
    intro:
      "Genesis Connect 博客将聚焦定位、网站性能、SEO、购买路径、高端设计与商业清晰度等主题。",
    cards: [
      "高端 SEO 与品牌架构",
      "销售网站、订阅与转化路径",
      "数字艺术指导与商业可信度",
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
      </div>
    </section>
  );
}
