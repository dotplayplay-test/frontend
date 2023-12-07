<script>
    import { createEventDispatcher } from "svelte";
    import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import { ServerURl } from "$lib/backendUrl";
    import axios from "axios";
    import { handleAuthToken } from "$lib/store/routes";
    const URL = ServerURl();
    const dispatch = createEventDispatcher();
    let selectedNumbers = [];
    $: jackpotNum = 0;
    const handleRandomGeneration = () => {
        selectedNumbers = Array.from(
            { length: 5 },
            () => Math.floor(Math.random() * 36) + 1,
        );
        jackpotNum = Math.floor(Math.random() * 10) + 1;
    };
    const handleSelection = (num) => {
        if (selectedNumbers.includes(num)) {
            selectedNumbers = [...selectedNumbers.filter((n) => n !== num)];
        } else if (selectedNumbers.length < 5) {
            selectedNumbers = [...selectedNumbers, num];
        }
    };

    $: isManual = false;
    const handleClose = () => {
        dispatch("close-dialog");
    };
    $: loading = false;
    const buyTicket = async () => {
        loading = true;
        console.log("On Buy");
        if (isManual && (selectedNumbers.length < 5 || !jackpotNum)) return;
        try {
            console.log("Sending request ", `${URL}/api/lottery/buy-ticket`);
            const res = await axios.post(
                `${URL}/api/lottery/buy-ticket`,
                {
                    numbers: selectedNumbers,
                    random: !isManual,
                    jackpot: jackpotNum,
                },
                {
                    headers: {
                        "Content-type": "application/json",
                        Authorization: `Bearer ${$handleAuthToken}`,
                    },
                },
            );
            console.log("Response => ", res.data);
            dispatch("close-dialog");
        } catch (error) {
            console.log("Error > ", error);
        } finally {
            loading = false;
        }
    };
</script>

<div
    class="wdcb8sn ui-dialog-overlayer"
    style="background-color: rgba(0, 0, 0, 0.667);"
>
    <div
        class="ui-dialog-wrap"
        style="width: 560px; height: 595px; margin-top: -297.5px; margin-left: -280px; opacity: 1; transform: none;"
    >
        <div
            class="ui-dialog su96gxq"
            style="opacity: 1; visibility: visible; transform: translateX(0%) scale(1) translateZ(0px);"
        >
            <div class="dialog-head has-close">
                <div class="dialog-title">Buy Lottery Tickets</div>
            </div>
            <button
                on:click={handleClose}
                class="close-icon i1gm0mn8 dialog-close"
            >
                <Icon
                    src={IoCloseSharp}
                    size="23"
                    color="rgba(153, 164, 176, 0.6)"
                />
            </button>
            <div class="dialog-body">
                <div class="sc-iMrobD kWQLVq">
                    <div class="sc-iwjdpV ikWSlH radio">
                        <div
                            role="radio"
                            aria-checked={isManual ? "false" : "true"}
                            tabindex="-1"
                            on:keydown={() => (isManual = false)}
                            on:click={() => (isManual = false)}
                            class="radio-item {isManual ? '' : 'is-active'}"
                        >
                            <div class="circle"></div>
                            <div>Auto Generate</div>
                        </div>
                        <div
                            role="radio"
                            aria-checked={isManual ? "true" : "false"}
                            tabindex="-1"
                            on:keydown={() => (isManual = true)}
                            on:click={() => (isManual = true)}
                            class="radio-item {isManual ? 'is-active' : ''}"
                        >
                            <div class="circle"></div>
                            <div>Manual Select</div>
                        </div>
                    </div>
                    {#if isManual}
                        <div class="select-box">
                            <div class="simple">
                                <div class="random-wrap">
                                    <div class="sub-tips">
                                        5 digits optional
                                    </div>
                                    <button
                                        on:click={handleRandomGeneration}
                                        class="random">Random</button
                                    >
                                </div>
                                <div class="box">
                                    {#each Array.from({ length: 36 }, (_, i) => i + 1) as number (number)}
                                        <button
                                            on:click={() =>
                                                handleSelection(number)}
                                            class="button button-normal {selectedNumbers.includes(
                                                number,
                                            )
                                                ? 'selected'
                                                : ''}"
                                            ><div class="button-inner">
                                                {number}
                                            </div>
                                        </button>
                                    {/each}
                                </div>
                            </div>
                            <div class="jackpot">
                                <div class="sub-tips">1 Jackpot Ball</div>
                                <div class="box jackpot">
                                    {#each Array.from({ length: 10 }, (_, i) => i + 1) as number (number)}
                                        <button
                                            on:click={() =>
                                                (jackpotNum = number)}
                                            class="sc-iqseJM cBmlor button button-normal {jackpotNum ===
                                            number
                                                ? 'selected'
                                                : ''}"
                                            ><div class="button-inner">
                                                {number}
                                            </div></button
                                        >
                                    {/each}
                                </div>
                            </div>
                        </div>
                    {/if}
                    {#if selectedNumbers.length < 5 || !jackpotNum}
                        <div class="error-txt show">
                            Please choose 6 numbers to take part in the
                            DotPlayPlay Lottery!
                        </div>
                    {/if}
                </div>
                <button
                    disabled={loading}
                    class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal submit-btn"
                    on:click={buyTicket}
                    ><div class="button-inner">Buy Tickets</div></button
                >
            </div>
        </div>
    </div>
</div>

<style>
    .ui-dialog-overlayer {
        z-index: 100000 !important;
    }
    .wdcb8sn {
        position: fixed;
        z-index: 200;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: #0000;
    }
    .ui-dialog {
        position: absolute;
        right: 0;
        top: 0;
        width: 464px;
        height: 720px;
        max-width: 90vw;
        max-height: 90vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        overflow: hidden;
        background-color: var(--7h9g04);
    }
    .dialog-head .dialog-title {
        font-size: 1rem;
        margin: 0;
        font-weight: 700;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: var(--autofill-color);
        line-height: 1;
    }

    .ui-dialog-wrap {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 29rem;
        height: 720px;
        margin: -375px 0 0 -280px;
        -webkit-transition-property: width, height, margin-left, margin-top,
            background-color;
        transition-property: width, height, margin-left, margin-top,
            background-color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        border-radius: 30px;
        overflow: hidden;
        background-color: #17181b;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
    }

    .i1gm0mn8 {
        --1uvkmwv: #5f6975;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 11;
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
        width: 3.75rem;
        height: 3.75rem;
    }

    .i1gm0mn8 {
        --1uvkmwv: #f5f6f7;
    }
    .su96gxq {
        --1yhspeg: rgba(95, 105, 117, 0.8);
        --1ek0mmx: rgba(218, 221, 230, 0.5);
        --1b41co8: #f5f6fa;
        --1x7g4w8: #dadde6;
        --1q3am70: #ffffff;
        --157d7l0: #f6f7fa;
        --1m9vfxv: rgba(0, 0, 0, 0.2);
        color: var(--1yhspeg);
        width: 560px;
        height: 800px;
    }
    .su96gxq {
        --1yhspeg: rgba(153, 164, 176, 0.6);
        --1ek0mmx: #1e2024;
        --1b41co8: #17181b;
        --1x7g4w8: #2a2e33;
        --1q3am70: #1f2024;
        --157d7l0: #1e2024;
        --1m9vfxv: rgba(0, 0, 0, 0.5);
    }
    .ui-dialog > div:last-child {
        /* padding: 1.25rem; */
        background-color: #1e2024;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .dialog-body {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    .box {
        padding: 10px;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        & button {
            width: 30px;
            height: 30px;
            cursor: pointer;
            border-radius: 100%;
            background-color: rgba(255, 255, 255, 0.185);
            &.selected {
                background-color: white;
                color: black;
            }
        }
        &.jackpot {
            & button.selected {
                background-color: rgb(67, 179, 9);
                color: white;
            }
        }
    }
    .radio {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        line-height: 26px;
    }
    .radio-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        & .circle {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: none;
            width: 1rem;
            height: 1rem;
            border-radius: 0.5em;
            margin-right: 0.3em;
            box-sizing: border-box;
            border: 1px solid #2d3035;
            background-color: rgba(45, 48, 53, 0.5);
            &:after {
                content: "";
                display: none;
                width: 0.625rem;
                height: 0.625rem;
                border-radius: 0.3125rem;
                background-color: rgb(67, 179, 9);
            }
        }
        &.is-active {
            & .circle:after {
                display: block;
            }
        }
    }
</style>
