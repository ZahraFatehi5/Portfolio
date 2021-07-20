import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;

class Cards extends Component {
  render() {
    return (
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?cs=srgb&dl=pexels-brett-jordan-5417837.jpg&fm=jpg"
            />
          }
        >
          <Meta title="My Twitter" description="www.twitter.com" />
        </Card>
      </div>
    );
  }
}

export default Cards;
