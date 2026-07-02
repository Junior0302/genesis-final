import Reveal from "@/components/ui/Reveal";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default async function ServicesAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);

  return (
    <main className="bg-[#140d0a] px-6 pb-20 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-7xl py-16 md:py-20">
        <Reveal className="max-w-5xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#D7B07A]">
            {site.about.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">
            {site.about.title}
          </h1>
          <p className="mt-6 max-w-4xl text-base leading-8 text-[#FAF9F6]/72 md:text-lg">
            {site.about.description}
          </p>
        </Reveal>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {site.about.values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 80}
              className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#20140f] p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#D7B07A]">
                0{index + 1}
              </p>
              <h2 className="mt-5 font-serif text-3xl">{value.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                {value.text}
              </p>
            </Reveal>
          ))}
        </section>

        <Reveal className="mt-12 rounded-[34px] border border-[#FAF9F6]/10 bg-[#241710] p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#FAF9F6]/45">
            {site.about.approachTitle}
          </p>
          <div className="mt-8 space-y-5">
            {site.about.approach.map((item) => (
              <p
                key={item}
                className="border-b border-[#FAF9F6]/10 pb-5 text-base leading-8 text-[#FAF9F6]/74 last:border-b-0"
              >
                {item}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
