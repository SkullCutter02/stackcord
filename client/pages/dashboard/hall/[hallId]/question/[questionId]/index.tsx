import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { formatDistanceToNow, parseISO } from "date-fns";
import CanvasDraw from "react-canvas-draw";
import dynamic from "next/dynamic";

import getQuestion from "../../../../../../queries/getQuestion";
import IQuestion from "../../../../../../types/question.interface";
import ChatInput from "../../../../../../components/ui/question/ChatInput";

// @ts-ignore
const MD: any = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default.Markdown), {
  ssr: false,
});

const QuestionPage: React.FC = () => {
  const router = useRouter();
  const questionId = router.query.questionId;

  const { data: question } = useQuery<IQuestion>(["question", questionId], () => getQuestion(questionId));

  return (
    <>
      <div className="chat">
        <div className="message">
          <div className="message-user-info">
            <div className="member-avatar" />
            <p>
              {question.user.name}{" "}
              <span className="message-timestamp">| {formatDistanceToNow(parseISO(question.createdAt))}</span>
            </p>
          </div>
          <h1 className="message-question-title">{question.title}</h1>
          <CanvasDraw
            disabled
            hideGrid
            saveData={question.whiteboard}
            canvasHeight={400}
            style={{ width: "100%", margin: "30px 0" }}
          />
          <MD source={question.body} />
        </div>

        {question.answers
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((answer) => (
            <div className="message" key={answer.id}>
              <div className="message">
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
            </div>
          ))}

        <ChatInput />

        {/*<button className="back-button">↩</button>*/}
      </div>

      <style jsx>{`
        .user-message {
          width: 90%;
        }

        .message {
          margin-right: auto;
          width: 100%;
        }

        .message:not(:first-child) {
          margin-top: 50px;
        }

        .message-user-info {
          display: flex;
          align-items: center;
        }

        .message-timestamp {
          color: var(--secondaryTextColor);
        }

        .message-question-title {
          margin-top: 20px;
        }

        .message-question-image {
          max-width: 50%;
          margin-top: 10px;
        }

        .message-text {
          margin-top: 10px;
          font-size: calc(0.7em + 0.3vw);
          line-height: 1.7em;
        }

        .chat {
          padding-bottom: 60px;
        }

        .back-button {
          position: fixed;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          padding: 0;
          top: 125px;
          right: calc(23vw + 25px);
          background: var(--secondaryBackgroundColor);
          border: 2px solid var(--borderColor);
        }

        .back-button:hover {
          border: 2px solid #4c4c4c;
        }

        .member-avatar {
          width: 38px;
          border-radius: 12px;
          height: 38px;
          background: #2777ba;
          margin-right: 15px;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["question", context.query.questionId], () =>
    getQuestion(context.query.questionId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default QuestionPage;
