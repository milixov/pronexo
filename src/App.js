import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

import "./App.css";

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["3"]}
            dir="rtl"
          >
            <Menu.Item key="1" dir="rtl">
              <Icon type="bar-chart" className="Icon" />
              <span className="nav-text">داشبورد</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="database" className="Icon" />
              <span className="nav-text">برنامه های فروش</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="solution" className="Icon" />
              <span className="nav-text">سفارش</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="barcode" className="Icon" />
              <span className="nav-text">پروژه</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="coffee" className="Icon" />
              <span className="nav-text">پشتیبانی و گارانتی</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="rise" className="Icon" />
              <span className="nav-text">گزارش ها</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="like" className="Icon" />
              <span className="nav-text">سایر درخواست ها</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="setting" className="Icon" />
              <span className="nav-text">تنظیمات حساب</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="logout" rotate="270" className="Icon" />
              <span className="nav-text">خروج</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}

export default App;
