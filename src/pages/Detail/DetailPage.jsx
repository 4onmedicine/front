import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FlexColumnCSS } from '../../styles/common';
import DetailNav from '../../components/detail/DetailNav';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { detailDataState } from '../../atoms/atom';
import DetailContent from '../../components/detail/DetailContent';
import medicineImg from '../../assets/medicineImg.png';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const setDetailData = useSetRecoilState(detailDataState);
  const { params } = useParams();
  const dummyData = {
    itemName: '암포젤정(건조수산화알루미늄겔)',
    atpnQesitm:
      '투석요법을 받고 있는 환자는 이 약을 복용하지 마십시오.이 약을 복용하기 전에 인산염 결핍, 신장애 환자, 신장병 경험자는 의사 또는 약사와 상의하십시오.장기연용을 하지 마십시오.', // 주의사항
    efcyQesitm:
      '이 약은 위.십이지장궤양, 위염, 위산과다의 제산작용 및 증상의 개선에 사용합니다.', // 효능
    useMethodQesitm:
      '성인은 1회 1~2정(300~600 mg), 1일 3회 식간에 복용합니다.연령, 증상에 따라 적절히 증감합니다.', // 사용법
    intrcQesitm:
      '테트라사이클린계 항생물질을 함께 복용하지 마십시오.이 약의 흡착작용 또는 소화관내, 체액의 pH상승에 의해 함께 복용하는 약물의 흡수, 배설에 영향을 줄 수 있습니다.', //상호작용
    seQesitm: '때때로 변비 드물게 구역, 구토 등이 나타날 수 있습니다.', // 부작용
    depositMethodQesitm: '실온에서 보관하십시오.', // 보관 방법
    itemImage: { medicineImg }, // 낱알 이미지
  };
  // 리코일로 전역 상태 업데이트
  useEffect(() => {
    setDetailData(dummyData);
  }, [setDetailData, dummyData]);

  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailMain>
          <DetailContent />
        </DetailMain>
        <DetailNavContainer>
          <DetailNav />
        </DetailNavContainer>
        <DetailSub>
          <Outlet />
        </DetailSub>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  ${FlexColumnCSS};
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #bdbdbd;
  align-items: center;
  padding-top: 50px;
`;

const DetailWrapper = styled.div`
  border: 5px solid ${({ theme }) => theme.COLOR.BORDERGREEN};
  border-radius: 10px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
`;

const DetailMain = styled.div`
  width: 100%;
  height: 225px;
  background-color: #bdbdbd;
`;

const DetailNavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: white;
  overflow: hidden;
`;

const DetailSub = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 40px 0px 40px 0px;
`;
