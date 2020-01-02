import React, { FC } from 'react';
import { BrowserRouter, Link } from "react-router-dom";

export interface BreadcrumbProps {
  /** 
* Provide array of objects to be rendered as breadcrumb
**/
  items: BreadcrumbItemProps[];
}

export interface BreadcrumbItemProps {
  to: string;
  label: string;
}

const Breadcrumb: FC<BreadcrumbProps> = function ({ items = [] }) {
  return (
    <BrowserRouter>
      {items.map(({ to, label }, index) => (
        <div key={index}>
          <Link to={to} className="breadcrumb-item">
            {label}
          </Link>
          {(items.length - 1) !== index && <span className="breadcrumb-separator">/</span>}
        </div>
      ))}
    </BrowserRouter>
  );
};

export default Breadcrumb;
