import React, { useEffect } from "react";
import styled from "styled-components";
import { FlexColumnCSS } from "../../styles/common";
import DetailNav from "../../components/detail/DetailNav";
import { Outlet, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { detailDataState } from "../../atoms/atom";
import DetailContent from "../../components/detail/DetailContent";
import useGetDetail from "../../query/get/useGetDetail";

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
    return <div>로딩중이야...</div>;
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
