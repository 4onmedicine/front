import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavIconSvg from "../assets/NavLogo.svg";
import NavCursorSvg from "../assets/NavCursor.svg";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavDiv>
      <NavIcon
        src={NavIconSvg}
        onClick={() => {
          navigate("/");
        }}
      />
      <NavButtonWrapper>
        <NavButton
          onClick={() => {
            navigate("/");
          }}
        >
          홈
        </NavButton>
        <NavCursorIcon src={NavCursorSvg} />
      </NavButtonWrapper>
      <NavButtonWrapper>
        <NavButton
          onClick={() => {
            navigate("/prescription");
          }}
        >
          처방전 검색
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

const NavButton = styled.div`
  border: none;
  font-family: BitBit;
  font-size: 20px;
  color: white;
`;

const NavButtonWrapper = styled.button`
  border: none;
  border-radius: 5px;
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR.GREEN};
  height: fit-content;
  cursor: pointer;
  &:hover {
    background-color: #6dd66d;
  }
`;

const NavCursorIcon = styled.img`
  width: 20px;
  height: auto;
  margin-top: 5px;
`;
