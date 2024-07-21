import React from 'react';
import styled from 'styled-components';
import Button from '../utils/button';
import { useNavigate } from 'react-router-dom';
import NavIconSvg from '../assets/NavLogo.svg';
import NavCursorSvg from '../assets/NavCursor.svg';
import '../App.css';

// 스타일만 적용해둔 거라 hover 스타일 적용, focus 스타일 적용 등은 빠른 시일 내에 마저 작업해서 올리겠습니다.

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavDiv>
      <NavIcon
        src={NavIconSvg}
        onClick={() => {
          navigate('/');
        }}
      />
      <NavButtonWrapper>
        <NavButton
          onClick={() => {
            navigate('/');
          }}
        >
          홈
        </NavButton>
        <NavCursorIcon src={NavCursorSvg} />
      </NavButtonWrapper>
    </NavDiv>
  );
};

export default Navbar;

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.COLOR.GREEN};
  justify-content: flex-start;
  z-index: 2;
  padding-left: 20px;
  align-items: center;
`;

const NavIcon = styled.img`
  height: 50%;
  width: auto;
  cursor: pointer;
`;

const NavButton = styled.button`
  background-color: ${({ theme }) => theme.COLOR.GREEN};
  border: none;
  font-family: BitBit;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const NavButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavCursorIcon = styled.img`
  width: 20px;
  height: auto;
`;
