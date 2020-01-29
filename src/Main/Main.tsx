import clsx from 'clsx';
import React, { FC, HTMLAttributes } from 'react';

export interface MainProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  pushContent?: boolean;
}

export const Main: FC<MainProps> = function ({ children, className, pushContent, ...props }) {
  return (
    <main {...props} className={clsx(className, { pushContent: pushContent })}>
      {children}
    </main>
  );
};

export default Main;
