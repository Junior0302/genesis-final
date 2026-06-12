"use client";

import { useState } from "react";
import type { SupportedLocale } from "@/lib/trainings";

export default function TrainingCheckoutForm({
  slug,
  locale,
  labels,
}: {
  slug: string;
  locale: SupportedLocale;
  labels: {
    proceed: string;
    processing: string;
    checks: string[];
    errorTitle: string;
    errorFallback: string;
  };
}) {
  const [checks, setChecks] = useState([false, false, false]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canProceed = checks.every(Boolean) && !isLoading;

  const toggle = (index: number) => {
    setChecks((previous) =>
      previous.map((value, currentIndex) =>
        currentIndex === index ? !value : value
      )
    );
  };

  const handleCheckout = async () => {
    if (!canProceed) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug, locale }),
      });

      const contentType = response.headers.get("content-type") ?? "";
      const raw = await response.text();
      const payload =
        contentType.includes("application/json") && raw
          ? (JSON.parse(raw) as { url?: string; error?: string })
          : ({} as { url?: string; error?: string });

      if (!response.ok || !payload.url) {
        const fallback = payload.error || labels.errorFallback;
        if (!response.ok) {
          throw new Error(fallback);
        }
        if (!contentType.includes("application/json")) {
          throw new Error(labels.errorFallback);
        }
        throw new Error(fallback);
      }

      window.location.href = payload.url;
    } catch (checkoutError) {
      setIsLoading(false);
      setError(
        checkoutError instanceof Error ? checkoutError.message : labels.errorFallback
      );
    }
  };

  return (
    <div className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#2A1C15]/70 p-8 md:p-10">
      <div className="flex flex-col gap-5">
        {labels.checks.map((label, index) => (
          <label
            key={label}
            className="flex items-start gap-4 text-sm md:text-base text-[#FAF9F6]/80 leading-relaxed"
          >
            <input
              type="checkbox"
              checked={checks[index]}
              onChange={() => toggle(index)}
              className="mt-1 h-4 w-4 rounded border border-[#FAF9F6]/30 bg-transparent accent-[#D4AF37]"
            />
            <span>{label}</span>
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={!canProceed}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[#FAF9F6]/20 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#FAF9F6] transition-colors disabled:cursor-not-allowed disabled:opacity-35 hover:border-[#FAF9F6]/40 hover:bg-[#FAF9F6]/5"
      >
        {isLoading ? labels.processing : labels.proceed}
      </button>

      {error ? (
        <p className="mt-4 text-sm text-[#F6C8C8]">
          {labels.errorTitle} {error}
        </p>
      ) : null}
    </div>
  );
}
