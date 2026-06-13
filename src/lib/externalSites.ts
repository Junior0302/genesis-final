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
  aide: {
    name: "Genesis Help",
    href:
      process.env.NEXT_PUBLIC_GENESIS_AIDE_URL ??
      "https://help.genesisconnectstudio.com",
  },
} as const;
