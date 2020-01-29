import React, { HTMLAttributes, FC } from 'react';
import clsx from 'clsx';

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalBody: FC<ModalBodyProps> = function({ className, ...props }) {
  return <section {...props} className={clsx('modal-body', className)} />;
};

export default ModalBody;
