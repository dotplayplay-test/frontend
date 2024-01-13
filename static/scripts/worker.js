var __defProp = Object.defineProperty,
  __defNormalProp = (e, t, n) =>
    t in e
      ? __defProp(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n,
        })
      : (e[t] = n),
  __publicField = (e, t, n) => (
    __defNormalProp(e, "symbol" != typeof t ? t + "" : t, n), n
  );
!(function () {
  "use strict";
  var e,
    t = { exports: {} },
    n = "object" == typeof Reflect ? Reflect : null,
    r =
      n && "function" == typeof n.apply
        ? n.apply
        : function (e, t, n) {
            return Function.prototype.apply.call(e, t, n);
          };
  e =
    n && "function" == typeof n.ownKeys
      ? n.ownKeys
      : Object.getOwnPropertySymbols
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : function (e) {
          return Object.getOwnPropertyNames(e);
        };
  var i =
    Number.isNaN ||
    function (e) {
      return e != e;
    };
  function s() {
    s.init.call(this);
  }
  (t.exports = s),
    (t.exports.once = function (e, t) {
      return new Promise(function (n, r) {
        function i(n) {
          e.removeListener(t, s), r(n);
        }
        function s() {
          "function" == typeof e.removeListener && e.removeListener("error", i),
            n([].slice.call(arguments));
        }
        v(e, t, s, { once: !0 }),
          "error" !== t &&
            (function (e, t, n) {
              "function" == typeof e.on && v(e, "error", t, n);
            })(e, i, { once: !0 });
      });
    }),
    (s.EventEmitter = s),
    (s.prototype._events = void 0),
    (s.prototype._eventsCount = 0),
    (s.prototype._maxListeners = void 0);
  var o = 10;
  function u(e) {
    if ("function" != typeof e)
      throw new TypeError(
        'The "listener" argument must be of type Function. Received type ' +
          typeof e
      );
  }
  function a(e) {
    return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
  }
  function c(e, t, n, r) {
    var i, s, o, c;
    if (
      (u(n),
      void 0 === (s = e._events)
        ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
        : (void 0 !== s.newListener &&
            (e.emit("newListener", t, n.listener ? n.listener : n),
            (s = e._events)),
          (o = s[t])),
      void 0 === o)
    )
      (o = s[t] = n), ++e._eventsCount;
    else if (
      ("function" == typeof o
        ? (o = s[t] = r ? [n, o] : [o, n])
        : r
        ? o.unshift(n)
        : o.push(n),
      (i = a(e)) > 0 && o.length > i && !o.warned)
    ) {
      o.warned = !0;
      var l = new Error(
        "Possible EventEmitter memory leak detected. " +
          o.length +
          " " +
          String(t) +
          " listeners added. Use emitter.setMaxListeners() to increase limit"
      );
      (l.name = "MaxListenersExceededWarning"),
        (l.emitter = e),
        (l.type = t),
        (l.count = o.length),
        (c = l),
        console && console.warn && console.warn(c);
    }
    return e;
  }
  function l() {
    if (!this.fired)
      return (
        this.target.removeListener(this.type, this.wrapFn),
        (this.fired = !0),
        0 === arguments.length
          ? this.listener.call(this.target)
          : this.listener.apply(this.target, arguments)
      );
  }
  function h(e, t, n) {
    var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
      i = l.bind(r);
    return (i.listener = n), (r.wrapFn = i), i;
  }
  function f(e, t, n) {
    var r = e._events;
    if (void 0 === r) return [];
    var i = r[t];
    return void 0 === i
      ? []
      : "function" == typeof i
      ? n
        ? [i.listener || i]
        : [i]
      : n
      ? (function (e) {
          for (var t = new Array(e.length), n = 0; n < t.length; ++n)
            t[n] = e[n].listener || e[n];
          return t;
        })(i)
      : d(i, i.length);
  }
  function p(e) {
    var t = this._events;
    if (void 0 !== t) {
      var n = t[e];
      if ("function" == typeof n) return 1;
      if (void 0 !== n) return n.length;
    }
    return 0;
  }
  function d(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
    return n;
  }
  function v(e, t, n, r) {
    if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
    else {
      if ("function" != typeof e.addEventListener)
        throw new TypeError(
          'The "emitter" argument must be of type EventEmitter. Received type ' +
            typeof e
        );
      e.addEventListener(t, function i(s) {
        r.once && e.removeEventListener(t, i), n(s);
      });
    }
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
      return o;
    },
    set: function (e) {
      if ("number" != typeof e || e < 0 || i(e))
        throw new RangeError(
          'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
            e +
            "."
        );
      o = e;
    },
  }),
    (s.init = function () {
      (void 0 !== this._events &&
        this._events !== Object.getPrototypeOf(this)._events) ||
        ((this._events = Object.create(null)), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (s.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || e < 0 || i(e))
        throw new RangeError(
          'The value of "n" is out of range. It must be a non-negative number. Received ' +
            e +
            "."
        );
      return (this._maxListeners = e), this;
    }),
    (s.prototype.getMaxListeners = function () {
      return a(this);
    }),
    (s.prototype.emit = function (e) {
      for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
      var i = "error" === e,
        s = this._events;
      if (void 0 !== s) i = i && void 0 === s.error;
      else if (!i) return !1;
      if (i) {
        var o;
        if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
        var u = new Error(
          "Unhandled error." + (o ? " (" + o.message + ")" : "")
        );
        throw ((u.context = o), u);
      }
      var a = s[e];
      if (void 0 === a) return !1;
      if ("function" == typeof a) r(a, this, t);
      else {
        var c = a.length,
          l = d(a, c);
        for (n = 0; n < c; ++n) r(l[n], this, t);
      }
      return !0;
    }),
    (s.prototype.addListener = function (e, t) {
      return c(this, e, t, !1);
    }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (e, t) {
      return c(this, e, t, !0);
    }),
    (s.prototype.once = function (e, t) {
      return u(t), this.on(e, h(this, e, t)), this;
    }),
    (s.prototype.prependOnceListener = function (e, t) {
      return u(t), this.prependListener(e, h(this, e, t)), this;
    }),
    (s.prototype.removeListener = function (e, t) {
      var n, r, i, s, o;
      if ((u(t), void 0 === (r = this._events))) return this;
      if (void 0 === (n = r[e])) return this;
      if (n === t || n.listener === t)
        0 == --this._eventsCount
          ? (this._events = Object.create(null))
          : (delete r[e],
            r.removeListener &&
              this.emit("removeListener", e, n.listener || t));
      else if ("function" != typeof n) {
        for (i = -1, s = n.length - 1; s >= 0; s--)
          if (n[s] === t || n[s].listener === t) {
            (o = n[s].listener), (i = s);
            break;
          }
        if (i < 0) return this;
        0 === i
          ? n.shift()
          : (function (e, t) {
              for (; t + 1 < e.length; t++) e[t] = e[t + 1];
              e.pop();
            })(n, i),
          1 === n.length && (r[e] = n[0]),
          void 0 !== r.removeListener && this.emit("removeListener", e, o || t);
      }
      return this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (e) {
      var t, n, r;
      if (void 0 === (n = this._events)) return this;
      if (void 0 === n.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = Object.create(null)), (this._eventsCount = 0))
            : void 0 !== n[e] &&
              (0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : delete n[e]),
          this
        );
      if (0 === arguments.length) {
        var i,
          s = Object.keys(n);
        for (r = 0; r < s.length; ++r)
          "removeListener" !== (i = s[r]) && this.removeAllListeners(i);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = Object.create(null)),
          (this._eventsCount = 0),
          this
        );
      }
      if ("function" == typeof (t = n[e])) this.removeListener(e, t);
      else if (void 0 !== t)
        for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
      return this;
    }),
    (s.prototype.listeners = function (e) {
      return f(this, e, !0);
    }),
    (s.prototype.rawListeners = function (e) {
      return f(this, e, !1);
    }),
    (s.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount
        ? e.listenerCount(t)
        : p.call(e, t);
    }),
    (s.prototype.listenerCount = p),
    (s.prototype.eventNames = function () {
      return this._eventsCount > 0 ? e(this._events) : [];
    });
  var m = self,
    g = {
      self: 1,
      onmessage: 1,
      postMessage: 1,
      global: 1,
      wl: 1,
      eval: 1,
      Array: 1,
      Boolean: 1,
      Reflect: 1,
      Proxy: 1,
      Symbol: 1,
      Date: 1,
      Function: 1,
      Number: 1,
      Object: 1,
      RegExp: 1,
      String: 1,
      Error: 1,
      EvalError: 1,
      RangeError: 1,
      ReferenceError: 1,
      SyntaxError: 1,
      TypeError: 1,
      URIError: 1,
      decodeURI: 1,
      decodeURIComponent: 1,
      encodeURI: 1,
      encodeURIComponent: 1,
      isFinite: 1,
      isNaN: 1,
      parseFloat: 1,
      parseInt: 1,
      Infinity: 1,
      JSON: 1,
      Math: 1,
      NaN: 1,
      undefined: 1,
      console: 1,
      Promise: 1,
    };
  Object.getOwnPropertyNames(m).forEach(function (e) {
    if (!g.hasOwnProperty(e))
      try {
        Object.defineProperty(m, e, {
          get: function () {
            throw new Error("Security Exception: cannot access " + e);
          },
          configurable: !1,
        });
      } catch (t) {}
  });
  class y extends Error {
    constructor() {
      super(...arguments), __publicField(this, "name", "MessageError");
    }
  }
  const b = new (class extends class {
    constructor(e, t = window) {
      __publicField(this, "timeout", 5e3),
        __publicField(this, "msgId", 0),
        __publicField(this, "target"),
        __publicField(this, "source"),
        __publicField(this, "reqcbs", {}),
        __publicField(this, "eventDict", {}),
        (this.target = e),
        (this.source = t),
        (this.onMessage = this.onMessage.bind(this)),
        this.source.addEventListener("message", this.onMessage);
    }
    async onMessage(e) {
      const t = e.source;
      if (e.source && t !== this.target) return;
      let { msgid: n, event: r, payload: i } = e.data;
      if (!i) return;
      let [s, o] = i;
      if (r)
        try {
          let e = this.trigger(r, o);
          if (!n) return;
          e instanceof Promise
            ? e
                .then((e) => {
                  this.sendMessage({ msgid: n, payload: [null, e] });
                })
                .catch((e) => {
                  this.sendMessage({ msgid: n, payload: [e.message] });
                })
            : this.sendMessage({ msgid: n, payload: [null, e] });
        } catch (u) {
          this.sendMessage({ msgid: n, payload: [u.message] });
        }
      else if (n && null != i) {
        if (!this.reqcbs[n]) return;
        null !== s ? this.reqcbs[n][1](new y(s)) : this.reqcbs[n][0](o);
      }
    }
    sendMessage(e) {
      this.target && this.target.postMessage(e, "*");
    }
    emit(e, t = null) {
      this.sendMessage({ event: e, payload: [null, t] });
    }
    request(e, t = null) {
      this.msgId++;
      let n = this.msgId;
      return new Promise((r, i) => {
        let s = (...e) => {
            o(), i(...e);
          },
          o = () => {
            this.timeout > 0 && clearTimeout(u), delete this.reqcbs[n];
          },
          u = 0;
        this.timeout > 0 &&
          (u = window.setTimeout(s.bind(this, `TimeOut: ${e}`), this.timeout)),
          (this.reqcbs[n] = [
            (...e) => {
              o(), r(...e);
            },
            s,
          ]),
          this.sendMessage({ msgid: n, event: e, payload: [null, t] });
      });
    }
    on(e, t) {
      this.eventDict[e] || (this.eventDict[e] = []), this.eventDict[e].push(t);
    }
    off(e, t) {
      const n = this.eventDict[e];
      if (!n) return;
      let r = n.indexOf(t);
      -1 != r && (n.splice(r, 1), 0 == n.length && delete this.eventDict[e]);
    }
    trigger(e, t = {}) {
      let n = this.eventDict[e];
      if (!n) throw new Error(`Request Not Found: ${e}`);
      if (1 == n.length) return n[0](t);
      {
        let e = [];
        for (let r = 0, i = n.length; r < i; r++) e.push(n[r](t));
        return e;
      }
    }
    destroy() {
      (this.eventDict = {}),
        (this.reqcbs = {}),
        this.source.removeEventListener("message", this.onMessage);
    }
  } {
    constructor(e) {
      super(e, e);
    }
    sendMessage(e) {
      this.target.postMessage(e);
    }
    destroy() {
      super.destroy(), this.target.terminate();
    }
  })(m);
  let _, w;
  b.timeout = 0;
  const E = { maxAmount: 0, minAmount: 0, currencyName: "", amount: 0 },
    L = {
      info(e) {
        b.emit("log", { type: 0, message: e });
      },
      success(e) {
        b.emit("log", { type: 1, message: e });
      },
      error(e) {
        b.emit("log", { type: 2, message: e });
      },
    };
  class O extends t.exports.EventEmitter {
    constructor() {
      super(),
        __publicField(this, "history", []),
        __publicField(this, "isHistoryWarning", !1),
        (this.onGameEnd = this.onGameEnd.bind(this));
    }
    async bet(e, t) {
      return await b.request("bet", { amount: e, payout: t });
    }
    stop() {
      return b.emit("stop");
    }
    onBet() {}
    onGameStart() {
      this.emit("GAME_STARTING"), x.onBet();
    }
    onGameEnd(e) {
      (this.history = e), this.emit("GAME_ENDED", e[0]);
    }
    getHistory() {
      return (
        this.isHistoryWarning ||
          (L.info(
            "The history API is deprecated, you should store it yourself!"
          ),
          (this.isHistoryWarning = !0)),
        this.history
      );
    }
  }
  const x = new O();
  b.on("regist", (e) => {
    let t = new Function(
        "game",
        "engine",
        "currency",
        "log",
        `${e}; return [config, main];`
      ),
      [n, r] = t(x, x, E, L);
    return (w = n), (_ = r), w;
  }),
    b.on("run", (e) => {
      Object.assign(w, e);
      try {
        _();
      } catch (t) {
        L.error(String(t)), x.stop();
      }
    }),
    b.on("syncCurrency", (e) => Object.assign(E, e)),
    b.on("bet", () => {
      try {
        x.onGameStart();
      } catch (e) {
        L.error(String(e)), x.stop();
      }
    }),
    b.on("gameEnd", x.onGameEnd),
    m.addEventListener("unhandledrejection", (e) => {
      L.error(String(e.reason)), x.stop();
    });
})();
