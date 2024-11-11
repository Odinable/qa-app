import React from "react";
import Button from "./Button";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";

const Signin = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="flex w-[80%] ">
        <div className="bg-white w-[50%] flex flex-col justify-center items-center text-center py-[100px] px-[50px] rounded-tl-3xl rounded-bl-3xl">
          <span className="self-center text-5xl font-semibold whitespace-nowrap text-black p-2">
            QUESTION APP
          </span>
          <p className="pb-4 font-bold text-blue-600">
            SIGN IN TO YOUR ACCOUNT
          </p>
          <div className="border-2 w-[60px] border-blue-600"></div>
          {/* SOCIAL ICONS */}

          <div className="flex gap-6 p-6">
            <a href="#" className="border-2 border-blue-400 rounded-full p-3">
              <FaFacebookF className="text-sm text-blue-600" />
            </a>
            <a href="" className="border-2 border-blue-400 rounded-full p-3">
              <FaInstagram className="text-sm text-blue-600" />
            </a>
            <a href="" className="border-2 border-blue-400 rounded-full p-3">
              <FaGoogle className="text-sm text-blue-600" />
            </a>
          </div>

          {/* END OF SOCIAL ICONS */}

          <p className="pb-4 text-sm text-gray-400">OR USE EMAIL TO LOGIN</p>

          <div className="flex flex-col w-full items-center gap-2">
            <input
              type="text"
              placeholder="ENTER USERNAME"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5"
            />
            <input
              type="password"
              placeholder="ENTER PASSWORD"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5"
            />
            <div className="w-4/6 mt-6">
              <Button name="SIGN IN" color="bg-blue-600" />
            </div>
          </div>
          <div className="flex gap-2 left-0">
            <input type="checkbox" /> <p className="text-sm">Remember Me</p>
          </div>
        </div>

        {/* SIGN UP RIGHT PAGE */}
        <div className="flex flex-col bg-blue-600 w-[50%] justify-center items-center text-center rounded-tr-3xl rounded-br-3xl">
          <span className="self-center text-5xl font-semibold whitespace-nowrap text-white p-6">
            JOIN US
          </span>
          <div className="border-2 w-[60px] border-white mb-6"></div>
          <p className="pb-4 text-white text-lg">
            Enter your personal information <br />
            to start a new journey
          </p>
          <a
            href="#"
            className="border-2 px-8 py-2 rounded-3xl text-white font-bold hover:bg-white hover:text-blue-600"
          >
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signin;
