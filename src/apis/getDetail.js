import axios, { AxiosResponse } from "axios";
import axiosInstance from "./@core";

const DetailPath = "/detail";

const DetailApi = {
  getDetail:  data = await axios.get(`http://localhost:5173/detail/${itemSeq}`, {
    params: {
      itemSeq
    }
  }).then(() => {

  }).catch((e) => {
    console.log(e);
  })
};

export default DetailApi;

axios.get("url", {
      params: {
        id: 123
      }
    })
    .then(function (response) {
         // response
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행
    });


// async await 함수를 사용할 때,

try {
	const data = await axios.get("url", params: { id: 123 });
} catch {
	// 오류 발생시 실행
}
