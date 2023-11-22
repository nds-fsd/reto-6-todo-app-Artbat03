const API_URL = "http://localhost:3001/todos";

export const updateTextTodo = async (id, text) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(text)
  });
  const data = response.json();
  return data;
};

export const updateDoneTodo = async (id, done) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(done)
  });
  const data = response.json();
  return data;
};

export const updateColorTodo = async (id, color) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(color)
  });
  const data = response.json();
  return data;
};

export const deleteTodo = async (id) => {
  const response = fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  const data = response.json();
  return data;
};
