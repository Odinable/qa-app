"use client";

import React, { useState } from "react";

const Cards = () => {
  const questions = [
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
      question:
        "What's the name of the syntax we use to describe a UI in React?",
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
      question:
        "What hook is used for managing state in a functional component?",
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

  const [selectedId, setselectedId] = useState("");

  const handleclick = (id: any) => {
    setselectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards p-6">
      {questions.map((questions) => (
        <div
          key={questions.id}
          // className={questions.id === selectedId ? "selected" : ""}
          style={{
            backgroundColor: questions.id === selectedId ? questions.color : "",
          }}
          onClick={() => handleclick(questions.id)}
        >
          <p>
            {questions.id === selectedId
              ? questions.answer
              : questions.question}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
