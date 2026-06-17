import type { MetadataRoute } from "next";
import { trainings } from "@/lib/trainings";
import { localeUrl, type SeoLocale } from "@/lib/seo";

const locales: SeoLocale[] = ["fr", "en", "zh"];

const staticRoutes = [
  "",
  "/studio",
  "/expertise",
  "/work",
  "/contact",
  "/help",
  "/legal",
  "/blog",
  "/formation",
  "/abonnement",
  "/other",
  "/terrain",
  "/accompagnement-auto-entrepreneur",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = locales.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url: localeUrl(locale, route),
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route === "/contact" || route === "/expertise" ? 0.9 : 0.7,
    }))
  );

  const trainingEntries = locales.flatMap((locale) =>
    trainings.flatMap((training) => [
      {
        url: localeUrl(locale, `/formation/${training.slug}`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      },
      {
        url: localeUrl(locale, `/formation/${training.slug}/conditions`),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      },
    ])
  );

  return [...staticEntries, ...trainingEntries];
}
