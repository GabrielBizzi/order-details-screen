import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { remove } from 'remove-accents';
import { Container } from '../../components/Container/Container';
import { getOrders, OrderSummary } from '../../core/orders';
import { OrdersList } from './components/OrdersList/OrdersList';
import { OrdersListPlaceholder } from './components/OrdersListPlaceholder/OrdersListPlaceholder';
import { Search } from './components/Search/Search';

export function Orders() {
  const [filtered, setFiltered] = useState<OrderSummary[]>([]);
  const { data, error, isLoading } = useQuery('orders', getOrders);

  const filterOrders = useCallback(
    (value: string) => {
      if (data == null) {
        return;
      }

      setFiltered(
        data.filter(order => {
          const regex = new RegExp(value);

          return (
            regex.test(String(order.id)) || regex.test(remove(order.status))
          );
        }),
      );
    },
    [data],
  );

  useEffect(() => {
    if (data) {
      setFiltered(data);
    }
  }, [data]);

  if (error) {
  }

  return (
    <Container>
      <Search onChange={filterOrders} />

      {error ? (
        <p>Error: {error}</p>
      ) : isLoading ? (
        <OrdersListPlaceholder />
      ) : (
        <OrdersList orders={filtered} />
      )}
    </Container>
  );
}
