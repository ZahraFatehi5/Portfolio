import React, { Component } from "react";
import { Image } from "antd";
import url from "../assest/profile.jpg";

class PictureInfo extends Component {
  render() {
    return (
      <div id="height" position="fixed">
        <Image className="picInfo" src={url} />

        <h3>Zahra Fatehi</h3>
        <h5 id="PictureInfo">Front-end Developer</h5>
      </div>
    );
  }
}

export default PictureInfo;
