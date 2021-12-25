import React from "react";
import styled from "styled-components";

const MainNewsCard = () => {
  return (
    <MainNewsCardContainer>
      <div className="politics-news-image">
        <a href="#">
          <img src="/main-news-1.jpg" alt="image" />
        </a>
      </div>
      <div className="politics-news-content">
        <span>Politics</span>
        <h3>
          <a href="#">
            Organizing conference among our selves to make it better financially
          </a>
        </h3>
        <p>
          <a href="#">Jonson Steven</a> / 28 September, 2021
        </p>
      </div>
    </MainNewsCardContainer>
  );
};

export default MainNewsCard;

const MainNewsCardContainer = styled.div`
  .politics-news-image {
    overflow: hidden;
    position: relative;

    a {
      text-decoration: none;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      color: #09101f;

      img {
        -webkit-transition: 0.5s;
        transition: 0.5s;
        max-width: 100%;
        height: auto;
        display: inline-block;
      }
    }
  }

  .politics-news-content {
    margin-top: 15px;

    span {
      font-size: 14px;
      font-weight: 500;
      color: #ff661f;
    }

    h3 {
      font-size: 20px;
      margin-top: 12px;
      margin-bottom: 12px;

      a {
        color: #09101f;
        position: relative;
        z-index: 1;
        text-decoration: none;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        color: #09101f;

        &::before {
          content: "";
          position: absolute;
          width: 0%;
          height: 100%;
          left: 0;
          top: 0;
          border-bottom: 1px solid #ff661f;
          -webkit-transition: 0.5s;
          transition: 0.5s;
          z-index: -1;
        }
      }
    }

    p {
      font-weight: 400;
      font-size: 14px;

      a {
        color: #656565;
        text-decoration: none;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        color: #09101f;
      }
    }
  }

  &:hover {
    .politics-news-image {
      a {
        img {
          transform: scale(1.1);
        }
      }
    }

    .politics-news-content {
      h3 {
        a {
          color: #ff661f;

          &::before {
            width: 100%;
          }
        }
      }
      p {
        a {
          color: #ff661f;
        }
      }
    }
  }
`;
