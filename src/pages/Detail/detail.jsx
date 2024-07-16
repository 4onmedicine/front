import React from "react";
import styled from "styled-components";
import { FlexColumnCSS } from "../../styles/common";

const DetailPage = () => {
  return (
    <DetailContainer>
      <DetailMain>메인 컨텐츠</DetailMain>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  ${FlexColumnCSS};
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #747474;
`;

const DetailMain = styled.div`
  position: absolute;
  width: 100%;
  height: 225px;
  background-color: #bdbdbd;
`;
