<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";

let networks = [
    {id:1, network: `ERC20`, status: "active"},
    {id:2, network: `TRX20`, status: ""},
    {id:3, network: `BEP20`, status: ""},
    {id:4, network: `Solana`, status: ""},
]

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


</script>

<div class="ui-scrollview">
   <div class="s4kezgj limit-width" id="deposit">
        <div class="swm8knq">
            <div class="label">Deposit Currency</div>
            <div class="fast-btns">
                <button class="ui-button button-normal active notranslate">
                <div class="button-inner">
                    <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663">USDT</div>
                </button>
            </div>
            <div class="ui-select wallet-balance-input-wrap">

                <div class="select-trigger">
                    <img class="coin-icon" alt="" src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663">
                    <span class="alias">USDT</span>
                    <div class="balance">Balance</div>
                    <div class="amount">0</div>
                     <div class="arrow ">
                       <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
                    </div>
                </div>
            </div>
        </div>
        <div class="sbaeww">
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
        <div class="page-margin">
            <div class="s1d505hu">
                <div>
                    <span>Get extra </span>
                    <b>180%</b>
                    <span> bonus on minimum of </span>
                    <b class="amount">10.00 USDT</b>
                    <span> deposit</span>
                </div>
                <div class="btn">
                    <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
                </div>
            </div>
            <div class="sbz45td">
                <div class="qr-wrap">
                    <div class="qz3bl7d">
                        <img src="https://bc.game/api/game/support/qrcode/320/?text=0x8d3f78BDAd3F1eaa4e5B02E277D24a72C932505a" alt="qr.png"></div>
                    </div>
                    <div class="address-info">
                        <div class="sub-tit">Deposit Address</div>
                        <div class="cont">
                            <div class="notranslate address-text">
                                <span class="cl-primary">0x8d3f78BDAd3F1eaa4e5B02E277D24a72C932505a</span>
                            </div>
                            <button class="ui-button button-normal copy">
                                <div class="button-inner">Copy</div>
                            </button>
                        </div>
                    </div>
            </div>
            <div class="d5oeih5">
                <p>
                    <span class="cl-primary">NOTICE:</span> Send only USDT to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).</p>
                </div>
        </div>
        </div>

   </div>
</div>

<style>
.ui-scrollview {
    padding: 0.25rem 2rem 1.25rem;
}
.ui-scrollview {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    -webkit-flex: 1 1 1px;
    -ms-flex: 1 1 1px;
    flex: 1 1 1px;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.swm8knq {
    --18w92jy: #fff;
    --1cq0e1f: #F6F7FA;
    --9ty6bq: rgba(218,221,230,.5);
    margin-top: 1rem;
}
.qz3bl7d img {
    width: 100%;
    border-radius: var(--border-radius);
    image-rendering: pixelated;
}
.swm8knq .label {
    margin-bottom: 0.75rem;
    line-height: .875rem;
    font-size: .875rem;
}
.s4kezgj .fast-btns {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 0.75rem;
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;
    -webkit-scrollbar-width: none;
    -moz-scrollbar-width: none;
    -ms-scrollbar-width: none;
    scrollbar-width: none;
}
.s4kezgj .fast-btns .ui-button.active {
    background-color: rgba(58,201,72,.1);
    border-color: 30px;
    color: var(--primary-color);
}
.s4kezgj .fast-btns .ui-button {
    border-radius: var(--border-radius);
    border: 1px solid #3C404A;
    height: 1.875rem;
    border-radius: 0.9375rem;
    margin-right: 0.5rem;
    width: auto;
    padding: 0 0.625rem;
}
.s4kezgj .fast-btns .ui-button .button-inner {
    font-weight: 400;
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
.s4kezgj .fast-btns img {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.25rem;
}
.ui-select {
    height: 3rem;
}
.swm8knq .ui-select {
    position: relative;
    z-index: 9;
}
.ui-select .select-trigger {
    background-color: #17181B;
    height: 3rem;
    width: 100%;
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
    border-radius: 8px;
    background-color: #17181b;
}
.swm8knq .select-trigger .coin-icon {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 1rem;
    margin-left: -0.1875rem;
}
.swm8knq .select-trigger .alias {
    font-size: 1rem;
    color: var(--autofill-color);
}
.swm8knq .select-trigger .balance {
    margin-left: auto;
}
.swm8knq .select-trigger .amount {
    color: var(--autofill-color);
    margin-right: 1.25rem;
    margin-left: 0.3125rem;
}
.page-margin {
    margin-top: 1rem;
}
.sq07zth .label {
    margin-bottom: 0.75rem;
    line-height: .875rem;
    font-size: .875rem;
}
.ui-select {
    height: 3rem;
    position: relative;
}
.ui-select .select-trigger {
    background-color: #17181B;
    height: 3rem;
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
.s1d505hu {
    line-height: 1.25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.s1d505hu b {
    margin: 0 0.3125rem;
    color: #fff;
}
.sbz45td {
    margin-top: 0.375rem;
    background-color: rgba(23,24,27,.5);
    border-radius: var(--border-radius);
    padding: 1.125rem 0.875rem;
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
.sbz45td .qr-wrap {
    margin-right: 1rem;
}
.qz3bl7d {
    width: 9.25rem;
    height: 9.25rem;
    padding: 0.125rem;
    border-radius: var(--border-radius);
    overflow: hidden;
    background-color: #2d3035;
    -webkit-animation: placeholderShimmer-qz3bl7d 1.5s linear infinite;
    animation: placeholderShimmer-qz3bl7d 1.5s linear infinite;
}
.address-info {
    width: 1px;
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
}
.address-info .cont {
    background: #1E2024;
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
    padding: 0.3125rem;
    margin-bottom: 0.75rem;
}
.address-info .address-text {
    color: #ffff;
    word-break: break-all;
}
.cl-primary {
    font-size: 14px;
    color: #fff;
}
.address-info .ui-button {
    background: #2A2E33;
    width: auto;
    height: 1.875rem;
    padding: 0 1.25rem;
    margin-left: 0.625rem;
    font-weight: 400;
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
.d5oeih5 {
    padding: 0.5rem 0.75rem;
    border-radius: var(--border-radius);
    font-size: .75rem;
    line-height: 1rem;
    background: rgba(58,201,72,.1);
    color: var(--18w92jy);
    margin-top: 1.25rem;
}
.ui-select .select-options-wrap {
    margin: 0.125rem -0.125rem 0;
    width: 101%;
    background-color: #1E2024;
    box-shadow: 0 8px 32px rgba(0,0,0,.5);
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
.ui-select .select-options {
    background-color: transparent;
    box-shadow: none;
}
.ui-select .select-options {
    border-radius: var(--border-radius);
    padding: 0.125rem 0.375rem;
    background-color: var(--18w92jy);
    box-shadow: 0 0 8px #00000024;
    height: auto;
    max-height: 16.25rem;
}
.ui-scrollview {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    -webkit-flex: 1 1 1px;
    -ms-flex: 1 1 1px;
    flex: 1 1 1px;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.ui-select .select-options:not(.len-1)>.active {
    border-color: #3bc11766;
}
.sq07zth .ui-select .select-option {
    height: 3rem;
    width: 100%;
    line-height: 3rem;
    color: #fff;
}
.ui-select .select-option {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    padding: 0 0.625rem;
    font-size: .875rem;
    height: 2rem;
    margin: 0.25rem 0;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    cursor: pointer;
    color: rgba(153,164,176,.6);
    white-space: nowrap;
}
.ui-select .select-options:not(.len-1)>.active:after {
    content: "";
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    top: 50%;
    margin-top: -0.25rem;
    right: 0.625rem;
    background-color: var(--primary-color);
    box-shadow: 0 0 0 0.3125rem #3bc11726;
}
</style>