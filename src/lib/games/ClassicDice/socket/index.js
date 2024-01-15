import { io } from "socket.io-client";
import { ServerURl } from "$lib/backendUrl"
const URL = ServerURl()
import { chats } from "$lib/chat-room/store/index"
const socket = io(`${URL}`);
import { dice_troo, dicegameplays, dice_wallet, Handles_Loading } from "../store/index"
import { handleliveHistory } from "$lib/games/mines/store/index"
import { active_playerEl } from "$lib/crashgame/store";
import { chatCounter } from "$lib/store/chat-counter"
import { profileStore } from "$lib/store/profile";


export const handleCountdown = (() => {
    const handleDicebet = ((data) => {
        socket.emit("dice-bet", data)
    })

    socket.on("dice-gamePLayers", data => {
        dicegameplays.set(data)
    })

    socket.on("dice-wallet", data => {
        dice_wallet.set(data)
    })

    socket.on("new-messages", data => {
        let user_id
        profileStore.subscribe($profileStore => user_id = $profileStore.user_id);
        if (data.newMessage[data.newMessage.length - 1].user_id !== user_id) {
            chatCounter.update(currentValue => currentValue + 1)
        }
    })

    socket.on("grabCoinDropResponse", data => {
        console.log(data);
        const newData = data.data
        if (newData)
            chats.update(existingChats => {
                return existingChats.map(chat => {
                    if (chat.msg_id === newData.msg_id) {
                        return newData;
                    }
                    return chat;
                });
            });
    })

    socket.on("mines-hs", data => {
        handleliveHistory.set(data)
    })

    socket.on("active-bets-crash", data => {
        active_playerEl.set(data)
    })

    const handleChattingMessages = ((data) => {
        socket.emit("message", data)
    })

    const handleGrabCoinDrop = ((data) => {
        socket.emit("grab_coin", data)
    })

    const handleMinesHistory = ((data) => {
        socket.emit("mines-history", data)
    })

    const handleCrashActiveBet = ((data) => {
        socket.emit("crash-activebet", data)
    })

    socket.on("dice-troo", data => {
        dice_troo.set(data)
        Handles_Loading.set(false)
    })
    console.log("count down");
    return { handleDicebet, handleChattingMessages, handleMinesHistory, handleCrashActiveBet, handleGrabCoinDrop }
})