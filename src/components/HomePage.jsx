import React from "react";
import { Typography, Col, Row, Statistic } from "antd";
// import the auto-generated React hooks from the API slice into your component file
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import Test from "./test/Test";

const { Title } = Typography;

const HomePage = () => {
  // useGetCryptosQuery 发出请求的这些函数只能在函数式组件内部使用，也就是说，请求函数永远在组件被渲染之前调用，
  // 想要直接将其作为事件的处理函数是不可能的。解决该问题的方案有三种，一种是使用lazy版本的函数，比如useLazyGetUserByIdQuery，
  // 一种是使用选择性调用特性，还有一种是使用mutation。
  const { data, isFetching } = useGetCryptosQuery({
    pollingInterval: 3000, //在使用时传入轮询间隔即可
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const globalStats = data?.data?.stats;
  const globalStatus = data?.data?.status;

  if (isFetching) return <div>Loading...</div>;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats.totalExchanges}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={globalStats.totalMarketCap}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={globalStatus} />
        </Col>

        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to={{ pathname: "/cryptocurrencies" }} target="_blank">
            Show more
          </Link>
        </Title>
      </div>
      <Cryptocurrencies simplified={10} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest crypto news
        </Title>
        <Title level={3} className="show-more">
          <Link to={{ pathname: "/news" }} target="_blank">
            Show more
          </Link>
        </Title>
      </div>
      <News simplified />
      <Test />
    </>
  );
};

export default HomePage;

// 1. isFetching - When true, indicates that the query is currently fetching, but might have data from an earlier request. This will be true for both
// the first request fired off, as well as subsequent requests.

// 2 .isLoading - When true, indicates that the query is currently loading for the first time, and has no data yet. This will be true for
// the first request fired off, but not for subsequent requests.

/*
3. refetchOnMountOrArgChange - Allows forcing the query 
to always refetch on mount (when true is provided). Allows 
forcing the query to refetch if enough time (in seconds) 
has passed since the last query 
for the same cache (when a number is provided). Defaults to false
*/

/*
4.
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  cryptosList?.data?.coins)
  這裡可以把data想像成是一個變數 變數名稱從 data 命名成 cryptosList

  const { data, isFetching } = useGetCryptosQuery(count);
  data?.data?.coins)
  這裡可以把data想像成是一個變數 變數名稱是 data 沒有另外命名
  
*/
