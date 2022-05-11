import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosFingerPrint } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="login-form-page h-full pl-6 pr-6 pt-8 pb-8 max-w-md m-auto">
      <div className="login-header ">
        <h2 className="text-3xl">Log In</h2>
      </div>
      <div className="login-form" action="">
        <div className="form-group mb-6">
          <label className="font-bold pl-2 pb-3 block">Username</label>
          <div className=" flex justify-center items-center border-b-4 border-black text-xl">
            <input
              className="grow h-12 text-base pr-2 pl-2"
              type="text"
              name="username"
              placeholder="Enter your username "
            />
            <FaRegUserCircle />
          </div>
        </div>
        <div className="form-group mb-6">
          <label className="font-bold pl-2 pb-3 block">Password</label>
          <div className=" flex justify-center items-center border-b-4 border-black text-xl">
            <input
              className="grow h-12 text-base pr-2 pl-2"
              type="text"
              name="password"
              placeholder="Enter your password "
            />
            <RiLockPasswordLine />
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/onboarding-1");
          }}
          className="login-button w-full border-4 border-black rounded-3xl p-2"
        >
          LOG IN
        </button>
      </div>
      <div className="login-touch flex pt-8 flex-col items-center">
        <button
          onClick={() => {
            navigate("/onboarding-1");
          }}
          className="text-4xl bg-pink-500 w-16 h-16 text-white flex justify-center items-center rounded-full"
        >
          <IoIosFingerPrint />
        </button>
        <p className="mt-2 text-gray-500 text-sm">One-Touch Login</p>
      </div>
    </div>
  );
};

export default Form;
