import React, { Component } from "react";
import SinglePicContainer from "../SinglePicContainer/SinglePicContainer";
import "./PictureContainer.css";

export default class PictureContainer extends Component {
  render() {
    const pic = this.props.data;
    return (
      <div id="gallery">
        {pic.map(i => (
          <SinglePicContainer {...i} />
        ))}
      </div>
    );
  }
}
