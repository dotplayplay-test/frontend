<script>
  import { crashGameType } from "./store";
  const changeGameType = (type) => {
    return (e) => {
        crashGameType.set(type)
    }
  }
</script>

<div class="sc-hKumaY FHHZH">
  <div class="sc-cxpSdN kQfmQV tabs">
    <div class="tabs-navs">
      <button on:click={changeGameType(1)} class="tabs-nav {$crashGameType === 1 ? 'is-active' : ''}"
        >Classic</button
      ><button on:click={changeGameType(2)} class="tabs-nav {$crashGameType === 2 ? 'is-active' : ''}"
        >Trenball</button
      >
      <div
        class="bg"
        style="left: {$crashGameType === 1
          ? '0'
          : '50'}%; right: {$crashGameType === 1 ? '50' : '0'}%;"
      ></div>
    </div>
  </div>
</div>

<style>
  .FHHZH {
    margin: 0px 0.625rem 0.75rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .FHHZH .tabs {
    display: inline-flex;
    margin-right: auto;
  }
  .kQfmQV .tabs-navs {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.25rem;
    position: relative;
    border-radius: 1.125rem;
    background-color: rgba(49, 52, 60, 0.7);
  }
  .kQfmQV .tabs-nav.is-active {
    color: rgb(245, 246, 247);
    font-weight: bold;
  }

  .kQfmQV button.tabs-nav {
    width: 5.625rem;
  }


  .kQfmQV .tabs-nav {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex: 1 1 0%;
    height: 100%;
    cursor: pointer;
    white-space: nowrap;
    width: 100%;
    z-index: 1;
  }
  .kQfmQV .tabs-navs .bg {
    border-radius: 1.125rem;
    background-image: linear-gradient(
      to left,
      rgb(85, 89, 102),
      rgb(85, 89, 102),
      rgb(88, 174, 20)
    );
    opacity: 0.4;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    transition:
      right 0.2s ease-out 0s,
      left 0.3s ease-out 0s;
    transform: translateZ(0px);
    box-shadow: rgba(0, 0, 0, 0.14) 0px 0px 0.3125rem;
  }
</style>
