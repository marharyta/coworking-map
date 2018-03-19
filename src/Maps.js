import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import Cowroking from "./Label";
const coworkings = require("./coworking.json");

let markers = [];
let showInfo = false;

coworkings.map(item => {
  const site = item;
  if (item.address.length !== 0) {
    markers.push(
      item.address.map(i => {
        return (
          <div>
            <Marker
              key={i.id}
              position={{
                lat: parseFloat(i.lat),
                lng: parseFloat(i.lon)
              }}
              onMouseOver={() => {
                showInfo = true;
                console.log("its me!");
              }}
              onMouseOut={() => {
                showInfo = false;
                console.log("hide");
              }}
            >
              <InfoBox
                options={{
                  closeBoxURL: ``,
                  enableEventPropagation: true
                }}
              >
                <Cowroking
                  title="Maps data"
                  address={i.street}
                  image={site.image}
                />
              </InfoBox>
            </Marker>
          </div>
        );
      })
    );
  }
});

export const CoworkingMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: 60.192059,
        lng: 24.945831
      }}
    >
      {markers.map(item => item)}
    </GoogleMap>
  ))
);
