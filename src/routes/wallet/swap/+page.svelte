<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import HiOutlineSwitchVertical from "svelte-icons-pack/hi/HiOutlineSwitchVertical";
import Coins from './coins.svelte';
import { UserProfileEl } from "$lib/index"
const { handlePPDwallet, handleUSDTwallet, handlePPFwallet, handlePPLwallet } = UserProfileEl()
import { default_Wallet, coin_list } from "$lib/store/coins";
import { createEventDispatcher , onMount} from 'svelte'
let is_open = false
const handleCOins = (()=>{
    is_open =! is_open
})

onMount(async()=>{
    let usdt = await handleUSDTwallet()
    let ppd = await handlePPDwallet()
    let ppl = await handlePPLwallet()
    let ppf = await handlePPFwallet()
    coin_list.set([usdt, ppd, ppl, ppf] )
})

</script>


<div class="right-info">
    {#if is_open}
    <Coins on:close={handleCOins} />
    {/if}
   
   <div class="s1j4cqzb">
      <div class="swap-record">
      <div>You get Approximately</div>
      <div>Min:1 USDT</div>
   </div>
   <div class="input-wrap">
      <div class="ui-input s16h1zvs from-input">
         <div class="input-control">
            <input type="text" value="0">
            <button class="max-btn">Max</button>
            <button on:click={handleCOins} class="input-pre">
               <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
               <span class="currency">USDT</span>
               <Icon src={RiSystemArrowDownSLine}  size="18"  color="rgb(255, 255, 255)"   />
            </button>
         </div>
      </div>
      <div class="btn-exchange">
         <button>
            <Icon src={HiOutlineSwitchVertical}  size="18"  color="#ffff"   />
         </button>
      </div>
      <div class="ui-input s16h1zvs to-input">
         <div class="input-control">
            <input type="text" value="0">
            <button on:click={handleCOins} class="input-pre">
               <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
               <span class="currency">BCD</span>
               <Icon src={RiSystemArrowDownSLine}  size="18"  color="rgb(255, 255, 255)"   />
            </button>
         </div>
      </div>
   </div>
   <div class="balance-wrap">
      <p><span>Real Money</span>:<span class="w">0 USDT</span></p>
      <p><span>Bonus Money</span>:<span class="w">0 USDT</span></p>
   </div>
   <div class="tips">
      <div class="item time-wrap">
         <svg class="s13v8tlr cut-time" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></circle>
         </svg>1 USDT ≈ 1.00000000 BCD</div>
         <div class="item">Estimated Time* 
            <span>Seconds</span>
         </div>
         <div class="item">Swap fee: <div>
            <span>0.00000000</span>
            USDT
         </div>
      </div>
   </div>
   <button class="ui-button button-normal s-conic submit-btn" disabled="">
      <div class="button-inner">Swap Now</div>
   </button>
</div>
</div>

<style>
.right-info {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 0.25rem;
    background-color: #31343c;
    border-radius: var(--border-radius);
    padding: 1.5rem 2rem 2rem;
}
.s1j4cqzb {
    --1rv42qm: #181919;
    --1hr07om: rgba(95,105,117,.6);
    --prlp66: #f5f6fa;
    --cn5q3p: #fff;
    --he6tl4: #EAECF3;
    --p4qis: #f5f6fa;
    --qos9gx: #ffffff;
    position: relative;
    font-size: .75rem;
    max-width: 492px;
}
.s1j4cqzb .swap-record {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .875rem;
    margin-bottom: 0.375rem;
}
.s1j4cqzb .input-wrap {
    position: relative;
    border: 4px solid #2d3035;
    border-radius: var(--border-radius);
}
.s1j4cqzb .input-wrap .ui-input {
    margin-top: 0;
}
.s1j4cqzb .input-wrap .from-input {
    border-bottom: 2px solid #2d3035;
}
.s1j4cqzb .input-wrap .from-input .input-control {
    /* border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    border: none; */
    padding-left: 10px;
}
.s1orvhr .ui-input .input-control {
    height: 3rem;
    background-color: #1E2024;
    border: none;
    display: flex;
    padding-left: 10px;
}

.s16h1zvs div.input-control input {
    font-weight: 800;
    font-size: 1.25rem;
}

.ui-input .input-control input {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0;
    border: none;
    background-color: transparent;
    color: #f5f6f7;
}
 .input-pre {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    background-color: #26282C;
    min-width: 8.125rem;
    padding: 0.625rem 0.8125rem;
    border-radius: var(--border-radius);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    margin: 5px;
}
.s16h1zvs .max-btn {
    width: 3.75rem;
    border-radius: var(--border-radius);
    background-color: #26282C;
    margin: 5px;
}

.input-pre .coin-icon {
    width: 1.5rem;
    height: 1.5rem;
}
.s16h1zvs .input-pre .coin-icon {
    width: 1.75rem;
    height: 1.75rem;
    display: inline-block;
    vertical-align: top;
}
.s16h1zvs .input-pre .currency {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    margin-left: 0.6875rem;
    color: #f5f6f7;
}
.btn-exchange {
    text-align: center;
    margin: 0 auto -0.75rem;
    position: absolute;
    width: 2.25rem;
    height: 2.25rem;
    left: 50%;
    top: 50%;
    margin: -1.125rem 0 0 -1.125rem;
    z-index: 1;
    border: solid 3px #2d3035;
    background-color: #3D4049;
    border-radius: 0.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
}
.balance-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 1.125rem;
    margin-top: 1.25rem;
}
.balance-wrap p {
    margin: 0;
}
.balance-wrap p .w {
    color: #fff;
    margin-left: 0.25rem;
    font-weight: 600;
}
 .tips {
    margin: 0.75rem 0 2.5625rem;
    border-radius: var(--border-radius);
}
.tips .time-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    color: #fff;
    /* border-radius: var(--border-radius); */
    margin-bottom: 1px;
}
.tips .item {
    background-color:#26282C;
    padding: 0.5rem 0.75rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.tips .time-wrap svg {
    margin-right: 0.1875rem;
}
.s13v8tlr {
    width: 1rem;
    height: 1rem;
    -webkit-transform: rotate(-90deg) scaleX(-1);
    -ms-transform: rotate(-90deg) scaleX(-1);
    transform: rotate(-90deg) scaleX(-1);
}
.s13v8tlr circle {
    stroke: var(--primary-color);
    -webkit-transition: all 1s linear;
    transition: all 1s linear;
}
.s1j4cqzb .tips .item {
    background-color:#26282C;
    padding: 0.5rem 0.75rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.ui-button:disabled.ui-button:not(.is-loading) {
    opacity: .5;
    cursor: default;
}
.ui-button.s-conic {
    color: #fff;
    background-color: #1d803ab3;
    background-image: conic-gradient(from 1turn,rgba(88,175,16,1),rgba(29,128,58,1));
}
.s1j4cqzb .ui-button {
    width: 14rem;
    margin: 0 auto;
}
.ui-button {
    --3xr1hu: rgba(107,113,128,.8);
    display: block;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: var(--border-radius);
    height: 3rem;
    font-weight: 700;
    cursor: pointer;
    -webkit-transition: -webkit-transform .2s cubic-bezier(.36,.66,.04,1);
    -webkit-transition: transform .2s cubic-bezier(.36,.66,.04,1);
    transition: transform .2s cubic-bezier(.36,.66,.04,1);
}
</style>