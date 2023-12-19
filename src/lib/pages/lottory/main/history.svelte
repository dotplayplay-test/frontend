<script>
  import { handleAuthToken } from "$lib/store/routes";
  import { handleisLoggin } from "$lib/store/profile";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
  import BiSkipNext from "svelte-icons-pack/bi/BiSkipNext";
  import Loader from "$lib/components/loader.svelte";
  import HiOutlineScale from "svelte-icons-pack/hi/HiOutlineScale";
  import IoArrowBack from "svelte-icons-pack/ri/RiSystemArrowDropLeftLine";
  import IoArrowForward from "svelte-icons-pack/ri/RiSystemArrowDropRightLine";
  import BiArrowToRight from "svelte-icons-pack/bi/BiArrowToRight";
  import { UseFetchData } from "$lib/hook/useFetchData";
  import { createEventDispatcher, onMount } from "svelte";
  const dispatch = createEventDispatcher();
  $: loading = true;
  $: loadingTickets = false;
  $: tickets = [];
  $: gameHistory = [];
  $: currentIndex = 0;
  $: currentGame = gameHistory[currentIndex];
  $: selectOptionsOpen = false;

  const handleShowPF = () => {
    dispatch("showPFD", currentGame.game_id);
  };
  const handleChangeIndex = (to, replace) => {
    if (currentIndex + to >= 0 && currentIndex + to < gameHistory.length) {
      currentIndex = replace ? to : currentIndex + to;
      currentGame = gameHistory[currentIndex];
      loadTickets(currentIndex);
    }
  };

  async function loadTickets(index) {
    if (!gameHistory.length) return;
    loadingTickets = true;
    const game = gameHistory[index];
    if (!game) {
      loadingTickets = false;
      return;
    }
    try {
      const { data, error } = await UseFetchData($handleAuthToken).fetch(
        `/lottery/game-tickets?id=${game.game_id}`,
      );
      if (index === currentIndex) tickets = data.tickets;
    } catch (error) {
      console.log(error);
    } finally {
      loadingTickets = false;
    }
  }
  onMount(async () => {
    try {
      const { data, error } = await UseFetchData($handleAuthToken).fetch("/lottery/history");
      gameHistory = data.games;
      loading = false;
      loadTickets(0);
    } catch (error) {
      console.log(error);
    }
  });
</script>

{#if loading}
  <div style="height: 300px">
    <Loader />
  </div>
{:else if Boolean(gameHistory.length)}
  <div class="sc-cAhXWc elqmaR">
    <div class="sc-lheXJl dTcUpI gameno-check">
      <div class="game-no">Game ID</div>
      <div class="gameno-control">
        <button
          on:click={() => handleChangeIndex(1)}
          disabled={currentIndex === gameHistory.length - 1}
          class="sc-iqseJM cBmlor button button-normal pre"
          ><div class="button-inner">
            <Icon
              src={IoArrowBack}
              size="23"
              color="rgba(153, 164, 176, 0.6)"
            />
          </div></button
        >
        <div
          on:pointerleave={() => (selectOptionsOpen = false)}
          class="sc-jJoQJp gOHquD select {selectOptionsOpen ? 'is-open' : ''}"
        >
          <div
            on:pointerover={() => (selectOptionsOpen = true)}
            class="select-trigger"
          >
            <p class="select-option">{currentGame.game_id}</p>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              on:click={() => (selectOptionsOpen = !selectOptionsOpen)}
              class="arrow"
            >
              <div class="icon-wrap">
                <Icon
                  src={IoArrowForward}
                  size="23"
                  color="rgba(153, 164, 176, 0.6)"
                />
              </div>
            </div>
          </div>
          {#if selectOptionsOpen}
            <div
              class="sc-hiCibw iVwWcQ select-options-wrap"
              style="opacity: 1; top: 100%; transform: none;"
            >
              <div
                class="sc-dkPtRN jScFby scroll-view select-options len-{gameHistory.length}"
              >
                {#each gameHistory as game, index (game.game_id)}
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <div
                    on:click={() => {
                      selectOptionsOpen = false;
                      handleChangeIndex(index, true);
                    }}
                    class="select-option {currentGame.game_id === game.game_id
                      ? 'active'
                      : ''}"
                  >
                    {game.game_id}
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        </div>
        <button
          on:click={() => handleChangeIndex(-1)}
          disabled={currentIndex === 0}
          class="sc-iqseJM cBmlor button button-normal"
          ><div class="button-inner">
            <Icon
              src={IoArrowForward}
              size="23"
              color="rgba(153, 164, 176, 0.6)"
            />
          </div></button
        ><button
          on:click={() => handleChangeIndex(0, true)}
          class="sc-iqseJM cBmlor button button-normal"
          disabled={currentIndex === 0}
          ><div class="button-inner">
            <Icon
              src={BiArrowToRight}
              size="23"
              color="rgba(153, 164, 176, 0.6)"
            />
          </div></button
        ><span class="time"
          >{new Date(currentGame.draw_date).toLocaleString()}</span
        >
      </div>
      <button on:click={handleShowPF} class="fairness"
        ><Icon
          src={HiOutlineScale}
          size="23"
          color="rgba(153, 164, 176, 0.6)"
        /></button
      >
    </div>
    <div class="sc-cAhXWc elqmaR table-wrap">
      <div class="sc-oXPCX iJCxbN">
        <img
          class="jackpot-bg"
          src="https://static.nanogames.io/assets/jackpot_ball_banner.d504da09.png"
          alt=""
        />
        <div class="nums">
          {#each currentGame.numbers.slice(0, 5) as number (number)}
            <div class="ball">
              <img
                src="https://static.nanogames.io/assets/ball.161fa8af.png"
                alt=""
              />
              <div class="num">{number}</div>
            </div>
          {/each}
        </div>
        <div class="jackpotNum">
          <img
            alt="jackpot"
            src="https://static.nanogames.io/assets/jackpot_ball.23b29c5d.png"
          />
          <div class="num">{currentGame.numbers[5]}</div>
        </div>
      </div>
      <div class="sc-gsFzgR jMsmRL">
        <div class="wrap">
          <div class="top">
            <div class="sub-tit">Winners List</div>
            <div class="sub-txt">
              Total tickets sold this round <span
                >{currentGame.total_tickets}</span
              >
            </div>
          </div>
          {#if !loadingTickets}
            {#if Boolean(tickets.length)}
              <table class="sc-gWXbKe iUeetX table">
                <thead
                  ><tr
                    ><th>Winner Name</th>
                    <th class="hnums">Numbers</th><th>Matches</th>
                    <th>Prize</th>
                  </tr></thead
                ><tbody>
                  {#each tickets as ticket (ticket.ticket_id)}
                    <tr
                      ><td
                        ><a
                          class="sc-jUosCB iTDswZ user-info"
                          href="/user/profile/{ticket.user.user_id}"
                          ><img
                            alt="avatar"
                            class="avatar"
                            src={ticket.user.image}
                          />
                          <div class="name">{ticket.user.username}</div></a
                        ></td
                      ><td
                        ><div class="nums-wrap">
                          <div class="nums-inner">
                            <div class="sc-iseIHH gHuzXM draw">
                              {#each ticket.numbers.slice(0, 5) as number, index (`${number}_${index}`)}
                                <div
                                  class="ball {currentGame.numbers.includes(
                                    number,
                                  )
                                    ? 'active'
                                    : ''}"
                                >
                                  <div>{number}</div>
                                </div>
                              {/each}
                              <div
                                class="ball jackpot-ball {currentGame
                                  .numbers[5] === ticket.numbers[5]
                                  ? 'active'
                                  : ''}"
                              >
                                <div>{ticket.numbers[5]}</div>
                              </div>
                            </div>
                            <p class="quantity">
                              x {ticket.amount}
                            </p>
                          </div>
                        </div></td
                      ><td class="res">{ticket.matched}</td><td class="el"
                        ><span class="green-word">$ {ticket.prize}</span></td
                      ></tr
                    >
                  {/each}
                </tbody>
              </table>
            {:else}
              <div class="sc-epFoly etYRmD">
                <div class="sc-eCImPb biQums cuPxwd empty">
                  <img
                    alt="No data"
                    src="https://static.nanogames.io/assets/empty.acd1f5fe.png"
                  />
                  <div class="msg">Oops! There is no data yet!</div>
                </div>
              </div>
            {/if}
          {:else}
            <div style="height: 200px;">
              <Loader />
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="sc-epFoly etYRmD">
    <div class="sc-eCImPb biQums cuPxwd empty">
      <img
        alt="No data"
        src="https://static.nanogames.io/assets/empty.acd1f5fe.png"
      />
      <div class="msg">Oops! There is no data yet!</div>
    </div>
  </div>
{/if}

<style>
  .dTcUpI {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid rgb(42, 44, 50);
    height: 4rem;
    padding: 0px 1.125rem;
  }
  .dTcUpI .gameno-control {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 1.25rem;
  }
  .dTcUpI .gameno-control .button {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0px 0.3125rem;
    background-color: rgba(45, 48, 53, 0.8);
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
  .gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
  }
  .dTcUpI .gameno-control .select-trigger {
    min-width: 8.75rem;
    line-height: 2.375rem;
    height: 2.5rem;
    text-align: center;
    margin: 0px 6px;
    border-radius: 10px;
    border: 1px solid rgb(45, 48, 53);
    padding: 0px 2.875rem 0px 0.625rem;
    background-color: rgba(45, 48, 53, 0.5);
    color: rgb(255, 255, 255);
  }
  .gOHquD.is-open .select-options-wrap {
    pointer-events: auto;
  }
  .gOHquD .arrow > .icon-wrap {
    display: grid;
    place-items: center;
  }
  .dTcUpI .gameno-control .select-trigger .arrow > * {
    font-size: 0.625rem;
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
  }
  .gOHquD.is-open .arrow > .icon-wrap {
    transform: rotateZ(90deg) !important;
  }
  .iVwWcQ {
    position: absolute;
    padding: 0.3125rem 0px;
    width: 100%;
    left: 0px;
    z-index: 2;
    pointer-events: none;
  }
  .iVwWcQ .select-options {
    border-radius: 1.25rem;
    padding: 0.125rem 0.375rem;
    background-color: rgb(23, 24, 27);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
    height: auto;
    max-height: 16.25rem;
  }
  .iVwWcQ .select-options::-webkit-scrollbar-button {
    display: none;
  }
  .iVwWcQ .select-options::-webkit-scrollbar-thumb {
    background-color: var(--scroll-color);
    transition: all 0.5s;
    border-radius: 5px;
  }
  .iVwWcQ .select-options::-webkit-scrollbar-track {
    margin: 20px 0;
  }
  .iVwWcQ .select-options::-webkit-scrollbar {
    display: block;
    width: 5px;
    height: 5px;
    background-color: transparent;
    border-radius: 5px;
  }

  .iVwWcQ .select-options:not(.len-1) > .active {
    border-color: rgba(91, 174, 28, 0.4);
  }
  .iVwWcQ .select-options:not(.len-1) > .active:hover {
    background-color: transparent;
  }
  .iVwWcQ .select-option:hover {
    background-color: rgba(45, 48, 53, 0.4);
  }
  .iVwWcQ .select-options:not(.len-1) > .active::after {
    content: "";
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    top: 50%;
    margin-top: -0.25rem;
    right: 0.625rem;
    background-color: rgb(67, 179, 9);
    box-shadow: rgba(91, 174, 28, 0.15) 0px 0px 0px 0.3125rem;
  }

  .iVwWcQ .select-option {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 0.625rem;
    font-size: 0.875rem;
    height: 2rem;
    margin: 0.25rem 0px;
    border: 1px solid transparent;
    border-radius: 1.0625rem;
    cursor: pointer;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
  }
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
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
  .dTcUpI .gameno-control .select-trigger .arrow {
    border-left: 1px solid rgb(45, 48, 53);
    width: 2.25rem;
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
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }

  .dTcUpI .gameno-control .button {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0px 0.3125rem;
    background-color: rgba(45, 48, 53, 0.8);
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
  .cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
  }

  .dTcUpI .gameno-control .button {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0px 0.3125rem;
    background-color: rgba(45, 48, 53, 0.8);
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
  .dTcUpI .gameno-control .time {
    margin-left: 2.25rem;
    white-space: nowrap;
  }
  .dTcUpI .fairness {
    margin-left: auto;
  }
  .iJCxbN .jackpot-bg {
    width: 100%;
    display: inline-block;
    vertical-align: top;
  }
  .iJCxbN {
    width: 50%;
    max-width: 33.25rem;
    min-width: 20rem;
    position: relative;
    margin: 0.375rem auto 1.5rem;
  }
  .iJCxbN .nums {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 58%;
    left: 26%;
    top: 0px;
    position: absolute;
    height: 100%;
  }
  .iJCxbN .nums .ball {
    flex: 1 1 0%;
    height: 100%;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .iJCxbN .nums .ball img {
    height: 70%;
    display: inline-block;
    vertical-align: top;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
  }
  .iJCxbN .nums .ball .num {
    color: rgb(0, 0, 0);
    position: relative;
    z-index: 1;
    font-weight: 800;
    font-size: 1rem;
  }
  .iJCxbN .jackpotNum {
    position: absolute;
    height: 70%;
    top: 15%;
    right: 4%;
  }
  .iJCxbN .jackpotNum img {
    display: inline-block;
    vertical-align: top;
    height: 100%;
  }
  .iJCxbN .jackpotNum .num {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    color: rgb(0, 0, 0);
    z-index: 1;
    font-weight: 800;
    font-size: 1rem;
  }
  .jMsmRL .wrap {
    background-color: rgb(24, 25, 28);
    border-radius: 1.25rem;
    padding-top: 1.125rem;
    border: 1px solid transparent;
  }
  .jMsmRL .top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 1.5rem;
  }
  .jMsmRL .top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 1.5rem;
  }
  .jMsmRL .top .sub-tit,
  .jMsmRL .top .sub-txt span {
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .jMsmRL .top .sub-txt span {
    margin-left: 0.5rem;
  }

  .jMsmRL .top .sub-tit,
  .jMsmRL .top .sub-txt span {
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .jMsmRL .top .sub-txt span {
    margin-left: 0.5rem;
  }
  .jMsmRL table {
    background-color: rgb(24, 25, 28);
    border-radius: 1.25rem;
    padding: 0.25rem 0.75rem 0.5625rem;
  }

  .jMsmRL table {
    table-layout: auto;
  }

  .iUeetX {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  @media screen and (min-width: 800px) {
    .jMsmRL table thead tr th:first-child,
    .jMsmRL table tbody tr td:first-child {
      width: 18%;
    }
  }

  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }

  .jMsmRL table thead tr th {
    color: var(--text-color);
    white-space: nowrap;
    padding-bottom: 0.5625rem;
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }

  .iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
  }
  .jMsmRL table thead tr th {
    color: rgba(153, 164, 176, 0.8);
    white-space: nowrap;
    padding-bottom: 0.5625rem;
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }

  .iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
  }
  @media screen and (min-width: 800px) {
    .jMsmRL table thead tr th:first-child,
    .jMsmRL table tbody tr td:first-child {
      width: 18%;
    }
  }

  .iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
  }

  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }

  .jMsmRL table tbody td {
    color: rgb(255, 255, 255);
    padding: 0.5625rem 0.75rem;
  }

  .jMsmRL table td {
    width: 25%;
  }

  .iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
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
  .jMsmRL table .avatar {
    width: 2.625rem;
    height: 2.625rem;
    margin-right: 1rem;
  }

  .iTDswZ .avatar {
    width: 1.62em;
    height: 1.62em;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  .iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .jMsmRL .nums-wrap {
    width: 100%;
  }
  .jMsmRL .nums-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .gHuzXM {
    width: 14.6875rem;
    height: 2.6875rem;
    background-image: url(https://static.nanogames.io/assets/ball_bg.10eb599f.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0px 0.25rem;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .gHuzXM .ball.active {
    opacity: 1;
  }

  .gHuzXM .ball {
    width: 1.75rem;
    height: 1.75rem;
    vertical-align: top;
    margin: 0px 0.25rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 0.75rem;
    background-image: url(https://static.nanogames.io/assets/ball.161fa8af.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: rgb(0, 0, 0);
    opacity: 0.6;
    font-weight: 800;
    flex: 0 0 auto;
  }
  .gHuzXM .jackpot-ball {
    flex: 0 0 auto;
    margin-left: 0.875rem;
    background-image: url(https://static.nanogames.io/assets/jackpot_ball.23b29c5d.png);
  }

  .gHuzXM .ball {
    width: 1.75rem;
    height: 1.75rem;
    vertical-align: top;
    margin: 0px 0.25rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 0.75rem;
    background-image: url(https://static.nanogames.io/assets/ball.161fa8af.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: rgb(0, 0, 0);
    opacity: 0.6;
    font-weight: 800;
    flex: 0 0 auto;
  }
  .jMsmRL .nums-wrap .quantity {
    flex: 0 0 auto;
    margin-left: 0.5rem;
    color: rgb(255, 255, 255);
    width: 1.25rem;
    white-space: nowrap;
  }
  @media screen and (min-width: 800px) {
    .jMsmRL table thead tr th:nth-child(3),
    .jMsmRL table tbody tr td:nth-child(3) {
      width: 24%;
    }
  }

  .jMsmRL table tbody .res {
    color: rgb(255, 255, 255);
  }

  .jMsmRL table tbody td {
    color: rgb(255, 255, 255);
    padding: 0.5625rem 0.75rem;
  }

  .jMsmRL table td {
    width: 25%;
  }

  .iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }
  @media screen and (min-width: 800px) {
    .jMsmRL table thead tr th:nth-child(4),
    .jMsmRL table tbody tr td:nth-child(4) {
      width: 12%;
    }
  }

  .iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
  }

  .iUeetX th:last-child,
  .iUeetX td:last-child {
    text-align: right;
  }

  .jMsmRL table tbody td {
    color: rgb(255, 255, 255);
    padding: 0.5625rem 0.75rem;
  }

  .jMsmRL table td {
    width: 25%;
  }

  .iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
  }

  .iUeetX th,
  .iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
  }
  .jMsmRL table tbody td .green-word {
    color: rgb(67, 179, 9);
  }
</style>
