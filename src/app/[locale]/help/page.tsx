"use client";

import { useLocale } from "next-intl";
import TransitionLink from "@/components/ui/TransitionLink";
import { businessEmail } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default function HelpPage() {
  const locale = useLocale() as Locale;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale) ? locale : "fr";

  const content = {
    fr: {
      eyebrow: "Help",
      title: "Soutenir les projets qui méritent d'exister.",
      description:
        "Genesis Connect souhaite aider les nouveaux entrepreneurs, petites entreprises, associations et structures a faible budget avec un accompagnement numerique clair, humain et realiste.",
      visionTitle: "Notre vision",
      visionText:
        "Nous croyons qu'une petite structure doit pouvoir acceder a des solutions informatiques, web et SEO solides, meme avec des moyens limites. L'objectif n'est pas de vendre du superflu, mais de poser une base utile, durable et evolutive.",
      engagementTitle: "Notre engagement",
      engagementText:
        "Nous cherchons a proposer un accompagnement proportionne au contexte du projet : diagnostic, priorisation, cadre simple, solutions pragmatiques, et niveau d'exigence professionnel.",
      eligibilityTitle: "Profils eligibles",
      eligibility: [
        "Nouveaux entrepreneurs en phase de lancement",
        "Petites entreprises avec besoin de structuration numerique",
        "Associations et structures d'interet local",
        "Projets utiles avec budget limite mais ambition serieuse",
      ],
      supportTitle: "Projets que nous souhaitons soutenir",
      supportProjects: [
        "Mise en place d'une presence web professionnelle",
        "Remise a niveau informatique, sauvegarde et cybersécurité de base",
        "SEO local, Google Business Profile et visibilite locale",
        "Organisation cloud, Microsoft 365, Google Workspace et collaboration",
      ],
      conditionsTitle: "Conditions de candidature",
      conditions: [
        "Le besoin doit etre reel, concret et explicable.",
        "Le projet doit avoir une utilite claire ou un potentiel de structuration durable.",
        "Le budget n'a pas besoin d'etre eleve, mais il doit etre annonce honnêtement.",
        "Les delais, les contraintes et les attentes doivent etre precises.",
      ],
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
      formTitle: "Informations a fournir",
      formLead:
        "Pour etudier une demande d'accompagnement, nous avons besoin d'un minimum de contexte afin de te repondre utilement.",
      formItems: [
        "Nom",
        "Prenom",
        "Nom de l'entreprise",
        "Secteur d'activite",
        "Histoire du projet",
        "Besoin principal",
        "Objectifs",
        "Budget disponible",
        "Delais souhaites",
      ],
      faqTitle: "Questions frequentes",
      faq: [
        {
          question: "Le programme est-il reserve aux structures avec un gros budget ?",
          answer:
            "Non. Cette page existe justement pour les structures qui ont un besoin reel mais un budget encadre. L'important est la clarte du besoin, la coherence du projet et la faisabilite.",
        },
        {
          question: "Quels types de besoins peuvent etre traites ?",
          answer:
            "Depannage informatique, maintenance, mise en place cloud, creation de site internet, SEO local, organisation numerique, securisation de base et cadrage global.",
        },
        {
          question: "Comment faire une demande ?",
          answer:
            "Le plus simple est d'envoyer un email structure avec les informations demandees. Cela nous permet d'analyser rapidement la situation et de repondre proprement.",
        },
      ],
      ctaTitle: "Prêt à clarifier la suite ?",
      ctaText: "Parle-nous de ta situation. On te repond avec une proposition claire, un niveau de priorite et les prochaines etapes.",
      ctaButton: "Demander de l'aide",
    },
    en: {
      eyebrow: "Help",
      title: "Making technology accessible, useful and sustainable.",
      description:
        "Genesis Connect wants to support new founders, small businesses, associations and low-budget structures with clear, human and realistic digital guidance.",
      visionTitle: "Our vision",
      visionText:
        "Small organizations should still have access to reliable IT, web and SEO foundations. The goal is not to oversell, but to build what is useful, durable and realistic.",
      engagementTitle: "Our commitment",
      engagementText:
        "We aim to provide support that matches the real context of the project: diagnosis, prioritization, pragmatic solutions and professional standards.",
      eligibilityTitle: "Eligible profiles",
      eligibility: [
        "New entrepreneurs launching a project",
        "Small businesses needing digital structure",
        "Associations and local-impact organizations",
        "Useful projects with limited but honest budgets",
      ],
      supportTitle: "Projects we want to support",
      supportProjects: [
        "Professional web presence and launch support",
        "IT refresh, backup strategy and basic cybersecurity",
        "Local SEO, Google Business Profile and local visibility",
        "Cloud setup, Microsoft 365, Google Workspace and team collaboration",
      ],
      conditionsTitle: "Eligibility conditions",
      conditions: [
        "The need must be real, concrete and explainable.",
        "The project should have clear usefulness or long-term structuring value.",
        "The budget does not have to be high, but it must be stated honestly.",
        "Timelines, constraints and expectations should be clearly defined.",
      ],
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
      formTitle: "Information to provide",
      formLead:
        "To review a support request, we need enough context to understand the project and reply usefully.",
      formItems: [
        "First name",
        "Last name",
        "Company name",
        "Business sector",
        "Project story",
        "Main need",
        "Objectives",
        "Available budget",
        "Desired timeline",
      ],
      faqTitle: "Frequently asked questions",
      faq: [
        {
          question: "Is this only for large budgets?",
          answer:
            "No. This page exists precisely for structures with a genuine need and a limited budget. What matters most is clarity, seriousness and feasibility.",
        },
        {
          question: "What kind of support can be requested?",
          answer:
            "IT support, maintenance, cloud setup, website creation, local SEO, digital organization, basic security and overall strategic framing.",
        },
        {
          question: "How should I apply?",
          answer:
            "The best option is to send a structured email with the requested information so we can quickly understand the context and respond properly.",
        },
      ],
      ctaTitle: "Ready to move forward?",
      ctaText: "Tell us about your situation. We will respond with a clear proposal, priorities and next steps.",
      ctaButton: "Get help",
    },
    zh: {
      eyebrow: "帮助",
      title: "让技术更可及、更有用、更可持续。",
      description:
        "Genesis Connect 希望为创业者、小企业、协会与预算有限的组织提供清晰、务实且有人情味的数字支持。",
      visionTitle: "我们的愿景",
      visionText:
        "预算有限并不意味着不能拥有可靠的 IT、网站与 SEO 基础。我们的目标不是过度销售，而是帮助你建立真正有用、能长期发展的数字基础。",
      engagementTitle: "我们的承诺",
      engagementText:
        "我们会根据项目真实情况提供相称的支持：诊断、优先级判断、务实方案与专业执行标准。",
      eligibilityTitle: "适合申请的对象",
      eligibility: [
        "处于启动阶段的新创业者",
        "需要数字化结构梳理的小企业",
        "协会与本地公益型组织",
        "预算有限但项目明确、认真推进的团队",
      ],
      supportTitle: "我们希望支持的项目",
      supportProjects: [
        "建立专业网站与基础线上形象",
        "IT 整理、备份策略与基础网络安全",
        "本地 SEO、Google Business Profile 与本地可见度",
        "云协作、Microsoft 365、Google Workspace 与组织效率",
      ],
      conditionsTitle: "申请条件",
      conditions: [
        "需求必须真实、具体、可解释。",
        "项目应具备明确价值或长期结构化意义。",
        "预算不必很高，但必须真实透明。",
        "时间、限制与期望应尽量明确。",
      ],
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
      formTitle: "需要提供的信息",
      formLead:
        "为了更有效地评估你的申请，我们需要足够的背景信息来理解项目与需求。",
      formItems: [
        "姓名",
        "公司名称",
        "行业",
        "项目故事",
        "主要需求",
        "目标",
        "可用预算",
        "期望时间",
        "补充信息",
      ],
      faqTitle: "常见问题",
      faq: [
        {
          question: "这个支持计划只适合高预算项目吗？",
          answer:
            "不是。这一页正是为预算有限但需求真实、项目明确的结构准备的。最重要的是清晰度、认真程度与可行性。",
        },
        {
          question: "可以申请哪些类型的支持？",
          answer:
            "包括 IT 支持、维护、云部署、网站建设、本地 SEO、数字组织、基础安全与整体方向梳理。",
        },
        {
          question: "应该如何提交申请？",
          answer:
            "最简单的方式是发送一封结构化邮件，写清所需信息，这样我们可以更快理解并给出清晰回复。",
        },
      ],
      ctaTitle: "准备好推进了吗？",
      ctaText: "告诉我们你的情况。我们会给出清晰方案、优先级判断与下一步动作。",
      ctaButton: "获取帮助",
    },
  } as const;

  const page = content[safeLocale];
  const mailSubject =
    safeLocale === "fr"
      ? "Demande de soutien - Programme Help"
      : safeLocale === "en"
        ? "Genesis Connect support request"
        : "Genesis Connect 支持申请";
  const mailBody =
    safeLocale === "fr"
      ? `Nom :\nPrenom :\nEntreprise :\nSecteur :\nPresentation du projet :\nBesoins :\nObjectifs :\nBudget :\nDelais :\nInformations complementaires :`
      : safeLocale === "en"
        ? `Last name :\nFirst name :\nCompany :\nIndustry :\nProject overview :\nNeeds :\nObjectives :\nBudget :\nTimeline :\nAdditional information :`
        : `姓名：\n公司：\n行业：\n项目介绍：\n需求：\n目标：\n预算：\n时间安排：\n补充信息：`;
  const mailtoHref = `mailto:${businessEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <section className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.visionTitle}</p>
            <p className="mt-5 text-base leading-8 text-[#FAF9F6]/75">{page.visionText}</p>
          </section>
          <section className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.engagementTitle}</p>
            <p className="mt-5 text-base leading-8 text-[#FAF9F6]/75">{page.engagementText}</p>
          </section>
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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <section className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.eligibilityTitle}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
              {page.eligibility.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.supportTitle}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
              {page.supportProjects.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.conditionsTitle}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
              {page.conditions.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.formTitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">
            {page.formLead}
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {page.formItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#FAF9F6]/8 bg-[#2A1C15]/50 px-5 py-4 text-sm text-[#FAF9F6]/76"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.faqTitle}</p>
          <div className="mt-8 space-y-6">
            {page.faq.map((item) => (
              <div key={item.question} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                <h2 className="font-serif text-2xl text-[#FAF9F6]">{item.question}</h2>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.ctaTitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">
            {page.ctaText}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <TransitionLink
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/85 transition-colors hover:border-[#FAF9F6]/35 hover:text-[#FAF9F6]"
            >
              {page.ctaButton}
            </TransitionLink>
            <a
              href={mailtoHref}
              className="inline-flex items-center rounded-full border border-[#FAF9F6]/12 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/70 transition-colors hover:border-[#FAF9F6]/25 hover:text-[#FAF9F6]"
            >
              {businessEmail}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
