import React, { useEffect, useState } from "react";
import { Layout, Button, Typography, Avatar, Menu } from "antd";
import { Link } from "react-router-dom";
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
  // 螢幕寬高初始值
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  // 每次渲染時重新裝大小
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  //   手機模式時,sidebar menu影藏
  useEffect(() => {
    if (windowDimenion.winWidth <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [windowDimenion]);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={4} className="logo">
          <Link to="/">Cryptoverse!</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
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
      )}
    </div>
  );
};

export default Navbar;
