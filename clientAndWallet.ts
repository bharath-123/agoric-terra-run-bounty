import { LCDClient, MnemonicKey } from "@terra-money/terra.js";

// connect to network
export const client = new LCDClient({
  URL: "https://bombay-fcd.terra.dev/",
  chainID: "bombay-12",
  gasPrices: { uusd: 0.15 },
});

const mk = new MnemonicKey({
  mnemonic:
    "clutch core net duty can believe hair open shove sight actor eye real flower account bid pear sadness kangaroo bronze dog divide grab route",
});

export const wallet = client.wallet(mk);
