import { types } from "mobx-state-tree";

import config from "../config/config";

const countriesApi = config.apiUrl + "/api/countries";
const usersApi = config.apiUrl + "/api/users";

const AuthStore = types
  .model("AuthStore", {
    countries: types.array(
      types.model("Countries", {
        id: types.number,
        title: types.string,
        regions: types.array(
          types.model("Regions", {
            id: types.number,
            title: types.string,
          })
        ),
      })
    ),
    userId: types.optional(types.number, 0),
  })
  .actions((self) => ({
    getCountries() {
      fetch(countriesApi + "/getCountriesWithRegions")
        .then((res) => res.json())
        .then((data) => {
          self.countries = data;
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
            localStorage.setItem("userId", data.id);
            self.userId = data.id;
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
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    setUserId(userId) {
      self.userId = userId;
    },
  }))
  .views((self) => ({
    countries() {
      return self.countries;
    },
    userId() {
      return self.userId;
    },
  }));

export default AuthStore;
