import { useState } from "react";
import { useEffect } from "react";
import { TodoCard } from "./components/TodoCard/todo-card";
import { TodoForm } from "./components/TodoForm/todo-form";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getTodos();
  }, [reload]);

  const forceReload = () => {
    setReload(!reload);
  };

  const getTodos = () => {
    fetch("http://localhost:3001/todos")
      .then((response) => {
        if (response.ok) {
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
    <>
      <section className={styles.todoAppContainer}>
        <div className={styles.createFormContainer}>
          <TodoForm setTodos={setTodos} />
        </div>
        <div className={styles.todosContainer}>
          {todos?.map((todo) => {
            return (
              <TodoCard
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                color={todo.color}
                todos={todos}
                forceReload={forceReload}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
