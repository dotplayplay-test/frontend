import {
  makeObservable,
  observable,
  computed,
  action,
  runInAction,
  reaction,
} from "mobx";
import CryptoJS from "crypto-js";
import BaseGame from "./BaseGame";
import CrashGameGraph from "./CrashGameGraph";
import CrashXBetHandler from "./CrashXBetHandler";
import Decimal from "decimal.js";
import { sortedIndexBy } from "lodash";
import UserStore from "$lib/logics/UserStore";
import WalletManager from "$lib/logics/WalletManager";
import { ServerURl } from "../../../backendUrl";
import axios from "axios";
function Bn(seed) {
  // t = t.slice(0, 13);
  // let e = parseInt(t, 16) / Math.pow(16, 13);
  // (e = parseFloat(e.toPrecision(9))), (e = 99 / (1 - e));
  // const n = Math.floor(e);
  // return Math.max(1, n / 100);
  const nBits = 52; // number of most significant bits to use
  // 1. r = 52 most significant bits
  seed = seed.slice(0, nBits / 4);
  const r = parseInt(seed, 16);
  // 2. X = r / 2^52
  let X = r / Math.pow(2, nBits); // uniformly distributed in [0; 1)
  // 3. X = 99 / (1-X)
  X = 99 / (1 - X);
  // 4. return max(trunc(X), 100)
  const result = Math.floor(X);
  return Math.max(1, result / 100);
}
function Rn(t) {
  return String(CryptoJS.SHA256(t));
}
function calculateElapsed(t) {
  return Math.log(t) / 6e-5;
}
function calculateRate(t) {
  return Math.pow(Math.E, 6e-5 * t);
}
function Fp(players) {
  return players.map((player) => ({
    userId: player.userId,
    avatar: player.avatar,
    name: player.name,
    hidden: player.hidden,
    currencyImage: player.currencyImage,
    currencyName: player.currencyName,
    bet: new Decimal(player.bet),
    rate: player.rate,
  }));
}
function Gn(data) {
  return {
    gameId: data.gameId,
    status: data.status,
    prepareTime: new Decimal(data.prepareTime),
    startTime: new Decimal(data.startTime),
    hash: data.hash || "",
    maxRate: data.maxRate,
    players: Fp(data.players) || [],
    xBets: Fp(data.xBets) || [],
  };
}
async function currencInfo() {
  return {
    normalBetLimits: [
      {
        currencyName: "PPL",
        minAmount: 1,
        maxAmount: 200,
      },
      {
        currencyName: "USDT",
        minAmount: 1,
        maxAmount: 200,
      },
      {
        currencyName: "PPF",
        minAmount: 1,
        maxAmount: 200,
      },
    ],
    xbetLimits: [
      {
        currencyName: "PPL",
        minAmount: 1,
        maxAmount: 200,
      },
      {
        currencyName: "USDT",
        minAmount: 1,
        maxAmount: 200,
      },
      {
        currencyName: "PPF",
        minAmount: 1,
        maxAmount: 200,
      },
    ],
  };
}
function logError(err) {
  console.log("Error In crash game => ", err);
}

export default class CrashGame extends BaseGame {
  static MAX_HISTORY = 2e3;
  constructor() {
    super(
      {
        name: "crash",
        namespace: ServerURl(),
        validateLink: "https://nanogamesio.github.io/verify/crash.html",
        fairLink: "/crash_help/fairness",
      },
      () => null
    );
    this.user = null;
    this.gameId = 0;
    this.elapsed = 0;
    this.rate = 0;
    this.maxRate = 100;
    this.startTime = Date.now();
    this.hash = "";
    this.players = [];
    this.showPlayers = [];
    this.showPlayersLimit = true;
    this.throwLimit = {};
    this.history = [];
    this.playersDict = {};
    this.status = 0;
    this.betInfo = null;
    this.nextBetInfo = null;
    this.paused = false;
    this.checkPauseTimer = 0;
    this.salt =
      "Qede00000000000w00wd001bw4dc6a1e86083f95500b096231436e9b25cbdd0075c4";
    this.xbet = new CrashXBetHandler(this);
    this.showXbetLimit = true;
    this.graph = new CrashGameGraph(this);
    this.requesting = false;

    makeObservable(this, {
      players: observable.ref,
      gameId: observable,
      elapsed: observable,
      rate: observable,
      maxRate: observable,
      startTime: observable,
      hash: observable,
      history: observable.ref,
      status: observable,
      betInfo: observable,
      nextBetInfo: observable,
      paused: observable,
      showXbetLimit: observable,
      canBet: computed,
      canEscape: computed,
      // onJackpotChange: action,
      addPlayer: action,
      onPrepare: action,
      onBegin: action,
      onEnd: action,
      setStatus: action,
      setNextBetInfo: action,
      setBetInfo: action,
      setMaxRate: action,
      setElapsed: action,
      setRate: action,
      setHistory: action,
    });
    this.user = UserStore.getInstance().user;
    reaction(
      () => UserStore.getInstance().user,
      (user) => {
        if (user) {
          this.user = user;
        }
      }
    );
    this.bindEvent();
  }

  get canBet() {
    return 1 == this.status && !this.betInfo && !this.script.isRunning;
  }
  get canEscape() {
    return 2 == this.status && this.betInfo && 0 == this.betInfo.rate;
  }

  setHistory(_v) {
    this.history = _v;
  }

  setMaxRate(_v) {
    this.maxRate = _v;
  }

  setRate(_r) {
    this.rate = _r;
  }
  setStatus(_s) {
    this.status = _s;
  }
  setNextBetInfo(_n) {
    this.nextBetInfo = _n;
  }
  setBetInfo(_b) {
    this.betInfo = _b;
  }
  setElapsed(_e) {
    this.elapsed = _e;
  }
  /*setStatus: action,
      setNextBetInfo: action,
      setNetInfo: action,
      setMaxRate: action,
      setElapsed: action,*/

  async init() {
    const [currencyRes] = await Promise.all([
      //TODO: get currency beting limits
      currencInfo() /*fetch("/crash/currency-v2/", { cache: false }).then((res) => res.json())*/,
      super.init(),
    ]);

    this.throwLimit = currencyRes.normalBetLimits.reduce((acc, limit) => {
      acc[limit.currencyName] = {
        maxAmount: parseFloat(limit.maxAmount),
        minAmount: parseFloat(limit.minAmount),
      };
      return acc;
    }, {});

    this.xbet.jackpot = currencyRes.xbetLimits.reduce((acc, limit) => {
      acc[limit.currencyName] = {
        currencyName: limit.currencyName,
        jackpotAmount: Infinity,
        maxBetAmount: parseFloat(limit.maxAmount),
        minBetAmount: parseFloat(limit.minAmount),
        maxProfitAmount: Infinity,
      };
      return acc;
    }, {});
  }

  bindEvent() {
    this.socket.on("connect", this.onConnect.bind(this));
    this.socket.on("reconnecting", () => this.setStatus(0));
    // this.socket.on("pj", this.onJackpotChange.bind(this));
    this.socket.on("pr", this.onPrepare.bind(this));
    this.socket.on("b", this.onBet.bind(this));
    this.socket.on("bg", this.onBegin.bind(this));
    this.socket.on("e", this.onEscape.bind(this));
    this.socket.on("ed", this.onEnd.bind(this));
    this.socket.on("st", this.onSettle.bind(this));
    this.socket.on("pg", this.onProgress.bind(this));

    this.script.enableAutoStep(false);
    this.on("game_prepare", this.script.step);

    const betKey = this.hotkeyList.find((key) => key.key === "space");
    if (betKey) {
      betKey.handler = () => {
        if (!this.requesting) {
          if (this.canBet) {
            this.handleBetCrash().catch(logError);
          } else if (this.canEscape) {
            this.handleEscape().catch(logError);
          }
        }
        return false;
      };
    }

    this.on("game_end", () => {
      if (!this.betInfo) {
        this.script.onGameEnd([...this.history.slice(-20)].reverse());
      }
    });
  }

  onPrepare({ gameId, startTime, prepareTime }) {
    this.gameId = gameId;
    this.setStatus(1);
    this.hash = "";
    this.startTime = startTime; // Date.now() + startTime - prepareTime;
    this.setRate(0);
    this.setElapsed(0);
    this.players = [];
    this.showPlayers = [];
    this.playersDict = {};
    this.setBetInfo(null);

    if (this.nextBetInfo) {
      this.handleBetCrash(this.nextBetInfo).catch(logError);
      this.setNextBetInfo(null);
    }

    this.emit("player_change");
    this.emit("game_prepare");
    this.emit("game_progress");
  }

  onBegin({ betUserIds }) {
    this.setStatus(2);
    this.startTime = Date.now();

    if (
      this.betInfo &&
      !this.playersDict[this.user.userId] &&
      betUserIds.indexOf(this.user.userId) !== -1
    ) {
      const currency = this.betInfo.currencyName;
      this.addPlayer([
        {
          userId: this.user.userId,
          name: this.user.username,
          avatar: this.user.avatar,
          currencyName: currency,
          currencyImage: this.betInfo.currencyImage,
          bet: this.betInfo.bet.mul(
            WalletManager.getInstance().dict[currency].unitAmount
          ),
          rate: 0,
          usd: 0,
        },
      ]);
    }
  }

  onProgress({ elapsed }) {
    this.setStatus(2);
    this.setElapsed(elapsed);
    this.setRate(calculateRate(elapsed));

    let expectedTime = Date.now() - this.elapsed;
    if (this.startTime > expectedTime) {
      this.startTime = expectedTime;
    }

    this.emit("game_progress");
    this.checkPause();
  }

  onEscape({ userId, rate, force }) {
    if (this.status !== 2) return;

    const player = this.playersDict[userId];
    if (player) {
      if (player.userId === this.user.userId) {
        this.betInfo && this.setBetInfo({ ...this.betInfo, rate });
        this.emit("escapeSuccess", {
          amount: this.betInfo.bet,
          odds: this.betInfo.rate,
          currencyName: this.betInfo.currencyName,
          currencyImage: this.betInfo.currencyImage,
        });
        WalletManager.getInstance().createDeduction(this.betInfo.bet.mul(rate).add(this.betInfo.bet).negated(), this.betInfo.currencyName);
      }

      if (force) {
        // notify(() =>
        //   ReactDOM.render(
        //     <EscapeNotification game={this} />,
        //     document.getElementById("popup-root")
        //   )
        // );
      }

      player.rate = rate;
      this.emit("player_change");
      this.emit("escape", { ...player });
    }
  }

  onEnd({ maxRate, hash }) {
    this.paused = false;
    clearTimeout(this.checkPauseTimer);
    this.setStatus(3);
    this.setRate(new Decimal(maxRate).div(100).toNumber());
    this.setElapsed(calculateElapsed(this.rate));
    this.hash = hash;
  }

  waitGameEnd() {
    const gameId = this.gameId;
    return new Promise((resolve, reject) => {
      this.once("game_end", (result) => {
        if (result.gameId !== gameId) {
          reject(new Error("Network Error!"));
        } else {
          resolve(result);
        }
      });
    });
  }

  waitGameStart() {
    return new Promise((resolve) => {
      this.once("game_prepare", () => {
        resolve(0);
      });
    });
  }

  onSettle({ gameId, hash, maxRate, escapes, xBets }) {
    let player = this.playersDict[this.user?.userId];
    const settleData = {
      gameId: gameId,
      hash: hash,
      odds: maxRate / 100,
      crash: maxRate,
      currencyImage: this.currencyImage,
      currencyName: this.currencyName,
      wager: 0,
      cashedAt: 0,
    };
    if (player) {
      let userBet = escapes.find(
        (escape) => escape.userId === this.user.userId
      );
      let userXBets = xBets.filter((x) => x.userId === this.user.userId);

      if (
        userBet &&
        userBet.rate !== player.rate &&
        this.betInfo &&
        ((this.betInfo.rate = userBet.rate), (player.rate = this.betInfo.rate))
      ) {
        settleData.wager = player.bet.toNumber();
        settleData.cashedAt = player.rate;
      }
      this.emit("user_bet_result", {
        bets: [
          {
            won: !!player.rate,
            wager: player.bet.toNumber(),
            profit: !!player.rate
              ? player.bet.mul(player.rate).sub(player.bet).toNumber()
              : player.bet.toNumber(),
            currencyImage: this.currencyImage,
          },
          ...userXBets.map((x) => {
            const won =
              x.rate === 1.96
                ? maxRate < 2
                : x.rate === 2
                ? maxRate >= 2
                : maxRate >= 10;
            return {
              won,
              wager: player.bet.toNumber(),
              profit: won
                ? player.bet.mul(x.rate).sub(player.bet).toNumber()
                : player.bet.toNumber(),
              currencyImage: this.currencyImage,
            };
          }),
        ],
      });
    }
    this.resetHistory(settleData);
    // this.betInfo;
    this.emit("game_end", settleData);
  }

  onBet(bet) {
    if (this.status !== 1) {
      console.log("onbet msg error");
      return;
    }
    const betData = {
      currencyName: bet.currencyName,
      currencyImage: bet.currencyImage,
      bet: new Decimal(bet.bet),
      userId: bet.userId,
      name: bet.name,
      avatar: bet.avatar,
      hidden: bet.hidden,
      rate: 0,
      usd: WalletManager.getInstance().amountToLocale(bet.bet, bet.currentName) || 0,
    };

    if (bet.userId === this.user.userId && !this.betInfo) {
      this.setBetInfo({
        ...betData,
        bet: new Decimal(betData.bet),
        rate: 0,
        autoRate: 0,
      });
    }

    this.addPlayer([betData]);
  }

  async onConnect() {
    const [joinResponse /*jackpotResponse*/] = await Promise.all([
      this.socketRequest("join", { game: this.name }).then(Gn),
      /*this.socketRequest("jackpot"),*/
      this.initPromises,
    ]);

    // console.log("Join Info ", joinResponse);

    await this.loadGameHistory();

    runInAction(() => {
      let status = joinResponse.status;

      if (status === 1) {
        this.setStatus(1);
      } else if (status === 2) {
        this.setStatus(2);
      } else {
        this.setStatus(3);
      }

      this.gameId = joinResponse.gameId;
      this.setMaxRate(new Decimal(joinResponse.maxRate).div(100).toNumber());
      this.setElapsed(calculateElapsed(this.maxRate));
      this.startTime = joinResponse.startTime;
      this.hash = joinResponse.hash;

      this.players = [];
      this.displayedPlayers = [];
      this.playerDict = {};
      this.setBetInfo(null);

      const parsedPlayers = joinResponse.players.map((player) => {
        const {
          userId,
          name,
          currencyImage,
          currencyName,
          bet,
          rate,
          avatar,
          hidden,
        } = player;
        return {
          userId,
          name,
          avatar,
          hidden,
          currencyImage,
          currencyName,
          rate,
          bet: new Decimal(bet),
          usd: 0,
        };
      });

      this.addPlayer(parsedPlayers);

      const currentPlayer = this.playerDict[this.user?.userId];
      if (currentPlayer) {
        this.setBetInfo({
          bet: currentPlayer.bet,
          autoRate: currentPlayer.rate,
          rate: currentPlayer.rate,
          currencyName: currentPlayer.currencyName,
          currencyImage: currentPlayer.currencyImage,
        });
      }

      this.xbet.init2(joinResponse.xBets);

      // this.onJackpotChange(jackpotResponse); // data.jackpot == {currency: number}
    });
  }

  // onJackpotChange({ jackpot }) {
  //   Object.keys(jackpot).forEach((currency) => {
  //     const throwLimitInfo = this.throwLimit[currency];
  //     if (!throwLimitInfo) return;

  //     const jackpotAmount = jackpot[currency]; //bn2amount(jackpot[currency], currency);
  //     const maxBetAmount = Math.min(
  //       0.0048 * jackpotAmount,
  //       throwLimitInfo.maxAmount
  //     );

  //     const existingJackpot = this.jackpot[currency];

  //     if (existingJackpot) {
  //       existingJackpot.jackpotAmount = jackpotAmount;
  //       existingJackpot.maxBetAmount = maxBetAmount;
  //     } else {
  //       this.jackpot[currency] = {
  //         currencyName: currency,
  //         jackpotAmount: jackpotAmount,
  //         maxBetAmount: maxBetAmount,
  //         minBetAmount: throwLimitInfo.minAmount,
  //         maxProfitAmount: 0.0075 * jackpotAmount,
  //       };
  //     }
  //   });
  // }

  addPlayer(players) { 
    players.forEach((player) => {
      if (!this.playersDict[player.userId]) {
        const bet = WalletManager.getInstance().amountToLocale(player.bet.toNumber(), player.currencyName);
        const newPlayer = observable({ ...player, ...{ usd: bet } });
        this.playersDict[player.userId] = newPlayer;
        const index = sortedIndexBy(this.players, newPlayer, (t) => -t.usd);
        this.players.splice(index, 0, newPlayer);
      }
    });
    this.emit("player_change");
  }

  async handleBetCrash(betData, scriptId) {
    
    if (!betData) {
      betData = {
        bet: this.amount,
        autoRate: this.maxRate,
        rate: 0,
        currencyName: this.currencyName,
        currencyImage: this.currencyImage,
      };
    }
    await this.beforeBetCheck(betData.bet);
    this.setBetInfo(betData);
    const deduction = WalletManager.getInstance().createDeduction(
      betData.bet,
      betData.currencyName
    );
    this.txId = deduction;
    const requestParams = {
      userId: this.user.userId,
      name: this.user.username,
      avatar: this.user.avatar,
      gameId: this.gameId,
      currencyName: betData.currencyName,
      currencyImage: betData.currencyImage,
      bet: betData.bet.toFixed(8),
      autoEscapeRate: betData.autoRate,
      scriptId: scriptId || null,
      frontgroundId: this.txId,
    };
    try {
      await this.socketRequest("throw-bet", requestParams);
      WalletManager.getInstance().resolveDeduction(this.txId);
    } catch (error) {
      WalletManager.getInstance().resolveDeduction(this.txId, false);
      this.setBetInfo(null);
      throw error;
    }
  }

  async handleScriptBet(betAmount, e) {
    await this.handleBetCrash(
      {
        bet: new Decimal(betAmount),
        autoRate: e.payout,
        rate: 0,
        currencyName: this.currencyName,
      },
      this.script.script ? this.script.script.id : undefined
    );
    await this.waitGameEnd();
    return (
      (this.betInfo ? this.betInfo.rate : 0) / 100,
      [...this.history.slice(-20)].reverse()
    );
  }

  async handleEscape() {
    this.requesting = true;
    try {
      await this.socketRequest("throw-escape", {
        gameId: this.gameId,
        hidden: this.user.hidden,
        userId: this.user.userId,
        avatar: this.user.avatar,
      });
    } catch (error) {
      throw error;
    } finally {
      this.requesting = false;
    }
  }

  async handleNext(isNull) {
    try {
      await this.beforeBetCheck(this.amount);
      this.setNextBetInfo(
        isNull
          ? null
          : {
              bet: this.amount,
              autoRate: this.maxRate,
              rate: 0,
              currencyName: this.currencyName,
              currencyImage: this.currencyImage,
            }
      );
    } catch (error) {}
  }

  resetHistory({ gameId, hash, cashedAt, wager }) {
    gameId = parseInt(gameId);
    const lastGame = this.history[this.history.length - 1];
    const lastGameId = parseInt(lastGame ? lastGame.gameId : "0");
    let newGames = [];
    for (let i = 0; i < CrashGame.MAX_HISTORY && !(gameId <= lastGameId); i++) {
      const odds = Bn(
        ((hashValue) => {
          const salt = this.salt;
          return String(
            CryptoJS.HmacSHA256(CryptoJS.enc.Hex.parse(hashValue), salt)
          );
        })(hash)
      );

      const newGame = {
        gameId: gameId,
        hash: hash,
        odds: odds,
        crash: 100 * odds,
        cashedAt: 0,
        wager: 0,
      };
      if (i === 0) {
        newGame.cashedAt = cashedAt;
        newGame.wager = wager;
      }
      newGames.push(newGame);
      gameId--;
      hash = Rn(hash);
    }
    this.setHistory(
      this.history.concat(newGames.reverse()).slice(-CrashGame.MAX_HISTORY)
    );
  }

  async loadGameHistory() {
    const response = await axios.get(
      ServerURl() + "/api/user/crash-game/history/",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const recentResults = response.data.recent;
    this.resetHistory({
      gameId: recentResults[0].gameId,
      hash: recentResults[0].hash,
      odds: 0,
      crash: 0,
      cashedAt: 0,
      wager: 0,
    });
  }

  checkPause() {
    window.clearTimeout(this.checkPauseTimer);
    this.paused = false;
    this.checkPauseTimer = window.setTimeout(() => (this.paused = true), 5000);
  }

  active() {
    if (this.script.isRunning) {
      this.enableHotkey();
    } else {
      this.xbet.active();
      super.active();
    }
  }

  deactivate() {
    if (this.script.isRunning) {
      this.enableHotkey(false);
    } else {
      this.xbet.deactivate();
      super.deactivate();
    }
  }
}
