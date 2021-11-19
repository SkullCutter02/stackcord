import { MutableRefObject, useState } from "react";

import LogInFormInput from "../types/formInputs/logInFormInput.interface";
import { axios } from "../lib/axios";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const login = async (input: LogInFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.post("auth/login", input);
      console.log(data);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { login, isLoading, error };
}
