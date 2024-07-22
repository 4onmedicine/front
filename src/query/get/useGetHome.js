const HomeApi = {
  getHome: async (query) => {
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
};

const useGetHome = async (query) => {
  try {
    await new Promise((r) => setTimeout(r, 2_000));
    const res = await HomeApi.getHome(query);
    console.log(res);
    return res.filter((medicine) =>
      medicine.itemName.toLowerCase().includes(query.toLowerCase())
    );
  } catch (e) {
    console.log(e);
  }
};

export default useGetHome;
