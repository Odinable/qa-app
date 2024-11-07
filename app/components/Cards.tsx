"use client";

import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import ConfirmationPopUp from "./ConfirmationPopUp";

const initialQuestions = [
  {
    id: "1",
    question: "What language is React based on?",
    answer: "JavaScript",
    color: "green",
  },
  {
    id: "2",
    question: "What are the building blocks of React apps?",
    answer: "Components",
    color: "brown",
  },
  {
    id: "3",
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
    color: "blue",
  },
  {
    id: "4",
    question: "How to pass data from parent to child components?",
    answer: "Props",
    color: "yellow",
  },
  {
    id: "5",
    question: "How to give components memory?",
    answer: "useState hook",
    color: "red",
  },
  {
    id: "6",
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
    color: "purple",
  },
  {
    id: "7",
    question: "What is the primary purpose of React?",
    answer: "UI",
    color: "green",
  },
  {
    id: "8",
    question: "What hook is used for managing state in a functional component?",
    answer: "useState",
    color: "brown",
  },
  {
    id: "9",
    question: "What is used to pass data between components in React?",
    answer: "Props",
    color: "blue",
  },
  {
    id: "10",
    question: "What is the syntax used to describe UI in React?",
    answer: "JSX",
    color: "yellow",
  },
  {
    id: "11",
    question: "What function is used to render a React component to the DOM?",
    answer: "ReactDOM.render",
    color: "red",
  },
  {
    id: "12",
    question:
      "What React hook is used for side effects in functional components?",
    answer: "useEffect",
    color: "purple",
  },
];

const Cards = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [selectedId, setSelectedId] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [newColor, setNewColor] = useState("");
  const [showModal, setshowModal] = useState(false);

  const handleclick = (id) => {
    setSelectedId(id !== selectedId ? id : "");
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
  };

  useEffect(() => {
    const stored = localStorage.getItem("questions") as string;
    setQuestions(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const handleDelete = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);

    setshowModal(false);
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
          className="text-white bg-blue-800 hover:bg-blue-6   00 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
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

        {questions.map((questions) => (
          <div
            className="card relative "
            key={questions.id}
            // className={questions.id === selectedId ? "selected" : ""}
            style={{
              backgroundColor:
                questions.id === selectedId ? questions.color : "",
            }}
            onClick={() => handleclick(questions.id)}
          >
            <div className="absolute top-4 right-4">
              <FaTrash
                className="text-white hover:text-black transition-all icon-bg iconlg "
                onClick={(e) => {
                  setshowModal(true);
                }}
              />
            </div>

            <p>
              {questions.id === selectedId
                ? questions.answer
                : questions.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
