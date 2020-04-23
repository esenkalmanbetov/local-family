export default {
  apiUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080"
      : "https://local-family-backend.herokuapp.com",
};

// development: http://localhost:8080
//  production: https://local-family-backend.herokuapp.com

// if (process.env.NODE_ENV === "development") {
//   url = "https://google.com";
// }

// if (process.env.NODE_ENV === "production") {
//   url = "https://stackoverflow.com/";
// }
