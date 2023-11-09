import { io } from "socket.io-client";
const URL = "https://dotplayplay-3a34f3d133a0.herokuapp.com"
// const URL = "http://localhost:8000"
import { chats } from "$lib/chat-room/store/index"
const socket = io(`${URL}`);
import {dice_troo} from "../store/index"
import { dicegameplays } from "../store/index"

export const handleCountdown = (()=>{
    const handleDicebet = ((data)=>{
        socket.emit("dice-bet", data)
    })

    socket.on("dice-gamePLayers", data=>{
        dicegameplays.set(data)
    })

    socket.on("new-messages", data=>{
        chats.set(data)
    })

    const handleChattingMessages = ((data)=>{
        socket.emit("message", data)
    })

    socket.on("dice-troo", data=>{
        dice_troo.set(data)
    })
    return { handleDicebet, handleChattingMessages }
})