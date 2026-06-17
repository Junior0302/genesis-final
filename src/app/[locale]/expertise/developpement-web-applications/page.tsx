import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function DeveloppementWebApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Développement Web & Applications",
      intro:
        "Plateformes métier, applications web et solutions sur mesure. Objectif : automatiser, structurer et fiabiliser les opérations, tout en gardant une expérience premium et performante.",
      sections: [
        {
          title: "Développement sur mesure",
          text: "Fonctionnalités adaptées à votre besoin réel : simplicité, fiabilité et évolutivité.",
        },
        {
          title: "Outils métier & plateformes internes",
          text: "Tableaux de bord, CRM léger, back-office, espaces clients et automatisations pour gagner du temps.",
        },
        {
          title: "Automatisation & intégrations",
          text: "Connexion d’outils, workflows, synchronisation de données et réduction des tâches répétitives.",
        },
        {
          title: "Interfaces modernes",
          text: "UI claire, responsive, rapide, avec une architecture pensée pour la maintenabilité et le SEO quand c’est utile.",
        },
      ],
      faqTitle: "FAQ",
      faqs: [
        {
          q: "Pouvez-vous créer une application interne pour mon entreprise ?",
          a: "Oui. Nous cadrons le besoin, les rôles utilisateurs, les données, puis nous livrons une première version rapidement avant itérations.",
        },
        {
          q: "Est-ce compatible avec Microsoft 365 / Google Workspace ?",
          a: "Oui. Nous pouvons intégrer ou aligner des usages autour de vos outils existants selon le contexte.",
        },
      ],
      localText: `Exemples de requêtes : ${targetCities
        .slice(0, 6)
        .map((city) => `développement web ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "Web Development & Applications",
      intro:
        "Business platforms, web apps and custom solutions. We focus on automation, structure and reliability while keeping a premium, fast experience.",
      sections: [
        { title: "Custom development", text: "Features built around real needs: simplicity, reliability and scalability." },
        { title: "Internal tools", text: "Dashboards, lightweight CRM, back-office, client portals and automation to save time." },
        { title: "Automation & integrations", text: "Tool connections, workflows, data sync and reduction of repetitive tasks." },
        { title: "Modern interfaces", text: "Clear, responsive and fast UI with maintainable architecture." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Can you build an internal app?", a: "Yes. We scope the need, user roles and data, then iterate from a first solid version." },
      ],
      localText: `Examples: ${targetCities.slice(0, 6).map((city) => `web development ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "Web 开发与应用",
      intro:
        "面向业务的平台、Web 应用与定制化解决方案。通过自动化与结构化提升效率，同时保持高级体验与性能。",
      sections: [
        { title: "定制开发", text: "围绕真实需求构建：简单、稳定、可扩展。" },
        { title: "业务工具与内部平台", text: "仪表盘、轻量 CRM、后台、客户空间与自动化。" },
        { title: "自动化与集成", text: "工具连接、流程编排、数据同步，减少重复劳动。" },
        { title: "现代化界面", text: "清晰响应式 UI 与可维护架构。" },
      ],
      faqTitle: "常见问题",
      faqs: [{ q: "可以做内部系统吗？", a: "可以。我们会先梳理角色、数据与流程，然后从第一版开始持续迭代。" }],
      localText: `关键词示例：${targetCities.slice(0, 6).map((city) => `Web 开发 ${city}`).join("、")}。`,
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
