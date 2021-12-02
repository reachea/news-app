import React from "react";
import styled from "styled-components";

interface MainCardProps {
  tag: string;
  variant?: string;
  title: string;
  author?: string;
  date: string;
  height?: string;
  image: string;
  width?: string;
}

const MainCard: React.FC<MainCardProps> = ({
  variant,
  height,
  width,
  tag,
  title,
  author,
  date,
  image,
}) => {
  return (
    <MainCardContainer
      className={`${variant === "secondary" ? "secondary" : "primary"}`}
      style={{
        maxHeight: height ? height + "px" : "auto",
        maxWidth: width ? width + "px" : "100%",
      }}
    >
      <img src={image} />
      <div className="content">
        <div className="tag">{tag}</div>
        <h3>
          <a href="#">{title}</a>
        </h3>

        {author ? (
          <span>
            <a href="#">{author}</a> / {date}
          </span>
        ) : (
          <span>{date}</span>
        )}
      </div>
    </MainCardContainer>
  );
};

export default MainCard;

const MainCardContainer = styled.div`
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        to(#111)
      ),
      -webkit-gradient(linear, left top, left bottom, from(transparent), to(#111));
    background: linear-gradient(transparent, #111),
      linear-gradient(transparent, #111);
    height: 70%;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    opacity: 0.7;
  }

  &.secondary {
    .content {
      h3 {
        font-size: 25px;
      }
    }
  }

  .tag {
    display: inline-block;
    font-size: 14px;
    background-color: #ff661f;
    color: #ffffff;
    padding: 2px 10px;
    font-weight: 400;
    transition: 0.5s;
  }

  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 30px;
    z-index: 2;

    h3 {
      font-size: 36px;
      font-weight: bold;
      margin-top: 16px;
      margin-bottom: 20px;

      a {
        color: #ffffff;
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
    }

    span {
      color: #ffffff;

      a {
        color: #ffffff;
        font-weight: 400;
        text-decoration: none;
        transition: 0.5s;
      }
    }
  }

  img {
    height: 100%;
    width: 100%;
    transition: all 0.8s ease-in-out;
  }

  &:hover {
    cursor: pointer;

    img {
      transform: scale(1.1);
    }

    .tag {
      background-color: #dc472e;
    }

    .content {
      h3 {
        a {
          color: #ff661f;

          &::before {
            width: 100%;
          }
        }
      }

      span {
        a {
          color: #ff661f;
        }
      }
    }
  }
`;
