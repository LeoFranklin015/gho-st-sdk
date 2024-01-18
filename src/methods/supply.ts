import { EthereumTransactionTypeExtended } from "@aave/contract-helpers";
import { BigNumber, ethers, Signer } from "ethers";
import { Pool } from "@aave/contract-helpers";

interface SupplyOptions {
  user: string;
  reserve: string;
  amount: string;
  onBehalfOf: string;
  provider: ethers.providers.Web3Provider;
  signer: Signer;
}

export async function supply({
  user,
  reserve,
  amount,
  onBehalfOf,
  provider,
  signer,
}: SupplyOptions): Promise<void> {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);

  try {
    const pool = new Pool(provider, {
      POOL: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951", // sepolia
      WETH_GATEWAY: "0xDde0E8E6d3653614878Bf5009EDC317BC129fE2F", // weth
    });

    console.log("Transaction");
    const txs: EthereumTransactionTypeExtended[] = await pool.supply({
      user,
      reserve,
      amount,
      onBehalfOf,
    });

    for (const tx of txs) {
      const extendedTxData = await tx.tx();
      const { from, ...txData } = extendedTxData;
      //   const signer = provider.getSigner(from);
      const txResponse = await signer.sendTransaction({
        ...txData,
        value: txData.value ? BigNumber.from(txData.value) : undefined,
      });
      console.log(txResponse);
    }
    console.log("Transaction Completed");
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in supply:", error);
    // throw new Error(`Error in supply: ${error.message}`);
  }
}
