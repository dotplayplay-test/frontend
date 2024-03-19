import Decimal from 'decimal.js';
import CasinoGame from '$lib/logics/CasinoGame';
import UserStore from '$lib/logics/UserStore';
import { ServerURl } from '$lib/backendUrl';
import { action, makeObservable, observable, runInAction } from 'mobx';
import axios from 'axios';
import AutoBet from '$lib/logics/AutoBet';
import WalletManager from '$lib/logics/WalletManager';
function debounceWithLimit(func, waitTime, limit = 20) {
  let isWaiting = false;
  const queue = [];
  let timeoutId;

  const executeQueue = () => {
    if (!isWaiting) {
      isWaiting = true;
      timeoutId = window.setTimeout(() => {
        if (queue.length > 0) {
          func.apply(window, queue.shift());
          isWaiting = false;
          if (queue.length > 0) executeQueue();
        }
      }, waitTime);
    }
  };

  const debouncedFunction = (...args) => {
    if (queue.length >= limit) {
      queue.push(args);
      executeQueue();
    }
  };

  debouncedFunction.clear = () => {
    clearTimeout(timeoutId);
    queue.splice(0, queue.length);
  };

  return debouncedFunction;
}
export default class BaseGame extends CasinoGame {
  static MAX_MYBET = 10;
  constructor(e, t) {
    super(e, t);
    this.allBets = [];
    this.myBets = [];
    this.autoBet = new AutoBet(this);
    this.oddsScale = 1e4;
    makeObservable(this, {
      allBets: observable.ref,
      myBets: observable.ref,
      addAllBet: action,
      addMyBet: action,
    });
    this.socket.on(
      'plinkoBet',
      debounceWithLimit((e) => this.addBet(e), 500)
    );
    this.autoBet.on('start', () => this.setBetStatus(true));
    this.autoBet.on('stop', () => {
      this.setBetStatus(false);
    });
  }

  setBetStatus(e) {
    this.autoBet.isRunning || this.script.isRunning || (this.isBetting = e);
  }
  async bet(amount, scriptId = 0) {
    try {
      let n = this.betRequest(amount, this.betValue(), scriptId);
      this.onBetRequest && (n = this.onBetRequest(n));
      let i = await n;
      const betInfo = {
        amount: new Decimal(i.betAmount),
        odds: i.odds,
        profit:
          i.odds >= 1 ? new Decimal(i.betAmount).mul(i.odds).toNumber() : 0,
        currencyName: i.currencyName,
        currencyImage: i.currencyImage,
      };
      this.emit('betEnd', betInfo);
      WalletManager.getInstance().createDeduction(
        betInfo.amount
          .mul(i.odds)
          .add(i.odds > 1 ? betInfo.amount : 0)
          .negated(),
        betInfo.currencyName
      );
      return this.addMyBet(i), i;
    } catch (n) {
      throw n;
    }
  }
  async betRequest(amount, betValue, scriptId = 0) {
    let response = await this.socketRequest('plinko-bet', {
      frontgroundId: this.txId,
      userId: this.user.userId,
      name: this.user.username,
      hidden: this.user.hidden,
      avatar: this.user.avatar,
      currencyName: this.currencyName,
      currencyImage: this.currencyImage,
      betAmount: amount.toString(),
      betValue,
      scriptId,
    });
    return this.formatBet(response);
  }
  addAllBet(e) {
    if (this.allBets.find((t) => t.betId == e.betId)) return;
    const t = [e, ...this.allBets];
    t.length > 20 && t.pop(), (this.allBets = t);
  }
  addMyBet(e) {
    this.cacheNickName && (e.nickName = this.cacheNickName);
    let t = [e, ...this.myBets];
    t.length > 20 && t.pop(), (this.myBets = t), this.addAllBet(e);
  }

  async init() {
    const e = super.init();
    let [t] = await Promise.all([this.socketRequest('plinko-init'), e]);
    const { betLogs } = t;
    betLogs.map((e) => this.formatBet(e)).forEach((b) => this.addAllBet(b));
    UserStore.getInstance().waitLogin().then(this.loadMybet.bind(this));
  }
  addBet(bet) {
    this.addAllBet(this.formatBetLog(bet));
  }
  formatBet(betData) {
    let {
      betId,
      userId,
      name,
      hidden,
      avatar,
      nonce,
      currencyName,
      currencyImage,
      betAmount,
      winAmount,
      payout,
      odds,
      betTime,
      gameValue,
    } = betData;
    odds = payout || odds;
    return {
      betId,
      nonce,
      currencyName,
      currencyImage,
      name,
      hidden,
      avatar,
      userId,
      betAmount: parseFloat(betAmount),
      winAmount: parseFloat(winAmount || '0'),
      profitAmount: new Decimal(winAmount || '0')
        .sub(parseFloat(betAmount))
        .toNumber(),
      odds,
      payout: odds,
      won: odds >= 1,
      betTime,
      gameValue,
    };
  }
  async loadMybet() {
    const response = await axios.post(
      ServerURl() + '/api/user/plinko-game/my-bet/',
      {
        size: 20,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${UserStore.getInstance().authToken}`,
        },
      }
    );
    const data = response.data;
    runInAction(
      () =>
        (this.myBets = data.bets
          .map((b) => this.formatBet(b))
          .slice(0, BaseGame.MAX_MYBET))
    );
  }
  deactivate() {
    this.autoBet.isRunning && this.autoBet.stop();
    super.deactivate();
  }
}
