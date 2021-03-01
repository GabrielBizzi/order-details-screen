import { API_URL } from '../env';

export interface OrderSummary {
  date: string;
  email: string;
  id: number;
  name: string;
  status: string;
  total: string;
}

type Item = {
  name: string;
  qty: number;
  price: string;
}

export interface OrderDetails {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    postcode: string;
  };
  total: number;
  status: 'Aguardando pagamento' | 'Pagamento aprovado' | 'Pedido em separação' | 'Pedido em transporte' | 'Pedido entregue';
  payment_method: 'Boleto bancário' | 'Cartão de Crédito';
  items: Item[];
  freight: {
    price: string;
    from: number;
    to: number;
  };
  date: string;
}

export async function getOrders(): Promise<OrderSummary[]> {
  return fetch(`${API_URL}/orders.json`).then(res => res.json());
}

export async function getOrderDetails(id: string): Promise<OrderDetails> {
  return fetch(`${API_URL}/${id}.json`).then(res => res.json());
}