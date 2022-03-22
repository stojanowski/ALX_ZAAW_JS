import React from "react";

import styles from "./ToDoList.module.css";

const ToDoList = (props) => {
  if (props.todoList.length === 0) {
    return null;
  }
  return (
    <div>
      <ul>
        {props.todoList.map((todo, index) => (
          <li className={styles.toDoList} key={index}>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDoList;
