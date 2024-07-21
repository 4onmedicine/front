import styled from 'styled-components';

const Button = ({ btHeight, text, onClick }) => {
  return (
    <DefaultButton btHeight={btHeight} onClick={onClick}>
      {text}
    </DefaultButton>
  );
};

export default Button;

const DefaultButton = styled.button`
  border: none;
  width: fit-content;
  height: ${(props) => props.btHeight || '25px'};
  font-size: 14px;
  color: white;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 4px;
  margin-bottom: 4px;
  cursor: pointer;
  background-color: #353535;
  &:hover {
    background-color: #747474;
  }
`;
