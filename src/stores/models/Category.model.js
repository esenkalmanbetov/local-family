import { types } from "mobx-state-tree";

const CategoryModel = types.model("CategoryModel", {
  id: types.optional(types.number, 0),
  title: types.optional(types.string, ""),
});

export default CategoryModel;
