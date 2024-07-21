import React from 'react';
import styled from 'styled-components';
import Button from '../../utils/button';
import { useNavigate } from 'react-router-dom';

const DetailNav = () => {
  const navigate = useNavigate();

  // focus된 네비게이션 버튼에만 검은색, 나머지 버튼에는 #bababa 적용 필요

  return (
    <NavContainer>
      <IconDiv>가위아이콘</IconDiv>
      <DashLine />
      <NavBtn
        onClick={() => {
          navigate('instruction');
        }}
      >
        사용법
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('caution');
        }}
      >
        주의사항
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('interaction');
        }}
      >
        상호작용
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('sideeffects');
        }}
      >
        부작용
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('storage');
        }}
      >
        보관방법
      </NavBtn>
    </NavContainer>
  );
};

export default DetailNav;

const NavContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
  height: 44px;
  align-items: center;
`;

const DashLine = styled.div`
  position: absolute;
  z-index: 2;
  border: 3px dashed gray;
  width: 80%;
  max-width: 880px;
`;

const NavBtn = styled.div`
  z-index: 5;
  position: relative;
  font-family: BitBit;
  background-color: white;
  border: 4px solid white;
  cursor: pointer;
`;

const IconDiv = styled.div`
  position: relative;
  z-index: 5;
  background-color: white;
  width: 50px;
  height: 100%;
  border: 1px solid;
`;
