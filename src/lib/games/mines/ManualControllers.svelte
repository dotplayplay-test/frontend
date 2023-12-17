<script>
import {default_Wallet} from "$lib/store/coins"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import BsExclamationCircle from "svelte-icons-pack/bs/BsExclamationCircle";
import { payout , minesStore, betDetails, Cashout } from "../mines/store/index";
import { handleAuthToken } from "$lib/store/routes"
import { handleisLoggin } from "$lib/store/profile"
import { error_msg } from "./store/index"
import {  soundHandler,mine_history,HandleSelectedMine,HandleNextTime, MinesEncription,HandleHas_won,HandleMineCount, HandlemineGems,HandleWinning,  HandleIsAlive} from "$lib/games/mines/store/index"
import axios from "axios";
import successSound from "./audio/success-1-6297.mp3"
import { ServerURl } from "$lib/backendUrl"
import { onMount } from "svelte";
const URL = ServerURl()

let max_profit_tips = false
let Handlemax_profit_tips = ((e)=>{
    if(e === 1){
        max_profit_tips = true
    }else{
        max_profit_tips = false
    }
})

let wining_amount = '' ;
let bet_amount = 0.000027


onMount(()=>{
    if($default_Wallet.coin_name === "USDT"){
        bet_amount = (0.2).toFixed(8)
    }else{
        bet_amount = (100).toFixed(8)
    }
})



$:{
    wining_amount = (bet_amount * $payout).toFixed(9)
}

const dive = (()=>{
    bet_amount = (bet_amount / 2).toFixed(9)
})

const mult = (()=>{
    bet_amount = (bet_amount * 2).toFixed(9)
})


function HandleWinningSound(e) {
    const audio = new Audio(successSound);
    audio.volume = 1;
    audio.play();
}


let jufy = false
const handleDspo = (()=>{
    jufy =! jufy
})

let vyfx = [
    {id:1, active: true},
    {id:2, active: false},
    {id:3, active: false},
    {id:4, active: false},
    {id:5, active: false},
    {id:6, active: false},
    {id:7, active: false},
    {id:8, active: false},
    {id:9, active: false},
    {id:10, active: false},
    {id:11, active: false},
    {id:12, active: false},
    {id:13, active: false},
    {id:14, active: false},
    {id:15, active: false},
    {id:16, active: false},
    {id:17, active: false},
    {id:18, active: false},
    {id:19, active: false},
    {id:20, active: false},
    {id:21, active: false},
    {id:22, active: false},
    {id:23, active: false},
    {id:24, active: false},
] 
let activeMIne = {}
vyfx.forEach(element => {
    if(element.active){
        activeMIne = element
    }
});

const handleActiveMines = ((els)=>{
    vyfx.forEach(element => {
    if(element.id === els.id){
        activeMIne = element
        element.active = true
        vyfx = vyfx
    }else{
        element.active = false
    }
});
handleDspo()
})
let multiplayerEl = 1.03
let multiplier 
let cm;
$:{
    multiplier = multiplayerEl * (25 - $HandlemineGems)
}


let uuyd = false
let none = 1
let is_loading = false
const handleDpojb = (async()=>{
     // if(browser && window.navigator.onLine){
        is_loading = true
        if($handleisLoggin){
            if( $default_Wallet.coin_name !== "USDT" && $default_Wallet.coin_name !== "PPF"){
                error_msg.set("Select another coin")
                is_loading = false
                setTimeout(()=>{
                    error_msg.set('')
                },4000)
            }
        else{
            if( parseFloat(bet_amount)> parseFloat($default_Wallet.balance)){
                error_msg.set("Insufficient balance")
                is_loading = false
                setTimeout(()=>{
                    error_msg.set('')
                },4000)
            }  
            else if( parseFloat(bet_amount) > 5000 && $default_Wallet.coin_name === "USDT"){
                error_msg.set("Maximum bet amount for USDT is 5000")
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
            else if( parseFloat(bet_amount) < 0.20 && $default_Wallet.coin_name === "USDT"){
                error_msg.set("Minimum bet amount for USDT is 0.20")
                 is_loading = false
                setTimeout(()=>{
                    error_msg.set('')
                },4000)
            }
            else{
                let data = {
                    mines: activeMIne.id,
                    bet_amount:  parseFloat(bet_amount),
                    bet_token_img: $default_Wallet.coin_image, 
                    bet_token_name: $default_Wallet.coin_name ,
                    token_balance: $default_Wallet.balance,
                    client_seed: $MinesEncription.client_seed,
                    server_seed: $MinesEncription.server_seed,
                    hash_seed: $MinesEncription.hash_seed,
                    nonce: $MinesEncription.nonce + none
                }
                await axios.post(`${URL}/api/user/mine-game/mine-initialize`, {
                    data
                },{
                    headers:{
                    Authorization: `Bearer ${$handleAuthToken}`
                }
                })
                .then((response)=>{
                    minesStore.set(response.data.daajs)
                    none += 1
                    let ins = []
                    let inseuy = []
                    HandleWinning.set("")
                    $minesStore.forEach(element => {
                        if(!element.mine){
                            ins.push(element)
                        }
                        if(element.active){
                            inseuy.push(element)
                        }
                    })
                    HandleSelectedMine.set(inseuy.length)
                    HandleMineCount.set(response.data.waskj[0].mines)
                    default_Wallet.set(response.data.skjb)
                    HandleIsAlive.set(true)
                    HandlemineGems.set(ins.length)
                    betDetails.set(response.data.waskj[0])
                    is_loading = false
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
        }
        } 
         else{
            error_msg.set('You are not Logged in')
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
})


const handleCashout = (async()=>{
    let data = {
        gamaLoop: $minesStore,
        bet_amount:parseFloat($betDetails.bet_amount),
        bet_token_img: $betDetails.bet_token_img,
        bet_token_name: $betDetails.bet_token_name,
        cashout:$Cashout,
        profit: parseFloat($betDetails.bet_amount) * $Cashout,
        has_won: true,
        time: new Date(),
     }
     await axios.post(`${URL}/api/user/mine-game/cashout`, {
        data
    },{
        headers:{
        Authorization: `Bearer ${$handleAuthToken}`
    }
    })
    .then((response)=>{
        HandleWinningSound()
        Cashout.set(0)
        default_Wallet.set(response.data.skjb)
        let iuss = response.data.data
        let jks = {
            profit: iuss.profit, 
            cashout:iuss.cashout,
            bet_token_name:iuss.bet_token_name
        }
        mine_history.set([...$mine_history, data])
        HandleWinning.set(jks)
        HandleIsAlive.set(false)
        HandleHas_won.set(true)
    })
    .catch((error)=>{
        console.log(error)
    })
})

let is_min_max = false;
  const handleMinMax = () => {
    is_min_max = !is_min_max;
};

let walletRange = 0;
  const handleRangeSTlop = (eui) => {
    bet_amount = (parseFloat($default_Wallet.balance) * (eui / 100)).toFixed(4);
    if ($default_Wallet.coin_name === "USDT") {
      if (bet_amount < 0.1) {
        bet_amount = (0.1).toFixed(4);
      } else if (bet_amount > 2000) {
        bet_amount = (2000).toFixed(4);
      }
    } else {
      if (bet_amount < 100) {
        bet_amount = (100).toFixed(4);
      } else if (bet_amount > 5000) {
        bet_amount = (5000).toFixed(4);
      }
    }
  };

  const handlesjen = (e) => {
    bet_amount = (parseFloat($default_Wallet.balance) * (e / 100)).toFixed(4);
    walletRange = e;
    if ($default_Wallet.coin_name === "USDT") {
      if (bet_amount < 0.1) {
        bet_amount = (0.1).toFixed(4);
      } else if (bet_amount > 2000) {
        bet_amount = (2000).toFixed(4);
      }
    } else {
      if (bet_amount < 100) {
        bet_amount = (100).toFixed(4);
      } else if (bet_amount > 5000) {
        bet_amount = (5000).toFixed(4);
      }
    }
  };


</script>

<div class="game-control-panel" style="margin-top: 30px;">
    {#if $error_msg}
    <div style="background-color:crimson;" class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
    </div>
 {/if}   

    <div class="sc-juEPzu lgTgT">
        <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput">
            <div class="input-label">
                <div class="sc-hmvnCu efWjNZ label">
                    <div>Amount</div>
                    <div class="max-profit">
                        <button on:mouseleave={()=>Handlemax_profit_tips(2)} on:mouseenter={()=>Handlemax_profit_tips(1)} class="sc-gsDKAQ hxODWG icon" >
                            <Icon src={BsExclamationCircle}  size="15"  color="rgb(67, 179, 9)"  title="" />
                        </button>
                        {#if max_profit_tips}
                        <div class="tip">
                            <span class="tit">Max Profit:&nbsp;</span>
                            <div class="sc-Galmp erPQzq coin notranslate">
                                <div class="amount">
                                    <span class="amount-str">5000.<span class="suffix">00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/if}
                    </div>
                </div>
                <div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                {#if $HandleIsAlive}
                    <input type="number" readonly bind:value={$betDetails.bet_amount}>
                    {:else}
                    <input type="number" bind:value={bet_amount}>
                {/if}
            {#if $handleisLoggin}
                {#if $HandleIsAlive}
                    <img class="coin-icon" alt="" src={$betDetails.bet_token_img}>
                    {:else}
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                {/if}  
                {:else}
                    <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                {/if}
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> dive()}>/2</button>
                    <button on:click={()=> mult()}>x2</button>

                    {#if is_min_max}
                    <div class="fix-layer" style="opacity: 1; transform: none;">
                      <button
                        on:click={() => handlesjen(0)}
                        style={`${walletRange === 0 ? `color:#ffff;` : ""}`}
                        class="">Min</button
                      >
                      <div class="sc-kLwhqv eOA-dmL slider">
                        <div
                          class="slider-after"
                          style="transform: scaleX(100.001001);"
                        ></div>
                        <input
                          type="range"
                          class="drag-block"
                          on:input={(e) => handleRangeSTlop(e.target.value)}
                          bind:value={walletRange}
                        />
                        <div
                          class="slider-before"
                          style="transform: scaleX(100.998999);"
                        ></div>
                      </div>
                      <button
                        on:click={() => handlesjen(100)}
                        style={`${walletRange === 100 ? `color:#ffff;` : ""}`}
                        class="">Max</button
                      >
                    </div>
                  {/if}

                    <button  on:click={handleMinMax} class="sc-cAhXWc cMPLfC">
                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"   />
                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                    </button>

                </div>
            </div>
        </div>
        <div class="sc-ezbkAF gcQjQT input ">
            <div class="input-label">Mines</div>
            <div class="input-control">
                <div class="sc-jJoQJp gOHquD select is-open sc-bnOPBZ ewilmB">
                    <button disabled={$HandleIsAlive} on:click={handleDspo} class="select-trigger">
                    {activeMIne.id}
                    {#if $minesStore.length < 1}
                    <div class="arrow ">
                        <Icon src={RiSystemArrowRightSLine}  size="20"  color="rgba(153, 164, 176, 0.6)"  />
                    </div>
                    {/if}
                </button>
                {#if jufy}
                <div class="sc-hiCibw iVwWcQ select-options-wrap" style="opacity: 1; top: 100%; transform: none;">
                    <div class="sc-dkPtRN jScFby scroll-view select-options len-24">
                        {#each vyfx as io }
                        <button on:click={()=>handleActiveMines(io)} class={`select-option ${io.active ? "active" : ""}`}>{io.id}</button>
                        {/each}
                    </div>
                </div>
                {/if}
            </div>
        </div>
    </div>

    {#if $HandleIsAlive}
        <div class="preview-wrap">
            <div class="sc-ezbkAF gcQjQT input ">
                <div class="input-label">Gems</div>
                <div class="input-control">
                    <input type="text" readonly value={$HandlemineGems}>
                </div>
            </div>
            <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp">
                <div class="input-label">Profit on Next Tile({(multiplier).toFixed(2)}x)
                    <div class="label-amount">0 USD</div>
                </div>
                <div class="input-control">
                    <input type="text" readonly value={(parseFloat($betDetails.bet_amount) *multiplier).toFixed(8)}>
                    <img class="coin-icon" alt="" src={$betDetails.bet_token_img}>
                </div>
            </div>
            <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp">
                <div class="input-label">Total profit({ (parseFloat($Cashout)).toFixed(2)}x)
                    <div class="label-amount">0 USD</div>
                </div>
                <div class="input-control">
                    <input type="text" readonly value={ $Cashout === 0 ? (parseFloat($betDetails.bet_amount)).toFixed(8) : (parseFloat($betDetails.bet_amount)  * $Cashout).toFixed(8) }>
                    <img class="coin-icon" alt="" src={$betDetails.bet_token_img}>
                </div>
            </div>
            <!-- <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-big pick-button">
                <div class="button-inner">Pick a Tile Randomly</div>
            </button> -->
        </div>
        {/if}
        {#if $HandleIsAlive}
        <button disabled={$Cashout === 0} on:click={handleCashout} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button">
            <div class="button-inner">Cash out</div>
        </button>
        {:else}
        <button on:click={handleDpojb} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button">
            <div class="button-inner">Roll Now</div>
        </button>
        {/if}
    </div>
</div>

<style>


.input-control:focus-within {
    border: 1px solid var(--primary-color);
  }

  .fCSgTW .fix-layer {
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

  .fCSgTW .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
  }
  .fCSgTW .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
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
  .eOA-dmL {
    position: relative;
    display: flex;
    height: 0.875rem;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 0.8125rem;
    cursor: pointer;
  }
  .fCSgTW .fix-layer .slider-after {
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
  .eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
  }

  .fCSgTW .fix-layer .slider-before,
  .fCSgTW .fix-layer .slider-after {
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
  .eOA-dmL .slider-before,
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }

.input-control {
    border-color: transparent;
}
.ewilmB .select-trigger {
    background-color: transparent;
    width: 100%;
}
.input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
}
.ewilmB {
    flex: 1 1 0%;
    height: 100%;
    margin: 0px -1.375rem;
}
.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}
.ewilmB .select-trigger {
    background-color: transparent;
}
.select-trigger {
    font-weight: bold;
}
.gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}
.gOHquD.is-open .select-options-wrap {
    pointer-events: auto;
}
.iVwWcQ {
    position: absolute;
    padding: 0.3125rem 0px;
    width: 100%;
    left: 0px;
    z-index: 2;
    pointer-events: none;
}
.iVwWcQ .select-options {
    border-radius: 1.25rem;
    padding: 0.125rem 0.375rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
    height: auto;
    max-height: 16.25rem;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.iVwWcQ .select-option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
    width: 100%;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
}
.iVwWcQ .select-option:hover{
    background-color: rgba(75, 75, 75, 0.874)(61, 54, 54);
}
.iVwWcQ .select-options:not(.len-1) > .active {
    border-color: rgba(91, 174, 28, 0.4);
}
.iVwWcQ .select-option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
}
.iVwWcQ .select-options:not(.len-1) > .active::after {
    content: "";
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    top: 50%;
    margin-top: -0.25rem;
    right: 0.625rem;
    background-color: rgb(67, 179, 9);
    box-shadow: rgba(91, 174, 28, 0.15) 0px 0px 0px 0.3125rem;
}
.gcQjQT {
    margin-top: 1rem;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    font-size: 13.5px;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
 .input-control {
    border-color: transparent;
}
</style>

