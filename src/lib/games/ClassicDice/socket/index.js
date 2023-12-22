import { io } from "socket.io-client";
import { ServerURl} from "$lib/backendUrl"
const URL = ServerURl()
import { chats } from "$lib/chat-room/store/index"
const socket = io(`${URL}`);
import {dice_troo, dicegameplays, dice_wallet,  Handles_Loading} from "../store/index"
import { handleliveHistory} from "$lib/games/mines/store/index"


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

    socket.on("mines-hs", data=>{
       handleliveHistory.set(data)
    })

    const handleChattingMessages = ((data)=>{
        socket.emit("message", data)
    })

    const handleMinesHistory = ((data)=>{
        socket.emit("mines-history", data)
    })

    socket.on("dice-troo", data=>{
        dice_troo.set(data)
        Handles_Loading.set(false)
    })
    return { handleDicebet, handleChattingMessages, handleMinesHistory }
})