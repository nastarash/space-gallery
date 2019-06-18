import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PictureContainer from "./components/PicturesContainer/PictureContainer";
import { planets } from "./common/task";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <PictureContainer {...planets} />
      </React.Fragment>
    );
  }
}

