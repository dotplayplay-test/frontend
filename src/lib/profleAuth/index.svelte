<script>
import axios from "axios";
import { profileStore } from "$lib/store/profile";
import { routes} from "$lib/store/routes";
import { handleAuthToken } from "$lib/store/routes";
import { error_msg } from "./store";
import { handleSepProfile } from "$lib/profleAuth/store"
import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()
let last_name = ''
let first_name = ''
let day = 1
let month = 1
let year = 2000

let is_loading = false
const handleSubmit = (async()=>{
    is_loading = true
    if(!last_name || !first_name){
        error_msg.set("field can't be empty")
        setTimeout(()=>{
            error_msg.set("")
        },4000)
        is_loading = false
    }else{
        if($routes.profile){
            let data = {
                born: day+"-"+month+"-"+year,
                email: $profileStore.email,
                firstname: first_name,
                hidden_from_public: $profileStore.hidden_from_public,
                hide_profile: $profileStore.hide_profile,
                joined_at: $profileStore.joined_at,
                lastname: last_name,
                profile_image: $profileStore.profile_image,
                refuse_friends_request: $profileStore.refuse_friends_request,
                refuse_tips:$profileStore.refuse_tips,
                user_id: $profileStore.user_id,
                username:  $profileStore.username,
                vip_level: $profileStore.vip_level
            }
              await  axios.post(`${URL}/api/profile/update-profile`, {
            data
        },{
            headers: {
            "Content-type": "application/json",
            'Authorization': `Bearer ${$handleAuthToken}`
          },
          }).then((res)=>{
            profileStore.set(data)
            handleSepProfile.set(false)
            is_loading = false
            window.location.href = "/"
          }).catch((err)=>{
            is_loading = false
            console.log(err)
          })
        }
    }
})

</script>
<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    {#if $error_msg}
    <div class="error-message">
        <div class="hTTvsjh"> 
            <div>{$error_msg}</div>
            </div>
        </div>
    {/if}   

    <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
        <div class="pop sc-hKumaY hJhIys" id="">
            <div class="pop-title">One more step to get the FREE SPIN!</div>
            <p>To make NG a better place, We'd like to know you more. Thanks for your patience.</p>
            <div class="sc-ezbkAF kDuLvp input sc-eTwdGJ eEagjO">
                <div class="input-label">Your Name</div>
                <div class="input-after">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" placeholder="Last Name" bind:value={last_name}>
                        </div>
                    </div>
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" placeholder="First Name" bind:value={first_name}>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sc-ezbkAF kDuLvp input sc-eTwdGJ eEagjO birth-input">
                <div class="input-label">Date of Birth</div>
                <div class="input-after">
                    <div class="sc-ezbkAF kDuLvp input ">
                        <div class="input-control">
                            <input type="text" placeholder="Day" bind:value={day}></div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-control">
                                <input type="text" placeholder="Month" bind:value={month}>
                            </div>
                        </div>
                        <div class="sc-ezbkAF kDuLvp input ">
                            <div class="input-control">
                                <input type="text" placeholder="Year" bind:value={year}>
                            </div>
                        </div>
                    </div>
                </div>
                <button disabled={is_loading} on:click={handleSubmit} class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal submit-btn">
                    <div class="button-inner">{!is_loading ? "Confirm" : "Loading...."}</div>
                </button>
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
.gvBCkE .pop {
    transform: translate(-50%, -50%);
    min-width: 420px;
    min-height: 370px;
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 1.25rem;
    position: relative;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
    font-size: 0.8125rem;
    padding: 1.25rem;
    transition: all 0.5s ease;
}
.gvBCkE .pop-title {
    color: rgb(255, 255, 255);
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;
}
.kDuLvp {
    margin-top: 1rem;
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
.eEagjO .input-after {
    display: flex;
    margin: 0px;
}
.eEagjO .input-after > .input:first-child {
    margin-left: 0px;
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
.eEagjO .input-after > .input {
    margin-top: 0px;
    flex: 1 1 0%;
    margin-left: 0.625rem;
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
    outline: none;
}
.eEagjO .input-after > .input {
    margin-top: 0px;
    flex: 1 1 0%;
    margin-left: 0.625rem;
}
.kDuLvp {
    margin-top: 1rem;
}
.hJhIys .submit-btn {
    margin: 1.875rem auto 0.625rem;
    width: 13.75rem;
}
</style>