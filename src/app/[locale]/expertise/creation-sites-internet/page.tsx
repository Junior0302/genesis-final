import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function CreationSitesInternetPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Création de Sites Internet",
      intro:
        "Sites vitrines, sites professionnels et e-commerce conçus pour la crédibilité, la performance et la visibilité. Un design premium, une base technique propre et un contenu utile pour Google et les moteurs IA.",
      sections: [
        {
          title: "Sites vitrines & sites professionnels",
          text: "Une présence claire et élégante pour inspirer confiance, présenter vos services et déclencher des prises de contact.",
        },
        {
          title: "E-commerce",
          text: "Une boutique rapide, structurée et orientée conversion, avec un parcours utilisateur fluide et un SEO solide.",
        },
        {
          title: "Refonte & amélioration",
          text: "Audit, refonte partielle ou complète, optimisation performance, architecture SEO et amélioration de l’expérience.",
        },
        {
          title: "Maintenance & hébergement",
          text: "Mises à jour, sécurité, monitoring, corrections, et accompagnement pour garder un site stable et durable.",
        },
        {
          title: "Optimisation SEO & IA",
          text: "Structuration du contenu, données structurées schema.org, SEO local, et optimisation pour les moteurs IA (ChatGPT, Gemini, Perplexity).",
        },
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          q: "Combien de temps faut-il pour créer un site ?",
          a: "Cela dépend du périmètre (vitrine, e-commerce, refonte). Nous cadrons d’abord les objectifs, puis nous livrons par étapes.",
        },
        {
          q: "Est-ce que le SEO est inclus ?",
          a: "Oui. Nous intégrons une base SEO technique, un contenu structuré, et des données structurées. Le SEO local peut être renforcé selon la zone ciblée.",
        },
        {
          q: "Pouvez-vous assurer la maintenance ?",
          a: "Oui. Nous proposons un suivi pour la sécurité, les mises à jour et l’amélioration continue.",
        },
      ],
      localText: `Requêtes ciblées : ${targetCities
        .slice(0, 6)
        .map((city) => `création site internet ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "Website Creation",
      intro:
        "Showcase websites, business sites and e-commerce built for credibility, performance and visibility. Premium design, strong technical foundations and useful content for Google and AI search.",
      sections: [
        { title: "Showcase & business websites", text: "A clear and elegant presence to build trust and generate qualified leads." },
        { title: "E-commerce", text: "Fast, structured and conversion-focused storefronts with solid SEO foundations." },
        { title: "Redesign & improvement", text: "Audit, redesign, performance upgrades, SEO architecture and UX improvements." },
        { title: "Maintenance & hosting", text: "Updates, security, monitoring and ongoing reliability." },
        { title: "SEO & AI optimization", text: "Content structure, schema.org, local SEO and AI search optimization (ChatGPT, Gemini, Perplexity)." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Is SEO included?", a: "Yes. We implement technical SEO, structured content and structured data. Local SEO can be strengthened for target cities." },
        { q: "Do you provide maintenance?", a: "Yes. We offer ongoing support for security, updates and continuous improvement." },
      ],
      localText: `Targeted queries: ${targetCities.slice(0, 6).map((city) => `website creation ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "网站建设",
      intro:
        "面向企业与品牌的网站与电商建设：兼顾高级审美、性能与可见度。提供扎实的技术基础与对 Google/AI 搜索友好的内容结构。",
      sections: [
        { title: "企业展示与官网", text: "清晰且可信的线上形象，提升咨询与转化。" },
        { title: "电商", text: "快速、结构化、面向转化的电商体验与 SEO 基础。" },
        { title: "改版与优化", text: "审计、改版、性能优化与体验升级。" },
        { title: "维护与托管", text: "更新、安全、监控与持续稳定运营。" },
        { title: "SEO 与 AI 优化", text: "内容结构、schema.org、本地 SEO 与 AI 搜索优化（ChatGPT/Gemini/Perplexity）。" },
      ],
      faqTitle: "常见问题",
      faqs: [
        { q: "是否包含 SEO？", a: "是的。我们会提供技术 SEO、结构化内容与结构化数据。本地 SEO 可根据城市进一步强化。" },
        { q: "是否提供维护？", a: "是的。我们提供安全更新、维护与持续优化支持。" },
      ],
      localText: `本地关键词示例：${targetCities.slice(0, 6).map((city) => `网站建设 ${city}`).join("、")}。`,
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
            <section
              key={section.title}
              className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8"
            >
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
