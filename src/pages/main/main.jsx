import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainContainer>
      <ContentsContainer>
        <LogoDiv>웹 로고</LogoDiv>
        <SearchContainer>
          <SearchDiv></SearchDiv>
        </SearchContainer>
      </ContentsContainer>
    </MainContainer>
  );
};

export default MainPage;

const MainContainer = styled.div`
  margin: 0 auto;
  position: relative;
  width: 1080px;
  height: fit-content;
`;

const ContentsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px;
  background-color: #747474;
  gap: 30px;
  z-index: 1;
`;

const LogoDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: #bdbdbd;
  box-sizing: border-box;
  border: 1px solid gray;
`;

const SearchContainer = styled.div`
  width: 800px;
  height: 60px;
  background-color: white;
`;

const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #d5d5d5;
`;
