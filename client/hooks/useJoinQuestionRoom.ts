import { useContext, useEffect } from "react";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";

import { SocketContext } from "../context/SocketContext";
import IQuestion from "../types/question.interface";

export default function useJoinQuestionRoom() {
  const socket = useContext(SocketContext);
  const queryClient = useQueryClient();

  const router = useRouter();
  const questionId = router.query.questionId;

  useEffect(() => {
    if (questionId) {
      socket.emit("join_question_room", questionId);

      socket.on("receive_answer", (data) => {
        const qData = queryClient.getQueryData<IQuestion>(["question", questionId]);
        queryClient.setQueryData(["question", questionId], { ...qData, answers: [...qData.answers, data] });
      });

      return () => {
        socket.emit("leave_question_room", questionId);
      };
    }
  }, [socket, questionId]);
}
