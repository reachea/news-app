import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import MainNewsCard from "../../../components/MainNewsCard";
import NewsCard from "../../../components/NewsCard";

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <div className="section-title">
        <h2>Stay Connected</h2>
      </div>

      <ul className="stay-connected-list">
        <li>
          <a href="#">
            <i className="bx bxl-facebook"></i>
            120,345 Fans
          </a>
        </li>
        <li>
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
            25,321 Followers
          </a>
        </li>
        <li>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
            7,519 Connect
          </a>
        </li>
        <li>
          <a href="#" className="youtube">
            <i className="bx bxl-youtube"></i>
            101,545 Subscribers
          </a>
        </li>
        <li>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
            10,129 Followers
          </a>
        </li>
        <li>
          <a href="#" className="wifi">
            <i className="bx bx-wifi"></i>
            952 Subscribers
          </a>
        </li>
      </ul>
    </SocialMediaContainer>
  );
};

export default SocialMedia;

const SocialMediaContainer = styled.div`
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

  .stay-connected-list {
    padding-left: 0;
    margin-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;

    li {
      list-style-type: none;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
      padding-left: 10px;
      padding-right: 10px;
      margin-top: 10px;

      a {
        display: inline-block;
        background-color: #39569e;
        padding: 10px;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        color: #ffffff;

        i {
          margin-right: 5px;
          font-size: 20px;
          line-height: 0;
          position: relative;
          top: 3px;
        }
      }

      .twitter {
        background-color: #52aaf4;
      }

      .linkedin {
        background-color: #0185ae;
      }

      .youtube {
        background-color: #dc472e;
      }

      .instagram {
        background-color: #c8359d;
      }

      .wifi {
        background-color: #f18527;
      }
    }
  }
`;
