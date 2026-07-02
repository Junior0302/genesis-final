"use client";

import { useLocale } from "next-intl";
import TransitionLink from "@/components/ui/TransitionLink";
import { helpEmail } from "@/lib/seo";

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
      whyTitle: "Pourquoi Genesis Connect aide certains projets",
      whyText:
        "Chez Genesis Connect, nous savons que certaines idees ont du potentiel mais peu de moyens. Le programme Help est ne de cette conviction : rendre la technologie accessible, utile et durable pour les petites structures.",
      engagementTitle: "Notre engagement",
      engagementText:
        "Nous cherchons a proposer un accompagnement proportionne au contexte du projet : diagnostic, priorisation, cadre simple, solutions pragmatiques, et niveau d'exigence professionnel.",
      eligibilityTitle: "Qui peut candidater",
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
      applyTitle: "Comment candidater",
      applySteps: [
        "Prepare un email structure avec les informations ci-dessous.",
        "Explique ton besoin principal et ton contexte (budget / delais / contraintes).",
        "Envoie ta demande via le bouton email ci-dessous.",
      ],
      criteriaTitle: "Critères de sélection",
      conditions: [
        "Le besoin doit etre reel, concret et explicable.",
        "Le projet doit avoir une utilite claire ou un potentiel de structuration durable.",
        "Le budget n'a pas besoin d'etre eleve, mais il doit etre annonce honnêtement.",
        "Les delais, les contraintes et les attentes doivent etre precises.",
      ],
      formTitle: "Informations a fournir",
      formLead:
        "Pour etudier une demande d'accompagnement, nous avons besoin d'un minimum de contexte afin de te repondre utilement.",
      formItems: [
        "Nom",
        "Prenom",
        "Entreprise",
        "Secteur d'activite",
        "Presentation du projet",
        "Histoire du projet",
        "Besoins",
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
      title: "Supporting projects that deserve to exist.",
      description:
        "Genesis Connect wants to support new founders, small businesses, associations and low-budget structures with clear, human and realistic digital guidance.",
      whyTitle: "Why Genesis Connect supports some projects",
      whyText:
        "Some ideas have real potential but limited means. The Help program exists to make technology accessible, useful and sustainable for small organizations.",
      engagementTitle: "Our commitment",
      engagementText:
        "We aim to provide support that matches the real context of the project: diagnosis, prioritization, pragmatic solutions and professional standards.",
      eligibilityTitle: "Who can apply",
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
      applyTitle: "How to apply",
      applySteps: [
        "Prepare a structured email with the information below.",
        "Explain your main need and constraints (budget / timeline / context).",
        "Send your request using the email button below.",
      ],
      criteriaTitle: "Selection criteria",
      conditions: [
        "The need must be real, concrete and explainable.",
        "The project should have clear usefulness or long-term structuring value.",
        "The budget does not have to be high, but it must be stated honestly.",
        "Timelines, constraints and expectations should be clearly defined.",
      ],
      formTitle: "Information to provide",
      formLead:
        "To review a support request, we need enough context to understand the project and reply usefully.",
      formItems: [
        "First name",
        "Last name",
        "Company",
        "Business sector",
        "Project overview",
        "Project story",
        "Needs",
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
      title: "支持值得存在的项目。",
      description:
        "Genesis Connect 希望为创业者、小企业、协会与预算有限的组织提供清晰、务实且有人情味的数字支持。",
      whyTitle: "为什么 Genesis Connect 会支持部分项目",
      whyText:
        "有些想法很有潜力，但资源有限。Help 计划的目标是让技术更可及、更有用、更可持续，帮助小组织建立真正有效的数字基础。",
      engagementTitle: "我们的承诺",
      engagementText:
        "我们会根据项目真实情况提供相称的支持：诊断、优先级判断、务实方案与专业执行标准。",
      eligibilityTitle: "谁可以申请",
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
      applyTitle: "如何申请",
      applySteps: ["按下方信息准备一封结构化邮件。", "说明你的主要需求与限制（预算/时间/背景）。", "使用下方按钮发送申请。"],
      criteriaTitle: "筛选标准",
      conditions: [
        "需求必须真实、具体、可解释。",
        "项目应具备明确价值或长期结构化意义。",
        "预算不必很高，但必须真实透明。",
        "时间、限制与期望应尽量明确。",
      ],
      formTitle: "需要提供的信息",
      formLead:
        "为了更有效地评估你的申请，我们需要足够的背景信息来理解项目与需求。",
      formItems: [
        "姓名",
        "公司/组织",
        "行业",
        "项目介绍",
        "项目故事",
        "需求",
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
      ? `Nom :\nPrenom :\nEntreprise :\nSecteur :\nPresentation :\nObjectifs :\nBesoins :\nBudget :\nDelais :\nInformations complementaires :`
      : safeLocale === "en"
        ? `Last name :\nFirst name :\nCompany :\nIndustry :\nOverview :\nObjectives :\nNeeds :\nBudget :\nTimeline :\nAdditional information :`
        : `姓名：\n公司：\n行业：\n项目介绍：\n需求：\n目标：\n预算：\n时间安排：\n补充信息：`;
  const mailtoHref = `mailto:${helpEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

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
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.whyTitle}</p>
            <p className="mt-5 text-base leading-8 text-[#FAF9F6]/75">{page.whyText}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
              {page.supportProjects.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.engagementTitle}</p>
            <p className="mt-5 text-base leading-8 text-[#FAF9F6]/75">{page.engagementText}</p>
          </section>
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
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.applyTitle}</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">
              {page.applySteps.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href={mailtoHref}
                className="inline-flex items-center rounded-full border border-[#FAF9F6]/18 px-6 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/78 transition-colors hover:border-[#FAF9F6]/30 hover:text-[#FAF9F6]"
              >
                {safeLocale === "fr" ? "Envoyer un email" : safeLocale === "en" ? "Send an email" : "发送邮件"}
              </a>
            </div>
          </section>
          <section className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/55">{page.criteriaTitle}</p>
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
              {helpEmail}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
