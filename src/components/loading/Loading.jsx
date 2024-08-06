import styled from 'styled-components';
import spin from '../../assets/spin.gif';
import MainLogoSvg from '../../assets/MainLogo.svg';

const Loading = ({ text }) => {
  return (
    <LoadingBackground>
      <MainLogo src={MainLogoSvg} />
      <img src={spin} />
      <LoadingText>{text}</LoadingText>
    </LoadingBackground>
  );
};

export default Loading;

const MainLogo = styled.img`
  width: 300px;
`;

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
  font-family: BitBit;
  font-size: 25px;
`;
