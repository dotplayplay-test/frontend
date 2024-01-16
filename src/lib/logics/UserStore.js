import { action, makeObservable, observable } from "mobx";
import { profileStore } from "$lib/store/profile";
import { handleAuthToken } from "$lib/store/routes";

export default class UserStore {
  static __instance;
  static getInstance() {
    if (!UserStore.__instance) {
      UserStore.__instance = new UserStore();
    }
    return UserStore.__instance;
  }
  constructor() {
    this.user = null;
    this.authToken = null;
    makeObservable(this, {
      authToken: observable,
      user: observable.ref,
      setUser: action,
      setAuthToken: action,
    });

    profileStore.subscribe((user) => {
      this.setUser(
        !!user?.user_id
          ? {
              ...user,
              userId: user.user_id,
              username: user.username,
              avatar: user.profile_image,
              hidden: user.hide_profile
            }
          : null
      );
    });
    handleAuthToken.subscribe((token) => {
      this.setAuthToken(token);
    });
  }

  setUser(user) {
    this.user = user;
  }
  setAuthToken(token) {
    this.authToken = token;
  }

  async waitLogin() {
    return new Promise((resolve) => {
      if (this.authToken) return resolve(this.authToken);
      setTimeout(() => {
        resolve(this.waitLogin());
      }, 300);
    });
  }
}
