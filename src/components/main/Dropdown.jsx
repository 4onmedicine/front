import styled from 'styled-components';

const Dropdown = () => {
  return (
    <DropdownUl>
      <DropdownLi onClick={() => console.log('약 드롭다운 클릭됨.')}>
        약
      </DropdownLi>
      <DropdownLi>증상</DropdownLi>
    </DropdownUl>
  );
};

export default Dropdown;

const DropdownUl = styled.ul`
  position: relative;
  margin-top: 25px;
`;

const DropdownLi = styled.li`
  box-sizing: border-box;
  height: 30px;
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  border: 1px solid;
  &:hover {
    background-color: #5d5d5d;
  }
`;
