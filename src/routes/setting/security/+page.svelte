<script>
  import { onMount } from "svelte";
  import { handleAuthToken } from "$lib/store/routes";
  import RiSystemErrorWarningLine from "svelte-icons-pack/ri/RiSystemErrorWarningLine";
  import RiSystemEyeCloseLine from "svelte-icons-pack/ri/RiSystemEyeCloseLine";
  import AiFillEye from "svelte-icons-pack/ai/AiFillEye";
  import BiSolidCopy from "svelte-icons-pack/bi/BiSolidCopy";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import { isLightMode } from "../../../lib/store/theme";
  import { Endpoints } from "../../../lib/services/endPoints";
  let showOldPassword = false;
  let showNewPassword = false;
  let showConfirmPassword = false;
  let showLoginPassword = false;
  let oldPassword = "";
  let newPassword = "";
  let confirmNewPassword = "";
  let errorMessage = "";
  let responseData = null;
  let error = null;
  
  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/2fa", {     headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${handleAuthToken}`
            },});
      console.log("response", response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      responseData = await response.json();
    } catch (e) {
      error = e.message;
    }
  });

  console.log(JSON.stringify(responseData, null, 2));
  function toggleOldPasswordVisibility() {
    showOldPassword = !showOldPassword;
  }
  function toggleNewPasswordVisibility() {
    showNewPassword = !showNewPassword;
  }
  function toggleConfirmPasswordVisibility() {
    showConfirmPassword = !showConfirmPassword;
  }
  function toggleLoginPasswordVisibility() {
    showLoginPassword = !showLoginPassword;
  }

  const saveChanges = async () => {
    // Perform PUT request to update password
    console.log("oldPassword", oldPassword);
    console.log("handleAuthToken", handleAuthToken);
    console.log("Endpoint", Endpoints.Settings.ChangePassword);
    try {
      const response = await fetch(Endpoints.Settings.ChangePassword, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${handleAuthToken}`,
        },
        body: JSON.stringify({
          oldPassword,
          newPassword,
          confirmNewPassword,
        }),
      });

      if (response.ok) {
        errorMessage = "";
      } else {
        const errorData = await response.json();
        errorMessage = errorData.message;
      }
    } catch (error) {
      console.error("Error:", error);
      errorMessage = "An error occurred while processing your request.";
    }
  };
</script>

{#if !$handleAuthToken}
  <div
    class={$isLightMode ? "light-text sc-dXNJws iQcnrl" : "sc-dXNJws iQcnrl"}
  >
    <div class="wrap">
      <div class="box">
        <p class={$isLightMode ? "light-text" : ""}>Change Password</p>
        <div class="sc-czvZiG kLBRjb">
          <div class="sc-ezbkAF gcQjQT input sc-bYoBSM ixxYMF">
            <div
              class={$isLightMode
                ? "light-input-label input-label"
                : "input-label"}
            >
              Old password
            </div>
            <div
              class={$isLightMode
                ? "light-input-control input-control"
                : "input-control"}
            >
              {#if showOldPassword}
                <input
                  type="text"
                  autocomplete="off"
                  bind:value={oldPassword}
                />
              {:else}
                <input
                  type="password"
                  autocomplete="off"
                  bind:value={oldPassword}
                />{/if}
              <button
                class="toggle-password"
                on:click={toggleOldPasswordVisibility}
              >
                {#if showOldPassword}
                  <Icon
                    src={RiSystemEyeCloseLine}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {:else}
                  <Icon
                    src={AiFillEye}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {/if}
              </button>
            </div>
          </div>
          <div class="sc-ezbkAF gcQjQT input sc-bYoBSM ixxYMF">
            <div
              class={$isLightMode
                ? "light-input-label input-label"
                : "input-label"}
            >
              New password
            </div>
            <div
              class={$isLightMode
                ? "light-input-control input-control"
                : "input-control"}
            >
              {#if showNewPassword}
                <input
                  type="text"
                  autocomplete="off"
                  bind:value={newPassword}
                />
              {:else}
                <input
                  type="password"
                  autocomplete="off"
                  bind:value={newPassword}
                />{/if}
              <button
                class="toggle-password"
                on:click={toggleNewPasswordVisibility}
              >
                {#if showNewPassword}
                  <Icon
                    src={RiSystemEyeCloseLine}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {:else}
                  <Icon
                    src={AiFillEye}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {/if}
              </button>
            </div>
          </div>
          <div class="sc-ezbkAF gcQjQT input sc-bYoBSM ixxYMF">
            <div
              class={$isLightMode
                ? "light-input-label input-label"
                : "input-label"}
            >
              Confirm new password
            </div>
            <div
              class={$isLightMode
                ? "light-input-control input-control"
                : "input-control"}
            >
              {#if showConfirmPassword}
                <input
                  type="text"
                  autocomplete="off"
                  bind:value={confirmNewPassword}
                />
              {:else}
                <input
                  type="password"
                  autocomplete="off"
                  bind:value={confirmNewPassword}
                />{/if}
              <button
                class="toggle-password"
                on:click={toggleConfirmPasswordVisibility}
              >
                {#if showConfirmPassword}
                  <Icon
                    src={RiSystemEyeCloseLine}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {:else}
                  <Icon
                    src={AiFillEye}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {/if}
              </button>
            </div>
          </div>
          <div class="tips-div">
            <Icon
              src={RiSystemErrorWarningLine}
              size="20"
              color="rgb(67, 179, 9)"
              title=""
            />
            <p class="tips">
              Re-login will be required after changing the password.
            </p>
          </div>
          <button
            on:click={saveChanges}
            class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
            ><div class="button-inner">Save Changes</div></button
          >
          <!-- Display error message, if any -->
          {#if errorMessage}
            <div class="error-message">{errorMessage}</div>
          {/if}
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="box">
        <p class={$isLightMode ? "light-text" : ""}>
          Two-factor Authentication
        </p>
        <div class="sc-bQFuvY bVYhHw">
          <div class="google-step-summary-top">
            Download and install <a
              target="_blank"
              href="https://support.google.com/accounts/answer/1066447?hl=en&amp;rd=1"
              >Google Authenticator</a
            >. Enable Two-factor Authentication to protect your account from
            unauthorized access.
          </div>
          <div class="google-step-summary-top two">
            Scan the QR code with your Google Authenticator App or enter the
            secret key manually.
          </div>
          <div class="qrcode-warp">
            <img
              src="/api/user/google/2-step-auth/key/qrcode/320/?t=1701851328576"
              alt="qrcode"
            />
          </div>
          <div class="copy-input">
            <div class="sc-ezbkAF gcQjQT input sc-fbyfCU fWAvBM">
              <div
                class={$isLightMode
                  ? "light-input-label input-label"
                  : "input-label"}
              >
                Your secret key
              </div>
              <div
                class={$isLightMode
                  ? "light-input-control input-control"
                  : "input-control"}
              >
                <input
                  type="text"
                  readonly=""
                  value="5efvci6m2jsz5rkxt236yrl4qrlsv3gi"
                /><button class="toggle-password">
                  <Icon
                    src={BiSolidCopy}
                    size="24"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  /></button
                >
              </div>
            </div>
          </div>
          <p class="twofa-alert">
            Write down this code, never reveal it to others. You can use it to
            regain access to your account if there is no access to the
            authenticator.
          </p>
          <div class="codes">
            <p class={$isLightMode ? "light-text" : ""}>Verification code</p>
            <div class="sc-cvZCdy hooaaA">
              <div class="google-input">
                <input autocomplete="new-password" type="password" value="" />
                <ul class="">
                  <li class="active"></li>
                  <li class=""></li>
                  <li class=""></li>
                  <li class=""></li>
                  <li class=""></li>
                  <li class=""></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="sc-ezbkAF gcQjQT input sc-bYoBSM ixxYMF">
            <div
              class={$isLightMode
                ? "light-input-control input-control"
                : "input-control"}
            >
              <input
                type={showLoginPassword ? "text" : "password"}
                autocomplete="new-password"
                placeholder="Login Password"
                value=""
              />
              <button
                class="toggle-password"
                on:click={toggleLoginPasswordVisibility}
              >
                {#if showLoginPassword}
                  <Icon
                    src={RiSystemEyeCloseLine}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {:else}
                  <Icon
                    src={AiFillEye}
                    size="20"
                    color="rgba(153, 164, 176, 0.6)"
                    title=""
                  />
                {/if}
              </button>
            </div>
          </div>
          <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
            ><div class="button-inner">Enable</div></button
          >
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="box">
        <p class={$isLightMode ? "light-text" : ""}>E-mail Verification</p>
        <div class="sc-jHwEXd kIYJvE">
          <p>
            According to the security policy of NANOGAMES.IO, the registered
            email cannot be changed.
          </p>
          <div class="sc-ezbkAF hzTJOu input">
            <div
              class={$isLightMode
                ? "light-input-control input-control"
                : "input-control"}
            >
              <input type="text" readonly="" value="idokojohn72@yahoo.com" />
            </div>
          </div>
          <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal"
            ><div class="button-inner">Verify</div></button
          >
        </div>
      </div>
    </div>
    <div class="wrap" style="visibility: hidden; min-height: auto;"></div>
  </div>
{:else}
  <div class="">
    <p>Please Sign in</p>
  </div>
{/if}

<style>
  .light-mode {
    background-color: rgb(255, 255, 255) !important;
    color: rgb(49, 55, 61) !important;
  }
  .light-text {
    color: rgb(49, 55, 61) !important;
  }

  .light-input-control {
    border: 1px solid rgb(233, 234, 242) !important;
    background-color: rgb(245, 246, 250) !important;
  }
  .light-input-control input {
    color: black !important;
  }
  .light-input-label {
    color: rgba(0, 0, 0, 0.6) !important;
  }
  @media screen and (min-width: 621px) {
    * {
      scrollbar-color: var(--scroll-color) transparent;
      scrollbar-width: thin;
      scrollbar-width: none;
    }
  }

  .iQcnrl {
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    overflow: hidden;
  }
  .iQcnrl .wrap {
    min-width: 18.75rem;
    flex: 1 1 0%;
    position: relative;
    min-height: 43.5rem;
  }
  .iQcnrl .wrap::before {
    content: "";
    position: absolute;
    left: 0px;
    top: -1.5625rem;
    width: 100%;
    height: 1px;
    background-color: rgba(152, 167, 181, 0.15);
  }
  .iQcnrl .wrap::after {
    content: "";
    position: absolute;
    right: -0.125rem;
    top: 0px;
    width: 1px;
    height: 100%;
    background-color: rgba(152, 167, 181, 0.15);
  }
  .iQcnrl .wrap .box {
    width: 100%;
    max-width: 25rem;
    margin: 0px auto;
    padding: 1.5rem 0.625rem;
  }
  .iQcnrl .wrap .box > p {
    margin: 0px 0px 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    color: rgb(245, 246, 247);
    font-size: 0.87rem;
  }

  .kLBRjb .input:first-child {
    margin-top: 0px;
  }
  .gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
    font-size: 0.84rem;
  }
  .gCMZdv > .pc .input .input-control {
    background-color: rgba(30, 32, 36, 0.6);
  }
  .gcQjQT .input-control textarea,
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }
  .gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(30, 32, 36, 0.6);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }
  .gCMZdv > .pc .input .input-control > svg {
    cursor: pointer;
  }
  .ixxYMF .input-control > svg {
    cursor: pointer;
  }
  .toggle-password {
    width: 20px !important;
    margin: auto !important;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .tips-div {
    display: flex;
    align-items: center;
    margin: 1.25rem 0px 0px;
    gap: 10px;
  }
  .kLBRjb .tips {
    font-size: 0.75rem;
    color: rgb(67, 179, 9);
    text-align: center;
  }
  p {
    margin: 0.75em 0;
  }
  .iQcnrl .wrap .box button {
    width: 11.25rem rem;
    height: 3rem;
    margin: 1.875rem auto 0px;
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
  .bVYhHw .google-step-summary-top {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
  .bVYhHw .google-step-summary-top.two {
    margin-top: 0.75rem;
  }
  .bVYhHw .qrcode-warp {
    padding: 0.3125rem;
    background: rgb(255, 255, 255);
    border-radius: 0.75rem;
    font-size: 0px;
    width: 8.125rem;
    margin: 1.25rem auto 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .bVYhHw .qrcode-warp img {
    width: 7.5rem;
    height: 7.5rem;
  }
  .bVYhHw .copy-input {
    margin-top: 1.5rem;
  }
  .bVYhHw .twofa-alert {
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-top: 0.75rem;
  }
  .bVYhHw .codes p {
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: 1rem;
    text-align: center;
  }
  .hooaaA {
    width: 100%;
    text-align: center;
  }
  .hooaaA .google-input {
    position: relative;
    display: inline-block;
    width: auto;
  }
  .hooaaA .google-input > input {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0px;
    left: -9999px;
    width: 99999px;
    height: 100%;
    border: none;
    background-color: transparent;
    color: transparent;
    caret-color: transparent;
  }
  .hooaaA .google-input > ul {
    padding: 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
  }
  ol,
  ul {
    padding-left: 1.2em;
    margin: 0;
  }
  .hooaaA .google-input > ul li {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    margin-right: 0.375rem;
    border-radius: 0.625rem;
    font-size: 1rem;
    background-color: rgba(30, 32, 36, 0.6);
    border: 1px solid transparent;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  li {
    margin: 0.5em 0;
  }
  .gcQjQT {
    margin-top: 1rem;
  }
  .gCMZdv > .pc .input .input-control {
    background-color: rgba(30, 32, 36, 0.6);
  }
  .gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(30, 32, 36, 0.6);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }
  .gcQjQT .input-control textarea,
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
  }
  .gCMZdv > .pc .input .input-control > svg {
    cursor: pointer;
  }
  .ixxYMF .input-control > svg {
    cursor: pointer;
  }
  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .iQcnrl .wrap .box button {
    width: 11.25rem;
    height: 3rem;
    margin: 1.875rem auto 0px;
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
  .bVYhHw > button {
    width: 11.25rem;
    height: 3rem;
    margin: 1.25rem auto 0px;
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
  .kIYJvE p {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
  .hzTJOu {
    margin-top: 1rem;
  }
  .gCMZdv > .pc .input .input-control {
    background-color: rgba(30, 32, 36, 0.6);
  }
  .hzTJOu .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    /* background-color: rgba(30, 32, 36, 0.6); */
    background-color: rgba(30, 32, 36, 0.6);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }
  .gCMZdv > .pc .input .input-control input[readonly] {
    opacity: 1;
  }

  .hzTJOu .input-control textarea[readonly],
  .hzTJOu .input-control input[readonly] {
    opacity: 0.5;
  }
  .hzTJOu .input-control textarea,
  .hzTJOu .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    font-weight: bold;
  }
  body,
  input,
  textarea,
  a,
  button {
    color: var(--text-color);
  }
  body,
  input,
  textarea,
  a,
  button {
    font-family:
      Montserrat,
      -apple-system,
      Framedcn,
      Helvetica Neue,
      Condensed,
      DisplayRegular,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      WenQuanYi Micro Hei,
      Microsoft Yahei,
      sans-serif;
  }
  /*  .kQlYep {
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    overflow: hidden;
  }
  .kQlYep .wrap {
    min-width: 18.75rem;
    flex: 1 1 0%;
    position: relative;
    min-height: 43.5rem;
  }
  .kQlYep .wrap::before {
    content: "";
    position: absolute;
    left: 0px;
    top: -1.5625rem;
    width: 100%;
    height: 1px;
    background-color: rgba(152, 167, 181, 0.15);
  }
  .kQlYep .wrap::after {
    content: "";
    position: absolute;
    right: -0.125rem;
    top: 0px;
    width: 1px;
    height: 100%;
    background-color: rgba(152, 167, 181, 0.15);
  }
  .kQlYep .wrap .box {
    width: 100%;
    max-width: 25rem;
    margin: 0px auto;
    padding: 1.5rem 0.625rem;
  }
  .kQlYep .wrap .box > p {
    margin: 0px 0px 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    color: rgb(245, 246, 247);
  }
  .hzTJOu {
    margin-top: 1rem;
  }
  .hzTJOu .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .cMCBIc > .pc .input .input-control {
    background-color: rgba(30, 32, 36, 0.6);
  }
  .hzTJOu .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(30, 32, 36, 0.6);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }
  .hzTJOu .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    font-weight: bold;
    outline: none;
  }
  .gcQjQT {
    margin-top: 1rem;
  }
  .gcQjQT .input-label {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 1em;
    height: 1.25rem;
    margin: 0px 1.125rem 0.375rem;
    color: rgba(153, 164, 176, 0.6);
  }
  .cMCBIc > .pc .input .input-control {
    background-color: rgba(30, 32, 36, 0.6);
  }
  .gcQjQT .input-control input {
    flex: 1 1 0%;
    width: 100%;
    height: 100%;
    min-width: 1rem;
    padding: 0px;
    border: none;
    background-color: transparent;
    color: rgb(245, 246, 247);
    outline: none;
  }
  .gcQjQT .input-control {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(45, 48, 53);
    background-color: rgba(30, 32, 36, 0.6);
    opacity: 1;
    height: 2.75rem;
    border-radius: 1.5rem;
    padding: 0px 1.375rem;
  }
  .kQlYep .wrap .box button {
    width: 11.25rem;
    height: 3rem;
    margin: 1.875rem auto 0px;
  }
  .ljcTaJ .google-step-summary-top {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
  .ljcTaJ .google-step-summary-top a {
    text-decoration: underline;
    margin-left: 0.25rem;
  }
  .ljcTaJ .google-step-summary-top.two {
    margin-top: 0.75rem;
  }
  .ljcTaJ .qrcode-warp {
    padding: 0.3125rem;
    background: rgb(255, 255, 255);
    border-radius: 0.75rem;
    font-size: 0px;
    width: 8.125rem;
    margin: 1.25rem auto 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .ljcTaJ .qrcode-warp img {
    width: 7.5rem;
    height: 7.5rem;
  }
  .ljcTaJ .copy-input {
    margin-top: 1.5rem;
  }
  .ljcTaJ .copy-input .input-control .copy-button {
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 0.125rem;
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
  .ljcTaJ .twofa-alert {
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-top: 0.75rem;
  }
  .ljcTaJ .codes p {
    height: 1.25rem;
    line-height: 1.25rem;
    margin-top: 1rem;
    text-align: center;
  }
  .hooaaA {
    width: 100%;
    text-align: center;
  }
  .hooaaA .google-input {
    position: relative;
    display: inline-block;
    width: auto;
  }
  .hooaaA .google-input > input {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0px;
    left: -9999px;
    width: 99999px;
    height: 100%;
    border: none;
    background-color: transparent;
    color: transparent;
    caret-color: transparent;
  }
  .hooaaA .google-input > ul {
    padding: 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0px auto;
  }
  .hooaaA .google-input > ul li {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    margin-right: 0.375rem;
    border-radius: 0.625rem;
    font-size: 1rem;
    background-color: rgba(30, 32, 36, 0.6);
    border: 1px solid transparent;
    font-weight: bold;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  li {
    margin: 0.5em 0;
  }
  .hooaaA .google-input > ul.focus-list .active {
    border: 1px solid rgb(67, 179, 9);
  } */
</style>
