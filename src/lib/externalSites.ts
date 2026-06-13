export const externalSites = {
  academy: {
    name: "Genesis Academy",
    href:
      process.env.NEXT_PUBLIC_GENESIS_ACADEMY_URL ??
      "https://academy.genesisconnectstudio.com",
  },
  market: {
    name: "Genesis Market",
    href:
      process.env.NEXT_PUBLIC_GENESIS_MARKET_URL ??
      "https://market.genesisconnectstudio.com",
  },
} as const;
