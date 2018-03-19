import React from "react";
import SimpleSlider from "./Slider";

let gallery = [];

class Section extends React.Component {

  renderImages(images) {
    return images.map(i => {
      return <img src={i} alt="text"/>;
    });
  }

  createGallery(images){
    return this.renderImages(images);
  } 

  render() {
    return (
      <div>
        <h2>{ this.props.text }</h2>
        <div>
          <SimpleSlider>
            { this.createGallery(this.props.images) }
          </SimpleSlider>
        </div>
      </div>
    );
  }
}

export default Section;
