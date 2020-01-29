import clsx from 'clsx';
import React, { forwardRef } from 'react';

export type IconVariant = 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'white';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

export interface IconProps {
  title?: string;
  className?: string;
  children: string;
  /**
   * To apply variant to Icon
   **/
  variant?: IconVariant;
  /**
   * To apply size to Icon
   **/
  size?: IconSize;
  onClick?: () => void;
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(function(
  { title, className, children, onClick, variant, size },
  ref,
) {
  return (
    <i
      title={title}
      onClick={onClick}
      className={clsx('material-icons', className, `icon-${variant}`, { [`icon-${size}`]: size })}
      ref={ref}
    >
      {children}
    </i>
  );
});

export default Icon;
