import { useForm } from "react-hook-form";
import { CardColorSelector } from "../CardColorSelector/card-color-selector";
import { RemoveTodo } from "../RemoveTodo/remove-todo";
import styles from "./todo-card.module.css";
import { useState } from "react";

export const TodoCard = ({ id, text, color, done, setTodos, forceReload }) => {
  const [editingModeActive, setEditingModeActive] = useState(false);
  let [colorCard, setColorCard] = useState(color);
  const [responseError, setResponseError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleClickEditTodo = () => {
    return setEditingModeActive(!editingModeActive);
  };

  const onSumbit = (data) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status !== 200) {
          setResponseError(true);
        }
        return response.json();
      })
      .then((data) => {
        setSuccess(true);
        setTodos(data);
        forceReload();
      })
      .catch((error) => {
        console.log(error);
        setResponseError(true);
      });
  };

  if (responseError) {
    return (
      <div>
        <h1>ERROR</h1>
        <h3>Unable to edit todo.</h3>
      </div>
    );
  }

  if (success) {
    return (
      <div>
        <h1>SUCCESS</h1>
        <h3>Task edited successfully!</h3>
      </div>
    );
  }

  const classNames = {
    yellow: styles.yellowCard,
    green: styles.greenCard,
    pink: styles.pinkCard,
    purple: styles.purpleCard,
    blue: styles.blueCard,
    grey: styles.greyCard
  };

  const changeColorCard = (color) => {
    console.log(color);
    switch (color) {
      case "yellow":
        setColorCard(color);
        classNames["yellow"];
        break;
      case "green":
        setColorCard(color);
        classNames["green"];
        break;
      case "pink":
        setColorCard(color);
        classNames["pink"];
        break;
      case "purple":
        setColorCard(color);
        classNames["purple"];
        break;
      case "blue":
        setColorCard(color);
        classNames["blue"];
        break;
      case "grey":
        setColorCard(color);
        classNames["grey"];
        break;
    }
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={`${styles.todoCard} ${classNames[colorCard]}`}>
          <input
            type="checkbox"
            className={styles.checkMark}
            defaultChecked={done}
          ></input>
          <textarea
            className={`${styles.todoText} ${classNames[colorCard]}`}
            defaultValue={text}
          ></textarea>

          <nav className={styles.navTodoContainer}>
            <button className={styles.navTodoCardBtn}>
              <img src="src/assets/TodoColor.svg" alt="Change Color" />
            </button>
            <button
              className={styles.navTodoCardBtn}
              onClick={handleClickEditTodo}
            >
              <img src="src/assets/EditTodo.svg" alt="Edit" />
            </button>
            <RemoveTodo id={id} changeColorCard={changeColorCard} />
          </nav>

          <CardColorSelector
            id={id}
            setColorCard={setColorCard}
            onSumbit={onSumbit}
          />
        </div>
      </div>
      {editingModeActive && (
        <div className={styles.editContainer}>
          <form onSubmit={handleSubmit(onSumbit)}>
            <label htmlFor="text">Text *:</label>
            <input
              type="text"
              placeholder="Enter task text..."
              {...register("text", { required: "Text is required." })}
            />
            {errors.text && (
              <p className={styles.errorMessage}>{errors.text.message}</p>
            )}

            <button className={styles.createTodoBtn}>Edit Todo</button>
          </form>
        </div>
      )}
    </>
  );
};
