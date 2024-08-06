import styled from 'styled-components';
import { Search } from './Search';

const SearchInput = () => {
  return (
    <SearchContainer>
      <LogoContainer />
      <Search />
    </SearchContainer>
  );
};

export default SearchInput;

const SearchContainer = styled.div`
  width: 1080px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 4px 0;
  position: relative; // position 설정
  z-index: 2;
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 100%;
  background-color: #747474;
`;
