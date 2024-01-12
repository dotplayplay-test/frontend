<script>
  import Loader from "$lib/components/loader.svelte";
  import useDeck from "../../hooks/deck";
  import CryptoJS from "crypto-js";
  import { UseFetchData } from "$lib/hook/useFetchData";
  import { handleAuthToken } from "$lib/store/routes";
  import { error_msg } from "../../store";
  import { onMount } from "svelte";
  const { getCardAt, getCardNumber } = useDeck();
  export let betID = 0;

  $: gameDetails = null;

  $: currentRound = 0;
  $: verifyConfig = {
    hashPairs: [],
    decimalPairs: [],
    calcValues: [],
    sum: 0,
    index: 0,
    card: null,
    hmac: "",
    cardNumber: 0,
  };

  onMount(async () => {
    try {
      const { data } = await UseFetchData($handleAuthToken).fetch(
        `/hilo-game/details/${betID}`
      );
      gameDetails = data;
      currentRound = gameDetails.betLog.round;
      calculateDrawnCard();
    } catch (error) {
      error_msg.set(error.message);
    }
  });
  let timeout;
  const handleRoundChange = (e) => {
    currentRound = parseInt(e.currentTarget.value || "0");
    if (timeout) clearTimeout(timeout);
    setTimeout(() => {
      calculateDrawnCard();
    }, 300);
  };

  function calculateDrawnCard() {
    const hashPairs = [];
    const decimalPairs = [];
    const calcValues = [];
    let sum = 0;
    const hmac = String(
      CryptoJS.HmacSHA256(
        `${gameDetails.seedHistory.clientSeed}:${gameDetails.betLog.nonce}:${currentRound}`,
        gameDetails.seedHistory.serverSeed
      )
    );
    for (let i = 0; i < hmac.length / 2; i++) {
      const pair = hmac.substring(i * 2, i * 2 + 2);
      const pairDecimal = parseInt(pair, 16);
      hashPairs.push(pair);
      decimalPairs.push(pairDecimal);
      if (i < 4) {
        const calc = pairDecimal / 256 ** (i + 1);
        calcValues.push(calc);
        sum += calc;
      }
    }
    const index = sum * 52;
    const card = getCardAt(Math.floor(index));

    verifyConfig = {
      hashPairs,
      decimalPairs,
      sum,
      index,
      card,
      hmac,
      calcValues,
      cardNumber: getCardNumber(Math.floor(index)),
    };
  }
</script>

{#if gameDetails}
  <div class="sc-dkPtRN jScFby scroll-view sc-dMOJrz cBvmGv">
    <h2>Input</h2>
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">Server Seed</div>
      <div class="input-control">
        <input
          type="text"
          readonly
          value={gameDetails.seedHistory.serverSeed}
        />
      </div>
    </div>
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">Client Seed</div>
      <div class="input-control">
        <input
          type="text"
          readonly
          value={gameDetails.seedHistory.clientSeed}
        />
      </div>
    </div>
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">Nonce</div>
      <div class="input-control">
        <input readonly type="text" value={gameDetails.betLog.nonce} />
      </div>
    </div>
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">Round</div>
      <div class="input-control">
        <input
          on:input={handleRoundChange}
          type="number"
          value={currentRound}
        />
      </div>
    </div>
    <h2>Output</h2>
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">Sha256(server_seed)</div>
      <div class="input-control">
        <input
          type="text"
          readonly
          value={gameDetails.seedHistory.serverSeedHash}
        />
      </div>
    </div>
    <div class="sc-ezbkAF kDuLvp input">
      <div class="input-label">
        HMAC_Sha256(client_seed:nonce:round, server_seed)
      </div>
      <div class="input-control">
        <input type="text" readonly value={verifyConfig.hmac} />
      </div>
    </div>
    <h3>Bytes</h3>
    <div class="sc-hAWBJg fgopBr">
      <table class="byte-table">
        <tbody
          ><tr>
            {#each verifyConfig.hashPairs as pair, index (`${index}_${pair}`)}
              <td>{pair}</td>
            {/each}
          </tr><tr
            >{#each verifyConfig.decimalPairs as pair, index (`${index}_${pair}`)}
              <td>{pair}</td>
            {/each}</tr
          ></tbody
        >
      </table>
    </div>
    <h3>Bytes to Number</h3>
    <div class="sc-hAWBJg fgopBr">
      <div class="flex">
        <table class="sc-dYtuZ fWuhdN">
          <tbody
            ><tr
              ><td colspan="3"
                ><span>(</span><span class="cl-primary"
                  >{verifyConfig.decimalPairs.slice(0, 4).join()}</span
                ><span>) =&gt; [0, ..., 52)</span><br /><span>= </span><span
                  class="cl-primary">28</span
                ></td
              ></tr
            ><tr
              ><td></td><td>{verifyConfig.calcValues[0].toFixed(8)}</td><td
                >({verifyConfig.decimalPairs[0]} / (256^1))</td
              ></tr
            ><tr
              ><td><span>+</span></td><td
                >{verifyConfig.calcValues[1].toFixed(8)}</td
              ><td>({verifyConfig.decimalPairs[1].toFixed(8)} / (256^2))</td
              ></tr
            ><tr
              ><td><span>+</span></td><td
                >{verifyConfig.calcValues[2].toFixed(8)}</td
              ><td>({verifyConfig.decimalPairs[2].toFixed(8)} / (256^3))</td
              ></tr
            ><tr
              ><td><span>+</span></td><td
                >{verifyConfig.calcValues[3].toFixed(8)}</td
              ><td>({verifyConfig.decimalPairs[3].toFixed(8)} / (256^4))</td
              ></tr
            ><tr><td>=</td><td>{verifyConfig.sum}</td></tr><tr
              ><td>*</td><td class="cl-primary">52</td></tr
            ><tr><td>=</td><td class="cl-primary">{verifyConfig.index}</td></tr
            ></tbody
          >
        </table>
      </div>
    </div>
    <h2>Final Result</h2>
    <div class="sc-eTwdGJ ipqrmS">
      <div>
        <span class="card"
          >{`${verifyConfig.card?.suite}${verifyConfig.card?.rank}`}</span
        >,{Math.floor(verifyConfig.index)},{verifyConfig.cardNumber}
      </div>
      <hr />
      <div class="table-wrap">
        <table>
          <tbody
            ><tr
              ><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td
                >6</td
              ><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td
              ><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td
              ><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td
              ><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td
              ><td>31</td><td>32</td><td>33</td><td>34</td><td>35</td><td>36</td
              ><td>37</td><td>38</td><td>39</td><td>40</td><td>41</td><td>42</td
              ><td>43</td><td>44</td><td>45</td><td>46</td><td>47</td><td>48</td
              ><td>49</td><td>50</td><td>51</td></tr
            ><tr
              ><td><span class="card">♠A</span></td><td
                ><span class="card">♥4</span></td
              ><td><span class="card">♣7</span></td><td
                ><span class="card">♦10</span></td
              ><td><span class="card">♠2</span></td><td
                ><span class="card">♣K</span></td
              ><td><span class="card">♥5</span></td><td
                ><span class="card">♣8</span></td
              ><td><span class="card">♦J</span></td><td
                ><span class="card">♠3</span></td
              ><td><span class="card">♥6</span></td><td
                ><span class="card">♦Q</span></td
              ><td><span class="card">♣9</span></td><td
                ><span class="card">♥A</span></td
              ><td><span class="card">♣4</span></td><td
                ><span class="card">♦7</span></td
              ><td><span class="card">♠10</span></td><td
                ><span class="card">♥2</span></td
              ><td><span class="card">♦K</span></td><td
                ><span class="card">♣5</span></td
              ><td><span class="card">♦8</span></td><td
                ><span class="card">♠J</span></td
              ><td><span class="card">♥3</span></td><td
                ><span class="card">♣6</span></td
              ><td><span class="card">♠Q</span></td><td
                ><span class="card">♦9</span></td
              ><td><span class="card">♣A</span></td><td
                ><span class="card">♦4</span></td
              ><td><span class="card">♠7</span></td><td
                ><span class="card">♥10</span></td
              ><td><span class="card">♣2</span></td><td
                ><span class="card">♠K</span></td
              ><td><span class="card">♦5</span></td><td
                ><span class="card">♠8</span></td
              ><td><span class="card">♥J</span></td><td
                ><span class="card">♣3</span></td
              ><td><span class="card">♦6</span></td><td
                ><span class="card">♥Q</span></td
              ><td><span class="card">♠9</span></td><td
                ><span class="card">♦A</span></td
              ><td><span class="card">♠4</span></td><td
                ><span class="card">♥7</span></td
              ><td><span class="card">♣10</span></td><td
                ><span class="card">♦2</span></td
              ><td><span class="card">♥K</span></td><td
                ><span class="card">♠5</span></td
              ><td><span class="card">♥8</span></td><td
                ><span class="card">♣J</span></td
              ><td><span class="card">♦3</span></td><td
                ><span class="card">♠6</span></td
              ><td><span class="card">♣Q</span></td><td
                ><span class="card">♥9</span></td
              ></tr
            ><tr
              ><td>161</td><td>180</td><td>199</td><td>218</td><td>162</td><td
                >205</td
              ><td>181</td><td>200</td><td>219</td><td>163</td><td>182</td><td
                >220</td
              ><td>201</td><td>177</td><td>196</td><td>215</td><td>170</td><td
                >178</td
              ><td>221</td><td>197</td><td>216</td><td>171</td><td>179</td><td
                >198</td
              ><td>172</td><td>217</td><td>193</td><td>212</td><td>167</td><td
                >186</td
              ><td>194</td><td>173</td><td>213</td><td>168</td><td>187</td><td
                >195</td
              ><td>214</td><td>188</td><td>169</td><td>209</td><td>164</td><td
                >183</td
              ><td>202</td><td>210</td><td>189</td><td>165</td><td>184</td><td
                >203</td
              ><td>211</td><td>166</td><td>204</td><td>185</td></tr
            ></tbody
          >
        </table>
      </div>
    </div>
  </div>
{:else}
  <div style="height: 500px;"><Loader /></div>
{/if}

<style>
  .jScFby {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
    flex: 1 1 0%;
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
  }
  .cBvmGv h2:first-of-type {
    margin-top: 0px;
  }
  .cBvmGv h2 {
    margin-top: 2rem;
    color: rgb(136, 165, 184);
  }
  .kDuLvp {
    margin-top: 1rem;
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
  .fgopBr {
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .fgopBr .byte-table {
    border-collapse: collapse;
  }
  .fgopBr table {
    margin-right: 2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .fgopBr .byte-table td {
    width: 1.25rem;
    padding: 0px 0.25rem;
    border: 1px solid rgb(143, 124, 0);
  }
  .flex {
    display: flex;
  }
  .fWuhdN {
    text-align: right;
    width: 14rem;
    flex: 0 0 auto;
  }
  .cl-primary {
    color: var(--primary-color);
  }
  .cBvmGv h2 {
    margin-top: 2rem;
    color: rgb(136, 165, 184);
  }

  h2 {
    font-weight: 400;
    font-size: 1.0625rem;
  }
  .ipqrmS .card {
    font-family: Arial;
  }
  .ipqrmS .table-wrap {
    overflow-x: auto;
  }
  .ipqrmS .table-wrap table {
    border-collapse: collapse;
    text-align: center;
  }
  .ipqrmS .table-wrap tr:nth-child(2n-1) {
    background-color: rgb(42, 57, 70);
  }
  .ipqrmS .table-wrap td {
    padding: 0.125rem;
    border: 1px solid rgb(143, 124, 0);
    font-size: 0.8125rem;
  }
</style>
