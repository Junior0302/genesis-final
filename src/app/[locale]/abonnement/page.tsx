import WebProSubscriptionButtons from "@/components/ui/WebProSubscriptionButtons";
import TrainingProtectionNotice from "@/components/ui/TrainingProtectionNotice";
import type { SupportedLocale } from "@/lib/trainings";

export default async function AbonnementPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as SupportedLocale;

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#FAF9F6]/40">
              {safeLocale === "fr"
                ? "Abonnement"
                : safeLocale === "en"
                ? "Subscription"
                : "订阅"}
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-serif leading-[0.95]">
              {safeLocale === "fr"
                ? "Site Web Pro · 30€ / mois"
                : safeLocale === "en"
                ? "Web Pro · €30 / month"
                : "网站专业版 · €30/月"}
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-[#FAF9F6]/70">
              {safeLocale === "fr"
                ? "Facturation recurrente. Engagement 12 mois. Resiliation anticipee : frais fixes de 100€."
                : safeLocale === "en"
                ? "Recurring billing. 12-month commitment. Early cancellation: fixed fee of €100."
                : "循环扣费。12个月承诺期。提前取消：固定费用€100。"}
            </p>
          </div>

          <div className="rounded-[34px] border border-[#FAF9F6]/10 bg-[#251812] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              {safeLocale === "fr"
                ? "Choisir un moyen de paiement"
                : safeLocale === "en"
                ? "Choose a payment method"
                : "选择支付方式"}
            </p>
            <div className="mt-8">
              <WebProSubscriptionButtons locale={safeLocale} />
            </div>
          </div>
        </div>
      </section>

      <TrainingProtectionNotice locale={safeLocale} />
    </div>
  );
}
