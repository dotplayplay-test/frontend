<script>
  import Point from "../../components/point.svelte";
  import Suit from "../../components/suit.svelte";
  import Ssuit from "../../components/ssuit.svelte";
  import Loader from "$lib/components/loader.svelte";
  import ConfirmDialog from "../ConfirmDialog.svelte";
  import { UseFetchData } from "$lib/hook/useFetchData";
  import { handleAuthToken } from "$lib/store/routes";
  import { profileStore } from "$lib/store/profile";
  import useDeck from "../../hooks/deck";
  import { error_msg } from "../../store";
  import { createEventDispatcher, onMount } from "svelte";
  export let betID = 0;
  const { getCardSuite, suites } = useDeck();
  $: gameDetails = null;
  $: confirmationData = null;
  const dispatch = createEventDispatcher();
  onMount(async () => {
    try {
      const { data } = await UseFetchData($handleAuthToken).fetch(
        `/hilo-game/details/${betID}`
      );
      gameDetails = {
        ...data,
        betLog: {
          ...data.betLog,
          rounds: data.betLog.rounds.map((r) => ({
            ...r,
            redCard: [suites[1], suites[3]].includes(getCardSuite(r.card)),
          })),
        },
      };
    } catch (error) {
      error_msg.set(error.message);
    }
  });
  $: loading = false;
  const handleVerifyGame = async () => {
    if (!gameDetails.seedHistory.serverSeed) {
      if (loading) return;
      loading = true;
      const res = await new Promise((resolve) => {
        confirmationData = { resolve };
      });
      confirmationData = null;
      if (res) {
        dispatch("setup-seeds", 1);
      }
    } else dispatch("verify", 1);
    loading = false;
  };
</script>

{#if Boolean(gameDetails)}
  <div class="sc-dkPtRN jScFby scroll-view sc-bvFjSx jGQOsZ">
    <div class="sc-emDsmM Osnbt">
      <img
        alt=""
        class="win-state"
        src="/assets/hilo/{gameDetails.betLog.won
          ? 'win.431b83d6.png'
          : 'lose.b4ff48b7.png'}"
      />
      <div class="sc-jibziO gZqspm game-share">
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="sc-gsDKAQ hxODWG icon"
          ><use xlink:href="#icon_Share"></use></svg
        >
      </div>
      <div class="rt_info">
        <img
          alt=""
          class="avatar avatar"
          src={gameDetails.betLog.user.image ||
            "/assets/hilo/avatar.a1ff78fe.png"}
        />
        <div class="name">
          {#if gameDetails.betLog.user.hidden}
            <span class="hidden-name"
              ><svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
                ><use xlink:href="#icon_Hidden"></use></svg
              >Hidden</span
            >
          {:else}
            {gameDetails.betLog.user.username}
          {/if}
        </div>
        <div class="flex">
          <div class="betid">Betting ID: {gameDetails.betLog.bet_id}</div>
          <div class="verified">Verified</div>
        </div>
      </div>
      <div class="rt_time">
        {new Date(gameDetails.betLog.time).toLocaleDateString()}, {new Date(
          gameDetails.betLog.time
        ).toLocaleTimeString()}
      </div>
      <div class="rt_items">
        <div class="item-wrap">
          <div class="label flex-center">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon amount"
              ><use xlink:href="#icon_Amount"></use></svg
            >Amount
          </div>
          <div class="number flex-center">
            <img alt="" class="coin-icon" src={gameDetails.betLog.token_img} />
            {gameDetails.betLog.bet_amount.toFixed(2)}
          </div>
        </div>
        <div class="item-wrap">
          <div class="label flex-center">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon payout"
              ><use xlink:href="#icon_Payout"></use></svg
            >Payout
          </div>
          <div class="number flex-center">
            {gameDetails.betLog.payout.toFixed(2)}x
          </div>
        </div>
        <div class="item-wrap">
          <div class="label flex-center">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon profit"
              ><use xlink:href="#icon_Profit"></use></svg
            >Profit
          </div>
          <div class="number flex-center">
            <img
              alt=""
              class="coin-icon"
              src={gameDetails.betLog.token_img}
            />{gameDetails.betLog.won
              ? ""
              : "-"}{gameDetails.betLog.profit.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
    <div class="sc-fbWUsZ fghvcD">
      <div class="list-wrap">
        {#each gameDetails.betLog.rounds as round, index (`${round.round}_${index}_${gameDetails.betLog.bet_id}`)}
          <div class="hilo-round">
            <div class="sc-dFtzxp gFsinV card-wrap">
              <div class="sc-ywFzA iaRiKX card active">
                <div class="card-back"></div>
                <div class="card-front {round.redCard ? 'card-red' : ''}">
                  <div class="point">
                    <Point cardNumber={round.card} />
                  </div>
                  <div class="ssuit">
                    <Ssuit cardNumber={round.card} />
                  </div>
                  <Suit cardNumber={round.card} />
                  <div class=""></div>
                </div>
              </div>
            </div>
            <div
              class="odds {!gameDetails.betLog.won &&
              round.round === gameDetails.betLog?.round
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
                    class="sc-ljMRFG lisaNS guess-ico guess-ico1 {!gameDetails
                      .betLog.won && round.round === gameDetails.betLog?.round
                      ? 'is-lose'
                      : ''}"
                    ><path
                      d="M18.356 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059zM5.029 4.39l11.505 11.548-11.505 11.671-2.89-2.782 8.15-8.889-8.15-8.49 2.89-3.059z"
                    ></path></svg
                  >
                {:else if round.guess === 2}
                  <svg
                    viewBox="0 0 32 32"
                    class="sc-ljMRFG lisaNS guess-ico guess-ico2 {!gameDetails
                      .betLog.won && round.round === gameDetails.betLog?.round
                      ? 'is-lose'
                      : ''}"
                    ><path
                      d="M15.843 24.405l13.744-13.774-3.277-3.459-10.467 9.758-9.997-9.758-3.602 3.459z"
                    ></path></svg
                  >
                {:else if round.guess === 3}
                  <svg
                    viewBox="0 0 32 32"
                    class="sc-ljMRFG lisaNS guess-ico guess-ico3 {!gameDetails
                      .betLog.won && round.round === gameDetails.betLog?.round
                      ? 'is-lose'
                      : ''}"
                    ><path
                      d="M15.923 6.883l14.541 14.573-3.467 3.66-11.075-10.324-10.577 10.324-3.811-3.66z"
                    ></path></svg
                  >
                {:else if round.guess === 4}
                  <svg
                    viewBox="0 0 32 32"
                    class="sc-ljMRFG lisaNS guess-ico guess-ico4 {!gameDetails
                      .betLog.won && round.round === gameDetails.betLog?.round
                      ? 'is-lose'
                      : ''}"
                    ><path
                      d="M29.222 18.833v5.667h-26.444v-5.667h26.444zM29.222 7.5v5.667h-26.444v-5.667h26.444z"
                    ></path></svg
                  >
                {:else if round.guess === 5}
                  <svg
                    viewBox="0 0 32 32"
                    class="sc-ljMRFG lisaNS guess-ico guess-ico5 {!gameDetails
                      .betLog.won && round.round === gameDetails.betLog?.round
                      ? 'is-lose'
                      : ''}"
                    ><path
                      d="M29 22.929v5.571h-26v-5.571h26zM15.874 2.5l13.010 13.039-3.102 3.275-9.909-9.237-9.464 9.237-3.41-3.275 12.874-13.039z"
                    ></path></svg
                  >
                {:else if round.guess === 6}
                  <svg
                    viewBox="0 0 32 32"
                    class="sc-ljMRFG lisaNS guess-ico guess-ico6 {!gameDetails
                      .betLog.won && round.round === gameDetails.betLog?.round
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
    <div class="seed-main">
      <div class="sc-ezbkAF kDuLvp input">
        <div class="input-label">Server Seed</div>
        <div class="input-control">
          <input
            type="text"
            placeholder="The seed hasn't been revealed yet."
            readonly
            value={gameDetails.seedHistory.serverSeed}
          />
        </div>
      </div>
      <div class="sc-ezbkAF kDuLvp input">
        <div class="input-label">
          <div class="seed-col">
            <div>Server Seed (hash)</div>
            <!-- <a class="cl-primary">Seed Settings</a> -->
          </div>
        </div>
        <div class="input-control">
          <input
            type="text"
            readonly
            value={gameDetails.seedHistory.serverSeedHash}
          />
        </div>
      </div>
      <div class="col">
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-label">Client Seed</div>
          <div class="input-control">
            <input
              type="text"
              readonly
              value={gameDetails.seedHistory.clientSeed}
            />
          </div>
        </div>
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-label">nonce</div>
          <div class="input-control">
            <input type="text" readonly value={gameDetails.betLog.nonce} />
          </div>
        </div>
      </div>
    </div>
    {#if $profileStore.user_id === gameDetails.betLog.user.user_id}
      <div class="verify-wrap">
        <button
          disabled={loading}
          on:click={handleVerifyGame}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal verify-btn"
          ><div class="button-inner">
            {#if loading}
              <Loader />
            {:else}
              Verify
            {/if}
          </div></button
        >
      </div>
    {/if}
  </div>
{:else}
  <div style="height: 500px;">
    <Loader />
  </div>
{/if}

{#if Boolean(confirmationData)}
  <ConfirmDialog resolver={confirmationData.resolve} />
{/if}

<style>
  .jGQOsZ {
    position: relative;
  }
  .jGQOsZ .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
  }
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .Osnbt {
    position: relative;
  }
  .Osnbt .win-state {
    position: absolute;
    left: 0.625rem;
    top: 0px;
    width: 5rem;
    z-index: 10;
  }
  .gZqspm {
    z-index: 10;
    width: 2.75rem;
    height: 2.75rem;
    margin: 0px;
    padding: 0px;
    border-radius: 50%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    right: 0.625rem;
    top: 0.625rem;
  }
  .gZqspm > svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .Osnbt .rt_info {
    margin: 0px auto;
    padding-top: 2.875rem;
    text-align: center;
  }
  .Osnbt .rt_info .avatar {
    width: 4.625rem;
    height: 4.625rem;
    border-radius: 50%;
    border: 2px solid rgb(70, 70, 70);
    font-size: 0px;
  }
  .Osnbt .rt_info .name {
    line-height: 1.25rem;
    margin-top: 0.5rem;
  }
  .Osnbt .rt_info .flex {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 1.25rem;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.375rem;
  }

  .flex {
    display: flex;
  }
  .Osnbt .rt_info .flex .betid {
    opacity: 0.6;
  }
  .Osnbt .rt_info .verified {
    color: rgb(255, 255, 255);
    margin-left: 0.5rem;
    background: url(https://static.nanogames.io/assets/verified.312ca177.svg)
      left center / auto 0.875rem no-repeat;
    padding-left: 1rem;
    font-weight: bold;
  }
  .Osnbt .rt_time {
    font-size: 0.75rem;
    margin-top: 0.375rem;
    text-align: center;
    opacity: 0.5;
  }
  .Osnbt .rt_items {
    margin-top: 2.25rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .Osnbt .rt_items .item-wrap {
    height: 4.625rem;
    border-radius: 0.625rem;
    background-color: rgb(23, 24, 27);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 0.375rem;
    padding: 1rem 0px;
    color: rgba(153, 164, 176, 0.6);
  }
  .Osnbt .rt_items .item-wrap .label {
    height: 1.25rem;
    font-size: 0.75rem;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Osnbt .rt_items .item-wrap .label > svg.amount {
    fill: rgb(223, 39, 113);
  }
  .Osnbt .rt_items .item-wrap .label > svg.payout {
    fill: rgb(119, 60, 253);
  }
  .Osnbt .rt_items .item-wrap .label > svg {
    margin-right: 0.5rem;
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .Osnbt .rt_items .item-wrap .number {
    height: 1rem;
    font-size: 0.75rem;
    white-space: nowrap;
    margin-top: 0.75rem;
  }
  .Osnbt .rt_items .item-wrap .label > svg.profit {
    fill: rgb(218, 30, 40);
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .fghvcD {
    background-color: rgb(23, 24, 27);
    border-radius: 0.625rem;
    padding: 0.875rem 0.875rem 0px;
    margin-top: 1.25rem;
  }
  .fghvcD .list-wrap {
    display: flex;
    height: 7.875rem;
    overflow: auto;
  }
  .fghvcD .hilo-round {
    position: relative;
    width: 3.875rem;
    height: 5.375rem;
    margin-right: 0.375rem;
  }
  .fghvcD .hilo-round .card-wrap {
    width: 3.875rem;
    height: 5.375rem;
  }
  .gFsinV {
    width: 8.125rem;
    height: 11.25rem;
  }
  .iaRiKX.active {
    transform: rotateY(0deg);
  }
  .iaRiKX {
    width: 100%;
    height: 100%;
    position: relative;
    transform: rotateY(-180deg);
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    transform-style: preserve-3d;
  }
  .iaRiKX .card-back {
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
  .iaRiKX .card-front {
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
  .iaRiKX .card-front .point {
    position: absolute;
    left: 7%;
    top: 8%;
    width: 19%;
  }
  :global(.iaRiKX .card-front svg) {
    fill: rgb(54, 51, 65);
  }
  :global(.iaRiKX svg) {
    width: 100%;
    height: 100%;
  }
  .iaRiKX .card-front .ssuit {
    position: absolute;
    right: 7%;
    top: 8%;
    width: 23%;
  }
  :global(.iaRiKX .card-front .suit) {
    width: 56%;
    left: 22%;
    top: 32%;
    position: absolute;
  }
  :global(.iaRiKX .card-front .jqk) {
    width: 66%;
    left: 17%;
    top: 27%;
  }
  :global(.iaRiKX .card-front.card-red svg) {
    fill: rgb(229, 83, 62);
  }
  .fghvcD .hilo-round .odds {
    width: 100%;
    white-space: nowrap;
    line-height: 1.25rem;
    border-radius: 0.25rem;
    text-align: center;
    color: rgb(255, 255, 255);
    font-weight: 600;
    margin-top: 0.3125rem;
    background-color: rgb(67, 179, 9);
    transform: translateZ(2px);
  }
  .fghvcD .hilo-round .val {
    zoom: 0.8;
  }
  .fghvcD .hilo-round .guess svg {
    width: 0.875rem;
    height: 0.875rem;
  }
  .lisaNS.guess-ico.is-lose {
    fill: rgb(236, 72, 95);
  }

  .lisaNS.guess-ico {
    fill: rgb(67, 179, 9);
  }
  .fghvcD .hilo-round .guess {
    position: absolute;
    left: -1rem;
    top: 40%;
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
    transform: translateZ(1px);
  }
  .jGQOsZ .seed-main {
    margin-top: 1.25rem;
  }
  .jGQOsZ .seed-main .input:first-of-type {
    margin-top: 0px;
  }
  .jGQOsZ .seed-main .input {
    margin-top: 1rem;
  }
  .jGQOsZ .seed-main .input:first-of-type {
    margin-top: 0px;
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
  .jGQOsZ .seed-main .input .input-control input[readonly] {
    opacity: 1;
  }
  .jGQOsZ .seed-main .input input {
    font-weight: 500;
  }
  .kDuLvp .input-control input[readonly] {
    opacity: 0.5;
  }
  .jGQOsZ .seed-main .input .input-control input[readonly] {
    opacity: 1;
  }
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
  .jGQOsZ .seed-main .input .seed-col {
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .jGQOsZ .seed-main .col {
    margin-top: 0.75rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .jGQOsZ .seed-main .input .seed-col .cl-primary {
    color: rgb(67, 179, 9);
  }
  .jGQOsZ .seed-main .col > .input:first-of-type {
    flex: 2 1 0%;
  }

  .jGQOsZ .seed-main .col > .input {
    margin-top: 0rem;
  }
  .jGQOsZ .seed-main .col > .input:last-of-type {
    flex: 1 1 0%;
    margin-left: 0.625rem;
  }
  .jGQOsZ .seed-main .col > .input:last-of-type input {
    text-align: center;
  }
  .jGQOsZ > div:last-of-type {
    margin-bottom: 3.375rem;
  }
  .jGQOsZ .verify-wrap .verify-btn {
    width: 70%;
    height: 3.5rem;
    margin: 1.25rem auto 0px;
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
  .Osnbt .rt_info .name .hidden-name {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }
</style>
