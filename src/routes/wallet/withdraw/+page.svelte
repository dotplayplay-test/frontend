<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import { handleAuthToken } from "$lib/store/routes";
import { ServerURl } from "$lib/backendUrl"
import axios from "axios"
import { default_Wallet, usdt_Wallet, ppfWallet,ppdWallet, pplWallet } from "$lib/store/coins"
import {onMount} from "svelte"
import {UserProfileEl} from "$lib/index"
const { handleUSDTwallet } = UserProfileEl()
const URL = ServerURl()

let networks = [
    {id:1, network: `ERC20`, status: "active"},
    {id:2, network: `TRX20`, status: ""},
    {id:3, network: `BEP20`, status: ""},
]

onMount(async()=>{
    let rts = await handleUSDTwallet()
    usdt_Wallet.set(rts)
})


let actice_network = {}
const handleNetworks = ((e)=>{
    networks.forEach(element => {
    if(element.network === e.network){
        element.status = "active"
        networks = networks
        actice_network = {...element}
        handleNetworks_isOpen()
    }
    else{
        element.status = ""
    }
 });
})

networks.forEach(element => {
    if(element.status === "active"){
        actice_network = {...element}
    }
 });

 let is_open = false
 const handleNetworks_isOpen = (()=>{
    is_open =! is_open
 })

 let address = ""
 let amount = 0
 const handleSubmit = (async()=>{
    let data = {
        address, 
        network: actice_network.network,
        amount
    }
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
 })

</script>
  <div class="right-info">
  <div class="tabs-view" style="transform: none;">
     <div class="limit-width">
          <div class="bs9gc4t">
              <div class="swm8knq">
                  <div class="label">Withdraw Currency</div>
                  <div class="ui-select wallet-balance-input-wrap">
                      <div class="select-trigger">
                          <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663">
                          <span class="alias">USDT</span>
                          <div class="balance">Balance</div>
                          <div class="amount">{(parseFloat($usdt_Wallet.balance)).toFixed(4)}</div>
                          <div class="arrow ">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
                          </div>
                      </div>
                  </div>
              </div>

            <div class="sq07zth page-margin">
                <div class="label">Choose Network</div>
                <div class={`ui-select select-tokens ${is_open ? "is-open" : ""} `}>
                    <button on:click={handleNetworks_isOpen} class="select-trigger">
                        {actice_network.network}
                        <div class="arrow ">
                            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
                        </div>
                    </button>
                    {#if is_open}
                    <div class="select-options-wrap" style="top: 100%; opacity: 1; transform: none;">
                        <div class="ui-scrollview select-options len-9">
                            {#each networks as net (net.id)}
                                <button class={`select-option ${net.status === "active" ? "active" : ""} `} on:click={()=>handleNetworks(net)}>{net.network}</button>
                            {/each}
                        </div>
                    </div>
                {/if}
                </div>
            </div>

            <div class="ui-input page-margin">
                <div class="input-label">
                    <div>Withdrawal Address</div>
                </div>
                <div class="input-control">
                    <input type="text" placeholder="Fill in carefully according to the specific currency" bind:value={address}>
                </div>
            </div>

            <div class="ui-input s8xfgc0 page-margin">
                <div class="input-label">
                    <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
                        <div style="text-transform: capitalize;">Withdraw amount</div>
                        <div style="font-size: 12px;">Min: 5.6</div>
                    </div>
                </div>
                <div style={` ${ amount && amount < 5.6 && `border: 1px solid red;`}; ${amount > parseFloat($usdt_Wallet.balance) && `border: 1px solid red;`} `} class="input-control">
                    <input type="number" placeholder="0.000" bind:value={amount}></div>
                </div>
            </div>
            <div class="unlock-balance s13ylein">
                <div class="available unlock-item">
                    <div class="label">Available:</div>
                    <div class="value">${(parseFloat($usdt_Wallet.balance)).toFixed(2)}</div>
                </div>
            </div>

            <div class="withdraw-info">
                <div class="item">
                    <div class="label">Withdraw amount:</div>
                    <div class="val">
                        <div class="cy2znlo coin notranslate">
                            <div class="amount amount-str">{amount ? (parseFloat(amount)).toFixed(2) : 0}</div>
                        </div>
                        USDT
                    </div>
                </div>
                <div class="item">
                    <div class="label">Fee:<button>
                        <!-- <svg class="s1ff97qc icon icon-help">
                            <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Help"></use>
                        </svg> -->
                    </button>
                </div>
                <div class="val">{actice_network.network !== "ERC20" ? 1 : 5} USDT</div>
            </div>
            <div class="item">
                <div class="label">Total withdrawal amount:</div>
                <div class="val cl-primary">
                    <div class="cy2znlo coin notranslate">
                        {#if amount > 6.5}
                         <div class="amount amount-str"> { actice_network.network !== "ERC20" ? amount - 1 : amount - 5}</div>
                         {:else}
                         <div class="amount amount-str"> 0</div>
                        {/if}
                        
                    </div> USDT</div>
                </div>
            </div>

            <div class="bjruw94">
                <p><span class="cl-primary">Notice:</span> For security purposes, large or suspicious withdrawal may take 1-6 hours for audit process. We appreciate your patience!</p>
            </div>

            <button disabled={amount && amount < 5.6 || amount > parseFloat($usdt_Wallet.balance)} on:click={handleSubmit} class="ui-button button-normal s-conic submit-btn">
                <div class="button-inner">Confirm</div>
            </button>
     </div>
  </div>
</div>
<style>
.ui-select .select-options-wrap {
    margin: 0.125rem -0.125rem 0;
    width: 101%;
    background-color: #1E2024;
    box-shadow: 0 8px 32px rgba(0,0,0,.5);
    border-radius: 30px;
}
.ui-select.is-open .select-options-wrap {
    pointer-events: auto;
}
.ui-select .select-options-wrap {
    position: absolute;
    padding: 0.3125rem 0;
    width: 100%;
    left: 0;
    z-index: 2;
}
.s-conic:disabled.ui-button:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
}
.ui-select .select-options {
    background-color: transparent;
    box-shadow: none;
}
.ui-select .select-options {
    border-radius: 30px;
    padding: 0.125rem 0.375rem;
    background-color: var(--18w92jy);
    box-shadow: 0 0 8px #00000024;
    height: auto;
    max-height: 16.25rem;
}
.ui-select {
    height: 3rem;
}
.sq07zth .ui-select {
    position: relative;
    z-index: 9;
}
.ui-select .select-options:not(.len-1)>.active {
    border: 2px solid #3bc11766;
    border-radius: 30px;
    color: #fff;
}
.sq07zth .ui-select .select-option {
    height: 3rem;
    width: 100%;
    line-height: 3rem;

}
.limit-width {
    max-width: 500px;
}
.swm8knq .label {
    margin-bottom: 0.75rem;
    line-height: .875rem;
    font-size: .875rem;
} 
.ui-select {
    height: 3rem;
}
.ui-select .select-trigger {
    background-color: #1E2024;
    width: 100%;
}
.swm8knq .select-trigger .coin-icon {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1rem;
    margin-left: -0.1875rem;
}
.swm8knq .select-trigger .alias {
    font-size: 1rem;
    color: #fff;
}
.swm8knq .select-trigger .balance {
    margin-left: auto;
}
.ui-select .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
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
    position: absolute;
    right: 0;
    top: 0;
}
.ui-select .select-trigger {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0 1.25rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: var(--border-radius);
    background-color: #17181b;
}
.swm8knq .select-trigger .amount {
    color: #fff;
    margin-right: 1.25rem;
    margin-left: 0.3125rem;
}
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

.page-margin {
    margin-top: 1.5rem;
}
.sq07zth .label {
    margin-bottom: 0.75rem;
    line-height: .875rem;
    font-size: .875rem;
}
.s1orvhr .ui-input .input-label {
    margin-left: 0;
}
.ui-input .input-label {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0 0 0.375rem;
}
.ui-input .input-control {
    height: 3rem;
    background-color: #1E2024;
    border: none;
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
.ui-input .input-control input::placeholder {
    color: #737a82;
}
.ui-input .input-control {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: var(--border-radius);
    border: 1px solid #2d3035;
    background-color: #222328;
    height: 3.5rem;
    padding: 0 1.25rem;
    opacity: 1;
}
.s13ylein {
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
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 0.5rem;
}
.s13ylein .unlock-item {
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
}
.s13ylein .label {
    margin-right: 0.1875rem;
    font-size: 14px;
    font-family: "poppins";
}
.s13ylein .value {
    font-weight: 600;
    color: #fff;
    font-family: "poppins";
}
 .withdraw-info {
    background-color: #26282C;
    border-radius: var(--border-radius);
    width: 100%;
    margin-top: 1.375rem;
}
 .withdraw-info .item {
    padding: 0.375rem 0.75rem;
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
.withdraw-info .item .val {
    color: #fff;
    font-weight: 800;
}
.withdraw-info .item .cl-primary {
    color: var(--primary-color);
}
.cy2znlo {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
}
.bjruw94 {
    background: rgba(58,201,72,.1);
    padding: 0.125rem 0.75rem;
    border-radius: var(--border-radius);
    margin-top: 0.75rem;
    font-size: .875rem;
    line-height: 1rem;
    color: #fff;
}
p {
    margin: 0.8em 0;
}
.ui-button.s-conic {
    color: #fff;
    background-color: #1d803ab3;
    background-image: conic-gradient(from 1turn,rgba(88,175,16,1),rgba(29,128,58,1));
}
.submit-btn {
    min-width: 14rem;
    width: auto;
    margin: 2rem auto;
}
.ui-button {
    --3xr1hu: rgba(107,113,128,.8);
    display: block;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 30px;
    height: 3rem;
    font-weight: 700;
    cursor: pointer;
    -webkit-transition: -webkit-transform .2s cubic-bezier(.36,.66,.04,1);
    -webkit-transition: transform .2s cubic-bezier(.36,.66,.04,1);
    transition: transform .2s cubic-bezier(.36,.66,.04,1);
}
.ui-button>.button-inner {
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
    width: 100%;
    height: 100%;
}
</style>