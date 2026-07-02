import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import {
  getServicesSiteContent,
  getServicesSiteService,
  serviceSlugs,
} from "@/lib/servicesSiteContent";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServicesDomainDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const site = getServicesSiteContent(locale);
  const service = getServicesSiteService(locale, slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[#140d0a] px-6 pb-20 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-7xl py-16 md:py-20">
        <Reveal className="rounded-[40px] border border-[#FAF9F6]/10 bg-[#241710]/70 p-8 md:p-12">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#D7B07A]">
            Genesis Services
          </p>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#FAF9F6]/74">
            {service.summary}
          </p>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#FAF9F6]/68 md:text-lg">
            {service.problem}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#20140f] p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
              {site.common.deliverables}
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#FAF9F6]/74 md:text-base">
              {service.deliverables.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#20140f] p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
              {site.common.audience}
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {service.audience.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#FAF9F6]/8 bg-[#2A1C15]/50 px-5 py-4 text-sm text-[#FAF9F6]/76 md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#20140f] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
              {site.common.process}
            </p>
            <div className="mt-8 space-y-8">
              {service.process.map((step, index) => (
                <div key={step.title} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#D7B07A]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl">{step.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80} className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
              {site.common.faq}
            </p>
            <div className="mt-8 space-y-6">
              {service.faq.map((item) => (
                <div key={item.question} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                  <h2 className="font-serif text-2xl leading-tight">{item.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#FAF9F6]/70 md:text-base">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal className="mt-10 rounded-[36px] border border-[#FAF9F6]/10 bg-gradient-to-br from-[#241710] to-[#1a100c] p-8 md:p-12">
          <h2 className="max-w-4xl font-serif text-4xl leading-[1.02] md:text-5xl">
            {site.home.finalTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#FAF9F6]/72 md:text-lg">
            {site.home.finalText}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services/contact"
              className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/88 transition-colors hover:border-[#FAF9F6]/38 hover:text-[#FAF9F6]"
            >
              {site.common.contactCta}
            </Link>
            <Link
              href="/services/domaines"
              className="inline-flex items-center rounded-full border border-[#FAF9F6]/10 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/65 transition-colors hover:border-[#FAF9F6]/28 hover:text-[#FAF9F6]"
            >
              {site.nav.domaines}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
