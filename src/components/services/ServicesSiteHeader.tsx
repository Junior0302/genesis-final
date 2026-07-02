import { Link } from "@/i18n/routing";
import { getServicesSiteContent } from "@/lib/servicesSiteContent";

export default function ServicesSiteHeader({ locale }: { locale: string }) {
  const site = getServicesSiteContent(locale);

  return (
    <section className="border-b border-[#FAF9F6]/10 bg-[#20140f]/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 md:px-12 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#D7B07A]">
            Genesis Services
          </p>
          <p className="mt-2 font-serif text-2xl text-[#FAF9F6] md:text-3xl">
            Site expertise dedie
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.22em] text-[#FAF9F6]/72">
          <Link href="/services" className="transition-colors hover:text-[#FAF9F6]">
            {site.nav.home}
          </Link>
          <Link href="/services/domaines" className="transition-colors hover:text-[#FAF9F6]">
            {site.nav.domaines}
          </Link>
          <Link href="/services/a-propos" className="transition-colors hover:text-[#FAF9F6]">
            {site.nav.about}
          </Link>
          <Link href="/services/faq" className="transition-colors hover:text-[#FAF9F6]">
            {site.nav.faq}
          </Link>
          <Link href="/services/contact" className="transition-colors hover:text-[#FAF9F6]">
            {site.nav.contact}
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-[#FAF9F6]/14 px-4 py-2 text-[10px] text-[#FAF9F6]/82 transition-colors hover:border-[#FAF9F6]/28 hover:text-[#FAF9F6]"
          >
            {site.nav.mainSite}
          </Link>
        </nav>
      </div>
    </section>
  );
}
