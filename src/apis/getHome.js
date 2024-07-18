import axiosInstance from "./@core";

const HomePath = "/home";

const HomeApi = {
  getHome: () => {
    return axiosInstance.get(`${HomePath}?search=${query}`);
  },
};

export default HomeApi;
