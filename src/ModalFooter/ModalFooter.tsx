import clsx from 'clsx';
import React, { FC, HTMLAttributes } from 'react';

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

const ModalFooter: FC<ModalFooterProps> = function({ className, ...props }) {
  return <section {...props} className={clsx('modal-footer', className)} />;
};

export default ModalFooter;
