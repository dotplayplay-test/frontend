<script>
import { handleAuthToken } from "$lib/store/routes"
import { error_msg } from "../../store/index"
export let settin;
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher()
import axios from "axios";
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

let client = generateString(10)

const handleCancle = (()=>{
    dispatch("close", 9)
})

let is_loading = false
const handleSeedSettings = (async()=>{
    const regex = /^[a-zA-Z0-9]+$/;
    is_loading = true
    if(!client || client.length < 10){
        setTimeout(()=>{
            error_msg.set("Field must have at least 10 characters")
            is_loading = false
        },800)
    }else if(!regex.test(client)){
        setTimeout(()=>{
            error_msg.set("Field must have at least 10 characters")
            is_loading = false
        },800)
    }
    else{
    await axios.post("http://localhost:8000/api/user/dice-game/seed-settings",{
        data: client
    },{
    headers: {
        "Content-type": "application/json",
        'Authorization': `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        error_msg.set(res.data)
        is_loading = false
        handleCancle()
    })
    .catch((error)=>{
        is_loading = false
    })
}

setTimeout(()=>{
    error_msg.set("")
},4000)
})



</script>

<div class="dialog-body default-style " style="z-index: 2; transform: none;">

    <div class="sc-dkPtRN jScFby scroll-view sc-hxaKAp iGYNgq dialog-box">
        <div class="warn">You may use this function to set a new server seed + a new client seed, they can be randomly generated or customized (at least 10 characters), 
            and the number of bets will be reset to zero.
        </div>
        <div class="detailForm">
            <div class="title">Current seeds</div>
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">Server Seed (hash)</div>
                <div class="input-control">
                    <input type="text" readonly value={settin.server_seed}>
                </div>
            </div>
            <div class="formFlex">
                <div class="sc-ezbkAF kDuLvp input ">
                    <div class="input-label">Client Seed</div>
                    <div class="input-control">
                        <input type="text" readonly value={settin.client_seed}>
                    </div>
                </div>
                <div class="sc-ezbkAF kDuLvp input ">
                    <div class="input-label">Nonce</div>
                    <div class="input-control">
                        <input type="text" readonly value={settin.game_nonce}>
                    </div>
                </div>
            </div>
        </div>
        <div class="devide"></div>
        <div class="detailForm">
            <div class="title">New seeds</div>
            <div class="sc-ezbkAF kDuLvp input ">
                <div class="input-label">Server Seed (hash)</div>
                <div class="input-control">
                    <input type="text" placeholder="The seed hasn't been revealed yet" readonly value={settin.server_seed}>
                </div>
            </div>
            <div class="formFlex">
                <div class="sc-ezbkAF kDuLvp input ">
                    <div class="input-label">Client Seed</div>
                    <div class="input-control">
                        <input type="text" maxlength="32" minlength="10" bind:value={client}>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon rotate-icon">
                            <use xlink:href="#icon_Refresh"></use>
                        </svg>
                    </div>
                </div>
                <div class="sc-ezbkAF kDuLvp input ">
                    <div class="input-label">Nonce</div>
                    <div class="input-control">
                        <input type="text" readonly value="0">
                    </div>
                </div>
            </div>
        </div>
        <div class="submit">
            <button disabled={is_loading} on:click={handleSeedSettings} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal">
                <div class="button-inner">
                    {#if is_loading}
                    <div class="center">
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                        <div class="wave"></div>
                    </div>
                        {:else}
                        Use New Seeds
                    {/if}
                  
                </div>
            </button>
        </div>
    </div>
</div>





<style>


   .default-style {
       padding-top: 3.75rem;
       background-color: rgb(23, 24, 27);
   }
   .default-style {
       padding-top: 3.75rem;
       background-color: rgb(23, 24, 27);
   }
   .default-style > div {
       border-radius: 20px;
       background-color: rgb(30, 32, 36);
       padding: 1.25rem 1.25rem 0px;
   }
   .dialog-body > div {
       flex: 1 1 0%;
   }
   .dialog-box {
       color: rgba(153, 164, 176, 0.6);
       background-color: rgb(30, 32, 36);
       border-top-left-radius: 2.5rem;
       border-top-right-radius: 2.5rem;
       padding: 1.75rem 1.125rem;
   }
   .jScFby {
       box-sizing: border-box;
       height: 100%;
       overflow-y: auto;
       touch-action: pan-y;
       overscroll-behavior: contain;
   }
   .iGYNgq .warn {
       border: 1px solid rgb(67, 179, 9);
       background: rgba(93, 160, 0, 0.1);
       border-radius: 0.625rem;
       color: rgb(67, 179, 9);
       padding: 0.75rem 1.25rem;
       margin-top: 0.5rem;
       font-size: 0.75rem;
   }
   .iGYNgq .detailForm {
       margin-top: 1.375rem;
   }
   .iGYNgq .detailForm .title {
       color: rgb(245, 246, 247);
       line-height: 1;
       font-weight: bold;
   }
   .iGYNgq .detailForm .input {
       margin-top: 0.75rem;
   }
   .iGYNgq .detailForm .input-label {
       margin: 0px 0px 0.25rem 0.75rem;
       color: rgba(153, 164, 176, 0.6);
   }
   .kDuLvp .input-label {
       display: flex;
       -webkit-box-align: center;
       align-items: center;
       line-height: 1em;
       height: 1.25rem;
       margin: 0px 0.75rem 0.375rem;
       color: rgba(153, 164, 176, 0.6);
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
   .iGYNgq .detailForm .input .input-control input[readonly] {
       opacity: 1;
   }
   .iGYNgq .detailForm .input .input-control input {
       color: rgb(245, 246, 247);
   }
   .kDuLvp .input-control input {
       flex: 1 1 0%;
       width: 100%;
       height: 100%;
       min-width: 1rem;
       padding: 0px;
       border: none;
       background-color: transparent;
       color: rgb(245, 246, 247);
   }
   .iGYNgq .detailForm .formFlex {
       display: flex;
       margin-bottom: 1.25rem;
   }
   .iGYNgq .detailForm .formFlex > div:first-child {
       flex: 6 1 0%;
       margin-right: 10px;
   }
   .iGYNgq .detailForm .input-label {
       margin: 0px 0px 0.25rem 0.75rem;
       color: rgba(153, 164, 176, 0.6);
   }
   .kDuLvp .input-label {
       display: flex;
       -webkit-box-align: center;
       align-items: center;
       line-height: 1em;
       height: 1.25rem;
       margin: 0px 0.75rem 0.375rem;
       color: rgba(153, 164, 176, 0.6);
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
   .kDuLvp {
       margin-top: 1rem;
   }
   .iGYNgq .detailForm .input .input-control input[readonly] {
       opacity: 1;
   }
   .iGYNgq .detailForm .input .input-control input {
       color: rgb(245, 246, 247);
   }
   .iGYNgq .detailForm .formFlex > div:last-child {
       flex: 4 1 0%;
   }
   .iGYNgq .detailForm .input {
       margin-top: 0.75rem;
   }
   .iGYNgq .submit {
       margin: 1.25rem 0px 3.75rem;
       padding: 0px 3.125rem;
   }
   </style>
   