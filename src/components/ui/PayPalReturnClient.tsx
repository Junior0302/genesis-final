"use client";

import { useEffect, useState } from "react";

export default function PayPalReturnClient({
  paypalOrderId,
  locale,
  slug,
  order,
}: {
  paypalOrderId: string;
  locale: string;
  slug: string;
  order: string;
}) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      try {
        const res = await fetch("/api/paypal/capture", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paypalOrderId }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text || "Capture PayPal impossible.");
        }

        window.location.assign(
          `/${locale}/formation/success?order=${encodeURIComponent(order)}&slug=${encodeURIComponent(
            slug
          )}&provider=paypal`
        );
      } catch (e) {
        setError(e instanceof Error ? e.message : "Capture PayPal impossible.");
      }
    })();
  }, [locale, order, paypalOrderId, slug]);

  if (error) {
    return (
      <div className="rounded-[24px] border border-[#FAF9F6]/10 bg-[#251812] p-8">
        <p className="text-sm text-[#F6C8C8]">{error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-[#FAF9F6]/10 bg-[#251812] p-8">
      <p className="text-sm text-[#FAF9F6]/70">Verification PayPal en cours...</p>
    </div>
  );
}

