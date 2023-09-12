<script>
 
</script>

<div class="active-players">
    <div class="active-players-container">
        <table class="header">
            <tbody>
                <tr>
                    <td class="user">Player</td>
                    <td class="escape">Cashout</td>
                    <td class="amount">Amount</td>
                    <td>Profit</td>
                </tr>
            </tbody>
        </table>
        <div class="scroll-wrap">
            <table class="table-content">
                <tbody>
                    <td class="user">
                        <a class="user-info" href="/">
                            <img class="avater" src="https://img2.nanogames.io/avatar/283197/s" alt="">
                            <div class="name">
                                <span>Valiant</span>
                            </div>
                        </a>
                    </td>
                    <td class="escape">
                        <span class="ott opacity">Betting</span>
                    </td>
                    <td class="whggubeue">
                        <div class="coin">
                            <img class="coin-icon" src="https://nanogames.io/coin/ETH.black.png" alt="">
                        </div>
                        <div class="amount">
                            <span class="amount-str">0.678292</span>
                        </div>
                    </td>
                    <td>
                        <span class="ott opacity">Betting</span>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</div>

<style>
    .active-players{
        background-color: rgb(30, 32, 36);
        margin-left: 0.625rem;
        border-radius: 1.25rem;
        width: 40%;
        max-width: 542px;
        position: relative;
    }
    .active-players-container{
        height: 100%;
        min-height: 37.5rem;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 0px 0.375rem;
    }
    table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }
    .header{
        table-layout: fixed;
        height: 3.75rem;
        font-size: 12px;
        color: rgba(153, 164, 176, 0.6);
    }
    .header td{
        text-align: center;
    }
    .header td:first-of-type{
        text-align: left;
    }

    .header .user{
        max-width: 8.75rem;
    }
    .header .escape{
        width: 5.625rem;
    }
    .active-players-container td{
        padding: 0px 0.375rem;
        height: 3rem;
    }
    .active-players-container .scroll-wrap{
        flex: 1 1 auto;
        position: relative;
    }

    .table-content{
        width: 100%;
        table-layout: fixed;
        border-collapse: separate;
        border-spacing: 0px;
    }
    .table-content td{
        border: 1px solid transparent;
        color: rgb(153, 164, 176);
        overflow: hidden;
        text-align: center;
    }

    .avater{
        width: 1.62em;
        height: 1.62em;
        border-radius: 50%;
        margin-right: 0.5em;
    }
    .user-info{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: middle;
    }
    .user-info .name{
        flex: 1 1 0%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .user a{
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 12px;
        color: rgb(245, 246, 247);
        font-weight: bold;
    }
     .ott{
        text-transform: lowercase;
        color: var(--text-color);
        font-size: 13px;
        text-align: center;
    }
    .table-content td .coin{
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        white-space: nowrap;
    }
    .table-content td .coin .coin-icon{
        width: 1.2em;
        height: 1.2em;
    }
    .table-content td .amount{
        color: rgb(245, 246, 247);
        font-weight: bold;
        font-size: 12px;
    }
    .table-content td .amount .amount-str{
        width: 7em;
        display: inline-block;
    }

    .whggubeue{
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        white-space: nowrap;
    }
</style>