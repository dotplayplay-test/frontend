<script>
  export let medal;
  export let onClick;
</script>

<button on:click={onClick} class="card">
  <img src="/achieve/{medal.src}" alt={medal.name} />
  <p class="name">{medal.name}</p>
  <div class="num">
    <svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Firends"></use></svg
    >
    0
  </div>
</button>

<style>
  .card {
    background: var(--affiliate-bg);
    padding: 1.25rem 0px;
    border-radius: 1.25rem;
    text-decoration: none;
    color: rgba(153, 164, 176, 0.8);
    font-size: 0.75rem;
    line-height: 1.33;
    cursor: pointer;
    flex: 0 0 32.6%;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    transform: translateZ(1px);
  }

  .card:hover .name {
    color: white;
  }

  .name {
    text-align: center;
    margin: 0.875rem 0px;
    font-size: 12px;
    max-width: 8.125rem;
    color: rgba(153, 164, 176, 0.8);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
  }

  img {
    height: 4.375rem;
    opacity: 0.5;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: rgb(67, 179, 9);
    margin-right: 0.3125rem;
  }

  .num {
    min-width: 3.875rem;
    height: 2.25rem;
    border-radius: 1.375rem;
    padding: 0px 0.625rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(67, 179, 9);
    font-size: 0.75rem;
    font-weight: 600;
    background: rgb(30, 32, 36);
  }

  @media screen and (max-width: 650px) {
    .card {
      padding: 20px 6px;
      border-radius: 1.25rem;
    }
    .name {
      margin: 10px;
      font-size: 10px;
    }
    img {
      height: 40px;
    }
    .num {
      padding: 5px 14px;
      font-size: 8px;
      min-width: auto;
      height: auto;
    }
    svg {
      width: 12px;
      height: 12px;
      margin-right: 2px;
    }
  }
</style>
