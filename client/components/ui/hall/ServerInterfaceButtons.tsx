import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ServerInterfaceButtons: React.FC = () => {
  const router = useRouter();
  const hallId = router.query.hallId;

  return (
    <>
      <div className="server-interface-buttons">
        <button className="unanswered-button">Unanswered</button>
        <button className="answered-button">Answered</button>
        <Link href={`/dashboard/hall/${hallId}/question/create`}>
          <button className="new-question-button">+ NEW QUESTION</button>
        </Link>
      </div>

      <style jsx>{`
        .server-interface-buttons {
          display: flex;
          width: 100%;
          margin: 40px 0;
        }

        .new-question-button {
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
