import { debounce, sortBy, throttle } from "lodash";
import AutoBet from "./AutoBet";
import GameEventHandler from "./GameEventHandler";
import {
  action,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";
import Decimal from "decimal.js";
import { ServerURl } from "../../../backendUrl";
import WalletManager from "./WalletManager";
import UserStore from "./UserStore";
// Crash Game Bet Handlers
export default class CrashXBetHandler extends GameEventHandler {
  constructor(game) {
    super({ name: "crash_xbet", namespace: ServerURl() }, () => null);

    this.throwLimit = {};
    this.game = game;
    this.myBets = [null, null, null];
    this.autoBetType = null;
    this.nextBets = [null, null, null];
    this.redList = [];
    this.greenList = [];
    this.result = 0;
    this.prevRate = 1;
    this.autoBet = null;
    this.betDict = {};

    this.typeInfo = {
      [-200]: { payout: 1.96, index: 0, label: "Red" },
      200: { payout: 2, index: 1, label: "Green" },
      1000: { payout: 10, index: 2, label: "Moon" },
    };

    this.disableAutoConnect = true;

    makeObservable(this, {
      myBets: observable,
      autoBetType: observable,
      nextBets: observable,
      redList: observable,
      greenList: observable,
      result: observable,
      init2: action,
      onPrepare: action,
      onEnd: action,
      onEnd2: action,
      onEnd10: action,
      addBets: action,
      addMyBet: action,
      updateNextBets: action,
      setBetStatus: action,
      setAutoBetType: action,
    });
    this.autoBet = new AutoBet(
      this,
      undefined,
      this.game.waitGameStart.bind(this.game)
    );

    this.autoBet.on("start", () => this.setBetStatus(true));
    this.autoBet.on("stop", () => this.setBetStatus(false));

    this.game.socket.on("xb", async (bet) =>
      this.addBets([this.formatBet(bet)])
    );

    this.game.on("game_prepare", this.onPrepare.bind(this));
    this.game.on("game_end", this.onEnd.bind(this));
    this.game.on("game_progress", this.onProgress.bind(this));

    this.settings.hotkeyEnable = false;
    reaction(
      () => this.autoBetType,
      (newType) => {
        if (newType) {
          this.autoBet.start();
        } else {
          this.autoBet.stop();
          this.setBetStatus(false);
        }
      }
    );

    reaction(
      () => this.autoBet.isRunning,
      (isRunning) => {
        if (!isRunning) {
          this.autoBetType = null;
        }
      }
    );
    this.addBets = (function (callback, wait = 0) {
      let queue = [];
      const flush = throttle(
        () => callback(queue.splice(0, queue.length)),
        wait
      );
      return (t) => {
        queue.push(...t);
        flush();
      };
    })(this.addBets.bind(this), 200);
  }

  setBetStatus(isBetting) {
    if (!this.autoBet.isRunning) {
      this.isBetting = isBetting;
    }
  }

  setAutoBetType(type) {
    if (!this.autoBet.isRunning) {
      this.autoBetType = type;
    }
  }

  init2(bets) {
    this.betDict = {};
    this.redList = [];
    this.greenList = [];

    const formattedBets = bets.map(this.formatBet);

    formattedBets
      .filter((bet) => bet.userId === UserStore.getInstance().user.userId)
      .forEach(({ bet, currencyName, type, gameId }) => {
        this.addMyBet({
          gameId,
          bet,
          currencyName,
          type,
          status: 0,
        });
      });
    this.addBets(formattedBets);
    if (this.game.rate >= 2) {
      this.onEnd2();
    }

    if (this.game.rate >= 10) {
      this.onEnd10();
    }
  }

  onPrepare() {
    runInAction(() => {
      this.myBets.fill(null);

      this.result = 0;
      this.betDict = {};
      this.redList = [];
      this.greenList = [];

      this.nextBets.forEach((bet) => {
        if (bet) {
          bet.gameId = this.game.gameId;
          this.handleBet(bet);
        }
      });
      this.nextBets.fill(null);
    });
  }

  onProgress() {
    if (!this.game.rate) return;
    const rate = this.game.rate;

    if (this.prevRate < 2) {
      if (rate >= 2) {
        this.onEnd2();
      }
    } else if (this.prevRate < 10) {
      if (rate >= 10) {
        this.onEnd10();
      }
    }

    this.prevRate = rate;
  }

  onEnd() {
    this.onEnd2();
    this.onEnd10();
  }

  onEnd2() {
    const rate = this.game.rate;
    const myRedBet = this.getMyBetByType(-200);
    const myGreenBet = this.getMyBetByType(200);

    const redMultiplier = rate < 2 ? 1 : 2;
    const greenMultiplier = rate >= 2 ? 1 : 2;

    this.result = rate < 2 ? -200 : 200;

    if (myRedBet && myRedBet.status === 0) {
      myRedBet.status = redMultiplier;
      if (myRedBet.status === 1) {
        this.emit("win", myRedBet);
        WalletManager.getInstance().createDeduction(
          myRedBet.bet.mul(rate).add(myRedBet.bet).negated(),
          myRedBet.currencyName
        );
      }
    }

    if (myGreenBet && myGreenBet.status === 0) {
      myGreenBet.status = greenMultiplier;
      if (myGreenBet.status === 1) {
        this.emit("win", myGreenBet);
        WalletManager.getInstance().createDeduction(
          myGreenBet.bet.mul(rate).add(myGreenBet.bet).negated(),
          myGreenBet.currencyName
        );
      }
    }

    this.redList.forEach((bet) => (bet.status = redMultiplier));

    this.greenList
      .filter((bet) => bet.type === 200)
      .forEach((bet) => (bet.status = greenMultiplier));
  }

  onEnd10() {
    const rate = this.game.rate;
    const myMoonBet = this.getMyBetByType(1000);

    const moonMultiplier = rate >= 10 ? 1 : 2;

    if (myMoonBet && myMoonBet.status === 0) {
      myMoonBet.status = moonMultiplier;
      if (myMoonBet.status === 1) {
        this.emit("win", myMoonBet);
        WalletManager.getInstance().createDeduction(
          myMoonBet.bet.mul(rate).add(myMoonBet.bet).negated(),
          myMoonBet.currencyName
        );
      }
    }

    this.greenList
      .filter((bet) => bet.type === 1000)
      .forEach((bet) => (bet.status = moonMultiplier));
  }

  addBets(bets) {
    let hasRed = false;
    let hasGreen = false;

    bets.forEach((bet) => {
      if (!bet.betId) {
        bet.betId = Math.floor(Math.random() * 1000) + Date.now();
      }
      if (!this.betDict[bet.betId]) {
        this.betDict[bet.betId] = bet;

        if (bet.type === -200) {
          this.redList.push(bet);
          hasRed = true;
        } else {
          this.greenList.push(bet);
          hasGreen = true;
        }
      }
    });

    if (hasRed) {
      this.redList = sortBy(this.redList, ["type"], ["desc"]);
    }

    if (hasGreen) {
      this.greenList = sortBy(this.greenList, ["type"], ["desc"]);
    }
  }

  async handleBet(bet, scriptId = 0) {
    if (!bet) {
      if (!this.autoBetType) {
        throw new Error("");
      }

      bet = {
        gameId: this.game.gameId,
        type: this.autoBetType,
        bet: this.amount,
        userId: this.game.user.userId,
        name: this.game.user.username,
        avatar: this.game.user.avatar,
        hidden: this.game.user.hidden,
        currencyName: this.currencyName,
        currencyImage: this.currencyImage,
        status: 0,
      };
    }

    await this.beforeBetCheck(bet.bet, bet.currencyName);

    this.setBetStatus(true);

    const deduction = WalletManager.getInstance().createDeduction(
      bet.bet,
      bet.currencyName
    );

    try {
      await this.game.socketRequest("throw-xbet", {
        ...bet,
        bet: parseFloat(
          bet.bet.toFixed(
            WalletManager.getInstance().getPrecision(bet.currencyName)
          )
        ),
        x: bet.type,
        scriptId,
        frontgroundId: deduction,
      });

      let myBet = this.addMyBet(bet);

      await this.game.waitGameEnd();

      const multiplier =
        myBet.status === 1 ? this.typeInfo[myBet.type].payout : 0;

      WalletManager.getInstance().resolveDeduction(deduction);

      return multiplier;
    } catch (err) {
      WalletManager.getInstance().resolveDeduction(deduction, false);
      throw err;
    } finally {
      this.setBetStatus(false);
      this.syncCurrency();
    }
  }

  handleBetByType(type) {
    return this.handleBet({
      type,
      userId: this.game.user.userId,
      name: this.game.user.username,
      avatar: this.game.user.avatar,
      hidden: this.game.user.hidden,
      currencyName: this.currencyName,
      currencyImage: this.currencyImage,
      bet: this.amount,
      status: 0,
      gameId: this.game.gameId,
    });
  }

  async handleBetNext(type) {
    await this.beforeBetCheck(this.amount);
    this.updateNextBets(type, {
      type,
      userId: this.game.user.userId,
      name: this.game.user.username,
      avatar: this.game.user.avatar,
      hidden: this.game.user.hidden,
      currencyName: this.currencyName,
      currencyImage: this.currencyImage,
      bet: this.amount,
      status: 0,
      gameId: this.game.gameId,
    });
  }

  updateNextBets(type, value) {
    this.nextBets[this.typeInfo[type].index] = value;
  }

  handleCancelNext(type) {
    this.updateNextBets(type, null);
  }

  getMyBetByType(type) {
    return this.myBets[this.typeInfo[type].index];
  }

  addMyBet(bet) {
    this.myBets[this.typeInfo[bet.type].index] = bet;
    return this.myBets[this.typeInfo[bet.type].index];
  }

  getNextBetByType(type) {
    return this.nextBets[this.typeInfo[type].index];
  }

  formatBet(betData) {
    let {
      bet,
      currencyName,
      userId,
      name,
      betId,
      x,
      gameId,
      avatar,
      hidden,
      currencyImage,
    } = betData;

    const amount = WalletManager.getInstance().bnToAmount(
      new Decimal(bet),
      currencyName
    );
    const usd = WalletManager.getInstance().amountToLocale(
      amount,
      currencyName
    );

    return {
      bet: new Decimal(bet),
      usd,
      userId,
      avatar,
      hidden,
      currencyImage,
      name,
      betId,
      currencyName,
      type: x,
      gameId,
      status: 0,
    };
  }
}
