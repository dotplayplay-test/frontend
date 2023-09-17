import { writable } from "svelte/store"

let payoutEl = ''
export let payout = writable(payoutEl)

let isbetDiceBTN = false
export let isbetLoadingBtn = writable(isbetDiceBTN)

let dicepoint = 50
export let HandleDicePoint = writable(dicepoint)

let betPositionEl = 50
export let betPosition = writable(betPositionEl)

let dice_historyEl = []
export let dice_history = writable(dice_historyEl)