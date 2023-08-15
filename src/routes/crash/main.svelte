<script>
    import Crash from "./crash.svelte";
    import Recent from "./recent.svelte";

</script>

<div class="game-main">
    <div class="game-view">
        <Recent />
        <Crash />
    </div>
    <div id="crash-control" class="bs-PnVtqtasy game-control style1">
        <div class="game-control-switch baiiass">
            <button class="is-active">
                <div class="label">Manual</div>
            </button>
            <button class="">
                <div class="label">Advanced</div>
            </button>
        </div>
        <div class="game-control-panel">
            <div class="bwUVwbhv">
                <button class="TcrcsJy hVw-wybvs kddubeeew button-big button Yvsajywv">
                    <div class="button-inner">
                        <div>Bet</div>
                        <div class="sub-text">
                            (Next round)
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>
<style>
    .game-main{
        min-height: auto;
        display: flex;
        flex-direction: column;
        flex: 1 1 0%;
        overflow: hidden;

        position: relative;
        border-radius: 1.25rem;
        background-color: rgb(23, 24, 27);
    }
    .game-view{
        flex: 1 1 0%;
        display: flex;
        flex-direction: column;
    }
   .bs-PnVtqtasy.style1{
        order: 2;
        min-height: 230px;
        margin-top: 1px;
   }
   .bs-PnVtqtasy{
        display: flex;
   }
   .bs-PnVtqtasy.style1 .game-control-switch{
        width: 3rem;
        flex-direction: column;
        position: relative;
   }
   .bs-PnVtqtasy .game-control-switch{
        display: flex;
        flex: 0 0 auto;
   }
   .bs-PnVtqtasy.style1 .game-control-switch >  button.is-active{
        border-right: 2px solid rgb(67, 179, 9);
        background-image: linear-gradient(to left, rgba(91, 174, 28, 0.176), rgba(0, 0, 0, 0) 50%);
   }
   .bs-PnVtqtasy.style1 .game-control-switch > button{
        position: relative;
   }
   .bs-PnVtqtasy.style1 .game-control-switch .label{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-90deg);
        white-space: nowrap;
   }
   .bs-PnVtqtasy .game-control-switch > button.is-active{
        color: rgb(245, 246, 247);
        font-weight: bold;
   }
   .bs-PnVtqtasy .game-control-switch > button{
        flex: 1 1 0%;
        cursor: pointer;
        color: rgba(153, 164, 176, 0.6);
   }
   .bs-PnVtqtasy .game-control-switch button{
        border: none;
        padding: 0;
        user-select: none;
        cursor: pointer;
        background-color: transparent;
        color: var(--text-color);
   }
   .baiiass{
        display: flex;
        opacity: 1;
   }
   .bs-PnVtqtasy.style1 .game-control-panel{
        padding: 1.25rem 1.375rem;
   }
   .bs-PnVtqtasy .game-control-panel{
        flex: 1 1 0%;
   }
   .TcrcsJy.button{
        color: rgb(245, 246, 247);
        box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
        background-color: rgb(67, 179, 9);
        background-image: conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28));
   }
   .kddubeeew.button-big{
        height: 3.625rem;
   }
   .hVw-wybvs{
        width: 90%;
        max-width: 19.75rem;
        margin: 3.5rem auto;
        border: none;
   }
   .Yvsajywv{
        display: block;
        width: 100%;
        border-radius: 6.25rem;
        height: 2rem;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
   }
</style>