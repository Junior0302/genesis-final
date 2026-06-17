"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSoundContext } from "@/context/SoundContext";
import { useTranslations } from "next-intl";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const containerRef = useRef<HTMLDivElement>(null);
  const { playSound } = useSoundContext();
  const mailSubject = t("MailTemplate.subject");
  const mailBody = t("MailTemplate.body");

  const mailtoHref = useMemo(
    () =>
      `mailto:hello@genesisconnectstudio.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`,
    [mailBody, mailSubject]
  );

  const serviceItems = [
    t("Services.items.website"),
    t("Services.items.dev"),
    t("Services.items.seo"),
    t("Services.items.cyber"),
    t("Services.items.maintenance"),
    t("Services.items.support"),
    t("Services.items.network"),
    t("Services.items.cloud"),
    t("Services.items.exp3d"),
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }).from(
        ".hero-desc",
        {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.1,
        },
        "-=1.0"
      );

      gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen overflow-hidden bg-[#2A1C15] text-[#FAF9F6]"
    >
      <section className="min-h-[82vh] px-6 pt-28 pb-8 md:px-12">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-7">
              <h1 className="hero-title whitespace-pre-line text-[14vw] font-serif leading-[0.86] tracking-tight text-[#FAF9F6] mix-blend-difference sm:text-[11vw] md:text-[8vw] lg:text-[6vw]">
                {t("Hero.title")}
              </h1>
            </div>

            <div className="relative mt-2 lg:col-span-5 lg:mt-20">
              <div className="hero-desc rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710]/60 p-7 backdrop-blur-xl md:p-8">
                <p className="mb-7 whitespace-pre-line text-lg font-serif leading-tight text-[#FAF9F6] md:text-2xl">
                  {t("Hero.subtitle")}
                </p>
                <p className="mb-8 max-w-xl whitespace-pre-line text-sm font-light leading-relaxed text-[#FAF9F6]/68 md:text-base">
                  {t("Hero.description")}
                </p>
                <div className="flex flex-col items-start gap-5">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-3 rounded-full border border-[#FAF9F6]/30 px-7 py-3 text-sm uppercase tracking-[0.22em] text-[#FAF9F6] transition-all duration-500 hover:bg-[#FAF9F6] hover:text-[#2A1C15]"
                    onMouseEnter={() => playSound("focus_grain")}
                  >
                    {t("Hero.button")}
                  </a>
                  <div>
                    <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                      {t("Hero.mailLabel")}
                    </p>
                    <a
                      href={mailtoHref}
                      className="break-words text-lg font-serif text-[#FAF9F6] transition-colors duration-300 hover:text-[#D4AF37] md:text-2xl"
                      onMouseEnter={() => playSound("focus_grain")}
                    >
                      {t("Hero.mailPreview")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 pb-28 md:px-24">
        <div className="mx-auto max-w-7xl border-t border-[#FAF9F6]/10 pt-16 md:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="reveal-text rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710]/55 p-8 md:p-10">
              <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                {t("Conversation.title")}
              </p>
              <h2 className="mb-6 text-2xl font-serif text-[#FAF9F6] md:text-3xl">
                {t("Conversation.heading")}
              </h2>
              <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-[#FAF9F6]/65">
                {t("Conversation.text")}
              </p>
              <div className="rounded-[24px] border border-[#FAF9F6]/8 bg-[#2A1C15]/50 p-6">
                <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
                  {mailSubject}
                </p>
                <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-[#FAF9F6]/68">
                  {mailBody}
                </pre>
              </div>
            </div>

            <div className="reveal-text flex flex-col gap-8">
              <div className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710]/55 p-8 md:p-10">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                  {t("Services.title")}
                </p>
                <div className="flex flex-wrap gap-3">
                  {serviceItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#FAF9F6]/10 bg-[#2A1C15]/50 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#FAF9F6]/74"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710]/55 p-8 md:p-10">
                <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#FAF9F6]/40">
                  {t("Support.title")}
                </p>
                <p className="max-w-2xl text-base font-light leading-relaxed text-[#FAF9F6]/65">
                  {t("Support.text")}
                </p>
              </div>

              <a
                href={mailtoHref}
                className="rounded-[32px] border border-[#D4AF37]/30 bg-[#D4AF37]/8 px-8 py-7 text-left transition-colors duration-300 hover:bg-[#D4AF37]/14"
                onMouseEnter={() => playSound("focus_grain")}
              >
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
                  {t("Hero.button")}
                </p>
                <p className="break-words text-2xl font-serif text-[#FAF9F6] md:text-3xl">
                  hello@genesisconnectstudio.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] bg-[#251812] px-8 py-24 text-center">
        <div className="reveal-text mx-auto max-w-3xl">
          <p className="mb-8 text-xs uppercase tracking-widest text-[#FAF9F6]/40">
            {t("Closing.title")}
          </p>
          <p className="mb-8 text-2xl font-serif leading-relaxed text-[#FAF9F6] md:text-4xl">
            {t("Closing.text")}
          </p>
          <p className="text-lg font-light leading-relaxed italic text-[#FAF9F6]/60 md:text-2xl">
            {t("Closing.subtext")}
          </p>
        </div>
      </section>

      <div className="h-[10vh]" />
    </div>
  );
}
