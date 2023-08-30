<!-- <script>
    import Active from "./active.svelte";
import Main from "./main.svelte";

    let classice = "active"
    let trenBall = ""


    const handleSwitch = ((e )=>{
        if(e === 1){
             classice = "active"
             trenBall = "" 
        }else{
            classice = ""
             trenBall = "active"
        }
    })

</script>
<div class="crash">
    <div class="crash-container">
        <div class="crash-tab">
            <div class="crash-tab-container">
                <div class="tab-navs">
                    <button on:click={()=>handleSwitch(1)} class={"tab-nav " + classice} >Classic</button>
                    <button on:click={()=>handleSwitch(2)} class={"tab-nav " + trenBall} >Trenball</button>
                </div>
            </div>
        </div>
        <div class="game-arena">
            <Main />
            <Active />
        </div>
    </div>
</div>

<style>
    .crash{
        margin-left: 3.5rem;
    }
    .crash-container{
        max-width: 1368px;
        margin: 0px auto;
        padding: 1.25rem 0.625rem;
        min-height: 90vh;
    }
    .crash-tab{
        margin: 0px 0.625rem 0.75rem;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .crash-tab-container{
        display: inline-flex;
        margin-right: auto;

    }
    .crash-tab-container .tab-navs{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 2.25rem;
        position: relative;
        border-radius: 1.125rem;
        background-color: rgba(49, 52, 60, 0.7);
    }
    .tab-nav{
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
        width: 5.625rem;
        background: none;
        border: none;
        color: var(--text-color);
    }
    .tab-nav.active{
        border-radius: 1.125rem;
        background-image: linear-gradient(to left, rgb(85, 89, 102), rgb(85, 89, 102), rgb(88, 174, 20));
        color: #ffff;
        height: 100%;
        transition: right 0.2s ease-out 0s, left 0.3s ease-out 0s;
        transform: translateZ(0px);
        transition: 0.5s ease;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
    }
    .game-arena{
        display: flex;
        flex-wrap: wrap;
    }
</style> -->