export const ImageApi = {
  postImage: async (url) => {
    const reqBody = {
      image: url,
    };
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/send-image`,
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
      throw new Error(`Error Posting Image! status: ${response.status}`);
    }
    return response.json();
  },
};
