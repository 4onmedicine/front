// ErrorPage.jsx
import styled from 'styled-components';
import MainLogoSvg from '../assets/MainLogo.svg';

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>404 ERROR</ErrorTitle>
      <img src={MainLogoSvg} width='300px' />
      <ErrorSubTitle>요청하신 페이지를 찾을 수 없습니다</ErrorSubTitle>
    </ErrorContainer>
  );
};

export default ErrorPage;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ErrorTitle = styled.p`
  font-family: BitBit;
  font-size: 40px;
  margin-top: 140px;
  margin-bottom: 20px;
`;

const ErrorSubTitle = styled.p`
  font-family: GmarketSans;
  font-size: 20px;
  font-weight: 400;
  margin-top: 30px;
`;
