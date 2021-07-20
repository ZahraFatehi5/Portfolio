import React, { Component } from "react";
import { Row, Col, Image } from "antd";
import pigGame from "../assest/pigGame.png";
import library from "../assest/library.png";
import bankist from "../assest/bankist.png";
import bankAcc from "../assest/bankAcc.png";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

class Portfolio extends Component {
  previewText = () => {
    const a = (document.getElementsByClassName(
      ".ant-image-mask-info"
    ).textcontent = "aaaaaaaaaaaaaaa");
    console.log("000000000000000000", a);
    return 0;
  };

  render() {
    return (
      <div>
        <Row gutter={[48, 8]} justify="space-between">
          <Col
            xsOffset={1}
            xs={24}
            sm={24}
            md={24}
            lg={12}
            span={12}
            justify="space-between"
          >
            <Image className=".imagePortfolio" src={pigGame} />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} span={12}>
            <Image className=".imagePortfolio" src={bankist} />
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} span={12}>
            <Image className="imagePortfolio" src={bankAcc} />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            span={12}
            // id={this.previewText()}
          >
            <Image
              // className="imagePortfolio"
              className={this.previewText()}
              src={library}
              style={{
                background: " #fff",
              }}
              preview={{
                maskClassName: this.previewText(),
              }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Portfolio;
