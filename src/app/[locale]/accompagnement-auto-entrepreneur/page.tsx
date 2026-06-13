import type { Metadata } from "next";
import { externalSites } from "@/lib/externalSites";

type SupportedLocale = "fr" | "en" | "zh";

const content = {
  fr: {
    title: "Accompagnement auto-entrepreneur",
    description:
      "Accompagnement premium pour clarifier son activite, structurer son offre et lancer son statut auto-entrepreneur avec une image credible.",
    eyebrow: "Accompagnement",
    heading: "Creer son auto-entreprise avec plus de clarte, de cadre et de credibilite.",
    intro:
      "Cette offre est pensee pour les independants qui veulent lancer leur activite sans improvisation : positionnement, offre, parcours client, presence digitale et premiers outils.",
    points: [
      "Clarification du projet et du positionnement",
      "Structure d'offre, tarifs et proposition de valeur",
      "Conseils pour le lancement administratif et commercial",
      "Base de presence digitale coherente et rassurante",
    ],
    cta: "Acceder au site Aide",
    processTitle: "Processus",
    processText:
      "Le site principal ne gere pas de paiement pour cet accompagnement. Si votre candidature est validee sur Genesis Aide, un lien de paiement vous sera envoye par e-mail avec les informations a confirmer avant demarrage.",
  },
  en: {
    title: "Self-employed launch support",
    description:
      "Premium support to clarify your business, structure your offer and launch as self-employed with a credible image.",
    eyebrow: "Support",
    heading: "Launch your self-employed activity with more clarity, structure and credibility.",
    intro:
      "This offer is designed for independents who want to launch their activity without improvising: positioning, offer design, customer journey, digital presence and first business tools.",
    points: [
      "Project and positioning clarity",
      "Offer structure, pricing and value proposition",
      "Guidance for administrative and commercial launch",
      "A coherent and trustworthy digital presence baseline",
    ],
    cta: "Open Aide website",
    processTitle: "Process",
    processText:
      "The main website does not handle payments for this support service. If your application is approved on Genesis Aide, a payment link will be sent by email together with the information to confirm before the mission starts.",
  },
  zh: {
    title: "个体创业支持",
    description:
      "为个人创业者提供高端支持，帮助梳理业务、构建服务并以可信形象启动个人事业。",
    eyebrow: "陪伴支持",
    heading: "以更清晰、更有框架、更具可信度的方式开启个人创业。",
    intro:
      "该服务面向希望稳健启动个人业务的独立从业者，覆盖定位、服务设计、客户路径、数字形象与首批经营工具。",
    points: [
      "明确项目方向与市场定位",
      "构建服务结构、定价与价值主张",
      "提供行政与商业启动建议",
      "建立一致且可信的数字形象基础",
    ],
    cta: "前往 Aide 网站",
    processTitle: "流程",
    processText:
      "主站不处理此类支持服务的付款。如果你在 Genesis Aide 上的申请被确认，我们会通过电子邮件发送付款链接以及启动前需要确认的信息。",
  },
} as const;

function getContent(locale: string) {
  return content[(locale as SupportedLocale) ?? "fr"] ?? content.fr;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const page = getContent(locale);

  return {
    title: page.title,
    description: page.description,
    keywords: [
      "auto entrepreneur",
      "accompagnement entreprise",
      "lancement activite",
      "positionnement",
      "offre digitale",
      "Genesis Connect",
    ],
  };
}

export default async function AutoEntrepreneurSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const page = getContent(locale);

  return (
    <section className="min-h-screen bg-[#2A1C15] px-6 pb-24 pt-32 text-[#FAF9F6] md:px-12 md:pt-40">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#FAF9F6]/42">
            {page.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            {page.heading}
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-[#FAF9F6]/72 md:text-lg">
            {page.intro}
          </p>
          <a
            href={externalSites.aide.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-full border border-[#D4AF37]/40 px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#D4AF37] transition-colors hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/8"
          >
            {page.cta}
          </a>
        </div>

        <div className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#241710]/82 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.16)] md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#FAF9F6]/42">
            Genesis Support
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {page.points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[#FAF9F6]/10 bg-[#2A1C15] px-5 py-4 text-sm leading-relaxed text-[#FAF9F6]/78"
              >
                {point}
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-[#FAF9F6]/10 bg-[#2A1C15] px-5 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/42">
              {page.processTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#FAF9F6]/74">
              {page.processText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
