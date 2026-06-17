import type { MetadataRoute } from "next";
import { siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteName,
    description:
      "Genesis Connect - services informatiques, maintenance, cybersécurité, cloud, creation de site internet et SEO local.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#2A1C15",
    theme_color: "#2A1C15",
    icons: [
      {
        src: "/images/favicon/9.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/favicon/10.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
