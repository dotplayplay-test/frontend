<script>
    import Loader from "$lib/components/loader.svelte";
    import { UseFetchData } from "$lib/hook/useFetchData";
    import { handleAuthToken } from "$lib/store/routes";
    import { error_msg } from "../../store";
    import { createEventDispatcher, onMount } from "svelte";
    export let fromDetail = false;
    $: gameSeeds = null;
    $: loading = false;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    function generateString(length) {
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    
    $: isFocused = false;
    $: clientSeeds = generateString(10);
    const dispatch = createEventDispatcher();
    const handleRandomSeed = () => {
      if (loading) return;
      clientSeeds = generateString(10);
    };
  
    const handleUpdateSeeds = async () => {
      if (!clientSeeds || clientSeeds.length < 10) {
        error_msg.set("client seed must have at least 10 characters");
        return;
      }
      try {
        loading = true;
        const {error} = await UseFetchData($handleAuthToken).fetch(
          `/user/plinko-game/update-seeds`,
          { client_seed: clientSeeds },
          "POST"
        );
        if (error) {
          throw new Error(error.response?.data?.message || error.message)
        } else {
          error_msg.set("Seeds Updated!")
        }
        dispatch("close", fromDetail);
      } catch (error) {
        error_msg.set(error.message);
      } finally {
        loading = false;
      }
    };
  
    onMount(async () => {
      try {
        const { data } =
          await UseFetchData($handleAuthToken).fetch(`/user/plinko-game/seeds`);
        gameSeeds = data.seedHistory;
      } catch (error) {
        error_msg.set(error.message);
      }
    });
  </script>
  
  {#if !!gameSeeds}
    <div class="sc-dkPtRN jScFby scroll-view sc-hxaKAp iGYNgq dialog-box">
      <div class="warn">
        You may use this function to set a new server seed + a new client seed,
        they can be randomly generated or customized (at least 10 characters), and
        the number of bets will be reset to zero.
      </div>
      <div class="detailForm">
        <div class="title">Current seeds</div>
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-label">Server Seed (hash)</div>
          <div class="input-control">
            <input type="text" readonly value={gameSeeds.serverSeedHash} />
          </div>
        </div>
        <div class="formFlex">
          <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Client Seed</div>
            <div class="input-control">
              <input type="text" readonly value={gameSeeds.clientSeed} />
            </div>
          </div>
          <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Nonce</div>
            <div class="input-control">
              <input type="text" readonly value={gameSeeds.maxNonce} />
            </div>
          </div>
        </div>
      </div>
      <div class="devide"></div>
      <div class="detailForm">
        <div class="title">New seeds</div>
        <div class="sc-ezbkAF kDuLvp input">
          <div class="input-label">Server Seed (hash)</div>
          <div class="input-control">
            <input
              type="text"
              placeholder="The seed hasn't been revealed yet"
              readonly
              value={gameSeeds.nxt_hash}
            />
          </div>
        </div>
        <div class="formFlex">
          <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Client Seed</div>
            <div class="input-control {isFocused ? 'is-focus' : ''}">
              <input
                on:blur={() => (isFocused = false)}
                on:focus={() => (isFocused = true)}
                type="text"
                readonly={loading}
                disabled={loading}
                on:change={(e) => (clientSeeds = e.currentTarget.value)}
                value={clientSeeds}
              />
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <svg
                on:click={handleRandomSeed}
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="sc-gsDKAQ hxODWG icon rotate-icon"
                ><use xlink:href="#icon_Refresh"></use></svg
              >
            </div>
          </div>
          <div class="sc-ezbkAF kDuLvp input">
            <div class="input-label">Nonce</div>
            <div class="input-control">
              <input type="text" readonly value="0" />
            </div>
          </div>
        </div>
      </div>
      <div class="submit">
        <button
          disabled={!clientSeeds || clientSeeds.length < 10 || loading}
          on:click={handleUpdateSeeds}
          class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
          ><div class="button-inner">
            {#if loading}
              <Loader />
            {:else}
              Use New Seeds
            {/if}
          </div></button
        >
      </div>
    </div>
  {:else}
    <div style="height: 500px;">
      <Loader />
    </div>
  {/if}
  
  <style>
    .dialog-box {
      color: rgba(153, 164, 176, 0.6);
      background-color: rgb(30, 32, 36);
      border-top-left-radius: 2.5rem;
      border-top-right-radius: 2.5rem;
      padding: 1.75rem 1.125rem;
    }
    .jScFby {
      box-sizing: border-box;
      height: 100%;
      overflow-y: auto;
      touch-action: pan-y;
      overscroll-behavior: contain;
    }
    .iGYNgq .warn {
      border: 1px solid rgb(67, 179, 9);
      background: rgba(93, 160, 0, 0.1);
      border-radius: 0.625rem;
      color: rgb(67, 179, 9);
      padding: 0.75rem 1.25rem;
      margin-top: 0.5rem;
      font-size: 0.75rem;
    }
    .iGYNgq .detailForm {
      margin-top: 1.375rem;
    }
    .iGYNgq .detailForm .title {
      color: rgb(245, 246, 247);
      line-height: 1;
      font-weight: bold;
    }
    .iGYNgq .detailForm .input {
      margin-top: 0.75rem;
    }
    .kDuLvp {
      margin-top: 1rem;
    }
    .iGYNgq .detailForm .input-label {
      margin: 0px 0px 0.25rem 0.75rem;
      color: rgba(153, 164, 176, 0.6);
    }
    .kDuLvp .input-label {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      line-height: 1em;
      height: 1.25rem;
      margin: 0px 0.75rem 0.375rem;
      color: rgba(153, 164, 176, 0.6);
    }
    .kDuLvp .input-control.is-focus {
      border-color: rgb(67, 179, 9);
    }
    .kDuLvp .input-control {
      position: relative;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      border-radius: 1.25rem;
      border: 1px solid rgb(45, 48, 53);
      background-color: rgba(45, 48, 53, 0.5);
      height: 3.5rem;
      padding: 0px 1.25rem;
      opacity: 1;
    }
    .iGYNgq .detailForm .input .input-control input[readonly] {
      opacity: 1;
    }
  
    .iGYNgq .detailForm .input .input-control input {
      color: rgb(245, 246, 247);
    }
    .kDuLvp .input-control input[readonly] {
      opacity: 0.5;
    }
    .kDuLvp .input-control input {
      flex: 1 1 0%;
      width: 100%;
      height: 100%;
      min-width: 1rem;
      padding: 0px;
      border: none;
      background-color: transparent;
      color: rgb(245, 246, 247);
    }
    .iGYNgq .detailForm .formFlex {
      display: flex;
      margin-bottom: 1.25rem;
    }
    .iGYNgq .detailForm .formFlex > div:first-child {
      flex: 6 1 0%;
      margin-right: 10px;
    }
    .iGYNgq .detailForm .formFlex > div:last-child {
      flex: 4 1 0%;
    }
    .iGYNgq .detailForm .input {
      margin-top: 0.75rem;
    }
    .kDuLvp {
      margin-top: 1rem;
    }
    .iGYNgq .detailForm .input-label {
      margin: 0px 0px 0.25rem 0.75rem;
      color: rgba(153, 164, 176, 0.6);
    }
    .iGYNgq .devide {
      width: 100%;
      border-bottom: 1px solid rgb(39, 43, 48);
      margin: 1.875rem 0px;
    }
    .iGYNgq .detailForm .formFlex .rotate-icon {
      margin-right: -0.5rem;
      margin-left: 0.5rem;
      cursor: pointer;
    }
    .hxODWG {
      width: 1.4em;
      height: 1.4em;
      fill: rgba(153, 164, 176, 0.6);
    }
    .iGYNgq .submit {
      margin: 1.25rem 0px 3.75rem;
      padding: 0px 3.125rem;
    }
    .fnKcEH.button {
      color: rgb(245, 246, 247);
      box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
      background-color: rgb(67, 179, 9);
      background-image: conic-gradient(
        from 1turn,
        rgb(67, 179, 9),
        rgb(93, 219, 28)
      );
    }
    .cBmlor {
      display: block;
      width: 100%;
      border-radius: 6.25rem;
      height: 3rem;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s cubic-bezier(0.36, 0.66, 0.04, 1) 0s;
    }
    .cBmlor > .button-inner {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  </style>
  