import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import IHall from "../types/hall.interface";
import { useQuery } from "react-query";
import getHall from "../queries/getHall";

interface IHallContext {
  hall: IHall;
  setHall: React.Dispatch<React.SetStateAction<IHall>>;
}

export const HallContext = createContext<IHallContext>(null);

export const HallProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const path = router.asPath.split("/");

  const { data } = useQuery<IHall>(["hall", path[3]], () => getHall(path[3]), { enabled: !!path[3] });

  const [hall, setHall] = useState<IHall | null>(data);

  useEffect(() => {
    if (data) {
      setHall(data);
    }
  }, [data]);

  return (
    <>
      <HallContext.Provider value={{ hall, setHall }}>{children}</HallContext.Provider>
    </>
  );
};
