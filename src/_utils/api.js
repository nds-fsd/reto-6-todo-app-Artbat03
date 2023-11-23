const API_URL = "http://localhost:3001/todos";

export const updatePartially = async (id, body) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
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
