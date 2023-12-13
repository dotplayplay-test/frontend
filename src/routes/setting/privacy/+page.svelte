<script>
import axios from "axios";
import { routes } from "$lib/store/routes"
import {profileStore} from "$lib/store/profile"
import { handleAuthToken } from "$lib/store/routes";
import {ServerURl} from "$lib/backendUrl"
import {isLightMode} from '../../../lib/store/theme'
const URL = ServerURl()

let Hide_gameing_profile = false



$:{
    if($profileStore.hide_profile){
        Hide_gameing_profile = true
    }else{
        Hide_gameing_profile = false
    }
}


const apiGamingProfile = (async(data)=>{
    await axios.post(`${URL}/api/profile/update-hidden`,{
        profile_state : data,
    },{
        headers:{
            Authorization: `Bearer ${$handleAuthToken}`
        }
    })
    .then(res => {
        (res.data)
    })
})

const handleGamingProfile = (()=>{
    if(!Hide_gameing_profile){
        apiGamingProfile(1)
    }
    else{
        apiGamingProfile(0)
    }
    Hide_gameing_profile = !Hide_gameing_profile
})


const handleHideUserNam = (async(data)=>{
    await axios.post(`${URL}/api/profile/hide-public-username`,{
        profile_state : data,
    },{
        headers:{
            Authorization: `Bearer ${$handleAuthToken}`
        }
    })
    .then(res => {
        (res.data)
    })
})


let hide_userName = false
$:{
    if($profileStore.hidden_from_public){
        hide_userName = true
    }else{
        hide_userName = false
    }
}

const handleHideUserName = (()=>{
    if(!hide_userName){
        handleHideUserNam(1)
    }
    else{
        handleHideUserNam(0)
    }
    hide_userName = !hide_userName
})


let hide_onlinePresence = false
let handleonlinePresence = (()=>{
    hide_onlinePresence = !hide_onlinePresence
})


let allow_private_messages = false
const handlePrivateMessages = (()=>{
    allow_private_messages = !allow_private_messages
})

const handleFriendRequestAPI = (async(data)=>{
    await axios.post(`${URL}/api/profile/refuse-friend-request`,{
        profile_state : data,
    },{
        headers:{
            Authorization: `Bearer ${$handleAuthToken}`
        }
    })
    .then(res => {
        (res.data)
    })
})

let refuse_friend_request = false
$:{
    if($profileStore.refuse_friends_request){
        refuse_friend_request = true
    }else{
        refuse_friend_request = false
    }
}
const handleFriendRequest = ()=>{
    if(!refuse_friend_request){
        handleFriendRequestAPI(1)
    }
    else{
        handleFriendRequestAPI(0)
    }
    refuse_friend_request = !refuse_friend_request
}


const handleTipsAPI = (async(data)=>{
    await axios.post(`${URL}/api/profile/refuse-tips`,{
        profile_state : data,
    },{
        headers:{
            Authorization: `Bearer ${$handleAuthToken}`
        }
    })
    .then(res => {
        (res.data)
    })
})

let refuse_tip = false
$:{
    if($profileStore.refuse_tips){
        refuse_tip = true
    }else{
        refuse_tip = false
    }
}

const handleTips = (()=>{
    if(!refuse_tip){
        handleTipsAPI(1)
    }
    else{
        handleTipsAPI(0)
    }
    refuse_tip = !refuse_tip
})

</script>

<div class="sc-hLVXRe isgvhu">
    <div class="item">
        <p>
            <span>Hide my gameing data on profile</span>
            <span class="bottom">Even if hidden, your avatar and username are always visible in chatrooms.</span>
        </p>
        <button on:click={handleGamingProfile} class={`sc-giYglK hRMjrF switch ${Hide_gameing_profile && "open"} `}>
            <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Hide my username from public lists</span>
            <span class="bottom">If hidden, no one can view your profile by clicking on your avatar or username on public rankings or bets list.</span>
        </p>
        <button on:click={handleHideUserName} class={`sc-giYglK hRMjrF switch ${hide_userName && "open"} `}>
            <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Hide my online presence in private chat</span>
        </p>
        <button on:click={handleonlinePresence} class={`sc-giYglK hRMjrF switch ${hide_onlinePresence && "open"} `}>
            <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Allow private messages from strangers</span>
        </p>
        <button on:click={handlePrivateMessages} class={`sc-giYglK hRMjrF switch ${allow_private_messages && "open"} `}>
            <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Refuse any new friend request</span>
        </p>
        <button on:click={handleFriendRequest} class={`sc-giYglK hRMjrF switch ${refuse_friend_request && "open"} `}>
            <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Refuse tip from strangers</span>
        </p>
        <button on:click={handleTips} class={`sc-giYglK hRMjrF switch ${refuse_tip && "open"} `}>
            <div class={$isLightMode ? "light-dot dot" : "dot"}></div>
        </button>
    </div>
</div>

<style>
      .light-mode{
    background-color: rgb(255, 255, 255) !important;
    color: rgb(49, 55, 61) !important;
  }
  .light-grey-bg{
    background-color: rgb(245, 246, 250) !important;
  }
  .light-bg {
    background-color: rgb(255, 255, 255) !important;
  }
  .light-text {
    color: rgb(49, 55, 61) !important;
  }
  .light-dot{
    background-color: #FFF !important;
  }
  
.isgvhu > .item:first-child {
    padding-top: 0px;
}
.isgvhu .item {
    padding: 0.875rem 0px;
    border-bottom: 1px solid rgba(152, 167, 181, 0.15);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.isgvhu .item p {
    margin: 0px;
}
.isgvhu .item p span {
    line-height: 1.25rem;
    display: block;
}
.isgvhu .item p span.bottom {
    color: rgba(152, 167, 181, 0.5);
    font-weight: 200;
}

</style>
