import { types } from "mobx-state-tree";

import ImageModel from "./Image.model";
import UserModel from "./User.model";

const FamilyModel = types.model("FamilyModel", {
  id: types.optional(types.number, 0),
  familyName: types.optional(types.string, ""),
  location: types.optional(types.string, ""),
  phoneNumber: types.optional(types.string, ""),
  whatsapp: types.optional(types.string, ""),
  description: types.maybeNull(types.string),
  images: types.optional(types.array(ImageModel), []),
  user: types.maybeNull(UserModel, {}),
});

export default FamilyModel;
