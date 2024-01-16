let instanceCounter = 0;
export default class EventEmitter {
  constructor() {
    this._events = {};
    this._eventsCount = 0;
    this._maxListeners = 10;
    this.__instanceID = ++instanceCounter;
  }

  static get defaultMaxListeners() {
    return this._maxListeners;
  }

  static set defaultMaxListeners(value) {
    if (typeof value !== 'number' || value < 0 || Number.isNaN(value)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number.');
    }
    this._maxListeners = value;
  }

  emit(eventName, ...args) {
    const event = this._events[eventName];
    if (event) {
      if (typeof event === 'function') {
        event.apply(this, args);
      } else {
        for (let i = 0; i < event.length; i++) {
          event[i].apply(this, args);
        }
      }
      return true;
    }
    return false;
  }

  addListener(eventName, listener) {
    if (typeof listener !== 'function') {
      throw new TypeError('The "listener" argument must be of type Function.');
    }
    if (!this._events[eventName]) {
      this._events[eventName] = listener;
      this._eventsCount++;
    } else if (typeof this._events[eventName] === 'function') {
      this._events[eventName] = [this._events[eventName], listener];
    } else {
      this._events[eventName].push(listener);
    }
    return this;
  }

  on(eventName, listener) {
    return this.addListener(eventName, listener);
  }

  once(eventName, listener) {
    const self = this;
    function on() {
      self.removeListener(eventName, on);
      listener.apply(this, arguments);
    }
    on.listener = listener;
    return this.on(eventName, on);
  }

  prependListener(eventName, listener) {
    if (!this._events[eventName]) {
      this._events[eventName] = listener;
    } else if (typeof this._events[eventName] === 'function') {
      this._events[eventName] = [listener, this._events[eventName]];
    } else {
      this._events[eventName].unshift(listener);
    }
    return this;
  }

  prependOnceListener(eventName, listener) {
    const self = this;
    function on() {
      self.removeListener(eventName, on);
      listener.apply(this, arguments);
    }
    on.listener = listener;
    return this.prependListener(eventName, on);
  }

  removeListener(eventName, listener) {
    const listeners = this._events[eventName];
    if (listeners) {
      if (typeof listeners !== "function") {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      } else {
        this._events[eventName] = null;
        this._eventsCount--;
      }
      
    }
    return this;
  }

  off(eventName, listener) {
    return this.removeListener(eventName, listener);
  }

  removeAllListeners(eventName) {
    delete this._events[eventName];
    this._eventsCount = 0;
    return this;
  }

  listeners(eventName) {
    const event = this._events[eventName];
    if (event) {
      return typeof event === 'function' ? [event] : [...event];
    }
    return [];
  }

  rawListeners(eventName) {
    return this.listeners(eventName);
  }

  listenerCount(eventName) {
    const event = this._events[eventName];
    if (event) {
      return typeof event === 'function' ? 1 : event.length;
    }
    return 0;
  }

  eventNames() {
    return Object.keys(this._events);
  }
}