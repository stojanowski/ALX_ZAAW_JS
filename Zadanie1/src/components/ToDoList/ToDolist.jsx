import React from "react";

import styles from "./ToDoList.module.css";

const ToDoList = (props) => {
  if (props.todoList.length === 0) {
    return null;
  }

  // const handleClick = (name) => {
  //   console.log(name);
  // };

  return (
    <div>
      <ul>
        {props.todoList.map((todo) => (
          <li className={styles.toDoList} key={todo.id}>
            <input type="checkbox" checked={todo.checked} onChange={() => props.onCheck(todo.id)} />
            <span className={todo.checked ? styles.done : ""}>{todo.name}</span>
            <button onClick={() => props.onRemove(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
