<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
import BsExclamationCircle from "svelte-icons-pack/bs/BsExclamationCircle";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import { default_Wallet } from "$lib/store/coins";

let max_profit_tips = false;
  let Handlemax_profit_tips = (e) => {
    if (e === 1) {
      max_profit_tips = true;
    } else {
      max_profit_tips = false;
    }
  };
  let is_min_max = false;
  const handleMinMax = () => {
    is_min_max = !is_min_max;
  };

  const handlesjen = (e) => {
    bet_amount = (parseFloat($default_Wallet.balance) * (e / 100)).toFixed(4);
    walletRange = e;
    if ($default_Wallet.coin_name === "USDT") {
      if (bet_amount < 0.1) {
        bet_amount = (0.1).toFixed(4);
      } else if (bet_amount > 2000) {
        bet_amount = (2000).toFixed(4);
      }
    } else {
      if (bet_amount < 100) {
        bet_amount = (100).toFixed(4);
      } else if (bet_amount > 5000) {
        bet_amount = (5000).toFixed(4);
      }
    }
  };

  let walletRange = 0;
  const handleRangeSTlop = (eui) => {
    bet_amount = (parseFloat($default_Wallet.balance) * (eui / 100)).toFixed(4);
    if ($default_Wallet.coin_name === "USDT") {
      if (bet_amount < 0.1) {
        bet_amount = (0.1).toFixed(4);
      } else if (bet_amount > 2000) {
        bet_amount = (2000).toFixed(4);
      }
    } else {
      if (bet_amount < 100) {
        bet_amount = (100).toFixed(4);
      } else if (bet_amount > 5000) {
        bet_amount = (5000).toFixed(4);
      }
    }
  };

</script>

<div class="game-control-panel">
    <div class="sc-jFkwbb gLPmxu game-form">
        <div class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput">
            <div class="input-label">
                <div class="sc-hmvnCu efWjNZ label">
                    <div>Amount</div>
                    <div class="max-profit">
                        <button
                        on:mouseleave={() => Handlemax_profit_tips(2)}
                        on:mouseenter={() => Handlemax_profit_tips(1)}
                        class="sc-gsDKAQ hxODWG icon"
                      >
                        <Icon
                          src={BsExclamationCircle}
                          size="15"
                          color="rgb(67, 179, 9)"
                          title=""
                        />
                      </button>
                      {#if max_profit_tips}
                      <div class="tip">
                          <span class="tit">Max Profit:&nbsp;</span>
                          <div class="sc-Galmp erPQzq coin notranslate">
                              <div class="amount">
                                  <span class="amount-str">5000.
                                      <span class="suffix">00000</span>
                                  </span>
                              </div>
                          </div>
                      </div>
                  {/if}
                    </div>
                </div>
                <div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="text" value="100.000000000">
                <img class="coin-icon" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png" alt="">
                <div class="sc-kDTinF bswIvI button-group">
                    <button>/2</button>
                    <button>x2</button>
                    {#if is_min_max}
                    <div class="fix-layer" style="opacity: 1; transform: none;">
                      <button
                        on:click={() => handlesjen(0)}
                        style={`${walletRange === 0 ? `color:#ffff;` : ""}`}
                        class="">Min</button
                      >
                      <div class="sc-kLwhqv eOA-dmL slider">
                        <div
                          class="slider-after"
                          style="transform: scaleX(100.001001);"
                        ></div>
                        <input
                          type="range"
                          class="drag-block"
                          on:input={(e) => handleRangeSTlop(e.target.value)}
                          bind:value={walletRange}
                        />
                        <div
                          class="slider-before"
                          style="transform: scaleX(100.998999);"
                        ></div>
                      </div>
                      <button
                        on:click={() => handlesjen(100)}
                        style={`${walletRange === 100 ? `color:#ffff;` : ""}`}
                        class="">Max</button
                      >
                    </div>
                  {/if}
                  <button  on:click={handleMinMax} class="sc-cAhXWc cMPLfC">
                    <Icon src={RiSystemArrowUpSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"   />
                    <Icon src={RiSystemArrowDownSLine}  size="80"  color="rgba(153, 164, 176, 0.6)"  />
                </button>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF gcQjQT input ">
            <div class="input-label">Mines</div>
            <div class="input-control">
                <div class="sc-jJoQJp gOHquD select  sc-bnOPBZ ewilmB">
                    <div class="select-trigger">1<div class="arrow ">
                        <Icon src={RiSystemArrowRightSLine}  size="20"  color="rgba(153, 164, 176, 0.6)"  />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input ">
            <div class="input-label">Number of Bets</div>
            <div class="input-control">
                <input type="text" value="0">
                <div class="sc-kDTinF bswIvI button-group">
                    <button>∞</button>
                    <button>10</button>
                    <button>100</button>
                </div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy">
            <div class="input-label">On win</div>
            <div class="input-control">
                <input type="text" readonly="" value="0">
                <div class="sc-cxVPaa eIHoct increase-switch">
                    <div class="dot-wrap">
                        <div class="dot"></div>
                    </div>
                    <div class="reset text">Reset</div>
                    <div class="increse text">Increase by</div>
                </div>
                <div class="percent">%</div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp">
            <div class="input-label">Stop on win<div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="text" value="0.000000000">
                <img class="coin-icon" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png" alt="">
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy">
            <div class="input-label">On lose</div>
            <div class="input-control">
                <input type="text" readonly="" value="0">
                <div class="sc-cxVPaa eIHoct increase-switch">
                    <div class="dot-wrap">
                        <div class="dot"></div>
                    </div>
                    <div class="reset text">Reset</div>
                    <div class="increse text">Increase by</div>
                </div>
                <div class="percent">%</div>
            </div>
        </div>
        <div class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp">
            <div class="input-label">Stop on lose<div class="label-amount">0 USD</div>
            </div>
            <div class="input-control">
                <input type="text" value="0.000000000">
                <img class="coin-icon" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png" alt=""></div>
        </div>
        <div class="sc-gfXuXe kNGYYA script-tips">
            <button
            class="sc-gsDKAQ hxODWG icon"
          >
            <Icon
              src={BsExclamationCircle}
              size="15"
              color="rgb(67, 179, 9)"
              title=""
            />
          </button>
            <div class="tip-msg">
                <span>Use of script is optional and players must take full responsibility for any attendant risks. We will not be held liable in this regard.</span>
            </div>
        </div>
        <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button" disabled="">
            <div class="button-inner">Start Auto Bet</div>
        </button>
    </div>
</div>

<style>
.game-control-panel {
    padding: 0px 1.125rem;
}
.game-control-panel {
    flex: 1 1 0%;
}

.input-control:focus-within {
    border: 1px solid var(--primary-color);
  }

  .fCSgTW .fix-layer {
    position: absolute;
    right: 0px;
    top: 2.875rem;
    z-index: 2;
    touch-action: pan-x;
    width: 200px;
    height: 2.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.625rem;
    background-color: rgb(33, 35, 40);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 0px 7px 0px;
  }

  .fCSgTW .fix-layer > button {
    height: 100%;
    width: 2.5rem;
    flex: 0 0 auto;
    font-size: 0.75rem;
    background-color: rgba(60, 64, 74, 0.5);
  }
  .fCSgTW .fix-layer .slider {
    flex: 1 1 0%;
    height: 100%;
  }

  .drag-block {
    position: absolute;
    z-index: 100;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background-color: transparent;
    border-radius: 10px;
    appearance: none;
    width: 100%;
    margin: 0px;
    height: 100%;
    cursor: grab;
    -webkit-appearance: none;
  }
  .drag-block::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: 0px;
    /* Centers thumb on the track */
    background-color: #feffff;
    height: 1.5rem;
    width: 1rem;
    border-radius: 10px;
    cursor: grabbing;
  }
  .eOA-dmL {
    position: relative;
    display: flex;
    height: 0.875rem;
    overflow: hidden;
    box-sizing: content-box;
    padding: 0px 0.8125rem;
    cursor: pointer;
  }
  .fCSgTW .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
  }
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }
  .eOA-dmL .slider-after {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: left center;
  }

  .fCSgTW .fix-layer .slider-before,
  .fCSgTW .fix-layer .slider-after {
    width: 86%;
    left: 7%;
    height: 0.5rem;
    margin-top: -0.25rem;
    border-radius: 0.25rem;
    background-color: rgb(23, 24, 27);
    transform: scaleX(1) !important;
  }
  .eOA-dmL .slider-before {
    background-color: rgba(216, 222, 227, 0.4);
    transform-origin: right center;
  }
  .eOA-dmL .slider-before,
  .eOA-dmL .slider-after {
    height: 2px;
    width: 98%;
    position: absolute;
    left: 1%;
    top: 50%;
    margin-top: -1px;
  }
  .gcQjQT {
    margin-top: 1rem;
}
.gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.efWjNZ {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
}
.efWjNZ .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
}
.input-control {
    border-color: transparent;
}
.input-control {
    background-color: rgba(49, 52, 60, 0.4);
}
.ewilmB {
    flex: 1 1 0%;
    height: 100%;
    margin: 0px -1.375rem;
}
.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}
.hzTJOu {
    margin-top: 1rem;
}
.hzTJOu .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
}
.hzTJOu .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
}
.hzTJOu .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
}
.bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
}
.bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
}
.hzTJOu .input-control input[readonly] {
    opacity: 0.5;
}
.eIHoct {
    order: -1;
    position: relative;
    margin-left: -1rem;
    padding-left: 2.25rem;
    margin-right: 2rem;
    width: 8.125rem;
    height: 2.25rem;
    border-radius: 1.125rem;
    background: rgb(49, 52, 60);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
}
.eIHoct .dot-wrap {
    position: absolute;
    width: 1rem;
    height: 1.75rem;
    border-radius: 0.46875rem;
    background: rgb(67, 179, 9);
    left: 0.875rem;
    top: 0.25rem;
}
.eIHoct .reset {
    font-weight: bold;
    color: rgb(255, 255, 255);
}
.eIHoct .text {
    padding: 0px 0.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 0.875rem;
    height: 0.875rem;
}
.eIHoct .increse {
    color: rgb(153, 164, 176);
}
.eIHoct .text {
    padding: 0px 0.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 0.875rem;
    height: 0.875rem;
}
.cTKsPy .percent {
    margin-right: -0.375rem;
    color: rgb(67, 179, 9);
}
.eIHoct .dot-wrap .dot {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 0px;
    transition: top 0.1s ease-in-out 0s;
    top: -0.0625rem;
}
.kNGYYA {
    display: flex;
    margin-top: 0.75rem;
    font-size: 12px;
    color: rgb(153, 164, 176);
    opacity: 0.6;
}
.kNGYYA .tip-msg {
    flex: 1 1 0%;
}
.gLPmxu .bet-button {
    margin-top: 1.875rem;
}
</style>
