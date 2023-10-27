<script>
import { default_Wallet, usdt_Wallet } from "$lib/store/coins";
import { handleAuthToken } from "$lib/store/routes";
import { is_loading, deposit_info } from "$lib/store/deposit"
import axios from "axios"
import {ServerURl} from "$lib/backendUrl"
const url = ServerURl()

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher()
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

let err_msg = ''
let amount;
const handleSubmit = (async()=>{
    is_loading.set(true)
    if(!amount){
        err_msg = "Amount is required"
        is_loading.set(false)
    }else{
        if(amount < 10){
            err_msg = "Not up to required amount"
            is_loading.set(false)
        }else{
            let data = {
            coin_name: $default_Wallet.coin_name,
            network, amount
        }
        await axios.post(`${url}/api/deposit/initiate`, {
            data: data
        },{
            headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${$handleAuthToken}`
            }
        })
        .then((res)=>{
            is_loading.set(false)
            if(res.data.message !== "success"){
                err_msg = res.data.message
            }else{
                deposit_info.set(res.data.data)
                dispatch("display", data )
            }
        })
        .catch((err)=>{
            is_loading.set(false)
            console.log(err)
        })
    }
    }
})

$:{
    if(amount){
        err_msg = ''
    }
}

</script>

<div class="sc-zjkyB cpVBtC">
    <div class="sc-czvZiG exgnid bcd-label">
        <p>First Deposit Bonus</p>
    </div>
    <div class="sc-dXNJws kyYKJa">
        <div class="bg-light light-ani">
            <div class="sc-jFkwbb bNDdwa bcd-left">
                <p class="one">$100<span>(or above to get bonus)</span>
                </p>
                <p class="two">≈ 180 USDT</p>
            </div>
            <div class="sc-bOtlzW gCfefU bcd-right">
                <div class="wrap">
                    <div class="sc-bQFuvY dftgop sun-flower">
                        <img class="img-bg" src="https://static.nanogames.io/assets/sf_w.adddd7aa.png" alt="sf">
                        <img class="img-bonus" src="https://static.nanogames.io/assets/bonus.8a408dd9.png" alt="bonus">
                    </div>
                    <div class="info">
                        <p class="one">
                            <b>180%</b>
                            <span>Bonus</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="sc-dpAhYB emReoO">
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
            <div>Deposit Amount&nbsp;( Note: Min. deposit for <span class="cl-primary">  {$usdt_Wallet.coin_name} is 10.00</span> )</div>
        </div>
        <div class="box">
            <div class="cont">
                <input class="address" type="number"  bind:value={amount}>
                <p style="color: red;">{err_msg}</p>
            </div>
        </div>
    </div>
    <div class="button tysnoe">
        <button  type="submit" disabled={amount < 10} on:click={handleSubmit} class="sc-iqseJM sc-bqiRlB cBmlor eWZHfu button button-big">
            <div class="button-inner">
                {#if $is_loading}
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
                 Proceed to deposit
                {/if}
            </div>
        </button>
    </div>

</div>
<style>
.tysnoe{
   padding: 30px;
    width: 100%;
    display: flex;
    justify-self: center;
    align-items: center;
}
.cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
}

</style>