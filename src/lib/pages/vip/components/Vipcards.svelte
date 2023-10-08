<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher()

const handleCancel = ()=>{
    dispatch("close", 5)
}

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
        <div class="sc-iJCbQK bXHpfl">
            <div class="title">About VIP Cards</div>
            <button on:click={handleCancel} class="sc-ieecCq fLASqZ close-icon ">
                <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
            </button>
            <div class="cards">
                <div class="sc-fSDTwv uxCLk">
                    <div class="mask"></div>
                    <div class="sc-hKumaY cDVLDa carousel-card">
                        <div class="item-wrap one left" style="transform: translate3d(-51px, 0px, 0px) scale3d(0.89, 0.89, 1);">
                            <div class="item">
                                <div class="wrap">
                                    <img alt="vip-card" src="https://static.nanogames.io/assets/1.0755d9fe.png">
                                    <div class="bor" style="border-color: transparent;"></div>
                                    <p class="">0</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-wrap select" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);">
                            <div class="item">
                                <div class="wrap">
                                    <img alt="vip-card" src="https://static.nanogames.io/assets/2.0c56901e.png">
                                    <div class="bor" style="border-color: rgb(232, 218, 255);"></div>
                                    <p class="">8</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-wrap one right" style="transform: translate3d(51px, 0px, 0px) scale3d(0.89, 0.89, 1);">
                            <div class="item">
                                <div class="wrap">
                                    <img alt="vip-card" src="https://static.nanogames.io/assets/3.6df0fd1c.png">
                                    <div class="bor" style="border-color: transparent;"></div>
                                    <p class="">22</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-wrap two right" style="transform: translate3d(102px, 0px, 0px) scale3d(0.78, 0.78, 1);">
                            <div class="item">
                                <div class="wrap">
                                    <img alt="vip-card" src="https://static.nanogames.io/assets/4.1c882976.png">
                                    <div class="bor" style="border-color: transparent;"></div>
                                    <p class="">38</p>
                                </div>
                            </div>
                        </div>
                        <div class="item-wrap two left" style="transform: translate3d(-102px, 0px, 0px) scale3d(0.78, 0.78, 1);">
                            <div class="item">
                                <div class="wrap">
                                    <img alt="vip-card" src="https://static.nanogames.io/assets/5.2859dbcc.png">
                                    <div class="bor" style="border-color: transparent;"></div>
                                    <p class="last">1</p>
                                </div>
                            </div>
                        </div>
                        <div class="left next">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Arrow"></use>
                            </svg>
                        </div>
                        <div class="right next">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                <use xlink:href="#icon_Arrow"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <p class="word-one">Silver Card</p>
            <p class="word-two">Victories Warrior<br>Brilliant people always have a heart to conquer the world!</p>
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
.bXHpfl {
    position: relative;
    width: 29rem;
    height: 30rem;
    border-radius: 1.25rem;
    background: rgb(30, 32, 36);
    padding: 1.5rem 0px;
}
.bXHpfl .title {
    line-height: 1.25rem;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(241, 242, 243);
    padding-left: 1.125rem;
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
.bXHpfl .cards {
    margin: 2.5rem 0.375rem 0px;
    background: rgb(27, 28, 32);
    border-radius: 12px;
}
.uxCLk {
    position: relative;
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;
}
.uxCLk .mask {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    z-index: 10;
    pointer-events: none;
    border-radius: 12px;
}
.cDVLDa {
    position: relative;
    width: 18.75rem;
    height: 11.125rem;
    margin: 0px auto;
}
.cDVLDa .item-wrap.select {
    cursor: auto;
    z-index: 20;
}
.cDVLDa .item-wrap {
    position: absolute;
    top: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease 0s;
    cursor: pointer;
}
.uxCLk .item {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}

.uxCLk .item .wrap {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    font-size: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
    border-radius: 12px;
    overflow: hidden;
}
.uxCLk .item .wrap img {
    width: auto;
    margin: -2px;
    pointer-events: none;
}
.cDVLDa .item-wrap img {
    height: 10.875rem;
}
.uxCLk .item .wrap .bor {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
}
.uxCLk .item .wrap p {
    margin: 0px;
    position: absolute;
    color: rgb(245, 246, 247);
    font-size: 1.625rem;
    font-weight: bold;
    top: 3.625rem;
    width: 3rem;
    text-align: center;
    right: 2rem;
    line-height: 1.5rem;
}
.cDVLDa .item-wrap.two {
    z-index: 0;
}
.cDVLDa .item-wrap {
    position: absolute;
    top: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease 0s;
    cursor: pointer;
}
.uxCLk .item {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
}
.cDVLDa .item-wrap.right {
    -webkit-box-pack: end;
    justify-content: flex-end;
}
.cDVLDa .item-wrap.one {
    z-index: 4;
}
.bXHpfl .word-one {
    margin: 1.875rem 0px 0px;
    line-height: 1.5rem;
    color: rgb(241, 242, 243);
    text-align: center;
}
.bXHpfl .word-two {
    margin: 0.875rem 0px 0px;
    line-height: 1.125rem;
    color: rgb(241, 242, 243);
    text-align: center;
    padding: 0px 1.5rem;
    opacity: 0.8;
}

</style>