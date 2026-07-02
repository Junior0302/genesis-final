import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function SolutionsCloudPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Solutions Cloud",
      intro:
        "Solutions cloud pour structurer votre travail : Microsoft 365, Google Workspace, sauvegarde cloud, collaboration et messagerie professionnelle. Une organisation simple et efficace.",
      sections: [
        { title: "Migration & configuration", text: "Mise en place, migration, comptes, droits, organisation et bonnes pratiques." },
        { title: "Collaboration", text: "Partage documentaire, co-édition, workflows simples et structuration des espaces." },
        { title: "Sauvegarde cloud", text: "Stratégies de sauvegarde, synchronisation, reprise et protection des données." },
        { title: "Messagerie professionnelle", text: "Email pro, domaines, sécurité, SPF/DKIM/DMARC selon besoin." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Microsoft 365 ou Google Workspace ?", a: "Nous vous aidons à choisir selon vos usages, votre budget et vos contraintes, puis nous configurons proprement." },
        { q: "Pouvez-vous organiser les dossiers et droits ?", a: "Oui. L’objectif est de garder une structure simple, sécurisée et utilisable par l’équipe." },
      ],
      localText: `Exemples : ${targetCities
        .slice(0, 6)
        .map((city) => `solutions cloud ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "Cloud Solutions",
      intro:
        "Cloud solutions for structured work: Microsoft 365, Google Workspace, cloud backup, collaboration and professional email. Simple, effective organization.",
      sections: [
        { title: "Migration & setup", text: "Setup, migration, accounts, permissions, structure and best practices." },
        { title: "Collaboration", text: "Document sharing, co-editing and simple workflows." },
        { title: "Cloud backup", text: "Backup strategy, sync, recovery and data protection." },
        { title: "Professional email", text: "Domain email, security and deliverability basics." },
      ],
      faqTitle: "FAQ",
      faqs: [{ q: "Microsoft 365 or Google Workspace?", a: "We help you choose based on usage and constraints, then implement a clean setup." }],
      localText: `Examples: ${targetCities.slice(0, 6).map((city) => `cloud solutions ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "云解决方案",
      intro:
        "通过云方案梳理协作：Microsoft 365、Google Workspace、云备份、协作与企业邮箱。以简单可用为原则。",
      sections: [
        { title: "迁移与配置", text: "账号、权限、结构与实践落地。" },
        { title: "协作", text: "共享、协同编辑与简单流程。" },
        { title: "云备份", text: "备份策略、同步与恢复。" },
        { title: "企业邮箱", text: "域名邮箱与基础安全/投递配置。" },
      ],
      faqTitle: "常见问题",
      faqs: [{ q: "选 Microsoft 365 还是 Google Workspace？", a: "我们会根据场景与约束给出建议，并完成规范配置。" }],
      localText: `关键词示例：${targetCities.slice(0, 6).map((city) => `云解决方案 ${city}`).join("、")}。`,
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
