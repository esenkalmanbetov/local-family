import { types, getSnapshot, applySnapshot } from "mobx-state-tree";

import config from "../../config/config";

import FamilyModel from "../models/Family.model";

const familiesApi = config.apiUrl + "/api/families";

const FamilyStore = types
  .model("FamilyStore", {
    _families: types.optional(types.array(FamilyModel), []),
  })
  .actions((self) => ({
    createFamily(familyForm) {
      return new Promise(function(resolve, reject) {
        fetch(familiesApi + "/createFamily", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(familyForm),
        })
          .then((res) => res.json())
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    editFamily(familyForm) {
      return new Promise(function(resolve, reject) {
        fetch(familiesApi + "/update", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(familyForm),
        })
          .then((res) => res.json())
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    loadFamilies(userId) {
      new Promise((resolve, reject) => {
        fetch(familiesApi + "/getByUserId/" + userId)
          .then((res) => res.json())
          .then((families) => {
            applySnapshot(self._families, families);
          })
          .catch((err) => {
            console.error("err: ", err);
          });
      });
    },

    loadAllFamilies() {
      new Promise((resolve, reject) => {
        fetch(familiesApi + "/getAllFamilies")
          .then((res) => res.json())
          .then((families) => {
            applySnapshot(self._families, families);
          })
          .catch((err) => {
            console.error("err: ", err);
          });
      });
    },

    deleteFamily(familyId) {
      return new Promise(function(resolve, reject) {
        fetch(familiesApi + "/delete/" + familyId, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  }))
  .views((self) => ({
    families() {
      return getSnapshot(self._families);
    },
  }));

export default FamilyStore;
