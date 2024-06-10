const baseUrl = `http://localhost:3002`;

export const getInventoryDetails = async (): Promise<any[]> => {
  const res = await fetch(`${baseUrl}/inventory`, { cache: "no-store" });
  const medicineList = await res.json();
  return medicineList;
};

export const getAllUsersDetails = async (): Promise<any[]> => {
  const res = await fetch(`${baseUrl}/users`, { cache: "no-store" });
  const usersList = await res.json();
  return usersList;
};

export const getAllSalesDetails = async (): Promise<any[]> => {
  const res = await fetch(`${baseUrl}/sales`, { cache: "no-store" });
  const salesDetails = await res.json();
  return salesDetails;
};
