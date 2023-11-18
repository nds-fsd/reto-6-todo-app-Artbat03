import { useEffect, useState } from "react";
import styles from "./todo-card.module.css";
import { CardColorSelector } from "../CardColorSelector/card-color-selector";
import { RemoveTodo } from "../RemoveTodo/remove-todo";

export const TodoCard = ({ id, text, color, done, setTodos, forceReload }) => {
  const updateTodo = () => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: {
        text: text,
        done: done,
        color: color
      }
    })
      .then((response) => {
        if (response.ok) {
          forceReload();
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`${styles.todoCard} ${styles[color]}`}>
      <input
        type="checkbox"
        className={styles.checkMark}
        defaultChecked={done}
      ></input>
      <textarea className={styles.todoText} defaultValue={text}></textarea>
      <CardColorSelector
        id={id}
        setTodos={setTodos}
        forceReload={forceReload}
      />
      <RemoveTodo id={id} setTodos={setTodos} forceReload={forceReload} />
    </div>
  );
};
