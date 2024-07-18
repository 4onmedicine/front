import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainSearchResults = ({ medicines, searching }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const navigate = useNavigate();
  const resultsRef = useRef([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        setFocusedIndex((prevIndex) =>
          prevIndex === medicines.length - 1 ? 0 : prevIndex + 1
        );
      } else if (event.key === "ArrowUp") {
        setFocusedIndex((prevIndex) =>
          prevIndex === 0 ? medicines.length - 1 : prevIndex - 1
        );
      } else if (event.key === "Enter") {
        navigate(`/country/${medicines[focusedIndex].code}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusedIndex, medicines, navigate]);

  useEffect(() => {
    resultsRef.current[focusedIndex]?.scrollIntoView({ block: "nearest" });
  }, [focusedIndex]);

  const handleMouseEnter = (index) => {
    setFocusedIndex(index);
  };

  const handleMouseClick = (index) => {
    navigate(`/medicine/${medicines[index].itemSeq}`);
  };

  return (
    <SearchResultsContainer>
      {searching ? (
        <div>검색 중...</div>
      ) : medicines.length > 0 ? (
        <ul>
          {medicines.map(({ itemName }, index) => (
            <MedicineLi
              key={itemName}
              ref={(el) => (resultsRef.current[index] = el)}
              $isFocused={index === focusedIndex}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleMouseClick(index)}
            >
              {itemName}
            </MedicineLi>
          ))}
        </ul>
      ) : (
        <div>결과가 없습니다.</div>
      )}
    </SearchResultsContainer>
  );
};

export default MainSearchResults;

const SearchResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 3;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
`;

const MedicineLi = styled.li.attrs((props) => ({
  className: props.$isFocused ? "focused" : "",
}))`
  list-style-type: none;
  padding: 10px;
  background-color: ${(props) => (props.$isFocused ? "#e0e0e0" : "white")};
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;
