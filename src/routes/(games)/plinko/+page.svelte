<script>
    import { io } from "socket.io-client";
    const socket = io("http://localhost:8000");

    

    // import { crashCurve } from "$lib/crashgame/store"
    
    // $: console.log($crashCurve)
let ani = ''
$:{
    socket.on("crash_curve", data =>{
        ani = (data)
    })
}

</script>

<div class="plinko">
    <h1>op</h1>
    <img src={ani} alt="">
    <h1>y</h1>
</div>