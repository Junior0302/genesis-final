import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const content = {
    fr: {
      eyebrow: "Genesis Connect Studio",
      title: "Site en cours de developpement",
      subtitle:
        "Nous preparons une experience premium, elegante et performante. Le site complet sera bientot disponible.",
      availability: "Lancement prochain",
      contactLabel: "Contact",
      contactValue: "hello@genesisconnectstudio.com",
      contactCta: "Nous ecrire",
      secondaryCta: "Voir les formations",
    },
    en: {
      eyebrow: "Genesis Connect Studio",
      title: "Website under development",
      subtitle:
        "We are crafting a premium, elegant and high-performance experience. The full website will be available soon.",
      availability: "Launching soon",
      contactLabel: "Contact",
      contactValue: "hello@genesisconnectstudio.com",
      contactCta: "Email us",
      secondaryCta: "View trainings",
    },
    zh: {
      eyebrow: "Genesis Connect Studio",
      title: "网站开发中",
      subtitle: "我们正在打造高级、优雅且高性能的体验。完整网站即将上线。",
      availability: "即将上线",
      contactLabel: "联系",
      contactValue: "hello@genesisconnectstudio.com",
      contactCta: "发送邮件",
      secondaryCta: "查看培训",
    },
  }[locale as "fr" | "en" | "zh"] ?? {
    eyebrow: "Genesis Connect Studio",
    title: "Site en cours de developpement",
    subtitle:
      "Nous preparons une experience premium, elegante et performante. Le site complet sera bientot disponible.",
    availability: "Lancement prochain",
    contactLabel: "Contact",
    contactValue: "hello@genesisconnectstudio.com",
    contactCta: "Nous ecrire",
    secondaryCta: "Voir les formations",
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
              <a
                href="mailto:hello@genesisconnectstudio.com"
                className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] transition-colors hover:border-[#FAF9F6]/45 hover:bg-[#FAF9F6]/6"
              >
                {content.contactCta}
              </a>
              <Link
                href={`/${locale}/formation`}
                className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/10 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/72 transition-colors hover:border-[#FAF9F6]/30 hover:text-[#FAF9F6]"
              >
                {content.secondaryCta}
              </Link>
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
          </div>
        </div>
      </section>
    </main>
  );
}
