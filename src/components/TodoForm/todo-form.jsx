import { useState } from "react";
import { useForm } from "react-hook-form";

export const TodoForm = ({ setTodos, showForm, setShowForm }) => {
  const [responseError, setResponseError] = useState("");
  const [hideSuccess, setHideSuccess] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const hidePanel = () => {
    setHideSuccess(!hideSuccess);
  };

  let seconds = 5;
  let interval;
  const updateSecs = () => {
    seconds--;
    console.log(seconds);
    if (seconds <= 0) {
      clearInterval(interval);
      hidePanel();
      setShowForm();
      setSuccess(false);
    }
  };
  const countDownTimer = () => {
    interval = setInterval(function () {
      updateSecs();
    }, 1000);
  };

  const onSubmit = (data) => {
    console.log(data);
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
      })
      .catch((error) => {
        console.log(error);
        setResponseError(true);
      });
  };

  if (responseError)
    return (
      <div>
        <h1>ERROR 404</h1>
        <h3>Something went wrong!</h3>
      </div>
    );

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
    showForm && (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="text">Text *: </label>
        <input
          type="text"
          placeholder="Enter task text..."
          {...register("text", { required: "Text is required" })}
        />
        {errors.text && <p>{errors.text.message}</p>}
        <label htmlFor="fecha">Date: </label>
        <input type="fecha" placeholder="DD/MM/YYYY" {...register("fecha")} />
        <label htmlFor="done">Done: </label>
        <input
          type="checkbox"
          placeholder="Enter task text..."
          {...register("done")}
        />
        <button>Add</button>
      </form>
    )
  );
};
