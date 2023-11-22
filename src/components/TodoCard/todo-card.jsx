// import { NavTodoCard } from "../NavTodoCard/nav-todo-card";
import styles from "./todo-card.module.css";
import { useEffect, useState } from "react";
import {
  updateTextTodo,
  updateDoneTodo,
  updateColorTodo,
  deleteTodo
} from "../../_utils/api";
import { DisplayColors } from "../DisplayColors/DisplayColors";

export const TodoCard = ({ id, text, done, color, forceReload }) => {
  let [colorCard, setColorCard] = useState(color);
  let [changedText, setChangedText] = useState(text);

  const [isDone, setIsDone] = useState(done);
  const [showColors, setShowColors] = useState(false);

  const classNames = {
    yellow: styles.yellowCard,
    green: styles.greenCard,
    pink: styles.pinkCard,
    purple: styles.purpleCard,
    blue: styles.blueCard,
    grey: styles.greyCard
  };

  const handleChangeDone = () => {
    setIsDone(!isDone);
    updateDoneTodo(id, { done: !isDone });
  };

  const validateTodoText = (textToValidate) => {
    const pattern = new RegExp(/^\s*$/);
    return pattern.test(textToValidate);
  };
  useEffect(() => {}, []);
  const handleChangeText = (event) => {
    let inputInnerHTML = event.target.innerHTML;
    let inputValue = event.target.value;
    if (inputValue || validateTodoText(inputValue)) {
      return;
    }
    inputInnerHTML = inputValue;
    setChangedText(inputInnerHTML);
    updateTextTodo(id, { text: inputInnerHTML });
  };

  const changeColorCard = (color) => {
    setColorCard(color);
    switch (color) {
      case "yellow":
        classNames["yellow"];
        break;
      case "green":
        classNames["green"];
        break;
      case "pink":
        classNames["pink"];
        break;
      case "purple":
        classNames["purple"];
        break;
      case "blue":
        classNames["blue"];
        break;
      case "grey":
        classNames["grey"];
        break;
    }
    updateColorTodo(id, { color: color });
  };

  const handleDeleteTodo = () => {
    deleteTodo(id)
      .then(() => {
        forceReload();
      })
      .catch((error) => {
        console.error(`Error deleting todo: ${error}`);
      });
  };

  const handleClickShowColors = () => {
    setShowColors(!showColors);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <form>
          <div className={`${styles.todoCard} ${classNames[colorCard]}`}>
            <input
              type="checkbox"
              className={styles.checkMark}
              checked={isDone}
              onChange={handleChangeDone}
            />
            <textarea
              className={`${styles.todoText} ${classNames[colorCard]}`}
              maxLength="44"
              value={changedText}
              onChange={(event) => {
                forceReload();
                console.log("adeu");
                handleChangeText(event);
              }}
            ></textarea>
            <div className={styles.navTodoContainer}>
              <button
                className={styles.navTodoCardBtn}
                type="button"
                onClick={handleClickShowColors}
              >
                <img src="src/assets/TodoColor.svg" alt="Change Color" />
              </button>
              <button
                className={styles.navTodoCardBtn}
                onClick={handleDeleteTodo}
              >
                <img src="src/assets/RemoveTodo.svg" alt="Remove todo" />
              </button>
            </div>
          </div>
          {showColors && (
            <DisplayColors
              changeColorCard={changeColorCard}
              handleClickShowColors={handleClickShowColors}
            />
          )}
        </form>
      </div>
    </>
  );
};
