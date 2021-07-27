import React, { Component } from "react";
import Infos from "./components/infos";
import Language from "./components/Language";
import Head from "./components/header";
import Knowledge from "./components/Knowledge";
import PictureInfo from "./components/PictureInfo";
import Portfolio from "./components/portfolio";
import Foot from "./components/footer";
import "./App.css";

import { Layout, Breadcrumb, AutoComplete } from "antd";

const { Header, Content, Footer, Sider } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  updateWindowDimension() {
    const setCollaps =
      document.getElementsByClassName("site-layout")[0].offsetWidth;
    setCollaps < 800
      ? this.setState({ collapsed: true })
      : this.setState({ collapsed: false });
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimension.bind(this));
  }
  componentWillMount() {
    window.removeEventListener("resize", this.updateWindowDimension.bind(this));
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  hide = () => {
    const a = this.state.collapsed ? "fadeshow1" : "fadeshow2";
    return a;
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          className="scrollSide"
          width="310px"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{ background: "#20202A" }}
        >
          <div className="logo" />

          <div id={this.hide()}>
            <PictureInfo />
            <div className="ls-divider"></div>
            <h4 id="codeSkill">Coding</h4>
            <br />
            <br />
            <Infos />
            <div className="ls-divider"></div>
            <h4 id="codeSkill">Languages</h4>
            <Language />
            <div className="ls-divider"></div>
            <h4 id="codeSkill">Knowledge</h4>
            <Knowledge />
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Sider>

        <Layout
          className="site-layout"
          style={{
            background: "#1E1E28",
          }}
        >
          <Header
            className="-layout-background"
            style={{
              background: "#fff",
              padding: 0,
              height: 333,
              margin: "16px 16px 16px 16px",
            }}
          >
            <Head />
          </Header>
          <h1 style={{ marginLeft: "5%" }}>Some Things I’ve Built</h1>
          <Content style={{ margin: "0 16px" }}>
            {/* <Breadcrumb>
              <h1>Some Things I’ve Built</h1>
            </Breadcrumb> */}
            <div
              className="-layout-background"
              style={{
                padding: 24,
                // background: "#ffc107",
                minHeight: 360,
                height: AutoComplete,
              }}
            >
              <Portfolio />
            </div>
            {/* <Breadcrumb>
              <h1>Cards</h1>
            </Breadcrumb> */}
          </Content>
          <Footer
            className="lll"
            style={{
              textAlign: "center",
              background: "#20202A",
              color: "#fff",
            }}
          >
            <Foot />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
