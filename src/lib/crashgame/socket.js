import { io } from "socket.io-client";
import { RealTimeURl } from "$lib/backendUrl"
import { crashRunning } from "./store"
const URL = RealTimeURl()
const socket = io(`${URL}`, {
    withCredentials: true
});


export const HandleCrashSocket = (()=>{
    socket.on("crasyu", data=>{
        crashRunning.set(data)
    })
})