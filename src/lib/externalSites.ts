const isDevelopment = process.env.NODE_ENV !== "production";

export const externalSites = {
  academy: {
    name: "Genesis Academy",
    href:
      process.env.NEXT_PUBLIC_GENESIS_ACADEMY_URL ??
      (isDevelopment
        ? "http://localhost:3001/"
        : "https://academy.genesisconnectstudio.com"),
  },
  market: {
    name: "Genesis Market",
    href:
      process.env.NEXT_PUBLIC_GENESIS_MARKET_URL ??
      (isDevelopment
        ? "http://localhost:3002/"
        : "https://market.genesisconnectstudio.com"),
  },
  aide: {
    name: "Genesis Aide",
    href:
      process.env.NEXT_PUBLIC_GENESIS_AIDE_URL ??
      (isDevelopment
        ? "http://localhost:3003/"
        : "https://aide.genesisconnectstudio.com"),
  },
} as const;
