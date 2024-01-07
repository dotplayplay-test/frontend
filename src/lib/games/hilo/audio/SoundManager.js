export default class SoundManager {
  constructor(defaultSettings, audioEnabled) {
    this.audioMap = {
      ape: {
        path: "/assets/hilo/audio/ape.42f4390a.mp3",
      },
      giraffe: {
        path: "/assets/hilo/audio/giraffe.f1576e60.mp3",
      },
      skip: {
        path: "/assets/hilo/audio/skip.2122e51f.mp3",
      },
      bet: {
        path: "/assets/hilo/audio/bet.9fe42261.mp3",
      },
      hilo: {
        enabled: false,
        loop: true,
        path: "/assets/hilo/audio/hilo.4aa95fcb.mp3",
      },
      win: {
        path: "/assets/hilo/audio/win.ae4b0d6d.mp3",
      },
      cashout: {
        path: "/assets/hilo/audio/cashout.41167174.mp3",
      },
      noactive: {
        path: "/assets/hilo/audio/noactive.2122e51f.mp3",
      },
      deal: {
        path: "/assets/hilo/audio/deal.fa1626d6.mp3",
      },
    };

    if (defaultSettings) {
      Object.keys(defaultSettings).forEach((setting) => {
        if (this.audioMap[setting]) {
          this.audioMap[setting] = {
            ...this.audioMap[setting],
            ...defaultSettings[setting],
          };
        }
      });
    }
    this.audioEnabled = Boolean(audioEnabled);

    Object.keys(this.audioMap)
      .filter((key, _) => this.audioMap[key].enabled)
      .forEach((key) => this.play(key));
  }

  setAudioEnabled(enabled) {
    this.audioEnabled = enabled;
  }

  play(name) {
    const audioObj = this.audioMap[name];
    if (!audioObj) return;

    if (!this.audioEnabled && !audioObj.enabled) return;

    if (!audioObj.audio) {
      audioObj.audio = new Audio(`${window.origin}${audioObj.path}`);
      audioObj.audio.loop = audioObj.loop;
    }
    audioObj.audio.pause();
    audioObj.audio.currentTime = 0;
    audioObj.audio.volume = 1;
    audioObj.audio.play();
  }

  pause(name) {
    const audioObj = this.audioMap[name];
    if (!audioObj || !audioObj.audio) return;
    audioObj.audio.pause();
  }

  playRandom() {
    const keys = Object.keys(this.audioMap);
    const key = keys[Math.floor(Math.random() * keys.length)];
    this.play(key);
  }

  stop() {
    Object.keys(this.audioMap).forEach((key) => {
      this.pause(key);
    });
  }
}
