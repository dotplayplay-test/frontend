import { action, makeObservable, observable, runInAction } from "mobx";
import EventEmitter from "$lib/logics/EventEmitter";
import WalletManager from "$lib/logics/WalletManager";

const delayFunction = (e = 0) => new Promise((t) => setTimeout(t, e));

// Reformatting the code with better naming conventions
const ScriptStatus = {
  INFO: 0,
  SUCCESS: 1,
  ERROR: 2,
  0: "INFO",
  1: "SUCCESS",
  2: "ERROR",
};
export default class BaseScriptManager extends EventEmitter {
  static MAX_LOG = 1e3;
  constructor(game) {
    super();
    this.game = game;
    this.script = null;
    this.isRunning = false;
    this.config = null;
    this.scriptList = [];
    this.logs = [];
    this.interval = 500;
    this.prevBetTime = Date.now();
    this.isAutoStep = true;
    this.messager = null;
    this.handleBet = () => {
      throw new Error("no bet handle");
    };
    this.initPms = null;
    this.logid = 0;

    makeObservable(this, {
      script: observable,
      isRunning: observable,
      config: observable,
      scriptList: observable.ref,
      logs: observable.ref,
      unRegist: action,
      addLog: action,
      delScript: action,
      updateScript: action,
      setIsRunning: action,
      updateConfig: action,
    });
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.unRegist = this.unRegist.bind(this);
    this.step = this.step.bind(this);
    this.game.on("currency_changed", this.syncCurrency.bind(this));
    this.enableAutoStep(true);
  }
  setIsRunning(v) {
    this.isRunning = v;
  }

  updateConfig(key, value) {
    if (!this.isRunning) {
      runInAction(() => {
        this.config = {...this.config, [key]: {...this.config[key], value}}
      })
    }
  }
  async initScript() {
  }

  async delScript({ id }) {

  }

  async updateScript(script) {
    
  }

  async regist(script) {
  }

  unRegist() {
    this.stop();
    runInAction(() => {
      this.script = null;
      this.logs = [];
      this.config = null;
    });
  }

  syncCurrency() {
    const { currencyName } = this.game;
    if (WalletManager.getInstance().dict[currencyName]) {
      const { maxAmount, minAmount } =
        WalletManager.getInstance().dict[currencyName];
      this.messager?.emit("syncCurrency", {
        maxAmount,
        minAmount,
        currencyName,
        amount: WalletManager.getInstance().dict[currencyName].amount,
      });
    }
  }

  onGameEnd(result) {
    this.messager?.emit("gameEnd", result);
  }

  async start() {
    this.game.setBetStatus(true);
    this.setIsRunning(true);
    if (!this.messager && this.script) {
      await this.regist(this.script);
    }
    this.messager?.emit("run", JSON.parse(JSON.stringify(this.config)));
    this.addLog("Script is running!");
    if (this.isAutoStep) {
      this.step();
    }
  }

  step() {
    if (this.isRunning) {
      this.messager?.emit("bet");
    }
  }

  stop() {
    this.setIsRunning(false);
    this.game.setBetStatus(false);
    this.addLog("Script is stopped!");
    this.syncCurrency();
    if (this.messager) {
      this.messager.destroy();
      this.messager = null;
    }
  }

  addLog(message, type = ScriptStatus.INFO) {
    let id = ++this.logid;
    let logs = [...this.logs, { message, type, id }];
    if (logs.length > ScriptManager.MAX_LOG) {
      logs = logs.slice(-ScriptManager.MAX_LOG);
    }
    this.logs = logs;
  }

  enableAutoStep(enable = true) {
    this.isAutoStep = enable;
    this.handleBet = enable
      ? ({ amount, payout }) =>
          this.game
            .handleScriptBet(amount, { payout })
            .then(([result, payout]) => {
              this.delay().then(this.step);
              this.onGameEnd(payout || result);
              return result;
            })
      : ({ amount, payout }) =>
          this.game
            .handleScriptBet(amount, { payout })
            .then(([result, payout]) => {
              this.onGameEnd(payout || result);
              return result;
            });
  }

  async delay() {
    let now = Date.now();
    let timeDiff = this.interval - (now - this.prevBetTime);
    await delayFunction(Math.max(timeDiff, 0));
    this.prevBetTime = Date.now();
  }
}
