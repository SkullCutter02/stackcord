import React from "react";
import { useQuery } from "react-query";

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
              <div className="hall" key={hall.id}>
                <div className="hall-image" />
                <div className="hall-info">
                  <p className="hall-name">{hall.name}</p>
                  <p className="student-count">5 students</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <style jsx>{`
        .hall {
          height: 100%;
          background: var(--tertiaryBackgroundColor);
          border-radius: 12px;
          padding: 12px;
          margin-right: 30px;
        }

        .hall-info {
          float: right;
          display: flex;
          justify-content: center;
          flex-direction: column;
          height: 100%;
          margin-left: 10px;
        }

        .hall-image {
          float: left;
          height: 100%;
          width: 45px;
          background: green;
          border-radius: 12px;
        }

        .hall-name {
          font-size: 0.9rem;
        }

        .student-count {
          display: block;
          font-size: 0.7rem;
          color: var(--secondaryTextColor);
        }
      `}</style>
    </>
  );
};

export default Halls;