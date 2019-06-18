import React, { Component } from "react";
import "./PopUpPic.css";

export default class PopUpPic extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h2>{this.props.title}</h2>
          <img className="original" src={this.props.originalUrl} alt="None" />
          <div className="description">{this.props.description}</div>
          <span className="close" onClick={this.props.closePopup}></span>
        </div>
      </div>
    );
  }
}
