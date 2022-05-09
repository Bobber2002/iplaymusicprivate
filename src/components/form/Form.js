import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
const Form = () => {
  return (
    <div>
      <h2>Log In</h2>
      <form className="login-form bg-white text-black mt-5" action="">
        <div className="form-group">
          <label>
            Username <br />
            <input
              className="border-b-4 outline-none mt-5 mb-5"
              type="text"
              name="username"
              placeholder="Enter your username "
            />
            <FaRegUserCircle />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password <br />
            <input
              className=" outline-none border-b-4 mt-5"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <RiLockPasswordLine />
          </label>
        </div>

        <br />
        <button className="w-44 login-button mt-6 border-2 rounded-3xl">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default Form;
