<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
    import {slide} from "svelte/transition";
    import { vipProfiile } from "../vipstore";

    $: showBronzeCard = false;
    $: showSilverCard = false;
    $: showGoldCard = false;
    $: showPlatinumCard = false;
    $: showDiamondCard = false;

    const bronzeLevels = [1, 100, 200, 1000, 2000, 3000, 4000];
    const silverLevels = [
        5000, 7000, 9000, 11000, 13000, 15000, 17000, 21000, 25000, 29000,
        33000, 37000, 41000, 45000,
    ];
    const goldLevels = [
        49000, 59000, 69000, 79000, 89000, 99000, 109000, 119000, 129000,
        153000, 177000, 201000, 225000, 249000, 273000, 297000,
    ];
    const platinumLevels = [
        321000, 377000, 433000, 489000, 545000, 601000, 657000, 713000, 769000,
        897000, 1025000, 1153000, 1281000, 1409000, 1537000, 1665000, 1793000,
        2081000, 2369000, 2657000, 2945000, 3233000, 3521000, 3809000, 4097000,
        4737000, 5377000, 6017000, 6657000, 7297000, 7937000, 8577000,
    ];
    const diamondLevels = [
        9217000, 10625000, 12033000, 13441000, 14849000, 16257000, 17665000,
        19073000, 20481000, 23553000, 26625000, 29697000, 32769000, 35841000,
        38913000, 41985000, 45057000, 51713000, 58369000, 65025000, 71681000,
        78337000, 84993000, 91649000, 98305000, 112641000, 126977000, 141313000,
        155649000, 169985000, 184321000, 198657000, 212993000,
    ];
</script>

<div class="vip-system">
    <div class="vip-system-title">VIP Level System</div>

    <div class="sc-iLOkMM bHtipE vip-system-list">

        <div on:click={() => (showBronzeCard = !showBronzeCard)} class="vip-system-bar {showBronzeCard ? "expanded" : ""}">
            <div class="bar-cont">
                <img
                    class="level-icon"
                    alt="level"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAAQlBMVEUAAACRl6mSl6mSl6mSl6mUmaySm62iorqRlqiRlqmSl6iRl6iRl6mSmKmUl6qTl6uVnrCZmbOSlqiSlqiTmKqRlqgutlzcAAAAFXRSTlMA5vfupi0cBdHDvrOVg1FAHRTUcG8w9x3IAAAAbUlEQVQ4y73VNw4AMQhE0e913Bx9/6tuST+WoH+SZWCAkkKXaoESu1gPJNVOGYKKP0C1KzoO9wA+0fGOjueq43ih4wMdb+i4VR1PGXdsz/b/MGuV/5DYePovhq2kfxhYDAVVvwxGrx76jaFz8wPmT3yQuvIhVwAAAABJRU5ErkJggg=="
                />
                <div class="bar-tit">Bronze Card</div>
            </div>
            <button>
                <Icon
                    src={RiSystemArrowRightSLine}
                    size="25"
                    color="rgba(153, 164, 176, 0.6)"
                    className="custom-icon"
                    title="arror"
                />
            </button>
        </div>

        {#if showBronzeCard}
            <div transition:slide={{ duration: 300 }} class="sc-hKwDye fclMSM v-toggle-view">
                <div class="v-table-wrap">
                    <div class=" Bronze-list v-table">
                        <div class="v-thead">
                            <div class="v-tr">
                                <div class="v-th width_1 align-left">Level</div>
                                <div class="v-th width_2 align-center">
                                    XP Amount
                                </div>
                                <div class="v-th width_2 align-center">
                                    XP Progress Bar
                                </div>
                                <div
                                    class="v-th width_1 m-align-center align-center"
                                >
                                    Star
                                </div>
                                <div
                                    class="v-th width_1 width_m_1 m-align-center align-right"
                                >
                                    Bonus
                                </div>
                            </div>
                        </div>

                        <div class="v-tbody">
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 01
                                    </div>
                                    <div
                                        class="next-active align-center v-td width_2"
                                    >
                                        1
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl m-next-bar xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 12.6667px;"
                                            >
                                                <div
                                                    class="pr-completing"
                                                    style="width: 0%;"
                                                ></div>
                                            </div>
                                            {#if $vipProfiile.total_wagered > bronzeLevels[0]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/bronzeLevels[0] * 100 )}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_1"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/bh.d27abdd5.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img near"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb_r.b43f1e03.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div class="align-left tlevel v-td width_1 level-td">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 02
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        100
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 13.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > bronzeLevels[1]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                             {:else if $vipProfiile.total_wagered < bronzeLevels[1]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/bronzeLevels[1] * 100 )}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_1"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/bh.d27abdd5.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 03
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        200
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 14px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > bronzeLevels[2]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < bronzeLevels[2]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/bronzeLevels[2] * 100 )}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_1"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/bh.d27abdd5.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 04
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 14.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > bronzeLevels[3]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < bronzeLevels[3]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/bronzeLevels[3] * 100 )}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_2"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/b.d9e6b0ec.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 05
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        2000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 15.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > bronzeLevels[4]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < bronzeLevels[4]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/bronzeLevels[4] * 100 )}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_2"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/b.d9e6b0ec.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 06
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        3000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 16px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > bronzeLevels[5]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < bronzeLevels[5]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/bronzeLevels[5] * 100 )}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_2"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/b.d9e6b0ec.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABAlBMVEUAAACRlqmSl6iSlqiSl6mNlqOTk6aSqqq/v7+Sl6iRlqiSl6l3fY2Rl6mSl6mTmKqSl6mTmKuTmaqVmayJjp94fox4fo2Slql3fo2Rl6l4fY2Rlql4foySl6l3fo2Slqh4f42SlqiSmKl5f4ySlqmTl6p4fo55fo14fo16foySmqp3go719vza3eaRlqh3fYy3u8nEyNTy8/rw8fjY2+XJzNeZnq+UmauSl6mPlKbz9Pvs7vXh5Ozc3+jq6/Pn6fHf4erU1uDQ092/w8+qrr2kqLidorOIjZ57gJDl5+7Dx9O1uMahpbWMkqOFi5uBh5d8g5OwtcOvs8HLz9m6v8u6vsuO9w8iAAAALHRSTlMA/N3tMxMNBwT51r6unpduYFEtIxz59fPt5OLPyse6qpGNg4F6eHFnV0c/LQ8iQfIAAAJgSURBVEjHvZbpcqJAFEaJG5poYqLZ933rFkbFIBoXQJJRs2iS93+VkS8MUypI35qqnF/a3Uc9lHiVwijkcgWJRuo0UyplTlMEJZ2Pl0A8nxZ17vZhgP07IaVwjNND0xziwXEhOuYs456saQZjhlZzH2fOItLyu3h1tcFAQ8XT3fwCJXGIM3aT+TRtLB0mQpRiTnf3nS6bouu4q3quGKDIl9vu5kO/zGYo9x/cne1LedZZj5VcBi0WQGuAzdj6lLKxgtVeh4XQ6eHAyoavJFeXcJlNtgATl39pNQklvRZHjFVhC6lYSIuvpSeXeRlvPGqzSNojHF1OSDHEcCYER1pMmuTomsEEMTR9EuZKKhOnMvKkX8JK+TdXqVKbc6rUeORUqdLknCQhBlCk1iOnSo0OBwQJMTTJQAxFQgxRQgxRKiOGJBltDggSYohSBTEUCTE0CTE0CTcAUUIMTcINQJUQQ5EQQ5RwA9AkxBAlFd8ZQcaepH9WRZXqJ36WMQAcTczRHAyAv6PGNqMV0/ZGjT/U9EE14pMNdG+oTY1Pa5Fj+eNzZlAPtdCYoTeog/4S2N0gpWvP/yUA8kUd81qtzsWomND1C1ma5/mphLT+tNOvYfnpWQpCUd5fsN/7+Kd89LD08q4owdKEtzrOjLtezBhP62+KEiaB1++0r+ok5us75hUbYRLw0hzLcrwYJVry0/wYIQlpfoyghDTXQYywhDTEkCTwQ9LWFlk6uE6lrg8o0s7JvQTuT3YEpaMbWfKRb46ipb3z4ux68XxvkbSZvZUCuc1uhkjZq6QUSvIqK/0ffwATstoHLsI5LgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 07
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        4000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 16.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > bronzeLevels[6]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < bronzeLevels[6]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/bronzeLevels[6]* 100 ) }%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_2"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/b.d9e6b0ec.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <div class="sc-iLOkMM bHtipE vip-system-list">
        <div on:click={() => (showSilverCard = !showSilverCard)} class="vip-system-bar {showSilverCard ? "expanded" : ""}">
            <div class="bar-cont">
                <img
                    class="level-icon"
                    alt="level"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAARVBMVEUAAADp2v/p2//p2v/s3v/t2///6P/p2v/o2v/o2//p2v/p2//o2//p2//q2//p3P/r2//t3P/y5v/o2//o2//o2v/o2v/TCpFOAAAAFnRSTlMA5u6mLRwF0fn1w76zlYNRQB0U1HBvsjt2LAAAAG1JREFUOMu91TkOwDAIRNHveMu+x/c/akr6sQT9kywDA+QYmlQL5KGJ9UBU7ZggqPgDVLui43B34BMd7+h4LjoeLnR8oOMNHdei4ynhju3Z/h9mrfIfEhtP/8WwlfQPA4uhoOqXzujVQ7/SdW5+za2CgnTqU6wAAAAASUVORK5CYII="
                />
                <div class="bar-tit">Silver Card</div>
            </div>
            <button>
                <Icon
                    src={RiSystemArrowRightSLine}
                    size="25"
                    color="rgba(153, 164, 176, 0.6)"
                    className="custom-icon"
                    title="arror"
                />
            </button>
        </div>

        {#if showSilverCard}
            <div transition:slide={{ duration: 400 }} class="sc-hKwDye fclMSM v-toggle-view" style="height: auto;">
                <div class="v-table-wrap">
                    <div class="show Silver-list v-table">
                        <div class="v-thead">
                            <div class="v-tr">
                                <div class="v-th width_1 align-left">Level</div>
                                <div class="v-th width_2 align-center">
                                    XP Amount
                                </div>
                                <div class="v-th width_2 align-center">
                                    XP Progress Bar
                                </div>
                                <div
                                    class="v-th width_1 m-align-center align-center"
                                >
                                    Star
                                </div>
                                <div
                                    class="v-th width_1 width_m_1 m-align-center align-right"
                                >
                                    Bonus
                                </div>
                            </div>
                        </div>
                        <div class="v-tbody">
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 08
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        5000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 17.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[0]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[0]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[0] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_3"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/sh.ddd2bd05.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 09
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        7000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 18px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[1]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[1]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[1] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_3"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/sh.ddd2bd05.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 10
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        9000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 18.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[2]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[2]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[2] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_3"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/sh.ddd2bd05.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 11
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        11000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 19.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[3]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[3]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[3] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_3"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/sh.ddd2bd05.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 12
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        13000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 20px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[4]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[4]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[4] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_3"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/sh.ddd2bd05.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 13
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        15000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 20.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[5]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[5]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[5] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_3"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/sh.ddd2bd05.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 14
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        17000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 21.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[6]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[6]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[6] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 15
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        21000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 22px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[7]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[7]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[7] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 16
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        25000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 22.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[8]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[8]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[8] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 17
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        29000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 23.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[9]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[9]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[9] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 18
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        33000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 24px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[10]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[10]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[10] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 19
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        37000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 24.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[11]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[11]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[11] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 20
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        41000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 25.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[12]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[12]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[12] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAABBVBMVEUAAAC/v+a/v+a/v+bExOvKyvHX1/Wqqu++vua/v+W/v+a/v+a/v+a/v+Z5ebrBwebBwejExOl4eLl4eLi/v+W/v+Z3d7m/v+Z4eLl4eLi/v+W/v+a+vuV3d7l3d7m/v+a/v+Z4eLm/v+Z5ebq+vua/v+bAwOa/v+Z4eLl4eLt6eru+vufAwOd3d7t7e72AgL+AgMjj4//T0/u+vuV3d7jJyfDS0vPg4P7f3/3GxuvY2Pzi4v7c3P3V1fvR0fnMzO7CwunS0vvDw+ja2vjOzvbLy/PGxu27u+O2tuCwsNyentGSksmHh8N/f717e7vc3PrX1/bV1fXPz/Gnp9ajo9ScnM+Cgr9z50jhAAAAMXRSTlMA++DNJxEIBf3u1peObmlRLRz69ffz7eriyse+vbqrqqCRg4F6eGVbV05HPzUtHxQOLDsmnQAAAjRJREFUSMe9lmdTwjAYgFNBcCAy3HvvlSZtqVVw4UBxy///Kdq8yHtAmnHe+XwqJc+RJ/TuLUkinculiR2DOYcxJzdo42xNM8H0lrGyn2IdUvtGSnFZrL7y/StxsVzUKpm1CbHUjyiNfHE5sZZRO9sDYl2tQgWVmvg4sK1QDubEmvCFdngJxa25g6SYFYh5pV28QtpKURazOQkxAe0hgLTJzb60cYzpBdPGu5TCAsRc0wSuIW2hgM/M6JCIeaMK3kTa0Cg8WdmxYRbzjjFSgnexbHgsS0h6RBqjSBtJk5QsRp2WIk58zNSY+PidWKpRc4KwLfnmyqnrWUrRmevaSpVz11jCnbmWUgSKmYQxxhLGmEsYYyyhYiud4c70EsZoJM3O9BIcs62Eil7CGK2kjdFLuDO9hDuzlQJU9BLGGEv4z1hJEGMnwc4spQgUG6mGMXrCtsQ81+aHmAMD4OLGTLm5gAHQHjVhVa9Uw/aowaHmXaqVSw+HGo5PVlc5dYbjEyjMM0hTx7D5guyV4LYqjbnteyUAMht3mCaLuduQvVc1P2GP9Z4Y2Nlnk8jg/OkBj7/7mB+eOJdLPzzeYxrG3D9yrpD489dvGsZ8PfNkCWh+QJrnQcxHk3Ot1EnrxBhImAYxRhKkNWKnATE6CWk1Gi3OjSXkn6Ry2VqazZ+c5GdtpKnVQ7h1uDplKC3uZPFmdmdRL82sH/XeP1qfSZbKvLS0R6TsLZV4SfrNbv6YJHKc3yV/4xv1MQg021JKJgAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 21
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        45000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 26px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > silverLevels[13]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                                {:else if $vipProfiile.total_wagered < silverLevels[13]}
                                             <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/silverLevels[13] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_4"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/s.7c2e9f37.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <div class="sc-iLOkMM bHtipE vip-system-list">
        <div on:click={() => (showGoldCard = !showGoldCard)} class="vip-system-bar  {showGoldCard ? "expanded" : ""}">
            <div class="bar-cont">
                <img
                    class="level-icon"
                    alt="level"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAAQlBMVEUAAAD2yCL8ySP3yCL2xyL3yCP/6Eb2yCL3yCL3yCP2xyL2yCL3yCP5ySP3xyT6zCT5xyX/zCb3yCP4yCL4yCL2xyLHt9P4AAAAFXRSTlMA5hz37qYF0cO+s5WDUUAxKRTUcG+mdP/DAAAAbElEQVQ4y73VNw4AMQhE0e+8Ofv+V92SfixB/yTLwACxhC7VDDF3sR4oqk0nBBV/gGoXdBzuAXyg4w0dT1XHOaLjHR2v6LhVHacLd2zP9v8wa5X/kNh4+i+GraR/GFgMBVW/DEavHvqNoXPzA8N3fIX8NYkoAAAAAElFTkSuQmCC"
                />
                <div class="bar-tit">Gold Card</div>
            </div>
            <button >
                <Icon
                    src={RiSystemArrowRightSLine}
                    size="25"
                    color="rgba(153, 164, 176, 0.6)"
                    className="custom-icon"
                    title="arror"
                />
            </button>
        </div>
        {#if showGoldCard}
            <div transition:slide={{ duration: 600 }} class="sc-hKwDye fclMSM v-toggle-view" style="height: auto;">
                <div class="v-table-wrap">
                    <div class=" Gold-list v-table">
                        <div class="v-thead">
                            <div class="v-tr">
                                <div class="v-th width_1 align-left">Level</div>
                                <div class="v-th width_2 align-center">
                                    XP Amount
                                </div>
                                <div class="v-th width_2 align-center">
                                    XP Progress Bar
                                </div>
                                <div
                                    class="v-th width_1 m-align-center align-center"
                                >
                                    Star
                                </div>
                                <div
                                    class="v-th width_1 width_m_1 m-align-center align-right"
                                >
                                    Bonus
                                </div>
                            </div>
                        </div>
                        <div class="v-tbody">
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 22
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        49000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 26.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[0]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[0] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 23
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        59000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 27.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[1]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[1] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 24
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        69000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 28px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[2]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[2] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 25
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        79000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 28.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[3]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[3] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 26
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        89000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 29.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[4]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[4] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 27
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        99000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 30px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[5]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[5] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 28
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        109000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 30.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[6]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[6] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 29
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        119000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 31.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[7]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[7] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_5"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/gh.d5753240.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 30
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        129000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 32px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[8]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[8] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 31
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        153000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 32.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[9]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[9] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 32
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        177000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 33.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[10]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[10] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 33
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        201000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 34px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[11]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[11] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 34
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        225000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 34.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[12]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[12] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 35
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        249000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 35.3333px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[13]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[13] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 36
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        273000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 36px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[14]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[14] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA/FBMVEUAAADomTLNdgrnmTHrnTTllinmky30qj3omjLomjHomjHnmjLnmTLnmjLomjLomjLomjPpmzLomTPbiSD/v0DNdwzMdQvomTHMdQromjHNdQromjLomTLomjLMdgvMdgrnmTLnmTHMdgvomjPOdwzomjLpmjLNdQzPdg3NdwvrmjXsmjXMdwvvnDHMdgz/uVz6qT3nmTHMdQryoTfzqUf+uFromjL9tlb9sk32pTrunzXrnDL8r0j7rEP6qz/5slLzqkfvpD/4qDzqnTXklCvciiDQexDOdwz9tFL3r03soTrrnzjgjybXgxj0q0n0q0jwpUL6qDzaiB7TfhQOVPg2AAAAL3RSTlMA+/jtJxMNB/z13tbMl455blEtHARo7eTiz8rHvr26q6qgkYOBZVtXTkc/NS0fbhGfZo0AAAJISURBVEjHvZZpU+owFIbLrqgoIO77vt42KaUXuFeLWHFf//9/MZ7WRjmhJxlnfD8w0PaB98mEObFGJV+p5C2zFCsZxjKVogmzm2OQ3K42crTIkiweaSGnG/D03ePjHbzZOKVltseZSOvJs23vqcVExrcJtb15+PZnz4Z4z/Bxfi8FOV6GZ27P7STnt3Bp+XgEUt+ENv0b+1tu+tB3s65AStORTODZQ/GCSG26NMxUy1Cj59uK+D24Wa5+Q2qrUgZHqq3WEqQwNaaSUamNTRUAmZ3JgUxzSAapNUEtNzMrdvOEUiZFbSJvTcKewTJqNdhZk1ZGvMplpuIF4vHMB9Sz9eN3YijQRrx/jhtDTV3kr+OYQtdnjink/xcEgigZB0GUDDQzgq6hGYJoGQwRMiSEZWgIyxhCPjQjILxnTCEkgyBimWkILzMNYRkagj+APoRlaAjL0BCWoSEsQ0NYhoYCLENDPbln6HRiiLmOyQ8JCAZAt62HtLswAD5HTeeCRi468ahJhhpz6WbJUJPjs+WmIi05PqPUVhhWwzJspYaOBKCWIlOu4sMHizq+DCMvUTMmDh84g1B2xM3CgaUK51f3cL/f/oL04dL9FedqSOThUqpJmcsHzlMgPnhlcvljmdcBT4eSjl3X7SbNKEjkLeoYNXvjXAeSaiCjB4FaGC0z14dALQxBhoJQfgnKZo2hpUax2Fgygea2TizIydacJrS2X5IXS/trNLSwg0769Z2F0VCWZ9cPLWUO18VN5Z2DPwVrZAqNA+tneQfsvPSvf+pybwAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 37
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        297000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 36.6667px;"
                                            ></div>
                                            {#if $vipProfiile.total_wagered > goldLevels[15]}
                                                <div class="xp-pr-nocomplete">
                                                    Completed
                                                </div>
                                            {:else}
                                                <div class="xp-pr-nextlv">
                                                    <div class="xp-diff">{Math.floor($vipProfiile.total_wagered)} XP</div>
                                                    <div class="xp-percent">{Math.round(Math.floor($vipProfiile.total_wagered)/goldLevels[15] * 100)}%</div>
                                                </div>
                                            {/if}
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_6"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/g.d9fc75c0.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <div class="sc-iLOkMM bHtipE vip-system-list">
        <div on:click={() => (showPlatinumCard = !showPlatinumCard)} class="vip-system-bar {showPlatinumCard ? "expanded" : ""}">
            <div class="bar-cont">
                <img
                    class="level-icon"
                    alt="level"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAARVBMVEUAAAB4PP53PP54Pf16Pf+AQP+MRv94Pf54PP54PP53PP53PP54Pf54Pv14PP14P/94QP97Pv+AQP93PP55Pf93Pv93PP2cgJ0HAAAAFnRSTlMA5u6mLRwF0fn1w76zlYNRQB0U1HBvsjt2LAAAAG1JREFUOMu91TkOwDAIRNHveMu+x/c/akr6sQT9kywDA+QYmlQL5KGJ9UBU7ZggqPgDVLui43B34BMd7+h4LjoeLnR8oOMNHdei4ynhju3Z/h9mrfIfEhtP/8WwlfQPA4uhoOqXzujVQ7/SdW5+za2CgnTqU6wAAAAASUVORK5CYII="
                />
                <div class="bar-tit">Platinum Card</div>
            </div>
            <button >
                <Icon
                    src={RiSystemArrowRightSLine}
                    size="25"
                    color="rgba(153, 164, 176, 0.6)"
                    className="custom-icon"
                    title="arror"
                />
            </button>
        </div>

        {#if showPlatinumCard}
            <div transition:slide={{ duration: 800 }} class="sc-hKwDye fclMSM v-toggle-view" style="height: auto;">
                <div class="v-table-wrap">
                    <div class=" Platinum-list v-table">
                        <div class="v-thead">
                            <div class="v-tr">
                                <div class="v-th width_1 align-left">Level</div>
                                <div class="v-th width_2 align-center">
                                    XP Amount
                                </div>
                                <div class="v-th width_2 align-center">
                                    XP Progress Bar
                                </div>
                                <div
                                    class="v-th width_1 m-align-center align-center"
                                >
                                    Star
                                </div>
                                <div
                                    class="v-th width_1 width_m_1 m-align-center align-right"
                                >
                                    Bonus
                                </div>
                            </div>
                        </div>
                        <div class="v-tbody">
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 38
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        321000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 37.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 39
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        377000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 38px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 40
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        433000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 38.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 41
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        489000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 39.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 42
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        545000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 40px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 43
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        601000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 40.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 44
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        657000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 41.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 45
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        713000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 42px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_7"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 46
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        769000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 42.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 47
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        897000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 43.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 48
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1025000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 44px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 49
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1153000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 44.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 50
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1281000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 45.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 51
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1409000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 46px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 52
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1537000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 46.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 53
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1665000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 47.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_8"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 54
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        1793000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 48px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 55
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        2081000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 48.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 56
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        2369000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 49.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 57
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        2657000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 50px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 58
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        2945000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 50.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 59
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        3233000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 51.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 60
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        3521000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 52px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 61
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        3809000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 52.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_9"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/ph.7f694585.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 62
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        4097000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 53.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 63
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        4737000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 54px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 64
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        5377000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 54.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 65
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        6017000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 55.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 66
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        6657000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 56px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 67
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        7297000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 56.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 68
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        7937000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 57.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAACLVOmITeFsNseLVOmET+OGTeaGYfS/gP+LVemMVemMVOmLVeiMVeiMVOmMVOmMVemMVemNVulvOMiOVeiUXvKLVeiMVeltN8dsNseLVeltNsZsN8dtN8aMVOmMVOltN8eMVuptN8hsN8htNsaNVuiMVOlsOMeOVeuMV+xzQMypdv+ZYPqLVOhsNsaTWvKbZvOncv6MVemlcP2faPyaYfqYXvmQWO+OV+tuOMmibP2ibvqWXfaWYfCQWuyNVut9RtlzO86bY/qdZfufavecZ/SUW/OTXu6IUeWFTeKASdx4QdOH0d1DAAAAK3RSTlMA+yj4yh0NBwTu597WvpeOeW5RSy0T9/Pt4s7KuquqoJGDgWxnZVtXPzUUNmsKxAAAAi5JREFUSMe9l9lWwjAQQEtZFRXFfd/XNCltlUVAcAG3//8fw6R2jiRtOi/eJ07DhdyccqY4abiNhuvQqDQKnBcaFYJSu1zkwOJlLa9zs8cT9m5yKeUjePfTZPIEL47K9pjTLS4JJ0wyCblk69SSdqVihgEDgqFKu8pQbkvwnvc+S+i/w6XSbVrMMeym+8b+8NaF/R6b0qqr27DYYhot+LDt1eq806yrmIgZiFRavflH2VhWxwwxJvrq+Jc3EmVzpWCKMaUVVjZBqa0tqJiAZRKotIW1mrybl9QxR8xKpI5/yXVKppjstJIzy2mx3LRmYTNpyPITdUCifFFw7/lU6fHBo0rRi+cRpeBVGhQJYjyaBDFECWJoEsTQJIihShijS/YYu4Q7o0qo2CWMoUoYY5f0GLuEO6NKESgkKcJ7xi5hDE2CGKIEx0yT4AdAkyCGKA0xxk4nlrjvUb5ISjAARoN8ymCkBkA8ajptu9LuxKMmGWrcb1sUnydDDcdnOM1ypmE8PucHdXeQGtPFQY0065iWFlNv6g8fsBD6uuOHsCQfPnR6X7A2ms7FjODyV88xIcTzZ5ymxXw+C2GWJN8fmIYxH99CZEiiN/5Nw5hxT2RIwG+a78cxoFikJC2JySNhGsTklCANY+wS7nE8xp3ZJeSfpGKRLO1fVCoX+xRp58RVl9yTnZzSwXUVL1avD+zS7llZ+2dwtpsuFUXxcN0xsn4oF80r53dOKnfn2ucR+QEO88rujJWX0gAAAABJRU5ErkJggg=="
                                            alt=""
                                        />VIP 69
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        8577000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 58px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_10"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/p.47604fa2.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <div class="sc-iLOkMM bHtipE vip-system-list">
        <div on:click={() => (showDiamondCard = !showDiamondCard)} class="vip-system-bar {showDiamondCard ? "expanded" : ""}">
            <div class="bar-cont">
                <img
                    class="level-icon"
                    alt="level"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAMAAAAKjix2AAAAP1BMVEUAAADlLXXgKHHgKHHgJ3HgJ3LgKHLgKnXgKHLgKHLgKHLgKHLgJ3PgKHLgKHLgKXHfKHTmM3PfQID/VarfJ3H7XQIuAAAAFHRSTlMAHPfm0sGmLe7t5bOVg29RQBQIAygTo0MAAABrSURBVDjLvdU3DgAxCETR73XaHH3/s25JP0jQP8kyMEBqeUhVIS1DrAJNtVOHrOITUO2GjtfHgW90fKDj+ul4Tuj4Qsc7Oi6vjqdOOLZnx3+YtSp8SGw8wxfDVjI+DCyGXAHoil5f6LvOzQ9Ptna/Nqi4JgAAAABJRU5ErkJggg=="
                />
                <div class="bar-tit">Diamond Card</div>
                <div class="bar-svip">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg=="
                        alt=""
                    />SVIP
                </div>
            </div>
            <button >
                <Icon
                    src={RiSystemArrowRightSLine}
                    size="25"
                    color="rgba(153, 164, 176, 0.6)"
                    className="custom-icon"
                    title="arror"
                />
            </button>
        </div>

        {#if showDiamondCard}
            <div transition:slide={{ duration: 900 }} class="sc-hKwDye fclMSM v-toggle-view" style="height: auto;">
                <div class="v-table-wrap">
                    <div class=" Diamond-list v-table">
                        <div class="v-thead">
                            <div class="v-tr">
                                <div class="v-th width_1 align-left">Level</div>
                                <div class="v-th width_2 align-center">
                                    XP Amount
                                </div>
                                <div class="v-th width_2 align-center">
                                    XP Progress Bar
                                </div>
                                <div
                                    class="v-th width_1 m-align-center align-center"
                                >
                                    Star
                                </div>
                                <div
                                    class="v-th width_1 width_m_1 m-align-center align-right"
                                >
                                    Bonus
                                </div>
                            </div>
                        </div>
                        <div class="v-tbody">
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 1
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        9217000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 58.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 2
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        10625000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 59.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 3
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        12033000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 60px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 4
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        13441000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 60.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 5
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        14849000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 61.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 6
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        16257000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 62px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 7
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        17665000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 62.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 8
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        19073000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 63.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 9
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        20481000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 64px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 10
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        23553000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 64.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 11
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        26625000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 65.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 12
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        29697000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 66px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 13
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        32769000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 66.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 14
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        35841000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 67.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 15
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        38913000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 68px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 16
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        41985000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 68.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 17
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        45057000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 69.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 18
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        51713000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 70px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 19
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        58369000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 70.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 20
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        65025000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 71.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m
                                            _1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 21
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        71681000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 72px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 22
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        78337000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 72.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 23
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        84993000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 73.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 24
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        91649000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 74px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 25
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        98305000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 74.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 26
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        112641000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 75.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 27
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        126977000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 76px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 28
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        141313000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 76.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 29
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        155649000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 77.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 30
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        169985000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 78px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 31
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        184321000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 78.6667px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="  v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 32
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        198657000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 79.3333px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/jb.781d8c60.png"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="highLight v-tr-wrap">
                                <div class="v-tr-item v-tr">
                                    <div
                                        class="align-left tlevel v-td width_1 level-td"
                                    >
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAA5FBMVEUAAADKOFzdPmrLN13LO2K/MlvHOVjAOlnKN1zLOFzLOFzLOF3LN1zLOF3LOF3LOFzMN16iIEPMOF2iIETKOV7MOWCiIUKhIEPLN1yhIEOhIUOiIUPLN13KN12iIUOhIUPLOF3KOFyiIUPKOF2iIkPKN17MOF3NOF3NOFyhIEOkIkT5XITsTXbKN1yhIELcQmriSXD3WYLvUHnQO2DMOF31V3/zVX7xVHzlSnGkIUTXP2brTHXpSnPfRWzaQmjSPWLOOV6pJUfVPmTxUnvpT3XHNVnCMle8LlO4LVGwKUzINlu2LE876TEPAAAAK3RSTlMA/AX6Jx0TDcr17ufe1peOeWlRSzot+vXO7eLKvr26q6qgkYOBb25lW1ct1CytHQAAAkdJREFUSMe9lmdv6jAYRk2YnUCZ3XsmdhJSIGGkwO2g7f//Pzd5QsNtbbCtK/V8QCj2kTiRxWuyily5nCN6FMtZSrPloo5zu0XB1q2yUm/TlHZdScmfYfeT7z/hy1leHnO5QSMmvhnhT2jExqUk7S6JGbsmcMdJ2t26mBL2DPpmSn+AR6X6qphzrHvP5jeePTw+F6UZFcQ8Oq75A9d5RFrF+OnsbdMYu2sK6NpY3N77pjSO8XSGGBH9GTYcN1KlsJsRxYjSMruFJOZmUxwjTtu8idJyOzQm7JlSeiG27uRIG2emYyrRwckqkWz06ZjKONH2LMlQGprquANKM7HkqCt/LFtX6lmWrtTtWLqSC0VP6sPgJFkML8ljeEkew0uSGKnEx0glPkYq8WfGkkp8jK7UtSyJJI2RS4iRS5LXLJMQoyfhzGhKiNGTEKMn4TVrSojRk3BmNKUQMYrMYikbjzJ1x8bfMmaz56gpjocB8DVqZiO5Mpp9jRpiXCdDLRyuV4ZhMtSujX/H52S8zhlPluMzoXFEkeavUnzE0KOG6EowGAljBqIrAS4fH0izh1yMjZiPikF4gjeapnEx9C0gIhibvi6uektlcel7nTImliLeX5Zpy5iXd8bWSCz4pGkaYiI+A7ZGAos0z7a9JAaKRErT0hglCWlpjLLEgnnszAOmLIHpfI5fJpM4fklqtbSlw2qxWD3UkfYvHgh4uNhXlE7uDZJi3J/IpYMr7qafvzpYLbVY87RGhNROm6wpXqkWyEoK1Rr5P/4CrVTKsjnzxjcAAAAASUVORK5CYII="
                                            alt=""
                                        />SVIP 33
                                    </div>
                                    <div class=" align-center v-td width_2">
                                        212993000
                                    </div>
                                    <div class="v-td width_2">
                                        <div
                                            class="sc-gDGHff ezzUcl xp-pr-wrap"
                                        >
                                            <div
                                                class="xp-progress"
                                                style="width: 80px;"
                                            ></div>
                                            <div class="xp-pr-nocomplete">
                                                Not Started
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="flex-center v-td width_1 levelStar-td"
                                    >
                                        <div
                                            class="sc-khQegj fPtvsS levelnums_svip"
                                        >
                                            <img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            /><img
                                                class="img-star"
                                                alt="level-star"
                                                src="https://static.nanogames.io/assets/d.5dbf45cb.png"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        class="align-right jb-img-wrap v-td width_1 m-align-center width_m_1"
                                    >
                                        <img
                                            class="jb-img"
                                            alt=""
                                            src="https://static.nanogames.io/assets/tr.c44e4679.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    <div class="vip-reward">
        <img
            class="img-vipillu"
            src="https://static.nanogames.io/assets/illustration.20a473b8.png"
            alt="vipillu.png"
        />
        <div class="vip-reward-list">
            <div class="vip-reward-title">About CUB Bonus</div>
            <div class="vip-reward-item">
                Every VIP level-up gets corresponding CUB Bonus.
            </div>
            <div class="vip-reward-item">
                CUB Bonus increases as the level increases.
            </div>
            <div class="vip-reward-item">
                With CUB you can play games, boost Rakeback, or deduct
                withdrawal fees.
            </div>
        </div>
    </div>

    <div class="more-bottom"></div>
</div>

<style>

    .vip-system .vip-system-title {
        padding-left: 1.625rem;
        color: rgb(245, 246, 247);
        font-size: 1rem;
        line-height: 1.375rem;
        height: 3.875rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .vip-system .more-bottom {
        height: 2.5rem;
    }

    .vip-system-list {
        transition: all 200ms ease-out;
    }

    .vip-system-bar > button {
        cursor: pointer;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        transition: transform 200ms linear;
    }

    .vip-system-bar.expanded > button {
        transform: rotateZ(90deg);
    }

    .bHtipE .v-toggle-view {
        margin: 0px -0.75rem;
        padding: 0px 0.75rem;
    }

    .bHtipE {
        background-color: rgb(30, 32, 36);
        border-radius: 0.625rem;
        position: relative;
        margin: 0px 0.75rem 0.625rem;
    }

    .bHtipE .vip-system-bar {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 3rem;
        line-height: 3rem;
        cursor: pointer;
    }

    .bHtipE .bar-cont {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .bHtipE .bar-cont .level-icon {
        height: 0.875rem;
        width: auto;
    }

    .bHtipE .bar-cont .bar-tit {
        color: rgb(245, 246, 247);
        padding-left: 0.625rem;
        white-space: nowrap;
    }

    .bHtipE .v-toggle-view {
        margin: 0px -0.75rem;
        padding: 0px 0.75rem;
    }

    .fclMSM {
        overflow: hidden;
    }

    .bHtipE .v-toggle-view .v-table-wrap {
        margin-bottom: 0.75rem;
    }

    .bHtipE .v-tbody,
    .bHtipE .v-thead {
        padding: 0px 0.625rem;
    }

    .bHtipE .v-tr {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 2.375rem;
        -webkit-box-align: center;
        align-items: center;
    }

    .bHtipE .align-left {
        text-align: left;
    }

    .bHtipE .align-left {
        text-align: left;
    }

    .bHtipE .align-center {
        text-align: center;
    }

    .bHtipE .width_2 {
        width: 30%;
    }

    .bHtipE .align-center {
        text-align: center;
    }

    .bHtipE .width_1 {
        width: 15%;
    }

    .bHtipE .align-right {
        text-align: right;
    }

    .bHtipE .v-tr-wrap:nth-child(2n-1) {
        background-color: rgba(45, 48, 53, 0.7);
        border-radius: 0.3125rem;
    }

    .bHtipE .v-tr {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 2.375rem;
        -webkit-box-align: center;
        align-items: center;
    }

    .bHtipE .v-td.level-td {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding-right: 0px;
    }

    .bHtipE .tlevel {
        height: 1.25rem;
        line-height: 1.5rem;
    }

    .bHtipE .align-left {
        text-align: left;
    }

    .bHtipE .width_1 {
        width: 15%;
    }

    .bHtipE .v-td {
        padding: 0px 0.625rem;
        font-size: 0.75rem;
    }

    .ezzUcl {
        display: flex;
    }

    .bHtipE .xp-pr-wrap .xp-progress {
        margin-right: 0.5rem;
    }

    .ezzUcl .xp-progress {
        height: 1.25rem;
        background-color: rgb(23, 24, 27);
        border-radius: 0.25rem;
        margin-right: 0.3125rem;
        overflow: hidden;
    }

    .ezzUcl .xp-pr-nextlv {
        position: relative;
        color: rgb(245, 246, 247);
        height: 1rem;
        line-height: 0.875rem;
        transform: scale(0.85);
        transform-origin: 0px 50%;
    }

    .bHtipE .jb-img.near {
        height: 1.75rem;
    }

    .bHtipE .jb-img {
        height: 1.5625rem;
        display: inline-block;
        vertical-align: top;
        transform: scale(1.2);
    }

    .bHtipE .v-td.level-td {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding-right: 0px;
    }

    .bHtipE .v-td.level-td img {
        width: 0.875rem;
        height: 1.125rem;
        margin-right: 0.375rem;
    }

    .vip-system .vip-reward {
        position: relative;
        background-color: rgb(30, 32, 36);
        border-radius: 1.25rem;
        height: 8.75rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        padding-left: 0.375rem;
        margin: 0px 0.75rem;
    }

    .vip-system .vip-reward .img-vipillu {
        height: 6.25rem;
        margin-top: 0.5rem;
    }

    .vip-system .vip-reward .vip-reward-list {
        margin-left: 4%;
    }

    .vip-system .vip-reward .vip-reward-list .vip-reward-title {
        color: rgb(245, 246, 247);
        font-size: 1rem;
        margin-bottom: 0.75rem;
        font-weight: bold;
        line-height: 1.25rem;
    }

    .vip-system .vip-reward .vip-reward-list > .vip-reward-item:last-child {
        margin-bottom: 0px;
    }

    .vip-system .vip-reward .vip-reward-list .vip-reward-item {
        position: relative;
        margin: 0px 0px 0.375rem;
        padding-left: 0.5rem;
        font-size: 0.75rem;
        line-height: 1rem;
    }

    .vip-system .vip-reward .vip-reward-list .vip-reward-item::after {
        content: ".";
        position: absolute;
        font-size: 1.25rem;
        line-height: 1.25rem;
        height: 1.25rem;
        left: 0rem;
        top: -0.5rem;
        border-radius: 50%;
    }

    .bHtipE .bar-cont {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    .bHtipE .bar-cont .bar-svip {
        margin-left: 8.75rem;
        font-weight: bold;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(245, 246, 247);
    }

    .bHtipE .bar-cont .bar-svip img {
        width: 1rem;
        margin-right: 0.25rem;
    }
</style>
