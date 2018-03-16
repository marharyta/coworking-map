import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import Cowroking from "./Label";
const coworkings = [
  {
    id: 123,
    title: "Think Company",
    image:
      "http://thinkcompany.fi/wp-content/uploads/2014/05/hkithinkco04-1024x702.jpg",
    address: [
      {
        id: 1234,
        country: "Finland",
        city: "Helsinki",
        street: "Yliopistonkatu 4",
        postcode: "00101",
        lat: "60.169787",
        lon: "24.948776"
      },
      {
        id: 1235,
        country: "Finland",
        city: "Helsinki",
        street: "Ladugårdsbågen 3",
        postcode: "00790",
        lat: "60.228029",
        lon: "25.015569"
      },
      {
        id: 1236,
        country: "Finland",
        city: "Helsinki",
        street: "Haartmansgatan 4",
        postcode: "00290",
        lat: "60.190711",
        lon: "24.907195"
      }
    ]
  },
  {
    id: 153,
    title: "MS Flux",
    image: " ",
    address: [
      {
        id: 1237,
        country: "Finland",
        city: "Helsinki",
        street: "Högbergsgatan 35",
        postcode: "00101",
        lat: "60.165238",
        lon: "24.946249"
      }
    ]
  }
];

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
