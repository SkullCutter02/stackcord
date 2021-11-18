import React from "react";

import NavUser from "./NavUser";

const NavBarContainer: React.FC = () => {
  return (
    <>
      <nav>
        <NavUser />
        <div className="divider" />
      </nav>

      <style jsx>{`
        main {
          display: flex;
          height: 20vh;
          padding: 5vh 0;
          align-items: center;
        }

        .divider {
          height: 10vh;
          background: var(--borderColor);
          width: 2px;
          border-radius: 1px;
        }
      `}</style>
    </>
  );
};

export default NavBarContainer;
