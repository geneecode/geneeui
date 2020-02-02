import React, { FC } from 'react';

export interface LinkProps {
  to?: string;
  children?: string;
}

export const Link: FC<LinkProps> = function ({ to, children }) {
  return <a href={to}>{children}</a>;
};

export default Link;
