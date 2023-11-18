<script>
let sjka = []
</script>

<div>
    {#if sjka.length > 0 }
    {#each sjka as er}
        hr
    {/each}
    {:else}
    <div class="transaction-list">
        <div class="sc-lhMiDA">
            <div class="sc-eCImPb cuPxwd  full-abs">
                <img src="https://static.nanogames.io/assets/empty.acd1f5fe.png" alt="">
                <div class="msg">No data yet! </div>
            </div>
        </div>
    </div>
    {/if}
</div>

<style>
.transaction-list {
    background-color: var(--1n7ksai);
    border-radius: var(--border-radius);
}

</style>