<div class="sc-gKclnd sc-furwcr keuypW hTWjOR loading">
	<svg viewBox="0 0 84 24" fill="#5da000"
		><circle cx="18" cy="12" r="6"></circle>
		<circle cx="18" cy="12" r="6"></circle>
		<circle cx="42" cy="12" r="6"></circle>
		<circle cx="66" cy="12" r="6"></circle>
	</svg>
</div>


<style>
	.hTWjOR {
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
	}

	.keuypW {
		flex: 1 1 0%;
		height: 100%;
		align-self: stretch;
		box-sizing: border-box;
	}

	.hTWjOR > svg {
		height: 40%;
		max-height: 1.25rem;
		max-width: 80%;
		stroke: transparent;
	}

	.hTWjOR circle:nth-child(1) {
		animation: 0.6s ease 0s infinite normal none running lds-1;
	}
	.hTWjOR circle:nth-child(2) {
		animation: 0.6s ease 0s infinite normal none running lds-2;
	}
	.hTWjOR circle:nth-child(3) {
		animation: 0.6s ease 0s infinite normal none running lds-2;
	}
	.hTWjOR circle:nth-child(4) {
		animation: 0.6s ease 0s infinite normal none running lds-3;
	}
	.hTWjOR circle {
		transform-origin: center center;
		will-change: transform;
		animation-timing-function: linear;
	}

	@keyframes lds-1 {
		0% {
			transform: scale(0.4) translateX(28.57%);
			opacity: 0.3;
		}
		100% {
			transform: scale(1) translateX(0%);
			opacity: 1;
		}
	}
	@keyframes lds-2 {
		0% {
			transform: translateX(0%);
		}

		100% {
			transform: translateX(28.57%);
		}
	}
	@keyframes lds-3 {
		0% {
			transform: scale(1) translateX(0%);
			opacity: 1;
		}
		100% {
			transform: scale(0.4) translateX(-28.57%);
			opacity: 0.3;
		}
	}
</style>
