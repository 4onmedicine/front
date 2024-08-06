import { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import { createPortal } from 'react-dom';
import ChatModal from '../ChatModal';

const Header = () => {
  const [open, setIsOpen] = useState(false);
  // 모달 부분 선택
  const portalElement = document.getElementById('modal');
  const onClick = () => {
    setIsOpen(!open);
  };
  return (
    <HeaderContainer>
      <Navbar />
      <Outlet />
      {open &&
        portalElement &&
        createPortal(<ChatModal setIsOpen={setIsOpen} />, portalElement)}
      <ChatButton onClick={onClick}>채팅</ChatButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100vw;
  height: fit-content;
  z-index: 10;
`;

const ChatButton = styled.div`
  width: 100px;
  height: 100px;
  font-family: BitBit;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.COLOR.GREEN};
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 300;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #6dd66d;
  }
`;
