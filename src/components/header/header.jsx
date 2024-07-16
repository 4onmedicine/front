import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <HeaderContainer>
      <AdContainer>광고 컨테이너</AdContainer>
      {location.pathname === "/" ? (
        <Navbar />
      ) : (
        <>
          <SearchContainer>검색</SearchContainer>
          <Navbar />
        </>
      )}
      <Outlet />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const AdContainer = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #bdbdbd;
  z-index: 2;
`;

const SearchContainer = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #eaeaea;
`;
