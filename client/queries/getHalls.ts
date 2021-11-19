import { axios } from "../lib/axios";

const getHalls = async () => {
  const { data } = await axios.get("hall");
  return data;
};

export default getHalls;
