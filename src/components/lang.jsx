import React, { Component } from "react";
import { Progress } from "antd";

class Lang extends Component {
  render() {
    const { lang, value } = this.props.lang;
    return (
      <div>
        <Progress
          type="circle"
          percent={value}
          width="80px"
          strokeColor="#ffc107"
          trailColor="#191923"
          style={{ marginTop: 15, marginBottom: 15 }}
        ></Progress>
        <br />
        <br />
        <h5 id="h5-lang">{lang}</h5>
      </div>
    );
  }
}

export default Lang;
