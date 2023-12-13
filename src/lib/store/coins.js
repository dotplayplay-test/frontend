import { writable } from "svelte/store"
let ppdWalletEl = {}
let ppeWalletEl = {}
let pplWalletEl = {}
let ppfWalletEl = {}
let usdt_walletEl = {}
let default_walletEl = {}
let coin_listEl = []

export let ppdWallet = writable(ppdWalletEl)
export let ppeWallet = writable(ppeWalletEl)
export let pplWallet = writable(pplWalletEl)
export let ppfWallet = writable(ppfWalletEl)
export let usdt_Wallet = writable(usdt_walletEl)
export let coin_list = writable(coin_listEl)
export let default_Wallet = writable(default_walletEl)