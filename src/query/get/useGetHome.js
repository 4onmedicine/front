const HomeApi = {
  getHomeByName: async (query) => {
    const response = await fetch(`http://localhost:8080/home?search=${query}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
  getHomeBySymptom: async (query) => {
    const response = await fetch(`http://localhost:8080/home?efcy=${query}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};

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
