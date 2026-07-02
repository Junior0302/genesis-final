type Locale = "fr" | "en" | "zh";

import Reveal from "@/components/ui/Reveal";
import { businessEmail } from "@/lib/seo";

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Cookies",
      title: "Politique cookies",
      intro:
        "Cette page explique l’usage des cookies et technologies similaires. Certains cookies sont nécessaires au fonctionnement, d’autres servent à la mesure d’audience (selon consentement).",
      sections: [
        {
          title: "Cookies nécessaires",
          text: "Indispensables pour le fonctionnement du site, la sécurité et la navigation. Ils ne peuvent pas être désactivés via une simple option côté site.",
        },
        {
          title: "Mesure d’audience",
          text: "Google Analytics peut être utilisé pour comprendre l’utilisation du site et améliorer l’expérience (selon configuration et consentement).",
        },
        {
          title: "Gérer vos préférences",
          text: "Vous pouvez configurer votre navigateur pour bloquer ou supprimer les cookies. Certaines fonctionnalités peuvent alors être limitées.",
        },
      ],
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Cookies",
      title: "Cookie policy",
      intro:
        "This page explains the use of cookies and similar technologies. Some cookies are necessary for operation; others may be used for analytics (depending on consent).",
      sections: [
        {
          title: "Necessary cookies",
          text: "Required for the website to function, for security and basic navigation. They cannot be disabled through a simple on-site option.",
        },
        {
          title: "Analytics",
          text: "Google Analytics may be used to understand usage and improve the experience (depending on configuration and consent).",
        },
        {
          title: "Manage preferences",
          text: "You can configure your browser to block or delete cookies. Some features may be limited as a result.",
        },
      ],
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "Cookies",
      title: "Cookie 政策",
      intro:
        "本页说明 cookies 与类似技术的使用。一些 cookies 用于网站正常运行，另一些可能用于统计分析（取决于同意）。",
      sections: [
        {
          title: "必要 cookies",
          text: "用于网站运行、安全与基础导航，通常无法通过站内简单选项完全关闭。",
        },
        {
          title: "统计分析",
          text: "可能使用 Google Analytics 了解使用情况并优化体验（取决于配置与同意）。",
        },
        {
          title: "偏好设置",
          text: "你可以在浏览器中管理、删除或阻止 cookies，但部分功能可能受限。",
        },
      ],
      contact: "联系 Genesis Connect",
    },
  }[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#FAF9F6]/45">{page.eyebrow}</p>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#FAF9F6]/70 md:text-lg">{page.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.sections.map((section, index) => (
            <Reveal
              key={section.title}
              delay={index * 80}
              className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8"
            >
              <h2 className="font-serif text-2xl">{section.title}</h2>
              <p className="mt-5 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">{section.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <a
            href={`mailto:${businessEmail}`}
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/85 transition-colors hover:border-[#FAF9F6]/35 hover:text-[#FAF9F6]"
          >
            {page.contact}
          </a>
        </Reveal>
      </div>
    </main>
  );
}
