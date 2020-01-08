import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes } from 'react';

export interface RowProps extends HTMLAttributes<HTMLElement> { };

export const Row = forwardRef<HTMLDivElement, RowProps>(function ({ children, className, ...props }, ref) {
  return (
    <section
      {...props}
      ref={ref}
      className={clsx('row', className)}
    >
      {children}
    </section>
  );
});

export default Row;
