import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MainCard from "../../components/MainCard";
import NewsCardBox from "../../components/NewsCardBox";
import CategoryNews from "./components/CategoryNews";
import LatestNews from "./components/LatestNews";
import SocialMedia from "./components/SocialMedia";
import { gql, useQuery } from "@apollo/client";
import SingleMainItem from "../../components/SingleMainItem/SingleMainItem";

const QUERY = gql`
  query homePageQuery {
    publicNewsList {
      id
      title
      thumbnail
      category {
        id
        name
      }
      created_at
    }

    publicNewsCategoryList {
      id
      name
      news {
        id
        title
        thumbnail
        created_at
        summary
      }
    }

    latestNews {
      id
      title
      thumbnail
      category {
        id
        name
      }
      created_at
    }
  }
`;

const HomeScreen = () => {
  const { data, loading } = useQuery(QUERY);

  if (!data || loading) return <></>;

  console.log(data);

  return (
    <HomeScreenContainer className="container">
      <Row>
        <Col lg={8}>
          <MainCard
            tag={data.latestNews[0]?.category?.name}
            title={data.latestNews[0]?.title}
            date={data.latestNews[0]?.created_at}
            author="Walters"
            image={data.latestNews[0]?.thumbnail}
          />
        </Col>
        <Col lg={4}>
          <MainCard
            variant="secondary"
            tag={data.latestNews[1]?.category?.name}
            title={data.latestNews[1]?.title}
            date={data.latestNews[1]?.created_at}
            author="Walters"
            image={data.latestNews[1]?.thumbnail}
          />

          <NewsCardBox
            tag={data.latestNews[2]?.category?.name}
            title={data.latestNews[2]?.title}
            date={data.latestNews[2]?.created_at}
            image={data.latestNews[2]?.thumbnail}
          />

          <NewsCardBox
            tag={data.latestNews[3]?.category?.name}
            title={data.latestNews[3]?.title}
            date={data.latestNews[3]?.created_at}
            image={data.latestNews[3]?.thumbnail}
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "30px" }}>
        <Col lg={8}>
          {data.publicNewsCategoryList.map((x: any) => {
            return (
              <div>
                <div className="section-title">
                  <h2>{x.name}</h2>
                </div>
                <div>
                  {x.news.map((y: any) => {
                    return (
                      <SingleMainItem
                        title={y.title}
                        category={x.name}
                        thumbnail={y.thumbnail}
                        summary={y.summary}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
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
