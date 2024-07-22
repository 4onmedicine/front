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
