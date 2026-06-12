"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import type { SupportedLocale } from "@/lib/trainings";

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        createSubscription?: (data: unknown, actions: { subscription: { create: (options: { plan_id: string }) => Promise<string> } }) => Promise<string> | string;
        onApprove?: (data: { subscriptionID?: string }, actions: unknown) => void;
        onError?: (err: unknown) => void;
      }) => { render: (selector: string) => void };
    };
  }
}

export default function WebProSubscriptionButtons({
  locale,
}: {
  locale: SupportedLocale;
}) {
  const [stripeError, setStripeError] = useState<string | null>(null);
  const [paypalError, setPayPalError] = useState<string | null>(null);

  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const paypalPlanId = process.env.NEXT_PUBLIC_PAYPAL_WEB_PRO_PLAN_ID;

  const paypalSdkUrl = useMemo(() => {
    if (!paypalClientId) return null;
    return `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(
      paypalClientId
    )}&vault=true&intent=subscription&currency=EUR`;
  }, [paypalClientId]);

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

  useEffect(() => {
    if (!paypalClientId || !paypalPlanId) return;
    if (!window.paypal) return;

    try {
      window.paypal
        .Buttons({
          createSubscription: (_data, actions) => {
            return actions.subscription.create({ plan_id: paypalPlanId });
          },
          onApprove: (data) => {
            const id = data.subscriptionID ?? "";
            window.location.assign(
              `/${locale}/abonnement/success?provider=paypal&subscription=${encodeURIComponent(
                id
              )}`
            );
          },
          onError: (err) => {
            setPayPalError(typeof err === "string" ? err : "PayPal indisponible.");
          },
        })
        .render("#paypal-subscribe-button");
    } catch (e) {
      setPayPalError(e instanceof Error ? e.message : "PayPal indisponible.");
    }
  }, [locale, paypalClientId, paypalPlanId]);

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

      {paypalSdkUrl ? (
        <>
          <Script src={paypalSdkUrl} strategy="afterInteractive" />
          <div
            id="paypal-subscribe-button"
            className="rounded-[26px] border border-[#FAF9F6]/10 bg-[#251812] p-5"
          />
        </>
      ) : (
        <div className="rounded-[26px] border border-[#FAF9F6]/10 bg-[#251812] p-5">
          <p className="text-sm text-[#FAF9F6]/60">
            {locale === "fr"
              ? "PayPal Abonnement disponible apres configuration."
              : locale === "en"
              ? "PayPal subscription available after configuration."
              : "PayPal 订阅将在配置后可用。"}
          </p>
        </div>
      )}

      {paypalError ? (
        <p className="text-sm text-[#F6C8C8]">{paypalError}</p>
      ) : null}
    </div>
  );
}

