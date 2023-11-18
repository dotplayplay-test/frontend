<script>
    import Gameview from "$lib/games/mines/gameview.svelte";
    import "$lib/games/mines/styles/index.css"
    import Controls from "$lib/games/mines/Controls.svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiFillSound from "svelte-icons-pack/ai/AiFillSound";
    import BiSolidKeyboard from "svelte-icons-pack/bi/BiSolidKeyboard";
    import BiStats from "svelte-icons-pack/bi/BiStats";
    import RiSystemArrowDropRightLine from "svelte-icons-pack/ri/RiSystemArrowDropRightLine";
    import { DicegameSocket } from "$lib/games/mines/socket/Socket"
    import BiSolidAlbum from "svelte-icons-pack/bi/BiSolidAlbum";
    import BsHurricane from "svelte-icons-pack/bs/BsHurricane";
    import Allbet from "$lib/games/mines/componets/allbet.svelte";
    import Mybet from "$lib/games/mines/componets/mybet.svelte";
    import Hotkey from "$lib/games/mines/componets/hotkey.svelte";
    import LiveStats from "$lib/games/mines/componets/liveStats.svelte";
    import SeedSetting from "$lib/games/mines/componets/seedSetting.svelte";
    import Help from "$lib/games/mines/componets/help.svelte";
    import { handleAuthToken } from "$lib/store/routes"
    import { soundHandler } from "$lib/games/mines/store/index"
     DicegameSocket()
      

    
    let is_allbet = true
    let is_mybet = false
    let is_contest = false
    const handleAllbet = ((e) => {
        if (e === 1) {
            is_allbet = true
            is_mybet = false
            is_contest = false
        } else if (e === 2) {
            is_allbet = false
            is_mybet = true
        } else {
            is_contest = true
            is_allbet = false
            is_mybet = false
        }
    })
    
    let is_hotkey = false
    const handleHotKey = (()=>{
      is_hotkey = !is_hotkey
    })
    
    let is_stats = false
    let stats = (()=>{
      is_stats = !is_stats
    })
    let isSeed = false
    const  hanhisSeed = (()=>{
      isSeed = !isSeed
    })
    
    let isHelp = false
    
    const handleIsHelp = (()=>{
      isHelp = !isHelp
    })
    
    
    const handleSoundState = (()=>{
        if($soundHandler){
            soundHandler.set(0)
        }else{
            soundHandler.set(1)
        }
    })
    
    </script>
    
    {#if is_hotkey}
      <Hotkey on:close={handleHotKey} />
    {/if}
    
    {#if is_stats}
      <LiveStats on:close={stats} />
    {/if}
    
    {#if isSeed}
      <SeedSetting on:close={hanhisSeed}/>
    {/if}
    
    {#if isHelp}
    <Help on:close={handleIsHelp} />
    {/if}
    
    
    
    
    
    <div class="sc-lhMiDA ePAxUv" style="opacity: 1; transform: none;">
        <div id="game-ClassicDice" class="sc-haTkiu lmWKWf game-style0 sc-gDGHff gYWFhf">
            <div class="game-area">
                <div class="game-main">
                    <Controls />
                    <Gameview />
    
                    <div class="game-actions">
                        <button on:click={()=> handleSoundState()} class={`action-item ${$soundHandler ? "active" : ""} `}>
                            <Icon src={AiFillSound} size="23"  color={` ${$soundHandler ? "rgb(67, 179, 9)" : "rgba(153, 164, 176, 0.6)"} `} title="Sound" />
                        </button>
                        <button on:click={handleHotKey} class="action-item ">
                            <Icon src={BiSolidKeyboard}  size="23"  color="rgba(153, 164, 176, 0.6)" />
                        </button>
                        <button on:click={stats} class="action-item ">
                            <Icon src={BiStats}  size="18"  color="rgb(153, 164, 176)" />
                        </button>
                        <button on:click={hanhisSeed} class="action-item " id="set_seed">
                            <Icon src={BiSolidAlbum}  size="18"  color="rgb(153, 164, 176)" />
                        </button>
                        <button on:click={handleIsHelp} class="action-item ">
                            <Icon src={BsHurricane}  size="18"  color="rgb(153, 164, 176)" />
                        </button>
                    </div>
                </div>
            </div>
    
            <div class="sc-cxpSdN kQfmQV tabs game-tabs len-3">
                <div class="tabs-navs">
                    <button on:click={()=>handleAllbet(1)} class={`tabs-nav ${is_allbet && "is-active"}`}>All Bets</button>
                    <button on:click={()=>handleAllbet(2)} class={`tabs-nav ${is_mybet && "is-active"}`}>My Bets</button>
                    <button on:click={()=>handleAllbet(3)} class={`tabs-nav ${is_contest && "is-active"}`}>Contest</button>
                    {#if is_allbet}
                    <div class="bg" style={`left: 0%; right: 66.6667%;`}></div>
                    {:else if is_mybet}
                    <div class="bg" style="left: 33.3333%; right: 33.3333%;"></div>
                    {:else if is_contest}
                    <div class="bg" style="left: 66.6667%; right: 0%;"></div>
                   {/if}
                </div>
                {#if is_allbet}
                <Allbet />
                {:else if is_mybet}
                <Mybet />
                {/if}
            </div>
    
            <div class="sc-knKHOI cFxmZX">
              <div class="intro-title">
                <p>Classic Dice</p>
                <div class="intro-tags">
                  <p>Our Best Games</p>
                  <p>BC Originals</p>
                  <p>Recommended Games</p>
                  <p>Dice</p>
                </div>
              </div>
              <div class="description">Classic Dice, a probability game established by blockchain hash value calculation and algorithm, provides more fun with bet and prediction, in which the closer the number rolled by players to the random number, the higher the probability winning.</div>
              <button class="intro-detail">
                Details
                <span style="margin-left: 1.125rem;">
                  <Icon src={RiSystemArrowDropRightLine}  size="23"  color="rgba(153, 164, 176, 0.6)"  />
                </span>
              </button>
            </div>
        </div>
    </div>
    
    
    
    <style>
    .ePAxUv {
        margin-top: 4rem;
    }
    
    .kQfmQV .tabs-navs {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 2.25rem;
        position: relative;
        border-radius: 1.125rem;
        background-color: rgba(49, 52, 60, 0.7);
    }
    
    .lmWKWf .game-actions {
        display: flex;
        order: 10;
        -webkit-box-align: center;
        align-items: center;
        height: 4rem;
        position: relative;
    }
    
    .lmWKWf .game-actions::before {
        content: "";
        flex: 1 1 0%;
    }
    
    .lmWKWf .action-item {
        cursor: pointer;
        margin-right: 0.5rem;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 50%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    
    .action-item:hover {
        background: rgba(203, 203, 203, 0.082);
    }
    
    .lmWKWf .game-actions::after {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        right: 0px;
        height: 1px;
        opacity: 0.3;
        background-color: rgb(49, 52, 60);
    }
    
    .lmWKWf .game-actions::before {
        content: "";
        flex: 1 1 0%;
    }
    
    .lmWKWf .game-actions {
        display: flex;
        order: 10;
        -webkit-box-align: center;
        align-items: center;
        height: 4rem;
        position: relative;
    }
    
    .lmWKWf .game-tabs {
        margin-top: 2.5rem;
    }
    
    .lmWKWf .game-tabs .tabs-navs {
        margin-bottom: 0.75rem;
        margin-left: 0.625rem;
        display: inline-flex;
    }
    
    .lmWKWf .game-tabs .tabs-navs .tabs-nav {
        width: 5.625rem;
    }
    
    .kQfmQV .tabs-nav.is-active {
        color: rgb(245, 246, 247);
        font-weight: bold;
    }
    
    .kQfmQV .tabs-nav {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        flex: 1 1 0%;
        height: 100%;
        cursor: pointer;
        white-space: nowrap;
        width: 100%;
        z-index: 1;
    }
    
    .kQfmQV .tabs-navs .bg {
        border-radius: 1.125rem;
        background-image: linear-gradient(to left, rgb(85, 89, 102), rgb(85, 89, 102), rgb(88, 174, 20));
        opacity: 0.4;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        transition: right 0.2s ease-out 0s, left 0.3s ease-out 0s;
        transform: translateZ(0px);
        box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
    }
    .cFxmZX {
        width: 100%;
        border-radius: 1.25rem;
        background-color: rgb(30, 32, 36);
        padding: 1.5rem 1.5rem 2rem;
        margin-top: 2rem;
    }
    .cFxmZX .intro-title {
        min-height: 5rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .cFxmZX .intro-title > p {
        font-size: 1rem;
        color: rgb(245, 246, 247);
        font-weight: 600;
        margin: 0px;
        white-space: nowrap;
    }
    .cFxmZX .intro-title .intro-tags {
        margin-left: 2.5rem;
        display: flex;
        flex-wrap: wrap;
    }
    .cFxmZX .intro-title .intro-tags > p {
        margin: 0px 1.125rem 0.3125rem 0px;
        padding: 0.5rem 1.25rem;
        border-radius: 1.125rem;
        background-color: rgb(43, 47, 54);
    }
    .cFxmZX .description {
        margin-top: 0.75rem;
        line-height: 1.25rem;
    }
    .cFxmZX .intro-detail {
        width: 6.75rem;
        height: 2.5rem;
        margin-top: 2rem;
        border-radius: 1.25rem;
        background-color: rgba(49, 52, 60, 0.6);
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    </style>
    