import { externalSites } from "@/lib/externalSites";
import Reveal from "@/components/ui/Reveal";
import { businessEmail } from "@/lib/seo";

export default async function AbonnementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = {
    fr: {
      eyebrow: "Genesis Market",
      title: "Les abonnements et achats sont maintenant centralises sur Genesis Market.",
      description:
        "Le site principal ne gere plus les paiements d'abonnement ni les achats directs. L'ensemble des offres commerciales, souscriptions et futurs parcours transactionnels est regroupe sur Genesis Market.",
      primaryCta: "Acceder a Genesis Market",
      secondaryCta: "Nous contacter",
      label: "Parcours commercial",
      points: [
        "Abonnements centralises sur Genesis Market",
        "Achats et offres dedies au site commerce",
        "Aucun paiement direct sur le site principal",
      ],
    },
    en: {
      eyebrow: "Genesis Market",
      title: "Subscriptions and purchases are now centralized on Genesis Market.",
      description:
        "The main website no longer handles subscription payments or direct purchases. Commercial offers, subscriptions and future transactional journeys are grouped inside Genesis Market.",
      primaryCta: "Open Genesis Market",
      secondaryCta: "Contact us",
      label: "Commercial flow",
      points: [
        "Subscriptions handled on Genesis Market",
        "Purchases and offers moved to the commerce site",
        "No direct checkout on the main website",
      ],
    },
    zh: {
      eyebrow: "Genesis Market",
      title: "订阅与购买现已集中到 Genesis Market。",
      description:
        "主站不再处理订阅支付或直接购买。所有商业报价、订阅与后续交易流程都集中在 Genesis Market。",
      primaryCta: "前往 Genesis Market",
      secondaryCta: "联系我们",
      label: "商业流程",
      points: [
        "订阅由 Genesis Market 统一处理",
        "购买与报价迁移到独立商业站点",
        "主站不再提供直接支付",
      ],
    },
  }[locale as "fr" | "en" | "zh"] ?? {
    eyebrow: "Genesis Market",
    title: "Les abonnements et achats sont maintenant centralises sur Genesis Market.",
    description:
      "Le site principal ne gere plus les paiements d'abonnement ni les achats directs. L'ensemble des offres commerciales, souscriptions et futurs parcours transactionnels est regroupe sur Genesis Market.",
    primaryCta: "Acceder a Genesis Market",
    secondaryCta: "Nous contacter",
    label: "Parcours commercial",
    points: [
      "Abonnements centralises sur Genesis Market",
      "Achats et offres dedies au site commerce",
      "Aucun paiement direct sur le site principal",
    ],
  };

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 pb-16 pt-32 md:px-16 md:pt-40 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/40">
              {page.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-serif leading-[0.95]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#FAF9F6]/70">
              {page.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={externalSites.market.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/30 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#D4AF37] transition-colors hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/8"
              >
                {page.primaryCta}
              </a>
              <a
                href={`mailto:${businessEmail}`}
                className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] transition-colors hover:border-[#FAF9F6]/45 hover:bg-[#FAF9F6]/6"
              >
                {page.secondaryCta}
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="rounded-[34px] border border-[#FAF9F6]/10 bg-[#251812] p-8 md:p-10"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              {page.label}
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {page.points.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-[#FAF9F6]/10 bg-[#2A1C15]/70 px-5 py-4 text-sm leading-relaxed text-[#FAF9F6]/75"
                >
                  {point}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
