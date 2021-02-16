import React from 'react';
import { Placeholder } from '../../../../components/Placeholder/Placeholder';
import { OrdersGrid } from '../OrdersList/OrdersList';

export function OrdersListPlaceholder() {
  return (
    <OrdersGrid>
      <Placeholder height={180} />
      <Placeholder height={180} />
      <Placeholder height={180} />
      <Placeholder height={180} />
    </OrdersGrid>
  );
}
