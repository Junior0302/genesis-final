import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default async function ServicesHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);

  return (
    <main className="bg-[#140d0a] px-6 pb-20 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-10 py-16 md:grid-cols-[1.25fr_0.75fr] md:py-24">
          <Reveal className="rounded-[40px] border border-[#FAF9F6]/10 bg-[#241710]/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D7B07A]">
              {site.home.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.96] tracking-[-0.04em] md:text-7xl">
              {site.home.title}
            </h1>
            <p className="mt-6 text-2xl font-serif text-[#FAF9F6]/92">
              {site.home.subtitle}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#FAF9F6]/72 md:text-[1.15rem]">
              {site.home.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/services/contact"
                className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/88 transition-colors hover:border-[#FAF9F6]/38 hover:text-[#FAF9F6]"
              >
                {site.home.primaryCta}
              </Link>
              <Link
                href="/services/domaines"
                className="inline-flex items-center rounded-full border border-[#FAF9F6]/10 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/65 transition-colors hover:border-[#FAF9F6]/28 hover:text-[#FAF9F6]"
              >
                {site.home.secondaryCta}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="grid gap-4">
            {site.home.needs.map((need, index) => (
              <div
                key={need.title}
                className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#20140f] p-6"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#D7B07A]">
                  0{index + 1}
                </p>
                <h2 className="mt-4 font-serif text-2xl">{need.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#FAF9F6]/70 md:text-base">
                  {need.text}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="py-12 md:py-20">
          <Reveal className="max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
              {site.home.servicesTitle}
            </p>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
              {site.home.servicesLead}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {site.services.map((service, index) => (
              <Reveal
                key={service.slug}
                delay={index * 60}
                className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#20140f] p-7"
              >
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#D7B07A]">
                  Genesis Services
                </p>
                <h3 className="mt-5 font-serif text-3xl leading-[1.02] tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                  {service.summary}
                </p>
                <Link
                  href={`/services/domaines/${service.slug}`}
                  className="mt-8 inline-flex items-center text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/82 transition-colors hover:text-[#FAF9F6]"
                >
                  {site.common.discover}
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-12 md:grid-cols-2 md:py-20">
          <Reveal className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#20140f] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
              {site.home.methodTitle}
            </p>
            <div className="mt-8 space-y-8">
              {site.home.method.map((step, index) => (
                <div key={step.title} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#D7B07A]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#FAF9F6]/70 md:text-base">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
              {site.home.faqTitle}
            </p>
            <div className="mt-8 space-y-6">
              {site.home.faq.map((item) => (
                <div key={item.question} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                  <h3 className="font-serif text-2xl leading-tight">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#FAF9F6]/70 md:text-base">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="py-12 md:py-20">
          <Reveal className="rounded-[38px] border border-[#FAF9F6]/10 bg-gradient-to-br from-[#241710] to-[#1a100c] p-8 md:p-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#D7B07A]">
              Genesis Services
            </p>
            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-[1.02] md:text-6xl">
              {site.home.finalTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/72 md:text-lg">
              {site.home.finalText}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services/contact"
                className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/88 transition-colors hover:border-[#FAF9F6]/38 hover:text-[#FAF9F6]"
              >
                {site.home.primaryCta}
              </Link>
              <Link
                href="/services/a-propos"
                className="inline-flex items-center rounded-full border border-[#FAF9F6]/10 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/65 transition-colors hover:border-[#FAF9F6]/28 hover:text-[#FAF9F6]"
              >
                {site.nav.about}
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
