import React from "react";

const NoHall: React.FC = () => {
  return (
    <>
      <div className="no-halls">
        <img className="hall-icon" src={"/svg/hall.svg"} alt="hall icon" />
        <p>
          You haven't joined any halls yet. <br />
          Join one using the <img
            src={"/svg/addIcon.svg"}
            alt="add icon"
          />{" "}
          button!
        </p>
      </div>

      <style jsx>{`
        .no-halls {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .hall-icon {
          display: block;
          margin: 0 auto 15px;
        }

        .no-halls p {
          color: var(--secondaryTextColor);
          text-align: center;
          line-height: 1.6em;
        }

        .no-halls p img {
          width: 15px;
          height: 15px;
        }
      `}</style>
    </>
  );
};

export default NoHall;
