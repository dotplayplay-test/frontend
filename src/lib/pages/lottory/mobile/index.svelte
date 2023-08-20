<script>
import History from "./history.svelte";
import Ticket from "./ticket.svelte";
import Rules from "./rules.svelte";
import Guide from "./guide.svelte";
import Instructions from "./instructions.svelte";

let isHistory = false
let left = "left: 0%;"
let right = "right: 50%;"

const handleNavigate = (e) => {
    if (e == "ticket") {
        isHistory = false
        left = "left: 0%;"
        right = "right: 50%;"
    } else {
        left = "left: 50%;"
        right = "right: 0%;"
        isHistory = true
    }
}
</script>

<div class="mobile">
    <div class="sc-lhMiDA ePAxUv">
        <div class="sc-bZSZLb iGGbRn">
            <div class="sc-eZKLwX emJdUB lottery-header">
                <div class="wrap">
                    <div class="period">Lottery Game ID. <span>20230811</span>
                    </div>
                    <a href="#lottery_rule" class="rule">Rules</a>
                    <button class="fairness">Provably Fair</button>
                    <div class="cont">
                        <div class="next-time">
                            <div class="txt">Next Draw in</div>
                            <div class="time">
                                <span>02h</span>:<span>55m</span>:<span>06s</span>
                            </div>
                        </div>
                        <button class="sc-iqseJM sc-hBUSln cBmlor blefOg button button-normal">
                            <div class="button-inner">
                                <div class="btn-ticket">
                                    <div class="tit">Buy Ticket</div>
                                    <div class="sub-tit">1 ticket for $0.1</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="desc">
                    <div class="sc-iJCbQK gGPXLx auto-scroll">
                        <div style="position: absolute; transform: none;">
                            <div class="win-item">
                                <b>Apslxismyb</b> Bought <span>1</span> lottery tickets</div>
                        </div>
                    </div>
                    <div class="sp">Don't miss your chance! <span class="lottery-green">1957</span> tickets have been sold today!</div>
                </div>
            </div>

            <div class="sc-bnOPBZ gOIhrR">
                <div class="sc-cxpSdN kQfmQV tabs">
                    <div class="tabs-navs">
                        <button on:click={()=>handleNavigate("ticket")} class={isHistory ? "tabs-nav" : "tabs-nav is-active"}>My Ticket</button>
                        <button on:click={()=>handleNavigate("tket")} class="tabs-nav">History</button>
                        <div class="bg is-reverse" style={`${left} ${right} `} ></div>
                    </div>
                    <div class="tabs-view" style="transform: none;">
                        {#if (isHistory)}
                        <History />
                        {:else}
                        <Ticket />
                        {/if}
                    </div>
                </div>
            </div>
            <Rules />
            <Instructions />
            <Guide />
        </div>
    </div>
</div>
