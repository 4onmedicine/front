import { useRecoilValue } from 'recoil';
import { detailDataState } from '../../atoms/atom';
import styled from 'styled-components';

const DetailInfo = () => {
  const {
    efcyQesitm,
    atpnQesitm,
    useMethodQesitm,
    intrcQesitm,
    seQesitm,
    depositMethodQesitm,
  } = useRecoilValue(detailDataState);
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoTitle>효능</InfoTitle>
        <InfoDetail>{efcyQesitm}</InfoDetail>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>사용법</InfoTitle>
        <InfoDetail>{useMethodQesitm}</InfoDetail>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>주의사항</InfoTitle>
        <InfoDetail>{atpnQesitm}</InfoDetail>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>상호작용</InfoTitle>
        <InfoDetail>{intrcQesitm}</InfoDetail>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>부작용</InfoTitle>
        <InfoDetail>{seQesitm}</InfoDetail>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>보관방법</InfoTitle>
        <InfoDetail>{depositMethodQesitm}</InfoDetail>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default DetailInfo;

const InfoContainer = styled.div`
  width: 100%;
  height: 90%;
  margin-right: 30px;
  overflow: auto;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.p`
  margin: 35px 0 10px 0;
  padding: 5px 0 5px 10px;
  background-color: ${({ theme }) => theme.COLOR.LIGHTGREEN};
  font-family: BitBit;
  font-size: 20px;
`;
const InfoDetail = styled.p`
  color: black;
  font-size: 18px;
  font-family: GmarketSans;
  font-weight: 300;
  line-height: 1.35;
`;
