import React, { useMemo } from 'react';
import classes from './Placeholder.module.scss';

export function Placeholder({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  const style = useMemo(
    () => ({
      width,
      height,
    }),
    [width, height],
  );

  return <div className={classes.placeholder} style={style} />;
}
