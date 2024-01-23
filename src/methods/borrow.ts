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
      POOL: "0xcC6114B983E4Ed2737E9BD3961c9924e6216c704",
      WETH_GATEWAY: "0xc24df0548a5aa08262bff6c2bb48048348e4E097",
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
