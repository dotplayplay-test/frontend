import {Howl} from 'howler';

export default class SoundManager {
  constructor(soundsConfig) {
    this.sounds = {};
    this.backgrounds = new Set();
    this.soundEnable = false;
    this.bgSoundEnable = false;
    this._active = false;

    for (let soundName in soundsConfig) {
      const soundConfig = soundsConfig[soundName];
      const howlConfig = typeof soundConfig === 'string' ? { src: soundConfig } : soundConfig;
      const howl = new Howl(Object.assign({}, howlConfig, { preload: true }));

      this.sounds[soundName] = howl;

      if (howlConfig.isBackground) {
        this.backgrounds.add(howl);
      }
    }
  }

  get active() {
    return this._active;
  }

  set active(value) {
    this._active = value;

    if (this._active && this.bgSoundEnable) {
      this.backgrounds.forEach(howl => howl.play());
    } else {
      this.backgrounds.forEach(howl => howl.stop());
    }
  }

  playSound(soundName, options) {
    const howl = this.sounds[soundName];

    if (this.backgrounds.has(howl) && !this.bgSoundEnable) {
      return;
    }

    if (this.soundEnable) {
      if (options) {
        if (options.volume !== undefined) {
          howl.volume(options.volume);
        }
        if (options.loop !== undefined) {
          howl.loop(options.loop);
        }
      }

      howl.play();
    }
  }

  stopSound(soundName) {
    this.sounds[soundName].stop();
  }
}