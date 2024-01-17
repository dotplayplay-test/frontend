import Decimal from "decimal.js";
import EventEmitter from "$lib/logics/EventEmitter";
import { UserProfileEl } from "$lib/index";
import {
  default_Wallet,
  usdt_Wallet,
  ppfWallet,
  ppdWallet,
  pplWallet,
} from "$lib/store/coins";
import {
  currencyRates
} from "$lib/store/currency";
import {
  action,
  computed,
  makeObservable,
  observable,
  reaction,
  runInAction,
} from "mobx";
import UserStore from "$lib/logics/UserStore";
let lastDeductionId;

class Currency {
  constructor(e) {
    this.currencyName = "";
    this.currencyImage = "";
    this.aliasCurrencyName = "";
    this.fullName = "";
    this.channelName = "";
    this.channelCurrencyName = "";
    this.amount = 0;
    this.deducting = new Decimal(0);
    this.precision = 0;
    this.unitAmount = e.unitAmount;
    this.usdPrice = e.usdPrice;
    this.useable = true;
    this.rainLimit = 0;
    this.redPackageLimit = 0;
    this.displayStatus = 0;
    this.abnormal = true;
    this.supportTx = true;
    this.online = true;
    this.areaAble = true;
    this.currencyTokens = [];
    this.supportChains = [];
    this.currencyType = "";
    this.withdrawLimitAmount = 0;
    Object.assign(this, e);
    
    makeObservable(this, {
      amount: observable,
      displayStatus: observable,
      deducting: observable.ref,
      available: computed,
      addDeduction: action,
      setAmount: action,
    });
  }
  get available() {
    return new Decimal(this.amount).sub(this.deducting).toNumber();
  }
  setAmount(_a) {
    this.amount = _a;
    this.deducting = new Decimal(0);
  }
  addDeduction(e) {
    this.deducting = this.deducting.add(e);
    if (this.currencyName === "USDT") {
      usdt_Wallet.update((wallet) => ({
        ...wallet,
        balance: this.available,
      }));
    } else if (this.currencyName === "PPD") {
      ppdWallet.update((wallet) => ({
        ...wallet,
        balance: this.available,
      }));
    } else if (this.currencyName === "PPF") {
      ppfWallet.update((wallet) => ({
        ...wallet,
        balance: this.available,
      }));
    } else if (this.currencyName === "PPL") {
      pplWallet.update((wallet) => ({
        ...wallet,
        balance: this.available,
      }));
    }

    default_Wallet.update((wallet) => ({
      ...wallet,
      balance:
        this.currencyName === wallet.coin_name
          ? this.available
          : wallet.balance,
    }));
  }
}
const appData = {
  currencyName: "PPF",
  currencyImage:
    "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697828376/ppf_logo_ntrqwg.png",
  enableLocaleCurrency: true,
  localeCurrencyName: "USD",
};
export default class WalletManager extends EventEmitter {
  static __instance;
  static getInstance() {
    if (!WalletManager.__instance) {
      WalletManager.__instance = new WalletManager();
    }
    return WalletManager.__instance;
  }

  constructor() {
    super();
    this.list = [];
    this.dict = {};
    this.deductions = {};
    this.isFirstSync = true;
    this.hideAmount = false;
    this.current = { 
      currencyName: appData.currencyName,
      currencyImage: appData.currencyImage
    };

    this.onBalanceChangeDecode = this.onBalanceChange.bind(this);

    makeObservable(this, {
      current: observable.ref,
      list: observable.ref,
      dict: observable,
      hideAmount: observable,
      isLocale: computed,
      setCurrent: action,
      updateDeduction: action,
      cancelDeduction: action,
    });
    this.addCurrency({
      amount: 0,
      currencyName: appData.currencyName,
      currencyImage: appData.currencyImage,
      aliasCurrencyName: appData.currencyName,
      minAmount: 1, maxAmount: 100,
      usdPrice: 0,
    });
    

    setInterval(() => this.syncSystemConfig(), 96e4);
    reaction(
      () => UserStore.getInstance().auth,
      () => {
        this.syncData();
      }
    );
    
    const updateWallet = (wallet) => {
      if (wallet && wallet.coin_name) {
        let minAmount = wallet.coin_name === "PPF" ? 100 : wallet.coin_name === "USDT" ? 0.1 : 1;
          let maxAmount = wallet.coin_name === "PPF" ? 10_000 : wallet.coin_name === "USDT" ? 5_000 : 30_000;
          const usdPrice = wallet.coin_name === "PPF" ? 0 : (wallet.coin_name === "PPL" ? 0.1 : 1);
        if (this.dict[wallet.coin_name]) {
          this.dict[wallet.coin_name].setAmount(wallet.balance);
          this.dict[wallet.coin_name].minAmount = minAmount;
          this.dict[wallet.coin_name].maxAmount = maxAmount;
          this.dict[wallet.coin_name].usdPrice = usdPrice;
        } else {
          
          this.addCurrency({
            amount: wallet.balance,
            currencyName: wallet.coin_name,
            currencyImage: wallet.coin_image,
            ...{ usdPrice, unitAmount: 1, precision: 4, minAmount, maxAmount },
          });
        }
      }
    }
    usdt_Wallet.subscribe((wallet) => {
      updateWallet(wallet);
    });
    ppfWallet.subscribe((wallet) => {
      updateWallet(wallet);
    });
    ppdWallet.subscribe((wallet) => {
      updateWallet(wallet);
    });
    pplWallet.subscribe((wallet) => {
      updateWallet(wallet);
    });
    default_Wallet.subscribe((wallet) => {
      updateWallet(wallet);
      if (wallet && wallet.coin_name) {
        this.setCurrent({
          currencyName: wallet.coin_name,
          currencyImage: wallet.coin_image,
        });
      }
    });

    currencyRates.subscribe(rates => {
      this.currencyRates = rates;
    })
  }

  get isLocale() {
    return appData.enableLocaleCurrency;
  }

  setCurrent(_c) {
    this.current = _c;
  }

  createDeduction(
    amount,
    currency = this.current.currencyName,
    type = "normal",
    timer = 2e4
  ) {
    let id = Date.now() % 20736e5;
    if (id === lastDeductionId) {
      id++;
    }

    const deduction = {
      id,
      amount,
      currency,
      type,
      solved: false,
      balance: -1,
      timer: 0,
    };

    if (timer > 0) {
      deduction.timer = window.setTimeout(
        () => this.deleteDeduction(id),
        timer
      );
    }

    this.deductions[id] = deduction;
    lastDeductionId = id;

    this.dict[currency].addDeduction(amount);

    return id;
  }

  createStaticDeduction(offset = 0) {
    return 20736e5 + offset;
  }

  updateDeduction({ amount, currency, balance, id }) {
    let deduction = this.deductions[id];

    if (deduction) {
      this.dict[currency].addDeduction(amount);
      deduction.amount = deduction.amount.add(amount);
      deduction.balance = balance;
      if (deduction.solved) {
        this.deleteDeduction(deduction.id);
      }
    } else if (id >= 20736e5) {
      deduction = {
        id,
        amount: new Decimal(amount),
        balance,
        currency,
        type: "show",
        solved: true,
        timer: 0,
      };
      this.emit("deduction", deduction);
    }

    this.dict[currency].amount = balance;
  }

  resolveDeduction(id, notify = true) {
    const deduction = this.deductions[id];

    if (deduction) {
      if (notify && deduction.balance === -1) {
        deduction.solved = true;
      } else {
        this.deleteDeduction(deduction.id, notify);
      }
    }
  }

  cancelDeduction(type) {
    Object.values(this.deductions).forEach((deduction) => {
      if (deduction.type === type) {
        this.deleteDeduction(deduction.id, false);
      }
    });
  }

  deleteDeduction(id, notify = true) {
    const deduction = this.deductions[id];

    if (deduction) {
      delete this.deductions[deduction.id];
      if (deduction.timer > 0) {
        clearTimeout(deduction.timer);
      }
      // this.dict[deduction.currency].addDeduction(deduction.amount.negated());
      if (notify) {
        this.emit("deduction", deduction);
      }
    }
  }

  async syncData() {
    const {
      handlePPDwallet,
      handleUSDTwallet,
      handlePPFwallet,
      handlePPLwallet,
    } = UserProfileEl();

    const [ppdwallet, usdtWallet, ppfWallet, pplwallet] = await Promise.all([
      handlePPDwallet(),
      handleUSDTwallet(),
      handlePPFwallet(),
      handlePPLwallet(),
    ]);

    const balances = [ppdwallet, usdtWallet, ppfWallet, pplwallet].map(
      (wallet) => ({
        amount: wallet.balance,
        currencyName: wallet.coin_name,
        currencyImage: wallet.coin_image,
      })
    );
    // get currency info from sys config

    runInAction(() => {
      if (this.isFirstSync) {
        this.list = [];
        this.dict = {};
      }
      balances
        .sort((a, b) => a.amount - b.amount)
        .forEach((balance) => {
          const minAmount = balance.currencyName === "PPF" ? 100 : balance.currencyName === "USDT" ? 0.1 : 1;
          const maxAmount = balance.currencyName === "PPF" ? 10_000 : balance.currencyName === "USDT" ? 5_000 : 30_000;
          const usdPrice = balance.currencyName === "PPF" ? 0 : (balance.currencyName === "PPL" ? 0.1 : 1);
          let currency = this.dict[balance.currencyName];

          if (currency) {
            currency.amount = parseFloat(balance.amount);
            currency.minAmount = minAmount;
            currency.maxAmount = maxAmount;
            currency.usdPrice = usdPrice;
          } else {
            // const info = currenciesInfo.currency[balance.currencyName] || {};

            let newBalance = { ...balance };
            newBalance.amount = parseFloat(newBalance.amount);

            this.addCurrency({
              ...newBalance,
              ...{ usdPrice, precision: 4, unitAmount: 1, minAmount, maxAmount },
            });
          }
        });
    });

    this.isFirstSync = false;
  }

  async syncSystemConfig() {
    // TODO: Sync usd prices from sys config
    // const { currency } = await getSystemConfig();
    // Object.keys(currency).forEach((name) => {
    //   if (this.dict[name]) {
    //     this.dict[name].usdPrice = currency[name].usdPrice;
    //   }
    // });
  }

  addCurrency(currency) {
    currency = new Currency(currency);
    this.list.push(currency);
    this.dict[currency.currencyName] = currency;
  }

  onBalanceChange({ amount, currencyName, change, frontgroundId }) {
    this.updateDeduction({
      id: frontgroundId,
      amount: this.bnToAmount(change, currencyName),
      currency: currencyName,
      balance: this.bnToAmount(amount, currencyName),
    });

    const currency = this.dict[currencyName];
    if (currency.displayStatus === 0) {
      currency.displayStatus = 1;
      this.updateFavoriteCoin();
    }
  }

  orderList(list) {
    list
      .sort((a, b) => b.amount - a.amount)
      .sort((a, b) => b.amount * b.usdPrice - a.amount * a.usdPrice);
  }

  updateFavoriteCoin() {
    const statuses = this.list.map((currency) => ({
      currencyName: currency.currencyName,
      status: currency.displayStatus,
    }));
    // TODO: update currency display
    return Promise.resolve(); //api.post("/user/amount/display/", { list: statuses });
  }

  getUsdPrice(currency) {
    return this.dict[currency]?.usdPrice ?? 1;
  }

  getFullName(currency) {
    return this.dict[currency]?.fullName ?? currency;
  }

  getAlias(currency) {
    const currencyObj = this.dict[currency];
    return currencyObj ? currencyObj.aliasCurrencyName : currency;
  }

  getPrecision(currency) {
    const currencyObj = this.dict[currency];
    return currencyObj ? currencyObj.precision : 8;
  }

  getPrecisionAmount(amount, currency, extraPrecision = 0) {
    const precision = this.getPrecision(currency) + extraPrecision;
    const factor = 10 ** precision;
    return Math.floor(amount * factor) / factor;
  }

  getValidAmount(amount, currency) {
    const precision = this.getPrecision(currency);
    return amount >= 1e7 || amount <= -1e7
      ? amount.toFixed()
      : amount
          .toFixed(precision)
          .substr(0, amount > 0 ? 10 : 11)
          .replace(/\.0+$/, "");
  }

  isValuable(currency) {
    const currencyObj = this.dict[currency];
    return !!(currencyObj && currencyObj.usdPrice > 0);
  }


  amountToFiat(amount, token, fiat, rates = this.currencyRates) {
    if (!this.currencyRates?.length) return 0;
    const rate = rates.find(r => r.currency=== fiat)?.rate || 0;
    const bnAmount = new Decimal(amount);
    const usdPrice = token === "PPF" ? 0 : token === "PPL" ? 0.1 : 1;
    return bnAmount.mul(usdPrice).mul(rate).toNumber()
  }

  amountToLocale(amount, currency) {
    const bnAmount = new Decimal(amount);
    const currencyObj = this.dict[currency];
    return currencyObj
      ? bnAmount.mul(currencyObj.usdPrice).toNumber()
      : bnAmount.toNumber();
  }

  localeToAmount(locale, currency) {
    const bnLocale = new Decimal(locale);
    const currencyObj = this.dict[currency];
    return currencyObj
      ? bnLocale.div(currencyObj.usdPrice).toNumber()
      : bnLocale.toNumber();
  }

  bnToAmount(bn, currency) {
    const currencyObj = this.dict[currency];
    return currencyObj ? bn.toNumber() / currencyObj.unitAmount : bn.toNumber();
  }

  toLocaleName(currency) {
    return appData.enableLocaleCurrency ? appData.localeCurrencyName : currency;
  }

  toLocaleAmount(amount, currency) {
    const bnAmount = new Decimal(amount);
    return appData.enableLocaleCurrency
      ? this.amountToLocale(bnAmount, currency)
      : bnAmount.toNumber();
  }

  toLocaleCurrency(amount, currency) {
    // if (appData.enableLocaleCurrency) {
    //   amount = this.amountToLocale(amount, currency);
    //   currency = appData.localeCurrencyName;
    // }
    return `${this.getValidAmount(amount, currency)} ${this.getAlias(
      currency
    )}`;
  }

  getValideMaxMin(max, min, currency) {
    const balance = this.dict[currency].amount;
    if (balance > max && balance < min) {
      return [max, balance];
    }
    return [max, min];
  }

  setUnsafeCurrency(currency) {
    if (this.dict[currency]) {
      this.setCurrent({
        currencyName: currency,
        currencyImage: this.dict[currency].currencyImage,
      });
    } else {
      this.setCurrent({
        currencyName: this.list[0].currencyName,
        currencyImage: this.list[0].currencyImage,
      });
    }
  }

  __setDefaultCurrency() {
    if (this.dict[this.current.currencyName].amount <= 0) {
      const currencyWithBalance = this.list.find((c) => c.amount > 0);
      if (currencyWithBalance) {
        this.setCurrent({
          currencyName: currencyWithBalance.currencyName,
          currencyImage: currencyWithBalance.currencyImage,
        });
      }
    }
  }
}
