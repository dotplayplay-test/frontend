import { io } from "socket.io-client";
const socket = io("http://localhost:8000");

import { crashLoad,handleHasbet,active_playerEl, Load_animation,game_id,
     loadingCrash,handleHasbet_amount, crashIsAlive,crashCurve,
      hasCrashed, crashPoint, crashRunning, crash_historyEl } from "./store"


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

    socket.on("crash-game-history", data=>{
        crash_historyEl.set(data)
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
            handleHasbet_amount.set(null)
        }  
    })

    // ============ current game id ===========
    socket.on("game_id", data =>{
        game_id.set(data)
    })

    //  ==================== active players ==============
    socket.on("active_players", data =>{
        active_playerEl.set(data)
    })

       //  ==================== crash animation ==============
       socket.on("crash_curve", data =>{
        crashCurve.set(data)
    })
})
