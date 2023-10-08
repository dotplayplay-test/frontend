<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
import VipSystem from './vip_system.svelte';
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher()

const handleCancel = ()=>{
    dispatch("close", 5)
}


</script>

<div class="sc-bkkeKt kBjSXI">
    <div class="dialog sc-fUQcsx gSPVXH vip_xidalog_about" style="opacity: 1; width: 782px; height: 631px; margin-top: -315.5px; margin-left: -391px; transform: scale(1) translateZ(0px);">
        <div class="dialog-head has-close">
            <div class="dialog-title">About VIP Level</div>
        </div>
        <button on:click={handleCancel} class="sc-ieecCq fLASqZ close-icon dialog-close">
            <Icon src={IoCloseSharp}  size="18"  color="rgba(153, 164, 176, 0.6)" className="custom-icon" title="arror" />
        </button>
        <div class="dialog-body no-style sc-fUQcsx gSPVXH vip_xidalog_about" style="z-index: 2; transform: none;">
            <div class="sc-dkPtRN jScFby scroll-view sc-iJCbQK eElGOL vip-level">
                <div class="vip-level-banner">
                    <img class="img-element_a" src="https://static.nanogames.io/assets/element.0de17056.png" alt="element.png">
                    <img class="img-element_b" src="https://static.nanogames.io/assets/element.0de17056.png" alt="element.png">
                    <img class="img-element_c" src="https://static.nanogames.io/assets/element.0de17056.png" alt="element.png">
                    <div class="wager-wrap">
                        <img class="img-tstar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAiCAMAAADid1KLAAAAllBMVEUAAAAuNDQeICQfISUfICQeICQeISQwMDAeICQfISUfISUgIiYeICQeICQeICQgISYiKC0eICQeICQeICQeICQeICUfIiYgISUiIikfJiciIismJikfICUeISUeICQfISUfICQeICUfISUlJSUgJyoeISQeICQfISUgIyUiJCQeICUhISUgIiYfICUfISQjIykeISQeICRp4GtKAAAAMXRSTlMABfb62NSaCvx1Vj3k3qFPDvHIwq5tSkUlIB0U0Lu1k41+WxsY6s1jLyKHNiemaCypQU1KZQAAAp1JREFUWMPVl9t6qjAQhcNJVERARUQpiuKhamvX+7/c3jW7tiY0YcjV/q/nWy4Xk8mEiVyHzJBtbqpQ6UvGHjPDCnuGCov+UF8CwziPcJZmCmN4+hJ4ZmG6wNpI4dUBhvoSszi3AOydiUIPgKcvQcEMcAGzOHPnUyHSlyAyCxOwa7MwgUJfggPrjMcVNp0Flg5XiPQlmLOODMGxV10V1uAc9CWYGIRpFufOgSaq5dzGF+nC6jCLroOHgJ11Oe3+6e2hcLgIX6QOjueZZ+MJxy3XaZZbrfy9ztN1GfafFWxvdj4GdTt/t2jQm47wTDIZV9tL/FkwKAR/otuepfE4dh2VQnJIdafmZQQV+2nA4gmUjK5Mw22vVpj62inWhwLe6PEUCsJXpuWqDOPF1ysMld/jzPviReEyb7XSKHyWfhuFSOGzYkzj01223BbC3xRmLSfG/NcTMvg+BeUvLuvWd0dIcymT2SqXHGuGBryaMJbdJoU3wvQNGn2mz1PlAxIF6cKrPVlhTLojgkRWeBdq5DzdmJFYhVKWjMalL7sU2UCAfK8X8iChEUMkk2qk055Qb3Spt0qiQqA8Pxz5KiE+vK7y0GU03uXmljoLEnPqqinhU1dNbeMFTROLRCUrXGgK8q1tiyUpvuh/J05iJgngSFPYywp58ysI02DxgU4vIvffT4zzbNJpha/BSarVcQRO1Bh4ce/HUyklrsfiEcxu903C48sRSSHjv7pZfaql+8bGSwC4w0en3l0vGIHT3dejG7chgBFF4N53Tm/3NUSrRL4hdn81j9bPjeUARMQH+iT7me77CIiJD/SPn8msNjYKIfD9wBcHjFsxAmdP/Ff+IAkoCpPyJO4zPdt6Xhjjhm67kT560+2XmyosfPY/8QcORQi28vufLwAAAABJRU5ErkJggg==" alt="">
                        <div class="ribbon">Wager <span class="cl-primary">1 USD</span> Get<span class="cl-primary">1 XP</span></div>
                        <div class="wager-desc">All wagers are converted to USD at the current rate</div>
                    </div>
                </div>

                <div class="sc-juEPzu oAfua vip-bonus">
                    <div class="vip-bonus-title">
                        <img class="img-star" src="https://static.nanogames.io/assets/star.34db71a0.png" alt="">
                        <span class="vip-bonus-subtit">Whole VIP Bonus</span>
                        <img class="img-star" src="https://static.nanogames.io/assets/star.34db71a0.png" alt="">
                    </div>
                    <div class="tag t-left ">
                        <img class="tag-img" src="https://static.nanogames.io/assets/black.23aef3cd.svg" alt="">
                        <img class="hover-img" alt="" src="https://static.nanogames.io/assets/black_hover.5b276789.svg">
                    </div>
                    <div class="tag t-right disabled">
                        <img class="tag-img" alt="" src="https://static.nanogames.io/assets/black.23aef3cd.svg">
                        <img class="hover-img" alt="" src="https://static.nanogames.io/assets/black_hover.5b276789.svg">
                    </div>
                    <div class="bp-wrap">
                        <div class="bp-scroll">
                            <div class="sc-gFSQbh gXRNLi vip-bonus-list">
                                <div class="vip-bonus-wrap">
                                    <div class="vip-bonus-item tr_1 tr_near ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V04</div>
                                            <div class="vip-bonus-bar"></div>
                                            <div class="light-img">
                                                <img src="https://static.nanogames.io/assets/sf.975597ba.png" alt="">
                                            </div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_2 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V08</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_2 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V14</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png"></div>
                                    </div>
                                    <div class="vip-bonus-item tr_3 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V22</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_3 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V30</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png"></div>
                                    </div>
                                    <div class="vip-bonus-item tr_4 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V38</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_4 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V46</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_4 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V54</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_4 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="vip-bs-title">V62</div>
                                            <div class="vip-bonus-bar"></div>
                                            <img class="botl-img" alt="" src="https://static.nanogames.io/assets/bot.233a43f2.png">
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr.1f911215.png" alt="tr.png"></div>
                                    </div>
                                    <div class="vip-bonus-item tr_5 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="svip-bs-title vip-bs-title">
                                                <img class="svip-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg==" alt="">SVIP</div>
                                            <div class="vip-bonus-bar"></div>
                                            <div class="light-img light-svip">
                                                <img src="https://static.nanogames.io/assets/sf_svip.9f5e5bfb.png" alt=""></div>
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr_h.af82116b.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_5 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="svip-bs-title vip-bs-title">
                                                <img class="svip-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg==" alt="">SV9</div>
                                            <div class="vip-bonus-bar"></div>
                                            <div class="light-img light-svip">
                                                <img src="https://static.nanogames.io/assets/sf_svip.9f5e5bfb.png" alt=""></div>
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr_h.af82116b.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_5 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="svip-bs-title vip-bs-title">
                                                <img class="svip-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg==" alt="">SV17</div>
                                            <div class="vip-bonus-bar"></div>
                                            <div class="light-img light-svip">
                                                <img src="https://static.nanogames.io/assets/sf_svip.9f5e5bfb.png" alt=""></div>
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr_h.af82116b.png" alt="tr.png"></div>
                                    </div>
                                    <div class="vip-bonus-item tr_5 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="svip-bs-title vip-bs-title">
                                                <img class="svip-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg==" alt="">SV25</div>
                                            <div class="vip-bonus-bar"></div>
                                            <div class="light-img light-svip">
                                                <img src="https://static.nanogames.io/assets/sf_svip.9f5e5bfb.png" alt="">
                                            </div>
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr_h.af82116b.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_5 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="svip-bs-title vip-bs-title">
                                                <img class="svip-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg==" alt="">SV33</div>
                                            <div class="vip-bonus-bar"></div>
                                            <div class="light-img light-svip">
                                                <img src="https://static.nanogames.io/assets/sf_svip.9f5e5bfb.png" alt="">
                                            </div>
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr_h.af82116b.png" alt="tr.png">
                                        </div>
                                    </div>
                                    <div class="vip-bonus-item tr_5 tr_lock ">
                                        <div class="hover-ani-tr">
                                            <div class="svip-bs-title vip-bs-title">
                                                <img class="svip-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAjVBMVEUAAAD5yyb3yCP3yCP/zyz//0f3xyP3yCP2yCP4yCL2xyL3yCL5ySP5yiX/2Dv2yCP2yCL3yCL3yCL2xyP3ySP4yCP4yiP/zCn3yCL3yCP2yCP2yCL3yCP3ySL3yCP2ySP5yCX3ySP6yCT6yST4yif/zCv3xyP2yCP3xyP3yCL3yCL4ySP4ySP3yCT2xyISu/UtAAAALnRSTlMAH/qZEQPbt5CJ7sJPKAbs6Lyjk3RIQxbz48ysqJZkVlM9NzEmC9OtoH54bWddMDsW9AAAAaRJREFUOMuNktdygzAQRZciEKIaG+zENS7puf//eZGtaLRYhPF5WY04s2gLjbDb0UMcw/D4iLd8Ap6WE8K2E6QROTS5OXdb34uBOuoFzXFjTqKPaiD2xBJXmjX+WDe3UHpij1F6T/wZF3888XNc/PTE+bg4vyu5kM242MjCFn7psmc4Mhscz1l30WIQgvOyhWb7Ak4YkCYCZ1/lQF7twYmIvJQLPWw96sV9Qi9lRnQ6EWVeQpeylps8WbV0o10l+UbWLiFPObs2oiKNCfHMJrRIGJKSGGUCgyQDe7jqnNcpVuCNHRxqab2lgmNHmgMcSTn8syU8EPWmZFsNI54xsyfJNkVQFZyNdQ4qEmyjJNHRrkSdvirg3YjvgHpNa7sWR9KIbzWcTFEMJ1N/C/saNsQvKlerkr7YANnLA3d9iBMgiVkvAnIUbB9TaFK2jwUTP9z1hgXDBxPfMMEbE5MpMXHeBZNcyHLO03UbyfbeaGXUrtP8THdUzdBrKvqHbChm5MP7rvZ7Ney0T3rdNf09mF2bTv9TIPxb+0WIYkIU6ckeT6kgzi9NoI4GmV+a8wAAAABJRU5ErkJggg==" alt="">SV...</div>
                                            <div class="vip-bonus-bar"></div>
                                            <div class="light-img light-svip">
                                                <img src="https://static.nanogames.io/assets/sf_svip.9f5e5bfb.png" alt="">
                                            </div>
                                            <img class="tr-img" src="https://static.nanogames.io/assets/dtr_h.af82116b.png" alt="tr.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sc-eSxRXt jDYsur vip-bonus-progress pr-bronze">
                                <div class="tri-wrap">
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                    <li class="tri-top " style="transform: translate(0px, 0px);"></li>
                                </div>
                                <div class="pr-bar">
                                    <div class="pr-tip" style="left: 0%; opacity: 1; transform: translate(-27.1111px, 0px);">
                                        <div class="prompt-wrap">
                                            <div class="pr-num">V0</div>
                                        </div>
                                        <div class="tri-bot"></div>
                                    </div>
                                    <div class="pr-progress" style="width: 0%;">
                                        <div class="dot-wrap">
                                            <div class="dot-near">
                                                <div class="dot-icon"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="vip-bonus-cont">
                        NANOGAMES.IO VIP Level System sets 14 VIP Secret Treasures. Although there are rewards for every VIP level, the rewards for 14 secret treasures are exceptionally generous. Rewards increase as the VIP card level climbs. Speed up!</div>
                </div>

                    <VipSystem />
              
            </div>
        </div>
    </div>
</div>

<style>
.gSPVXH .dialog-body {
    background-color: rgb(23, 24, 27);
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
.eElGOL .vip-level-banner {
    position: relative;
    height: 9.375rem;
}
.eElGOL .vip-level-banner .img-element_a {
    position: absolute;
    width: 3.75rem;
    left: 7.5rem;
    top: 0px;
}
.eElGOL .vip-level-banner .img-element_b {
    position: absolute;
    width: 2.5rem;
    left: 2.5rem;
    top: 5rem;
}
.eElGOL .vip-level-banner .img-element_c {
    position: absolute;
    width: 4.25rem;
    right: 4.25rem;
    top: 3.75rem;
}
.eElGOL .vip-level-banner .wager-wrap {
    width: 23.125rem;
    text-align: center;
    margin: 0px auto;
}
.eElGOL .vip-level-banner .wager-wrap .img-tstar {
    width: 5.25rem;
}
.eElGOL .vip-level-banner .wager-wrap .ribbon {
    width: 100%;
    height: 3.125rem;
    line-height: 3.125rem;
    font-size: 1rem;
    color: rgb(245, 246, 247);
    font-weight: bold;
    margin-top: 0.625rem;
    background: url(https://static.nanogames.io/assets/ribbon.f9e96837.png) 0% 0% / 100% no-repeat;
    background-repeat: no-repeat;
}
.eElGOL .vip-level-banner .wager-wrap .ribbon .cl-primary {
    color: rgb(255, 210, 53);
    padding: 0px 0.125rem;
}
.eElGOL .vip-level-banner .wager-wrap .wager-desc {
    margin-top: 1.5rem;
}
.oAfua {
    min-height: 12.5rem;
    padding: 0.625rem;
    background-color: rgba(30, 32, 36, 0.8);
    position: relative;
}
.oAfua .vip-bonus-title {
    height: 1.25rem;
    width: 12.5rem;
    margin: 0.625rem auto 0rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.oAfua .vip-bonus-title .img-star {
    width: 1.25rem;
    margin: 0px 0.625rem;
}
.oAfua .vip-bonus-title .vip-bonus-subtit {
    display: inline-block;
    vertical-align: top;
    color: rgb(245, 246, 247);
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: bold;
}
.oAfua .vip-bonus-title .img-star {
    width: 1.25rem;
    margin: 0px 0.625rem;
}
.oAfua .tag {
    position: absolute;
    left: 0px;
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    z-index: 10;
    top: 32%;
    cursor: pointer;
    opacity: 1;
}
.oAfua .tag .tag-img {
    opacity: 1;
}
.oAfua .tag img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    position: absolute;
    left: 0px;
    top: 0px;
}
.oAfua .tag.t-right {
    left: auto;
    right: 0px;
    transform: rotate(180deg);
}

.oAfua .tag {
    position: absolute;
    left: 0px;
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    z-index: 10;
    top: 32%;
    cursor: pointer;
    opacity: 1;
}
.oAfua .tag .tag-img {
    opacity: 1;
}

.oAfua .tag img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    position: absolute;
    left: 0px;
    top: 0px;
}
.oAfua .bp-wrap {
    width: 100%;
    overflow-x: auto;
    margin-top: 1.5rem;
    position: relative;
}
.oAfua .bp-wrap .bp-scroll {
    width: 150%;
}
.gXRNLi .vip-bonus-wrap {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 0.125rem;
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item {
    width: 4.5rem;
    height: 8.125rem;
    position: relative;
    padding-bottom: 0.625rem;
    overflow: hidden;
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item .hover-ani-tr {
    background-image: linear-gradient(rgb(36, 38, 43) 10%, rgb(45, 48, 53)), linear-gradient(rgb(31, 43, 52), rgb(37, 51, 62));
    border-radius: 0.1875rem;
    position: absolute;
    inset: 0px 0px 0.625rem;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.2s ease 0s;
}
.gXRNLi .vip-bonus-wrap .botl-img {
    position: absolute;
    left: 0px;
    width: 85%;
    bottom: 2rem;
}
.gXRNLi .vip-bonus-wrap .tr-img {
    position: absolute;
    left: 20%;
    width: 60%;
    top: 2.375rem;
    z-index: 8;
}
.gXRNLi .vip-bonus-wrap .vip-bs-title {
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0.375rem;
    color: rgb(245, 246, 247);
    font-size: 0.75rem;
    font-weight: bold;
    z-index: 1;
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_1 .vip-bonus-bar {
    background-color: rgb(145, 150, 168);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-bar {
    position: absolute;
    height: 0.9375rem;
    bottom: 0rem;
    left: 0px;
    right: 0px;
    background-color: rgb(41, 55, 67);
    border-bottom-left-radius: 0.1875rem;
    border-bottom-right-radius: 0.1875rem;
    z-index: 8;
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_1 .vip-bonus-bar::after {
    border-top-color: rgb(145, 150, 168);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-bar::after {
    content: "";
    position: absolute;
    border-width: 0.375rem;
    border-style: solid;
    border-color: rgb(41, 55, 67) transparent transparent;
    border-image: initial;
    left: 50%;
    bottom: 1px;
    transform: translate(-50%, 100%);
}
.gXRNLi .vip-bonus-wrap .light-img {
    position: absolute;
    left: 0px;
    top: 1.25rem;
    z-index: 0;
}
.gXRNLi .vip-bonus-wrap .light-img img {
    width: 100%;
    margin-left: 0%;
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_4 .vip-bonus-bar {
    background-color: rgb(119, 60, 253);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_2 .vip-bonus-bar {
    background-color: rgb(232, 218, 255);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_3 .vip-bonus-bar {
    background-color: rgb(246, 199, 34);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_2 .vip-bonus-bar::after {
    border-top-color: rgb(232, 218, 255);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_2 .vip-bonus-bar::after {
    border-top-color: rgb(232, 218, 255);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_3 .vip-bonus-bar::after {
    border-top-color: rgb(246, 199, 34);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_4 .vip-bonus-bar::after {
    border-top-color: rgb(119, 60, 253);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_5 .vip-bonus-bar {
    background-color: rgb(223, 39, 113);
}
.gXRNLi .vip-bonus-wrap .vip-bonus-item.tr_5 .vip-bonus-bar::after {
    border-top-color: rgb(223, 39, 113);
}
.gXRNLi .vip-bonus-wrap .svip-bs-title .svip-img {
    width: 0.875rem;
    display: inline-block;
    vertical-align: top;
    margin: 0.125rem 0.125rem 0px -0.3125rem;
}

.oAfua .vip-bonus-progress {
    height: 2rem;
    border-radius: 1rem;
    background-color: rgba(45, 48, 53, 0.5);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 0.75rem;
}
.oAfua .vip-bonus-progress .tri-wrap {
    top: 0px;
}
.jDYsur .tri-wrap {
    position: absolute;
    top: -1rem;
    left: 1.875rem;
    right: 1.875rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.jDYsur .tri-top {
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent transparent rgb(60, 64, 74);
    border-image: initial;
    list-style-type: none;
    margin: 0px;
}
.oAfua .vip-bonus-progress .pr-bar {
    height: 0.5rem;
}
.jDYsur .pr-bar {
    height: 100%;
    width: 100%;
    background-color: rgb(60, 64, 74);
    border-radius: 0.3125rem;
    position: relative;
}
.oAfua .vip-bonus-progress .pr-bar .pr-tip {
    top: -4rem;
}
.jDYsur.pr-bronze .pr-bar .pr-tip .prompt-wrap {
    border-color: rgb(145, 150, 168);
}
.jDYsur .pr-tip {
    position: absolute;
    left: 0px;
    top: -3.75rem;
    transform: translateX(-60%);
    z-index: 9;
}
.jDYsur.pr-bronze .pr-bar .pr-tip .prompt-wrap {
    border-color: rgb(145, 150, 168);
}
.jDYsur.pr-bronze .pr-bar .pr-tip .prompt-wrap {
    border-color: rgb(145, 150, 168);
}
.jDYsur .pr-tip .prompt-wrap .pr-num {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: rgb(26, 27, 30);
    color: rgb(245, 246, 247);
    font-size: 0.75rem;
    font-weight: bold;
}
.oAfua .vip-bonus-progress .pr-bar .pr-tip .tri-bot {
    bottom: -1rem;
}
.jDYsur.pr-bronze .pr-bar .pr-tip .tri-bot {
    border-top-color: rgb(145, 150, 168);
}
.jDYsur .pr-tip .tri-bot {
    border-width: 0.625rem 0.3125rem;
    border-style: solid;
    border-color: rgb(145, 150, 168) transparent transparent;
    position: absolute;
    bottom: -1.0625rem;
    left: 1.0625rem;
}
.jDYsur .pr-tip .prompt-wrap {
    width: 2.8125rem;
    height: 2.8125rem;
    border-radius: 2.8125rem;
    border: 0.25rem solid rgb(145, 150, 168);
    position: relative;
    z-index: 1;
    opacity: 1;
}
.jDYsur.pr-bronze .pr-bar .pr-progress {
    background-color: rgb(145, 150, 168);
    transition: background-color 0.3s ease 0s;
}
.jDYsur .pr-bar .pr-progress {
    height: 100%;
    width: 0px;
    position: relative;
    border-radius: 0.3125rem;
}
.oAfua .vip-bonus-progress .pr-bar .pr-progress .dot-wrap {
    width: 1.5625rem;
    height: 1.5625rem;
    padding: 0.3125rem;
}
.jDYsur.pr-bronze .pr-bar .dot-wrap {
    background-color: rgba(145, 150, 168, 0.2);
}
.jDYsur .pr-bar .dot-wrap {
    position: absolute;
    right: -0.5625rem;
    top: -0.5625rem;
    border-radius: 50%;
    width: 1.75rem;
    height: 1.75rem;
    padding: 0.3125rem;
    box-sizing: border-box;
}
.oAfua .vip-bonus-progress .pr-bar .pr-progress .dot-wrap .dot-near {
    width: 0.9375rem;
    height: 0.9375rem;
    padding: 0.1875rem;
}
.jDYsur.pr-bronze .pr-bar .dot-near {
    background-color: rgba(145, 150, 168, 0.2);
}
.jDYsur .pr-bar .dot-near {
    width: 1.125rem;
    height: 1.125rem;
    padding: 0.1875rem;
    border-radius: 50%;
    box-sizing: border-box;
}
.oAfua .vip-bonus-progress .pr-bar .pr-progress .dot-wrap .dot-near .dot-icon {
    width: 0.5625rem;
    height: 0.5625rem;
}
.jDYsur.pr-bronze .pr-bar .dot-icon {
    background: rgb(145, 150, 168);
}
.jDYsur .pr-bar .dot-icon {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
}
.oAfua .vip-bonus-cont {
    width: 94%;
    margin: 1.25rem auto 0.75rem;
    text-align: center;
    font-size: 0.75rem;
}
</style>
