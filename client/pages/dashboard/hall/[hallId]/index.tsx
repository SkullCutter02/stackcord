import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";

import getHall from "../../../../queries/getHall";
import IHall from "../../../../types/hall.interface";
import PrimaryTextInput from "../../../../components/widgets/PrimaryTextInput";
import Question from "../../../../components/ui/hall/Question";
import { HallContext } from "../../../../context/HallContext";
import ServerInterfaceButtons from "../../../../components/ui/hall/ServerInterfaceButtons";

const HallPage: React.FC = () => {
  const router = useRouter();
  const hallId = router.query.hallId;

  const { data: hall } = useQuery<IHall>(["hall", hallId], () =>
    getHall(hallId)
  );

  const { setHall } = useContext(HallContext);

  useEffect(() => {
    if (hall) {
      setHall(hall);
    }
  }, [hall]);

  return (
    <>
      <PrimaryTextInput
        placeholder={"Search for a question here..."}
        name={"search"}
      />
      <ServerInterfaceButtons />
      <div className="questions">
        {hall.questions.map((question) => (
          <Question question={question} key={question.id} />
        ))}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["hall", context.query.hallId], () =>
    getHall(context.query.hallId)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HallPage;
