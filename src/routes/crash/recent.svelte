<script>
        let recents = [
        {id:1, game_id:265372, crash_point: 2.5},
        {id:2, game_id:265372, crash_point: 4.5},
        {id:3, game_id:265372, crash_point: 1.5},
        {id:4, game_id:265372, crash_point: 4.5},
        {id:5, game_id:265372, crash_point: 9.5},
        {id:6, game_id:265372, crash_point: 6.5},
        {id:7, game_id:265372, crash_point: 9.5},
        {id:8, game_id:265372, crash_point: 12.5}
    ]
</script>

<div class="abugvufqsns game-recent vsagvbq">
    <div class="jackpot-enter">
        <div class="title">
            <span class="tit"> Bankroll </span>
            <span> BTC </span>
        </div>
        <div class="coin lhvgasis">
            <img class="coin-icon" src="https://nanogames.io/coin/BTC.black.png" alt="">
            <div class="amount">
                <span class="amount-str">
                    27.7349793
                </span>
            </div>
        </div>
    </div>
    <div class="recent-list-wrap">
        <div class="recent-list" style="width:133.333%; transform: translate(25%, 0px);" >
            {#each recents as recent (recent.id) }
                <div style="width:25%;"  class='game-item' >
                    <div class="issus">{recent.game_id}</div>
                    <div>{recent.crash_point}x</div>
                </div>
            {/each }
        </div>
    </div>
    <button class="bewiww filter-centre">
        <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M4 7C4 6.44772 4.44772 6 5 6H6C6.55228 6 7 6.44772 7 7C7 7.55228 6.55228 8 6 8H5C4.44772 8 4 7.55228 4 7ZM9 7C9 6.44772 9.44772 6 10 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H10C9.44772 8 9 7.55228 9 7ZM4 12C4 11.4477 4.44772 11 5 11H6C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H5C4.44772 13 4 12.5523 4 12ZM9 12C9 11.4477 9.44772 11 10 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H10C9.44772 13 9 12.5523 9 12ZM4 17C4 16.4477 4.44772 16 5 16H6C6.55228 16 7 16.4477 7 17C7 17.5523 6.55228 18 6 18H5C4.44772 18 4 17.5523 4 17ZM9 17C9 16.4477 9.44772 16 10 16H19C19.5523 16 20 16.4477 20 17C20 17.5523 19.5523 18 19 18H10C9.44772 18 9 17.5523 9 17Z" fill="rgba(153,164,176,.8"></path>
        </svg>
        <div class="trends">Trends</div>
    </button>
</div>

<style>
   .game-recent{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 2.75rem;
        font-size: 12px;
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
    }
    .jackpot-enter{
        margin-left: 1.5rem;

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
    .jackpot-enter .title{
        font-weight: bold;
        height: 1.25rem;
        color: var(--text-color);
    }
    .jackpot-enter .title .tit{
        margin-right: 0.25rem;
        color: rgb(67, 179, 9);
    }
    .jackpot-enter .coin{
        vertical-align: top;
        height: 1.25rem;
        margin-top: -0.25rem;
    }
    .lhvgasis{
        display: inline-flex;
        gap: 5px;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        white-space: nowrap;
    }
    .jackpot-enter .coin .coin-icon{
        width: 1rem;
        height: 1rem;
    }
    .jackpot-enter .coin .amount{
        color: rgb(245, 246, 247);
        font-weight: bold;
    }
    .jackpot-enter .coin .amount .amount-str{
        width: auto;
        display: inline-block;
    }
    .vsagvbq .recent-list-wrap{
        background-color: rgba(49, 52, 60, 0.4);
        border-radius: 1.375rem;
        padding: 0px 0.625rem;
        margin: 0px 0.625rem;
    }
    .abugvufqsns .recent-list-wrap{
        flex: 1 1 auto;
        height: 100%;
        margin: 0px 1.5rem;
        overflow: hidden;
        position: relative;
        border-radius: 1.375rem;
    }
    .abugvufqsns .recent-list{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
    }
    .game-item{
        display: flex;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: column;
        line-height: 0.875rem;
        background-color: transparent;
        position: relative;
        padding-left: 1.4375rem;
        color: rgb(237, 99, 0);
        text-align: left;
        align-items: flex-start;
        height: 100%;
    }
    .game-item::before{
        content: "";
        position: absolute;
        left: 0.125rem;
        top: 50%;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 0.5rem;
        transform: translateY(-50%);
        background-color: rgb(237, 99, 0);
    }
    .game-item .issus{
        font-size: 1rem;
        font-weight: normal;
        transform: scale(0.7);
        width: 3.125rem;
        transform-origin: left center;
        margin-bottom: 0.125rem;
        color: rgba(153, 164, 176, 0.5);
    }
    .bewiww{
        margin-right: 1.5rem;
        color: rgba(153, 164, 176, 0.6);
        min-height: 1.875rem;
        font-size: 1rem;
        border: none;
        padding: 0;
        user-select: none;
        cursor: pointer;
        background-color: transparent;
    }
    .filter-centre{
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>