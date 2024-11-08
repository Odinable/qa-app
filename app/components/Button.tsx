import React from "react";

const Button = ({
  name = "Add Card",
  color = "bg-blue-800",
  width = "w-auto",
}) => {
  return (
    <div>
      <button
        className={`${color} hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ${width} text-white`}
        type="submit"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
