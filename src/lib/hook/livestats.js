export default function useLiveStats(store, key) {
  let stats = {};

  function recordGame(won, bet_amount, profit, token_img) {
    /*let stats = JSON.parse(localStorage.getItem(key) || JSON.stringify({
            token_img,
            profit: 0,
            wagered: 0,
            wins: 0,
            loses: 0,
            points: []
        }));*/
    if (stats.token_img !== token_img) {
      stats = resetStats(token_img);
    }
    const oldProfit = stats.profit;
    const newProfit = !won ? oldProfit - bet_amount : stats.profit + profit;
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
    // localStorage.setItem(key, JSON.stringify(stats));
    store.set(stats);
  }

  function resetStats(token_img) {
    const _live = {
      token_img,
      profit: 0,
      wagered: 0,
      wins: 0,
      loses: 0,
      points: [],
    };
    // localStorage.setItem(key, JSON.stringify(_live));
    stats = _live;
    store.set(stats);
    return stats;
  }

  function getStats() {
    return Object.keys(stats).length ? stats : {
      token_img:
        "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png",
      profit: 0,
      wagered: 0,
      wins: 0,
      loses: 0,
      points: [],
    } /*JSON.parse(
      localStorage.getItem(key) ||
        JSON.stringify()
    )*/;
  }

  return { getStats, resetStats, recordGame };
}
