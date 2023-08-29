<script>
import IoLanguageOutline from "svelte-icons-pack/io/IoLanguageOutline";
import "./styles/index.css"
import "./styles/gif.css"
import SiRainmeter from "svelte-icons-pack/si/SiRainmeter";
import HiSolidEmojiHappy from "svelte-icons-pack/hi/HiSolidEmojiHappy";
import Icon from 'svelte-icons-pack/Icon.svelte';
import CgInfo from "svelte-icons-pack/cg/CgInfo";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import IoClose from "svelte-icons-pack/io/IoClose";
import BsFiletypeGif from "svelte-icons-pack/bs/BsFiletypeGif";
import BsEmojiSunglasses from "svelte-icons-pack/bs/BsEmojiSunglasses";
import FaSolidAt from "svelte-icons-pack/fa/FaSolidAt";
import WiRaindrop from "svelte-icons-pack/wi/WiRaindrop";
import RiFinanceCopperCoinLine from "svelte-icons-pack/ri/RiFinanceCopperCoinLine";
import { usePublicMessages } from "./componets/index"
const { sendMessage } = usePublicMessages()
import {
    GIFs
} from "./data/index"
import {
    emojis
} from "./data/index"

import {
    createEventDispatcher,
    onMount
} from "svelte";
import {
    browser
} from '$app/environment'
import {
    db
} from "$lib/firebaseAuth/index"
import { doc,getDoc } from "firebase/firestore";

const id = browser && JSON.parse(localStorage.getItem('user'))
let profile
$:{
    onMount(async()=>{
        const docRef = doc(db, "profile", id.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            profile = docSnap.data()
        } else {
            console.log("No such document!");
        }
    })
}

const dispatch = createEventDispatcher()

const handlecloseChat = (() => {
    dispatch("closeChat")
})

let chatMessage = [{
        id: 1,
        type: "normal",
        text: "Hello ma'am",
        time: "2:23pm",
        image: "https://img2.nanogames.io/avatar/78805/s",
        name: "valiant",
        level: 3
    },
    {
        id: 2,
        type: "normal",
        text: "Hel ma'am",
        time: "2:23pm",
        image: "https://img2.nanogames.io/avatar/78805/s",
        name: "valiant",
        level: 3
    },
    {
        id: 34,
        type: "gif",
        text: "",
        time: "2:23pm",
        image: "https://img2.nanogames.io/avatar/78805/s",
        name: "valiant",
        gif: "https://media2.giphy.com/media/jnQYWZ0T4mkhCmkzcn/100.gif",
        level: 3
    },
]

let isGif = false
const handleGIF = (() => {
    if (isGif) {
        isGif = false
    } else {
        isGif = true
    }
})


// $: console.log(profile && profile)
let messages
const handleSendMessage = ((e, name) => {
    if (e.key === "Enter" && name.messages || e === "gifHit") {
        if (e.key === "Enter") {
            e.preventDefault();
        }
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        // Check whether AM or PM
        let newformat = hours >= 12 ? 'PM' : 'AM';
        // Find current hour in AM-PM Format
        hours = hours % 12;
        // To display "0" as "12"
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;

        let time = (hours + ':' + minutes + ' ' + newformat);
        let data = {
            email: id.email,
            type: name.type,
            text: name.messages ? name.messages : "",
            time: time,
            image: profile && profile.profile_image,
            name: profile && profile.username,
            gif: name.gif ? name.gif : "",
            level: 2
        }
        sendMessage(data)
        messages = ''
        isGif = false
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
    messages += (e)
})
</script>

<svelte:body on:keypress={()=> handleSendMessage(event, {messages, type: "normal",})} />

<div id="main" class="sc-cVAmsi bJUiGv" style="transform: none;">
    <div class="sc-ewSTlh hHMWvP" id="public-chat">
        <div class="sc-hJZKUC dWgZek">
            <div class="select-wrap">
                <div class="sc-jJoQJp gOHquD select  ">
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
                <button on:click={handlecloseChat} class="sc-ieecCq fLASqZ close-icon ">
                    <Icon src={IoClose}  size="17"  color="rgba(153, 164, 176, 0.8)"  title="arror" />
                </button>
            </div>

        </div>
        <div class="sc-bSqaIl eA-dYOl">
            <div class="sc-dkPtRN jScFby scroll-view sc-cNKqjZ dPmCMO sc-jvvksu fuYrTE chat-list">
                <div class="sc-AjmGg kgsidd">
                    {#each chatMessage as chat (chat.id) }
                    <div class="flat-item">
                        <div class="sc-tAExr VfNib notranslate">
                            <div class="head">
                                <a class="head-link" href="/user/profile/78805">
                                    <img class="avatar " alt="" src={chat.image}>
                                    <div class="sc-jQrDum jouJMO user-level type-1">
                                        <div class="level-wrap">
                                            <span>V</span><span>{chat.level}</span>
                                        </div>
                                    </div>
                                    <div class="sc-khQegj fPtvsS level levelnums_2">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAA3lBMVEUAAACJjqKGjJ92fIuBhZqUnq15fpyBipqHjKB4fZJ5fpR2fox9gZeDiJ12fZOVmqqMk6SNm6mYnKx5foGnq7l6fY5/hI13fYyvsb+Yn6yIjqCFi5719vzZ3OX////n6fF3fYvb3ufk5+/4+P7S1d7LztfIy9X6+//z9PrX2uPAxNDp6/PW2OGMkaSxtcSGi5+DiZ1+hJV4fo5zeojw8fjg4+vd4OnQ09zGydLl5u3i5OygpbV2eop2fIi7vsrr7vWqrrynrLuboLCWm66Bhpt/gZZzeYfCxc6zt8WIjZ93mwEKAAAAHHRSTlMA8fEuw0MiEPbs5cq9oZeUjXd1dWlkPTksI/nzVB2wFAAAAU1JREFUKM9V0WdzwjAMBmB3lz3KbIkVO3Fskw0Z7A1t//8fapKSHLznO+mes75IKM+gWh2g+7w13f3ebb7dWqdsM4yZXe4U9PLsbQTmHIuN9/yS0bB22s0xHiXBeL471YYItd8PVkaalrF1+Gwj7wdjLbUgyArGjoe+SDapCUoFH2k8EMY7etRxOiqAUhBcAyUcP/xjYM4pgAmRZSn0ipq5SMgM429GSIECYDu3jBmTpPg54oIqbMYMPVIK5BzYzGDMsEiBPFjomc0KJJhKKWNdSj2WCYLxgNzNNlQUhUQkSdJQ03FR43cZmwvlmgXES7uRLs52JEQpRSAd+7q81vk4DoEQCMfHcyu/xcp3lwaAsXT9VX6Rp9Vl4tuOY/uTy+opR1WdTn3P86dTVb3BhLN3g5P1elLpditpzbGvluq9tOnVS2r/iq8fr+iu/QOlRjrmG6FiBAAAAABJRU5ErkJggg==">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                    </div>
                                </a>
                            </div>
                            <div class="content">
                                <div class="title">
                                    <div class="name">
                                        <a href="/user/profile/78805">
                                            <span>{chat.name}</span>
                                        </a>
                                        <div class="time">{chat.time}</div>
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
                                {:else if (chat.type === "tips")}
                                <!-- ====================== tips ====================== -->
                                <div class="msg-wrap">
                                    <div class="sc-jKTccl sc-bUbRBg sc-iuqRDJ bkGvjR Gdkwx gkHCXh ane">
                                        I tipped&nbsp;&nbsp;
                                        <a class="cl-primary" href="/user/profile/285947">@MoonGambler😎</a>
                                        <div class="msg-cont">
                                            <img class="coin-icon" alt="" src="https://www.linkpicture.com/q/dpp_logo.png">
                                            10.304657 PPD\
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
                                {/if}
                            </div>
                        </div>
                    </div>
                    {/each}
                </div>
            </div>

            <div class="chat-infos "></div>
            <div class="sc-hkgtus ddROGz">
                <div class="send-input">
                    <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset input-area">
                        <div class="input-control">
                            <textarea bind:value={messages} placeholder="Your Message" style="height: 44px;"></textarea>
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
                </div>

                <div class="send-controls">
                    <div class="left-actions">
                        <a class="chat-icon" href="/user/rain">
                            <Icon src={WiRaindrop}   size="28"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                        </a>
                        <div class="command-btn">
                            <Icon src={IoLanguageOutline}   size="20"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                        </div>
                        <a class="chat-icon" href="/user/coindrop_send">
                            <Icon src={RiFinanceCopperCoinLine}  size="20"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                        </a>
                    </div>
                    <div class="sc-dkQkyq gbjudO gift-r-wrap hide-gift">

                        {#if isGif}
                        <div class="gift-box-wrap">
                            <div class="sc-dkPtRN jScFby scroll-view sc-jivBlf jhjroN">
                                {#each GIFs as gif}
                                <button on:click={()=>handleSendMessage( "gifHit", {gif, type: "gif",})} class="gift-item">
                                    <img class="gift-img" src={gif} alt="">
                                </button>
                                {/each}
                            </div>
                            <div class="giphy-copyright"></div>
                        </div>
                        {/if}

                        <button on:click={handleGIF} class="gift-btn">
                            <Icon src={BsFiletypeGif}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

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
                        <div class="sc-dkPtRN jScFby scroll-view sc-cNKqjZ dPmCMO sc-jvvksu fuYrTE chat-list">
                            <div class="sc-AjmGg kgsidd" style="height: 100%;">
                                <div class="flat-item">
                                    <div class="sc-tAExr VfNib notranslate ">
                                        <div class="head">
                                            <a class="head-link" href="/user/profile/243417">
                                                <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/243417/s">
                                                <div class="sc-jQrDum jouJMO user-level type-3">
                                                    <div class="level-wrap">
                                                        <span>V</span>
                                                        <span>23</span>
                                                    </div>
                                                </div>
                                                <div class="sc-khQegj fPtvsS level levelnums_5">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAABMlBMVEUAAADllzDllS3LcwjMdwbuoTflly3PdhDhjh3LdArijyTilC7jjSbjlCvOdQ/rnjTomzDuoTfsoDXtsGHQfhDMdQrvs0btnzXbei3OdQzUfxPnkB/6qT3/uVz/vmL8qz7NdQrLdAfzoznIbwT+rD/2rU3jkyn/u13/s1rlmS//wGT/vGH7pT77oz7qnDT/5Wv/uFvuozz7qDr10Df01TbllS7/4Gn/32f/xmD2pjv1pTrsoDn0zC7djSX/5HL/6G7/tVv3sFD5rzz4tzv4vDrvoTj1zjT/427/t2H/wV7/sFj+t1f6tFX61VH8sEr0qUjwqEX20z73wzn5pTfz1S/Yhh7TfhTPeQ7/7W3/zmn/wWj/2Wf/12b83F38vlP/skr41Ej7qEX5sTz5rDz3rzX1xzSVkSzCAAAAHHRSTlMA8fEvZ0P57OXKxMK6oZeQjXdyaT02LCMhGhMOpg/WFQAAAXFJREFUKM9V0AVzwjAUB/BsY+4+IKQSaGkLLS0Ud3eXue/7f4U9oHTsf7nIL7l3uYdWuTk6ukH/4z6TUinpzL1ul3tmj5CeuXdp0/aB0PfIoih7+sLB9oJujwW9LSseiCK3deH4FqGLHbVACIjfDxMhPnXnAgm6QsS5xeNzFR+JLqDNggz7UFPUco1mSFRab8kNtOkj8CzfiGlaNF7Pdw2DX2AoFH/StFg0m+uURgZjof/5PhqtZV8G458AttCTF2O1bOw9nQ4XbYSaD7lONV2NlIPYRqX+OkhXw+FIyUZZaX18jyNgf1ggXWP0NSx/FstDKIm98E9T9xoY40AwGAgCYcZbMdGpqSa8DF4GKKFKp9C4Q4nHwAvCvHS4bN55JpWEM9wkU5lztIyLTqRKgmESFWlCXRZucXSWUXlezcwot7VClqV0KghTSll2DVmOcjDYdeQ4dt/h2IfVxmtu9+QKQa5OdrlrC52OO2TlzuGE+Rf2K0QhKXSN7QAAAABJRU5ErkJggg==">                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAABMlBMVEUAAADllzDllS3LcwjMdwbuoTflly3PdhDhjh3LdArijyTilC7jjSbjlCvOdQ/rnjTomzDuoTfsoDXtsGHQfhDMdQrvs0btnzXbei3OdQzUfxPnkB/6qT3/uVz/vmL8qz7NdQrLdAfzoznIbwT+rD/2rU3jkyn/u13/s1rlmS//wGT/vGH7pT77oz7qnDT/5Wv/uFvuozz7qDr10Df01TbllS7/4Gn/32f/xmD2pjv1pTrsoDn0zC7djSX/5HL/6G7/tVv3sFD5rzz4tzv4vDrvoTj1zjT/427/t2H/wV7/sFj+t1f6tFX61VH8sEr0qUjwqEX20z73wzn5pTfz1S/Yhh7TfhTPeQ7/7W3/zmn/wWj/2Wf/12b83F38vlP/skr41Ej7qEX5sTz5rDz3rzX1xzSVkSzCAAAAHHRSTlMA8fEvZ0P57OXKxMK6oZeQjXdyaT02LCMhGhMOpg/WFQAAAXFJREFUKM9V0AVzwjAUB/BsY+4+IKQSaGkLLS0Ud3eXue/7f4U9oHTsf7nIL7l3uYdWuTk6ukH/4z6TUinpzL1ul3tmj5CeuXdp0/aB0PfIoih7+sLB9oJujwW9LSseiCK3deH4FqGLHbVACIjfDxMhPnXnAgm6QsS5xeNzFR+JLqDNggz7UFPUco1mSFRab8kNtOkj8CzfiGlaNF7Pdw2DX2AoFH/StFg0m+uURgZjof/5PhqtZV8G458AttCTF2O1bOw9nQ4XbYSaD7lONV2NlIPYRqX+OkhXw+FIyUZZaX18jyNgf1ggXWP0NSx/FstDKIm98E9T9xoY40AwGAgCYcZbMdGpqSa8DF4GKKFKp9C4Q4nHwAvCvHS4bN55JpWEM9wkU5lztIyLTqRKgmESFWlCXRZucXSWUXlezcwot7VClqV0KghTSll2DVmOcjDYdeQ4dt/h2IfVxmtu9+QKQa5OdrlrC52OO2TlzuGE+Rf2K0QhKXSN7QAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/gh.adb3fa38.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAA1VBMVEUAAAD/ul/9qT//vmX/rEHmmDH/tVz9pD/8qD3PdQv4r1D3pDv/5m7/4mn/wWj1pj3NdAn30Tv11jb1zDPMcAT7sDzSfBXikSjZgBvvojz/62//xmLllCfNcAXrnTXnmjPmmjP2rU3kkizMcgfLcAb5uzvvozvonTXKbwXllSvqojntsFTUeA3Wfhbnp0/xp0L+22T/v13+sUz4xTjtoDrjlSvOdg7ekSjZiCD/uGT61036tjzPdgzIdAjjkSDmlC7NfBTunTvyoj/xq0LouG7/0Gv701PBjG8QAAAAR3RSTlMAWVlZWVRZWVlcX19ZWVlZEFlZWWRZWVgGZVlZaWloZV5dXV1bWVlZWUkzJyYVC2NZWVlZaWNiYFxZWVlYSUU9OCsZFxBZWeq79pMAAAFBSURBVCjPVdFpc4IwEAZgTGiMrYCggNwoNyLeV+ut7f//SV0sMPSdfMg8k92dzDJVnufzk/mfYequ1246bNpENUcYj0x1UtM9MWctvgVnZib3F+WXjUZ43IJgnmibSw6Vrg2VIIQUjEe2O2HGGoZKMMMAhR5YGzNv73+26OoLUEyWH2+AGIgYXLfLGQeypLRCYw7E6fpPQClbIpnrHLyci9KqjWpsFcWf/b4oA9Y9v3WgvhS0UY34sBDhmSh91chjgmRJAmsgXtK2vApkOVjJJY5nLKUItV9BYCz8KHVsyqI6LLWdlGEeiSMAlyQ4yYMpctuFAmKBkBDubtUuvH0UCiwrhNHeqzbS83xFjQQhUhXf61XY6cSxoqpKHHc6DTz6A4h/bOLA2p6y7LS1BjVOLeU6fV2uijWtpmc5UybPium/9dQhpeT5/ikAAAAASUVORK5CYII=">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAA1VBMVEUAAAD/ul/9qT//vmX/rEHmmDH/tVz9pD/8qD3PdQv4r1D3pDv/5m7/4mn/wWj1pj3NdAn30Tv11jb1zDPMcAT7sDzSfBXikSjZgBvvojz/62//xmLllCfNcAXrnTXnmjPmmjP2rU3kkizMcgfLcAb5uzvvozvonTXKbwXllSvqojntsFTUeA3Wfhbnp0/xp0L+22T/v13+sUz4xTjtoDrjlSvOdg7ekSjZiCD/uGT61036tjzPdgzIdAjjkSDmlC7NfBTunTvyoj/xq0LouG7/0Gv701PBjG8QAAAAR3RSTlMAWVlZWVRZWVlcX19ZWVlZEFlZWWRZWVgGZVlZaWloZV5dXV1bWVlZWUkzJyYVC2NZWVlZaWNiYFxZWVlYSUU9OCsZFxBZWeq79pMAAAFBSURBVCjPVdFpc4IwEAZgTGiMrYCggNwoNyLeV+ut7f//SV0sMPSdfMg8k92dzDJVnufzk/mfYequ1246bNpENUcYj0x1UtM9MWctvgVnZib3F+WXjUZ43IJgnmibSw6Vrg2VIIQUjEe2O2HGGoZKMMMAhR5YGzNv73+26OoLUEyWH2+AGIgYXLfLGQeypLRCYw7E6fpPQClbIpnrHLyci9KqjWpsFcWf/b4oA9Y9v3WgvhS0UY34sBDhmSh91chjgmRJAmsgXtK2vApkOVjJJY5nLKUItV9BYCz8KHVsyqI6LLWdlGEeiSMAlyQ4yYMpctuFAmKBkBDubtUuvH0UCiwrhNHeqzbS83xFjQQhUhXf61XY6cSxoqpKHHc6DTz6A4h/bOLA2p6y7LS1BjVOLeU6fV2uijWtpmc5UybPium/9dQhpeT5/ikAAAAASUVORK5CYII=">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="title">
                                                <div class="name">
                                                    <a href="/user/profile/243417">
                                                        <span>⚡Aria⁠atash</span>
                                                    </a>
                                                    <div class="time">19:21</div>
                                                </div>
                                            </div>
                                            <div class="msg-wrap">
                                                <div class="sc-jKTccl bkGvjR">
                                                    <a class="cl-primary" href="/user/profile/399425">@💤✍️Zuuonia 🇵🇱</a>
                                                    😍😍😍🙋‍♀️🙋‍♀️🙋‍♀️😘
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-infos "></div>
                    <div class="sc-hkgtus ddROGz">
                        <div class="send-input">
                            <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset input-area">
                                <div class="input-control">
                                    <textarea placeholder="Your Message" style="height: 38px;"></textarea>
                                    <button class="sc-JkixQ cVsgdS emoji-r-wrap">
                                        <Icon src={HiSolidEmojiHappy}  size="25"  color="rgb(85, 91, 101)"  title="arror" />
                                    </button>
                                </div>
                            </div>
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

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
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

.jouJMO.type-3 {
    background-color: rgb(246, 199, 34);
}

.jouJMO.type-2 {
    background-color: rgb(232, 218, 255);
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

.jouJMO.type-2 {
    background-color: rgb(232, 218, 255);
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
</style>
