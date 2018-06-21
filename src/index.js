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

// ssl http://www.robpeck.com/2010/10/google-chrome-mac-os-x-and-self-signed-ssl-certificates/#.WynrdFOFPOR
//spaces http://www.eu-startups.com/2017/11/overview-of-the-10-best-co-working-spaces-in-helsinki/
// https://github.com/webpack/webpack-dev-server/issues/854

// places API
// https://developers.google.com/places/web-service/search
// https://developers.google.com/places/web-service/get-api-key?authuser=1

// AIzaSyB9mO6Fd3y1D5axM0WBtruEAHq7ghmLv34

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

// https://maps.googleapis.com/maps/api/place/nearbysearch/json
//   ?location=-33.8670522,151.1957362
//   &radius=500
//   &types=food
//   &name=harbour
//   &key=YOUR_API_KEY

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
