import { useState } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const DropContainer = ({ selectedOption, setSelectedOption }) => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    x;
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownView(false);
  };

  return (
    <Container onBlur={handleBlurContainer}>
      <DropdownLabel onClick={handleClickContainer}>
        <DropdownButton>
          {selectedOption} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;{isDropdownView ? "▲" : "▼"}
        </DropdownButton>
      </DropdownLabel>
      {isDropdownView && <Dropdown onSelect={handleOptionSelect} />}
    </Container>
  );
};

export default DropContainer;

const Container = styled.div`
  box-sizing: border-box;
  height: 15px;
`;

const DropdownLabel = styled.label`
  box-sizing: border-box;
  border: none;
`;

const DropdownButton = styled.button`
  box-sizing: border-box;
  border: none;
  background-color: none;
  padding: 0px;
  width: 150px;
  text-align: start;
`;
