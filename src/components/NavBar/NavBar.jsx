import React from "react";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.png";
import './index.css'
const NavBar = () => {
  return (
    <div className="Navbartext h-[64px] bg-white border-b-[1px] border-gray-300 flex justify-between">
      <div className="flex">
        <div className="ml-4  mt-1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="ml-7 flex mt-[18px] gap-5">
          <p>Dashboard</p>
          <p>Team</p>
          <p>Projects</p>
          <p>Calendar</p>
        </div>
      </div>
      <div className="mr-6 mt-[18px] flex gap-2">
        <div>
          <img src={logout} alt="Logo" />
        </div>
        <div>
          <p className="text-sm mt-1">Login/Register</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
