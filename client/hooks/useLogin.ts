import { useState } from "react";
import { useRouter } from "next/router";

import LogInFormInput from "../types/formInputs/logInFormInput.interface";
import { axios } from "../lib/axios";

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const login = async ({ email, password }: LogInFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      await axios.post("auth/login", {
        email: email.toLowerCase().trim(),
        password: password,
      });

      await router.push("/dashboard");
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { login, isLoading, error };
}
