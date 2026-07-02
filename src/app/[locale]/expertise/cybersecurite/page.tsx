import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function CybersecuritePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Cybersécurité",
      intro:
        "Cybersécurité pragmatique pour petites structures : sécuriser les accès, réduire les risques, protéger les données et mettre en place des habitudes simples et efficaces.",
      sections: [
        { title: "Audit & diagnostic", text: "Analyse des risques, points faibles, priorités et plan d’action réaliste." },
        { title: "Protection des postes", text: "Hygiène numérique, mises à jour, antivirus, durcissement et bonnes pratiques." },
        { title: "Gestion des accès", text: "Mots de passe, MFA, droits, séparation des comptes et contrôle des usages." },
        { title: "Sauvegardes", text: "Stratégie de sauvegarde, tests de restauration, reprise simple et continuité." },
        { title: "Sensibilisation", text: "Phishing, erreurs courantes, checklists et formation légère des équipes." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Est-ce que la cybersécurité est utile pour une TPE ?", a: "Oui. Les petites structures sont souvent ciblées. Les bonnes pratiques et les sauvegardes réduisent fortement les risques." },
        { q: "Proposez-vous une approche simple ?", a: "Oui. On priorise l’essentiel : accès, sauvegardes, mises à jour, et hygiène numérique." },
      ],
      localText: `Requêtes ciblées : ${targetCities
        .slice(0, 6)
        .map((city) => `cybersécurité ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "Cybersecurity",
      intro:
        "Pragmatic cybersecurity for small organizations: secure access, reduce risks, protect data and implement simple, effective habits.",
      sections: [
        { title: "Audit & diagnosis", text: "Risk review, weak points, priorities and a realistic action plan." },
        { title: "Endpoint protection", text: "Updates, hygiene, hardening and best practices." },
        { title: "Access management", text: "Passwords, MFA, rights, account separation and usage control." },
        { title: "Backups", text: "Backup strategy, restore tests and simple recovery planning." },
        { title: "Awareness", text: "Phishing prevention and lightweight training for teams." },
      ],
      faqTitle: "FAQ",
      faqs: [{ q: "Is this useful for small businesses?", a: "Yes. Small organizations are targeted too. Basics like access control and backups reduce risks significantly." }],
      localText: `Examples: ${targetCities.slice(0, 6).map((city) => `cybersecurity ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "网络安全",
      intro:
        "面向小团队的务实网络安全：加固访问、降低风险、保护数据，并建立简单有效的安全习惯。",
      sections: [
        { title: "审计与诊断", text: "评估风险点与优先级，制定可执行方案。" },
        { title: "终端防护", text: "更新、卫生、安全加固与最佳实践。" },
        { title: "访问管理", text: "密码、MFA、权限与账号分离。" },
        { title: "备份", text: "备份策略、恢复演练与简单的应急方案。" },
        { title: "安全意识", text: "钓鱼防护与轻量培训。" },
      ],
      faqTitle: "常见问题",
      faqs: [{ q: "小公司需要网络安全吗？", a: "需要。基础措施（访问管理与备份）能显著降低风险。" }],
      localText: `关键词示例：${targetCities.slice(0, 6).map((city) => `网络安全 ${city}`).join("、")}。`,
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
