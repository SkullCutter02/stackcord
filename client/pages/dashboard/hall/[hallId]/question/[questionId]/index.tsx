import React from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import getQuestion from "../../../../../../queries/getQuestion";

const QuestionPage: React.FC = () => {
  return <></>;
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
