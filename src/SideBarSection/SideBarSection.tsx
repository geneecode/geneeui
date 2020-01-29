import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';

export interface SideBarSectionProps extends HTMLAttributes<HTMLUListElement> {
  label?: string;
  actions?: ReactNode;
}

export const SideBarSection = forwardRef<HTMLUListElement, SideBarSectionProps>(function(
  { label, actions, children },
  ref,
) {
  return (
    <ul ref={ref}>
      <li className="d-flex justify-content-between align-items-center">
        <span className="nav-label menu-section">{label}</span>
        <div className="nav-actions">
          <div className="d-flex mr-2">{actions}</div>
        </div>
      </li>
      {children}
    </ul>
  );
});

export default SideBarSection;
