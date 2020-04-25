import { types } from "mobx-state-tree";

import AuthStore from "./domain/Auth.store";
import TourStore from "./domain/Tour.store";
import TutorStore from "./Tutor.store";

const RootStore = types.model("RootStore", {
  authStore: types.optional(AuthStore, {}),
  tourStore: types.optional(TourStore, {}),
  tutorStore: types.optional(TutorStore, {}),
});

export default RootStore;
