import React from "react";
import usePostAnswer from "../../../hooks/usePostAnswer";

const ChatInput: React.FC = () => {
  const { postAnswer, isPosting } = usePostAnswer();

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
