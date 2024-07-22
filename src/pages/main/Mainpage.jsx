import React, { useState } from "react";
import styled from "styled-components";
import DropContainer from "../../components/main/DropContainer";
import { MainSearch } from "../../components/main/MainSearch";

const MainPage = () => {
  const [view, SetView] = useState(false);
  return (
    <MainContainer>
      <ContentsContainer>
        <LogoDiv>웹 로고</LogoDiv>
        <SearchContainer>
          <SearchDiv>
            <SearchCategoryArea>
              <SearchCategoryTitle>카테고리</SearchCategoryTitle>
              <DropContainer />
            </SearchCategoryArea>
            <SearchInputArea>
              <SearchTitle>검색</SearchTitle>
              <MainSearch />
            </SearchInputArea>
          </SearchDiv>
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
  display: flex;
  align-items: center;
  width: 800px;
  height: 60px;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #d5d5d5;
  padding: 10px 30px 10px 30px;
`;

const SearchCategoryArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  height: 40px;
  border-right: 2px solid black;
`;

const SearchCategoryTitle = styled.div`
  width: fit-content;
  height: 14px;
  font-size: 14px;
  font-weight: bold;
`;

const SearchInputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 250px;
  height: 40px;
  padding-left: 10px;
`;

const SearchTitle = styled.div`
  width: fit-content;
  height: 14px;
  font-size: 14px;
  font-weight: bold;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 16px;
  font-size: 16px;
  border: none;
  background-color: none;
  &:focus {
    outline: none;
  }
`;
