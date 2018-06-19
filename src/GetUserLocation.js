import React from 'react';
import PropTypes from 'prop-types';
import { store } from "./redux/store";
import { fetchUserLocations } from "./redux/actions";

// how to test https://superuser.com/questions/591758/how-do-i-make-chrome-forget-a-no-to-geolocation-on-a-site
export class GetUserLocation extends React.Component {
    componentDidMount() {
        document.getElementById('loc').addEventListener("click", function () {
            store.dispatch(fetchUserLocations("SE"));
        });

    }
    render() {
        return <button id="loc">get location</button>;
    }
};

GetUserLocation.propTypes = {
    className: PropTypes.any
};