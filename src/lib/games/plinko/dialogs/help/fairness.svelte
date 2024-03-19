<script>
</script>

<div class="sc-dkPtRN jScFby scroll-view sc-hAWBJg gRlUf">
  <div class="item">
    <h2>Fairness Verification</h2>
    <p>Solving the Trust Issue with Online Gambling</p>
    <p>
      The underlying concept of provable fairness is that players have the
      ability to prove and verify that their results are fair and unmanipulated.
      This is achieved through the use of a commitment scheme, along with
      cryptographic hashing.
    </p>
    <p>
      The commitment scheme is used to ensure that the player has an influence
      on all results generated. Cryptographic hashing is used to ensure that the
      casino also remains honest to this commitment scheme. Both concepts
      combined creates a trust-less environment when gambling online.
    </p>
    <p>This is simplified in the following representation:</p>
    <ul>
      <li>First, hash = HMAC_SHA512(clientSeed:nonce, serverSeed)</li>
      <li>
        Finally, we divide the hash into 16 groups in groups of 8 characters,
        each group will be converted to a number in the range [0, 1). If it is
        less than 0.5, the ball will fall to the left, otherwise it will fall to
        the right.
      </li>
    </ul>
    <br />
    <p>
      Note: A new seed must be set to verify the previous data (the server seed
      is encrypted)
    </p>
  </div>
</div>

<style>
  .gRlUf {
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
  .gRlUf .item {
    margin-bottom: 2.75rem;
  }
  .gRlUf .item h2:first-of-type {
    margin-top: 0.5rem;
  }
  .gRlUf .item h2 {
    font-size: 0.875rem;
    margin: 0px 0px 0.5rem;
    font-weight: 600;
    color: rgb(153, 164, 176);
  }
  .gRlUf .item h2 {
    font-size: 0.875rem;
    margin: 0px 0px 0.5rem;
    font-weight: 600;
    color: rgb(153, 164, 176);
  }
  .item ol li,
  .item ul li {
    margin: 0px 0px 1rem;
  }
  p {
    margin: 0.8em 0;
  }
  .item ul {
    padding-left: 1.2em;
    margin: 0px;
  }
</style>
