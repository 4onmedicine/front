import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Outlet, useLocation } from "react-router-dom";
import SearchInput from "../detail/SearchInput";

const Header = () => {
  const location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <HeaderContainer>
      {location.pathname === "/detail" ? (
        <>
          <SearchContainer>
            <SearchInput />
          </SearchContainer>
          <Navbar />
          <ChatButton>채팅</ChatButton>
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
  width: 100vw;
  height: fit-content;
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

const ChatButton = styled.div`
  width: 100px;
  border-radius: 50px;
  position: sticky;
  top: 1;
  z-index: 999;
  background-color: reds;
`;
