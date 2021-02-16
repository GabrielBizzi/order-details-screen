import React, { PropsWithChildren } from 'react';
import classes from './Container.module.scss';

export function Container({ children }: PropsWithChildren<{}>) {
  return <div className={classes.container}>{children}</div>;
}
