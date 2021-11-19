import axios from "axios";
import HOST from "../constants/host";

const instance = axios.create({
  baseURL: HOST,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  withCredentials: true,
});

export { instance as axios };
