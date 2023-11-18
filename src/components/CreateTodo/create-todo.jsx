import { useState } from "react";
import { TodoForm } from "../TodoForm/todo-form";

export const CreateTodo = ({ setTodos, setReload }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button onClick={handleClick}>Create Todo</button>
      {showForm && (
        <TodoForm
          setTodos={setTodos}
          showForm={showForm}
          setShowForm={handleClick}
        />
      )}
    </>
  );
};
