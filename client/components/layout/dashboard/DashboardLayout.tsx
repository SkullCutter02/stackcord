import React from "react";

import User from "./User";

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <>
      <main>
        <nav>
          <User />
          <div className="divider" />
          <img src={"/svg/addIcon.svg"} alt="add icon" className="add-icon" />
        </nav>
      </main>

      <style jsx>{`
        main {
          overflow: scroll;
          max-height: 100vh;
          max-width: 100vw;
        }

        nav {
          background: var(--secondaryBackgroundColor);
          height: 80px;
          border-bottom: 1px solid #383838;
          padding: 15px 20px;
          display: flex;
          overflow-y: scroll;
        }

        .divider {
          background: var(--borderColor);
          width: 1px;
          margin-right: 30px;
          border-radius: 1px;
          height: 100%;
        }

        .add-icon {
          cursor: pointer;
          height: 35px;
          width: 35px;
          align-self: center;
        }
      `}</style>
    </>
  );
};

export default DashboardLayout;
