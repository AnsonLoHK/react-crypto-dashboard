import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Row, Col, Card, Input } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
  let count = simplified === 100 ? 100 : 10;
  console.log("count", count);
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";

  console.log("cryptos", cryptos);

  return (
    <>
      {/*BrowserRouter内部只能有一个根容器,包裹其他内容*/}
      {/*添加basename='/xx'后,点击Link跳转其他路由时,url会将/xx添加到路由名前,所以使用路由路径和加了cryptocurrencies的路由路径都能匹配该路由*/}
      <Router basename="/cryptocurrencies">
        <Route path="/crypto/:name" component={CryotiDisplay}></Route>
        {simplified && (
          <div className="search-crypto">
            <Input
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
          </div>
        )}
        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((crypto) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              key={crypto.uuid}
              className="crypto-card"
            >
              {/* 可在对应的组件中输出props查看传入的对象的信息,添加replace将跳转前的上一个页面替换成当前页面,只将当前页面入栈*/}
              <Link to={`/crypto/${crypto.name}`}>
                <Card
                  title={`${crypto.rank}. ${crypto.name}`}
                  extra={
                    <img className="crypto-image" src={crypto.iconUrl} alt="" />
                  }
                  hoverable
                  style={{ width: 300 }}
                >
                  <p>Crypto Price:{millify(crypto.price)}</p>
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
                    MarketCap:{millify(crypto.marketCap)}
                  </p>
                  <p>Change:{millify(crypto.change)}%</p>
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

//  const { data: crytpoList, isFetching } = useGetCryptosQuery({
//    pollingInterval: 3000, //在使用时传入轮询间隔即可
//    refetchOnMountOrArgChange: true,
//    skip: false,
//  });
