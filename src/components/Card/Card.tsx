import React, { PropsWithChildren } from 'react';
import classes from './Card.module.scss';

export function Card({ children }: PropsWithChildren<{}>) {
  return <div className={classes.card}>{children}</div>;
}
