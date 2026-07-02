import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function ReseauxWifiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Réseaux & Wi‑Fi",
      intro:
        "Installation réseau et Wi‑Fi pour professionnels et petites structures : couverture fiable, sécurité, segmentation simple et performances stables au quotidien.",
      sections: [
        { title: "Installation réseau", text: "Mise en place LAN, routeur, switch, câblage, configuration et tests." },
        { title: "Installation Wi‑Fi", text: "Étude de couverture, optimisation, points d’accès, gestion simple et stabilité." },
        { title: "Sécurisation", text: "Accès invités, mots de passe, durcissement, mises à jour et bonnes pratiques." },
        { title: "Supervision légère", text: "Contrôles réguliers et recommandations pour éviter les pannes et les lenteurs." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Pouvez-vous améliorer un Wi‑Fi existant ?", a: "Oui. Nous auditons la couverture et la configuration, puis nous optimisons les points d’accès et les réglages." },
        { q: "Est-ce sécurisé pour une entreprise ?", a: "Oui. Nous mettons en place des bonnes pratiques et une configuration adaptée (accès, segmentation simple, mises à jour)." },
      ],
      localText: `Requêtes ciblées : ${targetCities
        .slice(0, 6)
        .map((city) => `installation Wi‑Fi ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "Networks & Wi‑Fi",
      intro:
        "Network and Wi‑Fi setup for small businesses: reliable coverage, security, simple segmentation and stable daily performance.",
      sections: [
        { title: "Network setup", text: "LAN, router, switch configuration and testing." },
        { title: "Wi‑Fi setup", text: "Coverage review, access points, optimization and stability." },
        { title: "Security", text: "Guest access, hardening, updates and best practices." },
        { title: "Light monitoring", text: "Checks and recommendations to prevent slowdowns and outages." },
      ],
      faqTitle: "FAQ",
      faqs: [{ q: "Can you improve an existing Wi‑Fi?", a: "Yes. We audit coverage and configuration then optimize access points and settings." }],
      localText: `Examples: ${targetCities.slice(0, 6).map((city) => `Wi‑Fi setup ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "网络与 Wi‑Fi",
      intro:
        "面向小企业的网络与 Wi‑Fi 部署：覆盖稳定、配置清晰、基础安全与长期可用性。",
      sections: [
        { title: "网络部署", text: "LAN、路由、交换与配置测试。" },
        { title: "Wi‑Fi 部署", text: "覆盖评估、AP 部署、优化与稳定性。" },
        { title: "安全加固", text: "访客网络、更新与最佳实践。" },
        { title: "轻量监控", text: "定期检查与优化建议，避免卡顿与掉线。" },
      ],
      faqTitle: "常见问题",
      faqs: [{ q: "可以优化现有 Wi‑Fi 吗？", a: "可以。我们评估覆盖与配置，然后优化 AP 布局与参数。" }],
      localText: `关键词示例：${targetCities.slice(0, 6).map((city) => `Wi‑Fi 安装 ${city}`).join("、")}。`,
      contact: "联系 Genesis Connect",
    },
  }[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/60">{page.eyebrow}</p>
        <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.03em] md:text-7xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-[1.85] text-[#FAF9F6]/88 md:text-[1.22rem]">{page.intro}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <section key={section.title} className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
              <h2 className="font-serif text-[2rem] leading-[1.08] tracking-[-0.02em]">{section.title}</h2>
              <p className="mt-5 text-base leading-[1.8] text-[#FAF9F6]/84 md:text-[1.08rem]">{section.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/62">{page.faqTitle}</p>
          <div className="mt-8 space-y-6">
            {page.faqs.map((item) => (
              <div key={item.q} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                <h3 className="font-serif text-[2rem] leading-[1.08] tracking-[-0.02em] text-[#FAF9F6]">{item.q}</h3>
                <p className="mt-4 max-w-4xl text-base leading-[1.8] text-[#FAF9F6]/84 md:text-[1.08rem]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 text-base leading-[1.75] text-[#FAF9F6]/72">{page.localText}</p>

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
