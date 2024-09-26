<script>
  import { vipProfiile } from "../vipstore";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const cardInfo = {
    1: {
      title: "Bronze Card",
      subtitle: "Smart Player",
      description: `New victors emerge from here. Go ahead with your luck!`,
    },
    2: {
      title: "Silver Card",
      subtitle: "Victories Warrior",
      description: `Brilliant people always have a heart to conquer the world!`,
    },
    3: {
      title: "Golden Card",
      subtitle: "Sagacious Prophet",
      description: `Needless to say too much, you understand that every step is correct. Not far from the highest honor!`,
    },
    4: {
      title: "Platinum Card",
      subtitle: "Billion Elite",
      description: `On the battlefield You are a general in golden armor. In the casino, you dominate!`,
    },
    5: {
      title: "Diamond Card",
      subtitle: "Invincible Cahllenger",
      description: `This is the highest honor! However, there is no highest honor, only higher. You are the Prestigious king of DPP!`,
    },
  };
  $: userRank =
    (($vipProfiile.vip_level || 1) <= 4
      ? 1
      : $vipProfiile.vip_level <= 8
        ? 2
        : $vipProfiile.vip_level <= 22
          ? 3
          : $vipProfiile.vip_level <= 38
            ? 4
            : 5) || 1;
  $: selectedCard = userRank;

  const handleCancel = () => {
    dispatch("close", 5);
  };
  const getItemClasses = (index, selected) => {
    const positions = [
      "select",
      "one right",
      "two right",
      "two left",
      "one left",
    ];
    const offset = (selected - 1) % 5;
    return positions[(index - offset + 4) % 5];
  };
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
  <div class="sc-dlVxhl gvBCkE" style="transform: scale(1); opacity: 1;">
    <div class="sc-iJCbQK bXHpfl">
      <div class="title">About VIP Cards</div>
      <button on:click={handleCancel} class="sc-ieecCq fLASqZ close-icon">

      </button>
      <div class="cards">
        <div class="sc-fSDTwv uxCLk">
          <div class="mask"></div>
          <div class="sc-hKumaY cDVLDa carousel-card">
            <div class="item-wrap {getItemClasses(1, selectedCard)}">
              <div class="item">
                <div class="wrap">
                  <img
                    alt="vip-card"
                    src="https://static.nanogames.io/assets/1.0755d9fe.png"
                  />
                  <div class="bor" style="border-color: transparent;"></div>
                  <p class="">0</p>
                </div>
              </div>
            </div>
            <div class="item-wrap {getItemClasses(2, selectedCard)}">
              <div class="item">
                <div class="wrap">
                  <img
                    alt="vip-card"
                    src="https://static.nanogames.io/assets/2.0c56901e.png"
                  />
                  <div
                    class="bor"
                    style="border-color: rgb(232, 218, 255);"
                  ></div>
                  <p class="">8</p>
                </div>
              </div>
            </div>
            <div class="item-wrap {getItemClasses(3, selectedCard)}">
              <div class="item">
                <div class="wrap">
                  <img
                    alt="vip-card"
                    src="https://static.nanogames.io/assets/3.6df0fd1c.png"
                  />
                  <div class="bor" style="border-color: transparent;"></div>
                  <p class="">22</p>
                </div>
              </div>
            </div>
            <div class="item-wrap {getItemClasses(4, selectedCard)}">
              <div class="item">
                <div class="wrap">
                  <img
                    alt="vip-card"
                    src="https://static.nanogames.io/assets/4.1c882976.png"
                  />
                  <div class="bor" style="border-color: transparent;"></div>
                  <p class="">38</p>
                </div>
              </div>
            </div>
            <div class="item-wrap {getItemClasses(5, selectedCard)}">
              <div class="item">
                <div class="wrap">
                  <img
                    alt="vip-card"
                    src="https://static.nanogames.io/assets/5.2859dbcc.png"
                  />
                  <div class="bor" style="border-color: transparent;"></div>
                  <p class="last">1</p>
                </div>
              </div>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              on:click={() => {
                selectedCard = selectedCard === 1 ? 5 : (selectedCard - 1) % 5;
              }}
              class="left next"
            >
              <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
              >
                <use xlink:href="#icon_Arrow"></use>
              </svg>
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
              on:click={() => {
                selectedCard = selectedCard === 4 ? 5 : (selectedCard + 1) % 5;
              }}
              class="right next"
            >
              <svg
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon"
              >
                <use xlink:href="#icon_Arrow"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <p class="word-one">
        {`${userRank === selectedCard ? "You are " : ""}${
          cardInfo[selectedCard].title
        }${userRank === selectedCard ? " VIP Now" : ""}`}
      </p>
      <p class="word-two">
        {cardInfo[selectedCard].subtitle}<br />{cardInfo[selectedCard]
          .description}
      </p>
    </div>
  </div>
</div>

<style>
  .kBjSXI {
    position: fixed;
    z-index: 1000;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    filter: none !important;
  }
  .gvBCkE {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0px;
    height: 0px;
  }
  .gvBCkE > div {
    transform: translate(-50%, -50%);
  }
  @media screen and (max-width: 621px) {
    .gvBCkE {
      width: 100% !important;
    }
    .bXHpfl {
      width: 98% !important;
      height: 28rem !important;
    }
    .item-wrap.one.right {
      transform: translate3d(34px, 0px, 0px) scale3d(0.89, 0.89, 1)!important;
    }
    .item-wrap.two.right {
      transform: translate3d(68px, 0px, 0px) scale3d(0.78, 0.78, 1)!important;
    }
    .item-wrap.one.left {
      transform: translate3d(-34px, 0px, 0px) scale3d(0.89, 0.89, 1)!important;
    }
    .item-wrap.select {
      transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
    }
    .item-wrap.two.left {
      transform: translate3d(-68px, 0px, 0px) scale3d(0.78, 0.78, 1)!important;
    }
  }
  .bXHpfl {
    position: relative;
    width: 29rem;
    height: 30rem;
    border-radius: 1.25rem;
    background: var(--card-bg-5);
    padding: 1.5rem 0px;
  }
  .bXHpfl .title {
    line-height: 1.25rem;
    font-size: 1rem;
    font-weight: bold;
    color: rgb(241, 242, 243);
    padding-left: 1.125rem;
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
  .bXHpfl .cards {
    margin: 2.5rem 0.375rem 0px;
    background: rgb(27, 28, 32);
    border-radius: 12px;
  }
  .uxCLk {
    position: relative;
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;
  }
  .uxCLk .mask {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    z-index: 10;
    pointer-events: none;
    border-radius: 12px;
  }
  .cDVLDa {
    position: relative;
    width: 18.75rem;
    height: 11.125rem;
    margin: 0px auto;
  }
  .cDVLDa .item-wrap.select {
    cursor: auto;
    z-index: 20;
  }
  .cDVLDa .item-wrap {
    position: absolute;
    top: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease 0s;
    cursor: pointer;
  }
  .uxCLk .item {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .uxCLk .item .wrap {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    font-size: 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
    border-radius: 12px;
    overflow: hidden;
  }
  .uxCLk .item .wrap img {
    width: auto;
    margin: -2px;
    pointer-events: none;
  }
  .cDVLDa .item-wrap img {
    height: 10.875rem;
  }
  .uxCLk .item .wrap .bor {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  .uxCLk .item .wrap p {
    margin: 0px;
    position: absolute;
    color: var(--text-5);
    font-size: 1.625rem;
    font-weight: bold;
    top: 3.625rem;
    width: 3rem;
    text-align: center;
    right: 2rem;
    line-height: 1.5rem;
  }
  .cDVLDa .item-wrap.two {
    z-index: 0;
  }
  .cDVLDa .item-wrap {
    position: absolute;
    top: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease 0s;
    cursor: pointer;
  }
  .uxCLk .item {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .cDVLDa .item-wrap.right {
    -webkit-box-pack: end;
    justify-content: flex-end;
  }
  .item-wrap.one.right {
    transform: translate3d(51px, 0px, 0px) scale3d(0.89, 0.89, 1);
  }
  .item-wrap.two.right {
    transform: translate3d(102px, 0px, 0px) scale3d(0.78, 0.78, 1);
  }
  .item-wrap.one.left {
    transform: translate3d(-51px, 0px, 0px) scale3d(0.89, 0.89, 1);
  }
  .item-wrap.select {
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
  }
  .item-wrap.two.left {
    transform: translate3d(-102px, 0px, 0px) scale3d(0.78, 0.78, 1);
  }
  .cDVLDa .item-wrap.one {
    z-index: 4;
  }
  .bXHpfl .word-one {
    margin: 1.875rem 0px 0px;
    line-height: 1.5rem;
    color: rgb(241, 242, 243);
    text-align: center;
  }
  .bXHpfl .word-two {
    margin: 0.875rem 0px 0px;
    line-height: 1.125rem;
    color: rgb(241, 242, 243);
    text-align: center;
    padding: 0px 1.5rem;
    opacity: 0.8;
  }
  @media screen and (max-width: 621px) {
    .cDVLDa .next.left {
      left: -16% !important;
    }
    .cDVLDa .next.right {
      right: -16% !important;
    }
    .cDVLDa .next svg {
      fill: rgb(245, 246, 247);
    }
  }
  .cDVLDa .next.left svg {
    transform: rotate(-180deg);
    margin-right: 0.125rem;
  }
  .cDVLDa .next svg {
    font-size: 0.625rem;
    fill: rgb(86, 91, 102);
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .cDVLDa .next.left {
    left: -25%;
  }
  .cDVLDa .next.right {
    right: -25%;
  }
  @media screen and (max-width: 621px) {
    .cDVLDa .next {
      background: rgb(45, 48, 53);
      border-color: rgba(245, 246, 247, 0.85);
    }
  }

  .cDVLDa .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    z-index: 25;
    background: rgb(45, 48, 53);
    opacity: 0.6;
    border: 2px solid rgb(86, 91, 102);
    cursor: pointer;
    user-select: none;
  }
</style>
