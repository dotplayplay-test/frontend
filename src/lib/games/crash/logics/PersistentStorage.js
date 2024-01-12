import pkg from 'lodash';
import { makeAutoObservable, observable } from 'mobx';
const { debounce } = pkg;

export default class PersistentStorage {
  constructor(initialData, { key, isServer = false }) {
    this.data = {};
    this.store = isServer ? new ServerStore(key) : new LocalStore(key);
    this.data = Object.assign({}, initialData);
    makeAutoObservable(this, {
      data: observable.ref
    })
    if (!isServer) {
      this.enableSync();
    }
  }

  async enableSync() {
    await this.forceSync();
    if (!this.isEnableSync) {
      this.isEnableSync = true;
      debounce(() => this.store.save(JSON.stringify( Object.assign(Object.create(null), this.data))), 5000, {
        leading: true,
      });
    }
  }

  async forceSync() {
    const syncedData = await this.store.sync();
    if (syncedData) {
      const parsedData = JSON.parse(syncedData);
      Object.keys(this.data).forEach((key) => {
        if (this.data[key] !== undefined) {
          this.data[key] = parsedData[key];
        }
      });
    }
  }

  update(key, value) {
    this.data = {...this.data, [key]: value};
    this.store.save(JSON.stringify( Object.assign(Object.create(null), this.data)));
  }
  get(key) {
    return this.data[key];
  }
}

class LocalStore {
  constructor(key) {
    this.key = `ns_${key}`;
    this.data = "";
  }

  async sync() {
    this.data = localStorage.getItem(this.key) || "";
    return this.data;
  }

  save(data) {
    if (data !== this.data) {
      this.data = data;
      localStorage.setItem(this.key, data);
    }
  }
}

class ServerStore extends LocalStore {
  constructor(key) {
    super(key);
  }

  async sync() {
    const response = await fetch(`/user/setting/${this.key}/get/`);
    const data = await response.json();
    this.data = data;
    return this.data;
  }

  save(data) {
    if (data !== this.data) {
      this.data = data;
      fetch(`/user/setting/${this.key}/reset/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    }
  }
}
