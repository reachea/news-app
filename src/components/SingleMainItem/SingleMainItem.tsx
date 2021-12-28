import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface SingleMainItemProps {
  id?: number;
  thumbnail?: string;
  category?: string;
  title?: string;
  summary?: string;
  date?: string;
}

const SingleMainItem: React.FC<SingleMainItemProps> = ({
  id,
  thumbnail,
  date,
  category,
  title,
  summary,
}) => {
  return (
    <Link href={id ? `/news/${id}` : ""}>
      <SingleMainItemContainer>
        <div className="row align-items-center">
          <div className="col-lg-4">
            {thumbnail ? (
              <div className="politics-news-image d-flex flex-row justify-content-center">
                <a>
                  <img src={thumbnail} alt="image" />
                </a>
              </div>
            ) : (
              <div className="placeholder"></div>
            )}
          </div>
          <div className="col-lg-8">
            {title ? (
              <div className="politics-news-content-box">
                <span>{category}</span>
                <h3>
                  <a>{title}</a>
                </h3>
                <p>{summary}</p>
                <div className="date">{date}</div>
              </div>
            ) : (
              <div className="politics-news-content-box">
                <div className="tag-placeholder"></div>
                <h3>
                  <a>
                    <div
                      className="tag-placeholder"
                      style={{ width: "380px" }}
                    ></div>
                  </a>
                </h3>
                <p>
                  <div
                    className="tag-placeholder"
                    style={{ width: "450px" }}
                  ></div>
                  <div
                    className="tag-placeholder"
                    style={{ width: "450px" }}
                  ></div>
                  <div
                    className="tag-placeholder"
                    style={{ width: "450px" }}
                  ></div>
                </p>
                <div
                  className="tag-placeholder"
                  style={{ width: "120px" }}
                ></div>
              </div>
            )}
          </div>
        </div>
      </SingleMainItemContainer>
    </Link>
  );
};

export default SingleMainItem;

const SingleMainItemContainer = styled.div`
  margin-bottom: 30px;

  .placeholder {
    background-color: #bdc3c7;
    width: 280px;
    height: 200px;
  }

  .tag-placeholder {
    background-color: #bdc3c7;
    width: 180px;
    height: 12px;
    margin-bottom: 10px;
  }

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
        height: 180px;
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
