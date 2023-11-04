<script>
import { goto} from "$app/navigation"
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import { profileStore, handleisLoggin } from "$lib/store/profile"
import axios from "axios"
import {default_Wallet } from "$lib/store/coins";
import { handleAuthToken } from "$lib/store/routes";
import { game_id } from "$lib/crashgame/store"
import {useRedTrendball} from "../../trendballHook"
const { redTrendball } = useRedTrendball()
import { loadingCrash , handle_IsRed, handle_IsGreen, handle_IsMoon, handle_IsRedwinners} from "../../store"
import { error_msg  } from "$lib/crashgame/store";


let redballValue = 10
if($default_Wallet.coin_name === "USDT"){
    redballValue = (0.10).toFixed(4)
}else{
    redballValue = (100).toFixed(4)
}

    import {ServerURl} from "$lib/backendUrl"
    const URL = ServerURl()
    
    let  is_loading = false
    const handleRed = (async()=>{
        is_loading = true
        let bet_amount = redballValue
        if($handleisLoggin){
            if(bet_amount > $default_Wallet.balance ){
                error_msg.set("insufficient balance")
             setTimeout(()=>{
                error_msg.set('')
            },4000)
            is_loading = false
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
             setTimeout(()=>{
                error_msg.set('')
            },4000)
            load_green = false
        }else{
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
            if(parseFloat(redballValue) > $default_Wallet.balance ){
                error_msg.set("insufficient balance")
             setTimeout(()=>{
                error_msg.set('')
            },4000)
            load_greenMoon = false
        }else{
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
            redballValue = (parseFloat(redballValue) / 2).toFixed(2)
            }else{
                redballValue = (parseFloat(redballValue) * 2).toFixed(2)
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
    
</script>


<div>
    {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
        </div>
        </div>
    {/if}   

    <div class="game-control-panel">
        <div class="sc-bOtlzW hNwTbf manual-control">
            <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-cAhXWc lnBinR game-coininput">
                <div class="input-label">
                    <div class="sc-gsFzgR bxrMFn label">
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
                            <button class="sc-gqtqkP gfnHxc">
                                <Icon src={RiSystemArrowUpSLine}  size="17"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                                <Icon src={RiSystemArrowDownSLine}  size="17"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="sc-ezbkAF kDuLvp input sc-jFkwbb gAiddS bet-item">
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
                <div class="sc-ezbkAF kDuLvp input sc-jFkwbb gAiddS bet-item">
                    <div class="input-label">
                        <div>Payout</div>
                        <div class="bet-payout">2x</div>
                    </div>
                    {#if !$loadingCrash && !$handle_IsGreen }
                    <button on:click={handleLoadBetGreen} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button ${$handle_IsGreen && "is-active"} `}>
                        <div class="button-inner">
                            <div>{isLoadBetGreen ? "Loading..." : "Bet Green"}</div>
                             <div class="sub-txt">({isLoadBetGreen ? "Cancel": "Next round"})</div>   
                        </div>
                    </button>
                {:else}
                <button disabled={$loadingCrash && !load_green && !$handle_IsGreen ? false : true} on:click={handleGreen} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button ${$handle_IsGreen && "is-active"} `}>
                    <div class="button-inner">
                        <div>Bet Green</div>
                        {#if !$loadingCrash && !$handle_IsGreen}
                            <div class="sub-txt">(Next round)</div>   
                        {/if}
                    </div>
                </button>
                {/if}
                </div>
                <div class="sc-ezbkAF kDuLvp input sc-jFkwbb gAiddS bet-item">
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
</div>

<style>
.kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.gAiddS .bet-payout {
    margin-left: 0.625rem;
    color: rgb(245, 246, 247);
}
.gAiddS .bet-button.type-200::before {
    background-color: rgb(237, 99, 0);
}
.gAiddS .bet-button::before {
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
.gAiddS .bet-button.is-active::before {
    border-width: 0px;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
}
.gAiddS .bet-button.type1000::before {
    background-color: rgb(226, 180, 11);
}
.gAiddS .bet-button .button-inner {
    flex-direction: column;
}
.gAiddS .bet-button > div {
    position: relative;
    z-index: 2;
}
.gAiddS .bet-button {
    height: 3rem;
    overflow: hidden;
    position: relative;
}
.gAiddS .bet-button::before {
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
.jcwJKv .input-control .button-group {
    margin-right: -1.125rem;
}
.button-group {
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
    display: flex;
    flex-direction: column;
    padding-left: 9px;
}



</style>