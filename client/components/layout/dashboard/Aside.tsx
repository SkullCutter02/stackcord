import React, { useContext } from "react";

import { HallContext } from "../../../context/HallContext";

const Aside: React.FC = () => {
  const { hall } = useContext(HallContext);

  return (
    <>
      <aside>
        <div className="hall-info">
          <div className="hall-text">
            <h1 className="hall-name">{hall?.name}</h1>
            <p className="hall-code">{hall && "Code: " + hall?.code}</p>
          </div>
        </div>
        <h1 className="member-heading">
          {hall &&
            "Teachers (" +
              hall?.users.filter((user) => user.role === "teacher").length +
              ")"}
        </h1>
        {hall?.users
          .filter((user) => user.role === "teacher")
          .map((user) => (
            <div className="member" key={user.id}>
              <div className="member-avatar" />
              <p className="member-name">{user.name}</p>
            </div>
          ))}
        <h1 className="member-heading">
          {hall &&
            "Students (" +
              hall?.users.filter((user) => user.role === "student").length +
              ")"}
        </h1>
        {hall?.users
          .filter((user) => user.role === "student")
          .map((user) => (
            <div className="member" key={user.id}>
              <div className="member-avatar" />
              <p className="member-name">{user.name}</p>
            </div>
          ))}
      </aside>

      <style jsx>{`
        aside {
          float: right;
          height: calc(100vh - 100px);
          width: 20vw;
          background: var(--secondaryBackgroundColor);
          border-left: 2px solid #383838;
          padding: 40px;
          overflow-y: scroll;
        }

        .hall-name {
          text-transform: uppercase;
          font-size: calc(0.8em + 0.5vw);
          margin-bottom: 10px;
        }

        .hall-code {
          color: var(--secondaryTextColor);
          font-size: calc(0.7em + 0.3vw);
        }

        .member-heading {
          font-size: calc(0.7em + 0.3vw);
          text-transform: uppercase;
          margin-top: 45px;
        }

        .member-avatar {
          width: 38px;
          border-radius: 12px;
          height: 38px;
          background: #2777ba;
          margin-right: 15px;
        }

        .member {
          display: flex;
          align-items: center;
          margin: 20px 0px;
        }

        .member-name {
          color: var(--secondaryTextColor);
          font-size: calc(0.7em + 0.3vw);
        }

        .server-info {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default Aside;
