import { writable } from "svelte/store"

let isLoading = false
let isRunning = false
let isCrashed = 0

let isUpto2 = false
let trackTwo = 3    

export let loadingCrash = writable(isLoading)
export let crashIsAlive = writable(isRunning)
export let hasCrashed = writable(isCrashed)

export let IsUpto2 = writable(isUpto2)
export let TrackTwo = writable(trackTwo)

let running_at = 0
let loading_at = 0
let crash_at = "0.00" 
let animateLoad = 220

export let Load_animation = writable(animateLoad)
export let crashLoad = writable(loading_at)
export let crashRunning = writable(running_at)
export let crashPoint = writable(crash_at)


let crashAnimate = ""
export let animateCrashCurve = writable(crashAnimate)

let history = [ 
    {id:5610140, crashpoint: 0.34},
    {id:5610141, crashpoint: 2.34},
    {id:5610142, crashpoint: 12.34},
    {id:5610143, crashpoint: 2.34},
    {id:5610144, crashpoint: 7.34},
    {id:5610145, crashpoint: 2.34},
    {id:5610146, crashpoint: 1.34},
    {id:5610147, crashpoint: 5.34},
    {id:5610148, crashpoint: 20.34},
    {id:5610149, crashpoint: 2.64},
    {id:5610150, crashpoint: 30.34},
    {id:5610151, crashpoint: 1.34},
    {id:5610152, crashpoint: 9.34},
    {id:5610153, crashpoint: 1.34},
]
export let historyStore = writable(history)


let hasbet = false
let hasbet_amount = null
export let handleHasbet = writable(hasbet)
export let handleHasbet_amount = writable(hasbet_amount)

let game_idEl = null
export let game_id = writable(game_idEl)

let hasCashout = false
export let cashOut = writable(hasCashout)

let isWinning = false
let winning_amont = 0
export let winning = writable(isWinning)
export let winningEl = writable(winning_amont)

let active_players = []
export let active_playerEl = writable(active_players)

let curve = ""
export let crashCurve = writable(curve)

let crash_history = []
export let crash_historyEl = writable(crash_history)

let mybet = []
export let mybetEl = writable(mybet)

let mybetDetails = []
export let mybetElDetails = writable(mybetDetails)

let redTrendball = ''
export let redTrendballEl = writable(redTrendball)

let redtredballPlayers = ""
export let handleRedtrendballPlayers = writable(redtredballPlayers)

let crash_all_users_red_trendball = false
export let crash_all_users_red_trendballEl = writable(crash_all_users_red_trendball)

let trendball_has_win = false
export let trendball_has_winEl = writable(trendball_has_win)

let isRed = false
export let handle_IsRed = writable(isRed)

let isRedWinners = []
export let handle_IsRedwinners = writable(isRedWinners)

let isGreen = false
export let handle_IsGreen = writable(isGreen)

let crash_all_users_green_trendball = false
export let crash_all_users_green_trendballEl = writable(crash_all_users_green_trendball)

let green_trendball_hasWin = false
export let green_trendball_hasWinEl = writable(green_trendball_hasWin)


let isMoon = false
export let handle_IsMoon = writable(isMoon)

let crash_all_users_Moon_trendball = false
export let crash_all_users_Moon_trendballEl = writable(crash_all_users_Moon_trendball)

let Moon_trendball_hasWin = false
export let Moon_trendball_hasWinEl = writable(Moon_trendball_hasWin)

let allPlayers = []
export let handleAllPlayerStore = writable(allPlayers)

let SinglePlayerDetails = []
export let SinglePlayerDetailsEl = writable(SinglePlayerDetails)


let v_defaultEl = true
export let v_default = writable(v_defaultEl)

let v_twoEl = 0
export let v_two = writable(v_twoEl)

let v_threeEl = 0
export let v_three = writable(v_threeEl)

let v_fiveEl = 0
export let v_five = writable(v_fiveEl)

let v_sevenEl = 0
export let v_seven = writable(v_sevenEl)

let v_nineEl = 0
export let v_nine = writable(v_nineEl)

let v_tenEl = 0
export let v_ten = writable(v_tenEl)

let v_twentyEl = 0
export let v_twenty = writable(v_twentyEl)

let v_fivetyEl = 0
export let v_fivety = writable(v_fivetyEl)

let v_hundredEl = 0
export let v_hundred = writable(v_hundredEl)

let v_TwohundredEl = 0
export let v_Twohundred = writable(v_TwohundredEl)

let v_FiveHundredEl = 0
export let v_FiveHundred = writable(v_FiveHundredEl) 

let v_thousandEl = 0
export let v_thousand = writable(v_thousandEl) 





let h_twoEl = 18
export let h_two = writable(h_twoEl) 

let h_fourEl = 38
export let h_four = writable(h_fourEl) 

let h_sixEl = 58
export let h_six = writable(h_sixEl) 

let h_eightEl = 78
export let h_eight = writable(h_eightEl) 

let h_TenEl = 0
export let h_ten = writable(h_TenEl)

let h_TwelveEl = 0
export let h_twelve = writable(h_TwelveEl)

let h_fourteenEl = 0
export let h_fourteen = writable(h_fourteenEl)

let h_sixteenEl = 0
export let h_sixteen = writable(h_sixteenEl)

let h_eighteenEl = 0
export let h_eighteen = writable(h_eighteenEl)

let h_twentyEl = 0
export let h_twenty = writable(h_twentyEl)

let h_thirthyEl = 0
export let h_thirthy = writable(h_thirthyEl)

let h_fourtyEl = 0
export let h_fourty = writable(h_fourtyEl)

let h_sixtyEl = 0
export let h_sixty = writable(h_sixtyEl)

let h_eightyEl = 0
export let h_eighty = writable(h_eightyEl)

let h_hundredEl = 0
export let h_hundred = writable(h_hundredEl)

let h_ThreehundredEl = 0
export let h_Threehundred = writable(h_ThreehundredEl)

let h_SevenhundredEl = 0
export let h_Sevenhundred = writable(h_SevenhundredEl)

let h_onethousandEl = 0
export let h_onethousand = writable(h_onethousandEl)


let error_msgEl = ''
export let error_msg = writable(error_msgEl)