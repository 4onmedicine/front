import { atom } from "recoil";

export const detailDataState = atom({
  key: "detailDataState",
  default: {
    itemSeq: 0,
    itemName: "",
    atpnQesitm: "",
    efcyQesitm: "",
    useMethodQesitm: "",
    intrcQesitm: "",
    seQesitm: "",
    depositMethodQesitm: "",
    itemImage: "",
  },
});
