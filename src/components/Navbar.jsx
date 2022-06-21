import React from "react";
import { Typography, Avatar, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  ContainerOutlined,
  //   MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  //   MenuUnfoldOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const Navbar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="mav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse!</Link>
        </Typography.Title>
      </div>
      <Menu
        theme="dark"
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Navbar;
