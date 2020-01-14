import clsx from 'clsx';
import React, { forwardRef } from 'react';

export interface IconProps {
  title?: string;
  className?: string;
  children: string;
  onClick?: () => void;
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(function({ title, className, children, onClick }, ref) {
  return (
    <i title={title} onClick={onClick} className={clsx('material-icons', className)} ref={ref}>
      {children}
    </i>
  );
});

export default Icon;
