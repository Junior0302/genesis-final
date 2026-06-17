import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function SeoVisibiliteLocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "SEO & Visibilité Locale",
      intro:
        "Référencement naturel et SEO local pour améliorer la visibilité sur Google, Google Maps et les moteurs IA. Architecture, contenu, données structurées et signaux locaux.",
      sections: [
        { title: "Audit SEO", text: "Analyse technique, structure, indexation, performance, contenu et opportunités." },
        { title: "SEO local & Google Business Profile", text: "Optimisation GBP, cohérence NAP, signaux locaux, pages services et FAQ." },
        { title: "Optimisation technique", text: "Sitemap, robots, metadata, hreflang, structured data, performance et qualité." },
        { title: "Optimisation IA (LLM SEO / GEO)", text: "Contenu plus explicite, entités, FAQ, schema.org et formulation orientée moteurs IA." },
        { title: "Création de contenu", text: "Pages services, contenus locaux, articles et enrichissement éditorial utile." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Peut-on améliorer Google Maps ?", a: "Oui. Le SEO local combine Google Business Profile, contenu local, cohérence des informations et signaux de confiance." },
        { q: "Optimisez-vous pour ChatGPT / Gemini ?", a: "Oui. Nous renforçons la clarté métier, les entités, les FAQ et les données structurées pour les moteurs IA." },
      ],
      localText: `Exemples : ${targetCities
        .slice(0, 6)
        .map((city) => `SEO local ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "SEO & Local Visibility",
      intro:
        "SEO and local SEO to improve visibility on Google, Google Maps and AI search. Architecture, content, structured data and local signals.",
      sections: [
        { title: "SEO audit", text: "Technical review, structure, indexing, performance, content and opportunities." },
        { title: "Local SEO & Google Business Profile", text: "GBP optimization, local consistency, service pages and FAQs." },
        { title: "Technical optimization", text: "Sitemap, robots, metadata, hreflang, structured data and performance." },
        { title: "AI optimization", text: "Entity clarity, FAQs and schema.org to support AI-based search." },
        { title: "Content creation", text: "Service pages, local content, blog topics and editorial enrichment." },
      ],
      faqTitle: "FAQ",
      faqs: [{ q: "Can you improve Google Maps visibility?", a: "Yes. Local SEO combines GBP, local content, consistent information and trust signals." }],
      localText: `Examples: ${targetCities.slice(0, 6).map((city) => `local SEO ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "SEO 与本地可见度",
      intro:
        "通过 SEO 与本地 SEO 提升 Google、Google Maps 与 AI 搜索的可见度：结构、内容、结构化数据与本地信号。",
      sections: [
        { title: "SEO 审计", text: "技术、结构、收录、性能与内容机会分析。" },
        { title: "本地 SEO 与 Google 商家", text: "GBP 优化、信息一致性、本地内容与 FAQ。" },
        { title: "技术优化", text: "Sitemap、robots、metadata、hreflang、结构化数据与性能。" },
        { title: "AI 搜索优化", text: "增强业务表达清晰度、实体、FAQ 与 schema.org。" },
        { title: "内容建设", text: "服务页、本地内容、博客主题与持续丰富。" },
      ],
      faqTitle: "常见问题",
      faqs: [{ q: "能提升 Google 地图可见度吗？", a: "能。本地 SEO 结合商家资料、内容、信息一致性与信任信号。" }],
      localText: `关键词示例：${targetCities.slice(0, 6).map((city) => `本地 SEO ${city}`).join("、")}。`,
      contact: "联系 Genesis Connect",
    },
  }[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/45">{page.eyebrow}</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">{page.intro}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <section key={section.title} className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
              <h2 className="font-serif text-2xl">{section.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">{section.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.faqTitle}</p>
          <div className="mt-8 space-y-6">
            {page.faqs.map((item) => (
              <div key={item.q} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                <h3 className="font-serif text-2xl text-[#FAF9F6]">{item.q}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#FAF9F6]/72 md:text-base">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 text-sm text-[#FAF9F6]/55">{page.localText}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/85 transition-colors hover:border-[#FAF9F6]/35 hover:text-[#FAF9F6]"
          >
            {page.contact}
          </Link>
          <Link
            href="/expertise"
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/12 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/70 transition-colors hover:border-[#FAF9F6]/25 hover:text-[#FAF9F6]"
          >
            {safeLocale === "fr" ? "Retour à Expertise" : safeLocale === "en" ? "Back to Expertise" : "返回 Expertise"}
          </Link>
        </div>
      </div>
    </main>
  );
}
