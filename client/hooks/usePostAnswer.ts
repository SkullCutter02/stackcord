import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { SocketContext } from "../context/SocketContext";

export default function usePostAnswer() {
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const router = useRouter();
  const questionId = router.query.questionId;

  const socket = useContext(SocketContext);

  const postAnswer = async (e) => {
    e.preventDefault();

    const body: string = e.target.body.value;

    if (body.length === 0) return;

    setIsPosting(true);

    try {
      socket.emit("send_answer", {
        roomId: questionId,
        body: body,
        whiteboard: "",
      });

      e.target.body.value = "";
      setIsPosting(false);
    } catch (err) {
      setIsPosting(false);
      console.log(err);
    }
  };

  return { isPosting, postAnswer };
}
