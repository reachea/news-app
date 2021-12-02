import React from "react";
import styled from "styled-components";

interface ArticleProps {
  image?: string;
  title?: string;
  date?: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ image, title, date }) => {
  return (
    <ArticleCardContainer>
      <a href="#">
        <span
          className="full-image"
          style={{ backgroundImage: `url(${image})` }}
        ></span>
      </a>
      <div className="info">
        <h4 className="title">
          <a href="#">{title}</a>
        </h4>
        <span>{date}</span>
      </div>
    </ArticleCardContainer>
  );
};

export default ArticleCard;

const ArticleCardContainer = styled.article`
  overflow: hidden;
  margin-bottom: 25px;

  a {
    float: left;
    height: 80px;
    overflow: hidden;
    display: block;
    position: relative;
    width: 80px;
    margin-right: 15px;
    z-index: 1;
  }

  .full-image {
    width: 80px;
    height: 80px;
    display: inline-block;
    background-size: cover !important;
    background-repeat: no-repeat;
    background-position: center center !important;
  }

  .info {
    overflow: hidden;
    margin-top: 5px;

    span {
      display: block;
      color: #656565;
      margin-top: 5px;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .title {
    margin-bottom: 0;
    line-height: 1.4;
    font-size: 17px;
    font-weight: bold;

    a {
      display: inline-block;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      text-decoration: none;
      height: auto;
      width: 100%;
      color: #09101f;
    }
  }

  &:hover {
    .title {
      a {
        color: #dc472e;
      }
    }
  }
`;
