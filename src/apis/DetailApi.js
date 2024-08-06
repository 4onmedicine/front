export const DetailApi = {
  getDetail: async (id) => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/medicine/${id}`,
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
