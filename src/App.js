import React, { Component } from "react";
import Infos from "./components/infos";
import Language from "./components/Language";
import Head from "./components/header";
import Knowledge from "./components/Knowledge";
import PictureInfo from "./components/PictureInfo";
import Cards from "./components/Cards";
import Portfolio from "./components/portfolio";
import "./App.css";

import { Layout, Breadcrumb, Row, Col, AutoComplete } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

// Import Ant Design styles by less entry

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
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
            <div class="ls-divider"></div>
            <h4 id="codeSkill">Coding</h4>
            <br />
            <br />
            <Infos />
            <div class="ls-divider"></div>
            <h4 id="codeSkill">Languages</h4>
            <Language />
            <div class="ls-divider"></div>
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

          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb>
              <h1>Some Things I’ve Built</h1>
            </Breadcrumb>
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
            <Breadcrumb>
              <h1>Cards</h1>
            </Breadcrumb>
            <Cards />
          </Content>
          <Footer style={{ textAlign: "center", background: "#20202A" }}>
            Zahra Fatehi
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
