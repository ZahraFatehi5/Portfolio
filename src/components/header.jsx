import React, { Component } from "react";
class Head extends Component {
  render() {
    return (
      <div className="-layout-background">
        <div className=" container">
          <div className="top-head-bg"></div>
          <div className="banner-head">
            <div className="text-block-head">
              <div className="size_div_head">
                <h1
                  style={{
                    lineHeight: 1.5,
                  }}
                >
                  I build things for the web.
                </h1>
                <p className="biography">
                  Hello! My name is Zahra and I enjoy creating things that live
                  on the internet. My interest in web development started back
                  in 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
