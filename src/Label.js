import React from "react";
import styled from "styled-components";

const LabelWrapper = `
  font-size: 12px;
  width: 100px;
  height: auto;
  background-color: white;
  padding: 12px;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: left;
`;
const Image = `
  width: 100%;
  height: auto;
`;
const Title = `
  font-size: 12px;
  width: 100%;
`;

export default ({ title, address, image }) => (
  <LabelWrapper>
    <Image src={image} />
    <Title>{title}</Title>
    <div>{address}</div>
  </LabelWrapper>
);
