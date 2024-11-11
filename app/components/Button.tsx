import React from "react";

const Button = ({ name = "Add Card", color = "bg-blue-800" }) => {
  return (
    <button
      className={`${color} hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center w-full text-white`}
      type="submit"
    >
      {name}
    </button>
  );
};

export default Button;
