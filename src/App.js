import React from "react";
import {
  HomePage,
  Exchange,
  Navbar,
  CryptoDetails,
  News,
  Cryptocurrencies,
} from "./components";
import "./App.css";
// v5
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Layout, Typography } from "antd";
const { Title } = Typography;
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/exchanges">
                <Exchange />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Title level={5} style={{ color: "white", textAlign: "center" }}>
          Copyright © 2022 Cryptoverse Inc.
          <br />
          All Rights Reserved.
        </Title>
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
      </div>
    </div>
  );
};

export default App;

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {}
