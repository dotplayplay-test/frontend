<script>
   import { isLightMode } from "../../../lib/store/theme";
</script>

<div class="sc-jnSlpE kIgFIY">
    <div class="left">
        <div class={$isLightMode ? "light-text title" : "title"}>Verify Setup</div>
        <div>To serve you better we ask that you provide original identifying documents. This will secure your account in cases of account recovery. It also helps to ensure that the gifts or actual rewards you receive are sent to the correct location.</div>
        <div class="word">An acceptable proof of identification includes a photo of your Govt, approved ID card, driver's license and passport. We will reach out to you via email once this process has been completed.</div>
        <img class="bc-img" alt="bc" src="https://static.nanogames.io/assets/step_2.299e66eb.png">
    </div>
    <div class="right">
        <div class="sc-hRMJXU jilEdF flex-center">
            <button class={$isLightMode ? " light-text step__item flex-center current":"step__item flex-center current"}>Step 01</button>
            <div class="step__line"></div>
            <button class={$isLightMode ? " light-text step__item flex-center normal":"step__item flex-center normal"}>Step 02</button>
            <div class="step__line"></div>
            <button  class={$isLightMode ? " light-text step__item flex-center normal":"step__item flex-center normal"}>Step 03</button>
            <div class="step__line"></div>
            <button  class={$isLightMode ? " light-text step__item flex-center normal":"step__item flex-center normal"}>Step 04</button>
        </div>
        <div class="step-main">
            <div class="sc-icMgfS jmSctS step step1">
                <div class="step__tip">For a more considerate service, please fill in the following information to let us know about you. Thank you!</div>
                <div class="step1__form">
                    <div class="inline">
                        <div class="sc-ezbkAF gcQjQT input ">
                            <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>First Name</div>
                            <div     class={$isLightMode
                                ? "light-input-control input-control"
                                : "input-control"}>
                                <input type="text" value="uih"></div>
                        </div>
                        <div class="sc-ezbkAF gcQjQT input ">
                            <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>Last Name</div>
                            <div     class={$isLightMode
                                ? "light-input-control input-control"
                                : "input-control"}>
                                <input type="text" value="ygf">
                            </div>
                        </div>
                    </div>
                    <div class="inline">
                        <div class="sc-ezbkAF gcQjQT input ">
                            <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>Gender</div>
                            <div     class={$isLightMode
                                ? "light-input-control input-control"
                                : "input-control"}>
                                <div class="sc-jJoQJp gOHquD select  sc-czWrlN huGcJs">
                                    <div class="select-triggeer">Male<div class="arrow ">
                                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                            <use xlink:href="#icon_Arrow"></use></svg>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sc-ezbkAF gcQjQT input ">
                            <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>Date of Birth</div>
                            <div c    class={$isLightMode
                                ? "light-input-control input-control"
                                : "input-control"}>
                                <input type="date" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value="2000-01-01">
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="sc-ezbkAF gcQjQT input ">
                        <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>Address</div>
                        <div     class={$isLightMode
                            ? "light-input-control input-control"
                            : "input-control"}>
                            <input type="text" value=""></div>
                    </div>
                    <div class="inline">
                        <div class="sc-ezbkAF gcQjQT input ">
                            <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>ZIP/Postal Code</div>
                            <div     class={$isLightMode
                                ? "light-input-control input-control"
                                : "input-control"}>
                                <input type="text" value="">
                            </div>
                        </div>
                        <div class="sc-ezbkAF gcQjQT input ">
                            <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>City</div>
                            <div     class={$isLightMode
                                ? "light-input-control input-control"
                                : "input-control"}>
                                <input type="text" value="">
                            </div>
                        </div>
                    </div>
                    <div class="inline">
                        <div class="sc-ezbkAF gcQjQT input ">
                            <div class={$isLightMode ? "light-input-label input-label" : "input-label"}>Country</div>
                            <div     class={$isLightMode
                                ? "light-input-control input-control"
                                : "input-control"}>
                                <div class="sc-jJoQJp gOHquD select  sc-czWrlN huGcJs">
                                    <div class="select-triggeer">
                                        Afghanistan
                                        <div class="arrow ">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon">
                                                <use xlink:href="#icon_Arrow"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal submit">
                    <div class="button-inner">Next</div>
                </button>
            </div>
        </div>
    </div>
</div>

<style>
      .light-grey-bg {
    background-color: rgb(245, 246, 250) !important;
  }
  .light-bg {
    background-color: rgb(255, 255, 255) !important;
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
  .light-input-label{
    color: rgba(0, 0, 0, 0.6) !important;
  }
.kIgFIY {
    display: flex;
    height: 100%;
}
.kIgFIY .left {
    flex: 1 1 0%;
    padding: 0px 1.5rem 2.25rem 0px;
    border-right: 1px solid rgba(152, 167, 181, 0.1);
}
.kIgFIY .left .title {
    margin: 0px 0px 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    color: rgb(245, 246, 247);
}
.kIgFIY .left .word {
    margin-top: 3.125rem;
}
.kIgFIY .left .bc-img {
    width: 100%;
    height: auto;
}
.kIgFIY .right {
    flex: 2 1 0%;
    min-width: 18.75rem;
    padding: 0px 0px 1.5rem 1.875rem;
}
.jilEdF {
    max-width: 32.0625rem;
    margin: 0px auto;
}
.jilEdF .step__item.current {
    font-weight: bold;
    color: rgb(245, 246, 247);
    border-color: rgb(67, 179, 9);
    background: transparent;
}
.jilEdF .step__item {
    width: 5.625rem;
    height: 2.75rem;
    border-radius: 1.5rem;
    border: 2px solid;
    padding: 0px 0.625rem;
    position: relative;
    flex-shrink: 0;
    background-color: transparent;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.jilEdF .step__line {
    border-top: 1px solid rgba(91, 94, 103, 0.42);
    flex: 1 1 auto;
}
.jilEdF .step__item.normal {
    border-color: rgb(59, 63, 74);
}
.kIgFIY .right .step-main {
    width: 100%;
    margin-top: 2.5rem;
}
.kIgFIY .right .step {
    max-width: 32.0625rem;
    margin: 0px auto;
}
.kIgFIY .right .step {
    max-width: 32.0625rem;
    margin: 0px auto;
}
.jmSctS .step1__form .inline {
    position: relative;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
}
.jmSctS .step1__form .inline .input {
    flex: 0 1 49%;
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
.gDzJtG > .pc .input .input-control {
    background-color: rgba(30, 32, 36, 0.6);
}
.jmSctS .step1__form .line {
    border: 1px dashed rgb(59, 63, 74);
    margin-top: 0.875rem;
    transform: scaleY(0.5);
}
.jmSctS .step1__form .inline .input {
    flex: 0 1 49%;
}
.gcQjQT {
    margin-top: 1rem;
}
.huGcJs .select-triggeer {
    background-color: transparent;
}
.gOHquD .select-triggeer {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0px 1.25rem;
    user-select: none;
    border-radius: 1.25rem;
}
.gOHquD .select-triggeer .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    right: 0px;
    top: 0px;
}
.jmSctS .step1__form .select-triggeer {
    font-weight: bold;
    color: inherit;
}
.kIgFIY .submit {
    margin: 1.875rem auto 0px;
    max-width: 16.25rem;
}
.fnKcEH.button {
    color: rgb(245, 246, 247);
    box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
    background-color: rgb(67, 179, 9);
    background-image: conic-gradient(from 1turn, rgb(67, 179, 9), rgb(93, 219, 28));
}
</style>
