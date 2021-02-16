import React from 'react';
import { Card } from '../../../../components/Card/Card';
import classes from './Search.module.scss';

export function Search({
  onChange = () => {},
}: {
  onChange?: (value: string) => void;
}) {
  return (
    <div className={classes.box}>
      <Card>
        <label className={classes.container}>
          <span className={classes.label}>Número do pedido</span>
          <input
            className={classes.input}
            type="search"
            name="order_id"
            onChange={event => onChange(event.target.value)}
          />
        </label>
      </Card>
    </div>
  );
}
