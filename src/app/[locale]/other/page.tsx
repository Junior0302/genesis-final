import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Link as IntlLink } from "@/i18n/routing";
import { externalSites } from "@/lib/externalSites";

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
          text: "La plateforme formation dispose maintenant de son propre domaine public.",
          cta: "Ouvrir Academy",
          href: externalSites.academy.href,
          external: true,
          status: "En ligne",
        },
        {
          title: "Genesis Market",
          text: "Les offres et prestations sont maintenant reliees a leur domaine dedie.",
          cta: "Ouvrir Market",
          href: externalSites.market.href,
          external: true,
          status: "En ligne",
        },
        {
          title: "Genesis Help",
          text: "L'espace d'accompagnement public est maintenant disponible sur son domaine dedie.",
          cta: "Ouvrir Help",
          href: externalSites.aide.href,
          external: true,
          status: "En ligne",
        },
        {
          title: "Blog",
          text: "Retrouver les contenus editoriaux et analyses du studio.",
          cta: "Voir le blog",
          href: "/blog",
          external: false,
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
          text: "The training platform now has its own public domain.",
          cta: "Open Academy",
          href: externalSites.academy.href,
          external: true,
          status: "Live",
        },
        {
          title: "Genesis Market",
          text: "Offers and services are now connected to their dedicated public domain.",
          cta: "Open Market",
          href: externalSites.market.href,
          external: true,
          status: "Live",
        },
        {
          title: "Genesis Help",
          text: "The support space is now available on its own public domain.",
          cta: "Open Help",
          href: externalSites.aide.href,
          external: true,
          status: "Live",
        },
        {
          title: "Blog",
          text: "Explore the studio editorial content and insights.",
          cta: "Open blog",
          href: "/blog",
          external: false,
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
          text: "培训平台现在已经拥有独立公开域名。",
          cta: "打开 Academy",
          href: externalSites.academy.href,
          external: true,
          status: "已上线",
        },
        {
          title: "Genesis Market",
          text: "产品与服务现在已经连接到独立公开域名。",
          cta: "打开 Market",
          href: externalSites.market.href,
          external: true,
          status: "已上线",
        },
        {
          title: "Genesis Help",
          text: "创业支持空间现在也有自己的公开域名。",
          cta: "打开 Help",
          href: externalSites.aide.href,
          external: true,
          status: "已上线",
        },
        {
          title: "Blog",
          text: "查看工作室的内容与分析。",
          cta: "打开博客",
          href: "/blog",
          external: false,
          status: "站内",
        },
      ],
    },
  } as const;

  const page = content[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
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
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.cards.map((card, index) => {
            const cardBody = (
              <Reveal
                delay={index * 80}
                className="flex h-full flex-col rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8 transition-transform duration-300 hover:-translate-y-1"
              >
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
              </Reveal>
            );

            if (card.external) {
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="block"
                  target="_blank"
                  rel="noreferrer"
                >
                  {cardBody}
                </Link>
              );
            }

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
