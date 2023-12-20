<script>
  import { slide, fade } from "svelte/transition";
  import { goto } from "$app/navigation";
  import moment from "moment";
  import { handleisLoggin } from "$lib/store/profile";
  import History from "./history.svelte";
  import MyTickets from "./my-tickets.svelte";
  import MyWinings from "./winnings.svelte";
  import Loader from "$lib/components/loader.svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
  import { onMount } from "svelte";
  import BuyTicket from "../buy-tickets/layout.svelte";
  import ProvablyFair from "../provably-fair/layout.svelte";
  import LotteryDrawEndDialog from "../lottery-draw-end/layout.svelte";
  import { handleAuthToken } from "$lib/store/routes";
  import { UseFetchData } from "$lib/hook/useFetchData";
  $: currentTab = 1;
  $: buyTicketDialogOpen = false;
  $: lotteryDrawDialogOpen = null;
  $: provablyFairD = null;
  $: gameEnded = false;
  $: purchases = [];

  const getGame = async (id) => {
    const { data } = await UseFetchData($handleAuthToken).fetch(
      `/lottery/details${!!id ? `?id=${id}` : ""}`
    );
    return data;
  };
  const getGameTickets = async () => {
    try {
      const { data } = await UseFetchData($handleAuthToken).fetch(
        "/lottery/game-tickets?purchased=true&limit=10"
      );
      return data;
    } catch (error) {
      return null;
    }
  };
  const getTickets = async () => {
    if ($handleisLoggin) {
      try {
        const { data } =
          await UseFetchData($handleAuthToken).fetch("/lottery/tickets");
        return data;
      } catch (error) {
        return null;
      }
    }
    return null;
  };
  $: loading = true;
  $: gameData = null;
  $: myTickets = 0;
  let countDownInterval;
  let buyInterval;
  $: countDownParts = ["00", "00", "00"];
  $: inIntermission = false;

  const handleBuyTicket = () => {
    if ($handleisLoggin) {
      if (inIntermission || gameEnded) return;
      buyTicketDialogOpen = true;
    } else goto("/login");
  };

  const startCountDown = () => {
    const gameID = gameData.game_id;
    const endsInDate = moment(gameData.draw_date);
    let diffInSeconds = endsInDate.diff(moment.utc(), "seconds");
    gameEnded = diffInSeconds <= 0;
    if (countDownInterval) {
      clearInterval(countDownInterval);
    }
    if (!gameEnded) {
      countDownInterval = setInterval(() => {
        if (diffInSeconds <= 0) {
          gameEnded = true;
          clearInterval(countDownInterval);
          countDownParts = ["00", "00", "00"];
          checkForDrawEnd(gameID);
        } else {
          const hours = Math.floor(diffInSeconds / 3600);
          const minutes = Math.floor((diffInSeconds % 3600) / 60);
          const seconds = diffInSeconds % 60;
          countDownParts = [
            hours.toString().padStart(2, "0"),
            minutes.toString().padStart(2, "0"),
            seconds.toString().padStart(2, "0"),
          ];
          diffInSeconds--;
        }
      }, 1000);
    } else checkForDrawEnd(gameID);
  };
  const gameSetup = async () => {
    const [game, ticketData, gameTicketsData] = await Promise.all([
      getGame(),
      getTickets(),
      getGameTickets(),
    ]);
    myTickets =
      ticketData?.tickets?.reduce((a, { amount }) => a + amount, 0) || 0;
    gameData = {
      ...game.lottery,
      ticketCount: game.lottery.total_tickets,
      tickets: gameTicketsData.tickets,
    };
    const now = moment.utc();
    inIntermission = moment(gameData.start_date).isAfter(now);
    if (!inIntermission) startCountDown();
    else {
      setTimeout(
        () => {
          startCountDown();
          inIntermission = false;
        },
        moment(gameData.start_date).diff(now, "milliseconds")
      );
    }

    if (gameTicketsData.tickets.length) {
      const tickets = gameTicketsData.tickets;
      if (buyInterval) clearInterval(buyInterval);
      let currentIndex = 0;
      purchases = [tickets[currentIndex++]];
      buyInterval = setInterval(() => {
        purchases = [tickets[currentIndex++ % tickets.length]];
      }, 10_000);
    }
    try {
      let saved = localStorage.getItem("lottery_game");
      saved = !!saved && JSON.parse(saved);
      if (
        saved &&
        saved.game_id !== gameData.game_id &&
        !saved.concluded &&
        gameData.game_id - saved.game_id <= 1
      ) {
        lotteryDrawDialogOpen = {game_id: saved.game_id, lc: true}
      }
    } catch (e) {}
    localStorage.setItem("lottery_game", JSON.stringify({game_id: gameData.game_id, concluded: false}));
  };

  const checkForDrawEnd = async (game_id) => {
    try {
      let { lottery } = await getGame(game_id);
      if (lottery.numbers.length) {
        lotteryDrawDialogOpen = { game_id };
      } else {
        setTimeout(() => checkForDrawEnd(game_id), 3_000);
      }
    } catch (error) {
      console.log("Error => ", error);
    }
  };

  const handleCloseDrawDialog = async () => {
    const {game_id, lc} = lotteryDrawDialogOpen;
    localStorage.setItem("lottery_game", JSON.stringify({game_id, concluded: true}));
    lotteryDrawDialogOpen = null;
    if (!lc) {
      try {
        await gameSetup();
      } catch (error) {
        console.log("Error setting up new Game", error);
      }
    }
  };

  onMount(async () => {
    try {
      await gameSetup();
    } catch (err) {
      console.log("Error", err);
    } finally {
      loading = false;
    }
  });
</script>

{#if Boolean(provablyFairD)}
  <ProvablyFair
    showData={provablyFairD}
    on:close-pfd={() => (provablyFairD = null)}
  />
{/if}

{#if buyTicketDialogOpen}
  <BuyTicket
    on:close-dialog={(e) => {
      console.log(e);
      if (e.detail?.ticket_id) myTickets += e.detail.amount;
      buyTicketDialogOpen = false;
    }}
  />
{/if}
{#if Boolean(lotteryDrawDialogOpen)}
  <LotteryDrawEndDialog
    gameID={lotteryDrawDialogOpen.game_id}
    on:close-ldd={handleCloseDrawDialog}
  />
{/if}

{#if !loading}
  <div id="main" class="sc-zjkyB jlxrhk">
    <div class="sc-gDGHff jtyGOM lottery-header">
      <div class="wrap">
        <div class="period">
          Lottery Game ID. <span>{gameData?.game_id ?? "..."}</span>
        </div>
        <a href="#lottery_rule" class="rule">Rules</a>
        <button on:click={() => (provablyFairD = { tab: 1 })} class="fairness"
          >Provably Fair</button
        >
        <div class="cont">
          <div class="next-time">
            <div class="txt">
              {inIntermission
                ? "Game will begin in a few minutes..."
                : "Next Draw in"}
            </div>
            {#if !inIntermission}
              <div class="time">
                <span>{countDownParts[0]}h</span>:<span
                  >{countDownParts[1]}m</span
                >:<span>{countDownParts[2]}s</span>
              </div>
            {/if}
          </div>
          <button
            disabled={inIntermission || gameEnded}
            class="sc-iqseJM sc-hBUSln cBmlor blefOg button button-normal"
          >
            <div
              role="button"
              tabindex="-1"
              on:keydown={handleBuyTicket}
              on:click={handleBuyTicket}
              class="button-inner"
            >
              <div class="btn-ticket">
                <div class="tit">Buy Ticket</div>
                <div class="sub-tit">1 ticket for $0.1</div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div class="desc">
        <div class="sc-hAWBJg gAsrpM auto-scroll">
          <div style="position: absolute; transform: none;">
            {#each purchases as ticket (ticket.ticket_id)}
              <div
                out:fade={{ duration: 300 }}
                in:slide={{ duration: 300 }}
                class="win-item"
              >
                <b>{ticket.user.username}</b> Bought
                <span>{ticket.amount}</span>
                lottery ticket{ticket.amount > 1 ? "s" : ""}
              </div>
            {/each}
          </div>
        </div>
        {#if gameData?.ticketCount}
          <div class="sp">
            Don't miss your chance! <span class="lottery-green"
              >{gameData?.ticketCount}</span
            > tickets have been sold today!
          </div>
        {/if}
      </div>
    </div>
    <div class="sc-bOtlzW iifTce">
      <div class="sc-cxpSdN kQfmQV tabs">
        <div class="tabs-navs">
          <button
            on:click={() => (currentTab = 1)}
            class="tabs-nav {currentTab === 1 ? 'is-active' : ''}"
            >My Ticket{$handleisLoggin ? `(${myTickets || "0"})` : ""}</button
          >
          <button
            on:click={() => (currentTab = 2)}
            class="tabs-nav {currentTab === 2 ? 'is-active' : ''}"
            >My Winnings</button
          >
          <button
            on:click={() => (currentTab = 3)}
            class="tabs-nav {currentTab === 3 ? 'is-active' : ''}"
            >History</button
          >
          <div
            class="bg"
            style="left: {currentTab === 1
              ? 0
              : currentTab === 2
                ? 33
                : 66}%; right: {currentTab === 1
              ? 66
              : currentTab === 2
                ? 33
                : 0}%;"
          ></div>
        </div>
        <div class="tabs-view" style="transform: none;">
          {#if currentTab === 1}
            <MyTickets on:buy-tickets={handleBuyTicket} />
          {:else if currentTab === 2}
            <MyWinings />
          {:else}
            <History
              on:showPFD={(e) =>
                (provablyFairD = { game_id: e.detail, tab: 2 })}
            />
          {/if}
        </div>
      </div>
    </div>
    <div class="sc-bhnkmi guxePV">
      <div class="title">HOW TO PLAY</div>
      <div class="sc-eTwdGJ gEYowd">
        <div class="sc-hKumaY kgfLJt item col-1">
          <img
            src="https://static.nanogames.io/assets/buyticket.95472b7d.png"
            alt=""
          />
          <div class="tit">BUY TICKETS</div>
          <div class="cont">
            Buy ticket with $0.1, and choose numbers for ticket.
          </div>
        </div>
        <div class="sc-hKumaY kgfLJt item col-2">
          <img
            src="https://static.nanogames.io/assets/draw.e92398c8.png"
            alt=""
          />
          <div class="tit">WAIT FOR THE DRAW</div>
          <div class="cont">Wait for the draw at 15:00 UTC+0 daily.</div>
        </div>
        <div class="sc-hKumaY kgfLJt item col-3">
          <img
            src="https://static.nanogames.io/assets/checkprizes.4d0b07fb.png"
            alt=""
          />
          <div class="tit">CHECK FOR PRIZES</div>
          <div class="cont">
            Once the draw is over, come back to this page and check your prize.
          </div>
        </div>
      </div>
      <div class="sc-iJCbQK ewSsiv">
        <div class="title">PACO LOTTERY RULE</div>
        <div class="cont">
          <table class="sc-gWXbKe iUeetX table">
            <thead>
              <tr>
                <th>Matches</th>
                <th>Numbers</th>
                <th>Prize</th>
              </tr>
            </thead>
            <tbody>
              <tr class="big-prize">
                <td class="matches">
                  <img
                    alt=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAaVBMVEUAAABqziJ61TNqziS777trzyVu0CxrziZrziRqziNrzyRqziRs0SZqziRqziVqzyRszyZqzyRrzyRqziRszyVozCJszyZrzCZrzyRqzyRt0CZs0S5qziRqziRqzyZrziVqzSRqzyNs0Cb5WvHbAAAAI3RSTlMADAQuATYRFkFzY0kdhFGUMntqWigePTufgCMIwpCOTq+uV6yoZAMAAAGJSURBVEjH7VTXbsMwDNTesiVb8sz+/4+sFCdtCjgeb0WRezAMkieRFI/gg/8EBBPQHoKJ0YybQsn0xQnoYVgEZFMAFaJ9WOBiPI9sIhRFAzKY4XAp3mB69zul7jeMFIf3DMIiTrnk3IOULluEptgw8p5BRVHnXIy1Q86sLjTlZKkIXVcyAIDKMhUzyKrWbOUFGultijl2id17qddfI9jSE9AfAahK68AGMH+tQeXB+dLzxWQQedZeH9xZDQeFngaE5uo1mFIXTPa5rtVdm0/hwVGKI5wjRCwKJW157KtzW6vmXPWn0kpVCBw5mr1hInRHr7SqtPKnboXQNI0bct+HrtEdzg0YXNu08ymh8fsUfWgLhQ838uJaAKwuKrf1dvUMbMDQlz0C/QkQX9qwrjgqveUAnLpUgLVSrCh7FGn43HP4Qho+ARenguqi1umHT+MtlsebMIOp1uOPgNCKgCAPmLJXiUKKw4qo+e8lwCOHu9YMYXD3ItsCFI0x465lzDlE+/Y3Ah/8ZXwB1qcUPHJAtGAAAAAASUVORK5CYII="
                  />5 NUMBERS
                  <div>JACKPOT BALL</div>
                </td>
                <td>
                  <div class="sc-fUQcsx exEirK jackpot">
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball jackpot-ball active"
                      alt=""
                      src="https://static.nanogames.io/assets/base_jackpot_ball.a3f4613c.png"
                    />
                  </div>
                </td>
                <td class="prize"
                  >$ 100,000
                  <div class="star-img"></div></td
                >
              </tr>
              <tr class="normal-prize">
                <td class="matches">5 numbers</td>
                <td
                  ><div class="sc-fUQcsx exEirK">
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball jackpot-ball"
                      alt=""
                      src="https://static.nanogames.io/assets/base_jackpot_ball.a3f4613c.png"
                    />
                  </div>
                </td>
                <td class="prize">$ 3,000</td>
              </tr>
              <tr class="normal-prize">
                <td class="matches">4 numbers</td>
                <td>
                  <div class="sc-fUQcsx exEirK">
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball jackpot-ball"
                      alt=""
                      src="https://static.nanogames.io/assets/base_jackpot_ball.a3f4613c.png"
                    />
                  </div>
                </td>
                <td class="prize">$ 20</td>
              </tr>
              <tr class="normal-prize">
                <td class="matches">3 numbers</td>
                <td>
                  <div class="sc-fUQcsx exEirK">
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball jackpot-ball"
                      alt=""
                      src="https://static.nanogames.io/assets/base_jackpot_ball.a3f4613c.png"
                    />
                  </div>
                </td>
                <td class="prize">$ 1</td>
              </tr>
              <tr class="">
                <td class="matches">2 numbers</td>
                <td
                  ><div class="sc-fUQcsx exEirK">
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball active"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball jackpot-ball"
                      alt=""
                      src="https://static.nanogames.io/assets/base_jackpot_ball.a3f4613c.png"
                    />
                  </div>
                </td>
                <td class="prize">
                  <img
                    src="https://static.nanogames.io/assets/bonus.4dbbf756.png"
                    alt=""
                  />+1 ticket</td
                >
              </tr>
              <tr class="">
                <td class="matches">No numbers</td>
                <td>
                  <div class="sc-fUQcsx exEirK">
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball"
                      src="https://static.nanogames.io/assets/base_ball.225c2bf6.png"
                      alt=""
                    />
                    <img
                      class="ball jackpot-ball"
                      alt=""
                      src="https://static.nanogames.io/assets/base_jackpot_ball.a3f4613c.png"
                    />
                  </div>
                </td>
                <td class="prize"
                  ><img
                    src="https://static.nanogames.io/assets/bonus.4dbbf756.png"
                    alt=""
                  />+1 ticket</td
                >
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="sc-iLOkMM hnkTVY">
        <div id="lottery_rule"></div>
        <div class="tit">Lottery Instructions:</div>
        <div class="cont">
          <div class="li">
            A provably fair algorithm is used to draw the lottery prizes.
          </div>
          <div class="li">Prizes are drawn at 15:00 UTC+0 everyday.</div>
          <div class="li">
            You can buy a ticket for $0.1. The sale of tickets stop at 14:55
            UTC+0 everyday.
          </div>
          <div class="li">
            The player chooses six numbers for each ticket, the first five are
            from 1 to 36, and the last one is from 1 to 10.
          </div>
          <div class="li">
            You can choose numbers manually or automatically.
          </div>
          <div class="li">
            If you have NNL, you can use NNL to redeem Tickets.
          </div>
          <div class="li">Each draw produces six numbers.</div>
          <div class="li">
            The more numbers you match in the first five numbers, greater prize
            you will win.
          </div>
        </div>
        <div class="tit">Winning Prize Details:</div>
        <div class="cont">
          <div class="li">
            All six numbers matched: $100,000 prize. In case you are not the
            only winner, you may need to share the prize equally with others.
          </div>
          <div class="li">
            Five numbers matched, and the sixth number is missed: Each ticket
            gets a $3,000 prize.
          </div>
          <div class="li">
            Four of the first 5 numbers matched: Each ticket gets a $20 prize.
          </div>
          <div class="li">
            Three of the first 5 numbers matched: Each ticket gets a $1 prize.
          </div>
          <div class="li">
            If all six numbers are missed, the lottery will be reserved for
            free, and continue participating in the next day's draw.
          </div>
        </div>
        <button class="sc-iqseJM cBmlor button button-normal btn">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div
            on:click={() => (provablyFairD = { tab: 1 })}
            class="button-inner"
          >
            Provably Fair
            <Icon
              src={RiSystemArrowRightSLine}
              size="18"
              color="rgb(67, 179, 9)"
              className="custom-icon"
              title="arror"
            />
          </div>
        </button>
      </div>
      <div class="sc-bjztik biQums lottery-subheader">
        <div class="cont sh">
          <div class="title">What Is <span>NNL</span>?</div>
          <div class="desc">
            NNL (NG Lottery) is a token created by NANOGAMES.IO for players who
            love the Lottery. You can use NNL to redeem lottery tickets in the
            Lottery at any time, 1 NNL = 1 lottery ticket.
          </div>
          <div class="btn">
            <button
              >Details
              <Icon
                src={RiSystemArrowRightSLine}
                size="18"
                color="rgb(67, 179, 9)"
                className="custom-icon"
                title="arror"
              />
            </button>
          </div>
        </div>
        <div class="empty">
          <img
            src="https://static.nanogames.io/assets/whatisbcl.8079172d.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
{:else}
  <div style="height: 400px">
    <Loader />
  </div>
{/if}
