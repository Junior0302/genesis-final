import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function MaintenanceInformatiquePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Maintenance Informatique",
      intro:
        "Maintenance préventive et corrective pour éviter les pannes, limiter les interruptions et garder un environnement de travail fiable. Une approche simple, structurée et adaptée aux petites structures.",
      sections: [
        { title: "Maintenance préventive", text: "Mises à jour, nettoyage, optimisation, bonnes pratiques et contrôle régulier." },
        { title: "Maintenance corrective", text: "Résolution d’incidents, réparation logicielle, remise en état et stabilisation." },
        { title: "Supervision & sécurité", text: "Vérifications, recommandations, durcissement de base et réduction des risques." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Proposez-vous de l’infogérance ?", a: "Oui, sous une forme adaptée : maintenance, support, suivi et priorisation des actions." },
        { q: "Est-ce utile pour une petite entreprise ?", a: "Oui. La maintenance évite les pannes coûteuses, protège les données et améliore la productivité." },
      ],
      localText: `Requêtes ciblées : ${targetCities
        .slice(0, 6)
        .map((city) => `maintenance informatique ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "IT Maintenance",
      intro:
        "Preventive and corrective maintenance to reduce downtime and keep systems reliable. A structured approach designed for small organizations.",
      sections: [
        { title: "Preventive maintenance", text: "Updates, cleanup, optimization, best practices and regular checks." },
        { title: "Corrective maintenance", text: "Incident resolution, software recovery, stabilization and fixes." },
        { title: "Monitoring & security", text: "Checks, recommendations and basic hardening to reduce risks." },
      ],
      faqTitle: "FAQ",
      faqs: [{ q: "Is this useful for small teams?", a: "Yes. Maintenance prevents costly incidents, protects data and improves productivity." }],
      localText: `Examples: ${targetCities.slice(0, 6).map((city) => `IT maintenance ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "IT 维护",
      intro:
        "通过预防性与纠正性维护减少故障与停机，保持系统稳定可靠。面向小团队的结构化方案。",
      sections: [
        { title: "预防性维护", text: "更新、清理、优化与定期检查。" },
        { title: "纠正性维护", text: "故障处理、软件修复、恢复与稳定性提升。" },
        { title: "监控与安全", text: "基础加固与建议，降低风险。" },
      ],
      faqTitle: "常见问题",
      faqs: [{ q: "小团队需要维护吗？", a: "需要。维护可以避免昂贵故障、保护数据并提升效率。" }],
      localText: `关键词示例：${targetCities.slice(0, 6).map((city) => `IT 维护 ${city}`).join("、")}。`,
      contact: "联系 Genesis Connect",
    },
  }[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/45">{page.eyebrow}</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">{page.intro}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
