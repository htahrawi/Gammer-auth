import React from "react";
// import SideBar from "../SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="main__layout">
      <div className="left-side">
        {/* <SideBar /> */}
      </div>
      <div className="right-side">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;