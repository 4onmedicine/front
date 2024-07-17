import React from "react";
import styled from "styled-components";

const SearchResults = ({ countries, searching }) => {
  return (
    <SearchResultsContainer>
      {searching ? (
        <div>검색 중...</div>
      ) : countries.length > 0 ? (
        countries.map(({ code, en, ko }) => (
          <li key={code}>
            {ko} ({en})
          </li>
        ))
      ) : (
        <div>결과가 없습니다.</div>
      )}
    </SearchResultsContainer>
  );
};

export default SearchResults;

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
