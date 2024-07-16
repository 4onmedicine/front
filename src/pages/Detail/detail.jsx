import React, { useEffect } from "react";
import styled from "styled-components";
import { FlexColumnCSS } from "../../styles/common";
import DetailNav from "../../components/detail/DetailNav";
import { Outlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { detailDataState } from "../../atoms/atom";

const DetailPage = () => {
  const setDetailData = useSetRecoilState(detailDataState);
  const dummyData = {
    itemName: "제품명",
    atpnQesitm: "이 약의 사용상 주의사항은 무엇입니까?", // 주의사항
    efcyQesitm: "이 약의 효능은 무엇입니까?", // 효능
    useMethodQesitm: "이 약은 어떻게 사용합니까?", // 사용법
    intrcQesitm:
      "이 약을 사용하는 동안 주의해야 할 약 또는 음식은 무엇입니까?.", //상호작용
    seQesitm: "이 약은 어떤 이상반응이 나타날 수 있습니까?", // 부작용
    depositMethodQesitm: "이 약은 어떻게 보관해야 합니까?", // 보관 방법
  };
  // 리코일로 전역 상태 업데이트
  useEffect(() => {
    setDetailData(dummyData);
  }, [setDetailData, dummyData]);

  return (
    <DetailContainer>
      <DetailMain>메인 컨텐츠</DetailMain>
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
