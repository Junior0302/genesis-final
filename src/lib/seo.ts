import { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://genesisconnect.studio";

export const defaultSEO: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Genesis Connect | From Idea to Impact",
    template: "%s | Genesis Connect",
  },
  description:
    "Genesis Connect is a premium digital studio focused on high-end websites, digital strategy, SEO structure, premium branding and conversion-driven online experiences.",
  keywords: [
    "Digital Studio",
    "Premium Web Design",
    "SEO Strategy",
    "Brand Positioning",
    "Conversion Design",
    "Luxury Web Design",
    "Genesis Connect",
  ],
  authors: [{ name: "Genesis Connect" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Genesis Connect",
    title: "Genesis Connect | From Idea to Impact",
    description:
      "Genesis Connect is a premium digital studio focused on high-end websites, digital strategy, SEO structure, premium branding and conversion-driven online experiences.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Genesis Connect Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genesis Connect | From Idea to Impact",
    description:
      "Genesis Connect is a premium digital studio focused on high-end websites, digital strategy, SEO structure, premium branding and conversion-driven online experiences.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
