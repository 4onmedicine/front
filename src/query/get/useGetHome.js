import HomeApi from "../../apis/getHome";

const getHomeData = async (query) => {
  try {
    await new Promise((r) => setTimeout(r, 2_000));
    const res = await HomeApi.getHome(query);
    return res.data.filter((medicine) =>
      medicine.itemName.toLowerCase().includes(query.toLowerCase())
    );
  } catch (e) {
    console.log(e);
  }
};

export default getHomeData;
