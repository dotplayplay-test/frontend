<script>
import Friendtable from "$lib/friends/friendtable.svelte";
import { affiliate_list } from "$lib/pages/affiliate/main/store/index";

</script>

<div class="sc-bqiRlB jzILhs">
    <div class="sc-gsDKAQ eKuxOW top">
        <span>Friend Number</span>
        <span class="nums">{$affiliate_list.length}<span>
    </div>

   <Friendtable />
</div>



<style>
.eKuxOW {
    padding: 20px;
    margin: 20px 30px;
    border: 1px solid rgb(234, 234, 234);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
}
.jzILhs .top > span {
    color: rgb(54, 67, 76);
    font-size: 14px;
    font-weight: bold;
}
.jzILhs .top > span::after {
    content: "";
    display: inline-block;
}

.jzILhs .top .nums {
    margin-left: 10px;
    font-size: 38px;
    color: rgb(84, 84, 84);
    letter-spacing: -1.2px;
    font-weight: bold;
}

.eKuxOW {
    padding: 20px;
    margin: 20px 30px;
    border: 1px solid rgb(234, 234, 234);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
}
</style>
