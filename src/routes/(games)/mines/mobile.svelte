<script>

import { default_Wallet } from "$lib/store/coins";
import HistoryDetails from "$lib/games/mines/componets/historyDetails.svelte";
import MobileManualControllers from '$lib/games/mines/mobileManualControllers.svelte';
import MobileAutoController from '$lib/games/mines/mobileAutoController.svelte';
import { soundHandler} from "$lib/games/mines/store/index"
import background from "$lib/games/mines/audio/sadness.mp3"
import Help from "$lib/games/mines/componets/help.svelte";
import LiveStats from "$lib/games/mines/componets/liveStats.svelte";
import SeedSetting from "$lib/games/mines/componets/seedSetting.svelte";
import { dicegameplays } from "$lib/games/mines/store/index"
import Allbet from '$lib/games/mines/componets/allbet.svelte';
import { handleisLoggin } from "$lib/store/profile";
import { mine_history,HandleSelectedMine, minesStore,HandleNextTime, HandlemineGems,HandleMineCount, HandleGame_id, is_automode,
    skown,  Cashout , HandleHas_won,betDetails, HandleIsAlive, HandleWinning } from "$lib/games/mines/store/index"
import Mybet from '$lib/games/mines/componets/mybet.svelte';
import { MinesHistory } from "$lib/games/mines/hook/diceHistory";
import {  handleCountdown } from "$lib/games/ClassicDice/socket/index"
const { handleMinesHistory } = handleCountdown()
const { historyMines } = MinesHistory()
import { onMount } from "svelte";
import { handleAuthToken } from "$lib/store/routes";
import axios from "axios";
import win from "$lib/games/mines/audio/scale-d6-106129.mp3";
import wion from "$lib/games/mines/audio/box-crash-106687.mp3";
import cr from "$lib/games/mines/audio/click.wav";
let range = 50
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

let ishover = false
const handleRangl = ((w) => {
    if (w === 1) {
        ishover = true
    } else {
        ishover = false
    }
})

let is_manual = true
const handleTabs = ((e)=>{
    if(e === 1){
        is_automode.set(false)
        is_manual = true
        HandleWinning.set(false)
    }else{
        is_automode.set(true)
        is_manual = false
        HandleWinning.set(false)
    }
})

let playPlayb = false
const handleSoundState = (()=>{
    playPlayb =! playPlayb
    if(playPlayb){
        const audio = new Audio(background);
        audio.volume = 1;
        audio.play();
    }else{
        const audio = new Audio(background);        
        audio.volume = 0;
        audio.paused();
    }
})

function playBackground() {
    if($soundHandler){
        soundHandler.set(0)
    }else{
        soundHandler.set(1)
    }
}

let isHelp = false
const handleIsHelp = (()=>{
    isHelp = !isHelp
})

let is_stats = false
let stats = (()=>{
    is_stats = !is_stats
})

let isSeed = false
const  hanhisSeed = (()=>{
    isSeed = !isSeed
})

let is_hotkey = false
const handleHotKey = (()=>{
    is_hotkey = !is_hotkey
})

let DgII = ''
let hisQQ = false
const handleDiceHistoryDetail = ((data)=>{
    if(hisQQ){
        hisQQ = false
    }else{
        DgII = data
        hisQQ = true
    }
})

let newItem;
    $: {
    newItem =  [...$dicegameplays].reverse()
}

let is_allbet = true
let is_mybet = false
let is_contest = false
const handleAllbet = ((e) => {
    if (e === 1) {
        is_allbet = true
        is_mybet = false
        is_contest = false
    } else if (e === 2) {
        is_allbet = false
        is_mybet = true
    } else {
        is_contest = true
        is_allbet = false
        is_mybet = false
    }
})


let houseEgde = 1
let game__charges = 100 / houseEgde
let game_logic;
let total_charge;

function playSound() {
    const audio = new Audio(cr);
    audio.volume = 0.5;
    audio.play();
}

// Function to toggle play/pause
function togglePlayback() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        click.play();
    } else {
        click.pause();
    }
}

const handleChange = ((e) => {
    const audio = new Audio(win);
    audio.volume = 0.5;
    audio.play();
})

const handleFubbf = (() => {
    const audio = new Audio(wion);
    audio.volume = 0.5;
    audio.play();
})

const handleLostBet = (async (data) => {
    await axios.post(`${URL}/api/user/mine-game/lost-bet`, {
            data
        }, {
            headers: {
                Authorization: `Bearer ${$handleAuthToken}`
            }
        })
        .then((res) => {
            mine_history.set([...$mine_history, res.data[0]])
            handleMinesHistory(res.data[0])
        })
        .catch((error) => {
            console.log(error)
        })
})

const handleUpdateWins = (async (data) => {
    await axios.post(`${URL}/api/user/mine-game/update-wins`, {
            data
        }, {
            headers: {
                Authorization: `Bearer ${$handleAuthToken}`
            }
        })
        .then((res) => {
            (res.data)
        })
        .catch((error) => {
            console.log(error.response)
        })
})

let multiplayerEl = 1.03
let multiplier
const handleMines = ((event) => {
    $minesStore.forEach(element => {
        if (element.id === event.id) {
            if (event.mine) {
                handleFubbf()
                Cashout.set(0)
                element.active = true
                HandleIsAlive.set(false)
                HandleHas_won.set(true)
                minesStore.set($minesStore)
                handleLostBet({
                    gameLoop: $minesStore,
                    cashout: 0,
                    game_id: $HandleGame_id
                })
            } else {
                element.active = true
                handleChange()
                HandleSelectedMine.set($HandleSelectedMine + 1)
                HandlemineGems.set($HandlemineGems - 1)
                minesStore.set($minesStore)
                handleUpdateWins($minesStore)
                if ($HandleMineCount === 1) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.03)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.03)
                        HandleNextTime.set(1.08)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.08)
                        HandleNextTime.set(1.13)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(1.13)
                        HandleNextTime.set(1.18)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(1.18)
                        HandleNextTime.set(1.24)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(1.24)
                        HandleNextTime.set(1.3)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(1.3)
                        HandleNextTime.set(1.38)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1.38)
                        HandleNextTime.set(1.46)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(1.46)
                        HandleNextTime.set(1.55)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1.55)
                        HandleNextTime.set(1.65)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(1.65)
                        HandleNextTime.set(1.77)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(1.77)
                        HandleNextTime.set(1.90)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1.90)
                        HandleNextTime.set(2.06)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(2.06)
                        HandleNextTime.set(2.25)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2.25)
                        HandleNextTime.set(2.48)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(2.48)
                        HandleNextTime.set(2.75)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2.75)
                        HandleNextTime.set(3.09)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(3.09)
                        HandleNextTime.set(3.54)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(3.54)
                        HandleNextTime.set(4.13)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(4.13)
                        HandleNextTime.set(4.95)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(4.95)
                        HandleNextTime.set(6.19)
                    }
                    if ($HandleSelectedMine === 21) {
                        Cashout.set(6.19)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 22) {
                        Cashout.set(8.25)
                        HandleNextTime.set(12.38)
                    }
                    if ($HandleSelectedMine === 23) {
                        Cashout.set(12.38)
                        HandleNextTime.set(24.75)
                    }
                    if ($HandleSelectedMine === 24) {
                        Cashout.set(24.75)
                    }
                }
                if ($HandleMineCount === 2) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.08)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.08)
                        HandleNextTime.set(1.17)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.17)
                        HandleNextTime.set(1.29)
                    } else if ($HandleSelectedMine === 3) {
                        Cashout.set(1.29)
                        HandleNextTime.set(1.41)
                    } else if ($HandleSelectedMine === 4) {
                        Cashout.set(1.41)
                        HandleNextTime.set(1.56)
                    } else if ($HandleSelectedMine === 5) {
                        Cashout.set(1.56)
                        HandleNextTime.set(1.74)
                    } else if ($HandleSelectedMine === 6) {
                        Cashout.set(1.74)
                        HandleNextTime.set(1.94)
                    } else if ($HandleSelectedMine === 7) {
                        Cashout.set(1.94)
                        HandleNextTime.set(2.18)
                    } else if ($HandleSelectedMine === 8) {
                        Cashout.set(2.18)
                        HandleNextTime.set(2.47)
                    } else if ($HandleSelectedMine === 9) {
                        Cashout.set(2.47)
                        HandleNextTime.set(2.83)
                    } else if ($HandleSelectedMine === 10) {
                        Cashout.set(2.83)
                        HandleNextTime.set(3.26)
                    } else if ($HandleSelectedMine === 11) {
                        Cashout.set(3.26)
                        HandleNextTime.set(3.81)
                    } else if ($HandleSelectedMine === 12) {
                        Cashout.set(3.81)
                        HandleNextTime.set(4.50)
                    } else if ($HandleSelectedMine === 13) {
                        Cashout.set(4.50)
                        HandleNextTime.set(5.40)
                    } else if ($HandleSelectedMine === 14) {
                        Cashout.set(5.40)
                        HandleNextTime.set(6.60)
                    } else if ($HandleSelectedMine === 15) {
                        Cashout.set(6.60)
                        HandleNextTime.set(8.25)
                    } else if ($HandleSelectedMine === 16) {
                        Cashout.set(8.25)
                        HandleNextTime.set(12.95)
                    } else if ($HandleSelectedMine === 17) {
                        Cashout.set(12.95)
                        HandleNextTime.set(14.14)
                    } else if ($HandleSelectedMine === 18) {
                        Cashout.set(14.14)
                        HandleNextTime.set(19.80)
                    } else if ($HandleSelectedMine === 19) {
                        Cashout.set(19.80)
                        HandleNextTime.set(29.70)
                    } else if ($HandleSelectedMine === 20) {
                        Cashout.set(29.70)
                        HandleNextTime.set(49.50)
                    } else if ($HandleSelectedMine === 21) {
                        Cashout.set(49.50)
                        HandleNextTime.set(98.99)
                    } else if ($HandleSelectedMine === 22) {
                        Cashout.set(98.99)
                        HandleNextTime.set(296.98)
                    } else if ($HandleSelectedMine === 23) {
                        Cashout.set(296.98)
                    }
                }
                if ($HandleMineCount === 3) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.13)
                    } 
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.13)
                        HandleNextTime.set(1.29)
                    } else if ($HandleSelectedMine === 2) {
                        Cashout.set(1.29)
                        HandleNextTime.set(1.48)
                    } else if ($HandleSelectedMine === 3) {
                        Cashout.set(1.48)
                        HandleNextTime.set(1.71)
                    } else if ($HandleSelectedMine === 4) {
                        Cashout.set(1.71)
                        HandleNextTime.set(2.00)
                    } else if ($HandleSelectedMine === 5) {
                        Cashout.set(2.00)
                        HandleNextTime.set(2.35)
                    } else if ($HandleSelectedMine === 6) {
                        Cashout.set(2.35)
                        HandleNextTime.set(2.79)
                    } else if ($HandleSelectedMine === 7) {
                        Cashout.set(2.79)
                        HandleNextTime.set(3.35)
                    } else if ($HandleSelectedMine === 8) {
                        Cashout.set(3.35)
                        HandleNextTime.set(4.07)
                    } else if ($HandleSelectedMine === 9) {
                        Cashout.set(4.07)
                        HandleNextTime.set(5.01)
                    } else if ($HandleSelectedMine === 10) {
                        Cashout.set(5.01)
                        HandleNextTime.set(6.26)
                    } else if ($HandleSelectedMine === 11) {
                        Cashout.set(6.26)
                        HandleNextTime.set(7.96)
                    } else if ($HandleSelectedMine === 12) {
                        Cashout.set(7.96)
                        HandleNextTime.set(10.35)
                    } else if ($HandleSelectedMine === 13) {
                        Cashout.set(10.35)
                        HandleNextTime.set(13.80)
                    } else if ($HandleSelectedMine === 14) {
                        Cashout.set(13.80)
                        HandleNextTime.set(18.98)
                    } else if ($HandleSelectedMine === 15) {
                        Cashout.set(18.98)
                        HandleNextTime.set(27.11)
                    } else if ($HandleSelectedMine === 16) {
                        Cashout.set(27.11)
                        HandleNextTime.set(40.67)
                    } else if ($HandleSelectedMine === 17) {
                        Cashout.set(40.67)
                        HandleNextTime.set(65.07)
                    } else if ($HandleSelectedMine === 18) {
                        Cashout.set(65.07)
                        HandleNextTime.set(113.87)
                    } else if ($HandleSelectedMine === 19) {
                        Cashout.set(113.87)
                        HandleNextTime.set(227.74)
                    } else if ($HandleSelectedMine === 20) {
                        Cashout.set(227.74)
                        HandleNextTime.set(569.35)
                    } else if ($HandleSelectedMine === 21) {
                        Cashout.set(569.35)
                        HandleNextTime.set(2277.41)
                    } else if ($HandleSelectedMine === 22) {
                        Cashout.set(2277.41)
                    }
                }

                if ($HandleMineCount === 4) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.18)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.18)
                        HandleNextTime.set(1.41)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.41)
                        HandleNextTime.set(1.71)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(1.71)
                        HandleNextTime.set(2.09)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(2.09)
                        HandleNextTime.set(2.58)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(2.58)
                        HandleNextTime.set(3.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(3.23)
                        HandleNextTime.set(4.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(4.09)
                        HandleNextTime.set(5.26)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(5.26)
                        HandleNextTime.set(6.88)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(6.88)
                        HandleNextTime.set(9.17)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(9.17)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(12.51)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(17.51)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(25.30)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(37.95)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(59.63)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(99.38)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(178.89)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(357.78)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(834.83)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(2504)
                    }
                    if ($HandleSelectedMine === 21) {
                        Cashout.set(12440.23)
                    }
                }

                if ($HandleMineCount === 5) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.24)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.24)
                        HandleNextTime.set(1.56)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.56)
                        HandleNextTime.set(2.00)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.00)
                        HandleNextTime.set(2.59)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(2.59)
                        HandleNextTime.set(3.39)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(3.39)
                        HandleNextTime.set(4.52)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(4.52)
                        HandleNextTime.set(6.14)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(6.14)
                        HandleNextTime.set(12.04)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(12.04)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(17.52)
                        HandleNextTime.set(26.27)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(26.27)
                        HandleNextTime.set(40.87)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(40.87)
                        HandleNextTime.set(66.41)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(66.41)
                        HandleNextTime.set(113.85)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(113.85)
                        HandleNextTime.set(160.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(160.23)
                        HandleNextTime.set(210.83)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(210.83)
                        HandleNextTime.set(300.21)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(300.21)
                        HandleNextTime.set(740.11)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(740.11)
                        HandleNextTime.set(1240.90)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(1240.90)
                        HandleNextTime.set(2540.23)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(2540.23)
                        HandleNextTime.set(9240.23)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(9240.23)
                    }
                }

                if ($HandleMineCount === 6) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.30)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.30)
                        HandleNextTime.set(1.74)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.74)
                        HandleNextTime.set(2.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.35)
                        HandleNextTime.set(3.23)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(3.23)
                        HandleNextTime.set(4.52)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(4.52)
                        HandleNextTime.set(6.46)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(6.46)
                        HandleNextTime.set(9.44)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(9.44)
                        HandleNextTime.set(14.17)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(14.17)
                        HandleNextTime.set(21.89)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(21.89)
                        HandleNextTime.set(35.03)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(35.03)
                        HandleNextTime.set(58.38)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(58.38)
                        HandleNextTime.set(80.87)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(80.87)
                        HandleNextTime.set(120.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(120.23)
                        HandleNextTime.set(230.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(230.23)
                        HandleNextTime.set(440.83)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(440.83)
                        HandleNextTime.set(600.21)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(600.21)
                        HandleNextTime.set(940.11)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(940.11)
                        HandleNextTime.set(1240.90)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(1240.90)
                        HandleNextTime.set(2040.23)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(2040.23)
                    }
                }

                if ($HandleMineCount === 7) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.38)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.38)
                        HandleNextTime.set(1.94)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.94)
                        HandleNextTime.set(2.79)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.79)
                        HandleNextTime.set(4.09)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(4.09)
                        HandleNextTime.set(6.14)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(6.14)
                        HandleNextTime.set(9.44)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(9.44)
                        HandleNextTime.set(14.95)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(14.95)
                        HandleNextTime.set(24.47)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(24.47)
                        HandleNextTime.set(41.60)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(41.60)
                        HandleNextTime.set(96.40)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(96.40)
                        HandleNextTime.set(180.83)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(180.83)
                        HandleNextTime.set(230.07)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(230.07)
                        HandleNextTime.set(440.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(440.23)
                        HandleNextTime.set(690.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(690.23)
                        HandleNextTime.set(1540.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1540.23)
                        HandleNextTime.set(2800.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2800.23)
                        HandleNextTime.set(6940.20)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(6940.20)
                        HandleNextTime.set(12840.11)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(12840.11)
                    }
                }

                if ($HandleMineCount === 8) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.48)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.46)
                        HandleNextTime.set(2.18)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.18)
                        HandleNextTime.set(3.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(3.35)
                        HandleNextTime.set(5.26)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(5.26)
                        HandleNextTime.set(8.50)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(8.50)
                        HandleNextTime.set(14.17)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(14.17)
                        HandleNextTime.set(24.47)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(24.47)
                        HandleNextTime.set(44.05)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(44.05)
                        HandleNextTime.set(83.20)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(83.20)
                        HandleNextTime.set(166.40)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(166.40)
                        HandleNextTime.set(210.83)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(210.83)
                        HandleNextTime.set(440.07)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(440.07)
                        HandleNextTime.set(740.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(740.23)
                        HandleNextTime.set(1140.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(1140.23)
                        HandleNextTime.set(1740.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1740.23)
                        HandleNextTime.set(2240.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2240.23)
                        HandleNextTime.set(2740.23)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(2740.23)
                    }
                }

                if ($HandleMineCount === 9) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.55)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.55)
                        HandleNextTime.set(2.48)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.48)
                        HandleNextTime.set(4.07)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(4.07)
                        HandleNextTime.set(6.88)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(6.88)
                        HandleNextTime.set(12.04)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(12.04)
                        HandleNextTime.set(21.89)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(21.89)
                        HandleNextTime.set(41.60)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(41.60)
                        HandleNextTime.set(83.20)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(83.20)
                        HandleNextTime.set(120.99)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(120.99)
                        HandleNextTime.set(238.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(238.11)
                        HandleNextTime.set(450.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(450.23)
                        HandleNextTime.set(640.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(640.23)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1940.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1940.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2440.23)
                    }
                }

                if ($HandleMineCount === 10) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.65)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.65)
                        HandleNextTime.set(2.83)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.83)
                        HandleNextTime.set(5.00)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(5.00)
                        HandleNextTime.set(9.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(9.17)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(17.52)
                        HandleNextTime.set(38.38)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(38.38)
                        HandleNextTime.set(97.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2440.23)
                        HandleNextTime.set(5440.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(5440.23)
                    }
                }

                if ($HandleMineCount === 11) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.77)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.77)
                        HandleNextTime.set(3.26)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(3.26)
                        HandleNextTime.set(6.26)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(6.26)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(12.51)
                        HandleNextTime.set(26.27)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(26.27)
                        HandleNextTime.set(58.38)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(58.38)
                        HandleNextTime.set(97.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2440.23)
                    }
                }

                if ($HandleMineCount === 12) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(1.90)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.90)
                        HandleNextTime.set(3.81)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(3.81)
                        HandleNextTime.set(7.96)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(7.96)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(17.52)
                        HandleNextTime.set(40.87)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(40.87)
                        HandleNextTime.set(102.17)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(102.17)
                        HandleNextTime.set(277.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(277.33)
                        HandleNextTime.set(831.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(831.99)
                        HandleNextTime.set(1220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1220.23)
                        HandleNextTime.set(1740.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(1740.11)
                        HandleNextTime.set(2140.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(2140.23)
                        HandleNextTime.set(3440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(3440.23)
                        HandleNextTime.set(4440.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(4440.23)
                    }
                }

                if ($HandleMineCount === 13) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(2.06)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.06)
                        HandleNextTime.set(4.50)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(4.50)
                        HandleNextTime.set(10.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(10.35)
                        HandleNextTime.set(25.30)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(25.30)
                        HandleNextTime.set(58.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(58.00)
                        HandleNextTime.set(89.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(89.03)
                        HandleNextTime.set(121.19)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(121.19)
                        HandleNextTime.set(240.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(240.78)
                        HandleNextTime.set(420.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(420.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                    }
                }

                if ($HandleMineCount === 14) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(2.25)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.25)
                        HandleNextTime.set(5.40)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(5.40)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(45.39)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(45.39)
                        HandleNextTime.set(78.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(78.00)
                        HandleNextTime.set(121.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(121.03)
                        HandleNextTime.set(210.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(210.09)
                        HandleNextTime.set(540.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(540.78)
                        HandleNextTime.set(740.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(740.23)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1240.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(1240.23)
                    }
                }

                if ($HandleMineCount === 15) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(2.48)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.48)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(891.03)
                        HandleNextTime.set(790.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1990.09)
                        HandleNextTime.set(940.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(2840.78)
                        HandleNextTime.set(5740.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(5740.23)
                        HandleNextTime.set(10040.23)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(10040.23)
                    }
                }

                if ($HandleMineCount === 16) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(2.75)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(491.03)
                        HandleNextTime.set(790.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(790.09)
                        HandleNextTime.set(940.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(940.78)
                        HandleNextTime.set(1240.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1240.23)
                    }
                }

                if ($HandleMineCount === 17) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(3.09)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(3.09)
                        HandleNextTime.set(10.61)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(10.61)
                        HandleNextTime.set(40.66)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(40.66)
                        HandleNextTime.set(178.91)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(178.91)
                        HandleNextTime.set(229.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(329.20)
                        HandleNextTime.set(396.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(796.23)
                        HandleNextTime.set(590.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1390.09)
                        HandleNextTime.set(740.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(2340.78)
                    }
                }

                if ($HandleMineCount === 18) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(3.54)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(3.54)
                        HandleNextTime.set(14.14)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(14.14)
                        HandleNextTime.set(65.06)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(65.06)
                        HandleNextTime.set(357.81)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(357.81)
                        HandleNextTime.set(589.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(589.20)
                        HandleNextTime.set(779.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(779.23)
                        HandleNextTime.set(909.23)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(909.23)
                    }
                }

                if ($HandleMineCount === 19) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(4.13)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(4.13)
                        HandleNextTime.set(19.8)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(19.8)
                        HandleNextTime.set(113.85)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(113.85)
                        HandleNextTime.set(209.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(209.17)
                        HandleNextTime.set(389.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(389.20)
                        HandleNextTime.set(679.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(679.23)
                    }
                }

                if ($HandleMineCount === 20) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(4.95)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(4.95)
                        HandleNextTime.set(29.70)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(29.70)
                        HandleNextTime.set(227.7)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(227.7)
                        HandleNextTime.set(409.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(609.17)
                        HandleNextTime.set(729.27)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(1409.27)
                    }
                }

                if ($HandleMineCount === 21) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(6.19)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(6.19)
                        HandleNextTime.set(49.50)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(49.50)
                        HandleNextTime.set(119.77)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(119.77)
                        HandleNextTime.set(319.77)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(319.77)
                    }
                }

                if ($HandleMineCount === 22) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(8.24)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(8.24)
                        HandleNextTime.set(99.00)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(99.00)
                        HandleNextTime.set(129.77)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(129.77)
                    }
                }

                if ($HandleMineCount === 23) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(12.38)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(12.38)
                        HandleNextTime.set(297.00)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(297.00)
                    }
                }

                if ($HandleMineCount === 24) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(24.75)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(24.75)
                    }
                }
                // multiplier = multiplayerEl * (24 - $HandlemineGems)
            }
        }
    });
})

const handleActivemies = (async () => {
    await axios.get(`${URL}/api/user/mine-game/mine-init`, {
            headers: {
                Authorization: `Bearer ${$handleAuthToken}`
            }
        })
        .then((response) => {
            let pops = response.data[0]
            if (pops) {
                minesStore.set(pops.gameLoop)
                HandleGame_id.set(response.data[0].game_id)
                let ins = []
                let inseuy = []
                $minesStore.forEach(element => {
                    if (!element.mine && !element.active) {
                        ins.push(element)
                    }
                    if (element.active) {
                        inseuy.push(element)
                    }
                })
                HandleSelectedMine.set(inseuy.length)
                if ($HandleMineCount === 1) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.03)
                        HandleNextTime.set(1.08)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.03)
                        HandleNextTime.set(1.08)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.08)
                        HandleNextTime.set(1.13)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(1.13)
                        HandleNextTime.set(1.18)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(1.18)
                        HandleNextTime.set(1.24)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(1.24)
                        HandleNextTime.set(1.3)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(1.3)
                        HandleNextTime.set(1.38)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1.38)
                        HandleNextTime.set(1.46)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(1.46)
                        HandleNextTime.set(1.55)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1.55)
                        HandleNextTime.set(1.65)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(1.65)
                        HandleNextTime.set(1.77)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(1.77)
                        HandleNextTime.set(1.90)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1.90)
                        HandleNextTime.set(2.06)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(2.06)
                        HandleNextTime.set(2.25)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2.25)
                        HandleNextTime.set(2.48)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(2.48)
                        HandleNextTime.set(2.75)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2.75)
                        HandleNextTime.set(3.09)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(3.09)
                        HandleNextTime.set(3.54)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(3.54)
                        HandleNextTime.set(4.13)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(4.13)
                        HandleNextTime.set(4.95)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(4.95)
                        HandleNextTime.set(6.19)
                    }
                    if ($HandleSelectedMine === 21) {
                        Cashout.set(6.19)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 22) {
                        Cashout.set(8.25)
                        HandleNextTime.set(12.38)
                    }
                    if ($HandleSelectedMine === 23) {
                        Cashout.set(12.38)
                        HandleNextTime.set(24.75)
                    }
                    if ($HandleSelectedMine === 24) {
                        Cashout.set(24.75)
                    }
                }
                if ($HandleMineCount === 2) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.08)
                        HandleNextTime.set(1.17)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.17)
                        HandleNextTime.set(1.29)
                    } else if ($HandleSelectedMine === 3) {
                        Cashout.set(1.29)
                        HandleNextTime.set(1.41)
                    } else if ($HandleSelectedMine === 4) {
                        Cashout.set(1.41)
                        HandleNextTime.set(1.56)
                    } else if ($HandleSelectedMine === 5) {
                        Cashout.set(1.56)
                        HandleNextTime.set(1.74)
                    } else if ($HandleSelectedMine === 6) {
                        Cashout.set(1.74)
                        HandleNextTime.set(1.94)
                    } else if ($HandleSelectedMine === 7) {
                        Cashout.set(1.94)
                        HandleNextTime.set(2.18)
                    } else if ($HandleSelectedMine === 8) {
                        Cashout.set(2.18)
                        HandleNextTime.set(2.47)
                    } else if ($HandleSelectedMine === 9) {
                        Cashout.set(2.47)
                        HandleNextTime.set(2.83)
                    } else if ($HandleSelectedMine === 10) {
                        Cashout.set(2.83)
                        HandleNextTime.set(3.26)
                    } else if ($HandleSelectedMine === 11) {
                        Cashout.set(3.26)
                        HandleNextTime.set(3.81)
                    } else if ($HandleSelectedMine === 12) {
                        Cashout.set(3.81)
                        HandleNextTime.set(4.50)
                    } else if ($HandleSelectedMine === 13) {
                        Cashout.set(4.50)
                        HandleNextTime.set(5.40)
                    } else if ($HandleSelectedMine === 14) {
                        Cashout.set(5.40)
                        HandleNextTime.set(6.60)
                    } else if ($HandleSelectedMine === 15) {
                        Cashout.set(6.60)
                        HandleNextTime.set(8.25)
                    } else if ($HandleSelectedMine === 16) {
                        Cashout.set(8.25)
                        HandleNextTime.set(12.95)
                    } else if ($HandleSelectedMine === 17) {
                        Cashout.set(12.95)
                        HandleNextTime.set(14.14)
                    } else if ($HandleSelectedMine === 18) {
                        Cashout.set(14.14)
                        HandleNextTime.set(19.80)
                    } else if ($HandleSelectedMine === 19) {
                        Cashout.set(19.80)
                        HandleNextTime.set(29.70)
                    } else if ($HandleSelectedMine === 20) {
                        Cashout.set(29.70)
                        HandleNextTime.set(49.50)
                    } else if ($HandleSelectedMine === 21) {
                        Cashout.set(49.50)
                        HandleNextTime.set(98.99)
                    } else if ($HandleSelectedMine === 22) {
                        Cashout.set(98.99)
                        HandleNextTime.set(296.98)
                    } else if ($HandleSelectedMine === 23) {
                        Cashout.set(296.98)
                    }
                }
                if ($HandleMineCount === 3) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.13)
                        HandleNextTime.set(1.29)
                    } else if ($HandleSelectedMine === 2) {
                        Cashout.set(1.29)
                        HandleNextTime.set(1.48)
                    } else if ($HandleSelectedMine === 3) {
                        Cashout.set(1.48)
                        HandleNextTime.set(1.71)
                    } else if ($HandleSelectedMine === 4) {
                        Cashout.set(1.71)
                        HandleNextTime.set(2.00)
                    } else if ($HandleSelectedMine === 5) {
                        Cashout.set(2.00)
                        HandleNextTime.set(2.35)
                    } else if ($HandleSelectedMine === 6) {
                        Cashout.set(2.35)
                        HandleNextTime.set(2.79)
                    } else if ($HandleSelectedMine === 7) {
                        Cashout.set(2.79)
                        HandleNextTime.set(3.35)
                    } else if ($HandleSelectedMine === 8) {
                        Cashout.set(3.35)
                        HandleNextTime.set(4.07)
                    } else if ($HandleSelectedMine === 9) {
                        Cashout.set(4.07)
                        HandleNextTime.set(5.01)
                    } else if ($HandleSelectedMine === 10) {
                        Cashout.set(5.01)
                        HandleNextTime.set(6.26)
                    } else if ($HandleSelectedMine === 11) {
                        Cashout.set(6.26)
                        HandleNextTime.set(7.96)
                    } else if ($HandleSelectedMine === 12) {
                        Cashout.set(7.96)
                        HandleNextTime.set(10.35)
                    } else if ($HandleSelectedMine === 13) {
                        Cashout.set(10.35)
                        HandleNextTime.set(13.80)
                    } else if ($HandleSelectedMine === 14) {
                        Cashout.set(13.80)
                        HandleNextTime.set(18.98)
                    } else if ($HandleSelectedMine === 15) {
                        Cashout.set(18.98)
                        HandleNextTime.set(27.11)
                    } else if ($HandleSelectedMine === 16) {
                        Cashout.set(27.11)
                        HandleNextTime.set(40.67)
                    } else if ($HandleSelectedMine === 17) {
                        Cashout.set(40.67)
                        HandleNextTime.set(65.07)
                    } else if ($HandleSelectedMine === 18) {
                        Cashout.set(65.07)
                        HandleNextTime.set(113.87)
                    } else if ($HandleSelectedMine === 19) {
                        Cashout.set(113.87)
                        HandleNextTime.set(227.74)
                    } else if ($HandleSelectedMine === 20) {
                        Cashout.set(227.74)
                        HandleNextTime.set(569.35)
                    } else if ($HandleSelectedMine === 21) {
                        Cashout.set(569.35)
                        HandleNextTime.set(2277.41)
                    } else if ($HandleSelectedMine === 22) {
                        Cashout.set(2277.41)
                    }
                }

                if ($HandleMineCount === 4) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.18)
                        HandleNextTime.set(1.41)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.41)
                        HandleNextTime.set(1.71)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(1.71)
                        HandleNextTime.set(2.09)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(2.09)
                        HandleNextTime.set(2.58)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(2.58)
                        HandleNextTime.set(3.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(3.23)
                        HandleNextTime.set(4.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(4.09)
                        HandleNextTime.set(5.26)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(5.26)
                        HandleNextTime.set(6.88)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(6.88)
                        HandleNextTime.set(9.17)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(9.17)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(12.51)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(17.51)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(25.30)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(37.95)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(59.63)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(99.38)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(178.89)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(357.78)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(834.83)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(2504)
                    }
                    if ($HandleSelectedMine === 21) {
                        Cashout.set(12440.23)
                    }
                }

                if ($HandleMineCount === 5) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.24)
                        HandleNextTime.set(1.56)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.56)
                        HandleNextTime.set(2.00)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.00)
                        HandleNextTime.set(2.59)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(2.59)
                        HandleNextTime.set(3.39)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(3.39)
                        HandleNextTime.set(4.52)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(4.52)
                        HandleNextTime.set(6.14)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(6.14)
                        HandleNextTime.set(12.04)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(12.04)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(17.52)
                        HandleNextTime.set(26.27)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(26.27)
                        HandleNextTime.set(40.87)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(40.87)
                        HandleNextTime.set(66.41)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(66.41)
                        HandleNextTime.set(113.85)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(113.85)
                        HandleNextTime.set(160.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(160.23)
                        HandleNextTime.set(210.83)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(210.83)
                        HandleNextTime.set(300.21)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(300.21)
                        HandleNextTime.set(740.11)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(740.11)
                        HandleNextTime.set(1240.90)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(1240.90)
                        HandleNextTime.set(2540.23)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(2540.23)
                        HandleNextTime.set(9240.23)
                    }
                    if ($HandleSelectedMine === 20) {
                        Cashout.set(9240.23)
                    }
                }

                if ($HandleMineCount === 6) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.30)
                        HandleNextTime.set(1.74)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.74)
                        HandleNextTime.set(2.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.35)
                        HandleNextTime.set(3.23)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(3.23)
                        HandleNextTime.set(4.52)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(4.52)
                        HandleNextTime.set(6.46)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(6.46)
                        HandleNextTime.set(9.44)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(9.44)
                        HandleNextTime.set(14.17)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(14.17)
                        HandleNextTime.set(21.89)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(21.89)
                        HandleNextTime.set(35.03)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(35.03)
                        HandleNextTime.set(58.38)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(58.38)
                        HandleNextTime.set(80.87)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(80.87)
                        HandleNextTime.set(120.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(120.23)
                        HandleNextTime.set(230.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(230.23)
                        HandleNextTime.set(440.83)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(440.83)
                        HandleNextTime.set(600.21)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(600.21)
                        HandleNextTime.set(940.11)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(940.11)
                        HandleNextTime.set(1240.90)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(1240.90)
                        HandleNextTime.set(2040.23)
                    }
                    if ($HandleSelectedMine === 19) {
                        Cashout.set(2040.23)
                    }
                }

                if ($HandleMineCount === 7) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.38)
                        HandleNextTime.set(1.94)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(1.94)
                        HandleNextTime.set(2.79)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(2.79)
                        HandleNextTime.set(4.09)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(4.09)
                        HandleNextTime.set(6.14)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(6.14)
                        HandleNextTime.set(9.44)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(9.44)
                        HandleNextTime.set(14.95)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(14.95)
                        HandleNextTime.set(24.47)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(24.47)
                        HandleNextTime.set(41.60)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(41.60)
                        HandleNextTime.set(96.40)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(96.40)
                        HandleNextTime.set(180.83)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(180.83)
                        HandleNextTime.set(230.07)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(230.07)
                        HandleNextTime.set(440.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(440.23)
                        HandleNextTime.set(690.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(690.23)
                        HandleNextTime.set(1540.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1540.23)
                        HandleNextTime.set(2800.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2800.23)
                        HandleNextTime.set(6940.20)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(6940.20)
                        HandleNextTime.set(12840.11)
                    }
                    if ($HandleSelectedMine === 18) {
                        Cashout.set(12840.11)
                    }
                }

                if ($HandleMineCount === 8) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.46)
                        HandleNextTime.set(2.18)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.18)
                        HandleNextTime.set(3.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(3.35)
                        HandleNextTime.set(5.26)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(5.26)
                        HandleNextTime.set(8.50)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(8.50)
                        HandleNextTime.set(14.17)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(14.17)
                        HandleNextTime.set(24.47)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(24.47)
                        HandleNextTime.set(44.05)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(44.05)
                        HandleNextTime.set(83.20)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(83.20)
                        HandleNextTime.set(166.40)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(166.40)
                        HandleNextTime.set(210.83)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(210.83)
                        HandleNextTime.set(440.07)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(440.07)
                        HandleNextTime.set(740.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(740.23)
                        HandleNextTime.set(1140.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(1140.23)
                        HandleNextTime.set(1740.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1740.23)
                        HandleNextTime.set(2240.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2240.23)
                        HandleNextTime.set(2740.23)
                    }
                    if ($HandleSelectedMine === 17) {
                        Cashout.set(2740.23)
                    }
                }

                if ($HandleMineCount === 9) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.55)
                        HandleNextTime.set(2.48)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.48)
                        HandleNextTime.set(4.07)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(4.07)
                        HandleNextTime.set(6.88)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(6.88)
                        HandleNextTime.set(12.04)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(12.04)
                        HandleNextTime.set(21.89)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(21.89)
                        HandleNextTime.set(41.60)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(41.60)
                        HandleNextTime.set(83.20)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(83.20)
                        HandleNextTime.set(120.99)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(120.99)
                        HandleNextTime.set(238.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(238.11)
                        HandleNextTime.set(450.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(450.23)
                        HandleNextTime.set(640.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(640.23)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1940.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(1940.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 16) {
                        Cashout.set(2440.23)
                    }
                }

                if ($HandleMineCount === 10) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.65)
                        HandleNextTime.set(2.83)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(2.83)
                        HandleNextTime.set(5.00)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(5.00)
                        HandleNextTime.set(9.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(9.17)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(17.52)
                        HandleNextTime.set(38.38)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(38.38)
                        HandleNextTime.set(97.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2440.23)
                        HandleNextTime.set(5440.23)
                    }
                    if ($HandleSelectedMine === 15) {
                        Cashout.set(5440.23)
                    }
                }

                if ($HandleMineCount === 11) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.77)
                        HandleNextTime.set(3.26)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(3.26)
                        HandleNextTime.set(6.26)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(6.26)
                        HandleNextTime.set(12.51)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(12.51)
                        HandleNextTime.set(26.27)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(26.27)
                        HandleNextTime.set(58.38)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(58.38)
                        HandleNextTime.set(97.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if ($HandleSelectedMine === 14) {
                        Cashout.set(2440.23)
                    }
                }

                if ($HandleMineCount === 12) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(1.90)
                        HandleNextTime.set(3.81)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(3.81)
                        HandleNextTime.set(7.96)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(7.96)
                        HandleNextTime.set(17.52)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(17.52)
                        HandleNextTime.set(40.87)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(40.87)
                        HandleNextTime.set(102.17)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(102.17)
                        HandleNextTime.set(277.33)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(277.33)
                        HandleNextTime.set(831.99)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(831.99)
                        HandleNextTime.set(1220.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1220.23)
                        HandleNextTime.set(1740.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(1740.11)
                        HandleNextTime.set(2140.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(2140.23)
                        HandleNextTime.set(3440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(3440.23)
                        HandleNextTime.set(4440.23)
                    }
                    if ($HandleSelectedMine === 13) {
                        Cashout.set(4440.23)
                    }
                }

                if ($HandleMineCount === 13) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.06)
                        HandleNextTime.set(4.50)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(4.50)
                        HandleNextTime.set(10.35)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(10.35)
                        HandleNextTime.set(25.30)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(25.30)
                        HandleNextTime.set(58.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(58.00)
                        HandleNextTime.set(89.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(89.03)
                        HandleNextTime.set(121.19)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(121.19)
                        HandleNextTime.set(240.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(240.78)
                        HandleNextTime.set(420.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(420.23)
                        HandleNextTime.set(640.11)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if ($HandleSelectedMine === 12) {
                        Cashout.set(1440.23)
                    }
                }

                if ($HandleMineCount === 14) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.25)
                        HandleNextTime.set(5.40)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(5.40)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(45.39)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(45.39)
                        HandleNextTime.set(78.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(78.00)
                        HandleNextTime.set(121.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(121.03)
                        HandleNextTime.set(210.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(210.09)
                        HandleNextTime.set(540.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(540.78)
                        HandleNextTime.set(740.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(740.23)
                        HandleNextTime.set(940.23)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(940.23)
                        HandleNextTime.set(1240.23)
                    }
                    if ($HandleSelectedMine === 11) {
                        Cashout.set(1240.23)
                    }
                }

                if ($HandleMineCount === 15) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(891.03)
                        HandleNextTime.set(790.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1990.09)
                        HandleNextTime.set(940.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(2840.78)
                        HandleNextTime.set(5740.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(5740.23)
                        HandleNextTime.set(10040.23)
                    }
                    if ($HandleSelectedMine === 10) {
                        Cashout.set(10040.23)
                    }
                }

                if ($HandleMineCount === 16) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(491.03)
                        HandleNextTime.set(790.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(790.09)
                        HandleNextTime.set(940.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(940.78)
                        HandleNextTime.set(1240.23)
                    }
                    if ($HandleSelectedMine === 9) {
                        Cashout.set(1240.23)
                    }
                }

                if ($HandleMineCount === 17) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(3.09)
                        HandleNextTime.set(10.61)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(10.61)
                        HandleNextTime.set(40.66)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(40.66)
                        HandleNextTime.set(178.91)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(178.91)
                        HandleNextTime.set(229.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(329.20)
                        HandleNextTime.set(396.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(796.23)
                        HandleNextTime.set(590.09)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(1390.09)
                        HandleNextTime.set(740.78)
                    }
                    if ($HandleSelectedMine === 8) {
                        Cashout.set(2340.78)
                    }
                }

                if ($HandleMineCount === 18) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(3.54)
                        HandleNextTime.set(14.14)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(14.14)
                        HandleNextTime.set(65.06)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(65.06)
                        HandleNextTime.set(357.81)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(357.81)
                        HandleNextTime.set(589.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(589.20)
                        HandleNextTime.set(779.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(779.23)
                        HandleNextTime.set(909.23)
                    }
                    if ($HandleSelectedMine === 7) {
                        Cashout.set(909.23)
                    }
                }

                if ($HandleMineCount === 19) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(4.13)
                        HandleNextTime.set(19.8)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(19.8)
                        HandleNextTime.set(113.85)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(113.85)
                        HandleNextTime.set(209.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(209.17)
                        HandleNextTime.set(389.20)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(389.20)
                        HandleNextTime.set(679.23)
                    }
                    if ($HandleSelectedMine === 6) {
                        Cashout.set(679.23)
                    }
                }

                if ($HandleMineCount === 20) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(4.95)
                        HandleNextTime.set(29.70)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(29.70)
                        HandleNextTime.set(227.7)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(227.7)
                        HandleNextTime.set(409.17)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(609.17)
                        HandleNextTime.set(729.27)
                    }
                    if ($HandleSelectedMine === 5) {
                        Cashout.set(1409.27)
                    }
                }

                if ($HandleMineCount === 21) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(6.19)
                        HandleNextTime.set(49.50)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(49.50)
                        HandleNextTime.set(119.77)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(119.77)
                        HandleNextTime.set(319.77)
                    }
                    if ($HandleSelectedMine === 4) {
                        Cashout.set(319.77)
                    }
                }

                if ($HandleMineCount === 22) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(8.24)
                        HandleNextTime.set(99.00)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(99.00)
                        HandleNextTime.set(129.77)
                    }
                    if ($HandleSelectedMine === 3) {
                        Cashout.set(129.77)
                    }
                }

                if ($HandleMineCount === 23) {
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(12.38)
                        HandleNextTime.set(297.00)
                    }
                    if ($HandleSelectedMine === 2) {
                        Cashout.set(297.00)
                    }
                }

                if ($HandleMineCount === 24) {
                    if ($HandleSelectedMine === 0) {
                        Cashout.set(1.00)
                        HandleNextTime.set(24.75)
                    }
                    if ($HandleSelectedMine === 1) {
                        Cashout.set(24.75)
                    }
                }
                HandlemineGems.set(ins.length)
                HandleIsAlive.set(pops.active)
                let waskj = [{
                    mines: pops.mine,
                    bet_amount: pops.bet_amount,
                    bet_token_name: pops.bet_token_name,
                    bet_token_img: pops.bet_token_img
                }]
                betDetails.set(waskj[0]);
                HandleMineCount.set(pops.mine);
            }
        })
        .catch((error) => {
            console.log(error)
        })
    await historyMines()
})

onMount(async () => {
    $handleAuthToken && handleActivemies()
})


const handleAutoSet = ((erii)=>{
    $skown.forEach(element => {
        if(erii.id === element.id){
            if(element.active){
                element.active = false
            }
            else{
                element.active = true
            }
            skown.set($skown)
        }
    });
})


</script>

{#if isHelp}
    <Help on:close={handleIsHelp} />
{/if}

{#if is_stats}
    <LiveStats on:close={stats} />
{/if}

{#if isSeed}
<SeedSetting on:close={hanhisSeed}/>
{/if}

{#if hisQQ}
<HistoryDetails on:close={handleDiceHistoryDetail} DgII={DgII} />
{/if}

<div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
    <div id="game-Mines" class="sc-haTkiu lmWKWf game-style-mobile sc-bOtlzW bKHexS">
        <div class="game-area">
            <div class="game-main">
                <div class="game-view">
                    <div class="sc-hoHwyw fIoiVG game-recent ">
                        <div class="recent-list-wrap">
                            {#if $handleisLoggin}
                                {#if $mine_history.length !== 0}
                                <div class="recent-list" style="width: 100%; transform: translate(0%, 0px);">
                                {#each $mine_history.slice(-6) as  dice } 
                                    <button  on:click={()=> handleDiceHistoryDetail(dice)} class="recent-item" style="width: 30%;">
                                        <div class={`item-wrap ${dice.has_won ? "is-win" : "is-lose"} `}>{(parseFloat(dice.cashout)).toFixed(2)}x</div>
                                    </button>
                                {/each}
                                </div> 
                                {:else}
                                <div class="empty-item">
                                    <p>Game results will be displayed here.</p>
                                </div>
                                {/if}
                                {:else}
                                <div class="empty-item">
                                    <p>Game results will be displayed here.</p>
                                </div>
                            {/if}
                        </div>
                    </div>
                    <div class="sc-hcupDf dqwCNK game-box sc-jHwEXd fhyNel">
                        <div class="sc-gWDJhD hnBJiv mine-stage">
                            {#if $HandleWinning}
                            <div class="sc-lcdCCa gPUDNx win-wrap" style="opacity: 1; transform: none;">
                                <div class="sc-jrQzAO iodxXo amount">
                                    <span style="transform: scale(0.963115);">{(parseFloat($HandleWinning.profit)).toFixed(5)} {$HandleWinning.bet_token_name}</span>
                                </div>
                                <div class="odds">{(parseFloat($HandleWinning.cashout)).toFixed(2)}×</div>
                            </div>
                            {/if}
                            {#if !$is_automode}
                            <div class="grids-wrap ">
                                {#if $HandleIsAlive}
                                {#each $minesStore as ui}
                                <button disabled={ui.active && !ui.mine} on:pointerenter={playSound} on:click={()=>handleMines(ui)} class={`sc-kiwPtn gmXWCK grid-item ${false && "unselected"}`}>
                                    {#if ui.active && !ui.mine}
                                    <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                                        <div class="sc-cdJjGe gsYRFa graph"></div>
                                    </div>
                                    {:else if ui.active && ui.mine }
                                    <div class="sc-cdJjGe sc-eSJyHI gsYRFa eojQMr effect end mines3"></div>
                                    {:else}
                                    <div class={`sc-cdJjGe gsYRFa`}>
                                    </div>
                                {/if}
                                </button>
                                {/each}
                                {:else if $HandleHas_won && !$HandleIsAlive}
                                {#each $minesStore as ui}
                                <button disabled={true} class={`sc-kiwPtn gmXWCK grid-item ${!ui.active && !ui.mine && "unselected"} `}>
                                    {#if !ui.active && !ui.mine}
                                    <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                                        <div class="sc-cdJjGe gsYRFa graph"></div>
                                    </div>
                                    {:else if !ui.active && ui.mine }
                                    <div class="sc-lcDUFh gywOmz mines4"></div>
                                    {:else if ui.active && ui.mine }
                                    <div class="sc-cdJjGe sc-eSJyHI gsYRFa eojQMr effect end mines3"></div>
                                    {:else}
                                    <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                                        <div class="sc-cdJjGe gsYRFa graph"></div>
                                    </div>
                                    {/if}
                                </button>
                                {/each}
                                {:else}
                                {#each $skown as ui}
                                <button disabled class={`sc-kiwPtn gmXWCK grid-item unselected`}>
                                    {#if ui.active && !ui.mine}
                                    <div class={`sc-cdJjGe gsYRFa qLoBl`}>
                                        <div class="sc-cdJjGe gsYRFa graph"></div>
                                    </div>
                                    {:else if ui.active && ui.mine }
                                    <div class="sc-cdJjGe sc-eSJyHI gsYRFa eojQMr effect end mines3"></div>
                                    {:else}
                                    <div class={`sc-cdJjGe gsYRFa`}></div>
                                    {/if}
                                </button>
                                {/each}
                                {/if}
                            </div>
                            {:else}
                            <div class="grids-wrap ">
                                {#each $skown as ui}
                                    <button on:pointerenter={playSound} on:click={()=> handleAutoSet(ui)} class={`sc-kiwPtn gmXWCK grid-item unselected`}>
                                        {#if ui.active}
                                            <div class="sc-ljMRFG sc-gDGHff liFRVf qfGmA"></div>
                                        {:else}
                                            <div class={`sc-cdJjGe gsYRFa`}></div>
                                        {/if}
                                    </button>
                                {/each}
                            </div>
                            {/if}
                            <div class="sc-ieCETs dOthbb">
                                <div class=" star-item index1"></div>
                                <div class=" star-item index2"></div>
                                <div class="active  star-item index3"></div>
                                <div class="active  star-item index4"></div>
                            </div>
                        </div>
                        <div class="sc-gLDmcm gnjHQb"><span>House Edge 1%</span></div>
                        <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"><defs><linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#31343C"></stop><stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop></linearGradient></defs><g opacity=".899"><path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path></g></svg>
                    </div>  
                </div>
                <div id="Mines-control-0" class="sc-hLVXRe cYiOHZ game-control style-mobile">
                    <div class="sc-iwjdpV ikWSlH radio game-control-switch">
                        <button on:click={()=>handleTabs(1)} class={` ${is_manual ? "is-active" : "" }`}>
                            <div class="label">Manual</div>
                        </button>
                        <button on:click={()=>handleTabs(2)} class={` ${is_manual ? "" : "is-active"}`}>
                            <div class="label">Auto</div>
                        </button>
                    </div>
                {#if is_manual}
                    <MobileManualControllers />
                {:else}
                    <MobileAutoController />
                {/if}
                <div class="game-actions">
                    <button on:click={()=> handleSoundState()} class={`action-item ${playPlayb ? "active" : ""} `}>
                    </button>
                    <button on:click={()=> playBackground()} class={`action-item ${$soundHandler ? "active" : ""} `}>
                
                    </button>
                    <button on:click={hanhisSeed} class="action-item  " id="set_seed">
                    </button>
                    <button on:click={stats} class="action-item  ">
                    </button>
                    <button on:click={handleIsHelp} class="action-item  ">
                    </button>
                </div>
            </div>
            </div>
        </div>

        <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
            <div class="tabs-navs">
                <button on:click={()=>handleAllbet(1)} class={`tabs-nav ${is_allbet && "is-active"}`}>All Bets</button>
                <button on:click={()=>handleAllbet(2)} class={`tabs-nav ${is_mybet && "is-active"}`}>My Bets</button>
                <button on:click={()=>handleAllbet(3)} class={`tabs-nav ${is_contest && "is-active"}`}>Contest</button>
                {#if is_allbet}
                <div class="bg" style={`left: 0%; right: 66.6667%;`}></div>
                {:else if is_mybet}
                <div class="bg" style="left: 33.3333%; right: 33.3333%;"></div>
                {:else if is_contest}
                <div class="bg" style="left: 66.6667%; right: 0%;"></div>
               {/if}
            </div>
        {#if is_allbet}
          <Allbet />
          {:else if is_mybet}
          <Mybet />
          {/if}
        </div>
    </div>
</div>

<style>
.qfGmA {
    background-color: rgb(57, 14, 113) !important;
}
.liFRVf {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}
.liFRVf::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}


.fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}

.gywOmz {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}

.unselected .sc-lcDUFh::before {
    opacity: 0.3;
}

.gywOmz::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}

.gywOmz.mines4::before {
    background-image: url(https://static.nanogames.io/assets/mines-4.8900a7b8.png);
    background-size: 85%;
}

.unselected .sc-lcDUFh::before {
    opacity: 0.3;
}

.boGbAB::before {
    background-image: url(https://static.nanogames.io/assets/gems.f2815a6d.png);
}

.slider-tip {
    box-sizing: border-box;
    position: absolute;
    top: -3.625rem;
    height: 2.65rem;
    width: 2.65rem;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    color: var(--original-text);
    background-color: rgb(37, 39, 43);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px;
    border-radius: 0.425rem;
}

.recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
}

.dqwCNK {
    position: relative;
}

.gnjHQb {
    position: absolute;
    z-index: 2;
    right: 1.5rem;
    bottom: 1.25rem;
    font-weight: 500;
    min-width: 8.75rem;
    padding: 0px 1.125rem;
    border-radius: 1.125rem;
    height: 2.25rem;
    line-height: 2.25rem;
color: var(--text-6);    background-color: var(--card-bg-11);
}

.dice-animate::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    background: url(https://static.nanogames.io/assets/win.449738f6.png) center center / 100% 100% no-repeat;
    animation: rotation 5s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.fIoiVG .empty-item {
    display: flex;
    width: 100%;
    height: 100%;
color: var(--text-6);    background-color: rgba(122, 128, 140, 0.15);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.375rem;
}

.fIoiVG .empty-item>p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fIoiVG .recent-list {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
}

.fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
    animation: pull 1s;

}

.fIoiVG .is-lose {
color: var(--text-6);    background-color: rgba(122, 128, 140, 0.15);
}

.fIoiVG .is-win {
    color: var(--text-5);
    background-color: rgb(67, 179, 9);
}

.fIoiVG .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 1.375rem;
    font-weight: bold;
}

.dqwCNK {
    position: relative;
}

.fPOXr {
    -webkit-box-flex: 1;
    flex-grow: 1;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    place-content: center;
    position: relative;
    /* padding: 80px 10%; */
    min-height: 37.5rem;
}

.dqwCNK {
    position: relative;
}

.fPOXr {
    flex: 1 1 0%;
    background: url(https://static.nanogames.io/assets/bg.136f0468.png) center center / cover no-repeat;
}

.hnBJiv {
    height: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}

.hnBJiv .grids-wrap {
    margin: 4.375rem auto 0px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem 0.625rem;
    max-width: 33.75rem;
    padding: 1.25rem;
    border-radius: 0.375rem;
    background: rgb(17, 18, 20);
    position: relative;
}

.hnBJiv .grids-wrap::before {
    content: "";
    position: absolute;
    width: 5.3125rem;
    height: 0.875rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAzFBMVEUAAABISEgVGRUaHBkfJR8VGRUYHBgXGhcXGxcZHRkVGRUXGxcXGhcYGxcoLiorKysXGhYXGxcaHRoZGxkfHx8aHhoXGhYaHhoaHhoXGxc6QTwaHxoXGhc4QDwXGxc8REA7RD8VGRUaHRk1PTk9Rz8XGhY1OzgbIBs1PDk9Rj89RT89RUEYGxcVGBUaHRktMzEpLiw4Pzs6Qj02PTk0Ozc8RD8+R0EyODUwNjMjJycmKikSFhMsMS8cHx8gIyQeIyAeISIZGx0kKSUhJSPPEBtlAAAALHRSTlMABPUlGo7ww4NT1c6pQDQJvJtgKxH3tnc76IpuWVNI7sB14bQl/umzlmLZeiYE94IAAAJsSURBVFjD1dT7d5owFAfwIFRBFMVHfdXHdH1tEdjqqoIZLfz//9NIfFzC0sh+wLrP4TQeven9nlwACXwdTl8/wXT29Gw1UH7KePbrc7yyv98W38cakoED/XkFprPhs6XID/THlVi5ftg17VG9Iz7Qhxfe2o389cvF0ZjOyfxRN1T+QBcrzsaLCCuNNqtL2kHMlG7FNhREacOHdYrrxcQBsbu+iOR0jjEJvcCgNmojarzYgJ0fO38JvU3BuJic8uPIQgeWewTlgrBuIeR9y7c97j3QcnfuzvNh5mJkm5S5tJauCfhMVwq+92ISRr6X/V28X5yz2+z1FcR78rbhPiZ2cHI5qc/dcvr7yMspOuxxwtg/X82aQx8WU4eYKRUslpx+X+n0Bhg40FnCJ5hhbVnerXQbwWndil5vILGyICZ75PYaozlOCbf+GSEWcOgN8QECVaY+YTHFVJwxt1sqV6G0qjiFxFsJCCrMK9rrYMa8mXSQlIHBfdW+04RFJtcy/ChofGgrzxtmotKYBosppy+XeImTS14+qdCaYy0mv0UIq6FKzTJdjvWZlQZ+O+2qGRrK5Zb+4wq7R+T6tBK8k7cMgk8/1pLmmqEneSXoAdN9dZRTNXnQIaaUVbvnWr2TNAhaheaqcXMmL3b6KCcF/QPVLvFHewJBS1+U7K47aV4LFSN50fKnAkFh9oDLWyldKCq8u8zsDJeC2efP20YFqu+fsGAZJBesMPsceWG/iooBN21wAHFh9ue1W0negFFRwTr6IOBIZi/Ja5YCDRWu0apCUMns5ZR2A13CpMlystlfvbZdYrP/L2g6zL5QfwACtwc45qOUEQAAAABJRU5ErkJggg==) center center / contain no-repeat;
    z-index: 1;
    top: -0.125rem;
    left: 0px;
}

.iuMTMb {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
}

.hLmIlp:hover {
    background-color: rgb(50, 53, 60);
    margin-bottom: 2px;
    transition: all 0.5s ease;
}

.hnBJiv.graph {
    background-color: rgb(33, 35, 40);
    inset: 2px;
}

.hnBJiv .win-wrap {
    z-index: 11;
}

.gPUDNx {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    width: 16.875rem;
    height: 7.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -3.75rem 0px 0px -8.4375rem;
    border-radius: 0.5rem;
    border: 0.3125rem solid rgb(49, 52, 60);
    background-color: rgb(35, 38, 43);
}

.gPUDNx .amount {
    color: rgb(67, 179, 9);
    font-size: 1.875rem;
    font-weight: bold;
    width: 90%;
}

.iodxXo {
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
}

.iodxXo>span {
    transform-origin: center center;
    display: inline-block;
    white-space: nowrap;
}

.gPUDNx .odds {
    font-size: 1.625rem;
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 1;
}

.hLmIlp {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}

.hLmIlp::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}

.hnBJiv .grids-wrap::after {
    content: "";
    position: absolute;
    top: -2.1875rem;
    right: 0.125rem;
    width: 11rem;
    height: 3.625rem;
    background: url(https://static.nanogames.io/assets/box-bg2.75183067.png) center center / contain no-repeat;
}

.gmXWCK {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
}

.gsYRFa:hover {
    margin-bottom: 2px;
}

.gsYRFa {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}

.gsYRFa::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}

.hnBJiv {
    height: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}

.hnBJiv .grids-wrap {
    margin: 4.375rem auto 0px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem 0.625rem;
    max-width: 33.75rem;
    padding: 1.25rem;
    border-radius: 0.375rem;
    background: rgb(17, 18, 20);
    position: relative;
}

.hnBJiv .grids-wrap::before {
    content: "";
    position: absolute;
    width: 5.3125rem;
    height: 0.875rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAzFBMVEUAAABISEgVGRUaHBkfJR8VGRUYHBgXGhcXGxcZHRkVGRUXGxcXGhcYGxcoLiorKysXGhYXGxcaHRoZGxkfHx8aHhoXGhYaHhoaHhoXGxc6QTwaHxoXGhc4QDwXGxc8REA7RD8VGRUaHRk1PTk9Rz8XGhY1OzgbIBs1PDk9Rj89RT89RUEYGxcVGBUaHRktMzEpLiw4Pzs6Qj02PTk0Ozc8RD8+R0EyODUwNjMjJycmKikSFhMsMS8cHx8gIyQeIyAeISIZGx0kKSUhJSPPEBtlAAAALHRSTlMABPUlGo7ww4NT1c6pQDQJvJtgKxH3tnc76IpuWVNI7sB14bQl/umzlmLZeiYE94IAAAJsSURBVFjD1dT7d5owFAfwIFRBFMVHfdXHdH1tEdjqqoIZLfz//9NIfFzC0sh+wLrP4TQeven9nlwACXwdTl8/wXT29Gw1UH7KePbrc7yyv98W38cakoED/XkFprPhs6XID/THlVi5ftg17VG9Iz7Qhxfe2o389cvF0ZjOyfxRN1T+QBcrzsaLCCuNNqtL2kHMlG7FNhREacOHdYrrxcQBsbu+iOR0jjEJvcCgNmojarzYgJ0fO38JvU3BuJic8uPIQgeWewTlgrBuIeR9y7c97j3QcnfuzvNh5mJkm5S5tJauCfhMVwq+92ISRr6X/V28X5yz2+z1FcR78rbhPiZ2cHI5qc/dcvr7yMspOuxxwtg/X82aQx8WU4eYKRUslpx+X+n0Bhg40FnCJ5hhbVnerXQbwWndil5vILGyICZ75PYaozlOCbf+GSEWcOgN8QECVaY+YTHFVJwxt1sqV6G0qjiFxFsJCCrMK9rrYMa8mXSQlIHBfdW+04RFJtcy/ChofGgrzxtmotKYBosppy+XeImTS14+qdCaYy0mv0UIq6FKzTJdjvWZlQZ+O+2qGRrK5Zb+4wq7R+T6tBK8k7cMgk8/1pLmmqEneSXoAdN9dZRTNXnQIaaUVbvnWr2TNAhaheaqcXMmL3b6KCcF/QPVLvFHewJBS1+U7K47aV4LFSN50fKnAkFh9oDLWyldKCq8u8zsDJeC2efP20YFqu+fsGAZJBesMPsceWG/iooBN21wAHFh9ue1W0negFFRwTr6IOBIZi/Ja5YCDRWu0apCUMns5ZR2A13CpMlystlfvbZdYrP/L2g6zL5QfwACtwc45qOUEQAAAABJRU5ErkJggg==) center center / contain no-repeat;
    z-index: 1;
    top: -0.125rem;
    left: 0px;
}

.iVvsfA {
    position: absolute;
    inset: 0px;
    z-index: 0;
    overflow: hidden;
    border-radius: 0.25rem;
}

.qLoBl {
    background-color: rgb(57, 14, 113);
}

.gsYRFa {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}

.gsYRFa::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}

.gsYRFa.graph {
    background-color: rgb(33, 35, 40);
    inset: 2px;
}

.qLoBl .graph {
    background-color: rgb(57, 14, 113);
}

.qLoBl .graph::before {
    background-image: url(https://static.nanogames.io/assets/gems.f2815a6d.png);
    animation: 300ms ease 0s 1 normal none running gemsZoomIn;
    background-size: contain;
    transform: scale(0.8);
}

.gsYRFa.mines3::before {
    background-image: url(https://static.nanogames.io/assets/mines-3.b54d60a7.png);
    background-size: 85%;
}

.unselected .sc-cdJjGe::before {
    opacity: 0.3;
}



















.kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background: var(--tab-nav-bg);
}
.fIoiVG .recent-list {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
}


.fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
    animation: pull 1s ;

}

.fIoiVG .is-lose {
color: var(--text-6);    background-color: rgba(122, 128, 140, 0.15);
}
.fIoiVG .is-win {
    color: var(--text-5);
    background-color: rgb(67, 179, 9);
}
.fIoiVG .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 1.375rem;
    font-weight: bold;
}

.lmWKWf .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
}
.kQfmQV .tabs-nav.is-active {
    color: var(--text-5);
    font-weight: bold;
}
.kQfmQV .tabs-navs .bg.is-reverse {
    transition: left 0.2s ease-out 0s, right 0.3s ease-out 0s;
}
.kQfmQV .tabs-navs .bg {
    border-radius: 1.125rem;
    background-image: linear-gradient(to left, rgb(85, 89, 102), rgb(85, 89, 102), rgb(88, 174, 20));
    opacity: 0.4;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: right 0.2s ease-out 0s, left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
}

.lmWKWf .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
}
.lmWKWf .game-tabs {
    margin-top: 2.5rem;
}

.lmWKWf .game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
}
.lmWKWf .game-actions::before {
    content: "";
    flex: 1 1 0%;
}
.lmWKWf .action-item {
    cursor: pointer;
    margin-right: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.lmWKWf .action-item:hover{
    background: rgba(128, 128, 128, 0.164);
    padding: 5px;
    border-radius: 50%;
}
.ePAxUv {
    margin-top: 4rem;
}
.lmWKWf.game-style-mobile {
    padding: 0.625rem;
}
.lmWKWf {
    min-height: 90vh;
}
.bKHexS .game-area .game-main {
    min-height: 52.5rem;
}
.lmWKWf .game-main {
    position: relative;
    border-radius: 1.25rem;
    background: var(--affiliate-bg);
}
.lmWKWf.game-style-mobile .game-view {
    width: 100%;
    overflow: hidden;
    min-width: 100%;
    border-radius: 1.25rem 1.25rem 0px 0px;
}
.fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}
.fIoiVG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
}
.fIoiVG .empty-item {
    display: flex;
    width: 100%;
    height: 100%;
color: var(--text-6);    background-color: rgba(122, 128, 140, 0.15);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.375rem;
}
.fIoiVG .empty-item > p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.fhyNel {
    flex: 1 1 0%;
    background: url(https://static.nanogames.io/assets/bg.136f0468.png) center center / cover no-repeat;
}
.dqwCNK {
    position: relative;
}
.CftaC {
    height: 90%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}
.CftaC .grids-wrap {
    margin: 4.375rem auto 0px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 0.5rem 0.625rem;
    max-width: 33.75rem;
    padding: 1.25rem;
    border-radius: 0.375rem;
    background: rgb(17, 18, 20);
    position: relative;
}
.CftaC .grids-wrap::before {
    content: "";
    position: absolute;
    width: 5.3125rem;
    height: 0.875rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAcCAMAAADGO9TYAAAAzFBMVEUAAABISEgVGRUaHBkfJR8VGRUYHBgXGhcXGxcZHRkVGRUXGxcXGhcYGxcoLiorKysXGhYXGxcaHRoZGxkfHx8aHhoXGhYaHhoaHhoXGxc6QTwaHxoXGhc4QDwXGxc8REA7RD8VGRUaHRk1PTk9Rz8XGhY1OzgbIBs1PDk9Rj89RT89RUEYGxcVGBUaHRktMzEpLiw4Pzs6Qj02PTk0Ozc8RD8+R0EyODUwNjMjJycmKikSFhMsMS8cHx8gIyQeIyAeISIZGx0kKSUhJSPPEBtlAAAALHRSTlMABPUlGo7ww4NT1c6pQDQJvJtgKxH3tnc76IpuWVNI7sB14bQl/umzlmLZeiYE94IAAAJsSURBVFjD1dT7d5owFAfwIFRBFMVHfdXHdH1tEdjqqoIZLfz//9NIfFzC0sh+wLrP4TQeven9nlwACXwdTl8/wXT29Gw1UH7KePbrc7yyv98W38cakoED/XkFprPhs6XID/THlVi5ftg17VG9Iz7Qhxfe2o389cvF0ZjOyfxRN1T+QBcrzsaLCCuNNqtL2kHMlG7FNhREacOHdYrrxcQBsbu+iOR0jjEJvcCgNmojarzYgJ0fO38JvU3BuJic8uPIQgeWewTlgrBuIeR9y7c97j3QcnfuzvNh5mJkm5S5tJauCfhMVwq+92ISRr6X/V28X5yz2+z1FcR78rbhPiZ2cHI5qc/dcvr7yMspOuxxwtg/X82aQx8WU4eYKRUslpx+X+n0Bhg40FnCJ5hhbVnerXQbwWndil5vILGyICZ75PYaozlOCbf+GSEWcOgN8QECVaY+YTHFVJwxt1sqV6G0qjiFxFsJCCrMK9rrYMa8mXSQlIHBfdW+04RFJtcy/ChofGgrzxtmotKYBosppy+XeImTS14+qdCaYy0mv0UIq6FKzTJdjvWZlQZ+O+2qGRrK5Zb+4wq7R+T6tBK8k7cMgk8/1pLmmqEneSXoAdN9dZRTNXnQIaaUVbvnWr2TNAhaheaqcXMmL3b6KCcF/QPVLvFHewJBS1+U7K47aV4LFSN50fKnAkFh9oDLWyldKCq8u8zsDJeC2efP20YFqu+fsGAZJBesMPsceWG/iooBN21wAHFh9ue1W0negFFRwTr6IOBIZi/Ja5YCDRWu0apCUMns5ZR2A13CpMlystlfvbZdYrP/L2g6zL5QfwACtwc45qOUEQAAAABJRU5ErkJggg==) center center / contain no-repeat;
    z-index: 1;
    top: -0.125rem;
    left: 0px;
}
.iHwDhw {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
}
.iKwybw {
    position: absolute;
    inset: 0px;
    z-index: 1;
    border-radius: 0.25rem;
    background-color: rgb(33, 35, 40);
}
.iKwybw::before {
    content: "";
    position: absolute;
    inset: 0px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
}
.bvpiKa {
    position: absolute;
    left: 0px;
    bottom: -20px;
    right: 0px;
    height: 50px;
}
.bvpiKa .index1 {
    transform: translateX(-280px);
}
.bvpiKa .star-item {
    width: 0.625rem;
    height: 0.625rem;
    position: absolute;
    left: 50%;
    top: 50%;
}
.bvpiKa .index1::before {
    animation-delay: 100ms;
}
.bvpiKa .star-item::before {
    content: "";
    position: absolute;
    inset: 0px;
}
.bvpiKa .index2 {
    transform: translate(-260px, -10px);
}
.bvpiKa .active::before {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAJFJREFUGBljYEAD////5wLieDRhTC5QUSkQn8KUQRIBKuAG4ldADALySFIMTCAOUJARiMWAzCogFgWJAUEUhIKSQAUhQPwCiLGBo0DBOCDmYGJkZFwD1KMFxH1A/BOqH0S9AOJ7QMwIxHxAjABAnVVQY48gRLGwgIp0oAojsEijCgEVgtzFiiqKhQdUpIhFmAEAiABrq/Lg4u0AAAAASUVORK5CYII=) center center / contain no-repeat;
    animation: 1.5s linear 0s 1 normal both running star;
}
.CftaC .grids-wrap::after {
    content: "";
    position: absolute;
    top: -2.1875rem;
    right: 0.125rem;
    width: 11rem;
    height: 3.625rem;
    background: url(https://static.nanogames.io/assets/box-bg2.75183067.png) center center / contain no-repeat;
}
.gnjHQb {
    position: absolute;
    z-index: 2;
    right: 1.5rem;
    bottom: 1.25rem;
    font-weight: 500;
    min-width: 8.75rem;
    padding: 0px 1.125rem;
    border-radius: 1.125rem;
    height: 2.25rem;
    line-height: 2.25rem;
color: var(--text-6);    background-color: var(--card-bg-11);
}
.cYiOHZ.style-mobile {
    flex-direction: column;
}
.cYiOHZ {
    display: flex;
}
.cYiOHZ.style-mobile .game-control-switch {
    order: 2;
    margin-top: 1.25rem;
    position: relative;
}
.cYiOHZ .game-control-switch {
    display: flex;
    flex: 0 0 auto;
}
.ikWSlH {
    display: flex;
    opacity: 1;
}
.cYiOHZ.style-mobile .game-control-panel {
    padding: 0px 1.125rem;
}
.cYiOHZ .game-control-panel {
    flex: 1 1 0%;
}
.cYiOHZ .input-control {
    background-color: var(--card-bg-11);
}
.cYiOHZ.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: var(--card-bg-2);
}
.cYiOHZ.style-mobile .game-control-switch::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: var(--card-bg-2);
}
.cYiOHZ.style-mobile .game-control-switch > button {
    height: 3rem;
    border-bottom: 2px solid transparent;
}
.cYiOHZ .game-control-switch > button.is-active {
    color: var(--text-5);
    font-weight: bold;
}
.cYiOHZ .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
color: var(--text-6);}
.cYiOHZ.style-mobile .game-control-switch > button.is-active {
    border-bottom-color: rgb(67, 179, 9);
    background-image: linear-gradient(to top, rgba(123, 197, 20, 0.3), rgba(123, 197, 20, 0) 50%);
}

.cHwSyr {
    margin-bottom: 1.25rem;
}



@media screen and (max-width: 621px){
.hnBJiv .grids-wrap {
    height: 100%;
    margin: 2.5rem auto 3.75rem;
    gap: 0.3125rem 0.375rem;
}
.gmXWCK {
    width: 3.125rem;
    height: 2.8125rem;
    position: relative;
}
.gnjHQb span {
    font-size: 0.75rem;
    transform: scale(0.83);
}
}



</style>