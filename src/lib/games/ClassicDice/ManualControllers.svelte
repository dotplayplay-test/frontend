<script>
import {default_Wallet} from "$lib/store/coins"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import BsExclamationCircle from "svelte-icons-pack/bs/BsExclamationCircle";
import { payout, isbetLoadingBtn, betPosition } from "./store";
import { handleAuthToken } from "$lib/store/routes"
import { profileStore,handleisLoggin } from "$lib/store/profile"
import {  HandleDicePoint ,dice_history, HandleHas_won } from "../ClassicDice/store/index"
import { error_msg } from "./store/index"
import {  soundHandler } from "../../games/ClassicDice/store/index"
import axios from "axios";
import cr from "./audio/click.wav"
import win from "./audio/mixkit-achievement-bell-600.wav"

let max_profit_tips = false
let Handlemax_profit_tips = ((e)=>{
    if(e === 1){
        max_profit_tips = true
    }else{
        max_profit_tips = false
    }
})

let wining_amount = '' ;
let bet_amount = 10

$:{
    wining_amount = (bet_amount * $payout).toFixed(4)
}

const dive = (()=>{
    bet_amount = (bet_amount / 2).toFixed(4)
})

const mult = (()=>{
    bet_amount = (bet_amount * 2).toFixed(4)
})


function playSound(e) {
    if(e === 1){
        const audio = new Audio(cr);
        audio.volume = 0.05;
        audio.play();
    }else{
        const audio = new Audio(win);
        audio.volume = 0.05;
        audio.play();
    }
}

const handleRollSubmit = (async()=>{
   $soundHandler && playSound(1)
    if($handleisLoggin){
        if( parseFloat(bet_amount)> parseFloat($default_Wallet.balance)){
        error_msg.set("insufficient balance")
         setTimeout(()=>{
            error_msg.set('')
        },4000)
        }else{
            const data = {
                username: $profileStore.username,
                user_img: $profileStore.profile_image,
                bet_amount:  parseFloat(bet_amount),
                bet_token_img: $default_Wallet.coin_image, 
                bet_token_name: $default_Wallet.coin_name ,
                chance: $betPosition,
                payout: $payout,
                wining_amount: parseFloat(wining_amount) -  parseFloat(bet_amount)
            }
            await axios.post('http://localhost:8000/api/user/dice-game/bet', {
                sent_data: data
            },{
                headers:{
                    Authorization: `Bearer ${$handleAuthToken}`
                }
            }).then(res =>{
                isbetLoadingBtn.set(false)
                dice_history.set(res.data.history)
                default_Wallet.set(res.data.wallet)
                HandleDicePoint.set(res.data.point)
                let prev = res.data.history[res.data.history.length - 1]
                if(prev.has_won){
                    $soundHandler &&  playSound(2)
                    HandleHas_won.set(true)
                }else{
                    HandleHas_won.set(false)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }else{
        error_msg.set('You are not Logged in')
        setTimeout(()=>{
            error_msg.set('')
        },4000)
    }
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
                <input type="number" bind:value={bet_amount}>
                {#if $handleisLoggin}
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                {:else}
                    <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp_logo.png">
                {/if}
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> dive()}>/2</button>
                    <button on:click={()=> mult()}>x2</button>
                    <button class="sc-cAhXWc cMPLfC">
                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="min" />
                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="max" />
                    </button>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF gWrsXy input sc-fvxzrP gOLODp" disabled="">
            <div class="input-label">
                Win Amount
                <div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="number" disabled bind:value={wining_amount}>
                {#if $handleisLoggin}
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                    {:else}
                    <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp_logo.png">
                {/if}
            </div>
        </div>
        <button disabled={$isbetLoadingBtn} on:click={handleRollSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button">
            {#if $isbetLoadingBtn}
            <div class="button-inner">Loading....</div>
            {:else}
            <div class="button-inner">Roll Now</div>
            {/if}
        </button>
    </div>
</div>

<style>

</style>
