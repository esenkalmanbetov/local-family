import { types } from "mobx-state-tree";

const UserModel = types
  .model("UserModel", {
    id: types.optional(types.number, 0),
    email: types.optional(types.string, ""),
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    role: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setInfo(userInfo) {
      self.id = userInfo.id;
      self.email = userInfo.email;
      self.firstName = userInfo.firstName;
      self.lastName = userInfo.lastName;
      self.role = userInfo.role;
    },
  }));

export default UserModel;
