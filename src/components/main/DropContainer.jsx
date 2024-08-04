import { useState } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const DropContainer = ({ selectedOption, setSelectedOption }) => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    // 컨테이너 누르면 Dropdown 보이게 설정
    setDropdownView(!isDropdownView);
  };

  // onBlur: 포커스 빠져나갔을 때 이벤트
  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  // Dropdown 옵션 선택 이벤트
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownView(false);
  };

  return (
    <Container onBlur={handleBlurContainer}>
      <DropdownLabel onClick={handleClickContainer}>
        <DropdownButton>
          <MenuSpan>{selectedOption}</MenuSpan>
          <ArrowSpan>{isDropdownView ? "▲" : "▼"}</ArrowSpan>
        </DropdownButton>
      </DropdownLabel>
      {isDropdownView && <Dropdown onSelect={handleOptionSelect} />}
    </Container>
  );
};

export default DropContainer;

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 25px;
  display: flex;
  align-items: center;
`;

const DropdownLabel = styled.label`
  box-sizing: border-box;
  border: none;
  display: flex;
  align-items: center;
`;

const DropdownButton = styled.button`
  box-sizing: border-box;
  display: flex;
  border: none;
  padding-left: 10px;
  width: 150px;
  text-align: center;
  font-size: medium;
  padding: 5px 5px 5px 10px;
  align-items: center;
  background-color: white;
`;

const MenuSpan = styled.span`
  margin-right: auto;
  font-family: BitBit;
  color: #5a5a5a;
`;

const ArrowSpan = styled.span``;
