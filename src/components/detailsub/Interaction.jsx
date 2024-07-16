import React from "react";
import { useRecoilValue } from "recoil";
import { detailDataState } from "../../atoms/atom";
const Interaction = () => {
  const { intrcQesitm } = useRecoilValue(detailDataState);
  return <div>{intrcQesitm}</div>;
};

export default Interaction;
