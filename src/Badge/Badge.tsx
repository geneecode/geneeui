import React, { forwardRef, ReactNode, useMemo } from 'react';
import clsx from 'clsx';


export type BadgeVariant =
  'default' |
  'primary' |
  'secondary' |
  'info' |
  'success' |
  'warning' |
  'danger';

export interface BadgeProps {
  children?: ReactNode;
  className?: string;
  content?: number;
  max?: number;
  show?: boolean;
  variant?: BadgeVariant;
}


export const Badge = forwardRef<HTMLDivElement, BadgeProps>(function ({
  children,
  className,
  content,
  max,
  show = true,
  variant = "default"
}, ref) {
  const innerContent = useMemo(
    () => {
      let innerContent: ReactNode;

      if (content != null) {
        if (max != null && content > max) innerContent = `${max}+`;
        else innerContent = content;
      } else {
        innerContent = null;
      }

      return innerContent;
    },
    [content, max]
  );

  return (
    <div ref={ref} >
      {children}
      {
        show &&
        <span
          className={clsx(
            className,
            'badge',
            `badge-${variant}`,
            { 'badge-dot': !content }
          )}
        >
          {innerContent}
        </span >
      }
    </div>
  );
});

export default Badge;
