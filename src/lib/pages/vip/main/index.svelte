<script>
    import Home from "./home.svelte";
    import { handleisLoggin, profileStore } from "$lib/store/profile";

    let first_slide = 1;
    let second_slide = 0;
    let third_slide = 0;

    const handleNavigate = (slide) => {
        if (slide === 1) {
            first_slide = 1;
            second_slide = 0;
            third_slide = 0;
        } else if (slide === 2) {
            first_slide = 0;
            second_slide = 1;
            third_slide = 0;
        } else {
            first_slide = 0;
            second_slide = 0;
            third_slide = 1;
        }
    };
</script>

<div class="sc-lhMiDA ePAxUv">
    <div id="main" class="sc-hUplSX jzbUmw">
        <div class="sc-cfJLRR gQxvnl vip-top-banner">
            <div class="banner-head">
                <img
                    class="vip-bc-img"
                    alt="banner.png"
                    src="https://static.nanogames.io/assets/bg.7ad42530.png"
                />
                <div class="vip-desc">
                    <div class="vip-club-tit">
                        VIP - <br />Exclusive Player Benefits
                    </div>
                    <div class="vip-club-desc">
                        As a way of showing our gratitude and appreciation to
                        our VIP players, DOTPLAYPLAY.COM invites you to join our
                        VIP Club where there is an abundance of gifts,
                        giveaways, higher cash back and unique features. Don't
                        miss out on all the exciting and amazing fun!
                    </div>
                </div>
            </div>
        </div>

        {#if $handleisLoggin}
            <Home />
        {:else}
            <div class="center-cont">
                <div class="svip-title">VIP &amp; SVIP Unlocked Rights</div>

                <div class="sc-bLdqUH bxRPMC l-box-wrap">
                    <div class="sc-jibziO dIqRMY swiper-slide">
                        <div
                            style="transform: translate3d(0%, 0px, 0px); opacity: 1;"
                        >
                            <div class="flag-wrap hove-cus open">
                                <div class="top">
                                    <div class="top-lock">Locked</div>
                                    <div
                                        class="tag-img"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAADBUlEQVR4Ae3b6WoTURgG4O87E+9G64YbKqK4oM1SFCRL/zVpLmMml5Gl/9IkIEq2Ki5YRMUNd+/GzDmeRMFQ07zNZK39BgLTeefMnPP0zXT+lPPluiHZdhVQuyYS9AQECBRBgAQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIB40Rqk7Xy7n4XZFgKImQ0x32Ollrqf3n732AJsoXnOoQdj6L5ynFw6Hv7RN5e7pVr7sO74LjHdMcZwXzbTXZ7H/833YMg8MOZQLru6/H3YivPlrSPMP10ivj0PqJkC/WlMnRV5mWTs2zCYnVmx0lgymjzbqJVZQs0EqAtjyDRCjuOtxSNfdy5+lJ83aq2jHd/3mDg2C6ipA1mcBlHIW08tfxkFAp1b2Nw6RtTxLFIMnTtOPjUg+xtuKoe8dCL2eZwJorGlauO49smzDY2ic4PkEweyjWkbR7nZeORTkAkFHZOvtU6wr3O2UeGg1xg0boJAvKXYcTOp8MdBN5rVseJm+6Q2fo7ILE/inmMDMdNDcpS3Ho9+mMSEJnWNQq15inxtn1F0a5xrBgayX6VHipSXTkXejzOBaY8tbbZOa+pCmZtB7jUykG3MY6PIzSZW3gW54bzG5Kv1M6zJPqPoxihzGAXoiQopNxOPvh3lBot2brHWPKs72j6j6Ppe5gaB7FfpqcPKXUtG3uzlgvvlnI1K65xven/1rg2b865AFuaZMvY9ZjX2etgF9ntWKjfOa7bvUcZcHbSWf4AszHNjG5NNRl4NGvC/HstXWhf4d6Ou9K/xLxDztlL2PSYRftl/wkHbL1bbF7W271HGXO6unQvl+jYp+x6TjL44aBjD1luoNC+R1t4vV6P3BL5hyhAAAAAASUVORK5CYII=&quot;); color: rgb(245, 246, 247);"
                                    >
                                        <span class="rights">V03</span>
                                    </div>
                                </div>
                                <div class="flag-img-wrap">
                                    <img
                                        class="flag-img"
                                        src="https://static.nanogames.io/assets/dice.cb7509e5.png"
                                        alt=""
                                    />
                                </div>
                                <div class="flag-box">
                                    <div class="flag-tit">Roll Competition</div>
                                    <div class="flag-desc">
                                        Try your luck once a day for a spot on
                                        our daily top 10 and win some free Doge!
                                    </div>
                                </div>
                            </div>

                            <div class="flag-wrap hove-cus open">
                                <div class="top">
                                    <div class="top-lock">Locked</div>
                                    <div
                                        class="tag-img"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAADBUlEQVR4Ae3b6WoTURgG4O87E+9G64YbKqK4oM1SFCRL/zVpLmMml5Gl/9IkIEq2Ki5YRMUNd+/GzDmeRMFQ07zNZK39BgLTeefMnPP0zXT+lPPluiHZdhVQuyYS9AQECBRBgAQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIB40Rqk7Xy7n4XZFgKImQ0x32Ollrqf3n732AJsoXnOoQdj6L5ynFw6Hv7RN5e7pVr7sO74LjHdMcZwXzbTXZ7H/833YMg8MOZQLru6/H3YivPlrSPMP10ivj0PqJkC/WlMnRV5mWTs2zCYnVmx0lgymjzbqJVZQs0EqAtjyDRCjuOtxSNfdy5+lJ83aq2jHd/3mDg2C6ipA1mcBlHIW08tfxkFAp1b2Nw6RtTxLFIMnTtOPjUg+xtuKoe8dCL2eZwJorGlauO49smzDY2ic4PkEweyjWkbR7nZeORTkAkFHZOvtU6wr3O2UeGg1xg0boJAvKXYcTOp8MdBN5rVseJm+6Q2fo7ILE/inmMDMdNDcpS3Ho9+mMSEJnWNQq15inxtn1F0a5xrBgayX6VHipSXTkXejzOBaY8tbbZOa+pCmZtB7jUykG3MY6PIzSZW3gW54bzG5Kv1M6zJPqPoxihzGAXoiQopNxOPvh3lBot2brHWPKs72j6j6Ppe5gaB7FfpqcPKXUtG3uzlgvvlnI1K65xven/1rg2b865AFuaZMvY9ZjX2etgF9ntWKjfOa7bvUcZcHbSWf4AszHNjG5NNRl4NGvC/HstXWhf4d6Ou9K/xLxDztlL2PSYRftl/wkHbL1bbF7W271HGXO6unQvl+jYp+x6TjL44aBjD1luoNC+R1t4vV6P3BL5hyhAAAAAASUVORK5CYII=&quot;); color: rgb(245, 246, 247);"
                                    >
                                        <span class="rights">V04</span>
                                    </div>
                                </div>
                                <div class="flag-img-wrap">
                                    <img
                                        class="flag-img"
                                        src="https://static.nanogames.io/assets/rain.81aa4c59.png"
                                        alt=""
                                    />
                                </div>
                                <div class="flag-box">
                                    <div class="flag-tit">Raining</div>
                                    <div class="flag-desc">
                                        Randomly reward players in chat room
                                        every 6 hours.
                                    </div>
                                </div>
                            </div>
                            <div class="flag-wrap hove-cus open">
                                <div class="top">
                                    <div class="top-lock">Locked</div>
                                    <div
                                        class="tag-img"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAADBUlEQVR4Ae3b6WoTURgG4O87E+9G64YbKqK4oM1SFCRL/zVpLmMml5Gl/9IkIEq2Ki5YRMUNd+/GzDmeRMFQ07zNZK39BgLTeefMnPP0zXT+lPPluiHZdhVQuyYS9AQECBRBgAQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIB40Rqk7Xy7n4XZFgKImQ0x32Ollrqf3n732AJsoXnOoQdj6L5ynFw6Hv7RN5e7pVr7sO74LjHdMcZwXzbTXZ7H/833YMg8MOZQLru6/H3YivPlrSPMP10ivj0PqJkC/WlMnRV5mWTs2zCYnVmx0lgymjzbqJVZQs0EqAtjyDRCjuOtxSNfdy5+lJ83aq2jHd/3mDg2C6ipA1mcBlHIW08tfxkFAp1b2Nw6RtTxLFIMnTtOPjUg+xtuKoe8dCL2eZwJorGlauO49smzDY2ic4PkEweyjWkbR7nZeORTkAkFHZOvtU6wr3O2UeGg1xg0boJAvKXYcTOp8MdBN5rVseJm+6Q2fo7ILE/inmMDMdNDcpS3Ho9+mMSEJnWNQq15inxtn1F0a5xrBgayX6VHipSXTkXejzOBaY8tbbZOa+pCmZtB7jUykG3MY6PIzSZW3gW54bzG5Kv1M6zJPqPoxihzGAXoiQopNxOPvh3lBot2brHWPKs72j6j6Ppe5gaB7FfpqcPKXUtG3uzlgvvlnI1K65xven/1rg2b865AFuaZMvY9ZjX2etgF9ntWKjfOa7bvUcZcHbSWf4AszHNjG5NNRl4NGvC/HstXWhf4d6Ou9K/xLxDztlL2PSYRftl/wkHbL1bbF7W271HGXO6unQvl+jYp+x6TjL44aBjD1luoNC+R1t4vV6P3BL5hyhAAAAAASUVORK5CYII=&quot;); color: rgb(245, 246, 247);"
                                    >
                                        <span class="rights">V07</span>
                                    </div>
                                </div>
                                <div class="flag-img-wrap">
                                    <img
                                        class="flag-img"
                                        src="https://static.nanogames.io/assets/coindrop.2d362bea.png"
                                        alt=""
                                    />
                                </div>
                                <div class="flag-box">
                                    <div class="flag-tit">Coindrop</div>
                                    <div class="flag-desc">
                                        You can now get coin drops from the
                                        chatroom for a little extra luck!
                                    </div>
                                </div>
                            </div>

                            <div class="flag-wrap open">
                                <div class="top">
                                    <div class="top-lock">Locked</div>
                                    <div
                                        class="tag-img"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAADBUlEQVR4Ae3b6WoTURgG4O87E+9G64YbKqK4oM1SFCRL/zVpLmMml5Gl/9IkIEq2Ki5YRMUNd+/GzDmeRMFQ07zNZK39BgLTeefMnPP0zXT+lPPluiHZdhVQuyYS9AQECBRBgAQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIBYGiRAQADE0iABAgIglgYJEBAAsTRIgIAAiKVBAgQEQCwNEiAgAGJpkAABARBLgwQICIB40Rqk7Xy7n4XZFgKImQ0x32Ollrqf3n732AJsoXnOoQdj6L5ynFw6Hv7RN5e7pVr7sO74LjHdMcZwXzbTXZ7H/833YMg8MOZQLru6/H3YivPlrSPMP10ivj0PqJkC/WlMnRV5mWTs2zCYnVmx0lgymjzbqJVZQs0EqAtjyDRCjuOtxSNfdy5+lJ83aq2jHd/3mDg2C6ipA1mcBlHIW08tfxkFAp1b2Nw6RtTxLFIMnTtOPjUg+xtuKoe8dCL2eZwJorGlauO49smzDY2ic4PkEweyjWkbR7nZeORTkAkFHZOvtU6wr3O2UeGg1xg0boJAvKXYcTOp8MdBN5rVseJm+6Q2fo7ILE/inmMDMdNDcpS3Ho9+mMSEJnWNQq15inxtn1F0a5xrBgayX6VHipSXTkXejzOBaY8tbbZOa+pCmZtB7jUykG3MY6PIzSZW3gW54bzG5Kv1M6zJPqPoxihzGAXoiQopNxOPvh3lBot2brHWPKs72j6j6Ppe5gaB7FfpqcPKXUtG3uzlgvvlnI1K65xven/1rg2b865AFuaZMvY9ZjX2etgF9ntWKjfOa7bvUcZcHbSWf4AszHNjG5NNRl4NGvC/HstXWhf4d6Ou9K/xLxDztlL2PSYRftl/wkHbL1bbF7W271HGXO6unQvl+jYp+x6TjL44aBjD1luoNC+R1t4vV6P3BL5hyhAAAAAASUVORK5CYII=&quot;); color: rgb(245, 246, 247);"
                                    >
                                        <span class="rights">V08</span>
                                    </div>
                                </div>
                                <div class="flag-img-wrap">
                                    <img
                                        class="flag-img"
                                        src="https://static.nanogames.io/assets/jpg.dd00bef5.png"
                                        alt=""
                                    />
                                </div>
                                <div class="flag-box">
                                    <div class="flag-tit">
                                        Send images in Chat
                                    </div>
                                    <div class="flag-desc">
                                        Send your favorite memes in chat, show
                                        everyone what you mean rather than
                                        saying.
                                    </div>
                                </div>
                            </div>
                            <div class="flag-wrap hove-cus open">
                                <div class="top">
                                    <div class="top-lock">Locked</div>
                                    <div
                                        class="tag-img"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAC5klEQVR4Ae3b224SURgF4P8f8AVMpb0thTutp3iKGqPxEA+xRh8IeB6jscZDrMZeqPEUz17JobdAiS8gw/afkURSgQUDDNSuJpPQWTN79v6yOjNpglZ/OCf86Sng9UwYhAIEAkUgEIGAAIjZIAIBARCzQQQCAiBmgwgEBEDMBhEICICYDSIQEAAxG0QgIABiNohAQADEbBCBgACI2SACAQEQs0EEAgIgZoMIBARAzAYRCAiAmA0iEBAAMRtEICAAYjaIQEAAxGwQgYAAiNkgAgEBELNBBAICIGaDCAQEQMwGEQgIgJgNIhAQADEbRCAgAGI2iEBAAMRsEIGAAIhnqkGq0go2MOdY45kAMhRn2+2kyHKwBZ+DfbFK9LiYTvNr4W2EO7tUCrsz+r1zjj9Lbu8vJznbd8u+uK6dWZyfpwLUhrnrPCksLOm3fguult0+bYVQN6cBFStQCOPkniQlP5/Wr/1gtma1iluWpuStSzfihIoFqN2YVUmEMF+2Ln6Y3w1qv/gGJbISB9TEgQxnVa0xqUX9PAwEOra+4Q44a5QhraBjR8knBmQw9+3Omk9l9dMoE0Tn1ovuoD3uAqjr6Ngo+fiBVB4kRHJ7svoxyoSinrNZdId8kYK9HFyLOka388YJ9DDhGUxGP3S7UFz7NkvusN8yKJGr47jmOIAeJe3mO7ek78cxoXGN0Si7I80/N/Mro4wZGcjuMY8TAUxa340ygUmf26i4o75B2T3qcpRrDQ1kME8SScnNLerbKBec1jmNDXfMb0rBoC4NM4eBgQxmzZ4WuYWsvhnmArN2bLXojtvTNYC6OMjcIJDBPLWBcvNZfT3IgNvlmFrRnbC5BlAX+s25J5ApPxPP3nwz+qrfANs9q5XcSfsHS97+Os53W8u/QCrPPXtcp5b0ZbcT/td99bI71QpeD5yc61zjXyCVdS9hMGl90XnATvtcr7jTLT+EOhuu3W5a6/YWemanQaD1BiaBzW/ZHegI/MzGtQAAAABJRU5ErkJggg==&quot;); color: rgb(49, 55, 61);"
                                    >
                                        <span class="rights">V14</span>
                                    </div>
                                </div>
                                <div class="flag-img-wrap">
                                    <img
                                        class="flag-img"
                                        src="https://static.nanogames.io/assets/spider.57341779.png"
                                        alt=""
                                    />
                                </div>
                                <div class="flag-box">
                                    <div class="flag-tit">
                                        Where is PACO Bonus
                                    </div>
                                    <div class="flag-desc">
                                        Now you see him, and now you don’t! Find
                                        PACO on site every 6 hours to receive a
                                        bonus.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-page-wrap">
                        <button
                            on:click={() => handleNavigate(1)}
                            class={`swiper-page ${first_slide && "active"}`}
                        ></button>
                        <button
                            on:click={() => handleNavigate(2)}
                            class={`swiper-page ${second_slide && "active"}`}
                        ></button>
                        <button
                            on:click={() => handleNavigate(3)}
                            class={`swiper-page ${third_slide && "active"}`}
                        ></button>
                    </div>
                </div>
            </div>
        {/if}

        <div class="bot-other">
            <div class="svip-title">Exclusive VIP &amp; SVIP Benefits</div>
            <div class="card-wrap">
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/emoji.058c08b0.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box box-p-bg">
                            <div class="card-title">
                                Unique VIP Transfer Program
                            </div>
                            <div class="card-desc">
                                NANOGAMES.IO respects and welcomes every
                                distinguished VIP and will give you an exclusive
                                VIP status that you can continue your honor
                                here. Contact us for details.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/wallet.ff988bfc.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box">
                            <div class="card-title">Exclusive VIP Host</div>
                            <div class="card-desc">
                                There will be exclusive host for every VIP. Feel
                                free to contact them any time.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/start.578d2808.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box box-p-bg">
                            <div class="card-title">The SVIP Code</div>
                            <div class="card-desc">
                                Only SVIP can get code from exclusive host.
                                Become an SVIP, rock like a superstar and have
                                the spotlight shining on you!
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/gift.d2cad534.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box">
                            <div class="card-title">Secret Treasure</div>
                            <div class="card-desc">
                                VIP needs more Surprises in life. The higher
                                your rank, the more surprising your secret
                                treasure will be!
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/card.666a69ae.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box box-p-bg">
                            <div class="card-title">Free Coins Every Day</div>
                            <div class="card-desc">
                                NANOGAMES.IO offers many ways to get free coins
                                to all our players. As a VIP you are entitled to
                                an ever growing percentage boost of free coins.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/diamond.7c4f7f9e.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box">
                            <div class="card-title">
                                SVIP's Genie In A Bottle
                            </div>
                            <div class="card-desc">
                                We’re rolling out the red carpet for you! Your
                                SVIP Manager is now your private Genie ready to
                                grant your wishes. Within reason, of course.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/ship.9998da4f.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box box-p-bg">
                            <div class="card-title">SVIP Trip</div>
                            <div class="card-desc">
                                SVIP Secret Treasures will fullfill your wildest
                                dreams. You can receive exciting
                                all-expense-paid trips to the most exotic and
                                entertainment filled locations on the planet. Or
                                maybe even something better.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/sail.4040c7c5.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box">
                            <div class="card-title">SVIP Life Is Suite</div>
                            <div class="card-desc">
                                Casinos have the most elegant hotel suites in
                                the world. Indulge yourself with a full week of
                                celebrity treatment including spas, room
                                service, shows and jacuzzis. On us.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-cont">
                        <div class="card-img-wrap">
                            <img
                                class="card-img"
                                src="https://static.nanogames.io/assets/air.5e85a4f2.png"
                                alt=""
                            />
                        </div>
                        <div class="card-box box-p-bg">
                            <div class="card-title">SVIP Party</div>
                            <div class="card-desc">
                                SVIP members will be chosen every year to attend
                                our SVIP Annual Party where you will be treated
                                as the celebrity you are! Get ready for
                                champagne, fine dining and red carpets!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="foot-desc">
            <div>
                Some features and benefits require specific conditions to be
                met. Please ask your VIP host for details
            </div>
            <div>
                Each one of you is important to us. Whether you are here to take
                the bankroll or just passing some time chatting with friends.
            </div>
            <div>
                - You all are NANOGAMES.IO. We wouldn't be here without you! -
            </div>
        </div>
    </div>
</div>

<style>
    .ePAxUv {
        margin-top: 4rem;
    }

    .jzbUmw {
        margin: 0px auto;
        padding: 0px 3.125rem;
        position: relative;

        max-width: 89.25rem;
        min-width: 68.75rem;
        margin: 0px auto;
        padding: 0px 3.125rem;
        position: relative;
    }

    .gQxvnl {
        background-color: rgb(30, 32, 36);
        border-radius: 0px 0px 1.25rem 1.25rem;
        margin-bottom: 1.25rem;
        overflow: hidden;
        position: relative;
    }

    .gQxvnl .banner-head {
        font-size: 0px;
        position: relative;
    }

    .gQxvnl .banner-head .vip-bc-img {
        width: 100%;
        min-height: 12.5rem;
    }

    .gQxvnl .banner-head .vip-desc {
        position: absolute;
        width: 50%;
        top: 0px;
        height: 100%;
        left: 40%;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        color: rgb(245, 246, 247);
    }

    .gQxvnl .banner-head .vip-desc .vip-club-tit {
        font-size: 2.25rem;
        line-height: 2.5rem;
        font-weight: bold;
    }

    .gQxvnl .banner-head .vip-desc .vip-club-desc {
        margin-top: 1.75rem;
        font-size: 1.125rem;
        line-height: 1.25rem;
        font-weight: 500;
    }

    .jzbUmw .center-cont {
        position: relative;
        margin-top: 1.25rem;
        width: 100%;
    }

    .jzbUmw .svip-title {
        font-size: 1.5rem;
        line-height: 1.875rem;
        margin-top: 2rem;
        padding-left: 0.625rem;
        font-weight: bold;
        color: rgb(245, 246, 247);
    }

    .bxRPMC {
        position: relative;
        overflow: hidden;
        padding-bottom: 0px;
    }

    .jzbUmw .center-cont .swiper-slide {
        margin-top: 1.25rem;
    }

    .dIqRMY {
        display: flex;
        text-align: center;
        position: relative;
        width: 100%;
        height: 19.625rem;
    }

    .dIqRMY > div {
        width: 100%;
        display: flex;
        position: absolute;
        left: 0px;
        top: 0px;
        -webkit-box-pack: justify;
        justify-content: space-between;
    }

    .dIqRMY > div .flag-wrap.open {
        opacity: 1;
    }

    .dIqRMY > div .flag-wrap.hove-cus {
        cursor: pointer;
    }

    .dIqRMY > div .flag-wrap .top {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        padding: 0px 0.875rem;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
    }

    .dIqRMY > div .flag-wrap {
        height: 19.625rem;
        width: 13.125rem;
        position: relative;
        margin-right: 0.75rem;
        opacity: 0.5;
        background: url(https://static.nanogames.io/assets/flag_bg.fcc40855.png)
            0% 0% / 100% no-repeat;
    }

    .dIqRMY > div .flag-wrap .top .top-lock {
        text-align: left;
        color: rgb(245, 246, 247);
    }

    .dIqRMY > div .flag-wrap .top .tag-img {
        width: 2.25rem;
        height: 2.25rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        color: rgb(49, 52, 58);
        font-weight: bold;
        padding-top: 0.3125rem;
    }

    .dIqRMY > div .flag-wrap .flag-img-wrap {
        font-size: 0px;
        height: 8.5rem;
        display: flex;
        align-items: flex-end;
        -webkit-box-pack: center;
        justify-content: center;
    }

    .dIqRMY > div .flag-wrap .flag-img-wrap .flag-img {
        height: 6.25rem;
    }

    .dIqRMY > div .flag-wrap.open {
        opacity: 1;
    }

    .dIqRMY > div .flag-wrap .flag-box .flag-tit {
        color: rgb(245, 246, 247);
        line-height: 1.125rem;
        text-align: center;
        font-weight: 600;
        white-space: nowrap;
    }

    .dIqRMY > div .flag-wrap .flag-box .flag-desc {
        margin-top: 0.875rem;
        padding: 0px 20%;
        line-height: 1rem;
    }

    .dIqRMY > div .flag-wrap.open {
        opacity: 1;
    }

    .dIqRMY > div .flag-wrap.hove-cus {
        cursor: pointer;
    }

    .bxRPMC .swiper-page-wrap {
        display: flex;
        width: 100%;
        margin-top: 1.5rem;
        -webkit-box-pack: center;
        justify-content: center;
    }

    .bxRPMC .swiper-page-wrap .swiper-page {
        margin: 0px 0.3125rem;
        width: 6.25rem;
        height: 0.625rem;
        border-radius: 0.3125rem;
        cursor: pointer;
        background-color: rgb(49, 52, 60);
        opacity: 0.5;
    }

    .bxRPMC .swiper-page-wrap .swiper-page.active {
        opacity: 1;
    }

    .jzbUmw .bot-other {
        position: relative;
    }

    .jzbUmw .svip-title {
        font-size: 1.5rem;
        line-height: 1.875rem;
        margin-top: 2rem;
        padding-left: 0.625rem;
        font-weight: bold;
        color: rgb(245, 246, 247);
    }

    .jzbUmw .bot-other .card-wrap {
        display: flex;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: stretch;
        align-items: stretch;
        margin-top: 1.5rem;
    }

    .jzbUmw .bot-other .card-wrap .card {
        width: 32.5%;
        padding-bottom: 2.25rem;
    }

    .jzbUmw .bot-other .card-wrap .card .card-cont {
        border-radius: 1.25rem;
        background: rgba(49, 52, 58, 0.8);
    }

    .jzbUmw .bot-other .card-wrap .card .card-cont .card-img-wrap {
        font-size: 0px;
        border-radius: 1.25rem 1.25rem 0px 0px;
    }

    .jzbUmw .bot-other .card-wrap .card .card-cont .card-box {
        padding: 0px 6%;
        min-height: 10rem;
        position: relative;
    }

    .jzbUmw .bot-other .card-wrap .card .card-cont .card-img-wrap .card-img {
        width: 100%;
        height: auto;
    }

    .jzbUmw .bot-other .card-wrap .card .card-cont .card-box {
        padding: 0px 6%;
        min-height: 10rem;
        position: relative;
    }

    .card-title {
        font-size: 1.25rem;
        line-height: 1.5rem;
        padding-top: 0.75rem;
        padding-bottom: 0.875rem;
        color: rgb(245, 246, 247);
        font-weight: bold;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
    }

    .jzbUmw .bot-other .card-wrap .card .card-cont .card-box .card-desc {
        line-height: 1.25rem;
        transform-origin: 0px 0px;
        text-align: center;
    }

    .jzbUmw .foot-desc {
        text-align: center;
        margin-top: 0.75rem;
        line-height: 1.25rem;
    }

    .jzbUmw .foot-desc > div:first-child {
        color: rgb(245, 246, 247);
    }

    .jzbUmw .foot-desc > div {
        margin-bottom: 0.25rem;
    }

    .jzbUmw .foot-desc > div {
        margin-bottom: 0.25rem;
    }
</style>
