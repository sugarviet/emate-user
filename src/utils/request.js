import axios from "axios";

export const request = axios.create({
  withCredentials: true,
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
    //   localStorage.removeItem("token");
    //   instance.get(API.LOGOUT);
    }
    return Promise.reject(error);
  }
);