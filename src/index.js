import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import {
    BrowserRouter,
    Link,
    Route
} from "react-router-dom";
import { fetchLocations } from "./redux/actions";
import "./style.css";

const rootElement = document.getElementById(
    "root"
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path={"/"} component={App} />
        </BrowserRouter>
    </Provider>,
    rootElement
);
