self.onmessage = (event) => {
    const e = event.data;
    let t = new Function(
        "game",
        "engine",
        "currency",
        "log",
        `${e}; return [config, main];`
      );
    const  [n, r] = t(x, x, { maxAmount: 0, minAmount: 0, currencyName: "", amount: 0 }, {info(e) {
        // b.emit("log", { type: 0, message: e });
      },
      success(e) {
        // b.emit("log", { type: 1, message: e });
      },
      error(e) {
        // b.emit("log", { type: 2, message: e });
      }});

    self.postMessage({eventData: {
        event: event.eventType,
        payload: n,
        
    }})
}