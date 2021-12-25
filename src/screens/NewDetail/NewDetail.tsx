import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import MainNewsCard from "../../components/MainNewsCard";
import NewsCard from "../../components/NewsCard";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import LatestNews from "../HomeScreen/components/LatestNews";
import SocialMedia from "../HomeScreen/components/SocialMedia";

const NewDetail = () => {
  return (
    <NewDetailContainer>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>New Detail</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>New Detail</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container first-section">
        <Row>
          <Col lg={8} className="main-content">
            <img src="/main-news-1.jpg" alt="image" />

            <div className="content">
              <span>
                <a href="#">Jonson Steven</a> / 28 September 2021
              </span>

              <h3>
                <a href="#">
                  The Prime Minister’s said that selfish nations are constantly
                  dying for their own interests.
                </a>
              </h3>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>

            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </Col>
          <Col lg={4}>
            <form className="search">
              <input
                className="form-control search-form"
                type="text"
                placeholder="Search For.."
              />
              <button type="submit" className="submit-btn">
                <BiSearch />
              </button>
            </form>

            <LatestNews />
            <SocialMedia />
          </Col>
        </Row>
      </div>
    </NewDetailContainer>
  );
};

export default NewDetail;

const NewDetailContainer = styled.div`
  .container {
    @media screen and (min-width: 1200px) {
      max-width: 1400px !important;
    }
  }

  .main-container {
    margin-top: 20px;

    p {
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 15px;
      line-height: 1.8;
      color: #656565;
      font-weight: 500;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
    }
  }

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

  img {
    transition: 0.5s;
    max-width: 100%;
    height: auto;
    display: inline-block;
  }

  .search {
    position: relative;
    margin-bottom: 40px;
  }

  .search-form {
    height: 50px;
    padding: 8px 15px;
    border: 1px solid #eeeeee;
    background-color: #eeeeee;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border-radius: 5px;

    &:focus {
      border-color: #ff661f;
      background-color: transparent;
      -webkit-box-shadow: none;
      box-shadow: none;
    }
  }

  .submit-btn {
    border: none;
    background-color: #ff661f;
    color: #ffffff;
    height: 40px;
    width: 40px;
    position: absolute;
    right: 5px;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .content {
    width: 100%;
    height: auto;
    margin-top: 40px;

    h3 {
      font-size: 36px;
      font-weight: bold;
      margin-top: 16px;
      margin-bottom: 20px;

      a {
        color: #09101f;
        text-decoration: none;
        transition: 0.5s;
        position: relative;

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

      @media screen and (max-width: 767px) {
        font-size: 20px;
        margin-bottom: 12px;
      }
    }

    span {
      color: #212529;
      font-size: 14px;

      a {
        color: #656565;
        font-weight: 400;
        text-decoration: none;
        transition: 0.5s;
      }

      @media screen and (max-width: 767px) {
        font-size: 14px;
      }
    }
  }
`;
