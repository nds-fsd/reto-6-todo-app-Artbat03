import { useEffect } from "react";
import styles from "./card-color-selector.module.css";

export const CardColorSelector = ({
  id,
  colorCard,
  setColorCard,
  setTodos,
  forceReload
}) => {
  const handleClick = () => {
    setColorCard(colorCard);
  };

  useEffect(() => {
    // updateTodo();
  }, [colorCard]);

  const updateTodo = () => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        color: colorCard
      })
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
    <div className={styles.colorsContainer}>
      <button
        className={`${styles.yellowBtn} ${styles.colorSelector}`}
        onClick={handleClick("yellow")}
      ></button>
      <button
        className={`${styles.greenBtn} ${styles.colorSelector}`}
        onClick={handleClick("green")}
      ></button>
      <button
        className={`${styles.pinkBtn} ${styles.colorSelector}`}
        onClick={handleClick("pink")}
      ></button>
      <button
        className={`${styles.purpleBtn} ${styles.colorSelector}`}
        onClick={handleClick("purple")}
      ></button>
      <button
        className={`${styles.blueBtn} ${styles.colorSelector}`}
        onClick={handleClick("blue")}
      ></button>
      <button
        className={`${styles.greyBtn} ${styles.colorSelector}`}
        onClick={handleClick("grey")}
      ></button>
    </div>
  );
};
