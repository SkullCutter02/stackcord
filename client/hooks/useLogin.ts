import LogInFormInput from "../types/formInputs/logInFormInput.interface";

import { axios } from "../lib/axios";

export default function useLogin() {
  const login = async (input: LogInFormInput) => {
    const { data } = await axios.get("");
    console.log(data);
  };

  return { login };
}
