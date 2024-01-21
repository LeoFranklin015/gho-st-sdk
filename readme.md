## Overview

The GHO-ST SDK simplifies interactions with the Aave protocol, providing functions for common actions like supplying funds.

## Installation

To use the GHO-ST SDK in your project, install it via npm:

```bash
npm install gho-st-sdk
```

To use the GHO-ST SDK in your project, install it via yarn:

```bash
yarn add gho-st-sdk
```

## Supply

### `Usage`

This function allows users to supply funds to a aave reserve.

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
  user: "0xxxxxxxxxxx",
  reserve: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8", // USDC address
  amount: "100", // Supplying 100 USDC to aave
  onBehalfOf: "0xxxxxxxxxx",
  provider,
  signer,
});
```
