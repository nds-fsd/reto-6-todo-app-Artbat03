import { RemoveTodo } from "../RemoveTodo/remove-todo";
import styles from "./nav-todo-card.module.css";

export const NavTodoCard = ({ id, showColors, setShowColors }) => {
  const handleClickShowColors = () => {
    setShowColors(!showColors);
  };
  return (
    <nav className={styles.navTodoContainer}>
      <button className={styles.navTodoCardBtn} onClick={handleClickShowColors}>
        <img src="src/assets/TodoColor.svg" alt="Change Color" />
      </button>
      <button type="submit" className={styles.navTodoCardBtn}>
        <img src="src/assets/EditTodo.svg" alt="Edit" />
      </button>
      <RemoveTodo id={id} />
    </nav>
  );
};
