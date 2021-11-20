import { useState } from "react";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";

import { axios } from "../lib/axios";
import CreateHallFormInput from "../types/formInputs/createHallFormInput.interface";
import IHall from "../types/hall.interface";

export default function useCreateHall() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const queryClient = useQueryClient();

  const createHall = async ({ name }: CreateHallFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.post("hall", {
        name: name.trim(),
        anonymous: false,
      });

      const qData: IHall[] = queryClient.getQueryData("halls");
      queryClient.setQueryData("halls", [...qData, data]);

      await router.push(`/dashboard/hall/${data.id}`);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { createHall, isLoading, error };
}
