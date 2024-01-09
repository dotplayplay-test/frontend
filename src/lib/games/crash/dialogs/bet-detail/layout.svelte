<script>
  import Loader from "$lib/components/loader.svelte";
  import Decimal from "decimal.js";
  import { UseFetchData } from "$lib/hook/useFetchData";
  import { handleAuthToken } from "$lib/store/routes";
  import { error_msg } from "../../store";
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  export let betID = "";
  $: details = null;
  let gameNameMap = {
    normal: "Classic",
    red: "Red",
    green: "Green",
    moon: "Moon",
  };
  onMount(async () => {
    try {
      const { data } = await UseFetchData($handleAuthToken).fetch(
        `/user/crash-game/details/${betID}`
      );
      details = data.details;
    } catch (error) {
      error_msg.set(error.message);
    }
  });
</script>

{#if Boolean(details)}
  <div class="sc-dkPtRN jScFby scroll-view sc-iRFsWr bUSPeg">
    <div class="sc-bvFjSx bAgSeR">
      <img
        alt=""
        class="win-state"
        src="https://static.nanogames.io/assets/{details.won
          ? 'win.431b83d6.png'
          : 'lose.b4ff48b7.png'}"
      />
      <div class="sc-emDsmM fkioFo game-share">
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
          src={details.hidden
            ? "/assets/avatar.a1ff78fe.png"
            : details.avatar}
        />
        <div class="name">
          {#if details.hidden}
            <span class="hidden-name"
              ><svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
                ><use xlink:href="#icon_Hidden"></use></svg
              >Hidden</span
            >
          {:else}
            {details.name}
          {/if}
        </div>
        <div class="flex">
          <div class="betid">Betting ID: {details.betID}</div>
          <div class="verified">Verified</div>
        </div>
      </div>
      <div class="rt_time">
        {new Date(details.betTime).toLocaleDateString()}, {new Date(
          details.betTime
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
            {new Decimal(details.betAmount).toDP(6)} {details.currencyName}
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
            {details.won ? details.payout : 0} x
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
            {details.won
              ? new Decimal(details.profitAmount).toDP(6)
              : `-${details.betAmount}`}
            {details.currencyName}
          </div>
        </div>
      </div>
    </div>
    <div class="sc-jHwEXd kbQquH">
      <div class="sc-bttaWv fBJgLI rt_items">
        <div class="item-wrap">
          <div class="item-num">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon result"
              ><use xlink:href="#icon_Result"></use></svg
            >Result
          </div>
          <div class="item-desc">{details.crashPoint}x</div>
        </div>
        <div class="item-wrap">
          <div class="item-num">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon bettype"
              ><use xlink:href="#icon_Bet"></use></svg
            >Bet
          </div>
          <div class="item-desc">
            <span class="mthan">{details.betType}</span>
          </div>
        </div>
        <div class="item-wrap">
          <div class="item-num">
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon chance"
              ><use xlink:href="#icon_Chance"></use></svg
            >Chance
          </div>
          <div class="item-desc">
            {details.won ? new Decimal(99 / details.payout).toDP(2) : "-"}%
          </div>
        </div>
      </div>
      <div class="sc-ezbkAF kDuLvp input">
        <div class="input-label">Game ID</div>
        <div class="input-control">
          <input type="text" readonly value={details.gameID} />
        </div>
      </div>
      <div class="sc-ezbkAF kDuLvp input">
        <div class="input-label">Hash</div>
        <div class="input-control">
          <input type="text" readonly value={details.gameHash} />
        </div>
      </div>
      <div class="flex btns">
        <button
          on:click={() => {
            dispatch("allPlayers", details.gameID);
          }}
          class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal all"
          ><div class="button-inner">
            <span>All Players</span><svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="sc-gsDKAQ hxODWG icon"
              ><use xlink:href="#icon_Arrow"></use></svg
            >
          </div></button
        ><button
          on:click={() => {
            window.open(
              `https://nanogamesio.github.io/verify/crash.html?hash=${details.gameHash}`,
              "_blank"
            );
          }}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
          ><div class="button-inner">Verify</div></button
        >
      </div>
    </div>
  </div>
{:else}
  <div style="height: 500px;">
    <Loader />
  </div>
{/if}

<style>
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .bAgSeR {
    position: relative;
  }
  .bAgSeR .win-state {
    position: absolute;
    left: 0.625rem;
    top: 0px;
    width: 5rem;
    z-index: 10;
  }
  .bAgSeR .rt_info {
    margin: 0px auto;
    padding-top: 2.875rem;
    text-align: center;
  }
  .bAgSeR .rt_info .avatar {
    width: 4.625rem;
    height: 4.625rem;
    border-radius: 50%;
    border: 2px solid rgb(70, 70, 70);
    font-size: 0px;
  }
  .bAgSeR .rt_info .name {
    line-height: 1.25rem;
    margin-top: 0.5rem;
  }
  .bAgSeR .rt_info .name .hidden-name {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .bAgSeR .rt_info .name .hidden-name {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .bAgSeR .rt_info .flex {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 1.25rem;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.375rem;
  }
  .bAgSeR .rt_info .flex .betid {
    opacity: 0.6;
  }
  .bAgSeR .rt_info .verified {
    color: rgb(255, 255, 255);
    margin-left: 0.5rem;
    background: url(https://static.nanogames.io/assets/verified.312ca177.svg)
      left center / auto 0.875rem no-repeat;
    padding-left: 1rem;
    font-weight: bold;
  }
  .bAgSeR .rt_time {
    font-size: 0.75rem;
    margin-top: 0.375rem;
    text-align: center;
    opacity: 0.5;
  }
  .bAgSeR .rt_items {
    margin-top: 2.25rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .item-wrap {
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
  .item-wrap .label {
    height: 1.25rem;
    font-size: 0.75rem;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bAgSeR .rt_items .item-wrap .number {
    height: 1rem;
    font-size: 0.75rem;
    white-space: nowrap;
    margin-top: 0.75rem;
  }
  .bAgSeR .rt_items .item-wrap .label > svg.amount {
    fill: rgb(223, 39, 113);
  }
  .bAgSeR .rt_items .item-wrap .label > svg.payout {
    fill: rgb(119, 60, 253);
  }
  .bAgSeR .rt_items .item-wrap .label > svg.profit {
    fill: rgb(218, 30, 40);
  }

  .bAgSeR .rt_items .item-wrap .label > svg {
    margin-right: 0.5rem;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .fBJgLI {
    margin-top: 0.5rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .fBJgLI .item-wrap .item-num {
    height: 1.25rem;
    font-size: 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
  }
  .fBJgLI .item-wrap .item-desc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 1rem;
    font-size: 0.75rem;
    white-space: nowrap;
    margin-top: 0.75rem;
  }
  .fBJgLI .item-wrap .item-num > svg.bettype {
    fill: rgb(15, 98, 254);
  }
  .fBJgLI .item-wrap .item-num > svg.result {
    fill: rgb(67, 179, 9);
  }

  .fBJgLI .item-wrap .item-num > svg {
    margin-right: 0.5rem;
  }
  .fBJgLI .item-wrap .item-num > svg.chance {
    fill: rgb(237, 99, 0);
  }
  .kDuLvp {
    margin-top: 1rem;
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
  .kDuLvp .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 0.75rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .input-control input[readonly] {
    opacity: 0.5;
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
  .kbQquH .btns {
    margin: 1.25rem 0px;
  }
  .kbQquH .all {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-right: 0.625rem;
    flex: 0 0 35%;
  }

  .gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
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
  .kbQquH .all .icon {
    fill: rgb(245, 246, 247);
    width: 0.875rem;
    height: 0.875rem;
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
</style>
