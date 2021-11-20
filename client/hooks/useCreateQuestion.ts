import { useState } from "react";
import { useRouter } from "next/router";
import CanvasDraw from "react-canvas-draw";

import { axios } from "../lib/axios";
import CreateQuestionFormInput from "../types/formInputs/createQuestionFormInput.interface";

export default function useCreateQuestion(
  body: string,
  saveableCanvas: CanvasDraw
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const hallId = router.query.hallId;

  const createQuestion = async ({ title }: CreateQuestionFormInput) => {
    setIsLoading(true);
    setError("");

    try {
      const { data } = await axios.post("question", {
        title: title.trim(),
        body: body,
        whiteboard: saveableCanvas.getSaveData(),
        hallId: hallId,
      });

      await router.push(`/dashboard/hall/${hallId}/question/${data.id}`);
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };

  return { createQuestion, isLoading, error };
}
