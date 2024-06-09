const baseUrl = `http://localhost:3002`;

export const getAllTodos = async () => {
  const res = await fetch(`${baseUrl}/stock`, { cache: "no-store" });
  const medicineList = await res.json();
  return medicineList;
};
