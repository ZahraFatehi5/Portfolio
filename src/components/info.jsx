import React, { Component } from "react";
import { Progress } from "antd";

class Info extends Component {
  render() {
    const { skill, value } = this.props.skill;
    return (
      <div>
        <h5 className="skill">
          {skill}

          <Progress
            strokeColor="#ffc107"
            trailColor="#191923"
            size="small"
            percent={value}
          />
        </h5>
      </div>
    );
  }
}

export default Info;
