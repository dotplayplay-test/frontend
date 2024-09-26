<script>

  export let fields = [{ label: "", id: "" }];
  export let emptyText;
  export let data = [];

  let index = 0;
  const perPageCount = 10;
  let totalPage = Math.ceil(data.length / perPageCount);
</script>

{#if data.length > 0}
  <div class="transaction-list">
    <table class="ui-table s1ultrss">
      <thead>
        <tr>
          {#each fields as field}
            <th>{field.label}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each data.slice(index, perPageCount) as item}
          <tr>
            {#each fields as field}
              <td class="cl-light align-center">
                <slot col={field} row={item} />
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="ui-pagination m-fixbot">
      <div class="ui-select">
        <div class="select-trigger">
          {perPageCount}
          <div class="arrow top">

          </div>
        </div>
      </div>
      <div class="total">Total {totalPage}</div>
      <div class="pages-box pages-wrap">
        <button class="active" disabled="">1</button>
      </div>
      <div class="pages-box page-pn pageConic">
        <button disabled="" class="disabled previous-btn">
          <!-- <svg class="s1ff97qc icon prev">
                <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
            </svg> -->
        </button>
        <button disabled="" class="disabled next-page">
          <!-- <svg class="s1ff97qc icon next">
                <use xlink:href="/assets/symbol-defs.ef6a79c4.svg#icon_Arrow"></use>
            </svg> -->
        </button>
      </div>
    </div>
  </div>
{:else}
  <div class="transaction-list">
    <div class="sc-lhMiDA">
      <div class="sc-eCImPb cuPxwd full-abs">
        <img
          src="https://static.nanogames.io/assets/empty.acd1f5fe.png"
          alt=""
        />
        {#if emptyText}
          <div class="msg">{emptyText}</div>
        {:else}
          <div class="msg">No results found</div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .ui-pagination {
    padding: 0.5rem 1.5rem;
    background: #1c1e22;
  }
  .ui-pagination .ui-select {
    width: 6em;
    height: 2rem;
  }
  .ui-select {
    position: relative;
    height: 2.5rem;
  }
  .ui-select .select-trigger {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;
    padding: 0 1.25rem;
    user-select: none;
    border-radius: var(--border-radius);
    background-color: #17181b;
  }
  .ui-pagination {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .ui-select .select-trigger .arrow {
    width: 2.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
  }
  .ui-pagination .total {
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.5rem 0 24px;
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ui-pagination .pages-wrap {
    background-color: rgba(24, 25, 29, 0.6);
    padding: 0 1.125rem;
  }

  .s1ultrss .cl-light {
    color: #fff;
  }
  .s1ultrss tbody tr td {
    border-bottom: 1px solid #3c404a;
  }
  .s1ultrss tbody tr:last-child td {
    border-bottom: none;
  }
  .transaction-list {
    background-color: #31343c;
    border-radius: 6px;
  }
  .transaction-list {
    -webkit-flex: auto;
    -ms-flex: auto;
    flex: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  table {
    padding: 0.75rem;
  }
  .ui-table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
  }
  thead {
    background: #25272c;
  }
  .ui-table th:first-child,
  .ui-table td:first-child {
    text-align: left;
  }
  .s1ultrss thead th {
    font-weight: 800;
  }
  .ui-table th,
  .ui-table td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.5rem;
  }
  .ui-table th {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ui-table th,
  .ui-table td {
    overflow: hidden;
    text-align: center;
    padding: 0.875rem 0.5rem;
    font-size: 14px;
  }
  .ui-table th {
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ui-table th:last-child,
  .ui-table td:last-child {
    text-align: right;
  }
  .s1ultrss thead th {
    padding: 0.5rem;
  }
  .ui-table td:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }
  .ui-table th:first-child,
  .ui-table td:first-child {
    text-align: left;
  }
  thead th {
    padding: 20px !important;
  }
</style>
