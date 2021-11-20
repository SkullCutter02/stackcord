import { axios } from "../lib/axios";

const getQuestion = async (questionId: string | string[]) => {
  const { data } = await axios.get(`question/${questionId}`);
  return data;
};

export default getQuestion;
