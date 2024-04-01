import React from "react";
import "./index.css";
import login from "../../assets/login-background.png";
const LoginComponent = () => {
  return (
    <div className="loginpage flex justify-center items-center">
      <div className="w-[1080px] h-[480px] bg-white rounded-lg shadow-sm flex">
        <div className="w-[610px]">
          <img alt="Login" src={login} className="ml-[80px] mt-[100px]" />
        </div>
        <div className="mt-[60px]">
          <h1 className="text-2xl font-bold">Create your Free Account</h1>
          <h4 className="font-bold mt-8">Your email</h4>
          <input type="text" className="mt-1 h-[40px] w-[350px] rounded-lg input p-2"/>
          <h4 className="font-bold mt-5">Password</h4>
          <input type="password" className="mt-1 h-[40px] w-[350px] rounded-lg input p-2"/>
          <h4 className="font-bold mt-5">Confirm Password</h4>
          <input type="password" className="mt-1 h-[40px] w-[350px] rounded-lg input p-2"/>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
