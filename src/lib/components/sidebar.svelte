<script>
import {
    goto
} from "$app/navigation"
import { routes} from "$lib/store/routes"

</script>

<div class="sc-fotOHu hNtLjc">
    <div class="sc-hBUSln jlIkCQ">
        <div class="bDNJKSn joMMw">
            <button on:click={()=> goto("/my-affiliate/dashboard")}  class={`wbioljw nwlnsan ${$routes.route === "/my-affiliate/dashboard" && "active"} `}>Dashboard</button>
        </div>
        <div class="bDNJKSn joMMw">
            <button on:click={()=> goto("/my-affiliate/banner")} class={`wbioljw nwlnsan ${$routes.route === "/my-affiliate/banner" && "active"} `}>Banner Downloads</button>
        </div>
        <div class="bDNJKSn joMMw">
            <button on:click={()=> goto("/my-affiliate/friends")}  class={`wbioljw nwlnsan ${$routes.route === "/my-affiliate/friends" && "active"} `}>Friends Managements</button>
        </div>
        <div class="bDNJKSn joMMw">
            <button on:click={()=> goto("/my-affiliate/commission")} class={`wbioljw nwlnsan ${$routes.route === "/my-affiliate/commission" && "active"} `}>Commission Rewards</button>
        </div>
        <div class="bDNJKSn joMMw">
            <button on:click={()=> goto("/my-affiliate/rewards")} class={`wbioljw nwlnsan ${$routes.route === "/my-affiliate/rewards" && "active"} `}>USD Rewards</button>
        </div>
    </div>
</div>


<style>
.hNtLjc {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0px;
    width: 240px;
    top: 0px;
    background-color: var(--card-bg-4);
    bottom: 0px;
}
.hNtLjc {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0px;
    top: 70px;
    bottom: 0px;
}
.joMMw .nwlnsan{
    padding: 14px;
    font-weight: 600;
    margin: 10px;
    border-radius: 4px;
}
.sc-hBUSln .nwlnsan{
    width: 220px;
    text-align: left;
}
.sc-hBUSln .nwlnsan:hover{
    background: rgba(177, 176, 176, 0.103);
    color: rgb(248, 198, 57)
}
.joMMw .nwlnsan.active{
    background: rgba(177, 176, 176, 0.103);
    color: rgb(248, 198, 57)
}

</style>