import React from "react";
import { Typography, Col, Row, Statistic } from "antd";

const { Title } = Typography;
const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>

      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={112893} />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
