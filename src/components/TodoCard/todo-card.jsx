import { useEffect, useState } from "react";
import { CardColorSelector } from "../CardColorSelector/card-color-selector";
import { RemoveTodo } from "../RemoveTodo/remove-todo";
import styles from "./todo-card.module.css";

export const TodoCard = ({ id, text, done, setTodos, forceReload }) => {
  return (
    <div className={`${styles.todoCard} ${styles.yellowCard}`}>
      <input
        type="checkbox"
        className={styles.checkMark}
        defaultChecked={done}
      ></input>
      <textarea
        className={`${styles.todoText} ${styles.yellowCard}`}
        defaultValue={text}
      ></textarea>

      <nav className={styles.navTodoContainer}>
        <button className={styles.changeColorBtn}>
          <img src="src/assets/TodoColor.svg" alt="Change Color" />
        </button>
        <button className={styles.changeColorBtn}>
          <img src="src/assets/EditTodo.svg" alt="Edit" />
        </button>
        <RemoveTodo id={id} setTodos={setTodos} forceReload={forceReload} />
      </nav>

      <CardColorSelector id={id} />
    </div>
  );
};
