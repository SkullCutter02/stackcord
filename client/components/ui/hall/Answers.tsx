import React from "react";
import { formatDistanceToNow, intervalToDuration, parseISO } from "date-fns";

import IAnswer from "../../../types/answer.interface";

interface Props {
  answers: IAnswer[];
}

const Answers: React.FC<Props> = ({ answers }) => {
  return (
    <>
      <div className="messages">
        {answers.map((answer, index) => {
          // if previous answer's user is the same as this answer's user, and their created time is under 3 minutes
          return answers[index - 1] &&
            answer.user.id === answers[index - 1].user.id &&
            intervalToDuration({
              start: parseISO(answers[index - 1].createdAt),
              end: parseISO(answer.createdAt),
            }).minutes <= 3 ? (
            <p className="message-text" key={answer.id}>
              {answer.body}
            </p>
          ) : (
            <div className="message" key={answer.id}>
              <div className="message-user-info">
                <div className="member-avatar" />
                <p>
                  {answer.user.name}{" "}
                  <span className="message-timestamp">
                    | {formatDistanceToNow(parseISO(answer.createdAt))}
                  </span>
                </p>
              </div>
              <p className="message-text">{answer.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Answers;
