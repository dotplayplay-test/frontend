<script>
</script>

<div class="game-actions">
  <button class="action-item"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_HotKeys"></use></svg
    ></button
  ><button class="action-item"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"
      ><use xlink:href="#icon_LiveStats"></use></svg
    ></button
  ><button class="action-item"
    ><svg
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="sc-gsDKAQ hxODWG icon"><use xlink:href="#icon_Help"></use></svg
    ></button
  >
</div>

<style>
  .game-actions {
    display: flex;
    order: 10;
    -webkit-box-align: center;
    align-items: center;
    height: 4rem;
    position: relative;
  }
  .game-actions::before {
    content: "";
    flex: 1 1 0%;
  }
  .action-item:hover {
    background: rgba(49, 52, 60, 0.35);
  }
  .action-item:hover .icon {
    font-size: 1rem;
    fill: rgb(245, 246, 247);
  }
  .action-item {
    cursor: pointer;
    margin-right: 0.5rem;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .gJxbeS .action-item .icon {
    fill: rgb(153, 164, 176);
    transition: all 0.3s ease-in-out 0s;
  }

  .hxODWG {
    width: 1.4em;
    height: 1.4em;
    fill: rgba(153, 164, 176, 0.6);
  }
  .game-actions::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 1px;
    opacity: 0.3;
    background-color: rgb(49, 52, 60);
  }
</style>
