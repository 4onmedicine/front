import React from "react";
import { useRecoilValue } from "recoil";
import { detailDataState } from "../../atoms/atom";

const SideEffects = () => {
  const { seQesitm } = useRecoilValue(detailDataState);
  return <div>{seQesitm}</div>;
};

export default SideEffects;
