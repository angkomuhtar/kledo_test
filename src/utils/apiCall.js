import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://api.jokolodang.com/api/v1",
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      return error.response;
    }
    return Promise.reject(error);
  }
);
