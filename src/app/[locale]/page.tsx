import Link from "next/link";
import { externalSites } from "@/lib/externalSites";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    fr: {
      eyebrow: "Genesis Connect Studio",
      title: "Un ecosysteme plus clair pour le studio, la formation, le market et l'aide.",
      subtitle:
        "Le site principal reste centre sur le studio, l'expertise et le contact. Les autres experiences sont preparees comme sites dedies pour alleger le projet et separer le SEO.",
      availability: "Exploration locale",
      contactLabel: "Contact",
      contactValue: "hello@genesisconnectstudio.com",
      contactCta: "Nous ecrire",
      primaryCta: "Voir l'expertise",
      secondaryCta: "Voir les projets",
      ecosystemTitle: "Ecosysteme relie",
      academyDescription: "Site dedie aux formations premium.",
      marketDescription: "Site dedie aux achats, offres et abonnements.",
      aideDescription: "Site dedie au programme d'aide aux entrepreneurs.",
    },
    en: {
      eyebrow: "Genesis Connect Studio",
      title: "A clearer ecosystem for the studio, training, market and support.",
      subtitle:
        "The main website stays focused on the studio, expertise and contact. The other experiences are prepared as dedicated websites to keep the codebase lighter and the SEO more precise.",
      availability: "Local review mode",
      contactLabel: "Contact",
      contactValue: "hello@genesisconnectstudio.com",
      contactCta: "Email us",
      primaryCta: "Explore expertise",
      secondaryCta: "View work",
      ecosystemTitle: "Connected ecosystem",
      academyDescription: "Dedicated website for premium trainings.",
      marketDescription: "Dedicated website for offers, purchases and subscriptions.",
      aideDescription: "Dedicated website for entrepreneur support.",
    },
    zh: {
      eyebrow: "Genesis Connect Studio",
      title: "为工作室、培训、商城与创业帮助打造更清晰的生态体系。",
      subtitle: "主站聚焦工作室、专业能力与联系，其余体验将拆分为独立网站，以减轻代码并强化各自 SEO。",
      availability: "本地预览模式",
      contactLabel: "联系",
      contactValue: "hello@genesisconnectstudio.com",
      contactCta: "发送邮件",
      primaryCta: "查看专业能力",
      secondaryCta: "查看项目",
      ecosystemTitle: "已连接的生态站点",
      academyDescription: "专注高端培训的独立网站。",
      marketDescription: "专注报价、购买与订阅的独立网站。",
      aideDescription: "专注创业者扶持计划的独立网站。",
    },
  }[locale as "fr" | "en" | "zh"] ?? {
    eyebrow: "Genesis Connect Studio",
    title: "Un ecosysteme plus clair pour le studio, la formation, le market et l'aide.",
    subtitle:
      "Le site principal reste centre sur le studio, l'expertise et le contact. Les autres experiences sont preparees comme sites dedies pour alleger le projet et separer le SEO.",
    availability: "Exploration locale",
    contactLabel: "Contact",
    contactValue: "hello@genesisconnectstudio.com",
    contactCta: "Nous ecrire",
    primaryCta: "Voir l'expertise",
    secondaryCta: "Voir les projets",
    ecosystemTitle: "Ecosysteme relie",
    academyDescription: "Site dedie aux formations premium.",
    marketDescription: "Site dedie aux achats, offres et abonnements.",
    aideDescription: "Site dedie au programme d'aide aux entrepreneurs.",
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#2A1C15] text-[#FAF9F6]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(240,234,224,0.08),_transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-screen [background-image:linear-gradient(rgba(250,249,246,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(250,249,246,0.35)_1px,transparent_1px)] [background-size:44px_44px]" />

      <section className="relative z-10 flex min-h-screen items-center px-8 pb-16 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/45">
              {content.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-[5.6rem]">
              {content.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#FAF9F6]/72 md:text-lg">
              {content.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/expertise`}
                className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/30 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#D4AF37] transition-colors hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/8"
              >
                {content.primaryCta}
              </Link>
              <Link
                href={`/${locale}/work`}
                className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/10 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/72 transition-colors hover:border-[#FAF9F6]/30 hover:text-[#FAF9F6]"
              >
                {content.secondaryCta}
              </Link>
              <a
                href="mailto:hello@genesisconnectstudio.com"
                className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] transition-colors hover:border-[#FAF9F6]/45 hover:bg-[#FAF9F6]/6"
              >
                {content.contactCta}
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#251812]/92 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-10">
            <div className="border-b border-[#FAF9F6]/10 pb-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/42">
                {content.availability}
              </p>
            </div>

            <div className="pt-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/42">
                {content.contactLabel}
              </p>
              <a
                href="mailto:hello@genesisconnectstudio.com"
                className="mt-4 block break-all font-serif text-2xl text-[#FAF9F6] transition-colors hover:text-[#D4AF37] md:text-3xl"
              >
                {content.contactValue}
              </a>
            </div>

            <div className="mt-8 border-t border-[#FAF9F6]/10 pt-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/42">
                {content.ecosystemTitle}
              </p>
              <div className="mt-4 grid gap-3">
                <a
                  href={externalSites.academy.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[#FAF9F6]/10 px-4 py-4 transition-colors hover:border-[#FAF9F6]/25"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#FAF9F6]">Genesis Academy</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#FAF9F6]/62">{content.academyDescription}</p>
                </a>
                <a
                  href={externalSites.market.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[#FAF9F6]/10 px-4 py-4 transition-colors hover:border-[#FAF9F6]/25"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#FAF9F6]">Genesis Market</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#FAF9F6]/62">{content.marketDescription}</p>
                </a>
                <a
                  href={externalSites.aide.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-[#FAF9F6]/10 px-4 py-4 transition-colors hover:border-[#FAF9F6]/25"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#FAF9F6]">Genesis Aide</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#FAF9F6]/62">{content.aideDescription}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
