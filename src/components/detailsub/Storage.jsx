import React from "react";
import { useRecoilValue } from "recoil";
import { detailDataState } from "../../atoms/atom";

const Storage = () => {
  const { depositMethodQesitm } = useRecoilValue(detailDataState);
  return <div>{depositMethodQesitm}</div>;
};

export default Storage;
