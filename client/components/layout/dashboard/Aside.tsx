import React from "react";

const Aside: React.FC = () => {
  return (
    <>
      <aside>
        <div className="hall-info">
          <div className="hall-text">
            <h1 className="hall-name">Math AA HL</h1>
            <p className="hall-code">Code: 4j2234n13</p>
          </div>
        </div>
        <h1 className="member-heading">Teachers (1)</h1>
        <div className="member">
          <div className="member-avatar" />
          <p className="member-name">D. Odunlami</p>
        </div>
        <h1 className="member-heading">Students (5)</h1>
        <div className="member">
          <div className="member-avatar" />
          <p className="member-name">Colin Chau</p>
        </div>
        <div className="member">
          <div className="member-avatar" />
          <p className="member-name">Colin Chau</p>
        </div>
      </aside>

      <style jsx>{`
        aside {
          float: right;
          height: calc(100vh - 100px);
          width: 25vw;
          background: var(--secondaryBackgroundColor);
          border-left: 2px solid #383838;
          padding: 40px;
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
