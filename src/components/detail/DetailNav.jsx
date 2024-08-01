import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaScissors } from 'react-icons/fa6';

const DetailNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      <IconDiv>
        <FaScissors size={30} />
      </IconDiv>
      <DashLine />
      <NavBtn
        onClick={() => {
          navigate('instruction');
        }}
        // Transient Props: 특정 props가 DOM 요소로 전달되지 않도록 하기 위해 사용
        $active={location.pathname.includes('instruction')}
      >
        사용법
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('caution');
        }}
        $active={location.pathname.includes('caution')}
      >
        주의사항
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('interaction');
        }}
        $active={location.pathname.includes('interaction')}
      >
        상호작용
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('sideeffects');
        }}
        $active={location.pathname.includes('sideeffects')}
      >
        부작용
      </NavBtn>
      <NavBtn
        onClick={() => {
          navigate('storage');
        }}
        $active={location.pathname.includes('storage')}
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
  color: ${({ $active }) => ($active ? 'black' : '#bababa')};
`;

const IconDiv = styled.div`
  position: relative;
  z-index: 5;
  background-color: white;
  width: 50px;
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
