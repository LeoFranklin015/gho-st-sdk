import {
  EthereumTransactionTypeExtended,
  InterestRate,
} from "@aave/contract-helpers";
import { BigNumber, ethers, Signer } from "ethers";
import { Pool } from "@aave/contract-helpers";

interface BorrowOptions {
  user: string;
  reserve: string;
  amount: string;
  interestRateMode: InterestRate;
  onBehalfOf: string;
  provider: ethers.providers.Web3Provider;
  signer: Signer;
}

export async function borrow({
  user,
  reserve,
  amount,
  interestRateMode,
  onBehalfOf,
  provider,
  signer,
}: BorrowOptions): Promise<void> {
  try {
    const pool = new Pool(provider, {
      POOL: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
      WETH_GATEWAY: "0xDde0E8E6d3653614878Bf5009EDC317BC129fE2F",
    });

    console.log("Transaction");
    const txs: EthereumTransactionTypeExtended[] = await pool.borrow({
      user,
      reserve,
      amount,
      interestRateMode,
      onBehalfOf,
    });

    for (const tx of txs) {
      const extendedTxData = await tx.tx();
      const { from, ...txData } = extendedTxData;
      const txResponse = await signer.sendTransaction({
        ...txData,
        value: txData.value ? BigNumber.from(txData.value) : undefined,
      });
      console.log(txResponse);
    }
    console.log("Transaction Completed");
  } catch (error) {
    console.error("Error in borrow:", error);
  }
}
