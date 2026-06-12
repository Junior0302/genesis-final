import { notFound } from "next/navigation";
import TransitionLink from "@/components/ui/TransitionLink";
import TrainingCover from "@/components/ui/TrainingCover";
import TrainingProtectionNotice from "@/components/ui/TrainingProtectionNotice";
import {
  formatPrice,
  getLevelLabel,
  getLocalizedValue,
  getTraining,
  getTrainingUi,
  trainings,
  type SupportedLocale,
} from "@/lib/trainings";

export function generateStaticParams() {
  return trainings.map((training) => ({ slug: training.slug }));
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale = locale as SupportedLocale;
  const training = getTraining(slug);

  if (!training) {
    notFound();
  }

  const ui = getTrainingUi();
  const faqEntries = Object.values(ui.faq);

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/40">
              {getLevelLabel(training.level, safeLocale)}
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-serif leading-[0.95]">
              {getLocalizedValue(training.title, safeLocale)}
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#FAF9F6]/70">
              {getLocalizedValue(training.longDescription, safeLocale)}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/55">
              <span className="rounded-full border border-[#FAF9F6]/10 px-4 py-3">
                {ui.detail.duration[safeLocale]} · {getLocalizedValue(training.duration, safeLocale)}
              </span>
              <span className="rounded-full border border-[#FAF9F6]/10 px-4 py-3">
                {formatPrice(training.price, safeLocale)}
              </span>
            </div>

            <TransitionLink
              href={`/formation/${training.slug}/conditions`}
              className="mt-10 inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] hover:border-[#FAF9F6]/40 hover:bg-[#FAF9F6]/5 transition-colors"
            >
              {ui.detail.cta[safeLocale]}
            </TransitionLink>
          </div>

          <TrainingCover
            slug={training.slug}
            title={getLocalizedValue(training.title, safeLocale)}
            className="min-h-[360px] rounded-[34px] border border-[#FAF9F6]/10"
          />
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-3">
          <div className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#251812] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              {ui.detail.goals[safeLocale]}
            </p>
            <ul className="mt-6 space-y-4 text-sm md:text-base text-[#FAF9F6]/75">
              {training.objectives.map((item) => (
                <li key={item.fr}>• {getLocalizedValue(item, safeLocale)}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#251812] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              {ui.detail.audience[safeLocale]}
            </p>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-[#FAF9F6]/75">
              {getLocalizedValue(training.audience, safeLocale)}
            </p>
          </div>
          <div className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#251812] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              {ui.detail.skills[safeLocale]}
            </p>
            <ul className="mt-6 space-y-4 text-sm md:text-base text-[#FAF9F6]/75">
              {training.skills.map((item) => (
                <li key={item.fr}>• {getLocalizedValue(item, safeLocale)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto rounded-[34px] border border-[#FAF9F6]/10 bg-[#251812] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
            {ui.detail.program[safeLocale]}
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {training.modules.map((module) => (
              <div
                key={module.title.fr}
                className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-6"
              >
                <h2 className="text-xl font-serif text-[#FAF9F6]">
                  {getLocalizedValue(module.title, safeLocale)}
                </h2>
                <ul className="mt-5 space-y-3 text-sm text-[#FAF9F6]/70">
                  {module.chapters.map((chapter) => (
                    <li key={chapter.fr}>• {getLocalizedValue(chapter, safeLocale)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              {ui.detail.outcomes[safeLocale]}
            </p>
            <ul className="mt-6 space-y-4 text-sm md:text-base text-[#FAF9F6]/75">
              {training.outcomes.map((item) => (
                <li key={item.fr}>• {getLocalizedValue(item, safeLocale)}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              {ui.detail.faq[safeLocale]}
            </p>
            <div className="mt-6 space-y-5">
              {faqEntries.map((item) => (
                <div
                  key={item.q.fr}
                  className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5"
                >
                  <p className="text-base font-serif text-[#FAF9F6]">
                    {item.q[safeLocale]}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#FAF9F6]/70">
                    {item.a[safeLocale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrainingProtectionNotice locale={safeLocale} />
    </div>
  );
}
