import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Row, Col, Card, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
  let result = simplified == 100 ? 100 : 10;
  console.log(`You ${result} the exam.`);
  const { data: crytpoList, isFetching } = useGetCryptosQuery({
    pollingInterval: 3000, //在使用时传入轮询间隔即可
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const [cryptos, setCryptos] = useState();
  console.log("cryptos", cryptos);
  useEffect(() => {
    setCryptos(crytpoList?.data?.coins);
  }, [crytpoList]);

  return (
    <>
      {/*BrowserRouter内部只能有一个根容器,包裹其他内容*/}
      {/*添加basename='/xx'后,点击Link跳转其他路由时,url会将/xx添加到路由名前,所以使用路由路径和加了cryptocurrencies的路由路径都能匹配该路由*/}
      <Router basename="/cryptocurrencies">
        <Route path="/crypto/:name" component={CryotiDisplay}></Route>
        <Row>
          {cryptos &&
            cryptos.map((crypto) => (
              <Col key={crypto.uuid} className="crypto-card">
                {/* 可在对应的组件中输出props查看传入的对象的信息,添加replace将跳转前的上一个页面替换成当前页面,只将当前页面入栈*/}
                <Link to={`/crypto/${crypto.name}`}>
                  <Card
                    title={`${crypto.rank}. ${crypto.name}`}
                    extra={
                      <img className="crypto-image" src={crypto.iconUrl} />
                    }
                    hoverable
                    style={{ width: 300 }}
                  >
                    <p>{millify(crypto.price)}</p>
                    <p
                      style={
                        `${crypto.color}` === "#000000" //黑
                          ? {
                              backgroundColor: "yellow",
                              color: "black",
                              fontSize: "20px",
                            }
                          : `${crypto.color}` === "#1b1f2a" //黑
                          ? {
                              backgroundColor: "green",
                              color: "white",
                              fontSize: "20px",
                            }
                          : `${crypto.color}` === "#3C3C3D" //黑
                          ? {
                              backgroundColor: "green",
                              color: "white",
                              fontSize: "20px",
                            }
                          : {
                              backgroundColor: `${crypto.color}`,
                              color: "white",
                              fontSize: "20px",
                            }
                      }
                    >
                      {millify(crypto.marketCap)}
                    </p>
                    <p>{millify(crypto.change)}%</p>
                    <p></p>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </Router>
    </>
  );
};

export default Cryptocurrencies;

function CryotiDisplay(props) {
  // console.log("props", props);
  return <div>幣種:{props.match.params.name}</div>;
}
