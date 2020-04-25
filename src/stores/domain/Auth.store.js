import { types, getSnapshot, applySnapshot } from "mobx-state-tree";

import config from "../../config/config";

import UserModel from "../models/User.model";
import CountryModel from "../models/Country.model";

const countriesApi = config.apiUrl + "/api/countries";
const usersApi = config.apiUrl + "/api/users";

const AuthStore = types
  .model("AuthStore", {
    _countries: types.optional(types.array(CountryModel), []),
    _user: types.optional(UserModel, {}),
  })
  .actions((self) => ({
    getCountries() {
      fetch(countriesApi + "/getCountriesWithRegions")
        .then((res) => res.json())
        .then((data) => {
          applySnapshot(self._countries, data);
        });
    },

    signup(userForm) {
      return new Promise(function(resolve, reject) {
        fetch(usersApi + "/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(userForm),
        })
          .then((res) => res.json())
          .then((data) => {
            applySnapshot(self._user, data);
            localStorage.setItem("userId", data.id);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    updateUserInfo(userForm) {
      return new Promise(function(resolve, reject) {
        fetch(usersApi + "/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(userForm),
        })
          .then((res) => res.json())
          .then((data) => {
            applySnapshot(self._user, data);
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    signin(loginForm) {
      return new Promise(function(resolve, reject) {
        fetch(usersApi + "/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(loginForm),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) reject(data.message);
            else {
              applySnapshot(self._user, data);
              localStorage.setItem("userId", data.id);
              resolve(data);
            }
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    loadUser() {
      new Promise((resolve, reject) => {
        const userId = localStorage.getItem("userId");
        resolve(userId);
      }).then((userId) => {
        if (!userId) return;
        fetch(usersApi + "/getUserById/" + userId)
          .then((res) => res.json())
          .then((userInfo) => {
            applySnapshot(self._user, userInfo);
          });
      });
    },

    signout() {
      localStorage.removeItem("userId");
      applySnapshot(self._user, getSnapshot(UserModel.create()));
      return Promise.resolve();
    },
  }))
  .views((self) => ({
    countries() {
      return getSnapshot(self._countries);
    },

    user() {
      return getSnapshot(self._user);
    },
  }));

export default AuthStore;
