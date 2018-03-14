import { observable, action, useStrict, computed } from "mobx";

import axios from "../axios-conf";
import IAuthStore from "../interfaces/IAuthStore";

// All modifications of state must be made by actions
useStrict(true);

class AuthStore<IAuthStore> {
  @observable user: any = null;

  @action
  setUser = user => {
    this.user = user;
  };

  submitForm = async (route: string, data: object) => {
    try {
      const req = await axios.post(`auth/${route}`, data);

      if (req.data.user) {
        this.setUser(req.data.user);
      }
    } catch (error) {}
  };
}

export default new AuthStore();
