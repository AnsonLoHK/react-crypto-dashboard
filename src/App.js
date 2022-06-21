import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
// v5
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Layout, Typography, Space, Menu } from "antd";

// const { Header, Footer, Sider, Content } = Layout;
// const { Title, Paragraph, Text, Link } = Typography;

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
