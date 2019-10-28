// @flow
import axios from "axios";
import { logRequest, logResponse, logError } from "./logging";
import { API_URL } from "Config";

const authAxios = axios.create({
  baseURL: API_URL,
});

authAxios.interceptors.request.use(
  config => {
    logRequest(config);
    return config;
  },
  error => {
    console.log("request erorr", error);
    return Promise.reject(error);
  }
);

authAxios.interceptors.response.use(
  response => {
    logResponse(response);
    return response;
  },
  error => {
    if (error.response) {
      logError(error.response);
    }
    return Promise.reject(error);
  }
);

export default authAxios;
