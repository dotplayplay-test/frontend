<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import AiFillHeart from "svelte-icons-pack/ai/AiFillHeart";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import SiChakraui from "svelte-icons-pack/si/SiChakraui";
import BsCoin from "svelte-icons-pack/bs/BsCoin";
import BiMedal from "svelte-icons-pack/bi/BiMedal";
import IoPersonAddSharp from "svelte-icons-pack/io/IoPersonAddSharp";
import "../../../../styles/profile/index.css"
import FaSolidMoneyBillWave from "svelte-icons-pack/fa/FaSolidMoneyBillWave";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
import RiDeviceDatabase2Fill from "svelte-icons-pack/ri/RiDeviceDatabase2Fill";
import RiDesignPencilFill from "svelte-icons-pack/ri/RiDesignPencilFill";
import BiBarChartAlt from "svelte-icons-pack/bi/BiBarChartAlt";
import axios from 'axios';
import { onMount } from 'svelte';
import {
    users_profile, profileStore
} from "$lib/store/profile"
import {
    page
} from '$app/stores'
import { userStatistics } from "$lib/store/statistic"
import UserProfile from '$lib/user-profile/user-profile.svelte';
import Statistics from '$lib/user-profile/statistics.svelte';

let is_loadingel
let is_loading
async function fetchData() {
    is_loadingel = true
    await axios.post(`http://localhost:8000/api/users/profile/${$page.params.slug}`)
        .then(res => {
            is_loadingel = false
            users_profile.set(res.data[0])
        })
        .catch((error) => {
            console.log(error)
        })

    is_loading = true
    await axios.post(`http://localhost:8000/admin/stat/global`,{
       user_id: $page.params.slug
    })
    .then(res =>{
        is_loading = false
        userStatistics.set(res.data)
    })
}
let is_edit = false
let is_stats = false

const handleDiooosb = ((e)=>{
    if(e === 1){
        is_stats = false
        is_edit = false
    }
    else if(e === 2){
        is_stats = false
        is_edit = true
    }else{
        is_stats = true
        is_edit = false
    }
})

onMount(async()=>{
    fetchData();
})

$: {
    is_loadingel
}
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog " style="opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px; transform: scale(1) translateZ(0px);">
        {#if is_edit || is_stats}
            <button on:click={()=> handleDiooosb(1)} class="dialog-back" style="opacity: 1; transform: none;">
                <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" />
            </button>
        {/if}

        <div class={`dialog-head ${is_edit || is_stats ? "has-back" : "has-close"} `}>
            {#if !is_edit && !is_stats}
                <div class="dialog-title">User Information</div>
                <div class="sc-hgJWpk cGdWiX vip-level">
                    <div class="vip-box" style="background-image: url(&quot;https://static.nanogames.io/assets/vip_type1.9697d4e3.svg&quot;);">V0</div>
                </div>
            {:else if is_edit}
                <div class="dialog-title">Nickname</div>
            {:else if is_stats}
            <div class="dialog-title">Details</div>
            {/if}
        </div>
        <button on:click={()=> history.back()} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        {#if !is_loadingel && !is_loading}
        {#if !is_edit && !is_stats}
        <div class="dialog-body no-style" style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-bOTDDd gTGvhG user__profile">
                <div class="sc-zjkyB jXCVwe">
                    <div class="user-info">
                        <button class="like button">
                            <span class="sc-gsDKAQ hxODWG icon">
                                <Icon src={AiFillHeart}  size="16"  color="rgb(237, 99, 0)" className="custom-icon" title="arror" />
                            </span>
                            0
                        </button>
                        {#if $profileStore.user_id === $page.params.slug}
                            <button on:click={()=>  handleDiooosb(2)} class="button edit">
                                <Icon src={RiDesignPencilFill}  size="16"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                            </button>
                        {/if}
         
                        <div class="avatar-box">
                            <img class="avatar " alt="" src={$users_profile.profile_image}>
                        </div>
                        <div class="name-box">
                            <div class="user-name">{$users_profile.username}</div>
                        </div>
                        <div class="sc-khQegj fPtvsS user-level levelnums_0">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        </div>
                        {#if $profileStore.user_id !== $page.params.slug}
                        <div class="actions">
                            <button class="tip button">
                                <span style="margin-right: 0.5rem; margin-top: 4px">
                                    <Icon src={FaSolidMoneyBillWave}  size="15"  color="rgba(153, 164, 176, 0.6)" />
                                </span>
                                 Tip
                            </button>
                            <button class="button add">
                                <span  style="margin-right: 0.5rem">
                                    <Icon src={IoPersonAddSharp}  size="15"  color="rgba(153, 164, 176, 0.6)" />
                                </span>
                                    Add
                            </button>
                         </div>
                         {/if}
                    </div>
                </div>
                <div class="sc-gXRojI sc-cKVNtL bRYT JQLBl self">
                    <div class="module-name">
                        <span class="sc-gsDKAQ hxODWG icon icon-name">
                            <Icon src={BiMedal}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" title="arror" />
                        </span>
                        Medals
                        <div class="total">0</div>
                        <button class="detail-button">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" title="arror" />
                        </button>
                    </div>
                    <div class="content">
                        <div class="scroll">
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_1.c87ad7ad.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_2.f40a41f6.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_3.bf42dfa3.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_4.c845bc7e.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_5.7e08d516.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_6.b5ec5404.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_7.1e39e201.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_8.65991297.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_17.bbbdfc92.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_10.19cd9ddc.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_11.0ec85ddb.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_12.7f2dc23f.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_13.1cc45284.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_14.c072f644.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_15.53c0901a.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_16.65edd97c.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_17_ETH.4684f7c4.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_17.bbbdfc92.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_17.bbbdfc92.png" alt="" class="img locked">
                            </div>
                            <div class="item ">
                                <img src="https://static.nanogames.io/assets/achieve_17_BTC.a5992a94.png" alt="" class="img locked">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sc-gXRojI sc-dXNJws bRYT cHQfvF">
                    <div class="module-name">
                        <span class="sc-gsDKAQ hxODWG icon icon-name">
                            <Icon src={BiBarChartAlt}  size="16"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                        </span>
                        Statistics
                        <button on:click={()=>  handleDiooosb(4)} class="hover">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" title="arror" />
                        </button>
                    </div>
                    <div class="content">
                        <div class="sc-bGaVxB gvTPwc">
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={SiChakraui}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" title="arror" />
                                    </span>
                                    Total Wins</div>
                                <div class="item-value">{$userStatistics.total_win}</div>
                            </div>

                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={BsCoin}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" title="arror" />
                                    </span>
                                    Total Bets</div>
                                <div class="item-value">{$userStatistics.total_bet}</div>
                            </div>
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={RiDeviceDatabase2Fill}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" title="arror" />
                                    </span>
                                    Total Wagered
                                </div>
                                <div class="item-value">{$userStatistics.total_wagered} USD</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sc-gXRojI sc-jnSlpE bRYT bUELx">
                    <div class="module-name">Top 3 Favorite Games</div>
                    <div class="sc-eCImPb cuPxwd empty ">
                        <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="" >
                        <div class="msg">Oops! There is no data yet!</div>
                    </div>
                </div>

                <div class="sc-gXRojI sc-dWbSDx bRYT btOhTh">
                    <div class="module-name">Contest</div>
                    <div class="sc-eCImPb cuPxwd empty ">
                        <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
                        <div class="msg">Oops! There is no data yet!</div>
                    </div>
                </div>
                <div class="joined">Joined on&nbsp;{$users_profile.joined_at}</div>
            </div>
        </div>
        {:else if is_edit}
        <UserProfile />
        {:else if is_stats}

        <Statistics />

        {/if}
        {:else}
            <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    {/if}



 
    </div>
</div>

<style>
 .joined {
    font-size: 0.75rem;
    text-align: center;
    color: rgba(152, 167, 181, 0.6);
    margin: 1.25rem;
}
.dialog-back {
    position: absolute;
    left: 0px;
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
.dialog-head.has-back {
    margin-left: 3.125rem;
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}

.jXCVwe .user-info .actions {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 1.25rem 0px;
}
.jXCVwe .user-info .actions .button {
    min-width: 5.8125rem;
    padding: 0px 1.25rem;
    color: rgba(153, 164, 176, 0.6);
}
.jXCVwe .user-info .actions .tip {
    margin-right: 0.625rem;
}
.jXCVwe .button {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    background: rgba(30, 32, 36, 0.7);
    border-radius: 1.6875rem;
}

</style>
