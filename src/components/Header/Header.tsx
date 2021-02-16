import React from 'react';
import { Container } from '../Container/Container';
import classes from './Header.module.scss';

export function Header() {
  return (
    <>
      <header className={classes.header}>
        <Container>
          <div className={classes.inner}>
            <a href="/" className={classes.link}>
              Beyoung / Pedidos
            </a>
          </div>
        </Container>
      </header>
      <div className={classes.placeholder} />
    </>
  );
}
