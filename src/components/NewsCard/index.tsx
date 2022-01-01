import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface NewsCardProps {
  id?: number;
  thumbnail?: string;
  title?: string;
  date?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ thumbnail, title, date, id }) => {
  return (
    <Link href={id ? `/news/${id}` : ""}>
      <NewsCardContainer>
        <div className="row align-items-center">
          <div className="col-4">
            {thumbnail ? (
              <div className="politics-news-image">
                <a>
                  <img src={thumbnail} alt="image" />
                </a>
              </div>
            ) : (
              <div className="politics-news-image">
                <a>
                  <div className="placeholder"></div>
                </a>
              </div>
            )}
          </div>
          <div className="col-8">
            {title ? (
              <div className="politics-news-content">
                <h3>
                  <a>{title}</a>
                </h3>
                <p>{date}</p>
              </div>
            ) : (
              <div className="politics-news-content">
                <h3 className="tag-placeholder"></h3>
                <div className="tag-placeholder"></div>
              </div>
            )}
          </div>
        </div>
      </NewsCardContainer>
    </Link>
  );
};

export default NewsCard;

const NewsCardContainer = styled.div`
  margin-bottom: 30px;
  transition: 0.5s;
  height: 100px;

  .row {
    gap: 0px !important;
  }

  .placeholder {
    background-color: #bdc3c7;
    width: 130px;
    height: 100px;
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
    display: flex;
    justify-content: center;

    img {
      max-width: auto;
      height: auto;
      display: inline-block;
      transition: 0.5s;
      height: 100px;
      object-fit: cover;
    }
  }

  .politics-news-content {
    h3 {
      font-size: 16px;
      margin-top: 12px;
      margin-bottom: 12px;
      line-height: 30px !important;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
      white-space: pre-wrap;
      display: -webkit-box;

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
