import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
console.log("store", store);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
