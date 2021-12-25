import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import MainNewsCard from "../../../components/MainNewsCard";
import NewsCard from "../../../components/NewsCard";

const CategoryNews = () => {
  return (
    <CategoryNewsContainer>
      <div className="section-title">
        <h2>Politics</h2>
      </div>
      <Row>
        <Col lg={6}>
          <MainNewsCard />
        </Col>

        <Col lg={6}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Col>
      </Row>
    </CategoryNewsContainer>
  );
};

export default CategoryNews;

const CategoryNewsContainer = styled.div`
  .section-title {
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
    width: 100%;

    h2 {
      font-size: 25px;
      margin-bottom: 0;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100px;
      height: 1px;
      bottom: -1px;
      background: #ff661f;
    }
  }
`;
