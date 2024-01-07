<script>
	import { createEventDispatcher, onMount } from "svelte";
	import { handleAuthToken } from "$lib/store/routes";
	import CgSoftwareDownload from "svelte-icons-pack/hi/HiSolidDownload";
	import HiOutlineScale from "svelte-icons-pack/hi/HiOutlineScale";
	import IoCloseSharp from "svelte-icons-pack/io/IoCloseSharp";
	import BiHelpCircle from "svelte-icons-pack/ri/RiSystemQuestionLine";
	import IoCopySharp from "svelte-icons-pack/io/IoCopyOutline";
	import BiArrowBack from "svelte-icons-pack/bi/BiArrowBack";
	import Loader from "$lib/components/loader.svelte";
	import Tooltip from "$lib/components/tooltip.svelte";
	import Icon from "svelte-icons-pack/Icon.svelte";
	import { UseFetchData } from "$lib/hook/useFetchData";
	export let showData = { game_id: 0, tab: 1 };

	$: gameSeeds = {};
	$: loading = !!showData.game_id && showData.tab == 2;
	$: currentTab = showData.tab || 1;
	const handleTabChange = async (tab) => {
		currentTab = tab;
		if (tab === 2) {
			loading = true;
			try {
				const { data, error } = await UseFetchData(
					$handleAuthToken,
				).fetch(
					`/lottery/game-seeds${
						showData.game_id ? `?id=${showData.game_id}` : ""
					}`,
				);
				if (error) throw new Error(error);
				gameSeeds = data.seeds;
			} catch (error) {
				currentTab = 1;
			} finally {
				loading = false;
			}
		}
	};

	onMount(() => {
		// console.log("SHOW DATA", showData)
		if (!!showData.game_id && showData.tab == 2) {
			handleTabChange(2);
		}
	});

	const dispatch = createEventDispatcher();
	const handleClose = () => {
		dispatch("close-pfd");
	};
	const handleCopy = () => {
		navigator.clipboard.writeText(serverSeed);
	};

	const handleVerificationClick = () => {
		const origin = window.origin.includes("localhost")
			? "https://dppgames.netlify.app"
			: window.origin;
		window.open(
			`${origin}/verify/lottery?${
				gameSeeds.server_seed
					? `s=${gameSeeds.server_seed}`
					: ""
			}${
				gameSeeds.client_seed_hash
					? `&c=${gameSeeds.client_seed_hash}`
					: ""
			}`,
			"_blank",
		);
	};
</script>

<div class="sc-bkkeKt kBjSXI" style="opacity: 1;">
	<div
		class="dialog"
		style="opacity: 1; width: 464px; max-height: 720px; height: calc(100vh - 5%); margin-top: -280px; margin-left: -232px; transform: scale(1) translateZ(0px);"
	>
		{#if currentTab === 2 && !showData.game_id}
			<button
				on:click={() => handleTabChange(1)}
				class="dialog-back"
				style="opacity: 1; transform: none;"
				><Icon
					src={BiArrowBack}
					size="23"
					color="rgba(153, 164, 176, 0.6)"
				/></button
			>
		{/if}
		<div class="dialog-head has-close">
			<div
				class="dialog-title"
				style="margin: {currentTab === 2 && !showData.game_id
					? '0 0 0 30px'
					: 0}"
			>
				{currentTab === 1 ? "Provably Fair" : "Lottery Fairness"}
			</div>
			{#if currentTab === 1}
				<button on:click={() => handleTabChange(2)} sc-ieecCq fLASqZ>
					<Icon
						src={HiOutlineScale}
						size="23"
						color="rgba(153, 164, 176, 0.6)"
					/>
				</button>
			{/if}
		</div>
		<button
			on:click={handleClose}
			class="sc-ieecCq fLASqZ close-icon dialog-close"
			><Icon
				src={IoCloseSharp}
				size="23"
				color="rgba(153, 164, 176, 0.6)"
			/></button
		>
		{#if currentTab === 1}
			<div
				class="dialog-body default-style"
				style="z-index: 2; transform: none;"
			>
				<div
					style="padding-bottom: 40px;"
					class="sc-dkPtRN jScFby scroll-view sc-haTkiu YCgQD"
				>
					<div class="item">
						Lottery is drawn in 5+1 balls rule, with five regular
						balls taken from 36 numbers and a jackpot ball taken
						from 10 numbers.
					</div>
					<div class="item">
						Server seed: Each game generates a new server seed and
						publishes the string after Hash256.<br />Client Seeds:
						Get the ETH height at the end of the daily ticket
						purchase deadline, and use Hash after 10 blocks as the
						client seed.
					</div>
					<div class="item">
						<div>
							First, use HMAC_SHA256 to calculate the hash value,
							which gives us a 64-bit character hex string:
						</div>
						<div class="pri-tips">
							hash = HMAC_SHA256 (clientSeed, serverSeed)
						</div>
						<div>
							Then, take the <span>8</span> characters of hash and
							convert it to an <span>int32</span> value. We divide
							the converted value by the
							<span>0x100000000</span>, multiply by the number of
							balls, and the number is the winning position,
							according to which the corresponding ball is
							obtained.
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if currentTab === 2}
			{#if !loading}
				<div
					class="dialog-body default-style"
					style="z-index: 2; transform: none;"
				>
					<div
						class="sc-dkPtRN jScFby scroll-view sc-kTqLtj gKwlPS dialog-box"
					>
						<div class="tips">
							DotPlayPlay Lottery is provably fair which means you
							can examine the results using <button
								on:click={handleVerificationClick}
								>online verifier</button
							> and following data. The whole data including the file
							with purchased tickets is available only when ticket
							sales stopped.
						</div>
						<div class="sc-ezbkAF kDuLvp input sc-fbyfCU fWAvBM">
							<div class="input-label">
								<div class="tooltip-label">
									<span>Server Seed (hash) </span>
									<Tooltip text="SHA-256 of server seed">
										<Icon
										src={BiHelpCircle}
										size="23"
										color="rgba(153, 164, 176, 0.6)"
									/>
									</Tooltip>
								</div>
							</div>
							<div class="input-control">
								<input
									type="text"
									readonly=""
									value={gameSeeds.server_seed_hash}
								/><button
									on:click={handleCopy}
									class="sc-iqseJM cBmlor button button-normal copy-button"
									><div class="button-inner">
										<Icon
											src={IoCopySharp}
											size="23"
											color="rgba(153, 164, 176, 0.6)"
										/>
									</div></button
								>
							</div>
						</div>
						<div class="sc-ezbkAF kDuLvp input">
							<div class="input-label">
								<div class="tooltip-label">
									<span>Server Seed </span>
									<Tooltip text="A server randomly generated string">
										<Icon
										src={BiHelpCircle}
										size="23"
										color="rgba(153, 164, 176, 0.6)"
									/>
									</Tooltip>
								</div>
							</div>
							<div class="input-control">
								<input
									type="text"
									readonly
									value={gameSeeds.server_seed ||
										"Reveal after draw"}
								/>
							</div>
						</div>
						<div class="sc-ezbkAF kDuLvp input">
							<div class="input-label">
								<div class="tooltip-label">
									<span>Stop Block </span>
									<!--  -->
									<Tooltip text="The ETH blockchain height at 14:55 UTC+0 of draw date">
										<Icon
										src={BiHelpCircle}
										size="23"
										color="rgba(153, 164, 176, 0.6)"
									/>
									</Tooltip>
								</div>
							</div>
							<div class="input-control">
								<input
									type="text"
									placeholder="Reveal everyday at 15:00 UTC+0"
									readonly
									value={gameSeeds.client_start_block || 0}
								/>
							</div>
						</div>
						<div class="sc-ezbkAF kDuLvp input">
							<div class="input-label">
								<div class="tooltip-label">

									<span>Client Seed Block </span>
									<Tooltip text="The ETH blockchain height after 10 blocks from stop block">
										<Icon
										src={BiHelpCircle}
										size="23"
										color="rgba(153, 164, 176, 0.6)"
									/>
									</Tooltip>
									
								</div>
							</div>
							<div class="input-control">
								<input
									type="text"
									placeholder="Reveal when the 20th block after the stop block is generated"
									readonly
									value={!!gameSeeds.client_start_block
										? gameSeeds.client_start_block + 10
										: 0}
								/>
							</div>
						</div>
						<div class="sc-ezbkAF kDuLvp input">
							<div class="input-label">
								<div class="download-label">
									<span
										>Client Seed (Hashed) </span
									>
									<Tooltip text="Target block of ETH blockchain">
										<Icon
										src={BiHelpCircle}
										size="23"
										color="rgba(153, 164, 176, 0.6)"
									/>
									</Tooltip>
									<a
										download="download.csv"
										href="https://img2.nanogames.io"
										><Icon
											src={CgSoftwareDownload}
											size="20"
											color="rgba(153, 164, 176, 0.6)"
										/>All Tickets List File</a
									>
								</div>
							</div>
							<div class="input-control">
								<input
									type="text"
									placeholder="Reveal after Client Seed Block generated"
									readonly
									value={gameSeeds.client_seed_hash ||
										"Reveal after Client Seed Block generated"}
								/>
							</div>
						</div>
						<button
							class="sc-iqseJM sc-egiyK cBmlor fnKcEH button button-normal sub-btn"
						>
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								on:click={handleVerificationClick}
								class="button-inner"
							>
								Verify
							</div>
						</button>
					</div>
				</div>
			{:else}
				<Loader />
			{/if}
		{/if}
	</div>
</div>

<style>
	.dialog-back {
		position: absolute;
		left: 0px;
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
	.kBjSXI {
		position: fixed;
		z-index: 1000;
		inset: 0px;
		overscroll-behavior: contain;
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
		background: var(--affiliate-bg);
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
	.dialog-head .dialog-title {
		font-size: 1rem;
		margin: 0px;
		font-weight: bold;
		flex: 1 1 0%;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		color: var(--text-5);
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
		background: var(--affiliate-bg);
	}
	.dialog-body {
		position: absolute;
		inset: 0px;
		display: flex;
		overflow: hidden;
	}
	.default-style > div {
		border-radius: 20px;
		background-color: var(--card-bg-5);
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
	.YCgQD .item {
		margin-top: 0.9375rem;
	}
	.YCgQD .pri-tips {
		border: 1px solid var(--border-1);
		background-color: rgb(37, 39, 44);
		padding: 0.9375rem 1.25rem;
		border-radius: 1.25rem;
		color: rgb(67, 179, 9);
		margin: 0.875rem 0px;
	}
	.YCgQD span {
		color: rgb(67, 179, 9);
	}
	.dialog-box {
		color: rgba(153, 164, 176, 0.6);
		background-color: var(--card-bg-5);
		border-top-left-radius: 2.5rem;
		border-top-right-radius: 2.5rem;
		padding: 1.75rem 1.125rem;
	}
	.gKwlPS .tips {
		border: 1px solid rgb(67, 179, 9);
		background-color: rgba(93, 160, 0, 0.07);
		border-radius: 0.625rem;
		padding: 0.75rem 1.25rem;
		margin-top: 0.5rem;
		font-size: 0.75rem;
		color: rgb(67, 179, 9);
	}
	.gKwlPS .input {
		margin-top: 0.75rem;
	}
	.gKwlPS .input-label {
		margin: 0px 0px 0.25rem 0.75rem;
		color: rgba(153, 164, 176, 0.6);
	}
	.gKwlPS .download-label {
		width: 100%;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
	}
	.gKwlPS .download-label > span {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
	}
	.gKwlPS .download-label a {
		margin-left: auto;
		padding-right: 0.75rem;
		cursor: pointer;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
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
	.gKwlPS .input .tooltip-label {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
	}
	.kDuLvp .input-control {
		position: relative;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		border-radius: 1.25rem;
		border: 1px solid var(--border-1);
		background-color: var(--sidebar-card-bg);
		height: 3.5rem;
		padding: 0px 1.25rem;
		opacity: 1;
	}
	.gKwlPS .input .input-control input[readonly] {
		opacity: 1;
	}
	.gKwlPS .input .input-control input {
		color: var(--text-5);
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
		color: var(--text-5);
	}
	.gKwlPS .sub-btn {
		width: 17.75rem;
		margin: 2rem auto;
	}

	.fnKcEH.button {
		color: var(--text-5);
		box-shadow: rgba(29, 34, 37, 0.1) 0px 4px 8px 0px;
		background-color: rgb(67, 179, 9);
		background-image: conic-gradient(
			from 1turn,
			rgb(67, 179, 9),
			rgb(93, 219, 28)
		);
	}
	.gKwlPS .download-label a:hover {
		text-decoration: underline;
		color: var(--primary-color);
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
	.fWAvBM .copy-button {
		width: 2.5rem;
		height: 2.5rem;
		margin-right: -1.25rem;
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
