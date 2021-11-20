import React from "react";
import { useQuery } from "react-query";

import Hall from "./Hall";
import getHalls from "../../../queries/getHalls";
import IHall from "../../../types/hall.interface";

const Halls: React.FC = () => {
  const { isLoading, data: halls } = useQuery<IHall[]>("halls", () =>
    getHalls()
  );

  return (
    <>
      <div className="halls">
        {!isLoading && (
          <>
            {halls.map((hall) => (
              <Hall hall={hall} key={hall.id} />
            ))}
          </>
        )}
      </div>

      <style jsx>{`
        .halls {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: scroll;
        }
      `}</style>
    </>
  );
};

export default Halls;
