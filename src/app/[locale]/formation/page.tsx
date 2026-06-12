import TransitionLink from "@/components/ui/TransitionLink";
import TrainingCover from "@/components/ui/TrainingCover";
import TrainingProtectionNotice from "@/components/ui/TrainingProtectionNotice";
import {
  formatPrice,
  getLevelLabel,
  getLocalizedValue,
  getTrainingUi,
  trainings,
  type SupportedLocale,
} from "@/lib/trainings";

export default async function FormationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as SupportedLocale;
  const ui = getTrainingUi();

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/40">
            {ui.catalog.eyebrow[safeLocale]}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.95]">
            {ui.catalog.title[safeLocale]}
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-[#FAF9F6]/68">
            {ui.catalog.description[safeLocale]}
          </p>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
          {trainings.map((training) => (
            <article
              key={training.slug}
              className="overflow-hidden rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] backdrop-blur-sm"
            >
              <TrainingCover
                slug={training.slug}
                title={getLocalizedValue(training.title, safeLocale)}
                className="aspect-[4/3]"
              />

              <div className="p-7 md:p-8">
                <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/45">
                  <span>{getLevelLabel(training.level, safeLocale)}</span>
                  <span>{formatPrice(training.price, safeLocale)}</span>
                </div>

                <h2 className="mt-5 text-2xl md:text-3xl font-serif text-[#FAF9F6]">
                  {getLocalizedValue(training.title, safeLocale)}
                </h2>
                <p className="mt-4 min-h-24 text-sm md:text-base leading-relaxed text-[#FAF9F6]/70">
                  {getLocalizedValue(training.shortDescription, safeLocale)}
                </p>

                <TransitionLink
                  href={`/formation/${training.slug}`}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] hover:border-[#FAF9F6]/40 hover:bg-[#FAF9F6]/5 transition-colors"
                >
                  {ui.catalog.discover[safeLocale]}
                </TransitionLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <TrainingProtectionNotice locale={safeLocale} />
    </div>
  );
}
