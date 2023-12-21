<script>
import { payout } from "$lib/games/ClassicDice/store/index"
import { mine_history,HandleSelectedMine, minesStore,HandleNextTime, HandlemineGems,HandleMineCount, 
    Cashout , HandleHas_won,betDetails, HandleIsAlive, HandleWinning} from "./store/index"
    import { MinesHistory } from "./hook/diceHistory";
const { historyMines } = MinesHistory()
import { onMount } from "svelte";
import { handleAuthToken } from "$lib/store/routes";
import axios from "axios";
import { handleisLoggin } from "../../store/profile";
import HistoryDetails from "./componets/historyDetails.svelte";
import win from "./audio/hit.mp3";
import wion from "./audio/glass-breaking-151256.mp3";
import cr from "./audio/click.wav";
let range = 50
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

let ishover = false
const handleRangl = ((w)=>{
    if(w === 1){
        ishover = true
    }else{
        ishover = false
    }
})

let houseEgde = 1
let game__charges = 100 / houseEgde
let game_logic;
let total_charge;

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

const handleChange = ((e)=>{
    const audio = new Audio(win);
    audio.volume = 0.5;
    audio.play();
})

let skown = [
    {id:1, active: false, mine: true},
    {id:2, active: false, mine: false},
    {id:3, active: false, mine: false},
    {id:4, active: false, mine: false},
    {id:5, active: false, mine: false},
    {id:6, active: false, mine: false},
    {id:7, active: false, mine: false},
    {id:8, active: false, mine: false},
    {id:9, active: false, mine: false},
    {id:10, active: false, mine: false},
    {id:11, active: false, mine: false},
    {id:12, active: false, mine: true},
    {id:13, active: false, mine: false},
    {id:14, active: false, mine: false},
    {id:15, active: false, mine: false},
    {id:16, active: false, mine: false},
    {id:17, active: false, mine: false},
    {id:18, active: false, mine: false},
    {id:19, active: false, mine: false},
    {id:20, active: false, mine: false},
    {id:21, active: false, mine: false},
    {id:22, active: false, mine: false},
    {id:23, active: false, mine: true},
    {id:24, active: false, mine: false},
    {id:25, active: false, mine: false},
]

const handleFubbf = (()=>{
    const audio = new Audio(wion);
    audio.volume = 0.5;
    audio.play();
})

const handleLostBet = (async(data)=>{
    mine_history.set([...$mine_history, data])
    await axios.post(`${URL}/api/user/mine-game/lost-bet`,{
        data
    },{
        headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }
    })
    .then((res)=>{
        (res.data)
    })
    .catch((error)=>{
         console.log(error)
    })
})

const handleUpdateWins = (async(data)=>{
    await axios.post(`${URL}/api/user/mine-game/update-wins`,{
        data
    },{
        headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }
})
.then((res)=>{
    (res.data)
})
.catch((error)=>{
    console.log(error)
})
})


let multiplayerEl = 1.03
let multiplier 
const handleMines = ((event)=>{
    $minesStore.forEach(element => {
        if(element.id === event.id){
            if(event.mine){
                handleFubbf()
                Cashout.set(0)
                element.active = true
                HandleIsAlive.set(false)
                HandleHas_won.set(true)
                minesStore.set($minesStore)
                handleLostBet({gameLoop:$minesStore, cashout:0})
            }
            else{
                element.active = true
                handleChange()
                HandleSelectedMine.set($HandleSelectedMine + 1)
                HandlemineGems.set($HandlemineGems - 1)
                minesStore.set($minesStore)
                handleUpdateWins($minesStore)
                if($HandleMineCount === 1){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.03)
                        HandleNextTime.set(1.08)
                    }
                     if($HandleSelectedMine === 1){
                        Cashout.set(1.08)
                        HandleNextTime.set(1.13)
                    }
                     if($HandleSelectedMine === 2){
                        Cashout.set(1.13)
                        HandleNextTime.set(1.18)
                    }
                     if($HandleSelectedMine === 3){
                        Cashout.set(1.18)
                        HandleNextTime.set(1.24)
                    }
                     if($HandleSelectedMine === 4){
                        Cashout.set(1.24)
                        HandleNextTime.set(1.3)
                    }
                     if($HandleSelectedMine === 5){
                        Cashout.set(1.3)
                        HandleNextTime.set(1.38)
                    }
                     if($HandleSelectedMine === 6){
                        Cashout.set(1.38)
                        HandleNextTime.set(1.46)
                    }
                     if($HandleSelectedMine === 7){
                        Cashout.set(1.46)
                        HandleNextTime.set(1.55)
                    }
                     if($HandleSelectedMine === 8){
                        Cashout.set(1.55)
                        HandleNextTime.set(1.65)
                    }
                     if($HandleSelectedMine === 9){
                        Cashout.set(1.65)
                        HandleNextTime.set(1.77)
                    }
                     if($HandleSelectedMine === 10){
                        Cashout.set(1.77)
                        HandleNextTime.set(1.90)
                    }
                     if($HandleSelectedMine === 11){
                        Cashout.set(1.90)
                        HandleNextTime.set(2.06)
                    }
                     if($HandleSelectedMine === 12){
                        Cashout.set(2.06)
                        HandleNextTime.set(2.25)
                    }
                     if($HandleSelectedMine === 13){
                        Cashout.set(2.25)
                        HandleNextTime.set(2.48)
                    }
                     if($HandleSelectedMine === 14){
                        Cashout.set(2.48)
                        HandleNextTime.set(2.75)
                    }
                     if($HandleSelectedMine === 15){
                        Cashout.set(2.75)
                        HandleNextTime.set(3.09)
                    }
                     if($HandleSelectedMine === 16){
                        Cashout.set(3.09)
                        HandleNextTime.set(3.54)
                    }
                     if($HandleSelectedMine === 17){
                        Cashout.set(3.54)
                        HandleNextTime.set(4.13)
                    }
                     if($HandleSelectedMine === 18){
                        Cashout.set(4.13)
                        HandleNextTime.set(4.95)
                    }
                     if($HandleSelectedMine === 19){
                        Cashout.set(4.95)
                        HandleNextTime.set(6.19)
                    }
                     if($HandleSelectedMine === 20){
                        Cashout.set(6.19)
                        HandleNextTime.set(8.25)
                    }
                     if($HandleSelectedMine === 21){
                        Cashout.set(8.25)
                        HandleNextTime.set(12.38)
                    }
                     if($HandleSelectedMine === 22){
                        Cashout.set(12.38)
                        HandleNextTime.set(24.75)
                    }
                     if($HandleSelectedMine === 23){
                        Cashout.set(24.75)
                    }
                }
                if($HandleMineCount === 2){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.08)
                        HandleNextTime.set(1.17)
                    }
                     if($HandleSelectedMine === 1){
                        Cashout.set(1.17)
                        HandleNextTime.set(1.29)
                    }
                    else if($HandleSelectedMine === 2){
                        Cashout.set(1.29)
                        HandleNextTime.set(1.41)
                    }
                    else if($HandleSelectedMine === 3){
                        Cashout.set(1.41)
                        HandleNextTime.set(1.56)
                    }
                    else if($HandleSelectedMine === 4){
                        Cashout.set(1.56)
                        HandleNextTime.set(1.74)
                    }
                    else if($HandleSelectedMine === 5){
                        Cashout.set(1.74)
                        HandleNextTime.set(1.94)
                    }
                    else if($HandleSelectedMine === 6){
                        Cashout.set(1.94)
                        HandleNextTime.set(2.18)
                    }
                    else if($HandleSelectedMine === 7){
                        Cashout.set(2.18)
                        HandleNextTime.set(2.47)
                    }
                    else if($HandleSelectedMine === 8){
                        Cashout.set(2.47)
                        HandleNextTime.set(2.83)
                    }
                    else if($HandleSelectedMine === 9){
                        Cashout.set(2.83)
                        HandleNextTime.set(3.26)
                    }
                    else if($HandleSelectedMine === 10){
                        Cashout.set(3.26)
                        HandleNextTime.set(3.81)
                    }
                    else if($HandleSelectedMine === 11){
                        Cashout.set(3.81)
                        HandleNextTime.set(4.50)
                    }
                    else if($HandleSelectedMine === 12){
                        Cashout.set(4.50)
                        HandleNextTime.set(5.40)
                    }
                    else if($HandleSelectedMine === 13){
                        Cashout.set(5.40)
                        HandleNextTime.set(6.60)
                    }
                    else if($HandleSelectedMine === 14){
                        Cashout.set(6.60)
                        HandleNextTime.set(8.25)
                    }
                    else if($HandleSelectedMine === 15){
                        Cashout.set(8.25)
                        HandleNextTime.set(12.95)
                    }
                    else if($HandleSelectedMine === 16){
                        Cashout.set(12.95)
                        HandleNextTime.set(14.14)
                    }
                    else if($HandleSelectedMine === 17){
                        Cashout.set(14.14)
                        HandleNextTime.set(19.80)
                    }
                    else if($HandleSelectedMine === 18){
                        Cashout.set(19.80)
                        HandleNextTime.set(29.70)
                    }
                    else if($HandleSelectedMine === 19){
                        Cashout.set(29.70)
                        HandleNextTime.set(49.50)
                    }
                    else if($HandleSelectedMine === 20){
                        Cashout.set(49.50)
                        HandleNextTime.set(98.99)
                    }
                    else if($HandleSelectedMine === 21){
                        Cashout.set(98.99)
                        HandleNextTime.set(296.98)
                    }
                    else if($HandleSelectedMine === 22){
                        Cashout.set(296.98)
                    }
                }
                if($HandleMineCount === 3){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.13)
                        HandleNextTime.set(1.29)
                    }
                    else if($HandleSelectedMine === 1){
                        Cashout.set(1.29)
                        HandleNextTime.set(1.48)
                    }
                    else if($HandleSelectedMine === 2){
                        Cashout.set(1.48)
                        HandleNextTime.set(1.71)
                    }
                    else if($HandleSelectedMine === 3){
                        Cashout.set(1.71)
                        HandleNextTime.set(2.00)
                    }
                    else if($HandleSelectedMine === 4){
                        Cashout.set(2.00)
                        HandleNextTime.set(2.35)
                    }
                    else if($HandleSelectedMine === 5){
                        Cashout.set(2.35)
                        HandleNextTime.set(2.79)
                    }
                    else if($HandleSelectedMine === 6){
                        Cashout.set(2.79)
                        HandleNextTime.set(3.35)
                    }
                    else if($HandleSelectedMine === 7){
                        Cashout.set(3.35)
                        HandleNextTime.set(4.07)
                    }
                    else if($HandleSelectedMine === 8){
                        Cashout.set(4.07)
                        HandleNextTime.set(5.01)
                    }
                    else if($HandleSelectedMine === 9){
                        Cashout.set(5.01)
                        HandleNextTime.set(6.26)
                    }
                    else if($HandleSelectedMine === 10){
                        Cashout.set(6.26)
                        HandleNextTime.set(7.96)
                    }
                    else if($HandleSelectedMine === 11){
                        Cashout.set(7.96)
                        HandleNextTime.set(10.35)
                    }
                    else if($HandleSelectedMine === 12){
                        Cashout.set(10.35)
                        HandleNextTime.set(13.80)
                    }
                    else if($HandleSelectedMine === 13){
                        Cashout.set(13.80)
                        HandleNextTime.set(18.98)
                    }
                    else if($HandleSelectedMine === 14){
                        Cashout.set(18.98)
                        HandleNextTime.set(27.11)
                    }
                    else if($HandleSelectedMine === 15){
                        Cashout.set(27.11)
                        HandleNextTime.set(40.67)
                    }
                    else if($HandleSelectedMine === 16){
                        Cashout.set(40.67)
                        HandleNextTime.set(65.07)
                    }
                    else if($HandleSelectedMine === 17){
                        Cashout.set(65.07)
                        HandleNextTime.set(113.87)
                    }
                    else if($HandleSelectedMine === 18){
                        Cashout.set(113.87)
                        HandleNextTime.set(227.74)
                    }
                    else if($HandleSelectedMine === 19){
                        Cashout.set(227.74)
                        HandleNextTime.set(569.35)
                    }
                    else if($HandleSelectedMine === 20){
                        Cashout.set(569.35)
                        HandleNextTime.set(2277.41)
                    }
                    else if($HandleSelectedMine === 21){
                        Cashout.set(2277.41)
                    }
                }
                if($HandleMineCount === 4){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.18)
                        HandleNextTime.set(1.41)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.41)
                        HandleNextTime.set(1.71)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(1.71)
                        HandleNextTime.set(2.09)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(2.09)
                        HandleNextTime.set(2.58)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(2.58)
                        HandleNextTime.set(3.23)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(3.23)
                        HandleNextTime.set(4.09)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(4.09)
                        HandleNextTime.set(5.26)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(5.26)
                        HandleNextTime.set(6.88)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(6.88)
                        HandleNextTime.set(9.17)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(9.17)
                        HandleNextTime.set(12.51)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(12.51)
                        HandleNextTime.set(12.51)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(17.51)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(25.30)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(37.95)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(59.63)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(99.38)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(178.89)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(357.78)
                    }
                    if($HandleSelectedMine === 18){
                        Cashout.set(834.83)
                    }
                    if($HandleSelectedMine === 19){
                        Cashout.set(2504)
                    }
                    if($HandleSelectedMine === 20){
                        Cashout.set(12440.23)
                    }
                }
                if($HandleMineCount === 5){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.24)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.56)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(2.00)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(2.59)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(3.39)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(4.52)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(6.14)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(12.04)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(17.52)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(26.27)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(40.87)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(66.41)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(113.85)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(160.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(210.83)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(300.21)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(740.11)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(1240.90)
                    }
                    if($HandleSelectedMine === 18){
                        Cashout.set(2540.23)
                    }
                    if($HandleSelectedMine === 19){
                        Cashout.set(9240.23)
                    }
                }
                if($HandleMineCount === 6){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.30)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.74)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(2.35)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(3.23)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(4.52)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(6.46)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(9.44)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(14.17)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(21.89)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(35.03)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(58.38)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(80.87)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(120.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(230.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(440.83)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(600.21)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(940.11)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(1240.90)
                    }
                    if($HandleSelectedMine === 18){
                        Cashout.set(2040.23)
                    }
                }
                if($HandleMineCount === 7){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.38)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.94)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(2.79)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(4.09)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(6.14)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(9.44)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(14.95)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(24.47)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(41.60)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(96.40)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(180.83)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(230.07)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(440.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(690.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(1540.23)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(2800.23)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(6940.20)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(12840.11)
                    }
                }


                if($HandleMineCount === 8){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.46)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(2.18)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(3.35)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(5.26)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(8.50)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(14.17)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(24.47)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(44.05)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(83.20)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(166.40)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(210.83)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(440.07)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(740.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(1140.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(1740.23)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(2240.23)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(2740.23)
                    }
                }

                if($HandleMineCount === 9){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.55)
                        HandleNextTime.set(2.48)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(2.48)
                        HandleNextTime.set(4.07)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(4.07)
                        HandleNextTime.set(6.88)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(6.88)
                        HandleNextTime.set(12.04)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(12.04)
                        HandleNextTime.set(21.89)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(21.89)
                        HandleNextTime.set(41.60)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(41.60)
                        HandleNextTime.set(83.20)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(83.20)
                        HandleNextTime.set(120.99)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(120.99)
                        HandleNextTime.set(238.11)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(238.11)
                        HandleNextTime.set(450.23)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(450.23)
                        HandleNextTime.set(640.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(640.23)
                        HandleNextTime.set(940.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(1440.23)
                        HandleNextTime.set(1940.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(1940.23)
                        HandleNextTime.set(2440.23)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(2440.23)
                    }
                }

                if($HandleMineCount === 10){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.65)
                        HandleNextTime.set(2.83)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(2.83)
                        HandleNextTime.set(5.00)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(5.00)
                        HandleNextTime.set(9.17)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(9.17)
                        HandleNextTime.set(17.52)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(17.52)
                        HandleNextTime.set(38.38)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(38.38)
                        HandleNextTime.set(97.33)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(2440.23)
                        HandleNextTime.set(5440.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(5440.23)
                    }
                }

                if($HandleMineCount === 11){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.77)
                        HandleNextTime.set(3.26)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(3.26)
                        HandleNextTime.set(6.26)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(6.26)
                        HandleNextTime.set(12.51)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(12.51)
                        HandleNextTime.set(26.27)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(26.27)
                        HandleNextTime.set(58.38)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(58.38)
                        HandleNextTime.set(97.33)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(97.33)
                        HandleNextTime.set(121.99)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(121.99)
                        HandleNextTime.set(220.23)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(220.23)
                        HandleNextTime.set(640.11)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(1440.23)
                        HandleNextTime.set(1840.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(1840.23)
                        HandleNextTime.set(2440.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(2440.23)
                    }
                }

                if($HandleMineCount === 12){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.90)
                        HandleNextTime.set(3.81)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(3.81)
                        HandleNextTime.set(7.96)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(7.96)
                        HandleNextTime.set(17.52)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(17.52)
                        HandleNextTime.set(40.87)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(40.87)
                        HandleNextTime.set(102.17)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(102.17)
                        HandleNextTime.set(277.33)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(277.33)
                        HandleNextTime.set(831.99)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(831.99)
                        HandleNextTime.set(1220.23)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(1220.23)
                        HandleNextTime.set(1740.11)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(1740.11)
                        HandleNextTime.set(2140.23)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(2140.23)
                        HandleNextTime.set(3440.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(3440.23)
                        HandleNextTime.set(4440.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(4440.23)
                    }
                }

                if($HandleMineCount === 13){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.06)
                        HandleNextTime.set(4.50)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(4.50)
                        HandleNextTime.set(10.35)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(10.35)
                        HandleNextTime.set(25.30)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(25.30)
                        HandleNextTime.set(58.00)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(58.00)
                        HandleNextTime.set(89.03)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(89.03)
                        HandleNextTime.set(121.19)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(121.19)
                        HandleNextTime.set(240.78)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(240.78)
                        HandleNextTime.set(420.23)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(420.23)
                        HandleNextTime.set(640.11)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(640.11)
                        HandleNextTime.set(940.23)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(940.23)
                        HandleNextTime.set(1440.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(1440.23)
                    }
                }

                if($HandleMineCount === 14){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.25)
                        HandleNextTime.set(5.40)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(5.40)
                        HandleNextTime.set(27.11)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(27.11)
                        HandleNextTime.set(45.39)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(45.39)
                        HandleNextTime.set(78.00)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(78.00)
                        HandleNextTime.set(121.03)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(121.03)
                        HandleNextTime.set(210.09)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(210.09)
                        HandleNextTime.set(540.78)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(540.78)
                        HandleNextTime.set(740.23)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(740.23)
                        HandleNextTime.set(940.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(940.23)
                        HandleNextTime.set(1240.23)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(1240.23)
                    }
                }

                if($HandleMineCount === 15){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(891.03)
                        HandleNextTime.set(790.09)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(1990.09)
                        HandleNextTime.set(940.78)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(2840.78)
                        HandleNextTime.set(5740.23)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(5740.23)
                        HandleNextTime.set(10040.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(10040.23)
                    }
                }

                if($HandleMineCount === 16){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.75)
                        HandleNextTime.set(8.25)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(8.25)
                        HandleNextTime.set(27.11)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(27.11)
                        HandleNextTime.set(99.39)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(99.39)
                        HandleNextTime.set(211.00)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(211.00)
                        HandleNextTime.set(491.03)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(491.03)
                        HandleNextTime.set(790.09)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(790.09)
                        HandleNextTime.set(940.78)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(940.78)
                        HandleNextTime.set(1240.23)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(1240.23)
                    }
                }

                if($HandleMineCount === 17){
                    if($HandleSelectedMine === 0){
                        Cashout.set(3.09)
                        HandleNextTime.set(10.61)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(10.61)
                        HandleNextTime.set(40.66)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(40.66)
                        HandleNextTime.set(178.91)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(178.91)
                        HandleNextTime.set(229.20)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(329.20)
                        HandleNextTime.set(396.23)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(796.23)
                        HandleNextTime.set(590.09)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(1390.09)
                        HandleNextTime.set(740.78)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(2340.78)
                    }
                }

                if($HandleMineCount === 18){
                    if($HandleSelectedMine === 0){
                        Cashout.set(3.54)
                        HandleNextTime.set(14.14)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(14.14)
                        HandleNextTime.set(65.06)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(65.06)
                        HandleNextTime.set(357.81)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(357.81)
                        HandleNextTime.set(589.20)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(589.20)
                        HandleNextTime.set(779.23)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(779.23)
                        HandleNextTime.set(909.23)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(909.23)
                    }
                }

                if($HandleMineCount === 19){
                    if($HandleSelectedMine === 0){
                        Cashout.set(4.13)
                        HandleNextTime.set(19.8)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(19.8)
                        HandleNextTime.set(113.85)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(113.85)
                        HandleNextTime.set(209.17)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(209.17)
                        HandleNextTime.set(389.20)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(389.20)
                        HandleNextTime.set(679.23)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(679.23)
                    }
                }

                if($HandleMineCount === 20){
                    if($HandleSelectedMine === 0){
                        Cashout.set(4.95)
                        HandleNextTime.set(29.70)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(29.70)
                        HandleNextTime.set(227.7)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(227.7)
                        HandleNextTime.set(409.17)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(609.17)
                        HandleNextTime.set(729.27)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(1409.27)
                    }
                }

                if($HandleMineCount === 21){
                    if($HandleSelectedMine === 0){
                        Cashout.set(6.19)
                        HandleNextTime.set(49.50)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(49.50)
                        HandleNextTime.set(119.77)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(119.77)
                        HandleNextTime.set(319.77)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(319.77)
                    }
                }

                if($HandleMineCount === 22){
                    if($HandleSelectedMine === 0){
                        Cashout.set(8.24)
                        HandleNextTime.set(99.00)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(99.00)
                        HandleNextTime.set(129.77)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(129.77)
                    }
                }

                if($HandleMineCount === 23){
                    if($HandleSelectedMine === 0){
                        Cashout.set(12.38)
                        HandleNextTime.set(297.00)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(297.00)
                    }
                }

                if($HandleMineCount === 24){
                    if($HandleSelectedMine === 0){
                        Cashout.set(24.75)
                    }
                }
                // multiplier = multiplayerEl * (24 - $HandlemineGems)
            }
        }
    });
})


const handleActivemies = (async()=>{
    await axios.get(`${URL}/api/user/mine-game/mine-init`,{
        headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }
    })
    .then((response)=>{
        let pops = response.data[0]
        if(pops){
         minesStore.set(pops.gameLoop)
        let ins = []
        let inseuy = []
        $minesStore.forEach(element => {
             if(!element.mine){
                ins.push(element)
             }
             if(element.active){
                inseuy.push(element)
             }
        })
        HandleSelectedMine.set(inseuy.length)
        if($HandleMineCount === 1){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.03)
                    }
                     if($HandleSelectedMine === 1){
                        Cashout.set(1.08)
                    }
                     if($HandleSelectedMine === 2){
                        Cashout.set(1.13)
                    }
                     if($HandleSelectedMine === 3){
                        Cashout.set(1.18)
                    }
                     if($HandleSelectedMine === 4){
                        Cashout.set(1.24)
                    }
                     if($HandleSelectedMine === 5){
                        Cashout.set(1.3)
                    }
                     if($HandleSelectedMine === 6){
                        Cashout.set(1.38)
                    }
                     if($HandleSelectedMine === 7){
                        Cashout.set(1.46)
                    }
                     if($HandleSelectedMine === 8){
                        Cashout.set(1.55)
                    }
                     if($HandleSelectedMine === 9){
                        Cashout.set(1.65)
                    }
                     if($HandleSelectedMine === 10){
                        Cashout.set(1.77)
                    }
                     if($HandleSelectedMine === 11){
                        Cashout.set(1.90)
                    }
                     if($HandleSelectedMine === 12){
                        Cashout.set(2.06)
                    }
                     if($HandleSelectedMine === 13){
                        Cashout.set(2.25)
                    }
                     if($HandleSelectedMine === 14){
                        Cashout.set(2.48)
                    }
                     if($HandleSelectedMine === 15){
                        Cashout.set(2.75)
                    }
                     if($HandleSelectedMine === 16){
                        Cashout.set(3.09)
                    }
                     if($HandleSelectedMine === 17){
                        Cashout.set(3.54)
                    }
                     if($HandleSelectedMine === 18){
                        Cashout.set(4.13)
                    }
                     if($HandleSelectedMine === 19){
                        Cashout.set(4.95)
                    }
                     if($HandleSelectedMine === 20){
                        Cashout.set(6.19)
                    }
                     if($HandleSelectedMine === 21){
                        Cashout.set(8.25)
                    }
                     if($HandleSelectedMine === 22){
                        Cashout.set(12.38)
                    }
                     if($HandleSelectedMine === 23){
                        Cashout.set(24.75)
                    }
                }
                if($HandleMineCount === 2){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.08)
                    }
                     if($HandleSelectedMine === 1){
                        Cashout.set(1.17)
                    }
                    else if($HandleSelectedMine === 2){
                        Cashout.set(1.29)
                    }
                    else if($HandleSelectedMine === 3){
                        Cashout.set(1.41)
                    }
                    else if($HandleSelectedMine === 4){
                        Cashout.set(1.56)
                    }
                    else if($HandleSelectedMine === 5){
                        Cashout.set(1.74)
                    }
                    else if($HandleSelectedMine === 6){
                        Cashout.set(1.94)
                    }
                    else if($HandleSelectedMine === 7){
                        Cashout.set(2.18)
                    }
                    else if($HandleSelectedMine === 8){
                        Cashout.set(2.47)
                    }
                    else if($HandleSelectedMine === 9){
                        Cashout.set(2.83)
                    }
                    else if($HandleSelectedMine === 10){
                        Cashout.set(3.26)
                    }
                    else if($HandleSelectedMine === 11){
                        Cashout.set(3.81)
                    }
                    else if($HandleSelectedMine === 12){
                        Cashout.set(4.50)
                    }
                    else if($HandleSelectedMine === 13){
                        Cashout.set(5.40)
                    }
                    else if($HandleSelectedMine === 14){
                        Cashout.set(6.60)
                    }
                    else if($HandleSelectedMine === 15){
                        Cashout.set(8.25)
                    }
                    else if($HandleSelectedMine === 16){
                        Cashout.set(8.25)
                    }
                    else if($HandleSelectedMine === 17){
                        Cashout.set(14.14)
                    }
                    else if($HandleSelectedMine === 18){
                        Cashout.set(19.80)
                    }
                    else if($HandleSelectedMine === 19){
                        Cashout.set(29.70)
                    }
                    else if($HandleSelectedMine === 20){
                        Cashout.set(49.50)
                    }
                    else if($HandleSelectedMine === 21){
                        Cashout.set(98.99)
                    }
                    else if($HandleSelectedMine === 22){
                        Cashout.set(296.98)
                    }
                }
                if($HandleMineCount === 3){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.13)
                    }
                    else if($HandleSelectedMine === 1){
                        Cashout.set(1.29)
                    }
                    else if($HandleSelectedMine === 2){
                        Cashout.set(1.48)
                    }
                    else if($HandleSelectedMine === 3){
                        Cashout.set(1.71)
                    }
                    else if($HandleSelectedMine === 4){
                        Cashout.set(2.00)
                    }
                    else if($HandleSelectedMine === 5){
                        Cashout.set(2.35)
                    }
                    else if($HandleSelectedMine === 6){
                        Cashout.set(2.79)
                    }
                    else if($HandleSelectedMine === 7){
                        Cashout.set(3.35)
                    }
                    else if($HandleSelectedMine === 8){
                        Cashout.set(4.07)
                    }
                    else if($HandleSelectedMine === 9){
                        Cashout.set(5.01)
                    }
                    else if($HandleSelectedMine === 10){
                        Cashout.set(6.26)
                    }
                    else if($HandleSelectedMine === 11){
                        Cashout.set(7.96)
                    }
                    else if($HandleSelectedMine === 12){
                        Cashout.set(10.35)
                    }
                    else if($HandleSelectedMine === 13){
                        Cashout.set(13.80)
                    }
                    else if($HandleSelectedMine === 14){
                        Cashout.set(18.98)
                    }
                    else if($HandleSelectedMine === 15){
                        Cashout.set(27.11)
                    }
                    else if($HandleSelectedMine === 16){
                        Cashout.set(40.67)
                    }
                    else if($HandleSelectedMine === 17){
                        Cashout.set(65.07)
                    }
                    else if($HandleSelectedMine === 18){
                        Cashout.set(113.87)
                    }
                    else if($HandleSelectedMine === 19){
                        Cashout.set(227.74)
                    }
                    else if($HandleSelectedMine === 20){
                        Cashout.set(569.35)
                    }
                    else if($HandleSelectedMine === 21){
                        Cashout.set(2277.41)
                    }
                }
               
                if($HandleMineCount === 4){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.18)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.41)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(1.71)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(2.09)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(2.58)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(3.23)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(4.09)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(5.26)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(6.88)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(9.17)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(12.51)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(17.51)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(25.30)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(37.95)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(59.63)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(99.38)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(178.89)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(357.78)
                    }
                    if($HandleSelectedMine === 18){
                        Cashout.set(834.83)
                    }
                    if($HandleSelectedMine === 19){
                        Cashout.set(2504)
                    }
                    if($HandleSelectedMine === 20){
                        Cashout.set(12440.23)
                    }
                }


                if($HandleMineCount === 5){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.24)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.56)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(2.00)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(2.59)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(3.39)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(4.52)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(6.14)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(12.04)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(17.52)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(26.27)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(40.87)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(66.41)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(113.85)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(160.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(210.83)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(300.21)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(740.11)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(1240.90)
                    }
                    if($HandleSelectedMine === 18){
                        Cashout.set(2540.23)
                    }
                    if($HandleSelectedMine === 19){
                        Cashout.set(9240.23)
                    }
                }

                if($HandleMineCount === 6){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.30)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.74)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(2.35)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(3.23)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(4.52)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(6.46)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(9.44)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(14.17)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(21.89)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(35.03)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(58.38)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(80.87)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(120.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(230.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(440.83)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(600.21)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(940.11)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(1240.90)
                    }
                    if($HandleSelectedMine === 18){
                        Cashout.set(2040.23)
                    }
                }

                if($HandleMineCount === 7){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.38)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(1.94)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(2.79)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(4.09)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(6.14)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(9.44)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(14.95)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(24.47)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(41.60)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(96.40)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(180.83)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(230.07)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(440.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(690.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(1540.23)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(2800.23)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(6940.20)
                    }
                    if($HandleSelectedMine === 17){
                        Cashout.set(12840.11)
                    }
                }


                if($HandleMineCount === 8){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.46)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(2.18)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(3.35)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(5.26)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(8.50)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(14.17)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(24.47)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(44.05)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(83.20)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(166.40)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(210.83)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(440.07)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(740.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(1140.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(1740.23)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(2240.23)
                    }
                    if($HandleSelectedMine === 16){
                        Cashout.set(2740.23)
                    }
                }

                if($HandleMineCount === 9){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.55)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(2.48)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(4.07)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(6.88)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(12.04)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(21.89)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(41.60)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(83.20)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(120.99)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(238.11)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(450.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(640.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(940.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(1440.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(1940.23)
                    }
                    if($HandleSelectedMine === 15){
                        Cashout.set(2440.23)
                    }
                }

                if($HandleMineCount === 10){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.65)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(2.83)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(5.00)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(9.17)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(17.52)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(38.38)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(97.33)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(121.99)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(220.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(640.11)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(940.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(1440.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(1840.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(2440.23)
                    }
                    if($HandleSelectedMine === 14){
                        Cashout.set(5440.23)
                    }
                }

                if($HandleMineCount === 11){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.77)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(3.26)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(6.26)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(12.51)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(26.27)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(58.38)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(97.33)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(121.99)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(220.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(640.11)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(940.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(1440.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(1840.23)
                    }
                    if($HandleSelectedMine === 13){
                        Cashout.set(2440.23)
                    }
                }

                if($HandleMineCount === 12){
                    if($HandleSelectedMine === 0){
                        Cashout.set(1.90)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(3.81)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(7.96)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(17.52)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(40.87)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(102.17)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(277.33)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(831.99)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(1220.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(1740.11)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(2140.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(3440.23)
                    }
                    if($HandleSelectedMine === 12){
                        Cashout.set(4440.23)
                    }
                }

                if($HandleMineCount === 13){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.06)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(4.50)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(10.35)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(25.30)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(58.00)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(89.03)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(121.19)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(240.78)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(420.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(640.11)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(940.23)
                    }
                    if($HandleSelectedMine === 11){
                        Cashout.set(1440.23)
                    }
                }

                if($HandleMineCount === 14){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.25)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(5.40)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(27.11)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(45.39)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(78.00)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(121.03)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(210.09)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(540.78)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(740.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(940.23)
                    }
                    if($HandleSelectedMine === 10){
                        Cashout.set(1240.23)
                    }
                }

                if($HandleMineCount === 15){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.75)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(8.25)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(27.11)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(99.39)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(211.00)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(491.03)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(790.09)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(940.78)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(1240.23)
                    }
                    if($HandleSelectedMine === 9){
                        Cashout.set(1640.23)
                    }
                }

                if($HandleMineCount === 16){
                    if($HandleSelectedMine === 0){
                        Cashout.set(2.75)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(8.25)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(27.11)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(99.39)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(211.00)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(491.03)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(790.09)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(940.78)
                    }
                    if($HandleSelectedMine === 8){
                        Cashout.set(1240.23)
                    }
                }

                if($HandleMineCount === 17){
                    if($HandleSelectedMine === 0){
                        Cashout.set(3.09)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(10.61)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(40.66)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(178.91)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(229.20)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(396.23)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(590.09)
                    }
                    if($HandleSelectedMine === 7){
                        Cashout.set(740.78)
                    }
                }

                if($HandleMineCount === 18){
                    if($HandleSelectedMine === 0){
                        Cashout.set(3.54)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(14.14)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(65.06)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(357.81)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(589.20)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(779.23)
                    }
                    if($HandleSelectedMine === 6){
                        Cashout.set(909.23)
                    }
                }

                if($HandleMineCount === 19){
                    if($HandleSelectedMine === 0){
                        Cashout.set(4.13)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(19.8)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(113.85)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(209.17)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(389.20)
                    }
                    if($HandleSelectedMine === 5){
                        Cashout.set(679.23)
                    }
                }

                if($HandleMineCount === 20){
                    if($HandleSelectedMine === 0){
                        Cashout.set(4.95)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(29.70)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(227.7)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(409.17)
                    }
                    if($HandleSelectedMine === 4){
                        Cashout.set(729.27)
                    }
                }

                if($HandleMineCount === 21){
                    if($HandleSelectedMine === 0){
                        Cashout.set(6.19)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(49.50)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(119.77)
                    }
                    if($HandleSelectedMine === 3){
                        Cashout.set(319.77)
                    }
                }

                if($HandleMineCount === 22){
                    if($HandleSelectedMine === 0){
                        Cashout.set(8.24)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(99)
                    }
                    if($HandleSelectedMine === 2){
                        Cashout.set(129.77)
                    }
                }

                if($HandleMineCount === 23){
                    if($HandleSelectedMine === 0){
                        Cashout.set(12.38)
                    }
                    if($HandleSelectedMine === 1){
                        Cashout.set(297.00)
                    }
                }

                if($HandleMineCount === 24){
                    if($HandleSelectedMine === 0){
                        Cashout.set(24.75)
                    }
                }
        HandlemineGems.set(ins.length)
        HandleIsAlive.set(pops.active)
    let waskj = [{
     mines: pops.mine,
      bet_amount:pops.bet_amount , 
      bet_token_name:pops.bet_token_name,
      bet_token_img:pops.bet_token_img
    }]
        betDetails.set(waskj[0]);
        HandleMineCount.set(pops.mine);
    }
    })
    .catch((error)=>{
        console.log(error)
    })
   await historyMines()
})

onMount(async()=>{
    $handleAuthToken && handleActivemies()
})

</script>

{#if hisQQ}
<HistoryDetails on:close={handleDiceHistoryDetail} DgII={DgII} />
{/if}

<div class="game-view">
    <div class="sc-hoHwyw fIoiVG game-recent ">
        <div class="recent-list-wrap">
            {#if $handleisLoggin}
                {#if $mine_history.length !== 0}
                <div class="recent-list" style="width: 100%; transform: translate(0%, 0px);">
                {#each $mine_history.slice(-6) as  dice } 
                    <button  on:click={()=> handleDiceHistoryDetail(dice)} class="recent-item" style="width: 20%;">
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

    <div class="sc-hcupDf dqwCNK game-box sc-jwQYvw fPOXr">
        <div class="sc-gLDmcm gnjHQb">
            <span>House Edge 1%</span>
        </div>

         <div class="sc-hcupDf dqwCNK game-box sc-deghWO jKOkvT">
            <div class="sc-gWDJhD hnBJiv mine-stage">
                {#if $HandleWinning}
                    <div class="sc-lcdCCa gPUDNx win-wrap" style="opacity: 1; transform: none;">
                        <div class="sc-jrQzAO iodxXo amount">
                            <span style="transform: scale(0.963115);">{(parseFloat($HandleWinning.profit)).toFixed(5)} {$HandleWinning.bet_token_name}</span>
                        </div>
                        <div class="odds">{(parseFloat($HandleWinning.cashout)).toFixed(2)}×</div>
                    </div>
                {/if}
               
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
                {#each skown as ui}
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
                <div class="sc-ieCETs dOthbb">
                    <div class=" star-item index1"></div>
                    <div class=" star-item index2"></div>
                    <div class="active  star-item index3"></div>
                    <div class="active  star-item index4"></div>
                </div>
            </div>
            <svg class="box-bg" xmlns="http://www.57896.org/2000/svg" viewBox="0 0 996 46"><defs>
                <linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#31343C"></stop>
                    <stop offset="100%" stop-color="#1E2024" stop-opacity="0"></stop>
                </linearGradient>
            </defs>
            <g opacity=".899">
            <path fill="url(#gcardBg)" fill-rule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)">
                </path>
            </g>
        </svg>
    </div>
    </div>
</div>



<style>
.fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
}
.bOVXMe {
    width: 5.75rem;
    height: 5.25rem;
    position: relative;
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
    color: rgba(153, 164, 176, 0.8);
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
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(49, 52, 60, 0.4);
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
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
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
    animation: pull 1s ;

}

.fIoiVG .is-lose {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
}
.fIoiVG .is-win {
    color: rgb(245, 246, 247);
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
.hLmIlp:hover{
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
.iodxXo > span {
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
.gsYRFa:hover{
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
</style>
