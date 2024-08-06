import { HomeApi } from "../../apis/HomeApi";

const useGetHome = async (query, selectedOption) => {
  try {
    await new Promise((r) => setTimeout(r, 2_000));
    if (selectedOption === "약") {
      const res = await HomeApi.getHomeByName(query);
      return res.filter((medicine) =>
        medicine.itemName.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selectedOption === "증상") {
      const res = await HomeApi.getHomeBySymptom(query);
      return res.filter((medicine) =>
        medicine.efcyQesitm.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selectedOption === "드롭다운 메뉴") {
      console.log("드롭다운 메뉴 선택해주세요.");
    }
  } catch (e) {
    console.log(e);
  }
};

export default useGetHome;
