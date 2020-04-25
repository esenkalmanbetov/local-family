import { types } from "mobx-state-tree";

const CountryModel = types.model("Countries", {
  id: types.optional(types.number, 0),
  title: types.optional(types.string, ""),
  regions: types.array(
    types.model("Regions", {
      id: types.number,
      title: types.string,
    })
  ),
});

export default CountryModel;
