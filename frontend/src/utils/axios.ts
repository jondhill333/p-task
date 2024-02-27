import Axios from "axios"; // , { AxiosError }

const axiosInstance = Axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
