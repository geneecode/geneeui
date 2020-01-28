import React, { forwardRef, ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface AppBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  logo?: ReactNode;
  links?: ReactNode;
  controls?: ReactNode;
  userAvatar?: ReactNode;
  sideNavActive?: boolean;
}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(function (
  { className, logo, links, controls, userAvatar, sideNavActive = false, ...props },
  ref,
) {
  return (
    <header ref={ref} {...props} className={clsx('topbar topbar-fixed topbar-dark', className)}>
      <section className={clsx('topbar-left', sideNavActive && 'withSideNav')}>
        {logo}

        <div className="topbar-nav">{links}</div>
      </section>

      <section className="topbar-right">
        {controls}
        {userAvatar}
      </section>
    </header>
  );
});

export default AppBar;
