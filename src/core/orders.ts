import { API_URL } from '../env';
export interface OrderSummary {
  date: string;
  email: string;
  id: number;
  name: string;
  status: string;
  total: string;
}

export async function getOrders(): Promise<OrderSummary[]> {
  return fetch(`${API_URL}/orders.json`).then(res => res.json());
}
