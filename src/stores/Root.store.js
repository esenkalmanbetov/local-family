import { types } from "mobx-state-tree";

import AuthStore from "./Auth.store";

const RootStore = types.model("RootStore", { authStore: AuthStore });

export default RootStore;
