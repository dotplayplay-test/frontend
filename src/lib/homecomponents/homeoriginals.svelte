<script>
    import IoDice from "svelte-icons-pack/io/IoDice";

let games = [
    {id:1, name : "Crash", icon: IoDice, house_edge:"House Edge 1%",  route: "crash", isAtive: false, img: "https://img2.nanogames.io/game/image/c405f953-f7ca-4da5-8309-dcba4fc44e7d.png"},
    {id:3, name : "Plinko", icon: IoDice, house_edge:"House Edge 1%",  route: "plinko", isAtive: false, img: "https://img2.nanogames.io/game/image/ae817f12-fa67-49b8-b33e-6cafda497488.png" },
    {id:4, name : "Tower", icon: IoDice, house_edge:"House Edge 1%",  route: "tower", isAtive: false, img: "https://img2.nanogames.io/game/image/7f1f471d-0768-42f1-9d92-e70ce0e10235.png" },
    {id:5, name : "HiLo", icon: IoDice, house_edge:"House Edge 1%",  route: "hilo", isAtive: false, img:"https://img2.nanogames.io/game/image/d64c5ee5-68c0-4d7e-bf8d-0be925f378b1.png" },
    {id:2, name : "Classic Dice", icon: IoDice, house_edge:"House Edge 1%",  route: "classic-dice", isAtive: false, img: "https://img2.nanogames.io/game/image/0aa80aca-75d1-4fff-b8c9-1d67f1498373.png" },
    {id:6, name : "Diamonds", icon: IoDice, house_edge:"House Edge 1%",  route: "diamonds", isAtive: false, img: "https://img2.nanogames.io/game/image/42026a73-a033-4a57-bb1c-7e09fd2ea30f.png" },
    {id:7, name : "Mines", icon: IoDice, house_edge:"House Edge 1%",  route: "mines", isAtive: false, img: "https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png" },
]
</script>

<div class='sc-jYmNlR blJYGp sc-emDsmM ijbeXh'>
    <div class='sc-ekrjqK hmXLyn'>
        <div class="sc-jibziO dJteWA nav-tit">
            <div class="cont-txt ">DT <b>IN-HOUSE</b><br>GAMES</div>
        </div>
    </div>
    <div class="sc-bjeSbO cFDYcT grid-list">
        <div class="sc-gfqkcP epfPPG bot-view super-block  game-crash">
            <a class="sc-hKTqa dbJiKC game-item-wrap " href="/crash">
                <div class="lazy-img img">
                    <img src="https://img2.nanogames.io/game/image/c405f953-f7ca-4da5-8309-dcba4fc44e7d.png" alt="">
                </div>
                <div class="hover-mask">
                    <div class="house-edge">House Edge 1%</div>
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63">
                        <defs></defs><g fill="none" fill-rule="evenodd"><circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle><path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path></g>
                    </svg>
                </div>
            </a>
                <div class="sc-fivaXQ gVplre bot-view">
                    <div class="wrap">
                        <a class="item" href="/crash">Crash</a>
                        <div class="help-btn-wrap">
                            <button>
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Help"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-gfqkcP epfPPG bot-view super-block  game-ClassicDice">
                <a class="sc-hKTqa dbJiKC game-item-wrap " href="/classic-dice">
                    <div class="lazy-img img">
                        <img src="https://img2.nanogames.io/game/image/0aa80aca-75d1-4fff-b8c9-1d67f1498373.png" alt="">
                    </div>
                    <div class="hover-mask">
                        <div class="house-edge">House Edge 1%</div>
                        <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs></defs><g fill="none" fill-rule="evenodd"><circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle><path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path></g>
                        </svg>
                    </div>
                </a>
                <div class="sc-fivaXQ gVplre bot-view">
                    <div class="wrap">
                        <a class="item" href="/classic-dice">Classic Dice</a>
                        <div class="help-btn-wrap">
                            <button>
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Help"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <div class="sc-gfqkcP epfPPG bot-view   game-Mines">
            <a class="sc-hKTqa dbJiKC game-item-wrap " href="/mines">
                <div class="lazy-img img">
                    <img src="https://img2.nanogames.io/game/image/0aa3d807-0380-4f8e-b65e-3179d4af2234.png" alt="">
                </div>
                <div class="hover-mask">
                    <div class="house-edge">House Edge 1%</div>
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs></defs><g fill="none" fill-rule="evenodd"><circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle><path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path></g>
                    </svg>
                </div>
            </a>
            <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                    <a class="item" href="/mines">Mines</a>
                    <div class="help-btn-wrap">
                        <button>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Help"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="sc-gfqkcP epfPPG bot-view   game-Mines">
            <a class="sc-hKTqa dbJiKC game-item-wrap " href="/mines">
                <div class="lazy-img img">
                    <img src="https://img2.nanogames.io/game/image/d64c5ee5-68c0-4d7e-bf8d-0be925f378b1.png" alt="">
                </div>
                <div class="hover-mask">
                    <div class="house-edge">House Edge 1%</div>
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs></defs><g fill="none" fill-rule="evenodd"><circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle><path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path></g>
                    </svg>
                </div>
            </a>
            <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                    <a class="item" href="/hilo">Hilo</a>
                    <div class="help-btn-wrap">
                        <button>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Help"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="sc-gfqkcP epfPPG bot-view   game-Mines">
            <a class="sc-hKTqa dbJiKC game-item-wrap " href="/mines">
                <div class="lazy-img img">
                    <img src="https://img2.nanogames.io/game/image/ae817f12-fa67-49b8-b33e-6cafda497488.png" alt="">
                </div>
                <div class="hover-mask">
                    <div class="house-edge">House Edge 1%</div>
                    <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 63"><defs></defs><g fill="none" fill-rule="evenodd"><circle cx="31.3" cy="31.3" r="30.3" fill="#000" fill-opacity=".2" stroke="#E5E7EE" stroke-width="2"></circle><path fill="#F5F6F7" d="M39.5 34.3l-11.3 7.5a2 2 0 01-3-1.6v-15a2 2 0 013-1.7L39.5 31a2 2 0 010 3.3z"></path></g>
                    </svg>
                </div>
            </a>
            <div class="sc-fivaXQ gVplre bot-view">
                <div class="wrap">
                    <a class="item" href="/mines">Plinko</a>
                    <div class="help-btn-wrap">
                        <button>
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Help"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

<div class="sc-ckRZPU iBmEfj">
    <div class="bg-img"></div>
</div>
<div class="sc-ckRZPU iBmEfj">
    <div class="bg-img"></div>
</div>

</div>
</div>

<style>
.hmXLyn {
    position: relative;
    margin-top: 72px;
}
.ijbeXh .nav-tit {
    bottom: 0px;
}
.dJteWA {
    position: relative;
    background-image: var(--curve-bg-1);
    background-repeat: no-repeat;
    background-size: 70% 100%;
    border-top-left-radius: 1.25rem;
    display: inline-block;
    white-space: nowrap;
}
.dJteWA .cont-txt {
    position: relative;
    height: 100%;
    line-height: 24px;
    left: 0px;
    z-index: 99;
    padding: 12px 2.75rem 0rem 1.25rem;
    font-size: 18px;
    color: var(--text-5);
    font-style: italic;
    font-weight: 800;
    font-family: FuturaBold;
    top: 0px;
}
.dJteWA .cont-txt b {
    color: rgb(231, 11, 108);
    font-style: italic;
}
.dJteWA::after {
    content: "";
    position: absolute;
    width: 40%;
    left: 69%;
    top: 0px;
    bottom: 0px;
    background: var(--curve-bg-img-1) 0% 0% / 100% 100% no-repeat;
}
*, *:before, *:after {
    box-sizing: border-box;
}
.blJYGp .grid-list {
    background-color: var(--card-bg-1);
    padding: 12px 0.75rem 1.4375rem;
    border-top-right-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
}
.cFDYcT {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: dense;
    gap: 1.5rem 0.9375rem;
}
.epfPPG.super-block {
    grid-column: 1 / 3;
}
.epfPPG {
    flex: 1 1 0%;
    position: relative;
    user-select: none;
}
.epfPPG.super-block .game-item-wrap {
    padding-top: 48%;
}
.dbJiKC {
    width: 100%;
    padding-top: 100%;
    position: relative;
    display: block;
    border-radius: 1.25rem;
    overflow: hidden;
    transform: translateZ(0px);
}
.dbJiKC .img {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    background: var(--card-bg-2 );
}
.dbJiKC .img img {
    width: 100%;
    height: 100%;
}
.gVplre {
    position: relative;
    color: rgb(255, 255, 255);
    height: 1.5625rem;
    line-height: 1.5625rem;
    font-size: 0.75rem;
}
.gVplre .wrap {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: 0.3125rem 1.875rem 0px 0.875rem;
    box-sizing: border-box;
}
.gVplre .item {
    height: 1.25rem;
    line-height: 1.25rem;
    color: var(--text-7);
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.gVplre .help-btn-wrap button {
    position: absolute;
    width: 2.125rem;
    height: 2.125rem;
    right: 0.125rem;
    top: -0.1875rem;
    padding: 0.5rem;
    opacity: 0.6;
}
.hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
}
.dbJiKC .hover-mask {
    position: absolute;
    transition: all 0.3s linear 0s;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 0.75rem;
    opacity: 0;
}
.dbJiKC .hover-mask .house-edge {
    color: var(--text-5);
    text-align: right;
    padding: 0.625rem 0.875rem 0px 0px;
}
.iBmEfj .bg-img {
    padding-top: 100%;
    border-radius: 1.25rem;
    transform: translateZ(0px);
    position: relative;
    background-color: rgba(0, 0, 0, 0.317);
    overflow: hidden;
    background-image: url(https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848358/dpp-favic_bh8fwz.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 32%;
}
</style>