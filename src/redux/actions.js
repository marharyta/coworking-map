export const REQUEST_LOCATIONS =
    "REQUEST_LOCATIONS";
export const RECEIVE_LOCATIONS =
    "RECEIVE_LOCATIONS";
export const FAIL_LOCATIONS = "FAIL_LOCATIONS";
export const SELECT_LOCATION_ON_MAP =
    "SELECT_LOCATION_ON_MAP";
export const GET_CENTER_COORDINATES =
    "GET_CENTER_COORDINATES";

export const REQUEST_USER_LOCATIONS =
    "REQUEST_USER_LOCATIONS";
export const RECEIVE_USER_LOCATIONS =
    "RECEIVE_USER_LOCATIONS";
export const FAIL_USER_LOCATIONS = "FAIL_USER_LOCATIONS";

export const CONVERT_COORDINATES_TO_LOCATION = "CONVERT_COORDINATES_TO_LOCATION";

export const SEARCH_LOCATION = "SEARCH_LOCATION";

function requestLocations(country) {
    return {
        type: REQUEST_LOCATIONS,
        payload: {
            isFetching: true,
            country
        }
    };
}

function receiveLocations(country, data) {
    return {
        type: RECEIVE_LOCATIONS,
        payload: {
            country,
            locations: data,
            receivedAt: Date.now()
        }
    };
}

function failLocations(country, data) {
    return {
        type: FAIL_LOCATIONS,
        payload: data
    };
}

export function fetchLocations(country) {
    return function (dispatch) {
        dispatch(requestLocations(country));

        fetch("https://api.myjson.com/bins/11sr9q", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                dispatch(receiveLocations(country, res));
            })
            .catch(error => {
                console.log(error);
                dispatch(failLocations(country, error));
            });
    };
}


function selectLocationOnMap(location) {
    return {
        type: SELECT_LOCATION_ON_MAP,
        payload: location
    };
}

export function getMapCenterCoordinates(
    location,
    coordinates
) {
    return {
        type: GET_CENTER_COORDINATES,
        payload: {
            location: location,
            coordinates: coordinates
        }
    };
}

export function getSelectedLocation(location) {
    return function (dispatch) {
        dispatch(selectLocationOnMap(location));
        dispatch(
            getMapCenterCoordinates(
                location,
                location.coords
            )
        );
    };
}

function requestUserLocation(country) {
    return {
        type: REQUEST_USER_LOCATIONS,
        payload: {
            isFetching: true,
            country
        }
    };
}

function receiveUserLocation(country, data) {
    return {
        type: RECEIVE_USER_LOCATIONS,
        payload: {
            country,
            location: {
                coordinates: {
                    lat: data.lat,
                    lng: data.lng
                }
            },
            receivedAt: Date.now()
        }
    };
}

function failUserLocation(country, data) {
    return {
        type: FAIL_LOCATIONS,
        payload: data
    };
}

export function fetchUserLocations(country) {
    return function (dispatch) {
        const getLocationOfUserGoogleAPI = function (callbackOnSend, callbackOnReceive, callbackOnFail) {
            var startPos;
            var geoOptions = {
                enableHighAccuracy: true,
                timeout: 10 * 1000
            }

            var geoSuccess = function (position) {
                startPos = position;
                console.log('position', position);
                // callbackOnReceive(country, position);
                const positionCoords = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                dispatch(receiveUserLocation(country, positionCoords));
            };
            var geoError = function (error) {
                console.log('Error occurred. Error code: ' + error.code);
                // error.code can be:
                //   0: unknown error 
                //   1: permission denied
                //   2: position unavailable (error response from location provider)
                //   3: timed out
                // callbackOnFail(country, error);
                dispatch(failUserLocation(country, error));
            };
            if (navigator.geolocation) {
                console.log("Geolocation is supported!");
                // callbackOnSend(country);
                dispatch(requestUserLocation(country));
                navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
            } else {
                console.log("Geolocation is not supported for this Browser/OS version yet.");
            }

        };

        const getLocationOfUserFallbackAPI = function (callbackOnSend, callbackOnReceive, callbackOnFail) {
            fetch('http://ip-api.com/json')
                .then(r => r.json())
                .then(r => console.log('third party', r))
                .catch();

            // https://geoip-db.com/json/

        };
        const getLocationOfUserFallbackAPI2 = function (callbackOnSend, callbackOnReceive, callbackOnFail) {
            fetch('https://geoip-db.com/json/')
                .then(r => r.json())
                .then(r => console.log('third party', r))
                .catch();

            // https://geoip-db.com/json/

        };
        getLocationOfUserGoogleAPI();
        getLocationOfUserFallbackAPI();
        getLocationOfUserFallbackAPI2();
    };
}

function convertCoordinatesToLocation(coordiates) {
    return {
        type: CONVERT_COORDINATES_TO_LOCATION,
        payload: data
    }
}

function getSearchLocationResults(parameter, data) {
    return {
        type: SEARCH_LOCATION,
        payload: {
            searchActive: true,
            parameter: parameter,
            results: data
        }
    }
}

export function getSearchResults(parameter, data) {
    return function (dispatch) {
        dispatch(getSearchLocationResults(parameter, data));
    }
}