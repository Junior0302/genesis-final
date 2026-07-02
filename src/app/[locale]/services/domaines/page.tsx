import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default async function ServicesDomainsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);

  return (
    <main className="bg-[#140d0a] px-6 pb-20 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-7xl py-16 md:py-20">
        <Reveal className="max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#D7B07A]">
            {site.domains.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
            {site.domains.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/72 md:text-lg">
            {site.domains.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {site.services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 60}
              className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#20140f] p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D7B07A]">
                0{index + 1}
              </p>
              <h2 className="mt-5 font-serif text-3xl leading-[1.04] tracking-[-0.03em]">
                {service.title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                {service.summary}
              </p>
              <Link
                href={`/services/domaines/${service.slug}`}
                className="mt-8 inline-flex items-center rounded-full border border-[#FAF9F6]/14 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/82 transition-colors hover:border-[#FAF9F6]/28 hover:text-[#FAF9F6]"
              >
                {site.domains.cta}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
