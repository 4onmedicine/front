import styled from "styled-components";

const BackDrop = () => {
  return (
    <div className=" fixed left-0 top-0 z-20 h-full w-full bg-slate-200 bg-opacity-40"></div>
  );
};

export default BackDrop;

const Div = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  height: max-content;
  width: max-content;
  opacity: 80%;
`;
