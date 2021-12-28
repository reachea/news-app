import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface NewsCardBoxProps {
  id?: number;
  image?: string;
  tag?: string;
  title?: string;
  date?: string;
}

const NewsCardBox: React.FC<NewsCardBoxProps> = ({
  id,
  image,
  tag,
  date,
  title,
}) => {
  return (
    <Link href={id ? `/news/${id}` : ""}>
      <NewsCardBoxContiner style={{ height: image ? "" : "130px" }}>
        <a href="#">
          {image ? <img src={image} /> : <img className="placeholder" />}
        </a>

        {title ? (
          <div className="news-content">
            <div className={`tag ${tag ? "" : "tag-placeholder"}`}>{tag}</div>
            <h3>
              <a href="#">{title}</a>
            </h3>
            <span>{date}</span>
          </div>
        ) : (
          <div className="news-content">
            <div
              className={`tag-placeholder`}
              style={{ marginBottom: "20px", marginTop: "17px" }}
            ></div>
            <div
              className={`${title ? "" : "tag-placeholder"}`}
              style={{ width: "200px", height: "10px" }}
            ></div>
            <div
              className={`${title ? "" : "tag-placeholder"}`}
              style={{ width: "200px", height: "10px" }}
            ></div>
            <div
              className={`${title ? "" : "tag-placeholder"}`}
              style={{ width: "200px", height: "10px" }}
            ></div>
          </div>
        )}
      </NewsCardBoxContiner>
    </Link>
  );
};

export default NewsCardBox;

const NewsCardBoxContiner = styled.div`
  margin-top: 18px;
  border: 1px solid #eeeeee;
  position: relative;
  overflow: hidden;

  .placeholder {
    background-color: #bdc3c7;
    width: 150px;
    height: 100%;
  }

  .tag-placeholder {
    background-color: #bdc3c7;
    width: 100px;
    height: 12px;
    margin-bottom: 10px;
  }

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
