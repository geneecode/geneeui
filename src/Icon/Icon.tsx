import clsx from 'clsx';
import React, { FC } from 'react';

export interface IconProps {
  title?: string;
  className?: string;
  children: string;
  onClick?: () => void;
}

export const Icon: FC<IconProps> = function ({
  title,
  className,
  children,
  onClick
}) {
  return (
    <i
      title={title}
      onClick={onClick}
      className={clsx(
        'material-icons',
        className
      )}
    >
      {children}
    </i>
  );
};

export default Icon;
