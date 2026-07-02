import Reveal from "@/components/ui/Reveal";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default async function ServicesFaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const faqItems = [
    ...site.home.faq,
    ...site.services.flatMap((service) => service.faq),
  ];

  return (
    <main className="bg-[#140d0a] px-6 pb-20 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl py-16 md:py-20">
        <Reveal className="max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#D7B07A]">
            {site.faqPage.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
            {site.faqPage.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/72 md:text-lg">
            {site.faqPage.description}
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {faqItems.map((item, index) => (
            <Reveal
              key={`${item.question}-${index}`}
              delay={index * 30}
              className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#20140f] p-8"
            >
              <h2 className="font-serif text-3xl leading-tight">{item.question}</h2>
              <p className="mt-4 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                {item.answer}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
