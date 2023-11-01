<script>
    import IoLanguageOutline from "svelte-icons-pack/io/IoLanguageOutline";
    import "./styles/index.css"
    import "./styles/coinrain.css"
    import "./styles/gif.css"
    import {  goto } from "$app/navigation"
    import SiRainmeter from "svelte-icons-pack/si/SiRainmeter";
    import BsTelegram from "svelte-icons-pack/bs/BsTelegram";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import CgInfo from "svelte-icons-pack/cg/CgInfo";
    import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
    import IoClose from "svelte-icons-pack/io/IoClose";
    import BsFiletypeGif from "svelte-icons-pack/bs/BsFiletypeGif";
    import BsEmojiSunglasses from "svelte-icons-pack/bs/BsEmojiSunglasses";
    import FaSolidAt from "svelte-icons-pack/fa/FaSolidAt";
    import WiRaindrop from "svelte-icons-pack/wi/WiRaindrop";
    import RiFinanceCopperCoinLine from "svelte-icons-pack/ri/RiFinanceCopperCoinLine";
    import { afterUpdate,  tick } from 'svelte';
    import axios from "axios"
    import { GIFs } from "./data/index"
    import { emojis } from "./data/index"
    import {  createEventDispatcher,  onMount } from "svelte";
    import {tipped_user } from "$lib/store/tipUser"
    import { profileStore } from '$lib/store/profile';
    import { handleisLoggin } from "$lib/store/profile";
    import { handleAuthToken} from "$lib/store/routes";
    import {handleCountdown} from "../../lib/crashgame/socket"
    const { handleChattingMessages } = handleCountdown()
    let element;
    let newMessages = ''
    import { chats } from "$lib/chat-room/store/index"
    import { ServerURl } from "../backendUrl"
        import Mobile from "./mobile.svelte";
    let URL = ServerURl()
    
    
    onMount(async () => {
        await axios.get(`${URL}/api/users/previus-chats`)
        .then((res) => {
            chats.set(res.data)
        })
    })
    
    const handleSendMessage = (async (e, name) => {
            if (e.key === "Enter" && name.newMessages || e.type === "click" || e === "gifHit") {
            if (e.key === "Enter") {
                e.preventDefault();
            }
    
            if ($chats && element) {
                scrollToBottom(element);
            }
    
            if (newMessages === "/rain ") {
                goto("/user/rain")
            }  
            else if (newMessages === "/coindrop ") {
                goto("/user/coindrop_send")
            }  
            else if (newMessages == "/tip @ ") {
                tipped_user.set(newMessages)
                goto("/user/tip")
            }
            else {
                if($handleisLoggin){
                    let data = {
                        msg_id: Math.floor(Math.random() * 230000000),
                        user_id: $profileStore.user_id,
                        type: name.type,
                        text: name.newMessages ? name.newMessages : ".",
                        profle_img: $profileStore.profile_image,
                        username: $profileStore.username,
                        gif: name.gif ? name.gif : ".",
                        hide_profile:$profileStore.hide_profile,
                        vip_level: $profileStore.vip_level,
                        time: new Date()
                    }
                    handleChattingMessages(data)
                }else{
                    goto("/login")
                    handlecloseChat()
                }
        }
            newMessages = ''
            isGif = false
        }
    })
    
    let chatContainer;
    
    onMount(() => {
      scrollToBottom();
    });
    
    afterUpdate(() => {
      scrollToBottom();
    });
    
    const dispatch = createEventDispatcher()
    const handlecloseChat = (() => {
        dispatch("closeChat")
    })
    
    function scrollToBottom() {
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      }
    
    let isGif = false
    const handleGIF = (() => {
        if (isGif) {
            isGif = false
        } else {
            isGif = true
        }
    })
    
    let isEmoji = false
    const handleEmoji = (() => {
        if (isEmoji) {
            isEmoji = false
        } else {
            isEmoji = true
        }
    })
    
    const handleMerge = ((e) => {
        newMessages += (e)
    })
    
    let isTipsControl = false
    let tipsControl = [{
            id: 0,
            img: "https://static.nanogames.io/assets/user.22808cc8.svg",
            Itemfunction: "/User",
            text: "@User view user",
            isSelected: true
        },
        {
            id: 1,
            img: "https://static.nanogames.io/assets/tip.35667d2b.svg",
            Itemfunction: "/Tip",
            text: "@User tip user",
            isSelected: false
        },
        {
            id: 2,
            img: "https://static.nanogames.io/assets/rain.91c937f7.svg",
            Itemfunction: "/Rain",
            text: "Make it rain",
            isSelected: false
        },
        {
            id: 3,
            img: "https://static.nanogames.io/assets/coindrop.8fcb1038.svg",
            Itemfunction: "/Coindrop",
            text: "Tip group",
            isSelected: false
        },
    ]
    
    $: if (newMessages === "/") {
        isTipsControl = true
    } else {
        isTipsControl = false
    }
    
    const handleTipsControls = ((e) => {
        for (let i = 0; i < tipsControl.length; i++) {
            tipsControl[i].isSelected = false
        }
        tipsControl[e].isSelected = true
        if (e === 0) {
            newMessages = "/user @"
        }
        if (e === 1) {
            newMessages = "/tip @"
        }
        if (e === 2) {
            newMessages = "/rain "
        }
        if (e === 3) {
            newMessages = "/coindrop "
        }
    })
    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }
</script>

<!-- =========================== mobile ================================= -->

<div class="mobile">
    <div class="sc-bkkeKt kBjSXI" style="background-color: transparent;">
        <div class="dialog sc-dkqQuH ikQOCU">
            <div class="dialog-head has-close">
                <div class="sc-hJZKUC dWgZek">
                    <div class="select-wrap">
                        <div class="sc-jJoQJp gOHquD select">
                            <div class="select-trigger">
                                <div class="select-label">English</div>
                                <div class="arrow ">
                                    <Icon src={RiSystemArrowRightSLine}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-features">
                        <div class="inform">
                            <Icon src={CgInfo}  size="25"  color="rgb(85, 91, 101)"  title="arror" />
                        </div>
                        <div class="sc-iWBNLc bXthlR rich-btn">
                            <img alt="rich" src="https://static.nanogames.io/assets/rich.8786d13b.png">
                        </div>
                        <button on:click={handlecloseChat} class="sc-ieecCq fLASqZ close-icon">
                            <Icon src={IoClose}  size="17"  color="rgba(153, 164, 176, 0.8)"  title="arror" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="dialog-body no-style sc-dkqQuH ikQOCU" style="z-index: 2; transform: none;">
                <div id="public-chat" class="sc-ewSTlh hHMWvP">
                    <div class="sc-bSqaIl eA-dYOl">
                        <div bind:this={chatContainer} class="sc-dkPtRN gtrd scroll-view sc-cNKqjZ dPmCMO sc-jvvksu fuYrTE chat-list">
                            <div class="sc-AjmGg kgsidd">
                                {#each $chats as chat , i}
                                <div class="flat-item">
                                    <div class="sc-tAExr VfNib notranslate">
                                        <div class="head">
                                            <a class="head-link" href={`/user/profile/${chat.user_id}`}>
                                                <img class="avatar " alt="" src={chat.profle_img}>
                                                <div class="sc-jQrDum jouJMO user-level type-1">
                                                    <div class="level-wrap">
                                                        <span>V</span><span>{chat.vip_level}</span>
                                                    </div>
                                                </div>
                                                {#if chat.vip_level === 0}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                </div>
                                                {:else if chat.vip_level === 1 ||  chat.vip_level === 2  ||  chat.vip_level === 3}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/bh.d27abdd5.png">
                                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                </div>
                                                {:else if chat.vip_level === 4 || chat.vip_level === 5 || chat.vip_level === 6 || chat.vip_level === 7}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/b.d9e6b0ec.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                </div>
                                                {:else if chat.vip_level === 8 || chat.vip_level === 9 || chat.vip_level === 10  || chat.vip_level === 11  || chat.vip_level === 12  || chat.vip_level === 13}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/sh.ddd2bd05.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                                </div>
                        
                                                {:else if chat.vip_level === 14 || chat.vip_level === 15 || chat.vip_level === 16  || chat.vip_level === 17  || chat.vip_level === 18  || chat.vip_level === 19 || chat.vip_level === 20 ||  chat.vip_level === 20}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/s.7c2e9f37.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAflBMVEUAAADl5f/U1PzAwOV4eLrr6//////Ly/HS0vXFxerb2/v09P/f3/7KyuTOzvS5uea+vubCwu/AwObBwea/v+afn9GHh8N+fry/v+d9fbq5ueKyst2mptaUlMp4eLnAwOZ5ebzAwOe/v+XBweV4eL7Bwee/v+a/v+h4eLl6ercEdekCAAAAKnRSTlMAWVlZWVlZWVlZWVlZBFkPTQlURyhZWVkwI1lZWVlLQj41Ih0aFDw4My7zJdT+AAACBklEQVRIx83X2XKjMBAFUCRLCMRm4hDbWRzHcbb//8HRSMCtsURL1LzkPnk7RV9VUY2zpXSHQ5etS3PYmByaNeZyt7G5uySTj91mzu4jifSf9tdlUZT2xWefUsYRZmJZvNpla3/W1symbu3b7SVeRlniohVdrf9yk2kQy9yMX32ozL075oJ5Kdzx33vV3lHmNqj2/g/pXr3JgjO+dijzhmMOB8f/1lNlyGrdFsccSa1ctS7bhcrQ1XbZ8mRycca/SAVJnlcsEOVQ+EK5ifTn4xTKbW5PgnMKVUZAgQQRjKc0pxFMXkkQAsmRwNnJKGSFpzSFZB4yUsqaQFWQmDBqPJ+4aArJIJHpBwHDOI2YR0x0DFUguFAMsYkgPI6qW8NSEEgyqplcjTjXa5Hm6Qi3ZgjVYTQTIFZrPdbTywhfGT+/MZDxMAKJBUjVPD2lQ0alG7sDxgXQppHWLYBp1ZRFnBTluGqw1FR8MuxrrM+WnAzrE4uaZi0Wtf9IoIpgGeU/Eoz7euPYUpmNKeNn/4wZ/cme91koQjw8OVZ4x/z0IEQYmbw8ohrKPL4IsYRshqkaygxCRJCYqik1lRFxNFebyyQhVw1laITsB1tmL5IQZhwGTBZHyO9Fp2PTHE+r0Hc33mffqeh8bPBhczzH0emn9/4Z/JxIdL5mwVzPS+iKsRCMec3+L38A3Osupj7TKGcAAAAASUVORK5CYII=">
                                                 </div>
                        
                                                    
                                                {:else if chat.vip_level === 22 || chat.vip_level === 23 || chat.vip_level === 24  || chat.vip_level === 25  || chat.vip_level === 26  || chat.vip_level === 27 || chat.vip_level === 28 ||  chat.vip_level === 29}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/gh.d5753240.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                                                </div>
                        
                                                {:else if chat.vip_level === 30 || chat.vip_level === 31 || chat.vip_level === 32  || chat.vip_level === 33 || chat.vip_level === 34  || chat.vip_level === 35 || chat.vip_level === 36 ||  chat.vip_level === 37}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/g.d9fc75c0.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAmVBMVEUAAAD/ul/8qT/omzTOdQv2zjn/4mr0pDr1qkjsnjX/ulzwoTj1qlb/3WX4qDz5szzomjL8tFL+t1jdiSDUgBblmi3xojf8sUn/yWH5uzzomTPNdw//0mX/wl/5wjv3xznOdwz721XhkSnpmjPomjTqnDbpnTPpnjbxoDz51UfqmjHpnDPfjSbNdwvQegzmmTPMdw3NeA/NdBHulRdVAAAAM3RSTlMAWVlZWVlZWVlZWVkEWVlZSFlZWVkOCFlZWVQhWVlZWVNZWU42KyYeEVlCMhdHQTw8My5PUuIIAAACLElEQVRIx73X626qQBQFYLkJIpRbsSAFaW3VU+31/R/ujB1lBTp7D6RJ1y+j+cJaJGRwRiU/HvPZtARHS+QYTDG7tfWd9W40OcVWl/g0iqzerXMWnrf4/vC+0o95llfwfMPwPfn5WTNtv70SkY5t9ww5yDHL1OiSLuW0AzXmSY5JjF4SOe1ppRyzRjMEHdeYNhjjpoYiqauadniRYxKDSCKnvRx+jPEMJl5vWrBTj6Gm7cS0PFaOYabF+SxWjeGnxTOyWV2THc/INVRmPi9UFZcX5KmNQvl3psugcH5OPSQmEGXmYe8uCMKhewEGKr0zWVRLI1WBZgwqQpAL80UzDuEiyEMTcahQkPCf4zjlSAQi0nD1wmEzRybiUKEgaMffCDSTMXlUd+TB6RKxCJeSRGZjEggJ0QwX0qF7ECzSIjRDOw1KGmc0wgNQDlFDIjwA0UgEokIlieTTDLQpo6jc4I4rkRhzTSPA9XNUNhsK+SB8gNzEHJ+lREKZky5kyQNgcTOO3CzkAZBfTnQwmlxO+hyHGhhLxKHWOz5ddgyOTxzUmEaNwUGNVwJ0pJpt99SblKtoxrxX2Rmm/RyT2QoikH37iGn9MY+3NoUEszANYyxBaCSSXadhTGbbPEJH10UzHQID0SN0RDMegYHoETpmGZrpEfJHqG0no9cqCKrXKaj9zOVX+Wc7Er1VAb4Mqjc9ar/y4ff5V0sj8dPHifhH9UGhqlox/6qqava7/AetljkjNbdgugAAAABJRU5ErkJggg==">
                                                </div>
                        
                                                {:else if chat.vip_level === 38 || chat.vip_level === 39 || chat.vip_level === 40  || chat.vip_level === 41 || chat.vip_level === 42  || chat.vip_level === 43 || chat.vip_level === 44 ||  chat.vip_level === 45}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                                                </div>
                        
                                                {:else if chat.vip_level === 46 || chat.vip_level === 47 || chat.vip_level === 48  || chat.vip_level === 49 || chat.vip_level === 50  || chat.vip_level === 51 || chat.vip_level === 52 ||  chat.vip_level === 53}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAACpef+bYfyMVultNsnGo/+VXfSeZ/WndP6faPyRWu+kcPyXYPaqduuNWeuwf/+KXfG+mP+zhv6ASdyMVumBTNu4jv6JUeR3QNKMVeqNVumNVOqMV+mQWOqNVettOMduN8iNV+twO8iDTN9vOcZuN8hvN8huN8hvN8j5AKtTAAAAKXRSTlMAWVlZWVlZWVlZWVlZBA9ZCFlZWVMdWVlZTEdANismV1EyJRdHQTwzLuTl3dsAAAIYSURBVEjHvdfpUoMwFAVg1pCwlzaorZYubu//hFZCPI0hNzDOeH51wG+8J8rcErhSn891sC7VOb7lXK0xx108ZndcTK77+Cf76yLSHsafzrMsHz8cWn+Zl3hMxsOQZ+rzi6eaVGVKHo7hpaomCVKrMnkR/qTIVbXaVeZZTSNCI0JdfW5ny+x0GTO62s6uJp9QxgyqPUmzzAFl7KDaobbKZCGRzKhWHefLuKodb9VqVYaBuBlT1epgP1eGrrYPnJM1jXPGb1SGcyZNuzmVTyibN1AgImIESsc0vypFEYU2qa0KEc0iGJ37ySIKNTDppgMhUKcI0o9lCNT0qZ0NFxTqLDAdfEGg3ia96kSNZ5HpzAWFOrOMIsRB4C+EMjoRjRqjzBRBIZwFJsMp2AjR/weI8KMNyqCRD/XqmBHuRwUefS/CAyB+o8KBQKLFCHfXIP00A/FCiKmecCKOW8UN6M9CcO5AIL4AlZjan3xCMYtW/aJ4WgDlMlKqBaBWDRhNplWDpca8k2GpYX3SjGF9YlHTM5ZY1HeRqOYuI+0vH84ZGfG9Ktmqm6VJSnV1m1hgRMnjA2Y0J3t4TFwITBsQFxqzvavG9GQJicByxnIQD8KMmMyDwED8CDNiMj8CA/Ej5L/QMKxGr5equryuQaePenrOPk4L0ZuscLGSb350+mytN4PPkxsNyfB+dbxRvQ8OJC8t8VZ1kcHf8gWGpC2PSBHvXgAAAABJRU5ErkJggg==">
                                                </div>
                                                
                                                {:else if chat.vip_level === 54 || chat.vip_level === 55 || chat.vip_level === 56  || chat.vip_level === 57 || chat.vip_level === 58  || chat.vip_level === 59 || chat.vip_level === 60 ||  chat.vip_level === 61}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/ph.7f694585.png">
                                                </div>
                                                {:else if chat.vip_level === 62 || chat.vip_level === 63 || chat.vip_level === 64  || chat.vip_level === 65 || chat.vip_level === 66  || chat.vip_level === 67 || chat.vip_level === 68 ||  chat.vip_level === 69}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                </div>
                        
                                                {:else if chat.vip_level > 69}
                                                <div class="sc-khQegj fPtvsS level levelnums_2">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/p.47604fa2.png">
                                                </div>
                                             {/if}
            
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="title">
                                                <div class="name">
                                                    <a href={`/user/profile/${chat.user_id}`}>
                                                        <span>{chat.username}</span>
                                                    </a>
                                                    <div class="time">{formatTime(chat.time)}</div>
                                                </div>
                                            </div>
                                            {#if (chat.type === "normal")}
                                            <div class="msg-wrap">
                                                <div class="sc-jKTccl bkGvjR">{chat.text}</div>
                                            </div>
                                            {:else if (chat.type === "wol")}
                                            <!-- ====================== Win or lose ======================= -->
                                            <div class="msg-wrap">
                                                <div class="sc-eVmaCL blLCEp">
                                                    <div class="sc-jKTccl sc-bUbRBg sc-gA-DPUo bkGvjR Gdkwx hsvoqO full-message">
                                                        <div class="share-message">Almost busted lol</div>
                                                        <div class="wrap">
                                                            <div class="sc-ekRyGy dWrldy">
                                                                <div class="mid-area">
                                                                    <div class="sc-cdJjGe ljeDJu msg" style="cursor: pointer;">
                                                                        <div class="titles">
                                                                            <div class="sc-fDMmqs gPLFex animation-win">
                                                                                <div class="star-item item-1"></div>
                                                                                <div class="star-item item-2"></div>
                                                                                <div class="star-item item-3"></div>
                                                                                <div class="star-item item-4"></div>
                                                                            </div>
                                                                            <div class="word">
                                                                                <p class="one">Winning tastes sweet!</p>
                                                                                <p class="two">Mines Wow Moment</p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="bet-area open">
                                                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                                                                <use xlink:href="#icon_Mines"></use>
                                                                            </svg>
                                                                            <p>Bet ID: #6397680204923891</p>
                                                                            <div class="right">
                                                                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                                                                    <use xlink:href="#icon_Arrow"></use>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                        <div class="info-area">
                                                                            <div class="left">
                                                                                <p>
                                                                                    <img alt="" src="https://static.nanogames.io/assets/bigwin.562a3883.png">
                                                                                </p>
                                                                                <div class="sc-iMrobD bJlNFA animation-card-wrap left">
                                                                                    <div class="animation-card win">
                                                                                        <div class="win-ribbon">
                                                                                            <img alt="" src="https://static.nanogames.io/assets/ribbon.ea676df2.gif" class="">65.0569x</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="right">
                                                                                <div class="top">
                                                                                    <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp_logo.png">
                                                                                    <p>Profit</p>
                                                                                </div>
                                                                                <div class="sc-iMrobD bJlNFA animation-card-wrap right-win">
                                                                                    <div class="animation-card win">
                                                                                        <div class="win-ribbon">
                                                                                            <img alt="" src="https://static.nanogames.io/assets/ribbon.ea676df2.gif" class="delay">
                                                                                            +32.0
                                                                                            <span>PPD</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="bottom-btns">
                                                                    <div class="sc-kQoPux hjpnCZ animation-like">
                                                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon common">
                                                                            <use xlink:href="#icon_Like"></use>
                                                                        </svg>
                                                                        <div class="like-dom"></div>
                                                                        <span class="count-info">01</span>
                                                                    </div>
                                                                    <div class="share">
                                                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                                                            <use xlink:href="#icon_Share"></use>
                                                                        </svg>Share
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {:else if (chat.type === "tip")}
                                            <!-- ====================== tips ====================== -->
                                            <div class="msg-wrap">
                                                <div class="sc-jKTccl sc-bUbRBg sc-iuqRDJ bkGvjR Gdkwx gkHCXh ane">
                                                    I tipped&nbsp;&nbsp;
                                                    <a class="cl-primary" href="/user/profile/285947">{chat.tipped_user}</a>
                                                    <div class="msg-cont">
                                                        <img class="coin-icon" alt="" src={chat.tipped_coin_image}>
                                                        {chat.tipped_amount , chat.tip_Token}\
                                                    </div>
                                                </div>
                                            </div>
                                            {:else if (chat.type === "gif")}
                                            <!-- ============================= Emoji ============================= -->
                                            <div class="msg-wrap">
                                                <div class="sc-jKTccl bkGvjR">
                                                    <div class="sc-kiIyQV cXaEwo msg-gif">
                                                        <img src={chat.gif} alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- ======================= coin drop============== -->
                                            {:else if (chat.type === "coin_drop")}
                                            <div class="msg-wrap">
                                                <div class="sc-PZsNp cciZxO">
                                                    <div class="sc-dGXBhE cfLlrJ">
                                                        <img alt="coindrop-more" src="https://static.nanogames.io/assets/parachute-fall.193a2437.png" class="right-open-img">
                                                        <div class="coindrop-status">Completed</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {:else if (chat.type === "tips")}
                                            <!-- ===============================  coin tips ================================= -->
                                            <div class="msg-wrap">
                                                <div class="sc-jKTccl sc-bUbRBg sc-iuqRDJ bkGvjR Gdkwx gkHCXh ane">
                                                    I tipped&nbsp;&nbsp;
                                                    <a class="cl-primary" href="/user/profile/336277">
                                                        @vvvvx
                                                    </a>
                                                    <div class="msg-cont">
                                                        <img class="coin-icon" alt="" src="/coin/USDT.black.png">
                                                        1 USDT
                                                    </div>
                                                </div>
                                            </div>
                                            {/if}
                                        </div>
                                    </div>
                                </div>
                                {/each}
                            </div>
                        </div>
                    </div>


                    <div class="chat-infos "></div>
                    <div class="sc-hkgtus ddROGz">
                        <div style="transition: all 0.5s ease; gap:10px" class="send-input">
                            <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset input-area">
                                <div class="input-control">
                                    <textarea bind:value={newMessages} placeholder="Your Message" style="height: 44px;"></textarea>
                                    <button on:click={handleEmoji} class="sc-JkixQ cVsgdS emoji-r-wrap">
                                        {#if isEmoji}
                                        <div class="emoji-box-wrap">
                                            <div class="sc-dkPtRN jScFby scroll-view emoji-box">
                                                {#each emojis as emoji }
                                                <button on:click={()=> handleMerge(emoji)} class="emoji">{emoji}</button>
                                                {/each}
                                            </div>
                                        </div>
                                        {/if}
                                        <Icon src={BsEmojiSunglasses}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                    </button>
                                </div>
                            </div>
                            {#if newMessages}
                                <button  on:click={()=>handleSendMessage(event, {newMessages, type: "normal"})} class="sc-JkixQ cVsgdS emoji-r-wrap">
                                    <Icon src={BsTelegram}  size="34"  color="#fff" title="arror" />
                                </button>
                            {/if}
                         
                        </div>
                        <div class="send-controls">
                            <div class="left-actions">
                                <a class="chat-icon" href="/user/rain">
                                    <Icon src={FaSolidAt}   size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </a>
                                <div class="command-btn">
                                    <Icon src={IoLanguageOutline}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </div>
                                <a class="chat-icon" href="/user/coindrop_send">
                                    <Icon src={SiRainmeter}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </a>
                            </div>
                            <div class="sc-dkQkyq gbjudO gift-r-wrap hide-gift">
                                <button class="gift-btn">
                                    <Icon src={BsFiletypeGif}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    .eA-dYOl {
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
        background: rgb(30, 32, 36);
    }
    
    .cVsgdS .emoji-box-wrap {
        width: 280px;
        height: 200px;
        background-color: rgb(23, 24, 27);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 12px 0px;
        padding: 10px 10px 40px;
        border-radius: 10px;
        position: absolute;
        bottom: 2.8125rem;
        left: -250px;
        z-index: 2;
    }
    
    .cVsgdS .emoji-box {
        display: flex;
        flex-wrap: wrap;
    }
    
    .gbjudO {
        position: relative;
    }
    
    .gtrd {
        box-sizing: border-box;
        height: 160px;
        overflow-y: auto;
        /* background: red; */
        touch-action: pan-y;
        overscroll-behavior: contain;
    }
    
    .hsvoqO {
        padding: 0.5rem 0.625rem;
    }
    
    .Gdkwx {
        width: 100%;
    }
    
    .cVsgdS .emoji {
        width: 36px;
        height: 36px;
        font-size: 25px;
        cursor: pointer;
        text-align: center;
        line-height: 36px;
    }
    
    .dWrldy .mid-area .titles .word {
        margin-left: 0.375rem;
    }
    
    .dWrldy .mid-area .titles .word {
        margin-left: 0.375rem;
    }
    
    .dWrldy .mid-area .titles .word .two {
        max-width: 200px;
    }
    
    .gkHCXh {
        background-image: url(https://static.nanogames.io/assets/tip_glod.df7fc7f5.png), linear-gradient(30deg, rgb(98, 86, 49), rgb(58, 56, 45));
        background-size: 90%, 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        border: 1px solid rgb(63, 58, 41);
        overflow: hidden;
    }
    
    .Gdkwx {
        width: 100%;
    }
    
    .bkGvjR {
        user-select: text;
        font-size: 0.875rem;
        vertical-align: top;
        color: rgb(202, 209, 217);
        line-height: 1.125rem;
        word-break: break-word;
        overflow: hidden;
        border-radius: 1.25rem;
        padding: 0.625rem;
        background-color: rgba(49, 52, 58, 0.6);
    }
    
    .cl-primary {
        color: var(--primary-color);
    }
    
    .gkHCXh .msg-cont {
        background-color: rgba(246, 199, 34, 0.3);
        border-radius: 0.625rem;
        padding: 0.625rem 0.875rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(255, 255, 255);
        font-weight: 800;
        margin-top: 0.5625rem;
    }
    
    .gkHCXh .msg-cont .coin-icon {
        width: 1.125rem;
        margin-right: 0.4375rem;
    }
    
    .ljeDJu .titles .word .two {
        margin: 0px;
        font-size: 0.75rem;
        height: 1.125rem;
        display: -webkit-box;
        -webkit-box-align: center;
        align-items: center;
        color: rgba(153, 164, 176, 0.6);
        text-transform: capitalize;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .VfNib .content .title .name>div,
    .VfNib .content .title .name>a {
        height: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-size: 12.78px;
    }
    
    .VfNib .content .title .name a {
        line-height: 1.125rem;
        color: rgba(153, 164, 176, 0.6);
        font-weight: 600;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
    }
    
    .VfNib .content .title .name a>span {
        max-width: 12.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        opacity: 0.9;
    }
    
    .hsvoqO .share-message {
        line-height: 1.125rem;
        margin-bottom: 0.5rem;
        padding-left: 0.125rem;
    }
    
    .hsvoqO .wrap {
        height: 13.25rem;
        width: 265px;
    }
    
    .ljeDJu .info-area .left>p>img {
        width: 5rem;
        margin-left: -0.5rem;
        margin-bottom: -0.3rem;
    }
    
    .dWrldy .mid-area {
        padding: 0.5rem 0.625rem;
        background-color: rgba(36, 38, 43, 0.85);
        border-radius: 0.625rem;
    }
    
    .dWrldy .mid-area .info-area>.right .animation-card-wrap .animation-card .win-ribbon {
        font-size: 0.745rem;
    }
    
    .ljeDJu .titles {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .ljeDJu .info-area .right .top {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-left: 0.5rem;
        height: 1.25rem;
    }
    
    .ljeDJu .info-area .right .top>p {
        margin: 0px;
        font-size: 0.75rem;
        color: rgba(153, 164, 176, 0.6);
    }
    
    .dWrldy .mid-area .bet-area {
        margin-top: 0.625rem;
        height: 2.75rem;
        border: 0px;
        border-radius: 0.625rem;
    }
    
    .dWrldy .bottom-btns {
        height: 1rem;
        margin-top: 0.625rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .ljeDJu .bet-area>p {
        margin: 0px 0px 0px 0.875rem;
        color: rgb(245, 246, 247);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .dWrldy .mid-area .bet-area .right {
        margin-left: auto;
        margin-right: 0.6rem;
        height: 0.875rem;
    }
    
    .dWrldy .mid-area .info-area {
        margin-top: 0.375rem;
    }
    
    .ljeDJu .info-area {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        margin-top: 0.75rem;
    }
    
    .ljeDJu .info-area .left {
        width: 49%;
    }
    
    .dWrldy .mid-area .info-area>.left p {
        margin-left: 0.5rem;
    }
    
    .ljeDJu .info-area .left>p {
        margin: 0px 0px 0px 1rem;
        font-size: 0.75rem;
        height: 1rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgba(153, 164, 176, 0.6);
    }
    
    .ljeDJu .info-area .left>p {
        margin: 0px 0px 0px 1rem;
        font-size: 0.75rem;
        height: 1rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        color: rgba(153, 164, 176, 0.6);
    }
    
    .dWrldy .mid-area .info-area img {
        animation: auto ease 0s 1 normal none running none;
    }
    
    .ljeDJu .info-area .left .animation-card-wrap {
        width: 100%;
        height: 3.5rem;
        margin-top: 0.25rem;
        border-radius: 1.25rem;
    }
    
    .bJlNFA .animation-card.win {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAASFBMVEUAAAAmKC0mKS4yNjsqLzgnKS4nLC8nKS4mKC4nKS8nKi8oLDAoLzIpKTAqLDKAgIAoKS4uLjEnKS4mKi4mKi8oKi9LS0smKC7J+jS1AAAAGHRSTlMAZmAGDFsoVFg3QR8UJBkCMRBGTzwsA0uWLpxyAAAC1ElEQVR42u3caa6jMBAE4CrbYBYDYb//TSeaSIRJnPx4r50wor8LgBrFrvYSKKWUUkoppZRS/znXQEW4YoKK1YUDVKwuHKFidaGHeuAyXhmoSF2uFpzb0vTRutDh5FaacWr6x7ow4ORq/nWtTt7v6sIaZ+e5MYabHGeXM+qCs1syxpQ4vQtjKpyeNYzIWiR2/EAwMWrokZIrLOTUFvJ6vjA5JOMK9hDTsEcCA18wFwtZ+4TdCtaFLRJo+VKWdxDUNv09YTeCdWGDFEa+5mvIcaRZy6bNJKNSw6sZKZR8ZwwQU8lHpTxd7nKGb5jSQUyQiEphykO31SVh7qrelsVC0rof2hf8SFeQHG/VyXkzQF4gPzct1f8O7fiRefuVb9/UQ97KF7LZQpwXGNoX8/yuEFe/nKkXJDBINGUln0Ba5xlT5B1SCE+PEervLITNjFqQxsgd38j1d1kOUdYwxiONWig69nzmWyB5tquQxFLwrhXv79YAKY53meFmRhLz/kE2QX9XOdE5ohjKPFj0Zvc1U7BrdWnCgppXhdy0vycTSMNYXeq+e/4MFknNJIc0bYwpIW8L2AUSK3/bXFepG7v4yviA1AbW+IWQsIOJqz60q7SMTioO7TuYdLr1Qxu0Fr/QxKL6gqSsJ2lxaEvBR1WH1FzGDMc280mO9IJZcWixNibgA+qD7+hP3GLptvHe4ROOfc6sN1ssvYV1PUx502Gn1TMIb8P6DBUN6y3Uk+r4wes7upUFDingu6w/6J0QP1l8lTvoGdOVRYsbmx/0Hb+iIll2AMJkqHfjHnYafDt7vYQQW/bTbP72cLleptypSb2c8XY3UyPonh24OWoE/YZ+W3/VNnevNrzTPvfNYQnTQ6FrS88HXsffG9tUGfcOvsfwURNvjMmywmsf+c8eu/4hRIzXu9pxs94vjbNkprNRzKArVHG1TtJxna7cKaWUUkoppZT6lj+R5hbb13ebwwAAAABJRU5ErkJggg==);
    }
    
    .dWrldy .bottom-btns .share,
    .dWrldy .bottom-btns .animation-like {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
        margin-left: 0.75rem;
        cursor: pointer;
        color: rgba(153, 164, 176, 0.6);
    }
    
    .dWrldy .mid-area .info-area>.left .animation-card-wrap .animation-card {
        font-size: 1.125rem;
        border-radius: 0.625rem;
    }
    
    .bJlNFA .animation-card.win {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAASFBMVEUAAAAmKC0mKS4yNjsqLzgnKS4nLC8nKS4mKC4nKS8nKi8oLDAoLzIpKTAqLDKAgIAoKS4uLjEnKS4mKi4mKi8oKi9LS0smKC7J+jS1AAAAGHRSTlMAZmAGDFsoVFg3QR8UJBkCMRBGTzwsA0uWLpxyAAAC1ElEQVR42u3caa6jMBAE4CrbYBYDYb//TSeaSIRJnPx4r50wor8LgBrFrvYSKKWUUkoppZRS/znXQEW4YoKK1YUDVKwuHKFidaGHeuAyXhmoSF2uFpzb0vTRutDh5FaacWr6x7ow4ORq/nWtTt7v6sIaZ+e5MYabHGeXM+qCs1syxpQ4vQtjKpyeNYzIWiR2/EAwMWrokZIrLOTUFvJ6vjA5JOMK9hDTsEcCA18wFwtZ+4TdCtaFLRJo+VKWdxDUNv09YTeCdWGDFEa+5mvIcaRZy6bNJKNSw6sZKZR8ZwwQU8lHpTxd7nKGb5jSQUyQiEphykO31SVh7qrelsVC0rof2hf8SFeQHG/VyXkzQF4gPzct1f8O7fiRefuVb9/UQ97KF7LZQpwXGNoX8/yuEFe/nKkXJDBINGUln0Ba5xlT5B1SCE+PEervLITNjFqQxsgd38j1d1kOUdYwxiONWig69nzmWyB5tquQxFLwrhXv79YAKY53meFmRhLz/kE2QX9XOdE5ohjKPFj0Zvc1U7BrdWnCgppXhdy0vycTSMNYXeq+e/4MFknNJIc0bYwpIW8L2AUSK3/bXFepG7v4yviA1AbW+IWQsIOJqz60q7SMTioO7TuYdLr1Qxu0Fr/QxKL6gqSsJ2lxaEvBR1WH1FzGDMc280mO9IJZcWixNibgA+qD7+hP3GLptvHe4ROOfc6sN1ssvYV1PUx502Gn1TMIb8P6DBUN6y3Uk+r4wes7upUFDingu6w/6J0QP1l8lTvoGdOVRYsbmx/0Hb+iIll2AMJkqHfjHnYafDt7vYQQW/bTbP72cLleptypSb2c8XY3UyPonh24OWoE/YZ+W3/VNnevNrzTPvfNYQnTQ6FrS88HXsffG9tUGfcOvsfwURNvjMmywmsf+c8eu/4hRIzXu9pxs94vjbNkprNRzKArVHG1TtJxna7cKaWUUkoppZT6lj+R5hbb13ebwwAAAABJRU5ErkJggg==);
    }
    
    .dWrldy .bottom-btns .share>svg,
    .dWrldy .bottom-btns .animation-like>svg {
        margin-right: 0.375rem;
    }
    
    .bJlNFA .animation-card {
        width: 100%;
        height: 100%;
        background-color: rgb(60, 63, 73);
        color: rgb(245, 246, 247);
        background-size: 100%;
        font-size: 1.5rem;
        font-weight: bold;
        background-repeat: no-repeat;
        background-position: center center;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        position: relative;
        border-radius: 1.25rem;
        overflow: hidden;
        white-space: nowrap;
    }
    
    .ljeDJu .info-area .right {
        width: 49%;
        margin-left: 2%;
    }
    
    .dWrldy .mid-area .info-area>.right .top {
        height: 1rem;
    }
    
    .dWrldy .mid-area .info-area>.right .top>img {
        width: 0.875rem;
        height: 0.875rem;
        margin-right: 0.25rem;
    }
    
    .ljeDJu .info-area .right .top>img {
        width: 1rem;
        height: 1rem;
        margin-right: 2px;
    }
    
    .dWrldy .mid-area .info-area img {
        animation: auto ease 0s 1 normal none running none;
    }
    
    .hjpnCZ>svg {
        display: inline-block;
        fill: rgba(153, 164, 176, 0.6);
    }
    
    .hjpnCZ .like-dom {
        width: 3rem;
        top: -6.875rem;
        left: -1.3125rem;
        position: absolute;
        z-index: 0;
    }
    
    .hjpnCZ .count-info {
        width: 2rem;
        white-space: nowrap;
        overflow: hidden;
    }
    
    .dWrldy .bottom-btns .share,
    .dWrldy .bottom-btns .animation-like {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
        margin-left: 0.75rem;
        cursor: pointer;
        color: rgba(153, 164, 176, 0.6);
    }
    
    .bkGvjR {
        user-select: text;
        font-size: 0.875rem;
        vertical-align: top;
        color: rgb(202, 209, 217);
        line-height: 1.125rem;
        word-break: break-word;
        overflow: hidden;
        border-radius: 1.25rem;
        padding: 0.625rem;
        background-color: rgba(49, 52, 58, 0.6);
    }
    
    .ljeDJu .info-area .right .animation-card-wrap {
        width: 100%;
        height: 3.5rem;
        margin-top: 0.25rem;
        border-radius: 1.25rem;
    }
    
    .dWrldy .mid-area .info-area>.right .animation-card-wrap {
        height: 3rem;
        border-radius: 0.625rem;
    }
    
    .bJlNFA .animation-card .win-ribbon {
        width: 100%;
        height: 100%;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .bJlNFA .animation-card .win-ribbon>img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        animation: 4s ease 0s infinite normal none running ribbonAnimation;
    }
    
    .dWrldy .mid-area .info-area>.right .top {
        height: 1rem;
    }
    
    .dWrldy .mid-area .info-area>.right .top {
        height: 1rem;
    }
    
    .ljeDJu .info-area .right .top>img {
        width: 1rem;
        height: 1rem;
        margin-right: 2px;
    }
    
    .dWrldy .mid-area .info-area img {
        animation: auto ease 0s 1 normal none running none;
    }
    
    .dWrldy .mid-area .info-area img {
        animation: auto ease 0s 1 normal none running none;
    }
    
    .dWrldy .mid-area .info-area>.right .animation-card-wrap {
        height: 3rem;
        border-radius: 0.625rem;
    }
    
    .ljeDJu .info-area .right .animation-card-wrap {
        width: 100%;
        height: 3.5rem;
        margin-top: 0.25rem;
        border-radius: 1.25rem;
    }
    
    .bJlNFA.right-win .animation-card {
        font-size: 1rem;
        color: rgb(67, 179, 9);
    }
    
    .bJlNFA .animation-card.win {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAASFBMVEUAAAAmKC0mKS4yNjsqLzgnKS4nLC8nKS4mKC4nKS8nKi8oLDAoLzIpKTAqLDKAgIAoKS4uLjEnKS4mKi4mKi8oKi9LS0smKC7J+jS1AAAAGHRSTlMAZmAGDFsoVFg3QR8UJBkCMRBGTzwsA0uWLpxyAAAC1ElEQVR42u3caa6jMBAE4CrbYBYDYb//TSeaSIRJnPx4r50wor8LgBrFrvYSKKWUUkoppZRS/znXQEW4YoKK1YUDVKwuHKFidaGHeuAyXhmoSF2uFpzb0vTRutDh5FaacWr6x7ow4ORq/nWtTt7v6sIaZ+e5MYabHGeXM+qCs1syxpQ4vQtjKpyeNYzIWiR2/EAwMWrokZIrLOTUFvJ6vjA5JOMK9hDTsEcCA18wFwtZ+4TdCtaFLRJo+VKWdxDUNv09YTeCdWGDFEa+5mvIcaRZy6bNJKNSw6sZKZR8ZwwQU8lHpTxd7nKGb5jSQUyQiEphykO31SVh7qrelsVC0rof2hf8SFeQHG/VyXkzQF4gPzct1f8O7fiRefuVb9/UQ97KF7LZQpwXGNoX8/yuEFe/nKkXJDBINGUln0Ba5xlT5B1SCE+PEervLITNjFqQxsgd38j1d1kOUdYwxiONWig69nzmWyB5tquQxFLwrhXv79YAKY53meFmRhLz/kE2QX9XOdE5ohjKPFj0Zvc1U7BrdWnCgppXhdy0vycTSMNYXeq+e/4MFknNJIc0bYwpIW8L2AUSK3/bXFepG7v4yviA1AbW+IWQsIOJqz60q7SMTioO7TuYdLr1Qxu0Fr/QxKL6gqSsJ2lxaEvBR1WH1FzGDMc280mO9IJZcWixNibgA+qD7+hP3GLptvHe4ROOfc6sN1ssvYV1PUx502Gn1TMIb8P6DBUN6y3Uk+r4wes7upUFDingu6w/6J0QP1l8lTvoGdOVRYsbmx/0Hb+iIll2AMJkqHfjHnYafDt7vYQQW/bTbP72cLleptypSb2c8XY3UyPonh24OWoE/YZ+W3/VNnevNrzTPvfNYQnTQ6FrS88HXsffG9tUGfcOvsfwURNvjMmywmsf+c8eu/4hRIzXu9pxs94vjbNkprNRzKArVHG1TtJxna7cKaWUUkoppZT6lj+R5hbb13ebwwAAAABJRU5ErkJggg==);
    }
    
    .dWrldy .mid-area .info-area>.right .animation-card-wrap .animation-card {
        border-radius: 0.625rem;
    }
    
    .dWrldy .mid-area .bet-area .right {
        margin-left: auto;
        margin-right: 0.6rem;
        height: 0.875rem;
    }
    
    .dWrldy .mid-area .bet-area .right>svg {
        font-size: 0.625rem;
    }
    
    .ljeDJu .bet-area>p {
        margin: 0px 0px 0px 0.875rem;
        color: rgb(245, 246, 247);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .dWrldy .mid-area .bet-area>svg {
        width: 1.5rem;
        height: auto;
    }
    
    .ljeDJu .bet-area>svg {
        height: auto;
        width: 1.875rem;
        margin-left: 1rem;
    }
    
    .ljeDJu .bet-area {
        display: flex;
        margin-top: 0.625rem;
        background-color: rgba(45, 48, 53, 0.5);
        height: 3.5rem;
        -webkit-box-align: center;
        align-items: center;
        border-radius: 1.25rem;
        border: 1px solid rgba(45, 48, 53, 0.5);
    }
    
    /* ======================= mobile =================================== */
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
    
    .dialog-head.has-close {
        margin-right: 3.75rem;
    }
    
    .ikQOCU .dialog-head {
        width: 100%;
        margin: 0px;
    }
    
    .dWgZek {
        height: 4rem;
        position: relative;
        z-index: 1;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
        background-color: rgb(30, 32, 36);
    }
    
    .ikQOCU .dialog-head>div {
        left: 0px;
        width: 100%;
        padding: 0px;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
    
    .dWgZek .select-wrap {
        height: 100%;
        position: relative;
    }
    
    .dWgZek .select-wrap .select {
        height: 100%;
    }
    
    .gOHquD {
        position: relative;
        height: 2.5rem;
        opacity: 1;
    }
    
    .gOHquD .select-trigger {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        overflow: hidden;
        height: 100%;
        cursor: pointer;
        padding: 0px 1.25rem;
        user-select: none;
        border-radius: 1.25rem;
        background-color: rgb(23, 24, 27);
    }
    
    .dWgZek .select-wrap .select .select-trigger {
        color: rgb(245, 246, 247);
        background: transparent;
        border-radius: 0px;
        padding: 0px;
        width: 7.25rem;
        font-weight: bold;
    }
    
    .dWgZek .select-wrap .select .select-trigger .select-label {
        width: 5.75rem;
        line-height: 3.875rem;
        background-image: linear-gradient(to top, rgba(91, 174, 28, 0.15), rgba(91, 174, 28, 0) 50%);
        border-bottom: 2px solid rgb(67, 179, 9);
        text-align: center;
    }
    
    .dWgZek .select-wrap .select .select-trigger .arrow {
        width: 1.5rem;
        height: 100%;
    }
    
    .gOHquD .select-trigger .arrow {
        width: 2.5rem;
        height: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        position: absolute;
        right: 0px;
        top: 0px;
    }
    
    .dWgZek::after {
        content: "";
        position: absolute;
        bottom: -0.75rem;
        height: 0.75rem;
        width: 100%;
        background-image: linear-gradient(rgb(17, 20, 21), rgba(36, 38, 43, 0));
        opacity: 0.25;
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
    
    .dialog-body>div {
        flex: 1 1 0%;
    }
    
    .hHMWvP {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .ddROGz {
        position: relative;
        flex: 0 0 auto;
        box-sizing: border-box;
        background-color: rgba(49, 52, 58, 0.8);
        padding: 1rem 0.625rem;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
    }
    
    .kDuLvp .input-control {
        position: relative;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-radius: 1.25rem;
        border: 1px solid rgb(45, 48, 53);
        background-color: rgba(45, 48, 53, 0.5);
        height: 3.5rem;
        padding: 0px 1.25rem;
        opacity: 1;
    }
    
    .kDuLvp .input-control textarea {
        flex: 1 1 0%;
        width: 100%;
        height: 100%;
        min-width: 1rem;
        padding: 0px;
        border: none;
        background-color: transparent;
        color: rgb(245, 246, 247);
    }
    
    textarea {
        padding: 0.625rem;
        resize: none;
        box-sizing: border-box;
    }
    
    .ddROGz .send-input .input-area textarea {
        display: block;
        padding: 0.625rem 0px;
        height: 2.75rem;
        width: 100%;
        line-height: 1.5rem;
        color: rgb(202, 209, 217);
    }
    
    .kDuLvp {
        margin-top: 1rem;
    }
    
    .ddROGz .send-input {
        position: relative;
        min-height: 2.625rem;
        display: flex;
    }
    
    .ddROGz .send-controls .left-actions {
        padding-left: 0.375rem;
        margin-bottom: 0.375rem;
        display: flex;
        height: 100%;
    }
    
    .ddROGz .send-controls .left-actions .chat-icon {
        line-height: 1;
        margin-right: 1.5rem;
    }
    
    .ddROGz .send-controls .left-actions .command-btn {
        cursor: pointer;
        margin-right: 1.5rem;
    }
    
    .ddROGz .send-input .input-area .input-control {
        height: auto;
        padding: 0px 1.25rem;
        background-color: rgb(30, 32, 36);
        align-items: flex-end;
        border: 1px solid rgba(49, 52, 58, 0.8);
        border-radius: 1.375rem;
    }
    
    .ddROGz .send-input .input-area {
        position: relative;
        margin: 0px;
        flex: 1 1 0%;
        width: 100%;
        padding-right: 0px;
        transition: padding 0.4s ease 0s;
    }
    
    .kgsidd {
        position: relative;
    }
    
    .kgsidd .flat-item {
        position: relative;
        left: 0px;
        top: 0px;
        width: 100%;
    }
    
    .VfNib {
        display: flex;
        flex-direction: row;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
    
    .VfNib .head {
        width: 2.5rem;
        padding-top: 0.875rem;
        flex: 0 0 auto;
    }
    
    .VfNib .content .title .name a {
        line-height: 1.125rem;
        color: rgba(153, 164, 176, 0.6);
        font-weight: 600;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
    }
    
    .bkGvjR {
        user-select: text;
        font-size: 0.875rem;
        vertical-align: top;
        color: rgb(202, 209, 217);
        line-height: 1.125rem;
        word-break: break-word;
        overflow: hidden;
        border-radius: 1.25rem;
        padding: 0.625rem;
        background-color: rgba(49, 52, 58, 0.6);
    }
    
    .VfNib .content .msg-wrap {
        display: flex;
        position: relative;
    }
    
    .VfNib .content .title .name a>span {
        max-width: 12.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        opacity: 0.9;
    }
    
    .VfNib .content .title .name .time {
        align-self: flex-end;
        margin-left: 0.5rem;
        color: rgba(153, 164, 176, 0.6);
        font-size: 0.75rem;
    }
    
    .VfNib .head .head-link {
        position: relative;
        display: block;
    }
    
    .VfNib .head .head-link {
        position: relative;
        display: block;
    }
    
    .VfNib .content {
        width: 1%;
        flex: 1 1 0%;
        padding-top: 0.875rem;
        padding-left: 0.375rem;
        padding-bottom: 0.3125rem;
    }
    
    .VfNib .content .title {
        display: flex;
        height: 1.125rem;
        margin-bottom: 0.25rem;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }
    
    .VfNib .content .msg-wrap {
        display: flex;
        position: relative;
    }
    
    .VfNib .content .title .name {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
    }
    
    .VfNib .content .title .name>a {
        height: 100%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    
    .VfNib .head .head-link .level .img-star {
        width: auto;
        height: 0.875rem;
        margin-right: 1px;
    }
    
    .fPtvsS .img-star {
        width: auto;
        height: 1.0625rem;
        margin-right: 2px;
        object-fit: cover;
    }
    
    .jouJMO {
        font-size: 0.75rem;
        font-weight: bold;
        color: rgb(23, 24, 27);
    }
    
    .VfNib .head .head-link .user-level .level-wrap span {
        font-size: 0.75rem;
        line-height: normal;
    }
    
    .VfNib .head .head-link .user-level {
        width: 2.375rem;
        height: 1.125rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        border-radius: 0.5rem;
        position: absolute;
        top: 2rem;
        left: 0.0625rem;
    }
    
    .fPtvsS .img-star {
        width: auto;
        height: 1.0625rem;
        margin-right: 2px;
        object-fit: cover;
    }
    
    .VfNib .head .head-link .level {
        width: 3.375rem;
        margin-top: 0.625rem;
        transform: scale(0.631313);
        transform-origin: left center;
    }
    
    .fPtvsS {
        text-align: left;
        white-space: nowrap;
        font-size: 0px;
    }
    
    .VfNib .head .head-link .level .img-star {
        width: auto;
        height: 0.875rem;
        margin-right: 1px;
    }
    
    @media screen and (max-width: 621px) {
        .dialog {
            width: 100%;
            height: 100%;
            left: 0px;
            top: 0px;
            margin: 0px;
            border-radius: 0px;
        }
    
        .fPtvsS .img-star {
            margin-right: 1px;
        }
    
        .VfNib {
            padding: 0px 1.25rem;
        }
    
        .dWgZek {
            left: auto;
            position: absolute;
            top: 0px;
            right: 3rem;
            background-image: none;
            -webkit-box-pack: end;
            justify-content: flex-end;
            padding: 0px 0.625rem;
        }
    
        .fuYrTE {
            background-size: 22.5rem;
            background-position: center center;
        }
    
        .VfNib .head .head-link .level {
            margin-top: 0.625rem;
        }
    }
    
    .fuYrTE {
        flex: 1 1 auto;
    }
    </style>
    