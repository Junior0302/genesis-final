import Reveal from "@/components/ui/Reveal";
import { Link } from "@/i18n/routing";
import { businessEmail } from "@/lib/seo";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default async function ServicesContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const mailtoHref = `mailto:${businessEmail}?subject=${encodeURIComponent(
    site.contact.mailSubject
  )}&body=${encodeURIComponent(site.contact.mailBody)}`;

  return (
    <main className="bg-[#140d0a] px-6 pb-20 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-7xl py-16 md:py-20">
        <Reveal className="max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#D7B07A]">
            {site.contact.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
            {site.contact.title}
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#FAF9F6]/72 md:text-lg">
            {site.contact.description}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.contact.cards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 70}
              className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#20140f] p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D7B07A]">
                0{index + 1}
              </p>
              <h2 className="mt-5 font-serif text-3xl">{card.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                {card.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-[36px] border border-[#FAF9F6]/10 bg-[#241710] p-8 md:p-12">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
            Genesis Services
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            {site.contact.emailCta}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">
            {businessEmail}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={mailtoHref}
              className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/88 transition-colors hover:border-[#FAF9F6]/38 hover:text-[#FAF9F6]"
            >
              {site.contact.emailCta}
            </a>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-[#FAF9F6]/10 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/65 transition-colors hover:border-[#FAF9F6]/28 hover:text-[#FAF9F6]"
            >
              {site.contact.backToMain}
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
