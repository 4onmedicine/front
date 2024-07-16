import React from "react";
import styled from "styled-components";
import Button from "../../utils/button";
import { useNavigate } from "react-router-dom";

const DetailNav = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <Button
        text={"사용법"}
        onClick={() => {
          navigate("instruction");
        }}
      />
      <Button
        text={"주의사항"}
        onClick={() => {
          navigate("caution");
        }}
      />
      <Button
        text={"상호작용"}
        onClick={() => {
          navigate("interaction");
        }}
      />
      <Button
        text={"부작용"}
        onClick={() => {
          navigate("sideeffects");
        }}
      />
      <Button
        text={"보관방법"}
        onClick={() => {
          navigate("storage");
        }}
      />
    </NavContainer>
  );
};

export default DetailNav;

const NavContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  width: 1080px;
  height: 44px;
`;
