<script>
  import Loader from '$lib/components/loader.svelte';
  import ConfirmDialog from '$lib/components/ConfirmDialog.svelte';
  import { UseFetchData } from '$lib/hook/useFetchData';
  import { handleAuthToken } from '$lib/store/routes';
  import { profileStore } from '$lib/store/profile';
  import { error_msg } from '../../store';
  import { createEventDispatcher, onMount } from 'svelte';
  import PlinkoResource from '../../logics/PlinkoResource';
  export let betID = 0;
  $: gameDetails = null;
  $: confirmationData = null;
  const dispatch = createEventDispatcher();
  onMount(async () => {
    try {
      const { data } = await UseFetchData($handleAuthToken).fetch(
        `/user/plinko-game/details/${betID}`,
      );
      const payouts =
        PlinkoResource.PAYOUTS[data.betLog.gameValue.risk][
          data.betLog.gameValue.row
        ];
      const payoutIndex = data.betLog.gameValue.path
        .map((p) => Math.round(p))
        .reduce((t, e) => t + e, 0);
      gameDetails = {
        ...data,
        payoutIndex,
        payouts: payouts.map((odds, i) => {
          return {
            odds,
            active: i === payoutIndex,
            fill: PlinkoResource.interpolateColorToHex(
              (2 * Math.abs(i - (payouts.length - 1) / 2)) / payouts.length,
            ),
          };
        }),
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
      confirmationData = {
        message:
          'Sorry! You need set up a new seed before validating the data (the server seed is encrypted)',
        response: (res) => {
          confirmationData = null;
          if (res) {
            dispatch('setup-seeds', 1);
          }
        },
      };
    } else {
      window.open(`https://nanogamesio.github.io/verify/plinko.html?s=${gameDetails.seedHistory.serverSeed}&c=${gameDetails.seedHistory.clientSeed}&h=${gameDetails.seedHistory.serverSeedHash}&n=${gameDetails.seedHistory.maxNonce}`)
    };
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
          src={gameDetails.betLog.avatar || '/assets/hilo/avatar.a1ff78fe.png'}
        />
        <div class="name">
          {#if gameDetails.betLog.hidden}
            <span class="hidden-name"
              ><svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
                ><use xlink:href="#icon_Hidden"></use></svg
              >Hidden</span
            >
          {:else}
            {gameDetails.betLog.name}
          {/if}
        </div>
        <div class="flex">
          <div class="betid">Betting ID: {gameDetails.betLog.betId}</div>
          <div class="verified">Verified</div>
        </div>
      </div>
      <div class="rt_time">
        {new Date(gameDetails.betLog.betTime).toLocaleDateString()}, {new Date(
          gameDetails.betLog.betTime,
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
            <img
              alt=""
              class="coin-icon"
              src={gameDetails.betLog.currencyImage}
            />
            {gameDetails.betLog.betAmount.toFixed(2)}
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
              src={gameDetails.betLog.currencyImage}
            />{gameDetails.betLog.won
              ? ''
              : '-'}{gameDetails.betLog.profit.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
    <div class="sc-fUQcsx lcThFX ten_res">
      {#each gameDetails.payouts as payout, index (`${index}_${payout.odds}`)}
        <div class="res_t {payout.active ? 'active' : ''}">
          <svg
            fill={payout.fill}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 54 43"
            ><g fill-rule="evenodd"
              ><rect width="54" height="29" y="14" rx="2"></rect><path
                d="M2.592 0H8c8.745.873 8 5 19 5 10.066.077 10.255-4.127 19-5h5.408A2.592 2.592 0 0154 2.592v34.816A2.592 2.592 0 0151.408 40H2.592A2.592 2.592 0 010 37.408V2.592A2.592 2.592 0 012.592 0z"
              ></path></g
            ></svg
          ><span>{payout.odds.toFixed(1)}x</span>
        </div>
      {/each}
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
      <div class="sc-iJCbQK bbPsYx">
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-label">Risk</div>
          <div class="input-control">
            <input
              type="text"
              readonly
              value={['Low', 'Medium', 'High'][
                gameDetails.betLog.gameValue.risk - 1
              ]}
            />
          </div>
        </div>
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-label">Row</div>
          <div class="input-control">
            <input
              type="text"
              readonly
              value={gameDetails.betLog.gameValue.row}
            />
          </div>
        </div>
      </div>
    </div>
    {#if $profileStore.user_id === gameDetails.betLog.userId}
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
  <ConfirmDialog dialogData={confirmationData} />
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
  .bbPsYx {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .bbPsYx .input {
    width: 49%;
    margin-top: 1rem !important;
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
  /* .jGQOsZ .seed-main .input .seed-col {
    color: rgb(67, 179, 9);
  } */
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
  .lcThFX.ten_res {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    overflow: auto;
    padding-top: 1.5rem;
    padding-bottom: 0.625rem;
  }
  .lcThFX.ten_res .res_t {
    margin: 0px 0.1875rem;
    color: rgb(255, 255, 255);
    min-width: 2.5rem;
    height: 2rem;
    line-height: 1.25rem;
    position: relative;
  }
  .lcThFX.ten_res .res_t svg {
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .lcThFX.ten_res .active {
    margin-top: -0.5rem;
  }
  .lcThFX.ten_res .res_t span {
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    left: 0px;
    top: 0px;
    font-weight: bold;
  }
</style>
