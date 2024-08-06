import React from "react";
import styled from "styled-components";
import MainLogoSvg from "../assets/MainLogo.svg";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingTitle>잠시만 기다려주세요</LoadingTitle>
      <LogoContainer>
        <MainLogo src={MainLogoSvg} alt="메인로고" />
      </LogoContainer>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;

const LoadingTitle = styled.h3``;

const LogoContainer = styled.section`
  background-color: red;
  width: 200px;
  height: 200px;
`;

const MainLogo = styled.img`
  height: auto;
  object-fit: contain;
  margin-top: 20px;
`;
