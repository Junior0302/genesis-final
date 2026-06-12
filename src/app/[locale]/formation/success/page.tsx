import TransitionLink from "@/components/ui/TransitionLink";
import TrainingProtectionNotice from "@/components/ui/TrainingProtectionNotice";
import { getTraining, getTrainingUi, type SupportedLocale } from "@/lib/trainings";

export default async function FormationSuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ order?: string; slug?: string; demo?: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as SupportedLocale;
  const query = await searchParams;
  const ui = getTrainingUi();
  const training = query.slug ? getTraining(query.slug) : undefined;

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto rounded-[34px] border border-[#FAF9F6]/10 bg-[#251812] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/40">
            {ui.success.eyebrow[safeLocale]}
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-serif leading-[0.96]">
            {ui.success.title[safeLocale]}
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#FAF9F6]/70">
            {ui.success.description[safeLocale]}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                Order
              </p>
              <p className="mt-3 text-lg font-serif text-[#FAF9F6]">
                {query.order ?? "GC-PENDING"}
              </p>
            </div>
            <div className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                Training
              </p>
              <p className="mt-3 text-lg font-serif text-[#FAF9F6]">
                {training ? training.title[safeLocale] : "Genesis Connect"}
              </p>
            </div>
            <div className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                Delivery
              </p>
              <p className="mt-3 text-lg font-serif text-[#FAF9F6]">
                {safeLocale === "fr"
                  ? "Sous 48h max"
                  : safeLocale === "en"
                  ? "Within 48h"
                  : "48 小时内"}
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm md:text-base text-[#FAF9F6]/65 leading-relaxed">
            {safeLocale === "fr"
              ? "Support : hello@genesisconnectstudio.com"
              : safeLocale === "en"
              ? "Support: hello@genesisconnectstudio.com"
              : "支持：hello@genesisconnectstudio.com"}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <TransitionLink
              href={training ? `/formation/${training.slug}` : "/formation"}
              className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] hover:border-[#FAF9F6]/40 hover:bg-[#FAF9F6]/5 transition-colors"
            >
              {safeLocale === "fr"
                ? "Retour a la formation"
                : safeLocale === "en"
                ? "Back to training"
                : "返回课程"}
            </TransitionLink>
            <TransitionLink
              href="/formation"
              className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/10 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/70 hover:border-[#FAF9F6]/30 hover:text-[#FAF9F6] transition-colors"
            >
              {safeLocale === "fr"
                ? "Voir le catalogue"
                : safeLocale === "en"
                ? "View catalog"
                : "查看目录"}
            </TransitionLink>
          </div>
        </div>
      </section>

      <TrainingProtectionNotice locale={safeLocale} />
    </div>
  );
}
