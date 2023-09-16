import { writable } from "svelte/store"

let payoutEl = ''
export let payout = writable(payoutEl)