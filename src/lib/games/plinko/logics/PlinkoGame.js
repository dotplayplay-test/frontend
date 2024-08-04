import BaseGame from './BaseGame';
import { ServerURl } from '../../../backendUrl';
import { debounce } from 'lodash';
import {
  action,
  autorun,
  computed,
  makeObservable,
  observable,
  reaction,
} from 'mobx';
import PlinkoResource from './PlinkoResource';
export default class PlinkoGame extends BaseGame {
  constructor() {
    super({
      name: 'Plinko',
      namespace: ServerURl(),
      sounds: {
        bg: {
          src: '/assets/plinko/audio/plinko-bgm-small.feef2f77.mp3',
          loop: true,
          isBackground: true,
        },
        sound_start_mp3: '/assets/plinko/audio/start.a4a768b9.mp3',
        sound_pin_mp3: '/assets/plinko/audio/pin.b71d97bc.mp3',
        sound_win_mp3: '/assets/plinko/audio/win.99963751.mp3',
        sound_lose_mp3: '/assets/plinko/audio/lose.36dd0b79.mp3',
      },
      fairLink: '/plinko_help/fairness',
      validateLink: 'https://nanogamesio.github.io/verify/plinko.html',
    });

    this.risk = 1;
    this.rows = 8;
    this.theme = {
      text: '#d9ebf6',
      main: '#6d6fcd',
      light: '#c2c4f5',
      dark: '#5759bb',
      dark2: '#4e51a5',
    };
    this.payouts = PlinkoResource.PAYOUTS;
    this.riskOptions = [
      { label: 'Low', value: 1 },
      { label: 'Medium', value: 2 },
      { label: 'High', value: 3 },
    ];
    this.rowsOptions = [];
    this.plinko = null;

    this.onGetBetRequest = () => {};
    this.betThrottle = debounce(() => {
      this.handleBet().catch(console.error);
    }, 500);

    const hotKey = this.hotkeyList.find((hotkey) => hotkey.key === 'space');
    if (hotKey) {
      hotKey.handler = () => {
        if (this.controlIdx === 1) {
          this.toggleAutoBet();
        } else {
          this.betThrottle();
        }
        return false;
      };
    }

    this.autoBet.bet = async (...args) => {
      return new Promise((resolve, reject) => {
        this.onGetBetRequest = (promise) => {
          promise.then((result) => resolve(result.odds)).catch(reject);
        };
        this.handleBet(...args);
      });
    };

    this.rowsOptions = Object.keys(this.payouts[1]).map((label) => ({
      label,
      value: Number(label),
    }));

    makeObservable(this, {
      risk: observable,
      rows: observable,
      plinko: observable.ref,
      maxProfit: computed,
      canBet: computed,
      setRisk: action,
      setRow: action,
      setPlinko:  action,
    });

    autorun(() => {
      this.autoBet.interval = this.settings.data.fastEnable ? 350 : 1e3
      if (this.plinko) {
        this.plinko.enableFast(this.settings.data.fastEnable || false);
      }
    });
    reaction(() => this.risk, this.syncPlinkoSettings.bind(this));
    reaction(() => this.rows, this.syncPlinkoSettings.bind(this));

    this.syncPlinkoSettings();
  }

  setRisk(_v) {
    this.risk = _v;
  }
  setRow(_v) {
    this.rows = _v;
  }
  get canBet() {
    return !this.script.isRunning;
  }
  get maxProfit() {
    const maxPayout = Math.max(...this.payouts[this.risk][this.rows]);
    return this.amount.mul(maxPayout).sub(this.amount);
  }

  setPlinko(_p) {
    this.plinko = _p;
  }

  syncPlinkoSettings() {
    this.plinko?.resetTable(this.rows, this.risk);
  }

  toggleAutoBet() {
    if (this.autoBet.isRunning) {
      this.autoBet.stop();
    } else if (!this.isBetting) {
      this.autoBet.start().catch(console.error);
    }
  }

  setBetStatus(isBetting) {
    if (this.plinko) {
      if (isBetting || this.autoBet.isRunning || this.plinko.running) {
        this.isBetting = true;
      } else {
        this.isBetting = false;
      }
    } else {
      this.isBetting = isBetting;
    }
  }

  async onBetRequest(request) {
    this.onGetBetRequest(request);
    if (!this.plinko) {
      return request;
    }

    const ball = this.plinko.addBall();
    try {
      const response = await request;
      const path = response.gameValue.path.split('').map(c => Number(c));
      try {
        await ball.run(path);
      } catch (error) {
        console.log("Error  running the ball anim", error);
      }
      return response;
    } catch (error) {
      ball.remove();
      throw error;
    }
  }

  betValue() {
    return { risk: this.risk, row: this.rows };
  }

  active() {
    this.isBetting = false;
    super.active();
  }

  deactivate() {
    this.plinko?.destroy();
    super.deactivate();
  }
}
