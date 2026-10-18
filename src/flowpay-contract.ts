/**
 * FlowPay smart contract config — ABI + deployed address.
 * Arc Testnet deployment: 0x2c9d68b37654e097150abd78cdc3e4460ea7bc03
 */
import artifact from '../contracts/out/FlowPay.sol/FlowPay.json'

export const FLOWPAY_ADDRESS = '0x2c9d68b37654e097150abd78cdc3e4460ea7bc03' as const

export const FLOWPAY_ABI = artifact.abi

// Frequency enum — must match contract
export const Frequency = { Once: 0, Weekly: 1, Monthly: 2 } as const
export type FrequencyValue = (typeof Frequency)[keyof typeof Frequency]

// Category enum — must match contract
export const Category = { Rent: 0, School: 1, Subscription: 2, Other: 3 } as const
export type CategoryValue = (typeof Category)[keyof typeof Category]
