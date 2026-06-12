import TransitionLink from "@/components/ui/TransitionLink";
import TrainingProtectionNotice from "@/components/ui/TrainingProtectionNotice";
import type { SupportedLocale } from "@/lib/trainings";

export default async function AbonnementSuccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ order?: string; session_id?: string; demo?: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as SupportedLocale;
  const query = await searchParams;

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto rounded-[34px] border border-[#FAF9F6]/10 bg-[#251812] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/40">
            {safeLocale === "fr"
              ? "Abonnement confirme"
              : safeLocale === "en"
              ? "Subscription confirmed"
              : "订阅已确认"}
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-serif leading-[0.96]">
            {safeLocale === "fr"
              ? "Votre abonnement est actif."
              : safeLocale === "en"
              ? "Your subscription is active."
              : "你的订阅已激活。"}
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#FAF9F6]/70">
            {safeLocale === "fr"
              ? "Un recu est emis automatiquement. Engagement 12 mois. Resiliation anticipee : frais fixes de 100€."
              : safeLocale === "en"
              ? "A receipt is issued automatically. 12-month commitment. Early cancellation: fixed fee of €100."
              : "收据将自动提供。12个月承诺期。提前取消：固定费用€100。"}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                Provider
              </p>
              <p className="mt-3 text-lg font-serif text-[#FAF9F6]">stripe</p>
            </div>
            <div className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                Order
              </p>
              <p className="mt-3 text-lg font-serif text-[#FAF9F6]">
                {query.order ?? "GC-SUB-PENDING"}
              </p>
            </div>
            <div className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/70 p-5">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                Plan
              </p>
              <p className="mt-3 text-lg font-serif text-[#FAF9F6]">Web Pro · 30€/mo</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <TransitionLink
              href="/abonnement"
              className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/20 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] hover:border-[#FAF9F6]/40 hover:bg-[#FAF9F6]/5 transition-colors"
            >
              {safeLocale === "fr"
                ? "Retour abonnement"
                : safeLocale === "en"
                ? "Back to subscription"
                : "返回订阅"}
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[#FAF9F6]/10 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/70 hover:border-[#FAF9F6]/30 hover:text-[#FAF9F6] transition-colors"
            >
              {safeLocale === "fr"
                ? "Contacter le support"
                : safeLocale === "en"
                ? "Contact support"
                : "联系支持"}
            </TransitionLink>
          </div>
        </div>
      </section>

      <TrainingProtectionNotice locale={safeLocale} />
    </div>
  );
}
