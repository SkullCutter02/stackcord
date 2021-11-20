import { useState } from "react";

import { axios } from "../lib/axios";
import JoinHallFormInput from "../types/formInputs/joinHallFormInput.interface";

export default function useJoinHall() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const joinHall = async ({ code }: JoinHallFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      // await axios.post()
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { joinHall, isLoading, error };
}
