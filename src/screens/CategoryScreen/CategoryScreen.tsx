import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import MainNewsCard from "../../components/MainNewsCard";
import SingleMainItem from "../../components/SingleMainItem/SingleMainItem";
import SocialMedia from "./components/SocialMedia";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import LatestNews from "../HomeScreen/components/LatestNews";

interface CategoryScreenProps {
  id: number;
}

const QUERY = gql`
  query publicNewsCategoryDetail($id: Int!) {
    publicNewsCategoryDetail(id: $id) {
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
  }
`;

const CategoryScreen: React.FC<CategoryScreenProps> = ({ id }) => {
  const { data, loading } = useQuery(QUERY, {
    variables: {
      id,
    },
  });

  if (!data || loading) return <></>;

  return (
    <NewsScreenContainer>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>{data.publicNewsCategoryDetail.name}</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>{data.publicNewsCategoryDetail.name}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container first-section">
        <Row>
          <Col lg={8}>
            <Row className="mb-5">
              {data.publicNewsCategoryDetail.news.map((y: any, idx: number) => {
                if (idx < 2) {
                  console.log(y);
                  return (
                    <Col lg={6}>
                      <MainNewsCard
                        id={y.id}
                        title={y.title}
                        thumbnail={y.thumbnail}
                        category={data.publicNewsCategoryDetail.name}
                        date={y.created_at}
                        author={"None"}
                      />
                    </Col>
                  );
                } else {
                  return (
                    <SingleMainItem
                      title={y.title}
                      thumbnail={y.thumbnail}
                      category={y.name}
                      date={y.created_at}
                    />
                  );
                }
              })}
            </Row>
          </Col>
          <Col lg={4}>
            <LatestNews />
            <SocialMedia />
          </Col>
        </Row>
      </div>
    </NewsScreenContainer>
  );
};

export default CategoryScreen;

const NewsScreenContainer = styled.div`
  .page-title-area {
    padding-top: 35px;
    padding-bottom: 32px;
    border-bottom: 1px solid #e1e1e1;
  }

  .page-title-content {
    position: relative;

    h2 {
      margin-bottom: 0;
      font-size: 30px;
    }

    ul {
      text-align: right;
      position: absolute;
      right: 0;
      padding-left: 0;
      margin-bottom: 0;
      list-style-type: none;
      top: 50%;
      transform: translateY(-50%);

      li {
        display: inline-block;
        margin-left: 15px;
        font-weight: 400;
        color: #ff661f;
        position: relative;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          &::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 1px;
            background-color: #ff661f;
          }
        }

        a {
          text-decoration: none;
          transition: 0.5s;
          color: #09101f;

          &:hover {
            color: #ff661f;
          }
        }
      }
    }
  }

  .first-section {
    margin-top: 60px;
  }
`;
