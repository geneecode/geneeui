import clsx from 'clsx';
import React, { HTMLAttributes, FC } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  fluid?: boolean;
};

export const Container: FC<ContainerProps> = function ({ fluid, children, className, ...props }) {
  const type = fluid ? 'container-fluid' : 'container';

  return (
    <section
      {...props}
      className={clsx(type, className)}
    >
      {children}
    </section>
  );
};

export default Container;
