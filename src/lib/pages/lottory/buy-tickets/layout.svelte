<script>
	import { createEventDispatcher } from "svelte";
	import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
	import Icon from "svelte-icons-pack/Icon.svelte";
	import { ServerURl } from "$lib/backendUrl";
	import axios from "axios";
	import { handleAuthToken } from "$lib/store/routes";
	const URL = ServerURl();
	const dispatch = createEventDispatcher();
	let selectedNumbers = [];
	$: jackpotNum = 0;
	const handleRandomGeneration = () => {
		selectedNumbers = Array.from(
			{ length: 5 },
			() => Math.floor(Math.random() * 36) + 1,
		);
		jackpotNum = Math.floor(Math.random() * 10) + 1;
	};
	const handleSelection = (num) => {
		if (selectedNumbers.includes(num)) {
			selectedNumbers = [...selectedNumbers.filter((n) => n !== num)];
		} else if (selectedNumbers.length < 5) {
			selectedNumbers = [...selectedNumbers, num];
		}
	};

	$: isManual = false;
	const handleClose = () => {
		dispatch("close-dialog");
	};
	$: loading = false;
	const buyTicket = async () => {
		loading = true;
		console.log("On Buy");
		if (isManual && (selectedNumbers.length < 5 || !jackpotNum)) return;
		try {
			console.log("Sending request ", `${URL}/api/lottery/buy-ticket`);
			const res = await axios.post(
				`${URL}/api/lottery/buy-ticket`,
				{
					numbers: selectedNumbers,
					random: !isManual,
					jackpot: jackpotNum,
				},
				{
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${$handleAuthToken}`,
					},
				},
			);
			console.log("Response => ", res.data);
			dispatch("close-dialog");
		} catch (error) {
			console.log("Error > ", error);
		} finally {
			loading = false;
		}
	};
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
	<div
		class="dialog"
		style="opacity: 1; width: 464px; height: 720px; margin-top: -360px; margin-left: -232px; transform: scale(1) translateZ(0px);"
	>
		<div class="dialog-head has-close">
			<div class="dialog-title">Buy Lottery Tickets</div>
		</div>
		<button class="sc-ieecCq fLASqZ close-icon dialog-close"
			><svg
				xmlns:xlink="http://www.w3.org/1999/xlink"
				class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Close"></use></svg
			></button
		>
		<div class="dialog-body default-style" style="z-index: 2; transform: none;">
			<div class="sc-dkPtRN jScFby scroll-view sc-cTAIfT iXORRS">
				<div class="warn">
					<span
						>You can get more NNL from <a href="/wallet/swap?to=BCL">NGSwap</a> at
						anytime</span
					>
				</div>
				<div class="layout">
					<div class="label">Pay with</div>
					<div class="pay-input">
						<img class="coin-icon" src="/coin/NNL.black.png" /><span
							class="currency">NNL</span
						><span class="balance">0</span><svg
							xmlns:xlink="http://www.w3.org/1999/xlink"
							class="sc-gsDKAQ hxODWG icon"
							><use xlink:href="#icon_Arrow"></use></svg
						>
					</div>
				</div>
				<div class="sc-kjOQFR mPkDL">
					<div class="label">Number of tickets</div>
					<div class="input-tickets">
						<div class="pre-input">
							<div class="sc-ezbkAF kDuLvp input">
								<div class="input-control">
									<input type="text" value="75" />
								</div>
							</div>
							<div class="sc-kDTinF bswIvI button-group">
								<button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">10</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">50</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">100</div></button
								><button class="sc-jnrVZQ biZThH"
									><svg
										xmlns:xlink="http://www.w3.org/1999/xlink"
										class="sc-gsDKAQ hxODWG icon"
										><use xlink:href="#icon_Arrow"></use></svg
									><svg
										xmlns:xlink="http://www.w3.org/1999/xlink"
										class="sc-gsDKAQ hxODWG icon"
										><use xlink:href="#icon_Arrow"></use></svg
									></button
								>
							</div>
						</div>
						<div class="suff-desc">
							<div class="cont">
								<div class="cost">Total Cost:</div>
								<div class="amount error">75.0000000 NNL</div>
							</div>
						</div>
					</div>
					<div class="desc">1.00000000 NNL/Ticket</div>
				</div>
				<div class="sc-bXdNzS edIVnw">
					<div class="sc-iwjdpV ikWSlH radio">
						<div class="radio-item">
							<div class="circle"></div>
							<div>Auto Generate</div>
						</div>
						<div class="radio-item is-active">
							<div class="circle"></div>
							<div>Manual Select</div>
						</div>
					</div>
					<div class="select-box">
						<div class="simple">
							<div class="random-wrap">
								<div class="sub-tips">5 digits optional</div>
								<button class="random">Random</button>
							</div>
							<div class="box">
								<button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">1</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">2</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">3</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">4</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">5</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">6</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">7</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">8</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">9</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">10</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">11</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">12</div></button
								><button class="sc-iqseJM cBmlor button button-normal active"
									><div class="button-inner">13</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">14</div></button
								><button class="sc-iqseJM cBmlor button button-normal active"
									><div class="button-inner">15</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">16</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">17</div></button
								><button class="sc-iqseJM cBmlor button button-normal active"
									><div class="button-inner">18</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">19</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">20</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">21</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">22</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">23</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">24</div></button
								><button class="sc-iqseJM cBmlor button button-normal active"
									><div class="button-inner">25</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">26</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">27</div></button
								><button class="sc-iqseJM cBmlor button button-normal active"
									><div class="button-inner">28</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">29</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">30</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">31</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">32</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">33</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">34</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">35</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">36</div></button
								>
							</div>
						</div>
						<div class="jackpot">
							<div class="sub-tips">1 Jackpot Ball</div>
							<div class="box">
								<button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">1</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">2</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">3</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">4</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">5</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">6</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">7</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">8</div></button
								><button class="sc-iqseJM cBmlor button button-normal"
									><div class="button-inner">9</div></button
								><button class="sc-iqseJM cBmlor button button-normal active"
									><div class="button-inner">10</div></button
								>
							</div>
						</div>
					</div>
					<div class="error-txt">
						Please choose 6 numbers to take part in the DotPlayPlay Lottery!
					</div>
				</div>
				<button
					class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal submit-btn"
					disabled=""><div class="button-inner">Buy Tickets</div></button
				>
			</div>  
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
.dialog {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 50%;
    width: 464px;
    height: 720px;
    margin: -375px 0px 0px -280px;
    transition-property: width, height, margin-left, margin-top;
    transition-duration: 0.5s;
    border-radius: 1.25rem;
    overflow: hidden;
    background-color: rgb(23, 24, 27);
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}

.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
}
.dialog-head.has-close {
    margin-right: 3.75rem;
}
.dialog-head {
    position: relative;
    z-index: 10;
    flex: 0 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 3.75rem;
    margin-left: 1.125rem;
    transition: all 0.5s ease 0s;
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
.default-style {
    padding-top: 3.75rem;
    background-color: rgb(23, 24, 27);
}

.dialog-body {
    position: absolute;
    inset: 0px;
    display: flex;
    overflow: hidden;
}

.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}

.dialog-body > div {
    flex: 1 1 0%;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
}

.iXORRS .warn {
    border: 1px solid rgb(67, 179, 9);
    background: rgba(93, 160, 0, 0.1);
    border-radius: 1.25rem;
    color: rgb(67, 179, 9);
    padding: 0.75rem 1.25rem;
    margin-top: 0.5rem;
    height: 4rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.iXORRS .warn a {
    color: rgb(67, 179, 9);
    text-decoration: underline;
}

.iXORRS .layout {
    margin-top: 1.25rem;
}
.iXORRS .label {
    margin: 0px 0px 0.4375rem 0.875rem;
    height: 1.125rem;
    line-height: 1.125rem;
}
.iXORRS .layout .pay-input {
    height: 4rem;
    padding: 0px 1.25rem;
    border-radius: 1.25rem;
    color: rgb(255, 255, 255);
    background-color: rgb(37, 39, 44);
    border: 1px solid rgb(45, 48, 53);
    font-size: 1.125rem;
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.iXORRS .layout .coin-icon {
    width: 1.6875rem;
    height: 1.6875rem;
    margin-right: 1.0625rem;
}
.iXORRS .layout .pay-input .balance {
    margin-left: auto;
    font-size: 1rem;
    margin-right: 0.875rem;
}
</style>
