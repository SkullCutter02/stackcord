import React from "react";
import { useQuery } from "react-query";

import IHall from "../../types/hall.interface";
import getHalls from "../../queries/getHalls";
import NoHall from "../../components/ui/dashboard/NoHall";

const DashboardPage: React.FC = () => {
  const { isLoading, data: halls } = useQuery<IHall[]>("halls", () =>
    getHalls()
  );

  return <>{!isLoading && halls.length === 0 && <NoHall />}</>;
};

export default DashboardPage;
