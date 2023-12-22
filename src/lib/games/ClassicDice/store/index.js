import { writable } from "svelte/store"

let payoutEl = ''
export let payout = writable(payoutEl)

let hks = 50
export let range = writable(hks)

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
let ditoEL = []
export let flix = writable(ditoEL)

let dice_trooEL = []
export let dice_troo = writable(dice_trooEL)
let dice_waa = []
export let dice_wallet = writable(dice_waa)

let onWinEl = 0
export let handleOnwin = writable(onWinEl)

let StoponWinEl = 0
export let handleStopOnwin = writable(StoponWinEl)

let winning_trackEl = 0
export let winning_track = writable(winning_trackEl)

let StoponLoseEl = 0
export let handleStopOnLose = writable(StoponLoseEl)

let Losing_trackEl = 0
export let losing_track = writable(Losing_trackEl)

let handleOnLoseEl = 0
export let handleOnLose = writable(handleOnLoseEl)


let prev = 0
export let Autopre_bal = writable(prev)


let s_alive = false
export let Handles_alive = writable(s_alive)

let s_aloading = false
export let Handles_Loading = writable(s_aloading)