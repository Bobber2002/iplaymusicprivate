import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoIosFingerPrint } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "react-hook-media-query";
import "./Form.css";
//form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup
    .string()
    .required("username is required")
    .matches(/^[aA-zZA-y -]+$/, "message must have a word")
    .min(2, "the username should have to be 2 letter length")
    .max(20, "the username shoul not be more than 20 word"),
  password: yup
    .string()
    .required("password is required")

    .min(2, "the password should have to be 2 letter length"),
});

const Form = () => {
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    navigate("/walkthrough-1");
  };
  return (
    <div
      className={`login-form-page h-full pl-6 pr-6 pt-8 pb-8 max-w-md m-auto ${
        isDarkMode ? "bg-[#D70060] text-white " : "bg-white"
      }`}
    >
      <div className="login-header ">
        <h2 className="text-3xl">Log In</h2>
      </div>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
          <label className="font-bold pl-2 pb-3 block">Username</label>
          <div
            className={` flex justify-center items-center border-b-4 ${
              isDarkMode ? "border-white text-white" : "border-black text-black"
            } text-xl`}
          >
            <input
              {...register("username")}
              className="grow h-12 text-base pr-2 pl-2 bg-transparent"
              type="text"
              name="username"
              placeholder="Enter your username "
            />
            <FaRegUserCircle />
          </div>
          {errors.username?.message}
        </div>
        <div className="form-group mb-6">
          <label className="font-bold pl-2 pb-3 block">Password</label>
          <div
            className={` flex justify-center items-center border-b-4 ${
              isDarkMode ? "border-white text-white" : "border-black text-black"
            } text-xl`}
          >
            <input
              {...register("password")}
              className="grow h-12 text-base pr-2 pl-2 bg-transparent"
              type="password"
              name="password"
              placeholder="Enter your password "
            />
            <RiLockPasswordLine />
          </div>
          {errors.password?.message}
        </div>
        <button
          type="submit"
          className="login-button w-full border-4 border-black rounded-3xl p-2"
        >
          LOG IN
        </button>
      </form>
      <div className="login-touch flex pt-8 flex-col items-center">
        <button
          /*  onClick={() => navigate("/walkthrough-1")} */
          type="button"
          className="text-4xl bg-pink-500 w-16 h-16 text-white flex justify-center items-center rounded-full"
        >
          <IoIosFingerPrint />
        </button>
        <p
          className={`mt-2 ${
            isDarkMode ? "text-white" : "text-gray-500"
          } text-sm`}
        >
          One-Touch Login
        </p>
      </div>
    </div>
  );
};

export default Form;
