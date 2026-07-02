"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState, useEffect, useRef } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TransitionLink from "@/components/ui/TransitionLink";
import Logo from "@/components/ui/Logo";
import { useTransition } from "@/context/TransitionContext";

type MenuItem = {
  name: string;
  href: string;
};

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navigation");
  const { isNavigating } = useTransition();

  const navItems = useMemo<MenuItem[]>(
    () => [
      { name: t("home"), href: "/" },
      { name: t("work"), href: "/work" },
      { name: t("help"), href: "/help" },
      { name: t("contact"), href: "/contact" },
    ],
    [t]
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const previousPathnameRef = useRef(pathname);
  const isOpenRef = useRef(isOpen);

  const switchLocale = (newLocale: string) => {
    const path = pathname === "/" ? "" : pathname;
    window.location.assign(`/${newLocale}${path}`);
  };

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) return;
    previousPathnameRef.current = pathname;
    if (!isOpenRef.current) return;
    if (isNavigating) return;
    const id = window.requestAnimationFrame(() => setIsOpen(false));
    return () => window.cancelAnimationFrame(id);
  }, [isNavigating, pathname]);

  const handleMobileNavigate = (href: string) => {
    if (href === pathname) {
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const r = router as unknown as { prefetch?: (href: string) => void | Promise<void> };
    if (typeof r.prefetch !== "function") return;

    for (const item of navItems) {
      void r.prefetch(item.href);
    }
  }, [navItems, router]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  }, [locale, pathname]);

  useEffect(() => {
    const tl = menuTimelineRef.current;
    if (!tl) return;
    if (isOpen) {
      tl.play(0);
    } else {
      tl.reverse();
    }
  }, [isOpen, locale, pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[80] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) border-b content-offset ${
          isScrolled
            ? "py-5 px-6 md:px-12 bg-[#2A1C15]/78 backdrop-blur-2xl backdrop-saturate-150 border-[#FAF9F6]/8 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
            : "py-7 px-6 md:py-9 md:px-12 bg-[#2A1C15]/28 backdrop-blur-xl border-[#FAF9F6]/[0.04]"
        } flex justify-between items-center pointer-events-none`}
      >
        {isScrolled && (
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[-1]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
        )}

        <TransitionLink
          href="/"
          className={`md:hidden nav-logo pointer-events-auto transition-all duration-300 relative z-[60] block ${
            isOpen ? "text-[#FAF9F6] opacity-100" : "text-[#FAF9F6] opacity-100"
          }`}
          aria-label="Genesis Connect Home"
          transitionPreset="fast"
          onClick={() => handleMobileNavigate("/")}
        >
          <Logo className="transition-all duration-500 text-2xl" />
        </TransitionLink>

        <TransitionLink
          href="/"
          className="hidden md:block nav-logo pointer-events-auto text-[#FAF9F6] hover:opacity-80 transition-opacity relative z-[60] opacity-100"
          aria-label="Genesis Connect Home"
        >
          <Logo className={`transition-all duration-500 ${isScrolled ? "text-2xl" : "text-3xl"}`} />
        </TransitionLink>

        <nav className="hidden md:flex flex-row items-center gap-12 pointer-events-auto">
          {navItems.map((item) => (
            <TransitionLink
              key={item.href}
              href={item.href}
              className={`group relative text-[#FAF9F6] text-[0.98rem] tracking-[0.18em] uppercase transition-all duration-300 ease-out ${
                pathname === item.href ? "opacity-100 font-medium" : "opacity-82 hover:opacity-100"
              }`}
              aria-current={pathname === item.href ? "page" : undefined}
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

          <div className="flex gap-4 border-l border-[#FAF9F6]/20 pl-7 ml-2">
            {["fr", "en", "zh"].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLocale(l)}
                aria-pressed={locale === l}
                className={`text-[0.9rem] uppercase tracking-[0.18em] transition-colors ${
                  locale === l ? "text-[#FAF9F6] font-bold" : "text-[#FAF9F6]/68 hover:text-[#FAF9F6]"
                }`}
              >
                {l === "zh" ? "中文" : l}
              </button>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className={`md:hidden pointer-events-auto transition-all duration-300 z-50 relative group p-2 -mr-2 ${
            isOpen ? "text-[#FAF9F6]" : "text-[#FAF9F6]"
          }`}
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <div className="relative w-9 h-9 flex items-center justify-center">
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

      <div
        className={`mobile-menu fixed inset-0 z-[70] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-menu-bg absolute inset-0 bg-[#2A1C15] w-full h-full">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            }}
          />
        </div>

        <div className="relative z-10 flex h-full w-full flex-col px-6 pt-28 pb-10">
          <nav id="mobile-navigation" className="flex flex-1 flex-col items-center justify-center gap-10 overflow-y-auto">
            {navItems.map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                transitionPreset="fast"
                className="mobile-link group relative text-[#FAF9F6] text-4xl md:text-5xl font-serif tracking-tight opacity-0 hover:text-[#FAF9F6]/80 transition-colors"
                onClick={() => handleMobileNavigate(item.href)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute left-0 top-1/2 w-full h-[1px] bg-[#FAF9F6]/30 -translate-y-1/2 scale-x-0 group-hover:scale-x-110 transition-transform duration-500 ease-expo" />
              </TransitionLink>
            ))}
          </nav>

          <div className="mobile-link mt-10 flex items-center justify-center gap-6 opacity-0">
            {["fr", "en", "zh"].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLocale(l)}
                aria-pressed={locale === l}
                className={`text-sm uppercase tracking-widest transition-colors ${
                  locale === l
                    ? "text-[#FAF9F6] font-bold border-b border-[#FAF9F6]"
                    : "text-[#FAF9F6]/50 hover:text-[#FAF9F6]"
                }`}
              >
                {l === "zh" ? "中文" : l}
              </button>
            ))}
          </div>

          <div className="mobile-link mt-8 flex flex-col items-center gap-2 text-[#FAF9F6]/40 text-[10px] tracking-[0.3em] uppercase opacity-0 font-medium">
            <span>Genesis Connect</span>
            <span className="w-8 h-[1px] bg-[#FAF9F6]/20" />
            <span>© 2024</span>
          </div>
        </div>
      </div>
    </>
  );
}
