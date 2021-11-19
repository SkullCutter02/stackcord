import React from "react";

const ServerInterfaceButtons: React.FC = () => {
  return (
    <>
      <div className="server-interface-buttons">
        <button className="unanswered-button">Unanswered</button>
        <button className="answered-button">Answered</button>
        <button className="new-thread-button">+ NEW THREAD</button>
      </div>

      <style jsx>{`
        .server-interface-buttons {
          display: flex;
          width: 100%;
          margin: 40px 0;
        }

        .new-thread-button {
          margin-left: auto;
          background: var(--secondaryColor);
        }

        button {
          background: var(--primaryColor);
          padding: 12px 40px;
          border: none;
          border-radius: 200px;
          text-transform: uppercase;
        }

        .answered-button {
          background: none;
        }
      `}</style>
    </>
  );
};

export default ServerInterfaceButtons;
