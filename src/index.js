import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { CoworkingMap } from "./Maps";
import CoworkingList from "./CoworkingList";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <CoworkingList />
    <CoworkingMap
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-AlCyJ3Zxb11UQ1_h9woZy-YoHAfeJTE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={
        <div style={{ height: `100%` }} />
      }
      containerElement={
        <div style={{ height: `500px` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
    />
  </div>
);

render(<App />, document.getElementById("root"));
