<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import RiSystemArrowRightSLine from "svelte-icons-pack/ri/RiSystemArrowRightSLine";
import axios from "axios"
import {ServerURl} from "$lib/backendUrl"
const URL = ServerURl()
    import {
    page
} from '$app/stores'
    import {onMount} from "svelte"
    import RiDeviceDatabase2Fill from "svelte-icons-pack/ri/RiDeviceDatabase2Fill";
    import BsCoin from "svelte-icons-pack/bs/BsCoin";
    import SiChakraui from "svelte-icons-pack/si/SiChakraui";
    import {userStatistics} from "$lib/store/statistic"
    import { users_profile } from "$lib/store/profile"
    let gamesStats = [
        {id: 1, display_name: "Global", url: "global", action: "active"},
        {id: 2, display_name: "Crash", url: "crash", action: ""},
        {id: 3, display_name: "Classic Dice", url: "dice", action: ""},
    ]
    
    let is_loading;
    let is_loadingel
    const handleDisplayRoute = (async(url)=>{
        is_loadingel = true
    await axios.post(`${URL}/api/users/profile/${$page.params.slug}`)
        .then(res => {
            is_loadingel = false
            users_profile.set(res.data[0])
        })
        .catch((error) => {
            console.log(error)
        })

        is_loading = true
        await axios.post(`${URL}/admin/stat/${url}`,{
            user_id: $page.params.slug
        })
        .then(res =>{
            is_loading = false
            userStatistics.set(res.data)
        })
    })
    
    $: is_loading
    
    let default_displayname = "Global"
    let is_open = false

    const handleStatisticsSellect = ((e)=>{
        for(let i = 0; i < gamesStats.length; i++){
            if(e === gamesStats[i].url){
                gamesStats[i].action = "active"
                handleDisplayRoute(gamesStats[i].url)
                default_displayname = gamesStats[i].display_name
            }else{
                gamesStats[i].action = ""
            }
        }
        is_open = false
    })
    
    onMount(()=>{
        handleDisplayRoute("global")
    })
    
    const handleDropdown = ((e)=>{
        if(e === 1){
            is_open = true
        }else{
            is_open = false
        }
    })
    
    </script>

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
                <div class="dialog-body no-style " style="z-index: 2; transform: none;" >
                    <div class="sc-dkPtRN jScFby scroll-view sc-fydGpi lgnNLC">
                        <div class="fc head">
                            <div class="title">Statistics</div>
                            <button  on:mouseenter={()=> handleDropdown(1)} on:mouseleave={()=> handleDropdown(2)}  style="width: 100%;" class="sc-jJoQJp gOHquD select">
                                <div  class="select-trigger">                                                                                                       
                                    {default_displayname}
                                    <div class="arrow ">
                                        <Icon src={RiSystemArrowRightSLine}  size="23"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
                                    </div>
                                </div>
                                {#if is_open}
                                <div class="sc-hiCibw iVwWcQ select-options-wrap" style="opacity: 1; top: 100%; transform: none;">
                                    <div class="sc-dkPtRN jScFby scroll-view select-options len-20">
                                        {#each gamesStats as stat (stat.id)}
                                         <button on:click={()=> handleStatisticsSellect(stat.url)} style="width: 100%; cursor:pointer" class={`select-option ${stat.action}`}>{stat.display_name}</button>
                                        {/each}
                                    </div>
                                </div>
                            {/if}
                            
                            </button>
                            <div class="user-info flex-center">
                                <img class="avatar " alt="" src={$users_profile.profile_image}>
                                <div class="flex-column">
                                    <div class="user-name">{$users_profile.username}</div>
                                    <div class="sc-khQegj fPtvsS level-box levelnums_0">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                        <img class="img-star" alt="level-star" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABGCAMAAAC0TEcTAAAAe1BMVEUAAAD29vzd3+iSmKl4fozo6PHLztqRl6jGydS3vcvW2eHt7/bR1N6lpaWXnK2Znaqeo7WZpbCGi5t8g5OSl6mTmaikqbiLkaKSlqmVmKq8wcyytsWrsL6Sl6l4gIyVmKuWmap3fo6Umql5gYx8gY2Ik556foySmauJjJu6tS+cAAAAKXRSTlMAWVlZWVlZWFlZWVlZBFkQWQlZWU43WVlUJ1lZWUs+Lh5RQjAjF0dGKVUfY0EAAAIeSURBVEjHzdfdcqsgFAVgASEKqPlva6xpmqTt+z/hIYDdkwE3OOem66LTOH4TFjGzSTGX7nDoimVpzivGVudmiXl7ZTavb9nk/s5+837PIpuDvXut9dr+c9hklTFpBTERLWMZ1T727JFaERtV25f7D4R03/aegZPf8MFe+u4SZSR5ikSqNW6b24oEqVq3/Q1aBoJV6z7t1SMlM6FHe8NnF34yBAl8akgZtFrnnpkTJ8nwk3uyumIfK4NX2xcr81eQWKIbKR7P1QPVUcN5TKmTR1XUmESu0hpB3CYgFEOKh0pRiiJvnmpxiiAwVgHBEBBwZmUYAgGhkqKIRyKFEBJBKkpM9JJ3osIF7/RMtDcyfyOkmEJxRIKVmcgUUgERmqYQmcpAaBopKLMAUfEcnUZKiqVIUboYcRpBMo6ALETwnXFrkiY6hTidorWE+6TWNI6ApAKoVjQ/J49Yn296ZpAbAOsqj1RrNwD8qBl0mujBjxoYarXEiaxhqMH4bCt0Za0fn8GgFnNEwKAOjwSDjBE5zJx2mjNz1ULjyrDouWr3wtz2x7aZveyKWMrSs6MGoo+elGUcmWxX7oAgfRl3CFhtyxJBhrlq/cP0rowlKCqnan0/lSmTCBiQNIJqrkwaAYMyaQRr3G53ZT6C/F30dWua29cSdLl2/nt2vWSi8dbAxeY2osi/SXDS31wvKBrvRTT3cQ6NPxvkV9XPWPxf/gH/cTH6/dEd9gAAAABJRU5ErkJggg==">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sc-gXRojI bRYT">
                            <div class="sc-bGaVxB gvTPwc">
                                <div class="item">
                                    <div class="item-type darken">
                                        <span class="sc-gsDKAQ hxODWG icon wagered-icon">
                                            <Icon src={SiChakraui}  size="30"  color="rgba(153, 164, 176, 0.8)" className="sc-gsDKAQ hxODWG icon right right-fold" title="Total Wins" />
                                         </span>
                                        Total Wins
                                    </div>
                                    <div class="item-value">
                                        {$userStatistics.total_win}
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item-type darken">
                                        <span class="sc-gsDKAQ hxODWG icon wagered-icon"> 
                                            <Icon src={BsCoin}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" title="Total Bets" />
                                         </span>
                                         Total Bets
                                        </div>
                                    <div class="item-value">
                                        {$userStatistics.total_bet}
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="item-type darken">
                                        <span class="sc-gsDKAQ hxODWG icon wagered-icon"> 
                                            <Icon src={RiDeviceDatabase2Fill}  size="18"  color="rgb(238, 183, 17)" className="custom-icon" title=" Total Wagered" />
                                         </span>
                                        Total Wagered
                                    </div>
                                    <div class="item-value">
                                        {$userStatistics.total_wagered} USD
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div class="sc-gXRojI bRYT statistics__list">
                            <div class="thead darken">
                                <div class="th">Currency</div>
                                <div class="th">Win</div>
                                <div class="th">Bet</div>
                                <div class="th">Wagered</div>
                            </div>
                            {#if !$userStatistics.total_bet}
                            <div class="sc-eCImPb cuPxwd empty ">
                                <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                                <div class="msg">Oops! There is no data yet!</div>
                            </div>
                            {:else}
                            <div class="tbody">
                                {#if $userStatistics.ppd.ppd_bets !== 0}
                                <div class="tr">
                                    <div class="td fc bold">
                                        <img class="coin-icon" alt="" src={$userStatistics.ppd.ppd_img}>PPD
                                    </div>
                                        <div class="td">{$userStatistics.ppd.ppd_win}</div>
                                        <div class="td">{$userStatistics.ppd.ppd_bets}</div>
                                        <div class="td bold">
                                            <div class="sc-Galmp erPQzq coin notranslate monospace">
                                                <div class="amount">
                                                    <span class="amount-str">{$userStatistics.ppd.ppd_wagered}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/if}
                                {#if  $userStatistics.usdt.usdt_bets !== 0}
                                <div class="tr">
                                    <div class="td fc bold">
                                        <img class="coin-icon" alt="" src={$userStatistics.usdt.usdt_img}>USDT
                                    </div>
                                        <div class="td">{$userStatistics.usdt.usdt_win}</div>
                                        <div class="td">{$userStatistics.usdt.usdt_bets}</div>
                                        <div class="td bold">
                                            <div class="sc-Galmp erPQzq coin notranslate monospace">
                                                <div class="amount">
                                                <span class="amount-str">{$userStatistics.usdt.usdt_wagered.toFixed(4)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/if}
        
                                {#if  $userStatistics.ppf.ppf_bets !== 0}
                                <div class="tr">
                                    <div class="td fc bold">
                                        <img class="coin-icon" alt="" src={$userStatistics.ppf.ppf_img}>PPF
                                    </div>
                                        <div class="td">{$userStatistics.ppf.ppf_win}</div>
                                        <div class="td">{$userStatistics.ppf.ppf_bets}</div>
                                        <div class="td bold">
                                            <div class="sc-Galmp erPQzq coin notranslate monospace">
                                                <div class="amount">
                                                <span class="amount-str">{$userStatistics.ppf.ppf_wagered.toFixed(4)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/if}
    
                                    
                                {#if  $userStatistics.ppl.ppl_bets !== 0}
                                <div class="tr">
                                    <div class="td fc bold">
                                        <img class="coin-icon" alt="" src={$userStatistics.ppl.ppl_img}>PPL
                                      </div>
                                        <div class="td">{$userStatistics.ppl.ppl_win}</div>
                                        <div class="td">{$userStatistics.ppl.ppl_bets}</div>
                                        <div class="td bold">
                                            <div class="sc-Galmp erPQzq coin notranslate monospace">
                                                <div class="amount">
                                                <span class="amount-str">{$userStatistics.ppl.ppl_wagered.toFixed(4)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/if}
                            </div>
        
                            <div class="sc-cCcXHH dXTFyi pagination ">
                                <div class="sc-cidDSM dmcoXZ">Total</div>
                                <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs pages-wrap">
                                    <button class="active" disabled="">1</button>
                                </div>
                                <div class="sc-jcFjpl sc-iUKqMP dORpLZ jrpAIs page-pn">
                                    <button disabled="" class="disabled previous-btn">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon prev">
                                            <use xlink:href="#icon_Arrow"></use>
                                        </svg>
                                    </button>
                                    <button disabled="" class="disabled next-page">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon next">
                                            <use xlink:href="#icon_Arrow"></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/if}
                        </div>
                    </div>
                </div>
            {/if}
    
    

    
    <style>
    .select-options-wrap {
        pointer-events: auto;
    }
    .iVwWcQ {
        position: absolute;
        padding: 0.3125rem 0px;
        width: 100%;
        left: 0px;
        z-index: 2;
        /* pointer-events: none; */
    }
    .iVwWcQ .select-options {
        border-radius: 1.25rem;
        padding: 0.125rem 0.375rem;
        background-color: rgb(23, 24, 27);
        box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 8px 0px;
        height: auto;
        max-height: 16.25rem;
    }
    .jScFby {
        box-sizing: border-box;
        height: 100%;
        overflow-y: auto;
        touch-action: pan-y;
        overscroll-behavior: contain;
    }
    .iVwWcQ .select-options:not(.len-1) > .active {
        border-color: rgba(91, 174, 28, 0.4);
    }
    .iVwWcQ .select-option {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
        padding: 0px 0.625rem;
        font-size: 0.875rem;
        height: 2rem;
        margin: 0.25rem 0px;
        border: 1px solid transparent;
        border-radius: 1.0625rem;
        cursor: pointer;
        color: rgba(153, 164, 176, 0.6);
        white-space: nowrap;
    }
    .iVwWcQ .select-option:hover {
        background: #cecccc33;
        color: #ffff;
    }
    .iVwWcQ .select-options:not(.len-1) > .active::after {
        content: "";
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.25rem;
        top: 50%;
        margin-top: -0.25rem;
        right: 0.625rem;
        background-color: rgb(67, 179, 9);
        box-shadow: rgba(91, 174, 28, 0.15) 0px 0px 0px 0.3125rem;
    }
    .lgnNLC .tr {
        padding: 0.625rem 0px;
        color: rgb(255, 255, 255);
    }
    .lgnNLC .thead, .lgnNLC .tr {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .lgnNLC .fc {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .lgnNLC .td {
        color: rgb(245, 246, 247);
    }
    .lgnNLC .td:nth-child(1), .lgnNLC .th:nth-child(1) {
        text-align: left;
        flex: 4 1 0%;
    }
    .lgnNLC .bold {
        font-weight: 600;
        color: rgb(245, 246, 247);
    }
    .lgnNLC .fc {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .lgnNLC .coin-icon {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.5rem;
    }
    .lgnNLC .td:nth-child(4), .lgnNLC .th:nth-child(4) {
        flex: 4 1 0%;
        text-align: right;
    }
    .lgnNLC .td:nth-child(4), .lgnNLC .th:nth-child(4) {
        flex: 4 1 0%;
        text-align: right;
    }
    .erPQzq .amount-str {
        width: 7em;
        display: inline-block;
    }
    .lgnNLC .pagination {
        margin: 2rem 0px 0.375rem;
    }
    .dXTFyi {
        display: flex;
        -webkit-box-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        align-items: center;
    }
    .dmcoXZ {
        height: 2rem;
        line-height: 2rem;
        margin: 0px 0.5rem 0px 24px;
        font-size: 0.75rem;
        color: rgba(153, 164, 176, 0.6);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .dORpLZ.pages-wrap {
        background-color: rgba(24, 25, 29, 0.6);
        padding: 0px 1.125rem;
    }
    .dORpLZ {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        height: 2rem;
        border-radius: 2rem;
        overflow: hidden;
        -webkit-box-align: center;
        align-items: center;
        padding: 0px;
    }
    .dORpLZ.pages-wrap button {
        font-size: 1rem;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.75rem;
        margin: 0px;
    }
    .dORpLZ.page-pn {
        margin-left: 0.75rem;
    }
    .lgnNLC .pagination button.disabled {
        background-color: rgba(45, 48, 53, 0.4);
    }
    .jrpAIs.page-pn button.disabled {
        background-color: rgba(45, 48, 53, 0.4);
    }
    .dORpLZ.page-pn .previous-btn {
        margin: 0px 1px 0px 0px;
    }
    
    </style>