import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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

  const saveTodos = (todosToSave) => {
    setTodos(todosToSave);
    localStorage.setItem("todos", JSON.stringify(todosToSave));
  };

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
        id: uuidv4(),
        name: inputValue,
        checked: false,
      },
    ];

    saveTodos(newTodos);
    // czyszczenie formularza
    setInputValue("");
  };

  const handleRemove = (id) => {
    const filteredToDos = todos.filter((todo) => todo.id !== id);
    saveTodos(filteredToDos);
  };

  const handleChceck = (id) => {
    const indexToCh = todos.findIndex((todo) => todo.id === id);
    const changedToDos = [...todos];
    changedToDos[indexToCh].checked = !changedToDos[indexToCh].checked;

    saveTodos(changedToDos);
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
      <ToDoList todoList={todos} onRemove={handleRemove} onCheck={handleChceck} />
    </div>
  );
};
export default App;
