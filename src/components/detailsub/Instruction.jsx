import React from "react";
import { useRecoilValue } from "recoil";
import { detailDataState } from "../../atoms/atom";

const Instruction = () => {
  const { useMethodQesitm } = useRecoilValue(detailDataState);
  return <div>{useMethodQesitm}</div>;
};

export default Instruction;
