export const HomeApi = {
  getHomeByName: async (query) => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/home?search=${query}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
  getHomeBySymptom: async (query) => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/home?efcy=${query}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};
