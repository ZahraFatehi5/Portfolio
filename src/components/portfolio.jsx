import React, { Component } from "react";
import { Row, Col, Image } from "antd";

class Portfolio extends Component {
  images = [
    {
      index: 1,
      src: " ../assest/pigGame.png",
      caption: "pigGame",
      href: "https://pig-game-beryl-five.vercel.app/",
      Description: "HTML CSS JS ",
    },
    {
      index: 2,
      src: "../assest/bankAcc.png",
      caption: "BankAccount",
      href: "https://bank-array.vercel.app/",
      Description: "HTML CSS JS",
    },
    {
      index: 3,
      src: "../assest/bankist.png",
      caption: "Bankist",
      href: "https://bank-lake.vercel.app/",
      Description: "HTML CSS JS",
    },
    {
      index: 4,
      src: "../assest/library.png",
      caption: "Library",
      href: "https://github.com/ZahraFatehi5/Library-c--Qt",
      Description: "C++ Qt",
    },
  ];
  PreviewText = () => {
    const TextMaskInfo = document.getElementsByClassName("ant-image-mask-info");

    this.images.map((image) => {
      TextMaskInfo[image.index].textContent = "";
      TextMaskInfo[image.index].insertAdjacentHTML(
        "afterbegin",
        `
        <div class="image-info">
          <h4 class="caption" >${image.caption}</h4>

          <div class="div-caption">
         ${image.Description}</div>

          <a class="Description" href=${image.href} >READ MORE  😃</a>
        </div>
        `
      );

      // const Description = document.createElement("a");
      // Description.href = image.href;
      // Description.classList.add("Description");
      // Description.innerText = "READ MORE";
      // TextMaskInfo[image.index].append(Description);
      // TextMaskInfo[image.index].insertAdjacentHTML(
      //   "afterbegin",
      //   `<h2 class="caption" >${image.caption}</h2>`
      // );
    });
  };

  componentDidMount() {
    this.PreviewText();
  }

  render() {
    return (
      <div>
        <Row gutter={[48, 8]} justify="space-between">
          {this.images.map((image, index) => (
            <Col
              key={index}
              className="imagePortfolio "
              xs={24}
              sm={24}
              md={24}
              lg={12}
              span={12}
              justify="space-between"
            >
              <Image src={image.src} className="portf" />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Portfolio;
