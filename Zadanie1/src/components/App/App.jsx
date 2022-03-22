import React, { useState, useEffect } from "react";
import ToDoList from "../ToDoList/ToDolist";

import styles from "./App.module.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [errSt, setError] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")) ?? []);
  }, []);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length < 3) {
      setError("Błąd ... musi być więcej niz 3 znaki");
      setIsErrorMessage(true);
      return;
    } else {
      setError("");
      setIsErrorMessage(false);
    }

    const newTodos = [
      ...todos,
      {
        name: inputValue,
        checked: false,
      },
    ];

    setTodos(newTodos);

    localStorage.setItem("todos", JSON.stringify(newTodos));

    // czyszczenie formularza
    setInputValue("");
  };

  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write todo"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button type="submit">send todo</button>
        <br />
        <label className={styles.error}>{errSt}</label>
        <br />
        <label className={styles.error}>{isErrorMessage ? "Błąd #2" : ""}</label>
      </form>
      <ToDoList todoList={todos} text="xx" />
    </div>
  );
};
export default App;
