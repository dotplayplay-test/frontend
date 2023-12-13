<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import { UserProfileEl } from "$lib/index"
const { handlePPDwallet, handleUSDTwallet, handlePPFwallet, handlePPLwallet } = UserProfileEl()
import { onMount} from 'svelte'
import {  coin_list } from "$lib/store/coins";

onMount(async()=>{
    let usdt = await handleUSDTwallet()
    let ppd = await handlePPDwallet()
    let ppl = await handlePPLwallet()
    let ppf = await handlePPFwallet()
    coin_list.set([usdt, ppd, ppl, ppf] )
})

let balanceop = 0
$coin_list.forEach(element => {
    if(element.coin_name === "USDT" || element.coin_name === "PPL" || element.coin_name === "PPD" ){
        balanceop += element.balance
    }
});

</script>


<div class="scglv9m wallet-balance">
    <div class="balance-head">
        <div class="total-balance">
            <img src="https://bc.game/assets/coin.8d5cf053.png" alt="">
            <div>
                <div class="tit">Total Balance</div>
                <div class="balance">${(parseFloat(balanceop)).toFixed(6)}</div>
            </div>
        </div>
        <div class="real-money">
            <div class="sub-tit">Real Money</div>
            {#each $coin_list as oi }
            {#if oi.coin_name === "USDT"}
            <div class="amount">${(parseFloat(oi.balance)).toFixed(4)}</div>
            {/if}
            
        {/each}
        </div>
        <div class="bonus-money">
            <div class="sub-tit">Bonus Money</div>
            {#each $coin_list as oi }
            {#if oi.coin_name === "PPD"}
                <div class="amount">${(parseFloat(oi.balance)).toFixed(4)}</div>
            {/if}
            {/each}
        </div>
    </div>

    <div class="s1lzp5ru">
        <div class="currency-opt">
            <div class="hide-balance">Hide 0 balance <div class="ui-switch open">
                <div class="dot"></div>
            </div>
        </div>
    </div>
    <div class="crypto-list">
        <div class="list-tit">Crypto Currency</div>
        {#each $coin_list as pip}
        <div class="currency-item-wrap">
           
            <div class="c1ubyjee currency-item notranslate">
                <div class="coin-wrap">
                    <img class="coin-icon" alt="" src={pip.coin_image}>
                </div>
                    <div class="name-wrap">
                        <div class="currency-name">{pip.coin_name}<button class="ui-button button-normal b1d79k6a">
                            <!-- <div class="button-inner">
                                <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(255, 255, 255)"   />
                            </div> -->
                        </button>
                    </div>
                </div>
                <div class="amount-wrap">
                    <div class="amount-info">
                        <div class="cy2znlo coin notranslate monospace">
                            <div class="amount amount-str">{(parseFloat(pip.balance)).toFixed(4)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/each}
    </div>
</div>
</div>

<style>
.scglv9m{
    flex-direction: column;
    display: flex;
}
.scglv9m .balance-head {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 1.25rem;
    padding: 1.5rem 2rem 1.5rem 1.5rem;
    background-color: #31343c;
    border-radius: .25rem;
}
.scglv9m .balance-head .total-balance {
    border-right: 1px solid #3C404A;
    padding-right: 2rem;
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
.scglv9m .balance-head img {
    width: 2.75rem;
}
.scglv9m .balance-head .tit {
    color: #ffff;
}
.scglv9m .balance-head .balance {
    color: #feca20;
    font-size: 1.125rem;
    line-height: 1.25rem;
    font-weight: 800;
}
.scglv9m .balance-head .real-money, .scglv9m .balance-head .bonus-money {
    padding: 0 2rem;
}
.scglv9m .balance-head .amount {
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.25rem;
    font-weight: 800;
}
.s1lzp5ru{
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #31343c;
    padding: 1rem 2rem;
    margin-top: 20px;
    border-radius: .25rem;
}
.s1lzp5ru .currency-opt {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 1.125rem;
}
.s1lzp5ru .currency-opt .hide-balance {
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
.s1lzp5ru .currency-opt .hide-balance .ui-switch {
    margin-left: 0.5rem;
}
.ui-switch.open {
    background-color: #3bc11733;
}
.ui-switch.open .dot {
    left: 0.75rem;
    background-color: var(--primary-color);
}
/* .s1lzp5ru .currency-opt .ui-input {
    margin-top: 0;
} */
.scglv9m .crypto-list {
    margin-top: 1.25rem;
}
.scglv9m .list-tit {
    margin-bottom: 0.75rem;
    color: #fff;
}
.s1lzp5ru .currency-item-wrap {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #24262B;
    border-radius: 0.75rem;
    margin-bottom: 1.0625rem;
}
.s1lzp5ru .currency-item-wrap .currency-item {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: flex;
    margin: 0;
    border-radius: .25rem;
}
.s1lzp5ru .currency-item-wrap .currency-item {
    padding: 0.6875rem 1rem;
}
.c1ubyjee .coin-wrap {
    position: relative;
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
.c1ubyjee .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    border-radius: var(--border-radius);
    margin-right: 0.9375rem;
}
.c1ubyjee .currency-name {
    color: #fff;
    font-weight: 800;
    height: 1.25rem;
    margin-top: 5px;
    line-height: 1.25rem;
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
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.c1ubyjee .amount-wrap {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-end;
    -webkit-box-align: flex-end;
    -ms-flex-align: flex-end;
    align-items: flex-end;
    margin-left: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

</style>