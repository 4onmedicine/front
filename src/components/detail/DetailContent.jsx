import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { detailDataState } from "../../atoms/atom";

const DetailContent = () => {
  const { itemImage, itemName, efcyQesitm } = useRecoilValue(detailDataState);
  return (
    <DetailContentContainer>
      <Contents>
        <ImgArea>{/* <img src={itemImage} alt="낱알 이미지" /> */}</ImgArea>
        <TextArea>
          <MedicineTitle>{itemName}</MedicineTitle>
          <MedicineEfficacy>{efcyQesitm}</MedicineEfficacy>
        </TextArea>
      </Contents>
    </DetailContentContainer>
  );
};

export default DetailContent;

const DetailContentContainer = styled.div`
  box-sizing: border-box;
  width: 1080px;
  margin: 0 auto;
  height: 100%;
  background-color: #eaeaea;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Contents = styled.div`
  width: 600px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-right: 10px;
`;

const ImgArea = styled.div`
  position: absolute;
  margin-top: 15px;
  width: 64px;
  height: 64px;
  background-color: blue;
`;

const TextArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: 75px;
  width: 530px;
  height: 150px;
  gap: 10px;
`;

const MedicineTitle = styled.h1`
  font-size: 30px;
  margin: 15px 0;
  padding-left: 5px;
`;

const MedicineEfficacy = styled.div`
  padding: 5px;
`;
