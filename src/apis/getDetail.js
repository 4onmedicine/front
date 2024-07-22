import axios, { AxiosResponse } from "axios";
import axiosInstance from "./@core";

const DetailPath = "/detail";

const DetailApi = {
  getDetail: (data = await axios
    .get(`http://localhost:5173/detail/${itemSeq}`, {
      params: {
        itemSeq,
      },
    })
    .then(console.log("data fetching되었음"))
    .catch((e) => {
      console.log(e);
    })),
};

export default DetailApi;
