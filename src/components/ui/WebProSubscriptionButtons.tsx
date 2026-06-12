"use client";

import { useState } from "react";
import type { SupportedLocale } from "@/lib/trainings";

export default function WebProSubscriptionButtons({
  locale,
}: {
  locale: SupportedLocale;
}) {
  const [stripeError, setStripeError] = useState<string | null>(null);

  const handleStripe = async () => {
    setStripeError(null);
    try {
      const res = await fetch("/api/stripe/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });
      const contentType = res.headers.get("content-type") ?? "";
      const raw = await res.text();
      const payload =
        contentType.includes("application/json") && raw
          ? (JSON.parse(raw) as { url?: string; error?: string })
          : ({} as { url?: string; error?: string });

      if (!res.ok || !payload.url) {
        throw new Error(payload.error || "Impossible de lancer Stripe.");
      }

      window.location.href = payload.url;
    } catch (e) {
      setStripeError(e instanceof Error ? e.message : "Impossible de lancer Stripe.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <button
        type="button"
        onClick={handleStripe}
        className="inline-flex w-full items-center justify-center rounded-full border border-[#FAF9F6]/20 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] hover:border-[#FAF9F6]/40 hover:bg-[#FAF9F6]/5 transition-colors"
      >
        {locale === "fr"
          ? "S'abonner avec carte (Stripe)"
          : locale === "en"
          ? "Subscribe by card (Stripe)"
          : "使用银行卡订阅（Stripe）"}
      </button>
      {stripeError ? (
        <p className="text-sm text-[#F6C8C8]">{stripeError}</p>
      ) : null}
    </div>
  );
}
