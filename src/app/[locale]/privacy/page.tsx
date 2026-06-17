type Locale = "fr" | "en" | "zh";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Confidentialité",
      title: "Politique de confidentialité",
      intro:
        "Genesis Connect respecte la confidentialité. Cette page décrit les principes généraux sur la collecte, l’utilisation et la protection des informations.",
      sections: [
        {
          title: "Données collectées",
          text: "Nous pouvons collecter des informations transmises volontairement (email de contact) et des données techniques nécessaires au fonctionnement et à la mesure d’audience (selon consentement).",
        },
        {
          title: "Finalités",
          text: "Répondre aux demandes, améliorer l’expérience, analyser les performances et sécuriser le site.",
        },
        {
          title: "Conservation",
          text: "Les données sont conservées uniquement le temps nécessaire aux finalités décrites, puis supprimées ou anonymisées.",
        },
        {
          title: "Vos droits",
          text: "Vous pouvez demander l’accès, la rectification ou la suppression de vos données en nous contactant par email.",
        },
      ],
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Privacy",
      title: "Privacy policy",
      intro:
        "Genesis Connect respects privacy. This page outlines the general principles about data collection, use and protection.",
      sections: [
        {
          title: "Collected data",
          text: "We may collect information you voluntarily provide (contact email) and technical data required for operation and analytics (depending on consent).",
        },
        {
          title: "Purposes",
          text: "Respond to requests, improve the experience, analyze performance and secure the website.",
        },
        {
          title: "Retention",
          text: "Data is kept only for as long as needed for the purposes described, then deleted or anonymized.",
        },
        {
          title: "Your rights",
          text: "You can request access, correction or deletion of your data by contacting us via email.",
        },
      ],
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "隐私",
      title: "隐私政策",
      intro:
        "Genesis Connect 尊重隐私。本页说明关于数据收集、使用与保护的基本原则。",
      sections: [
        {
          title: "收集的数据",
          text: "我们可能收集你主动提供的信息（联系邮箱）以及网站运行与统计所需的技术数据（取决于同意）。",
        },
        {
          title: "用途",
          text: "用于回复咨询、优化体验、分析性能并保障网站安全。",
        },
        {
          title: "保存期限",
          text: "数据仅在实现目的所需期限内保存，随后删除或匿名化。",
        },
        {
          title: "你的权利",
          text: "你可以通过邮件联系我们，申请访问、更正或删除相关数据。",
        },
      ],
      contact: "联系 Genesis Connect",
    },
  }[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/45">{page.eyebrow}</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">{page.intro}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <section key={section.title} className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
              <h2 className="font-serif text-2xl">{section.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">{section.text}</p>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="mailto:hello@genesisconnectstudio.com"
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/85 transition-colors hover:border-[#FAF9F6]/35 hover:text-[#FAF9F6]"
          >
            {page.contact}
          </a>
        </div>
      </div>
    </main>
  );
}
