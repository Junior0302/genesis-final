import { Link } from "@/i18n/routing";
import { businessEmail } from "@/lib/seo";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default function ServicesSiteFooter({ locale }: { locale: string }) {
  const site = getServicesSiteContent(locale);

  return (
    <section className="border-t border-[#FAF9F6]/10 bg-[#1A100C]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:px-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#D7B07A]">
            Genesis Services
          </p>
          <p className="mt-4 font-serif text-3xl leading-tight text-[#FAF9F6] md:text-4xl">
            {site.home.finalTitle}
          </p>
          <p className="mt-4 text-base leading-8 text-[#FAF9F6]/70">
            {site.home.finalText}
          </p>
        </div>

        <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/68">
          <Link href="/services/contact" className="transition-colors hover:text-[#FAF9F6]">
            {site.nav.contact}
          </Link>
          <Link href="/" className="transition-colors hover:text-[#FAF9F6]">
            {site.nav.mainSite}
          </Link>
          <a href={`mailto:${businessEmail}`} className="transition-colors hover:text-[#FAF9F6]">
            {businessEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
