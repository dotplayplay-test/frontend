import Decimal from "decimal.js";
import EventEmitter from "$lib/logics/EventEmitter";
import { action, autorun, makeObservable, observable, reaction } from "mobx";
import SocketManager from "./SocketManager";
import ScriptManager from "./ScriptManager";
import SoundManager from "./SoundManager";
import PersistentStorage from "./PersistentStorage";
import WalletManager from "$lib/logics/WalletManager";
import UserStore from "$lib/logics/UserStore";

// Game Handler Base Class
const GameEventHandler = class extends EventEmitter {
  constructor(config, view) {
    super();

    // Config
    this.name = "";
    this.namespace = "";
    this.isInited = false;
    this.initPms = null;
    this.isActived = false;
    this.currencyName = "PPF";
    this.currencyImage = "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png";
    this.amount = new Decimal(1);
    this.isBetting = false;
    this.controlIdx = 0;
    // this.jackpot = {};
    this.config = config;
    this.gameInfo = {};
    this.settings = null;
    this.script = null;
    this.txId = 0;
    this.view = view;
    this.hotkeyList = [];
    this.needMaxTip = false;
    this.needDeduction = true;
    this.disableAutoConnect = false;

    // Bind properties
    makeObservable(this, {
      isActived: observable,
      currencyName: observable,
      currencyImage: observable,
      amount: observable,
      isBetting: observable,
      controlIdx: observable,
      setAmount: action,
      // jackpot: observable,
    });

    const { currencyName, currencyImage } = WalletManager.getInstance().current;
    this.currencyImage = currencyImage;
    this.currencyName = currencyName;
    // Initialize
    this.config = Object.assign(
      {
        name: "",
        namespace: "",
        settings: {},
      },
      config
    );

    this.name = this.config.name;
    this.namespace = this.config.namespace;
    this.view = view;

    // Methods
    this.active = this.active.bind(this);
    this.deactivate = this.deactivate.bind(this);
    this.setAmount = this.setAmount.bind(this);
    this.onBetEnd = this.onBetEnd.bind(this);
    this.syncCurrency = this.syncCurrency.bind(this);
    this.script = new ScriptManager(this);
    this.handleBet = this.handleBet.bind(this);

    // Initialize socket
    this.socket = SocketManager.socket(this.namespace);
    this.socketRequest = SocketManager.socketRequestBind(this.socket);

    // Initialize hotkeys
    this.addHotkey(
      "a",
      this.withUnbet(() => this.setAmount(this.amount.div(2))),
      "Half bet amount"
    );
    this.addHotkey(
      "s",
      this.withUnbet(() => this.setAmount(this.amount.mul(2))),
      "Double bet amount"
    );
    this.addHotkey(
      "space",
      this.withUnbet(() => {
        this.handleBet();
        return false;
      }),
      "Make a bet"
    );

    // Bind events
    this.on("betStart", (bet) => this.onBetStart(bet));
    this.on("betEnd", this.onBetEnd);

    // Misc
    // this.waitJackpotInject = this.waitJackpotInject.bind(this);
    this.settings = new PersistentStorage(
      Object.assign(this.config.settings, {
        soundEnable: true,
        bgSoundEnable: false,
        hotkeyEnable: false,
        fastEnable: false,
        ignoreMaxProfit: false,
      }),
      { key: this.name }
    );
    this.sounds = new SoundManager(this.config.sounds || {});

    // Initialize sounds
    autorun(() => {
      this.sounds.soundEnable = this.settings.data.soundEnable;
    });

    autorun(() => {
      if (this.settings.data.bgSoundEnable) {
        this.sounds.backgrounds.forEach((sound) => sound.play());
      } else {
        this.sounds.backgrounds.forEach((sound) => sound.stop());
      }
      this.sounds.bgSoundEnable = this.settings.data.bgSoundEnable;
    });

    this.emit("bet");

    reaction(
      () => WalletManager.getInstance().current,
      this.syncCurrency.bind(this)
    );

    reaction(
      () => this.settings.data,
      ({ hotkeyEnable: enabled }) => {
        this.getHotKeyMng().then((Keymaster) => {
          Keymaster.setScope(enabled ? this.name : "all");
        });
      }
    );

    // const { disableLimitMinAmount } = this.config;
    // if (!disableLimitMinAmount) {
    //   reaction(
    //     () => this.jackpot[this.currencyName],
    //     (data) => {
    //       if (data) {
    //         this.setAmount(new Decimal(data.minBetAmount));
    //       }
    //     }
    //   );
    // }
  }

  async getHotKeyMng() {
    if (this.keymaster) return this.keymaster;
    return import("keymaster").then((module) => {
      this.keymaster = module.default;
      return this.keymaster;
    });
  }

  // Set bet amount
  setAmount(amount, force = true) {
    if (amount.gte(this.maxAmount)) {
      amount = this.maxAmount;
      if (force) {
        this.needMaxTip = true;
      }
    } else {
      this.needMaxTip = false;
    }
    this.amount = Decimal.min(
      Decimal.max(amount, this.minAmount),
      this.maxAmount
    );
  }

  // Set betting status
  setBetStatus(status) {
    this.isBetting = status;
  }

  // Getters
  get maxProfit() {
    return new Decimal(250000);
  }

  get maxAmount() {
    const wallet = WalletManager.getInstance().dict[this.currencyName];
    if (!wallet) return new Decimal(0);
    return new Decimal(
      Math.min(wallet?.maxAmount || 0, wallet?.amount || 0) || 200
    );
  }

  get minAmount() {
    const wallet = WalletManager.getInstance().dict[this.currencyName];
    return new Decimal(wallet?.minAmount || 0.1);
  }

  async init(retry) {
    try {
      this.gameInfo = { name: "" }; //await fetchGameInfo(this.name);
    } catch (err) {
      // reportError(err);
      throw err;
    }
  }

  // Start game
  async initialize(retry) {
    try {
      if (!this.initPms) {
        this.initPms = this.init(retry).then(() => {
          this.isInited = true;
          return this;
        });
      }
      this.active();
      await this.initPms;
      // trackEvent("game_click", {
      //   game_name: this.gameInfo.gameName,
      //   // ...
      // });
    } catch (err) {
      this.deactivate();
      this.initPms = null;
      throw err;
    }
  }

  // Make bet
  async bet(amount, ...args) {
    return { odds: 0 };
  }

  // Bet validations
  async beforeBetCheck(amount, currency = this.currencyName) {
    if (!UserStore.getInstance().user) {
      window.location.href = "/login";
      throw new Error("You need to be signed in");
    }
    if (!amount) throw new Error("Set a bet amount");
    await this.checkMaxBet(amount);
    // await this.checkMaxProfit();
    if (
      new Decimal(amount).gt(WalletManager.getInstance().dict[currency].amount)
    ) {
      console.log(
        "Error betting ",
        WalletManager.getInstance().dict[currency],
        amount
      );
      throw new Error("Insufficient balance!");
    }
  }

  // Handle bet
  async handleBet(amount = this.amount, ...args) {
    // Format amount
    amount = amount.toDP(
      WalletManager.getInstance().getPrecision(this.currencyName),
      Decimal.ROUND_DOWN
    );

    // Validation
    await this.beforeBetCheck(amount);

    // Create deduction
    const deduction = WalletManager.getInstance().createDeduction(
      this.needDeduction ? amount : new Decimal(0),
      this.currencyName,
      this.name
    );
    this.txId = deduction;

    try {
      this.setBetStatus(true);
      this.emit("betStart", amount);

      let { odds } = await this.bet(amount, ...args);
      WalletManager.getInstance().resolveDeduction(deduction);

      return odds;
    } catch (err) {
      // Handle errors
      this.onBetEnd();
      WalletManager.getInstance().resolveDeduction(deduction);
      throw err;
    } finally {
      // Reset betting status
      this.setBetStatus(false);
    }
  }

  // Handle script bet
  async handleScriptBet(amount, scriptId) {
    return [
      await this.handleBet(new Decimal(amount), scriptId || 0),
      undefined,
    ];
  }

  // On bet start
  onBetStart(amount) {}

  // On bet end
  onBetEnd() {
    setTimeout(() => {
      if (!this.isBetting) {
        this.syncCurrency();
      }
    }, 30);
  }

  // Max bet check
  async checkMaxBet(amount) {
    // if (this.needMaxTip && amount.eq(this.maxAmount)) {
    //   if (!(await confirmModal(i18n.t("common.messages.maxbet_tips")))) {
    //     this.trackButtonClick("max-cancel");
    //     throw new Error();
    //   }
    //   this.needMaxTip = false;
    //   this.trackButtonClick("max-sure");
    // }
    return 0;
  }

  // Max profit check
  async checkMaxProfit() {
    if (
      !this.settings.ignoreMaxProfit &&
      this.maxProfit.gt(this.jackpot[this.currencyName].maxProfitAmount)
    ) {
      // let ignore = false;
      // const onChange = (val) => {
      //   ignore = val;
      // };
      // if (!(await confirmModal(<MaxProfitWarning onChange={onChange} />))) {
      //   throw new Error();
      // }
      this.settings.ignoreMaxProfit = true; // ignore;
    }
  }

  // Max profit notify
  maxProfitNotify(goToLearnMore) {
    // notify({
    //   icon: icons.bigwin,
    //   title: "Congratulations",
    //   content:
    //     i18n.t("common.messages.bigwin") +
    //     ", " +
    //     i18n.t("common.messages.learn_more"),
    //   duration: 10000,
    //   onClick: goToLearnMore,
    // });
  }

  trackButtonClick(action) {
    // if (userStore.login) {
    //   request("/game/support/record/bet-action/", {
    //     gameName: this.name,
    //     currencyName: this.currencyName,
    //     amount: this.amount.toNumber(),
    //     action,
    //   });
    // }
  }

  // Helper to wrap handler if not betting
  withUnbet(handler) {
    return (...args) => {
      if (!this.isBetting) {
        return handler(...args);
      }
    };
  }

  // Helper to wrap handler if active
  withActive(handler) {
    return (...args) => {
      if (!!this.isActived) {
        return handler(...args);
      }
    };
  }

  // Sync currency
  syncCurrency() {
    const curr = WalletManager.getInstance().current;
    if (
      this.active &&
      !this.isBetting &&
      !this.script.isRunning &&
      this.currencyName != curr.currencyName
    ) {
      this.currencyName = curr.currencyName;
      this.currencyImage = curr.currencyImage;
    }
  }

  // Add hotkey
  addHotkey(key, handler, descript = "") {
    const hotkey = { key, handler, descript };
    this.hotkeyList.push(hotkey);
    this.getHotKeyMng().then((Keymaster) => {
      Keymaster(key, this.name, () => {
        if (this.settings.hotkeyEnable) {
          return hotkey.handler();
        }
      });
    });
  }

  // Remove hotkey
  removeHotKey(key) {
    const index = this.hotkeyList.findIndex((h) => h.key == key);
    if (index != -1) {
      this.hotkeyList.splice(index, 1);
      this.getHotKeyMng().then((Keymaster) => {
        Keymaster.unbind(key, this.name);
      });
    }
  }

  // Wait for jackpot inject
  waitJackpotInject() {
    // return new Promise((resolve) => {

    //   this.socket.once("j-result", (result) => {
    //     resolve(result);
    //   });
    // });
    return Promise.resolve();
  }

  // Toggle hotkeys
  enableHotkeys(enable = true) {
    if (enable) {
      if (this.settings.hotkeyEnable) {
        this.getHotKeyMng().then((Keymaster) => {
          Keymaster.setScope(this.name);
        });
      }
    } else {
      this.getHotKeyMng().then((Keymaster) => {
        Keymaster.setScope("all");
      });
    }
  }

  // Activate game
  active() {
    if (!this.isActived) {
      this.isActived = true;
      this.sounds.active = true;
      this.enableHotkeys();
      this.syncCurrency();
      if (!this.disableAutoConnect) {
        this.socket.connect();
      }
      this.emit("active");
    }
  }

  // Deactivate game
  deactivate() {
    if (this.isActived) {
      this.isActived = false;
      this.sounds.active = false;
      this.enableHotkeys(false);
      if (!this.disableAutoConnect) {
        this.socket.disconnect();
      }
      WalletManager.getInstance().cancelDeduction(this.name);
      this.emit("deactivate");
    }
  }

  // Static method to register game details
  static registDetail(name, detail) {
    GameEventHandler.details[name] = detail;
  }
};
export default GameEventHandler;
