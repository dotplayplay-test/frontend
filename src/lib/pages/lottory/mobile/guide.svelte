<script>
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";

let guideDetails = false
let isFair = false

const handleGudeDetails = () => {
    if (guideDetails) {
        guideDetails = false
    } else {
        guideDetails = true
    }
}

const handleFairness = (() => {
    if (isFair) {
        isFair = false
    } else {
        isFair = true
    }
})
</script>

<div class="sc-haTkiu bighmL">
    <div id="lottery_rule"></div>
    <div class="tit">Lottery Instructions:</div>
    <div class="cont">
        <div class="li">A provably fair algorithm is used to draw the lottery prizes.</div>
        <div class="li">Prizes are drawn at 15:00 UTC+0 everyday.</div>
        <div class="li">You can buy a ticket for $0.1. The sale of tickets stop at 14:55 UTC+0 everyday.</div>
        <div class="li">The player chooses six numbers for each ticket, the first five are from 1 to 36, and the last one is from 1 to 10.</div>
        <div class="li">You can choose numbers manually or automatically.</div>
        <div class="li">If you have NNL, you can use NNL to redeem Tickets.</div>
        <div class="li">Each draw produces six numbers. </div>
        <div class="li">The more numbers you match in the first five numbers, greater prize you will win.</div>
    </div>
    <div class="tit">Winning Prize Details:</div>
    <div class="cont">
        <div class="li">All six numbers matched: $100,000 prize. In case you are not the only winner, you may need to share the prize equally with others.</div>
        <div class="li">Five numbers matched, and the sixth number is missed: Each ticket gets a $3,000 prize.</div>
        <div class="li">Four of the first 5 numbers matched: Each ticket gets a $20 prize.</div>
        <div class="li">Three of the first 5 numbers matched: Each ticket gets a $1 prize.</div>
        <div class="li">If all six numbers are missed, the lottery will be reserved for free, and continue participating in the next day's draw.</div>
    </div>

    <!-- =================== guides ===================== -->
    {#if (isFair)}
    <div class="sc-bkkeKt kBjSXI" style="background-color: transparent;">
        <div class="dialog " style="transform: none;">
            <div class="dialog-head has-close">
                <div class="dialog-title">Provably Fair</div>
                <!-- <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon" style="cursor: pointer;">
                    <use xlink:href="#icon_Fairness"></use>
                </svg> -->
            </div>
            <button on:click={handleFairness} class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon   src={IoCloseSharp}  size="25"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
            <div class="dialog-body default-style " style="z-index: 2; transform: none;">
                <div class="sc-dkPtRN jScFby scroll-view sc-knKHOI gtkhbl">
                    <div class="item">Lottery is drawn in 5+1 balls rule, with five regular balls taken from 36 numbers
                        and a jackpot ball taken from 10 numbers.</div>
                    <div class="item">Server seed: Each game generates a new server seed and publishes the
                        string after Hash256.<br>Client Seeds: Get the ETH height at the end of the daily ticket purchase deadline,
                        and use Hash after 10 blocks as the client seed.</div>
                    <div class="item">
                        <div>First, use HMAC_SHA256 to calculate the hash value, which gives us a 64-bit character hex string: </div>
                        <div class="pri-tips">hash = HMAC_SHA256 (clientSeed, serverSeed)</div>
                        <div>Then, take the <span>8</span> characters of hash and convert it to an <span>int32</span> value. We divide the converted value by the <span>0x100000000</span>,
                            multiply by the number of balls, and the number is the winning position, according to which the corresponding ball is obtained.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/if}


    <button on:click={handleFairness} class="sc-iqseJM cBmlor button button-normal btn">
        <div class="button-inner">Provably Fair
            <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
        </div>
    </button>
</div>

<div class="sc-ekrjqK iRAkvM lottery-subheader">
    <!-- ============================== details ======================== -->
    {#if (guideDetails)}
    <div class="sc-bkkeKt kBjSXI" style="background-color: transparent;">
        <div class="dialog " style="transform: none;">
            <div class="dialog-head has-close">
                <div class="dialog-title">What is NNL?</div>
            </div>
            <button on:click={handleGudeDetails} class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon  src={IoCloseSharp}  size="25"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
            <div class="dialog-body default-style " style="z-index: 2; transform: none;">
                <div class="sc-dkPtRN jScFby scroll-view sc-bvFjSx kBIMm">
                    <h2>What is NNL?</h2>
                    <div class="help-content">
                        <p>NNL (NG Lottery) is a token created by NANOGAMES.IO for players who love the Lottery. You can use NNL to redeem lottery tickets in the Lottery at any time, 1 NNL for every one lottery ticket. </p>
                    </div>
                    <h2>How to get NNL?</h2>

                    <div class="help-content">
                        <p>You can exchange NNL through NGSwap at any time, or you may receive NNL from the NANOGAMES.IO official community or other players through Gift Link.</p>
                    </div>
                    <h2>Can I gift NNL to others?</h2>
                    <div class="help-content">
                        <p>Of course, you can send NNL to other players through the
                            <span class="lottery-green">Tip</span>
                            function.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/if}
    <div class="cont sh">
        <div class="title">What Is <span>NNL</span>?</div>
        <div class="desc">NNL (NG Lottery) is a token created by NANOGAMES.IO for players who love the Lottery. You can use NNL to redeem lottery tickets in the Lottery at any time, 1 NNL = 1 lottery ticket. </div>
        <div class="btn">
            <button on:click={handleGudeDetails}>Details
                <Icon src={RiSystemArrowRightSLine}  size="18"  color="rgb(67, 179, 9)" className="custom-icon" title="arror" />
            </button>
        </div>
    </div>
    <!-- <div class="empty">
        <img src="https://static.nanogames.io/assets/whatisbcl.8079172d.png" alt="">
    </div> -->
</div>

<style>

</style>
