<script context="module">
  import { connect } from "svelte-mobx";
</script>

<script>
  import { screen } from "$lib/store/screen";
  import { onDestroy, onMount } from "svelte";
  import { crashGameType, crashGame } from "./store";
  import useFormatter from "$lib/hook/formatter";
  const { autorun } = connect();
  const { removeTrailingZeros, getSuffix } = useFormatter();
  $: trendBetActive = false;
  $: showingMore = false;

  let game = null;

  $: players = [];
  $: playersWithBets = 0;
  $: gameStatus = 0;
  $: xBet = null;
  $: redList = [];
  $: greenList = [];
  $: xBetResult = 0;

  $: shibaAvatar = "";
  $: dogeAvatar = "";
  $: battles = [0, 0];

  $: trendListEmpty = true;

  $: {
    const _game = $crashGame;
    if (!game && _game) {
      game = _game;
      autorun(() => {
        gameStatus = game.status;
        xBet = game.xbet;
        redList = xBet.redList;
        greenList = xBet.greenList;
        xBetResult = xBet.result;

        battles = game.history
          .slice(-100)
          .reduce((t, e) => (e.odds < 2 ? t[0]++ : t[1]++, t), [0, 0]);

        trendListEmpty = !redList.length && !greenList.length;

        shibaAvatar =
          0 == xBet.result || xBet.result == -200
            ? "https://static.nanogames.io/assets/trenball_red.0078e052.png"
            : "https://static.nanogames.io/assets/trenball_red_lose.968eee93.png";
        dogeAvatar =
          0 == xBet.result || xBet.result == 200
            ? "https://static.nanogames.io/assets/trenball_green.60f2a952.png"
            : "https://static.nanogames.io/assets/trenball_green_lose.ac2159d5.png";
      });

      function onPlayerChanged() {
        players = game.players;
        playersWithBets = game.players.filter((p) => p.rate > 0).length;
      }

      game.on("player_change", onPlayerChanged);

      onDestroy(() => {
        game.off("player_change", onPlayerChanged);
      });
    }
  }

  onMount(() => {
    crashGameType.subscribe((type) => {
      trendBetActive = type === 2;
      showingMore = false;
    });
  });
</script>

<div class="sc-czvZiG gnytwz  {$screen < 1051 ? "mobile-view" : ""}">
  {#if $screen > 1050}
    <div class="top">
    <div class="title">All Bets</div>

    <div class="flex-middle">
      <div>Trenball</div>

      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        on:click={() => (trendBetActive = !trendBetActive)}
        class="sc-giYglK hRMjrF switch {trendBetActive ? 'open' : ''}"
      >
        <div class="dot"></div>
      </div>
    </div>
  </div>
  {/if}
  
  {#if !trendBetActive}
    <div class="sc-eoHXOn vjsVz need-scroll">
      <table class="head">
        <tbody
          ><tr
            ><td class="user">Player</td><td class="escape">Cash Out</td><td
              class="amount">Amount</td
            ><td>Profit</td></tr
          ></tbody
        >
      </table>
      <div
        class="scroll-wrap {showingMore
          ? 'has-scroll scroll-view jScFby sc-dkPtRN'
          : ''}"
      >
        {#if Boolean(players.length)}
          <table class="sc-gWXbKe iUeetX table is-hover">
            <tbody>
              {#each players as player (player.userId)}
                <tr
                  ><td class="user"
                    ><a
                      class="sc-jUosCB iTDswZ user-info"
                      href="/user/profile/{player.userId}"
                      ><img
                        alt=""
                        class="avatar"
                        src={player.hidden
                          ? "/assets/avatar.a1ff78fe.png"
                          : player.avatar}
                      />
                      <div class="name">
                        {#if player.hidden}
                          <span class="hidden-name"
                            ><svg
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              class="sc-gsDKAQ hxODWG icon"
                              ><use xlink:href="#icon_Hidden"></use></svg
                            >Hidden</span
                          >
                        {:else}
                          {player.name}
                        {/if}
                      </div></a
                    ></td
                  ><td class="escape"
                    ><span class="ttl opacity"
                      >{#if player.rate > 0}
                        {player.rate.toFixed(2) + "x"}
                      {:else if gameStatus === 3}
                        "bang"
                      {:else}
                        "betting"
                      {/if}</span
                    ></td
                  ><td
                    ><div
                      class="sc-Galmp erPQzq coin notranslate {player.rate > 0
                        ? 'is-win'
                        : gameStatus === 3
                          ? 'is-lose'
                          : ''}"
                    >
                      <img
                        alt=""
                        class="coin-icon"
                        src={player.currencyImage}
                      />
                      <div class="amount">
                        <span class="amount-str"
                          >{removeTrailingZeros(player.bet.toFixed(8))}<span
                            class="suffix"
                            >{getSuffix(player.bet.toFixed(8))}</span
                          ></span
                        >
                      </div>
                    </div></td
                  ><td
                    >{#if player.rate > 0}
                      <div
                        class="sc-Galmp erPQzq coin notranslate {player.rate > 0
                          ? 'is-win'
                          : gameStatus === 3
                            ? 'is-lose'
                            : ''}"
                      >
                        <img
                          alt=""
                          class="coin-icon"
                          src={player.currencyImage}
                        />
                        <div class="amount">
                          <span class="amount-str"
                            >{removeTrailingZeros(
                              player.bet.mul(player.rate).sub(player.bet)
                            )}<span class="suffix"
                              >{getSuffix(
                                player.bet.mul(player.rate).sub(player.bet)
                              )}</span
                            ></span
                          >
                        </div>
                      </div>
                    {:else if gameStatus === 3}
                      "bang"
                    {:else}
                      <span class="ttl opacity">Betting</span>
                    {/if}
                  </td></tr
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
      </div>
      <div class="foot">
        <div class="state">{playersWithBets}/{players.length} Player(s)</div>
        <button
          on:click={() => (showingMore = !showingMore)}
          class="list-toggle {showingMore ? 'show-more' : 'show-less'}"
          ><div>{showingMore ? "Show less" : "Show more"}</div>
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Arrow"></use></svg
          ></button
        >
      </div>
    </div>
  {:else}
    <div class="sc-kszsFN engBBI need-scroll">
      <div class="banner">
        <div class="item red">
          <img alt="" class="avatar" src={shibaAvatar} />
          <div class="title">Red Shiba</div>
        </div>
        <div class="item knife">
          <img
            alt=""
            src="https://static.nanogames.io/assets/knife.1e91682e.png"
          />
          <div class="title">VS</div>
        </div>
        <div class="item green">
          <img alt="" class="avatar reverse" src={dogeAvatar} />
          <div class="title">Green Doge</div>
        </div>
      </div>
      <div class="info-wrap">
        <div class="info">
          <div class="players">
            Players <span class="nums">{redList.length}</span>
          </div>
          <div class="his">
            Battles won <span class="nums">{battles[0]}</span>
          </div>
        </div>
        <div class="info">
          <div class="players">
            Players <span class="nums">{greenList.length}</span>
          </div>
          <div class="his">
            Battles won <span class="nums">{battles[1]}</span>
          </div>
        </div>
      </div>
      <div class="head-wrap">
        <table class="sc-gWXbKe iUeetX table is-hover">
          <thead><tr><th>Player</th><th>Bet</th></tr></thead>
        </table>
        <table class="sc-gWXbKe iUeetX table is-hover">
          <thead><tr><th>Player</th><th>Bet</th></tr></thead>
        </table>
      </div>
      <div class={showingMore ? "sc-dkPtRN jScFby scroll-view" : "list-wrap"}>
        {#if !trendListEmpty}
          <div class="bet-list">
            <table class="sc-gWXbKe iUeetX table is-hover">
              <tbody>
                {#each redList as bet, index (`${bet.userId}_${index}`)}
                  <tr
                    ><td
                      ><a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/{bet.userId}"
                        ><img
                          alt=""
                          class="avatar"
                          src={bet.hidden
                            ? "/assets/avatar.a1ff78fe.png"
                            : bet.avatar}
                        />
                        <div class="name">
                          {#if bet.hidden}
                            <span class="hidden-name"
                              ><svg
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="sc-gsDKAQ hxODWG icon"
                                ><use xlink:href="#icon_Hidden"></use></svg
                              >Hidden</span
                            >
                          {:else}
                            {bet.name}
                          {/if}
                        </div></a
                      >
                    </td><td>
                      <div
                        class="sc-Galmp erPQzq coin notranslate monospace bold status-{bet.status} {bet.rate >
                        0
                          ? 'is-win'
                          : bet.status === 3
                            ? 'is-lose'
                            : ''}"
                      >
                        <img alt="" class="coin-icon" src={bet.currencyImage} />
                        <div class="amount">
                          <span class="amount-str"
                            >{removeTrailingZeros(bet.bet.toFixed(8))}<span
                              class="suffix"
                              >{getSuffix(bet.bet.toFixed(8))}</span
                            ></span
                          >
                        </div>
                      </div>
                    </td></tr
                  >
                {/each}
              </tbody>
            </table>
            <table class="sc-gWXbKe iUeetX table is-hover">
              <tbody>
                {#each greenList as bet, index (`${bet.userId}_${index}`)}
                  <tr
                    ><td
                      ><a
                        class="sc-jUosCB iTDswZ user-info"
                        href="/user/profile/{bet.userId}"
                        ><img
                          alt=""
                          class="avatar"
                          src={bet.hidden
                            ? "/assets/avatar.a1ff78fe.png"
                            : bet.avatar}
                        />
                        <div class="name">
                          {#if bet.hidden}
                            <span class="hidden-name"
                              ><svg
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="sc-gsDKAQ hxODWG icon"
                                ><use xlink:href="#icon_Hidden"></use></svg
                              >Hidden</span
                            >
                          {:else}
                            {bet.name}
                          {/if}
                        </div></a
                      >
                      {#if bet.type === 1000}
                        <div class="moon"></div>
                      {/if}
                    </td><td>
                      <div
                        class="sc-Galmp erPQzq coin notranslate monospace bold status-{bet.status} {bet.rate >
                        0
                          ? 'is-win'
                          : bet.status === 3
                            ? 'is-lose'
                            : ''}"
                      >
                        <img alt="" class="coin-icon" src={bet.currencyImage} />
                        <div class="amount">
                          <span class="amount-str"
                            >{removeTrailingZeros(bet.bet.toFixed(8))}<span
                              class="suffix"
                              >{getSuffix(bet.bet.toFixed(8))}</span
                            ></span
                          >
                        </div>
                      </div>
                    </td></tr
                  >
                {/each}
              </tbody>
            </table>
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
      </div>
      <div class="foot">
        <button
          on:click={() => (showingMore = !showingMore)}
          class="list-toggle {showingMore ? 'show-more' : 'show-less'}"
          ><div>{showingMore ? "Show less" : "Show more"}</div>
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="sc-gsDKAQ hxODWG icon"
            ><use xlink:href="#icon_Arrow"></use></svg
          ></button
        >
      </div>
    </div>
  {/if}
</div>

<style>
  .gnytwz:not(.mobile-view) {
    margin-left: 0.625rem;
    width: 40%;
    max-width: 542px;
  }
  .gnytwz {
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    position: relative;
  }
  .gnytwz .top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: -1.875rem;
    left: 0px;
    right: 0px;
    padding: 0px 0.625rem;
    line-height: 1.25rem;
  }
  .gnytwz .top .title {
    font-weight: bold;
    color: rgb(245, 246, 247);
  }
  .flex-middle {
    display: flex;
    align-items: center;
  }
  .gnytwz .top .switch {
    margin-left: 0.5rem;
  }

  .hRMjrF {
    width: 1.75rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgb(49, 52, 60);
    position: relative;
    cursor: pointer;
  }
  .hRMjrF .dot {
    transition: all 0.2s ease 0s;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    background-color: rgba(153, 164, 176, 0.6);
  }
  .hRMjrF.open .dot {
    left: 0.75rem;
    background-color: rgb(67, 179, 9);
  }

  .vjsVz {
    height: 100%;
    min-height: 37.5rem;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 0.375rem;
  }
  .vjsVz .head {
    table-layout: fixed;
    height: 3.75rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .vjsVz .head td:first-of-type {
    text-align: left;
  }

  .vjsVz .head td {
    text-align: center;
  }

  .vjsVz .user {
    max-width: 8.75rem;
  }

  .vjsVz td {
    padding: 0px 0.375rem;
    height: 3rem;
  }
  .vjsVz .escape {
    width: 5.625rem;
  }
  .vjsVz .head td:last-of-type {
    text-align: right;
  }
  .vjsVz .scroll-wrap {
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
  }
  .vjsVz .scroll-view {
    height: 30rem;
  }
  .jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto !important;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .vjsVz.need-scroll .table {
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .vjsVz .opacity {
    opacity: 0.5;
  }

  .ttl {
    text-transform: lowercase;
  }
  .vjsVz .user-info {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
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

  .iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
  }
  .table .sc-Galmp {
    font-family: Monmono;
  }

  .erPQzq {
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    white-space: nowrap;
  }
  .vjsVz .coin .coin-icon {
    width: 1.2em;
    height: 1.2em;
  }
  .vjsVz .coin .amount {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  .vjsVz .coin.is-lose .amount {
    color: rgb(237, 99, 0);
  }
  .vjsVz .coin.is-win .amount {
    color: rgb(67, 179, 9);
  }

  .vjsVz .foot {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 1rem 0.4375rem;
    position: relative;
    z-index: 11;
  }
  .vjsVz .state::before {
    content: "";
    display: inline-block;
    background-color: rgb(67, 179, 9);
    width: 0.4375rem;
    height: 0.4375rem;
    border-radius: 0.25rem;
    margin-right: 0.4375rem;
  }
  .vjsVz .list-toggle {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 7.5rem;
    height: 2rem;
    border-radius: 1rem;
    padding: 0px 0.625rem;
    white-space: nowrap;
    background-color: rgb(35, 39, 44);
  }
  .vjsVz .list-toggle > div {
    flex: 1 1 0%;
  }
  .vjsVz .list-toggle .icon {
    width: 1rem;
    height: 1rem;
    margin-left: 0.375rem;
    transition: all 0.2s ease 0s;
    transform: rotate(90deg);
  }
  .vjsVz .list-toggle.show-less .icon {
    transform: rotate(-90deg);
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }

  .engBBI {
    min-height: 28.125rem;
    height: 100%;
    padding-bottom: 0rem;
    display: flex;
    flex-direction: column;
    padding-left: 0.375rem;
    padding-right: 0.375rem;
  }
  .engBBI .banner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-evenly;
    margin: 0.625rem 0.25rem 0px;
    text-align: center;
    font-size: 1rem;
  }
  .engBBI .banner .red {
    color: rgb(237, 99, 0);
  }
  .engBBI .banner .red .avatar {
    border-color: rgb(237, 99, 0);
  }

  .engBBI .banner .avatar {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 1.5625rem;
    border: 2px solid rgb(237, 99, 0);
  }
  .engBBI .banner .title {
    font-weight: bold;
  }
  .engBBI .banner .knife {
    font-size: 1.25rem;
    line-height: 1;
    color: rgb(245, 246, 247);
  }
  .engBBI .banner .knife img {
    width: 4.375rem;
    height: 2.25rem;
    margin: 0.375rem 0px 0.75rem;
  }
  .engBBI .banner .green {
    color: rgb(123, 197, 20);
  }
  .engBBI .banner .green .avatar {
    border-color: rgb(123, 197, 20);
  }

  .engBBI .banner .reverse {
    transform: scaleX(-1);
  }
  .engBBI .info-wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0.3125rem 0.25rem 0px;
    font-size: 0.75rem;
  }
  .engBBI .info-wrap .info {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex: 1 1 0%;
    height: 2.5rem;
    padding: 0px 0.5rem;
    border-radius: 3px;
    border-top: 0.1875rem solid rgb(237, 99, 0);
    background-image: linear-gradient(rgba(237, 99, 0, 0.2), rgba(0, 0, 0, 0));
  }
  .engBBI .info-wrap .nums {
    color: rgb(67, 179, 9);
  }
  .engBBI .info-wrap .info:last-of-type {
    margin-left: 0.875rem;
    border-top: 0.1875rem solid rgb(67, 179, 9);
    background-image: linear-gradient(rgba(93, 160, 0, 0.2), rgba(0, 0, 0, 0));
  }
  .engBBI .head-wrap {
    display: flex;
    padding: 0px 0.25rem;
  }
  .engBBI .table {
    width: 50%;
    align-self: flex-start;
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
  .iUeetX th:first-child,
  .iUeetX td:first-child {
    text-align: left;
  }

  .engBBI th {
    color: rgba(153, 164, 176, 0.6);
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
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
  .engBBI th:last-of-type {
    width: 60%;
  }

  .iUeetX th:last-child,
  .iUeetX td:last-child {
    text-align: right;
  }
  .engBBI.need-scroll .list-wrap {
    position: relative;
  }

  .engBBI.need-scroll .scroll-view,
  .engBBI.need-scroll .list-wrap {
    height: 30rem;
    flex: 1 1 auto;
  }
  .engBBI.need-scroll .list-wrap .bet-list {
    position: absolute;
    inset: 0px;
  }

  .engBBI .bet-list {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 auto;
  }
  .engBBI .table {
    width: 50%;
    align-self: flex-start;
  }
  .iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
  }
  .engBBI .user-info {
    position: relative;
    vertical-align: middle;
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
  .engBBI td:last-child {
    width: 8.375rem;
  }

  .iUeetX td:last-child {
    border-radius: 0px 0.625rem 0.625rem 0px;
  }
  .engBBI .bold {
    font-weight: 600;
  }

  .engBBI .status-0 {
    color: rgb(245, 246, 247);
  }
  .engBBI .status-1 {
    color: rgb(67, 179, 9);
  }
  .engBBI .status-2 {
    color: rgb(237, 99, 0);
  }
  .engBBI .status-3 {
    color: rgb(226, 180, 11);
  }

  .table .sc-Galmp {
    font-family: Monmono;
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
  .erPQzq .amount-str {
    width: 7em;
    display: inline-block;
  }
  .engBBI tr {
    position: relative;
  }
  .engBBI .moon {
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 0.25rem;
    background-color: rgb(226, 180, 11);
  }
  .erPQzq .suffix {
    opacity: 0.5;
  }
  .engBBI .list-toggle.show-less .icon {
    transform: rotate(-90deg);
  }
  .hidden-name .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.125rem;
    fill: rgb(153, 164, 176);
  }
  .user-info .hidden-name {
    color: rgb(153, 164, 176);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
</style>
