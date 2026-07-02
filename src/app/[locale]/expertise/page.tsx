"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale, useTranslations } from "next-intl";
import TransitionLink from "@/components/ui/TransitionLink";

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

  const cta =
    locale === "fr"
      ? {
          title: "Parlons de votre besoin.",
          text: "Choisissez un domaine ci-dessus et contactez-nous pour cadrer un plan clair, premium et réaliste.",
          button: "Contacter",
        }
      : locale === "en"
        ? {
            title: "Let’s discuss your needs.",
            text: "Pick a domain above and contact us to scope a clear, premium and realistic plan.",
            button: "Contact",
          }
        : {
            title: "聊聊你的需求。",
            text: "从上面的领域中选择方向，然后联系我们，一起梳理清晰、务实且高端的方案。",
            button: "联系",
          };

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
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[0.92] mb-5 md:mb-7 tracking-[-0.03em] text-[#FAF9F6] whitespace-pre-line">
                {t('Hero.title')}
            </h1>
            <div className="hero-desc w-full md:w-[44rem] lg:w-[48rem] rounded-[30px] border border-[#FAF9F6]/12 bg-[#241710]/72 px-7 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl md:px-10 md:py-10">
                <p className="text-xl md:text-[2rem] font-serif text-[#FAF9F6] mb-4 md:mb-6 leading-[1.12] whitespace-pre-line">
                    {t('Hero.subtitle')}
                </p>
                <div className="space-y-3 md:space-y-4 text-lg md:text-[1.22rem] font-light text-[#FAF9F6]/90 leading-[1.82] max-w-2xl">
                    <p>
                        {t('Hero.description')}
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 2. EXPERTISE INTRO */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-8 py-24 bg-[#251812]">
        <div className="reveal-text max-w-5xl">
             <h2 className="text-[11px] uppercase tracking-[0.32em] mb-10 text-[#FAF9F6]/60">{t('Intro.title')}</h2>
             <p className="text-4xl md:text-6xl font-serif text-[#FAF9F6] leading-[1.02] mb-8 tracking-[-0.03em]">
               {t('Intro.heading')}
             </p>
             <p className="text-lg md:text-[1.2rem] font-light text-[#FAF9F6]/84 max-w-3xl mx-auto leading-[1.85]">
                {t('Intro.text')}
             </p>
        </div>
      </section>

      <section className="min-h-screen px-8 md:px-24 py-24">
        <div className="reveal-text mx-auto max-w-7xl">
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/60 mb-12 border-b border-[#FAF9F6]/10 pb-4 inline-block">
            {locale === "fr" ? "Notre Expertise" : locale === "en" ? "Our Expertise" : "我们的专业领域"}
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
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">
                      Genesis Connect
                    </p>
                    <h3 className="mt-6 font-serif text-[2rem] leading-[1.08] tracking-[-0.02em] text-[#FAF9F6]">
                      {card.title}
                    </h3>
                    <p className="mt-5 text-base md:text-[1.08rem] leading-[1.8] text-[#FAF9F6]/84">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-10 inline-flex items-center text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/80">
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

      <section className="min-h-[45vh] flex flex-col justify-center items-center text-center px-8 py-24 bg-[#251812]">
        <div className="reveal-text max-w-5xl">
          <h2 className="text-[11px] uppercase tracking-[0.32em] mb-10 text-[#FAF9F6]/60">
            {locale === "fr" ? "Contact" : locale === "en" ? "Contact" : "联系"}
          </h2>
          <p className="text-4xl md:text-6xl font-serif text-[#FAF9F6] leading-[1.02] mb-8 tracking-[-0.03em]">
            {cta.title}
          </p>
          <p className="text-lg md:text-[1.2rem] font-light text-[#FAF9F6]/84 max-w-3xl mx-auto leading-[1.85] mb-10">
            {cta.text}
          </p>
          <TransitionLink
            href="/contact"
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/20 px-7 py-3 text-xs uppercase tracking-[0.24em] text-[#FAF9F6]/85 transition-colors hover:border-[#FAF9F6]/35 hover:text-[#FAF9F6]"
          >
            {cta.button}
          </TransitionLink>
        </div>
      </section>

      <section className="px-8 py-24 md:px-24">
        <div className="reveal-text mx-auto max-w-5xl">
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-[#FAF9F6]/60 mb-10 border-b border-[#FAF9F6]/10 pb-4 inline-block">
            FAQ
          </h2>
          <div className="space-y-8">
            {faqItems.slice(0, 3).map((item) => (
              <div key={item.question} className="border-b border-[#FAF9F6]/10 pb-8">
                <h3 className="font-serif text-[2rem] leading-[1.12] tracking-[-0.02em] text-[#FAF9F6]">{item.question}</h3>
                <p className="mt-4 max-w-4xl text-base md:text-[1.08rem] leading-[1.85] text-[#FAF9F6]/84">
                  {item.answer}
                </p>
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
