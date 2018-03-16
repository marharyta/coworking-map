import React from "react";
// import axios from "axios";

class CoworkingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    fetch("coworking.json").then(resp => {
      console.log(resp.blob());
    });
  }
  render() {
    return <h1>Hello</h1>;
  }
}

export default CoworkingList;
