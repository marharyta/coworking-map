import React from "react";
import { render } from "react-dom";
import { CoworkingMap } from "./Maps";
import CoworkingList from "./CoworkingList";
import Slider from "./Slider";
import styled from "styled-components";

const Wrapper = styled.div`
  background: pink;
  font-family: sans-serif;
  text-align: center;
`;


const App = () => (
  <Wrapper>
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
  </Wrapper>
);

render(<App />, document.getElementById("root"));

   