import Decimal from "decimal.js";
import { action, computed, makeObservable, observable } from "mobx";
import EventEmitter from "./EventEmitter";
import WalletManager from "./WalletManager";

class Ke {
  constructor() {
    this.reset = true;
    this.value = 0;
    makeObservable(this, {
      reset: observable,
      value: observable,
      setReset: action,
      setValue: action
    });
  }
  setReset(_v) {
    this.reset = _v;
  }
  setValue(_v) {
    this.value = _v;
  }
}
export default class AutoBet extends EventEmitter {
  constructor(game, interval = 500, betWait = Promise.resolve(0)) {
    super();

    // Initialize properties
    this.isRunning = false;
    this.times = 0;
    this.startAmount = new Decimal(0);
    this.profit = new Decimal(0);
    this.onWin = new Ke();
    this.stopOnWin = 0;
    this.onLose = new Ke();
    this.stopOnLose = 0;
    this.stopWithZero = false;
    this.stopPrev = () => {};
    this.game = game;
    this.isLog = true;
    this.bet = game.handleBet;
    this.interval = interval;
    this.betWait = betWait;
    this.prevBetTime = Date.now();

    // Bind properties to the class instance
    makeObservable(this, {
      isRunning: observable,
      times: observable,
      profit: observable,
      stopOnWin: observable,
      stopOnLose: observable,
      isAutoIncrease: computed,
      fieldStr: computed,
      setStopOnWin: action,
      setStopOnLose: action,
      setTimes: action,
      setIsRunning: action,
    });
  }

  // Check if auto increase is enabled
  get isAutoIncrease() {
    const amount = this.game.amount;
    const precision = WalletManager.getInstance().getPrecision(this.game.currencyName);
    if (!this.onWin.reset && this.onWin.value !== 0) {
      if (
        amount
          .add(amount.div(100).mul(this.onWin.value))
          .toDP(precision, Decimal.ROUND_DOWN) === this.game.amount
      )
        return false;
    }
    if (!this.onLose.reset && this.onLose.value !== 0) {
      if (
        amount
          .add(amount.div(100).mul(this.onLose.value))
          .toDP(precision, Decimal.ROUND_DOWN) === this.game.amount
      )
        return false;
    }
    return true;
  }

  // Generate a string representation of the field
  get fieldStr() {
    const onWinStr = this.onWin.reset ? "" : `ow:${this.onWin.value};`;
    const onLoseStr = this.onLose.reset ? "" : `ol:${this.onLose.value};`;
    return `a:${this.startAmount.toFixed(9)};n:${
      this.times
    };${onWinStr}${onLoseStr}sw:${this.stopOnWin};sl:${this.stopOnLose};`;
  }

  setStopOnLose(_v) {
    this.stopOnLose = _v;
  }
  setStopOnWin(_v) {
    this.stopOnWin = _v;
  }
  setIsRunning(_v) {
    this.isRunning = false;
  }
  setTimes(_v) {
    this.times = _v;
  }


  // Start the game
  async start() {
    if (this.isRunning) return;
    this.emit("start");
    this.isRunning(true);
    this.profit = new Decimal(0);
    this.startAmount = this.game.amount;
    const isTimesZero = !this.stopWithZero && this.times === 0;
    let isRunning = true;
    const logPromise = /*this.isLog
      ? fetch("/game/manage/scripts/log/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gameName: this.game.name,
            content: this.fieldStr,
          }),
        })
      :*/ Promise.resolve(0);

    this.stopPrev = () => (isRunning = false);

    while (isRunning) {
      try {
        await this.betWait();
        const logResult = await logPromise;
        if (isRunning) {
          let now = Date.now();
          let waitTime = this.interval - (now - this.prevBetTime);
          if (waitTime > 0) await f(waitTime);
          this.prevBetTime = Date.now();
          let betResult = await this.bet(undefined, logResult);
          if (isRunning) {
            if (this.step(betResult)) this.stop();
          }
        }
      } catch (error) {
        if (error.code !== 5999) throw (this.stop(), this.emit("stop"), error);
      }
      if (!isTimesZero) {
        this.times = Math.max(this.times - 1, 0);
        if (this.times === 0) this.stop();
      }
    }
    this.emit("stop");
    this.game.setAmount(this.startAmount);
  }

  // Stop the game
  async stop() {
    this.stopPrev();
    this.setIsRunning(false);
  }

  // Process a step in the game
  step(betResult) {
    const bet = new Decimal(betResult);
    const amount = new Decimal(this.game.amount);
    this.profit = this.profit.add(amount.mul(bet.sub(1)));
    if (bet.gt(1)) {
      this.onWin.reset
        ? (this.game.amount = this.startAmount)
        : (this.game.amount = amount.add(
            amount.mul(this.onWin.value).div(100)
          ));
    } else if (bet.lt(1)) {
      this.onLose.reset
        ? (this.game.amount = this.startAmount)
        : (this.game.amount = amount.add(
            amount.mul(this.onLose.value).div(100)
          ));
    }
    return (
      !(this.stopOnWin === 0 || !this.profit.gte(this.stopOnWin)) ||
      !(this.stopOnLose === 0 || !amount.sub(this.profit).gte(this.stopOnLose))
    );
  }

  // Override the EventEmitter's on method
  on(eventName, listener) {
    return super.on(eventName, listener);
  }
}
