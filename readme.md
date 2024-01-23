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

## Withdraw

### `Usage`

This function allows users to withdraw funds from an Aave reserve.

#### Parameters

- `user` (string): User's Ethereum address.
- `reserve` (string): Address of the reserve for fund withdrawal.
- `amount` (string): Amount to be withdrawn.
- `aTokenAddress` (string): Address of the corresponding aToken for the reserve.
- `onBehalfOf` (string): Address on behalf of which funds will be withdrawn.
- `provider` (ethers.providers.Web3Provider): Ethereum provider.
- `signer` (ethers.Signer): Ethereum signer.

#### Example

```typescript
import { withdraw } from "gho-st-sdk";
import { ethers, Signer } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer: Signer = provider.getSigner();

await withdraw({
  user: "0xxxxxxxxxxx",
  reserve: "0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5", // Example reserve address
  amount: "50", // Withdrawing 50 units of the reserve
  aTokenAddress: "0x3FfAf50D4F4E96eB78f2407c090b72e86eCaed24", // Example aToken address
  onBehalfOf: "0xxxxxxxxxx",
  provider,
  signer,
});
```

## Repay

### `Usage`

This function allows users to repay borrowed funds on an Aave reserve.

#### Parameters

- `user` (string): User's Ethereum address.
- `reserve` (string): Address of the reserve for fund repayment.
- `amount` (string): Amount to be repaid.
- `interestRateMode` (enum): Interest rate mode for repayment (e.g., InterestRate.Variable).
- `onBehalfOf` (string): Address on behalf of which funds will be repaid.
- `provider` (ethers.providers.Web3Provider): Ethereum provider.
- `signer` (ethers.Signer): Ethereum signer.

#### Example

```typescript
import { Repay, InterestRate } from "gho-st-sdk";
import { ethers, Signer } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer: Signer = provider.getSigner();

await Repay({
  user: "0xxxxxxxxxxx",
  reserve: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60", // Example reserve address
  amount: "50", // Repaying 50 units of the reserve
  interestRateMode: InterestRate.Variable,
  onBehalfOf: "0xxxxxxxxxx",
  provider,
  signer,
});
```

## SupplyWithSignature

### `Usage`

This function allows users to supply funds to a aave reserve with additional signature signed by the user

#### Parameters

- `user` (string): User's Ethereum address.
- `reserve` (string): Address of the reserve for fund supply.
- `amount` (string): Amount to be supplied.
- `onBehalfOf` (string): Address on behalf of which funds will be supplied.
- `provider` (ethers.providers.Web3Provider): Ethereum provider.
- `signer` (ethers.Signer): Ethereum signer.

#### Example

```typescript
import { supplyWithSign } from "gho-st-sdk";
import { ethers, Signer } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer: Signer = provider.getSigner();

await supplyWithSign({
  user: "0xxxxxxxxxxx",
  reserve: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8", // USDC address
  amount: "100", // Supplying 100 USDC to aave
  onBehalfOf: "0xxxxxxxxxx",
  provider,
  signer,
});
```

## Repay With Signature

### `Usage`

This function allows users to repay borrowed funds on an Aave reserve with additional signature signed by the user.

#### Parameters

- `user` (string): User's Ethereum address.
- `reserve` (string): Address of the reserve for fund repayment.
- `amount` (string): Amount to be repaid.
- `interestRateMode` (enum): Interest rate mode for repayment (e.g., InterestRate.Variable).
- `onBehalfOf` (string): Address on behalf of which funds will be repaid.
- `provider` (ethers.providers.Web3Provider): Ethereum provider.
- `signer` (ethers.Signer): Ethereum signer.

#### Example

```typescript
import { repayWithSign, InterestRate } from "gho-st-sdk";
import { ethers, Signer } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer: Signer = provider.getSigner();

await repayWithSign({
  user: "0xxxxxxxxxxx",
  reserve: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60", // Example reserve address
  amount: "50", // Repaying 50 units of the reserve
  interestRateMode: InterestRate.Variable,
  onBehalfOf: "0xxxxxxxxxx",
  provider,
  signer,
});
```

## RepayWithaToken

### `Usage`

This function allows users to repay borrowed funds on an Aave reserve with the aave tokens you recieved while supplying the tokens .

#### Parameters

- `user` (string): User's Ethereum address.
- `reserve` (string): Address of the reserve for fund repayment.
- `amount` (string): Amount to be repaid.
- `interestRateMode` (enum): Interest rate mode for repayment (e.g., InterestRate.Variable).
- `provider` (ethers.providers.Web3Provider): Ethereum provider.
- `signer` (ethers.Signer): Ethereum signer.

#### Example

```typescript
import { repayWithaToken, InterestRate } from "gho-st-sdk";
import { ethers, Signer } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer: Signer = provider.getSigner();

await repayWithaToken({
  user: "0xxxxxxxxxxx",
  reserve: "0xc4bF5CbDaBE595361438F8c6a187bDc330539c60", // Example reserve address
  amount: "50", // Repaying 50 units of the reserve
  interestRateMode: InterestRate.Variable,
  provider,
  signer,
});
```
