<script>
import Icon from 'svelte-icons-pack/Icon.svelte';
import FaSolidChessQueen from "svelte-icons-pack/fa/FaSolidChessQueen";

</script>

<div class="ba3phvn page-bonus-item">
    <div class="bonus-item-text">
        <div class="bonus-tit">
            <p class="bonus-t">Recharge</p>
            <div class="recharge-type">Hourly</div>
            <div class="t1vk7zf8 tips-wrap">
                <div class="in">
                    <button>
                        <Icon src={FaSolidChessQueen}  size="18"  color="#75808c" className="custom-icon" title="arror" />
                    </button>
                </div>
            </div>
        </div>
        <div class="bonus-desc">
            <p>Wager required</p>
            <p>$ 1,000</p>
        </div>
        <div class="bonus-desc last">
            <p>Current Tier</p>
            <p class="">-</p>
        </div>
        <div class="bonus-desc last">
            <p>Recharge Rate</p>
            <p class="">-</p>
        </div>
        <div class="bonus-desc last">
            <p>Ready to claim</p>
            <p>-</p>
        </div>
    </div>
    <div class="bonus-btn">
        <div class="quests-btn">
            <span style="padding-right: 12px;">
                <Icon src={FaSolidChessQueen}  size="18"  color="#75808c" className="custom-icon" title="arror" />
            </span>
            <span>Available at VIP 22</span>
        </div>
    </div>
    <div class="bonus-bg-wrap">
        <div class="bg-inner"></div>
        <img alt="img" src="	https://bc.game/assets/recharge.a4be9aca.png">
    </div>
</div>

<style>

.page-bonus-item {
    width: 32%;
    background:#1C1E22 ;
    position: relative;
    min-width: 7.125rem;
    border-radius: 0.25rem;
    margin-bottom: 1.25rem;
    z-index: 5;
    height: 15.25rem;
    -webkit-backdrop-filter: blur(7px);
    backdrop-filter: blur(7px);
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-radius: 12px;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 1.375rem 1.5rem;
}
.page-bonus-item {
    margin-bottom: 1rem;
    width: 49%;
}
.bonus-item-text {
    position: relative;
    z-index: 3;
    width: 100%;
}
.bonus-tit {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.bonus-item-text .bonus-t {
    color: var(--autofill-color);
    font-size: 1.125rem;
    line-height: 1.5rem;
    font-weight: 600;
    margin-right: 0.25rem;
}
.page-bonus-item p {
    margin: 0;
}
.ba3phvn .bonus-tit .recharge-type {
    color: var(--primary-color);
    background-color: #3bc1171a;
    height: 1.375rem;
    padding: 0 0.25rem;
    border-radius: var(--border-radius);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 0.25rem;
}
.in button {
    cursor: pointer;
    width: 1.125rem;
    height: 1.125rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
}

.bonus-desc.last {
    margin-top: 0.5rem;
}
.bonus-desc {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: .75rem;
    line-height: 1rem;
    width: 70%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    max-width: 15rem;
    margin-top: 1rem;
}
.bonus-btn {
    position: relative;
    z-index: 2;
    margin-top: auto;
}

.ba3phvn .bonus-bg-wrap {
    position: absolute;
    z-index: 1;
    width: 35%;
    height: 100%;
    right: 0;
    top: 0;
    overflow: hidden;
}
.bonus-bg-wrap .bg-inner {
    width: 16.75rem;
    height: 12.875rem;
    background: radial-gradient(50% 50% at 50% 50%,rgba(9,148,123,.5) 0%,rgba(9,148,123,0) 100%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.bonus-bg-wrap img {
    height: 10rem;
    position: absolute;
    right: 0;
    top: 6%;
}
.quests-btn {
    background: #24262B;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 3rem;
}

</style>