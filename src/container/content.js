import React, { Component } from "react";
import { Tabs } from "antd";
import { Row, Col, Input, Form } from "antd";

import "../App.css";
const TabPane = Tabs.TabPane;

class AppContent extends Component {
  render() {
    return (
      <div dir="rtl">
        <Tabs type="card" dir="rtl" activeKey={"2"}>
          <TabPane
            tab="لیست قیمت"
            key="1"
            dir="rtl"
            style={{ marginRight: 16 }}
          >
            <p>به زودی</p>
          </TabPane>
          <TabPane tab="سفارش خرید" key="2">
            <div style={{ backgroundColor: "#E4E4F1", padding: 16 }} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default AppContent;
