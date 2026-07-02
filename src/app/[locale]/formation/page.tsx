import { externalSites } from "@/lib/externalSites";
import Reveal from "@/components/ui/Reveal";
import { businessEmail } from "@/lib/seo";

export default async function FormationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = {
    fr: {
      eyebrow: "Genesis Academy",
      title: "Les formations sont maintenant centralisees sur Genesis Academy.",
      description:
        "Le site principal ne gere plus l'inscription ni le paiement des formations. Toute l'experience formation, le contenu dedie et les futurs paiements sont rassembles sur Genesis Academy pour un SEO et un parcours plus clairs.",
      primaryCta: "Acceder a Genesis Academy",
      secondaryCta: "Nous contacter",
      bullets: [
        "Catalogue formation dedie",
        "Parcours d'inscription centralise",
        "Paiement formation reserve a Genesis Academy",
      ],
    },
    en: {
      eyebrow: "Genesis Academy",
      title: "Training is now centralized on Genesis Academy.",
      description:
        "The main website no longer handles training enrollment or payments. The full training journey, dedicated content and future checkouts are grouped inside Genesis Academy for clearer SEO and a more focused conversion path.",
      primaryCta: "Open Genesis Academy",
      secondaryCta: "Contact us",
      bullets: [
        "Dedicated training catalog",
        "Centralized enrollment flow",
        "Training payment handled only on Genesis Academy",
      ],
    },
    zh: {
      eyebrow: "Genesis Academy",
      title: "培训内容现已集中到 Genesis Academy。",
      description:
        "主站不再处理培训报名与支付。完整培训体验、专属内容以及后续支付流程都将集中在 Genesis Academy，以获得更清晰的 SEO 与转化路径。",
      primaryCta: "前往 Genesis Academy",
      secondaryCta: "联系我们",
      bullets: [
        "独立培训目录",
        "集中式报名流程",
        "培训支付仅在 Genesis Academy 处理",
      ],
    },
  }[locale as "fr" | "en" | "zh"];

  const page = content ?? {
    eyebrow: "Genesis Academy",
    title: "Les formations sont maintenant centralisees sur Genesis Academy.",
    description:
      "Le site principal ne gere plus l'inscription ni le paiement des formations. Toute l'experience formation, le contenu dedie et les futurs paiements sont rassembles sur Genesis Academy pour un SEO et un parcours plus clairs.",
    primaryCta: "Acceder a Genesis Academy",
    secondaryCta: "Nous contacter",
    bullets: [
      "Catalogue formation dedie",
      "Parcours d'inscription centralise",
      "Paiement formation reserve a Genesis Academy",
    ],
  };

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 pb-20 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/40">
              {page.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-serif leading-[0.95] md:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#FAF9F6]/68 md:text-lg">
              {page.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={externalSites.academy.href}
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
            className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#251812]/92 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-10"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/42">
              {page.eyebrow}
            </p>
            <div className="mt-6 flex flex-col gap-4">
              {page.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#FAF9F6]/10 bg-[#2A1C15]/70 px-5 py-4 text-sm leading-relaxed text-[#FAF9F6]/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
