import React, { Component } from "react";
import { Image } from "antd";

class PictureInfo extends Component {
  render() {
    return (
      <div id="height" position="fixed">
        <Image className="picInfo" src="../assest/profile.jpg" />

        <h3>Zahra Fatehi</h3>
        <h5 id="PictureInfo">Front-end Developer</h5>
      </div>
    );
  }
}

export default PictureInfo;
