import { Link as IntlLink } from "@/i18n/routing";

type Locale = "fr" | "en" | "zh";

export default async function OtherPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale)
    ? (locale as Locale)
    : "fr";

  const content = {
    fr: {
      eyebrow: "Autre",
      title: "Les autres univers Genesis sont centralises ici.",
      description:
        "Cette page regroupe les liens externes et les espaces a venir de l'ecosysteme pour eviter un menu instable dans le header principal.",
      back: "Retour a l'accueil",
      cards: [
        {
          title: "Genesis Academy",
          text: "Retrouver les formations et contenus d'apprentissage directement sur le site principal.",
          cta: "Voir les formations",
          href: "/formation",
          status: "Interne",
        },
        {
          title: "Genesis Market",
          text: "Les offres, abonnements et services commerciaux restent centralises ici pour le moment.",
          cta: "Voir les offres",
          href: "/abonnement",
          status: "Interne",
        },
        {
          title: "Genesis Aide",
          text: "L'accompagnement et l'aide a la structuration sont disponibles sur le domaine principal.",
          cta: "Voir l'accompagnement",
          href: "/accompagnement-auto-entrepreneur",
          status: "Interne",
        },
        {
          title: "Blog",
          text: "Retrouver les contenus editoriaux et analyses du studio.",
          cta: "Voir le blog",
          href: "/blog",
          status: "Interne",
        },
      ],
    },
    en: {
      eyebrow: "Other",
      title: "The other Genesis spaces are grouped here.",
      description:
        "This page gathers external links and upcoming spaces so the main header stays clean and stable.",
      back: "Back to home",
      cards: [
        {
          title: "Genesis Academy",
          text: "Find the learning offers and training content directly on the main website.",
          cta: "View training",
          href: "/formation",
          status: "Internal",
        },
        {
          title: "Genesis Market",
          text: "Offers, subscriptions and commercial services stay centralized here for now.",
          cta: "View offers",
          href: "/abonnement",
          status: "Internal",
        },
        {
          title: "Genesis Aide",
          text: "Support and business guidance remain available on the main domain for now.",
          cta: "View support",
          href: "/accompagnement-auto-entrepreneur",
          status: "Internal",
        },
        {
          title: "Blog",
          text: "Explore the studio editorial content and insights.",
          cta: "Open blog",
          href: "/blog",
          status: "Internal",
        },
      ],
    },
    zh: {
      eyebrow: "其他",
      title: "Genesis 其他空间集中在这里。",
      description:
        "这个页面集中展示外部链接和即将上线的空间，让主导航保持稳定和清晰。",
      back: "返回首页",
      cards: [
        {
          title: "Genesis Academy",
          text: "培训与学习内容暂时直接放在主站内。",
          cta: "查看培训",
          href: "/formation",
          status: "站内",
        },
        {
          title: "Genesis Market",
          text: "产品、订阅和商业服务目前统一保留在主域名内。",
          cta: "查看服务",
          href: "/abonnement",
          status: "站内",
        },
        {
          title: "Genesis Aide",
          text: "创业支持与陪跑服务目前也保留在主站内。",
          cta: "查看支持",
          href: "/accompagnement-auto-entrepreneur",
          status: "站内",
        },
        {
          title: "Blog",
          text: "查看工作室的内容与分析。",
          cta: "打开博客",
          href: "/blog",
          status: "站内",
        },
      ],
    },
  } as const;

  const page = content[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/45">
            {page.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">
            {page.description}
          </p>
          <IntlLink
            href="/"
            className="mt-8 inline-flex items-center rounded-full border border-[#FAF9F6]/15 px-6 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/78 transition-colors hover:border-[#FAF9F6]/30 hover:text-[#FAF9F6]"
          >
            {page.back}
          </IntlLink>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.cards.map((card) => {
            const cardBody = (
              <div className="flex h-full flex-col rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl">{card.title}</h2>
                  <span className="rounded-full border border-[#FAF9F6]/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#FAF9F6]/55">
                    {card.status}
                  </span>
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                  {card.text}
                </p>
                <div className="mt-8 inline-flex items-center text-xs uppercase tracking-[0.24em] text-[#D7B07A]">
                  {card.cta}
                </div>
              </div>
            );

            return (
              <IntlLink key={card.title} href={card.href} className="block">
                {cardBody}
              </IntlLink>
            );
          })}
        </div>
      </div>
    </main>
  );
}
