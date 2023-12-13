<script>
  import { isLightMode } from "../../../lib/store/theme";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowDownSLine from "svelte-icons-pack/ri/RiSystemArrowDownSLine";
  import RiSystemArrowUpSLine from "svelte-icons-pack/ri/RiSystemArrowUpSLine";
  import HiSolidSpeakerphone from "svelte-icons-pack/hi/HiSolidSpeakerphone";
  import VscLaw from "svelte-icons-pack/vsc/VscLaw";
  import IoGitNetwork from "svelte-icons-pack/io/IoGitNetwork";
  import RiDocumentFolderOpenFill from "svelte-icons-pack/ri/RiDocumentFolderOpenFill";
  import BiHelpCircle from "svelte-icons-pack/bi/BiHelpCircle";
  import BsClock from "svelte-icons-pack/bs/BsClock";

  let activeTab = "tab1";
  let activeTabB = "tabB1";

  function handleTabChange(tab) {
    activeTab = tab;
  }
  function handleTabBChange(tabB) {
    activeTabB = tabB;
  }
</script>

<div id="game-Keno" class="sc-cfJLRR gJxbeS game-style1 sc-dXNJws iClKJL">
  <div class="game-area">
    <div class="game-main">
      <div id="Keno-control-0" class="sc-cQMzAB eQfpOS game-control style1">
        <div class="sc-iwjdpV ikWSlH radio game-control-switch">
          <button
            on:click={() => handleTabChange("tab1")}
            class:is-active={activeTab === "tab1"}
            ><div class="label">Manual</div></button
          ><button
            on:click={() => handleTabChange("tab2")}
            class:is-active={activeTab === "tab2"}
            ><div class="label">Auto</div></button
          >
        </div>
        {#if activeTab === "tab1"}
          <div class="game-control-panel">
            <div class="sc-fUQcsx jsLoxW">
              <button
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button"
                disabled=""
                ><div class="button-inner">
                  <img
                    src="https://static.nanogames.io/assets/keno_loading.d3c77d1e.png"
                    alt="img.png"
                  /><span>Bet</span>
                </div></button
              >
              <div class="sc-fSDTwv lgcQbT">
                <div
                  class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-cAhXWc lnBinR game-coininput"
                >
                  <div class="input-label">
                    <div class="sc-gsFzgR bxrMFn label">
                      <div>Amount</div>
                      <div class="max-profit">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="sc-gsDKAQ hxODWG icon"
                          ><use xlink:href="#icon_Inform"></use></svg
                        >
                        <div class="tip">
                          <span class="tit">Max Profit:&nbsp;</span>
                          <div class="sc-Galmp erPQzq coin notranslate">
                            <div class="amount">
                              <span class="amount-str"
                                >5000.<span class="suffix">00000</span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="label-amount">0 USD</div>
                  </div>
                  <div class="input-control">
                    <input type="text" value="184.778645833" />
                    <img class="coin-icon" src="/coin/CUB.black.png" alt="" />
                    <div class="sc-kDTinF bswIvI button-group">
                      <button>/2</button><button>x2</button><button
                        class="sc-cAhXWc cMPLfC flex-button"
                      >
                        <Icon
                          src={RiSystemArrowUpSLine}
                          size="17"
                          color="rgba(153, 164, 176, 0.6)"
                          title=""
                        />
                        <Icon
                          src={RiSystemArrowDownSLine}
                          size="17"
                          color="rgba(153, 164, 176, 0.6)"
                          title=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="sc-ezbkAF gcQjQT input">
                  <div class="input-label">Risk</div>
                  <div class="input-control">
                    <div class="sc-jJoQJp gOHquD select sc-iKMXQg dChWmb">
                      <div class="select-trigger">
                        Classic
                        <div class="arrow">
                          <svg
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            class="sc-gsDKAQ hxODWG icon"
                            ><use xlink:href="#icon_Arrow"></use></svg
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-fSDTwv lgcQbT pick-wrap">
                <div class="sc-ezbkAF kDuLvp input sc-fbyfCU fWAvBM">
                  <div class="input-label">Last game hash</div>
                  <div class="input-control">
                    <input
                      type="text"
                      readonly=""
                      value="903ac7fef36b3f5e2a8d78cf23c3441b88a5ec5f1bdf2fce0091ade302bcf7e3"
                    /><button
                      class="sc-iqseJM cBmlor button button-normal copy-button"
                      ><div class="button-inner">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="sc-gsDKAQ hxODWG icon"
                          ><use xlink:href="#icon_Copy"></use></svg
                        >
                      </div></button
                    >
                  </div>
                </div>
                <div class="sc-fSDTwv lgcQbT btn-wrap">
                  <button
                    class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal hold-btn"
                    ><div class="button-inner">Auto Pick</div></button
                  ><button
                    class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal hold-btn"
                    ><div class="button-inner">Clear Table</div></button
                  >
                </div>
              </div>
            </div>
          </div>
        {/if}
        {#if activeTab === "tab2"}
          <div class="game-control-panel">
            <div class="sc-juEPzu kkZrMb">
              <button
                class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-big bet-button"
                disabled=""
                ><div class="button-inner">
                  <span>Start Auto Bet</span>
                </div></button
              >
              <div class="sc-gFSQbh dOhRZH">
                <div
                  class="sc-ezbkAF gcQjQT input sc-fvxzrP gOLODp sc-gsFzgR fCSgTW game-coininput"
                >
                  <div class="input-label">
                    <div class="sc-hmvnCu efWjNZ label">
                      <div>Amount</div>
                      <div class="max-profit">
                        <svg
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          class="sc-gsDKAQ hxODWG icon"
                          ><use xlink:href="#icon_Inform"></use></svg
                        >
                        <div class="tip">
                          <span class="tit">Max Profit:&nbsp;</span>
                          <div class="sc-Galmp erPQzq coin notranslate">
                            <div class="amount">
                              <span class="amount-str"
                                >0.11<span class="suffix">000000</span></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="label-amount">192.706811 USD</div>
                  </div>
                  <div class="input-control">
                    <input type="text" value="0.004400000" />
                    <img class="coin-icon" src="/coin/BTC.black.png" alt="" />
                    <div class="sc-kDTinF bswIvI button-group">
                      <button>/2</button><button>x2</button>
                      <button class="sc-cAhXWc cMPLfC flex-button">
                        <Icon
                          src={RiSystemArrowUpSLine}
                          size="17"
                          color="rgba(153, 164, 176, 0.6)"
                          title=""
                        />
                        <Icon
                          src={RiSystemArrowDownSLine}
                          size="17"
                          color="rgba(153, 164, 176, 0.6)"
                          title=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="sc-ezbkAF hzTJOu input">
                  <div class="input-label">Number of Bets</div>
                  <div class="input-control">
                    <input type="text" value="0" />
                    <div class="sc-kDTinF bswIvI button-group">
                      <button>∞</button><button>10</button><button>100</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-gFSQbh dOhRZH">
                <div class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy">
                  <div class="input-label">On win</div>
                  <div class="input-control">
                    <input type="text" readonly="" value="0" />
                    <div class="sc-cxVPaa eIHoct increase-switch">
                      <div class="dot-wrap"><div class="dot"></div></div>
                      <div class="reset text">Reset</div>
                      <div class="increse text">Increase by</div>
                    </div>
                    <div class="percent">%</div>
                  </div>
                </div>
                <div class="sc-ezbkAF hzTJOu input sc-gqtqkP cTKsPy">
                  <div class="input-label">On lose</div>
                  <div class="input-control">
                    <input type="text" readonly="" value="0" />
                    <div class="sc-cxVPaa eIHoct increase-switch">
                      <div class="dot-wrap"><div class="dot"></div></div>
                      <div class="reset text">Reset</div>
                      <div class="increse text">Increase by</div>
                    </div>
                    <div class="percent">%</div>
                  </div>
                </div>
              </div>
              <div class="sc-gFSQbh dOhRZH">
                <div class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp">
                  <div class="input-label">
                    Stop on win
                    <div class="label-amount">0 USD</div>
                  </div>
                  <div class="input-control">
                    <input type="text" value="0.000000000" /><img
                      class="coin-icon"
                      src="/coin/BTC.black.png"
                      alt=""
                    />
                  </div>
                </div>
                <div class="sc-ezbkAF hzTJOu input sc-fvxzrP gOLODp">
                  <div class="input-label">
                    Stop on lose
                    <div class="label-amount">0 USD</div>
                  </div>
                  <div class="input-control">
                    <input type="text" value="0.000000000" /><img
                      class="coin-icon"
                      src="/coin/BTC.black.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="sc-jwQYvw jcGUIr btn-wrap">
                <button
                  class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal hold-btn"
                  ><div class="button-inner">Auto Pick</div></button
                ><button
                  class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal hold-btn"
                  ><div class="button-inner">Clear Table</div></button
                >
              </div>
            </div>
          </div>{/if}
      </div>
      <div class="game-view">
        <div class="sc-leSONj jOOXMd game-recent">
          <div class="sc-hoHwyw hSKlkh jackpot-enter">
            <div class="title">
              <span class="tit">Bankroll</span><span>CUB</span>
            </div>
            <div class="sc-Galmp erPQzq coin notranslate">
              <img class="coin-icon" src="/coin/CUB.black.png" alt="" />
              <div class="amount">
                <span class="amount-str">1234538.98</span>
              </div>
            </div>
          </div>
          <div class="recent-list-wrap">
            <div class="empty-item">
              <p>Game results will be displayed here.</p>
            </div>
          </div>
        </div>
        <div class="no-web sc-bQFuvY bFXMsx">
          <div class="history">
            <Icon
              src={BsClock}
              size="12"
              color="rgba(153, 164, 176, 0.6)"
              title=""
            />History
          </div>
          <div class="title">Result</div>
          <div class="wrap ball-wrap">
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              23
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              14
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              6
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              5
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              11
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              18
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              39
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              15
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              31
            </div>
            <div
              class="range-item"
              style="opacity: 1; transform: translate(0px, 0px);"
            >
              24
            </div>
          </div>
        </div>
        <div class="sc-oXPCX fQmThe game-box sc-bOtlzW cxPcDj">
          <div class="sc-bjztik cKpuTs">
            <div class="keno-wrap">
              <div class="keno-item-wrap">
                <div class="keno-list">
                  <button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">1</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">2</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">3</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">4</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">5</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">6</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">7</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">8</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">9</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">10</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">11</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">12</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">13</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">14</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">15</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">16</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">17</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">18</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">19</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">20</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">21</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">22</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">23</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">24</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">25</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">26</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">27</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">28</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">29</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">30</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">31</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">32</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">33</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">34</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">35</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">36</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">37</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">38</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">39</span>
                    </div></button
                  ><button class="keno_styles_item"
                    ><div class="keno-ritem initial">
                      <span class="keno-num">40</span>
                    </div></button
                  >
                </div>
              </div>
              <div class="sc-hKumaY krTDHD">
                <div class="sc-eTwdGJ ZOVvL">
                  <div class="game_payout"></div>
                  <div class="no_select">Select 1 - 10 numbers to play</div>
                </div>
              </div>
              <div class="bottom-line"></div>
            </div>
          </div>
          <div class="sc-hIagIn jLprWf house-edge">
            <span>House Edge 1%</span>
          </div>
          <svg
            class="box-bg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 996 46"
            ><defs
              ><linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%"
                ><stop offset="0%" stop-color="#31343C"></stop><stop
                  offset="100%"
                  stop-color="#1E2024"
                  stop-opacity="0"
                ></stop></linearGradient
              ></defs
            ><g opacity=".899"
              ><path
                fill="url(#gcardBg)"
                fill-rule="evenodd"
                d="M0 0h996L892 46H96z"
                opacity=".598"
                transform="rotate(-180 498 23)"
              ></path></g
            ></svg
          >
        </div>
      </div>
      <div class="game-actions">
        <button class="action-item"
          ><Icon
            src={HiSolidSpeakerphone}
            size="23"
            color="rgba(153, 164, 176, 0.6)"
            title=""
          /></button
        ><button class="action-item"
          ><Icon
            src={IoGitNetwork}
            size="23"
            color="rgba(153, 164, 176, 0.6)"
            title=""
          /></button
        ><button class="action-item"
          ><Icon
            src={VscLaw}
            size="23"
            color="rgba(153, 164, 176, 0.6)"
            title=""
          /></button
        ><button class="action-item"
          ><Icon
            src={RiDocumentFolderOpenFill}
            size="23"
            color="rgba(153, 164, 176, 0.6)"
            title=""
          /></button
        ><button class="action-item"
          ><Icon
            src={BiHelpCircle}
            size="23"
            color="rgba(153, 164, 176, 0.6)"
            title=""
          /></button
        ><button class="action-item"
          ><svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Help"></use></svg
          ></button
        >
      </div>
    </div>
    <div class="web no-mobile sc-hRMJXU cWaNyl">
      <div class="sc-bQFuvY bFXMsx">
        <div class="history">
          <Icon
            src={BsClock}
            size="12"
            color="rgba(153, 164, 176, 0.6)"
            title=""
          />History
        </div>
        <div class="title">Result</div>
        <div class="wrap ball-wrap">
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            23
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            14
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            6
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            5
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            11
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            18
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            39
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            15
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            31
          </div>
          <div
            class="range-item"
            style="opacity: 1; transform: translate(0px, 0px);"
          >
            24
          </div>
        </div>
      </div>
      <div class="sc-jHwEXd buHOgK">
        <table>
          <thead
            ><tr
              ><th class="th-w1">Player(0)</th><th class="th-w2">Result</th><th
                class="th-w3">Payout</th
              ><th class="th-w4">Profit</th></tr
            ></thead
          ><tbody></tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
    <div class="tabs-navs">
      <button
        on:click={() => handleTabBChange("tabB0")}
        class:is-active={activeTabB === "tabB0"}
        class="tabs-nav mobile no-web">All Bets</button
      >
      <button
        on:click={() => handleTabBChange("tabB1")}
        class:is-active={activeTabB === "tabB1"}
        class="tabs-nav">My Bets</button
      >
      <button
        on:click={() => handleTabBChange("tabB2")}
        class:is-active={activeTabB === "tabB2"}
        class="tabs-nav">History</button
      ><button
        on:click={() => handleTabBChange("tabB3")}
        class:is-active={activeTabB === "tabB3"}
        class="tabs-nav">Contest</button
      >
    </div>
    {#if activeTabB === "tabB0"}
      <div class="tabs-view" style="transform: none;">
        <div class="sc-jHwEXd buHOgK">
          <table>
            <thead
              ><tr
                ><th class="th-w1">Player(0)</th><th class="th-w2">Result</th
                ><th class="th-w3">Payout</th><th class="th-w4">Profit</th></tr
              ></thead
            ><tbody></tbody>
          </table>
        </div>
      </div>
    {/if}
    {#if activeTabB === "tabB1"}
      <div class="tabs-view" style="transform: none;">
        <div class="sc-eZhRLC iycaRo">
          <div class="sc-eCImPb cuPxwd empty">
            <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" />
            <div class="msg">Oops! There is no data yet!</div>
          </div>
        </div>
      </div>
    {/if}
    {#if activeTabB === "tabB2"}
      <div class="tabs-view" style="transform: none;">
        <div class="sc-wkwDy gONCrm">
          <div class="sc-dpAhYB kHsZCY">
            <div class="head flex">
              <div class="col">Game ID</div>
              <div class="col">Result</div>
              <div class="col-2">Hash</div>
            </div>
            <ul class="list">
              <li class="item flex">
                <div class="col hover">3248457</div>
                <div class="col"><div>37,21,40,10,2,1,6,24,29,32</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="9bd324297cf9f5015653da591cfa22d11f77daef8e5fc6148c9fd4a3a02e79b8"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/9bd324297cf9f5015653da591cfa22d11f77daef8e5fc6148c9fd4a3a02e79b8"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248456</div>
                <div class="col"><div>20,35,25,18,14,23,15,6,36,29</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="b1b95dde47cf118161d57b840082c06a9f1fb3609cc1a1fff5492b5ed6721159"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/b1b95dde47cf118161d57b840082c06a9f1fb3609cc1a1fff5492b5ed6721159"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248455</div>
                <div class="col"><div>28,17,20,4,2,10,1,5,30,40</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="f0eaa3f7e3fd8ab9d8511fceb9ac1da9f4f65f9e67f77cffc24f8b00706c0710"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/f0eaa3f7e3fd8ab9d8511fceb9ac1da9f4f65f9e67f77cffc24f8b00706c0710"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248454</div>
                <div class="col"><div>15,7,4,33,17,3,27,11,12,16</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="d49064e41cda8678a0fe3e0c58e59e32562d2f1d95254233798aa17e90e50b13"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/d49064e41cda8678a0fe3e0c58e59e32562d2f1d95254233798aa17e90e50b13"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248453</div>
                <div class="col"><div>26,20,4,15,14,25,40,36,22,21</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="7e100ff1cf113c585b74e1dfc82ddc906eced3102858cdeca9290ca3c874483f"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/7e100ff1cf113c585b74e1dfc82ddc906eced3102858cdeca9290ca3c874483f"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248452</div>
                <div class="col"><div>15,14,36,12,11,24,35,28,4,7</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="070a20d4b49d235f85c0416ffff946534fe2acff3afd67544a1ffc0b6bc9f85b"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/070a20d4b49d235f85c0416ffff946534fe2acff3afd67544a1ffc0b6bc9f85b"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248451</div>
                <div class="col"><div>36,33,6,22,35,28,20,14,19,27</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="afcff5983ba6f746644b38d75de30e716ac4d3a51fd5d428ae1790d3f124e19f"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/afcff5983ba6f746644b38d75de30e716ac4d3a51fd5d428ae1790d3f124e19f"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248450</div>
                <div class="col"><div>25,22,15,3,10,1,11,34,9,24</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="70c2b1be0b4d1be55c44855d06ae04afdbaeabb8e1c3f31b9a14ccad30a613d8"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/70c2b1be0b4d1be55c44855d06ae04afdbaeabb8e1c3f31b9a14ccad30a613d8"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248449</div>
                <div class="col"><div>30,11,35,31,14,23,20,26,12,3</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="142ab4d9053462d1546f9fb6ef2d2281b2a727fdbc768903fcf001b0f438f0d1"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/142ab4d9053462d1546f9fb6ef2d2281b2a727fdbc768903fcf001b0f438f0d1"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248448</div>
                <div class="col"><div>31,22,10,2,15,32,28,27,14,12</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="8c7f13e4d8db7e8f6609d05ddf82d93d1a62120c5d25d07a1bcac30b08ee4280"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/8c7f13e4d8db7e8f6609d05ddf82d93d1a62120c5d25d07a1bcac30b08ee4280"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248447</div>
                <div class="col"><div>20,16,4,38,33,9,36,34,27,12</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="b5275e8d8d68c48b8a558d8bb376a4bf90a91b7ba67e45e3e76f74b1ecd7a090"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/b5275e8d8d68c48b8a558d8bb376a4bf90a91b7ba67e45e3e76f74b1ecd7a090"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248446</div>
                <div class="col"><div>35,17,12,26,20,25,28,8,13,23</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="5fce829220fdecb806638eee7945c5cfa3f311a192acb6b877ae4f70852c3beb"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/5fce829220fdecb806638eee7945c5cfa3f311a192acb6b877ae4f70852c3beb"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248445</div>
                <div class="col"><div>35,24,7,26,12,14,5,13,32,21</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="fbee749572e591a39d172bd618ed74d8161514a183888b51e200db9f9e274e51"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/fbee749572e591a39d172bd618ed74d8161514a183888b51e200db9f9e274e51"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248444</div>
                <div class="col"><div>19,27,36,39,5,13,1,33,22,23</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="8d329e277b53f6c2e48a9a65b2d858961a5afc6965a7039be402cdc5ed8ebc61"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/8d329e277b53f6c2e48a9a65b2d858961a5afc6965a7039be402cdc5ed8ebc61"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248443</div>
                <div class="col"><div>26,15,1,29,40,5,31,9,30,24</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="60dc4c4de2106502c53ec3c2924035ff6f172bf93d6d2ca63362ea43e72b4c95"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/60dc4c4de2106502c53ec3c2924035ff6f172bf93d6d2ca63362ea43e72b4c95"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248442</div>
                <div class="col"><div>21,30,5,15,23,32,7,8,34,12</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="f99d46e66030b8da555d2362ce9ebd909de3cf06e630439136ce8aa8f1af2d30"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/f99d46e66030b8da555d2362ce9ebd909de3cf06e630439136ce8aa8f1af2d30"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248441</div>
                <div class="col"><div>23,2,33,25,17,22,18,26,11,34</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="bc444f198370ef140fd61fb0476656114010b8d4eb7b1b06f6460b3608fac50b"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/bc444f198370ef140fd61fb0476656114010b8d4eb7b1b06f6460b3608fac50b"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248440</div>
                <div class="col"><div>16,15,18,14,34,23,35,30,33,17</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="cea7b7de76f26da504c4738b2029e1c1b4783601192b59f2cf888e7d634762c0"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/cea7b7de76f26da504c4738b2029e1c1b4783601192b59f2cf888e7d634762c0"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248439</div>
                <div class="col"><div>18,27,11,7,38,34,29,4,36,31</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="9582a222d51e5e713eeb7353ab852413814b018f1ac2c94f32e84decdfb900c0"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/9582a222d51e5e713eeb7353ab852413814b018f1ac2c94f32e84decdfb900c0"
                    >Verify</a
                  >
                </div>
              </li>
              <li class="item flex">
                <div class="col hover">3248438</div>
                <div class="col"><div>22,6,11,7,5,35,1,29,15,12</div></div>
                <div class="seed-box col-2">
                  <input
                    type="text"
                    class="seed"
                    readonly=""
                    value="021d51f6968172b779b7e3fae96d2ff18828041bdf9206d4564e3f89cf3011e9"
                  /><a
                    class="cl-primary"
                    href="/keno_help/validate/021d51f6968172b779b7e3fae96d2ff18828041bdf9206d4564e3f89cf3011e9"
                    >Verify</a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class="sc-cCcXHH dXTFyi pagination">
            <div class="sc-cidDSM dmcoXZ">Total 162423</div>
            <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs pages-wrap">
              <button class="active" disabled="">1</button><button class=""
                >2</button
              ><button class="">3</button>
            </div>
            <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs page-pn">
              <button disabled="" class="disabled previous-btn"
                ><svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="sc-gsDKAQ hxODWG icon prev"
                  ><use xlink:href="#icon_Arrow"></use></svg
                ></button
              ><button class="next-page"
                ><svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  class="sc-gsDKAQ hxODWG icon next"
                  ><use xlink:href="#icon_Arrow"></use></svg
                ></button
              >
            </div>
          </div>
        </div>
      </div>
    {/if}
    {#if activeTabB === "tabB3"}
      <div class="tabs-view" style="transform: none;">
        <div id="contest" class="sc-bXRjm XJNrz space-area">
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon contest__rules"
            ><use xlink:href="#icon_Help"></use></svg
          >
          <div class="sc-cnHmbd gfqJIR" style="opacity: 1; transform: none;">
            <div class="sc-kOcGyv bZdwBe">
              <div class="contest__top radius">
                <div class="sc-ePIFMk etgLiE">
                  <div class="trophy">
                    <img
                      src="https://static.nanogames.io/assets/trophy.424f8523.png"
                    />
                  </div>
                  <div>
                    <div class="type ttc">daily</div>
                    <div class="title">Contest prize pool</div>
                    <div class="prize-amount">
                      <img
                        class="currency-icon"
                        src="/coin/NND.black.png"
                      /><span>508.24</span><span class="currency-name">
                        NND</span
                      >
                    </div>
                  </div>
                </div>
                <div class="sc-iNpzLj kigfAw">
                  <div class="text">
                    Who's the invincible champion at the high table? Let's see
                    what a badass you can be!
                  </div>
                  <button
                    class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal breathe"
                    ><div class="button-inner">Participate Now</div></button
                  >
                </div>
                <div class="sc-eQxpLG bAjcBf">
                  <img
                    class="img-winner"
                    src="https://static.nanogames.io/assets/winner.fd82f171.png"
                    alt=""
                  />
                  <div class="champion-layout">
                    <a
                      class="sc-jUosCB iTDswZ user-info head"
                      href="/keno-multiplayer"
                      ><img
                        class="avatar"
                        src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                      /><svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        class="avatar-icon"
                        ><path
                          fill="#ffd308"
                          d="M27.924 14.807l-4.892 11.74h-14.063l-4.892-11.74c-1.198-0.105-2.14-1.099-2.14-2.324 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.498-0.157 0.957-0.421 1.336 0.827 1.307 2.274 2.18 3.937 2.18 2.182 0 3.999-1.497 4.522-3.516l0.035-0.197 0.131-2.472c-0.698-0.406-1.172-1.153-1.172-2.019 0-1.295 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.866-0.474 1.613-1.172 2.019l0.082 2.434 0.084 0.235c0.523 2.018 2.341 3.516 4.522 3.516 1.663 0 3.109-0.873 3.937-2.18-0.264-0.379-0.421-0.839-0.421-1.336 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 1.225-0.942 2.218-2.14 2.324z"
                        ></path></svg
                      ></a
                    >
                    <div class="content-box">
                      <div class="champion__title">
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          class="title-icon"
                          ><path
                            fill="#ffd308"
                            d="M27.924 14.807l-4.892 11.74h-14.063l-4.892-11.74c-1.198-0.105-2.14-1.099-2.14-2.324 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.498-0.157 0.957-0.421 1.336 0.827 1.307 2.274 2.18 3.937 2.18 2.182 0 3.999-1.497 4.522-3.516l0.035-0.197 0.131-2.472c-0.698-0.406-1.172-1.153-1.172-2.019 0-1.295 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.866-0.474 1.613-1.172 2.019l0.082 2.434 0.084 0.235c0.523 2.018 2.341 3.516 4.522 3.516 1.663 0 3.109-0.873 3.937-2.18-0.264-0.379-0.421-0.839-0.421-1.336 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 1.225-0.942 2.218-2.14 2.324z"
                          ></path></svg
                        >
                        <div class="contest-ml">Last Champion</div>
                      </div>
                      <a
                        class="sc-jUosCB iTDswZ user-info user-name"
                        href="/keno-multiplayer"
                        ><div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                      <div class="profit">
                        <div class="profit-name">Profit</div>
                        <div
                          class="sc-Galmp erPQzq coin notranslate prize-coin"
                        >
                          <img class="coin-icon" src="/coin/NND.black.png" />
                          <div class="amount">
                            <span class="amount-str">370.484841</span>
                          </div>
                        </div>
                        <div class="percent">(50%)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-cnTVOG jxPnWI is-active">
                <div class="title">
                  <div class="active-icon">
                    <svg
                      class="bg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 81 32"
                      ><path
                        d="M1.28 0h78.201c0.707 0 1.28 0.573 1.28 1.28 0 0.26-0.079 0.513-0.227 0.727l-10.079 14.603c-0.325 0.47-0.298 1.099 0.065 1.541l9.676 11.756c0.449 0.546 0.371 1.352-0.175 1.802-0.229 0.189-0.517 0.292-0.813 0.292h-77.929c-0.707 0-1.28-0.573-1.28-1.28v-29.44c0-0.707 0.573-1.28 1.28-1.28z"
                      ></path></svg
                    ><svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      class="sc-gsDKAQ hxODWG icon"
                      ><use xlink:href="#icon_Loading"></use></svg
                    >
                    <div class="label">Active</div>
                  </div>
                  <div class="time">12/10/2023 ~ 12/11/2023</div>
                </div>
                <div class="list">
                  <div class="list-head item">
                    <div class="position">#</div>
                    <div class="user-td">Player</div>
                    <div class="wager">Wagered</div>
                    <div class="prize">Prize</div>
                  </div>
                  <div class="item">
                    <div class="position">
                      <img
                        class="user-ico"
                        src="https://static.nanogames.io/assets/gold.92faf9c1.svg"
                      />
                    </div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/413359"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/413359/s"
                        />
                        <div class="name">spartman</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">5253.71931</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">254.090423</span>
                        </div>
                      </div>
                      <div class="percent">(50%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position">
                      <img
                        class="user-ico"
                        src="https://static.nanogames.io/assets/silver.9f31a5f7.svg"
                      />
                    </div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">4259.76467</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">127.045211</span>
                        </div>
                      </div>
                      <div class="percent">(25%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position">
                      <img
                        class="user-ico"
                        src="https://static.nanogames.io/assets/copper.39898678.svg"
                      />
                    </div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/382469"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/382469/s"
                        />
                        <div class="name">Msn</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str"
                              >3075.946<span class="suffix">00</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">60.9817016</span>
                        </div>
                      </div>
                      <div class="percent">(12%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>4th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/539289"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/539289/s"
                        />
                        <div class="name">Psjozayoyb</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">1680.15102</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">30.4908508</span>
                        </div>
                      </div>
                      <div class="percent">(6%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>5th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">1009.44722</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">15.2454254</span>
                        </div>
                      </div>
                      <div class="percent">(3%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>6th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/544926"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/544926/s"
                        />
                        <div class="name">flowertim</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">871.579999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str"
                            >7.6227127<span class="suffix">0</span></span
                          >
                        </div>
                      </div>
                      <div class="percent">(1.5%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>7th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">708.881979</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">4.57362762</span>
                        </div>
                      </div>
                      <div class="percent">(0.9%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>8th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/319359"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/319359/s"
                        />
                        <div class="name">RuffRollr777</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">656.768526</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">3.55726593</span>
                        </div>
                      </div>
                      <div class="percent">(0.7%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>9th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">629.371958</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">2.54090423</span>
                        </div>
                      </div>
                      <div class="percent">(0.5%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>10th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">587.299179</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">2.03272338</span>
                        </div>
                      </div>
                      <div class="percent">(0.4%)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sc-cnTVOG jxPnWI">
                <div class="title">
                  <div class="active-icon">
                    <svg
                      class="bg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 81 32"
                      ><path
                        d="M1.28 0h78.201c0.707 0 1.28 0.573 1.28 1.28 0 0.26-0.079 0.513-0.227 0.727l-10.079 14.603c-0.325 0.47-0.298 1.099 0.065 1.541l9.676 11.756c0.449 0.546 0.371 1.352-0.175 1.802-0.229 0.189-0.517 0.292-0.813 0.292h-77.929c-0.707 0-1.28-0.573-1.28-1.28v-29.44c0-0.707 0.573-1.28 1.28-1.28z"
                      ></path></svg
                    >
                    <div class="label">Completed</div>
                  </div>
                  <div class="time">12/9/2023 ~ 12/10/2023</div>
                </div>
                <div class="list">
                  <div class="list-head item">
                    <div class="position">#</div>
                    <div class="user-td">Player</div>
                    <div class="wager">Wagered</div>
                    <div class="prize">Prize</div>
                  </div>
                  <div class="item">
                    <div class="position">
                      <img
                        class="user-ico"
                        src="https://static.nanogames.io/assets/gold.92faf9c1.svg"
                      />
                    </div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str"
                              >94574.<span class="suffix">0000</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">370.484841</span>
                        </div>
                      </div>
                      <div class="percent">(50%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position">
                      <img
                        class="user-ico"
                        src="https://static.nanogames.io/assets/silver.9f31a5f7.svg"
                      />
                    </div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str"
                              >89000.<span class="suffix">0000</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str"
                            >185.24242<span class="suffix">0</span></span
                          >
                        </div>
                      </div>
                      <div class="percent">(25%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position">
                      <img
                        class="user-ico"
                        src="https://static.nanogames.io/assets/copper.39898678.svg"
                      />
                    </div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">86257.3647</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str"
                            >88.916362<span class="suffix">0</span></span
                          >
                        </div>
                      </div>
                      <div class="percent">(12%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>4th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/2461"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/2461/s"
                        />
                        <div class="name">mpletcher</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">66142.4491</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str"
                            >44.458181<span class="suffix">0</span></span
                          >
                        </div>
                      </div>
                      <div class="percent">(6%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>5th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">49635.1505</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">22.2290905</span>
                        </div>
                      </div>
                      <div class="percent">(3%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>6th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/319359"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/319359/s"
                        />
                        <div class="name">RuffRollr777</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">23070.0094</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">11.1145452</span>
                        </div>
                      </div>
                      <div class="percent">(1.5%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>7th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/1446"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/1446/s"
                        />
                        <div class="name">👃bloodman123👃</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">16105.8182</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">6.66872715</span>
                        </div>
                      </div>
                      <div class="percent">(0.9%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>8th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">14240.9215</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">5.18678778</span>
                        </div>
                      </div>
                      <div class="percent">(0.7%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>9th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/520259"
                        ><img
                          class="avatar"
                          src="https://img2.nanogames.io/avatar/520259/s"
                        />
                        <div class="name">CHARMED</div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">14177.0614</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">3.70484841</span>
                        </div>
                      </div>
                      <div class="percent">(0.5%)</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="position"><div>10th</div></div>
                    <div class="user-td">
                      <a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/keno-multiplayer"
                        ><img
                          class="avatar"
                          src="https://static.nanogames.io/assets/avatar.a1ff78fe.png"
                        />
                        <div class="name">
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        </div></a
                      >
                    </div>
                    <div class="wager">
                      <div class="sc-cCKzRf QhTvV icon monospace">
                        <div class="fait">$</div>
                        <div class="sc-Galmp erPQzq coin notranslate">
                          <div class="amount">
                            <span class="amount-str">13473.5331</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="prize flex-middle">
                      <div
                        class="sc-Galmp erPQzq coin notranslate prize-coin monospace"
                      >
                        <img class="coin-icon" src="/coin/NND.black.png" />
                        <div class="amount">
                          <span class="amount-str">2.96387873</span>
                        </div>
                      </div>
                      <div class="percent">(0.4%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
  <div class="sc-kTqLtj hsmSjD">
    <div class="intro-title">
      <p>Keno</p>
      <div class="intro-tags">
        <p>Our Best Games</p>
        <p>BC Originals</p>
        <p>Recommended Games</p>
        <p>Video Bingo</p>
        <p>Original</p>
      </div>
    </div>
    <div class="description">
      Keno is a fast-paced, fun game that allows you to choose:
    </div>
    <button class="intro-detail"
      >Details<svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Arrow"></use></svg
      ></button
    >
  </div>
  <div class="sc-bxDdli dIbEXE sc-haTkiu jqCVCc">
    <div class="swrap-header">
      <div class="tit">Recommended<span class="total">22</span></div>
      <div class="sc-brSvTw kpCklu navigation-btns-wrap">
        <button
          class="prev navigation-prev-recommend swiper-button-disabled"
          disabled=""
          ><svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Arrow"></use></svg
          ></button
        ><button class="navigation-next-recommend"
          ><svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Arrow"></use></svg
          ></button
        >
      </div>
    </div>
    <div
      class="swiper swiper-initialized swiper-horizontal swiper-pointer-events grid-list"
    >
      <div
        class="swiper-wrapper"
        style="transform: translate3d(0px, 0px, 0px);"
      >
        <div class="swiper-slide swiper-slide-active" style="width: 964px;">
          <div class="sc-bjeSbO hkZEZA gird-list">
            <div class="sc-gfqkcP epfPPG bot-view game-crash">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/crash"
                ><div class="lazy-img img">
                  <img
                    src="https://img2.nanogames.io/game/image/5ab9c93b-8f99-4ff8-94ae-e412357578a6.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/crash">Crash</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-ClassicDice">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/classic-dice"
                ><div class="lazy-img img">
                  <img
                    src="https://img2.nanogames.io/game/image/455dda9f-80eb-438c-958c-45c355c3c659.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/classic-dice">Classic Dice</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-Mines">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/mines"
                ><div class="lazy-img img">
                  <img
                    src="https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/mines">Mines</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-SlotsOrientalBeauties">
              <a
                class="sc-hKTqa dbJiKC game-item-wrap"
                href="/oriental-beauties"
                ><div class="lazy-img img">
                  <img
                    src="https://img2.nanogames.io/game/image/7f1f471d-0768-42f1-9d92-e70ce0e10235.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 2.1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/oriental-beauties">Beauties</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-Plinko">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/plinko"
                ><div class="lazy-img img">
                  <img
                    src="https://img2.nanogames.io/game/image/ae817f12-fa67-49b8-b33e-6cafda497488.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/plinko">Plinko</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-Limbo">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/limbo"
                ><div class="lazy-img img">
                  <img
                    src="https://img2.nanogames.io/game/image/79b8b2c1-07da-4534-a378-cecefb1aade8.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/limbo">Limbo</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide swiper-slide-next" style="width: 964px;">
          <div class="sc-bjeSbO hkZEZA gird-list">
            <div class="sc-gfqkcP epfPPG bot-view game-Baccarat">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/baccarat"
                ><div class="lazy-img img">
                  <img
                    src="https://img2.nanogames.io/game/image/ca585f56-37a4-468f-9762-574b5874c78b.png"
                    alt=""
                  />
                </div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1.1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/baccarat">Baccarat</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-HashDice">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/hash-dice"
                ><div class="lazy-img img"></div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/hash-dice">Hash Dice</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-KenoSingle">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/keno"
                ><div class="lazy-img img"></div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 1%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/keno">Keno Single</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view game-SlotsEgyptianAdventure">
              <a class="sc-hKTqa dbJiKC game-item-wrap" href="/egyptian"
                ><div class="lazy-img img"></div>
                <div class="hover-mask">
                  <div class="house-edge">House Edge 2.49%</div>
                  <svg
                    class="play-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 63 63"
                    ><defs></defs><g fill="none" fill-rule="evenodd"
                      ><circle
                        cx="31.3"
                        cy="31.3"
                        r="30.3"
                        fill="#000"
                        fill-opacity=".2"
                        stroke="#E5E7EE"
                        stroke-width="2"
                      ></circle><path
                        fill="#F5F6F7"
                        d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"
                      ></path></g
                    ></svg
                  >
                </div></a
              >
              <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                  <a class="item" href="/egyptian">Egyptian</a>
                  <div class="help-btn-wrap">
                    <button
                      ><svg
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        class="sc-gsDKAQ hxODWG icon"
                        ><use xlink:href="#icon_Help"></use></svg
                      ></button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @media (max-width: 1000px) {
    .no-mobile {
      display: none !important;
    }
    .mobile {
      display: block;
    }
  }
  @media (min-width: 1000px) {
    .no-web {
      display: none !important;
    }
    .web {
      display: block;
    }
  }

  .flex-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .gJxbeS.game-style0,
  .gJxbeS.game-style1,
  .gJxbeS.game-style-iframe {
    max-width: 1368px;
    margin: 0px auto;
    padding: 1.25rem 0.625rem;
  }
  .gJxbeS {
    min-height: 90vh;
  }
  .gJxbeS.game-style0 .game-area,
  .gJxbeS.game-style1 .game-area,
  .gJxbeS.game-style-iframe .game-area {
    display: flex;
    flex-wrap: wrap;
  }
  .iClKJL .game-main.game-main {
    min-height: auto;
  }
  .gJxbeS.game-style1 .game-main {
    min-height: 47.5rem;
  }
  .gJxbeS.game-style0 .game-main,
  .gJxbeS.game-style1 .game-main,
  .gJxbeS.game-style-iframe .game-main {
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    overflow: hidden;
  }
  .gJxbeS .game-main {
    position: relative;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }
  .eQfpOS.style1 {
    order: 2;
    min-height: 230px;
    margin-top: 1px;
  }
  .eQfpOS {
    display: flex;
  }
  .eQfpOS.style1 .game-control-switch {
    width: 3rem;
    flex-direction: column;
    position: relative;
  }
  .eQfpOS .game-control-switch {
    display: flex;
    flex: 0 0 auto;
  }
  .ikWSlH {
    display: flex;
    opacity: 1;
  }
  .eQfpOS.style1 .game-control-switch > button.is-active {
    border-right: 2px solid rgb(67, 179, 9);
    background-image: linear-gradient(
      to left,
      rgba(91, 174, 28, 0.176),
      rgba(0, 0, 0, 0) 50%
    );
  }
  .eQfpOS.style1 .game-control-switch > button {
    position: relative;
  }
  .eQfpOS .game-control-switch > button.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .eQfpOS .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
  }
  button {
    border: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    background-color: transparent;
  }
  .eQfpOS.style1 .game-control-switch .label {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    white-space: nowrap;
  }
  .eQfpOS.style1 .game-control-switch > button {
    position: relative;
  }

  .eQfpOS .game-control-switch > button {
    flex: 1 1 0%;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
  }
  .eQfpOS.style1 .game-control-switch::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    width: 1px;
    background-color: rgba(49, 52, 60, 0.5);
  }
  .eQfpOS.style1 .game-control-panel {
    padding: 1.25rem 1.375rem;
  }
  .eQfpOS .game-control-panel {
    flex: 1 1 0%;
  }
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }
  .jsLoxW .bet-button {
    width: 90%;
    max-width: 19.75rem;
    margin: 1rem auto 1.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(
      from 1turn,
      rgb(67, 179, 9),
      rgb(93, 219, 28)
    );
  }
  .cBmlor.button-big {
    height: 3.625rem;
  }
  .cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .jsLoxW img {
    width: 0.9375rem;
    height: 0.9375rem;
    margin-right: 0.3125rem;
  }
  .lgcQbT {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }
  .lgcQbT > div {
    flex-basis: 49%;
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
  .bxrMFn {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 1rem;
  }
  .bxrMFn .max-profit {
    position: relative;
    margin-left: 0.1875rem;
    width: 1rem;
    height: 1rem;
  }
  .bxrMFn .icon {
    fill: rgb(67, 179, 9);
    width: 1rem;
    height: 1rem;
    vertical-align: top;
    transform: rotate(180deg);
    cursor: pointer;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .bxrMFn .tip {
    display: none;
    box-sizing: border-box;
    position: absolute;
    left: -0.75rem;
    top: -2.625rem;
    height: 2.25rem;
    line-height: 1.25rem;
    padding: 0.3125rem 0.625rem;
    white-space: nowrap;
    color: rgba(153, 164, 176, 0.8);
    background-color: rgb(37, 39, 43);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px;
    border-radius: 1.125rem;
  }
  .bxrMFn .tit {
    color: rgb(128, 143, 158);
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .gOLODp .label-amount {
    margin-left: auto;
  }
  .lgcQbT .input-control {
    height: 3rem;
    line-height: 3rem;
    border-radius: 3rem;
  }
  .gJxbeS .input-control {
    border-color: transparent;
  }
  .lnBinR .input-control input {
    font-weight: bold;
  }
  .eQfpOS .input-control input {
    color: rgb(245, 246, 247);
  }
  .gcQjQT .input-control textarea,
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }
  .gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
  }
  .jsLoxW img {
    width: 0.9375rem;
    height: 0.9375rem;
    margin-right: 0.3125rem;
  }
  .eQfpOS .input-control .button-group {
    margin-right: -1.125rem;
  }
  .lnBinR .button-group {
    width: 8.375rem;
    position: relative;
  }
  .bswIvI {
    display: flex;
  }
  .bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
  }
  .bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
  }
  .lgcQbT button {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .bswIvI > button {
    height: 2.25rem;
    width: 2.75rem;
    padding: 0px;
    color: rgb(153, 164, 176);
    background: rgb(49, 52, 60);
    margin-left: 1px;
  }
  .gfnHxc .icon:first-of-type {
    transform: rotate(-90deg);
    margin-bottom: 0.125rem;
  }
  .gfnHxc .icon:last-of-type {
    transform: rotate(90deg);
  }
  .gfnHxc .icon {
    width: 0.75rem;
    height: 0.75rem;
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .lgcQbT > div {
    flex-basis: 49%;
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
  .lgcQbT .input-control {
    height: 3rem;
    line-height: 3rem;
    border-radius: 3rem;
  }
  .gJxbeS .input-control {
    border-color: transparent;
  }
  .gcQjQT .input-control {
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
  .dChWmb {
    flex: 1 1 0%;
    height: 100%;
    margin: 0px -1.375rem;
  }
  .gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
  }
  .dChWmb .select-trigger {
    background-color: transparent;
  }

  .gJxbeS .select-trigger {
    font-weight: bold;
  }
  .gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
  }
  .gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .gOHquD .select-trigger .arrow > svg {
    font-size: 0.625rem;
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .kDuLvp {
    margin-top: 1rem;
  }
  .kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .lgcQbT .input-control {
    height: 3rem;
    line-height: 3rem;
    border-radius: 3rem;
  }
  .gJxbeS .input-control {
    border-color: transparent;
  }
  .eQfpOS .input-control {
    background-color: rgba(49, 52, 60, 0.4);
  }
  .kDuLvp .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    padding: 0px 1.25rem;
    opacity: 1;
  }
  .jsLoxW .pick-wrap input[readonly] {
    opacity: 1;
    font-weight: 600;
  }
  .kDuLvp .input-control textarea[readonly],
  .kDuLvp .input-control input[readonly] {
    opacity: 0.5;
  }
  .eQfpOS .input-control input {
    color: rgb(245, 246, 247);
  }
  .kDuLvp .input-control textarea,
  .kDuLvp .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }
  .fWAvBM .copy-button {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: -1.25rem;
  }
  .lgcQbT button {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .lgcQbT .hold-btn {
    flex-basis: 48%;
  }
  .gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
  }
  .gJxbeS.game-style0 .game-view,
  .gJxbeS.game-style1 .game-view,
  .gJxbeS.game-style-iframe .game-view {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }
  .jOOXMd {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }
  .jOOXMd .jackpot-enter {
    margin-left: 1.5rem;
  }
  .hSKlkh {
    width: 10.125rem;
    height: 100%;
    line-height: 1.25rem;
    border-radius: 1.375rem;
    position: relative;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(49, 52, 60, 0.4);
  }
  .hSKlkh .title {
    font-weight: bold;
    height: 1.25rem;
  }
  .hSKlkh .title .tit {
    margin-right: 0.25rem;
    color: rgb(67, 179, 9);
  }
  .hSKlkh .coin {
    vertical-align: top;
    height: 1.25rem;
    margin-top: -0.25rem;
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .hSKlkh .coin .coin-icon {
    width: 1rem;
    height: 1rem;
  }
  .erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }
  .hSKlkh .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .hSKlkh .coin .amount .amount-str {
    width: auto;
  }
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .jOOXMd .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
  }
  .jOOXMd .empty-item {
    display: flex;
    width: 100%;
    height: 100%;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.375rem;
  }
  .jOOXMd .empty-item > p {
    margin: 0px;
    padding: 0px 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 0.8em 0;
  }
  .cxPcDj {
    padding: 0px 1.875rem 1.875rem;
  }
  .fQmThe {
    position: relative;
  }
  .cKpuTs {
    position: relative;
    padding: 2.5rem 1.25rem;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0.1875rem;
  }
  .cKpuTs .keno-wrap {
    position: relative;
  }
  .cxPcDj .keno-item-wrap {
    position: relative;
    padding-bottom: 0.3125rem;
  }
  .cKpuTs .keno-wrap .keno-list {
    display: grid;
    gap: 1em 0.7em;
    grid-template-columns: repeat(10, 1fr);
  }
  .cKpuTs .keno_styles_item {
    cursor: pointer;
    border: none;
    padding: 0px;
    border-radius: 200px;
    background-color: transparent;
    position: relative;
  }
  .cKpuTs .keno_styles_item .keno-ritem {
    background-color: rgb(49, 52, 60);
    position: absolute;
    inset: 0px;
    cursor: pointer;
    transition-duration: 300ms;
    transition-property: background-color, box-shadow, transform;
    box-shadow: rgb(36, 38, 43) 0px 4px;
    border-radius: 3.5px;
    overflow: hidden;
    animation: 0.2s ease 0s 1 normal none running elastic;
    transition: 0.5s;
  }
  .cKpuTs .keno_styles_item .keno-ritem:hover {
    top: -5px;
    bottom: 5px;
    background-color: rgb(111, 112, 114);
  }
  .cKpuTs .keno_styles_item .keno-ritem .keno-num {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: rgb(153, 164, 176);
  }

  .cKpuTs .keno_styles_item::after {
    content: "";
    display: block;
    padding-top: 100%;
  }
  .krTDHD {
    margin-top: 1.5rem;
    position: relative;
  }
  .ZOVvL {
    color: rgb(153, 164, 176);
    display: grid;
    grid-template-rows: auto auto;
    position: relative;
    min-height: 8em;
    gap: 0.8em;
    overflow-x: auto;
  }
  .ZOVvL .game_payout {
    display: grid;
    grid-auto-flow: column;
    gap: 0.8em;
    border-radius: 0.1875rem;
    font-weight: bold;
  }
  .ZOVvL .no_select {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 0.1875rem;
    background-color: rgb(49, 52, 60);
    color: rgb(153, 164, 176);
  }
  .cxPcDj .bottom-line {
    height: 0.25rem;
    border-radius: 0.1875rem;
    background: rgb(67, 179, 9);
  }
  .jLprWf {
    position: absolute;
    z-index: 2;
    right: 1.5rem;
    bottom: 1.25rem;
    font-weight: 500;
    min-width: 8.75rem;
    padding: 0px 1.125rem;
    border-radius: 1.125rem;
    height: 2.25rem;
    line-height: 2.25rem;
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(49, 52, 60, 0.4);
  }
  .fQmThe .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
  }
  .gJxbeS .game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
  }
  .gJxbeS .game-actions::before {
    content: "";
    flex: 1 1 0%;
  }
  .gJxbeS .action-item {
    cursor: pointer;
    margin-right: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .gJxbeS .action-item.active .icon {
    fill: rgb(67, 179, 9);
  }

  .gJxbeS .action-item .icon {
    fill: rgb(153, 164, 176);
    transition: all 0.3s ease-in-out 0s;
  }
  .gJxbeS .game-actions::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
  }
  .cWaNyl {
    margin-left: 0.9375rem;
    border-radius: 1.25rem;
    width: 40%;
    max-width: 542px;
    display: flex;
    flex-direction: column;
    background-color: rgb(30, 32, 36);
  }
  .eXSObm {
    border-radius: 0.1875rem;
    padding: 15px 15px 10px;
    height: 85px;
    box-sizing: border-box;
    position: relative;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
  .eXSObm .history {
    text-align: right;
    z-index: 11;
  }
  .eXSObm .history svg {
    display: inline-block;
    vertical-align: top;
    margin: 1px 3px 0px 0px;
  }
  .eXSObm .history svg {
    display: inline-block;
    vertical-align: top;
    margin: 1px 3px 0px 0px;
  }
  .eXSObm .title .time {
    min-width: 2.1875rem;
    display: inline-block;
  }
  .eXSObm .wrap.propgress {
    flex: 0 0 auto;
    height: 0.375rem;
    margin-top: auto;
    background-color: rgb(49, 52, 60);
    border-radius: 0.1875rem;
    position: relative;
    overflow: hidden;
    z-index: 0;
  }
  .eXSObm .wrap.propgress .line {
    background-color: rgb(67, 179, 9);
    width: 100%;
    height: 100%;
    border-radius: 0.21875rem;
    position: absolute;
  }
  .eXSObm::after {
    content: "";
    position: absolute;
    left: 0.875rem;
    right: 0.875rem;
    bottom: -0.5rem;
    height: 1px;
    z-index: 1;
    background-color: rgba(49, 52, 60, 0.6);
  }
  .buHOgK {
    flex: 1 1 auto;
    box-sizing: border-box;
    min-height: 22rem;
    padding: 0.625rem;
    height: 100%;
    overflow-y: auto;
  }
  .buHOgK table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .buHOgK table tr {
    height: 2.5rem;
  }
  .buHOgK table th:first-of-type,
  .buHOgK table td:first-of-type {
    text-align: left;
  }
  .buHOgK .th-w1 {
    width: 14%;
  }
  .buHOgK .th-w2 {
    width: auto;
  }
  .buHOgK .th-w3 {
    width: 15%;
  }
  .buHOgK .th-w3 {
    width: 15%;
  }
  .buHOgK table th {
    font-weight: 400;
  }
  .buHOgK .th-w3 {
    width: 15%;
  }
  .gJxbeS .game-tabs .tabs-navs {
    margin-bottom: 0.75rem;
    margin-left: 0.625rem;
    display: inline-flex;
  }
  .kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
  }
  .gJxbeS .game-tabs .tabs-navs .tabs-nav {
    width: 5.625rem;
  }
  .kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
  }
  .kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
    border-radius: 1.125rem;
    background-image: linear-gradient(
      to left,
      rgb(85, 89, 102),
      rgb(85, 89, 102),
      rgb(88, 174, 20)
    );
    opacity: 0.4;
    height: 100%;
    /* position: absolute;
    left: 0px;
    top: 0px; */
    transition:
      right 0.2s ease-out 0s,
      left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
  }
  .tabs-navs .bg {
    border-radius: 1.125rem;
    background-image: linear-gradient(
      to left,
      rgb(85, 89, 102),
      rgb(85, 89, 102),
      rgb(88, 174, 20)
    );
    opacity: 0.4;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition:
      right 0.2s ease-out 0s,
      left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
  }
  .gJxbeS .game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
  }
  .game-tabs {
    margin-top: 2.5rem;
  }
  .kQfmQV .tabs-view {
    position: relative;
  }
  .game-tabs .sc-bXRjm {
    margin-bottom: -1.5rem;
  }
  .game-tabs .sc-bXRjm {
    margin-bottom: -1.5rem;
  }
  .XJNrz.space-area {
    padding-top: 0.75rem;
  }
  .XJNrz {
    margin: 0px auto;
    position: relative;
  }
  .XJNrz .contest__rules {
    position: absolute;
    top: 3rem;
    right: 1.75rem;
    font-size: 1rem;
    fill: rgb(67, 179, 9);
    z-index: 12;
    cursor: pointer;
  }
  .bZdwBe .contest__top.radius {
    border-radius: 1.25rem;
  }
  .XJNrz .contest__top {
    border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
  }
  .bZdwBe .contest__top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    background: rgb(30, 32, 36);
    padding: 0px 1rem 1rem 0px;
  }
  .etgLiE {
    flex: 1 1 0%;
    margin: 1rem 0px 0px 1rem;
    padding-top: 1.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .etgLiE .trophy {
    width: 10rem;
    margin-right: 1rem;
  }
  .etgLiE .trophy img {
    width: 100%;
  }
  .etgLiE .type {
    width: 5.5625rem;
    height: 1.3125rem;
    line-height: 1.3125rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
    color: rgb(67, 179, 9);
    margin-left: 0.625rem;
    background-image: url(https://static.nanogames.io/assets/grass_left.b89126fa.svg),
      url(https://static.nanogames.io/assets/grass_right.8cc9793f.svg);
    background-repeat: no-repeat;
    background-position:
      left center,
      right center;
    background-size: auto 100%;
  }

  .ttc {
    text-transform: capitalize;
  }
  .etgLiE .title {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.56;
    color: rgb(245, 246, 247);
    margin: 0px 0px 0.75rem 0.625rem;
  }
  .etgLiE .prize-amount {
    height: 3rem;
    width: 16.375rem;
    padding: 0.625rem 1.25rem;
    border-radius: 0.625rem;
    background-color: rgba(49, 52, 60, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: rgb(246, 199, 34);
    letter-spacing: -1px;
  }
  .etgLiE .currency-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
  .etgLiE .currency-name {
    color: rgb(245, 246, 247);
    margin-left: 0.5rem;
  }
  .kigfAw {
    flex: 4 1 0%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 9.5rem;
    border-radius: 0.625rem;
    background: rgba(49, 52, 60, 0.6);
    margin: 1rem 0px 0px 1rem;
  }
  .kigfAw .text {
    max-width: 19.125rem;
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
    opacity: 0.6;
    color: rgb(153, 164, 176);
    text-align: center;
  }
  .kigfAw .breathe {
    width: 15.625rem;
    height: 3.5rem;
    border-radius: 1.75rem;
    margin: 0px auto;
  }
  .fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(
      from 1turn,
      rgb(67, 179, 9),
      rgb(93, 219, 28)
    );
  }
  .bAjcBf {
    flex: 4 1 0%;
    margin: 1rem 0px 0px 1rem;
    min-width: 16.5625rem;
    height: 9.5rem;
    border-radius: 0.625rem;
    background: rgba(49, 52, 60, 0.6);
    position: relative;
  }
  .bAjcBf .img-winner {
    position: absolute;
    top: -0.21875rem;
    left: -0.25rem;
    width: 3.75rem;
    height: 3.75rem;
  }
  .bAjcBf .champion-layout {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
  }
  .bAjcBf .head {
    flex-shrink: 0;
    position: relative;
    width: 3.5625rem;
    height: 3.5625rem;
    border-radius: 50%;
    border: 2px solid rgb(255, 217, 18);
    margin-right: 0.75rem;
    margin-top: 2.25rem;
  }
  .iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
  .bAjcBf .head .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .iTDswZ .avatar {
    width: 1.62em;
    height: 1.62em;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  .bAjcBf .head .avatar-icon {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: -1.125rem;
    left: 50%;
    transform: translateX(-50%);
    fill: rgb(255, 217, 18);
  }
  .bAjcBf .champion__title {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 0.875rem;
  }
  .bAjcBf .champion__title .title-icon {
    fill: rgb(129, 141, 153);
    width: 1.25rem;
    height: 1.25rem;
  }
  .bAjcBf .champion__title .contest-ml {
    font-size: 0.75rem;
    opacity: 0.6;
    color: rgb(153, 164, 176);
    margin-left: 0.5625rem;
  }
  .bAjcBf .user-name {
    margin-bottom: 0.125rem;
  }
  .bAjcBf .user-name .name {
    font-family: inherit;
    color: rgb(245, 246, 247);
  }
  .iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iTDswZ.user-info .hidden-name {
    color: rgb(153, 164, 176);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .iTDswZ.user-info .hidden-name .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.125rem;
    fill: rgb(153, 164, 176);
  }
  .bAjcBf .profit {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.5rem;
  }
  .bAjcBf .profit-name {
    opacity: 0.6;
    color: rgb(153, 164, 176);
    margin-right: 0.625rem;
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }
  .bAjcBf .profit .amount {
    color: rgb(67, 179, 9);
  }
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .profit .amount {
    color: rgb(67, 179, 9);
  }
  .bAjcBf .percent {
    color: rgb(245, 246, 247);
  }
  .jxPnWI {
    border-radius: 1.25rem;
    background: rgb(30, 32, 36);
    margin: 0.75rem 0px;
  }
  .jxPnWI .title {
    position: relative;
    text-align: center;
    height: 3.375rem;
    line-height: 3.375rem;
    color: rgba(153, 164, 176, 0.6);
    font-size: 0.75rem;
  }
  .jxPnWI .active-icon {
    position: absolute;
    left: 0px;
    top: 1rem;
    width: 4rem;
    height: 1.875rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .jxPnWI.is-active .bg {
    fill: rgb(67, 179, 9) !important;
  }
  .jxPnWI .active-icon .bg {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 4.75rem;
    fill: rgba(49, 52, 60, 0.6);
  }
  .jxPnWI .active-icon .icon {
    position: relative;
    z-index: 2;
    fill: rgba(255, 255, 255, 0.8);
    animation: 5s linear 0s infinite normal none running rotate;
  }
  .jxPnWI.is-active .label {
    color: rgb(255, 255, 255);
  }
  .jxPnWI .active-icon .label {
    margin-left: 0.1875rem;
    position: relative;
    z-index: 2;
    color: rgb(245, 246, 247);
  }
  .jxPnWI .list {
    padding: 0px 0.75rem 0.75rem;
  }
  .jxPnWI .list-head {
    padding: 0px;
    color: rgba(153, 164, 176, 0.6);
    font-weight: normal;
    font-size: 0.75rem;
  }
  .jxPnWI .item {
    display: flex;
    padding: 0.625rem 0px;
    line-height: 1.625rem;
    border-radius: 0.1875rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
  }
  .jxPnWI .item > div:first-of-type {
    -webkit-box-pack: start;
    justify-content: flex-start;
  }
  .jxPnWI .list-head .position {
    color: rgba(153, 164, 176, 0.6);
  }
  .jxPnWI .item .position {
    color: rgb(153, 164, 176);
    font-weight: normal;
    flex: 0 1 24%;
  }
  .jxPnWI .item > div {
    display: flex;
    flex: 1 1 0%;
    box-sizing: border-box;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0.3125rem 0.625rem;
  }
  .jxPnWI .item .user-ico {
    width: auto;
    height: 1.625rem;
  }
  .jxPnWI .item .user-td {
    -webkit-box-pack: start;
    justify-content: flex-start;
  }
  .jxPnWI .item .wager {
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex: 0 1 15%;
  }
  .QhTvV {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .monospace {
    font-family: Monmono;
  }
  .QhTvV .fait {
    margin-right: 0.3125rem;
  }
  .jxPnWI .item > div:last-of-type {
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .flex-middle {
    display: flex;
    align-items: center;
  }
  .hsmSjD {
    width: 100%;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
    padding: 1.5rem 1.5rem 2rem;
    margin-top: 2rem;
  }
  .hsmSjD .intro-title {
    min-height: 5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .hsmSjD .intro-title > p {
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: 600;
    margin: 0px;
    white-space: nowrap;
  }
  .hsmSjD .intro-title .intro-tags {
    margin-left: 2.5rem;
    display: flex;
    flex-wrap: wrap;
  }
  .hsmSjD .intro-title .intro-tags > p {
    margin: 0px 1.125rem 0.3125rem 0px;
    padding: 0.5rem 1.25rem;
    border-radius: 1.125rem;
    background-color: rgb(43, 47, 54);
  }
  .hsmSjD .intro-title .intro-tags > p:last-of-type {
    margin-right: 0px;
  }
  .hsmSjD .description {
    margin-top: 0.75rem;
    line-height: 1.25rem;
  }
  .hsmSjD .intro-detail {
    width: 6.75rem;
    height: 2.5rem;
    margin-top: 2rem;
    border-radius: 1.25rem;
    background-color: rgba(49, 52, 60, 0.6);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .hsmSjD .intro-detail > svg {
    font-size: 0.5625rem;
    margin-left: 1.125rem;
  }
  .jqCVCc {
    margin-top: 2rem;
  }
  .jqCVCc .swrap-header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 0.625rem;
    margin-bottom: 0.625rem;
  }
  .jqCVCc .swrap-header .tit {
    margin-right: auto;
    display: flex;
  }
  .jqCVCc .swrap-header .total {
    margin-left: 0.625rem;
    color: rgb(67, 179, 9);
  }
  .kpCklu {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .kpCklu > button:first-child {
    margin-right: 4px;
  }

  .kpCklu button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
  }
  .kpCklu button.prev .icon {
    margin-left: -1px;
    transform: rotate(180deg);
  }
  .kpCklu button .icon {
    width: 0.9375rem;
    height: 0.9375rem;
    margin-left: 0.1875rem;
    margin-top: -0.0625rem;
  }
  .swiper-pointer-events {
    touch-action: pan-y;
  }
  .swiper {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
  }
  .swiper-android .swiper-slide,
  .swiper-wrapper {
    transform: translate(0);
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .hkZEZA {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-flow: dense;
    gap: 1.5rem 0.9375rem;
  }
  .epfPPG {
    flex: 1 1 0%;
    position: relative;
    user-select: none;
  }
  .dbJiKC {
    width: 100%;
    padding-top: 100%;
    position: relative;
    display: block;
    border-radius: 1.25rem;
    overflow: hidden;
    transform: translateZ(0px);
  }
  .dbJiKC .img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    background: rgb(49, 52, 60);
  }
  .dbJiKC .img img {
    width: 100%;
    height: 100%;
  }
  .dbJiKC .hover-mask {
    position: absolute;
    transition: all 0.3s linear 0s;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 0.75rem;
    opacity: 0;
  }
  .dbJiKC .hover-mask .house-edge {
    color: rgb(245, 246, 247);
    text-align: right;
    padding: 0.625rem 0.875rem 0px 0px;
  }
  .dbJiKC .play-icon {
    fill: rgba(245, 246, 247, 0.9);
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -1.5rem;
    margin-top: -1.5rem;
    transform: scale(1.3);
    transition: transform 0.3s ease 0s;
  }
  .gVplre {
    position: relative;
    color: rgb(255, 255, 255);
    height: 1.5625rem;
    line-height: 1.5625rem;
    font-size: 0.75rem;
  }
  .gVplre .wrap {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: 0.3125rem 1.875rem 0px 0.875rem;
    box-sizing: border-box;
  }
  .gVplre .item {
    height: 1.25rem;
    line-height: 1.25rem;
    color: rgb(152, 167, 181);
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .gVplre .help-btn-wrap button {
    position: absolute;
    width: 2.125rem;
    height: 2.125rem;
    right: 0.125rem;
    top: -0.1875rem;
    padding: 0.5rem;
    opacity: 0.6;
  }
  .cYiOHZ.style1 .game-control-panel {
    padding: 1.25rem 1.375rem;
  }

  .cYiOHZ .game-control-panel {
    flex: 1 1 0%;
  }
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }

  .kkZrMb .bet-button {
    width: 90%;
    max-width: 19.75rem;
    margin: 1rem auto 0.25rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(
      from 1turn,
      rgb(67, 179, 9),
      rgb(93, 219, 28)
    );
  }
  .cBmlor.button-big {
    height: 3.625rem;
  }
  .dOhRZH {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }
  .dOhRZH > div {
    flex-basis: 48%;
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
  .efWjNZ .icon {
    fill: rgb(67, 179, 9);
    width: 1rem;
    height: 1rem;
    vertical-align: top;
    transform: rotate(180deg);
    cursor: pointer;
  }
  .efWjNZ .tip {
    display: none;
    box-sizing: border-box;
    position: absolute;
    left: -0.75rem;
    top: -2.625rem;
    height: 2.25rem;
    line-height: 1.25rem;
    padding: 0.3125rem 0.625rem;
    white-space: nowrap;
    color: rgba(153, 164, 176, 0.8);
    background-color: rgb(37, 39, 43);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px;
    border-radius: 1.125rem;
  }
  .efWjNZ .tit {
    color: rgb(128, 143, 158);
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .gOLODp .label-amount {
    margin-left: auto;
  }
  .lmWKWf .input-control {
    border-color: transparent;
  }
  .cYiOHZ .input-control {
    background-color: rgba(49, 52, 60, 0.4);
  }
  .fCSgTW .input-control input {
    font-weight: bold;
  }

  .cYiOHZ .input-control input {
    color: rgb(245, 246, 247);
  }
  .gcQjQT .input-control textarea,
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }
  .gOLODp .coin-icon {
    order: -1;
    margin-right: 0.3125rem;
    margin-left: -0.625rem;
    width: 1.25rem;
    height: 1.25rem;
  }
  .kkZrMb img {
    width: 0.9375rem;
    height: 0.9375rem;
    margin-right: 0.3125rem;
  }
  .cYiOHZ .input-control .button-group {
    margin-right: -1.125rem;
  }
  .fCSgTW .button-group {
    width: 8.375rem;
    position: relative;
  }
  .bswIvI {
    display: flex;
  }
  .bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
  }
  .bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
  }
  .cMPLfC .icon:first-of-type {
    transform: rotate(-190deg);
    margin-bottom: 0.125rem;
  }
  .cMPLfC .icon {
    width: 0.75rem;
    height: 0.75rem;
  }
  .cMPLfC .icon:last-of-type {
    transform: rotate(90deg);
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
  .lmWKWf .input-control {
    border-color: transparent;
  }
  .cYiOHZ .input-control {
    background-color: rgba(49, 52, 60, 0.4);
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
  .cYiOHZ .input-control input {
    color: rgb(245, 246, 247);
  }
  .hzTJOu .input-control textarea,
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
  .cYiOHZ .input-control .button-group {
    margin-right: -1.125rem;
  }
  .bswIvI {
    display: flex;
  }
  .bswIvI > button:first-child {
    margin-left: 0px;
    padding-left: 0.125rem;
    border-top-left-radius: 1.125rem;
    border-bottom-left-radius: 1.125rem;
  }
  .bswIvI > button:last-child {
    padding-right: 0.125rem;
    border-top-right-radius: 1.125rem;
    border-bottom-right-radius: 1.125rem;
  }
  .hzTJOu .input-control textarea[readonly],
  .hzTJOu .input-control input[readonly] {
    opacity: 0.5;
  }
  .cTKsPy input:read-only {
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
  .eIHoct .reset {
    font-weight: bold;
    color: rgb(255, 255, 255);
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
  .jcGUIr {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 20px 0px 0px;
    align-items: flex-end;
  }
  .jcGUIr button {
    flex-basis: 48%;
    height: 44px;
  }

  .lmWKWf .game-tabs .tabs-view {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 1px 0px;
  }
  .iycaRo {
    min-height: 30rem;
    padding: 0.5rem;
  }
  .iycaRo .empty {
    min-height: 30rem;
  }
  .cuPxwd {
    padding: 2.5rem 0px;
    color: rgba(153, 164, 176, 0.6);
    line-height: 1;
    text-align: center;
    height: 100%;
    min-height: 16.25rem;
    position: relative;
  }
  .cuPxwd img {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -6.875rem 0px 0px -6.25rem;
    width: 12.5rem;
    height: 12.5rem;
  }
  .cuPxwd .msg {
    position: absolute;
    z-index: 1;
    line-height: 1.25rem;
    left: 50%;
    width: 17.5rem;
    top: 50%;
    margin-top: 3.75rem;
    margin-left: -8.75rem;
  }
  .gONCrm {
    max-width: 50rem;
    margin: 1.25rem auto;
    min-height: 15.125rem;
  }
  .kHsZCY .head {
    height: 3.125rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .kHsZCY .item,
  .kHsZCY .head {
    margin: 0px;
    padding: 0px 0.75rem;
  }
  .kHsZCY .flex {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .flex {
    display: flex;
  }
  .kHsZCY .col {
    flex: 1 1 0%;
  }
  .kHsZCY [class^="col"] {
    flex-shrink: 0;
  }
  .kHsZCY .col-2 {
    flex: 0 0 50%;
  }
  .kHsZCY .list {
    padding: 0px;
    margin: 0px 0px 1.25rem;
  }
  ol,
  ul {
    padding-left: 1.2em;
    margin: 0;
  }
  .kHsZCY .item {
    height: 3.3125rem;
    color: rgb(153, 164, 176);
  }
  li {
    margin: 0.5em 0;
  }
  .kHsZCY .seed-box {
    display: flex;
  }
  .kHsZCY .seed {
    flex: 1 1 0%;
    width: 100%;
    padding: 0px;
    margin-right: 0.625rem;
    border: none;
    background-color: transparent;
    color: rgb(93, 160, 0);
  }

  .cl-primary {
    color: var(--primary-color);
  }
  .bFXMsx {
    border-radius: 0.1875rem;
    padding: 15px 15px 10px;
    height: 85px;
    box-sizing: border-box;
    position: relative;
    font-size: 0.75rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
  }
  .bFXMsx .wrap.ball-wrap {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex: 1 1 auto;
    align-items: flex-end;
  }
  .bFXMsx .wrap.ball-wrap .range-item {
    color: rgba(153, 164, 176, 0.8);
    flex-wrap: wrap;
    width: 1.875rem;
    height: 1.875rem;
    text-align: center;
    line-height: 1.875rem;
    background-color: rgba(49, 52, 60, 0.4);
    border-radius: 0.9375rem;
    font-weight: 800;
  }
  .bFXMsx::after {
    content: "";
    position: absolute;
    left: 0.875rem;
    right: 0.875rem;
    bottom: -0.5rem;
    height: 1px;
    z-index: 1;
    background-color: rgba(49, 52, 60, 0.6);
  }
  .bFXMsx .title {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 15px;
    left: 0px;
    color: rgb(255, 255, 255);
  }
  .bFXMsx .history {
    text-align: right;
    z-index: 11;
    display: flex;
    gap: 5px;
    margin-left: auto;
    align-items: center;
  }
</style>
