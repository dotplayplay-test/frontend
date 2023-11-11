<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import { createEventDispatcher } from 'svelte';
import { handleAuthToken } from "$lib/store/routes"
import { handleisLoggin } from "$lib/store/profile";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
import { affiliate_info, affilliate_info } from "$lib/pages/affiliate/main/store/index";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
const dispatch = createEventDispatcher()
import axios from "axios"

let reward_modal = false
const handleOpenModal = ((we)=>{
    if(we){
        dispatch("open",1)
    }else{
        reward_modal = !reward_modal
    }
})

let is_loading = true
const fetchFriendsInfo = (async()=>{
    is_loading = true
    await axios.get(`${URL}/api/affiliate/friends-info`,{
        headers:{
            Authorization: `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        is_loading = false
        affiliate_info.set(res.data)
    })
    .catch((err)=>{
        is_loading = false
        console.log(err)
    })
})
$:{
    $handleisLoggin && fetchFriendsInfo()
}


</script>

<div class="section">

    {#if reward_modal}
        <div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
            <div class="dialog casino-commission-dialog" style="opacity: 1; width: 464px; height: 470px; margin-top: -235px; margin-left: -232px; transform: scale(1) translateZ(0px);"><div class="dialog-head has-close"><div class="dialog-title">Commission Rewards Rule</div>
        </div>
        <button on:click={()=>handleOpenModal(0)} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="18"  color="rgb(255, 255, 255)" className="custom-icon" />
        </button>
        <div class="dialog-body default-style casino-commission-dialog" style="z-index: 2; transform: none;"><div class="sc-dkPtRN jScFby scroll-view sc-hcupDf fymRoF"><div class="commission-dialog"></div></div></div></div>
        </div>
    {/if}


    <div class="title pc-spec">Affiliate Rewards</div>
    <div class="content">
        <div class="sc-jCHUfY funZYP my-rewards">
            <div class="rewards-item rewards">
                <div class="common">
                    <div class="title ttu">
                        <span>Extra&nbsp;</span>
                        <span class="type theme">USD Rewards</span>
                    </div>
                    <div class="hover">
                        <button on:click={()=>handleOpenModal(1)} class="theme">USD Rewards Rules</button>
                        <Icon src={ RiSystemArrowRightSLine} size="18" color="#fff" className="custom-icon"  />
                    </div>
                    <div class="amount-wrap">
                        <div class="amount">{$affilliate_info.available_usd_reward}<span class="unit">USD</span></div>
                        <div class="desc">Newly Available USD Rewards</div></div>
                    <div class="tips">
                        <div class="tips_flex">
                            <div>Received:&nbsp;<span class="theme">{(parseFloat($affiliate_info.total_earn_me)).toFixed(2)}</span>
                                <span class="unit gapx"> USD</span>
                            </div>
                            <div class="question-box">
                                <Icon src={ RiSystemArrowRightSLine} size="18" color="#fff" className="custom-icon"  />
                            </div>
                            <div>Locked:&nbsp;
                                <span class="theme">{(parseFloat($affiliate_info.total_usd_reward)).toFixed(4)}</span>
                                <span class="unit"> USD</span>
                            </div>
                        </div>
                        <div>Your current friends staying active will unlock you more USD Rewards</div>
                    </div>
                    <a class="withdraw" href="/my-affiliate/rewards">Withdraw</a>
                </div>
                <div class="list-group">
                    <div class="list-header">
                        <div class="list-header_friends">
                            <span>All Friends</span>
                            <span class="value">{$affilliate_info.registered_friends}</span>
                        </div>
                    </div>
                    <div class="list-content">
                        <div class="fc thead">
                            <div class="th">My Top3 Friends</div>
                            <div class="th">VIP level</div>
                            <div class="th">Earned Me</div>
                        </div>
                        {#if is_loading}
                            <div>laoding...</div>
                        {:else}
                            {#each $affiliate_info.friends_list.slice(0, 3) as friends}
                            <div class="tr fc">
                                <div class="td fc">
                                    <img class="avatar user-avatar" alt="" src={friends.profile_image}>
                                    <div class="nickanme">{friends.username}</div>
                                </div>
                                <div class="td fc">
                                    <div class="bar">
                                        <div class="bar-cover" style={`width: ${friends.vip_progress}%;`}></div>
                                    </div>
                                    <div class="level">V{friends.vip_level}</div>
                                </div>
                                <div class="td fc yellow">
                                    <img class="icon" alt="" src="https://nanogames.io/coin/USD.black.png">
                                    <span>{friends.earn_me}</span>
                                </div>
                            </div>
                            {/each}
                        {/if}
               
                    </div>
                    <a class="list-footer" href="/my-affiliate/friends">
                        <span>View More</span>
                        <Icon src={ RiSystemArrowRightSLine} size="18" color="#fff" className="custom-icon"  />
                    </a>
                </div>
            </div>
            <div class="rewards-item commission">
                <div class="common">
                    <div class="title ttu">
                        My
                        <span class="type theme">Commission Rewards</span></div>
                    <div class="hover">
                        <button on:click={()=>handleOpenModal(0)} class="theme">Commission Reward Rules</button>
                        <Icon src={ RiSystemArrowRightSLine} size="18" color="#fff" className="custom-icon"  />
                    </div>
                    <div class="amount-wrap">
                        <div class="amount">{$affilliate_info.commission_reward}<span class="unit">USD</span></div>
                        <div class="desc">Newly Available Commission Rewards</div>
                    </div>
                    <div class="total-commission">
                        <div class="commission-desc">
                            <span class="theme">Commission</span> You've Received in Total:</div>
                        <div class="commission-amount">{(parseFloat($affiliate_info.total_commission_reward)).toFixed(5)}<span class="unit">USD</span></div>
                    </div>
                    <a class="withdraw" href="/my-affiliate/commission">Withdraw</a>
                </div>
                <div class="nothing list-group">
                    <div class="nothing-tip">No info yet <br> Invite friends to join you now!</div>
                    <div class="list-header">
                        <div>Cryptocurrency Distribution Info</div>
                    </div>
                    <div class="list-content"></div>
                    <a class="list-footer" href="/my-affiliate/friends">
                        <span>View More</span>
                        <Icon src={ RiSystemArrowRightSLine} size="18" color="#fff" className="custom-icon"  />
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.title {
    font-size: 24px;
    font-weight: 600;
    color: rgb(245, 246, 247);
    margin-bottom: 40px;
    text-align: center;
}
 .title.pc-spec {
    font-weight: 600;
    height: 68px;
    line-height: 68px;
    background: url(https://static.nanogames.io/assets/star.321c7b6c.png) 23px center / 30px no-repeat rgb(30, 32, 36);
    border-radius: 12px 0px 0px 12px;
    padding: 0px 5px 0px 65px;
    margin: 0px auto 0px -25px;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
 .title.pc-spec::after {
    content: "";
    position: absolute;
    top: 0px;
    right: -44px;
    height: 100%;
    width: 50px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAADUCAMAAAB5wzuWAAAAk1BMVEUAAAAeICQgKi0eICQeICQeISUeISUeISUeISUfICUpLi5OTk4eICQfICQfIiUgIiYgIiYeICUfICQeICUeICQfICUhIicfICUeISQfISQfISQjIyktLS0eICQeICQeICQfISQfISUfISUfISUeIiYhIychJCciIismJiaAgIAfICQeICQfICUfICUfISUhISYeICRbUIDiAAAAMHRSTlMA9w/v/fu6opJmBwPbxks+NPPp5uFfJtfSeFkVC87AmYaAc1JCKyMdGgK2sKyeai/GNLYaAAACYElEQVR42uzOS07CUABA0bavpdBaoFBAfsof/OHd/+qMYWZiogPjHfSs4ET8WBaaKp8Piujv8Fvx8ySJbv4/A9SbW0eRgbD97EgyEHpRpMlAvhJluJ+KMoS+KEM6EWVIr6IMzE0ZNqYMj0+iDHkpyvBSiDJ0VqIMVSLKcL8UZbg7izI0U1GG0bsoQxiKMtQHUYZ4L8qQLUQZ0qsoA3NTho0pQ9eUIS9FGV4KUYbOSpShSkQZ1ktRhtlZlKE5iTKMj6IMYSjKUB9EGeK+KEO2EGVIe6IM7EwZtqYMXVOGvBRleC1EGTorUYYqEWVYL0UZZhdRhuYkyjA+ijKEoShDPRBliPuiDNlClCHtiTKwM2XYmjJ0TRneSlGG10KU4bkQZXhIRBnWS1GG2UWU4e4kyjA+ijKMhqIMYSDKEPdFGbK9KEO6EGVI96IM8UCUYXQRZahKUYadKVOfRRlyUyadijK8mTJxIsowMWU6pkxciDIcTJm5KZObMpUp05gywZTJTBnaTJtpM23mizbznTbz0c4d2zAIBEAQNEigf/ECCwQmgpj+G3QD3tS6YLeCaeCOEkOJocRQYigxlBhKDCWGEkOJocRQYigxlBhKDCWGEkOJocRQYigxlBhKDCWGEkOJocRQYigxlBhKDCWGEkOJocRQYigxlBhKzL/qkjBrEqYlYcYkTEnC1CTMEYTZkhamdxJmCcK0pL32HoQ5nyDMHHQ4cAX9QgzvIEwN+hIpQS8r45SD+fQ5Zzhjn3MTVKaYA6Wh5vxcXTkPYOccc9TW9ifkwm67l4Dbw25tY6nH61dfgXj42O/H5kkAAAAASUVORK5CYII=) right top / auto 69px no-repeat;
}
.funZYP {
    display: flex;
    padding-top: 80px;
    gap: 40px;
    background: url(https://static.nanogames.io/assets/rewards-arrow.614d6e26.png) center top / auto 80px no-repeat;
}
.funZYP .rewards-item {
    flex: 1 1 0%;
    background: rgb(30, 32, 36);
    border-radius: 20px;
    color: rgb(245, 246, 247);
    text-align: center;
}
.funZYP .rewards .common {
    background-image: url(https://static.nanogames.io/assets/rewards.dadef713.png);
}
.funZYP .common {
    border-radius: 20px;
    background-color: rgba(23, 24, 27, 0.7);
    padding: 195px 20px 23px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 200px;
    height: 528px;
    position: relative;
}
.funZYP .title {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: inherit;
}
.funZYP .hover {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-size: 14px;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 3px;
}

.funZYP .amount-wrap {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    background-color: rgb(30, 32, 36);
    color: rgb(245, 246, 247);
    font-size: 16px;
    height: 92px;
    margin-top: 8px;
    padding-top: 10px;
}
.funZYP .amount-wrap .amount {
    font-size: 24px;
    font-weight: 600;
    color: rgb(246, 199, 34);
}
.funZYP .amount-wrap .unit {
    margin-left: 0.4em;
}
.funZYP .tips {
    max-width: 500px;
    font-size: 14px;
    margin: 20px auto 0px;
    height: 50px;
}
.funZYP .tips_flex {
    display: flex;
    place-content: center;
    -webkit-box-pack: center;
}
.funZYP .question-box {
    position: relative;
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.funZYP .withdraw {
    display: block;
    width: 184px;
    height: 44px;
    line-height: 44px;
    border-radius: 22px;
    background-color: rgb(49, 52, 60);
    color: rgb(93, 160, 0);
    font-size: 16px;
    margin: 20px auto 0px;
}
.funZYP .list-group {
    height: 346px;
    background-size: auto 240px;
    background-repeat: no-repeat;
    background-position: center 30%;
    position: relative;
}
.funZYP .list-group::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 20px;
    right: 20px;
    border-top: 1px solid transparent;
}
.funZYP .list-header {
    height: 60px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 14px;
}
.funZYP .list-header_friends {
    padding-left: 35px;
    background: url(https://static.nanogames.io/assets/friends.7f17f97a.svg) left center / 25px no-repeat;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.funZYP .list-header .value {
    font-size: 18px;
    color: rgb(255, 207, 57);
    padding-left: 5px;
}
.funZYP .list-content {
    height: 220px;
    padding: 0px 20px;
    font-size: 14px;
    text-align: left;
}
.funZYP .list-content .thead {
    color: rgba(153, 164, 176, 0.6);
    padding: 0px 30px;
    margin-bottom: 5px;
    white-space: nowrap;
}
.funZYP .fc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.funZYP .list-content .th, .funZYP .list-content .td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.funZYP .list-content .tr {
    background: rgb(23, 24, 27);
    border-radius: 20px;
    height: 56px;
    padding: 0px 30px;
    margin-bottom: 4px;
}
.funZYP .fc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.funZYP .list-content .th:nth-child(1), .funZYP .list-content .td:nth-child(1) {
    flex: 0 0 40%;
}
.funZYP .list-content .th, .funZYP .list-content .td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.funZYP .fc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.funZYP .list-content .user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 14px;
}
.funZYP .list-content .nickanme {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.funZYP .list-content .th, .funZYP .list-content .td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.funZYP .fc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.funZYP .list-content .bar {
    width: 80px;
    height: 4px;
    border-radius: 1.5px;
    background-color: rgb(49, 52, 60);
    margin-right: 6px;
}
.funZYP .list-content .bar-cover {
    height: 100%;
    border-radius: 2.3px;
    background-image: linear-gradient(to left, rgb(93, 160, 0), rgba(93, 160, 0, 0.11));
}
.funZYP .list-content .bar {
    width: 80px;
    height: 4px;
    border-radius: 1.5px;
    background-color: rgb(49, 52, 60);
    margin-right: 6px;
}
.funZYP .list-content .th:nth-child(3), .funZYP .list-content .td:nth-child(3) {
    flex: 1 1 0%;
}
.funZYP .list-content .icon {
    margin-right: 5px;
    width: 18px;
    height: 18px;
}
.funZYP .list-content .tr:nth-child(3) {
    background: none;
}
.funZYP .list-content .tr {
    background: rgb(23, 24, 27);
    border-radius: 20px;
    height: 56px;
    padding: 0px 30px;
    margin-bottom: 4px;
}
.funZYP .fc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.funZYP .list-content .th:nth-child(1), .funZYP .list-content .td:nth-child(1) {
    flex: 0 0 40%;
}
.funZYP .list-content .th, .funZYP .list-content .td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.funZYP .fc {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.funZYP .list-content .yellow {
    color: rgb(246, 199, 34);
}
.funZYP .list-content .th:nth-child(2), .funZYP .list-content .td:nth-child(2) {
    flex: 0 0 43%;
}
.funZYP .list-content .bar {
    width: 80px;
    height: 4px;
    border-radius: 1.5px;
    background-color: rgb(49, 52, 60);
    margin-right: 6px;
}
.funZYP .list-footer {
    width: 184px;
    height: 44px;
    border-radius: 22px;
    background-color: rgb(49, 52, 60);
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(93, 160, 0);
    font-size: 16px;
}
.funZYP .commission .common {
    background-image: url(https://static.nanogames.io/assets/commission.62eb3f82.png);
}
.funZYP .common {
    border-radius: 20px;
    background-color: rgba(23, 24, 27, 0.7);
    padding: 195px 20px 23px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 200px;
    height: 528px;
    position: relative;
}
.funZYP .total-commission {
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    height: 62px;
    border-radius: 13px;
    background-color: rgb(30, 32, 36);
    padding: 0px 50px;
    margin-top: 8px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.funZYP .commission-desc {
    font-size: 14px;
    text-align: left;
}
.funZYP .commission-amount {
    color: rgb(246, 199, 34);
    font-weight: 600;
    font-size: 20px;
    padding-left: 40px;
}
.funZYP .commission-amount .unit {
    margin-left: 5px;
}

.funZYP .list-group.nothing {
    background-image: url(https://static.nanogames.io/assets/empty.acd1f5fe.png);
    position: relative;
}
.funZYP .list-group {
    height: 346px;
    background-size: auto 240px;
    background-repeat: no-repeat;
    background-position: center 30%;
    position: relative;
}
.funZYP .list-group::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 20px;
    right: 20px;
    border-top: 1px solid transparent;
}
.funZYP .list-group .nothing-tip {
    font-size: 12px;
    color: rgba(153, 164, 176, 0.6);
    text-align: center;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 70%;
    line-height: 1.08;
}

.kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
}
.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head .dialog-title {
    font-size: 1rem;
    margin: 0px;
    font-weight: bold;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(245, 246, 247);
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
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.fymRoF .commission-dialog {
    border-radius: 8px;
    padding-top: 85%;
    background: url(https://static.nanogames.io/assets/graph.pit.9f962d2f.png) center top / 100% no-repeat rgb(23, 24, 27);
}
</style>
