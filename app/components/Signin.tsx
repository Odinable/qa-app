import React from "react";
import Button from "./Button";

const Signin = () => {
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="bg-white w-1/4 h-2/3 flex flex-col justify-center items-center text-center p-5">
        <p className="mb-8">SIGN UP FORM</p>
        <div className="flex flex-col w-full items-center gap-8">
          <input
            type="text"
            placeholder="ENTER USERNAME"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5"
          />
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/6 p-2.5"
          />
          <Button name="Sign Up" color="bg-blue-600" width="w-[295px]" />
        </div>
      </div>
      <div className="bg-blue-600 w-1/4 h-2/3 flex justify-center items-center text-center">
        SIGN UP
      </div>
    </div>
  );
};

export default Signin;
