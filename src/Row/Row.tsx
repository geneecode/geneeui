import React, { HTMLAttributes, FC } from 'react';
import clsx from 'clsx';

export interface RowProps extends HTMLAttributes<HTMLElement> { };

export const Row: FC<RowProps> = function ({ children, className, ...props }) {
  return (
    <section
      {...props}
      className={clsx('row', className)}
    >
      {children}
    </section>
  );
};

export default Row;
