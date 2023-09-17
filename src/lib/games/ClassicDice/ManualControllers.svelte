<script>
import {default_Wallet} from "$lib/store/coins"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import BsExclamationCircle from "svelte-icons-pack/bs/BsExclamationCircle";
import { payout, isbetLoadingBtn, betPosition } from "./store";
import { DiceHook } from "../../games/ClassicDice/hook/index"
import { profileStore,handleisLoggin } from "$lib/store/profile"
import { goto } from "$app/navigation";
const { playdice } = DiceHook()

let max_profit_tips = false
let Handlemax_profit_tips = ((e)=>{
    if(e === 1){
        max_profit_tips = true
    }else{
        max_profit_tips = false
    }
})

let wining_amount = '' ;
let bet_amount = (10).toFixed(4)

$:{
    wining_amount = (bet_amount * $payout).toFixed(4)
}

const handleRollSubmit = (()=>{
    if($handleisLoggin){
        if(parseInt(bet_amount) > parseInt($default_Wallet.balance)){
        alert("insufficient balance")
        }else{
            const data = {
                username: $profileStore.username,
                user_img: $profileStore.profile_image,
                bet_amount,
                bet_token_img: $default_Wallet.coin_image, 
                bet_token_name: $default_Wallet.coin_name ,
                chance: $betPosition,
                payout: $payout,
                wining_amount:parseInt(wining_amount) - parseInt(bet_amount)
            }
            playdice(data)
        }
    }else{
        goto('/login')
    }
})

</script>

<div class="game-control-panel">
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
                                    <span class="amount-str">5000.<span class="suffix">00000</span>
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
                <input type="text" bind:value={bet_amount}>
                <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                <div class="sc-kDTinF bswIvI button-group">
                    <button on:click={()=> bet_amount /= 2}>/2</button>
                    <button on:click={()=> bet_amount *= 2}>x2</button>
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
                <input type="text" disabled bind:value={wining_amount}>
                <img class="coin-icon" alt="" src={$default_Wallet.coin_image}></div>
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
