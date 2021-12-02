import React from "react";
import styled from "styled-components";

interface NewsCardBoxProps {
  image?: string;
  tag?: string;
  title?: string;
  date?: string;
}

const NewsCardBox: React.FC<NewsCardBoxProps> = ({
  image,
  tag,
  date,
  title,
}) => {
  return (
    <NewsCardBoxContiner>
      <a href="#">
        <img src={image} />
      </a>
      <div className="news-content">
        <div className="tag">{tag}</div>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <span>{date}</span>
      </div>
    </NewsCardBoxContiner>
  );
};

export default NewsCardBox;

const NewsCardBoxContiner = styled.div`
  margin-top: 18px;
  border: 1px solid #eeeeee;
  position: relative;
  overflow: hidden;

  a {
    img {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      height: 150px;
      width: 150px;
    }
  }

  .news-content {
    padding-left: 165px;
    padding-right: 10px;
    margin-top: 8px;
    margin-bottom: 8px;

    h3 {
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 10px;

      a {
        color: #09101f;
        position: relative;
        text-decoration: none;
        transition: all 0.5s ease;

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

    span {
      color: #656565;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .tag {
    font-size: 14px;
    color: #ff661f;
    font-weight: 400;
  }

  &:hover {
    cursor: pointer;

    .news-content {
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
