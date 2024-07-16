import React from "react";
import { Desktop } from "../../components/mediaQuery";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <AdContainer>광고 컨테이너</AdContainer>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;

const AdContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 90px;
  background-color: #bdbdbd;
  z-index: 2;
`;
