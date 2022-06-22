import React from "react";
import { HomePage, Exchange, Navbar } from "./components";
import "./App.css";
// v5
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

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
              {/* <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route> */}
              {/* <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route> */}
              {/* <Route exact path="/news">
                <News />
              </Route> */}
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
