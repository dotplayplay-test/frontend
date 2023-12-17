<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
    import VipSystem from "./vip_system.svelte";
    import { vipProfiile } from "../vipstore";
    import { createEventDispatcher, onMount } from "svelte";
    const dispatch = createEventDispatcher();

    const handleCancel = () => {
        dispatch("close", 5);
    };

    const items = Array.from({ length: 15 }, (_, i) => i);
    
    const itemNumbers = items.map((index) => {
        if (!index) return 1;
        if (index < 3) return 2;
        if (index < 5) return 3;
        if (index < 9) return 4;
        return 5;
    });
    const itemTitles = items.map((index) => {
        if (!index) return `V04`;
        if (index === 1) return `V08`;
        if (index === 2) return `V14`;
        if (index === 3) return `V22`;
        if (index === 4) return `V30`;
        if (index === 5) return `V38`;
        if (index === 6) return `V46`;
        if (index === 7) return `V54`;
        if (index === 8) return `V62`;
        if (index === 9) return `SVIP`;
        if (index === 10) return `SV09`;
        if (index === 11) return `SV17`;
        if (index === 12) return `SV25`;
        if (index === 13) return `SV33`;
        return `SV41`;
    });
    const milestones = [1, 4, 8, 14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94, 102, 110];
    $: isHovering = {};
   
    $: progressPercent = 0;
    $: milestoneIndex = 0;

    $: {
        const vipLevel = $vipProfiile.vip_level;
        milestoneIndex = milestones.findIndex((m, i) => m >= vipLevel || milestones[i + 1] > vipLevel );
        const upperLimitIndex = (milestones[milestoneIndex] !== vipLevel && milestones.findIndex(m => vipLevel < m )) || milestoneIndex;
        const percentageOffset = milestoneIndex !== upperLimitIndex ? (((vipLevel - milestones[milestoneIndex]) / (milestones[upperLimitIndex] - milestones[milestoneIndex]) * 100) / milestones.length) : 0;
        progressPercent = Math.max(0, Math.floor((milestoneIndex/(milestones.length - 1) * 100) + percentageOffset) - 3.2); // - 3.2 offset centering
        console.log('Percentage ', progressPercent, milestoneIndex)
    }
    

    let scrollContainer;
    let bonusItems;
    $: scrollLeft = 0;
    const handleScrollLeft = () => {
        scrollContainer.scrollTo({
            left: 0,
            behavior: "smooth",
        });
    };

    const handleScrollRight = () => {
        scrollContainer.scrollTo({
            left: scrollContainer.scrollWidth,
            behavior: "smooth",
        });
    };
    let timeout;
    const handleScroll = () => {
        console.log('Scroll ', scrollContainer.offsetLeft, scrollContainer.scrollLeft)
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            scrollLeft = scrollContainer.scrollLeft;
        }, 200);
    };
    onMount(() => {
        const itemWidth = bonusItems.clientWidth / milestones.length;
        const left = Math.floor(((milestones.length) - (scrollContainer.offsetWidth/itemWidth)) * itemWidth) * (((itemWidth * milestoneIndex) / (itemWidth * (milestones.length - 1)) * 100) / 100);
        scrollContainer.scrollTo({
            left,
            behavior: "smooth"
        });
    });
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div
        class="dialog sc-kszsFN jDpeEE vip_xidalog_about"
        style="opacity: 1; width: 782px; height: 582px; margin-top: -291px; margin-left: -391px; transform: scale(1) translateZ(0px);"
    >
        <div class="dialog-head has-close">
            <div class="dialog-title">About VIP Level</div>
        </div>
        <button
            on:click={handleCancel}
            class="sc-ieecCq fLASqZ close-icon dialog-close"
            ><Icon
                src={IoCloseSharp}
                size="23"
                color="rgba(153, 164, 176, 0.6)"
            /></button
        >
        <div
            class="dialog-body no-style sc-kszsFN jDpeEE vip_xidalog_about"
            style="z-index: 2; transform: none;"
        >
            <div
                class="sc-dkPtRN jScFby scroll-view sc-cBIieI gZgzWG vip-level"
            >
                <div class="vip-level-banner">
                    <img
                        class="img-element_a"
                        src="https://static.nanogames.io/assets/element.0de17056.png"
                        alt="element.png"
                    /><img
                        class="img-element_b"
                        src="https://static.nanogames.io/assets/element.0de17056.png"
                        alt="element.png"
                    /><img
                        class="img-element_c"
                        src="https://static.nanogames.io/assets/element.0de17056.png"
                        alt="element.png"
                    />
                    <div class="wager-wrap">
                        <img
                            class="img-tstar"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAiCAMAAADid1KLAAAAllBMVEUAAAAuNDQeICQfISUfICQeICQeISQwMDAeICQfISUfISUgIiYeICQeICQeICQgISYiKC0eICQeICQeICQeICQeICUfIiYgISUiIikfJiciIismJikfICUeISUeICQfISUfICQeICUfISUlJSUgJyoeISQeICQfISUgIyUiJCQeICUhISUgIiYfICUfISQjIykeISQeICRp4GtKAAAAMXRSTlMABfb62NSaCvx1Vj3k3qFPDvHIwq5tSkUlIB0U0Lu1k41+WxsY6s1jLyKHNiemaCypQU1KZQAAAp1JREFUWMPVl9t6qjAQhcNJVERARUQpiuKhamvX+7/c3jW7tiY0YcjV/q/nWy4Xk8mEiVyHzJBtbqpQ6UvGHjPDCnuGCov+UF8CwziPcJZmCmN4+hJ4ZmG6wNpI4dUBhvoSszi3AOydiUIPgKcvQcEMcAGzOHPnUyHSlyAyCxOwa7MwgUJfggPrjMcVNp0Flg5XiPQlmLOODMGxV10V1uAc9CWYGIRpFufOgSaq5dzGF+nC6jCLroOHgJ11Oe3+6e2hcLgIX6QOjueZZ+MJxy3XaZZbrfy9ztN1GfafFWxvdj4GdTt/t2jQm47wTDIZV9tL/FkwKAR/otuepfE4dh2VQnJIdafmZQQV+2nA4gmUjK5Mw22vVpj62inWhwLe6PEUCsJXpuWqDOPF1ysMld/jzPviReEyb7XSKHyWfhuFSOGzYkzj01223BbC3xRmLSfG/NcTMvg+BeUvLuvWd0dIcymT2SqXHGuGBryaMJbdJoU3wvQNGn2mz1PlAxIF6cKrPVlhTLojgkRWeBdq5DzdmJFYhVKWjMalL7sU2UCAfK8X8iChEUMkk2qk055Qb3Spt0qiQqA8Pxz5KiE+vK7y0GU03uXmljoLEnPqqinhU1dNbeMFTROLRCUrXGgK8q1tiyUpvuh/J05iJgngSFPYywp58ysI02DxgU4vIvffT4zzbNJpha/BSarVcQRO1Bh4ce/HUyklrsfiEcxu903C48sRSSHjv7pZfaql+8bGSwC4w0en3l0vGIHT3dejG7chgBFF4N53Tm/3NUSrRL4hdn81j9bPjeUARMQH+iT7me77CIiJD/SPn8msNjYKIfD9wBcHjFsxAmdP/Ff+IAkoCpPyJO4zPdt6Xhjjhm67kT560+2XmyosfPY/8QcORQi28vufLwAAAABJRU5ErkJggg=="
                            alt=""
                        />
                        <div class="ribbon">
                            Wager <span class="cl-primary">1 USD</span> Get<span
                                class="cl-primary">1 XP</span
                            >
                        </div>
                        <div style="font-size: 14px;" class="wager-desc">
                            All wagers are converted to USD at the current rate
                        </div>
                    </div>
                </div>
                <div class="sc-wkwDy faOyUB vip-bonus">
                    <div class="vip-bonus-title">
                        <img
                            class="img-star"
                            src="https://static.nanogames.io/assets/star.34db71a0.png"
                            alt=""
                        /><span class="vip-bonus-subtit">Whole VIP Bonus</span
                        ><img
                            class="img-star"
                            src="https://static.nanogames.io/assets/star.34db71a0.png"
                            alt=""
                        />
                    </div>
                    <div
                        style="z-index: 60;"
                        on:click={handleScrollLeft}
                        class="tag t-left {scrollLeft === 0 ? 'disabled' : ''}"
                    >
                        <img
                            alt=""
                            class="tag-img"
                            src="https://static.nanogames.io/assets/black.23aef3cd.svg"
                        /><img
                            alt=""
                            class="hover-img"
                            src="https://static.nanogames.io/assets/black_hover.5b276789.svg"
                        />
                    </div>
                    <div
                        style="z-index: 60;"
                        on:click={handleScrollRight}
                        class="tag t-right {scrollLeft >= 379
                            ? 'disabled'
                            : ''}"
                    >
                        <img
                            alt=""
                            class="tag-img"
                            src="https://static.nanogames.io/assets/black.23aef3cd.svg"
                        /><img
                            alt=""
                            class="hover-img"
                            src="https://static.nanogames.io/assets/black_hover.5b276789.svg"
                        />
                    </div>
                    <div
                        on:scroll={handleScroll}
                        bind:this={scrollContainer}
                        class="bp-wrap"
                    >
                        <div class="bp-scroll">
                            <div class="sc-eoHXOn inWmVI vip-bonus-list">
                                <div bind:this={bonusItems} class="vip-bonus-wrap">
                                    {#each items as item (item)}
                                        <div
                                            on:pointerleave={() =>
                                                (isHovering[item] = false)}
                                            on:pointerenter={() =>
                                                (isHovering[item] = true)}
                                            class="vip-bonus-item tr_{itemNumbers[
                                                item
                                            ]} tr_near {isHovering[item]
                                                ? 'tr_active'
                                                : ''}"
                                        >
                                            <div class="hover-ani-tr">
                                                <div
                                                    class={itemNumbers[item] ===
                                                    5
                                                        ? "svip-bs-title vip-bs-title"
                                                        : "vip-bs-title"}
                                                >
                                                    {#if itemNumbers[item] === 5}
                                                        <img
                                                            class="svip-img"
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg=="
                                                            alt=""
                                                        />
                                                    {/if}
                                                    {itemTitles[item]}
                                                </div>
                                                <div
                                                    class="vip-bonus-bar"
                                                ></div>
                                                {#if !isHovering[item]}
                                                    {#if !item || itemNumbers[item] === 5}
                                                        <div
                                                            class="light-img {itemNumbers[
                                                                item
                                                            ] === 5
                                                                ? 'light-svip'
                                                                : ''}"
                                                        >
                                                            <img
                                                                src="https://static.nanogames.io/assets/{itemNumbers[
                                                                    item
                                                                ] === 5
                                                                    ? 'sf_svip.9f5e5bfb'
                                                                    : 'sf.975597ba'}.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                    {/if}
                                                    {#if itemNumbers[item] !== 5}
                                                        <img
                                                            alt=""
                                                            class="botl-img"
                                                            src="https://static.nanogames.io/assets/bot.233a43f2.png"
                                                        />
                                                    {/if}
                                                    <img
                                                        class="tr-img"
                                                        src="https://static.nanogames.io/assets/{itemNumbers[
                                                            item
                                                        ] === 5
                                                            ? 'dtr_h.af82116b'
                                                            : 'dtr.1f911215'}.png"
                                                        alt="tr.png"
                                                    />
                                                {:else}
                                                    <div
                                                        style="display:none"
                                                    ></div>
                                                    {#if itemNumbers[item] === 1}
                                                        <img
                                                            alt=""
                                                            class="botl-img cl-botl-img"
                                                            src="https://static.nanogames.io/assets/b_light.ca24c72d.png"
                                                        />
                                                        <img
                                                            class="tr-img"
                                                            src="https://static.nanogames.io/assets/b_tr.479e7048.png"
                                                            alt="tr.png"
                                                        />
                                                    {:else if itemNumbers[item] === 2}
                                                        <img
                                                            alt=""
                                                            class="botl-img cl-botl-img"
                                                            src="https://static.nanogames.io/assets/s_light.5d77359c.png"
                                                        />
                                                        <img
                                                            class="tr-img"
                                                            src="https://static.nanogames.io/assets/s_tr.3d163d1e.png"
                                                            alt="tr.png"
                                                        />
                                                    {:else if itemNumbers[item] === 3}
                                                        <img
                                                            alt=""
                                                            class="botl-img cl-botl-img"
                                                            src="https://static.nanogames.io/assets/g_light.c612be56.png"
                                                        />
                                                        <img
                                                            class="tr-img"
                                                            src="https://static.nanogames.io/assets/g_tr.0da7a354.png"
                                                            alt="tr.png"
                                                        />
                                                    {:else if itemNumbers[item] === 4}
                                                        <img
                                                            alt=""
                                                            class="botl-img cl-botl-img"
                                                            src="https://static.nanogames.io/assets/p_light.bfed8834.png"
                                                        />
                                                        <img
                                                            class="tr-img"
                                                            src="https://static.nanogames.io/assets/p_tr.836e3e07.png"
                                                            alt="tr.png"
                                                        />
                                                    {:else}
                                                        <div
                                                            class="light-img light-svip ani-svip"
                                                        >
                                                            <img
                                                                src="https://static.nanogames.io/assets/sf_svip_h.6054fdef.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <img
                                                            alt=""
                                                            class="botl-img cl-botl-img"
                                                            src="https://static.nanogames.io/assets/d_light.b4fb91f4.png"
                                                        />
                                                        <img
                                                            class="tr-img"
                                                            src="https://static.nanogames.io/assets/d_tr.58dc8454.png"
                                                            alt="tr.png"
                                                        />
                                                    {/if}
                                                {/if}

                                                {#if isHovering[item]}
                                                    <div class="star-wrap">
                                                        <img
                                                            class="star-img star-b"
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAMAAABMOI/cAAAAdVBMVEUAAAD////19v35+v/////29/32+f/39//29/z19/z2+P329v329/329/329/z29vz29/329/339/339/z29vz3+P/4+P/2+P/2///////////29/319v329/329/329/329v319/339/z4+P/39//39//19v1SziwVAAAAJnRSTlMAA88wB/hTPr22i+Xh3cSzmYZ2X1hNRTcbFA3z7dipppOAYichIAfBAI8AAACjSURBVCjPdY9XEoQgEAUHxKxrTpvju/8RV7QsFcb+7C6meLSh74nH8w5CVBwEeeL9FxjYUAIV50UKsLcqjDi2H2IdQvtQiIna8OcMM26735wASynFYtX7hi2yVlo39wtM4shXpLwAFjLyaaTbJzdf1zTX1Qcf2vCTi38KY0g6+5xMHGikIouHDj4R+yQkDgm0bHghEWxwUBCLcDviycRB2P31D/8gGNba/leDAAAAAElFTkSuQmCC"
                                                            alt=""
                                                        /><img
                                                            class="star-img star-g"
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAMAAABMOI/cAAAAb1BMVEUAAAD3yCL3yCL4yCP3yCL3ySP4yST5yiT//2f3yCL2yCL3yCL/zSj/0C//7Dv3yCL3yCP3xyP3xyL4ySP3yCP4ySL6yib6yyT/0CP3yCL3yCL3xyP3xyP4xyL3yCT2ySL2yCP4yST3xyj3zin2xyLIRsPSAAAAJHRSTlMA+u5vtHo4KQL05tMRCgTg2sSMZmRLNTAV2cGgl2ldWVhHIB+n/99CAAAAoElEQVQoz42Q2RKDIAwAgwieeFWrva/8/zeWYmsBw4z7uBvITMBiDwFOoZAntE9wRweBMR0KzBTlH4j0X60ORbr2HD9cVn5gJkSjq1Oh/Vykpau+wT9d+R2WXY4O2dkcbRI1+rA4MW/ujaMPvFyWcLboiFdgIX97av/Cz2ief4HPzYSBPC7Sd7/qMFJBZdgCSYw9HTgr6SCPQKMEBJhgC28NPxRi1y/4cwAAAABJRU5ErkJggg=="
                                                            alt=""
                                                        /><img
                                                            class="star-img star-gm"
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAMAAABMOI/cAAAAb1BMVEUAAAD3yCL3yCL4yCP3yCL3ySP4yST5yiT//2f3yCL2yCL3yCL/zSj/0C//7Dv3yCL3yCP3xyP3xyL4ySP3yCP4ySL6yib6yyT/0CP3yCL3yCL3xyP3xyP4xyL3yCT2ySL2yCP4yST3xyj3zin2xyLIRsPSAAAAJHRSTlMA+u5vtHo4KQL05tMRCgTg2sSMZmRLNTAV2cGgl2ldWVhHIB+n/99CAAAAoElEQVQoz42Q2RKDIAwAgwieeFWrva/8/zeWYmsBw4z7uBvITMBiDwFOoZAntE9wRweBMR0KzBTlH4j0X60ORbr2HD9cVn5gJkSjq1Oh/Vykpau+wT9d+R2WXY4O2dkcbRI1+rA4MW/ujaMPvFyWcLboiFdgIX97av/Cz2ief4HPzYSBPC7Sd7/qMFJBZdgCSYw9HTgr6SCPQKMEBJhgC28NPxRi1y/4cwAAAABJRU5ErkJggg=="
                                                            alt=""
                                                        /><img
                                                            class="star-img star-o"
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAMAAACaYWzBAAAAZlBMVEUAAACRl6mSl6mTl6qSmKurq9WfpbWSl6iRlqmRl6iSl6iRl6mSlqmSl6mXma2ZmaqSl6mSl6mSl6mSmKmTmKqSmKuUmq2ZmaqUna+SlqiRlqmSl6mSl6iSmKmSlqmTlqqTmaqRlqgE5yEmAAAAIXRSTlMA651HPQQI+/basZCDdSUP48C5b1dQKB4c4s+mlpR6Wi1TK/z/AAAAmElEQVQoz3XRWRLCIBBF0WbMPBlj4uzb/yYVSoUKzfm8ryg+miLrRrznMTPcmsxwrviugRc7SKDlel8AwjJDjY8u7R2csuc7UK0UOx3wM6p/NcrloNY+KymwV7XakFlqJKbWv+plEVfx2MLnl9CbgSL2/s3lQjtXeOlJ7Og6d5HZ/TswgxHAnLlHObCDgiSWLRTxJpMZNEXemoYT9pszGGQAAAAASUVORK5CYII="
                                                            alt=""
                                                        />
                                                    </div>
                                                {/if}
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <div
                                class="sc-fSDTwv kTcTWf vip-bonus-progress pr-bronze"
                            >
                                <div class="tri-wrap">
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                    <li
                                        class="tri-top"
                                        style="transform: translate(0px, 0px);"
                                    ></li>
                                </div>
                                <div class="pr-bar">
                                    <div
                                        class="pr-tip"
                                        style="left: {progressPercent}%; opacity: 1; transform: translate(-27px, 0px);"
                                    >
                                        <div class="prompt-wrap">
                                            <div class="pr-num">
                                                V{$vipProfiile.vip_level &&
                                                    $vipProfiile.vip_level}
                                            </div>
                                        </div>
                                        <div class="tri-bot"></div>
                                    </div>
                                    <div
                                        class="pr-progress"
                                        style="width: {progressPercent}%;"
                                    >
                                        <div class="dot-wrap" style="left: {progressPercent}%; transform: translateX(-18px);">
                                            <div class="dot-near">
                                                <div class="dot-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vip-bonus-cont">
                        DOTPLAYPLAY VIP Level System sets 14 VIP Secret
                        Treasures. Although there are rewards for every VIP
                        level, the rewards for 14 secret treasures are
                        exceptionally generous. Rewards increase as the VIP card
                        level climbs. Speed up!
                    </div>
                </div>
                <VipSystem />
            </div>
        </div>
    </div>
</div>

<style>
    .kBjSXI {
        position: fixed;
        z-index: 1000;
        inset: 0px;
        background-color: rgba(0, 0, 0, 0.7);
        filter: none !important;
    }
    .dialog {
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 50%;
        top: 50%;
        width: 464px;
        height: 720px;
        margin: -375px 0px 0px -280px;
        transition-property: width, height, margin-left, margin-top;
        transition-duration: 0.5s;
        border-radius: 1.25rem;
        overflow: hidden;
        background-color: rgb(23, 24, 27);
    }
    .jDpeEE .dialog-head {
        background-color: rgb(23, 24, 27);
        margin: 0px;
        padding: 0px 3.75rem 0px 1.125rem;
    }
    .dialog-head.has-close {
        margin-right: 3.75rem;
    }

    .dialog-head {
        position: relative;
        z-index: 10;
        flex: 0 0 auto;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 3.75rem;
        margin-left: 1.125rem;
        transition: all 0.5s ease 0s;
    }

    .dialog-head .dialog-title {
        font-size: 1rem;
        margin: 0px;
        font-weight: bold;
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(245, 246, 247);
    }

    .fLASqZ {
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 11;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 3.75rem;
        height: 3.75rem;
    }
    .jDpeEE .dialog-body {
        background-color: rgb(23, 24, 27);
    }
    .no-style {
        padding-top: 3.75rem;
        background-color: rgb(23, 24, 27);
    }
    .dialog-body {
        position: absolute;
        inset: 0px;
        display: flex;
        overflow: hidden;
    }
    .dialog-body > div {
        flex: 1 1 0%;
    }
    .jScFby {
        box-sizing: border-box;
        height: 100%;
        overflow-y: auto;
        touch-action: pan-y;
        overscroll-behavior: contain;
    }

    .gZgzWG .vip-level-banner {
        position: relative;
        height: 9.375rem;
    }
    .gZgzWG .vip-level-banner .img-element_a {
        position: absolute;
        width: 3.75rem;
        left: 7.5rem;
        top: 0px;
    }
    .gZgzWG .vip-level-banner .img-element_b {
        position: absolute;
        width: 2.5rem;
        left: 2.5rem;
        top: 5rem;
    }
    .gZgzWG .vip-level-banner .img-element_c {
        position: absolute;
        width: 4.25rem;
        right: 4.25rem;
        top: 3.75rem;
    }
    .gZgzWG .vip-level-banner .wager-wrap {
        width: 23.125rem;
        text-align: center;
        margin: 0px auto;
    }
    .gZgzWG .vip-level-banner .wager-wrap .img-tstar {
        width: 5.25rem;
    }
    .gZgzWG .vip-level-banner .wager-wrap .ribbon {
        width: 100%;
        height: 3.125rem;
        line-height: 3.125rem;
        font-size: 1rem;
        color: rgb(245, 246, 247);
        font-weight: bold;
        margin-top: 0.625rem;
        background: url(https://static.nanogames.io/assets/ribbon.f9e96837.png)
            0% 0% / 100% no-repeat;
    }
    .gZgzWG .vip-level-banner .wager-wrap .ribbon .cl-primary {
        color: rgb(255, 210, 53);
        padding: 0px 0.125rem;
    }
    .cl-primary {
        color: var(--primary-color);
    }
    .gZgzWG .vip-level-banner .wager-wrap .wager-desc {
        margin-top: 1.5rem;
    }
    .faOyUB {
        min-height: 12.5rem;
        padding: 0.625rem;
        background-color: rgba(30, 32, 36, 0.8);
        position: relative;
    }
    .faOyUB .vip-bonus-title {
        height: 1.25rem;
        width: 12.5rem;
        margin: 0.625rem auto 0rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    .faOyUB .vip-bonus-title .img-star {
        width: 1.25rem;
        margin: 0px 0.625rem;
    }
    .faOyUB .vip-bonus-title .vip-bonus-subtit {
        display: inline-block;
        vertical-align: top;
        color: rgb(245, 246, 247);
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: bold;
    }
    .faOyUB .vip-bonus-title .img-star {
        width: 1.25rem;
        margin: 0px 0.625rem;
    }
    .faOyUB .tag {
        position: absolute;
        left: 0px;
        width: 2.125rem;
        height: 2.125rem;
        border-radius: 50%;
        z-index: 10;
        top: 32%;
        cursor: pointer;
        opacity: 1;
    }
    .faOyUB .tag .tag-img {
        opacity: 1;
    }
    .faOyUB .tag img {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease 0s;
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .faOyUB .tag .hover-img {
        opacity: 0;
    }
    .faOyUB .tag img {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease 0s;
        position: absolute;
        left: 0px;
        top: 0px;
    }
    .faOyUB .tag.t-right {
        left: auto;
        right: 0px;
        transform: rotate(180deg);
    }

    .faOyUB .tag.disabled {
        opacity: 0;
    }
    .faOyUB .tag {
        position: absolute;
        left: 0px;
        width: 2.125rem;
        height: 2.125rem;
        border-radius: 50%;
        z-index: 10;
        top: 32%;
        cursor: pointer;
        opacity: 1;
    }
    .faOyUB .bp-wrap {
        width: 100%;
        overflow-x: auto;
        margin-top: 1.5rem;
        position: relative;
    }
    .faOyUB .bp-wrap .bp-scroll {
        width: 150%;
    }
    .inWmVI .vip-bonus-wrap {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 0px 0.125rem;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item {
        width: 4.5rem;
        height: 8.125rem;
        position: relative;
        padding-bottom: 0.625rem;
        overflow: hidden;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item .hover-ani-tr {
        background-image: linear-gradient(rgb(36, 38, 43) 10%, rgb(45, 48, 53)),
            linear-gradient(rgb(31, 43, 52), rgb(37, 51, 62));
        border-radius: 0.1875rem;
        position: absolute;
        inset: 0px 0px 0.625rem;
        text-align: center;
        box-sizing: border-box;
        transition: all 0.2s ease 0s;
    }
    .inWmVI .vip-bonus-wrap .vip-bs-title {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0.375rem;
        color: rgb(245, 246, 247);
        font-size: 0.75rem;
        font-weight: bold;
        z-index: 1;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_1 .vip-bonus-bar {
        background-color: rgb(145, 150, 168);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active.tr_1 .hover-ani-tr {
        background-image: linear-gradient(rgb(121, 142, 156), rgb(57, 82, 102));
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active.tr_2 .hover-ani-tr {
        background-image: linear-gradient(
            rgb(148, 148, 184),
            rgb(139, 153, 162)
        );
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active.tr_3 .hover-ani-tr {
        background-image: linear-gradient(rgb(215, 146, 18), rgb(203, 160, 26));
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active.tr_4 .hover-ani-tr {
        background-image: linear-gradient(rgb(107, 53, 154), rgb(142, 86, 237));
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active.tr_5 .hover-ani-tr {
        background-image: linear-gradient(rgb(55, 29, 47), rgb(86, 44, 74));
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active .hover-ani-tr {
        transition: all 0.4s ease 0s;
    }
    .inWmVI .vip-bonus-wrap .cl-botl-img {
        z-index: 10;
        left: 5%;
        width: 90%;
        bottom: 1.625rem;
    }

    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_2 .vip-bonus-bar {
        background-color: rgb(232, 218, 255);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_3 .vip-bonus-bar {
        background-color: rgb(246, 199, 34);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_4 .vip-bonus-bar {
        background-color: rgb(119, 60, 253);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_5 .vip-bonus-bar {
        background-color: rgb(223, 39, 113);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-bar {
        position: absolute;
        height: 0.9375rem;
        bottom: 0rem;
        left: 0px;
        right: 0px;
        background-color: rgb(41, 55, 67);
        border-bottom-left-radius: 0.1875rem;
        border-bottom-right-radius: 0.1875rem;
        z-index: 8;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_1 .vip-bonus-bar::after {
        border-top-color: rgb(145, 150, 168);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_2 .vip-bonus-bar::after {
        border-top-color: rgb(232, 218, 255);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_3 .vip-bonus-bar::after {
        border-top-color: rgb(246, 199, 34);
    }

    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_4 .vip-bonus-bar::after {
        border-top-color: rgb(119, 60, 253);
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_5 .vip-bonus-bar::after {
        border-top-color: rgb(223, 39, 113);
    }

    .inWmVI .vip-bonus-wrap .vip-bonus-bar::after {
        content: "";
        position: absolute;
        border-width: 0.375rem;
        border-style: solid;
        border-color: rgb(41, 55, 67) transparent transparent;
        border-image: initial;
        left: 50%;
        bottom: 1px;
        transform: translate(-50%, 100%);
    }
    .inWmVI .vip-bonus-wrap .svip-bs-title .svip-img {
        width: 0.875rem;
        display: inline-block;
        vertical-align: top;
        margin: 0.125rem 0.125rem 0px -0.3125rem;
    }
    .inWmVI .vip-bonus-wrap .light-img {
        position: absolute;
        left: 0px;
        top: 1.25rem;
        z-index: 0;
    }
    .inWmVI .vip-bonus-wrap .light-img img {
        width: 100%;
        margin-left: 0%;
    }
    .inWmVI .vip-bonus-wrap .light-svip {
        top: 0px;
        bottom: 0.9375rem;
        overflow: hidden;
    }
    .inWmVI .vip-bonus-wrap .botl-img {
        position: absolute;
        left: 0px;
        width: 85%;
        bottom: 2rem;
    }
    .inWmVI .vip-bonus-wrap .tr-img {
        position: absolute;
        left: 20%;
        width: 60%;
        top: 2.375rem;
        z-index: 8;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active .light-svip img {
        animation: 5s linear 0s infinite normal none running roli;
    }

    .inWmVI .vip-bonus-wrap .light-svip img {
        width: 200%;
        margin-left: -50%;
        margin-top: -20%;
    }
    .inWmVI .vip-bonus-wrap .light-img img {
        width: 100%;
        margin-left: 0%;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active .star-b {
        animation: 0.15s ease 0s infinite normal none running star_b;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active .star-g {
        animation: 0.2s ease 0s infinite normal none running star_b;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active .star-gm {
        animation: 0.25s ease 0s infinite normal none running star_b;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active .star-o {
        animation: 0.3s ease 0s infinite normal none running star_b;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item.tr_active .star-img {
        opacity: 1;
        transition: all 0.3s ease 0s;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item .star-b {
        left: 11%;
        top: 45%;
        width: 0.75rem;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item .star-g {
        left: 11%;
        top: 20%;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item .star-gm {
        left: 47%;
        top: 30%;
        width: 0.5rem;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item .star-o {
        right: 13%;
        top: 30%;
        width: 0.75rem;
    }
    .inWmVI .vip-bonus-wrap .vip-bonus-item .star-img {
        position: absolute;
        width: 0.9375rem;
        z-index: 11;
        opacity: 0;
    }

    .faOyUB .vip-bonus-progress {
        height: 2rem;
        border-radius: 1rem;
        background-color: rgba(45, 48, 53, 0.5);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px 0.75rem;
    }

    .kTcTWf {
        margin-bottom: 1rem;
        margin-top: 1.25rem;
        height: 0.625rem;
        border-radius: 0.3125rem;
        padding: 0px;
        position: relative;
    }
    .faOyUB .vip-bonus-progress .tri-wrap {
        top: 0px;
    }

    .kTcTWf .tri-wrap {
        position: absolute;
        top: -1rem;
        left: 1.875rem;
        right: 1.875rem;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
    .kTcTWf .tri-top {
        border-width: 0.5rem;
        border-style: solid;
        border-color: transparent transparent rgb(60, 64, 74);
        border-image: initial;
        list-style-type: none;
        margin: 0px;
    }
    .faOyUB .vip-bonus-progress .pr-bar {
        height: 0.5rem;
    }

    .kTcTWf .pr-bar {
        height: 100%;
        width: 100%;
        background-color: rgb(60, 64, 74);
        border-radius: 0.3125rem;
        position: relative;
    }
    .faOyUB .vip-bonus-progress .pr-bar .pr-tip {
        top: -4rem;
    }
    .kTcTWf .pr-tip {
        position: absolute;
        left: 0px;
        top: -3.75rem;
        transform: translateX(-60%);
        z-index: 9;
    }
    .kTcTWf.pr-bronze .pr-bar .pr-tip .prompt-wrap {
        border-color: rgb(145, 150, 168);
    }

    .kTcTWf .pr-tip .prompt-wrap {
        width: 2.8125rem;
        height: 2.8125rem;
        border-radius: 2.8125rem;
        border: 0.25rem solid rgb(145, 150, 168);
        position: relative;
        z-index: 1;
        opacity: 1;
    }
    .kTcTWf .pr-tip .prompt-wrap .pr-num {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        background-color: rgb(26, 27, 30);
        color: rgb(245, 246, 247);
        font-size: 0.75rem;
        font-weight: bold;
    }
    .faOyUB .vip-bonus-progress .pr-bar .pr-tip .tri-bot {
        bottom: -1rem;
    }
    .kTcTWf.pr-bronze .pr-bar .pr-tip .tri-bot {
        border-top-color: rgb(145, 150, 168);
    }
    .kTcTWf .pr-tip .tri-bot {
        border-width: 0.625rem 0.3125rem;
        border-style: solid;
        border-color: rgb(145, 150, 168) transparent transparent;
        position: absolute;
        bottom: -1.0625rem;
        left: 1.0625rem;
    }
    .faOyUB .vip-bonus-progress .pr-bar .pr-tip .tri-bot {
        bottom: -1rem;
    }
    .kTcTWf.pr-bronze .pr-bar .pr-tip .tri-bot {
        border-top-color: rgb(145, 150, 168);
    }
    .kTcTWf .pr-tip .tri-bot {
        border-width: 0.625rem 0.3125rem;
        border-style: solid;
        border-color: rgb(145, 150, 168) transparent transparent;
        position: absolute;
        bottom: -1.0625rem;
        left: 1.0625rem;
    }
    .faOyUB .vip-bonus-progress .pr-bar .pr-progress .dot-wrap {
        width: 1.5625rem;
        height: 1.5625rem;
        padding: 0.3125rem;
    }
    .kTcTWf.pr-bronze .pr-bar .dot-wrap {
        background-color: rgba(145, 150, 168, 0.2);
    }
    .kTcTWf .pr-bar .dot-wrap {
        position: absolute;
        right: -0.5625rem;
        top: -0.5625rem;
        border-radius: 50%;
        width: 1.75rem;
        height: 1.75rem;
        padding: 0.3125rem;
        box-sizing: border-box;
    }
    .faOyUB .vip-bonus-progress .pr-bar .pr-progress .dot-wrap .dot-near {
        width: 0.9375rem;
        height: 0.9375rem;
        padding: 0.1875rem;
    }

    .kTcTWf.pr-bronze .pr-bar .dot-near {
        background-color: rgba(145, 150, 168, 0.2);
    }
    .kTcTWf .pr-bar .dot-near {
        width: 1.125rem;
        height: 1.125rem;
        padding: 0.1875rem;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .faOyUB
        .vip-bonus-progress
        .pr-bar
        .pr-progress
        .dot-wrap
        .dot-near
        .dot-icon {
        width: 0.5625rem;
        height: 0.5625rem;
    }

    .kTcTWf.pr-bronze .pr-bar .dot-icon {
        background: rgb(145, 150, 168);
    }
    .kTcTWf .pr-bar .dot-icon {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
    }
    .faOyUB .vip-bonus-cont {
        width: 94%;
        margin: 1.25rem auto 0.75rem;
        text-align: center;
        font-size: 0.75rem;
    }
    @keyframes star_b {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(0.8);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes roli {
        0% {
            transform: rotate(0deg);
        }

        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
