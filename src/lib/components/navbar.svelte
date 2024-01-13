<script>
import { profileStore } from "$lib/store/profile";
import { is_loading, affiliate_info ,affiliate_list, affilliate_info } from "$lib/pages/affiliate/main/store/index";
import { handleAuthToken} from "$lib/store/routes"
import axios from "axios"
import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()


const fetchFriendsInfo = (async()=>{
    is_loading.set(true)
    await axios.get(`${URL}/api/affiliate/friends-info`,{
        headers:{
            Authorization: `Bearer ${$handleAuthToken}`
        }
    })
    .then((res)=>{
        affiliate_list.set(res.data.friends_list)
        affiliate_info.set(res.data)
        is_loading.set(false)
    })
    .catch((err)=>{
        console.log(err)
    })
})


const handleFetchAffilateProfile = (async()=>{
    await axios.get(`${URL}/api/affiliate`, {
        headers:{
            Authorization: `bearer ${$handleAuthToken}`
        }
    })
    .then((response)=>{
        affilliate_info.set(response.data[0])
    })
    .catch((err)=>{
        console.log(err.response.data.error)
    }
    )
})


handleFetchAffilateProfile()
fetchFriendsInfo()



</script>


<div class="sc-bkkeKt dDfoVi">
    <div class="left">
        <a class="logo-name" href="/">
            <img alt="logo" class="logo" src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848521/dpp-logowhite_lbifm7.png">
        </a>
        <a class="casino" href="/my-affiliate/dashboard">Affiliate</a>
    </div>
    <div class="right">
        <div class="user">
            <img alt="" src={$profileStore?.profile_image}>
            <div class="name">{$profileStore.username}</div>
        </div>
    </div>
</div>

<style>
.dDfoVi {
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: var(--card-bg-4);
    height: 70px;
    z-index: 2279;
    color: rgb(255, 255, 255);
}
.dDfoVi .left {
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.dDfoVi .right {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.dDfoVi .logo-name {
    margin-left: 0.3125rem;
    color: rgb(255, 255, 255);
    outline: none;
}
.dDfoVi .logo {
    width: auto;
    height: 26px;
    margin-right: 4px;
    margin-left: 34px;
}
img {
    vertical-align: middle;
}
.dDfoVi .casino {
    width: 6rem;
    height: 1.8rem;
    font-size: 0.8125rem;
    color: rgb(255, 255, 255);
    background-color: rgba(45, 48, 53, 0.6);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 0.25rem;
    margin-left: 1.5rem;
}
.dDfoVi .right {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.dDfoVi .user {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 1rem;
}
.dDfoVi .user img {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    border-radius: 50%;
}
img {
    vertical-align: middle;
}
</style>
