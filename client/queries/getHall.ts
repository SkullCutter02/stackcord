import { axios } from "../lib/axios";

const getHall = async (hallId: string | string[]) => {
  const { data } = await axios.get(`hall/${hallId}`);
  return data;
};

export default getHall;
