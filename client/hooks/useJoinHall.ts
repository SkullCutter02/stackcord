import { useState } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";

import { axios } from "../lib/axios";
import JoinHallFormInput from "../types/formInputs/joinHallFormInput.interface";
import IHall from "../types/hall.interface";

export default function useJoinHall() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const queryClient = useQueryClient();

  const joinHall = async ({ code }: JoinHallFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.post(`hall/${code}/join`, {
        code: code.toLowerCase().trim(),
      });

      const qData: IHall[] = queryClient.getQueryData("halls");
      queryClient.setQueryData("halls", [...qData, data]);

      await router.push(`/dashboard/hall/${data.id}`);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { joinHall, isLoading, error };
}
