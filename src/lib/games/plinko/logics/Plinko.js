import EventEmitter from '$lib/logics/EventEmitter';
import { Application, Assets } from 'pixi.js';
import PlinkoResource from './PlinkoResource';
import PlinkoTable from './PlinkoTable';
import { action, makeObservable, observable } from 'mobx';
function calculateProbabilities(startRow, endRow) {
  let probabilities = {};
  const pascalTriangle = (function (rows) {
    let triangle = [];
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
      triangle[rowIndex] = [];
      for (let colIndex = 0; colIndex < rowIndex + 1; colIndex++) {
        let value;
        (value =
          colIndex == 0 || colIndex == rowIndex
            ? 1
            : triangle[rowIndex - 1][colIndex - 1] +
              triangle[rowIndex - 1][colIndex]),
          (triangle[rowIndex][colIndex] = value);
      }
    }
    return triangle;
  })(++endRow);
  for (let row = startRow; row < endRow; row++) {
    let total = pascalTriangle[row].reduce((sum, num) => sum + num, 0);
    probabilities[row] = [];
    pascalTriangle[row].forEach((num) => probabilities[row].push(num / total));
  }
  return probabilities;
}
export default class Plinko extends EventEmitter {
  constructor(
    game,
    rows = 8,
    risk = 1,
    payouts,
    isFast,
    width = 700,
    height = 400
  ) {
    super(game);
    this.game = game;
    this.app = new Application({
      resolution: window.devicePixelRatio,
      autoDensity: true,
      antialias: true,
      backgroundAlpha: 0,
    });
    this.width = width;
    this.height = height;
    this.payout = payouts;
    this.chance = calculateProbabilities(8, 16);
    this.table = null;
    this.rows = rows;
    this.risk = risk;
    this.isFast = isFast || false;
    this.running = false;
    this.app.renderer.resize(this.width, this.height);
    this.init();
    makeObservable(this, {
      isFast: observable,
      enableFast: action,
    });
  }

  update() {
    if (this.table.running) this.app.ticker.update();
  }

  destroy() {
    this.app.destroy();
  }

  async init() {
    await new Promise((resolve) => {
      if (Object.keys(PlinkoResource.LOADED).length) {
        resolve(0);
        return;
      }
      const resourcesP = [];
      Object.keys(PlinkoResource.RESOURCE).forEach((alias) => {
        const src = PlinkoResource.RESOURCE[alias];
        Assets.add({
          alias,
          src: `${src.startsWith('/') ? window.origin : ''}${src}`,
        });
        resourcesP.push(
          Assets.load(alias).then((resource) => ({ alias, resource }))
        );
      });
      Promise.all(resourcesP).then((resources) => {
        Object.assign(
          PlinkoResource.LOADED,
          resources.reduce((a, b) => ({ ...a, [b.alias]: b.resource }), {})
        );
        resolve(resources);
      });
    });
    this.table = new PlinkoTable(this, this.game);
    this.table.on('running', (isRunning) => {
      this.running = isRunning;
      this.emit('running', isRunning);
    });
    this.enableFast(this.isFast);
    this.app.stage.addChild(this.table);
    this.app.ticker.add(() => this.table.update());
  }

  addBall() {
    return this.table.addBall();
  }

  enableFast(isFast) {
    this.isFast = isFast;
  }

  resetTable(rows, risk = 1) {
    if (this.rows !== rows || this.risk !== risk) {
      if (!this.running) {
        this.rows = rows;
        this.risk = risk;
        this.table.reset();
        this.app.ticker.update();
      }
    }
  }
}
