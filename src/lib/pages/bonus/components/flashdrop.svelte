<script>
    import { UseFetchData } from "$lib/hook/useFetchData";
    import { handleAuthToken } from "$lib/store/routes";
    import VipLevel from "../../vip/components/vipLevel.svelte";
    import {
        ppdWallet,
        pplWallet,
        usdt_Wallet,
    } from "$lib/store/coins";
    let is_active = false;
    const handleCancel = () => {
        is_active = !is_active;
    };

    $: shit_code = "";
    $: loading = false;
    const handleRedeem = async () => {
        if (!shit_code) return;
        loading = true;
        try {
            const { data } = UseFetchData($handleAuthToken).fetch(
                "/profile/redeem-flashdrop",
                {
                    shit_code,
                },
                "POST",
            );
            if (data.token === "PPD") {
                ppdWallet.update((wallet) => ({
                    ...wallet,
                    balance: wallet.balance + data.amount,
                }));
            } else if (data.token === "PPD") {
                pplWallet.update((wallet) => ({
                    ...wallet,
                    balance: wallet.balance + data.amount,
                }));
            } else if (data.token === "USDT") {
                usdt_Wallet.update((wallet) => ({
                    ...wallet,
                    balance: wallet.balance + data.amount,
                }));
            }
        } catch (error) {
            console.log(error);
        } finally {
            loading = false;
        }
    };
</script>

{#if is_active}
    <VipLevel on:close={handleCancel} />
{/if}

<div class="sc-bOtlzW dIGSON shitcode">
    <div class="flex flex-center">
        <div class="title ttu bold">Flash drop</div>
        <div class="detail">
            <span>Details</span>
            <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
            >
                <use xlink:href="#icon_Arrow"></use>
            </svg>
        </div>
    </div>
    <div class="desc">Redeem shitcodes to unlock crypto rewards</div>
    <div class="flex-center wrap">
        <div class="sc-ezbkAF kDuLvp input">
            <div class="input-control">
                <input
                    bind:value={shit_code}
                    type="text"
                    on:input={(e) => (shit_code = e.currentTarget.value)}
                />
            </div>
        </div>
        <button
            on:click={handleRedeem}
            class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal"
            disabled={!shit_code || loading}
        >
            <div class="button-inner">{loading ? "Loading..." : "Redeem Now"}</div>
        </button>
    </div>
</div>

<style>
    .sc-bOtlzW {
        height: auto;
    }
    .shitcode {
        flex: 1 1 33%;
        margin-right: 1.3rem;
    }
    .dIGSON {
        height: 16rem;
        border-radius: 1.25rem;
        overflow: hidden;
        padding: 0.91rem 1.25rem;
        background: rgb(23, 24, 27);
        color: rgb(255, 255, 255);
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
    }
    .dIGSON .flex {
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flex {
        display: flex;
    }
    .sc-bOtlzW .flex .title {
        font-size: 1.25rem;
    }
    .dIGSON .detail {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
    }
    .dIGSON .desc {
        margin-top: 0.25rem;
        line-height: 1.43;
        flex: 1 1 0%;
        max-width: 60%;
    }
    .wrap {
        display: block;
    }
    .input {
        margin: 1.2rem 0px;
    }
    .button {
        width: auto;
        height: 2.4rem;
        padding: 0px 1.25rem;
        color: rgb(34, 35, 41);
        background-image: conic-gradient(
            from 1turn,
            rgb(246, 199, 34),
            rgb(226, 180, 11),
            rgb(246, 199, 34)
        );
    }
    .sc-bOtlzW .button {
        width: 12.75rem;
        margin: 0px auto;
    }
</style>
