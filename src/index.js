// @flow
import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./serviceWorker";
import AppProvider from "AppProvider";

const target = document.querySelector("#root");

render(<AppProvider />, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
