import styled from "styled-components";
import DropContainer from "../../components/main/DropContainer";
import { MainSearch } from "../../components/main/MainSearch";
import MainLogoSvg from "../../assets/MainLogo.svg";
import { useState } from "react";

const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState("드롭다운 메뉴");
  const [selectedOption, setSelectedOption] = useState("드롭다운 메뉴");
  return (
    <MainContainer>
      <ContentsContainer>
        <LogoDiv>
          <MainLogo src={MainLogoSvg} />
        </LogoDiv>
        <SearchContainer>
          <SearchDiv>
            <SearchCategoryArea>
              <DropContainer
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </SearchCategoryArea>
            <SearchInputArea>
              <MainSearch selectedOption={selectedOption} />
            </SearchInputArea>
          </SearchDiv>
          <SearchBtnDiv></SearchBtnDiv>
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

const MainLogo = styled.img`
  width: 30%;
  height: auto;
  object-fit: contain;
  margin-top: 20px;
`;

const ContentsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px;
  background-color: white;
  gap: 30px;
  z-index: 1;
`;

const LogoDiv = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
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
  border-radius: 50px 0px 0px 50px;
  border: 4px solid;
  border-color: ${({ theme }) => theme.COLOR.GREEN};
  background-color: white;
  //padding: 10px 30px 10px 30px;
`;

const SearchBtnDiv = styled.div`
  height: 100%;
  border-radius: 0px 50px 50px 0px;
  border: 4px solid;
  border-color: ${({ theme }) => theme.COLOR.GREEN};
  width: 90px;
  background-color: ${({ theme }) => theme.COLOR.GREEN};
`;

const SearchCategoryArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 250px;
  height: 40px;
  border-right: 2px solid GREEN;
`;

const SearchInputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
`;