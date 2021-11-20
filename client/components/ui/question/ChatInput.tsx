import React from "react";

const ChatInput: React.FC = () => {
  return (
    <>
      <div className="message-input-bar-background">
        <input type="text" className="message-input-bar" placeholder="Type your message here..." />
      </div>

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
