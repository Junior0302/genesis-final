import { notFound } from "next/navigation";
import TrainingProtectionNotice from "@/components/ui/TrainingProtectionNotice";
import { externalSites } from "@/lib/externalSites";
import {
  formatPrice,
  getLocalizedValue,
  getTraining,
  getTrainingUi,
  trainingSupport,
  type SupportedLocale,
} from "@/lib/trainings";

export default async function FormationConditionsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale = locale as SupportedLocale;
  const training = getTraining(slug);

  if (!training) {
    notFound();
  }

  const ui = getTrainingUi();

  const sections = {
    delivery: [
      {
        fr: "La formation est envoyee sous 48 heures maximum apres validation du paiement.",
        en: "The training is delivered within 48 hours maximum after payment validation.",
        zh: "课程将在付款确认后最迟 48 小时内发送。"
      },
      {
        fr: "L'acces est transmis par e-mail.",
        en: "Access is sent by email.",
        zh: "访问权限将通过电子邮件发送。"
      },
      {
        fr: "Un document PDF contenant les informations d'acces est envoye automatiquement.",
        en: "A PDF document containing the access information is sent automatically.",
        zh: "系统会自动发送包含访问信息的 PDF 文档。"
      }
    ],
    usage: [
      {
        fr: "Les contenus sont reserves a un usage personnel.",
        en: "The content is for personal use only.",
        zh: "内容仅供个人使用。"
      },
      {
        fr: "La revente, le partage et la redistribution des PDF sont strictement interdits.",
        en: "Resale, sharing and redistribution of PDFs are strictly prohibited.",
        zh: "严禁转售、分享或再次分发 PDF。"
      },
      {
        fr: "Les acces ne peuvent etre cedes a un tiers et les methodes restent la propriete exclusive de Genesis Connect.",
        en: "Access cannot be transferred to a third party and all methods remain the exclusive property of Genesis Connect.",
        zh: "访问权限不得转让给第三方，所有方法与资料均归 Genesis Connect 独家所有。"
      }
    ],
    ip: [
      {
        fr: "Tous les contenus sont proteges par le Code de la propriete intellectuelle.",
        en: "All content is protected under intellectual property law.",
        zh: "所有内容均受知识产权法保护。"
      },
      {
        fr: "Sont interdits : reproduction, distribution, commercialisation, modification, duplication et publication publique.",
        en: "The following are prohibited: reproduction, distribution, commercialization, modification, duplication and public publication.",
        zh: "以下行为均被禁止：复制、分发、商业化、修改、重复制作及公开发布。"
      }
    ],
    liability: [
      {
        fr: "Genesis Connect ne garantit aucun revenu, resultat commercial ou reussite financiere.",
        en: "Genesis Connect does not guarantee any income, commercial result or financial success.",
        zh: "Genesis Connect 不保证任何收入、商业结果或财务成功。"
      },
      {
        fr: "Les resultats dependent uniquement de l'implication de chaque participant.",
        en: "Results depend solely on each participant's involvement.",
        zh: "结果完全取决于每位参与者的投入程度。"
      }
    ]
  };

  return (
    <div className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6]">
      <section className="px-8 md:px-16 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#FAF9F6]/40">
              {ui.conditions.eyebrow[safeLocale]}
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl md:text-6xl font-serif leading-[0.96]">
              {ui.conditions.title[safeLocale]}
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#FAF9F6]/70 leading-relaxed">
              {getLocalizedValue(training.title, safeLocale)} · {formatPrice(training.price, safeLocale)}
            </p>
          </div>

          <div className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#2A1C15]/70 p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
              Genesis Academy
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[#FAF9F6]/78 md:text-base">
              {safeLocale === "fr"
                ? "Cette etape de validation et tout paiement formation sont maintenant geres sur Genesis Academy. Le site principal ne lance plus de session de paiement."
                : safeLocale === "en"
                ? "This validation step and all training payments are now handled on Genesis Academy. The main website no longer starts checkout sessions."
                : "此验证步骤及所有培训支付现已由 Genesis Academy 处理，主站不再发起支付会话。"}
            </p>
            <a
              href={externalSites.academy.href}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[#D4AF37]/30 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#D4AF37] transition-colors hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/8"
            >
              {safeLocale === "fr"
                ? "Ouvrir Genesis Academy"
                : safeLocale === "en"
                ? "Open Genesis Academy"
                : "打开 Genesis Academy"}
            </a>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          {[
            ["delivery", ui.conditions.delivery[safeLocale]],
            ["usage", ui.conditions.usage[safeLocale]],
            ["ip", ui.conditions.ip[safeLocale]],
            ["liability", ui.conditions.liability[safeLocale]],
          ].map(([key, title]) => (
            <div
              key={key}
              className="rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] p-8"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
                {title}
              </p>
              <ul className="mt-6 space-y-4 text-sm md:text-base text-[#FAF9F6]/75 leading-relaxed">
                {sections[key as keyof typeof sections].map((item) => (
                  <li key={item.fr}>• {item[safeLocale]}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-16 pb-24">
        <div className="max-w-6xl mx-auto rounded-[30px] border border-[#FAF9F6]/10 bg-[#251812] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/40">
            Support
          </p>
          <p className="mt-4 text-base md:text-lg text-[#FAF9F6]/70 leading-relaxed">
            {trainingSupport[safeLocale]}
          </p>
        </div>
      </section>

      <TrainingProtectionNotice locale={safeLocale} />
    </div>
  );
}
