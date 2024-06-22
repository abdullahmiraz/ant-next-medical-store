export interface Sale {
  id: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  order: {
    orderId: string;
    date: string;
    total: number;
    status: string;
    items: { name: string }[];
  };
}

export interface SearchTextState {
  id: string;
  item: string;
  customerName: string;
  orderId: string;
  orderDate: string;
  totalAmount: string;
  status: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  total: string;
}
