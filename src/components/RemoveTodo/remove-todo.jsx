import styles from "./remove-todo.module.css";

export const RemoveTodo = ({ id, forceReload, setTodos }) => {
  const handleClick = () => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE"
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
    <button onClick={handleClick} className={styles.eliminateBtn}>
      <img
        className={styles.icon}
        src="src/assets/RemoveTodo.svg"
        alt="Remove todo"
      />
    </button>
  );
};
