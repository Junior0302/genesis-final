import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/expertise",
        destination: "/fr/services",
        permanent: false,
      },
      {
        source: "/expertise/:path*",
        destination: "/fr/services/domaines/:path*",
        permanent: false,
      },
      {
        source: "/:locale(fr|en|zh)/expertise",
        destination: "/:locale/services",
        permanent: false,
      },
      {
        source: "/:locale(fr|en|zh)/expertise/:path*",
        destination: "/:locale/services/domaines/:path*",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
