import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./Containers/App";
import RootStore from "./stores/Root.store";

const rootStore = RootStore.create({});

ReactDOM.render(
  <Provider stores={rootStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
