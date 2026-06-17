import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Geist } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ClientProtection from "@/components/ui/ClientProtection";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ScrollControls from "@/components/ui/ScrollControls";
import StructuredData from "@/components/seo/StructuredData";
import { defaultSEO, pageSeo, type SeoLocale } from "@/lib/seo";
import { TransitionProvider } from "@/context/TransitionContext";
import { SoundProvider } from "@/context/SoundContext";
import SceneWrapper from "@/components/three/SceneWrapper";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

type AppLocale = (typeof routing.locales)[number];

/* const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
}); */

const surgena = localFont({
  src: [
    {
      path: "../../fonts/Surgena-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Surgena-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Surgena-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-surgena",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const safeLocale = (["fr", "en", "zh"].includes(locale) ? locale : "fr") as SeoLocale;
  const localizedHomeSeo = pageSeo["/"][safeLocale];
  const t = await getTranslations({locale, namespace: "Metadata"});

  return {
    ...defaultSEO,
    title: t('title'),
    description: t('description'),
    keywords: defaultSEO.keywords,
    openGraph: {
      ...defaultSEO.openGraph,
      title: localizedHomeSeo.title,
      description: localizedHomeSeo.description,
      locale: locale,
    },
    twitter: {
      ...defaultSEO.twitter,
      title: localizedHomeSeo.title,
      description: localizedHomeSeo.description,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const gaId = "G-01QV0Z58V8";

  if (!routing.locales.includes(locale as AppLocale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${surgena.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex min-h-screen flex-col`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', { page_path: window.location.pathname });`}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <SoundProvider>
            <TransitionProvider>
              <StructuredData />
              <ClientProtection />
              <SceneWrapper />
              <SmoothScroll />
              <ScrollControls />
              <CustomCursor />
              <Navbar />
              <main className="content-offset flex-grow">{children}</main>
              <Footer />
            </TransitionProvider>
          </SoundProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
