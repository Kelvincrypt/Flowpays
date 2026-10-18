# FlowPay

> Built with Arc Studio — money-powered apps in minutes

## What This App Does

FlowPay is a USDC payments app built on Arc. It lets users schedule recurring transfers (rent, school fees, subscriptions) and send cross-border remittances with corridor FX preview — all powered by the FlowPay smart contract.

## Tech Stack

- Frontend: React 18, Vite, TypeScript, Tailwind CSS
- Web3: wagmi v2 + @privy-io/wagmi, viem v2, Privy embedded wallets
- Contracts: Solidity 0.8.28 + Foundry + OpenZeppelin 5.1.0
- Chain: Arc Mainnet (Chain ID: 5042) / Arc Testnet (Chain ID: 5042002)
- Token: USDC at 0x3600000000000000000000000000000000000000 (both Arc Mainnet and Testnet)
- Auth: Privy (App ID: cmuyft2e4004x0clc2yh4kwtq)

## Deployed Contracts

| Contract | Network | Address |
|---|---|---|
| FlowPay | Arc Testnet | 0x2c9d68b37654e097150abd78cdc3e4460ea7bc03 |

Explorer: https://explorer.testnet.arc.io/address/0x2c9d68b37654e097150abd78cdc3e4460ea7bc03

## Key Files

- `src/App.tsx` — Landing page, login gate, app shell
- `src/components/ScheduledTransfers.tsx` — Recurring USDC payment schedules
- `src/components/Remittance.tsx` — Cross-border USDC remittances
- `src/components/PrivyWalletButton.tsx` — Privy wallet connection button
- `src/config.ts` — wagmi + Privy config
- `contracts/FlowPay.sol` — Main smart contract (schedules + remittances)
- `contracts/contract-metadata/FlowPay.json` — Deployment metadata

## Contract ABI Highlights

- `createSchedule(recipient, amount, frequency, label, category, nextExecuteAt)` — Register a recurring payment
- `executeSchedule(scheduleId)` — Trigger a due payment (requires USDC approval)
- `cancelSchedule(scheduleId)` — Cancel a schedule
- `sendRemittance(recipient, amount, corridorCode, memo)` — Send USDC remittance (requires USDC approval)
- `getUserSchedules(owner)` — Get schedule IDs for a user
- `getRemittanceHistory(sender)` — Get remittance IDs for a sender

## To Run

```bash
bun install
bun run dev
```
