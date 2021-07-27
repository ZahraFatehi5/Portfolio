import React, { Component } from "react";
import { CheckOutlined } from "@ant-design/icons";

class Knowledge extends Component {
  Knowledge = [
    { Knowledge: "Bootstrap,Ant-design" },
    { Knowledge: "GIT knowledge" },
    { Knowledge: "Linux" },
  ];
  render() {
    return (
      <div>
        {this.Knowledge.map((khnow, index) => (
          <li id="khnow" key={index}>
            {
              <CheckOutlined
                style={{
                  marginRight: 15,
                  color: "#ffc107",
                }}
              />
            }
            {khnow.Knowledge}
          </li>
        ))}
      </div>
    );
  }
}

export default Knowledge;
