import React from "react";

export default function OptionSelection({ QA, selectOption }) {
  return (
    <>
      <h1 className="heading">ChatGPT</h1>
      <div className="grid-main">
            <div
              className="grid-child"
              onClick={() => selectOption(QA.option)}
            >
              <h3>{QA.name}</h3>
              <p>{QA.description}</p>
            </div>
      </div>
    </>
  );
}
