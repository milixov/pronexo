import React, { Component } from "react";
import { Row, Col, Icon, Avatar, Badge, Input } from "antd";

import "../App.css";

const Search = Input.Search;

class LayoutHeader extends Component {
  render() {
    return (
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
    );
  }
}

export default LayoutHeader;
