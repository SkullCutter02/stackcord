import { axios } from "../lib/axios";

const getMe = async () => {
  const { data } = await axios.get("auth/me");
  return data;
};

export default getMe;
