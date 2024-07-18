import DetailApi from "../../apis/getDetail";

const getDetailData = async (query) => {
  try {
    const res = await DetailApi.getDetail(query);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getDetailData;
