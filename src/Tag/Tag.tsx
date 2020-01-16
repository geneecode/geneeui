import React, { ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

export interface TagProps {
  className?: string;
  darkMode?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(function({ className, children, onClick }, ref) {
  return (
    <div className={clsx(className, 'tag-item')} onClick={onClick} ref={ref}>
      {children}
    </div>
  );
});

export default Tag;
