import {
  EthereumTransactionTypeExtended,
  InterestRate,
} from "@aave/contract-helpers";
import { BigNumber, ethers, Signer } from "ethers";
import { Pool } from "@aave/contract-helpers";

interface RepayWithaTokenProps {
  user: string;
  reserve: string;
  amount: string;
  interestRateMode: InterestRate;
  provider: ethers.providers.Web3Provider;
  signer: Signer;
}

export async function repayWithaToken({
  user,
  reserve,
  amount,
  interestRateMode,
  provider,
  signer,
}: RepayWithaTokenProps) {
  try {
    const pool = new Pool(provider, {
      POOL: "0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951",
      WETH_GATEWAY: "0xDde0E8E6d3653614878Bf5009EDC317BC129fE2F",
    });
    // Correct the method to borrow from Aave
    const txs: EthereumTransactionTypeExtended[] = await pool.repayWithATokens({
      user,
      reserve,
      amount,
      rateMode: interestRateMode,
    });

    // Handle each transaction in the array
    for (const tx of txs) {
      const extendedTxData = await tx.tx();
      const { from, ...txData } = extendedTxData;

      const txResponse = await signer.sendTransaction({
        ...txData,
        value: txData.value ? BigNumber.from(txData.value) : undefined,
        // gasLimit: 10000000000000,
      });
      console.log(txResponse);
    }
  } catch (error) {
    // Handle errors appropriately
    console.error("Error in submitTransaction:", error);
  }
}
