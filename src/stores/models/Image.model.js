import { types } from "mobx-state-tree";

const ImageModel = types.model("ImageModel", {
  id: types.optional(types.number, 0),
  pathName: types.maybeNull(types.string),
  tourId: types.maybeNull(types.number),
  familyId: types.maybeNull(types.number),
});

export default ImageModel;
