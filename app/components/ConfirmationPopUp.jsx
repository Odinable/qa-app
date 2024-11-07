import React from "react";

const ConfirmationPopUp = ({ onYes, show, onNo }) => {
  if (!show) return null; // Correctly handle hiding the modal

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left p-5">
          <h3
            className="text-base font-semibold text-gray-900"
            id="modal-title"
          >
            UNDO ACTION
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to deletes? This question card will be
              permanently removed. This action can be undone.
            </p>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={onYes}
          >
            Delete
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={onNo}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
