import React from "react";
import styled from "styled-components";
import Button from "../utils/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavDiv>
      <Button
        text={"홈"}
        onClick={() => {
          navigate("/");
        }}
      />
    </NavDiv>
  );
};

export default Navbar;

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: 50px;
  background-color: #8c8c8c;
  justify-content: flex-start;
  z-index: 2;
  padding-left: 20px;
`;
