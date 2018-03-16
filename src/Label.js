import React from "react";

const labelStyles = {
  fontSize: "12px",
  width: "100px",
  height: "auto",
  backgroundColor: "white",
  padding: "12px",
  paddingTop: "0px",
  paddingLeft: "0px",
  paddingRight: "0px",
  textAlign: "left"
};
const imageStyles = {
  width: "100%",
  height: "auto"
};
const titleStyles = {
  fontSize: "12px",
  width: "100%"
};

export default ({ title, address, image }) => (
  <div style={labelStyles}>
    <img style={imageStyles} src={image} />
    <h1 style={titleStyles}>{title}</h1>
    <div>{address}</div>
  </div>
);
