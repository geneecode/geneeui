import React, { ReactNode, forwardRef } from 'react';

export interface TooltipProps {
  children?: ReactNode;
  className?: string;
  tip?: string;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function ({ children, className, tip }, ref) {
  return (
    <div className={`tooltip ${className}`} ref={ref}>
      <abbr >
        {children}
      </abbr>
      <span>{tip}</span>
    </div>
  );
});

export default Tooltip;
