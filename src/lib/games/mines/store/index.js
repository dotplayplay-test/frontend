import { writable } from "svelte/store"

let payoutEl = ''
export let payout = writable(payoutEl)

let isbetMineBTN = false
export let isbetLoadingBtn = writable(isbetMineBTN)

let mineGems = 0
export let HandlemineGems = writable(mineGems)

let betDetail = 0
export let betDetails = writable(betDetail)

let mine_historyEl = []
export let mine_history = writable(mine_historyEl)

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


let Cashoii = 0
export let Cashout = writable(Cashoii)

let mine_sd = []
export let minesStore = writable(mine_sd)

let MineEncriptionEL = ""
export let MinesEncription = writable(MineEncriptionEL)

let mineIsUp = false
export let HandleIsAlive = writable(mineIsUp)

let winnig = ""
export let HandleWinning= writable(winnig)