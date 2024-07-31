import React, { useRef, useState } from "react";
import styled from "styled-components";

const MainSearchBox = ({ value, onChange, selectedOption }) => {
  const inputRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleMouseEnter = () => {
    if (inputRef.current.disabled) {
      inputRef.current.style.border = "2px solid red";
      setShowWarning(true);
    }
  };

  const handleMouseLeave = () => {
    if (inputRef.current.disabled) {
      inputRef.current.style.border = "none";
      setShowWarning(false);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
        disabled={selectedOption === "드롭다운 메뉴"}
        ref={inputRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {showWarning && <WarningText>카테고리를 선택해 주세요</WarningText>}
    </div>
  );
};

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: white;
  }
`;

const WarningText = styled.div`
  color: red;
  margin-top: 5px;
`;

export default MainSearchBox;
