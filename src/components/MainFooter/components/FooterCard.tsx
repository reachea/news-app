import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface FooterCardProps {
  id?: number;
  title?: string;
  date?: string;
  thumbnail?: string;
}

const FooterCard: React.FC<FooterCardProps> = ({
  id,
  title,
  thumbnail,
  date,
}) => {
  return (
    <FooterCardContainer key={id}>
      <Link href={`/news/${id}`}>
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="post-image d-flex flex-row justify-content-center">
              <a href="#">
                <img src={thumbnail} />
              </a>
            </div>
          </div>
          <div className="col-md-8 content">
            <h4>
              <a>{title ? title : "N/A"}</a>
            </h4>
            <p>{date ? date : "N/A"}</p>
          </div>
        </div>
      </Link>
    </FooterCardContainer>
  );
};

export default FooterCard;

const FooterCardContainer = styled.div`
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
    a {
      color: #ff661f;
      transition: 0.5s;
    }
  }

  .post-image {
    width: 100%;
    height: 100%;
    overflow: hidden;

    a {
      text-decoration: none;
      transition: 0.5s;
      color: #09101f;

      img {
        margin-bottom: 0;
        max-width: 200px;
        object-fit: cover;
      }
    }
  }

  h4 {
    font-size: 15px !important;
    margin-bottom: 10px;
  }

  span {
    color: #ffffff;
    font-size: 12px;
  }
`;
