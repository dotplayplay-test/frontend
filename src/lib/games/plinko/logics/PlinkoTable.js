import {Container, Sprite, TextStyle,Text} from 'pixi.js';
import * as particles from '@pixi/particle-emitter';
import PlinkoResource from './PlinkoResource';

class Pin extends Container {
  static size = 20;
  constructor(x, y, scale) {
    super();
    this.x = x;
    this.y = y;
    this.scale.x = this.scale.y = scale;
    this.pinTime = 0;
    this.drawActive();
    this.drawSprite();
  }

  drawSprite() {
    this.sprite = new Sprite(PlinkoResource.LOADED['pin']);
    this.sprite.anchor.set(0.5);
    this.sprite.pivot.set(-1.5, -2);
    this.addChild(this.sprite);
  }

  drawActive() {
    this.activeSprite = new Sprite(PlinkoResource.LOADED['pin_active']);
    this.activeSprite.anchor.set(0.5);
    this.activeSprite.visible = false;
    this.activeSprite.pivot.y = -1;
    this.addChild(this.activeSprite);
  }

  update() {
    if (this.pinTime <= 0) return;
    let timeLeft = this.pinTime - 0.0166;
    if (timeLeft <= 0) {
      timeLeft = 0;
      this.activeSprite.visible = false;
    } else {
      this.activeSprite.visible = true;
      let progress = 1 - timeLeft / 0.3;
      this.activeSprite.scale.x = this.activeSprite.scale.y =
        0.8 + 0.5 * progress;
      this.activeSprite.alpha = 1 - progress;
    }
    this.pinTime = timeLeft;
  }

  pin() {
    this.pinTime = 0.3;
  }
}

const particleConfig = {
  alpha: { start: 1, end: 0.5 },
  scale: { start: 1, end: 0.001, minimumScaleMultiplier: 0.5 },
  color: { start: '#ffffff', end: '#ffffff' },
  speed: { start: 20, end: 0, minimumSpeedMultiplier: 4 },
  acceleration: { x: 0, y: -100 },
  maxSpeed: 0,
  startRotation: { min: 0, max: 360 },
  noRotation: false,
  rotationSpeed: { min: 40, max: 400 },
  lifetime: { min: 0.5, max: 0.5 },
  blendMode: 'normal',
  frequency: 0.01,
  emitterLifetime: 0.5,
  maxParticles: 10,
  pos: { x: 0, y: 0 },
  addAtBack: false,
  spawnType: 'ring',
  spawnCircle: { x: 0, y: 0, r: 10, minR: 10 },
};

class Particle extends Container {
  constructor() {
    super();
    this.particles = new particles.Emitter(this, {
      ...particleConfig,
      behaviors: [
        {
          type: 'textureSingle',
          config: {
            texture: PlinkoResource.LOADED['star'],
          },
        },
      ],
    });
    this.particles.emit = false;
    this.particles.autoUpdate = true;
  }

  destroy() {
    this.particles.destroy();
  }
}

class PinContainer extends Container {
  static width = 109;
  constructor(payout, chance, zoom, table) {
    super();
    this.payout = payout;
    this.chance = chance;
    this.zoom = zoom;
    this.table = table;
    this.hitTime = 0;
    this.eventMode = "dynamic";
    this.textStyle = new TextStyle({
      fontSize: Math.min(110, (60 * table.plinko.rows) / 8),
      fill: 16777215,
      fontWeight: '800',
      fontFamily: 'Montserrat',
    });
    this.container = new Container();
    this.addChild(this.container);
    this.drawSprite();
    this.drawText();
    this.drawParticles();
  }

  drawSprite() {
    this.sprite = new Sprite(PlinkoResource.LOADED['target']);
    this.sprite.anchor.x = this.sprite.anchor.y = 0.5;
    this.sprite.scale.x = this.sprite.scale.y = this.zoom;
    this.container.addChild(this.sprite);
  }

  drawText() {
    let payoutText =
      this.payout < 10
        ? this.payout.toFixed(1) + '×'
        : this.payout > 100
        ? this.payout.toString()
        : this.payout + '×';
    this.text = new Text(payoutText, this.textStyle);
    this.text.anchor.x = this.text.anchor.y = 0.5;
    this.text.scale.x = this.text.scale.y = 0.5 * this.zoom;
    this.container.addChild(this.text);
  }

  drawParticles() {
    this.particles = new Particle();
    this.addChild(this.particles);
  }

  update() {
    if (this.hitTime <= 0) return;
    this.hitTime -= 0.0166;
    if (this.hitTime < 0) this.hitTime = 0;
    let t = 1 - this.hitTime / 0.2;
    this.container.y = t < 0.65 ? 30 * t : 30 * (1 - t);
  }

  hit() {
    this.hitTime = 0.2;
    if (this.payout >= 1) {
      this.table.playSound('sound_win_mp3');
    } else {
      this.table.playSound('sound_lose_mp3');
    }
    this.particles.particles.emit = true;
  }
}

class Ball extends Container {
  static size = 49;
  static speed = 1;
  static consume = 0.5;
  constructor() {
    super();
    this.sprite = null;
    this.path = [];
    this.state = 0;
    this.table = null;
    this.zIndex = 9999999999;
    this.appearing = 0;
    this.collisionRadius = 0;
    this.targetIndex = null;
    this.velocity = { x: 0, y: 0 };
    this.pms = null;
    this.pmsResolve = null;
    this.drawSprite();
    this.on('removed', () => {
      if (this.pmsResolve) this.pmsResolve();
    });
  }

  init(table) {
    this.table = table;
    this.table.playSound('sound_start_mp3');
    this.appearing = 0;
    this.x = this.y = 0;
    this.velocity.x = this.velocity.y = 0;
    let e = (table.pinsDistance - Pin.size * table.pinScale) / 1.3 / Ball.size;
    this.collisionRadius =
      Pin.size * table.pinScale * 0.5 + Ball.size * e * 0.5;
    this.sprite.scale.x = this.sprite.scale.y = e;
  }

  drawSprite() {
    this.sprite = new Sprite(PlinkoResource.LOADED['ball']);
    this.sprite.anchor.x = this.sprite.anchor.y = 0.5;
    this.addChild(this.sprite);
  }

  run(path) {
    this.pms = new Promise((resolve) => (this.pmsResolve = resolve));
    let currentX = 1;
    this.path = path.map((direction, index) => {
      let segment,
        minPosition,
        maxPosition,
        line = this.table.lines[index];
      if (direction > 0) {
        minPosition = currentX;
        maxPosition = currentX + 1;
      } else {
        minPosition = currentX - 1;
        maxPosition = currentX;
      }
      segment = {
        min: line.children[minPosition].x + Pin.size / 5,
        max: line.children[maxPosition].x - Pin.size / 5,
      };
      currentX += direction;
      return segment;
    });
    this.targetIndex = path.reduce((t, e) => t + e, 0);
    this.state = 1;
    return this.pms;
  }

  stop() {
    this.state = 2;
    this.pmsResolve && this.pmsResolve();
    this.table.targets[this.targetIndex].hit();
    this.remove();
  }

  remove() {
    this.table.removeBall(this);
  }

  update() {
    if (this.appearing < 1) {
      this.appearing += 0.25;
      if (this.appearing > 1) this.appearing = 1;
      this.alpha = this.appearing;
      this.scale.x = this.scale.y = 0.5 + 0.5 * this.appearing;
    } else if (this.state === 1) {
      this.falling();
    }
  }

  falling() {
    this.updatePosition();
    this.correctPosition();
    this.pinCollisions();
    if (this.y > this.table.targets[0].y) this.stop();
  }

  updatePosition() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
  pinCollisions() {
    for (let t = 0; t < this.table.lines.length; t++) {
      let e = this.table.lines[t],
        i = e.y - this.y;
      if (Math.abs(i) < this.collisionRadius) {
        for (let t = 0; t < e.children.length; t++) {
          let s = e.children[t],
            n = s.x - this.x;
          if (Math.abs(n) < this.collisionRadius) {
            let t = Math.sqrt(i * i + n * n);
            if (t < this.collisionRadius) {
              let a = Math.atan2(i, n),
                o = Math.atan2(this.velocity.y, this.velocity.x),
                h = Math.sqrt(
                  this.velocity.x * this.velocity.x +
                    this.velocity.y * this.velocity.y
                );
              h > 5 && s.pin(),
                h > 1 && this.table.playSound('sound_pin_mp3', 0.07 * h);
              let r = this.collisionRadius - t;
              r > 0 && (h -= Math.min(1, r));
              let l =
                  h *
                  (1 - Math.max(0, Math.abs(Math.cos(a - o))) * Ball.consume),
                p = Math.cos(a),
                c = Math.sin(a);
              this.velocity.x = -p * l;
              this.velocity.y = -c * l;
              this.x = s.x - p * this.collisionRadius;
              this.y = e.y - c * this.collisionRadius;
              if (e.y > this.y) {
                this.velocity.y += p * p;
                this.velocity.x -= c * p;
              }
            }
          }
        }
      }
    }
    this.velocity.y += Ball.speed * this.table.speedScale;
  }

  correctPosition() {
    let t = null;
    for (let e = 0; e < this.table.lines.length; e++) {
      if (this.table.lines[e].y > this.y) {
        t = this.path[e];
        break;
      }
    }
    if (!t) t = this.path[this.path.length - 1];
    if (this.x < t.min) {
      this.velocity.x = 0;
      this.x = t.min;
    } else if (this.x > t.max) {
      this.velocity.x = 0;
      this.x = t.max;
    }
  }
}
class BallPool {
  constructor(size) {
    this.elems = [];
    this.freeElems = [];
    this.size = 0;
    for (let i = 0; i < size; i++) {
      this.expand();
    }
  }

  get() {
    if (this.freeElems.length === 0) {
      this.expand();
    }
    let index = this.freeElems.pop();
    return this.elems[index];
  }

  put(elem) {
    elem.removeAllListeners();
    let index = this.elems.indexOf(elem);
    if (index !== -1) {
      this.freeElems.push(index);
    }
  }

  expand() {
    this.size++;
    this.freeElems.push(this.elems.push(new Ball()) - 1);
  }
}
class Tooltip extends Sprite {
  static width = 560;
  static height = 144;
  static toolLabelStyle = new TextStyle({
    fontSize: 28,
    fill: 3159869,
    fontWeight: '700',
    fontFamily: 'Montserrat',
  });
  static toolTextStyle = new TextStyle({
    fontSize: 28,
    fill: 3159869,
    fontWeight: '700',
    fontFamily: 'Montserrat',
  });
  constructor() {
    super();
    this.profit = null;
    this.chance = null;
    this.padding = 20;
    this.arrow = null;
    this.xArea = [
      -(PlinkoTable.width - Tooltip.width / 2) / 2 - 10,
      (PlinkoTable.width - Tooltip.width / 2) / 2 + 10,
    ];
    this.visibleNum = 0;
    this.width = Tooltip.width;
    this.height = Tooltip.height;
    this.texture = PlinkoResource.LOADED['tooltip'];
    this.visible = false;
    this.pivot.x = this.width / 2;
    this.pivot.y = this.height / 2;
    this.drawLabel();
    this.drawProfit();
    this.drawChance();
    this.drawArrow();
    this.scale.x = this.scale.y = 0.5;
  }

  drawArrow() {
    this.arrow = new Sprite(PlinkoResource.LOADED['arrow']);
    this.arrow.x = this.width / 2;
    this.arrow.anchor.x = 0.5;
    this.arrow.y = this.height;
    this.addChild(this.arrow);
  }

  drawLabel() {
    let label1 = new Text('Win Amount', Tooltip.toolLabelStyle);
    label1.x = 2 * this.padding;
    label1.y = 0.8 * this.padding;

    let label2 = new Text('Chance', Tooltip.toolLabelStyle);
    label2.x = this.width / 2 + this.padding;
    label2.y = 0.8 * this.padding;

    this.addChild(label1);
    this.addChild(label2);
  }

  drawProfit() {
    this.profit = new Text('2 PPF', Tooltip.toolTextStyle);
    this.profit.x = 2 * this.padding + 10;
    this.profit.y = 2.4 * this.padding + 28;
    this.addChild(this.profit);
  }

  drawChance() {
    this.chance = new Text('34.05%', Tooltip.toolTextStyle);
    this.chance.x = (this.width / 2) + this.padding + 10;
    this.chance.y = 2.4 * this.padding + 28;
    this.addChild(this.chance);
  }

  show(x, y, profit, chance) {
    this.visibleNum++;
    this.visible = this.visibleNum > 0;

    let n = this.width / 2;
    if (x > this.xArea[1]) {
      n += x - this.xArea[1];
      x = this.xArea[1];
    } else if (x < this.xArea[0]) {
      n += x + this.xArea[1];
      x = this.xArea[0];
    }

    this.x = x;
    this.arrow.x = 2 * n;
    this.y = y - this.height;
    this.profit.text = profit;
    this.chance.text = (100 * chance).toFixed(4) + '%';
  }

  hide() {
    setTimeout(() => {
      this.visibleNum--;
      this.visible = this.visibleNum > 0;
    }, 200);
  }
}

export default class PlinkoTable extends Container {
  static width = 520;
  static height = 580;
  static hueScale = (t) => 0.33 + ((t - 0) * (0.33 - 0)) / (1 - 0);
  constructor(plinko, game) {
    super();
    this.plinko = plinko;
    this.game = game;
    this.ballsContainer;
    this.pinsContainer;
    this.lines = [];
    this.targets = [];
    this.tooltip;
    this.balls = [];
    this.running = false;
    this.pinsDistance = 1;
    this.pinScale = 1;
    this.ballPool = new BallPool(10);
    this.x = this.plinko.width / 2;
    this.scale.x = this.scale.y = this.plinko.width / PlinkoTable.height;
    this.drawBallsContainer();
    this.drawPinsContainer();
    this.drawToolTip();
  }

  get speedScale() {
    return this.plinko.isFast ? 2 : 1;
  }

  update() {
    this.balls.forEach((ball) => ball.update());
    this.targets.forEach((target) => target.update());
    for (let i = 0; i < this.lines.length; i++) {
      for (let j = 0; j < this.lines[i].children.length; j++) {
        this.lines[i].children[j].update();
      }
    }
  }

  drawPinsContainer() {
    this.pinsDistance = PlinkoTable.width / (this.plinko.rows + 1);
    this.pinScale = Math.max(0.2, Math.min(1, 0.01 * this.pinsDistance));
    let pinSpacing =
      (PlinkoTable.height - this.pinsDistance) / (this.plinko.rows + 1);
    this.pinsContainer = new Container();
    this.y = 0.5 * this.pinsDistance * this.scale.x;
    this.addChildAt(this.pinsContainer, 0);
    for (let i = 0; i < this.plinko.rows; i++) {
      let row = new Container();
      row.y = this.pinsDistance + i * pinSpacing;
      let startX = -Math.round(((i + 2) * this.pinsDistance) / 2);
      for (let j = 0; j < i + 3; j++) {
        let pin = new Pin(startX + this.pinsDistance * j, 0, this.pinScale);
        row.addChild(pin);
      }
      this.lines.push(row);
      this.pinsContainer.addChild(row);
    }
    let pinScaleFactor = Math.min(0.95, (0.95 * this.pinsDistance) / PinContainer.width);
    let offsetX = -(PlinkoTable.width - PinContainer.width * pinScaleFactor) / 2;
    for (let i = 0; i < this.plinko.rows + 1; i++) {
      let payout = this.plinko.payout[this.plinko.risk][this.plinko.rows][i];
      let chance = this.plinko.chance[this.plinko.rows][i];
      let pin = new PinContainer(payout, chance, pinScaleFactor, this);
      pin.x = offsetX + i * this.pinsDistance;
      pin.y = 0.8 * this.pinsDistance + this.plinko.rows * pinSpacing;
      const handlePointerOver = () => {
        let amount = this.game.amount.mul(payout).toString().slice(0, 10);
        this.tooltip.show(
          pin.x,
          pin.y,
          `${amount} ${this.game.currencyName}`,
          chance
        );
      };
      const handlePointerOut = () => {
        this.tooltip.hide();
      };
      pin.on('pointerover', handlePointerOver);
      pin.on('pointerdown', handlePointerOver);
      pin.on('pointerout', handlePointerOut);
      pin.on('pointerup', handlePointerOut);
      pin.on('pointercancel', handlePointerOut);
      pin.on('pointerupoutside', handlePointerOut);
      this.pinsContainer.addChild(pin);
      this.targets.push(pin);
    }
    for (let i = 0; i < this.targets.length; i++) {
      let tintFactor =
        (2 * Math.abs(i - (this.targets.length - 1) / 2)) / this.targets.length;
      this.targets[i].sprite.tint = PlinkoResource.interpolateColor(tintFactor);
    }
  }

  drawBallsContainer() {
    this.ballsContainer = new Container();
    this.addChild(this.ballsContainer);
  }

  drawToolTip() {
    this.tooltip = new Tooltip();
    this.tooltip.y = 120;
    this.addChild(this.tooltip);
  }

  addBall() {
    let ball = this.ballPool.get();
    ball.init(this);
    this.balls.push(ball);
    this.ballsContainer.addChild(ball);
    this.checkRunning();
    return ball;
  }

  removeBall(ball) {
    let index = this.balls.indexOf(ball);
    this.balls.splice(index, 1);
    this.ballsContainer.removeChild(ball);
    this.ballPool.put(ball);
    this.checkRunning();
  }

  reset() {
    this.removeChild(this.pinsContainer);
    this.lines.splice(0, this.lines.length);
    this.targets.splice(0, this.targets.length);
    this.drawPinsContainer();
  }

  checkRunning() {
    this.running = this.balls.length !== 0;
    this.emit('running', this.running);
  }

  playSound(sound, volume = 1) {
    this.game.sounds.playSound(sound, { volume: volume });
  }
}
