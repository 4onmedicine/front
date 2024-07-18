import { AxiosResponse } from "axios";
import axiosInstance from "./@core";

const DetailPath = "/detail";

const DetailApi = {
  getDetail: () => {
    return axiosInstance.get(`${DetailPath}/:${id}`);
  },
};

export default DetailApi;
