// models/TutorStore.js
import { types } from "mobx-state-tree";

const TutorStore = types
  .model("TutorStore", {
    _counter: types.optional(types.number, 0),
  })
  .actions((self) => ({
    setCounter() {
      self._counter++;
    },
  }))
  .views((self) => ({
    get counter() {
      return self._counter;
    },
  }));
export default TutorStore;
