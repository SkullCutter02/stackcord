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

          <div className="hall">
            <div className="hall-image" />
            <div className="hall-info">
              <p className="hall-name">Math AA HL</p>
              <p className="student-count">5 students</p>
            </div>
          </div>
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
          height: 100px;
          border-bottom: 1px solid #383838;
          padding: 15px 20px;
          display: flex;
          overflow-y: scroll;
        }

        .divider {
          background: var(--borderColor);
          width: 1px;
          border-radius: 1px;
          height: 100%;
        }

        .add-icon {
          margin: 0 30px;
          cursor: pointer;
          height: 35px;
          width: 35px;
          align-self: center;
        }

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

export default DashboardLayout;
