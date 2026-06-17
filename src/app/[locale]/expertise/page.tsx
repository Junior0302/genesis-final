"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale, useTranslations } from "next-intl";
import TransitionLink from "@/components/ui/TransitionLink";
import { targetCities } from "@/lib/seo";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExpertisePage() {
  const t = useTranslations('ExpertisePage');
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);

  const hubCards =
    locale === "fr"
      ? [
          {
            title: "Création de Sites Internet",
            href: "/expertise/creation-sites-internet",
            desc: "Sites vitrines, sites professionnels, e-commerce, refonte, maintenance, hebergement et optimisation SEO.",
          },
          {
            title: "Développement Web & Applications",
            href: "/expertise/developpement-web-applications",
            desc: "Solutions sur mesure, outils metier, automatisation et plateformes professionnelles modernes.",
          },
          {
            title: "Dépannage Informatique",
            href: "/expertise/depannage-informatique",
            desc: "Reparation PC, suppression de virus, assistance a distance, sauvegarde, installation materiel et intervention sur site.",
          },
          {
            title: "Maintenance Informatique",
            href: "/expertise/maintenance-informatique",
            desc: "Maintenance preventive, corrective, mises a jour, supervision legere et securite.",
          },
          {
            title: "Cybersécurité",
            href: "/expertise/cybersecurite",
            desc: "Audit, protection des postes, gestion des acces, sauvegardes et sensibilisation utilisateurs.",
          },
          {
            title: "Réseaux & Wi‑Fi",
            href: "/expertise/reseaux-wifi",
            desc: "Installation reseau, configuration Wi‑Fi, securisation, deploiement materiel et optimisation.",
          },
          {
            title: "SEO & Visibilité Locale",
            href: "/expertise/seo-visibilite-locale",
            desc: "SEO local, Google Business Profile, Google Maps, optimisation technique et optimisation IA.",
          },
          {
            title: "Solutions Cloud",
            href: "/expertise/solutions-cloud",
            desc: "Microsoft 365, Google Workspace, sauvegarde cloud, collaboration et migration.",
          },
          {
            title: "Expériences 3D",
            href: "/expertise/experiences-3d",
            desc: "Univers interactifs premium, narration immersive et experiences numeriques haut de gamme.",
          },
        ]
      : locale === "en"
        ? [
            { title: "Website Creation", href: "/expertise/creation-sites-internet", desc: "Showcase sites, business sites, e-commerce, redesign, maintenance, hosting and SEO optimization." },
            { title: "Web Development & Apps", href: "/expertise/developpement-web-applications", desc: "Custom solutions, internal tools, automation and modern professional platforms." },
            { title: "IT Troubleshooting", href: "/expertise/depannage-informatique", desc: "PC repair, malware cleanup, remote support, backup and on-site help." },
            { title: "IT Maintenance", href: "/expertise/maintenance-informatique", desc: "Preventive and corrective maintenance, updates, light monitoring and security." },
            { title: "Cybersecurity", href: "/expertise/cybersecurite", desc: "Security audit, endpoint protection, access management, backups and user awareness." },
            { title: "Networks & Wi‑Fi", href: "/expertise/reseaux-wifi", desc: "Network setup, Wi‑Fi configuration, hardening and connectivity optimization." },
            { title: "SEO & Local Visibility", href: "/expertise/seo-visibilite-locale", desc: "Local SEO, Google Business Profile, Google Maps, technical optimization and AI optimization." },
            { title: "Cloud Solutions", href: "/expertise/solutions-cloud", desc: "Microsoft 365, Google Workspace, cloud backup, collaboration and migration." },
            { title: "3D Experiences", href: "/expertise/experiences-3d", desc: "Premium interactive worlds, immersive storytelling and high-end digital experiences." },
          ]
        : [
            { title: "网站建设", href: "/expertise/creation-sites-internet", desc: "企业网站、电商、改版、维护、托管与 SEO 优化。" },
            { title: "Web 开发与应用", href: "/expertise/developpement-web-applications", desc: "定制化解决方案、内部工具、自动化与专业平台。" },
            { title: "IT 故障处理", href: "/expertise/depannage-informatique", desc: "PC 维修、病毒清理、远程支持、备份与上门服务。" },
            { title: "IT 维护", href: "/expertise/maintenance-informatique", desc: "预防/纠正性维护、更新、轻量监控与安全。" },
            { title: "网络安全", href: "/expertise/cybersecurite", desc: "安全审计、终端防护、访问管理、备份与培训。" },
            { title: "网络与 Wi‑Fi", href: "/expertise/reseaux-wifi", desc: "网络部署、Wi‑Fi 配置、安全加固与连接优化。" },
            { title: "SEO 与本地可见度", href: "/expertise/seo-visibilite-locale", desc: "本地 SEO、Google 商家、地图可见度、技术优化与 AI 优化。" },
            { title: "云解决方案", href: "/expertise/solutions-cloud", desc: "Microsoft 365、Google Workspace、云备份与协作迁移。" },
            { title: "3D 沉浸式体验", href: "/expertise/experiences-3d", desc: "高端互动世界、沉浸叙事与品牌级数字体验。" },
          ];

  const serviceDetails =
    locale === "fr"
      ? [
          {
            title: "Depannage informatique",
            text: "Intervention rapide pour incidents poste de travail, lenteurs, blocages logiciels, pannes PC, reparation ordinateur, reparation PC et remise en service d'environnements professionnels.",
          },
          {
            title: "Maintenance informatique",
            text: "Maintenance preventive et corrective, supervision legere, nettoyage, mises a jour, fiabilisation du parc et reduction des interruptions d'activite.",
          },
          {
            title: "Assistance a distance",
            text: "Support informatique reactif a distance pour utilisateurs, dirigeants, associations et petites equipes avec resolution claire et documentee.",
          },
          {
            title: "Installation de materiel",
            text: "Installation informatique de postes, imprimantes, peripheriques, migrations et configuration complete des outils de travail.",
          },
          {
            title: "Installation de reseaux & Wi-Fi",
            text: "Installation reseau, installation Wi-Fi, optimisation de couverture, securisation des acces et organisation simple des equipements connectes.",
          },
          {
            title: "Cybersécurité & sauvegarde",
            text: "Protection des acces, hygiene numerique, sauvegarde de donnees, reprise simple, bonnes pratiques et reduction des risques pour petites structures.",
          },
          {
            title: "Solutions cloud",
            text: "Microsoft 365, Google Workspace, partage documentaire, collaboration, structuration cloud et transformation numerique pragmatique.",
          },
          {
            title: "Creation de sites internet & developpement web",
            text: "Creation de site internet, developpement web, architecture performante et experiences premium concues pour la conversion et la credibilite.",
          },
          {
            title: "Referencement SEO local & AI Search",
            text: "SEO local, Google Business Profile, schema.org, optimisation GEO, LLM SEO et AI Search Optimization pour mieux ressortir dans Google, Bing, ChatGPT, Gemini et Perplexity.",
          },
          {
            title: "Accompagnement numerique",
            text: "Conseil, cadrage, priorisation et accompagnement des entrepreneurs, associations et petites entreprises qui veulent evoluer proprement.",
          },
        ]
      : locale === "en"
        ? [
            { title: "IT troubleshooting", text: "Fast support for workstation issues, software incidents, PC failures, slow devices and day-to-day technical blockers." },
            { title: "IT maintenance", text: "Preventive and corrective maintenance, updates, device cleanup and reliability improvements for small organizations." },
            { title: "Remote support", text: "Responsive remote assistance for users, founders and lean teams with clear, documented actions." },
            { title: "Hardware setup", text: "Deployment and setup of workstations, printers, peripherals and digital tools." },
            { title: "Network & Wi-Fi setup", text: "LAN, Wi-Fi and access configuration with secure and practical connectivity for growing teams." },
            { title: "Cybersecurity & backup", text: "Access protection, backup routines, essential security hygiene and data protection for small structures." },
            { title: "Cloud solutions", text: "Microsoft 365, Google Workspace, collaboration and practical cloud structuring." },
            { title: "Website creation & web development", text: "High-quality websites and web platforms designed for credibility, performance and conversion." },
            { title: "Local SEO & AI search", text: "Local SEO, Google Business Profile, structured data, GEO SEO and AI Search Optimization." },
            { title: "Digital guidance", text: "Strategic digital support for founders, associations and small businesses." },
          ]
        : [
            { title: "IT 故障处理", text: "快速处理工作站、软件、PC 与日常技术问题。" },
            { title: "IT 维护", text: "预防性与纠正性维护，提升设备稳定性与持续可用性。" },
            { title: "远程支持", text: "面向创业者、小团队与组织的快速远程协助。" },
            { title: "设备安装", text: "工作站、打印机、外设与数字工具的部署配置。" },
            { title: "网络与 Wi-Fi 部署", text: "LAN、Wi-Fi 与访问管理的实用、安全配置。" },
            { title: "网络安全与备份", text: "访问保护、备份策略、数据保护与基础安全卫生。" },
            { title: "云解决方案", text: "Microsoft 365、Google Workspace 与协作型云环境搭建。" },
            { title: "网站建设与 Web 开发", text: "兼顾品牌形象、性能与转化的网站与平台开发。" },
            { title: "本地 SEO 与 AI 搜索优化", text: "本地 SEO、Google Business Profile、结构化数据、GEO SEO 与 AI 搜索优化。" },
            { title: "数字化陪伴", text: "面向创业者、小企业与协会的数字化支持与优先级梳理。" },
          ];

  const localSeoText =
    locale === "fr"
      ? `Nous structurons des contenus capables de ressortir sur des requetes comme ${targetCities
          .slice(0, 6)
          .map((city) => `depannage informatique ${city}`)
          .join(", ")} mais aussi maintenance informatique, creation de site internet, technicien informatique, assistance informatique, SEO local et transformation numerique.`
      : locale === "en"
        ? "We structure content to rank for local IT support, maintenance, website creation and local SEO queries, while also improving visibility for AI-based search engines."
        : "我们会围绕本地 IT 支持、维护、建站、本地 SEO 以及 AI 搜索场景来组织内容与结构。";

  const faqItems =
    locale === "fr"
      ? [
          {
            question: "Genesis Connect propose-t-il un accompagnement local a Strasbourg ?",
            answer:
              "Oui. Nous visons notamment Strasbourg, Schiltigheim, Illkirch-Graffenstaden, Haguenau, Obernai, Colmar et Mulhouse, tout en travaillant egalement a distance et sur Paris.",
          },
          {
            question: "Pouvez-vous gerer l'informatique et le site internet ensemble ?",
            answer:
              "Oui. Nous pouvons cadrer le support informatique, la maintenance, les sauvegardes, le cloud, la creation de site internet et le referencement SEO dans une logique coherente.",
          },
          {
            question: "Integrez-vous le SEO pour les moteurs de recherche IA ?",
            answer:
              "Oui. Nous mettons en place des contenus utiles, des donnees structurees, un maillage plus clair et une architecture adaptee aux moteurs de recherche modernes et IA.",
          },
        ]
      : locale === "en"
        ? [
            {
              question: "Do you support local businesses around Strasbourg?",
              answer:
                "Yes. Strasbourg and surrounding cities are part of our targeted local SEO and support areas, in addition to remote work and Paris-based activity.",
            },
            {
              question: "Can you handle both IT and website needs?",
              answer:
                "Yes. We can align IT support, maintenance, cloud setup, website creation and local SEO within one coherent roadmap.",
            },
          ]
        : [
            {
              question: "是否支持斯特拉斯堡及周边本地企业？",
              answer:
                "是的。我们重点覆盖 Strasbourg 及周边城市，同时也支持远程协作与巴黎区域业务。",
            },
          ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO REVEAL
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      })
      .from(".hero-desc", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=1.0");

      // 2. SCROLL REVEALS
      gsap.utils.toArray<HTMLElement>(".reveal-text").forEach((el) => {
        gsap.fromTo(el, 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // 3. LIST STAGGERS
      gsap.utils.toArray<HTMLElement>(".stagger-container").forEach((el) => {
        gsap.fromTo(el.querySelectorAll(".stagger-item"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-[#2A1C15] text-[#FAF9F6] overflow-hidden">
      
      {/* 1. HERO / VISION */}
      <section className="min-h-[100svh] flex flex-col justify-center items-center pr-6 md:px-12 pt-20 pb-0">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-center h-full">
            <h1 className="hero-title text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif leading-[0.9] mb-4 md:mb-6 tracking-tight mix-blend-difference text-[#FAF9F6] whitespace-pre-line">
                {t('Hero.title')}
            </h1>
            <div className="hero-desc w-full md:w-2/3 lg:w-1/2 backdrop-blur-sm md:backdrop-blur-none bg-[#2A1C15]/10 md:bg-transparent py-2">
                <p className="text-sm md:text-2xl font-serif text-[#FAF9F6] mb-2 md:mb-5 leading-tight whitespace-pre-line">
                    {t('Hero.subtitle')}
                </p>
                <div className="space-y-2 md:space-y-4 text-xs md:text-lg font-light text-[#FAF9F6]/60 leading-relaxed max-w-xl">
                    <p>
                        {t('Hero.description')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 2. EXPERTISE INTRO */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-8 py-24 bg-[#251812]">
        <div className="reveal-text max-w-4xl">
             <h2 className="text-xs uppercase tracking-[0.4em] mb-12 text-[#FAF9F6]/40">{t('Intro.title')}</h2>
             <p className="text-3xl md:text-5xl font-serif text-[#FAF9F6] leading-tight mb-8">
               {t('Intro.heading')}
             </p>
             <p className="text-lg font-light text-[#FAF9F6]/70 max-w-2xl mx-auto leading-relaxed">
                {t('Intro.text')}
             </p>
        </div>
      </section>

      <section className="min-h-screen px-8 md:px-24 py-24">
        <div className="reveal-text mx-auto max-w-7xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40 mb-12 border-b border-[#FAF9F6]/10 pb-4 inline-block">
            {locale === "fr" ? "Expertise" : locale === "en" ? "Expertise" : "专业服务"}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {hubCards.map((card) => (
              <TransitionLink
                key={card.href}
                href={card.href}
                className="group relative block overflow-hidden rounded-[28px] border border-[#FAF9F6]/10 bg-[#241710]/70 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay" />
                <div className="flex h-full min-h-[260px] flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
                      Genesis Connect
                    </p>
                    <h3 className="mt-6 font-serif text-2xl leading-tight text-[#FAF9F6]">
                      {card.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#FAF9F6]/70">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-10 inline-flex items-center text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/70">
                    {locale === "fr" ? "Découvrir" : locale === "en" ? "Explore" : "了解更多"}
                    <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </TransitionLink>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE EXPERTISE */}
      <section className="min-h-screen px-8 md:px-24 py-24">
        <h2 className="reveal-text text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40 mb-20 border-b border-[#FAF9F6]/10 pb-4 inline-block">
            {t('CoreExpertise.title')}
        </h2>
        
        <div className="stagger-container grid grid-cols-1 gap-24">
            
            {/* ITEM 1 */}
            <div className="stagger-item group flex flex-col md:flex-row gap-8 md:gap-24 border-b border-[#FAF9F6]/10 pb-16">
                <div className="md:w-1/3">
                    <h3 className="text-4xl md:text-5xl font-serif text-[#FAF9F6] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
                        {t('CoreExpertise.Item1.title')}
                    </h3>
                </div>
                <div className="md:w-2/3 md:pt-4">
                    <p className="text-xl text-[#FAF9F6]/80 mb-4 font-light">{t('CoreExpertise.Item1.subtitle')}</p>
                    <p className="text-[#FAF9F6]/60 font-light leading-relaxed max-w-2xl">
                        {t('CoreExpertise.Item1.description')}
                    </p>
                </div>
            </div>

            {/* ITEM 2 */}
            <div className="stagger-item group flex flex-col md:flex-row gap-8 md:gap-24 border-b border-[#FAF9F6]/10 pb-16">
                <div className="md:w-1/3">
                    <h3 className="text-4xl md:text-5xl font-serif text-[#FAF9F6] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
                        {t('CoreExpertise.Item2.title')}
                    </h3>
                </div>
                <div className="md:w-2/3 md:pt-4">
                    <p className="text-xl text-[#FAF9F6]/80 mb-4 font-light">{t('CoreExpertise.Item2.subtitle')}</p>
                    <p className="text-[#FAF9F6]/60 font-light leading-relaxed max-w-2xl">
                        {t('CoreExpertise.Item2.description')}
                    </p>
                </div>
            </div>

            {/* ITEM 3 */}
            <div className="stagger-item group flex flex-col md:flex-row gap-8 md:gap-24 pb-8">
                <div className="md:w-1/3">
                    <h3 className="text-4xl md:text-5xl font-serif text-[#FAF9F6] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
                        {t('CoreExpertise.Item3.title')}
                    </h3>
                </div>
                <div className="md:w-2/3 md:pt-4">
                    <p className="text-xl text-[#FAF9F6]/80 mb-4 font-light">{t('CoreExpertise.Item3.subtitle')}</p>
                    <p className="text-[#FAF9F6]/60 font-light leading-relaxed max-w-2xl">
                        {t('CoreExpertise.Item3.description')}
                    </p>
                </div>
            </div>

        </div>
      </section>

      {/* 4. STRATEGIC EVOLUTION */}
      <section className="min-h-[60vh] px-8 md:px-24 py-24 bg-[#251812]">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div className="md:w-1/3 reveal-text">
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40 mb-8 border-b border-[#FAF9F6]/10 pb-4 inline-block">
                    {t('StrategicEvolution.title')}
                </h2>
                <h3 className="text-3xl md:text-4xl font-serif text-[#FAF9F6] mb-6">
                    {t('StrategicEvolution.heading')}
                </h3>
            </div>
            <div className="md:w-2/3 reveal-text md:pt-20">
                <p className="text-xl text-[#FAF9F6]/80 mb-6 font-light">{t('StrategicEvolution.subtitle')}</p>
                <p className="text-[#FAF9F6]/60 font-light leading-relaxed max-w-2xl">
                    {t('StrategicEvolution.description')}
                </p>
            </div>
        </div>
      </section>

      {/* 5. COMPLEMENTARY CRAFT */}
      <section className="min-h-screen px-8 md:px-24 py-24">
        <div className="mb-24 reveal-text">
            <h2 className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40 mb-4 border-b border-[#FAF9F6]/10 pb-4 inline-block">
                {t('ComplementaryCraft.title')}
            </h2>
            <p className="text-sm uppercase tracking-widest text-[#FAF9F6]/40">
                {t('ComplementaryCraft.subtitle')}
            </p>
        </div>

        <div className="stagger-container grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            
            <div className="stagger-item">
                <h3 className="text-2xl font-serif text-[#FAF9F6] mb-6">{t('ComplementaryCraft.Items.VisualAssets.title')}</h3>
                <p className="text-[#FAF9F6]/60 font-light leading-relaxed">
                    {t('ComplementaryCraft.Items.VisualAssets.description')}
                </p>
            </div>

            <div className="stagger-item">
                <h3 className="text-2xl font-serif text-[#FAF9F6] mb-6">{t('ComplementaryCraft.Items.BrandIdentity.title')}</h3>
                <p className="text-[#FAF9F6]/60 font-light leading-relaxed">
                    {t('ComplementaryCraft.Items.BrandIdentity.description')}
                </p>
            </div>

            <div className="stagger-item">
                <h3 className="text-2xl font-serif text-[#FAF9F6] mb-6">{t('ComplementaryCraft.Items.VideoMotion.title')}</h3>
                <p className="text-[#FAF9F6]/60 font-light leading-relaxed">
                    {t('ComplementaryCraft.Items.VideoMotion.description')}
                </p>
            </div>

        </div>
      </section>

      <section className="px-8 py-24 md:px-24 bg-[#251812]">
        <div className="reveal-text mx-auto max-w-6xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40 mb-6 border-b border-[#FAF9F6]/10 pb-4 inline-block">
            {locale === "fr" ? "Services expertise" : locale === "en" ? "Service expertise" : "专业服务"}
          </h2>
          <p className="max-w-4xl text-base md:text-lg leading-8 text-[#FAF9F6]/70">
            {localSeoText}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {serviceDetails.map((service) => (
              <div key={service.title} className="rounded-[28px] border border-[#FAF9F6]/10 bg-[#2A1C15]/60 p-8">
                <h3 className="font-serif text-2xl text-[#FAF9F6]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#FAF9F6]/72 md:text-base">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24 md:px-24">
        <div className="reveal-text mx-auto max-w-5xl">
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#FAF9F6]/40 mb-10 border-b border-[#FAF9F6]/10 pb-4 inline-block">
            FAQ
          </h2>
          <div className="space-y-8">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-[#FAF9F6]/10 pb-8">
                <h3 className="font-serif text-2xl text-[#FAF9F6]">{item.question}</h3>
                <p className="mt-3 max-w-4xl text-sm leading-7 text-[#FAF9F6]/72 md:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPACER FOR FOOTER */}
      <div className="h-[10vh]"></div>

    </div>
  );
}
