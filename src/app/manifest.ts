import type { MetadataRoute } from "next";
import { siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  const manifest: MetadataRoute.Manifest = {
    name: siteName,
    short_name: siteName,
    description:
      "Genesis Connect - studio numerique premium, support informatique, creation web, SEO local et cloud.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#2A1C15",
    theme_color: "#2A1C15",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  return manifest;
}
