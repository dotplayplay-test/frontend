import { io } from "socket.io-client";
import { ServerURl} from "$lib/backendUrl"
const URL = ServerURl()
import { chats } from "$lib/chat-room/store/index"
const socket = io(`${URL}`);
import {dice_troo, dicegameplays, dice_wallet} from "../store/index"


export const handleCountdown = (()=>{
    const handleDicebet = ((data)=>{
        socket.emit("dice-bet", data)
    })

    socket.on("dice-gamePLayers", data=>{
        dicegameplays.set(data)
    })

    socket.on("dice-wallet", data=>{
        dice_wallet.set(data)
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