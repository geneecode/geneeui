import clsx from 'clsx';
import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';
import Icon, { IconVariant } from '../Icon';

interface SideBarItemItemBaseProps extends HTMLAttributes<HTMLAnchorElement> {
  label: string;
  actions?: ReactNode;
  iconVariant?: IconVariant;
}

interface SideBarItemItemWithIconProps extends SideBarItemItemBaseProps {
  icon?: string;
  level: 1;
}

interface SideBarItemItemWithoutIconProps extends SideBarItemItemBaseProps {
  icon?: never;
  level: 2 | 3;
}

export type SideBarItemProps = SideBarItemItemWithIconProps | SideBarItemItemWithoutIconProps;

export const SideBarItem = forwardRef<HTMLLIElement, SideBarItemProps>(function(
  { icon, children, level, label, actions, iconVariant, ...props },
  ref,
) {
  return (
    <li ref={ref}>
      <span {...props} className="d-flex justify-content-between align-items-center nav-anchor">
        <div>
          {icon && <Icon variant={iconVariant}>{icon}</Icon>}
          <span
            className={clsx({
              'nav-label': level === 1,
              'nav-label-l2': level === 2,
              'nav-label-l3': level === 3,
            })}
          >
            {label}
          </span>
        </div>
        <div className="nav-actions">
          <div className="d-flex">{actions}</div>
        </div>
      </span>
      {children}
    </li>
  );
});

export default SideBarItem;
