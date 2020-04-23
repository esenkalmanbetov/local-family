export default {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "https://local-family-backend.herokuapp.com"
      : "http://localhost:8080",
};

// development: http://localhost:8080
//  production: https://local-family-backend.herokuapp.com
