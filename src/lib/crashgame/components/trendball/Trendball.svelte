<script>
import { goto} from "$app/navigation"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import { profileStore, handleisLoggin } from "$lib/store/profile"
import axios from "axios"
import { onMount  } from "svelte";
import {default_Wallet } from "$lib/store/coins";
import { handleAuthToken } from "$lib/store/routes";
import { game_id } from "$lib/crashgame/store"
import {useRedTrendball} from "../../trendballHook"
const { redTrendball } = useRedTrendball()
import { loadingCrash , handle_IsRed, handle_IsGreen, handle_IsMoon, handle_IsRedwinners} from "../../store"
import { error_msg  } from "$lib/crashgame/store";
let redballValue = 10.00
import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()

onMount(()=>{
    if($default_Wallet.coin_name === "USDT"){
    redballValue = (0.20).toFixed(4)
}else{
    redballValue = (100).toFixed(4)
}
})

let  is_loading = false
const handleRed = (async()=>{
    is_loading = true
    let bet_amount = redballValue
    if($handleisLoggin){
        if(parseFloat(bet_amount) > parseFloat($default_Wallet.balance)){
            error_msg.set("insufficient balance")
            is_loading = false
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        }
        else if( parseFloat(bet_amount) > 5000 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Maximum bet amount for USDT is 5,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amount) > 10000 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Maximum bet amount for PPF is 10,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amount) < 100 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Minimum bet amount for PPF is 100")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(bet_amount) < 0.10 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Minimum bet amount for USDT is 0.20")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
    }else{
        const data = {
            username: $profileStore.username,
            user_img: $profileStore.profile_image,
            game_id: $game_id,
            bet_amount: redballValue, 
            auto_cashout: 0,
            time: new Date(),
            bet_token_img: $default_Wallet.coin_image, 
            bet_token_name: $default_Wallet.coin_name,
            chance: "50.51%",
            game_type:"Red"
        }
       await axios.post(`${URL}/api/user/crash-game/red-trendball`, {
            data
        },{
            headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${$handleAuthToken}`
          }
        })
        .then((response)=>{
        let result = response.data
         let wllet = {
          coin_name: result.bet_token_name,
          coin_image:  result.bet_token_img,
          balance:  result.current_amount,
        }
        is_loading = false
        handle_IsRed.set(true)
        default_Wallet.set(wllet)
    })
    }
    }else{
        error_msg.set("You are not logged in")
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        is_loading = false
    }
})


let load_green = false
const handleGreen = async()=>{
    load_green = true
    if($handleisLoggin){
        if(parseFloat(redballValue) > parseFloat($default_Wallet.balance)){
            error_msg.set("insufficient balance")
            is_loading = false
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        }
        else if( parseFloat(redballValue) > 5000 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Maximum bet amount for USDT is 5,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(redballValue) > 10000 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Maximum bet amount for PPF is 10,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(redballValue) < 100 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Minimum bet amount for PPF is 100")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(redballValue) < 0.10 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Minimum bet amount for USDT is 0.20")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
    else{
        const data = {
        username: $profileStore.username,
        user_img: $profileStore.profile_image,
        game_id: $game_id,
        bet_amount: parseFloat(redballValue),
        auto_cashout: 0, 
        time: new Date(),
        bet_token_img: $default_Wallet.coin_image, 
        bet_token_name: $default_Wallet.coin_name,
        chance: "49.50%",
        game_type:"Green"
    }
   await axios.post(`${URL}/api/user/crash-game/red-trendball`, {
            data
        },{
            headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${$handleAuthToken}`
          }
        })
        .then((response)=>{
        let result = response.data
        let wllet = {
          coin_name: result.bet_token_name,
          coin_image:  result.bet_token_img,
          balance:  result.current_amount,
        }
        default_Wallet.set(wllet)
        load_green = false
        handle_IsGreen.set(true)
    })
    }
    }else{
        error_msg.set("You are not logged in")
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        load_green = false
    }
}

let load_greenMoon = false
const handleYellow = (async()=>{
    load_greenMoon = true
    if($handleisLoggin){
        if(parseFloat(redballValue) > parseFloat($default_Wallet.balance)){
            error_msg.set("insufficient balance")
            is_loading = false
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        }
        else if( parseFloat(redballValue) > 5000 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Maximum bet amount for USDT is 5,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(redballValue) > 10000 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Maximum bet amount for PPF is 10,000")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(redballValue) < 100 && $default_Wallet.coin_name === "PPF"){
            error_msg.set("Minimum bet amount for PPF is 100")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else if( parseFloat(redballValue) < 0.10 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Minimum bet amount for USDT is 0.20")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
    else{
        const data = {
        username: $profileStore.username,
        user_img: $profileStore.profile_image,
        game_id: $game_id,
        bet_amount: parseFloat(redballValue), 
        auto_cashout: 0,
        time: new Date(),
        bet_token_img: $default_Wallet.coin_image, 
        bet_token_name: $default_Wallet.coin_name,
        chance: "9.90%",
        game_type:"Moon"
    }
    await axios.post(`${URL}/api/user/crash-game/red-trendball`, {
            data
        },{
            headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${$handleAuthToken}`
          }
        })
        .then((response)=>{
        let result = response.data
        let wllet = {
          coin_name: result.bet_token_name,
          coin_image:  result.bet_token_img,
          balance:  result.current_amount,
        }
        default_Wallet.set(wllet)
        load_greenMoon = false
        handle_IsMoon.set(true)
    })
    }
    }else{
        error_msg.set("You are not logged in")
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        load_greenMoon = false
    }
})


const handleHalf = ((e)=>{
    if(parseFloat(redballValue) > 0){
        if(e === 1){
        redballValue = (parseFloat(redballValue) / 2).toFixed(5)
        }else{
            redballValue = (parseFloat(redballValue) * 2).toFixed(5)
        }
    }
})


let isLoadBet = false
let loop;
const handleLoadBet = (()=>{
    if(!isLoadBet){
        loop = setInterval(()=>{
        if($loadingCrash){
            setTimeout(()=>{
                handleRed()
            },500)
            clearInterval(loop)
            isLoadBet = false
        }else{
            isLoadBet = true
        }
    },10)
    }else if (isLoadBet){
        isLoadBet = false
        clearInterval(loop)
    }
})

let isLoadBetGreen = false
let loopGreen;
const handleLoadBetGreen = (()=>{
    if(!isLoadBetGreen){
        loopGreen = setInterval(()=>{
        if($loadingCrash){
            setTimeout(()=>{
                handleGreen()
            },500)
            clearInterval(loopGreen)
            isLoadBetGreen = false
        }else{
            isLoadBetGreen = true
        }
    },10)
    }else if (isLoadBetGreen){
        isLoadBetGreen = false
        clearInterval(loopGreen)
    }
})

let isLoadBetMoon = false
let loopmoon;
const handleLoadBetMoon = (()=>{
    if(!isLoadBetMoon){
        loopmoon = setInterval(()=>{
        if($loadingCrash){
            setTimeout(()=>{
                handleYellow()
            },500)
            clearInterval(loopmoon)
            isLoadBetMoon = false
        }else{
            isLoadBetMoon = true
        }
    },10)
    }else if (isLoadBetMoon){
        isLoadBetMoon = false
        clearInterval(loopmoon)
    }
})
let walletRange = 0

let is_min_max = false
const handleMinMax = (()=>{
   is_min_max = !is_min_max
})

const handleRangeSTlop = ((eui)=>{
    redballValue = (parseFloat($default_Wallet.balance)  * (walletRange / 100 )).toFixed(4)
})

const handlesjen = ((e)=>{
    redballValue = (parseFloat($default_Wallet.balance)  * (e / 100 )).toFixed(4)
    walletRange = e
})

</script>

<div class="game-control-panel">

    {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
        </div>
    {/if}   

    <div class="sc-dpAhYB cAWNwp manual-control">
        <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput">
            <div class="input-label">
                <div class="sc-hmvnCu efWjNZ label">
                    <div>Amount</div>
                </div>
                <div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="number" bind:value={redballValue}>
                <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=>handleHalf(1)}>/2</button>
                    <button on:click={()=>handleHalf(2)}>x2</button>
                    {#if is_min_max }
                    <div class="fix-layer" style="opacity: 1; transform: none;">
                       <button on:click={()=>  handlesjen(0) } style={`${walletRange === 0 ? `color:#ffff;` : ""}`} class="">Min</button>
                       <div class="sc-kLwhqv eOA-dmL slider">
                          <div class="slider-after" style="transform: scaleX(100.001001);"></div>
                            <input type="range" class="drag-block" on:input={(e)=> handleRangeSTlop(e.target.value)} bind:value={walletRange}>
                          <div class="slider-before" style="transform: scaleX(100.998999);"></div>
                       </div>
                       <button on:click={()=> handlesjen(100)} style={`${walletRange === 100 ? `color:#ffff;` : ""}`} class="">Max</button>
                    </div>
                   {/if}
                    <button on:click={handleMinMax} class="sc-ywFzA dxoLcn">
                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)" />
                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)" />
                    </button>
                </div>
            </div>
        </div>

        <div class="sc-ezbkAF kDuLvp input sc-wkwDy ifiUVY bet-item">
            <div class="input-label">
                <div>Payout</div>
                <div class="bet-payout">1.96x</div>
            </div>
            {#if !$loadingCrash && !$handle_IsRed }
                <button on:click={handleLoadBet} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button type-200 ${$handle_IsRed && "is-active"} `}>
                    <div class="button-inner">
                        <div>{isLoadBet ? "Loading..." : "Bet Red"}</div>
                         <div class="sub-txt">({isLoadBet ? "Cancel": "Next round"})</div>   
                    </div>
                </button>
            {:else}
            <button disabled={$loadingCrash && !is_loading && !$handle_IsRed ? false : true} on:click={handleRed} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button type-200 ${$handle_IsRed && "is-active"} `}>
                <div class="button-inner">
                    <div>Bet Red</div>
                    {#if !$loadingCrash && !$handle_IsRed}
                        <div class="sub-txt">(Next round)</div>   
                    {/if}
                </div>
            </button>
            {/if}

        </div>

        <div class="sc-ezbkAF kDuLvp input sc-wkwDy ifiUVY bet-item">
            <div class="input-label">
                <div>Payout</div>
                <div class="bet-payout">2x</div>
            </div>
            {#if !$loadingCrash && !$handle_IsGreen }
            <button on:click={handleLoadBetGreen} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button  ${$handle_IsGreen && "is-active"} `}>
                <div class="button-inner">
                    <div>{isLoadBetGreen ? "Loading..." : "Bet Green"}</div>
                     <div class="sub-txt">({isLoadBetGreen ? "Cancel": "Next round"})</div>   
                </div>
            </button>
        {:else}
        <button disabled={$loadingCrash && !load_green && !$handle_IsGreen ? false : true} on:click={handleGreen} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button  ${$handle_IsGreen && "is-active"} `}>
            <div class="button-inner">
                <div>Bet Green</div>
                {#if !$loadingCrash && !$handle_IsGreen}
                    <div class="sub-txt">(Next round)</div>   
                {/if}
            </div>
        </button>
        {/if}
        </div>

        <div class="sc-ezbkAF kDuLvp input sc-wkwDy ifiUVY bet-item ">
            <div class="input-label">
                <div>Payout</div>
                <div class="bet-payout">10x</div>
            </div>

            {#if !$loadingCrash && !$handle_IsMoon }
            <button on:click={handleLoadBetMoon} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button type1000 ${$handle_IsMoon && "is-active"} `}>
                <div class="button-inner">
                    <div>{isLoadBetMoon ? "Loading..." : "Bet Moon"}</div>
                     <div class="sub-txt">({isLoadBetMoon ? "Cancel": "Next round"})</div>   
                </div>
            </button>
        {:else}
        <button disabled={$loadingCrash && !isLoadBetMoon && !$handle_IsMoon ? false : true} on:click={handleYellow} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button type1000 ${$handle_IsMoon && "is-active"} `}>
            <div class="button-inner">
                <div>Bet Moon</div>
                {#if !$loadingCrash && !$handle_IsMoon}
                    <div class="sub-txt">(Next round)</div>   
                {/if}
            </div>
        </button>
        {/if}
        </div>
    </div>
</div>


<style>

 
.fix-layer {
    position: absolute;
    right: 0px;
    top: 2.875rem;
    z-index: 2;
    touch-action: pan-x;
    width: 200px;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.625rem;
    background-color: rgb(33, 35, 40);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 0px 7px 0px;
}
 .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
.eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
}
.gOLODp .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
}
.eOA-dmL {
    position: relative;
    display: flex;
    height: 0.875rem;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 0.8125rem;
    cursor: pointer;
}

.gOLODp .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
}
.eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
}

.gOLODp .fix-layer {
    position: absolute;
    right: 0px;
    top: 2.875rem;
    z-index: 2;
    touch-action: pan-x;
    width: 200px;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.625rem;
    background-color: rgb(33, 35, 40);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 0px 7px 0px;
}
.gOLODp .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
.gOLODp .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
}
.gOLODp .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
}
.gOLODp .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
}
.eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
}
.eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
}

.gOLODp .fix-layer .slider-before, .gOLODp .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
}
.eOA-dmL .slider-before {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: right center;
}
.eOA-dmL .slider-before, .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
}
.drag-block::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0px;
    /* Centers thumb on the track */
    background-color: #feffff;
    height: 1.5rem;
    width: 1rem;
    border-radius: 10px;
    cursor: grabbing;
}
.drag-block {
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: transparent;
    border-radius: 10px;
    appearance: none;
    width: 100%;
    margin: 0px;
    height: 100%;
    cursor: grab;
    -webkit-appearance: none;
}


   
.game-control-panel {
    padding: 1.25rem 1.375rem;
}
 .game-control-panel {
    flex: 1 1 0%;
}

.cAWNwp {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 2.5rem 0px 3.5rem;
}

.cAWNwp > div:first-child {
    width: 100%;
}
.gcQjQT {
    margin-top: 1rem;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.efWjNZ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
}
.gOLODp .label-amount {
    margin-left: auto;
}

.fCSgTW .input-control input {
    font-weight: bold;
}
.cYiOHZ .input-control input {
    color: rgb(245, 246, 247);
}
.gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
}
.cYiOHZ .input-control .button-group {
    margin-right: -1.125rem;
}
.fCSgTW .button-group {
    width: 8.375rem;
    position: relative;
}
.bswIvI {
    display: flex;
}
.bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}
.bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}


.ifiUVY {
    flex-basis: 30%;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-top: 1.5rem;
    margin-right: 0.625rem;
    position: relative;
}
.kDuLvp {
    margin-top: 1rem;
}
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.ifiUVY .bet-payout {
    margin-left: 0.625rem;
    color: rgb(245, 246, 247);
}
.ifiUVY .bet-button {
    height: 3rem;
    overflow: hidden;
    position: relative;
}
.gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
}
.cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;

    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}
.ifiUVY .bet-button.type-200::before {
    background-color: rgb(237, 99, 0);
}

.ifiUVY .bet-button::before {
    content: "";
    position: absolute;
    left: 0.9375rem;
    top: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border: 2px solid rgba(50, 57, 63, 0.5);
    transition: all 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    background-color: rgb(67, 179, 9);
}


.ifiUVY .bet-button.type1000::before {
    background-color: rgb(226, 180, 11);
}
/* background-color: rgb(226, 180, 11) */
.ifiUVY .bet-button::before {
    content: "";
    position: absolute;
    left: 0.9375rem;
    top: 0.75rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    border: 2px solid rgba(50, 57, 63, 0.5);
    transition: all 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    background-color: rgb(67, 179, 9);
}
.ifiUVY .bet-button .button-inner {
    flex-direction: column;
}
.ifiUVY .bet-button > div {
    position: relative;
    z-index: 2;
}
.ifiUVY .bet-button.is-active::before {
    border-width: 0px;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}
</style>