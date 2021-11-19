import React from "react";

const User: React.FC = () => {
  return (
    <>
      <div className="user">
        <div className="avatar" />
        <p className="user-name">Colin Chau</p>
        <img
          className="settings-icon"
          src={"/svg/settings.svg"}
          alt="settings icon"
        />
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
