<script>
import "./styles/index.css"
import Icon from 'svelte-icons-pack/Icon.svelte';
import CgInfo from "svelte-icons-pack/cg/CgInfo";
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import IoClose from "svelte-icons-pack/io/IoClose";
import BsFiletypeGif from "svelte-icons-pack/bs/BsFiletypeGif";
import FaSolidAt from "svelte-icons-pack/fa/FaSolidAt";
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()


const handlecloseChat = (()=>{
    dispatch("closeChat")
})


</script>

<div class="sc-cVAmsi bJUiGv" style="transform: none;">
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
                <div class="sc-AjmGg kgsidd" >
                    <div class="flat-item" style="transform: translateY(146389px);">
                        <div class="sc-tAExr VfNib notranslate ">
                            <div class="head">
                            <a class="head-link" href="/user/profile/78805">
                                <img class="avatar " alt="" src="https://img2.nanogames.io/avatar/78805/s">
                                <div class="sc-jQrDum jouJMO user-level type-1">
                                    <div class="level-wrap">
                                        <span>V</span><span>7</span>
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
                                        <span>Ricardo Moragull</span>
                                    </a>
                                    <div class="time">16:29</div>
                                </div>
                            </div>
                            <div class="msg-wrap">
                                <div class="sc-jKTccl bkGvjR">Mod</div>
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
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_Command"></use>
                                </svg>
                            </div><a class="chat-icon" href="/user/coindrop_send">
                                <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                    <use xlink:href="#icon_CoinDrop"></use>
                                </svg>
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
