import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import MainNewsCard from "../../../components/MainNewsCard";
import NewsCard from "../../../components/NewsCard";

const QUERY = gql`
  query latestNews {
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

const LatestNews = () => {
  const { data, loading } = useQuery(QUERY);

  if (!data || loading) return <></>;

  return (
    <LatestNewsContainer>
      <div className="section-title">
        <h2>Latest News</h2>
      </div>

      {data.latestNews.map((x: any) => {
        return (
          <NewsCard
            id={x.id}
            key={x.id}
            title={x.title}
            date={x.date}
            thumbnail={x.thumbnail}
          />
        );
      })}
    </LatestNewsContainer>
  );
};

export default LatestNews;

const LatestNewsContainer = styled.div`
  margin-bottom: 50px;

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
