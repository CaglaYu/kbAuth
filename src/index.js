import React from "react";
import ReactDOM from "react-dom";
import { positions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

const options = {
    timeout: 5000,
    position: positions.MIDDLE
  };

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} template={AlertTemplate} {...options}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);