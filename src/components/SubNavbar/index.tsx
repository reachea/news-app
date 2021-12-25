import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SubNavbar = () => {
  return (
    <SubNavbarContainer>
      <div className="container">
        <div className="d-flex flex-row subnavbar">
          <ul className="nav-icon-container">
            <li className="nav-item">
              <a className="nav-icon">
                <FaFacebookF size={13} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-icon">
                <FaInstagram size={13} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-icon">
                <FaLinkedinIn size={13} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-icon">
                <FaTwitter size={13} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-icon">
                <FaYoutube size={13} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </SubNavbarContainer>
  );
};

export default SubNavbar;

const SubNavbarContainer = styled.div`
  background-color: #111111;
  padding: 10px 0px;

  .container {
    @media screen and (min-width: 1200px) {
      max-width: 1400px !important;
    }
  }

  .subnavbar {
    justify-content: space-between;
  }

  .nav-icon-container {
    margin: 0px;
  }

  .nav-icon {
    color: #ff661f;
    padding-bottom: 2px;
  }

  .nav-item {
    display: inline-block;
    list-style-type: none;
    margin-right: 5px;
    padding: 3px 9px;
    background-color: #fefefe;
    border-radius: 50%;
    transition: all 0.5s;

    &:hover {
      background-color: #ff661f;
      transform: translateY(-3px);
      .nav-icon {
        color: #fefefe;
      }
    }
  }
`;
