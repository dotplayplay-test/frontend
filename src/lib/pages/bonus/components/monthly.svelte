<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FaSolidChessQueen from "svelte-icons-pack/fa/FaSolidChessQueen";
    import BiCoinStack from "svelte-icons-pack/bi/BiCoinStack";
    import { allcashback, error_msg } from "../store/index";
    import moment from "moment";
    import RiSystemTimeFill from "svelte-icons-pack/ri/RiSystemTimeFill";
    import { handleAuthToken } from "$lib/store/routes";
    import axios from "axios";
    import { onMount, onDestroy } from "svelte";
    import { ServerURl } from "$lib/backendUrl";
    let url = ServerURl();

    let is_loading = false;
    let content = "";
    const handleClaimcashbacks = async () => {
        if (!$allcashback.month_bonus) return;
        is_loading = true;
        try {
            await axios.post(
                `${url}/api/profile/claim-monthly-bonus`,
                { data: "" },
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${$handleAuthToken}`,
                    },
                },
            );
            content = res.data.result;
            allcashback.update((prev) => ({
                ...prev,
                week_bonus: 0,
            }));
        } catch (error) {
            console.log(error);
            error_msg.set(error.data?.message || "Somthing went wrong! ");
        } finally {
            is_loading = false;
        }
    };
    const getPercentage = (vip_level) => {
        if (vip_level < 38) {
            return 0.03;
        } else if (vip_level < 56) {
            return 0.35;
        } else if (vip_level < 70) {
            return 0.04;
        } else if (vip_level < 85) {
            return 0.045;
        } else {
            return 0.05;
        }
    };
    $: countdown = "";
    let countdownInterval;

    const startCountDown = () => {
        const endsInDate = moment().add(1, "months").startOf("month");
        let diffInSeconds = endsInDate.diff(moment(), "seconds");
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        countdownInterval = setInterval(() => {
            if (diffInSeconds <= 0) {
                clearInterval(countdownInterval);
                countdown = "";
                setTimeout(() => startCountDown(), 2000);
            } else {
                const days = Math.floor(diffInSeconds / (3600 * 24));
                const hours = Math.floor((diffInSeconds % (3600 * 24)) / 3600);
                const minutes = Math.floor((diffInSeconds % 3600) / 60);
                const seconds = diffInSeconds % 60;
                countdown = `${days}D ${hours}h ${minutes}m ${seconds}s`;
                diffInSeconds--;
            }
        }, 1000);
    };

    onMount(async () => {
        allcashback.subscribe((v) => {
            if (v.vip_level > 21 && v.month_bonus === 0) {
                startCountDown();
            }
        });
    });
    onDestroy(() => {
        clearInterval(countdownInterval);
    });
</script>

<div class="b2i2902 page-bonus-item">
    <div class="bonus-item-text">
        <div class="bonus-tit">
            <p class="bonus-t">Monthly Cashback</p>
            <div class="t1vk7zf8 tips-wrap">
                <div class="in">
                    <button>
                        <svg class="s1ff97qc icon">
                            <use
                                xlink:href="/assets/symbol-defs.ac3d71f1.svg#icon_Help"
                            ></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <p class="bonus-d">Receive every 1st of the month</p>
        {#if $allcashback.vip_level > 21}
            <div class="bonus-desc">
                <p>Wager required</p>
                <p>
                    <span style="font-weight: bold; color:#fff"
                        >${$allcashback.monthly_cashback.toFixed(2)}</span
                    > / $10,000
                </p>
            </div>
            <div class="bonus-desc last">
                <p>Ready to claim</p>
                <p>
                    ${(
                        $allcashback.monthly_cashback *
                        0.01 *
                        getPercentage($allcashback.vip_level)
                    ).toFixed(6)}
                </p>
            </div>
        {:else}
            <div class="bonus-desc">
                <p>Wager required</p>
                <p>$10,000</p>
            </div>
            <div class="bonus-desc last">
                <p>The last monthly bonus</p>
                <p>{($allcashback.last_month_bonus || 0).toFixed(2)}</p>
            </div>
        {/if}
    </div>
    <div class="bonus-btn">
        {#if $allcashback.vip_level < 21}
            <div class="quests-btn">
                <span style="padding-right: 12px;">
                    <Icon
                        src={FaSolidChessQueen}
                        size="18"
                        color="#75808c"
                        className="custom-icon"
                        title="arror"
                    />
                </span>
                <span>Available at VIP 22</span>
            </div>
        {:else if $allcashback.month_bonus !== 0}
            <button
                disabled={is_loading}
                on:click={handleClaimcashbacks}
                class="quests-btn claim"
            >
                <span>
                    {is_loading && content ? content : "Claim your bonus"}</span
                >
            </button>
        {:else if $allcashback.monthly_cashback < 10_000}
            <div class="quests-btn">
                <span style="padding-right: 12px;">
                    <Icon
                        src={BiCoinStack}
                        size="18"
                        color="#75808c"
                        className="custom-icon"
                        title="arror"
                    />
                </span>
                <span>Wager more!</span>
            </div>
        {:else}
            <button class="quests-btn">
                <span style="padding-right: 12px; height: 18px">
                    <Icon
                        src={RiSystemTimeFill}
                        size="18"
                        color="#75808c"
                        className="custom-icon"
                        title="arror"
                    />
                </span>
                <span
                    style="font-size: 16px;  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; letter-spacing: 2px;"
                    >{countdown}</span
                >
            </button>
        {/if}
    </div>
    <div class="bonus-bg-wrap">
        <div class="bg-inner"></div>
        <img alt="img" src="https://bc.game/assets/monthly.c63ad96a.png" />
    </div>
</div>

<style>
    .page-bonus-item {
        width: 32%;

        background: #1c1e22;
        position: relative;
        min-width: 7.125rem;
        border-radius: 0.25rem;
        margin-bottom: 1.25rem;
        z-index: 5;
        height: 15.25rem;
        -webkit-backdrop-filter: blur(7px);
        backdrop-filter: blur(7px);
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        border-radius: 12px;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 1.375rem 1.5rem;
    }
    .page-bonus-item {
        margin-bottom: 1rem;
        width: 49%;
    }
    .quests-btn.claim {
        background: var(--primary-color);
        color: var(--autofill-color);
        border-radius: 30px;
    }
    .quests-btn.claim:hover {
        background: #68e927ef;
    }
    .bonus-item-text {
        position: relative;
        z-index: 3;
        width: 100%;
    }
    .bonus-tit {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bonus-item-text .bonus-t {
        color: var(--autofill-color);
        font-size: 1.125rem;
        line-height: 1.5rem;
        font-weight: 600;
        margin-right: 0.25rem;
    }
    .page-bonus-item p {
        margin: 0;
    }

    .bonus-desc {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 0.75rem;
        line-height: 1rem;
        width: 70%;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        max-width: 15rem;
        margin-top: 1rem;
    }

    .in button {
        cursor: pointer;
        width: 1.125rem;
        height: 1.125rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 50%;
    }

    .bonus-desc.last {
        margin-top: 0.5rem;
    }
    .bonus-desc {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 0.75rem;
        line-height: 1rem;
        width: 70%;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        max-width: 15rem;
        margin-top: 1rem;
    }
    .bonus-btn {
        position: relative;
        z-index: 2;
        margin-top: auto;
    }

    .b2i2902 .bonus-bg-wrap {
        position: absolute;
        z-index: 1;
        width: 35%;
        height: 100%;
        right: 0;
        top: 0;
        overflow: hidden;
    }
    .bonus-bg-wrap .bg-inner {
        width: 16.75rem;
        height: 12.875rem;
        background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(9, 148, 123, 0.5) 0%,
            rgba(9, 148, 123, 0) 100%
        );
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .bonus-bg-wrap img {
        height: 10rem;
        position: absolute;
        right: 0;
        top: 6%;
    }
    .quests-btn {
        background: #24262b;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 3rem;
        font-size: 14px;
        font-weight: bold;
    }
    .s1ff97qc {
        width: 1.4em;
        height: 1.4em;
        fill: var(--1nfs066);
    }
    .b2i2902 .bonus-btn {
        position: relative;
        z-index: 2;
        margin-top: auto;
    }
    p {
        margin: 0;
    }
    .b2i2902 .bonus-item-text .bonus-desc.last {
        margin-top: 0.5rem;
    }
    .bonus-item-text .bonus-d {
        font-size: 0.75rem;
        line-height: 1rem;
        margin-top: 0.5rem;
    }
</style>
