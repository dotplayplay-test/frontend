class MessageHandlerBase {
  constructor(target, source = window) {
    this.timeout = 5000;
    this.msgId = 0;
    this.target = target;
    this.source = source;
    this.reqCallbacks = {};
    this.eventDict = {};
    this.target.onmessage = this.onMessage.bind(this);
    this.source.addEventListener("message", this.onMessage.bind(this));
  }

  async onMessage(event) {
    console.log("On message > ", event);
    const sender = event.source;
    if (event.source && sender !== this.target) return;
    const { msgId, event: eventName, payload } = event.data;
    if (!payload) return;
    const [error, data] = payload;
    if (eventName) {
      try {
        let result = this.trigger(eventName, data);
        if (!msgId) return;
        if (result instanceof Promise) {
          result
            .then((res) => {
              this.sendMessage({ msgId, payload: [null, res] });
            })
            .catch((err) => {
              this.sendMessage({ msgId, payload: [err.message] });
            });
        } else {
          this.sendMessage({ msgId, payload: [null, result] });
        }
      } catch (err) {
        this.sendMessage({ msgId, payload: [err.message] });
      }
    } else if (msgId && payload !== null) {
      if (!this.reqCallbacks[msgId]) return;
      if (error !== null) {
        this.reqCallbacks[msgId][1](new MessageError(error));
      } else {
        this.reqCallbacks[msgId][0](data);
      }
    }
  }

  sendMessage(message) {
    console.log("Sending message > ", message, this.target);
    this.target && this.target.postMessage(message, "*");
  }

  emit(event, data = null) {
    this.sendMessage({ event, payload: [null, data] });
  }

  request(event, data = null) {
    this.msgId++;
    let msgId = this.msgId;

    return new Promise((resolve, reject) => {
      const errorCallback = (...args) => {
        clearTimer();
        reject(...args);
      };
      const clearTimer = () => {
        this.timeout > 0 && clearTimeout(timer);
        delete this.reqCallbacks[msgId];
      };
      let timer = 0;
      if (this.timeout > 0) {
        timer = window.setTimeout(
          errorCallback.bind(this, `TimeOut: ${event}`),
          this.timeout
        );
      }
      this.reqCallbacks[msgId] = [
        (...args) => {
          clearTimer();
          resolve(...args);
        },
        errorCallback,
      ];
      console.log("Trying to snd msg > ", data, this.target)
      this.sendMessage({ msgId, event, payload: [null, data] });
    });
  }

  on(event, callback) {
    this.eventDict[event] || (this.eventDict[event] = []);
    this.eventDict[event].push(callback);
  }

  off(event, callback) {
    const callbacks = this.eventDict[event];
    if (!callbacks) return;
    let index = callbacks.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
      if (callbacks.length === 0) delete this.eventDict[event];
    }
  }

  trigger(event, data = {}) {
    let callbacks = this.eventDict[event];
    if (!callbacks) throw new Error(`Request Not Found: ${event}`);
    if (callbacks.length === 1) return callbacks[0](data);
    else {
      let results = [];
      for (let i = 0, len = callbacks.length; i < len; i++) {
        results.push(callbacks[i](data));
      }
      return results;
    }
  }

  destroy() {
    this.eventDict = {};
    this.reqCallbacks = {};
    this.source.removeEventListener("message", this.onMessage);
  }
}

export default class MessageHandler extends MessageHandlerBase {
  constructor(target) {
    super(target, target);
  }

  sendMessage(message) {
    console.log("Sending message > ", message)
    this.target.postMessage(message);
  }

  destroy() {
    super.destroy();
    this.target.terminate();
  }
}
