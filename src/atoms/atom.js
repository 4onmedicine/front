import { atom } from "recoil";

export const detailDataState = atom({
  key: "detailDataState",
  default: {
    itemName: "",
    atpnQesitm: "",
    efcyQesitm: "",
    useMethodQesitm: "",
    intrcQesitm: "",
    seQesitm: "",
    depositMethodQesitm: "",
  },
});
