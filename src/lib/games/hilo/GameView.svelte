<script>
  import { browser } from "$app/environment";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { onMount, createEventDispatcher, onDestroy } from "svelte";
  import lottie from "lottie-web";
  import Point from "./components/point.svelte";
  import SSuit from "./components/ssuit.svelte";
  import Suit from "./components/suit.svelte";
  import useDeck from "./hooks/deck";
  import useLiveStats from "$lib/hook/livestats";
  import useFormatter from "$lib/hook/formatter";
  import {liveStats} from "./store";
  const { getCardSuite, suites } = useDeck();
  const { removeTrailingZeros, getSuffix } = useFormatter();
  const { recordGame } = useLiveStats(liveStats, "HILO_LIVE_STATS");
  import {
    soundManager,
    hilo_game,
    processingRequest,
    userBets,
  } from "$lib/games/hilo/store";

  const dispatch = createEventDispatcher();

  $: HIAnimContainer = null;
  $: HIAnim = null;
  $: LOAnimContainer = null;
  $: LOAnim = null;
  $: notifyWin = false;

  $: cardNumber = 0;
  $: currentRound = null;
  $: gameCache = null;
  $: rounds = [];
  $: isLoading = $processingRequest || !$hilo_game;
  $: canSkip = !isLoading && $hilo_game?.round <= 51 && !$hilo_game?.has_ended;
  $: cardActivate = {};
  $: roundsContainer = null;
  $: gameWinData = {
    payout: "0.00",
    profit: "0.000000",
    token_img: "/coin/BTC.black.png",
  };

  $: {
    if (browser) {
      HIAnim =
        HIAnimContainer &&
        lottie.loadAnimation({
          container: HIAnimContainer,
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "/assets/hilo/anim/giraffe.592355d2.json",
        });
      LOAnim =
        LOAnimContainer &&
        lottie.loadAnimation({
          container: LOAnimContainer,
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "/assets/hilo/anim/monkey.ca9b3010.json",
        });
    }
  }

  const handleSkip = () => {
    dispatch("hiloNextRound", {
      hi: false,
      lo: false,
      skip: true,
    });
  };

  onMount(() => {
    hilo_game.subscribe((game) => {
      if (game?.bet_id) {
        rounds = game.rounds.map((r) => ({
          ...r,
          redCard: [suites[1], suites[3]].includes(getCardSuite(r.card)),
        }));
        currentRound = rounds[game.rounds.length - 1];
        cardNumber = rounds[game.rounds.length - 1].card || 0;
        if (gameCache) {
          $soundManager.play("deal");
          if (game.has_ended) {
            if (game.won) {
              $soundManager.play("win");
              $soundManager.play("cashout");
              gameWinData = {
                profit: game.profit.toFixed(4),
                payout: game.payout.toFixed(2),
                token_img: game.token_img,
              };
              notifyWin = true;

              setTimeout(() => (notifyWin = false), 4000);
            }
            recordGame(game.won, game.bet_amount, game.profit, game.token_img);
          } else if (rounds.length > 1) {
            if (currentRound.guess !== 1) {
              $soundManager.play("win");
            }

            if (game.hi) {
              $soundManager.play("giraffe");
              HIAnim.goToAndPlay(0);
            } else if (game.lo) {
              $soundManager.play("ape");
              LOAnim.goToAndPlay(0);
            } else {
              $soundManager.play("skip");
            }
          }
        } else if (rounds.length === 1) {
          $soundManager.play("bet");
          $soundManager.play("deal");
        }
        if (!!gameCache || rounds.length === 1) {
          setTimeout(() => {
            const old =
              rounds.length === 1 && Object.keys(cardActivate).length > 1
                ? {}
                : cardActivate;
            cardActivate = { ...old, ...{ [currentRound.round]: "active" } };
          }, 250);
        } else {
          const _active = {};
          rounds.forEach(({ round }) => {
            _active[round] = "active";
          });
          cardActivate = _active;
        }
        gameCache = game;
        setTimeout(() => {
          roundsContainer?.scrollTo({
            left: roundsContainer.scrollWidth,
            behavior: "smooth",
          });
        }, 300);
      } else if (game?.error) {
        console.log(game.error);
      }
    });
  });
  onDestroy(() => {
    HIAnim?.destroy();
    LOAnim?.destroy();
  });
</script>

<div class="game-view">
  <div class="sc-hoHwyw fIoiVG game-recent">
    <div class="recent-list-wrap">
      <div
        class="recent-list"
        style="width: 112.5%; transform: translate(0%, 0px);"
      >
        {#each $userBets.slice(0, 10).reverse() as bet (bet.bet_id)}
          <div class="recent-item" style="width: 11.1111%;">
            <div class="item-wrap {bet.won ? 'is-win' : 'is-lose'}">
              {bet.payout.toFixed(2)}x
            </div>
          </div>
        {/each}
        {#if !Boolean($userBets.length)}
          <div class="empty-item">
            <p>Game results will be displayed here.</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="sc-hcupDf dqwCNK game-box sc-iLOkMM iYxCeC">
    <div class="sc-gDGHff fFDbEu hilo-graph">
      <div class="hilo-graph-wrap">
        <div class="top-box">
          <div class="higher lh-box">
            <div class="lottie" bind:this={HIAnimContainer}></div>
            <div class="title">HIGHER OR SAME</div>
          </div>
          <div class="cards-box">
            <div class="cards">
              <div class="sc-dFtzxp gFsinV card-wrap">
                <div
                  class="sc-eZKLwX kkALZz card {!!currentRound?.card &&
                  currentRound?.round &&
                  $hilo_game.has_ended &&
                  !$hilo_game.won
                    ? 'bust'
                    : ''} {cardNumber ? 'active' : ''} card1-ref"
                >
                  <div class="card-back"></div>
                  <div
                    class="card-front {currentRound?.redCard ? 'card-red' : ''}"
                  >
                    <div class="point">
                      <Point cardNumber={currentRound?.card || 0} />
                    </div>
                    <div class="ssuit">
                      <SSuit cardNumber={currentRound?.card || 0} />
                    </div>
                    <Suit cardNumber={currentRound?.card || 0} />
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <div class="sc-dFtzxp gFsinV card-wrap">
                <div class="sc-eZKLwX kkALZz card">
                  <div class="card-back"></div>
                  <div class="card-front">
                    <div class="point"></div>
                    <div class="ssuit"></div>
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <div class="sc-dFtzxp gFsinV card-wrap">
                <div class="sc-eZKLwX kkALZz card">
                  <div class="card-back"></div>
                  <div class="card-front">
                    <div class="point"></div>
                    <div class="ssuit"></div>
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <div class="sc-dFtzxp gFsinV card-wrap">
                <div class="sc-eZKLwX kkALZz card">
                  <div class="card-back"></div>
                  <div class="card-front">
                    <div class="point"></div>
                    <div class="ssuit"></div>
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <div class="sc-dFtzxp gFsinV card-wrap">
                <div class="sc-eZKLwX kkALZz card">
                  <div class="card-back"></div>
                  <div class="card-front">
                    <div class="point"></div>
                    <div class="ssuit"></div>
                    <div class=""></div>
                  </div>
                </div>
              </div>
              <div class="sc-dFtzxp gFsinV card-wrap">
                <div class="sc-eZKLwX kkALZz card">
                  <div class="card-back"></div>
                  <div class="card-front">
                    <div class="point"></div>
                    <div class="ssuit"></div>
                    <div class=""></div>
                  </div>
                </div>
              </div>
            </div>
            <button on:click={handleSkip} disabled={!canSkip} class="skip-btn"
              ><svg viewBox="0 0 32 32"
                ><path
                  d="M18.356 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059zM5.029 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059z"
                ></path></svg
              ></button
            >
            <div class="tips">KING IS HIGHEST, ACE IS LOWEST</div>
          </div>
          <div class="lower lh-box">
            <div class="lottie" bind:this={LOAnimContainer}></div>
            <div class="title">LOWER OR SAME</div>
          </div>
        </div>
        <div class="sc-gFSQbh dQIphg hilo-rounds-wrap">
          <div bind:this={roundsContainer} class="hilo-rounds">
            {#each rounds as round, index (`${$hilo_game.id}_${index}_${round.card}_${round.guess}`)}
              <div
                class="sc-jwQYvw cjjpTm hilo-round round-item {round.guess === 1
                  ? 'round-skip'
                  : ''}"
                style="transform: translate(0%, 0px);"
                in:fly={{ x: 80, duration: 250, easing: cubicOut }}
              >
                <div class="sc-dFtzxp gFsinV card-wrap">
                  <div
                    class="sc-eZKLwX kkALZz card {cardActivate[round.round] ||
                      ''}"
                  >
                    <div class="card-back"></div>
                    <div class="card-front {round.redCard ? 'card-red' : ''}">
                      <div class="point">
                        <Point cardNumber={round.card} />
                      </div>
                      <div class="ssuit">
                        <SSuit cardNumber={round.card} />
                      </div>
                      <Suit cardNumber={round.card} />
                      <div class=""></div>
                    </div>
                  </div>
                </div>
                <div
                  class="odds {$hilo_game?.has_ended &&
                  !$hilo_game.won &&
                  round.round === $hilo_game?.round
                    ? 'is-lose'
                    : ''}"
                >
                  <div style="font-size: 12px" class="val">
                    {index === 0 ? "Start Card" : `${round.odds.toFixed(2)}x`}
                  </div>
                </div>
                {#if Boolean(index)}
                  <div
                    class="guess flex-center"
                    style="opacity: 1; transform: translate(0px, 0px);"
                  >
                    {#if round.guess === 1}
                      <svg
                        viewBox="0 0 32 32"
                        class="sc-ljMRFG lisaNS guess-ico guess-ico1 {$hilo_game?.has_ended &&
                        !$hilo_game.won &&
                        round.round === $hilo_game?.round
                          ? 'is-lose'
                          : ''}"
                        ><path
                          d="M18.356 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059zM5.029 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059z"
                        ></path></svg
                      >
                    {:else if round.guess === 2}
                      <svg
                        viewBox="0 0 32 32"
                        class="sc-ljMRFG lisaNS guess-ico guess-ico2 {$hilo_game?.has_ended &&
                        !$hilo_game.won &&
                        round.round === $hilo_game?.round
                          ? 'is-lose'
                          : ''}"
                        ><path
                          d="M15.843 24.405l13.744-13.774-3.277-3.459-10.467 9.758-9.997-9.758-3.602 3.459z"
                        ></path></svg
                      >
                    {:else if round.guess === 3}
                      <svg
                        viewBox="0 0 32 32"
                        class="sc-ljMRFG lisaNS guess-ico guess-ico3 {$hilo_game?.has_ended &&
                        !$hilo_game.won &&
                        round.round === $hilo_game?.round
                          ? 'is-lose'
                          : ''}"
                        ><path
                          d="M15.923 6.883l14.541 14.573-3.467 3.66-11.075-10.324-10.577 10.324-3.811-3.66z"
                        ></path></svg
                      >
                    {:else if round.guess === 4}
                      <svg
                        viewBox="0 0 32 32"
                        class="sc-ljMRFG lisaNS guess-ico guess-ico4 {$hilo_game?.has_ended &&
                        !$hilo_game.won &&
                        round.round === $hilo_game?.round
                          ? 'is-lose'
                          : ''}"
                        ><path
                          d="M29.222 18.833v5.667h-26.444v-5.667h26.444zM29.222 7.5v5.667h-26.444v-5.667h26.444z"
                        ></path></svg
                      >
                    {:else if round.guess === 5}
                      <svg
                        viewBox="0 0 32 32"
                        class="sc-ljMRFG lisaNS guess-ico guess-ico5 {$hilo_game?.has_ended &&
                        !$hilo_game.won &&
                        round.round === $hilo_game?.round
                          ? 'is-lose'
                          : ''}"
                        ><path
                          d="M29 22.929v5.571h-26v-5.571h26zM15.874 2.5l13.010 13.039-3.102 3.275-9.909-9.237-9.464 9.237-3.41-3.275 12.874-13.039z"
                        ></path></svg
                      >
                    {:else if round.guess === 6}
                      <svg
                        viewBox="0 0 32 32"
                        class="sc-ljMRFG lisaNS guess-ico guess-ico6 {$hilo_game?.has_ended &&
                        !$hilo_game.won &&
                        round.round === $hilo_game?.round
                          ? 'is-lose'
                          : ''}"
                        ><path
                          d="M30 8.5v-6h-28v6h28zM15.864 30.5l14.011-14.042-3.34-3.527-10.671 9.948-10.192-9.948-3.672 3.527 13.864 14.042z"
                        ></path></svg
                      >
                    {/if}
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
      <div
        class="sc-juEPzu jjnkdy hilo-win"
        style="visibility: {notifyWin
          ? 'visible'
          : 'hidden'}; opacity: {notifyWin ? '1' : '0'}; transform: {notifyWin
          ? 'scale(1, 1)'
          : 'scale(0.5, 0.5)'};"
      >
        <img alt="" src="/assets/hilo/win.00419b3e.png" class="bg" />
        <div class="wrap">
          <div class="profit">
            <div
              style="font-size: 1.6rem;"
              class="sc-Galmp erPQzq coin notranslate"
            >
              <img alt="" class="coin-icon" src={gameWinData.token_img} />
              <div class="amount">
                <span class="amount-str"
                  >{removeTrailingZeros(gameWinData.profit)}<span class="suffix"
                    >{getSuffix(gameWinData.profit || "")}</span
                  ></span
                >
              </div>
            </div>
            <div class="payout">{gameWinData.payout}×</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sc-gLDmcm gnjHQb"><span>House Edge 1%</span></div>
    <svg class="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46"
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

<style>
  .game-view {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
  }
  .fIoiVG {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2.75rem;
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
  }
  /* .fIoiVG .jackpot-enter {
    margin-left: 1.5rem;
  } */
  .lhEJig {
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
  /* .lhEJig .title {
    font-weight: bold;
    height: 1.25rem;
  }
  .lhEJig .title .tit {
    margin-right: 0.25rem;
    color: rgb(67, 179, 9);
  }
  .lhEJig .coin {
    vertical-align: top;
    height: 1.25rem;
    margin-top: -0.25rem;
  } */
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .lhEJig .coin .coin-icon {
    width: 1rem;
    height: 1rem;
  }
  .erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }
  .lhEJig .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .lhEJig .coin .amount .amount-str {
    width: auto;
  }

  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .fIoiVG .recent-list-wrap {
    flex: 1 1 auto;
    height: 100%;
    margin: 0px 1.5rem;
    overflow: hidden;
    position: relative;
    border-radius: 1.375rem;
  }
  .fIoiVG .recent-list {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .fIoiVG .empty-item {
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
  .fIoiVG .recent-item {
    padding: 0px 0.25rem;
    cursor: pointer;
  }
  .fIoiVG .is-lose {
    color: rgba(153, 164, 176, 0.6);
    background-color: rgba(122, 128, 140, 0.15);
  }

  .fIoiVG .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 1.375rem;
    font-weight: bold;
  }
  .fIoiVG .is-win {
    color: rgb(245, 246, 247);
    background-color: rgb(67, 179, 9);
  }

  .fIoiVG .item-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    border-radius: 1.375rem;
    font-weight: bold;
  }
  .game-box {
    flex: 1 1 0%;
    background-color: rgb(23, 24, 27);
    background-image: url(https://static.nanogames.io/assets/hilo_bg.662c3c58.png);
    background-size: cover;
    background-position: center bottom;
  }

  .dqwCNK {
    position: relative;
  }
  .fFDbEu {
    position: relative;
  }
  .fFDbEu .hilo-graph-wrap {
    width: 41rem;
    margin: 5.125rem auto 0px;
    position: relative;
    z-index: 2;
  }
  @media screen and (max-width: 621px) {
    .fFDbEu .hilo-graph-wrap {
      width: 100% !important;
      padding: 0px 1.125rem 1.875rem !important;
      margin-top: 1.25rem !important;
    }
  }
  .fFDbEu .top-box {
    display: flex;
    align-items: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 2.125rem;
  }

  @media screen and (max-width: 621px) {
    .fFDbEu .lh-box {
      width: 6.125rem !important;
      height: 10.4375rem !important;
      border-radius: 0.21875rem !important;
      border-width: 0.08125rem !important;
      box-shadow: rgb(23, 24, 27) 0px -1.25rem 0px 0px inset !important;
    }
  }

  .fFDbEu .lh-box {
    width: 9.625rem;
    height: 16.25rem;
    border-radius: 0.3125rem;
    border: 0.125rem solid rgb(71, 75, 87);
    box-shadow: rgb(23, 24, 27) 0px -1.875rem 0px 0px inset;
    background-color: rgba(49, 52, 60, 0.4);
    position: relative;
  }
  .fFDbEu .higher .lottie {
    left: 48%;
  }
  @media screen and (max-width: 621px) {
    .fFDbEu .lottie {
      width: 21.975rem !important;
      height: 23.025rem !important;
      bottom: 1.5rem !important;
    }
  }
  .fFDbEu .lottie {
    position: absolute;
    width: 32.9625rem;
    height: 34.5375rem;
    left: 49%;
    bottom: 3.125rem;
    transform: translate(-50%, 0%);
    pointer-events: none;
  }
  .fFDbEu .lh-box .title {
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.875rem;
    text-align: center;
    white-space: nowrap;
    color: rgb(245, 246, 247);
  }

  @media screen and (max-width: 621px) {
    .fFDbEu .cards-box {
      padding-top: 0.625rem !important;
    }
  }
  .fFDbEu .cards-box {
    position: relative;
    z-index: 2;
    padding-top: 1.25rem;
  }

  @media screen and (max-width: 621px) {
    .fFDbEu .cards {
      width: 5.625rem !important;
      height: 8.125rem !important;
    }
  }

  .fFDbEu .cards {
    position: relative;
    width: 8.875rem;
    height: 12.75rem;
    margin: 0px auto;
  }
  .fFDbEu .cards .card-wrap {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 10;
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-shadow: rgba(65, 81, 133, 0.33) 0px 1px 1px 0px;
  }

  .gFsinV {
    width: 8.125rem;
    height: 11.25rem;
  }
  .kkALZz.active {
    transform: rotateY(0deg);
  }

  .kkALZz {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateY(-180deg);
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    transform-style: preserve-3d;
  }
  .kkALZz .card-back {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-image: url(https://static.nanogames.io/assets/poker_bg.fb27c59d.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: rotateY(180deg);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px;
    backface-visibility: hidden;
    z-index: 1;
  }
  .kkALZz .card-front {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-image: url(https://static.nanogames.io/assets/poker_fg.dd014f7b.svg);
    background-size: 100% 100%;
    position: relative;
    transform: rotateY(0deg);
    background-repeat: no-repeat;
    backface-visibility: hidden;
    z-index: 2;
  }
  .kkALZz .card-front .point {
    position: absolute;
    left: 7%;
    top: 8%;
    width: 19%;
  }
  :global(.kkALZz .card-front.card-red svg) {
    fill: rgb(229, 83, 62);
  }

  .fFDbEu .bust .card-front {
    box-shadow: #ec485f 0px 0px 0px 0.3125rem inset;
    border-radius: 0.25rem;
  }
  .dQIphg .hilo-rounds .round-skip .card-front {
    opacity: 0.6;
  }

  :global(.kkALZz .card-front svg) {
    fill: rgb(54, 51, 65);
  }

  :global(.kkALZz svg) {
    width: 100%;
    height: 100%;
  }
  :global(.kkALZz .card-front .ssuit) {
    position: absolute;
    right: 7%;
    top: 8%;
    width: 23%;
  }

  :global(.kkALZz .card-front .suit) {
    width: 56%;
    left: 22%;
    top: 32%;
    position: absolute;
  }
  .fFDbEu .cards .card-wrap:nth-of-type(2n) {
    top: 0px;
    z-index: 9;
  }
  .fFDbEu .cards .card-wrap:nth-of-type(3n) {
    top: 0.25rem;
    z-index: 8;
  }
  .fFDbEu .cards .card-wrap:nth-of-type(4n) {
    top: 0.5rem;
    z-index: 7;
  }
  .fFDbEu .cards .card-wrap:nth-of-type(5n) {
    top: 0.75rem;
    z-index: 6;
  }
  .fFDbEu .cards .card-wrap:nth-of-type(6n) {
    top: 1rem;
    z-index: 5;
  }
  .fFDbEu .skip-btn {
    position: absolute;
    right: 1.25rem;
    top: 0px;
    z-index: 11;
    padding: 0px;
    width: 2.1875rem;
    height: 2.1875rem;
    border-radius: 0.3125rem;
    border: 2px solid rgb(71, 75, 87);
    background-color: rgb(49, 52, 60);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  @media screen and (max-width: 621px) {
    .fFDbEu .skip-btn {
      width: 1.5rem !important;
      height: 1.5rem !important;
      border-width: 1px !important;
      right: 50% !important;
      transform: translateX(3.625rem) !important;
    }
    .fFDbEu .cards-box .tips {
      zoom: 0.6667 !important;
      white-space: nowrap !important;
    }
  }
  .fFDbEu .skip-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .fFDbEu .skip-btn svg {
    width: 1em;
    height: 1em;
    fill: rgb(184, 194, 204);
  }
  .fFDbEu .cards-box .tips {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgb(153, 164, 176);
    margin-top: 1.875rem;
  }
  .dQIphg.hilo-rounds-wrap {
    position: relative;
    border-radius: 0.3125rem;
    padding: 0.875rem 0.875rem 0px;
    height: 9.0625rem;
    background-color: rgba(49, 52, 60, 0.4);
  }
  .dQIphg .hilo-rounds {
    display: flex;
    position: relative;
    border-radius: 0.25rem;
    padding-bottom: 0.625rem;
    overflow: scroll hidden;
  }
  .cjjpTm.hilo-round {
    position: relative;
    width: 4rem;
    margin-right: 0.375rem;
  }
  .cjjpTm.hilo-round .card-wrap {
    width: 4rem;
    height: 5.75rem;
  }

  .gFsinV {
    width: 8.125rem;
    height: 11.25rem;
  }
  .kkALZz.active {
    transform: rotateY(0deg);
  }

  .kkALZz {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateY(-180deg);
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    transform-style: preserve-3d;
  }
  .cjjpTm.hilo-round .odds {
    width: 100%;
    white-space: nowrap;
    line-height: 1.25rem;
    border-radius: 0.1875rem;
    text-align: center;
    color: rgb(255, 255, 255);
    font-weight: 600;
    margin-top: 0.3125rem;
    background-color: rgb(67, 179, 9);
  }
  .cjjpTm.hilo-round .val {
    zoom: 0.8;
  }
  .fFDbEu .hilo-win {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 3;
    margin: -6.78125rem 0px 0px -8.40625rem;
    transition:
      opacity 300ms linear,
      transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .jjnkdy.hilo-win {
    width: 16.8125rem;
    height: 13.5625rem;
  }
  .jjnkdy.hilo-win .bg {
    width: 16.8125rem;
    height: 13.5625rem;
  }

  .fFDbEu .bg {
    position: absolute;
    inset: 0px;
    overflow: hidden;
  }
  .jjnkdy.hilo-win .wrap {
    position: absolute;
    left: 1.375rem;
    top: 5.9375rem;
    width: 14rem;
    height: 6.875rem;
    z-index: 1;
    flex-direction: column;
  }
  .cjjpTm.hilo-round .odds.is-lose {
    background-color: rgb(236, 81, 72);
  }
  .lisaNS.guess-ico.is-lose {
    fill: rgb(236, 72, 95);
  }
  .cjjpTm.hilo-round .guess {
    position: absolute;
    left: -1rem;
    top: 30%;
    z-index: 2;
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 0.25rem;
    border: 2px solid rgba(60, 64, 75, 0.15);
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .cjjpTm.hilo-round .guess svg {
    width: 0.875rem;
    height: 0.875rem;
  }
  .lisaNS.guess-ico1 {
    fill: rgb(250, 209, 63);
  }
  .lisaNS.guess-ico {
    fill: rgb(67, 179, 9);
  }
  .jjnkdy.hilo-win .profit {
    color: rgb(67, 179, 9);
    font-size: 1.875rem;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    line-height: normal;
    height: 100%;
    font-weight: 600;
  }
  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .jjnkdy.hilo-win .coin-icon {
    width: 1.625rem;
    height: 1.625rem;
  }

  .erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }
  .jjnkdy.hilo-win .amount-str {
    width: auto;
  }

  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .jjnkdy.hilo-win .payout {
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 1.625rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .gnjHQb {
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
  .dqwCNK .box-bg {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -1px;
    width: 100%;
  }
</style>
