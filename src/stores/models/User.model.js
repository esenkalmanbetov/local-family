import { types } from "mobx-state-tree";

import CountryModel from "./Country.model";

const UserModel = types.model("UserModel", {
  id: types.optional(types.number, 0),
  email: types.optional(types.string, ""),
  firstName: types.optional(types.string, ""),
  lastName: types.optional(types.string, ""),
  role: types.optional(types.string, ""),
  residence: types.maybeNull(types.string),
  country: types.maybeNull(CountryModel),
  countryId: types.maybeNull(types.number),
  regionId: types.maybeNull(types.number),
  serviceCountries: types.optional(types.array(CountryModel), []),
});

export default UserModel;
