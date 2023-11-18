import { useState } from "react";
import { CardColorSelector } from "../CardColorSelector/card-color-selector";
import { RemoveTodo } from "../RemoveTodo/remove-todo";
import styles from "./todo-card.module.css";

export const TodoCard = ({ id, text, color, done, setTodos, forceReload }) => {
  const [colorCard, setColorCard] = useState(color);
  let [showColors, setShowColors] = useState(false);

  const className = {
    yellow: styles.yellowCard,
    green: styles.greenCard,
    pink: styles.pinkCard,
    purple: styles.purpleCard,
    blue: styles.blueCard,
    grey: styles.greyCard
  };

  return (
    <div className={`${styles.todoCard} ${className[colorCard]}`}>
      <input
        type="checkbox"
        className={styles.checkMark}
        defaultChecked={done}
      ></input>
      <textarea
        className={`${styles.todoText} ${className[colorCard]}`}
        defaultValue={text}
      ></textarea>

      <RemoveTodo id={id} setTodos={setTodos} forceReload={forceReload} />

      <CardColorSelector
        id={id}
        colorCard={colorCard}
        setColorCard={setColorCard}
        setTodos={setTodos}
        forceReload={forceReload}
      />
    </div>
  );
};
