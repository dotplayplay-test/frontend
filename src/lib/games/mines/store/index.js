import { writable } from "svelte/store"

let payoutEl = ''
export let payout = writable(payoutEl)

let isbetMineBTN = false
export let isbetLoadingBtn = writable(isbetMineBTN)

let mineGems = 0
export let HandlemineGems = writable(mineGems)

let is_automodeEl = false
export let is_automode = writable(is_automodeEl)

let game_id = 0
export let HandleGame_id = writable(game_id)

let bet_amountEl = 0.100
export let bet_amount = writable(bet_amountEl)

let liveHistory = ''
export let handleliveHistory = writable(liveHistory)

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

let mine = 0
export let HandleMineCount= writable(mine)

let SelectedMine = 0
export let HandleSelectedMine = writable(SelectedMine)

let netTile = 0
export let HandleNextTime = writable(netTile)

let skownEl = [{
    id: 1,
    active: false,
    mine: true
},
{
    id: 2,
    active: false,
    mine: false
},
{
    id: 3,
    active: false,
    mine: false
},
{
    id: 4,
    active: false,
    mine: false
},
{
    id: 5,
    active: false,
    mine: false
},
{
    id: 6,
    active: false,
    mine: false
},
{
    id: 7,
    active: false,
    mine: false
},
{
    id: 8,
    active: false,
    mine: false
},
{
    id: 9,
    active: false,
    mine: false
},
{
    id: 10,
    active: false,
    mine: false
},
{
    id: 11,
    active: false,
    mine: false
},
{
    id: 12,
    active: false,
    mine: true
},
{
    id: 13,
    active: false,
    mine: false
},
{
    id: 14,
    active: false,
    mine: false
},
{
    id: 15,
    active: false,
    mine: false
},
{
    id: 16,
    active: false,
    mine: false
},
{
    id: 17,
    active: false,
    mine: false
},
{
    id: 18,
    active: false,
    mine: false
},
{
    id: 19,
    active: false,
    mine: false
},
{
    id: 20,
    active: false,
    mine: false
},
{
    id: 21,
    active: false,
    mine: false
},
{
    id: 22,
    active: false,
    mine: false
},
{
    id: 23,
    active: false,
    mine: true
},
{
    id: 24,
    active: false,
    mine: false
},
{
    id: 25,
    active: false,
    mine: false
},
]

export let skown = writable(skownEl)