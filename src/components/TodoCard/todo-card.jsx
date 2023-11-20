import { useForm } from "react-hook-form";
import { NavTodoCard } from "../NavTodoCard/nav-todo-card";
import styles from "./todo-card.module.css";
import { useState } from "react";

export const TodoCard = ({
  id,
  text,
  color,
  done,
  todos,
  setTodos,
  forceReload
}) => {
  let [colorCard, setColorCard] = useState(color);
  const [responseError, setResponseError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isDone, setIsDone] = useState(done);

  const { register, handleSubmit, setValue } = useForm();

  const reloadEditedTask = (todoList, identifier) => {
    setTodos((oldList) => {
      oldList = [...todoList];
      oldList.forEach((element) => {
        switch (element) {
          case text:
            return [...oldList, (oldList[identifier].text = element.text)];
          case color:
            return [...oldList, (oldList[identifier].color = element.color)];
          case done:
            return [...oldList, (oldList[identifier].done = element.done)];
        }
        forceReload();
      });
    });
  };

  const onSubmit = (data) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: data.text,
        done: data.done,
        color: data.color
      })
    })
      .then((response) => {
        if (response.status !== 200) {
          setResponseError(true);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setSuccess(true);
        setTodos(responseData);
        reloadEditedTask(todos, id);
      })
      .catch((error) => {
        console.log(error);
        setResponseError(true);
      });
  };

  if (responseError) {
    forceReload();
    return (
      <div>
        <h1>ERROR</h1>
        <h3>Unable to edit todo.</h3>
      </div>
    );
  }

  if (success) {
    forceReload();
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
    setColorCard(color);
    setValue("color", color);
  };

  return (
    <>
      <div className={styles.cardContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`${styles.todoCard} ${classNames[colorCard]}`}>
            <input
              type="checkbox"
              className={styles.checkMark}
              checked={isDone}
              {...register("done")}
              onClick={() => {
                setIsDone(!isDone);
                console.log("hi");
              }}
            ></input>
            <textarea
              className={`${styles.todoText} ${classNames[colorCard]}`}
              defaultValue={text}
              {...register("text")}
            ></textarea>

            <NavTodoCard id={id} />

            <div className={styles.colorsContainer}>
              <button
                className={`${styles.yellowBtn} ${styles.colorSelector}`}
                onClick={() => {
                  changeColorCard("yellow");
                }}
                {...register("color")}
              ></button>
              <button
                className={`${styles.greenBtn} ${styles.colorSelector}`}
                onClick={() => {
                  changeColorCard("green");
                }}
                {...register("color")}
              ></button>
              <button
                className={`${styles.pinkBtn} ${styles.colorSelector}`}
                onClick={() => {
                  changeColorCard("pink");
                }}
                {...register("color")}
              ></button>
              <button
                className={`${styles.purpleBtn} ${styles.colorSelector}`}
                onClick={() => {
                  changeColorCard("purple");
                }}
                {...register("color")}
              ></button>
              <button
                className={`${styles.blueBtn} ${styles.colorSelector}`}
                onClick={() => {
                  changeColorCard("blue");
                }}
                {...register("color")}
              ></button>
              <button
                className={`${styles.greyBtn} ${styles.colorSelector}`}
                onClick={() => {
                  changeColorCard("grey");
                }}
                {...register("color")}
              ></button>
            </div>
          </div>
        </form>
      </div>
      {/* {editingModeActive && <div className={styles.editContainer}></div>} */}
    </>
  );
};
