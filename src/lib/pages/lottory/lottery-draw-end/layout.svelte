<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { handleAuthToken } from "$lib/store/routes";
  import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
  import Loader from "$lib/components/loader.svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import { UseFetchData } from "$lib/hook/useFetchData";
  export let gameID;
  $: loading = true;
  $: game = {};
  $: tickets = 0;
  $: bonuses = 0;

  const dispatch = createEventDispatcher();
  const handleClose = () => {
    dispatch("close-ldd");
  };

  onMount(async () => {
    loading = true;
    try {
      const [
        { data: lotteryData, error: lotteryError },
        { data: ticketsData, error: ticketsError },
      ] = await Promise.all([
        UseFetchData($handleAuthToken).fetch(
          `/lottery/details?id=${gameID}`,
        ),
        UseFetchData($handleAuthToken).fetch(
          `/lottery/tickets?id=${gameID}`,
        ),
      ]);
      if (lotteryError || ticketsError)
        throw new Error(lotteryError || ticketsError);
      game = lotteryData.lottery;
      tickets = ticketsData.tickets.reduce((a, { amount }) => a + amount, 0);
      bonuses = ticketsData.tickets
        .filter((ticket) => ticket.prize <= 2)
        .reduce((a, { amount }) => a + amount, 0);
    } catch (error) {
      handleClose();
    } finally {
      loading = false;
    }
  });
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
  <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
    <div class="sc-cQMzAB QzMTs">
      <canvas
        width="500"
        height="270"
        style="touch-action: auto; width: 500px; height: 270px; cursor: inherit;"
      ></canvas>
      <div class="cont">
        <button on:click={handleClose} class="sc-ieecCq fLASqZ close-icon"
          ><Icon
            src={IoCloseSharp}
            size="23"
            color="rgba(153, 164, 176, 0.6)"
          /></button
        >
        {#if loading}
          <div style="height: 179px">
            <Loader />
          </div>
        {:else}
          <div class="sub-tit">Lottery Game ID. <span>{gameID}</span></div>
          <div class="tit">THE <span>LUCKY NUMBERS</span> ARE..</div>
          <div class="sc-oXPCX iJCxbN ball-list">
            <img
              class="jackpot-bg"
              src="https://static.nanogames.io/assets/jackpot_ball_banner.d504da09.png"
              alt=""
            />
            <div class="nums">
              {#each game.numbers.slice(0, 5) as number (number)}
                <div class="ball">
                  <img
                    src="https://static.nanogames.io/assets/ball.161fa8af.png"
                    alt="wining number({number})"
                  />
                  <div class="num">{number}</div>
                </div>
              {/each}
            </div>
            <div class="jackpotNum">
              <img
                alt="Jackpot Number({game.numbers[5]})"
                src="https://static.nanogames.io/assets/jackpot_ball.23b29c5d.png"
              />
              <div class="num">{game.numbers[5]}</div>
            </div>
          </div>
          <div class="tickets-num">
            You have <span class="cl-primary">{tickets}</span> tickets in this round
          </div>
          <div class="draw">
            <img
              alt=""
              src="https://static.nanogames.io/assets/bonus.4dbbf756.png"
              class="bonus"
            />
            +<span>{bonuses}</span> Bonus Tickets
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
  }
  .gvBCkE {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0px;
    height: 0px;
  }
  .gvBCkE > div {
    transform: translate(-50%, -50%);
  }

  .QzMTs {
    text-align: center;
    width: 583px;
  }
  .QzMTs canvas {
    position: absolute;
    left: 42px;
    top: -214px;
    z-index: 10;
    pointer-events: none;
  }

  canvas {
    user-select: none;
  }

  .QzMTs .cont {
    background: var(--affiliate-bg);
    padding: 0.875rem 0px 1.125rem;
    border-radius: 0.9375rem;
    position: relative;
    z-index: 9;
    overflow: hidden;
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
  }

  .QzMTs .cont .sub-tit {
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: 0.625rem;
  }
  .QzMTs .cont .sub-tit span {
    color: rgb(255, 255, 255);
  }
  .QzMTs .cont .tit {
    font-size: 1.5625rem;
    line-height: 1.25rem;
    margin-top: 0.75rem;
    height: 1.375rem;
    font-weight: 800;
    color: rgb(255, 255, 255);
    font-style: italic;
  }

  .QzMTs .cont .tit span {
    color: rgb(139, 231, 27);
  }
  .QzMTs .cont .ball-list {
    -webkit-box-pack: center;
    justify-content: center;
    margin: 1.25rem auto 0.6875rem;
    width: 20rem;
  }
  .iJCxbN {
    width: 50%;
    max-width: 33.25rem;
    min-width: 20rem;
    position: relative;
    margin: 0.375rem auto 1.5rem;
  }
  .iJCxbN .jackpot-bg {
    width: 100%;
    display: inline-block;
    vertical-align: top;
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
  .QzMTs .cont .ball-list .ball .num {
    font-size: 0.75rem;
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
  .QzMTs .cont .ball-list .jackpotNum .num {
    font-size: 0.75rem;
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
  .QzMTs .cont .tickets-num {
    height: 1.25rem;
    line-height: 1.25rem;
  }
  .QzMTs .cl-primary {
    color: rgb(93, 160, 0);
  }

  .cl-primary {
    color: var(--primary-color);
  }
  .QzMTs .cont .draw {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin: 1.25rem 0px;
    color: rgb(255, 255, 255);
    height: 1.125rem;
    line-height: 1.125rem;
  }
  .QzMTs .cont .draw .bonus {
    width: 1.875rem;
    margin-right: 0.5rem;
  }
  .QzMTs .cont .draw span {
    color: rgb(254, 187, 20);
    margin: 0px 0.3125rem;
    font-weight: 800;
  }
  .QzMTs .cont::after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 0.1;
    background-image: radial-gradient(
      circle at 50% 0%,
      rgb(93, 219, 28),
      rgba(28, 30, 34, 0) 70%
    );
    z-index: -1;
  }
  .fLASqZ.close-icon:hover  {
    transform: rotate(-90deg);
    fill: rgb(245, 246, 247);
  }
</style>
