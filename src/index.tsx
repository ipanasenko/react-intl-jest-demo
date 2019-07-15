import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { IntlProvider } from "react-intl";

ReactDOM.render(
  <IntlProvider
    locale="en"
    messages={{ key: "Edit App.js and save to reload.", key2: "Learn React!!!11" }}
    textComponent={React.Fragment}
  >
    <App />
  </IntlProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
