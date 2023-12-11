// import {io } from "socket.io-client";
import { RealTimeURl } from "$lib/backendUrl"
const URL = RealTimeURl()

// const socket = io(`${URL}`);
import {
    crashLoad, handleHasbet, active_playerEl, Load_animation, game_id, crash_all_users_Moon_trendballEl, v_default,
    loadingCrash, handleHasbet_amount, crashIsAlive, crashCurve, green_trendball_hasWinEl, Moon_trendball_hasWinEl,
    v_two, crashPoint, crashRunning, crash_historyEl, handle_IsRed, handle_IsGreen, crash_all_users_green_trendballEl,
    crash_all_users_red_trendballEl, handleRedtrendballPlayers, mybetEl, trendball_has_winEl, handle_IsMoon,
    v_three, v_five, v_seven, v_nine, v_ten, v_twenty, v_fivety, v_hundred, v_Twohundred, v_FiveHundred, v_thousand,
    h_two, h_four, h_six, h_eight, h_ten, h_twelve, h_fourteen, h_sixteen, h_eighteen, h_twenty, h_thirthy, h_fourty, h_sixty,
    h_eighty, h_hundred, hasCrashed, h_Threehundred, h_Sevenhundred, h_onethousand, handle_IsRedwinners
} from "./store"

import { week_cashback, month_cashback } from "../store/cashbacks";

export const handleCountdown = (() => {
    // const event = new EventSource(`${URL}/events`);
    // event.addEventListener("countdown", ({ data }) => {
    //     data = JSON.parse(data);
    //     // console.log("Countdown Event => ", data);
    //     if (data) {
    //         crashLoad.set(data.toFixed(2))
    //     } else {
    //         crashLoad.set(data)
    //     }
    // })
    // event.addEventListener("load-animation", ({ data }) => {
    //     data = JSON.parse(data);
    //     Load_animation.set(data)
    // })

    // event.addEventListener("crash-point", ({ data }) => {
    //     data = JSON.parse(data);
    //     crashPoint.set(data)
    // })

    // event.addEventListener("running-crash", ({ data }) => {
    //     data = JSON.parse(data);
    //     // console.log("running crash Event => ", data);
    //     if (data) {
    //         crashRunning.set(data)
    //     }
    //     else {
    //         crashRunning.set(0)
    //     }
    // })

    // event.addEventListener("crash-point", ({ data }) => {
    //     data = JSON.parse(data);
    //     if (data) {
    //         hasCrashed.set(data)
    //     }
    //     else {
    //         hasCrashed.set(0)
    //     }
    // })

    // event.addEventListener("crash-p", ({ data }) => {
    //     data = JSON.parse(data);
    //     crashRunning.set(data)
    // })

    // event.addEventListener("crash-all-redball-users", data => {
    //     if (data === "is-crash") {
    //         crash_all_users_red_trendballEl.set(true)
    //     } else if (data = "has_win") {
    //         trendball_has_winEl.set(true)
    //     }
    // })

    // event.addEventListener("crash-all-greenball-users", data => {
    //     if (data === "is-crash") {
    //         crash_all_users_green_trendballEl.set(true)
    //     } else if (data = "has_win") {
    //         green_trendball_hasWinEl.set(true)
    //     }
    // })

    // event.addEventListener("crash-all-moonball-users", data => {
    //     if (data === "is-crash") {
    //         crash_all_users_Moon_trendballEl.set(true)
    //     } else if (data = "has_win") {
    //         Moon_trendball_hasWinEl.set(true)
    //     }
    // })

    // event.addEventListener("crash-game-history", ({ data }) => {
    //     data = JSON.parse(data);
    //     crash_historyEl.set(data)
    // })

    // let winners = []
    // event.addEventListener("redball_update_wallet", ({ data }) => {
    //     data = JSON.parse(data);
    //     winners.push(data)
    //     setTimeout(() => {
    //         handle_IsRedwinners.set(winners)
    //     }, 1000)
    // })


    // event.addEventListener("crash-game-redtrend", ({ data }) => {
    //     data = JSON.parse(data);
    //     handleRedtrendballPlayers.set(data)
    // })

    // event.addEventListener("crash-autobet-users", ({ data }) => {
    //     data = JSON.parse(data);
    //     handleHasbet.set(false)
    // })

    // // ============= Manage the state of the game =======================
    // event.addEventListener("crash-state", data => {
    //     if (data === "load-crash") {
    //         loadingCrash.set(true)
    //         crashIsAlive.set(false)
    //         hasCrashed.set(false)
    //         green_trendball_hasWinEl.set(false)
    //         Moon_trendball_hasWinEl.set(false)
    //         trendball_has_winEl.set(false)
    //         crash_all_users_Moon_trendballEl.set(false)
    //         crash_all_users_green_trendballEl.set(false)
    //         crash_all_users_red_trendballEl.set(false)
    //     }
    //     if (data === "crash-isRunning") {
    //         loadingCrash.set(false)
    //         crashIsAlive.set(true)
    //         hasCrashed.set(false)
    //     }
    //     if (data === "hasCrashed") {
    //         loadingCrash.set(false)
    //         crashIsAlive.set(false)
    //         hasCrashed.set(true)
    //         handle_IsRed.set(false)
    //         handle_IsGreen.set(false)
    //         handle_IsMoon.set(false)
    //         handleHasbet.set(false)
    //         handleHasbet_amount.set(null)
    //     }
    // })

    // // ============ current game id ===========
    // event.addEventListener("game_id", data => {
    //     game_id.set(data)
    // })

    // //  ==================== active players ==============
    // event.addEventListener("active_players", data => {
    //     active_playerEl.set(data)
    // })

    // //  ==================== crash animation ==============
    // event.addEventListener("nuppp-curve", data => {
    //     crashCurve.set(data)
    // })

    // //  ==================== crash animation ==============
    // event.addEventListener("my-bet", data => {
    //     mybetEl.set(data)
    // })

    // event.addEventListener("v_default", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_default.set(data)
    // })


    // event.addEventListener("v_two", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_two.set(data)
    // })

    // event.addEventListener("v_three", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_three.set(data)
    // })

    // event.addEventListener("v_five", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_five.set(data)
    // })

    // event.addEventListener("v_seven", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_seven.set(data)
    // })

    // event.addEventListener("v_nine", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_nine.set(data)
    // })

    // event.addEventListener("v_ten", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_ten.set(data)
    // })
    // event.addEventListener("v_twenty", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_twenty.set(data)
    // })
    // event.addEventListener("v_fivety", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_fivety.set(data)
    // })

    // event.addEventListener("v_hundred", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_hundred.set(data)
    // })

    // event.addEventListener("v_Twohundred", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_Twohundred.set(data)
    // })

    // event.addEventListener("v_FiveHundred", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_FiveHundred.set(data)
    // })

    // event.addEventListener("v_thousand", ({ data }) => {
    //     data = JSON.parse(data);
    //     v_thousand.set(data)
    // })



    // event.addEventListener("h_two", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_two.set(data)
    // })

    // event.addEventListener("h_four", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_four.set(data)
    // })

    // event.addEventListener("h_six", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_six.set(data)
    // })

    // event.addEventListener("h_eight", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_eight.set(data)
    // })

    // event.addEventListener("h_ten", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_ten.set(data)
    // })

    // event.addEventListener("h_twelve", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_twelve.set(data)
    // })

    // event.addEventListener("h_fourteen", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_fourteen.set(data)
    // })

    // event.addEventListener("h_sixteen", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_sixteen.set(data)
    // })

    // event.addEventListener("h_eighteen", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_eighteen.set(data)
    // })

    // event.addEventListener("h_twenty", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_twenty.set(data)
    // })

    // event.addEventListener("h_thirthy", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_thirthy.set(data)
    // })

    // event.addEventListener("h_fourty", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_fourty.set(data)
    // })

    // event.addEventListener("h_sixty", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_sixty.set(data)
    // })

    // event.addEventListener("h_eighty", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_eighty.set(data)
    // })

    // event.addEventListener("h_hundred", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_hundred.set(data)
    // })

    // event.addEventListener("h_Threehundred", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_Threehundred.set(data)
    // })

    // event.addEventListener("h_Sevenhundred", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_Sevenhundred.set(data)
    // })

    // event.addEventListener("h_onethousand", ({ data }) => {
    //     data = JSON.parse(data);
    //     h_onethousand.set(data)
    // })

    // event.addEventListener("weekly-count-down", ({ data }) => {
    //     data = JSON.parse(data);
    //     week_cashback.set(data)
    // })

    // event.addEventListener("monthly-count-down", ({ data }) => {
    //     data = JSON.parse(data);
    //     month_cashback.set(data)
    // })

})