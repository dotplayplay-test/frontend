<script>
import { handleRedtrendballPlayers, crash_all_users_red_trendballEl,trendball_has_winEl, crash_all_users_Moon_trendballEl ,Moon_trendball_hasWinEl, crash_all_users_green_trendballEl, green_trendball_hasWinEl} from "$lib/crashgame/store"

</script>

<div class="sc-kszsFN engBBI need-scroll">
    <div class="banner">
        <div class="item red"><img class="avatar" alt="" src="https://static.nanogames.io/assets/trenball_red_lose.968eee93.png">
            <div class="title">Red Shiba</div>
        </div>
        <div class="item knife">
            <img src="https://static.nanogames.io/assets/knife.1e91682e.png" alt="">
            <div class="title">VS</div>
        </div>
        <div class="item green">
            <img class="avatar reverse" alt="" src="https://static.nanogames.io/assets/trenball_green.60f2a952.png">
            <div class="title">Green Doge</div>
        </div>
    </div>

    <div class="info-wrap">
        <div class="info">
            <div class="players">
                Players
                <span class="nums">0</span>
            </div>
            <div class="his">Battles won <span class="nums">52</span>
            </div>
        </div>
        <div class="info">
            <div class="players">Players <span class="nums">3</span></div>
            <div class="his">Battles won <span class="nums">48</span></div>
        </div>
    </div>

    <div class="head-wrap">
        <table class="sc-gWXbKe iUeetX table is-hover">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Bet</th>
                </tr>
            </thead>
        </table>
        <table class="sc-gWXbKe iUeetX table is-hover">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Bet</th>
                </tr>
            </thead>
        </table>
    </div>

    <div class="list-wrap">
        <div class="bet-list">
            <table class="sc-gWXbKe iUeetX table is-hover">
                <tbody>
                    {#each $handleRedtrendballPlayers as red }
                    {#if red.game_type === "Red"}
                    <tr>
                        <td>
                            {#if red.hidden_from_public }
                            <div class="sc-jUosCB iTDswZ ">
                                <img class="avatar " alt="" src="https://static.nanogames.io/assets/avatar.a1ff78fe.png">
                                <div class="name">Hidden</div>
                            </div>
                            {:else}
                                <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${red.user_id}`}>
                                    <img class="avatar " alt="" src={red.profile_img}>
                                    <div class="name">{red.username}</div>
                                </a>
                            {/if}
                     
                        </td>
                        <td>
                            {#if $trendball_has_winEl}
                            <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-1 `}>
                                <img class="coin-icon" alt="" src={red.token_img}>
                                <div class="amount">
                                    <span class="amount-str">{red.bet_amount}.<span class="suffix">00</span></span>
                                </div>
                            </div>
                            {:else if $crash_all_users_red_trendballEl}
                            <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-2 `}>
                                <img class="coin-icon" alt="" src={red.token_img}>
                                <div class="amount">
                                    <span class="amount-str">{red.bet_amount}.<span class="suffix">00</span></span>
                                </div>
                            </div>
                            {:else }
                            <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-0`}>
                                <img class="coin-icon" alt="" src={red.token_img}>
                                <div class="amount">
                                    <span class="amount-str">{red.bet_amount}.<span class="suffix">00</span></span>
                                </div>
                            </div>
                            {/if}
                        </td>
                    </tr>
                    {/if}
                    {/each}
                </tbody>
            </table>

            <table class="sc-gWXbKe iUeetX table is-hover">
                <tbody>
                    {#each $handleRedtrendballPlayers as green }
                    {#if green.game_type === "Green" || green.game_type === "Moon"}
                        {#if green.game_type === "Green"}
                        <tr>
                            <td>
                                {#if green.hidden_from_public }
                                <div class="sc-jUosCB iTDswZ ">
                                    <img class="avatar " alt="" src="https://static.nanogames.io/assets/avatar.a1ff78fe.png">
                                    <div class="name">Hidden</div>
                                </div>
                                {:else}
                                    <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${green.user_id}`}>
                                        <img class="avatar " alt="" src={green.profile_img}>
                                        <div class="name">{green.username}</div>
                                    </a>
                                {/if}
                                {#if green.game_type === "Moon"}
                                    <div class="moon"></div>
                                {/if}
                            </td>
                            <td>
                                {#if $green_trendball_hasWinEl}
                                <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-1 `}>
                                    <img class="coin-icon" alt="" src={green.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{green.bet_amount}.<span class="suffix">00000000</span></span>
                                    </div>
                                </div>
                                {:else if $crash_all_users_green_trendballEl}
                                <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-2 `}>
                                    <img class="coin-icon" alt="" src={green.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{green.bet_amount}.<span class="suffix">00000000</span></span>
                                    </div>
                                </div>
                                {:else }
                                <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-0`}>
                                    <img class="coin-icon" alt="" src={green.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{green.bet_amount}.<span class="suffix">00000000</span></span>
                                    </div>
                                </div>
                                {/if}
    
                            </td>
                        </tr>
                        {/if}
                        {#if green.game_type === "Moon"}
                        <tr>
                            <td>
                                {#if green.hidden_from_public }
                                <div class="sc-jUosCB iTDswZ ">
                                    <img class="avatar " alt="" src="https://static.nanogames.io/assets/avatar.a1ff78fe.png">
                                    <div class="name">Hidden</div>
                                </div>
                                {:else}
                                    <a class="sc-jUosCB iTDswZ user-info " href={`/user/profile/${green.user_id}`}>
                                        <img class="avatar " alt="" src={green.profile_img}>
                                        <div class="name">{green.username}</div>
                                    </a>
                                {/if}
                                {#if green.game_type === "Moon"}
                                    <div class="moon"></div>
                                {/if}
                            </td>
                            <td>
                                {#if $Moon_trendball_hasWinEl}
                                <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-1 `}>
                                    <img class="coin-icon" alt="" src={green.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{green.bet_amount}.<span class="suffix">00000000</span></span>
                                    </div>
                                </div>
                                {:else if $crash_all_users_Moon_trendballEl}
                                <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-2 `}>
                                    <img class="coin-icon" alt="" src={green.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{green.bet_amount}.<span class="suffix">00000000</span></span>
                                    </div>
                                </div>
                                {:else }
                                <div class={`sc-Galmp erPQzq coin notranslate monospace bold status-0`}>
                                    <img class="coin-icon" alt="" src={green.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{green.bet_amount}.<span class="suffix">00000000</span></span>
                                    </div>
                                </div>
                                {/if}
                            </td>
                        </tr>
                        {/if}        
                    {/if}
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    <!-- <div class="sc-eCImPb cuPxwd empty ">
            <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
            <div class="msg">Oops! There is no data yet!</div>
    </div> -->
</div>

    <style>
.engBBI {
    min-height: 28.125rem;
    height: 100%;
    padding-bottom: 0rem;
    display: flex;
    flex-direction: column;
    padding-left: 0.375rem;
    padding-right: 0.375rem;
}

.iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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

.engBBI .banner .green {
    color: rgb(123, 197, 20);
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

.iUeetX th:first-child {
    text-align: left;
}

.engBBI th {
    color: rgba(153, 164, 176, 0.6);
    border-bottom: 1px solid rgba(49, 52, 60, 0.6);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.iUeetX th {
    font-weight: normal;
    color: rgba(153, 164, 176, 0.6);
}

.iUeetX th {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

.engBBI.need-scroll .list-wrap {
    position: relative;
}

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
.engBBI .moon {
    position: absolute;
    left: 0.25rem;
    top: 0.25rem;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 0.25rem;
    background-color: rgb(226, 180, 11);
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

.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}

.engBBI .user-info {
    position: relative;
    vertical-align: middle;
}

.iTDswZ .avatar {
    width: 1.62em;
    height: 1.62em;
    border-radius: 50%;
    margin-right: 0.5em;
}

.engBBI .user-info {
    position: relative;
    vertical-align: middle;
}

.iTDswZ.user-info {
    color: rgb(245, 246, 247);
    font-weight: bold;
}

.erPQzq .coin-icon {
    width: 1.4em;
    height: 1.4em;
    margin-right: 0.25em;
}

.engBBI .user-info {
    position: relative;
    vertical-align: middle;
}

.iTDswZ .name {
    flex: 1 1 0%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.iTDswZ {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
}

.engBBI .status-2 {
    color: rgb(237, 99, 0);
}

.engBBI .status-1 {
    color: rgb(67, 179, 9);
}
.iUeetX td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}

.iUeetX td:first-child {
    text-align: left;
}

.engBBI td {
    padding: 0.5rem;
    position: relative;
    height: 2.9375rem;
}

.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
}

.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
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

.iUeetX td:last-child {
    text-align: right;
}

.engBBI td {
    padding: 0.5rem;
    position: relative;
    height: 2.9375rem;
}

.iUeetX td {
    border: 1px solid transparent;
    color: rgb(153, 164, 176);
}

.iUeetX td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.75rem;
}

.engBBI .bold {
    font-weight: 600;
}

.engBBI .status-0 {
    color: rgb(245, 246, 247);
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
</style>
