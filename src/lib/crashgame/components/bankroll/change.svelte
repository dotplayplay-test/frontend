<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
</script>

<div class="tabs-view" style="transform: none;">
    <div class="sc-dkPtRN jScFby scroll-view jackpot-pane">
        <div class="sc-hRMJXU eWDLqR">
            <div class="jackpot-prize-top">
                <div class="top-description">Deposit<span class="top-primary"> Positive number </span>Withdraw<span class="top-primary"> Negative number </span>Please make sure that amount entered is valid.</div>
                <div class="top-description">
                    <span><span class="cl-primary">2%</span>  of your deposit will be deducted a non-refundable dilution fee (shared by other dealers) which will be deducted from your balance.</span>
                </div>
                <div class="top-description last">If you want to change your leverage, please withdraw all your previous investments from the bankroll and make a new investment with your selected leverage.</div>
                <div class="top-blanch">Your wallet balance：<span>0</span>ETH</div>
                <div class="input-area">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" placeholder=">= 9223372036.854775806" value="">
                        </div>
                    </div>
                    <span>ETH</span>
                </div>
                <div class="select-btn">
                    <div class="leverage-select">
                        <div class="sc-jJoQJp gOHquD select  ">
                            <div class="select-trigger">No leverage<div class="arrow ">
                                <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                            </div>
                            </div>
                        </div>
                    </div>
                    <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal deposit-btn" disabled="">
                        <div class="button-inner">Deposit/Withdraw</div>
                    </button>
                </div>
            </div>
            <div class="jackpot-prize-bottom">
                <div class="botdata-item">
                    <div class="item-wrap">
                        <div class="item-currency num">0.000%</div>
                        <div class="item-word">Your current shares</div>
                    </div><div class="item-wrap">
                        <div class="item-currency">
                            <span class="num">-</span>
                        </div>
                        <div class="item-word">Expected shares after</div>
                    </div>
                </div>
                <div class="botdata-item">
                    <div class="item-wrap">
                        <div class="item-currency">
                            <div class="sc-Galmp erPQzq coin notranslate">
                                <div class="amount">
                                    <span class="amount-str">0.<span class="suffix">00000000</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="item-word">Your current balance</div>
                    </div>
                    <div class="item-wrap">
                        <div class="item-currency">
                            <span class="num">-</span>
                        </div>
                        <div class="item-word">Expected balance after</div>
                    </div>
                </div>
                <div class="botdata-item">
                    <div class="item-wrap">
                        <div class="item-currency">
                            <div class="sc-Galmp erPQzq coin notranslate">
                                <div class="amount">
                                    <span class="amount-str">0.<span class="suffix">00000000</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="item-word">Your current leveraged</div>
                    </div>
                    <div class="item-wrap">
                        <div class="item-currency">
                            <span class="num">-</span>
                        </div>
                        <div class="item-word">Expected leveraged after</div>
                    </div>
                </div>
                <div class="botdata-item">
                    <div class="item-wrap no-info"></div>
                    <div class="item-wrap">
                        <div class="item-currency">
                            <span class="num">-</span>
                        </div>
                        <div class="item-word">Dilution fee</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>

</style>
