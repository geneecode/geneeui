import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  fluid?: boolean;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function ({ fluid, children, className, ...props }, ref) {
  const type = fluid ? 'container-fluid' : 'container';

  return (
    <section
      {...props}
      ref={ref}
      className={clsx(type, className)}
    >
      {children}
    </section>
  );
});

export default Container;
