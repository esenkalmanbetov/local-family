import { types } from "mobx-state-tree";

import config from "../config/config";

const countriesApi = config.apiUrl + "/api/countries";

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
  })
  .actions((self) => ({
    getCountries() {
      fetch(countriesApi + "/getCountriesWithRegions")
        .then((res) => res.json())
        .then((data) => {
          self.countries = data;
        });
    },
  }))
  .views((self) => ({
    countries() {
      return self.countries;
    },
  }));

export default AuthStore;
