"use client";

import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import ConfirmationPopUp from "./ConfirmationPopUp";

const initialQuestions = [
  // Your initial questions array here
];

const Cards = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [undoQuestions, setUndoQuestions] = useState([]); // For undo functionality
  const [selectedId, setSelectedId] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newColor, setNewColor] = useState("");
  const [showModal, setshowModal] = useState(false);
  const [showUndo, setShowUndo] = useState(false); // Control undo button visibility

  const handleclick = (id) => {
    if (!showModal) {
      setSelectedId(id !== selectedId ? id : "");
    }
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    const newId = (questions.length + 1).toString();
    const newCard = {
      id: newId,
      question: newQuestion,
      answer: newAnswer,
      color: newColor || "gray", // Default color if none is selected
    };
    setQuestions([...questions, newCard]);
    setNewQuestion("");
    setNewAnswer("");
    setNewColor("");
    setShowUndo(false); // Hide undo after adding a new question
  };

  useEffect(() => {
    const stored = localStorage.getItem("questions");
    if (stored) setQuestions(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const handleDelete = (id) => {
    setUndoQuestions(questions); // Save current state for undo
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
    setshowModal(false);
    setShowUndo(true); // Show undo button after delete
  };

  const handleUndo = () => {
    setQuestions(undoQuestions); // Restore the questions list
    setShowUndo(false); // Hide the undo button after undo
  };

  return (
    <>
      <form
        onSubmit={handleAddQuestion}
        className="justify-center items-center flex flex-row p-4 gap-4"
      >
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 "
          type="text"
          placeholder="Enter question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          required
        />
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 "
          type="text"
          placeholder="Enter answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          required
        />
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/6 p-2.5 "
          type="text"
          placeholder="Enter color (e.g., red, blue)"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        <button
          className="text-white bg-blue-800 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          type="submit"
        >
          Add Card
        </button>
      </form>

      <div className="flashcards p-6 pt-2 ">
        <ConfirmationPopUp
          show={showModal}
          onYes={() => handleDelete(selectedId)}
          onNo={() => setshowModal(false)}
        />

        {questions.map((question) => (
          <div
            className="card relative"
            key={question.id}
            style={{
              backgroundColor: question.id === selectedId ? question.color : "",
            }}
            onClick={() => handleclick(question.id)}
          >
            <div className="absolute top-4 right-4">
              <FaTrash
                className="text-white hover:text-black transition-all icon-bg iconlg"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent click from affecting the card
                  setSelectedId(question.id);
                  setshowModal(true);
                }}
              />
            </div>

            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>

      {showUndo && (
        <button
          className="fixed bottom-4 right-4 text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleUndo}
        >
          Undo Delete
        </button>
      )}
    </>
  );
};

export default Cards;
