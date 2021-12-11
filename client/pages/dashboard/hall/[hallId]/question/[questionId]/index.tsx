import React, { useEffect } from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useRouter } from "next/router";
import { formatDistanceToNow, parseISO } from "date-fns";
import CanvasDraw from "react-canvas-draw";
import dynamic from "next/dynamic";

import getQuestion from "../../../../../../queries/getQuestion";
import IQuestion from "../../../../../../types/question.interface";
import ChatInput from "../../../../../../components/ui/question/ChatInput";
import useJoinQuestionRoom from "../../../../../../hooks/useJoinQuestionRoom";
import useScrollOnNewMessage from "../../../../../../hooks/useScrollOnNewMessage";
import Answers from "../../../../../../components/ui/hall/Answers";

// @ts-ignore
const MD: any = dynamic(() => import("@uiw/react-md-editor").then((mod) => mod.default.Markdown), {
  ssr: false,
});

const QuestionPage: React.FC = () => {
  const router = useRouter();
  const questionId = router.query.questionId;

  const { data: question } = useQuery<IQuestion>(["question", questionId], () => getQuestion(questionId));

  useJoinQuestionRoom();

  const { scrollOnNewMessage } = useScrollOnNewMessage();

  useEffect(() => {
    if (question) {
      scrollOnNewMessage();
    }
  }, [question]);

  return (
    <>
      <div className="chat">
        <div className="message-question">
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

        <Answers answers={question.answers} />

        <ChatInput />

        {/*<button className="back-button">↩</button>*/}
      </div>

      <style jsx>{`
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
