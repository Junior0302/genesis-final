import { useTranslations } from "next-intl";
import Link from "next/link";
import { businessEmail } from "@/lib/seo";
import { socialLinks } from "@/lib/socialLinks";
import TransitionLink from "../ui/TransitionLink";
import SoundToggle from "../ui/SoundToggle";
import Logo from "../ui/Logo";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full py-14 px-8 md:px-24 border-t border-[#FAF9F6]/10 relative z-10 bg-[#2A1C15] text-[#FAF9F6] content-offset">
      <div className="max-w-7xl mx-auto mb-12 md:mb-18">
        <TransitionLink href="/" className="inline-block hover:opacity-70 transition-opacity">
          <Logo className="text-4xl md:text-6xl" />
        </TransitionLink>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-8">
        
        {/* COL 1: LOCATION */}
        <div className="flex flex-col gap-3">
            <h4 className="text-xs uppercase tracking-[0.22em] text-[#FAF9F6]/50 mb-1">{t('location')}</h4>
            <p className="text-lg md:text-xl font-serif leading-snug">29 rue Tronchet,<br/>75008 Paris</p>
            <p className="text-sm text-[#FAF9F6]/70 font-light">{t('based_in')}</p>
        </div>

        {/* COL 2: CONTACT */}
        <div className="flex flex-col gap-3">
             <h4 className="text-xs uppercase tracking-[0.22em] text-[#FAF9F6]/50 mb-1">{t('contact')}</h4>
             <a href={`mailto:${businessEmail}`} className="text-lg md:text-xl font-serif hover:text-[#D4AF37] transition-colors break-all">{businessEmail}</a>
        </div>

        <div className="flex flex-col gap-3">
             <h4 className="text-xs uppercase tracking-[0.22em] text-[#FAF9F6]/50 mb-1">{t('pages')}</h4>
             <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.18em] text-[#FAF9F6]/70">
                <TransitionLink href="/studio" className="hover:text-[#FAF9F6] transition-colors">{t('about')}</TransitionLink>
                <TransitionLink href="/blog" className="hover:text-[#FAF9F6] transition-colors">{t('blog')}</TransitionLink>
                <TransitionLink href="/privacy" className="hover:text-[#FAF9F6] transition-colors">{t('privacy')}</TransitionLink>
                <TransitionLink href="/cookies" className="hover:text-[#FAF9F6] transition-colors">{t('cookies')}</TransitionLink>
             </div>
        </div>

        {/* COL 3: SOCIALS & LEGAL */}
        <div className="flex flex-col gap-4">
             <h4 className="text-xs uppercase tracking-[0.22em] text-[#FAF9F6]/50 mb-1">{t('connect')}</h4>
             <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm uppercase tracking-[0.18em] text-[#FAF9F6]/70">
                {socialLinks.map((socialLink) => (
                  <Link
                    key={socialLink.label}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FAF9F6] transition-colors"
                  >
                    {socialLink.label}
                  </Link>
                ))}
                <TransitionLink href="/legal" className="hover:text-[#FAF9F6] transition-colors">{t('legal')}</TransitionLink>
             </div>
        </div>
      </div>

      {/* BOTTOM: COPYRIGHT + SOUND */}
      <div className="max-w-7xl mx-auto mt-14 pt-7 border-t border-[#FAF9F6]/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
         <p className="text-[#FAF9F6]/50 text-xs uppercase tracking-[0.18em] order-2 md:order-1 text-center md:text-left">
            {t('copyright')}
         </p>
         <div className="order-1 md:order-2">
            <SoundToggle />
         </div>
      </div>
    </footer>
  );
}
