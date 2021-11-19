import React from "react";
import IQuestion from "../../../types/question.interface";

interface Props {
  question: IQuestion;
}

const Question: React.FC<Props> = ({ question }) => {
  return (
    <>
      <div className="question">
        <div className="question-text">
          <p className="posted-by-status">Posted by Leo Tang | 10s ago</p>
          <h1 className="question-title">{question.title}</h1>
          <p className="question-content">{question.body}</p>
        </div>
        {/*<div className="question-image"></div>*/}
      </div>

      <style jsx>{`
        .question {
          margin-top: 25px;
          display: flex;
          width: 100%;
          padding: 20px;
          background: var(--secondaryBackgroundColor);
          border-radius: 12px;
          border: 2px solid var(--borderColor);
        }

        .question-image {
          width: 45%;
          height: 100%;
          margin-left: 10px;
          background: blue;
        }

        .question-text {
          width: 55%;
        }

        .question-title {
          font-size: calc(1em + 0.3vw);
          margin-bottom: 10px;
        }

        .posted-by-status {
          font-size: calc(0.5em + 0.3vw);
          color: var(--secondaryTextColor);
          margin-bottom: 10px;
        }

        .question-content {
          font-size: calc(0.7em + 0.3vw);
          font-weight: lighter;
        }
      `}</style>
    </>
  );
};

export default Question;
