import type { Metadata } from "next";
import ServicesSiteFooter from "@/components/services/ServicesSiteFooter";
import ServicesSiteHeader from "@/components/services/ServicesSiteHeader";
import { getServicesLocale, getServicesSiteContent } from "@/lib/servicesSiteContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const site = getServicesSiteContent(locale);
  const safeLocale = getServicesLocale(locale);

  return {
    title: `Genesis Services | ${site.home.title}`,
    description: site.home.description,
    alternates: {
      canonical: `/${safeLocale}/services`,
    },
  };
}

export default async function ServicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="-ml-[var(--content-start)] w-[calc(100%+var(--content-start))] bg-[#140d0a]">
      <div className="px-6 pt-28 md:px-12 md:pt-32">
        <ServicesSiteHeader locale={locale} />
      </div>
      {children}
      <div className="px-6 pb-10 md:px-12">
        <ServicesSiteFooter locale={locale} />
      </div>
    </div>
  );
}
