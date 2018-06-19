import { combineReducers } from "redux";
import { REQUEST_LOCATIONS, RECEIVE_LOCATIONS, FAIL_LOCATIONS, SELECT_LOCATION_ON_MAP, GET_CENTER_COORDINATES, REQUEST_USER_LOCATIONS, RECEIVE_USER_LOCATIONS, FAIL_USER_LOCATIONS } from './actions';

const initialLocations = {
    isFetching: false,
    items: [],
    lastUpdated: 0
};

const initialSelected = {
    selectedLocation: undefined,
    locationCoordinates: undefined
};

const initialCenter = {
    centerLocation: undefined
};

const initialUserLocation = {
    isFetching: false,
    location: {
        coordinates: {
            lat: null,
            lng: null
        }
    },
    lastUpdated: 0
};

export const locations = (
    state = initialLocations,
    action
) => {
    switch (action.type) {
        case REQUEST_LOCATIONS:
            console.log("REQUEST_LOCATIONS", action);
            return {
                isFetching: true,
                items: []
            };
        case RECEIVE_LOCATIONS:
            console.log("RECEIVE_LOCATIONS", action);
            return {
                isFetching: false,
                items: [...action.payload.locations]
            };
        case FAIL_LOCATIONS:
            console.log("FAIL_LOCATIONS", action);
            return {
                isFetching: false,
                items: []
            };

        default:
            return state;
    }
};

export const centerLocation = (
    state = initialCenter,
    action
) => {
    switch (action.type) {
        case GET_CENTER_COORDINATES:
            console.log(
                "GET_CENTER_COORDINATES",
                action
            );
            return {
                centerLocation: {
                    ...action.payload.coordinates
                }
            };

        default:
            return state;
    }
};

export const userLocation = (
    state = initialUserLocation,
    action
) => {
    switch (action.type) {
        case REQUEST_USER_LOCATIONS:
            console.log("REQUEST_USER_LOCATIONS", action);
            return {
                isFetching: true,
                location: state.location
            };
        case RECEIVE_USER_LOCATIONS:
            console.log("RECEIVE_USER_LOCATIONS", action);
            return {
                isFetching: false,
                location: {
                    coordinates: {
                        lat: action.payload.location.coordinates.lat,
                        lng: action.payload.location.coordinates.lng
                    },
                    ...action.payload.location
                }
            };
        case FAIL_USER_LOCATIONS:
            console.log("FAIL_USER_LOCATIONS", action);
            return {
                isFetching: false,
                location: state.location
            };

        default:
            return state;
    }
};

export const combinedReducer = combineReducers({
    locations: locations,
    userLocation: userLocation,
    centerLocation: centerLocation
});