import { types } from "mobx-state-tree";

import AuthStore from "./domain/Auth.store";
import TutorStore from "./Tutor.store";

const RootStore = types.model("RootStore", {
  authStore: types.optional(AuthStore, {}),
  tutorStore: types.optional(TutorStore, {}),
});

export default RootStore;
