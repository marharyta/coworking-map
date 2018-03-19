import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          { this.props.children }
        </Slider>
      </div>
    );
  }
}