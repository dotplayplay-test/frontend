<script>
  import HiSolidSearch from "svelte-icons-pack/hi/HiSolidSearch";
  import MainNavbar from "../lib/navbarcomponent/main/index.svelte";
  import { handleAuthToken } from "$lib/store/routes";
  import { goto } from "$app/navigation";
  import "../styles/navbar/mobileNavbar.css";
  import "../styles/navbar/navbar.css";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import HiSolidMenu from "svelte-icons-pack/hi/HiSolidMenu";
  export let styles;
  export let chatroom;
  import { browser } from "$app/environment";
  import { current_route, routes } from "./store/routes";
  import { handleisLoggin, handleisLoading } from "$lib/store/profile";
  import { createEventDispatcher, onMount } from "svelte";
  import Statistic from "./statistics/main/statistic.svelte";
  import { statisticsEl } from "$lib/store/statistic";
  import Login from "./nestedpages/auth/login/login.svelte";
  import Signup from "./nestedpages/auth/signup/signup.svelte";
  import Info from "./nestedpages/auth/info/info.svelte";
  import { handleNestedRoute } from "$lib/store/nested_routes";
  import BsDroplet from "svelte-icons-pack/bs/BsDroplet";
  import { isLightMode } from "../lib/store/theme";
  $: browser && localStorage.setItem("preload", JSON.stringify("is_active"));
  const dispatch = createEventDispatcher();
  const handleChat = (e) => {
    dispatch("handleChatRoom", e);
  };
  const handleMenu = () => {
    dispatch("handleMenuMobile");
  };

  const handleStatistic = () => {
    statisticsEl.set(true);
  };

  let login_info = false;
  let currentPath;
  $: {
    currentPath = browser && window.location.pathname;
    if (currentPath === "/login") {
      is_login = true;
    } else if (currentPath === "/login/regist") {
      is_reg = true;
    } else if (currentPath === "/login/info") {
      login_info = true;
      is_reg = false;
      browser && window.history.replaceState(null, "info", "/login/info");
    }
  }

  let is_login = false;
  const handleLogin = () => {
    const currentPath = browser && window.location.pathname;
    if (currentPath === "/login") {
      browser && window.history.replaceState(null, "", $routes.route);
      handleNestedRoute.set("");
    } else {
      current_route.set(currentPath);
      handleNestedRoute.set("/login");
      is_login = true;
      browser && window.history.replaceState(null, "login", "/login");
    }
  };

  let is_reg = false;
  const handleRegister = () => {
    const currentPath = browser && window.location.pathname;
    if (currentPath === "/login/regist") {
      window.history.replaceState(null, "", $routes.route);
      handleNestedRoute.set("");
    } else {
      current_route.set(currentPath);
      handleNestedRoute.set("'/login/regist'");
      is_reg = true;
      window.history.replaceState(null, "register", "/login/regist");
    }
  };

  let uyi;
  $: {
    uyi = browser && window.navigator.onLine;
  }

  let waitaibit = false;
  setTimeout(() => {
    waitaibit = true;
  }, 2000);
</script>

<!-- {#if ($handleNestedRoute === "/login" || browser && window.location.pathname === "/login")}
         <Login on:close={handleLogin} />
    {/if}

    {#if $handleNestedRoute === "/login/regist" || browser && window.location.pathname === "/login/regist"}
        <Signup on:close={handleRegister}/>
    {/if}

    {#if  $handleNestedRoute === "/login/info" || browser && window.location.pathname === "/login/info"  }
        <Info />
    {/if} -->
<!-- 
{#if !uyi}
    <div class="reconnecting">
        <div class="riuwx">
            <p>Connection lost, Reconnecting...</p>
        </div>
    </div>
{/if} -->

<div
  id="main"
  class={$isLightMode
    ? "light-bg light-text sc-gVkuDy gAvMHL"
    : "sc-gVkuDy gAvMHL"}
  style={` margin-right: ${chatroom}px; `}
>
  {#if $statisticsEl}
    <Statistic on:close={handleStatistic} />
  {/if}
  <div class="header-wrap">
    <div class="header">
      <div class="sc-hGnimi ftyLxH left">
        <div class="sc-iukxot jivBdD logo-pc">
          {#if styles}
            <img
              alt="logo"
              class="logo-com"
              src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848521/dpp-logowhite_lbifm7.png"
            />
          {:else}
            <img
              style="border-radius: 12px;"
              class="coin-icon"
              alt=""
              src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848286/dpp-favicon-logo_j53rwc.jpg"
            />
          {/if}
        </div>
      </div>
      {#if waitaibit}
        {#if $handleAuthToken}
          <MainNavbar on:handleChatRoom={handleChat} />
        {:else}
          <div class="login-in">
            <button on:click={() => goto("/login")}>
              <p>Sign in</p>
            </button>
            <button
              on:click={() => goto("/register")}
              class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
            >
              <div class="button-inner">Sign up</div>
            </button>
            <button on:click={handleChat} id="chat" class="sc-eicpiI PGOpB">
              <div class="chat-btn">
                <Icon
                  src={BsDroplet}
                  size="18"
                  color={$isLightMode ? "#000" : "#fff"}
                  className="custom-icon"
                  title="arror"
                />
                <div class="sc-fotOHu gGSOuF badge">26</div>
              </div>
            </button>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>

<!-- ============================================ Mobile view =========================================== -->
<div class="mobile">
  <div
    class={$isLightMode
      ? "light-bg light-text sc-hJhJFJ jVgBRe"
      : "sc-hJhJFJ jVgBRe"}
    style="transform: translate3d(0px, 0%, 0px);"
  >
    {#if !$handleisLoading}
      <div class="login-top">
        <a href="/">
          <div class="logowrap">
            <img
              alt="logo"
              style="border-radius: 12px; width: 25px; margin-right:10px"
              src="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848286/dpp-favicon-logo_j53rwc.jpg"
            />
          </div>
        </a>
        <button on:click={handleMenu} class="sc-bQtKYq cUTdQJ">
          <span class="open-wrap">
            <Icon
              src={HiSolidMenu}
              size="15"
              color="rgb(67, 179, 9)"
              className="custom-icon"
              title="arror"
            />
          </span>
        </button>
        {#if $handleisLoggin}
          <MainNavbar on:handleChatRoom={handleChat} />
        {:else}
          <div class="header-login">
            <button on:click={() => goto("/login")}>
              <p>Sign in</p>
            </button>
            <button
              on:click={() => goto("/register")}
              class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
            >
              <div class="button-inner">Sign up</div>
            </button>
          </div>
        {/if}
      </div>

      <div class="bottom">
        <div class="left"></div>
        <div class="right">
          <button
            on:click={handleChat}
            id="chat"
            class="sc-eicpiI PGOpB chat-btn"
          >
            <Icon
              src={BsDroplet}
              size="28"
              color="#fff"
              className="custom-icon"
              title="arror"
            />
            <div class="sc-fotOHu gGSOuF badge">99</div>
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .light-bg {
    background-color: rgb(255, 255, 255) !important;
  }
  .light-text {
    color: rgb(49, 55, 61) !important;
  }
  .gAvMHL {
    height: 4rem;
    position: fixed;
    z-index: 201;
    left: 0px;
    top: 0px;
    right: 0px;
    background-color: var(--card-bg-12);
    transition: all 0.2s linear 0s;
  }
  .gAvMHL .header-wrap {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .gAvMHL .header {
    transition: all 0.5s ease 0s;
    padding:0.5rem 0.75rem;
    margin: 0px auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 100%;
  }
  @media only screen and (max-width: 650px) {
    .jVgBRe .login-top {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 5rem;
      padding: 0px 0.75rem;
      position: relative;
    }
    .jVgBRe .login-top .logo-wrap img {
      width: 2rem;
    }
    .jVgBRe .login-top .logowrap {
      margin-top: 0.25rem;
      margin-right: 2px;
      position: relative;
    }
    .jVgBRe .login-top .header-login .fnKcEH.button {
      width: 6.95rem;
      height: 3rem;
    }
    .jVgBRe .login-top .header-login button p {
      width: 6.25rem;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      font-size: 15px;
      font-weight: bold;
    }
    .cUTdQJ .open-wrap {
      width: 1.6rem;
      height: 1.6rem;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      background: rgba(23, 22, 22, 0.52);
      border-radius: 50%;
    }
  }

  /* .reconnecting{
    position: fixed;
    right: 0;
    display: flex;
    background: rgba(91, 91, 91, 0.176);
    z-index: 14689066;
    width: 100%;
    height: 100%;
}
.reconnecting .riuwx{
    background-color: var(--background-color);
    width: 300px;
    position: absolute;
    top: 30%;
    left: 40%;
    height: 40px;
    border-radius: 12px;
    text-align: center;
    padding: 10px;
    color: aliceblue;
} */

  /* .elBGFt.big-enter {
    -webkit-box-pack: end;
    justify-content: flex-end;
}

.elBGFt {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    margin-left: 6px;
} */
</style>
