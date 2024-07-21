import axios from "axios";

const DetailPath = "/medicine";

const DetailApi = {
  getDetail: (data = await axios
    .get(`http://localhost:8080/medicine/itemSeq`, {})
    .then(console.log("data fetching되었음"))
    .catch((e) => {
      console.log(e);
    })),
};

const useGetDetail = async (params) => {
  try {
    const res = await DetailApi.getDetail(params);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default useGetDetail;
