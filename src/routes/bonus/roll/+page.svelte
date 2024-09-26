<script>
  import { onMount } from "svelte";
  import { myStore, winners } from "$lib/bonus/store";
  import {getRoll, getWinners, getBonus, createRoll} from "$lib/bonus/roll";


  let userData;
  let bonus;


  $: firstRollNumber = 0;
  $: secondRollNumber = 0;
  $: thirdRollNumber = 0;

  let timer = "The countdown: ";

  onMount(async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const userRes = await getRoll(token)
      const winRes = await getWinners(token)
      const json = await winRes.data;
      userData = await userRes.data;
      winners.set(json.winners)

      if (userRes.data.is_rolled === true) {
        myStore.set(true);
      }
      bonus = getBonus($winners)
    } catch (error) {
      console.log(error.message);
    }
  });

  onMount(async () => {
    function isButtonEnabled() {
      const now = new Date();
      const utcHour = now.getHours();
      const utcMinute = now.getMinutes() + 1;
      console.log(utcHour, utcMinute);
      // Enable the button if it's 2:00 UTC, disable it 10 minutes after
      return utcHour === 2 && utcMinute < 10;
    }
    if (isButtonEnabled()) {
      myStore.set(false);
    }
    // Enable the button if it's within the allowed time range

    setInterval(function () {
      const now = new Date();
      function isButtonEnabled() {
        const utcHour = now.getUTCHours();
        const utcMinute = now.getUTCMinutes();
        // Enable the button if it's 2:00 UTC, disable it 10 minutes after
        return utcHour === 2 && utcMinute < 10;
      }
      // if (isButtonEnabled()) {
      //   myStore.set(false);
      // } else {
      //   myStore.set(true);
      // }
      let targetTime = new Date();
      // Set the target time to UTC+0 02:00
      targetTime.setUTCHours(2, 0, 0, 0);
      // If the current time is past the target time, add 1 day to the target time
      if (now > targetTime) {
        targetTime.setUTCDate(targetTime.getUTCDate() + 1);
      }

      const timeDifference = targetTime - now;

      // Remaining hours, minutes, and seconds
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      timer = `The countdown: ${hours}:${minutes}:${seconds}`;
    }, 1000);
  });

  const handleSubmit = async () => {
    try {
      const json = await createRoll()
      const rollNumbers = await json.rolled.rolled_figure.toString();
      firstRollNumber = parseInt(rollNumbers[0], 10);
      secondRollNumber = parseInt(rollNumbers[1], 10);
      thirdRollNumber = parseInt(rollNumbers[2], 10);
      myStore.set(true);
      winners.update(data => [...data, json.rolled].sort((a,b) => b.rolled_figure - a.rolled_figure).splice(0, 10));
    } catch (error) {
      console.log(error.message);
    }
  };
</script>

{#if userData && $winners}
  <div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div
      class="dialog"
      style="opacity: 1; width: 464px; height: 600px; margin-top: -300px; margin-left: -232px; transform: scale(1) translateZ(0px);"
    >
      <div class="dialog-head has-close">
        <div class="dialog-title">Roll</div>
      </div>
    
      <button
      on:click={() => window.history.back()}
      class="sc-ieecCq fLASqZ close-icon dialog-close"
    >

    </button>
      <div
        class="dialog-body default-style"
        style="z-index: 2; transform: none;"
      >
        <div class="sc-dkPtRN jScFby scroll-view">
          <div class="sc-epFoly iCAFlN">
            <div style="display: none;"></div>
            <div class="ir-top">
              <div class="ir-title sub-title">Roll point game</div>
              <div class="ir-cont">
                Bet players have one chance to roll every day<span
                  class="theme bold">(VIP3)</span
                >
              </div>
            </div>

            <div class="ir-control">
              <div class="display-wrap flex-center">
                <div class="sc-bOtlzW gHdayr">
                  <div class="scroll-number">
                    <span class="num-wrap"
                      ><div class="num-box">
                        <span>{firstRollNumber}</span>
                      </div></span
                    ><span class="num-wrap"
                      ><div class="num-box">
                        <span>{secondRollNumber}</span>
                      </div></span
                    ><span class="num-wrap"
                      ><div class="num-box">
                        <span>{thirdRollNumber}</span>
                      </div></span
                    >
                  </div>
                </div>
                <div class="display-num"></div>
                <div class="display-num"></div>
                <div class="display-num"></div>
              </div>
              {#if userData.level < 3}
                <p style="color: red; text-align:center">{userData.message}</p>
              {:else}
                <div class="roll-butwrap" style="padding: 0 50px 0 50px;">
                  <form on:submit|preventDefault={handleSubmit}>
                    <button
                      class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal roll-button ttu"
                      disabled={$myStore}
                    >
                      <div class="button-inner">Roll</div>
                    </button>
                  </form>
                </div>
              {/if}
              <div class="roll-desc">
                <div class="roll-time">{timer}</div>
                <div class="roll-chance">
                  The remaining number:&nbsp;<span class="theme">0</span>
                </div>
              </div>
            </div>
            <div class="ir-amount">
              Today's reward:<span class="theme">
                {#if $winners.length > 0}
                &nbsp;{bonus} DOGE
                {:else}
                &nbsp;0.00 DOGE
                {/if}
              </span>
            </div>
            <div class="roll-table">
              <table>
                <thead
                  ><tr
                    ><th>Ranking</th><th>Player</th><th>Result</th><th>BONUS</th
                    ></tr
                  ></thead
                >
                <tbody class="records">
                  {#if JSON.stringify($winners.length) > 0}
                    {#each $winners as { username, rolled_figure, bonus }, index}
                      <tr>
                        <td class="darken">{index + 1}</td><td
                          ><div class="ellipsis">{username}</div></td
                        >
                        <td class="darken">{rolled_figure}</td>
                        <td class="flex-center"
                          ><img
                            class="coin-icon"
                            alt="img"
                            src="/coin/DOGE.black.png"
                          />
                          {bonus.toFixed(2)} DOGE</td
                        >
                      </tr>
                    {/each}
                  {/if}
                  
                  <!--  <tr
                  ><td class="darken">1</td><td
                    ><div class="ellipsis">Lucky Luck</div></td
                  ><td class="darken">996</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 26.52 DOGE</td
                  ></tr
                >
                 <tr
                  ><td class="darken">2</td><td
                    ><div class="ellipsis">ANneRyS🫶🌻</div></td
                  ><td class="darken">994</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 13.26 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">3</td><td
                    ><div class="ellipsis">RuffRollr777</div></td
                  ><td class="darken">994</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 6.63 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">4</td><td
                    ><div class="ellipsis">GBRS</div></td
                  ><td class="darken">992</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 3.315 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">5</td><td
                    ><div class="ellipsis">🌟Naga Laut🌟</div></td
                  ><td class="darken">990</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 3.315 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">6</td><td
                    ><div class="ellipsis">F1rst</div></td
                  ><td class="darken">989</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 2.652 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">7</td><td
                    ><div class="ellipsis">Kristina07</div></td
                  ><td class="darken">986</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 2.652 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">8</td><td
                    ><div class="ellipsis">nanotimbero</div></td
                  ><td class="darken">983</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 2.652 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">9</td><td
                    ><div class="ellipsis">iPutTheArtInFart</div></td
                  ><td class="darken">983</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 2.652 DOGE</td
                  ></tr
                ><tr
                  ><td class="darken">10</td><td
                    ><div class="ellipsis">Co4la</div></td
                  ><td class="darken">980</td><td class="flex-center"
                    ><img
                      class="coin-icon"
                      alt="img"
                      src="/coin/DOGE.black.png"
                    /> 2.652 DOGE</td
                  ></tr
                > -->
                </tbody>
              </table>
                {#if $winners.length <= 0}
                    <p style="color: greenyellow; text-align:center; margin-top: 20px">No Roll Yet</p>
                  {/if}
            </div>
            <div class="ir-bottom">
              <div class="ir-bot-list">
                <div class="ir-item-subtitle">Rolling time</div>

                <div class="ir-item-subcont">
                  starts from UTC+0 02:00 to 02:10 every day; rewards will be
                  distributed afterwards.
                </div>
              </div>
              <div class="ir-bot-list">
                <div class="ir-item-subtitle">How to play Rolling</div>

                <ol>
                  <li>
                    Platform will take different currencies and amount as a
                    reward
                  </li>

                  <li>
                    Bet players can get the opportunity to be rewarded based on
                    top 10 ROLL points, except (CUB) players.
                  </li>

                  <li>ROLL is a random number from 0 to 999, good luck!</li>

                  <li>
                    If different players rolled the same amount, the ranking
                    will be determined according to time.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <p>Loading</p>
{/if}

<style global lang="css">
  .kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
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
    transition: 0.1s ease-in-out;
    cursor: pointer;
  }

  .fLASqZ:hover {
    transition: 0.5s ease-in-out;
    transform: rotate(60deg);
  }
  button {
    font-family:
      Montserrat,
      -apple-system,
      Framedcn,
      Helvetica Neue,
      Condensed,
      DisplayRegular,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      WenQuanYi Micro Hei,
      Microsoft Yahei,
      sans-serif;
  }

  button {
    border: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    background-color: transparent;
  }
  .default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
  }

  .dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
  }
  .default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
  }
  .dialog-body > div {
    flex: 1 1 0%;
  }
  .dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
  }

  .default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
  }

  .dialog-body > div {
    flex: 1 1 0%;
  }
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .iCAFlN {
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.8);
    padding-bottom: 4rem;
  }
  .iCAFlN .ir-top .ir-title {
    font-size: 1rem;
    font-weight: 600;
    color: rgb(245, 246, 247);
  }
  .iCAFlN .bold {
    font-weight: 600;
  }

  .iCAFlN .theme {
    color: rgb(67, 179, 9);
  }
  .gHdayr .scroll-number .num-wrap span {
    font-size: 46px;
    height: 80px;
    line-height: 86px;
    display: block;
  }
  .scroll-number {
    width: 300px;
    overflow: hidden;
    font-size: 24px;
    height: 100%;
  }

  .eYxWBt .ir-control .display-wrap {
    height: 9.75rem;
    margin: 1.75rem auto;
    background: rgb(23, 24, 27);
    border-radius: 1.25rem;
    position: relative;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gHdayr {
    position: absolute;
    height: 80px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    color: rgb(23, 24, 27);
    font-weight: 600;
  }
  .gHdayr .scroll-number {
    width: 300px;
    overflow: hidden;
    font-size: 24px;
    height: 100%;
  }
  .gHdayr .scroll-number .num-wrap {
    display: inline-block;
    width: 30px;
    height: 80px;
    vertical-align: top;
    text-align: center;
    position: relative;
    margin-left: 34px;
    margin-right: 36px;
  }
  .iCAFlN .ir-control .display-wrap .display-num {
    width: 64px;
    height: 95px;
    display: inline-block;
    border-radius: 50%;
    margin: 0px 18px;
    background: url(/assets/egg.4a882516.png) 0% 0% / 100% no-repeat;
  }
  .iCAFlN .ir-control .display-wrap {
    height: 9.75rem;
    margin: 1.75rem auto;
    background: rgb(23, 24, 27);
    border-radius: 1.25rem;
    position: relative;
  }
  .iCAFlN .ir-control .roll-desc {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 1.75rem 0px;
    padding-bottom: 1.125rem;
    border-bottom: 1px solid rgb(39, 43, 48);
    line-height: 1.43;
  }
  .iCAFlN .ir-amount {
    color: rgb(245, 246, 247);
    margin-bottom: 1.75rem;
  }
  .iCAFlN .roll-table table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0px;
    text-align: center;
    table-layout: fixed;
    color: rgb(245, 246, 247);
    font-weight: 600;
  }
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .iCAFlN .roll-table table th:first-child {
    text-align: left;
    width: 3.75rem;
    padding-left: 0.75rem;
  }
  .iCAFlN .roll-table table th {
    color: rgba(153, 164, 176, 0.6);
    font-weight: 500;
    padding-bottom: 0.25rem;
  }

  .iCAFlN .roll-table table td,
  .iCAFlN .roll-table table th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .iCAFlN .ir-bottom {
    margin-top: 0.875rem;
  }

  .iCAFlN .roll-table table tbody > tr:nth-child(2n-1) td:first-child {
    border-radius: 1.25rem 0px 0px 1.25rem;
  }

  .iCAFlN .roll-table table tbody > tr:nth-child(2n-1) td {
    background-color: rgb(23, 24, 27);
  }
  .iCAFlN .roll-table .darken {
    color: rgb(153, 164, 176);
    background: none;
    font-weight: 500;
  }

  .iCAFlN .roll-table table td {
    height: 3.5rem;
  }
  .iCAFlN .roll-table table td,
  .iCAFlN .roll-table table th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .iCAFlN .roll-table table tbody > tr:nth-child(2n-1) td {
    background-color: rgb(23, 24, 27);
  }

  .iCAFlN .roll-table table td {
    height: 3.5rem;
  }

  .iCAFlN .roll-table table td,
  .iCAFlN .roll-table table th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .iCAFlN .roll-table table tbody > tr:nth-child(2n-1) td:last-child {
    border-radius: 0px 1.25rem 1.25rem 0px;
  }
  .iCAFlN .roll-table table tbody > tr:nth-child(2n-1) td {
    background-color: rgb(23, 24, 27);
  }
  .iCAFlN .roll-table table td {
    height: 3.5rem;
  }
  .iCAFlN .roll-table table td,
  .iCAFlN .roll-table table th {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iCAFlN .roll-table table .coin-icon {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
  .iCAFlN .ir-bottom {
    margin-top: 0.875rem;
  }
  .iCAFlN .ir-bottom .ir-item-subtitle {
    color: rgb(153, 164, 176);
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  .iCAFlN .ir-bottom .ir-item-subtitle {
    color: rgb(153, 164, 176);
    font-weight: 600;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
  ol {
    padding-left: 1.2em;
    margin: 0;
  }
  .iCAFlN .ir-bottom ol > li {
    margin: 0.3125rem 0px;
  }
  .iCAFlN .ir-bottom .ir-item-subcont {
    margin-bottom: 1rem;
  }
  ol li {
    line-height: 14px;
    font-size: 12px;
    margin: 0 0 15px;
  }

  ol li {
    line-height: 14px;
    font-size: 12px;
    margin: 0 0 15px;
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

  button:disabled > div {
    background: rgba(67, 179, 1, 0.6);
    border-radius: 20px;
    cursor: not-allowed;
  }
  @media screen and (min-width: 621px) {
    * {
      scrollbar-color: var(--scroll-color) transparent;
      scrollbar-width: thin;
      scrollbar-width: none;
    }
  }
  .darken {
    --text-color: rgba(153, 164, 176, 0.8);
    --primary-color: #43b309;
    --background-color: #24262b;
    --placeholder-color: #75808c;
    --autofill-color: #f5f6f7;
    --scroll-color: #24262b;
  }
</style>
