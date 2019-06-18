import React, { Component } from "react";
import PopUpPic from "../PopUpPic/PopUpPic";
import "./SinglePicContainer.css";

export default class SinglePicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <React.Fragment>
        <img
          className="thumbnail"
          src={this.props.thumbnailUrl}
          alt={this.props.title}
          title={this.props.title}
          onClick={this.togglePopup.bind(this)}
        />
        {this.state.showPopup ? (
          <PopUpPic {...this.props} closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </React.Fragment>
    );
  }
}
