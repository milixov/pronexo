import React, { Component } from "react";
import { Layout, Icon } from "antd";
import { Row, Col } from "antd";
import { Avatar, Badge, Input } from "antd";

import "./App.css";
import DrawerMenu from "./components/menu";

const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Row style={{ marginLeft: "16px", marginRight: "16px" }}>
              <Col span={12} push={12} dir="rtl">
                <Search
                  placeholder="جستجو"
                  onSearch={value => console.log(value)}
                  style={{ width: 200, border: "none" }}
                />
              </Col>
              <Col span={12} pull={12}>
                <span>امیر رفیع زاده</span>
                <Avatar
                  className="Icon"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
                <span className="Icon">|</span>
                <Avatar
                  className="Icon"
                  size="small"
                  style={{ backgroundColor: "white" }}
                >
                  <Icon type="like" style={{ color: "black" }} />
                </Avatar>
                <Avatar
                  className="Icon"
                  size="small"
                  style={{ backgroundColor: "white" }}
                >
                  <Icon type="coffee" style={{ color: "black" }} />
                </Avatar>
                <Badge dot>
                  <Avatar
                    className="Icon"
                    size="small"
                    style={{ backgroundColor: "white" }}
                  >
                    <Icon type="setting" style={{ color: "black" }} />
                  </Avatar>
                </Badge>
              </Col>
            </Row>
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
