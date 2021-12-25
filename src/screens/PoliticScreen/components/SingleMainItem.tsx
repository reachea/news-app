import React from "react";
import styled from "styled-components";

const SingleMainItem = () => {
  return (
    <SingleMainItemContainer>
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="politics-news-image">
            <a href="#">
              <img src="/main-news-1.jpg" alt="image" />
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="politics-news-content-box">
            <span>Politics</span>
            <h3>
              <a href="#">
                All the highlights from western fashion week summer 2021
              </a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              ipsum suspendisse ultrices gravida risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div className="date">28 September 2021</div>
          </div>
        </div>
      </div>
    </SingleMainItemContainer>
  );
};

export default SingleMainItem;

const SingleMainItemContainer = styled.div`
  margin-bottom: 30px;

  .politics-news-image {
    overflow: hidden;
    position: relative;

    a {
      text-decoration: none;
      transition: 0.5s;
      color: #09101f;

      img {
        transition: 0.5s;
        max-width: 100%;
        height: auto;
        display: inline-block;
      }
    }
  }

  .politics-news-content-box {
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
    }

    .date {
      font-weight: 400;
      font-size: 14px;
      color: #656565;
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

    .politics-news-content-box {
      h3 {
        a {
          color: #ff661f;
          transition: 0.5s;

          &::before {
            width: 100%;
          }
        }
      }
    }
  }
`;
