import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { detailDataState } from '../../atoms/atom';

const DetailContent = () => {
  const { itemImage, itemName } = useRecoilValue(detailDataState);
  return (
    <DetailContentContainer>
      <Contents>
        <ImgArea>
          <PillImage src={itemImage} alt='알약 이미지' />
        </ImgArea>
        <TextArea>
          <MedicineTitle>{itemName}</MedicineTitle>
        </TextArea>
      </Contents>
    </DetailContentContainer>
  );
};

export default DetailContent;

const DetailContentContainer = styled.div`
  //box-sizing: border-box;
  width: 100%;
  //margin: 0 auto;
  height: 100%;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 30px;
`;

const Contents = styled.div`
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgArea = styled.div`
  position: relative;
  margin-top: 50px;
  margin-left: 15px;
  width: 330px;
  height: 330px;
`;

const TextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  max-width: 330px;
`;

const MedicineTitle = styled.h1`
  font-size: 30px;
  margin: 30px 0;
  padding-left: 5px;
`;

// const MedicineEfficacy = styled.div`
//   padding: 5px;
// `;

const PillImage = styled.img`
  width: 100%;
  height: 100%;
  //overflow: hidden;
  border: 0px solid #bababa;
  border-radius: 10px;
  z-index: 5;
  position: relative;
`;
