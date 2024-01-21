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

## Borrow

### `Usage`

This function allows users to borrow funds from a aave .

#### Parameters

- `user` (string): User's Ethereum address.
- `reserve` (string): Address of the reserve for fund borrowing.
- `amount` (string): Amount to be borrowed.
- `interestRateMode` (InterestRate): Interest rate mode for the borrow operation. It can be`( Variable | Stable)`
- `onBehalfOf` (string): Address on behalf of which funds will be borrowed.
- `provider` (ethers.providers.Web3Provider): Ethereum provider.
- `signer` (ethers.Signer): Ethereum signer.

#### Example

```typescript
import { borrow } from "gho-st-sdk";
import { ethers, Signer, InterestRate } from "ethers";
import { InterestRate } from "@aave/contract-helpers";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer: Signer = provider.getSigner();

await borrow({
  user: "0xxxxxxxxxxx",
  reserve: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60", //Gho contract address for sepolia;
  amount: "100", // 100 GHO token is borrowed
  interestRateMode: InterestRate.Variable,
  onBehalfOf: "0xxxxxxxxxxxxxxxx",
  provider,
  signer,
});
```
