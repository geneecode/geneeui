import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes } from 'react';

export type ColSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 'auto';

export type OffsetSize =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23;

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
  xl?: ColSize;
  size?: ColSize;
  offsetSm?: OffsetSize;
  offsetMd?: OffsetSize;
  offsetLg?: OffsetSize;
  offsetXl?: OffsetSize;
  offset?: OffsetSize;
  autoColumn?: boolean;
}

export const Col = forwardRef<HTMLDivElement, ColProps>(function(
  { sm, md, lg, xl, size, offsetSm, offsetMd, offsetLg, offsetXl, offset, autoColumn, children, className, ...props },
  ref,
) {
  const classes: string[] = [];

  if (size) classes.push(`col-${size}`);
  if (sm) classes.push(`col-sm-${sm}`);
  if (md) classes.push(`col-md-${md}`);
  if (lg) classes.push(`col-lg-${lg}`);
  if (xl) classes.push(`col-xl-${xl}`);
  if (offset) classes.push(`offset-${offset}`);
  if (offsetSm) classes.push(`offset-sm-${offsetSm}`);
  if (offsetMd) classes.push(`offset-md-${offsetMd}`);
  if (offsetLg) classes.push(`offset-lg-${offsetLg}`);
  if (offsetXl) classes.push(`offset-xl-${offsetXl}`);

  const col = autoColumn || classes.every(c => !c.startsWith('col-'));

  return (
    <div {...props} ref={ref} className={clsx(classes, className, { col })}>
      {children}
    </div>
  );
});

export default Col;
