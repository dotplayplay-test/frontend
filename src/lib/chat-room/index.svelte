<script>
import IoLanguageOutline from "svelte-icons-pack/io/IoLanguageOutline";
import "./styles/index.css"
import SiRainmeter from "svelte-icons-pack/si/SiRainmeter";
import HiSolidEmojiHappy from "svelte-icons-pack/hi/HiSolidEmojiHappy";
import Icon from 'svelte-icons-pack/Icon.svelte';
import CgInfo from "svelte-icons-pack/cg/CgInfo";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import IoClose from "svelte-icons-pack/io/IoClose";
import BsFiletypeGif from "svelte-icons-pack/bs/BsFiletypeGif";
import FaSolidAt from "svelte-icons-pack/fa/FaSolidAt";
import {
    createEventDispatcher
} from 'svelte'
const dispatch = createEventDispatcher()

const handlecloseChat = (() => {
    dispatch("closeChat")
})


let chatMessage = [
    { id:1, type:"normal", text:"Hello ma'am", time: "2:23pm",name:"valiant",level: 3 },
    { id:2, type:"normal", text:"Hel ma'am", time: "2:23pm",name:"valiant",level: 3 },
]

const handleSendMessage = (()=>{
    
})

</script>

<div id="main" class="sc-cVAmsi bJUiGv" style="transform: none;">
    <div class="sc-ewSTlh hHMWvP" id="public-chat">
        <div class="sc-hJZKUC dWgZek">
            <div class="select-wrap">
                <div class="sc-jJoQJp gOHquD select  ">
                    <div class="select-trigger">
                        <div class="select-label">English</div>
                        <div class="arrow ">
                            <Icon src={RiSystemArrowRightSLine} style='transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s; '  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-features">
                <div class="inform">
                    <Icon src={CgInfo}  size="25"  color="rgb(85, 91, 101)"  title="arror" />
                </div>
                <div class="sc-iWBNLc bXthlR rich-btn">
                    <img alt="rich" src="https://static.nanogames.io/assets/rich.8786d13b.png">
                </div>
                <button on:click={handlecloseChat} class="sc-ieecCq fLASqZ close-icon ">
                    <Icon src={IoClose}  size="17"  color="rgba(153, 164, 176, 0.8)"  title="arror" />
                </button>
            </div>

        </div>
        <div class="sc-bSqaIl eA-dYOl">
            <div class="sc-dkPtRN jScFby scroll-view sc-cNKqjZ dPmCMO sc-jvvksu fuYrTE chat-list">
                <div class="sc-AjmGg kgsidd">
                    {#each chatMessage as chat (chat.id) }
                    <div class="flat-item">
                        <div class="sc-tAExr VfNib notranslate">
                            <div class="head">
                                <a class="head-link" href="/user/profile/78805">
                                    <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/78805/s">
                                    <div class="sc-jQrDum jouJMO user-level type-1">
                                        <div class="level-wrap">
                                            <span>V</span><span>{chat.level}</span>
                                        </div>
                                    </div>
                                    <div class="sc-khQegj fPtvsS level levelnums_2">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAA3lBMVEUAAACJjqKGjJ92fIuBhZqUnq15fpyBipqHjKB4fZJ5fpR2fox9gZeDiJ12fZOVmqqMk6SNm6mYnKx5foGnq7l6fY5/hI13fYyvsb+Yn6yIjqCFi5719vzZ3OX////n6fF3fYvb3ufk5+/4+P7S1d7LztfIy9X6+//z9PrX2uPAxNDp6/PW2OGMkaSxtcSGi5+DiZ1+hJV4fo5zeojw8fjg4+vd4OnQ09zGydLl5u3i5OygpbV2eop2fIi7vsrr7vWqrrynrLuboLCWm66Bhpt/gZZzeYfCxc6zt8WIjZ93mwEKAAAAHHRSTlMA8fEuw0MiEPbs5cq9oZeUjXd1dWlkPTksI/nzVB2wFAAAAU1JREFUKM9V0WdzwjAMBmB3lz3KbIkVO3Fskw0Z7A1t//8fapKSHLznO+mes75IKM+gWh2g+7w13f3ebb7dWqdsM4yZXe4U9PLsbQTmHIuN9/yS0bB22s0xHiXBeL471YYItd8PVkaalrF1+Gwj7wdjLbUgyArGjoe+SDapCUoFH2k8EMY7etRxOiqAUhBcAyUcP/xjYM4pgAmRZSn0ipq5SMgM429GSIECYDu3jBmTpPg54oIqbMYMPVIK5BzYzGDMsEiBPFjomc0KJJhKKWNdSj2WCYLxgNzNNlQUhUQkSdJQ03FR43cZmwvlmgXES7uRLs52JEQpRSAd+7q81vk4DoEQCMfHcyu/xcp3lwaAsXT9VX6Rp9Vl4tuOY/uTy+opR1WdTn3P86dTVb3BhLN3g5P1elLpditpzbGvluq9tOnVS2r/iq8fr+iu/QOlRjrmG6FiBAAAAABJRU5ErkJggg==">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAAqFBMVEUAAAD39/3e4On+/v/p6fLb3ebJzNnz9Prm5+/s7PV4foyHjaB3fYvj5e11e4qAh5vS1d+JkKLT1d/CxtKMkqV2e4nX2eOHjqF7gZCCiJqhpbNzeomeo7Sprr3KztiHj6F/hpfBxdGzuMZ0eoh+hJSFi5ydo62gq7KLj52ytsS8v8uDip/d3ud6f42Xnq+hp7d3fouGipyfo7FvdoGGiJCGjJS1tb91fovpdGSwAAAAOHRSTlMAWVlZWVlZWVlZXFQQWWNgWVRfX2ddWVlZSClpaGdeXlpZWVlWNhgLBWVjaF9dWllJPTMtIxcQDZ72iIwAAAEnSURBVCjPVdFnk4MgEAZgTlgEEyK5s8XYS0zv5f//s9sz6pn3A8w8A+ywS/o8F4sn+cy6TuM4rddjCysnoTRxqnCg1WK3NenXFzW3u8WqpeZix4KioVIR25cGb6YRvOnNEKUhsTcdmWbHG5tM9p0JgYrvmsmETL5pa0wIhtUYqJ/5G02JxCQzPA9Yj1IhSaVzbhgDmmjC45zDCLEMcIxWI6SMt/GMAfGczj9xTwUAaA3gaXwSZDIn9lYqMPqAwST+6OpEmgnoTDAdOde/xjkFtKdBSSicrnmhfcwVwxIqP9phPws380+cMX7yM7efyNR1g8wvCj8LXHfao2WVZeD7QVla1ggDa4bB7R8Ps+XsfL+fcTsMuKzqB8E86mrZ4+vWkC7N7YXrLzZ3GQcYnSzFAAAAAElFTkSuQmCC">
                                    </div>
                                </a>
                            </div>
                            <div class="content">
                                <div class="title">
                                    <div class="name">
                                        <a href="/user/profile/78805">
                                            <span>{chat.name}</span>
                                        </a>
                                        <div class="time">{chat.time}</div>
                                    </div>
                                </div>
                                <div class="msg-wrap">
                                    <div class="sc-jKTccl bkGvjR">{chat.text}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/each}
                  
                </div>
            </div>


            <div class="chat-infos "></div>
                <div class="sc-hkgtus ddROGz">
                    <div class="send-input">
                        <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset input-area">
                            <div class="input-control">
                                <textarea placeholder="Your Message" style="height: 44px;"></textarea>
                                <button class="sc-JkixQ cVsgdS emoji-r-wrap">
                                    <Icon src={RiSystemArrowRightSLine} style='transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s; '  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="send-controls">
                        <div class="left-actions">
                            <a class="chat-icon" href="/user/rain">
                                <Icon src={FaSolidAt}   size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                            </a>
                            <div class="command-btn">
                                <Icon src={IoLanguageOutline}   size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                            </div>
                            <a class="chat-icon" href="/user/coindrop_send">
                                <Icon src={SiRainmeter}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                            </a>
                        </div>
                        <div class="sc-dkQkyq gbjudO gift-r-wrap hide-gift">
                            <button class="gift-btn">
                                <Icon src={BsFiletypeGif}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                            </button>
                        </div>
                    </div>
                </div>
        </div>





    </div>
</div>

<!-- =========================== mobile ================================= -->

<div class="mobile">
    <div class="sc-bkkeKt kBjSXI" style="background-color: transparent;">
        <div class="dialog sc-dkqQuH ikQOCU">
            <div class="dialog-head has-close">
                <div class="sc-hJZKUC dWgZek">
                    <div class="select-wrap">
                        <div class="sc-jJoQJp gOHquD select">
                            <div class="select-trigger">
                                <div class="select-label">English</div>
                                <div class="arrow ">
                                    <Icon src={RiSystemArrowRightSLine} style='transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s; '  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-features">
                        <div class="inform">
                            <Icon src={CgInfo}  size="25"  color="rgb(85, 91, 101)"  title="arror" />
                        </div>
                        <div class="sc-iWBNLc bXthlR rich-btn">
                            <img alt="rich" src="https://static.nanogames.io/assets/rich.8786d13b.png">
                        </div>
                        <button on:click={handlecloseChat} class="sc-ieecCq fLASqZ close-icon">
                            <Icon src={IoClose}  size="17"  color="rgba(153, 164, 176, 0.8)"  title="arror" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="dialog-body no-style sc-dkqQuH ikQOCU" style="z-index: 2; transform: none;">
                <div id="public-chat" class="sc-ewSTlh hHMWvP">
                    <div class="sc-bSqaIl eA-dYOl">
                        <div class="sc-dkPtRN jScFby scroll-view sc-cNKqjZ dPmCMO sc-jvvksu fuYrTE chat-list">
                            <div class="sc-AjmGg kgsidd" style="height: 100%;">
                                <div class="flat-item">
                                    <div class="sc-tAExr VfNib notranslate ">
                                        <div class="head">
                                            <a class="head-link" href="/user/profile/243417">
                                                <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/243417/s">
                                                <div class="sc-jQrDum jouJMO user-level type-3">
                                                    <div class="level-wrap">
                                                        <span>V</span>
                                                        <span>23</span>
                                                    </div>
                                                </div>
                                                <div class="sc-khQegj fPtvsS level levelnums_5">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAABMlBMVEUAAADllzDllS3LcwjMdwbuoTflly3PdhDhjh3LdArijyTilC7jjSbjlCvOdQ/rnjTomzDuoTfsoDXtsGHQfhDMdQrvs0btnzXbei3OdQzUfxPnkB/6qT3/uVz/vmL8qz7NdQrLdAfzoznIbwT+rD/2rU3jkyn/u13/s1rlmS//wGT/vGH7pT77oz7qnDT/5Wv/uFvuozz7qDr10Df01TbllS7/4Gn/32f/xmD2pjv1pTrsoDn0zC7djSX/5HL/6G7/tVv3sFD5rzz4tzv4vDrvoTj1zjT/427/t2H/wV7/sFj+t1f6tFX61VH8sEr0qUjwqEX20z73wzn5pTfz1S/Yhh7TfhTPeQ7/7W3/zmn/wWj/2Wf/12b83F38vlP/skr41Ej7qEX5sTz5rDz3rzX1xzSVkSzCAAAAHHRSTlMA8fEvZ0P57OXKxMK6oZeQjXdyaT02LCMhGhMOpg/WFQAAAXFJREFUKM9V0AVzwjAUB/BsY+4+IKQSaGkLLS0Ud3eXue/7f4U9oHTsf7nIL7l3uYdWuTk6ukH/4z6TUinpzL1ul3tmj5CeuXdp0/aB0PfIoih7+sLB9oJujwW9LSseiCK3deH4FqGLHbVACIjfDxMhPnXnAgm6QsS5xeNzFR+JLqDNggz7UFPUco1mSFRab8kNtOkj8CzfiGlaNF7Pdw2DX2AoFH/StFg0m+uURgZjof/5PhqtZV8G458AttCTF2O1bOw9nQ4XbYSaD7lONV2NlIPYRqX+OkhXw+FIyUZZaX18jyNgf1ggXWP0NSx/FstDKIm98E9T9xoY40AwGAgCYcZbMdGpqSa8DF4GKKFKp9C4Q4nHwAvCvHS4bN55JpWEM9wkU5lztIyLTqRKgmESFWlCXRZucXSWUXlezcwot7VClqV0KghTSll2DVmOcjDYdeQ4dt/h2IfVxmtu9+QKQa5OdrlrC52OO2TlzuGE+Rf2K0QhKXSN7QAAAABJRU5ErkJggg==">                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAABMlBMVEUAAADllzDllS3LcwjMdwbuoTflly3PdhDhjh3LdArijyTilC7jjSbjlCvOdQ/rnjTomzDuoTfsoDXtsGHQfhDMdQrvs0btnzXbei3OdQzUfxPnkB/6qT3/uVz/vmL8qz7NdQrLdAfzoznIbwT+rD/2rU3jkyn/u13/s1rlmS//wGT/vGH7pT77oz7qnDT/5Wv/uFvuozz7qDr10Df01TbllS7/4Gn/32f/xmD2pjv1pTrsoDn0zC7djSX/5HL/6G7/tVv3sFD5rzz4tzv4vDrvoTj1zjT/427/t2H/wV7/sFj+t1f6tFX61VH8sEr0qUjwqEX20z73wzn5pTfz1S/Yhh7TfhTPeQ7/7W3/zmn/wWj/2Wf/12b83F38vlP/skr41Ej7qEX5sTz5rDz3rzX1xzSVkSzCAAAAHHRSTlMA8fEvZ0P57OXKxMK6oZeQjXdyaT02LCMhGhMOpg/WFQAAAXFJREFUKM9V0AVzwjAUB/BsY+4+IKQSaGkLLS0Ud3eXue/7f4U9oHTsf7nIL7l3uYdWuTk6ukH/4z6TUinpzL1ul3tmj5CeuXdp0/aB0PfIoih7+sLB9oJujwW9LSseiCK3deH4FqGLHbVACIjfDxMhPnXnAgm6QsS5xeNzFR+JLqDNggz7UFPUco1mSFRab8kNtOkj8CzfiGlaNF7Pdw2DX2AoFH/StFg0m+uURgZjof/5PhqtZV8G458AttCTF2O1bOw9nQ4XbYSaD7lONV2NlIPYRqX+OkhXw+FIyUZZaX18jyNgf1ggXWP0NSx/FstDKIm98E9T9xoY40AwGAgCYcZbMdGpqSa8DF4GKKFKp9C4Q4nHwAvCvHS4bN55JpWEM9wkU5lztIyLTqRKgmESFWlCXRZucXSWUXlezcwot7VClqV0KghTSll2DVmOcjDYdeQ4dt/h2IfVxmtu9+QKQa5OdrlrC52OO2TlzuGE+Rf2K0QhKXSN7QAAAABJRU5ErkJggg==">
                                                    <img class="img-star" alt="level-star" src="https://static.nanogames.io/assets/gh.adb3fa38.png">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAA1VBMVEUAAAD/ul/9qT//vmX/rEHmmDH/tVz9pD/8qD3PdQv4r1D3pDv/5m7/4mn/wWj1pj3NdAn30Tv11jb1zDPMcAT7sDzSfBXikSjZgBvvojz/62//xmLllCfNcAXrnTXnmjPmmjP2rU3kkizMcgfLcAb5uzvvozvonTXKbwXllSvqojntsFTUeA3Wfhbnp0/xp0L+22T/v13+sUz4xTjtoDrjlSvOdg7ekSjZiCD/uGT61036tjzPdgzIdAjjkSDmlC7NfBTunTvyoj/xq0LouG7/0Gv701PBjG8QAAAAR3RSTlMAWVlZWVRZWVlcX19ZWVlZEFlZWWRZWVgGZVlZaWloZV5dXV1bWVlZWUkzJyYVC2NZWVlZaWNiYFxZWVlYSUU9OCsZFxBZWeq79pMAAAFBSURBVCjPVdFpc4IwEAZgTGiMrYCggNwoNyLeV+ut7f//SV0sMPSdfMg8k92dzDJVnufzk/mfYequ1246bNpENUcYj0x1UtM9MWctvgVnZib3F+WXjUZ43IJgnmibSw6Vrg2VIIQUjEe2O2HGGoZKMMMAhR5YGzNv73+26OoLUEyWH2+AGIgYXLfLGQeypLRCYw7E6fpPQClbIpnrHLyci9KqjWpsFcWf/b4oA9Y9v3WgvhS0UY34sBDhmSh91chjgmRJAmsgXtK2vApkOVjJJY5nLKUItV9BYCz8KHVsyqI6LLWdlGEeiSMAlyQ4yYMpctuFAmKBkBDubtUuvH0UCiwrhNHeqzbS83xFjQQhUhXf61XY6cSxoqpKHHc6DTz6A4h/bOLA2p6y7LS1BjVOLeU6fV2uijWtpmc5UybPium/9dQhpeT5/ikAAAAASUVORK5CYII=">
                                                    <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAMAAABLAV/qAAAA1VBMVEUAAAD/ul/9qT//vmX/rEHmmDH/tVz9pD/8qD3PdQv4r1D3pDv/5m7/4mn/wWj1pj3NdAn30Tv11jb1zDPMcAT7sDzSfBXikSjZgBvvojz/62//xmLllCfNcAXrnTXnmjPmmjP2rU3kkizMcgfLcAb5uzvvozvonTXKbwXllSvqojntsFTUeA3Wfhbnp0/xp0L+22T/v13+sUz4xTjtoDrjlSvOdg7ekSjZiCD/uGT61036tjzPdgzIdAjjkSDmlC7NfBTunTvyoj/xq0LouG7/0Gv701PBjG8QAAAAR3RSTlMAWVlZWVRZWVlcX19ZWVlZEFlZWWRZWVgGZVlZaWloZV5dXV1bWVlZWUkzJyYVC2NZWVlZaWNiYFxZWVlYSUU9OCsZFxBZWeq79pMAAAFBSURBVCjPVdFpc4IwEAZgTGiMrYCggNwoNyLeV+ut7f//SV0sMPSdfMg8k92dzDJVnufzk/mfYequ1246bNpENUcYj0x1UtM9MWctvgVnZib3F+WXjUZ43IJgnmibSw6Vrg2VIIQUjEe2O2HGGoZKMMMAhR5YGzNv73+26OoLUEyWH2+AGIgYXLfLGQeypLRCYw7E6fpPQClbIpnrHLyci9KqjWpsFcWf/b4oA9Y9v3WgvhS0UY34sBDhmSh91chjgmRJAmsgXtK2vApkOVjJJY5nLKUItV9BYCz8KHVsyqI6LLWdlGEeiSMAlyQ4yYMpctuFAmKBkBDubtUuvH0UCiwrhNHeqzbS83xFjQQhUhXf61XY6cSxoqpKHHc6DTz6A4h/bOLA2p6y7LS1BjVOLeU6fV2uijWtpmc5UybPium/9dQhpeT5/ikAAAAASUVORK5CYII=">
                                                </div>
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="title">
                                                <div class="name">
                                                    <a href="/user/profile/243417">
                                                        <span>⚡Aria⁠atash</span>
                                                    </a>
                                                    <div class="time">19:21</div>
                                                </div>
                                            </div>
                                            <div class="msg-wrap">
                                                <div class="sc-jKTccl bkGvjR">
                                                    <a class="cl-primary" href="/user/profile/399425">@💤✍️Zuuonia 🇵🇱</a>
                                                    😍😍😍🙋‍♀️🙋‍♀️🙋‍♀️😘
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-infos "></div>
                    <div class="sc-hkgtus ddROGz">
                        <div class="send-input">
                            <div class="sc-ezbkAF kDuLvp input sc-ikJyIC iowset input-area">
                                <div class="input-control">
                                    <textarea placeholder="Your Message" style="height: 38px;"></textarea>
                                    <button class="sc-JkixQ cVsgdS emoji-r-wrap">
                                        <Icon src={HiSolidEmojiHappy}  size="25"  color="rgb(85, 91, 101)"  title="arror" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="send-controls">
                            <div class="left-actions">
                                <a class="chat-icon" href="/user/rain">
                                    <Icon src={FaSolidAt}   size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </a>
                                <div class="command-btn">
                                    <Icon src={IoLanguageOutline}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </div>
                                <a class="chat-icon" href="/user/coindrop_send">
                                    <Icon src={SiRainmeter}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </a>
                            </div>
                            <div class="sc-dkQkyq gbjudO gift-r-wrap hide-gift">
                                <button class="gift-btn">
                                    <Icon src={BsFiletypeGif}  size="16"  color="rgba(153, 164, 176, 0.8)" title="arror" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<style>
    /* ======================= mobile =================================== */
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
.ikQOCU .dialog-head {
    width: 100%;
    margin: 0px;
}

.dWgZek {
    height: 4rem;
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    background-color: rgb(30, 32, 36);
}
.ikQOCU .dialog-head > div {
    left: 0px;
    width: 100%;
    padding: 0px;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.dWgZek .select-wrap {
    height: 100%;
    position: relative;
}
.dWgZek .select-wrap .select {
    height: 100%;
}
.gOHquD {
    position: relative;
    height: 2.5rem;
    opacity: 1;
}
.gOHquD .select-trigger {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
    background-color: rgb(23, 24, 27);
}
.dWgZek .select-wrap .select .select-trigger {
    color: rgb(245, 246, 247);
    background: transparent;
    border-radius: 0px;
    padding: 0px;
    width: 7.25rem;
    font-weight: bold;
}
.dWgZek .select-wrap .select .select-trigger .select-label {
    width: 5.75rem;
    line-height: 3.875rem;
    background-image: linear-gradient(to top, rgba(91, 174, 28, 0.15), rgba(91, 174, 28, 0) 50%);
    border-bottom: 2px solid rgb(67, 179, 9);
    text-align: center;
}
.dWgZek .select-wrap .select .select-trigger .arrow {
    width: 1.5rem;
    height: 100%;
}
.gOHquD .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}
.dWgZek::after {
    content: "";
    position: absolute;
    bottom: -0.75rem;
    height: 0.75rem;
    width: 100%;
    background-image: linear-gradient(rgb(17, 20, 21), rgba(36, 38, 43, 0));
    opacity: 0.25;
}
.no-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}
.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.hHMWvP {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.ddROGz {
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    background-color: rgba(49, 52, 58, 0.8);
    padding: 1rem 0.625rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;
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
.kDuLvp .input-control textarea {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
}
textarea {
    padding: 0.625rem;
    resize: none;
    box-sizing: border-box;
}
.ddROGz .send-input .input-area textarea {
    display: block;
    padding: 0.625rem 0px;
    height: 2.75rem;
    width: 100%;
    line-height: 1.5rem;
    color: rgb(202, 209, 217);
}
.kDuLvp {
    margin-top: 1rem;
}
.ddROGz .send-input {
    position: relative;
    min-height: 2.625rem;
    display: flex;
}
.ddROGz .send-controls .left-actions {
    padding-left: 0.375rem;
    margin-bottom: 0.375rem;
    display: flex;
    height: 100%;
}
.ddROGz .send-controls .left-actions .chat-icon {
    line-height: 1;
    margin-right: 1.5rem;
}
.ddROGz .send-controls .left-actions .command-btn {
    cursor: pointer;
    margin-right: 1.5rem;
}
.ddROGz .send-input .input-area .input-control {
    height: auto;
    padding: 0px 1.25rem;
    background-color: rgb(30, 32, 36);
    align-items: flex-end;
    border: 1px solid rgba(49, 52, 58, 0.8);
    border-radius: 1.375rem;
}
.ddROGz .send-input .input-area {
    position: relative;
    margin: 0px;
    flex: 1 1 0%;
    width: 100%;
    padding-right: 0px;
    transition: padding 0.4s ease 0s;
}
.kgsidd {
    position: relative;
}
.kgsidd .flat-item {
    position: relative;
    left: 0px;
    top: 0px;
    width: 100%;
}
.VfNib {
    display: flex;
    flex-direction: row;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
.VfNib .head {
    width: 2.5rem;
    padding-top: 0.875rem;
    flex: 0 0 auto;
}
.VfNib .content .title .name a {
    line-height: 1.125rem;
    color: rgba(153, 164, 176, 0.6);
    font-weight: 600;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
.bkGvjR {
    user-select: text;
    font-size: 0.875rem;
    vertical-align: top;
    color: rgb(202, 209, 217);
    line-height: 1.125rem;
    word-break: break-word;
    overflow: hidden;
    border-radius: 1.25rem;
    padding: 0.625rem;
    background-color: rgba(49, 52, 58, 0.6);
}
.VfNib .content .msg-wrap {
    display: flex;
    position: relative;
}
.VfNib .content .title .name a > span {
    max-width: 12.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    opacity: 0.9;
}
.VfNib .content .title .name .time {
    align-self: flex-end;
    margin-left: 0.5rem;
    color: rgba(153, 164, 176, 0.6);
    font-size: 0.75rem;
}
.VfNib .head .head-link {
    position: relative;
    display: block;
}
.VfNib .head .head-link {
    position: relative;
    display: block;
}
.VfNib .content {
    width: 1%;
    flex: 1 1 0%;
    padding-top: 0.875rem;
    padding-left: 0.375rem;
    padding-bottom: 0.3125rem;
}
.VfNib .content .title {
    display: flex;
    height: 1.125rem;
    margin-bottom: 0.25rem;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.VfNib .content .msg-wrap {
    display: flex;
    position: relative;
}
.VfNib .content .title .name {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
}
.VfNib .content .title .name > a {
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}
.VfNib .head .head-link .level .img-star {
    width: auto;
    height: 0.875rem;
    margin-right: 1px;
}
.fPtvsS .img-star {
    width: auto;
    height: 1.0625rem;
    margin-right: 2px;
    object-fit: cover;
}
.jouJMO {
    font-size: 0.75rem;
    font-weight: bold;
    color: rgb(23, 24, 27);
}
.VfNib .head .head-link .user-level .level-wrap span {
    font-size: 0.75rem;
    line-height: normal;
}
.jouJMO.type-3 {
    background-color: rgb(246, 199, 34);
}
.jouJMO.type-2 {
    background-color: rgb(232, 218, 255);
}
.VfNib .head .head-link .user-level {
    width: 2.375rem;
    height: 1.125rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: 0.5rem;
    position: absolute;
    top: 2rem;
    left: 0.0625rem;
}
.fPtvsS .img-star {
    width: auto;
    height: 1.0625rem;
    margin-right: 2px;
    object-fit: cover;
}
.jouJMO.type-2 {
    background-color: rgb(232, 218, 255);
}
.VfNib .head .head-link .level {
    width: 3.375rem;
    margin-top: 0.625rem;
    transform: scale(0.631313);
    transform-origin: left center;
}
.fPtvsS {
    text-align: left;
    white-space: nowrap;
    font-size: 0px;
}
.VfNib .head .head-link .level .img-star {
    width: auto;
    height: 0.875rem;
    margin-right: 1px;
}
@media screen and (max-width: 621px){
    .dialog {
        width: 100%;
        height: 100%;
        left: 0px;
        top: 0px;
        margin: 0px;
        border-radius: 0px;
    }
    .fPtvsS .img-star {
    margin-right: 1px;
}
    .VfNib {
        padding: 0px 1.25rem;
    }
    .dWgZek {
        left: auto;
        position: absolute;
        top: 0px;
        right: 3rem;
        background-image: none;
        -webkit-box-pack: end;
        justify-content: flex-end;
        padding: 0px 0.625rem;
    }
    .fuYrTE {
        background-size: 22.5rem;
        background-position: center center;
    }
    .VfNib .head .head-link .level {
        margin-top: 0.625rem;
    }
}

</style>