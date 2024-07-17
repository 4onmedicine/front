import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../detail/SearchInput";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <HeaderContainer>
      <AdContainer>광고 컨테이너</AdContainer>
      {location.pathname === "/detail" ? (
        <>
          <SearchContainer>
            <SearchInput />
          </SearchContainer>
          <Navbar />
        </>
      ) : (
        <Navbar />
      )}
      <Outlet />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;
  background-color: white;
`;

const AdContainer = styled.div`
  width: 100vw;
  height: 90px;
  background-color: #bdbdbd;
`;

const SearchContainer = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
`;
