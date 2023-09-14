<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import { profileStore } from "$lib/store/profile"
import {default_Wallet } from "$lib/store/coins"
import { game_id} from "$lib/crashgame/store"
import {useRedTrendball} from "../../trendballHook"
const { redTrendball } = useRedTrendball()

let redballValue = 1.0000001
let isRed = false
const handleRed = (()=>{
    if(isGreen || isYellow){
        alert("is up")
    }else{
        const data = {
            username: $profileStore.username,
            user_img: $profileStore.profile_image,
            game_id: $game_id,
            bet_amount: redballValue, 
            bet_token_img: $default_Wallet.coin_image, 
            bet_token_name: $default_Wallet.coin_name,
            chance: "50.51%"
        }
        redTrendball(data)
        isRed = true
    }
})

let isGreen = false
const handleGreen = ()=>{
    if(isRed || isYellow){
        alert("is up")
    }else{
        isGreen = true
    }
}

let isYellow = false
const handleYellow = (()=>{
    if(isGreen || isRed){
        alert("is up")
    }else{
        isYellow = true
    }
})

</script>

<div class="game-control-panel">
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
                    <button>/2</button>
                    <button>x2</button>
                    <button class="sc-ywFzA dxoLcn">
                        <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                        <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  title="arror" />
                    </button>
                </div>
            </div>
        </div>

        <div class="sc-ezbkAF kDuLvp input sc-wkwDy ifiUVY bet-item">
            <div class="input-label">
                <div>Payout</div>
                <div class="bet-payout">1.96x</div>
            </div>
            <button on:click={handleRed} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button type-200 ${isRed && "is-active"} `}>
                <div class="button-inner">
                    <div>Bet Red</div>
                </div>
            </button>
        </div>

        <div class="sc-ezbkAF kDuLvp input sc-wkwDy ifiUVY bet-item">
            <div class="input-label">
                <div>Payout</div>
                <div class="bet-payout">2x</div>
            </div>
            <button on:click={handleGreen} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button type200 ${isGreen && "is-active"}`}>
                <div class="button-inner">
                    <div>Bet Green</div>
                    <div class="sub-txt">(Next round)</div>
                </div>
            </button>
        </div>

        <div class="sc-ezbkAF kDuLvp input sc-wkwDy ifiUVY bet-item ">
            <div class="input-label">
                <div>Payout</div>
                <div class="bet-payout">10x</div>
            </div>
            <button on:click={handleYellow} class={`sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal bet-button type1000 ${isYellow && "is-active"}`}> 
                <div class="button-inner">
                    <div>Bet Moon</div>
                    <div class="sub-txt">(Next round)</div>
                </div>
            </button>
        </div>
    </div>
</div>


<style>
   
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