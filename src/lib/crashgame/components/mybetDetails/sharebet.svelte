<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import FaSolidShare from "svelte-icons-pack/fa/FaSolidShare";
import FiCopy from "svelte-icons-pack/fi/FiCopy";
import IoRocket from "svelte-icons-pack/io/IoRocket";
import {
    createEventDispatcher
} from 'svelte';
const dispatch = createEventDispatcher()
const handleClose = (() => {
    dispatch("close", 5)
})
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
        <div class="sc-dkPtRN jScFby scroll-view sc-dWbSDx inlQlO">

            <button on:click={()=> handleClose()}  class="sc-ieecCq fLASqZ close-icon dialog-close">
                <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>

            <div class="sc-jnSlpE cAMmTh" style="cursor: auto;">
                <div class="titles">
                    <div class="sc-bZSZLb fiuxiW animation-lose">
                        <img class="left" alt="" src="https://static.nanogames.io/assets/heart_left.8d369dc0.png">
                        <img class="block_one" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAAAXNSR0IArs4c6QAAAXBJREFUKBWFUr1KA0EQntnbhBMDEY0GBRshP7WCiK9gqShBC8FC8AEsrNLYWdn4BAmYnyew8wHExiL+gIqFJgFJxJiYuxtn53LhRCEDu/vt9813s7ezCKGo5eay0HfWCDzXIn2Rqr7ehGSBGBC1jeljIjoK9iwQAZxkq83DgDOrGG7XEzkPoKiYiI87orc6Gjx2KGVtp8tvRSF5MjngIe6bNTnxDTNxfyR5NUHk7gkYTGJAoqTZj0XdoRazfUyAy0OSgRiYlJ9rf+mhphSB5sElYo87idlAEIOy4JQJp/kRgXorCpwmEdE+6nd1ZkD5FdKlxqWFahcBe++fGp4bNt8uQlTzVXAQOulfBrNJVeoFpWmVTQ/dvoInY3LlAOZ+/xrEdN68UnZ8ERFLLiF0eiMMYirctzOVxhY34MAc0XDcrf8riDiYsuX6GSpY4ew7phb4FUiT/ZrhzBBOlxvXU/HJJa5Ufdmct0PSaEj5vHz8B/ZXd/2WUqBBAAAAAElFTkSuQmCC">
                        <img class="block_two" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAAXNSR0IArs4c6QAAAWpJREFUKBVlkL9OAkEQxmeW5fgjChH/EAsjYuABLCi18gEkWJlopZXvYGdlYWJlqZGI8ASWNvbGRAOJ2hhz4WJEBURub5xdOYPyFZfdb3/zzcwhDKheTE2S5xVIUEIAXS2cNy4RkTSCPldbmyp4io4BKOp7gHiRiIjV1IndEtq8K06nSdGphkbDCpKxHsgABxGtvHbUvmYMCKTWCSgUj7owM96FibEezCY/TTsE3HjYnAsbkC95XRXjNF9BSRDgVCIKU7cdNyARZDVg6XZ9tbsBcBVHINppd8kRtLsseZi03ioY9AzWbEl4egn5NQdYqSh5f3szz440wzP33LTgrcO1LM47zFUbe/oslfppixz56ETgy+UD4odAsZ2t2CUNaUlCBnk0A7DBM11zejFTtmuG6H+Ev4i+c9aRFRvJZ8rOH0i/SU7TG79z661c1TkDcLQ/JMmt2tKCxUypUR96HTTqOwu//2HQ/3/+Bvh2fIyfHFHnAAAAAElFTkSuQmCC">
                        <img class="right" alt="" src="https://static.nanogames.io/assets/heart_right.9692699e.png">
                    </div>
                    <div class="word"><p class="one">PACO took it all!🥺</p>
                        <p class="two">crash Damn Moment</p>
                    </div>
                </div>
                <div class="bet-area ">
                  <span style="margin-left: 1rem;">
                     <Icon src={IoRocket}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                  </span>
                    <p>Bet ID: #728240291</p>
                </div>
                <div class="info-area">
                    <div class="left">
                        <p>Payout</p>
                        <div class="sc-bOTDDd hGhwYS animation-card-wrap left">
                            <div class="animation-card lose">0x</div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="top">
                            <img class="coin-icon" alt="" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png">
                            <p>Profit</p>
                        </div>
                        <div class="sc-bOTDDd hGhwYS animation-card-wrap right-lose">
                            <div class="animation-card lose">-2<span>CUB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="input-wrap">
                <input class="share-input" placeholder="Not my day..." value=""></div>

            <div class="share-ant-copy">
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal share-chat">
                    <div class="button-inner">
                        <span style="margin-right: 0.5rem;">
                            <Icon src={FaSolidShare}  size="15"  color="#fff" className="custom-icon" title="arror" />
                        </span>
                        Share to Chatroom
                    </div>
                </button>
                <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal copy-link">
                    <div class="button-inner">
                        <span style="margin-right: 0.5rem;">
                            <Icon src={FiCopy}  size="15"  color="#fff" className="custom-icon" title="arror" />
                        </span>

                        <p>Copy link</p>
                    </div>
                </button>
            </div>

            <div class="share-bottom">
                <div class="word">Share on social media</div>
            </div>

            <div class="sc-cvlWTT bxkBRG">
                <div class="share-item">
                    <a target="_blank" href="https://www.facebook.com/sharer.php?u=https://nanogames.io/crash/0TCVRHFT5GJ9H1">
                        <img alt="" src="https://static.nanogames.io/assets/facebook.29ca64b0.png">
                    </a>
                </div>
                <div class="share-item">
                    <a target="_blank" href="https://twitter.com/share?url=https://nanogames.io/crash/0TCVRHFT5GJ9H1">
                        <img alt="" src="https://static.nanogames.io/assets/twitter.48138752.png">
                    </a>
                </div>
                <div class="share-item">
                    <img alt="" src="https://static.nanogames.io/assets/share-1.a5c3870e.svg">
                </div>
                <div class="share-item">
                    <img alt="" src="https://www.linkpicture.com/q/wechatt-removebg-preview.png">
                </div>
                <div class="share-item">
                    <img alt="" src="https://www.linkpicture.com/q/whatsapp-icon-green-removebg-preview.png">
                </div>
                <div class="share-item">
                    <img alt="" src="https://static.nanogames.io/assets/share-4.4c6af5b2.svg">
                </div>
                <div class="share-item">
                    <img alt="" src="https://static.nanogames.io/assets/share-7.f5d17802.svg">
                </div>
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

.gvBCkE {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0px;
    height: 0px;
}
.gvBCkE > div {
    transform: translate(-50%, -50%);
}

.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
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
.cAMmTh .titles {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.cAMmTh .titles .animation-lose {
    width: 3.125rem;
    height: 3.125rem;
}
.fiuxiW {
    border-radius: 50%;
    background-color: rgb(60, 63, 73);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
}
.fiuxiW .left {
    position: absolute;
    width: 33%;
    left: 19%;
    top: 29%;
    animation: 5s ease 1.4s infinite normal none running heartleft;
    transform-origin: 100% 100%;
}

.fiuxiW .block_one {
    position: absolute;
    visibility: hidden;
    width: 12%;
    left: 37%;
    top: 22%;
    animation: 5s ease 1.4s infinite normal none running hiddenblock;
}
.fiuxiW .block_two {
    position: absolute;
    visibility: hidden;
    width: 14%;
    left: 53%;
    top: 26%;
    animation: 5s ease 1.4s infinite normal none running hiddenblock;
}
.fiuxiW .right {
    position: absolute;
    width: 33%;
    left: 50%;
    top: 28%;
    animation: 5s ease 1.4s infinite normal none running heartright;
    transform-origin: 0% 100%;
}
.inlQlO {
    width: 26.25rem;
    height: 28.25rem;
    background-color: rgb(30, 32, 36);
    border-radius: 1.25rem;
    padding: 0.625rem 1.25rem;
    position: relative;
    overflow: hidden;
}
.gvBCkE > div {
    transform: translate(-50%, -50%);
}
.cAMmTh .titles .word {
    margin-left: 1.125rem;
}
.cAMmTh .titles .word .one {
    margin: 0px;
    height: 1.25rem;
    display: -webkit-box;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
    font-weight: bold;
}
.cAMmTh .titles .word .two {
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
.cAMmTh .bet-area {
    display: flex;
    margin-top: 0.625rem;
    background-color: rgba(45, 48, 53, 0.5);
    height: 3.5rem;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 1.25rem;
    border: 1px solid rgba(45, 48, 53, 0.5);
}
.cAMmTh .bet-area > p {
    margin: 0px 0px 0px 0.875rem;
    color: rgb(245, 246, 247);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cAMmTh .info-area {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 0.75rem;
}
.cAMmTh .info-area .left {
    width: 49%;
}
.cAMmTh .info-area .left .animation-card-wrap {
    width: 100%;
    height: 3.5rem;
    margin-top: 0.25rem;
    border-radius: 1.25rem;
}
.cAMmTh .info-area .right {
    width: 49%;
    margin-left: 2%;
}
.cAMmTh .info-area .left > p {
    margin: 0px 0px 0px 1rem;
    font-size: 0.75rem;
    height: 1rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgba(153, 164, 176, 0.6);
}
.cAMmTh .info-area .left .animation-card-wrap {
    width: 100%;
    height: 3.5rem;
    margin-top: 0.25rem;
    border-radius: 1.25rem;
}
.hGhwYS .animation-card.lose {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAP1BMVEUAAAAmJisnJywoKC0mJisqKi0nJyw2NjYoKC0uLjImJiwnJysoKCwoKC0nJyz///8qKi8oKC8nJywnJyxqamopNY8VAAAAFXRSTlMAZWEiXRZRBScLS1hGLzwBEhw2QgIIAv2dAAACwElEQVR42u3aiZaiMBAF0HrZF3b4/28dZ47tILg0tomhqfsBhhNDUikeMcYYY4wxxjJzPbE1H+CJrXQRithKpwBDbMkrABWxhcngZCS2MAC8Ym7QOOE9Zi3gn0h5+Jr2QeOspRyk2MvEjDjTlIEDJO2CFTgbKD0tgJ1cPXp8iZScV9jNihlw0dFCmsF2sscEXFSUmFU4aWgXIv7TlJbDX6qlPVD4L1BaFU72svtizlFScU81tsJcTykJnOzlXDKYUx3NJZoY8eNRfPq5DbgSU85MxFn0P71XOEqtwTUhKZmAL0rTD9Q57i8OS4OlRGpciKtRps0/4yk1i5XoWlrS9AYdZsSgz8PoZqQNJE4sJRewZpynGetMk2IsFcZmNGrbMeVFpolxuMnUvfYtTb6vK/Gud1rjJtNurhI7Sm6KuE98PXqirX776a3zVc8Oz2l6jylgTb5wrXCUXmvwzEjvYgMWhHvlrKgog07gMeXpbdoBV6J+aXkLSxlIPCQ0vVNX4ULV9sVNSlIONR5x9GbeVUYJZRo50Ubm8UmWc2ZEUXdhNfu7spDi/ntUEoEv0VIWncEtVWFxIoGL0FIWrYxYikW9RssW9UCZTC4IzFR9eW3rgJkh3/NZ2VRGQZkw9JYK1GAuFPmMHyGfdUgmOiYrcM1IO5uV/rhrqMKSqFzfWeu1a9SBA3MaD5VVdWU14rbDBwm9wF2ipHI0e6aux1qBnzg/kKmrcUNpyZuPZOrq8uflQ5m6XhTeHvlYps6PZbcBPpip05XAf2NZ9ctnM3VWNiEKEU0ji1ote8vUfdvRMnXfdbhM3QbHytR9X0mZul8m4iyWdiy8rKxM3a9znanjxuvzTN1xG4wPM3V8TN3N1HEt3GCOT++LKRTeYNyqmEzd77XK1HFFcztTd9hPpI8zdUev7BhjjDHGGGOMMcYYO4Y/nnMU0ouM92IAAAAASUVORK5CYII=);
}
.hGhwYS .animation-card {
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
.cAMmTh .info-area .right {
    width: 49%;
    margin-left: 2%;
}
.cAMmTh .info-area .right .top {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 0.5rem;
    height: 1.25rem;
}
.cAMmTh .info-area .right .top > img {
    width: 1rem;
    height: 1rem;
    margin-right: 2px;
}
.cAMmTh .info-area .right .top > p {
    margin: 0px;
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
}
.cAMmTh .info-area .right .animation-card-wrap {
    width: 100%;
    height: 3.5rem;
    margin-top: 0.25rem;
    border-radius: 1.25rem;
}
.hGhwYS .animation-card.lose {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAABgCAMAAADxVp2mAAAAP1BMVEUAAAAmJisnJywoKC0mJisqKi0nJyw2NjYoKC0uLjImJiwnJysoKCwoKC0nJyz///8qKi8oKC8nJywnJyxqamopNY8VAAAAFXRSTlMAZWEiXRZRBScLS1hGLzwBEhw2QgIIAv2dAAACwElEQVR42u3aiZaiMBAF0HrZF3b4/28dZ47tILg0tomhqfsBhhNDUikeMcYYY4wxxjJzPbE1H+CJrXQRithKpwBDbMkrABWxhcngZCS2MAC8Ym7QOOE9Zi3gn0h5+Jr2QeOspRyk2MvEjDjTlIEDJO2CFTgbKD0tgJ1cPXp8iZScV9jNihlw0dFCmsF2sscEXFSUmFU4aWgXIv7TlJbDX6qlPVD4L1BaFU72svtizlFScU81tsJcTykJnOzlXDKYUx3NJZoY8eNRfPq5DbgSU85MxFn0P71XOEqtwTUhKZmAL0rTD9Q57i8OS4OlRGpciKtRps0/4yk1i5XoWlrS9AYdZsSgz8PoZqQNJE4sJRewZpynGetMk2IsFcZmNGrbMeVFpolxuMnUvfYtTb6vK/Gud1rjJtNurhI7Sm6KuE98PXqirX776a3zVc8Oz2l6jylgTb5wrXCUXmvwzEjvYgMWhHvlrKgog07gMeXpbdoBV6J+aXkLSxlIPCQ0vVNX4ULV9sVNSlIONR5x9GbeVUYJZRo50Ubm8UmWc2ZEUXdhNfu7spDi/ntUEoEv0VIWncEtVWFxIoGL0FIWrYxYikW9RssW9UCZTC4IzFR9eW3rgJkh3/NZ2VRGQZkw9JYK1GAuFPmMHyGfdUgmOiYrcM1IO5uV/rhrqMKSqFzfWeu1a9SBA3MaD5VVdWU14rbDBwm9wF2ipHI0e6aux1qBnzg/kKmrcUNpyZuPZOrq8uflQ5m6XhTeHvlYps6PZbcBPpip05XAf2NZ9ctnM3VWNiEKEU0ji1ote8vUfdvRMnXfdbhM3QbHytR9X0mZul8m4iyWdiy8rKxM3a9znanjxuvzTN1xG4wPM3V8TN3N1HEt3GCOT++LKRTeYNyqmEzd77XK1HFFcztTd9hPpI8zdUev7BhjjDHGGGOMMcYYO4Y/nnMU0ouM92IAAAAASUVORK5CYII=);
}
.hGhwYS.right-lose .animation-card {
    font-size: 1rem;
    color: rgb(237, 99, 0);
}
.inlQlO .input-wrap {
    width: 100%;
    margin-top: 0.75rem;
    height: 3.5rem;
    padding: 0px 1.25rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(45, 48, 53, 0.5);
    background-color: rgba(45, 48, 53, 0.5);
}
.inlQlO .input-wrap .share-input {
    width: 100%;
    height: 100%;
    line-height: 3.5rem;
    color: rgb(245, 246, 247);
    background-color: transparent;
    border: none;
    padding: 0px;
    margin: 0px;
}
.inlQlO .share-ant-copy {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 3.5rem;
    width: 100%;
    margin-top: 1.25rem;
}
.inlQlO .share-ant-copy .share-chat {
    height: 3.5rem;
    flex: 1 1 0%;
    font-weight: bold;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1rem;
}
.cBmlor > .button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.inlQlO .share-ant-copy .copy-link {
    height: 3.5rem;
    width: 33%;
    margin-left: 2%;
    font-size: 0.8125rem;
}
.bxkBRG {
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.bxkBRG .share-item {
    flex: 1 1 0%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
.inlQlO .share-bottom {
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    text-align: center;
}
.inlQlO .share-bottom .word {
    height: 1.25rem;
    line-height: 1.25rem;
}
.bxkBRG .share-item img {
    width: 2.25rem;
    height: 2.25rem;
    opacity: 0.4;
}
.bxkBRG .share-item a {
    cursor: pointer;
    height: 2.25rem;
}
.bxkBRG .share-item a img {
    opacity: 1;
}
</style>
