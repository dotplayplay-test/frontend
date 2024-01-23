class MessageHandlerBase {
  constructor(target, source = window) {
    this.timeout = 5000;
    this.msgId = 0;
    this.target = target;
    this.source = source;
    this.reqCallbacks = {};
    this.eventDict = {};
    this.source.addEventListener("message", this.onMessage.bind(this));
  }

  async onMessage(event) {
    const sender = event.source;
    if (sender && sender !== this.target) return;
    const { msgid, event: eventName, payload } = event.data;
    if (!payload) return;
    const [error, data] = payload;
    if (eventName) {
      try {
        let result = this.trigger(eventName, data);
        if (!msgid) return;
        if (result instanceof Promise) {
          result
            .then((res) => {
              this.sendMessage({ msgid, payload: [null, res] });
            })
            .catch((err) => {
              this.sendMessage({ msgid, payload: [err.message] });
            });
        } else {
          this.sendMessage({ msgid, payload: [null, result] });
        }
      } catch (err) {
        this.sendMessage({ msgid, payload: [err.message] });
      }
    } else if (msgid && payload !== null) {
      if (!this.reqCallbacks[msgid]) return;
      if (error !== null) {
        this.reqCallbacks[msgid][1](new MessageError(error));
      } else {
        this.reqCallbacks[msgid][0](data);
      }
    }
  }

  sendMessage(message) {
    this.target && this.target.postMessage(message, "*");
  }

  emit(event, data = null) {
    this.sendMessage({ event, payload: [null, data] });
  }

  request(event, data = null) {
    this.msgId++;
    let msgid = this.msgId;
    return new Promise((resolve, reject) => {
      const errorCallback = (...args) => {
        clearTimer();
        reject(...args);
      };
      const clearTimer = () => {
        this.timeout > 0 && clearTimeout(timer);
        delete this.reqCallbacks[msgid];
      };
      let timer = 0;
      if (this.timeout > 0) {
        timer = window.setTimeout(
          errorCallback.bind(this, `TimeOut: ${event}`),
          this.timeout
        );
      }
      this.reqCallbacks[msgid] = [
        (...args) => {
          clearTimer();
          resolve(...args);
        },
        errorCallback,
      ];
      this.sendMessage({ msgid, event, payload: [null, data] });
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
    this.target.postMessage(message);
  }

  destroy() {
    super.destroy();
    this.target.terminate();
  }
}
