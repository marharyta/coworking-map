import React from "react";
import Section from "./Section";
const coworkings = require("./coworking.json");

let markers = [];

markers = coworkings.map(item => {
  return <Section key={item.id} text={item.title} images={item.images}/>;
});

class CoworkingList extends React.Component {
  render() {
    return ( 
      <div>
        { markers.map(item => item) }
      </div>
    )
  }
}

export default CoworkingList;
