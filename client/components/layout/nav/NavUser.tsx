import React from "react";
const UserImg = { src: "x" };

const UserInfor = ["UserName", "UserId"];

const NavUser = () => {
  return (
    <>
      <div className="nav-user">
        <div className="nav-user-img">
          <img src={UserImg.src} alt="UserImg" />
        </div>
        <div className="nav-user-infor">
          <div className="nav-user-infor-name">{UserInfor[0]}</div>
          <div className="nav-user-infor-id">{UserInfor[1]}</div>
        </div>
      </div>
      {/*<SettingsIcon w={10} h={10} />*/}
    </>
  );
};

export default NavUser;
