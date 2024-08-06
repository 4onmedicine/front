import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FlexColumnCSS } from '../../styles/common';
import DetailNav from '../../components/detail/DetailNav';
import { Outlet, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { detailDataState } from '../../atoms/atom';
import DetailContent from '../../components/detail/DetailContent';
import useGetDetail from '../../query/get/useGetDetail';
import DetailInfo from '../../components/detail/DetailInfo';
import Loading from '../../components/loading/Loading';

const DetailPage = () => {
  const setDetailData = useSetRecoilState(detailDataState);
  const { id } = useParams();
  const { data: FetchedData, error, loading } = useGetDetail(id);

  useEffect(() => {
    if (FetchedData) {
      setDetailData(FetchedData);
    }
  }, [FetchedData, setDetailData]);

  if (loading) {
    return <Loading text={'의약품 정보 가져오는 중'} />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailMain>
          <DetailContent />
        </DetailMain>
        {/*
        <DetailNavContainer>
          <DetailNav />
        </DetailNavContainer>
        <DetailSub>
          <Outlet />
        </DetailSub>
        */}
        <DetailInfo />
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailPage;

export const DetailContainer = styled.div`
  ${FlexColumnCSS};
  position: relative;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`;

export const DetailWrapper = styled.div`
  border: 5px solid ${({ theme }) => theme.COLOR.BORDERGREEN};
  border-radius: 10px;
  width: 100%;
  max-width: 900px;
  @media only screen and (min-width: 1600px) {
    max-width: 1500px;
  }
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 0, 0, 0.22);
  height: calc(100vh - 250px);
  background-color: white;
  display: flex;
  align-items: center;
`;

export const DetailMain = styled.div`
  height: 90%;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailNavContainer = styled.div`
  //box-sizing: border-box;
  width: 100%;
  height: 50px;
  background-color: white;
  overflow: hidden;
`;

export const DetailSub = styled.div`
  width: 100%;
  height: fit-content;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 40px 0px 40px 0px;
`;
