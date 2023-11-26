import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./todo-form.module.css";

export const TodoForm = ({ setTodos }) => {
  const [responseError, setResponseError] = useState("");
  const [hideSuccess, setHideSuccess] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const hidePanel = () => {
    if (success) {
      setHideSuccess(hideSuccess);
    } else {
      setHideSuccess(!hideSuccess);
    }
  };

  let seconds = 1;
  let interval;
  const updateSecs = () => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(interval);
      hidePanel();
      setSuccess(false);
    }
  };
  const countDownTimer = () => {
    interval = setInterval(function () {
      updateSecs();
    }, 1000);
  };

  const onSubmit = (data) => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.status !== 201) {
          setResponseError(true);
        }
        return response.json();
      })
      .then((data) => {
        setSuccess(true);
        setTodos(data);
        reset();
      })
      .catch((error) => {
        console.log(error);
        setResponseError(true);
      });
  };

  if (responseError) {
    countDownTimer();
    return (
      !hideSuccess && (
        <div>
          <h1>ERROR</h1>
          <h3>Something went wrong! We're redirecting...</h3>
        </div>
      )
    );
  }

  if (success) {
    countDownTimer();
    return (
      !hideSuccess && (
        <div>
          <h1>SUCCESS</h1>
          <h3>Task created successfully!</h3>
        </div>
      )
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
      <h2>CREATE A TASK</h2>
      <label htmlFor="text">Text *: </label>
      <input
        type="text"
        placeholder="Enter task text..."
        {...register("text", { required: "Text is required." })}
      />
      {errors.text && (
        <p className={styles.errorMessage}>{errors.text.message}</p>
      )}
      <label htmlFor="fecha">Due date: </label>
      <input
        type="date"
        {...register("fecha", { required: "Due date is required." })}
      />
      {errors.fecha && (
        <p className={styles.errorMessage}>{errors.fecha.message}</p>
      )}
      <label htmlFor="done">Done: </label>
      <input
        className={styles.checkMark}
        type="checkbox"
        {...register("done")}
      />
      <button className={styles.createTodoBtn}>
        <img
          className={styles.icon}
          src="src/assets/CreateTodo.svg"
          alt="Create Todo"
        />
        Create Todo
      </button>
    </form>
  );
};
