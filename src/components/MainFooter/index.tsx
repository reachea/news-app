import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Link from "next/link";
import FooterCard from "./components/FooterCard";

const QUERY = gql`
  query publicNewsCategoryList($pagination: PaginationInput) {
    publicNewsCategoryList {
      id
      name
    }

    latestNews(pagination: $pagination) {
      id
      title
      thumbnail
      created_at
    }
  }
`;

const MainFooter = () => {
  const { data, loading } = useQuery(QUERY, {
    variables: {
      pagination: {
        page: 1,
        size: 3,
      },
    },
  });

  if (!data || loading) return <></>;

  return (
    <MainFooterContainer>
      <div className="container">
        <div className="row footer-area">
          <div className="col-md-4">
            <h2>Logo</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-md-4">
            <h4>Recent Post</h4>
            <ul>
              {data.latestNews.map((x: any) => {
                return (
                  <FooterCard
                    id={x.id}
                    thumbnail={x.thumbnail}
                    title={x.title}
                    date={x.created_at}
                  />
                );
              })}
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Useful Links</h4>
            <ul>
              {data.publicNewsCategoryList.map((x: any) => {
                return (
                  <li key={x.id}>
                    <Link href={`/category/${x.id}`}>{x.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-area">
          <div className="copyright-area-content">
            <p>
              Copyright © 2021. All Rights Reserved by <a href="#">News App</a>
            </p>
          </div>
        </div>
      </div>
    </MainFooterContainer>
  );
};

export default MainFooter;

const MainFooterContainer = styled.div`
  margin-top: 40px;
  background-color: #111111;

  .footer-area {
    padding: 50px 0px 30px 0px;

    ul {
      list-style: none;

      li {
        color: #ffffff;
        margin: 10px 0px;

        a {
          color: #ffffff;
          text-decoration: none;

          &:hover {
            color: #ff661f;
            transition: all 0.5s;
          }
        }
      }
    }

    h4 {
      color: #ffffff;
      margin-bottom: 15px;
    }

    h2 {
      color: #ff661f;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      color: #ffffff;
      font-size: 13px;
    }
  }

  .copyright-area {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #111111;
    border-top: 1px solid #292929;
  }

  .copyright-area-content {
    text-align: center;

    p {
      color: #ffffff;
      font-size: 14px;
      margin-bottom: 0px;

      a {
        display: inline-block;
        font-weight: 500;
        color: #ff661f;
      }
    }
  }
`;
