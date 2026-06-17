import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function DepannageInformatiquePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Dépannage Informatique",
      intro:
        "Dépannage informatique pour particuliers et professionnels : réparation PC, suppression de virus, assistance à distance, installation matériel, sauvegarde et intervention sur site.",
      bulletsTitle: "Ce que nous prenons en charge",
      bullets: [
        "Réparation PC et ordinateur portable",
        "Suppression de virus / nettoyage et remise en état",
        "Assistance à distance et support informatique",
        "Installation matériel et configuration",
        "Sauvegarde et récupération de données (selon cas)",
        "Intervention sur site et remise en service",
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Intervenez-vous à distance ?", a: "Oui. Quand c’est possible, l’assistance à distance permet de résoudre rapidement la majorité des incidents logiciels." },
        { q: "Faites-vous la suppression de virus ?", a: "Oui. Nous réalisons un diagnostic, un nettoyage et des recommandations pour éviter la récidive." },
        { q: "Pouvez-vous intervenir sur site ?", a: "Oui, selon la zone. Nous couvrons notamment Paris et plusieurs villes autour de Strasbourg, et nous travaillons aussi à distance." },
      ],
      localText: `Requêtes ciblées : ${targetCities
        .slice(0, 6)
        .map((city) => `dépannage informatique ${city}`)
        .join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "IT Troubleshooting",
      intro:
        "IT troubleshooting for individuals and businesses: PC repair, malware cleanup, remote support, hardware setup, backup and on-site intervention.",
      bulletsTitle: "What we handle",
      bullets: [
        "PC and laptop repair",
        "Malware cleanup and system recovery",
        "Remote support and IT assistance",
        "Hardware installation and configuration",
        "Backup and data recovery (case-dependent)",
        "On-site intervention and restoration",
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Do you provide remote support?", a: "Yes. When possible, remote support solves most software incidents quickly." },
        { q: "Can you remove viruses?", a: "Yes. We diagnose, clean and recommend practices to prevent recurrence." },
      ],
      localText: `Examples: ${targetCities.slice(0, 6).map((city) => `IT support ${city}`).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "IT 故障处理",
      intro:
        "面向个人与企业的 IT 故障处理：PC 维修、病毒清理、远程支持、设备安装、备份与上门服务。",
      bulletsTitle: "服务范围",
      bullets: ["PC/笔记本维修", "病毒清理与系统恢复", "远程支持与 IT 协助", "设备安装与配置", "备份与数据恢复（视情况）", "上门处理与恢复运行"],
      faqTitle: "常见问题",
      faqs: [
        { q: "支持远程处理吗？", a: "支持。很多软件问题可以通过远程快速解决。" },
        { q: "可以清理病毒吗？", a: "可以。我们会诊断、清理并给出防护建议。" },
      ],
      localText: `关键词示例：${targetCities.slice(0, 6).map((city) => `IT 支持 ${city}`).join("、")}。`,
      contact: "联系 Genesis Connect",
    },
  }[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/45">{page.eyebrow}</p>
        <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">{page.intro}</p>

        <section className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.bulletsTitle}</p>
          <ul className="mt-8 space-y-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
            {page.bullets.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

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
