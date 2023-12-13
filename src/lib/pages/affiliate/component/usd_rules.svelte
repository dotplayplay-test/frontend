<script>
let listArr = [{
        vip: 4,
        wager: 1000,
        reward: 0.5
    },
    {
        vip: 5,
        wager: 2000,
        reward: 0.3
    },
    {
        vip: 6,
        wager: 3000,
        reward: 0.4
    },
    {
        vip: 7,
        wager: 4000,
        reward: 0.5
    },
    {
        vip: 8,
        wager: 5000,
        reward: 1.30
    },
    {
        vip: 9,
        wager: 7000,
        reward: 0.5
    },
    {
        vip: 10,
        wager: 9000,
        reward: 0.5
    },
    {
        vip: 11,
        wager: 11000,
        reward: 0.6
    },
    {
        vip: 12,
        wager: 13000,
        reward: 0.6
    },
    {
        vip: 13,
        wager: 15000,
        reward: 0.7
    },
    {
        vip: 14,
        wager: 17000,
        reward: 2.10
    },
    {
        vip: 15,
        wager: 21000,
        reward: 0.8
    },
    {
        vip: 16,
        wager: 25000,
        reward: 0.8
    },
    {
        vip: 17,
        wager: 29000,
        reward: 1.00
    },
    {
        vip: 18,
        wager: 33000,
        reward: 1.00
    },
    {
        vip: 19,
        wager: 37000,
        reward: 1.00
    },
    {
        vip: 20,
        wager: 41000,
        reward: 1.20
    },
    {
        vip: 21,
        wager: 45000,
        reward: 1.20
    },
    {
        vip: 22,
        wager: 49000,
        reward: 5.00
    },
    {
        vip: 23,
        wager: 59000,
        reward: 1.60
    },
    {
        vip: 24,
        wager: 69000,
        reward: 1.60
    },
    {
        vip: 25,
        wager: 41000,
        reward: 2.00
    },
    {
        vip: 26,
        wager: 41000,
        reward: 2.00
    },
    {
        vip: 27,
        wager: 41000,
        reward: 2.00
    },
    {
        vip: 28,
        wager: 41000,
        reward: 2.40
    },
    {
        vip: 29,
        wager: 41000,
        reward: 2.40
    },
    {
        vip: 30,
        wager: 41000,
        reward: 11.00
    },
    {
        vip: 31,
        wager: 41000,
        reward: 3.00
    },
    {
        vip: 32,
        wager: 41000,
        reward: 3.50
    },
    {
        vip: 33,
        wager: 41000,
        reward: 4.00
    },
    {
        vip: 34,
        wager: 41000,
        reward: 4.50
    },
    {
        vip: 35,
        wager: 41000,
        reward: 5.00
    },
    {
        vip: 36,
        wager: 41000,
        reward: 5.50
    },
    {
        vip: 37,
        wager: 41000,
        reward: 6.50
    },
    {
        vip: 38,
        wager: 41000,
        reward: 23.00
    },
]
</script>

<div class="sc-dkPtRN jScFby scroll-view sc-gfXuXe lawjdN">
    <div class="rewards-dialog">
        <div class="rewards-dialog_title">Your invitees’ VIP Level upgrade will bring you different amount of rewards (USD). Refer the sample model below:</div>
        <div class="rewards-dialog_content">
            <div class="rewards-dialog_content_head">
                <span>Invitees’ VIP Level</span>
                <span>Total Wager</span>
                <span class="spec">Rewards</span>
            </div>
            <div class="rewards-dialog_content_list">
                {#each listArr as rui }
                <div class="linear list_item">
                    <span class="item_level">VIP {rui.vip}</span>
                    <span class="item_wager">{rui.wager}</span>
                    <div class="item_rewards">
                        <img class="icon" alt="" src="https://nanogames.io/coin/USD.black.png">
                        <span>{(parseFloat(rui.reward)).toFixed(2)}</span>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
.lawjdN {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}

.lawjdN {
    flex: 1 1 0%;
}

.lawjdN .rewards-dialog_title {
    margin-bottom: 20px;
}

.lawjdN .rewards-dialog_content {
    background-color: rgb(23, 24, 27);
    border-radius: 8px;
    padding: 0px 8px 16px;
    margin-bottom: 20px;
}

.lawjdN .rewards-dialog_content_head {
    color: rgb(153, 164, 176);
    line-height: 42px;
}

.lawjdN .rewards-dialog_content_head,
.lawjdN .rewards-dialog_content .list_item {
    display: flex;
    -webkit-box-pack: justify;
    place-content: center space-between;
}

.lawjdN .rewards-dialog .spec {
    flex: 0 0 100px;
    text-align: right;
    padding-right: 10px;
}

.lawjdN .rewards-dialog_content_head {
    color: rgb(153, 164, 176);
    line-height: 42px;
}

.lawjdN .rewards-dialog .list_item {
    line-height: 42px;
    padding: 0px 6px;
}

/* .lawjdN .rewards-dialog .bg {
    background-color: rgb(30, 32, 36);
} */

.lawjdN .rewards-dialog_content_head,
.lawjdN .rewards-dialog_content .list_item {
    display: flex;
    -webkit-box-pack: justify;
    place-content: center space-between;
}

.lawjdN .rewards-dialog .item_level {
    color: rgb(255, 255, 255);
    font-weight: 600;
}

.lawjdN .rewards-dialog .item_wager {
    color: rgb(153, 164, 176);
}

.lawjdN .rewards-dialog .item_rewards {
    color: rgb(246, 199, 34);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 60px;
}

.lawjdN .rewards-dialog .icon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
}

@media only screen and (max-width:650px) {
    .lawjdN {
        border-radius: 20px;
        background-color: rgb(30, 32, 36);
        padding: 4.25rem 1.25rem 0px;
    }

    .lawjdN .rewards-dialog_title {
        white-space: pre-line;
        background: none;
        padding: 0px;
        font-family: inherit;
        font-size: 13px;
        color: rgba(153, 164, 176, 0.8);
        margin: 0.5rem 0px 1.75rem;
    }
}
</style>
