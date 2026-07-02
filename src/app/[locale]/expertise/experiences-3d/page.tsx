import { Link } from "@/i18n/routing";
import { targetCities } from "@/lib/seo";

type Locale = "fr" | "en" | "zh";

export default async function Experiences3DPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = ["fr", "en", "zh"].includes(locale as Locale) ? (locale as Locale) : "fr";

  const page = {
    fr: {
      eyebrow: "Expertise",
      title: "Expériences 3D",
      intro:
        "Conserver l’ADN premium : univers interactif, profondeur, mouvement et narration. La 3D devient un langage au service de la marque, sans sacrifier la performance.",
      sections: [
        { title: "Narration immersive", text: "Scénarisation, rythme, transitions et parcours qui guident l’attention avec précision." },
        { title: "Modélisation & intégration", text: "Optimisation des assets, textures, lumières et rendu pour un résultat haut de gamme." },
        { title: "Performance mobile & desktop", text: "Chargement progressif, optimisation GPU et choix techniques adaptés à l’expérience." },
        { title: "Couches & profondeur", text: "Gestion fine des couches visuelles : certains éléments passent devant, d’autres restent en arrière." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "La 3D ralentit-elle le site ?", a: "Pas forcément. Avec des assets optimisés et un rendu maîtrisé, on obtient une expérience fluide, y compris sur mobile." },
        { q: "Peut-on mélanger 3D et contenu SEO ?", a: "Oui. Le contenu et la structure restent présents, la 3D sert l’identité sans empêcher l’indexation." },
      ],
      localText: `Ciblage : experiences immersives premium (Strasbourg, Paris, et a distance). Villes : ${targetCities.slice(0, 6).join(", ")}.`,
      contact: "Contacter Genesis Connect",
    },
    en: {
      eyebrow: "Expertise",
      title: "3D Experiences",
      intro:
        "Premium interactive worlds built with depth, motion and storytelling. 3D becomes a language for the brand without sacrificing performance.",
      sections: [
        { title: "Immersive storytelling", text: "Scenarios, rhythm, transitions and flows that guide attention." },
        { title: "Modeling & integration", text: "Asset optimization, textures, lighting and rendering for a high-end result." },
        { title: "Mobile & desktop performance", text: "Progressive loading, GPU optimization and pragmatic technical choices." },
        { title: "Layers & depth", text: "Fine control over layers: some elements can appear in front, others behind." },
      ],
      faqTitle: "FAQ",
      faqs: [
        { q: "Does 3D slow down the website?", a: "Not necessarily. With optimized assets and controlled rendering, the experience remains smooth, including on mobile." },
      ],
      localText: `Target: premium immersive experiences (Strasbourg, Paris, remote). Cities: ${targetCities.slice(0, 6).join(", ")}.`,
      contact: "Contact Genesis Connect",
    },
    zh: {
      eyebrow: "专业服务",
      title: "3D 沉浸式体验",
      intro:
        "保持高端 DNA：互动世界、深度、运动与叙事。3D 是品牌语言的一部分，同时兼顾性能与可用性。",
      sections: [
        { title: "沉浸叙事", text: "节奏、过渡与路径设计，精准引导注意力。" },
        { title: "建模与集成", text: "资产、纹理、灯光与渲染优化，保证高级效果。" },
        { title: "移动端与桌面性能", text: "渐进加载、GPU 优化与务实技术选择。" },
        { title: "层级与深度", text: "精细控制视觉层级：部分元素可置前，部分保持背景。" },
      ],
      faqTitle: "常见问题",
      faqs: [{ q: "3D 会让网站变慢吗？", a: "不一定。通过资产与渲染优化，可以在移动端也保持流畅体验。" }],
      localText: `目标：高端沉浸体验（Strasbourg、Paris、远程）。城市：${targetCities.slice(0, 6).join("、")}。`,
      contact: "联系 Genesis Connect",
    },
  }[safeLocale];

  return (
    <main className="min-h-screen bg-[#2A1C15] px-6 pb-20 pt-36 text-[#FAF9F6] md:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/60">{page.eyebrow}</p>
        <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.03em] md:text-7xl">{page.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-[1.85] text-[#FAF9F6]/88 md:text-[1.22rem]">{page.intro}</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.sections.map((section) => (
            <section key={section.title} className="rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-8">
              <h2 className="font-serif text-[2rem] leading-[1.08] tracking-[-0.02em]">{section.title}</h2>
              <p className="mt-5 text-base leading-[1.8] text-[#FAF9F6]/84 md:text-[1.08rem]">{section.text}</p>
            </section>
          ))}
        </div>

        <section className="mt-14 rounded-[32px] border border-[#FAF9F6]/10 bg-[#241710] p-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/62">{page.faqTitle}</p>
          <div className="mt-8 space-y-6">
            {page.faqs.map((item) => (
              <div key={item.q} className="border-b border-[#FAF9F6]/10 pb-6 last:border-b-0">
                <h3 className="font-serif text-[2rem] leading-[1.08] tracking-[-0.02em] text-[#FAF9F6]">{item.q}</h3>
                <p className="mt-4 max-w-4xl text-base leading-[1.8] text-[#FAF9F6]/84 md:text-[1.08rem]">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-10 text-base leading-[1.75] text-[#FAF9F6]/72">{page.localText}</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/85 transition-colors hover:border-[#FAF9F6]/35 hover:text-[#FAF9F6]"
          >
            {page.contact}
          </Link>
          <Link
            href="/expertise"
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/12 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/70 transition-colors hover:border-[#FAF9F6]/25 hover:text-[#FAF9F6]"
          >
            {safeLocale === "fr" ? "Retour à Expertise" : safeLocale === "en" ? "Back to Expertise" : "返回 Expertise"}
          </Link>
        </div>
      </div>
    </main>
  );
}
