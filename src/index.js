import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <>
      <Screen />
    </>
  );
}

const Screen = () => {
  const runCode = () => {
   
    document.getElementById('runner').innerHTML = document.getElementById('code').value;

  };
  useEffect(() => {});
  return (
    <>
      <div className="container">
        <textarea
          autoFocus
          type="text"
          className="dark editorComponent"
          name="code"
          id="code"
        />
        <button className="runButton" onClick={runCode}>
          Run 
        </button>
        <div id="runner" className="editorComponent"></div>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
