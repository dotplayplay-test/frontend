<script>
import Crypto from "$lib/deposit/Crypto.svelte";
import Fiat from "$lib/deposit/fiat.svelte";


let is_active = false
const handleTabs = (()=>{
    is_active =! is_active
})

</script>

<div class="right-info">
    <div class="ui-tabs tabs-line">
        <div class="tabs-navs">
            <button on:click={handleTabs} class={`tabs-nav ${!is_active ? "is-active" : "" } `}>Crypto</button>
            <button on:click={handleTabs} class={`tabs-nav ${is_active ? "is-active" : "" } `}>Fiat</button>
        </div>
        {#if !is_active}
            <Crypto />
            {:else}
            <Fiat />
        {/if}
    </div> 
</div>

<style>
.right-info {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 0.25rem;
    background-color: #31343c;
    border-radius: var(--border-radius);
    padding: 1.5rem 2rem 2rem;
}
.tabs-navs {
    border-bottom: 1px solid #3C404A;
    margin-bottom: 1rem;
}
.tabs-line .tabs-navs {
    height: 2.25rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.tabs-navs .is-active {
    color: #fff;
    font-weight: 600;
}
.tabs-line .tabs-nav.is-active {
    color: #f5f6f7;
    background-image: linear-gradient(to top,rgba(59,193,23,.15),rgba(59,193,23,0) 60%);
}
.ui-tabs .tabs-nav {
    min-width: 12.5rem;
}
.tabs-line .tabs-nav {
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: 100%;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    padding: 0 1.875rem;
    cursor: pointer;
}
.tabs-line .tabs-nav.is-active:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.125rem;
    background-color: var(--primary-color);
}
.limit-width {
    max-width: 500px;
}
.swm8knq {
    margin-top: 1rem;
}

</style>