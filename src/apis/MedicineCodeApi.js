export const MedicineCodeApi = {
  postMedicineCode: async (id) => {
    const reqBody = {
      data: id,
    };
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/receive-data`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      }
    );
    if (response.status != 200) {
      throw new Error(
        `Error Posting Medicine Code! status: ${response.status}`
      );
    }
    return response.json();
  },
};
