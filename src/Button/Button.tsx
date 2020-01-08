import clsx from 'clsx';
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react';
import Icon from '../Icon';

export type ButtonVariant =
  'default' |
  'primary' |
  'secondary' |
  'info' |
  'success' |
  'warning' |
  'danger' |
  'white';


export type ButtonSize =
  'xs' |
  'sm' |
  'md' |
  'lg';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  /** 
  * To apply variant to Button 
  **/
  variant?: ButtonVariant;
  /** 
 * To apply size to Button 
 **/
  size?: ButtonSize;
  icon?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ({
  variant = 'default',
  size = 'md',
  className = '',
  icon = 'done',
  children,
  ...props
}, ref) {
  return (
    <button
      className={clsx(
        className,
        'btn',
        `btn-${variant}`,
        { [`btn-${size}`]: size },
        { 'btn-icon': icon }
      )}
      ref={ref}
      {...props}
    >
      {children}
      {icon && <Icon>{icon}</Icon>}
    </button >
  );
});


export default Button;
