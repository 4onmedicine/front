import { atom } from 'recoil';

export const detailDataState = atom({
  key: 'detailDataState',
  default: {
    itemSeq: 0,
    itemName: '',
    atpnQesitm: '',
    efcyQesitm: '',
    useMethodQesitm: '',
    intrcQesitm: '',
    seQesitm: '',
    depositMethodQesitm: '',
    itemImage: '',
  },
});

export const presDataArrayState = atom({
  key: 'presDataArrayState',
  default: [
    {
      itemSeq: 202200407,
      itemName: 'Default Information',
      atpnQesitm: '',
      efcyQesitm: '',
      useMethodQesitm: '',
      intrcQesitm: '',
      seQesitm: '',
      depositMethodQesitm: '',
      itemImage:
        'https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1OKRXo9l4DN',
    },
  ],
});
