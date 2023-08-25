<script>
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()



let coins = [{
    id: 1,
    coin_symbol: "USDT",
    coin_name: "Tether",
    coin_image: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
    amount: 0,
    suffix: "000000",
    select: true,
    networks: {
        erc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS"
        },
        bep: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "0x351455346d88ee6FE927c79f23395143662EC88e"
        },
        trc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "TEosAyZA7Kwv4q84es3uyLgXHDHQWyYrsq"
        }
    }
    },
    {

        id: 2,
        coin_symbol: "PPD",
        coin_name: "Play play Dollar",
        coin_image: "https://www.linkpicture.com/q/dpp_logo.png",
        amount: 0,
        suffix: "000000",
        select: false,
        networks: {
        erc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS"
        }
    }
    },
    {
        id: 3,
        coin_symbol: "PPE",
        coin_name: "Play play Earn",
        coin_image: "https://www.linkpicture.com/q/ppe_logo.png",
        amount: 0,
        suffix: "000000",
        select: false,
        erc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS"
        }
    },
    {
        id: 4,
        coin_symbol: "PPL",
        coin_name: "Play play Lottery",
        coin_image: "https://www.linkpicture.com/q/ppl_logo.png",
        amount: 0,
        suffix: "000000",
        select: false,
        erc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS"
        }
    },
    {
        id: 5,
        coin_symbol: "PPF",
        coin_name: "Play play fun",
        coin_image: "https://www.linkpicture.com/q/ppf_logo.png",
        amount: 0,
        suffix: "000000",
        select: false,
        erc: {
            qr_code: "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
            address: "DR1PTY13GjbsUSkrNVJNCqrfHpDWWPQxDS"
        },
    },
]


const handleCoinSelect = ((e)=>{
    dispatch("handleCoinSelect", e)
})

</script>

<div class="sc-bkkeKt kBjSXI">
        <div class="dialog-body default-style sc-cbTzjv ijNHle balance-wrap" style="z-index: 2; transform: none;">
            <div class="balance-list">
                <div class="sc-dkPtRN jScFby scroll-view sc-dvQaRk bVVgo currency-list">
                    {#each coins as coin (coin.id)}
                        <button on:click={()=>handleCoinSelect(coin)} class={`sc-TBWPX kjMlDW currency-item notranslate ${coin.select ? "active" : "normal"}`}>
                            <div class="sc-ZOtfp sc-jOxtWs sc-hmjpVf bAQFCP lkOITC jNFKIW">
                                <div class="coin-wrap">
                                    <img alt="" class="coin-icon" src={coin.coin_image}>
                                </div>
                                <div class="name-wrap">
                                    <div class="currency-name">{coin.coin_symbol}</div>
                                </div>
                                <div class="amount-wrap">
                                    <div class="sc-Galmp erPQzq coin notranslate monospace">
                                        <div class="amount">
                                            <span class="amount-str">{coin.amount}<span class="suffix">{coin.suffix}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        </div>
</div>

<style>
.ijNHle.balance-wrap {
    background-color: wheat;
    transition: all 0.5s ease;
}
.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    z-index: 12;
    background-color: rgb(23, 24, 27);
    filter: none !important;
    transition: all 0.5s ease;
}
.dialog {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0px;
    border-radius: 0px;
}
.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
.dialog-back {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.dialog-head.has-back {
    margin-left: 3.125rem;
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}
.gcaECY {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.625rem;
}
.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.ijNHle.balance-wrap {
    background-color: rgb(23, 24, 27);
}
.ijNHle .balance-list {
    padding: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease;
}
.default-style > div {
    border-radius: 1.25rem 1.25rem 0rem 0rem;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.ijNHle .search-input {
    padding: 1.25rem;
}
.eAGpdQ {
    margin-top: 0px;
    width: 100%;
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}
.ijNHle .balance-list .currency-item {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
}
.kjMlDW {
    padding: 0.4375rem 0.625rem;
    font-size: 0.875rem;
    border-radius: 1.25rem;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    min-height: 2.0625rem;
    width: 87%;
}
.bAQFCP {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.jNFKIW .coin-wrap {
    position: relative;
}
.lkOITC .coin-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.bAQFCP .coin-icon {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.9375rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 8px;
    border-radius: 0.9375rem;
}
.bAQFCP .currency-name {
    color: rgb(255, 255, 255);
    font-weight: 800;
    height: 1.25rem;
    line-height: 1.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
.jNFKIW .amount-wrap {
    flex-direction: column;
    align-items: flex-end;
}
.lkOITC .amount-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: auto;
}
.jNFKIW .amount-wrap .coin {
    text-align: right;
}
.jNFKIW .monospace {
    color: rgb(255, 255, 255);
    font-weight: 800;
    height: 1.375rem;
    line-height: 1.375rem;
}
.erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
}
.jNFKIW .amount-wrap .coin {
    text-align: right;
}
.erPQzq .amount-str {
    width: 7em;
    display: inline-block;
}
.erPQzq .suffix {
    opacity: 0.5;
}
</style>
