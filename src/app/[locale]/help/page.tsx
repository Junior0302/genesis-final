"use client";

import { useLocale } from "next-intl";
import TransitionLink from "@/components/ui/TransitionLink";

type Locale = "fr" | "en" | "zh";

export default function HelpPage() {
  const locale = useLocale() as Locale;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale) ? locale : "fr";

  const content = {
    fr: {
      eyebrow: "Help",
      title: "Un accompagnement clair, structuré et humain.",
      description:
        "Genesis Connect vous aide à débloquer votre situation (activité, stratégie, présence digitale) avec un diagnostic rapide, un plan d’action concret et un suivi adapté.",
      blocks: [
        {
          title: "Diagnostic & Priorités",
          text: "On identifie les points bloquants, l’objectif principal et les actions qui ont le plus d’impact dès maintenant.",
        },
        {
          title: "Plan d’action",
          text: "Une feuille de route simple : étapes, livrables, outils, et organisation — sans complexité inutile.",
        },
        {
          title: "Suivi & Ajustements",
          text: "On avance par itérations : retours, corrections, et optimisation pour garder une progression constante.",
        },
      ],
      ctaTitle: "Prêt à clarifier la suite ?",
      ctaText: "Parle-nous de ta situation. On te répond avec une proposition claire et les prochaines étapes.",
      ctaButton: "Demander de l’aide",
    },
    en: {
      eyebrow: "Help",
      title: "Clear, structured, human support.",
      description:
        "Genesis Connect helps you unblock your situation (business, strategy, digital presence) with a fast diagnosis, a concrete action plan, and tailored follow-up.",
      blocks: [
        {
          title: "Diagnosis & Priorities",
          text: "We identify blockers, your main goal, and the actions with the highest immediate impact.",
        },
        {
          title: "Action Plan",
          text: "A simple roadmap: steps, deliverables, tools, and organization — without unnecessary complexity.",
        },
        {
          title: "Follow-up & Iteration",
          text: "We move forward in iterations: feedback, fixes, and optimization to keep momentum.",
        },
      ],
      ctaTitle: "Ready to move forward?",
      ctaText: "Tell us about your situation. We’ll reply with a clear proposal and next steps.",
      ctaButton: "Get help",
    },
    zh: {
      eyebrow: "帮助",
      title: "清晰、结构化、有人情味的支持。",
      description:
        "Genesis Connect 通过快速诊断、可执行行动计划与持续跟进，帮助你解决业务/策略/数字形象上的关键卡点。",
      blocks: [
        {
          title: "诊断与优先级",
          text: "明确主要目标与阻碍点，优先做最有立即影响力的动作。",
        },
        {
          title: "行动计划",
          text: "给出简单清晰的路线图：步骤、交付物、工具与组织方式。",
        },
        {
          title: "跟进与迭代",
          text: "通过反馈与优化持续推进，保证节奏稳定与结果可见。",
        },
      ],
      ctaTitle: "准备好推进了吗？",
      ctaText: "告诉我们你的情况。我们会给出清晰方案和下一步动作。",
      ctaButton: "获取帮助",
    },
  } as const;

  const page = content[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/45">{page.eyebrow}</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">
            {page.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {page.blocks.map((block) => (
            <div
              key={block.title}
              className="flex h-full flex-col rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8"
            >
              <h2 className="font-serif text-2xl">{block.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">{block.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.ctaTitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">
            {page.ctaText}
          </p>
          <div className="mt-8">
            <TransitionLink
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/85 transition-colors hover:border-[#FAF9F6]/35 hover:text-[#FAF9F6]"
            >
              {page.ctaButton}
            </TransitionLink>
          </div>
        </div>
      </div>
    </main>
  );
}
