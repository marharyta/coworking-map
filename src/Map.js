import React from "react";
import GoogleMapReact from "google-map-react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { store } from "./redux/store";
import { fetchLocations } from "./redux/actions";
import { Marker } from "./Marker";
import { GetUserLocation } from './GetUserLocation';

const mapStateToProps = state => {
  return { locations: state.locations, userLocation: state.userLocation };
};

class SimpleMap extends React.Component {
  render() {
    const coords = {
      center: {
        lat: 60.169332656, // 60.169332656 or 60.192059
        lng: 24.939746241 // 24.939746241 or 24.945831
      },
      zoom: 12
    };

    return (
      <div
        style={{ height: "50vh", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key:
              "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
          }}
          gestureHandling='cooperative'
          defaultCenter={coords.center}
          defaultZoom={coords.zoom}
          center={this.props.userLocation.location.coordinates.lat ? this.props.userLocation.location.coordinates : coords.center}
        >
          {
            this.props.locations.items.map(item => {
              if (item.address.length !== 0) {
                return item.address.map(i => <Marker location={item} address={i} lat={i.lat} lng={i.lng} isUser={false} />);
              }
            })
          }
          <Marker isUser={true} lat={this.props.userLocation.location.coordinates.lat} lng={this.props.userLocation.location.coordinates.lng} />
        </GoogleMapReact>
        <GetUserLocation />
      </div >
    );
  }
}

SimpleMap.propTypes = {
  locations: PropTypes.object
};

const Map = connect(mapStateToProps)(SimpleMap);
export default Map;
