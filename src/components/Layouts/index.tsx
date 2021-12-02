import React from "react";
import MainNavbar from "../MainNavbar";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const Layout = (props: any) => {
  return (
    <>
      <MainNavbar />

      <MainContent>{props.children}</MainContent>
    </>
  );
};

export default Layout;

const MainContent = styled(Container)`
  margin-top: 20px;
`;
