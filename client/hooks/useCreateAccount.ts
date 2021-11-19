import { useState } from "react";

import CreateAccountFormInput from "../types/formInputs/createAccountFormInput.interface";
import { axios } from "../lib/axios";

export default function useCreateAccount() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const createAccount = async ({
    name,
    email,
    password,
  }: CreateAccountFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      await axios.post("auth/signup", {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: password,
      });

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { createAccount, isLoading, error };
}
