<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import "../../../styles/users/rain/index.css"
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
</script>

<div class="sc-bkkeKt kBjSXI">
    <div class="dialog" style="opacity: 1; width: 464px; height: 581px; margin-top: -290.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-close">
            <div class="dialog-title">Rain</div>
        </div>
        <button on:click={()=> history.back()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        <div class="dialog-body default-style " style="z-index: 2; transform: none;">
            <div class="sc-fDMmqs hyeTsL">
                <div class="sc-ezbkAF kDuLvp input sc-bTfYFJ dETeez amount-input">
                    <div class="input-label">
                        <div class="amount-label">
                            <p>Amount</p><p>Balance: <span>0 PPD</span></p>
                        </div>
                    </div>
                    <div class="input-control">
                        <input type="text" value="0.00006">
                        <div class="sc-kHOZwM lkOmCH">
                            <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp_logo.png">
                            <span class="currency">BTC</span>
                            <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                        </div>
                    </div>
                    <div class="input-after">Min: 0.00006 BTC</div>
                </div>
                <div class="sc-ezbkAF kDuLvp input people-input">
                    <div class="input-label">Number of people</div>
                    <div class="input-control">
                        <input type="text" value="50">
                        <div class="dialog-gray">1~100</div>
                    </div>
                </div>
                <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset rain-textarea">
                    <div class="input-label">Message (Optional)</div>
                    <div class="input-control">
                        <textarea></textarea>
                        <div class="rain-len">0/20</div>
                    </div>
                </div>
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                    <div class="button-inner">Pour rain </div>
                </button>
            </div>
        </div>
    
    </div>



</div>

