import { writable } from "svelte/store"
let ppdWalletEl = {}

export let ppdWallet = writable(ppdWalletEl)
