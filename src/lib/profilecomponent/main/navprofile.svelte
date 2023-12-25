<script>
import {goto} from "$app/navigation";
import {handleLogout } from "$lib/firebaseAuth/index";
import { profileStore, proressbar} from "../../store/profile";
import { statisticsEl } from "$lib/store/statistic";
import { handleAuthToken } from "$lib/store/routes";
import axios from "axios"
import { onMount } from "svelte";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()

const handleProfile = (async()=>{
    try{
        await axios.get(`${URL}/api/profile`,{
        headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        let response = res.data.users[0]
        proressbar.set(response)
    })
    .catch((err)=>{
         console.log(err)
    })
    }
    catch(err){
        console.log(err)
    }
})

onMount(async()=>{
   await handleProfile()
})

const handleSignOut = (()=>{
    handleLogout()
})

const handleStatistics = (()=>{
    statisticsEl.set(true)
})


</script>

<div class="setting-wrap" style="opacity: 1; transform: none;">
   <div class="sc-cjrPHo emGYim">
    {#if $profileStore.email}
    <div class="user-info">
        <a class="left" href={`/user/profile/${$profileStore.user_id}`}>
            <img class="avatar " alt="" src={$profileStore?.profile_image}>
            <div class="name-level">
                <p>{$profileStore.username}</p>
                <div class="level">
                 {#if $profileStore.vip_level === 0}
                 <div class="sc-khQegj fPtvsS user-level levelnums_0">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                 </div>
                 {:else if $profileStore.vip_level === 1 ||  $profileStore.vip_level === 2  ||  $profileStore.vip_level === 3}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                 <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/bh.d27abdd5.png">
                 <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                 <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                 <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                 <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                 </div>
                 {:else if $profileStore.vip_level === 4 || $profileStore.vip_level === 5 || $profileStore.vip_level === 6 || $profileStore.vip_level === 7}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/b.d9e6b0ec.png">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                 </div>
                 {:else if $profileStore.vip_level === 8 || $profileStore.vip_level === 9 || $profileStore.vip_level === 10  || $profileStore.vip_level === 11  || $profileStore.vip_level === 12  || $profileStore.vip_level === 13}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/sh.ddd2bd05.png">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                 </div>

                 {:else if $profileStore.vip_level === 14 || $profileStore.vip_level === 15 || $profileStore.vip_level === 16  || $profileStore.vip_level === 17  || $profileStore.vip_level === 18  || $profileStore.vip_level === 19 || $profileStore.vip_level === 20 ||  $profileStore.vip_level === 20}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                     </div>

                     
                 {:else if $profileStore.vip_level === 22 || $profileStore.vip_level === 23 || $profileStore.vip_level === 24  || $profileStore.vip_level === 25  || $profileStore.vip_level === 26  || $profileStore.vip_level === 27 || $profileStore.vip_level === 28 ||  $profileStore.vip_level === 29}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/gh.d5753240.png">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                 </div>

                 {:else if $profileStore.vip_level === 30 || $profileStore.vip_level === 31 || $profileStore.vip_level === 32  || $profileStore.vip_level === 33 || $profileStore.vip_level === 34  || $profileStore.vip_level === 35 || $profileStore.vip_level === 36 ||  $profileStore.vip_level === 37}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                 </div>

                 {:else if $profileStore.vip_level === 38 || $profileStore.vip_level === 39 || $profileStore.vip_level === 40  || $profileStore.vip_level === 41 || $profileStore.vip_level === 42  || $profileStore.vip_level === 43 || $profileStore.vip_level === 44 ||  $profileStore.vip_level === 45}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                 </div>

                 {:else if $profileStore.vip_level === 46 || $profileStore.vip_level === 47 || $profileStore.vip_level === 48  || $profileStore.vip_level === 49 || $profileStore.vip_level === 50  || $profileStore.vip_level === 51 || $profileStore.vip_level === 52 ||  $profileStore.vip_level === 53}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                 </div>
                 
                 {:else if $profileStore.vip_level === 54 || $profileStore.vip_level === 55 || $profileStore.vip_level === 56  || $profileStore.vip_level === 57 || $profileStore.vip_level === 58  || $profileStore.vip_level === 59 || $profileStore.vip_level === 60 ||  $profileStore.vip_level === 61}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                 </div>
                 {:else if $profileStore.vip_level === 62 || $profileStore.vip_level === 63 || $profileStore.vip_level === 64  || $profileStore.vip_level === 65 || $profileStore.vip_level === 66  || $profileStore.vip_level === 67 || $profileStore.vip_level === 68 ||  $profileStore.vip_level === 69}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                 </div>

                 {:else if $profileStore.vip_level > 69}
                 <div class="sc-khQegj fPtvsS user-level levelnums_1">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                     <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                 </div>
              {/if}
                    <div class="sc-jQrDum jouJMO user-level type-0">
                        <div class="level-wrap">
                            <span>V</span>
                            <span>{$profileStore.vip_level}</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        <button on:click={()=> goto("/setting/general")} class="right">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                <use xlink:href="#icon_Setting"></use>
            </svg>
            <p>Global Settings</p>
        </button>
    </div>
    <div class="vip-info notranslate">
        <div class="num">
            <p>vip {$proressbar.vip_level}</p>
            <p><span>Need {$proressbar.next_level_point} xp</span>vip {parseInt($proressbar.vip_level) + 1} </div>
        <div class="vip-bg">
            <div class="bg">
                <div class="status" style={`width: ${(parseFloat($proressbar.vip_progress)).toFixed(0)}%; background: rgb(145, 150, 168);`}></div>
            </div>
            <div class="bg_status" style="color: rgb(145, 150, 168);">{(parseFloat($proressbar.vip_progress)).toFixed(2)}%</div>
        </div>
    </div>
    {:else}
    <h1 style="text-align: center; padding:20px">Loading...</h1>
    {/if}
      
      
       <div class="link-info">
           <button on:click={()=> goto(`/user/profile/${$profileStore.user_id}`)} class="link-item">
               <div class="hover">
                   <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                       <use xlink:href="#icon_UserProfile"></use>
                   </svg>
                   User Information
               </div>
           </button>
               <button on:click={()=> goto("/wallet/balance")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Wallet"></use>
                       </svg>
                       Wallet
                   </div>
               </button>
               <button on:click={()=> handleStatistics()} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Statistics"></use>
                       </svg>
                       Statistics
                   </div>
               </button>
               <button on:click={()=> goto("/wallet/swap")}  class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Swap"></use>
                       </svg>
                       PDDSwap
                   </div>
               </button>
               <button on:click={()=> goto("/wallet/transaction")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Transaction"></use>
                       </svg>
                       Transactions
                   </div>
               </button>
               <button  class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Vault"></use>
                       </svg>
                       Vault Pro
                   </div>
               </button>
               <div class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Support"></use>
                       </svg>
                       Live Support
                   </div>
               </div>
               <div class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Reward"></use>
                       </svg>
                       Reward
                   </div>
               </div>
               <button on:click={()=> goto("/affiliate")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_Affiliate"></use>
                       </svg>
                       Affiliate
                   </div>
               </button>
               <button on:click={()=> goto("/vip-games")} class="link-item">
                   <div class="hover">
                       <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                           <use xlink:href="#icon_VipClub"></use>
                       </svg>
                       VIP Club
                   </div>
               </button>
           </div>
           <button on:click={handleSignOut} class="logout">
               <span>
                   <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                       <use xlink:href="#icon_Logout"></use>
                   </svg>
                   Logout
               </span>
           </button>
   </div>
</div>

<style>
.setting-wrap {
    position: absolute;
    right: 0px;
    top: 100%;
    padding-top: 0.75rem;
}
.emGYim {
    cursor: auto;
    height: 25.625rem;
    width: 26.5rem;
    background-color: rgb(23, 24, 27);
    border-radius: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px 0px;
    padding: 1rem 0px;
}
.emGYim .user-info {
    width: 100%;
    height: 2.625rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 1.125rem;
}
.left {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex: 1 1 0%;
}
 .right {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.emGYim .user-info .left {
    display: flex;
}
.emGYim .user-info .right {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 0.25rem;
    height: 1.25rem;
}
.emGYim .user-info .left > img {
    width: 2.625rem;
    height: 2.625rem;
    border-radius: 50%;
}
.emGYim .user-info .left .name-level {
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    margin-left: 0.625rem;
}
.emGYim .user-info .left .name-level p {
    margin: 0px;
    font-size: 1rem;
    color: rgb(245, 246, 247);
    line-height: 1.25rem;
    font-weight: bold;
}
.emGYim .user-info .left .name-level .level {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.125rem;
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
.emGYim .user-info .left .name-level .level .user-level {
    margin-left: 0.375rem;
}
.jouJMO {
    font-size: 0.75rem;
    font-weight: bold;
    color: rgb(23, 24, 27);
    width: 2.25rem;
    height: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(177, 182, 201);
    border-radius: 0.625rem;
}
.emGYim .user-info .left .name-level .level .user-level .level-wrap span {
    font-weight: bold;
    font-size: 0.75rem;
}
.jouJMO span {
    line-height: 1rem;
}
.emGYim .vip-info {
    margin: 1.25rem 1.125rem 0px;
    cursor: pointer;
}
.emGYim .vip-info .num {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 1rem;
    margin: 0px 1.25rem;
}
.emGYim .vip-info .num > p {
    font-size: 0.75rem;
    margin: 0px;
    color: rgb(245, 246, 247);
}
.emGYim .vip-info .num > p span {
    color: rgba(153, 164, 176, 0.7);
    margin-right: 1rem;
}
.emGYim .vip-info .vip-bg {
    height: 2.25rem;
    margin-top: 0.3125rem;
    position: relative;
    background: rgb(30, 32, 36);
    border-radius: 1.125rem;
    font-size: 0px;
    padding: 0px 1.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.emGYim .vip-info .vip-bg .bg {
    width: 92%;
    height: 0.5rem;
    background-color: rgb(67, 74, 85);
    border-radius: 0.25rem;
}
.emGYim .vip-info .vip-bg .bg_status {
    width: 4%;
    height: auto;
    font-size: 0.68rem;
    font-weight: 900;
    text-align: center;
    white-space: nowrap;
    margin-left: 1%;
    margin-top: -0.125rem;
}
.emGYim .vip-info .vip-bg .bg .status {
    z-index: 2;
    height: 0.5rem;
    border-radius: 0.25rem;
}
.emGYim .link-info {
    margin: 0.625rem 1.125rem;
    padding: 0.75rem 0.5rem;
    display: flex;
    flex-wrap: wrap;
    border-radius: 1.25rem;
    background-color: rgb(30, 32, 36);
}
.emGYim .link-info .link-item {
    height: 2.25rem;
    width: 50%;
}
.emGYim .link-info .link-item .hover {
    width: 11.25rem;
    height: 100%;
    border-radius: 1.125rem;
    padding-left: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}
.emGYim .link-info .link-item .hover:hover {
    background: #fff;
    color: black;
}
.emGYim .link-info .link-item .hover .icon {
    margin-right: 0.875rem;
}
.emGYim .logout {
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: 1rem;
    margin-left: 1.125rem;
}
.emGYim .logout span {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 1.5rem;
    cursor: pointer;
    width: 7.5rem;
    white-space: nowrap;
}
.emGYim .logout span .icon {
    margin-right: 0.875rem;
}



/* =========================================== mobile ================================== */

@media screen and (max-width: 650px){
    .setting-wrap {
        position: absolute;
        right: 0px;
        top: 100%;
        width: 130%;
        padding-top: 0.75rem;
    }
    .setting-wrap {
        padding-top: 0px;
    }
    .emGYim {
        width: 100%;
        left: 0px;
        border-radius: 0px 0px 1.25rem 1.25rem;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 16px 0px;
    }
    .emGYim {
        cursor: auto;
        height: 25.625rem;
        width: 105%;
        background-color: rgb(23, 24, 27);
        border-radius: 1.25rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px 0px;
        padding: 1rem 0px;
    }
    .emGYim .user-info {
        width: 100%;
        height: 2.625rem;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 0px 1.125rem;
    }
    .emGYim .user-info .left {
        display: flex;
    }
}

</style>