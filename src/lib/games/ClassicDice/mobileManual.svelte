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
import {ServerURl } from "$lib/backendUrl"
import { onMount  } from "svelte";
import {DiceEncription} from '$lib/games/ClassicDice/store/index'
const URL = ServerURl()
import { browser } from '$app/environment';
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
let bet_amount
onMount(()=>{
    if($default_Wallet.coin_name === "USDT"){
    bet_amount = (0.20).toFixed(4)
}else{
    bet_amount = (100).toFixed(4)
}
})



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
let history 
$:{
    history  = [...$dice_history]
}


let is_loading = false
const handleRollSubmit = (async()=>{
    if(browser && window.navigator.onLine){
   $soundHandler && playSound(1)
   is_loading = true
    if($handleisLoggin){
        if( parseFloat(bet_amount)> parseFloat($default_Wallet.balance)){
        error_msg.set("Insufficient balance")
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
        else if( parseFloat(bet_amount) < 0.20 && $default_Wallet.coin_name === "USDT"){
            error_msg.set("Minimum bet amount for USDT is 0.20")
            is_loading = false
            setTimeout(()=>{
                error_msg.set('')
            },4000)
        }
        else{
            let data = {
                server_seed: $DiceEncription.server_seed,
                client_seed: $DiceEncription.client_seed,
                hash_seed: $DiceEncription.hash_seed,
                nonce:$DiceEncription.nonce,
                username: $profileStore.username,
                profile_img: $profileStore.profile_image,
                bet_amount:  parseFloat(bet_amount),
                bet_token_img: $default_Wallet.coin_image, 
                bet_token_name: $default_Wallet.coin_name ,
                chance: parseFloat($betPosition).toFixed(2),
                payout: parseFloat($payout),
                time: new Date(),
                wining_amount: parseFloat(wining_amount) -  parseFloat(bet_amount)
            }
            await axios.post(`${URL}/api/user/dice-game/bet`, {
                data
            },{
                headers:{
                    Authorization: `Bearer ${$handleAuthToken}`
                }
            }).then(res =>{
                let r = {
                    client_seed: res.data.client_seed,
                    server_seed:res.data.client_seed,
                    hash_seed:res.data.hash,
                    nonce:res.data.nonce + 1,
                }
                dice_history.set(history)
                DiceEncription.set(r)
                HandleDicePoint.set((parseFloat(res.data.point)).toFixed(2))
                is_loading = false
                if(parseFloat($betPosition) > parseFloat($HandleDicePoint)){
                    let wallet = {
                        coin_name: $default_Wallet.coin_name ,
                        coin_image: $default_Wallet.coin_image,
                        balance:  (parseFloat(data.wining_amount) + parseFloat($default_Wallet.balance)).toFixed(4)
                    }
                    default_Wallet.set(wallet)
                    $soundHandler &&  playSound(2)
                    HandleHas_won.set(true)
                    history.push({ ...data,has_won:true, cashout:res.data.point, profit:parseFloat(data.wining_amount), token:$default_Wallet.coin_name})
                }else{
                    let wallet = {
                        coin_name: $default_Wallet.coin_name ,
                        coin_image: $default_Wallet.coin_image,
                        balance: (parseFloat($default_Wallet.balance) - parseFloat(data.bet_amount)).toFixed(4)
                    }
                    default_Wallet.set(wallet)
                    HandleHas_won.set(false)
                    history.push({...data,has_won:false, cashout:res.data.point, profit:0, token:$default_Wallet.coin_name})
                }
            })
        }
    }else{
        error_msg.set('You are not Logged in')
        is_loading = false
        setTimeout(()=>{
            error_msg.set('')
        },4000)
    }
}
else{
    error_msg.set('Error in network connection')
        is_loading = false
        setTimeout(()=>{
            error_msg.set('')
    },4000)
}
})


</script>

<div class="game-control-panel"> 
    {#if $error_msg}
    <div style="background-color:crimson;" class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
    </div>
   {/if}
    <div class="sc-juEPzu lgTgT">
        <button disabled={is_loading} on:click={handleRollSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button">
            {#if is_loading}
            <div class="button-inner">Loading....</div>
            {:else}
            <div class="button-inner">Roll Now</div>
            {/if}
        </button>
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
            <!-- <div class="label-amount">0.00034783 USD</div> -->
            </div>
            <div class="input-control">
                <input type="number" bind:value={bet_amount}>
                {#if $handleisLoggin}
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                {:else}
                    <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                {/if}
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> dive()}>/2</button>
                    <button on:click={()=> mult()}>x2</button>
                    <button class="sc-cAhXWc cMPLfC">
                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                    </button>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF gWrsXy input sc-fvxzrP gOLODp" disabled="">
            <div class="input-label">Win Amount
                <!-- <div class="label-amount">0.00067516 USD</div> -->
            </div>
            <div class="input-control">
                <input type="number" disabled bind:value={wining_amount}>
                {#if $handleisLoggin}
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                    {:else}
                    <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
.game-control-panel {
    padding: 0px 1.125rem;
}
.game-control-panel {
    flex: 1 1 0%;
}
.lgTgT .bet-button {
    margin: 1.25rem 0px;
}

</style>
