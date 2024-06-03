const baseUrl = `http://localhost:3002`;

export const getAllTodos = async () => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};
