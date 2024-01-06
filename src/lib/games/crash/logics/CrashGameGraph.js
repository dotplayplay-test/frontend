import pkg from 'lodash';
const { debounce } = pkg;
import EventEmitter from "./EventEmitter";
import { gsap } from "gsap";


  // Game status enum
const GameStatus = {
  0: 'CONNECTION',
  1: 'STARTING',
  2: 'PROGRESS',
  3: 'ENDED',
  CONNECTION: 0,
  STARTING: 1,
  PROGRESS: 2,
  ENDED: 3,
};

const DEFAULT_COLORS = ["#FFFFFF", "#FFFFFF", "#7322FF", "#3d444b", "#ed6300"];
function lightenColor(e) {
  e = e.replace(/#/, "");
  var t = parseInt(e, 16);
  return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
}
function getPayoutForTime(t) {
  return Math.pow(Math.E, 6e-5 * t);
}
// CrashGraph class
export default class CrashGameGraph extends EventEmitter {

  static XAxisPlotMinValue = 10000;
  static YAxisSizeMultiplier = 2;
  static fontFamily = "Monmono";
  static RenderInterval = 3;

  constructor(game, user) {
    super();
    this.user = user;
    this.game = game;
    this.rendering = false;
    this.renderTimes = 0;
    this.currentTime = 0;
    this.currentGamePayout = 0;
    this.escapes = [];
    this.canvas;
    this.ctx;
    this.width = 0;
    this.height = 0;
    this.startPoint = [60, 40];
    this.plotSize = [0, 0];
    this.plotValue = [0, 0];
    this.increment = [0, 0];
    this.devicePixelRatio = 2;
    this.gradient;
    this.colors = DEFAULT_COLORS;

    this.resize = debounce(this.resize.bind(this), 200);
    this.render = this.render.bind(this);
    this.mountEffect = this.mountEffect.bind(this);

    this.game.on("escape", this.escape.bind(this));
  }

  // get colors() {
  //   return ["#FFFFFF", "#FFFFFF", "#7322FF", "#3d444b", "#ed6300"]
  // }

  mountEffect(canvas) {
    if (canvas) {
      this.startRendering(canvas);
    } else {
      this.stopRendering();
    }
  }

  startRendering(canvas) {
    if (!canvas.getContext) {
      console.error("No canvas");
      return;
    }

    this.rendering = true;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.resize();

    requestAnimationFrame(this.render);
  }

  stopRendering() {
    this.rendering = false;
    this.canvas = null;
    this.ctx = null;
  }

  resize() {
    if (this.width !== this.canvas.clientWidth) {
      this.width = this.canvas.clientWidth * this.devicePixelRatio;
      this.height = this.canvas.clientHeight * this.devicePixelRatio;

      this.canvas.width = this.width;
      this.canvas.height = this.height;

      this.plotSize = [
        this.width - 2 * this.startPoint[0],
        this.height - this.startPoint[1],
      ];

      this.gradient = this.ctx.createLinearGradient(
        this.width / 3,
        0,
        (2 * this.width) / 3,
        0
      );

      this.gradient.addColorStop(0, this.colors[1]);
      this.gradient.addColorStop(1, this.colors[2]);
    }
  }

  render() {
    if (!this.rendering) return;

    this.renderTimes++;

    if (this.renderTimes % CrashGameGraph.RenderInterval === 0) {
      this.calcGameData();
      this.calculatePlotValues();
      this.clean();
      this.drawGraph();
      this.drawAxes();
      this.drawGameData();
      this.drawEscapes();
    }

    requestAnimationFrame(this.render.bind(this));
  }

  clean() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawGraph() {
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = this.gradient;
    this.ctx.beginPath();

    let pos = [0, 0];
    let step = Math.max(this.currentTime / 1000, 100);

    for (let i = 0; i <= this.currentTime; i += step) {
      let payout = getPayoutForTime(i) - 1;
      let y = this.plotSize[1] - payout * this.increment[1];

      pos = [i * this.increment[0] + this.startPoint[0], y];

      this.ctx.lineTo(...pos);
    }

    this.ctx.stroke();
  }

  drawAxes() {
    const [originX, originY] = this.startPoint;
    const [plotWidth, plotHeight] = this.plotSize;

    const calculateStep = (value) => {
      let step = 0.4,
        increment = 0.1;
      while (!(value < step || ((increment *= 2), value < (step *= 5)))) {
        step *= 2;
        increment *= 5;
      }
      return increment;
    };

    const yStep = calculateStep(
      this.currentGamePayout ? this.currentGamePayout : 1
    );
    this.ctx.lineWidth = 1;
    let color = this.colors[3];
    this.ctx.strokeStyle = color;
    this.ctx.font = "22px Montserrat";
    this.ctx.fillStyle = color;
    this.ctx.textAlign = "center";

    const yScale = plotHeight / this.plotValue[1];
    for (let y = yStep, count = 0; y < this.plotValue[1]; y += yStep, count++) {
      let yPosition = plotHeight - y * yScale;
      this.ctx.fillText(y + 1 + "x", 30, yPosition);
      this.ctx.beginPath();
      this.ctx.moveTo(originX, yPosition);
      this.ctx.lineTo(originX + 5, yPosition);
      this.ctx.stroke();
      if (count > 100) {
        console.log("For 3 too long");
        break;
      }
    }

    const xStep = calculateStep(this.plotValue[0]);
    const xScale = plotWidth / (this.plotValue[0] / xStep);
    for (let x = 0, count = 0; x < this.plotValue[0]; x += xStep, count++) {
      const xPosition = count * xScale + originX;
      this.ctx.fillText((x / 1e3).toString(), xPosition, plotHeight + 20);
      if (count > 100) {
        console.log("For 4 too long");
        break;
      }
    }

    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(originX, 0);
    this.ctx.lineTo(originX, this.height - originY);
    this.ctx.lineTo(this.width - originX, this.height - originY);
    this.ctx.stroke();
  }

  drawGameData() {
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    if (this.game.status === GameStatus.PROGRESS) {
      this.ctx.fillStyle = this.colors[0];
      this.ctx.font = `bold ${this.fontSizePx(8)} ${CrashGameGraph.fontFamily}`;

      this.ctx.fillText(
        this.currentGamePayout.toFixed(2) + "×",
        this.width / 2,
        (2 * this.height) / 5
      );
    } else if (this.game.status === GameStatus.ENDED) {
      this.ctx.font = `bold ${this.fontSizePx(5)} ${CrashGameGraph.fontFamily}`;
      this.ctx.fillStyle = this.colors[4];

      this.ctx.fillText(
        "Bang" + " @" + this.game.rate.toFixed(2) + "×",
        this.width / 2,
        (2 * this.height) / 5
      );
    } else if (this.game.status === GameStatus.STARTING) {
      this.ctx.font = `bold ${this.fontSizePx(4)} ${CrashGameGraph.fontFamily}`;
      this.ctx.fillStyle = this.colors[0];

      const seconds = (this.game.startTime - Date.now()) / 1000;
      if (seconds < 0) return;

      this.ctx.fillText(
        `Starts in ${seconds.toFixed(1)} s`,
        this.width / 2,
        (2 * this.height) / 5
      );
    } else if (this.game.status === GameStatus.CONNECTION) {
      this.ctx.font = `bold ${this.fontSizePx(3)} ${CrashGameGraph.fontFamily}`;
      this.ctx.fillStyle = this.colors[0];

      this.ctx.fillText(
        "Reconnecting...",
        this.width / 2,
        (2 * this.height) / 5
      );
    }
  }

  calcGameData() {
    if (this.game.status === GameStatus.PROGRESS) {
      let elapsed = Date.now() - this.game.startTime;
      if (!this.game.paused) {
        this.currentTime = elapsed > 0 ? elapsed : 0;
      }
    } else {
      this.currentTime = 0;
    }

    this.currentGamePayout = getPayoutForTime(this.currentTime);

    this.emit("payoutChange", this.currentGamePayout);
  }

  calculatePlotValues() {
    this.plotValue[1] = CrashGameGraph.YAxisSizeMultiplier;
    this.plotValue[0] = CrashGameGraph.XAxisPlotMinValue;

    if (this.currentTime > CrashGameGraph.XAxisPlotMinValue) {
      this.plotValue[0] = this.currentTime;
    }

    if (this.currentGamePayout > CrashGameGraph.YAxisSizeMultiplier) {
      this.plotValue[1] = this.currentGamePayout;
    }

    this.plotValue[1] -= 1;

    this.increment[0] = this.plotSize[0] / this.plotValue[0];
    this.increment[1] = this.plotSize[1] / this.plotValue[1];
  }

  fontSizePx(size) {
    const ratio = this.width / (this.width < 1000 ? 60 : 100);
    return (ratio * size).toFixed(2) + "px";
  }

  drawEscapes() {
    this.ctx.font = this.fontSizePx(1.5) + " Arial";

    this.escapes.forEach((escape) => {
      const [r, g, b] = lightenColor(this.colors[0]);

      this.ctx.fillStyle = `rgba(${r}, ${g}, ${b}, .5)`;
      this.ctx.globalAlpha = escape.payoutTween / escape.payout;

      const x = this.startPoint[0] + this.increment[0] * escape.elapsed;
      const y = this.plotSize[1] - escape.payoutTween * this.increment[1];

      const rate = escape.rate.toFixed(2);
      this.ctx.fillText(`${escape.name} @${rate}`, x, y + 20);

      this.ctx.beginPath();
      this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
      this.ctx.closePath();
      this.ctx.fill();

      this.ctx.globalAlpha = 1;
    });
  }

  escape(escape) {
    if (escape.usd < 1 && escape.userId !== this.game.userId) return;
    if (!this.rendering || document.hidden) return;

    
    const payout = getPayoutForTime(this.currentTime) - 1;
    let data = Object.assign(
      {
        elapsed: this.currentTime,
        payout: payout,
        payoutTween: payout,
      },
      escape
    );

    gsap.to(data, {
      duration: 8,
      payoutTween: 0,
      onComplete: () => {
        let index = this.escapes.indexOf(data);
        if (index !== -1) {
          this.escapes.splice(index, 1);
        }
      },
    });

    this.escapes.push(data);
  }
}

