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

let Singledice_historyEl = []
export let Singledice_history = writable(Singledice_historyEl)

let dicePlayers = []
export let dicegameplays = writable(dicePlayers)

let error = ''
export let error_msg = writable(error) 

let has_won = false
export let HandleHas_won = writable(has_won)

let diceAutoInput = (10).toFixed(2)
export let handlediceAutoInput = writable(diceAutoInput)

let winIncrement = 0
export let onWin = writable(winIncrement)

let settings = {}
export let settingEl = writable(settings)


let sounds = 1
export let soundHandler = writable(sounds)


let btn_constrolEl = false
export let btn_constrol = writable(btn_constrolEl)

let DiceEncriptionEL = ""
export let DiceEncription = writable(DiceEncriptionEL)

let rollunderEl = true
export let rollunder = writable(rollunderEl)


let dice_trooEL = []
export let dice_troo = writable(dice_trooEL)
