import { io } from "socket.io-client";
const socket = io("http://localhost:8000");

import { crashLoad,handleHasbet, Load_animation, loadingCrash, crashIsAlive, hasCrashed, crashPoint,crashDetails, crashRunning } from "./store"


export const handleCountdown = (()=>{

    socket.on("countdown", data=>{
        crashLoad.set(data.toFixed(2))
    })
    socket.on("load-animation", data=>{
        Load_animation.set(data)
    })
    socket.on("crash-point", data=>{
        crashPoint.set(data)
    })
    socket.on("running-crash", data=>{
        crashRunning.set(data)
    })


    // ============= Manage the state of the game =======================
    socket.on("crash-state", data =>{
        if(data === "load-crash"){
            loadingCrash.set(true)
            crashIsAlive.set(false)
            hasCrashed.set(false)
        }
         if(data === "crash-isRunning"){
            loadingCrash.set(false)
            crashIsAlive.set(true)
            hasCrashed.set(false)
        }  
        if(data === "hasCrashed"){
            loadingCrash.set(false)
            crashIsAlive.set(false)
            hasCrashed.set(true)
            handleHasbet.set(false)
        }  
    })


})
