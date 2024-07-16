import React from "react";
import { useRecoilValue } from "recoil";
import { detailDataState } from "../../atoms/atom";

const Caution = () => {
  const { atpnQesitm } = useRecoilValue(detailDataState);
  return <div>{atpnQesitm}</div>;
};

export default Caution;
