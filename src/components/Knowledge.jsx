import React, { Component } from "react";
import { CheckOutlined } from "@ant-design/icons";

class Knowledge extends Component {
  state = {
    Knowledge: [
      { Knowledge: "Bootstrap,Ant-design" },
      { Knowledge: "GIT knowledge" },
      { Knowledge: "Linux" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.Knowledge.map((khnow) => (
          <li id="khnow">
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
