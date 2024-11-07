import React from "react";

const ConfirmationPopUp = ({ onYes, show, onNo }) => {
  if (!show) return null; // Correctly handle hiding the modal

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-blue-700 rounded-lg p-6 text-center shadow-lg w-96">
        <p className="text-2xl font-semibold mb-4 text-white">
          ARE YOU SURE YOU WANT TO <br />
          DELETE THIS QUESTION?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onYes}
            className="text-white bg-green-500 hover:bg-green-400 font-medium rounded-lg text-lg px-4 py-2"
          >
            YES
          </button>
          <button
            onClick={onNo}
            className="text-white bg-red-500 hover:bg-red-400 font-medium rounded-lg text-lg px-4 py-2"
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
