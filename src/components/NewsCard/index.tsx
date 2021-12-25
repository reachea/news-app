import React from "react";
import styled from "styled-components";

const NewsCard = () => {
  return (
    <NewsCardContainer>
      <div className="row align-items-center">
        <div className="col-lg-4 col-sm-4">
          <div className="politics-news-image">
            <a href="#">
              <img src="/main-news-1.jpg" alt="image" />
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-sm-8">
          <div className="politics-news-content">
            <h3>
              <a href="#">
                Politically, new riots have started inside the country
              </a>
            </h3>
            <p>28 September, 2021</p>
          </div>
        </div>
      </div>
    </NewsCardContainer>
  );
};

export default NewsCard;

const NewsCardContainer = styled.div`
  margin-bottom: 30px;
  transition: 0.5s;

  .politics-news-image {
    overflow: hidden;
    position: relative;

    img {
      max-width: 100%;
      height: auto;
      display: inline-block;
      transition: 0.5s;
    }
  }

  .politics-news-content {
    h3 {
      font-size: 18px;
      margin-top: 12px;
      margin-bottom: 12px;

      a {
        color: #09101f;
        position: relative;
        z-index: 1;

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

      p {
        font-weight: 400;
        font-size: 14px;
      }
    }
  }

  &:hover {
    .politics-news-image {
      img {
        transform: scale(1.1);
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
    }
  }
`;
