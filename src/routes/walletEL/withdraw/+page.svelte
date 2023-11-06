<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import BsQuestionCircleFill from "svelte-icons-pack/bs/BsQuestionCircleFill";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import Selectcoin from '$lib/wallet/selectcoin.svelte';
import { default_Wallet } from "$lib/store/coins"
import { handleAuthToken } from "$lib/store/routes";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
import axios from "axios"

let erc = true
let trc = false
let bep = false
let network = "erc"
  const handleNetwork = ((e)=>{
    if(e === 1){
        network= 'erc'
        erc = true
        trc = false
        bep = false
    }else if(e === 2){
        erc = false
        trc = false
        network= 'bep'
        bep = true
    }else{
        erc = false
        trc = true
        bep = false
        network= 'trc'
    }
})

let isSelectCoin = false
const handlecoinSelect = (()=>{
    if(isSelectCoin){
        isSelectCoin = false
    }else{
        isSelectCoin = true
    }
})
let address = ''
let amount = ''
let error_msg = ''
let is_loading = false
const handleSubmit = (async()=>{
    is_loading = true
    if(!address || !amount){
        error_msg = "Field can not be empty"
        setTimeout(()=>{
            error_msg = ""
        },3000)
        is_loading = false
    }
    else if(amount > $default_Wallet.balance){
        error_msg = "Insufficient funds"
        is_loading = false
        setTimeout(()=>{
            error_msg = ""
        },3000)
    }
    else if(amount < 6.5){
        error_msg = "Minimum is 6.5usdt"
        is_loading = false
        setTimeout(()=>{
            error_msg = ""
        },3000)
    }
    else{
        let data = {address,amount, network}
        await axios.post(`${URL}/api/withdraw/initiate`,{
            data
        },{
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${$handleAuthToken}`
            }
        })
        .then(response =>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error.response.data.message)
        })
    }
})

const handleCoins = ((e)=>{
    default_Wallet.set(e.detail)
    handlecoinSelect()
})

</script>


    <div  id="withdraw" class="sc-ezbkAF kDuLvp input ">
        {#if isSelectCoin}
            <Selectcoin on:handleCoinSelect={handleCoins}/>
        {/if}
        <div class="input-label">
            <div style="flex: 1 1 0%;">Withdraw Currency</div>
            <a href="/transactions/withdraw/DOGE">Record</a>
        </div>
        <button on:click={handlecoinSelect} class="sc-kszsFN evIEvq input-control">
            <div class="sc-cBIieI wvKye">
                <div class="wrap">
                    <img class="coin-icon" alt="" src={$default_Wallet.coin_image}>
                    <span class="currency">{$default_Wallet.coin_name}</span>
                    <span class="svg">
                     <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
                 </span>
                </div>
            </div>
            <div class="sc-kqnjJL kdWfvE">
                <div class="wrap">
                    <div class="tit">Balance : </div>
                    <div class="amount">{$default_Wallet.balance}</div>
                </div>
            </div>
        </button>
        <div class="sc-hRnpUl bUlDWK">
          

            {#if $default_Wallet.coin_name === "USDT"}

            <div class="sc-fSDTwv hgHrvG">
                <div class="label">Choose Network</div>
                <div class="btn-wrap">
                    <div class="scroll-box">
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(1)} class={erc ? `active` : ""} disabled={erc}>ERC20</button>
                        </div>
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(2)} class={bep ? `active` : ""} disabled={bep}>BEP20</button>
                        </div>
                        <div class="btn-space">
                            <button on:click={()=>handleNetwork(3)} class={trc ? `active` : ""} disabled={trc}>TRC20</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sc-wkwDy blotCy">
                <div class="label">
                    <div>Withdraw Address
                        <span class="cl-primary">{`(Note: Only ${$default_Wallet.coin_name} Coin)`}</span>
                    </div>
                    {#if error_msg}
                        <div style="color: red;">{error_msg}</div>
                    {/if}
                </div>
                <div class="box">
                    <div class="cont">
                        <input class="address" placeholder="Fill in carefully according to the specific currency" bind:value={address}>
                    </div>
                </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input sc-hrJsxi hjdfLc">
                <div class="input-label">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
                        <div>Withdraw amount</div>
                        <div style="font-size: 12px;">Min: 6.5USDT</div>
                    </div>
                </div>
                <div class="input-control">
                    <input type="number" placeholder="0.00000" bind:value={amount}>
                    <div class="btn-wrap">
                        <button>Min</button>
                        <button>25%</button>
                        <button>50%</button>
                        <button>Max</button>
                    </div>
                </div>
            </div>
            <div class="sc-dWbSDx jJMDVL">
                <div class="sc-bZSZLb dVsvjK disabled">
                    <div class="sc-iJKOTD kdCtGQ checkbox "></div>
                    <div class="jb-deduct">
                        <span class="txt">Unlock at VIP 22</span>
                        <button>
                         <Icon src={BsQuestionCircleFill}  size="14"   color="rgb(93, 160, 0)" className="custom-icon" title="arror" />
                        </button>
                    </div>
                </div>
                <div class="sc-eZKLwX jJQdnO">
                    <div class="sc-faIbUi bGuvOe">Fee&nbsp;<b>{erc ? 5 : 1}.00USDT</b>
                    </div>
                    <button on:click={handleSubmit} disabled={is_loading} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal sub-btn">
                        {#if is_loading}
                        <div class="center">
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                            <div class="wave"></div>
                        </div>
                        {:else}
                        <div class="button-inner">Confirm</div>
                        {/if}
                    </button>
                </div>
                <div class="sc-fpyFWH jksbXu">For security purposes, large or suspicious withdrawal may take 1-6 hours for audit process. We appreciate your patience!</div>
            </div>

            {:else}
        <div class="sc-gRtYjc fIolUb">
            <div class="oval">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-left">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-center">
                <img alt="" src="https://static.nanogames.io/assets/bcdcoin.141c7b8c.png" class="bcd-right">
            </div>
            <div class="bcd-usd">
                <img alt="bcd-usd" src="https://static.nanogames.io/assets/bcd_usd.ae5190d3.png">
            </div>
            <p><span class="word">{$default_Wallet.coin_name}</span> (DPP Dollar) is a crypto launched by DOTPLAYPLAY. You can play games, tip, coindrop, rain with it.</p>
            <p><span class="word">1 {$default_Wallet.coin_name} = 1 USD</span> , You can <a class="hover" href="/wallet/swap">DPPSwap</a> DPP into any other currencies at any time and withdraw it to your wallet.</p>
            <p>Deposit {$default_Wallet.coin_name} into Vault, Enjoy up to <span class="word">10%</span> Annual Percentage Rate return.</p>
            <p><span class="hover">Deposit</span> to claim your {$default_Wallet.coin_name} bonus now.</p>
            <button class="more-about">
                <span>More about {$default_Wallet.coin_name}</span>
                <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" title="arror" />
            </button>
        </div>
        {/if}
          
        </div>
        <div class="share-wrap">
            Share<div class="sc-epFoly ftnlFA">
                <a href="https://www.facebook.com/sharer.php?u=https://nanogames.io/referral-code/0KLVA2KJR5Q6H1" target="_blank" class="share-item enabled">
                    <img class="icon" alt="" src="https://static.nanogames.io/assets/share-2.f44906ec.svg">
                </a>
                <a href="https://t.me/share?url=https://nanogames.io/referral-code/0KLVA2KJR5Q6H1" target="_blank" class="share-item enabled">
                    <img alt="" class="icon" src="https://static.nanogames.io/assets/share-4.4c6af5b2.svg">
                </a>
            </div>
        </div>
    </div>



<style>
@media screen and (min-width: 650px){
    #withdraw {
        border-radius: 20px;
        background-color: rgb(30, 32, 36);
        padding: 0.75rem 0.75rem 0px;
        box-sizing: border-box;
        /* height: 380px; */
        overflow-y: auto;
        touch-action: pan-y;
        overscroll-behavior: contain;
    }
}
.kDuLvp {
    margin-top: 1rem;
}

.jJMDVL {
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
 .input-control {
    min-height: 3.5rem;
}
.kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
    width: 100%;
}
.wvKye {
    flex: 6 1 0%;
    line-height: 1.875rem;
}
.wvKye .wrap {
    padding-right: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.evIEvq .currency {
    flex: 1 1 auto;
    margin-left: 0.9375rem;
    font-size: 1.125rem;
    font-weight: 800;
}
.evIEvq .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    display: inline-block;
    vertical-align: top;
}
.wvKye .currency {
    color: rgb(245, 246, 247);
    font-size: 1.125rem;
}

.evIEvq .svg {
    width: 0.875rem;
    height: 0.875rem;
}
.kdWfvE {
    border-left: 1px solid rgb(45, 48, 53);
    line-height: 0.9375rem;
    flex: 4 1 0%;
}
.kdWfvE .wrap {
    padding-left: 1.25rem;
}
.kdWfvE .amount {
    color: rgb(245, 246, 247);
}

.evIEvq .amount {
    font-size: 0.9375rem;
    font-weight: 800;
}
.blotCy {
    margin-top: 1rem;
    width: 100%;
    font-size: 0.8125rem;
}
.blotCy .label {
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.cl-primary {
    color: var(--primary-color);
}
.blotCy .box {
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
    padding: 0.3125rem 1.25rem;
    width: 100%;
    border-radius: 1.25rem;
    min-height: 3.5rem;
    display: flex;
    flex-direction: column;
}
.blotCy .cont {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 auto;
}

.blotCy .cont .address {
    flex: 1 1 auto;
    word-break: break-all;
    color: rgb(245, 246, 247);
}
.blotCy .address {
    border: none;
    background-color: transparent;
    padding: 0.625rem 0px;
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
    font-size: 12px;
}
.hjdfLc .btn-wrap {
    width: 10.9375rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-radius: 2.25rem;
    overflow: hidden;
    margin-right: -0.625rem;
}
.hjdfLc .btn-wrap button:first-child {
    padding-left: 0.1875rem;
}
.hjdfLc .btn-wrap button {
    background-color: rgba(60, 64, 74, 0.6);
    height: 2.25rem;
    width: 2.6875rem;
    font-size: 0.75rem;
}
.dVsvjK {
    display: flex;
    margin: 1rem 0px 0.625rem 1rem;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.dVsvjK.disabled .checkbox {
    opacity: 0.5;
    cursor: not-allowed;
}
.dVsvjK .checkbox {
    margin-right: 0.3125rem;
}
.kdCtGQ {
    width: 1rem;
    height: 1rem;
    flex: 0 0 auto;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0.1875rem;
    box-sizing: border-box;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    font-size: 0.875rem;
    padding: 0.0625rem 0.0625rem 0.0625rem 0.125rem;
    color: transparent;
    position: relative;
    cursor: pointer;
}
.dVsvjK .jb-deduct {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.dVsvjK.disabled .txt {
    opacity: 0.5;
}
.dVsvjK button {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: 0.3125rem;
}
.jJQdnO {
    margin: 0px 1rem 0.375rem;
    display: flex;
    flex-wrap: wrap;
}
.bGuvOe {
    margin-top: 0.625rem;
    text-align: center;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 12px;
}
.bGuvOe b {
    color: rgb(67, 179, 9);
    margin-right: 0.1875rem;
}
.bUlDWK .sub-btn {
    margin: 0.625rem auto;
}
.jksbXu {
    padding: 0.625rem 1rem;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    margin-top: 10px;
    font-size: 0.75rem;
}
.share-wrap {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    margin: 0.625rem 0px;
}
.JghUg .share-wrap a {
    margin: 0px 0.625rem;
    display: inline-block;
}
.ftnlFA .share-item img {
    height: 1.5rem;
    width: auto;
}
.JghUg .share-wrap img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    vertical-align: top;
}

</style>
