<script>
     /** @type {import('./$types').PageLoad} */
     export let data;

   $: data.route
  import "../../styles/settings/index.css"
  
</script>

<div class="sc-cAhXWc cMCBIc setting-wrap">
   <div class="sc-bXTejn dxlfST">
      <p class="title">
         <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
            <use xlink:href="#icon_Setting"></use>
         </svg>
         <span>Global Settings</span>
      </p>
      <button class="sc-ieecCq fLASqZ close-icon ">
         <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
            <use xlink:href="#icon_Close"></use>
         </svg>
      </button>
   </div>
   <div class="sc-GEbAx hJFGXE pc">
      <div class="content-area">
         <div class="menue">
            <a class={ data.route === "/setting/general" ? "select": ""} href="/setting/general">
               General
            </a>
            <a class={ data.route === "/setting/privacy" ? "select": ""} href="/setting/privacy">Privacy</a>
            <a class={ data.route === "/setting/security" ? "select": ""} href="/setting/security">Security</a>
            <a class={ data.route === "/setting/session" ? "select": ""} href="/setting/session">Active Sessions</a>
            <a class={ data.route === "/setting/verify" ? "select": ""} href="/setting/verify">Verify</a>
         </div>
         <div class="right-info">
            <div style="transform: translate3d(0px, 0px, 0px); opacity: 1;">
               <slot></slot>
            </div>
         </div>
      </div>
   </div>
</div>

<style>
.cMCBIc {
    width: 100%;
    min-height: 70vh;
}
.dxlfST {
    width: 96%;
    margin: 0px auto 0.75rem;
    max-width: 85.5rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-top: 1.5rem;
    position: relative;
}
.dxlfST .title {
    font-size: 1rem;
    margin: 0px;
    color: rgb(245, 246, 247);
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
}
.dxlfST .title span {
    margin-left: 0.75rem;
}
.dxlfST .close-icon {
    right: 0px;
    top: 0.25rem;
}
.fLASqZ {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 11;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 3.75rem;
    height: 3.75rem;
}
.fLASqZ svg {
    transition: transform 0.5s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    cursor: pointer;
    font-size: 0.75rem;
}
.hJFGXE {
    width: 96%;
    margin: 0px auto;
    max-width: 85.5rem;
    min-height: 60vh;
}
.hJFGXE .content-area {
    width: 100%;
    display: flex;
}
.hJFGXE .content-area .menue {
    flex: 1 1 0%;
    padding: 1rem;
    background-color: rgb(49, 52, 60);
    border-radius: 1.25rem;
    max-width: 15rem;
    min-width: 10rem;
    min-height: 15.25rem;
    height: auto;
    align-self: flex-start;
}
.hJFGXE .content-area .menue > a {
    display: block;
    height: 2.25rem;
    border-radius: 1.125rem;
    padding-left: 1rem;
    line-height: 2.25rem;
    text-decoration: none;
    margin-bottom: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(153, 164, 176, 0.8);
}
.hJFGXE .content-area .menue > a.select {
    background-color: rgba(30, 32, 36, 0.4);
    font-weight: bold;
    color: rgb(245, 246, 247);
}
.hJFGXE .content-area .right-info {
    flex: 5 1 0%;
    margin-left: 0.25rem;
    background-color: rgb(49, 52, 60);
    border-radius: 1.25rem;
    min-height: 47.5rem;
    padding: 1.5rem 1.875rem;
}
.hJFGXE .content-area .right-info > div {
    height: 100%;
}

</style>