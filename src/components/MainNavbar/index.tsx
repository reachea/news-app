import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const MainNavbar = () => {
  return (
    <>
      <MainNavbarContainer bg="light" expand="lg">
        <Container>
          <NavbarBrand href="#home">React-Bootstrap</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#news" className="active">
                News
              </Nav.Link>
              <Nav.Link href="#terms">Terms and Conditions</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </MainNavbarContainer>
    </>
  );
};

export default MainNavbar;

export const NavbarBrand = styled(Navbar.Brand)`
  margin-right: 60px;
`;

export const MainNavbarContainer = styled(Navbar)`
  background-color: #f6f6f6 !important;
  padding: 0px;

  .nav-link {
    padding: 30px 0px;
    transition: all 0.6s;
    font-weight: 600;

    &:hover {
      background-color: #ff661f;
      color: #fefefe !important;
    }

    &.active {
      background-color: #ff661f;
      color: #fefefe !important;
    }
  }
`;
