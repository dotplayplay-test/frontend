<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import AiFillHeart from "svelte-icons-pack/ai/AiFillHeart";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import SiChakraui from "svelte-icons-pack/si/SiChakraui";
import BsCoin from "svelte-icons-pack/bs/BsCoin";
import { browser } from '$app/environment';
import BiMedal from "svelte-icons-pack/bi/BiMedal";
import IoPersonAddSharp from "svelte-icons-pack/io/IoPersonAddSharp";
import "../../../../styles/profile/index.css"
import FaSolidMoneyBillWave from "svelte-icons-pack/fa/FaSolidMoneyBillWave";
import RiSystemArrowLeftSLine from "svelte-icons-pack/ri/RiSystemArrowLeftSLine";
import RiDeviceDatabase2Fill from "svelte-icons-pack/ri/RiDeviceDatabase2Fill";
import RiDesignPencilFill from "svelte-icons-pack/ri/RiDesignPencilFill";
import BiBarChartAlt from "svelte-icons-pack/bi/BiBarChartAlt";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
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
    await axios.post(`${URL}/api/users/profile/${$page.params.slug}`)
        .then(res => {
            is_loadingel = false
            users_profile.set(res.data[0])
        })
        .catch((error) => {
            console.log(error)
        })

    is_loading = true
    await axios.post(`${URL}/api/stats/global`,{
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

let is_mobile = false
$:{
    if (browser && window.innerWidth < 650) {
        is_mobile = true
    }
    else {
        is_mobile = false
    }
}



</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog "style={`${is_mobile ? "transform: scale(1) translateZ(0px);" : "opacity: 1; width: 464px; height: 631px; margin-top: -315.5px; margin-left: -232px;"}  `}>
        {#if is_edit || is_stats}
            <button on:click={()=> handleDiooosb(1)} class="dialog-back" style="opacity: 1; transform: none;">
                <Icon src={RiSystemArrowLeftSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" />
            </button>
        {/if}

        <div class={`dialog-head ${is_edit || is_stats ? "has-back" : "has-close"} `}>
            {#if !is_edit && !is_stats}
                <div class="dialog-title">User Information</div>
                <div class="sc-hgJWpk cGdWiX vip-level">
                    <div class="vip-box" style="background-image: url(&quot;https://static.nanogames.io/assets/vip_type1.9697d4e3.svg&quot;);">
                       {!is_loadingel && !is_loading && $users_profile.vip_level ? `V ${$users_profile.vip_level} `: ""}</div>
                </div>
            {:else if is_edit}
                <div class="dialog-title">Nickname</div>
            {:else if is_stats}
            <div class="dialog-title">Details</div>
            {/if}
        </div>
        <button on:click={()=> history.back()} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" />
        </button>

        {#if !is_loadingel && !is_loading}
        {#if !is_edit && !is_stats}
        <div class="dialog-body no-style" style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-bOTDDd gTGvhG user__profile">
                <div class="sc-zjkyB jXCVwe">
                    <div class="user-info">
                        <button class="like button">
                            <span class="sc-gsDKAQ hxODWG icon">
                                <Icon src={AiFillHeart}  size="16"  color="rgb(237, 99, 0)" className="custom-icon" />
                            </span>
                            0
                        </button>
                        {#if $profileStore.user_id === $page.params.slug}
                            <button on:click={()=>  handleDiooosb(2)} class="button edit">
                                <Icon src={RiDesignPencilFill}  size="16"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" />
                            </button>
                        {/if}
         
                        <div class="avatar-box">
                            <img class="avatar " alt="" src={$users_profile.profile_image}>
                        </div>
                        <div class="name-box">
                            <div class="user-name">{$users_profile.username}</div>
                        </div>
                        
                        {#if $users_profile.vip_level === 0}
                        <div class="sc-khQegj fPtvsS user-level levelnums_0">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        </div>
                        {:else if $users_profile.vip_level === 1 ||  $users_profile.vip_level === 2  ||  $users_profile.vip_level === 3}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                        <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/bh.d27abdd5.png">
                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        </div>
                        {:else if $users_profile.vip_level === 4 || $users_profile.vip_level === 5 || $users_profile.vip_level === 6 || $users_profile.vip_level === 7}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/b.d9e6b0ec.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        </div>
                        {:else if $users_profile.vip_level === 8 || $users_profile.vip_level === 9 || $users_profile.vip_level === 10  || $users_profile.vip_level === 11  || $users_profile.vip_level === 12  || $users_profile.vip_level === 13}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/sh.ddd2bd05.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                        </div>

                        {:else if $users_profile.vip_level === 14 || $users_profile.vip_level === 15 || $users_profile.vip_level === 16  || $users_profile.vip_level === 17  || $users_profile.vip_level === 18  || $users_profile.vip_level === 19 || $users_profile.vip_level === 20 ||  $users_profile.vip_level === 20}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                            </div>

                            
                        {:else if $users_profile.vip_level === 22 || $users_profile.vip_level === 23 || $users_profile.vip_level === 24  || $users_profile.vip_level === 25  || $users_profile.vip_level === 26  || $users_profile.vip_level === 27 || $users_profile.vip_level === 28 ||  $users_profile.vip_level === 29}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/gh.d5753240.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                        </div>

                        {:else if $users_profile.vip_level === 30 || $users_profile.vip_level === 31 || $users_profile.vip_level === 32  || $users_profile.vip_level === 33 || $users_profile.vip_level === 34  || $users_profile.vip_level === 35 || $users_profile.vip_level === 36 ||  $users_profile.vip_level === 37}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                        </div>

                        {:else if $users_profile.vip_level === 38 || $users_profile.vip_level === 39 || $users_profile.vip_level === 40  || $users_profile.vip_level === 41 || $users_profile.vip_level === 42  || $users_profile.vip_level === 43 || $users_profile.vip_level === 44 ||  $users_profile.vip_level === 45}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                        </div>

                        {:else if $users_profile.vip_level === 46 || $users_profile.vip_level === 47 || $users_profile.vip_level === 48  || $users_profile.vip_level === 49 || $users_profile.vip_level === 50  || $users_profile.vip_level === 51 || $users_profile.vip_level === 52 ||  $users_profile.vip_level === 53}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                        </div>
                        
                        {:else if $users_profile.vip_level === 54 || $users_profile.vip_level === 55 || $users_profile.vip_level === 56  || $users_profile.vip_level === 57 || $users_profile.vip_level === 58  || $users_profile.vip_level === 59 || $users_profile.vip_level === 60 ||  $users_profile.vip_level === 61}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                        </div>
                        {:else if $users_profile.vip_level === 62 || $users_profile.vip_level === 63 || $users_profile.vip_level === 64  || $users_profile.vip_level === 65 || $users_profile.vip_level === 66  || $users_profile.vip_level === 67 || $users_profile.vip_level === 68 ||  $users_profile.vip_level === 69}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                        </div>

                        {:else if $users_profile.vip_level > 69}
                        <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                        </div>
                     {/if}
                        {#if $profileStore.user_id !== $page.params.slug}
                        <div class="actions">
                            {#if !$users_profile.refuse_tips}
                            <button class="tip button">
                                <span style="margin-right: 0.5rem; margin-top: 4px">
                                    <Icon src={FaSolidMoneyBillWave}  size="15"  color="rgba(153, 164, 176, 0.6)" />
                                </span>
                                 Tip
                            </button>
                            {/if}
                            {#if !$users_profile.refuse_friends_request}
                            <button class="button add">
                                <span  style="margin-right: 0.5rem">
                                    <Icon src={IoPersonAddSharp}  size="15"  color="rgba(153, 164, 176, 0.6)" />
                                </span>
                                    Add
                            </button>
                            {/if}
                         </div>
                         {/if}
                    </div>
                </div>

                {#if $users_profile.hide_profile &&  $profileStore.user_id === $page.params.slug}
                <div class="sc-gXRojI sc-cKVNtL bRYT JQLBl self">
                    <div class="module-name">
                        <span class="sc-gsDKAQ hxODWG icon icon-name">
                            <Icon src={BiMedal}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                        </span>
                        Medals
                        <div class="total">0</div>
                        <button class="detail-button">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
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
                            <Icon src={BiBarChartAlt}  size="16"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" />
                        </span>
                        Statistics
                        <button on:click={()=>  handleDiooosb(4)} class="hover">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                        </button>
                    </div>
                    <div class="content">
                        <div class="sc-bGaVxB gvTPwc">
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={SiChakraui}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                                    </span>
                                    Total Wins</div>
                                <div class="item-value">{$userStatistics.total_win}</div>
                            </div>

                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={BsCoin}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" />
                                    </span>
                                    Total Bets</div>
                                <div class="item-value">{$userStatistics.total_bet}</div>
                            </div>
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={RiDeviceDatabase2Fill}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" />
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

                {:else if  !$users_profile.hide_profile &&  $profileStore.user_id === $page.params.slug}
                <div class="sc-gXRojI sc-cKVNtL bRYT JQLBl self">
                    <div class="module-name">
                        <span class="sc-gsDKAQ hxODWG icon icon-name">
                            <Icon src={BiMedal}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                        </span>
                        Medals
                        <div class="total">0</div>
                        <button class="detail-button">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
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
                            <Icon src={BiBarChartAlt}  size="16"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" />
                        </span>
                        Statistics
                        <button on:click={()=>  handleDiooosb(4)} class="hover">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                        </button>
                    </div>
                    <div class="content">
                        <div class="sc-bGaVxB gvTPwc">
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={SiChakraui}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                                    </span>
                                    Total Wins</div>
                                <div class="item-value">{$userStatistics.total_win}</div>
                            </div>

                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={BsCoin}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" />
                                    </span>
                                    Total Bets</div>
                                <div class="item-value">{$userStatistics.total_bet}</div>
                            </div>
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={RiDeviceDatabase2Fill}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" />
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

                {:else if $users_profile.hide_profile &&  $profileStore.user_id !== $page.params.slug}
                <div class="sc-gXRojI sc-jVslSq bRYT cgBQzA">
                    <div class="module-name">Statistics</div>
                    <div class="content">
                        <div class="nothing">
                            <div class="sc-eCImPb cuPxwd empty ">
                                <img src="https://static.nanogames.io/assets/privacy.b56f76ed.png" alt="">
                                <div class="msg">
                                    <div class="darken">Statistics hidden</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {:else if  !$users_profile.hide_profile &&  $profileStore.user_id !== $page.params.slug}
                <div class="sc-gXRojI sc-cKVNtL bRYT JQLBl self">
                    <div class="module-name">
                        <span class="sc-gsDKAQ hxODWG icon icon-name">
                            <Icon src={BiMedal}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                        </span>
                        Medals
                        <div class="total">0</div>
                        <button class="detail-button">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
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
                            <Icon src={BiBarChartAlt}  size="16"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" />
                        </span>
                        Statistics
                        <button on:click={()=>  handleDiooosb(4)} class="hover">
                            Details
                            <Icon src={RiSystemArrowRightSLine}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                        </button>
                    </div>
                    <div class="content">
                        <div class="sc-bGaVxB gvTPwc">
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={SiChakraui}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" />
                                    </span>
                                    Total Wins</div>
                                <div class="item-value">{$userStatistics.total_win}</div>
                            </div>

                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={BsCoin}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" />
                                    </span>
                                    Total Bets</div>
                                <div class="item-value">{$userStatistics.total_bet}</div>
                            </div>
                            <div class="item">
                                <div class="item-type darken">
                                    <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                        <Icon src={RiDeviceDatabase2Fill}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" />
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
                {/if}

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
.bRYT {
    background: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 0.875rem;
    margin-bottom: 0.5rem;
}
.cgBQzA .module-name {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.bRYT .module-name {
    color: rgb(245, 246, 247);
    margin: 0.25rem 0px 0.75rem;
}
.cgBQzA .nothing {
    height: 16.75rem;
    text-align: center;
    font-size: 0.75rem;
}
.cuPxwd {
    padding: 2.5rem 0px;
    color: rgba(153, 164, 176, 0.6);
    line-height: 1;
    text-align: center;
    height: 100%;
    min-height: 16.25rem;
    position: relative;
}
.cuPxwd img {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -6.875rem 0px 0px -6.25rem;
    width: 12.5rem;
    height: 12.5rem;
}

.cuPxwd .msg {
    position: absolute;
    z-index: 1;
    line-height: 1.25rem;
    left: 50%;
    width: 17.5rem;
    top: 50%;
    margin-top: 3.75rem;
    margin-left: -8.75rem;
}
.cgBQzA .nothing .darken {
    margin-top: 0.625rem;
}
.bRYT .darken {
    color: rgba(153, 164, 176, 0.6);
    background: none;
}

@media screen and (max-width: 650px){
.dialog {
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    margin: 0px;
    border-radius: 0px;
}

}
</style>
