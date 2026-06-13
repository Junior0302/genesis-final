"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState, useEffect, useRef } from "react";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TransitionLink from "@/components/ui/TransitionLink";
import Logo from "@/components/ui/Logo";
import { externalSites } from "@/lib/externalSites";

type MenuItem = {
  name: string;
  href: string;
  external?: boolean;
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navigation");

  const navItems = useMemo<MenuItem[]>(
    () => [
      { name: t("expertise"), href: "/expertise" },
      { name: t("work"), href: "/work" },
      { name: t("contact"), href: "/contact" },
    ],
    [t]
  );

  const otherItems = useMemo<MenuItem[]>(
    () => [
      { name: t("academy"), href: externalSites.academy.href, external: true },
      { name: t("market"), href: externalSites.market.href, external: true },
      { name: t("blog"), href: "/blog" },
      { name: t("support"), href: "/accompagnement-auto-entrepreneur" },
    ],
    [t]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const switchLocale = (newLocale: string) => {
    const path = pathname === "/" ? "" : pathname;
    window.location.assign(`/${newLocale}${path}`);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsOpen(false), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, isOpen]);

  useEffect(() => {
    const r = router as unknown as { prefetch?: (href: string) => void | Promise<void> };
    if (typeof r.prefetch !== "function") return;

    for (const item of [...navItems, ...otherItems]) {
      if (!item.external) {
        void r.prefetch(item.href);
      }
    }
  }, [navItems, otherItems, router]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    if (!isOpen) return Promise.resolve();

    return new Promise<void>((resolve) => {
      const tl = menuTimelineRef.current;
      if (!tl) {
        setIsOpen(false);
        setIsOtherOpen(false);
        resolve();
        return;
      }

      const previous = tl.eventCallback("onReverseComplete");
      tl.eventCallback("onReverseComplete", () => {
        if (typeof previous === "function") previous();
        tl.eventCallback("onReverseComplete", previous);
        resolve();
      });

      setIsOpen(false);
      setIsOtherOpen(false);
    });
  };

  useGSAP(() => {
    gsap.set(".mobile-menu", { opacity: 0, pointerEvents: "none" });
    gsap.set(".mobile-menu-bg", { scaleY: 0, transformOrigin: "top" });
    gsap.set(".mobile-link", { y: 40, opacity: 0 });

    const tl = gsap.timeline({
      paused: true,
      onReverseComplete: () => {
        gsap.set(".mobile-menu", { pointerEvents: "none" });
      },
    });

    tl.to(".mobile-menu", {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
      onStart: () => {
        gsap.set(".mobile-menu", { pointerEvents: "auto" });
      },
    })
      .to(
        ".mobile-menu-bg",
        { scaleY: 1, duration: 0.55, ease: "circ.out" },
        "-=0.25"
      )
      .to(
        ".mobile-link",
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: "power3.out" },
        "-=0.25"
      );

    menuTimelineRef.current = tl;

    return () => {
      tl.kill();
      menuTimelineRef.current = null;
    };
  }, []);

  useEffect(() => {
    const tl = menuTimelineRef.current;
    if (!tl) return;
    if (isOpen) {
      tl.play(0);
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  const isOtherActive = pathname === "/blog" || pathname === "/accompagnement-auto-entrepreneur";

  const renderDesktopItem = (item: MenuItem) => {
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl border border-[#FAF9F6]/10 bg-[#241710]/96 px-4 py-3 text-sm text-[#FAF9F6]/78 transition-colors hover:border-[#FAF9F6]/25 hover:text-[#FAF9F6]"
        >
          {item.name}
        </a>
      );
    }

    return (
      <TransitionLink
        key={item.href}
        href={item.href}
        className="block rounded-2xl border border-[#FAF9F6]/10 bg-[#241710]/96 px-4 py-3 text-sm text-[#FAF9F6]/78 transition-colors hover:border-[#FAF9F6]/25 hover:text-[#FAF9F6]"
      >
        {item.name}
      </TransitionLink>
    );
  };

  const renderMobileItem = (item: MenuItem) => {
    if (item.external) {
      return (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            setIsOtherOpen(false);
            setIsOpen(false);
          }}
          className="mobile-link text-lg text-[#FAF9F6]/72 transition-colors hover:text-[#FAF9F6]"
        >
          {item.name}
        </a>
      );
    }

    return (
      <TransitionLink
        key={item.href}
        href={item.href}
        beforeNavigate={closeMenu}
        className="mobile-link text-lg text-[#FAF9F6]/72 transition-colors hover:text-[#FAF9F6]"
      >
        {item.name}
      </TransitionLink>
    );
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) border-b content-offset ${
          isScrolled
            ? "py-4 px-6 md:px-12 bg-[#2A1C15]/60 backdrop-blur-2xl backdrop-saturate-150 border-[#FAF9F6]/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
            : "py-6 px-6 md:py-8 md:px-12 bg-transparent border-transparent"
        } flex justify-between items-center pointer-events-none`}
      >
        {isScrolled ? (
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[-1]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
        ) : null}

        <TransitionLink
          href="/"
          className="md:hidden nav-logo pointer-events-auto transition-all duration-300 relative z-[60] block text-[#FAF9F6] opacity-100"
          aria-label="Genesis Connect Home"
          beforeNavigate={closeMenu}
        >
          <Logo className="transition-all duration-500 text-xl" />
        </TransitionLink>

        <TransitionLink
          href="/"
          className="hidden md:block nav-logo pointer-events-auto text-[#FAF9F6] hover:opacity-80 transition-opacity relative z-[60] opacity-100"
          aria-label="Genesis Connect Home"
        >
          <Logo className={`transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`} />
        </TransitionLink>

        <nav className="hidden md:flex flex-row items-center gap-10 pointer-events-auto">
          {navItems.map((item) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={`group relative text-[#FAF9F6] text-[0.8rem] tracking-[0.2em] uppercase transition-all duration-300 ease-out ${
                pathname === item.href ? "opacity-100 font-medium" : "opacity-70 hover:opacity-100"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-2 left-0 w-full h-[1px] bg-[#FAF9F6] origin-left transform transition-transform duration-300 ease-out ${
                  pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
              <span className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full -z-10 scale-150" />
            </TransitionLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setIsOtherOpen(true)}
            onMouseLeave={() => setIsOtherOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOtherOpen((prev) => !prev)}
              className={`group relative inline-flex items-center gap-2 text-[#FAF9F6] text-[0.8rem] tracking-[0.2em] uppercase transition-all duration-300 ease-out ${
                isOtherActive || isOtherOpen ? "opacity-100 font-medium" : "opacity-70 hover:opacity-100"
              }`}
            >
              {t("other")}
              <ChevronDown className={`h-4 w-4 transition-transform ${isOtherOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
              <span
                className={`absolute -bottom-2 left-0 h-[1px] bg-[#FAF9F6] origin-left transform transition-transform duration-300 ease-out ${
                  isOtherActive || isOtherOpen ? "w-full scale-x-100" : "w-full scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>

            <div
              className={`absolute right-0 top-full mt-5 w-72 rounded-[28px] border border-[#FAF9F6]/10 bg-[#1E130E]/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 ${
                isOtherOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="grid gap-2">{otherItems.map(renderDesktopItem)}</div>
            </div>
          </div>

          <div className="flex gap-3 border-l border-[#FAF9F6]/20 pl-6 ml-2">
            {["fr", "en", "zh"].map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`text-[0.7rem] uppercase tracking-widest transition-colors ${
                  locale === l ? "text-[#FAF9F6] font-bold" : "text-[#FAF9F6]/50 hover:text-[#FAF9F6]"
                }`}
              >
                {l === "zh" ? "中文" : l}
              </button>
            ))}
          </div>
        </nav>

        <button
          className="md:hidden pointer-events-auto transition-all duration-300 z-50 relative group p-2 -mr-2 text-[#FAF9F6]"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span
              className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <MenuIcon size={28} strokeWidth={1} />
            </span>
            <span
              className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
              }`}
            >
              <X size={28} strokeWidth={1} />
            </span>
          </div>
        </button>
      </header>

      <div className="mobile-menu fixed inset-0 z-40 flex flex-col items-center justify-center opacity-0 pointer-events-none">
        <div className="mobile-menu-bg absolute inset-0 bg-[#2A1C15] w-full h-full">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
        </div>

        <nav className="relative z-10 flex flex-col items-center gap-10 px-8">
          {navItems.map((item) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className="mobile-link group relative text-[#FAF9F6] text-4xl md:text-5xl font-serif tracking-tight opacity-0 hover:text-[#FAF9F6]/80 transition-colors"
              beforeNavigate={closeMenu}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute left-0 top-1/2 w-full h-[1px] bg-[#FAF9F6]/30 -translate-y-1/2 scale-x-0 group-hover:scale-x-110 transition-transform duration-500 ease-expo" />
            </TransitionLink>
          ))}

          <div className="mobile-link flex w-full max-w-sm flex-col items-center gap-4 opacity-0">
            <button
              type="button"
              onClick={() => setIsOtherOpen((prev) => !prev)}
              className="inline-flex items-center gap-3 text-4xl font-serif tracking-tight text-[#FAF9F6]"
            >
              {t("other")}
              <ChevronDown className={`h-6 w-6 transition-transform ${isOtherOpen ? "rotate-180" : ""}`} strokeWidth={1.5} />
            </button>
            <div
              className={`w-full rounded-[24px] border border-[#FAF9F6]/10 bg-[#241710]/85 px-6 py-5 transition-all duration-300 ${
                isOtherOpen ? "max-h-[420px] opacity-100" : "max-h-0 overflow-hidden border-transparent px-6 py-0 opacity-0"
              }`}
            >
              <div className="flex flex-col gap-4 items-center">{otherItems.map(renderMobileItem)}</div>
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            {["fr", "en", "zh"].map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  locale === l ? "text-[#FAF9F6] font-bold border-b border-[#FAF9F6]" : "text-[#FAF9F6]/50 hover:text-[#FAF9F6]"
                }`}
              >
                {l === "zh" ? "中文" : l}
              </button>
            ))}
          </div>
        </nav>

        <div className="mobile-link absolute bottom-12 flex flex-col items-center gap-2 text-[#FAF9F6]/40 text-[10px] tracking-[0.3em] uppercase opacity-0 font-medium">
          <span>Genesis Connect</span>
          <span className="w-8 h-[1px] bg-[#FAF9F6]/20" />
          <span>© 2026</span>
        </div>
      </div>
    </>
  );
}
