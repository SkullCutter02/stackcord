import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import IHall from "../types/hall.interface";

interface IHallContext {
  hall: IHall;
  setHall: React.Dispatch<React.SetStateAction<IHall>>;
}

export const HallContext = createContext<IHallContext>(null);

export const HallProvider: React.FC = ({ children }) => {
  const [hall, setHall] = useState<IHall | null>(null);

  const router = useRouter();
  const path = router.asPath.split("/");

  useEffect(() => {
    if (path.length === 2 && path[1] === "dashboard") {
      setHall(null);
    }
  }, [path]);

  return (
    <>
      <HallContext.Provider value={{ hall, setHall }}>
        {children}
      </HallContext.Provider>
    </>
  );
};
