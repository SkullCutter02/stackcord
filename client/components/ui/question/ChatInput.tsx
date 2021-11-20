import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { axios } from "../../../lib/axios";

const ChatInput: React.FC = () => {
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const router = useRouter();
  const questionId = router.query.questionId;

  const postAnswer = async (e) => {
    e.preventDefault();

    const body: string = e.target.body.value;

    if (body.length === 0) return;

    setIsPosting(true);

    try {
      const { data } = await axios.post("answer", { body: body, questionId: questionId });
      console.log(data);

      e.target.body.value = "";
      setIsPosting(false);
    } catch (err) {
      setIsPosting(false);
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={postAnswer} className="message-input-bar-background">
        <input
          type="text"
          name="body"
          className="message-input-bar"
          placeholder="Type your message here..."
          disabled={isPosting}
        />
        <button type={"submit"} style={{ display: "none" }} />
      </form>

      <style jsx>{`
        .message-input-bar-background {
          height: 80px;
          position: fixed;
          background: transparent;
          bottom: 0;
        }

        .message-input-bar {
          background: var(--secondaryBackgroundColor);
          border: 2px solid var(--borderColor);
          height: 60px;
          border-radius: 40px;
          padding: 20px 30px;
          width: calc(75vw - 60px);
        }

        .message-input-bar:focus {
          border: 2px solid #4c4c4c;
        }
      `}</style>
    </>
  );
};

export default ChatInput;
