<script>
import { handleRedtrendballPlayers } from "../../../lib/crashgame/store"

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
                        <tr>
                            <td>
                                <a class="sc-jUosCB iTDswZ user-info " href="/crash">
                                    <img class="avatar " alt="" src={red.profile_img}>
                                    <div class="name">
                                        <span class="hidden-name">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                                <use xlink:href="#icon_Hidden"></use>
                                            </svg>
                                            {red.username}
                                        </span>
                                    </div>
                                </a>
                            </td>
                            <td>
                                <div class="sc-Galmp erPQzq coin notranslate monospace bold status-0">
                                    <img class="coin-icon" alt="" src={red.token_img}>
                                    <div class="amount">
                                        <span class="amount-str">{red.bet_amount}.<span class="suffix">00000000</span></span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>

            <table class="sc-gWXbKe iUeetX table is-hover">
                <tbody>


                    <tr>
                        <td>
                            <a class="sc-jUosCB iTDswZ user-info " href="/user/profile/505838">
                                <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/505838/s">
                                <div class="name">۔۔۔۔۔۔۔۔۔۔</div>
                            </a>
                            <div class="moon"></div>
                        </td>
                        <td>
                            <div class="sc-Galmp erPQzq coin notranslate monospace bold status-0">
                                <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/ppe_logo.png">
                                <div class="amount">
                                    <span class="amount-str">19.999845<span class="suffix">0</span></span>
                                </div>
                            </div>
                        </td>
                    </tr>
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
</style>
