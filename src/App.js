import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

import "./App.css";
import DrawerMenu from "./components/menu";
import LayoutHeader from "./components/header";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <LayoutHeader />
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }} />
        </Layout>
        <Sider
          style={{ height: "100vh" }}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Row
            type="flex"
            justify="space-around"
            align="middle"
            style={{ height: 120, backgroundColor: "#FFDE02" }}
          >
            <Col>
              <strong>PRO</strong>NEXO
            </Col>
          </Row>
          <DrawerMenu />
        </Sider>
      </Layout>
    );
  }
}

export default App;
