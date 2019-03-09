import React, { Component } from "react";
import { Menu, Icon } from "antd";

import "../App.css";

const data = [
  { visible: true, id: 1, title: "داشبورد", icon: "bar-chart" },
  { visible: true, id: 2, title: "برنامه های فروش", icon: "database" },
  { visible: true, id: 3, title: "سفارش", icon: "solution" },
  { visible: true, id: 4, title: "پروژه", icon: "barcode" },
  { visible: true, id: 5, title: "پشتیبانی و گارانتی", icon: "coffee" },
  { visible: true, id: 6, title: "گزارش ها", icon: "rise" },
  { visible: true, id: 7, title: "سایر درخواست ها", icon: "like" },
  { visible: true, id: 8, title: "تنظیمات حساب", icon: "setting" },
  { visible: true, id: 9, title: "خروج", icon: "logout" }
];

class DrawerMenu extends Component {
  render() {
    return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={["3"]} dir="rtl">
        {data.map(item => {
          return (
            <Menu.Item key={item.id.toString()}>
              <Icon type={item.icon} className="Icon" />
              <span className="nav-text">{item.title}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default DrawerMenu;
