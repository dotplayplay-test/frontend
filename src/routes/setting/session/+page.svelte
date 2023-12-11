<script>
    import { isLightMode } from "../../../lib/store/theme";

</script>

<div class="sc-kTqLtj fpLWcl">
   <p class={$isLightMode ? "light-text title" : "title"}>Sessions Used in Past</p>
   <div class="session-table">
      <table class={$isLightMode ? "light-text sc-bBHHxi kISsPx" : "sc-bBHHxi kISsPx"}>
         <thead>
            <tr>
               <th>Browser</th>
               <th>Position</th>
               <th>IP Address</th>
               <th>Last Used</th>
               <th>Action</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td class={$isLightMode ? "light-text" : "white-td"}>Windows 10 (Chrome 11)</td>
               <td class={$isLightMode ? "light-text" : ""}>NG</td>
               <td class={$isLightMode ? "light-text" : "white-td"}>102.88.35.179</td>
               <td class={$isLightMode ? "light-text" : ""}>Online</td>
               <td class={$isLightMode ? "light-text" : "white-td"}>Using</td>
            </tr>
            <tr>
               <td class={$isLightMode ? "light-text" : "white-td"}>Linux (Chrome 8)</td>
               <td class={$isLightMode ? "light-text" : ""}>NG</td>
               <td class={$isLightMode ? "light-text" : "white-td"}>102.215.57.197</td>
               <td class={$isLightMode ? "light-text" : ""}>11:52:52 AM</td>
               <td class={$isLightMode ? "light-text" : "white-td"}>
                  <div class="remove-btn">Remove Device</div>
               </td>
            </tr>
            <tr>
               <td class={$isLightMode ? "light-text" : "white-td"}>Windows 10 (Chrome 11)</td>
               <td class={$isLightMode ? "light-text" : ""}>NG</td>
               <td class={$isLightMode ? "light-text" : "white-td"}>102.215.57.197</td>
               <td class={$isLightMode ? "light-text" : ""}>11:52:18 AM</td>
               <td class={$isLightMode ? "light-text" : "white-td"}>
                  <div class="remove-btn">Remove Device</div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
   <div class="sc-cCcXHH dXTFyi pagination sc-haTkiu klZsBU">
      <div class="sc-cidDSM dmcoXZ">Total 1</div>
      <div class="sc-jcFjpl sc-caiLqq dORpLZ dYUXij pages-wrap">
         <button class="active" disabled="">1</button>
      </div>
      <div class="sc-jcFjpl sc-caiLqq dORpLZ dYUXij page-pn">
         <button disabled="" class="disabled previous-btn">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon prev">
               <use xlink:href="#icon_Arrow"></use>
            </svg>
         </button>
         <button disabled="" class="disabled next-page">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="sc-gsDKAQ hxODWG icon next">
               <use xlink:href="#icon_Arrow"></use>
            </svg>
         </button>
      </div>
   </div>
</div>

<style>
    .light-grey-bg {
    background-color: rgb(245, 246, 250) !important;
  }
  .light-bg {
    background-color: rgb(255, 255, 255) !important;
  }
  .light-text {
    color: rgb(49, 55, 61) !important;
  }
  .remove-btn{
    color: rgb(237, 99, 0);
    cursor: pointer;
  }
  .remove-btn:hover{
    text-decoration: underline;
  }
.fpLWcl .title {
    margin: 0px;
    color: rgb(245, 246, 247);
}
.fpLWcl .session-table {
    height: 40rem;
}
table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.kISsPx {
    border-collapse: separate;
    border-spacing: 0px;
    border: none;
    width: 100%;
}
.kISsPx thead {
    width: 100%;
}
.kISsPx thead th {
    font-weight: 500;
    height: 3.875rem;
}
.kISsPx tbody tr {
    height: 3.5rem;
    border-radius: 1.25rem;
}
.cMCBIc > .pc table tbody tr > td:first-child {
    border-radius: 0.625rem 0px 0px 0.625rem;
}

.kISsPx tbody > tr:nth-child(2n-1) > td {
   background-color: rgba(35, 38, 42, 0.5);
}
.kISsPx tbody tr > td:first-child {
    padding-left: 0.625rem;
    border-radius: 1.25rem 0px 0px 1.25rem;
}
.kISsPx tbody tr td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}
.fpLWcl .white-td {
    color: rgb(245, 246, 247);
}
.kISsPx tbody tr td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}

.dXTFyi {
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
}
.dmcoXZ {
    height: 2rem;
    line-height: 2rem;
    margin: 0px 0.5rem 0px 24px;
    font-size: 0.75rem;
    color: rgba(153, 164, 176, 0.6);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.klZsBU .pages-wrap {
    background-color: rgba(24, 25, 29, 0.3);
}
.dORpLZ.pages-wrap .active {
    color: rgb(245, 246, 247);
    font-weight: 600;
}
.dORpLZ.pages-wrap button {
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
    margin: 0px;
}
.dORpLZ.page-pn {
    margin-left: 0.75rem;
}
.dYUXij.page-pn button.disabled {
    background-color: rgba(60, 64, 74, 0.4);
}
.dORpLZ.page-pn button {
    width: 2.125rem;
    height: 2rem;
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
}
.dYUXij.page-pn button {
    background-color: rgba(60, 64, 74, 0.6);
}
.dORpLZ.pages-wrap {
    background-color: rgba(24, 25, 29, 0.6);
    padding: 0px 1.125rem;
}
.dORpLZ {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 2rem;
    border-radius: 2rem;
    overflow: hidden;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
}
.dORpLZ.page-pn {
    margin-left: 0.75rem;
}
</style>