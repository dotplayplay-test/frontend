<script>
    import Navbar from "$lib/navbar.svelte";
    import SideBar from "$lib/sideBar.svelte";
    import Footer from "$lib/footer.svelte";
    import Menubar from "$lib/mobile/menu/menubar.svelte";
    import { browser } from '$app/environment'
    let isOpenSide = true
    import { onMount } from "svelte";

    onMount(()=>{
        if(browser && window.innerWidth > 1000){
            isOpenSide = true
        }else{
            isOpenSide = false
        }
    })


    let ens = browser && window.innerWidth - 240
    browser &&  addEventListener("resize", ()=>{
        ens = (window.innerWidth - 240 )
    })


    let isMenu = false

    const handleMenu = ()=>{
        if(isMenu){
            isMenu = false
        }else{
            isMenu = true
        }
    }
</script>

<div class="app">
    <div id="side-bar" style={`width:${isOpenSide ? 240 : 76}px`}>
        <SideBar />
    </div>

    <div id="menu">
        <button class="menu">
            <img src='https://www.linkpicture.com/q/menu_2.svg' alt="" />
          </button>
    </div>

    <!-- ======================  mobile menu bar ================= -->
    {#if (isMenu)}
        <div class="menubar">
            <Menubar  on:menu={handleMenu}   />
        </div>
    {/if}

    <div id="right-bar" style={`width: ${ens}px;`} >
        <header>
            <Navbar on:menu={handleMenu} />
        </header>
        <main>
            <slot></slot>
        </main>
    
        <footer>
            <Footer />
        </footer>
    </div>
</div>

<style>


    @media only screen and (max-width: 1400px) and (min-width: 1290px){
    #side-bar{
        width: 30.5%;
    }
  }
</style>