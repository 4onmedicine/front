import styled from "styled-components";
import PropTypes from "prop-types";

const Dropdown = ({ onSelect }) => {
  return (
    <DropdownUl>
      <DropdownLi onClick={() => onSelect("약")}>약</DropdownLi>
      <DropdownLi onClick={() => onSelect("증상")}>증상</DropdownLi>
    </DropdownUl>
  );
};

Dropdown.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;

const DropdownUl = styled.ul`
  position: absolute;
  top: 40px; /* Adjust this value to ensure the dropdown appears below the button */
  left: 0;
  margin-top: 5px;
  background-color: white;
  border: 4px solid ${({ theme }) => theme.COLOR.GREEN};
  border-radius: 10px;
`;

const DropdownLi = styled.li`
  box-sizing: border-box;
  width: 150px;
  height: 35px;
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  font-family: BitBit;
  font-weight: 100;
  color: #5a5a5a;
  &:hover {
    background-color: #bebebe;
  }
`;
