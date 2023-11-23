import styles from "./todo-card.module.css";
import { useState } from "react";
import { deleteTodo, updatePartially } from "../../_utils/api";
import { DisplayColors } from "../DisplayColors/DisplayColors";

export const TodoCard = ({ id, text, done, color, forceReload }) => {
  let [colorCard, setColorCard] = useState(color);
  let [changedText, setChangedText] = useState({ error: false, value: text });

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

  const handleChangeDone = (event) => {
    let check = event.target.checked;

    setIsDone(check);
    updatePartially(id, { done: check });
  };

  const handleChangeText = (event) => {
    let inputValue = event.target.value.replace(/[\r\n\v]+/g, "");
    if (inputValue === "") {
      setChangedText({ inputValue, error: true });
      alert("Please enter a text.");
    } else {
      setChangedText({ inputValue, error: false });
      updatePartially(id, { text: inputValue });
    }
  };

  const changeColorCard = (color) => {
    setColorCard(color);
    updatePartially(id, { color: color });
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
              placeholder="Enter task text..."
              defaultValue={text}
              onBlur={handleChangeText}
              required
            ></textarea>
            {changedText.error && (
              <p className={styles.errorMessage}>
                <span>*</span>Please enter a text.
              </p>
            )}

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
