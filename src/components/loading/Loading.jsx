import styled from "styled-components";
import spin from "../../assets/spin.gif";

const Loading = () => {
  return (
    <LoadingBackground>
      <LoadingText>처방전 정보 가져오는 중</LoadingText>
      <img src={spin} />
    </LoadingBackground>
  );
};

export default Loading;

const LoadingBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingText = styled.div`
  text-align: center;
`;
