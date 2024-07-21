import { useState } from 'react';
import Dropdown from './Dropdown';
import styled from 'styled-components';

const DropContainer = () => {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <Container onBlur={handleBlurContainer}>
      <DropdownLabel onClick={handleClickContainer}>
        <DropdownButton>
          드롭다운 메뉴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;{isDropdownView ? '▲' : '▼'}
        </DropdownButton>
      </DropdownLabel>
      {isDropdownView && <Dropdown />}
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
  background-color: white;
  padding: 0px;
  width: 150px;
  text-align: start;
`;
