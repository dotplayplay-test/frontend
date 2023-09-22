<script>
let Hide_gameing_profile = false
const handleGamingProfile = (()=>{
    Hide_gameing_profile = !Hide_gameing_profile
})

let hide_userName = false
const handleHideUserName = (()=>{
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

let refuse_friend_request = false
const handleFriendRequest = ()=>{
    refuse_friend_request = !refuse_friend_request
}

let refuse_tip = false
const handleTips = (()=>{
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
            <div class="dot"></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Hide my username from public lists</span>
            <span class="bottom">If hidden, no one can view your profile by clicking on your avatar or username on public rankings or bets list.</span>
        </p>
        <button on:click={handleHideUserName} class={`sc-giYglK hRMjrF switch ${hide_userName && "open"} `}>
            <div class="dot"></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Hide my online presence in private chat</span>
        </p>
        <button on:click={handleonlinePresence} class={`sc-giYglK hRMjrF switch ${hide_onlinePresence && "open"} `}>
            <div class="dot"></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Allow private messages from strangers</span>
        </p>
        <button on:click={handlePrivateMessages} class={`sc-giYglK hRMjrF switch ${allow_private_messages && "open"} `}>
            <div class="dot"></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Refuse any new friend request</span>
        </p>
        <button on:click={handleFriendRequest} class={`sc-giYglK hRMjrF switch ${refuse_friend_request && "open"} `}>
            <div class="dot"></div>
        </button>
    </div>
    <div class="item">
        <p>
            <span>Refuse tip from strangers</span>
        </p>
        <button on:click={handleTips} class={`sc-giYglK hRMjrF switch ${refuse_tip && "open"} `}>
            <div class="dot"></div>
        </button>
    </div>
</div>

<style>
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
