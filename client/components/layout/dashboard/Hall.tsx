import React, { useContext } from "react";

import IHall from "../../../types/hall.interface";
import Link from "next/link";
import { HallContext } from "../../../context/HallContext";

interface Props {
  hall: IHall;
}

const Hall: React.FC<Props> = ({ hall }) => {
  const { hall: currentHall } = useContext(HallContext);

  return (
    <>
      <Link href={`/dashboard/hall/${hall.id}`}>
        <div className="hall">
          <div className="hall-image" />
          <div className="hall-info">
            <p className="hall-name">{hall.name}</p>
            <p className="student-count">
              {hall.users.length} student
              {hall.users.length !== 1 && "s"}
              {/* TODO: DON'T COUNT TEACHERS AS STUDENTS*/}
              {/* TODO: FIXED STUDENT NOT RIGHT ISSUE */}
            </p>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .hall {
          height: 100%;
          background: ${currentHall?.id === hall.id
            ? "var(--tertiaryBackgroundColor)"
            : "var(--secondaryBackgroundColor)"};
          border-radius: 12px;
          padding: 12px;
          margin-right: 30px;
          cursor: pointer;
          min-width: fit-content;
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

export default Hall;
