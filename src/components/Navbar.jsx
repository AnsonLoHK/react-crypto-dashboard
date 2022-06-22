import React, { useState } from "react";
import { Layout, Button, Typography, Avatar, Menu } from "antd";
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
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const { Sider } = Layout;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [state, setState] = useState({
    current: "home",
    collapsed: true,
  });

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse!</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>

      <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
        {/* <div className="logo" /> */}
        <Menu theme="dark" selectedKeys={state.current}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="cryptocurrencies" icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="exchanges" icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="news" icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Navbar;
