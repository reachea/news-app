import React from "react";
import styled from "styled-components";

interface MainNewsCardProps {
  category?: string;
  title?: string;
  author?: string;
  date?: string;
  thumbnail?: string;
}

const MainNewsCard: React.FC<MainNewsCardProps> = ({
  title,
  author,
  category,
  date,
  thumbnail,
}) => {
  return (
    <MainNewsCardContainer>
      {thumbnail ? (
        <div className="politics-news-image">
          <a href="#">
            <img src="/main-news-1.jpg" alt="image" />
          </a>
        </div>
      ) : (
        <div className="placeholder"></div>
      )}
      {title ? (
        <div className="politics-news-content">
          <span>{category}</span>
          <h3>
            <a href="#">{title}</a>
          </h3>
          <p>
            <a href="#">{author}</a> / {date}
          </p>
        </div>
      ) : (
        <div className="politics-news-content">
          <div className="tag-placeholder" style={{ width: "100px" }}></div>
          <h3>
            <div className="tag-placeholder"></div>
          </h3>
          <p>
            <div className="tag-placeholder"></div>
          </p>
        </div>
      )}
    </MainNewsCardContainer>
  );
};

export default MainNewsCard;

const MainNewsCardContainer = styled.div`
  .placeholder {
    background-color: #bdc3c7;
    width: 100%;
    height: 230px;
  }

  .tag-placeholder {
    background-color: #bdc3c7;
    width: 300px;
    height: 12px;
    margin-bottom: 10px;
  }

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
