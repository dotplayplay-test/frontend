import { liveStats } from "../store";

export default function useLiveStats() {

    function recordGame(won, bet_amount, profit, token_img) {
        let stats = JSON.parse(localStorage.getItem("CRASH_LIVE_STATS") || JSON.stringify({
            token_img,
            profit: 0,
            wagered: 0,
            wins: 0,
            loses: 0,
            points: []
        }));
        if (stats.token_img !== token_img) {
            stats = resetStats(token_img);
        }
        const oldProfit = stats.profit;
        const newProfit = !won ? (oldProfit - bet_amount) : (stats.profit + profit);
        let newPoints = [...(stats.points || []), newProfit];
        if (newPoints.length > 15) {
            newPoints.shift(); 
        }
        stats = {
            ...stats,
            profit: newProfit,
            points: newPoints,
            wagered: stats.wagered + bet_amount,
            wins: won ? stats.wins + 1 : stats.wins,
            loses: !won ? stats.loses + 1 : stats.loses,
        };
        localStorage.setItem("CRASH_LIVE_STATS", JSON.stringify(stats));
        liveStats.set(stats);
    }

    function resetStats(token_img) {
        const _live = {
            token_img,
            profit: 0,
            wagered: 0,
            wins: 0,
            loses: 0,
            points: []
        };
        localStorage.setItem("CRASH_LIVE_STATS", JSON.stringify(_live));
        liveStats.set(_live);
        return _live;
    }

    function getStats() {
        return JSON.parse(localStorage.getItem("CRASH_LIVE_STATS") || JSON.stringify({
            token_img: "/coin/BTC.black.png",
            profit: 0,
            wagered: 0,
            wins: 0,
            loses: 0,
            points: [],
        }));
    }

    return { getStats, resetStats, recordGame };

}