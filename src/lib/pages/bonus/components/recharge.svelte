<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import { allcashback, error_msg } from "../store/index";
    import BiCoinStack from "svelte-icons-pack/bi/BiCoinStack";
    import moment from "moment";
    import Tooltip from "$lib/components/tooltip.svelte";
    import BiHelpCircle from "svelte-icons-pack/ri/RiSystemQuestionLine";
    import { handleAuthToken } from "$lib/store/routes";
    import RiSystemTimeFill from "svelte-icons-pack/ri/RiSystemTimeFill";
    import FaSolidChessQueen from "svelte-icons-pack/fa/FaSolidChessQueen";
    import axios from "axios";
    import { ServerURl } from "$lib/backendUrl";
    import { onMount, onDestroy } from "svelte";
    let url = ServerURl();
    $: countdown = "";
    $: selectedFrequency = "hourly";
    let countdownInterval;

    const getEndDate = () => {
        const frequency = $allcashback.recharge_settings;
        const currentDate = moment();

        if (frequency === "daily") {
            // Set the end of the day (hour = 23:59:59)
            return currentDate.endOf("day");
        } else if (frequency === "hourly") {
            // Set the end of the next hour
            return currentDate.add(1, "hour").startOf("hour");
        } else if (frequency === "flash_charge") {
            // Set the end of the next 10-minute mark
            const next10Minutes = Math.ceil(currentDate.minutes() / 10) * 10;
            return currentDate
                .minutes(next10Minutes)
                .seconds(0)
                .milliseconds(0);
        }
        return currentDate.add(1, "hour").startOf("hour");
    };

    const startCountDown = () => {
        const endsInDate = getEndDate();
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
                countdown = `${!!days ? `${days}D ` : ""}${
                    !!hours || diffInSeconds > 3600 ? `${hours}h ` : ""
                }${
                    !!minutes || diffInSeconds > 60 ? `${minutes}m ` : ""
                }${seconds}s`;
                diffInSeconds--;
            }
        }, 1000);
    };

    const claimAvailable = (cashback) => {
        let lastClaimDate = moment(cashback.recharge_claimed_at);
        let currentTime = moment();
        if (cashback.recharge_settings === "daily") {
            return currentTime.isAfter(
                moment(lastClaimDate).add(1, "day").startOf("day"),
            );
        } else if (cashback.recharge_settings === "hourly") {
            return currentTime.isAfter(
                moment(lastClaimDate).add(1, "hour").startOf("hour"),
            );
        } else if (cashback.recharge_settings === "flash_charge") {
            return currentTime.isAfter(
                moment(lastClaimDate).add(10, "minutes").startOf("minute"),
            );
        }
        return false;
    };

    onMount(() => {
        allcashback.subscribe((v) => {
            // console.log("Claim available > ", claimAvailable(v), v);
            if (
                v.recharge_activated &&
                v.vip_level > 21 &&
                v.recharge_bonus === 0 &&
                !claimAvailable(v)
            ) {
                startCountDown();
            }
        });
    });
    onDestroy(() => {
        clearInterval(countdownInterval);
    });

    let is_loading = false;
    let content = "";
    const handleClaimcashbacks = async () => {
        if (!$allcashback.recharge_bonus || !claimAvailable($allcashback))
            return;
        is_loading = true;

        try {
            await axios.post(
                `${url}/api/profile/claim-recharge-bonus`,
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
                recharge_bonus: 0,
                recharge_claimed_at: moment.utc().toDate(),
            }));
        } catch (error) {
            console.log(error);
            error_msg.set(error.data?.message || "Somthing went wrong! ");
        } finally {
            is_loading = false;
        }
    };

    const handleActivateRecharge = async () => {
        if (!selectedFrequency) return;
        is_loading = true;
        try {
            await axios.post(
                `${url}/api/profile/activate-recharge`,
                {
                    frequency: selectedFrequency,
                },
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${$handleAuthToken}`,
                    },
                },
            );
            allcashback.update((prev) => ({
                ...prev,
                recharge_settings: selectedFrequency,
                recharge_activated: true,
                recharge_claimed_at: moment(),
            }));
        } catch (error) {
            console.log(error);
            error_msg.set(error.data?.message || "Somthing went wrong! ");
        } finally {
            is_loading = false;
        }
    };
    const getRechargeSettings = (cashback) => {
        const frequency = cashback.recharge_settings;
        if (frequency === "flash_charge") return "Flash Charge";
        return frequency;
    };
    const getTierPercentage = (vip_level, wagered) => {
        if (vip_level < 38) {
            if (wagered < 50_000) return 0.1;
            else if (wagered < 200_000) return 0.12;
            else if (wagered < 500_000) return 0.14;
            else return 0.16;
        } else if (vip_level < 56) {
            if (wagered < 50_000) return 0.12;
            else if (wagered < 200_000) return 0.14;
            else if (wagered < 500_000) return 0.16;
            else return 0.18;
        } else if (vip_level < 70) {
            if (wagered < 50_000) return 0.14;
            else if (wagered < 200_000) return 0.16;
            else if (wagered < 500_000) return 0.18;
            else return 0.18;
        } else if (vip_level < 85) {
            if (wagered < 50_000) return 0.16;
            else if (wagered < 200_000) return 0.18;
            else if (wagered < 500_000) return 0.2;
            else return 0.22;
        } else {
            if (wagered < 50_000) return 0.18;
            else if (wagered < 200_000) return 0.2;
            else if (wagered < 500_000) return 0.22;
            else return 0.24;
        }
    };
    const getTier = (vip_level, wagered) => {
        if (vip_level < 38) {
            if (wagered < 50_000) return "1 (Basic)";
            else if (wagered < 200_000) return "2 (Super)";
            else if (wagered < 500_000) return "3 (Mega)";
            else return "4 (Epic)";
        } else if (vip_level < 56) {
            if (wagered < 50_000) return "1 (Basic)";
            else if (wagered < 200_000) return "2 (Super)";
            else if (wagered < 500_000) return "3 (Mega)";
            else return "4 (Epic)";
        } else if (vip_level < 70) {
            if (wagered < 50_000) return "1 (Basic)";
            else if (wagered < 200_000) return "2 (Super)";
            else if (wagered < 500_000) return "3 (Mega)";
            else return "4 (Epic)";
        } else if (vip_level < 85) {
            if (wagered < 50_000) return "1 (Basic)";
            else if (wagered < 200_000) return "2 (Super)";
            else if (wagered < 500_000) return "3 (Mega)";
            else return "4 (Epic)";
        } else {
            if (wagered < 50_000) return "1 (Basic)";
            else if (wagered < 200_000) return "2 (Super)";
            else if (wagered < 500_000) return "3 (Mega)";
            else return "4 (Epic)";
        }
    };
</script>

<div class="ba3phvn page-bonus-item">
    <div class="bonus-item-text">
        <div class="bonus-tit">
            <p class="bonus-t">Recharge</p>
            {#if $allcashback.recharge_settings !== "-"}
                <div class="recharge-type" style="text-transform: capitalize;">
                    {getRechargeSettings($allcashback)}
                </div>
            {/if}
            <div style="height: 23px;">
                <Tooltip
                    text="If you have wagered a minimum of $1,000 in the past 7 days (24/7). Once activated, your Recharge will be redeemable for the next 7 days."
                >
                    <Icon
                        src={BiHelpCircle}
                        size="23"
                        color="rgba(153, 164, 176, 0.6)"
                    />
                </Tooltip>
            </div>
        </div>
        {#if $allcashback.vip_level > 21}
            <div class="bonus-desc">
                <p>Wager required</p>
                <p>
                    <span style="font-weight: bold; color:#fff"
                        >${$allcashback.recharge_balance.toFixed(2)}</span
                    > / $1,000
                </p>
            </div>
            <div class="bonus-desc last">
                <p>Current Tier</p>
                <p class="">
                    {getTier(
                        $allcashback.vip_level,
                        $allcashback.total_wagered,
                    )}
                </p>
            </div>
            <div class="bonus-desc last">
                <p>Recharge Rate</p>
                <p class="">
                    {getTierPercentage(
                        $allcashback.vip_level,
                        $allcashback.total_wagered,
                    ) * 100}%
                </p>
            </div>
            <div class="bonus-desc last">
                <p>Ready to claim</p>
                <p>
                    ${(
                        $allcashback.recharge_balance *
                        0.01 *
                        getTierPercentage(
                            $allcashback.vip_level,
                            $allcashback.total_wagered,
                        )
                    ).toFixed(6)}
                </p>
            </div>
        {:else}
            <div class="bonus-desc">
                <p>Wager required</p>
                <p>$1,000</p>
            </div>
            <div class="bonus-desc last">
                <p>Current Tier</p>
                <p class="">-</p>
            </div>
            <div class="bonus-desc last">
                <p>Recharge Rate</p>
                <p class="">-</p>
            </div>
            <div class="bonus-desc last">
                <p>Ready to claim</p>
                <p>-</p>
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
        {:else if $allcashback.recharge_activated && ($allcashback.recharge_bonus !== 0 || ($allcashback.recharge_balance && claimAvailable($allcashback)))}
            <button
                disabled={is_loading}
                on:click={handleClaimcashbacks}
                class="quests-btn claim"
            >
                <span>
                    {is_loading && content ? content : "Claim your bonus"}</span
                >
            </button>
        {:else if !$allcashback.recharge_activated}
            <div class="activate-box">
                <select
                    on:change={(e) =>
                        (selectedFrequency = e.currentTarget.value)}
                    bind:value={selectedFrequency}
                >
                    <option value="flash_charge">Flash Charge(10mins)</option>
                    <option value="hourly">Hourly</option>
                    <option value="daily">Daily</option>
                </select>
                <button
                    disabled={is_loading}
                    on:click={handleActivateRecharge}
                    class="quests-btn claim activate"
                >
                    <span
                        >{is_loading
                            ? "Activating..."
                            : "Activate Recharge"}</span
                    >
                </button>
            </div>
        {:else if $allcashback.recharge_balance < 1000}
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
        <img alt="img" src="	https://bc.game/assets/recharge.a4be9aca.png" />
    </div>
</div>

<style>
    .activate-box {
        display: flex;
    }
    .activate-box select {
        flex: 1 1 auto;
        padding: 0 20px;
        color: whitesmoke;
        background-color: #24262b;
        outline: none;
        border: none;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
    }
    .activate-box select:hover {
        filter: brightness(0.9);
    }
    .activate-box select option {
        height: 40px;
    }
    .activate-box button {
        flex: 1 1 auto;
    }
    .quests-btn.claim {
        background: var(--primary-color);
        color: var(--autofill-color);
    }
    .quests-btn.claim:not(.activate) {
        border-radius: 30px;
    }
    .quests-btn.claim.activate {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
    .quests-btn.claim:hover {
        background: #68e927ef;
    }
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
    .ba3phvn .bonus-tit .recharge-type {
        color: var(--primary-color);
        background-color: #3bc1171a;
        height: 1.375rem;
        padding: 0 0.25rem;
        border-radius: var(--border-radius);
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
        margin-right: 0.25rem;
    }
    /* .in button {
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
    } */

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

    .ba3phvn .bonus-bg-wrap {
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
        width: 100%;
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
        height: 3rem;
    }
</style>
