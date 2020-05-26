import { types, getSnapshot, applySnapshot } from "mobx-state-tree";

import config from "../../config/config";

import FamilyModel from "../models/Family.model";

const familiesApi = config.apiUrl + "/api/families";

const FamilyStore = types
  .model("FamilyStore", {
    _families: types.optional(types.array(FamilyModel), []),
    _familyDetail: types.optional(FamilyModel, {}),
  })
  .actions((self) => ({
    createFamily(formData) {
      return new Promise(function(resolve, reject) {
        fetch(familiesApi + "/createFamily", {
          method: "POST",
          body: formData,
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

    editFamily(formData) {
      return new Promise(function(resolve, reject) {
        fetch(familiesApi + "/update", {
          method: "PUT",
          body: formData,
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

    loadFamilyDetail(familyId) {
      new Promise((resolve, reject) => {
        fetch(familiesApi + "/getById/" + familyId)
          .then((res) => res.json())
          .then((familyDetail) => {
            console.log("familyDetail: ", familyDetail);
            applySnapshot(self._familyDetail, familyDetail);
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

    familyDetail() {
      return getSnapshot(self._familyDetail);
    },
  }));

export default FamilyStore;
