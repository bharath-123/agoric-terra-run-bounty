import { MsgExecuteContract } from "@terra-money/terra.js";
import { client, wallet } from "./clientAndWallet";
import { RUN_UST_LP, TERRASWAP_FACTORY } from "./constants";

const createIbcLiquidityPool = async () => {
  console.log("Creating liquidity pool!");
  const executeTx = await wallet.createAndSignTx({
    msgs: [
      new MsgExecuteContract(
        wallet.key.accAddress,
        TERRASWAP_FACTORY,
        {
          create_pair: {
            asset_infos: [
              {
                native_token: {
                  denom: "uusd",
                },
              },
              {
                native_token: {
                  denom:
                    "ibc/1F70B965BDA2F3D6E5244B00B70F4F2F620E76906931D97D209458476ADB76BD",
                },
              },
            ],
          },
        },
        {}
      ),
    ],
  });
  const txResult = await client.tx.broadcast(executeTx);
  return txResult;
};

const provideLiquidityToIbcPair = async () => {
  const executeTx = await wallet.createAndSignTx({
    msgs: [
      new MsgExecuteContract(
        wallet.key.accAddress,
        RUN_UST_LP,
        {
          provide_liquidity: {
            assets: [
              {
                info: {
                  native_token: {
                    denom: "uusd",
                  },
                },
                amount: "10000000",
              },
              {
                info: {
                  native_token: {
                    denom:
                      "ibc/1F70B965BDA2F3D6E5244B00B70F4F2F620E76906931D97D209458476ADB76BD",
                  },
                },
                amount: "10000000",
              },
            ],
          },
        },
        {
          uusd: 10000000,
          "ibc/1F70B965BDA2F3D6E5244B00B70F4F2F620E76906931D97D209458476ADB76BD": 10000000,
        }
      ),
    ],
  });
  const txResult = await client.tx.broadcast(executeTx);
  return txResult;
};
