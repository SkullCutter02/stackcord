import React, { useEffect } from "react";
import { useRouter } from "next/router";

import User from "./User";
import Halls from "./Halls";
import { axios } from "../../../lib/axios";

const DashboardLayout: React.FC = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    axios
      .get("auth/me")
      .then((data) => {
        if (!data) router.push("/").then();
      })
      .catch((_) => {
        router.push("/").then();
      });
  }, []);

  return (
    <>
      <main>
        <nav>
          <User />
          <div className="divider" />
          <img src={"/svg/addIcon.svg"} alt="add icon" className="add-icon" />
          <Halls />
        </nav>
        <div className="content">{children}</div>
      </main>

      <style jsx>{`
        main {
          max-height: 100vh;
          max-width: 100vw;
        }

        .content {
          position: relative;
          height: calc(100vh - 100px);
          overflow-y: scroll;
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
      `}</style>
    </>
  );
};

export default DashboardLayout;
