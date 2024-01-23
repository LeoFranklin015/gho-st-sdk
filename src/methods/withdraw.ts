import {
    EthereumTransactionTypeExtended,

  } from "@aave/contract-helpers";
  import { BigNumber, ethers, Signer } from "ethers";
  import { Pool } from "@aave/contract-helpers";

  interface withdrawProps {
    user: string;
    reserve: string;
    amount: string;
    aTokenAddress : string;
    onBehalfOf: string;
    provider: ethers.providers.Web3Provider;
    signer: Signer;
  }
  
  export async  function Withdraw({
    user,
    reserve,
    amount,
    aTokenAddress,
    onBehalfOf,
    provider,
    signer,
  }: withdrawProps ) {
  
      try {
        const pool = new Pool(provider, {
          POOL: "0xcC6114B983E4Ed2737E9BD3961c9924e6216c704",
          WETH_GATEWAY: "0xc24df0548a5aa08262bff6c2bb48048348e4E097",
        });
        // Correct the method to borrow from Aave
        const txs: EthereumTransactionTypeExtended[] = await pool.withdraw({
          user,
          reserve,
          amount,
          aTokenAddress,
          onBehalfOf,
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
  


  
  