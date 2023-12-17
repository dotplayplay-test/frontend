<script>

</script>

<div class="dialog-body default-style " style="z-index: 2; transform: none;">
    <div class="sc-dkPtRN jScFby scroll-view sc-jCHUfY cruphB">
        <div class="item"><h2>How Are the Results Calculated?</h2>
            <div class="content">
                <p>To get the results, we calculate the hash value of the combination with HMAC_SHA256. This gives us a 64-character hexadecimal string: hash = HMAC_SHA256 (clientSeed:nonce, serverSeed).</p>
                <div class="sc-dPiLbb jQVFAL code-area ">
                    <pre>
                        {`  const crypto = require("crypto");

                        function getResult(hash) {
                        const allNums = [
                        7, 2, 19, 25, 1, 13, 5, 24, 14, 6, 15, 9, 22, 16, 3, 17, 18, 20, 8, 21, 4,
                        12, 10, 23, 11,
                        ];
                        let seed = hash;
                        let finalNums = createNums(allNums, seed);
                        seed = crypto.createHash("SHA256").update(seed).digest("hex");
                        finalNums = createNums(finalNums, seed);
                        return finalNums.map((m) =&gt; m.num.num);
                        }

                        function createNums(allNums, hash) {
                        let nums = [];
                        let h = crypto.createHash("SHA256").update(hash).digest("hex");
                        allNums.forEach((c) =&gt; {
                        nums.push({ num: c, hash: h });
                        h = h.substring(1) + h.charAt(0);
                        });
                        nums.sort(function (o1, o2) {
                        if (o1.hash &lt; o2.hash) {
                        return -1;
                        } else if (o1.hash === o2.hash) {
                        return 0;
                        } else {
                        return 1;
                        }
                        });
                        return nums;
                        }

                        function main (serverSeed, clientSeed, nonce) {
                        let resultArr = [clientSeed, nonce];
                        let hmacSha256Result = crypto.createHmac("sha256", serverSeed).update(resultArr.join(":")).digest("hex")
                        let resultList = getResult(hmacSha256Result);
                        console.log(resultList);
                        }

                        // main("server seed", "client seed", "nonce");`}
                    </pre>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
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

.default-style>div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}

.dialog-body>div {
    flex: 1 1 0%;
}

.cruphB {
    line-height: normal;
    user-select: text;
    color: rgba(153, 164, 176, 0.8);
    padding-bottom: 1.5rem !important;
    font-size: .875rem;
}

.cruphB .item {
    margin-bottom: 2.75rem;
}

.cruphB .item h2:first-of-type {
    margin-top: 0.5rem;
}

.cruphB .item h2 {
    font-size: 0.875rem;
    margin: 0px 0px 0.5rem;
    font-weight: 600;
    color: rgb(153, 164, 176);
}

p {
    margin: 0.8em 0;
}

.jQVFAL {
    padding: 1.25rem;
    border-radius: 1.25rem;
    color: rgb(245, 246, 247);
    background-color: rgba(45, 48, 53, 0.5);
    border: 1px solid rgb(45, 48, 53);
}

.jQVFAL pre {
    margin: 0px;
    padding: 0px;
    overflow-x: auto;
}
</style>
