import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const MainSearchBox = ({ value, onChange, selectedOption }) => {
  const inputRef = useRef(null);
  const [showWarning, setShowWarning] = useState(false);

  const handleMouseHover = () => {
    if (inputRef.current && inputRef.current.disabled) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  };

  const handleMouseLeave = () => {
    setShowWarning(false);
  };

  useEffect(() => {
    if (selectedOption !== "카테고리") {
      setShowWarning(false);
    }
  }, [selectedOption]);

  return (
    <Wrapper onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="검색어를 입력하세요"
        disabled={selectedOption === "카테고리"}
        ref={inputRef}
      />
      {showWarning && <WarningText>카테고리를 먼저 선택해 주세요</WarningText>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  font-family: BitBit;
  &:focus {
    outline: none;
  }
  color: #646464;
  &:disabled {
    cursor: not-allowed;
    background-color: white;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;

const WarningText = styled.div`
  color: red;
  margin-top: 17px;
  font-size: 14px;
`;

export default MainSearchBox;
