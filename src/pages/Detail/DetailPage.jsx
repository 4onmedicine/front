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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <DetailContainer>
      <DetailMain>
        <DetailContent />
      </DetailMain>
      <DetailNavContainer>
        <DetailNav />
      </DetailNavContainer>
      <DetailSub>
        <Outlet />
      </DetailSub>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  ${FlexColumnCSS};
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: #747474;
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
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: #bdbdbd;
`;

const DetailSub = styled.div`
  margin: 0 auto;
  width: 1080px;
  height: 1000px;
  background-color: #eaeaea;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
