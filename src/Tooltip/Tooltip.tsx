import React, { ReactNode, forwardRef } from 'react';

export interface TooltipProps {
  children?: ReactNode;
  className?: string;
  tip?: string;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function ({ children, className, tip }, ref) {
  return (
    <div className={`tooltip ${className}`}>
      <abbr >
        {children}
      </abbr>
      <span>{tip}</span>
    </div>
  );
});

export default Tooltip;
