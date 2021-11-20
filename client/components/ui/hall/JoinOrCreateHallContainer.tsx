import React from "react";

interface Props {
  type: "join" | "create";
}

const JoinOrCreateHallContainer: React.FC<Props> = ({ children, type }) => {
  return (
    <>
      <div className="container">
        <div>
          <img className="hall-icon" src={"/svg/hall.svg"} alt="hall icon" />
          <h1>{type} a hall</h1>
          {children}
        </div>
      </div>

      <style jsx>{`
        .container {
          position: absolute;
          inset: 0;
          background: var(--secondaryBackgroundColor);
        }

        .container > div {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: translateY(-60px);
        }

        .hall-icon {
          margin-bottom: 20px;
        }

        h1 {
          text-transform: uppercase;
          font-family: var(--secondaryFont);
        }
      `}</style>
    </>
  );
};

export default JoinOrCreateHallContainer;
