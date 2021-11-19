import React from "react";
import Skeleton from "react-loading-skeleton";

import IUser from "../../../types/user.interface";
import { useQuery } from "react-query";
import getMe from "../../../queries/getMe";

const User: React.FC = () => {
  const { isLoading, data: user } = useQuery<IUser>("user", () => getMe());

  return (
    <>
      <div className="user">
        {isLoading ? (
          <Skeleton width={100} height={40} />
        ) : (
          <>
            <div className="avatar" />
            <p className="user-name">{user.name}</p>
            <img
              className="settings-icon"
              src={"/svg/settings.svg"}
              alt="settings icon"
            />
          </>
        )}
      </div>

      <style jsx>{`
        .user {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 30px;
        }

        .avatar {
          width: 50px;
          border-radius: 12px;
          height: 50px;
          background: #2777ba;
        }

        .user-name {
          margin-left: 15px;
        }

        .settings-icon {
          margin-left: 15px;
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default User;
