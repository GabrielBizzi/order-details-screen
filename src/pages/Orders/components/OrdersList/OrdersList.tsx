import React, { PropsWithChildren } from 'react';
import { Card } from '../../../../components/Card/Card';
import { toCurrency } from '../../../../core/number';
import { OrderSummary } from '../../../../core/orders';
import classes from './OrdersList.module.scss';

export function OrdersGrid({ children }: PropsWithChildren<{}>) {
  return <div className={classes.container}>{children}</div>;
}

export function OrdersList({ orders }: { orders: OrderSummary[] }) {
  return (
    <OrdersGrid>
      {orders.map(order => (
        <Card key={order.id}>
          <div className={classes.details}>
            <span className={classes.label}>Número do pedido</span>
            <span>{order.id}</span>

            <span className={classes.label}>Data da compra</span>
            <span>{order.date}</span>

            <span className={classes.label}>Status</span>
            <span>{order.status}</span>

            <span className={classes.label}>Total</span>
            <span>{toCurrency(order.total)}</span>
          </div>

          <a href={`/order/${order.id}`} className={classes.button}>
            Ver completo
          </a>
        </Card>
      ))}
    </OrdersGrid>
  );
}
