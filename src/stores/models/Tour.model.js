import { types } from "mobx-state-tree";

import CategoryModel from "./Category.model";

const TourModel = types.model("TourModel", {
  id: types.optional(types.number, 0),
  title: types.optional(types.string, ""),
  description: types.maybeNull(types.string),
  duration: types.maybeNull(types.number),
  price: types.maybeNull(types.number),
  categories: types.optional(types.array(CategoryModel), []),
});

export default TourModel;