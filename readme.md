## Options

### `supply(options: SupplyOptions): Promise<void>`

This function allows users to supply funds to a specified reserve.

#### Parameters

- `user` (string): User's Ethereum address.
- `reserve` (string): Address of the reserve for fund supply.
- `amount` (string): Amount to be supplied.
- `onBehalfOf` (string): Address on behalf of which funds will be supplied.
- `provider` (ethers.providers.Web3Provider): Ethereum provider.
- `signer` (ethers.Signer): Ethereum signer.

#### Example

```typescript
import { supply } from "gho-st-sdk";
import { ethers, Signer } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer: Signer = provider.getSigner();

await supply({
  user: "0xafe79395A3279854BcDfE7C24e14e8715cB10A18",
  reserve: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
  amount: "100",
  onBehalfOf: "0xafe79395A3279854BcDfE7C24e14e8715cB10A18",
  provider,
  signer,
});
```
