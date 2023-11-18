<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import VipLevel from '../components/vipLevel.svelte'; 
import Vipcards from '../components/Vipcards.svelte';
import { UserProfileEl } from "$lib/index"
const { handleprofile } = UserProfileEl()
import { onMount } from "svelte"
import {vipProfiile } from "../vipstore"
let is_about = false
const handleIsAbout = (()=>{
    is_about = !is_about
})

let is_cards = false
const handleVIPCARDS = (()=>{
    is_cards = !is_cards
})

let unit_range = (212993000 - 0) / 100
let range = (parseFloat($vipProfiile.total_wagered) - 0).toFixed(0)
let progressPercent = (range / unit_range).toFixed(0)

onMount(async()=>{
    const result = await handleprofile()
    vipProfiile.set(result)
})


</script>

<div class="vip-user-panel">

    {#if is_about}
    <VipLevel on:close={handleIsAbout} />
    {/if}

    {#if is_cards}
    <Vipcards on:close={handleVIPCARDS} />
    {/if}
   

    <button on:click={handleVIPCARDS} class="sc-kjOQFR jdoMCb class bage-0">
            <div class="card-img-wrap">
                <img class="card-img" src="https://static.nanogames.io/assets/Bronze.eae10e4e.png" alt="bronze.jpg">
            </div>

        <div class="card-badge">
            <div class="card-badge-num ">{$vipProfiile.vip_level && $vipProfiile.vip_level}</div>
            <img class="badge-img" src="https://static.nanogames.io/assets/badge1.624c0289.png" alt="badge1.png">
        </div>
    </button>
    <div class="sc-fvpsdx xdFYP vip-user">
        <div class="user-info-wrap">
            <div class="user-info">
                <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/505090/s?t=1696674992199">
                <div class="user-info-detail">
                    <div class="user-name">{$vipProfiile.username && $vipProfiile.username}</div>
                    <div class="user-star">
                        <div class="level">
                            {#if $vipProfiile.vip_level === 0}
                            <div class="sc-khQegj fPtvsS user-level levelnums_0">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            </div>
                            {:else if $vipProfiile.vip_level === 1 ||  $vipProfiile.vip_level === 2  ||  $vipProfiile.vip_level === 3}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                            <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/bh.d27abdd5.png">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            </div>
                            {:else if $vipProfiile.vip_level === 4 || $vipProfiile.vip_level === 5 || $vipProfiile.vip_level === 6 || $vipProfiile.vip_level === 7}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/b.d9e6b0ec.png">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            </div>
                            {:else if $vipProfiile.vip_level === 8 || $vipProfiile.vip_level === 9 || $vipProfiile.vip_level === 10  || $vipProfiile.vip_level === 11  || $vipProfiile.vip_level === 12  || $vipProfiile.vip_level === 13}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/sh.ddd2bd05.png">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                            </div>
        
                            {:else if $vipProfiile.vip_level === 14 || $vipProfiile.vip_level === 15 || $vipProfiile.vip_level === 16  || $vipProfiile.vip_level === 17  || $vipProfiile.vip_level === 18  || $vipProfiile.vip_level === 19 || $vipProfiile.vip_level === 20 ||  $vipProfiile.vip_level === 20}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                                </div>
        
                                
                            {:else if $vipProfiile.vip_level === 22 || $vipProfiile.vip_level === 23 || $vipProfiile.vip_level === 24  || $vipProfiile.vip_level === 25  || $vipProfiile.vip_level === 26  || $vipProfiile.vip_level === 27 || $vipProfiile.vip_level === 28 ||  $vipProfiile.vip_level === 29}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/gh.d5753240.png">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                            </div>
        
                            {:else if $vipProfiile.vip_level === 30 || $vipProfiile.vip_level === 31 || $vipProfiile.vip_level === 32  || $vipProfiile.vip_level === 33 || $vipProfiile.vip_level === 34  || $vipProfiile.vip_level === 35 || $vipProfiile.vip_level === 36 ||  $vipProfiile.vip_level === 37}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                            </div>
        
                            {:else if $vipProfiile.vip_level === 38 || $vipProfiile.vip_level === 39 || $vipProfiile.vip_level === 40  || $vipProfiile.vip_level === 41 || $vipProfiile.vip_level === 42  || $vipProfiile.vip_level === 43 || $vipProfiile.vip_level === 44 ||  $vipProfiile.vip_level === 45}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                            </div>
        
                            {:else if $vipProfiile.vip_level === 46 || $vipProfiile.vip_level === 47 || $vipProfiile.vip_level === 48  || $vipProfiile.vip_level === 49 || $vipProfiile.vip_level === 50  || $vipProfiile.vip_level === 51 || $vipProfiile.vip_level === 52 ||  $vipProfiile.vip_level === 53}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                            </div>
                            
                            {:else if $vipProfiile.vip_level === 54 || $vipProfiile.vip_level === 55 || $vipProfiile.vip_level === 56  || $vipProfiile.vip_level === 57 || $vipProfiile.vip_level === 58  || $vipProfiile.vip_level === 59 || $vipProfiile.vip_level === 60 ||  $vipProfiile.vip_level === 61}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                            </div>
                            {:else if $vipProfiile.vip_level === 62 || $vipProfiile.vip_level === 63 || $vipProfiile.vip_level === 64  || $vipProfiile.vip_level === 65 || $vipProfiile.vip_level === 66  || $vipProfiile.vip_level === 67 || $vipProfiile.vip_level === 68 ||  $vipProfiile.vip_level === 69}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            </div>
        
                            {:else if $vipProfiile.vip_level > 69}
                            <div class="sc-khQegj fPtvsS user-level levelnums_1">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                            </div>
                         {/if}
                           </div>
                    </div>
                </div>
            </div>
            <button on:click={handleIsAbout} class="about-level-btn">
                About VIP Level
                <Icon src={RiSystemArrowRightSLine}  size="25"  color="rgb(67, 179, 9)" className="custom-icon"/>
            </button>
        </div>


        <button on:click={handleIsAbout}  class="level-big-wrap">
            <div class="tran-wrap" style="transform: scale(0.849902);">
                <div class="level-cl-wrap">
                    <div class="level-cont">
                        <div class="sc-cTAIfT gGiuXV  sort-pr-bar">
                            <div class="pr-mark-wrap">
                                <div class="pr-mark lock-num">
                                    <div>V{$vipProfiile&& (parseFloat($vipProfiile.vip_level) + 1)}</div>
                                </div>
                                <div class="pr-mark lock-num">
                                    <div>V{$vipProfiile && parseFloat($vipProfiile.vip_level) + 2}</div>
                                </div>
                                <div class="pr-mark lock-num">
                                    <div>V{$vipProfiile && parseFloat($vipProfiile.vip_level) + 3}</div>
                                </div>
                                <div class="pr-mark lock-num">
                                    <div>SV32</div>
                                </div>
                                <div class="pr-mark lock-num">
                                    <div>SV33</div>
                                </div>
                                <div class="pr-tr m-omit">
                                    <div class="tr-img-wrap">
                                        <img class="bg-light" src="https://static.nanogames.io/assets/sf.975597ba.png" alt="">
                                        <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png">
                                    </div>
                                    <span class="omit">...</span>
                                </div>
                            </div>
                            <div class="sc-bXdNzS jDYsur  vip-bonus-progress pr-bronze">
                                <div class="tri-wrap">
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                </div>
                                <div class="pr-bar">
                                    <div class="pr-tip" style={`left: ${progressPercent}%%; opacity: 1; transform: translate(-27.2px, 0px);`}>
                                        <div class="prompt-wrap">
                                            <div class="pr-num">V{$vipProfiile.vip_level && $vipProfiile.vip_level}</div>
                                        </div>
                                        <div class="tri-bot"></div>
                                    </div>
                                    <div class="pr-progress" style={`width: ${progressPercent}%;`}>
                                        <div class="dot-wrap">
                                            <div class="dot-near">
                                                <div class="dot-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="level-bot-wrap">
                            <div class="level-xp">Your current XP :<span class="xw-txt">{$vipProfiile.next_level_point} XP</span>
                                / Total wager :
                                <span class="xw-txt">{(parseFloat($vipProfiile.total_wagered)).toFixed(2)} USD</span>
                            </div>
                            <div class="level-next">Reach <span class="xw-txt">{$vipProfiile.next_level_point} xp</span>
                                to
                                <span class="xw-txt">VIP {$vipProfiile.vip_level + 1}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="level-right-super">
                    <div class="super-inner">
                        <div class="svip-super">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg==" alt="f">
                            <p>SVIP...</p>
                        </div>
                        <div class="sc-iRFsWr iOATNK flower-wrap">
                            <img alt="" class="bg-flower" src="https://static.nanogames.io/assets/sf_svip.9f5e5bfb.png">
                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr_h.af82116b.png" alt="tr.png"></div>
                    </div>
                </div>
            </div>
        </button>


    </div>
</div>
<div class="banner-cont-w">
    <div class="level-cont cont-l cont-margin">
        <div class="level-sub-tit">Why Upgrade To SVIP?</div>
        <div class="level-sub-desc">SVIPs have 24*7 considerate service provided by the exclusive host. In addition to the basic Rakeback and Recharge, SVIPs also enjoy the highest level of Luckyspin, Weekly/Monthly Bonus, and the fastest channel for deposit and withdrawal. SVIPs have the opportunity to participate in the top players exchange conference, and building the Best crypto Casino together by putting forward new features &amp; functions to the NG team.</div>
    </div>
    <div class="level-cont cont-r cont-margin">
        <div class="level-sub-tit">Upgrade Your VIP Level</div>
        <div class="level-sub-desc">As a NANOGAMES.IO VIP Club member, you get exclusive access to generous rewards and personalized gifts, but that’s not all. The more you play, the better luxury benefits you’ll receive as you rise through the VIP ranks to become an Elite VIP member where there are no limits to the custom tailored VIP perks NANOGAMES.IO will shower you with.</div>
        <button on:click={handleIsAbout}  class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal level-btn-detail">
            <div class="button-inner">Details</div>
        </button>
    </div>
</div>


<style>
.vip-user-panel {
    padding: 0px 2.7%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.jdoMCb {
    width: 39%;
    position: relative;
    cursor: pointer;
    margin-top: -6.5rem;
}


.jdoMCb .card-badge {
    position: absolute;
    right: 1.875rem;
    top: 1.5rem;
    width: 32%;
}

.jdoMCb .card-img-wrap::before {
    content: "";
    position: absolute;
    width: 3.75rem;
    height: 100%;
    margin-top: 0px;
    margin-left: -440px;
    z-index: 6;
    overflow: hidden;
    background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(rgba(255, 255, 255, 0)), color-stop(0.5, rgba(255, 255, 255, 0.2)), to(rgba(255, 255, 255, 0)));
    transform: skewX(-25deg);
    animation: 8.5s ease 0s infinite normal none running aniBlink;
}
.jdoMCb .card-img-wrap .card-img {
    width: 101%;
    display: inline-block;
    vertical-align: top;
    border-radius: 1.25rem;
    margin: -2px 0px -2px -1px;
}
.jdoMCb .card-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 1.75rem;
    font-size: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 14px 0px;
}
.jdoMCb .card-badge .card-badge-num {
    font-size: 2.75rem;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 96%;
    line-height: 2.5rem;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(245, 246, 247);
    margin-top: -0.25rem;
}
.jdoMCb .card-badge .badge-img {
    width: 100%;
}
.xdFYP {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: 57.5%;
    padding-top: 0.5rem;
}
.xdFYP .user-info-wrap {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.xdFYP .user-info-wrap .user-info {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
}
.xdFYP .user-info-wrap .user-info .avatar {
    width: 4.375rem;
    height: 4.375rem;
    border-radius: 50%;
    margin-right: 1.5rem;
}
.xdFYP .user-info-wrap .user-info .user-info-detail .user-name {
    font-size: 1.375rem;
    line-height: 1.75rem;
    font-weight: bold;
    color: rgb(245, 246, 247);
}
.xdFYP .user-info-wrap .user-info .user-info-detail .user-star {
    display: flex;
    height: 1.5rem;
    margin-top: 0.375rem;
}
.xdFYP .user-info-wrap .user-info .user-info-detail .user-star > div {
    transform: scale(1.4);
    transform-origin: 0px 0px;
}
.fPtvsS {
    text-align: left;
    white-space: nowrap;
    font-size: 0px;
}
.fPtvsS .img-star {
    width: auto;
    height: 1.0625rem;
    margin-right: 2px;
    object-fit: cover;
}
.xdFYP .user-info-wrap .about-level-btn {
    cursor: pointer;
    color: rgb(67, 179, 9);
    width: 12.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.xdFYP .level-big-wrap {
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.xdFYP .tran-wrap {
    width: 100%;
    min-width: 640px;
    background-color: rgba(45, 48, 53, 0.6);
    height: 7.5rem;
    cursor: pointer;
    margin-top: 1.5rem;
    display: flex;
    border-radius: 0.625rem;
}

.xdFYP .level-cl-wrap {
    height: 7.5rem;
    padding: 0px 2% 0.75rem;
    position: relative;
    border-radius: 0.625rem;
    flex: 1 1 0%;
    display: flex;
    align-items: flex-end;
}
.xdFYP .level-cl-wrap .level-cont {
    width: 100%;
}
.xdFYP .tran-wrap .level-right-super {
    width: 10%;
    min-width: 4rem;
    height: 100%;
    flex: 0 0 auto;
    padding: 1.5rem 0px;
}
.xdFYP .level-cl-wrap .level-cont .level-bot-wrap {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 0.75rem;
    height: 1.25rem;
    line-height: 1.25rem;
    overflow: hidden;
    white-space: nowrap;
}
.gGiuXV  .pr-mark-wrap {
    padding: 0px 1.875rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
}

.gGiuXV  .pr-mark-wrap .pr-mark.lock-num {
    color: rgb(245, 246, 247);
}
.gGiuXV  .pr-mark-wrap .pr-mark {
    font-size: 0.75rem;
    width: 1rem;
    overflow-x: visible;
    font-weight: bold;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
.gGiuXV  .pr-mark-wrap .pr-tr {
    position: absolute;
    left: 49%;
    top: 0px;
    padding-left: 3.125rem;
    height: 1.25rem;
    line-height: 0.9375rem;
    width: 3.125rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.gGiuXV  .pr-mark-wrap .tr-img-wrap {
    height: 100%;
    position: absolute;
    left: 2rem;
    top: 0px;
}
.gGiuXV  .pr-mark-wrap .omit {
    margin-left: 1.25rem;
    color: rgb(245, 246, 247);
    font-weight: bold;
    position: relative;
    z-index: 2;
}

.gGiuXV .pr-mark-wrap .omit {
    margin-left: 1.25rem;
    color: rgb(245, 246, 247);
    font-weight: bold;
    position: relative;
    z-index: 2;
}
.gGiuXV .pr-mark-wrap .tr-img-wrap {
    height: 100%;
    position: absolute;
    left: 2rem;
    top: 0px;
}
.gGiuXV .pr-mark-wrap .tr-img-wrap .bg-light {
    position: absolute;
    width: 4.5rem;
    height: 4.5rem;
    left: 50%;
    top: 50%;
    margin-left: -2.25rem;
    margin-top: -2.25rem;
    animation: 10s linear 0s infinite normal none running viprorate;
}
.gGiuXV .pr-mark-wrap .tr-img-wrap .tr-img {
    height: 2rem;
    margin-top: -0.5rem;
    position: relative;
    z-index: 1;
}
.jDYsur {
    margin-bottom: 1rem;
    margin-top: 1.25rem;
    height: 0.625rem;
    border-radius: 0.3125rem;
    padding: 0px;
    position: relative;
}
.jDYsur .tri-wrap {
    position: absolute;
    top: -1rem;
    left: 1.875rem;
    right: 1.875rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.jDYsur .tri-top {
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent transparent rgb(60, 64, 74);
    border-image: initial;
    list-style-type: none;
    margin: 0px;
}
.jDYsur .pr-bar {
    height: 100%;
    width: 100%;
    background-color: rgb(60, 64, 74);
    border-radius: 0.3125rem;
    position: relative;
}
.jDYsur .pr-tip {
    position: absolute;
    left: 0px;
    top: -3.75rem;
    transform: translateX(-60%);
    z-index: 9;
}
.jDYsur.pr-bronze .pr-bar .pr-tip .prompt-wrap {
    border-color: rgb(145, 150, 168);
}
.jDYsur .pr-tip .prompt-wrap {
    width: 2.8125rem;
    height: 2.8125rem;
    border-radius: 2.8125rem;
    border: 0.25rem solid rgb(145, 150, 168);
    position: relative;
    z-index: 1;
    opacity: 1;
}
.jDYsur .pr-tip .prompt-wrap .pr-num {
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
.jDYsur.pr-bronze .pr-bar .pr-tip .tri-bot {
    border-top-color: rgb(145, 150, 168);
}
.jDYsur .pr-tip .tri-bot {
    border-width: 0.625rem 0.3125rem;
    border-style: solid;
    border-color: rgb(145, 150, 168) transparent transparent;
    position: absolute;
    bottom: -1.0625rem;
    left: 1.0625rem;
}
.jDYsur.pr-bronze .pr-bar .pr-progress {
    background-color: rgb(145, 150, 168);
    transition: background-color 0.3s ease 0s;
}
.jDYsur .pr-bar .pr-progress {
    height: 100%;
    width: 0px;
    position: relative;
    border-radius: 0.3125rem;
}
.jDYsur .pr-bar .dot-wrap {
    position: absolute;
    right: -0.5625rem;
    top: -0.5625rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    padding: 0.3125rem;
    box-sizing: border-box;
}
.jDYsur.pr-bronze .pr-bar .dot-near {
    background-color: rgba(145, 150, 168, 0.2);
}
.jDYsur .pr-bar .dot-near {
    width: 1.125rem;
    height: 1.125rem;
    padding: 0.1875rem;
    border-radius: 50%;
    box-sizing: border-box;
}
.jDYsur.pr-bronze .pr-bar .dot-icon {
    background: rgb(145, 150, 168);
}
.jDYsur .pr-bar .dot-icon {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
}
.xdFYP .level-cl-wrap .level-cont .level-bot-wrap {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 0.75rem;
    height: 1.25rem;
    line-height: 1.25rem;
    overflow: hidden;
    white-space: nowrap;
}
.xdFYP .level-cl-wrap .level-cont .level-bot-wrap .xw-txt {
    color: rgb(245, 246, 247);
    padding: 0px 0.25rem;
}
.xdFYP .level-cl-wrap .level-cont .level-bot-wrap .xw-txt {
    color: rgb(245, 246, 247);
    padding: 0px 0.25rem;
}
.xdFYP .tran-wrap .level-right-super .flower-wrap .tr-img {
    width: 50%;
    z-index: 2;
}
.xdFYP .tran-wrap .level-right-super .flower-wrap {
    width: 4rem;
    height: 4rem;
    margin: -0.375rem auto 0px;
    overflow: visible;
    flex: 0 0 auto;
}
.iOATNK {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.xdFYP .tran-wrap .level-right-super .flower-wrap .tr-img {
    width: 50%;
    z-index: 2;
}
.iOATNK .bg-flower {
    position: absolute;
    z-index: 0;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    animation: 10s linear 0s infinite normal none running viprorate;
}
.xdFYP .tran-wrap .level-right-super .super-inner .svip-super {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 0.75rem;
}
.xdFYP .tran-wrap .level-right-super .super-inner .svip-super img {
    width: auto;
    height: 1rem;
}
.xdFYP .tran-wrap .level-right-super .super-inner {
    border-left: 1px solid rgb(66, 71, 82);
    height: 100%;
    flex: 0 0 auto;
}
.banner-cont-w {
    margin-top: 2.25rem;
    display: flex;
}
 .banner-cont-w .level-cont {
    margin-left: 5%;
    width: 45%;
    padding-right: 5%;
    box-sizing: border-box;
}
 .banner-cont-w .level-cont {
    margin-left: 5%;
    width: 45%;
    padding-right: 5%;
    box-sizing: border-box;
}
 .banner-cont-w .level-cont .level-sub-tit {
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: rgb(245, 246, 247);
}
 .banner-cont-w .level-cont .level-sub-desc {
    line-height: 1.375rem;
}
 .banner-cont-w .level-cont {
    margin-left: 5%;
    width: 45%;
    padding-right: 5%;
    box-sizing: border-box;
}
.banner-cont-w .level-cont .level-btn-detail {
    width: 12.5rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
}
</style>
