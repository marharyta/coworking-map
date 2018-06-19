import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import placeholder from './placeholder.svg';
import user from './rec.svg';

const markerStyle = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -100%)"
};

export const Marker = ({ location, address, isUser }) => {
    return (
        !isUser ?
            <Link
                to={"/coworkings/" + location.title}
                key={address.id}
                style={markerStyle}
            >
                <img src={placeholder} alt="pin" width="30" height="30" />
            </Link> :
            <img style={markerStyle} src={user} alt="pin" width="30" height="30" />
    );
};

Marker.propTypes = {
    className: PropTypes.any,
    location: PropTypes.object,
    address: PropTypes.object
};
