import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface SideBarProps extends HTMLAttributes<HTMLDivElement> {
  onToggleDrawer?: () => void;
  open?: boolean;
}

export const SideBar = forwardRef<HTMLDivElement, SideBarProps>(function (
  { open = false, children, onToggleDrawer },
  ref,
) {
  return (
    <aside className="side-nav" ref={ref}>
      <span className="sidenav-btn" onClick={onToggleDrawer}>
        <div className="hamburger-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </span>

      <nav className={clsx({ SideNavActive: open })} data-simplebar>
        <div>{children}</div>
      </nav>
    </aside>
  );
});

export default SideBar;
