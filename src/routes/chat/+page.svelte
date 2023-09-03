<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import AiFillSetting from "svelte-icons-pack/ai/AiFillSetting";
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import BsChatRightDotsFill from "svelte-icons-pack/bs/BsChatRightDotsFill";
import IoPersonAdd from "svelte-icons-pack/io/IoPersonAdd";
import "../../styles/private_chat/index.css"

let isMessages = true
let isAllChat = true

const handlePrivateChat = ((e) => {
    if (e === 2) {
        isAllChat = false
    }
    else if (e === 3) {
        isMessages = false
    }
    else if (e === 4) {
        isMessages = true
    } else {
        isAllChat = true
    }
})

</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
    <div class="dialog sc-dOpZeA hriBCN" style="opacity: 1; width: 780px; height: 581px; margin-top: -290.5px; margin-left: -390px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-close">
            <div class="dialog-title">Chat room</div>
            <a class="sc-jLuXOi gPCRer" tag="button" href="/">
                <span class="sc-gsDKAQ hxODWG icon">
                    <Icon src={AiFillSetting}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                </span>
                Options
            </a>
        </div>

        <button on:click={()=> history.back()} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>

        <div class="dialog-body no-style sc-dOpZeA hriBCN">
            <div class="dialog-body no-style sc-dOpZeA hriBCN" style="z-index: 2; transform: none;">
                <div class="sc-jcEtbA fgsNug chat-category">
                    <div class="search-box">
                        <div class="sc-jNHgKk hSdDdt pri-search" aria-expanded="false">
                            <label>
                                <div class="zoom">
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                        <use xlink:href="#icon_Search"></use>
                                    </svg>
                                </div>
                                <input placeholder="Search Name" value="">
                            </label>
                        </div>
                    </div>
                    <div id="private-chat-list" class="pri-tabbox">
                        <div class="sc-cTAqQK ka-DJsO carousel ">
                            <div class="carousel-list" style="transform: translate3d(-50%, 0px, 0px); width: 639.969px;">
                                <div class="carousel-item">
                                    <div class="sc-dkPtRN jScFby scroll-view sc-gmCRdq dlfXcY">
                                        <div class="sc-fZDhWb hsTOaJ sc-gpcHMt iKtWCf">
                                            <div class="avatar-wrap">
                                                <div class="circle">
                                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                                        <use xlink:href="#icon_AddFirend"></use>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="middle-wrap">
                                                <div class="title-wrap">
                                                    <div style="margin-right: auto;">Friend Request</div>
                                                </div>
                                                <div class="content-wrap">
                                                    <div class="msg">Friend Request Received</div>
                                                </div>
                                            </div>
                                            <div class="other-wrap"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="sc-iODwXF jCbORa">
                                        <div class="sc-llYSUQ hMDgxX tabs sc-cnHmbd fHJXNP">
                                            <div class="tabs-navs">
                                                <button on:click={()=> handlePrivateChat(1)} class={`tabs-nav ${isAllChat ? "is-active" : ""} `}>All chats</button>
                                                <button  on:click={()=> handlePrivateChat(2)} class={`tabs-nav ${!isAllChat ? "is-active" : ""} `}>Stranger</button>
                                            </div>
                                        </div>
                                        <div class="sc-cTAqQK ka-DJsO carousel tab-list">
                                            <div class="carousel-list" style="transform: none; width: 639.969px;">
                                                <div class="carousel-item">
                                                    <div class="sc-eCImPb cuPxwd empty ">
                                                        <img alt="" src="https://static.nanogames.io/assets/empty.acd1f5fe.png">
                                                        <div class="msg">Oops! There is no data yet!</div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="sc-eCImPb cuPxwd empty ">
                                                        <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                                                        <div class="msg">Oops! There is no data yet!</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs">
                            <button  on:click={()=> handlePrivateChat(3)} class={`tab-item ${!isMessages ? "is-active" : ""} `}>
                                <span class="sc-gsDKAQ hxODWG icon">
                                    <Icon src={IoPersonAdd}  size="18" color={` ${!isMessages ? " rgb(67, 179, 9)" : "rgba(152, 167, 181, 0.8)"}`}  className="custom-icon" title="arror" />
                                </span>
                                <div class="label">Friends</div>
                            </button>
                            <button  on:click={()=> handlePrivateChat(4)} class={`tab-item ${isMessages ? "is-active" : ""} `}>
                                <span class="sc-gsDKAQ hxODWG icon">
                                    <Icon src={BsChatRightDotsFill}  size="14"  color={` ${isMessages ? " rgb(67, 179, 9)" : "rgba(152, 167, 181, 0.8)"}`} className="custom-icon" title="arror" />
                                </span>
                                <div class="label">Messages</div>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="sc-igXgud pIGWn chat-room ">
                    <div class="sc-JEhMO cvjwIK header"></div>
                    <div class="container">
                        <div class="sc-itWPBs bdUuOW">
                            <div class="tips">Select a chat to start messaging</div>
                        </div>
                    </div>
                    <div class="footer">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
