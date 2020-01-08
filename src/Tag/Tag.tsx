import React, { FC, ReactNode, forwardRef } from 'react';
import clsx from 'clsx';

export interface TagProps {
  className?: string;
  darkMode?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(function ({ className, darkMode = false, children, onClick }, ref) {
  return (
    <div className={clsx(className, 'tag-item')} onClick={onClick} ref={ref}>
      {children}
    </div>
  );
});

export default Tag;