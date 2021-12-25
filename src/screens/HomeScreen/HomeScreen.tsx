import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MainCard from "../../components/MainCard";
import NewsCardBox from "../../components/NewsCardBox";
import CategoryNews from "./components/CategoryNews";
import LatestNews from "./components/LatestNews";
import SocialMedia from "./components/SocialMedia";

const HomeScreen = () => {
  return (
    <HomeScreenContainer className="container">
      <Row>
        <Col lg={8}>
          <MainCard
            tag="World News"
            title="Speech to the nation on the current situation and the warning of coronavirus"
            date="28 September, 2021"
            author="Walters"
            image="/main-news-1.jpg"
          />
        </Col>
        <Col lg={4}>
          <MainCard
            variant="secondary"
            tag="Business"
            title="Follow some simple rules to invest money in any business"
            date="28 September, 2021"
            image="/main-news-1.jpg"
          />

          <NewsCardBox
            tag="Home News"
            title="A team of British troops is constantly monitoring cyber attacks"
            date="28 September, 2021"
            image="/main-news-1.jpg"
          />

          <NewsCardBox
            tag="Home News"
            title="A team of British troops is constantly monitoring cyber attacks"
            date="28 September, 2021"
            image="/main-news-1.jpg"
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }}>
        <Col lg={8}>
          <CategoryNews />
          <CategoryNews />
          <CategoryNews />
        </Col>

        <Col lg={4}>
          <LatestNews />
          <SocialMedia />
        </Col>
      </Row>
    </HomeScreenContainer>
  );
};

export default HomeScreen;

const HomeScreenContainer = styled.div`
  margin-top: 20px;

  .row {
    @media screen and (max-width: 992px) {
      gap: 20px;
    }
  }

  &.container {
    @media screen and (min-width: 1200px) {
      max-width: 1400px !important;
    }
  }
`;
