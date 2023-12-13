<script>

</script>

<div class="dialog-body default-style " style="z-index: 2; transform: none;">
    <div class="sc-dkPtRN jScFby scroll-view sc-jCHUfY cruphB">
        <div class="item">
            <h2>How are results calculated?</h2>
            <div class="help-content">
                <p>To get the results.</p>
                <ul>
                    <li>First we calculate the hash value of the combination with HMAC_SHA256. This gives us a 64-character hexadecimal string: hash = HMAC_SHA256
                        (clientSeed:nonce, serverSeed).
                    </li>
                    <li>Finally, we take 8 characters of the hash and convert it to an int32 value. Then we divide the converted value by 0x100000000,
                        multiply it by 10001 and divide it by 100 so that the resulting number conforms to the constraints of the dice range.
                    </li>
                </ul>
                <br>
                <p>Note: A new seed must be set to verify the previous data (the server seed is encrypted).</p>
                <p>
                </p>
                <p>Did you really need to know this? Probably not. It’s there for those who expect transparency and precision in a provably fair game of chance.</p>
                <p>We put our "cards on the table." </p>
                <p>Good luck!</p>
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
.default-style > div {
    border-radius: 20px;
    background-color: rgb(30, 32, 36);
    padding: 1.25rem 1.25rem 0px;
}
.dialog-body > div {
    flex: 1 1 0%;
}
.cruphB {
    line-height: normal;
    user-select: text;
    color: rgba(153, 164, 176, 0.8);
    padding-bottom: 1.5rem !important;
}
.jScFby {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
    touch-action: pan-y;
    overscroll-behavior: contain;
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
.cruphB .item .help-content {
    margin-bottom: 2.75rem;
}
.cruphB .item .help-content p {
    margin: 0.75rem 0px;
    word-break: break-word;
}
 .cruphB .item ul {
    padding-left: 1.2em;
    margin: 0px;
}
.cruphB .item ol li, .cruphB .item ul li {
    margin: 0px 0px 1rem;
}
::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
}
</style>
