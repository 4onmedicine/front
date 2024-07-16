import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return <NavDiv>네비게이션바</NavDiv>;
};

export default Navbar;

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: fixed;
  top: 90px;
  width: 100%;
  height: 50px;
  background-color: #8c8c8c;
  z-index: 2;
`;
