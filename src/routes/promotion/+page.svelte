<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import AiOutlineDoubleRight from "svelte-icons-pack/ai/AiOutlineDoubleRight";
import { handleisLoggin } from "$lib/store/profile";
</script>

<div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
    <div id="promotion" class="sc-hmvnCu cbjyVS p-small">
        <div class="sc-leSONj gFnRlT">
            <div class="left">
                <div class="title ttu bold">Great bonus for<div class="theme1">Every deposit</div>
                </div><div class="desc">
                    <div class="speed ttu bold">PPD unlock speed<span class="theme1 up">+5%</span>
                    </div>Available for all players<br><span class="date bold ttc"></span></div>
                <div class="detail">
                    <span>Details</span>
                </div>
            </div>
            <div class="right">
                <div class="item active ">
                    <div class="stage">
                        <div class="mask"></div>
                        <div class="front"></div>
                        <div class="text ttu bold">
                            <div class="small">Up to</div>
                            <div class="large">180% BONUS</div>
                        </div>
                        <div class="effect">
                            <div class="effect-item"></div>
                            <div class="effect-item"></div>
                        </div>
                        <div class="stage__arrow flex-center">
                            <Icon src={AiOutlineDoubleRight}  size="18"  color="rgb(255, 212, 68)" className="custom-icon" title="arror" />
                        </div>
                    </div>
                    {#if $handleisLoggin}
                        <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                            <div class="button-inner">Deposit Now</div>
                        </button>
                        {:else}
                        <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                            <div class="button-inner">Sign up</div>
                        </button>
                    {/if}
              
                </div>
                <div class="item ">
                    <div class="stage">
                        <div class="mask"></div>
                        <div class="front"></div>
                        <div class="text ttu bold">
                            <div class="small">Up to</div>
                            <div class="large">240% BONUS</div>
                        </div>
                        <div class="effect">
                            <div class="effect-item"></div>
                            <div class="effect-item"></div>
                        </div>
                        <div class="stage__arrow flex-center">
                            <Icon src={AiOutlineDoubleRight}  size="18"  color="rgb(255, 212, 68)" className="custom-icon" title="arror" />
                        </div>
                    </div>
                    {#if $handleisLoggin}
                    <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                        <div class="button-inner">Deposit Now</div>
                    </button>
                    {:else}
                    <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                        <div class="button-inner">Sign up</div>
                    </button>
                {/if}
                </div>
                <div class="item  ">
                    <div class="stage">
                        <div class="mask"></div>
                        <div class="front"></div>
                        <div class="text ttu bold">
                            <div class="small">Up to</div>
                            <div class="large">300% BONUS</div>
                        </div><div class="effect">
                            <div class="effect-item"></div>
                            <div class="effect-item"></div>
                        </div><div class="stage__arrow flex-center">
                            <Icon src={AiOutlineDoubleRight}  size="18"  color="rgb(255, 212, 68)" className="custom-icon" title="arror" />
                        </div>
                    </div>
                    {#if $handleisLoggin}
                    <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                        <div class="button-inner">Deposit Now</div>
                    </button>
                    {:else}
                    <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                        <div class="button-inner">Sign up</div>
                    </button>
                {/if}
                </div>
                <div class="item  ">
                    <div class="stage">
                        <div class="mask"></div>
                        <div class="front"></div>
                        <div class="text ttu bold">
                            <div class="small">Up to</div>
                            <div class="large">360% BONUS</div>
                        </div>
                        <div class="effect">
                            <div class="effect-item"></div>
                            <div class="effect-item"></div>
                        </div>
                    </div>
                    {#if $handleisLoggin}
                    <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                        <div class="button-inner">Deposit Now</div>
                    </button>
                    {:else}
                    <button class="sc-iqseJM sc-crHmcD cBmlor gEBngo button button-normal">
                        <div class="button-inner">Sign up</div>
                    </button>
                {/if}
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.cBmlor {
    display: block;
    width: 100%;
    border-radius: 6.25rem;
    height: 3rem;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
}

.cbjyVS {
    min-width: 48rem;
    margin: 0px auto;
    max-width: 85.5rem;
    padding: 0px 1.25rem;
}

.p-small .sc-leSONj {
    display: block;
    height: auto;
}

.gFnRlT {
    border-radius: 0px 0px 1.25rem 1.25rem;
    overflow: hidden;
    display: flex;
    padding: 1.5rem 1.25rem;
    background-image: radial-gradient(circle at 92% -19%, rgb(179, 70, 34), rgb(181, 62, 22) 17%, rgb(196, 73, 33) 200%);
    color: rgb(255, 255, 255);
    font-size: 0.875rem;
}

.gFnRlT .left {
    flex: 0 1 32.5%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
}

.p-small .sc-leSONj .left {
    position: relative;
    flex: 1 1 0%;
}

.p-small .sc-fpyFWH .left {
    position: relative;
    flex: 1 1 0%;
}

.p-small .sc-fpyFWH .right {
    margin-top: 3.125rem;
}

.gFnRlT .left .title {
    font-size: 1.75rem;
    line-height: 1.14;
    color: rgb(243, 244, 244);
    margin-top: 0.75rem;
    position: relative;
    z-index: 1;
}

.ffkysw .left .title {
    font-size: 1.75rem;
    line-height: 1.14;
    color: rgb(243, 244, 244);
    margin-top: 0.75rem;
    position: relative;
    z-index: 1;
}

.cbjyVS .bold {
    font-weight: 600;
}

.cbjyVS .ttu {
    text-transform: uppercase;
}

.gFnRlT .theme1 {
    color: rgb(255, 205, 22);
}

.gFnRlT .left .desc {
    line-height: 1.5;
    flex: 1 1 0%;
    font-size: 1rem;
    margin-top: 0.875rem;
    max-width: 25rem;
    position: relative;
    z-index: 1;
}

.gFnRlT .left .desc .speed {
    font-size: 1.5rem;
    height: 4rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-image: linear-gradient(to right, rgb(221, 83, 39), rgba(206, 85, 60, 0) 83%);
    padding: 0px 1.25rem;
    margin-left: -1.25rem;
    margin-bottom: 0.625rem;
    white-space: nowrap;
}

.gFnRlT .left .desc .speed .up {
    font-size: 2.25rem;
    padding-bottom: 0.375rem;
    padding-left: 0.375rem;
}

.gFnRlT .left .desc .date {
    font-size: 1.25rem;
}

.ffkysw .left .desc .date {
    font-size: 0.95rem;
}

.gFnRlT .left::after {
    content: "";
    position: absolute;
    top: 0px;
    right: -6.25rem;
    bottom: 0px;
    width: 18.25rem;
    background-image: radial-gradient(circle at 50% 50%, rgb(255, 161, 130), rgba(213, 78, 66, 0) 69%);
    filter: blur(50px);
    opacity: 0.63;
}

.p-small .sc-fpyFWH .left .detail {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
}

.p-small .sc-leSONj .right {
    margin-top: 3.125rem;
}

.p-small .sc-leSONj .left .detail {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
}

.gFnRlT .left .detail {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}

.gFnRlT .right .item:nth-child(2) .mask {
    background-image: url(https://static.nanogames.io/assets/light2.a4dbbb1b.png);
}

.p-small .sc-leSONj .right {
    margin-top: 3.125rem;
}

.gFnRlT .right {
    flex: 1 1 0%;
    display: flex;
    align-items: flex-end;
}

.gFnRlT .right .item:nth-child(1) {
    z-index: 4;
}

.gFnRlT .right {
    flex: 1 1 0%;
    display: flex;
    align-items: flex-end;
}

.gFnRlT .right .item:nth-child(1) {
    z-index: 4;
}

.gFnRlT .right .item {
    flex: 1 1 0%;
    margin-right: 1.125rem;
    text-align: center;
    position: relative;
}

.gFnRlT .right .item:hover:not(.mobile) .stage,
.gFnRlT .right .item.active .stage {
    top: -0.625rem;
}

.gFnRlT .right .stage {
    position: relative;
    z-index: 2;
    border-radius: 0.75rem;
    line-height: normal;
    padding-top: 119.6%;
    color: rgb(34, 35, 41);
    top: 0.625rem;
    transition: top 200ms ease-in 0s;
}

.gFnRlT .right .stage .mask {
    position: absolute;
    top: 0.1875rem;
    left: 0.1875rem;
    right: 0.1875rem;
    height: 80%;
    border-radius: 0.75rem;
    overflow: hidden;
    background: center center / contain no-repeat;
    z-index: 0;
}

.gFnRlT .right .item:nth-child(1) .mask {
    background-image: url(https://static.nanogames.io/assets/light1.366ce5d2.png);
}

.gFnRlT .right .item:hover:not(.mobile) .mask::after,
.gFnRlT .right .item.active .mask::after {
    animation: 5s linear 0s infinite normal none running iJUjUJ;
}

.gFnRlT .right .item:nth-child(1) .mask::after {
    background-image: url(https://static.nanogames.io/assets/mask1.03149cd1.png);
}

.gFnRlT .right .stage .mask::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    padding-top: 100%;
    transform: scale(2.2) translateY(18%);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

.p-small .sc-leSONj .right .stage .front {
    background-size: 100.5%;
}

.gFnRlT .right .item:nth-child(1) .front {
    background-image: url(https://static.nanogames.io/assets/front1.2830f254.png);
}

.gFnRlT .right .stage .front {
    position: absolute;
    inset: 0px;
    z-index: 3;
    background: center bottom / 100% no-repeat;
}

.gFnRlT .right .stage .text {
    position: absolute;
    top: 0.875rem;
    left: 0px;
    right: 0px;
    color: rgb(34, 35, 41);
    line-height: normal;
}

.cbjyVS .bold {
    font-weight: 600;
}

.gFnRlT .right .stage .text .small {
    font-size: 0.875rem;
}

.gFnRlT .right .stage .text .large {
    font-size: 1.375rem;
}

.gFnRlT .right .item:hover:not(.mobile) .stage .effect,
.gFnRlT .right .item.active .stage .effect {
    display: block;
}

.gFnRlT .right .stage .effect-item {
    width: 2.5rem;
    height: 2.5rem;
    background: url(https://static.nanogames.io/assets/effect-coin.0c96fa63.png) center center / contain no-repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    animation: 1s linear 0s infinite alternate none running geDMXd;
}

.gFnRlT .right .stage .effect-item:last-child {
    top: unset;
    bottom: 0.625rem;
    background-image: url(https://static.nanogames.io/assets/effect-coin-left.ce44b6cf.png);
    right: unset;
    left: 0px;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gFnRlT .right .item:nth-child(1) .stage::after {
    background-image: url(https://static.nanogames.io/assets/bg1.4c599778.svg);
}

.gFnRlT .right .stage::after {
    content: "";
    position: absolute;
    inset: 0px 0px 1.5rem;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
}

.gFnRlT .right .item:hover:not(.mobile) .button,
.gFnRlT .right .item.active .button {
    opacity: 1;
    transform: scale(1);
}

.gFnRlT .right .item:nth-child(1) .button {
    background-image: conic-gradient(from 1turn, rgb(241, 149, 17), rgb(246, 199, 34));
}

.gEBngo.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(107, 113, 128);
}

.gFnRlT .right .button {
    width: 8.875rem;
    height: 2.75rem;
    margin: 0px auto;
    color: rgb(34, 35, 41);
    opacity: 0;
    transform: scale(0);
    transition: all 200ms ease-out 0s;
    position: relative;
    z-index: 3;
}

.gFnRlT .right .item::after {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0px;
    bottom: -0.625rem;
    right: 0px;
    height: 3.75rem;
    background: url(https://static.nanogames.io/assets/shadow.be85f73a.png) center center / contain no-repeat;
}

.gFnRlT .right .item {
    flex: 1 1 0%;
    margin-right: 1.125rem;
    text-align: center;
    position: relative;
}

.cBmlor>.button-inner {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.gFnRlT .right .stage__arrow {
    position: absolute;
    top: 40%;
    right: -1.75rem;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 0.3125rem;
    background: rgb(34, 35, 41);
    z-index: 3;
}

.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gFnRlT .right .item:nth-child(2) .mask::after {
    background-image: url(https://static.nanogames.io/assets/mask2.31e0102a.png);
}

.gFnRlT .right .item:nth-child(2) .front {
    background-image: url(https://static.nanogames.io/assets/front2.7a262ab6.png);
}

.gFnRlT .right .stage .front {
    position: absolute;
    inset: 0px;
    z-index: 3;
    background: center bottom / 100% no-repeat;
}

.p-small .sc-leSONj .right .stage .front {
    background-size: 100.5%;
}

.gFnRlT .right .stage .front {
    position: absolute;
    inset: 0px;
    z-index: 3;
    background: center bottom / 100% no-repeat;
}

.gFnRlT .right .item:nth-child(2) .stage::after {
    background-image: url(https://static.nanogames.io/assets/bg2.73ad7878.svg);
}

.gFnRlT .right .stage::after {
    content: "";
    position: absolute;
    inset: 0px 0px 1.5rem;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
}

.gFnRlT .right .item:nth-child(3) .mask::after {
    background-image: url(https://static.nanogames.io/assets/mask3.269c9b7a.png);
}

.gFnRlT .right .item:nth-child(3) .front {
    background-image: url(https://static.nanogames.io/assets/front3.74cfc668.png);
}

.gFnRlT .right .stage .front {
    position: absolute;
    inset: 0px;
    z-index: 3;
    background: center bottom / 100% no-repeat;
}

.gFnRlT .right .item:nth-child(3) .mask {
    background-image: url(https://static.nanogames.io/assets/light3.7d8b4b3a.png);
}

.gFnRlT .right .item:nth-child(3) .front {
    background-image: url(https://static.nanogames.io/assets/front3.74cfc668.png);
}

.gFnRlT .right .item:nth-child(3) .stage::after {
    background-image: url(https://static.nanogames.io/assets/bg3.94edef37.svg);
}

.gFnRlT .right .stage::after {
    content: "";
    position: absolute;
    inset: 0px 0px 1.5rem;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
}

.gFnRlT .right .item:nth-child(4)::before {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: -0.125rem;
    width: 4.375rem;
    height: 4.375rem;
    background: url(https://static.nanogames.io/assets/big_bonus.7bbc7d98.png) left top / contain no-repeat;
    z-index: 3;
    transition: top 200ms ease-in 0s;
}

.gFnRlT .right .item:nth-child(4) .mask {
    background-image: url(https://static.nanogames.io/assets/light4.65bbb942.png);
}

.gFnRlT .right .item:nth-child(4) .front {
    background-image: url(https://static.nanogames.io/assets/front4.efcf0004.png);
}

.gFnRlT .right .item:nth-child(4) .stage::after {
    background-image: url(https://static.nanogames.io/assets/bg4.589b410c.svg);
}

.gFnRlT .right .stage::after {
    content: "";
    position: absolute;
    inset: 0px 0px 1.5rem;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100%;
}

.p-small .sc-jFkwbb .left {
    position: relative;
    z-index: 3;
}



.jPCHTR .left .title {
    /* font-size: 1.5rem; */
    line-height: normal;
}

.jPCHTR .left .desc {
    line-height: 1.43;
    flex: 1 1 0%;
    margin-top: 0.625rem;
    max-width: 13.75rem;
}

.p-small .sc-jFkwbb .left .detail {
    position: absolute;
    top: 0px;
    right: 0px;
}

.jPCHTR .left .detail {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}


.cBmlor:disabled.sc-iqseJM:not(.is-loading) {
    opacity: 0.5;
    cursor: default;
}

.p-small .sc-bOtlzW .button {
    width: 12.75rem;
    margin: 0px auto;
}

.p-small .sc-iJCbQK .left {
    display: block;
    position: relative;
}


.p-small .sc-iJCbQK .left .title {
    font-size: 1.25rem;
}

.hdBLxm .left .desc {
    line-height: 1.43;
    flex: 1 1 0%;
    margin-top: 0.625rem;
    max-width: 14.375rem;
}

.p-small .sc-iJCbQK .left .detail {
    position: absolute;
    top: 0px;
    right: 0px;
}

.hdBLxm .left .detail {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}

.p-small .sc-iJCbQK .right {
    margin-top: 1.75rem;
}

</style>
