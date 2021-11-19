import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

import IHall from "../../types/hall.interface";
import getHalls from "../../queries/getHalls";
import NoHall from "../../components/ui/dashboard/NoHall";

const DashboardPage: React.FC = () => {
  const { isLoading, data: halls } = useQuery<IHall[]>("halls", () =>
    getHalls()
  );

  const router = useRouter();

  useEffect(() => {
    if (!isLoading && halls.length > 0) {
      router.push(`/dashboard/hall/${halls[0].id}`);
    }
  }, [halls]);

  return <>{!isLoading && halls.length === 0 && <NoHall />}</>;
};

export default DashboardPage;
