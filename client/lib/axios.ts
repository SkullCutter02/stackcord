import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

import HOST from "../constants/host";

const instance = axios.create({
  baseURL: HOST,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  withCredentials: true,
});

const refreshAuthLogic = (failedRequest) => {
  if (failedRequest.response.data.message === "Unauthorized") {
    return instance.get("auth/refresh").then();
  } else {
    return Promise.resolve();
  }
};

createAuthRefreshInterceptor(instance, refreshAuthLogic, {
  pauseInstanceWhileRefreshing: true,
});

export { instance as axios };
