import axios from "axios";

const HomePath = "home"; // 변경: 경로 앞에 '/'를 제거했습니다. (필요에 따라 변경)

const HomeApi = {
  getHome: (query) => {
    return axios.get(`http://localhost:5173/api/home?search=${query}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  },
};

export default HomeApi;
