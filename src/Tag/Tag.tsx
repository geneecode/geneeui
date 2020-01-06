import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

export interface TagProps {
  className?: string;
  darkMode?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Tag: FC<TagProps> = function ({ className, darkMode = false, children, onClick }) {
  return (
    <div className={clsx(className, 'tag-item')} onClick={onClick}>
      {children}
    </div>
  );
};

export default Tag;
