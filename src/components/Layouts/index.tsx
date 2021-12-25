import React from "react";
import MainNavbar from "../MainNavbar";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import SubNavbar from "../SubNavbar";

const Layout = (props: any) => {
  return (
    <>
      <SubNavbar />
      <MainNavbar />

      <MainContent>{props.children}</MainContent>
    </>
  );
};

export default Layout;

const MainContent = styled.div``;
