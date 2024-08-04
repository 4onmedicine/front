import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { detailDataState } from '../../atoms/atom';

const DetailContent = () => {
  const { itemImage, itemName } = useRecoilValue(detailDataState);
  const [pillName, setPillName] = useState('');
  const [pillSubName, setPillSubName] = useState('');
  useEffect(() => {
    if (itemName.indexOf('(') === -1) {
      setPillName(itemName);
      return;
    }
    setPillName(itemName.split('(')[0]);
    setPillSubName(itemName.split('(')[1].split(')')[0]);
  }, [itemName]);
  return (
    <DetailContentContainer>
      <Contents>
        <ImgArea>
          <PillImage src={itemImage} alt='알약 이미지' />
        </ImgArea>
        <TextArea>
          <MedicineTitle>{pillName}</MedicineTitle>
          <MedicineSubTitle>{pillSubName}</MedicineSubTitle>
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
  @media only screen and (min-width: 1600px) {
    width: 500px;
    height: 500px;
  }
`;

const TextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  max-width: 330px;
`;

const MedicineTitle = styled.p`
  font-size: 28px;
  margin-top: 30px;
  padding-left: 5px;
  font-family: GmarketSans;
  font-weight: 500;
`;
const MedicineSubTitle = styled.p`
  font-size: 16px;
  padding-left: 5px;
  margin-top: 10px;
  font-family: GmarketSans;
  font-weight: 400;
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
