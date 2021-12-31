import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  query publicNewsCategoryList {
    publicNewsCategoryList {
      id
      name
    }
  }
`;
const MainNavbar = () => {
  const { data, loading } = useQuery(QUERY);

  if (!data || loading) return <></>;

  return (
    <>
      <MainNavbarContainer bg="light" expand="lg">
        <MainNav>
          <Link href="/">
            <NavbarBrand>LOGO</NavbarBrand>
          </Link>
          <Navbar.Toggle aria-controls="navbar-menu" />
          <div className="container menu-container">
            <Navbar.Collapse id="navbar-menu" className="menu">
              <Nav className="mr-auto computer">
                {data.publicNewsCategoryList.map((x: any) => {
                  return (
                    <Link href={`/category/${x.id}`}>
                      <a className="nav-link">{x.name}</a>
                    </Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </div>
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
        </MainNav>
      </MainNavbarContainer>
    </>
  );
};

export default MainNavbar;

export const NavbarBrand = styled(Navbar.Brand)`
  margin-right: 60px;
`;

const MainNav = styled(Container)``;

const MainNavbarContainer = styled(Navbar)`
  background-color: #f6f6f6 !important;
  padding: 0px;

  .nav-link {
    padding: 25px 10px !important;
    transition: all 0.6s;
    font-weight: 600;
    color: #09101f !important;

    &:hover {
      background-color: #ff661f;
      color: #fefefe !important;
    }

    &.active {
      background-color: #ff661f;
      color: #fefefe !important;
    }

    @media screen and (max-width: 992px) {
      border-top: 1px solid #dbeefd;
      background-color: #fefefe;
    }
  }

  .menu {
    padding: 0px;

    @media screen and (max-width: 992px) {
      position: absolute;
      width: 100%;
      left: 0px;
      top: 100%;
      box-shadow: 0 7px 13px 0 rgb(0 0 0 / 10%);
      z-index: 999;
    }
  }

  .menu-container {
    position: relative;
  }

  .search {
    position: relative;

    @media screen and (max-width: 992px) {
      display: none;
    }
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
`;
