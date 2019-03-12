import React, { Component } from "react";
import { Tabs } from "antd";
import { Row, Col, Input, Form } from "antd";

import "../App.css";
const TabPane = Tabs.TabPane;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

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
            <div style={{ backgroundColor: "#E4E4F1", padding: 16 }}>
              <Row>
                <Col push={8} span={16}>
                  <Form layout="vertical" labelAlign="left">
                    <Row gutter={24}>
                      <Col span={24}>
                        <Row gutter={24}>
                          <Col span={8}>
                            <Form.Item label="شماره سفارش خرید">
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="کد">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={16}>
                        <Form.Item label="خریدار">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item label="آدرس">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="تلفن">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="فکس">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="سفارش دهنده">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label="تلفن همراه">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default AppContent;
