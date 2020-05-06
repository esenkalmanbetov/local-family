import { types, getSnapshot, applySnapshot } from "mobx-state-tree";

import config from "../../config/config";

import TourModel from "../models/Tour.model";
import CategoryModel from "../models/Category.model";

const toursApi = config.apiUrl + "/api/tours";
const categoriesApi = config.apiUrl + "/api/categories";
const imagesApi = config.apiUrl + "/api/images";

const TourStore = types
  .model("TourStore", {
    _categories: types.optional(types.array(CategoryModel), []),
    _tours: types.optional(types.array(TourModel), []),
  })
  .actions((self) => ({
    getCategories() {
      fetch(categoriesApi + "/getCategories")
        .then((res) => res.json())
        .then((data) => {
          applySnapshot(self._categories, data);
        });
    },

    createTour(formData) {
      return new Promise(function(resolve, reject) {
        fetch(toursApi + "/createTour", {
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

    updateTour(formData) {
      return new Promise(function(resolve, reject) {
        fetch(toursApi + "/update", {
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

    loadTours(userId) {
      new Promise((resolve, reject) => {
        fetch(toursApi + "/getByUserId/" + userId)
          .then((res) => res.json())
          .then((tours) => {
            applySnapshot(self._tours, tours);
          })
          .catch((err) => {
            console.error("err: ", err);
          });
      });
    },

    loadAllTours() {
      new Promise((resolve, reject) => {
        fetch(toursApi + "/getAllTours")
          .then((res) => res.json())
          .then((tours) => {
            applySnapshot(self._tours, tours);
          })
          .catch((err) => {
            console.error("err: ", err);
          });
      });
    },

    deleteTour(tourId) {
      return new Promise(function(resolve, reject) {
        fetch(toursApi + "/delete/" + tourId, {
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

    deleteTourImages(tourId) {
      return new Promise(function(resolve, reject) {
        fetch(imagesApi + "/deleteByTourId/" + tourId, {
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
    categories() {
      return getSnapshot(self._categories);
    },

    tours() {
      return getSnapshot(self._tours);
    },
  }));

export default TourStore;
